import * as dotenv from "dotenv";
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.19",
    settings: {
      optimizer: {
        enabled: true,
        runs: 50000,
      },
    },
  },
  networks: {
    goerli: {
      url: process.env.GOERLI_URL || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
    sepolia: {
      url: process.env.SEPOLIA_URL || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
    linea: {
      url: process.env.LINEA_TESTNET_GOERLI || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    }
  },
  etherscan: {
    apiKey: {
      linea: process.env.LINEASCAN_API_KEY || "",
    },
    customChains: [
      {
        network: "linea",
        chainId: 59140,
        urls: {
          apiURL: "https://goerli.lineascan.build/apis#contracts",
          browserURL: "https://goerli.lineascan.build/"
        }
      }
    ]
  },
};

export default config;
