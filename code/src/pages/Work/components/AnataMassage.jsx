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

const ParallaxFlex = styled(Parallax.Layer)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 550px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const BrowserWindow = styled("div")`
  width: ${props => (props.main ? "60%" : "38%")};
  text-align: center;
  margin-top: -25vh;
  @media (max-width: 550px) {
    width: 75%;
    padding: 10% 0 10% 0;
    ${props => props.main && `width:90%;`} ${props =>
        !props.main && `display:none;`};
  }
`;

const Desc = styled(BrowserWindow)`
  padding-bottom: 30px;
  width: 50%;
  margin-top: 100vh;
  transform: translateY(-50%);
  display: block !important;
`;

const workText = css`
  color:black;
  opacity: 1;
  ${'' /* text-shadow: 0px 0px 8px black; */}
`;

const AnataMassage = (
  <div>
    <ParallaxFlex offset={3} speed={0}>
      <BrowserWindow main>
        <img style={{ width: "100%" }} src={rageonIMac} />
      </BrowserWindow>
    </ParallaxFlex>
    <ParallaxFlex offset={3} speed={0.1}>
      <BrowserWindow>
        <img src={rageonPixel2} style={{ height: "50vh", marginTop: "10vh" }} />
      </BrowserWindow>
      <BrowserWindow>
        <img
          src={rageonIphonex}
          style={{ height: "50vh", marginTop: "10vh" }}
        />
      </BrowserWindow>
    </ParallaxFlex>

    <ParallaxFlex offset={3} speed={0.7}>
      <Desc>
        <h2>Anata Massage</h2>
        <h3 className={workText} style={{ marginTop: 5 }}>
          Freelance Project Lead
        </h3>
        <h4 className={workText}>
          RageOn is the world's largest online all over print shop! We empower
          creators and artists to design and sell garments and products with
          their art from the comfort of their own home. We've been working on
          lots of new web stuff including a web builder, product customization
          and search page!
        </h4>
        <a target="_blank" href="http://rageon.com/">
          <_Button color="dark">
            See Live
          </_Button>
        </a>
      </Desc>
    </ParallaxFlex>
  </div>
);

export default AnataMassage;
