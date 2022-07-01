// Start with pragma
pragma solidity >=0.7.3;

// Main building block
contract Token {
    // String type variables to identify the token
    // the 'public' modifier makes a variable readable from outside the contract
    string public name = "TheCoinhubToken";
    string public symbol = "TCHT";

    // The fixed amount of tokens
    uint256 public totalSupply = 1000000;

    // An address type varaible used to store eth accounts
    address public owner;

    // A mapping is a key-value pair. Here we store each account balance.
    mapping(address => uint256) balances;

    // Initialize contract
    constructor() {
        // Total supply is assigned to transaction sender
        // Aka account that is deploying the contract
        balances[msg.sender] = totalSupply;
        owner = msg.sender;
    }

    // Function to transfer tokens
    function transfer(address to, uint256 amount ) external {
        // Check if transaction sender has enough coins first
        require(balances[msg.sender] >= amount, "Not enough tokens");

        // subtract from sender add to recipient
        balances[msg.sender] -= amount;
        balances[to] += amount;
    }

    // Read only view balance of a given account
    function balanceOf(address account) external view returns (uint256) {
        return balances[account];
    }
}