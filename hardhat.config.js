require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.12",
  paths: {
    artifacts: './src/artifacts',
  },
  networks: {
    hardhat: {
      chainId: 1337
    },
    triton: {
      url: "https://triton.api.nautchain.xyz",
      chainId: 91002,
      accounts: ["Your private key here"]
    }
  }
};
