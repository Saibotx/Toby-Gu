//Import Packages
import React from "react";
import styled, {css} from "react-emotion";
import Parallax from "react-springy-parallax";

//Import Core
import _Button from "core/Button.jsx";

//Import Assets
import applyboardSchool from "assets/applyboardSchool.png";
import applyboardSearch from "assets/applyboardSearch.png";
import applyboardEligibility from "assets/applyboardEligibility.png";
import applyboardLogo from 'assets/applyboardLogo.png';


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
  width: ${props => (props.main ? "50%" : "38%")};
  text-align: center;
  margin-top:-25vh;
  @media (max-width: 550px) {
    width: 75%;
    padding: 10% 0 10% 0;
    ${props => props.main && `width:90%;`}
    ${props => !props.main && `display:none;`}
  }
`;

const Desc = styled(BrowserWindow)`
  padding-bottom: 30px;
  width:50%;
  margin-top:100vh;
  transform:translateY(-50%);
  display:block !important;
`

const workText = css`
  color: white;
  opacity: 1;
  text-shadow: 0px 0px 8px black;
`;


const Applyboard = (
  <div>
    <ParallaxFlex offset={2} speed={0.1}>
      <BrowserWindow>
        <img
          src={applyboardSchool}
          style={{ width: "100%" }}
        />
      </BrowserWindow>
      <BrowserWindow>
        <img
          src={applyboardEligibility}
          style={{ width: "100%" }}
        />
      </BrowserWindow>
    </ParallaxFlex>

    <ParallaxFlex offset={2} speed={-0.05}>
      <BrowserWindow main>
        <img style={{ width: "100%" }} src={applyboardSearch} />
      </BrowserWindow>
    </ParallaxFlex>
    <ParallaxFlex offset={2} speed={0.7}>
      <Desc>
        <img style={{width:'80%', maxWidth:250}} src={applyboardLogo}/>
      <h3 className={workText} style={{marginTop:5}}>
        Lead Front Engineer && UX/UI Designer
      </h3>
      <h4 className={workText}>
        Applyboard allows international students find & apply to their
        dream universities in 60 seconds flat. During my time leading
        the front end team, we rebuilt the school/program search and
        institution pages to improve UX, user retention, click-through,
        feel and speed. Oh yeah, I also did some hiring and management 😇
      </h4>
      <a target="_blank" href="http://applyboard.com/schools">
        <_Button shadow color="light">
          See Live
        </_Button>
      </a>
      </Desc>
    </ParallaxFlex>
  </div>
);

export default Applyboard;
