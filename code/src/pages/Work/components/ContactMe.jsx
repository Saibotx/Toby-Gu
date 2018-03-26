//Import Packages
import React from "react";
import styled, { css } from "react-emotion";
import Parallax from "react-springy-parallax";

//Import Core
import _Button from "core/Button.jsx";

//Import Assets
import rageonIMac from "assets/rageonIMac.png";
import rageonIphonex from "assets/rageonIphonex.png";
import rageonPixel2 from "assets/rageonPixel2.png";
import rageonLogo from "assets/rageonLogo.png";
import earth from "assets/earth.svg";
import bashWindow from "assets/window.png";

const ParallaxFlex = styled(Parallax.Layer)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 550px) {
    ${'' /* flex-direction: column; */}
    justify-content: center;
  }
`;

const Cont = styled("div")`
  width: 60%;
  display: block !important;
  max-width: 800px;
  color:black;
  text-align: center;
  margin-top: -25vh;
  @media (max-height: 800px) {
    max-width: 500px;
  }
  @media (max-width: 550px) {
    padding: 10% 0 10% 0;
    width:90%;
  }
`;

const Earth = styled('img')`
  width:60%;
  @media (max-width:550px){
    width:100%;
  }
`



const ContactMe = ({onClick}) => (
  <div>
    <ParallaxFlex
      offset={5.5}
      speed={-0.2}
      >
      <Earth src={earth} />
    </ParallaxFlex>

    <ParallaxFlex offset={5} speed={0.9}>
      <Cont>
        <img src={bashWindow} style={{ width: "100%" }} />
        <br/>
        <a target="_blank" href="mailto:tobiasgoo@gmail.com?Subject=Hello!">
          <_Button shadow color="light">
            Send Email
          </_Button>
          <br/>
          <br/>
          (tobias.goo@gmail.com)
        </a>
      </Cont>
    </ParallaxFlex>
    <ParallaxFlex offset={5.3} speed={0.9}>
      <Cont  onClick={onClick} style={{opacity:0.4}}>
        (Tap here to go back to top)
      </Cont>
    </ParallaxFlex>
  </div>
);

export default ContactMe;
