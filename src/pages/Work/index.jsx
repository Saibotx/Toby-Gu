import React from "react";
import Parallax from "react-springy-parallax";
import styled from "react-emotion";

//Import Images
import swift from "assets/badges/swift.png";
import redux from "assets/badges/redux.png";
import react from "assets/badges/react.png";
import node from "assets/badges/node.png";
import java from "assets/badges/java.png";
import html from "assets/badges/html.png";
import javascript from "assets/badges/javascript.png";
import css from "assets/badges/css.png";

import illustrator from "assets/badges/illustrator.png";
import photoshop from "assets/badges/photoshop.png";
import aftereffects from "assets/badges/aftereffects.png";

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
const SubTitle = styled("h3")`
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  width: 80%;
  line-height: 1.5;
`;

const BadgeRow = styled("div")`
  display: flex;
  justify-content: center;
  position:relative;
`;
const Badge = styled("img")`
  width: ${props=>(props.scale || 1) * 15}vw;
  height: ${props=>(props.scale || 1) * 15}vw;
  position: relative;
  ${"" /* margin:0 5px 0 5px; */} ${"" /* flex:1; */};
`;

const BadgePlaceHolder = styled("div")`
  width: ${props => props.width * 15}vw;
  height: 15vw;
  ${"" /* flex:${props=>props.flex}; */};
`;

export default class WorkPortfolio extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <_Container>
        <_FloatingCont>
          <h1> {"< Developer >"} </h1>
          <_PButton> P </_PButton>
        </_FloatingCont>
        <Parallax pages={3} ref={ref => (this.parallax = ref)}>
          <Parallax.Layer offset={0} speed={2}>
            <SubTitle style={{marginTop:'10vh'}}>
              My selected works have been built using some of
              the following:
            </SubTitle>
          </Parallax.Layer>

          <Parallax.Layer offset={0} speed={2}>
            <BadgeRow style={{top:'20vh'}}>
              <Badge src={swift} />
              <BadgePlaceHolder width={3} />
              <Badge src={java} />
            </BadgeRow>
          </Parallax.Layer>

          <Parallax.Layer offset={0} speed={1.6}>
            <BadgeRow style={{top:'20vh'}}>
            <Badge src={redux} />
            <BadgePlaceHolder width={1} />
            <Badge src={node} />
          </BadgeRow>
          </Parallax.Layer>

          <Parallax.Layer offset={0} speed={1.2}>
            <BadgeRow style={{top:'20vh'}}>
            <Badge src={react} />
          </BadgeRow>
          </Parallax.Layer>

          <Parallax.Layer offset={0} speed={1.4}>
            <SubTitle style={{marginTop:'35vh'}}>
              With designs created using
            </SubTitle>
          </Parallax.Layer>

          <Parallax.Layer offset={0} speed={1.4}>
            <BadgeRow style={{top:'45vh'}}>
            <Badge src={photoshop} />
          </BadgeRow>
          </Parallax.Layer>
          <Parallax.Layer offset={0} speed={1.2}>
            <BadgeRow style={{top:'45vh'}}>
            <Badge style={{padding:10}} scale={0.7} src={illustrator} />
            <BadgePlaceHolder width={1}/>
            <Badge style={{padding:10}} scale={0.7} src={aftereffects} />
          </BadgeRow>
          </Parallax.Layer>

          {/* <Parallax.Layer
            offset={0}
            speed={1}
            style={{ textAlign:'center' }}
          >
            Scroll Down!
          </Parallax.Layer> */}
          <Parallax.Layer
            offset={0.95}
            speed={1}
            style={{ backgroundColor: 'red' }}
          />

          <Parallax.Layer
            offset={1}
            speed={1}
            style={{ backgroundColor: "#243B4A" }}
          />
          <Parallax.Layer
            offset={2}
            speed={1}
            style={{ backgroundColor: "#805E73" }}
          />
          <Parallax.Layer
            offset={3}
            speed={1}
            style={{ backgroundColor: "#87BCDE" }}
          />
        </Parallax>
      </_Container>
    );
  }
}
