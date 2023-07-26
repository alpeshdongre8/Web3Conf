import React from "react";
import { useNavigate } from "react-router-dom";
import "./discussion.css";


export const Discussions = () => {
    const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

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
            src="https://generation-sessions.s3.amazonaws.com/6f6f23fdd51505480884cfbea9fba806/img/ellipse-4.svg"
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
          <span onClick={() => handleNavigation('/home')}
            style={{ cursor: 'pointer' }}
            >
          <img
            className="quant-comm"
            alt="Quant comm"
            src="https://gateway.pinata.cloud/ipfs/QmSFrPcoyVqLtn6C8mwH4g1H5StBCRrPNE1KPKua8QoFRg/quant-comm-4x-1.png"
          />
          </span>
          <img
            className="group"
            alt="Group"
            src="https://gateway.pinata.cloud/ipfs/QmNqF8bgLdVm6ykaBrzP3SZTYaE6pWm1Anmm61eHvaoV2f/objects.svg"
          />
          <div className="section-title">
            <div className="text">
              <div className="title">Community Sheetz!</div>
            </div>
          </div>
          
            <div className="showcase">
            Showcase Your Ideas and Earn Rewards!
            <br/>
            <button className="msgboard"
            onClick={() => handleNavigation('/explore')}
            style={{ cursor: 'pointer' }}>
              Explore Now!
            </button>
            </div>
          <div className="rectangle-4" />
          <div className="div-wrapper">
            <a href="https://discord.gg/MmuDnPUEp" target="_blank" rel="noreferrer">
            <div className="overlap-2">
              <div className="text-wrapper-6">JOIN</div>
            </div>
              </a>
          </div>
          <h1 className="h-1">DIVE IN TO OUR DISCORD CHANNEL FOR TOP NOTCH DISCUSSION!</h1>
          <img
            className="group-2"
            alt="Group"
            src="https://gateway.pinata.cloud/ipfs/QmZypBsAE5Ko1WBTQfUgDMLkZ7uJHCP8Aqm53Te3gW3YwD"
          />
          <div className="ellipse-2" />
        </div>
      </div>
    </div>
  );
};