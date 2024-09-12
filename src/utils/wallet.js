import {
    createWeb3Modal,
    defaultConfig,
    useWeb3Modal,
    useWalletInfo,
    useWeb3ModalAccount,
    useWeb3ModalProvider,
    useDisconnect,
} from "@web3modal/ethers/vue";

import config from "@/config";

// 1. Get projectId from https://cloud.walletconnect.com
const projectId = config.projectId;

// 2. Set chains
const mainnet = {
    chainId: config.chainId,
    name: config.chainName,
    currency: config.currency,
    explorerUrl: config.explorerUrl,
    rpcUrl: config.rpcUrl,
};

// 3. Create your application's metadata object
const metadata = {
    name: config.projectName,
    description: config.projectDescription,
    url: config.projectUrl,
    icons: [config.logoUrl]
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
            [mainnet.chainId]: config.chainImageUrl,
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