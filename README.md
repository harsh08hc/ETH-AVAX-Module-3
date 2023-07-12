# MyToken Contract

This is a Solidity smart contract for a token called MyToken. The contract implements basic functionalities of a standard ERC-20 token, including token transfers, approvals, and supply management.

## Contract Details

- **Name**: MyToken
- **Symbol**: (Symbol of the token, e.g., MYT)
- **Total Supply**: (Total supply of the token)

The contract includes the following features:

- **Constructor**: Initializes the contract with the token name, symbol, and initial supply. The deployer of the contract becomes the owner and receives the entire initial supply.

- **Token Transfer**: Allows users to transfer tokens from their own address to another address.

- **Approve**: Allows users to approve another address to spend a specified amount of tokens on their behalf.

- **Transfer From**: Allows the approved address to transfer tokens from one address to another.

- **Burn**: Allows the token owner to burn a specific amount of tokens from their own address, reducing the total supply.

- **Mint**: Allows the contract owner to mint new tokens and add them to a specific address, increasing the total supply.

## Usage

To interact with the MyToken contract, you can use any Ethereum-compatible client or development environment that supports Solidity smart contracts.

Here are the steps to get started:

1. Deploy the contract: Deploy the contract to an Ethereum network of your choice, providing the name, symbol, and initial supply as constructor arguments.

2. Interact with the contract: Once deployed, you can use the following functions:

    - **Transfer**: Call the `transfer` function, providing the recipient's address and the amount of tokens to transfer.
    
    - **Approve**: Call the `approve` function, providing the spender's address and the amount of tokens to approve.
    
    - **Transfer From**: The approved spender can call the `transferFrom` function, providing the token owner's address, the recipient's address, and the amount of tokens to transfer.
    
    - **Burn**: The token owner can call the `burn` function, providing the amount of tokens to burn from their own address.
    
    - **Mint**: The contract owner (deployer) can call the `mint` function, providing the recipient's address and the amount of tokens to mint and add to the supply.

Please note that the contract includes a modifier `onlyOwner`, which restricts access to certain functions to only the contract owner.

Remember to comply with the SPDX license identifier (MIT) specified at the beginning of the contract.

## License

The MyToken contract is licensed under the MIT License. You can find the full license text in the [LICENSE](LICENSE) file.
