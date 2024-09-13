import { ethers } from "ethers";

import config from "@/config";

import GameAbis from "@/abis/Game.json";
import GameFrontendAbis from "@/abis/GameFrontend.json";
import UsdcAbis from "@/abis/USDC.json";
import BadgeAbis from "@/abis/Verified.json";

let provider = undefined;
// let signer = undefined;
let contracts = {
    Game: undefined,
    GameFrontend: undefined,
    Award: undefined,
    Badge: undefined,
};

async function attach() {
    if (!provider) {
        provider = new ethers.JsonRpcProvider(config.rpcUrl);
    }

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

/* View */

async function getGames(
    startNumber, endNumber
) {
    await attach();

    let response = await contracts.GameFrontend.getNfts(startNumber, endNumber);
    return response;
}

async function getStatus(
) {
    await attach();

    let response = await contracts.GameFrontend.gameStatus();
    return response;
}

async function getTopSolvers(
    topk
) {
    await attach();

    let response = await contracts.GameFrontend.getTopSolvers(topk);
    return response;
}

async function getPortfolioMaker(
    user
) {
    await attach();

    let response = await contracts.GameFrontend.getPortfolioMaker(user);
    return response;
}

async function getPortfolioSolver(
    user
) {
    await attach();

    let response = await contracts.GameFrontend.getPortfolioSolver(user);
    return response;
}

export {
    getGames,
    getStatus,
    getTopSolvers,
    getPortfolioMaker,
    getPortfolioSolver,
}