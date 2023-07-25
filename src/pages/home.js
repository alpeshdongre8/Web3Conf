// import { Link,Route, Router, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import { About } from "./about"
import './home.css';
// import { BrowserRouter as Switch } from 'react-router-dom';

// const home = () => {
export function Home(){
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };
  return (
    <div>
    <div className="LANDING-PAGE-HERO">
      <div className="div">
        <div className="overlap">
          <p className="welcome-to-our">
            Welcome to our dynamic quant community! We&#39;re a hub for exploring Web3 projects and staying on top of
            emerging trends. Join us for insightful discussions, comprehensive project analyses, and the integration of
            cutting-edge concepts. Discover the exciting intersection of quantitative analysis and the decentralized web
            with us.
          </p>
          <div className="ellipse" />
          <img
            className="img"
            alt="Ellipse"
            src="https://gateway.pinata.cloud/ipfs/QmYVzmetCXB5tV4p1EksQpgZ6GuZZtakZe6toN1VCCCoFw/ellipse-4.svg"
          />
          <img
            className="frame"
            alt="Frame"
            src="https://gateway.pinata.cloud/ipfs/QmYVzmetCXB5tV4p1EksQpgZ6GuZZtakZe6toN1VCCCoFw/frame-51.png"
          />
          <img
            className="quant-community"
            alt="Quant community"
            src="https://gateway.pinata.cloud/ipfs/QmYVzmetCXB5tV4p1EksQpgZ6GuZZtakZe6toN1VCCCoFw/quant-community-2.png"
          />
          <div className="group">
            <div className="overlap-group">
              <span onClick={() => handleNavigation('/login')}
              style={{cursor: 'pointer'}}>
              <div className="text-wrapper">CONNECT WALLET</div>
              </span>
            </div>
          </div>
          <img
            className="ASTRO"
            alt="Astro"
            src="https://gateway.pinata.cloud/ipfs/QmYVzmetCXB5tV4p1EksQpgZ6GuZZtakZe6toN1VCCCoFw/astro-2.png"
          />
          <img
            className="clip-path-group"
            alt="Clip path group"
            src="https://gateway.pinata.cloud/ipfs/QmYVzmetCXB5tV4p1EksQpgZ6GuZZtakZe6toN1VCCCoFw/clip-path-group.png"
          />
          <div className="ellipse-2" />
          <div className="overlap-wrapper">
            <div className="overlap-2">
              <div className="overlap-group-wrapper">
                <div className="overlap-3">
                  <div className="overlap-4">
                    <div className="ellipse-3" />
                    <div className="ellipse-4" />
                    <div className="ellipse-5" />
                  </div>
                  <div className="overlap-5">
                    <div className="ellipse-6" />
                    <div className="overlap-group-2">
                      <div className="ellipse-7" />
                      <div className="ellipse-8" />
                    </div>
                  </div>
                </div>
              </div>
              <img
                className="frame-2"
                alt="Frame"
                src="https://gateway.pinata.cloud/ipfs/QmYVzmetCXB5tV4p1EksQpgZ6GuZZtakZe6toN1VCCCoFw/frame-51-1.png"
              />
              <div className="div-wrapper">
                <div className="overlap-6">
                  <div className="group-2">
                    <div className="overlap-group-3">
                      <div className="ellipse-9" />
                      <div className="rectangle" />
                    </div>
                    <div className="rectangle-2" />
                  </div>
                  <div className="rectangle-3" />
                  <div className="rectangle-4" />
                  <img
                    className="line"
                    alt="Line"
                    src="https://gateway.pinata.cloud/ipfs/QmYVzmetCXB5tV4p1EksQpgZ6GuZZtakZe6toN1VCCCoFw/line-2.svg"
                  />
                  <img
                    className="group-3"
                    alt="Group"
                    src="https://gateway.pinata.cloud/ipfs/QmYVzmetCXB5tV4p1EksQpgZ6GuZZtakZe6toN1VCCCoFw/group-68.png"
                  />
                  <div className="text-wrapper-2">uchiha.eth</div>
                  <img
                    className="group-4"
                    alt="Group"
                    src="https://gateway.pinata.cloud/ipfs/QmYVzmetCXB5tV4p1EksQpgZ6GuZZtakZe6toN1VCCCoFw/group-69.png"
                  />
                  <img
                    className="logo"
                    alt="Logo"
                    src="https://gateway.pinata.cloud/ipfs/QmYVzmetCXB5tV4p1EksQpgZ6GuZZtakZe6toN1VCCCoFw/logo-1.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="ellipse-10" />
          <img
            className="group-5"
            alt="Group"
            src="https://gateway.pinata.cloud/ipfs/QmYVzmetCXB5tV4p1EksQpgZ6GuZZtakZe6toN1VCCCoFw/group.png"
          />
          
          <div className="rectangle-5" />
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
            className="logo-2"
            alt="Logo"
            src="https://gateway.pinata.cloud/ipfs/QmYVzmetCXB5tV4p1EksQpgZ6GuZZtakZe6toN1VCCCoFw/logo-1.png"
          />
          <img
            className="group-6"
            alt="Group"
            src="https://gateway.pinata.cloud/ipfs/QmYVzmetCXB5tV4p1EksQpgZ6GuZZtakZe6toN1VCCCoFw/group-70.png"
          />
        </div>
        <p className="p">Join us today and experience the power of Web3 Quant Community firsthand.</p>
        <div className="group-7">
          <div className="overlap-7">
            <div className="text-wrapper-7">CONNECT WALLET</div>
          </div>
        </div>
        <h1 className="h-1">Get Started</h1>
        <div className="text-wrapper-8">Join Us</div>
        <div className="overlap-8">
          <div className="frame-3">
            <div className="ellipse-11" />
            <div className="overlap-9">
              <img
                className="group-8"
                alt="Group"
                src="https://gateway.pinata.cloud/ipfs/QmYVzmetCXB5tV4p1EksQpgZ6GuZZtakZe6toN1VCCCoFw/group-72.png"
              />
            </div>
            <div className="text-wrapper-9">Discussions In Community</div>
            <p className="text-wrapper-10">Engage in conversations, exchange insights, and collaborate with members.</p>
          </div>
          <div className="group-9">
            <div className="overlap-group-4">
              <div className="text-wrapper-11">Dive In!!</div>
              <img
                className="vector"
                alt="Vector"
                src="https://gateway.pinata.cloud/ipfs/QmYVzmetCXB5tV4p1EksQpgZ6GuZZtakZe6toN1VCCCoFw/vector-2.svg"
              />
            </div>
          </div>
        </div>
        <div className="frame-4">
          <div className="overlap-10">
            <div className="ellipse-12" />
            <div className="group-wrapper">
              <div className="group-10">
                <div className="overlap-11">
                  <div className="group-11">
                    <div className="overlap-group-4">
                      <div className="text-wrapper-11">Dive In!!</div>
                    </div>
                  </div>
                  <img
                    className="vector"
                    alt="Vector"
                    src="https://gateway.pinata.cloud/ipfs/QmYVzmetCXB5tV4p1EksQpgZ6GuZZtakZe6toN1VCCCoFw/vector-2.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="overlap-9">
            <div className="text-wrapper-12">TRENDS</div>
            <div className="text-wrapper-13">TRENDS</div>
            <div className="text-wrapper-14">TRENDS</div>
          </div>
          <div className="text-wrapper-15">Emerging Trends</div>
          <p className="text-wrapper-16">
            Stay ahead of the everyone by exploring the latest developments in DeFi, blockchain interoperability, NFTs,
            and more.
          </p>
        </div>
        <div className="frame-5">
          <div className="ellipse-11" />
          <div className="overlap-9">
            <img
              className="vector-2"
              alt="Vector"
              src="https://gateway.pinata.cloud/ipfs/QmYVzmetCXB5tV4p1EksQpgZ6GuZZtakZe6toN1VCCCoFw/vector-1.svg"
            />
          </div>
          <div className="text-wrapper-17">Anonymity</div>
          <p className="text-wrapper-18">
            Enjoy a secure and private environment that encourages open dialogue and protects individual identities.
          </p>
        </div>
      </div>
    </div>
    
    </div>
  );
}


// export default home;