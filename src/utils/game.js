import { ethers } from "ethers";

import config from "@/config";

import GameAbis from "@/abis/Game.json";
import GameFrontendAbis from "@/abis/GameFrontend.json";
import UsdcAbis from "@/abis/USDC.json";
import BadgeAbis from "@/abis/Verified.json";

let provider = undefined;
let signer = undefined;
let contracts = {
    Game: undefined,
    GameFrontend: undefined,
    Award: undefined,
    Badge: undefined,
};

async function attach(walletProvider) {
    if (!provider) {
        try {
            provider = new ethers.BrowserProvider(walletProvider);
        } catch (error) {
            console.log(error);
            provider = new ethers.JsonRpcProvider(config.rpcUrl);
        }
    }

    console.log(provider);
    signer = await provider.getSigner();

    if (!contracts.Game) {
        contracts.Game = new ethers.Contract(config.contracts.Game, GameAbis.abi, provider);
    }
    if (!contracts.GameFrontend) {
        contracts.GameFrontend = new ethers.Contract(config.contracts.GameFrontend, GameFrontendAbis.abi, provider);
    }
    if (!contracts.Award) {
        contracts.Award = new ethers.Contract(config.contracts.Award, UsdcAbis.abi, provider);
    }
    if (!contracts.Badge) {
        contracts.Badge = new ethers.Contract(config.contracts.Badge, BadgeAbis.abi, provider);
    }
}

function sleep(ms) {
    return new Promise((r) => setTimeout(r, ms));
}

async function waitForTransaction(hash, time = 2000, maxTime = 10) {
    for (let i = 0; i < maxTime; i++) {
        const receipt = await provider.getTransactionReceipt(hash);
        if (receipt) {
            if (receipt.status === 1) {
                return true;
            } else {
                return false;
            }
        }
        await sleep(time);
    }
    return false;
}

/* Functions */

async function approve(
    walletProvider,
    amount
) {
    await attach(walletProvider);

    let allowance = await contracts.Award.connect(signer).allowance(
        signer.address,
        await contracts.Game.getAddress()
    );
    console.log(allowance);

    if (allowance < amount) {
        try {
            let response = await contracts.Award.connect(signer).approve(
                await contracts.Game.getAddress(), ethers.MaxUint256
            );
            // await response.wait();
            await waitForTransaction(response.hash);
            return response;
        } catch (error) {
            console.error(error);
            return;
        }
    }
}

async function mint(
    walletProvider,
    recipient, metadata, awards
) {
    await attach(walletProvider);

    console.log(recipient)
    console.log(metadata)
    console.log(awards)

    try {
        let response = await contracts.Game.connect(signer).mint(
            recipient, metadata, awards,
        );
        // await response.wait();
        await waitForTransaction(response.hash);
        return response;
    } catch (error) {
        console.error(error);
        return;
    }
}

async function solve(
    walletProvider,
    tokenId, secret
) {
    await attach(walletProvider);

    console.log("tokenId", tokenId);
    const tokenIdHex = ethers.zeroPadValue("0x" + (tokenId).toString(16), 32);
    console.log("tokenIdHex:", tokenIdHex);

    const secretHash = ethers.keccak256(ethers.toUtf8Bytes(`${secret}`));
    let sig;
    {
        const coder = ethers.AbiCoder.defaultAbiCoder();
        const packedData = coder.encode(
            [
                "bytes32",
                "bytes32",
            ],
            [
                tokenIdHex,
                secretHash
            ]
        );
        sig = await signer.signMessage(
            ethers.getBytes(ethers.keccak256(packedData))
        );
    }

    // console.log(tokenId.toString());
    // console.log(secretHash);
    // console.log(signer.address);
    // console.log(sig);

    const data = { tokenId: tokenId.toString(), secretHash, user: signer.address, sig };

    const url =
        "https://ib9fm6yjjg.execute-api.ap-northeast-2.amazonaws.com/ctp/ctp/submit-secret";

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();
        console.log(result.status);
        console.log(result.hash);
        if (result.hash) {
            await waitForTransaction(result.hash, 5000);
        }

        return {
            status: result.status,
            hash: result.hash,
        }
    } catch (error) {
        console.error("Error:", error);
        return {
            status: false,
            hash: "",
        }
    }

    // try {
    //     let response = await contracts.Game.connect(signer).solved(
    //         tokenId.toString(), secretHash, signer.address, sig,
    //     );
    //     // await response.wait();
    //     await waitForTransaction(response.hash);
    //     return response;
    // } catch (error) {
    //     console.error(error);
    //     return;
    // }
}

export {
    approve,
    mint,
    solve,
}
