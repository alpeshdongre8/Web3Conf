import { useNavigate } from "react-router-dom";
import React from "react";
import "./whatsnew.css";

export const WhatsNew = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };
  // return (
  //   <div className="WHATS-NEW">
  //     <div className="overlap-group-wrapper">
  //       <div className="overlap-group">
  //         <div className="rectangle" />
  //         <div className="ellipse" />
  //         <div className="div" />
  //         <img className="img" alt="Ellipse" src="ellipse-4.svg" />
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

  //         <img className="quant-comm" 
  //         alt="Quant comm" 
  //         src="https://gateway.pinata.cloud/ipfs/QmNqF8bgLdVm6ykaBrzP3SZTYaE6pWm1Anmm61eHvaoV2f/quant-comm-4x-1.png" />
  //         <img className="group" 
  //         alt="Group" 
  //         src="https://gateway.pinata.cloud/ipfs/QmNqF8bgLdVm6ykaBrzP3SZTYaE6pWm1Anmm61eHvaoV2f/objects.svg" />
  //       </div>
  //     </div>
  //   </div>
  // );


  return (
    <div className="WHATS-NEW">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="group">
            <div className="overlap-group">
              <h1 className="text-wrapper">News Letters</h1>
              <div className="overlap-group-wrapper">
                <div className="div">
                  <div className="overlap-2">
                    <p className="p">
                      Crypto not just divided by tribalism, but by fundamental differences in values: Balaji Srinivasan
                    </p>
                    <p className="text-wrapper-2">
                      Student credentials on the blockchain: North Dakota opts in for digital wallets
                    </p>
                    <p className="text-wrapper-3">
                      Polygon ID comes to Ethereum thanks to Rarimo integration, more chains to come.
                    </p>
                    <img
                      className="image"
                      alt="Image"
                      src="https://blockworks.co/_next/image?url=https%3A%2F%2Fblockworks-co.imgix.net%2Fwp-content%2Fuploads%2F2023%2F07%2Fconflict.jpg&w=1920&q=75"
                    />
                    <p className="balaji-srinivasan-a">
                      Balaji Srinivasan, a former technology officer at Coinbase and entrepreneur, observes distinct
                      classes of people within the crypto world: <br /> <br />
                      1. &#34;No-coiners&#34; are individuals who either lack knowledge about cryptocurrencies, have
                      minimal understanding, or actively reject them. <br /> <br />
                      2. &#34;Maximalists&#34; strongly believe in a specific cryptocurrency, often Bitcoin, viewing it
                      as the ultimate solution to global issues. They dismiss all other options, including fiat currency
                      and gold, as failures. <br /> <br />
                      3. &#34;Poly-coiners&#34; are open to a wide range of crypto possibilities and solutions for
                      various problems. They are not loyal to a single cryptocurrency and explore different options.{" "}
                      <br /> <br />
                      Srinivasan compares these classifications to religious and governmental attitudes. Religious
                      adherents can be monotheistic or polytheistic, while people&#39;s views on the state can range
                      from a-statist (rejecting the state) to mono-statist (supporting a single dominant empire) to
                      poly-statist (with no loyalty to any specific state). <br /> <br />
                      He emphasizes that these differences stem from fundamental values rather than just tribalism.
                      Srinivasan himself comes from a background that values choice on all three axes: religion,
                      government, and cryptocurrencies. <br /> <br />
                      In the crypto world, the relationship between poly-coiners and mono-coiners resembles that of
                      polytheists and monotheists. While mono-coiners can unify under a single cryptocurrency like
                      Bitcoin, poly-coiners are more accepting of various crypto options. <br /> <br />
                      Srinivasan believes that the diversity of crypto communities is essential, as they will ultimately
                      shape the future of the industry. He likens them to mammals that will survive and thrive after the
                      metaphorical &#34;meteor&#34; impacts the older, less adaptable &#34;dinosaurs.&#34;
                    </p>
                    <p className="north-dakota">
                      - North Dakota launched a program allowing high school graduates to keep their credentials in a
                      blockchain-powered digital wallet. <br />
                      <br />- The program, called Open Credential Publisher, empowers students by giving them control
                      over their documents when applying for jobs or colleges. <br />
                      <br />- Students can share verified credentials with employers or colleges using a permissioned
                      blockchain system. <br />
                      <br />- The blockchain used by North Dakota&#39;s Information Technology department, originally
                      developed by Evernym as the Sovrin network, is shutting down. They are looking for a new
                      blockchain solution. <br />
                      <br />- The digital wallet system eliminates the need for employers to call schools for document
                      verification. <br />
                      <br />- North Dakota plans to expand the program beyond diplomas and transcripts to include other
                      recognized credentials. <br />
                      <br />- They are exploring skills matching by connecting digital wallets to their system,
                      providing students with new career opportunities. <br />
                      <br />- This initiative is part of an eight-state consortium through the National Governors
                      Association. States involved include New Hampshire, Connecticut, Virginia, Indiana, Kentucky,
                      Alabama, Arkansas, Oklahoma, Colorado, Wyoming, and Washington.
                    </p>
                    <p className="interoperability">
                      - Interoperability protocol Rarimo is enabling the use of Polygon ID, a verifiable credential
                      infrastructure, on multiple blockchains. <br />
                      <br />- Previously, Polygon IDs could only be used on the chain where they were issued,
                      necessitating new Ethereum-native credentials for cross-chain use. <br />
                      <br />- With the recent collaboration, users can now seamlessly use their credentials on both
                      Polygon and Ethereum networks. <br />
                      <br />- Additionally, credentials issued on Polygon will soon be accessible on BNB Chain and
                      Avalanche as well. <br />
                      <br />- Rarimo plans to scale to various other networks in the future, making the system even more
                      versatile. <br />
                      <br />- Polygon ID, introduced in March 2022 and made open-source in March of the current year,
                      employs zero-knowledge proofs to ensure privacy and security during identity verification
                      processes. <br />
                      <br />- Zero-knowledge proofs play a crucial role in the movement towards decentralized identity,
                      a market expected to reach $6.8 billion by 2027. <br />
                      <br />- Decentralized identity aims to give individuals control over their data, allowing
                      companies to request permission to verify credentials, rather than dictating how identity
                      information is shared. <br />
                      <br />- Apart from Polygon, other players like Disco, SpruceID, Iden3, Ceramic, and the Ethereum
                      Foundation are also exploring solutions for decentralized identity.
                    </p>
                    <p className="DISCLAIMER-news">
                      <span className="span">DISCLAIMER:&nbsp;&nbsp;News Letter is Used from </span>
                      <span className="text-wrapper-4">Blockworks</span>
                      <span className="span"> For Educational Purpose Click here for the Newsletter: </span>
                      <span className="text-wrapper-4">Blockworks</span>
                    </p>
                    <p className="DISCLAIMER-news-2">
                      <span className="span">DISCLAIMER:&nbsp;&nbsp;News Letter is Used from </span>
                      <span className="text-wrapper-4">Blockworks</span>
                      <span className="span"> For Educational Purpose Click here for the Newsletter: </span>
                      <span className="text-wrapper-4">Blockworks</span>
                    </p>
                    <p className="DISCLAIMER-news-3">
                      <span className="span">DISCLAIMER:&nbsp;&nbsp;News Letter is Used from </span>
                      <span className="text-wrapper-4">Blockworks</span>
                      <span className="span"> For Educational Purpose Click here for the Newsletter: </span>
                      <span className="text-wrapper-4">Blockworks</span>
                    </p>
                    <img
                      className="img"
                      alt="Image"
                      src="https://blockworks.co/_next/image?url=https%3A%2F%2Fblockworks-co.imgix.net%2Fwp-content%2Fuploads%2F2023%2F07%2Fnorthdakotablockchain.jpg&w=1920&q=75"
                    />
                    <img
                      className="image-2"
                      alt="Image"
                      src="https://blockworks.co/_next/image?url=https%3A%2F%2Fblockworks-co.imgix.net%2Fwp-content%2Fuploads%2F2023%2F07%2Fpolygon-zkevm-launch.jpg&w=1920&q=75"
                    />
                  </div>
                  <div className="p-wrapper">
                    <p className="text-wrapper-5">
                      All News are Fetched From Blockworks For Educational Purpose please refer the respective link for
                      better experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="div-wrapper">
            <div className="overlap-3">
              <div className="text-wrapper-6">Home</div>
              <div className="text-wrapper-7">What’s New</div>
              <div className="text-wrapper-8">Discussions</div>
              <div className="text-wrapper-9">About</div>
              <img
                className="quant-comm"
                alt="Quant comm"
                src="https://gateway.pinata.cloud/ipfs/QmNqF8bgLdVm6ykaBrzP3SZTYaE6pWm1Anmm61eHvaoV2f/quant-comm-4x-1.png"
              />
              <img
                className="group-2"
                alt="Group"
                src="https://gateway.pinata.cloud/ipfs/QmNqF8bgLdVm6ykaBrzP3SZTYaE6pWm1Anmm61eHvaoV2f/objects.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};