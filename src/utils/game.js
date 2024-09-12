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

// TODO
const GAS_INFO = {
    gasPrice: "100000000001",
}

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

async function waitForTransaction(hash) {
    const maxTime = 10; // TODO
    for (let i = 0; i < maxTime; i++) {
        const receipt = await provider.getTransactionReceipt(hash);
        if (receipt) {
            if (receipt.status == 1) {
                return true
            } else {
                return false;
            }
        }
        await sleep(1000);
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
                await contracts.Game.getAddress(), ethers.MaxUint256,
                {
                    ...GAS_INFO,
                }
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
            {
                ...GAS_INFO,
            }
        );
        // await response.wait();
        await waitForTransaction(response.hash);
        return response;
    } catch (error) {
        console.error(error);
        return;
    }
}

export {
    approve,
    mint,
}
