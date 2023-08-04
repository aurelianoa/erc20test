import { ethers } from "hardhat";
import { ERC20Token } from "../typechain-types";

let token: ERC20Token;

async function allow() {
    const ERC20TokenFactory = await ethers.getContractFactory("ERC20Token");
    token = await ERC20TokenFactory.attach("0x82e741aDA4454A4706e02aF67009cAB671A42448");
    const tx = await token.approve("0xf61406d197CDc5358c5b59CDC6ad55D3de30a784", ethers.parseEther("100.0"));
    console.log(tx);
}

async function main() {
    allow();
};

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});