# MyToken Smart Contract

The `MyToken` smart contract is an ERC-20 compatible token contract that allows the creation, minting, burning, and transferring of tokens. It provides basic token functionality and can be deployed on a local HardHat network for testing and development purposes.

## Features

- Creation of a token with a specified name, symbol, and initial supply.
- Ownership transfer of the contract.
- Minting new tokens by the contract owner.
- Burning tokens by any token holder.
- Transfer of tokens between accounts.
- Transfer of tokens from one account to another by an authorized address (owner or sender).

## Getting Started

To use the `MyToken` contract, follow these steps:

1. Install the necessary development dependencies:
   - [HardHat](https://hardhat.org) - A development environment for Ethereum that facilitates compiling, testing, and deploying smart contracts.

2. Clone the repository and navigate to the project directory.

3. Update the contract parameters:
   - Modify the constructor arguments in the `MyToken` contract to set the desired token name, symbol, and owner address.

4. Compile the smart contract:

5. Deploy the contract on a local HardHat network:

6. Interact with the contract using Remix or other Ethereum development tools:
- Connect to the deployed contract address.
- Use the provided functions to mint, burn, and transfer tokens.

## Smart Contract Details

The `MyToken` contract contains the following important functions and events:

### Constructor

- `constructor(string memory _name, string memory _symbol, address _owner)`: Initializes the contract by setting the total supply, token balances, name, symbol, and owner.

### External Functions

- `setOwner(address newOwner)`: Allows the contract owner to transfer ownership to a new address.

### Public Functions

- `mint(address to, uint256 amount)`: Allows the contract owner to mint new tokens and assign them to the specified address.
- `burn(uint256 amount)`: Allows any token holder to burn a specific amount of their tokens.
- `transfer(address to, uint256 amount)`: Allows token holders to transfer a specific amount of tokens to another address.
- `transferFrom(address from, address to, uint256 amount)`: Allows authorized addresses (owner or sender) to transfer tokens from one address to another.

### Events

- `Transfer(address indexed from, address indexed to, uint256 amount)`: Emitted when tokens are transferred between addresses.
- `Mint(address indexed to, uint256 amount)`: Emitted when new tokens are minted.
- `Burn(address indexed from, uint256 amount)`: Emitted when tokens are burned.

## License

This smart contract is available under the [MIT License](LICENSE).
