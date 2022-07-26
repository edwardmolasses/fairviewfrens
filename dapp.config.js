const FORTMATIC_KEY = process.env.NEXT_PUBLIC_FORTMATIC_KEY;
const RPC_URL = process.env.NEXT_PUBLIC_ALCHEMY_RPC_URL;
const APP_URL = 'fairviewfrens.com';
const APP_NAME = 'Fairview Frens';
const CONTACT_EMAIL = 'alachkovics@gmail.com';

const config = {
  title: 'Fairview Frens Dapp',
  description: 'The Fairview Frens NFT Project',
  contractAddress: '0x43BE5F11278cC37E2cD120c5c72Fe7fE2eDFF2A6',
  maxMintAmount: 1,
  presaleMaxMintAmount: 1,
  price: 0.00
}

const onboardOptions = {
  dappId: process.env.NEXT_PUBLIC_DAPP_ID,
  networkId: 4,
  darkMode: true,
  walletSelect: {
    wallets: [
      { walletName: "metamask", preferred: true },
      { walletName: "coinbase", preferred: true },
      {
        walletName: 'walletLink',
        preferred: true,
        rpcUrl: RPC_URL,
        appName: 'FairviewFrens Dapp'
      },
      {
        walletName: 'fortmatic',
        apiKey: FORTMATIC_KEY,
        preferred: true
      },
      { walletName: "trust", preferred: true, rpcUrl: RPC_URL },
      { walletName: "gnosis", preferred: true },
      { walletName: "authereum" },
      {
        walletName: 'trezor',
        appUrl: APP_URL,
        email: CONTACT_EMAIL,
        rpcUrl: RPC_URL
      },
      {
        walletName: 'ledger',
        rpcUrl: RPC_URL
      },
      {
        walletName: 'lattice',
        rpcUrl: RPC_URL,
        appName: APP_NAME
      },
      {
        walletName: 'keepkey',
        rpcUrl: RPC_URL
      },
      {
        walletName: 'keystone',
        rpcUrl: RPC_URL,
        appName: APP_NAME,
      }
    ]
  },
  walletCheck: [
    { checkName: 'derivationPath' },
    { checkName: 'accounts' },
    { checkName: 'connect' },
    { checkName: 'network' },
    { checkName: 'balance', minimumBalance: '1000000' }
  ]
}

export { config, onboardOptions }
