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
  justify-content: center;
  @media (max-width: 550px) {
    ${'' /* flex-direction: column; */}
    justify-content: center;
  }
`;

const BrowserWindow = styled("div")`
  width: ${props => (props.main ? "60%" : "38%")};
  max-width: 900px;
  text-align: center;
  margin-top: -25vh;
  @media (max-width: 550px) {
    width: 75%;
    ${'' /* margin-top: -15vh; */}
    padding: 10% 0 10% 0;
    ${props => props.main && `width:90%;`}
    ${'' /* ${props =>
        !props.main && `display:none;`}; */}
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
  color: white;
  opacity: 1;
  text-shadow: 0px 0px 8px black;
`;

const MobilePhoneImg = styled('img')`
    ${'' /* height:50vh; */}
    width:15vw;
    margin-top:10vh;
    max-width: 300px;
    @media (max-width: 550px) {
      ${props=>props.left && 'padding-right: 10vh;'}
      ${props=>props.right && 'padding-left: 10vh;'}
      height:auto;
      width:25vw;
    }
`

const RageOn = (
  <div>
    <ParallaxFlex offset={1} speed={0}>
      <BrowserWindow main>
        <img style={{ width: "100%" }} src={rageonIMac} />
      </BrowserWindow>
    </ParallaxFlex>
    <ParallaxFlex offset={1} speed={0.2}>
      <BrowserWindow>
        <MobilePhoneImg left src={rageonIphonex}/>
      </BrowserWindow>
      <BrowserWindow>
        <MobilePhoneImg
          right
          src={rageonPixel2}
        />
      </BrowserWindow>
    </ParallaxFlex>

    <ParallaxFlex offset={1} speed={0.9}>
      <Desc>
        <img style={{ width: "80%", maxWidth: 250 }} src={rageonLogo} />
        <h3 className={workText} style={{ marginTop: 5 }}>
          Lead Front End Engineer
        </h3>
        <h4 className={workText}>
          RageOn is the world's largest online all over print shop! We empower
          creators and artists to design and sell garments and products with
          their art from the comfort of their own home. This is where I currently work and we've been building
          lots of new web stuff including a web builder, product customization
          and search page!
        </h4>
        <a target="_blank" href="http://rageon.com/">
          <_Button shadow color="light">
            See Live
          </_Button>
        </a>
      </Desc>
    </ParallaxFlex>
  </div>
);

export default RageOn;
