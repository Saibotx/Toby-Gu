//Import Packages
import React from "react";
import styled, { css } from "react-emotion";
import Parallax from "react-springy-parallax";

//Import Core
import _Button from "core/Button.jsx";

//Import Assets
import reportOniPad from "assets/reportOniPad.png";
import reportOnLaptop from "assets/reportOnLaptop.png";
import rippleLogo from "assets/rippleLogo.png";

const ParallaxFlex = styled(Parallax.Layer)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  ${"" /* width: calc(100% - 30px); */} @media (max-width: 550px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const BrowserWindow = styled("div")`
  width: 90%;
  text-align: center;
  max-width: 1300px;
  margin-top: -10vh;
  @media (max-height: 800px) {
    max-width: 500px;
    ${props => props.iPad && "left:calc(45% - 10px);"};
  }
  position: absolute;
  ${props => props.iPad && "left:calc(30% - 10px);"};
  @media (max-width: 550px) {
    left: -10px;
    margin-top: -20vh;
    ${props => props.iPad && "left:calc(30% - 30px);"};
  }
`;

const Desc = styled("div")`
  padding-bottom: 60px;
  width: 50%;
  margin-top: 50vh;
  max-width: 100% !important;
  transform: translateY(-50%);
  text-align: center;
  position: absolute;
  display: block !important;
  @media (max-width: 550px) {
    width: 75%;
    margin-top: 40vh;
    margin-bottom: 10vh;
  }
`;

const workText = css`
  color: white;
  opacity: 1;
  text-shadow: 0px 0px 8px black;
`;

const IPad = styled("img")`
  height: 60vh;
  text-align: right;
  @media (max-height: 800px) {
    height: auto;
    width: 300px;
  }
  @media (max-width: 550px) {
    height: auto;
    width: 50vw;
    transform: translate(0%);
  }
`;

const ReportOn = ({ onClick }) => (
  <div onClick={onClick}>
    <ParallaxFlex offset={3} speed={0.1}>
      <BrowserWindow>
        <img src={reportOnLaptop} style={{ width: "100%" }} />
      </BrowserWindow>
    </ParallaxFlex>
    <ParallaxFlex offset={3} speed={-0.1}>
      <BrowserWindow iPad>
        <IPad src={reportOniPad} />
      </BrowserWindow>
    </ParallaxFlex>

    <ParallaxFlex offset={3} speed={0.8}>
      <Desc>
        <img style={{ width: "80%", maxWidth: 250 }} src={rippleLogo} />
        <h3 className={workText} style={{ marginTop: 5 }}>
          Freelance Project Lead - Mobile & Web Engineer
        </h3>
        <h4 className={workText}>
          My team and I were contracted to build a B2B web dashboard and two
          mobile apps for marketing managers to see what employees were doing in
          real time. Funded by Ripple Effect Marketing, we vastly improved the
          efficiency of their employees. I built the front end web app and both
          mobile apps.
        </h4>
        <div
          style={{
            textAlign: "center",
            color: "white",
            opacity: 0.4,
            paddingBottom: 10
          }}
        >
          (or Tap Anywhere to Continue)
        </div>
      </Desc>
    </ParallaxFlex>
  </div>
);

export default ReportOn;
