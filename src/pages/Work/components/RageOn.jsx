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
  @media(max-height: 800px){
    max-width: 500px;
  }
  text-align: center;
  margin-top: -25vh;
  @media (max-width: 550px) {
    width: 85%;
    margin-top: -35vh;
    padding: 10% 0 10% 0;
    ${props => props.main && `width:90%;`}
    ${'' /* ${props =>
        !props.main && `display:none;`}; */}
  }
`;

const Desc = styled(BrowserWindow)`
  width: 50%;
  max-width: 100% !important;
  margin-top: 79vh;
  @media (max-width: 550px) {
    margin-top: 90vh;
    margin-bottom: 10vh;
  }
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
    width:14vw;
    margin-top:10vh;
    max-width: 250px;
    @media(max-height: 800px){
      max-width: 250px;
    }
    @media (max-width: 550px) {
      ${props=>props.left && 'padding-right: 10vh;'}
      ${props=>props.right && 'padding-left: 10vh;'}
      height:auto;
      width:23vw;
    }
`

const RageOn = ({onClick})=>(
  <div onClick={onClick}>
    <ParallaxFlex offset={1} speed={0}>
      <BrowserWindow main>
        <img style={{ width: "95%" }} src={rageonIMac} />
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
          creators & artists to design & sell products
          from the comfort of their own home. I currently work here - we've built
          lots of new stuff including product customization
          and a new search!
        </h4>
        <a target="_blank" href="http://rageon.com/">
          <_Button shadow color="light">
            See Live
          </_Button>
        </a>
        <br/>
        <div style={{textAlign:'center', color:'white', opacity:0.4, paddingBottom:10}}>
          (or Tap Anywhere to Continue)
        </div>
      </Desc>
    </ParallaxFlex>
  </div>
);

export default RageOn;
