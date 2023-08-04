// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import { ERC20 } from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ERC20Token is ERC20 {

    constructor() ERC20("ERC20token", "ERC20") {}

    /// mint token to address
    /// @param _to address
    /// @param _amount uint256
    function mint(address _to, uint256 _amount) external {
        _mint(_to, _amount);
    }
}