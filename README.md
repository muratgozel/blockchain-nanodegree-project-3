# Supply Chain Project
This repository contains an ethereum dapp that demonstrates a supply chain flow for the coffee industry. The coffee beans, which are harvested by **the farmers**, are sold to **the distributors**, and **the distributors** then distribute them to **the retailers**, and finally, **the consumer** purchases them.

## Contract Address
Contract has been deployed on rinkeby test network:
[0x61f6E2CcA26D016272F56525D20eA6740558265c](https://rinkeby.etherscan.io/address/0x61f6e2cca26d016272f56525d20ea6740558265c)

## Libraries
There are no libraries used.

## UML Diagrams
### Activity Diagram
![Activity diagram.](https://raw.githubusercontent.com/muratgozel/blockchain-nanodegree-project-3/1769167e0e6c2bdb0c79cee57ee17aa26368e744/uml/activity.png)

### Sequence Diagram
![Sequence diagram.](https://github.com/muratgozel/blockchain-nanodegree-project-3/blob/1769167e0e6c2bdb0c79cee57ee17aa26368e744/uml/sequence.png?raw=true)

### State Diagram
![State diagram.](https://github.com/muratgozel/blockchain-nanodegree-project-3/blob/1769167e0e6c2bdb0c79cee57ee17aa26368e744/uml/state.png?raw=true)

### Model Diagram
![Model diagram.](https://github.com/muratgozel/blockchain-nanodegree-project-3/blob/1769167e0e6c2bdb0c79cee57ee17aa26368e744/uml/model.png?raw=true)

## Docs
### Requirements
1. ganache-cli
2. truffle
3. metamask
4. infura account

### Installation
Install dependencies:
```
npm i -g truffle ganache-cli
```
Clone this repository:
```sh
git clone https://github.com/muratgozel/blockchain-nanodegree-project-3.git
```
Enter project directory and install the project:
```sh
cd blockchain-nanodegree-project-3
npm install
```
Finally, update `infuraKey` and `mnemonic` constants inside the `truffle.js` config file according to your own values.
1. `mnemonic` is the recovery text that metamask gave you on your initial metamask setup.
2. `infuraKey` can be obtained from infura.io site by creating a new project.

### Usage
To start developing and making changes on the contract, run:
```sh
truffle compile
```
and:
```sh
truffle test
```
to test your changes.

A user interface is also available and can be accessed at `http://localhost:3000` after you initiated the local server:
```sh
npm run dev
```

When you are done and ready to deploy, deploy to the rinkeby network:
```sh
truffle migrate --network rinkeby
```
