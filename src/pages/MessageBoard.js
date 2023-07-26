import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import abi from "./MessageBoard.json";
import "./MessageBoard.css";

const contractABI = abi.abi;

export const MessageBoard = () => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    const [web3Provider, setWeb3Provider] = useState(null);
    const [contract, setContract] = useState(null);
    const [account, setAccount] = useState(null);
    const [messageInput, setMessageInput] = useState("");
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const initWeb3 = async () => {
            try {
                // Detect Ethereum provider (MetaMask)
                if (window.ethereum) {
                    console.log(contractABI);
                    const provider = new ethers.BrowserProvider(window.ethereum);
                    const signer = await provider.getSigner();
                    console.log(signer);
                    const cont = new ethers.Contract("0xb5b40188A0d79b024356E394868EB2A468c1b72E", abi, signer);
                    setContract(cont);
                    // const provider = new ethers.providers.Web3Provider(window.ethereum);
                    // setWeb3Provider(provider);

                    // // Request access to user's accounts
                    // const accounts = await provider.send("eth_requestAccounts", []);
                    // setAccount(accounts[0]);

                    // // Create contract instance
                    // const contractInstance = new ethers.Contract(contractAddress, contractABI, provider.getSigner());
                    // setContract(contractInstance);

                    // // Listen for changes in account or network
                    // window.ethereum.on("accountsChanged", (accounts) => setAccount(accounts[0]));
                    // window.ethereum.on("chainChanged", () => window.location.reload());
                } else {
                    alert("Please install MetaMask or use a Web3-enabled browser.");
                }
            } catch (error) {
                console.error("Error initializing web3:", error);
            }
        };

        initWeb3();
    }, []);

    const sendMessage = async () => {
        try {
            if (contract && account && messageInput) {
                const tx = await contract.sendMessage(messageInput);
                await tx.wait(); // Wait for the transaction to be mined
                setMessageInput("");
                loadMessages();
            }
        } catch (error) {
            console.error("Error sending message:", error);
        }
    };

    const likeMessage = async (messageId) => {
        try {
            if (contract && account) {
                const tx = await contract.likeMessage(messageId);
                await tx.wait(); // Wait for the transaction to be mined
                loadMessages();
            }
        } catch (error) {
            console.error("Error liking message:", error);
        }
    };

    const loadMessages = async () => {
        try {
            if (contract) {
                const count = await contract.getMessageCount();
                const messages = [];

                for (let i = 0; i < count; i++) {
                    const message = await contract.getMessage(i);
                    messages.push({
                        id: i,
                        sender: message.sender,
                        content: message.content,
                        likes: parseInt(message.likes),
                    });
                }

                setMessages(messages);
            }
        } catch (error) {
            console.error("Error loading messages:", error);
        }
    };

    useEffect(() => {
        loadMessages();
    }, [contract]);



    return (
        <div className="DISCUSSIONS">
            <div className="overlap-wrapper">
                <div className="overlap">
                    <div className="rectangle" />
                    <div className="ellipse" />
                    <div className="div" />
                    <img
                        className="img"
                        alt="Ellipse"
                        src="https://generation-sessions.s3.amazonaws.com/f00b87c43beb4193a80199c2badc3136/img/ellipse-4.svg"
                    />
                    <div className="rectangle-2" />
                    <div className="text-wrapper">
                        <span onClick={() => handleNavigation('/home')}
                            style={{ cursor: 'pointer' }}
                        >
                            Home
                        </span>
                    </div>
                    <div className="text-wrapper-2">
                        <span onClick={() => handleNavigation('/whatsnew')}
                            style={{ cursor: 'pointer' }}
                        >
                            What’s New
                        </span>
                    </div>
                    <div className="text-wrapper-3">
                        <span onClick={() => handleNavigation('/discussion')}
                            style={{ cursor: 'pointer' }}
                        >
                            Discussion
                        </span>
                    </div>
                    <div className="text-wrapper-4">
                        <span onClick={() => handleNavigation('/about')}
                            style={{ cursor: 'pointer' }}
                        >
                            About
                        </span>
                    </div>

                    <img
                        className="quant-comm"
                        alt="Quant comm"
                        src="https://gateway.pinata.cloud/ipfs/QmNqF8bgLdVm6ykaBrzP3SZTYaE6pWm1Anmm61eHvaoV2f/quant-comm-4x-1.png"
                    />
                    <img
                        className="group"
                        alt="Group"
                        src="https://gateway.pinata.cloud/ipfs/QmNqF8bgLdVm6ykaBrzP3SZTYaE6pWm1Anmm61eHvaoV2f/objects.svg"
                    />
                    <div className="section-title">
                        <div className="text">
                            <h1 className="title">Community Sheetz!</h1>
                        </div>
                    </div>
                    <div className="rectangle-4">
                        {console.log(contract)}
                        <h1 className="enjoy">Enjoy Top Notch Conversations</h1>
                        <textarea className="text-message"
                            value={messageInput}
                            onChange={(e) => setMessageInput(e.target.value)}
                            placeholder="Type your message here"
                        ></textarea>
                        <button className="send-button" onClick={sendMessage}
                        style={{ cursor: 'pointer' }}
                        >Send Message</button>

                        <hr />
                        <h2 className="enjoy">Messages:</h2>
                        {messages.map((message) => (
                            <div key={message.id}>
                                <p>
                                    <strong className="enjoy">Sender:</strong> {message.sender}
                                </p>
                                <p>
                                    <strong className="enjoy">Content:</strong> {message.content}
                                </p>
                                <p>
                                    <strong className="enjoy">Likes:</strong> {message.likes}
                                </p>
                                <button className="like-button" onClick={() => likeMessage(message.id)}
                                style={{ cursor: 'pointer' }}
                                >Like</button>
                                <hr />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
