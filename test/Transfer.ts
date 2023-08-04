import { expect } from "chai";
import { ethers } from "hardhat";
import { Signer } from "ethers";

import { ERC20Token, TransferTest } from "../typechain-types";

describe("Transfer", function () {
    let owner: Signer;
    let addr1: Signer;
    let addr2: Signer;
    let ERC20Token: ERC20Token;
    let TransferTest: TransferTest;
    let TransferTestAddress: string;
    let ERC20TokenAddress: string;
    let addr1Address: string;
    let addr2Address: string;

    beforeEach(async function () {
        [owner, addr1, addr2] = await ethers.getSigners();
        addr1Address = await addr1.getAddress();
        addr2Address = await addr2.getAddress();

        const ERC20TokenFactory = await ethers.getContractFactory("ERC20Token");
        ERC20Token = await ERC20TokenFactory.deploy();
        //await ERC20Token.deployed();
        ERC20TokenAddress = await ERC20Token.getAddress();

        const TransferTestFactory = await ethers.getContractFactory("TransferTest");
        TransferTest = await TransferTestFactory.deploy();
        //await TransferTest.deployed();
        TransferTestAddress = await TransferTest.getAddress();
    });
    it("Should transfer tokens from addr1 to addr2", async function () {
         /// mint tokens to addr1
        await ERC20Token.mint(addr1Address, 1000);
        expect(await ERC20Token.balanceOf(addr1Address)).to.equal(1000);
        expect(await ERC20Token.balanceOf(addr2Address)).to.equal(0);

        await ERC20Token.connect(addr1).approve(TransferTestAddress, 1000);
        await TransferTest.connect(addr1).transferToken(ERC20TokenAddress, addr2Address, 1000);
        expect(await ERC20Token.balanceOf(addr2Address)).to.equal(1000);
    });
    it("Should transfer tokens from addr1 to addr2 using transferEth", async function () {

       expect(await ethers.provider.getBalance(addr1Address)).to.greaterThan(ethers.parseEther("10.0"));
       await TransferTest.connect(addr1).transferEth(addr2Address, ethers.parseEther("10.0"), 
                {value: ethers.parseEther("10.0")});
       expect(await ethers.provider.getBalance(addr2Address)).to.equal(ethers.parseEther("10010.0"));
    });

});