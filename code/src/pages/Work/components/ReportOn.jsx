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
  margin-top: -10vh;
  position: absolute;
  ${props=>props.iPad && 'left:calc(30% - 10px);'}
  @media (max-width: 550px) {
    left:-10px;
    ${props=>props.iPad && 'left:calc(30% - 30px);'}
  }
`;

const Desc = styled('div')`
  padding-bottom: 30px;
  width: 50%;
  margin-top: 50vh;
  transform: translateY(-50%);
  text-align: center;
  position: absolute;
  display: block !important;
  @media (max-width: 550px) {
    width: 75%;
  }
`;

const workText = css`
  color: white;
  opacity: 1;
  text-shadow: 0px 0px 8px black;
`;

const IPad = styled("img")`
  height: 60vh;
  @media (max-width: 550px) {
    height: auto;
    width: 50vw;
  }
`;

const ReportOn = (
  <div>
    <ParallaxFlex offset={2} speed={0.1}>
      <BrowserWindow>
        <img src={reportOnLaptop} style={{ width: "100%" }} />
      </BrowserWindow>
    </ParallaxFlex>
    <ParallaxFlex offset={2} speed={-0.1}>
      <BrowserWindow iPad>
        <IPad src={reportOniPad} />
      </BrowserWindow>
    </ParallaxFlex>

    <ParallaxFlex offset={2} speed={0.8}>
      <Desc>
        <img style={{ width: "80%", maxWidth: 250 }} src={rippleLogo} />
        <h3 className={workText} style={{ marginTop: 5 }}>
          Freelance Project Lead - Mobile & Web Engineer
        </h3>
        <h4 className={workText}>
          ReportON is a B2B web & mobile app to manage marketing merchandisers
          in the retail space. My team and I built a web dashboard and two
          mobile apps for employees to input data in real time so that managers
          at head office can see what's happening in field. ReportON also
          generates analytics, reports to improve the efficiency of
          merchandising employees working for their CPG clients.
        </h4>
      </Desc>
    </ParallaxFlex>
  </div>
);

export default ReportOn;
