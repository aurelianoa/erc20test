import { ethers } from "hardhat";
import { ERC20Token } from "../typechain-types";

let token: ERC20Token;

async function fund() {
    const ERC20TokenFactory = await ethers.getContractFactory("ERC20Token");
    token = await ERC20TokenFactory.attach("0x82e741aDA4454A4706e02aF67009cAB671A42448");
    const tx = await token.mint("0x6b4707c809dD7ae529a8527c0B1E4447bF80bEE8", ethers.parseEther("100.0"));
    console.log(tx);
}

async function main() {
    fund();
};

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});