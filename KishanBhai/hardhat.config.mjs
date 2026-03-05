import "@nomicfoundation/hardhat-ethers";

/** @type import('hardhat/config').HardhatUserConfig */
export default {
  solidity: "0.8.19",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545",
      chainId: 31337,
    },
    hardhat: {
      chainId: 31337,
    }
  },
  paths: {
    sources: "./blockchain/seed-to-shelf-flow-main/smart-contracts/contracts",
    tests: "./blockchain/seed-to-shelf-flow-main/smart-contracts/test",
    cache: "./blockchain/seed-to-shelf-flow-main/smart-contracts/cache",
    artifacts: "./blockchain/seed-to-shelf-flow-main/smart-contracts/artifacts"
  }
};
