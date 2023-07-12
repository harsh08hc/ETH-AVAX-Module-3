/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    // Define your network settings here
    // For example, you can use the local Hardhat network for development
    hardhat: {},
    // Or connect to a public network like Ethereum Mainnet
    // mainnet: {
    //   url: "https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID",
    //   accounts: [PRIVATE_KEY],
    // },
  },
};
