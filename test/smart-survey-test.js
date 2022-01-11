const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("SmartSurvey", function () {
  it("Should return the new greeting once it's changed", async function () {
    const SmartSurvey = await ethers.getContractFactory("SmartSurvey");
    const smartSurvey = await SmartSurvey.deploy();
    await smartSurvey.deployed();

    expect(await smartSurvey.createSurvey()).to.equal("Smart Survey Created");
  });
});
