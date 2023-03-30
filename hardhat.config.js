/**
* @type import('hardhat/config').HardhatUserConfig
*/

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
require("./scripts/deploy.js");
require("./scripts/mint.js");

const { ALCHEMY_KEY, ACCOUNT_PRIVATE_KEY } = process.env;

module.exports = {
   solidity: "0.8.1",
   defaultNetwork: "sepolia",
   networks: {
    hardhat: {},
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/Y9hFbccjAPUgZ_1SvHsH6TCu5OMBjAj_",
      accounts: [`0x${ACCOUNT_PRIVATE_KEY}`]
    }
  },
}
