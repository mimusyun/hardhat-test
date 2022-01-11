// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract SmartSurvey {

    constructor() {
        console.log("Initiatize Smart Survey");
    }

    function createSurvey() public pure returns (string memory) {
        return "Smart Survey Created";
    }

}