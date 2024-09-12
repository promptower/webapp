import contracts from "./wemixtestnet/contracts.json";

const projectId = "d0ec522cc8ac196893d24355f948e04f"; //TODO env

const projectName = "CTP";
const projectDescription = "Capture the Prompt";
const projectUrl = "https://promptower.github.io/webapp/";
const logoUrl = "https://raw.githubusercontent.com/promptower/webapp/main/src/assets/logo.svg";

//TODO
const chainId = 1112;
const chainName = "Wemix Testnet";
const currency = "WEMIX";
const explorerUrl = "https://testnet.wemixscan.com/";
const rpcUrl = "https://api.test.wemix.com";
const chainImageUrl = ""; 

const config = {
    projectId,
    projectName,
    projectDescription,
    projectUrl,
    logoUrl,
    chainId,
    chainName,
    currency,
    explorerUrl,
    rpcUrl,
    chainImageUrl,
    contracts,
};

export default config;
