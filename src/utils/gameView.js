import { ethers } from "ethers";

import config from "@/config";

import GameAbis from "@/abis/Game.json";
import UsdcAbis from "@/abis/USDC.json";
import BadgeAbis from "@/abis/Verified.json";

let provider = undefined;
// let signer = undefined;
let contracts = {
    Game: undefined,
    Award: undefined,
    Badge: undefined,
};

// TODO
const GAS_INFO = {
    gasPrice: "100000000001",
}

async function attach() {
    if (!provider) {
        provider = new ethers.JsonRpcProvider(config.rpcUrl);
    }

    if (!contracts.Game) {
        contracts.Game = new ethers.Contract(config.contracts.Game, GameAbis.abi, provider);
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

/* View */

async function getGames(
    startNumber, endNumber
) {
    await attach();

    let response = await contracts.Game.getNfts(startNumber, endNumber);
    return response;
}

async function getStatus(
) {
    await attach();

    let response = await contracts.Game.gameStatus();
    return response;
}

async function getTopSolvers(
    topk
) {
    await attach();

    let response = await contracts.Game.getTopSolvers(topk);
    return response;
}

async function getPortfolioMaker(
    user
) {
    await attach();

    let response = await contracts.Game.getPortfolioMaker(user);
    return response;
}

async function getPortfolioSolver(
    user
) {
    await attach();

    let response = await contracts.Game.getPortfolioSolver(user);
    return response;
}

export {
    getGames,
    getStatus,
    getTopSolvers,
    getPortfolioMaker,
    getPortfolioSolver,
}