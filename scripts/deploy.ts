import { ethers } from "hardhat";

async function main() {
  //const ERC20TokenFactory = await ethers.getContractFactory("ERC20Token");
  //const ERC20Token = await ERC20TokenFactory.deploy();
  //await ERC20Token.waitForDeployment();
  //console.log("ERC20Token deployed to:", ERC20Token.target);

  const TransferTestFactory = await ethers.getContractFactory("TransferTest");
  const TransferTest = await TransferTestFactory.deploy();
  await TransferTest.waitForDeployment();
  console.log("TransferTest deployed to:", TransferTest.target);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
