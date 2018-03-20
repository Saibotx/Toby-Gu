//Import Packages
import React from "react";
import Parallax from "react-springy-parallax";
import styled, { css } from "react-emotion";
import {withRouter} from 'react-static';

//Import Assets
import stars from "assets/stars.png";
import chrometab from "assets/chrometab.png";




//Import Components
import BackgroundClouds from "./components/BackgroundClouds";
import Badges from "./components/Badges";
import RageOn from "./components/RageOn";
import Applyboard from "./components/Applyboard";
import AnataMassage from "./components/AnataMassage";
import ReportOn from "./components/ReportOn";


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


//Sections:
// RageON page 1 grey
// Applyboard page 2 purp
// AnataMassage page 3 green
// OkeyLabs page 4 oj
// ReportOn! page 5 blue
// Work with me bitch page 6

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
        <Parallax pages={7}>
          {/*  last page has no transpaency. we want clouds above it. */}
          <Parallax.Layer
            offset={6}
            speed={1}
            style={{ backgroundColor: "#87BCDE", opacity: 1 }}
          />
          {/* background floating things */}
          {BackgroundClouds}
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
          <Parallax.Layer
            offset={5}
            speed={1}
            style={{ backgroundColor: "#e7f187", opacity: 0.5 }}
          />
          <Parallax.Layer
            offset={4}
            speed={1}
            style={{ backgroundColor: "#f1c687", opacity: 0.5 }}
          />
          <Parallax.Layer
            offset={3}
            speed={1}
            style={{ backgroundColor: "#b2f187", opacity: 0.5 }}
          />

          <Parallax.Layer
            offset={2}
            speed={1}
            style={{ backgroundColor: "#805E73", opacity: 0.5 }}
          />
          <Parallax.Layer
            offset={1}
            speed={1}
            style={{ backgroundColor: "#243B4A", opacity: 0.5 }}
          />

          {/* Actual content */}
          {Badges}
          {RageOn}
          {Applyboard}
          {AnataMassage}
          {ReportOn}

        </Parallax>
      </_Container>
    );
  }
export default withRouter(WorkPortfolio);
