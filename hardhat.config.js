require("@nomiclabs/hardhat-waffle");
// require("@nomiclabs/hardhat-etherscan");

require("dotenv").config();

module.exports = {
  solidity: "0.8.4",
  networks: {
    arbitrum: {
      url: process.env.L2_RPC,
      accounts: [process.env.PRIVKEY],
    },
    // etherscan: {
    //   apiKey: {
    //     arbitrumGoerli: "paK9xbpZGO7dCqMmnzS1ftDY6DXHWzxf",
    //   },
    // },
  },
};
