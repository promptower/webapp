import {
    createWeb3Modal,
    defaultConfig,
    useWeb3Modal,
    useWalletInfo,
    useWeb3ModalAccount,
    useWeb3ModalProvider,
    useDisconnect,
} from "@web3modal/ethers/vue";

// import config from "@/config";

// 1. Get projectId from https://cloud.walletconnect.com
const projectId = "d0ec522cc8ac196893d24355f948e04f"; //TODO

// 2. Set chains
const mainnet = {
    chainId: 1112,
    name: "Wemix Testnet",
    currency: "WEMIX",
    explorerUrl: "https://testnet.wemixscan.com/",
    rpcUrl: "https://api.test.wemix.com",
};

// 3. Create your application's metadata object
const metadata = {
    name: "CTP",
    description: "Capture the Prompt",
    url: "https://promptower.github.io/webapp/",
    icons: [""], //TODO 
};

// 4. Create Ethers config
const ethersConfig = defaultConfig({
    /*Required*/
    metadata,

    /*Optional*/
    enableEIP6963: true, // true by default
    enableInjected: true, // true by default
    enableCoinbase: true, // true by default
    rpcUrl: mainnet.rpcUrl, // used for the Coinbase SDK
    defaultChainId: mainnet.chainId, // used for the Coinbase SDK
});

// 5. Create a AppKit instance
let modal;
if (!modal) {
    createWeb3Modal({
        ethersConfig,
        chains: [mainnet],
        projectId,

        /*Optional*/
        enableAnalytics: true, // Optional - defaults to your Cloud configuration
        enableSwaps: false,
        enableOnramp: false,

        featuredWalletIds: [
            'c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96', // metamsk
            '1ae92b26df02f0abca6304df07debccd18262fdf5fe82daa81593582dac9a369', // rainbow
        ],

        chainImages: {
            [mainnet.chainId]: '', //TODO
        }
    });
}

export {
    // wallet
    useWeb3Modal,
    useWalletInfo,
    useWeb3ModalAccount,
    useWeb3ModalProvider,
    useDisconnect,
}