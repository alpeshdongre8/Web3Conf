import { useNavigate } from "react-router-dom";
import "./nav.css";


export function Nav() {
    const navigate = useNavigate();
  
    const handleNavigation = (path) => {
      navigate(path);
    };
    return(

<div className="overlap-3">
          <div className="text-wrapper-9">
          <span onClick={() => handleNavigation('/home')}
            style={{ cursor: 'pointer' }}
            >
            Home
            </span>
          </div>
          <div className="text-wrapper-10">
          <span onClick={() => handleNavigation('/whatsnew')}
            style={{ cursor: 'pointer' }}
            >
            What’s New
            </span>
          </div>
          <div className="text-wrapper-11">
          <span onClick={() => handleNavigation('/discussion')}
            style={{ cursor: 'pointer' }}
            >
            Discussion
            </span>
          </div>
          <div className="text-wrapper-12">
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
            className="group-5"
            alt="Group"
            src="https://gateway.pinata.cloud/ipfs/QmSFrPcoyVqLtn6C8mwH4g1H5StBCRrPNE1KPKua8QoFRg/group-70.png"
            />
          
</div>
    );
}