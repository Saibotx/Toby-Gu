import React from "react";
import Parallax from "react-springy-parallax";
import styled from "react-emotion";

import stars from "assets/stars.png";
import satellite4 from "assets/satellite4.svg";

import chrometab from "assets/chrometab.png";
import clients from "assets/clients.svg";

import applyboardSchool from "assets/applyboardSchool.png";
import applyboardSearch from "assets/applyboardSearch.png";
import applyboardEligibility from "assets/applyboardEligibility.png";

//Import Components
import BackgroundClouds from "./components/BackgroundClouds";
import Badges from "./components/Badges";

// const url = (name, wrap = false) => `${wrap ? ' : ''uild/assets/${name}.svg${wrap ? ')' : ''}`;

const _Container = styled("div")`
  z-index: 5;
  height: 100vh;
  position: fixed;
  width: 100vw;
  ${'' /* background-color: lightgrey; */}
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
  width: 90%;
  @media (max-width: 550px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const BrowserWindowImg = styled("img")`
  width: ${props => (props.main ? "60%" : "40%")};
  @media (max-width: 550px) {
    width: 75%;
    padding: 10% 0 10% 0;
    ${props => props.main && `width:90%;`};
  }
`;

export default class WorkPortfolio extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <_Container>
        <_FloatingCont>
          <h1 style={{ marginTop: 10 }}> {"< Developer >"} </h1>
          <_PButton> P </_PButton>
        </_FloatingCont>
        <Parallax pages={4} ref={ref => (this.parallax = ref)}>
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
            <BrowserWindowImg src={applyboardSchool} />
            <BrowserWindowImg src={applyboardEligibility} />
          </ParallaxFlex>
          <ParallaxFlex offset={1} speed={-0.1}>
            <BrowserWindowImg main src={applyboardSearch} />
          </ParallaxFlex>
        </Parallax>
      </_Container>
    );
  }
}
