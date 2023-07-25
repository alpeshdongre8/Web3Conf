import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./login.css";
// import {ConnectButton} from "./components/wallet_connect";
// import { accounts } from "web3/lib/commonjs/eth.exports";
// import ethers from "ethers";

export function Login() {
  const navigate = useNavigate();
  const handleNavigation = (path) => {
    navigate(path);
  };

  const[walletAddress, setWalletAddress] = useState("");

  useEffect(() => {
    getCurrenWalletConnected();
    addWalletListener();
  }, [walletAddress]);

  const connectWallet = async () => {
    if(typeof window != "undefined" && typeof window.ethereum != "undefined"){
      try{
        //MetaMask is installed
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
        console(accounts[0]);
      } catch(err){
        console.error(err.message);
      }
    } else {
      //Metamask is not installed
      console.log("Please install Metamask");
    }
  }

  const getCurrenWalletConnected = async () => {
    if(typeof window != "undefined" && typeof window.ethereum != "undefined"){
      try{
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });
        if(accounts.length > 0){
          setWalletAddress(accounts[0]);
          console.log(accounts[0]);
        } else {
          console.log("Connect to Metamask using the connect button");
        }
      } catch(err){
        console.error(err.message);
      }
    }
  }

  const addWalletListener = async () => {
    if(typeof window != "undefined" && typeof window.ethereum != "undefined"){
      window.ethereum.on("accountChanged", (accounts) => {
        setWalletAddress(accounts[0]);
        console.log(accounts[0]);
      });
    } else {
      //Metamask is not installed
      setWalletAddress("");
      console.log("Please install Metamask");
    }
  };

  return (
    <>
    <div className="LOGIN">
      <div className="div">
        <div className="overlap">
          <div className="frame">
            <div className="group">
              <img
                className="img"
                alt="Group"
                src="https://gateway.pinata.cloud/ipfs/QmNqF8bgLdVm6ykaBrzP3SZTYaE6pWm1Anmm61eHvaoV2f/group-28.png"
              />
              <h1 className="text-wrapper">Connect Your Wallet</h1>
              <div className="BUTTON-wrapper">
                <div className="BUTTON">
                  <div className="text-wrapper-2">
                  <span onClick={() => connectWallet}
                  style={{ cursor: 'pointer' }}
                  >
                  CONNECT
                  </span>
                  </div>
                </div>
                <div className="Address">
                <span>
                  {walletAddress && walletAddress.length > 0
                    ? `Connected: ${walletAddress.substring(
                      0,
                      6
                      )}...${walletAddress.substring(38)}`
                    : "Connect Wallet"}
                </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="overlap-group">
          <div className="overlap-group-wrapper">
            <div className="overlap-group-2">
            <div className="text-wrapper-3">
          <span onClick={() => handleNavigation('/home')}
            style={{ cursor: 'pointer' }}
            >
            Home
            </span>
            </div>
          <div className="text-wrapper-4">
          <span onClick={() => handleNavigation('/whatsnew')}
            style={{ cursor: 'pointer' }}
            >
            What’s New
            </span>
            </div>
          <div className="text-wrapper-5">
            <span onClick={() => handleNavigation('/discussion')}
            style={{ cursor: 'pointer' }}
            >
            Discussion
            </span>
            </div>
          <div className="text-wrapper-6">
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
            </div>
          </div>
          <img
            className="OBJECTS"
            alt="Objects"
            src="https://gateway.pinata.cloud/ipfs/QmNqF8bgLdVm6ykaBrzP3SZTYaE6pWm1Anmm61eHvaoV2f/objects.svg"
          />
        </div>
      </div>
    </div>
    </>
  );
};
