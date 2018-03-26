//Import Packages
import React from "react";
import styled, { css } from "react-emotion";
import Parallax from "react-springy-parallax";

//Import Assets
import swift from "assets/badges/swift.png";
import redux from "assets/badges/redux.png";
import react from "assets/badges/react.png";
import node from "assets/badges/node.png";
import java from "assets/badges/java.png";
import html from "assets/badges/html.png";
import javascript from "assets/badges/javascript.png";
import css3 from "assets/badges/css3.png";

import illustrator from "assets/badges/illustrator.png";
import photoshop from "assets/badges/photoshop.png";
import aftereffects from "assets/badges/aftereffects.png";

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
  position: relative;
`;
const Badge = styled("img")`
  width: ${props => (props.scale || 1) * 14}vw;
  max-width: ${props => (props.scale || 1) * 150}px;
  height: ${props => (props.scale || 1) * 14}vw;
  max-height: ${props => (props.scale || 1) * 150}px;
  padding: ${props => (props.scale || 1) * 1}vw;
  position: relative;
  ${"" /* margin:0 5px 0 5px; */} ${"" /* flex:1; */};
`;

const BadgePlaceHolder = styled("div")`
  width: ${props => props.width * 14}vw;
  max-width: ${props => (props.width || 1) * 150}px;
  max-height: ${props => (props.width || 1) * 150}px;
  padding: ${props => (props.width || 1) * 1}vw;
  height: 14vw;
  ${"" /* flex:${props=>props.flex}; */};
`;

const RowTwo = css`
  margin-top: calc(20vh + 400px);
  @media (max-width: 550px) {
    margin-top: calc(20vh + 38vw);
  }
`;

const RowThree = css`
  margin-top: calc(20vh + 450px);
  @media (max-width: 550px) {
    margin-top: calc(20vh + 45vw);
  }
`;

const Badges = ({ onClick }) => (
  <div onClick={onClick}>
    <Parallax.Layer offset={0} speed={2}>
      <SubTitle style={{ marginTop: "12vh" }}>
        My selected works have been built using some of the following:
      </SubTitle>
    </Parallax.Layer>

    <Parallax.Layer offset={0} speed={2}>
      <BadgeRow style={{ top: "20vh" }}>
        <Badge src={swift} />
        <BadgePlaceHolder width={3} />
        <Badge src={java} />
      </BadgeRow>
    </Parallax.Layer>

    <Parallax.Layer offset={0} speed={1.6}>
      <BadgeRow style={{ top: "20vh" }}>
        <Badge src={redux} />
        <BadgePlaceHolder width={1} />
        <Badge src={node} />
      </BadgeRow>
      <BadgeRow style={{ top: "20vh" }}>
        <Badge src={javascript} />
        <BadgePlaceHolder width={1} />
        <Badge src={css3} />
      </BadgeRow>
    </Parallax.Layer>

    <Parallax.Layer offset={0} speed={1.2}>
      <BadgeRow style={{ top: "20vh" }}>
        <Badge src={react} />
      </BadgeRow>
      <BadgeRow style={{ top: "20vh" }}>
        <Badge src={html} />
      </BadgeRow>
    </Parallax.Layer>

    <Parallax.Layer offset={0} speed={1.4}>
      <SubTitle className={RowTwo}>With designs created using</SubTitle>
    </Parallax.Layer>

    <Parallax.Layer offset={0} speed={1.4}>
      <BadgeRow className={RowThree}>
        <Badge src={photoshop} />
      </BadgeRow>
    </Parallax.Layer>
    <Parallax.Layer offset={0} speed={1.2}>
      <BadgeRow className={RowThree}>
        <Badge style={{ padding: 10 }} scale={0.7} src={illustrator} />
        <BadgePlaceHolder width={1} />
        <Badge style={{ padding: 10 }} scale={0.7} src={aftereffects} />
      </BadgeRow>
      <br />
      <SubTitle style={{fontWeight:100, opacity:0.2}}>
        (Tap Anywhere to Continue)
      </SubTitle>
    </Parallax.Layer>
  </div>
);

export default Badges;
