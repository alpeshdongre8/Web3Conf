import React from "react";
import { useNavigate } from "react-router-dom";
import "./discussion.css";


export const Discussions = () => {
    const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };
  // return (
  //   <div className="DISCUSSIONS">
  //     <div className="overlap-wrapper">
  //       <div className="overlap">
  //         <div className="rectangle" />
  //         <div className="ellipse" />
  //         <div className="div" />
  //         <img
  //           className="img"
  //           alt="Ellipse"
  //           src="https://generation-sessions.s3.amazonaws.com/f00b87c43beb4193a80199c2badc3136/img/ellipse-4.svg"
  //         />
  //         <div className="rectangle-2" />
  //         <div className="text-wrapper">
  //         <span onClick={() => handleNavigation('/home')}
  //           style={{ cursor: 'pointer' }}
  //           >
  //           Home
  //           </span>
  //         </div>
  //         <div className="text-wrapper-2">
  //         <span onClick={() => handleNavigation('/whatsnew')}
  //           style={{ cursor: 'pointer' }}
  //           >
  //           What’s New
  //           </span>
  //         </div>
  //         <div className="text-wrapper-3">
  //         <span onClick={() => handleNavigation('/discussion')}
  //           style={{ cursor: 'pointer' }}
  //           >
  //           Discussion
  //           </span>
  //         </div>
  //         <div className="text-wrapper-4">
  //         <span onClick={() => handleNavigation('/about')}
  //           style={{ cursor: 'pointer' }}
  //           >
  //           About
  //           </span>
  //         </div>

  //         <img
  //           className="quant-comm"
  //           alt="Quant comm"
  //           src="https://gateway.pinata.cloud/ipfs/QmNqF8bgLdVm6ykaBrzP3SZTYaE6pWm1Anmm61eHvaoV2f/quant-comm-4x-1.png"
  //         />
  //         <img
  //           className="group"
  //           alt="Group"
  //           src="https://gateway.pinata.cloud/ipfs/QmNqF8bgLdVm6ykaBrzP3SZTYaE6pWm1Anmm61eHvaoV2f/objects.svg"
  //         />
  //         <div className="section-title">
  //           <div className="text">
  //             <h1 className="title">Community Sheetz!</h1>
  //           </div>
  //         </div>
  //         <div className="rectangle-3" />
  //         <div className="overlap-group-wrapper">
  //           <div className="overlap-group">
  //             <img
  //               className="vector"
  //               alt="Vector"
  //               src="https://generation-sessions.s3.amazonaws.com/f00b87c43beb4193a80199c2badc3136/img/vector.svg"
  //             />
  //           </div>
  //         </div>
  //         <div className="text-wrapper-5">TYPE YOUR COMMENT HERE</div>
  //         <div className="rectangle-4" />
  //       </div>
  //     </div>
  //   </div>
  // );

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
              <div className="title">Community Sheetz!</div>
            </div>
          </div>
          <div className="rectangle-3" />
          <div className="overlap-group-wrapper">
            <div className="overlap-group">
              <img
                className="vector"
                alt="Vector"
                src="https://generation-sessions.s3.amazonaws.com/6f6f23fdd51505480884cfbea9fba806/img/vector.svg"
              />
            </div>
          </div>
          <div className="text-wrapper-5">TYPE YOUR COMMENT HERE</div>
          <div className="rectangle-4" />
          <div className="div-wrapper">
            <div className="overlap-2">
              <div className="text-wrapper-6">JOIN</div>
            </div>
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