const HDWalletProvider = require('truffle-hdwallet-provider');
const infuraKey = "5b08c8f20f2742488ee9e845f24cf9d8";
const mnemonic = 'two video person mansion trouble position buyer hundred inherit possible wink base'

module.exports = {
  compilers: {
    solc: {
      version: "^0.4.23"
    }
  },
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`),
      network_id: 4,
      gas: 3000000,
      gasPrice: 10000000000
    }
  }
};
