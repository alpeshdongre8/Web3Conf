// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MessageBoard is ERC721Enumerable, Ownable {
    struct Message {
        address sender;
        string content;
        uint256 likes;
    }

    string public _baseTokenURI;
    uint256 public _tokenIdCounter;

    Message[] public messages;

    event MessageSent(address indexed sender, string content);
    event MessageLiked(uint256 indexed messageId, address indexed liker);

    constructor() ERC721("Quant", "QNT") {
        _baseTokenURI = "https://gateway.pinata.cloud/ipfs/QmZnj3VnLYwWFQwMdJz1B2B8ENsAUABM9SbSDnkWBrjrY4";
        // _tokenIdCounter = 1; // Start token IDs from 1
    }

    //For Base uri
    function setBaseTokenURI(string memory baseTokenURI) external onlyOwner {
        _baseTokenURI = baseTokenURI;
    }

    function _baseURI() internal view override returns (string memory) {
        return _baseTokenURI;
    }
    //Ends here

    function sendMessage(string memory _content) public {
        require(bytes(_content).length > 0, "Message content can't be empty");

        messages.push(
            Message({sender: msg.sender, content: _content, likes: 0})
        );

        emit MessageSent(msg.sender, _content);
    }

    function likeMessage(uint256 _messageId) public {
        require(_messageId < messages.length, "Invalid message ID");

        messages[_messageId].likes++;

        emit MessageLiked(_messageId, msg.sender);

        if (messages[_messageId].likes >= 10) {
            _mintToken(messages[_messageId].sender);
        }
    }

    function getMessageCount() public view returns (uint256) {
        return messages.length;
    }

    function getMessage(uint256 _messageId)
        public
        view
        returns (
            address sender,
            string memory content,
            uint256 likes
        )
    {
        require(_messageId < messages.length, "Invalid message ID");

        Message storage message = messages[_messageId];
        sender = message.sender;
        content = message.content;
        likes = message.likes;

        // Return statement for message details
        return (sender, content, likes);
    }

    // Internal function to mint an ERC-721 token
    function _mintToken(address _to) internal {
        uint256 tokenId = totalSupply();
        _mint(_to, tokenId);
    }
}
