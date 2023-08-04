// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

interface IERC20 {
    function allowance(address owner, address spender) external view returns (uint256);
    function transferFrom(address from, address to, uint256 value) external returns (bool);
}

contract TransferTest {
     
    /// transfer eth to address
    /// @param _to address
    /// @param _amount uint256
    function transferEth(address payable _to, uint256 _amount) external payable {
        require(_amount <= address(this).balance, "Insufficient balance");
        _to.transfer(_amount);
    }

    /// tranfer erc20 token using the erc20 address
    /// @param _token address
    /// @param _to address
    /// @param _amount uint256
    function transferToken(address _token, address _to, uint256 _amount) external {
        IERC20 token = IERC20(_token);
        require(token.allowance(msg.sender, address(this)) >= _amount, "Not enough allowance");
        token.transferFrom(msg.sender, _to, _amount);
    }
}