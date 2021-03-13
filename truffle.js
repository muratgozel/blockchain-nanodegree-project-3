/*
const HDWalletProvider = require('truffle-hdwallet-provider');
const infuraKey = "b0b98afd9a004a0db472610eee644440";
const mnemonic = 'oval thing fiscal feature stem penalty wasp giant page harvest disorder wheat'
*/

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
    /*
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`),
      network_id: 4,
      gas: 3000000,
      gasPrice: 10000000000
    }
    */
  }
};
