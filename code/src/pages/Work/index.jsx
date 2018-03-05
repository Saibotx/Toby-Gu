//Import Packages
import React from "react";
import Parallax from "react-springy-parallax";
import styled, { css } from "react-emotion";
import {withRouter} from 'react-static';

//Import Assets
import stars from "assets/stars.png";
import satellite4 from "assets/satellite4.svg";

import chrometab from "assets/chrometab.png";
import clients from "assets/clients.svg";

import applyboardSchool from "assets/applyboardSchool.png";
import applyboardSearch from "assets/applyboardSearch.png";
import applyboardEligibility from "assets/applyboardEligibility.png";

//Import Core
import _Button from "core/Button.jsx";

//Import Components
import BackgroundClouds from "./components/BackgroundClouds";
import Badges from "./components/Badges";

const _Container = styled("div")`
  z-index: 5;
  height: 100vh;
  position: fixed;
  width: 100vw;
`;
const _FloatingCont = styled("div")`
  width: 100vw;
  z-index: 10;
  text-align: center;
  position: fixed;
`;

const _PButton = styled("button")`
  position:fixed;
  left:100%;
  top:50%;
  transform:translate(-130%);
  border-width: 3px;
  padding:10px;
  @media (max-width:550px){
    padding:5px;
  }
  border-color: black;
  color:black;
  background-color: transparent;
  font-size: 1.4em;
  font-weight: 700;
  &:hover{
    background-color: grey
    color:white;
    border-color: transparent;
  }
  &:active{
    background-color: black;
  }
`;

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
  width: ${props => (props.main ? "50%" : "38%")};
  text-align: center;
  @media (max-width: 550px) {
    width: 75%;
    padding: 10% 0 10% 0;
    ${props => props.main && `width:90%;`};
  }
`;

const workText = css`
  color: white;
  opacity: 1;
  text-shadow: 0px 0px 8px black;
`;

//Sections:
// RageON
// Applyboard
// AnataMassage
// OkeyLabs
// ReportOn!

function WorkPortfolio(props){
    return (
      <_Container>
        <_FloatingCont>
          <h1
            style={{
              marginTop: 10,
              fontSize: "2.7em"
            }}
          >
            {"< Developer >"}
          </h1>
          <_PButton onClick={()=>{
            props.history.push('/',{ scrollTop: 1000});
          }}> P </_PButton>
        </_FloatingCont>
        <Parallax pages={4}>
          <Parallax.Layer
            offset={3}
            speed={1}
            style={{ backgroundColor: "#87BCDE" }}
          />
          {BackgroundClouds}
          <Parallax.Layer
            offset={1}
            speed={1}
            style={{ backgroundColor: "#243B4A", opacity: 0.5 }}
          />
          <Parallax.Layer
            offset={2}
            speed={1}
            style={{ backgroundColor: "#805E73" }}
          />

          <Parallax.Layer
            offset={1}
            speed={0}
            factor={4}
            style={{
              color: "blue",
              backgroundImage: `url(${stars})`,
              backgroundSize: "cover"
            }}
          />
          {Badges}
          <ParallaxFlex offset={1} speed={0.1}>
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

          <ParallaxFlex offset={1} speed={-0.1}>
            <BrowserWindow main>
              <img style={{ width: "100%" }} src={applyboardSearch} />
              <h3 className={workText}>
                Lead Front Engineer && UX/UI Designer
              </h3>
              <h4 className={workText}>
                Applyboard allows international students find & apply to their
                dream universities in 60 seconds flat. During my time leading
                the front end team, we rebuilt the school/program search and
                institution pages to improve UX, user retention, click-through,
                feel and speed.
                <br /> Oh yeah, I also did some hiring and management 😇
              </h4>
              <a target="_blank" href="http://applyboard.com/schools">
                <_Button shadow color="light">
                  See Live
                </_Button>
              </a>
            </BrowserWindow>
          </ParallaxFlex>
        </Parallax>
      </_Container>
    );
  }
export default withRouter(WorkPortfolio);
