//import packages
import React from "react";
import styled, { css } from "react-emotion";
import MtSvgLines from "react-mt-svg-lines";

//Import components
import _Button from "core/Button.jsx";
import Svg from "./HeroSvg.jsx";

//Import assets
import cover from "../../../assets/cover.jpg";

const _HeroTextDiv = styled("div")`
  color: white;
  max-width: 600px;
  ${"" /* width:50%; */} padding:0 10px 0 10px;
  text-align: center;
  margin: auto;
  top: 65vh;
  transform: translateY(-100%);
  position: relative;
  font-weight: 200;
  z-index: 2;
`;

const _ButtonRow = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  max-width: 400px;
  margin: auto;
`;

const _PurpText = styled("div")`
  color: #c1c7fa;
  display: inline;
`;
const _OjText = styled("div")`
  color: #f7cb99;
  display: inline;
`;

const _Title = styled("h1")`
  position: relative;
  left: 50%;
  white-space: nowrap;
  width: 600px;
  transform: translate(-50%);
`;

const _SubTitle = styled("h4")`
  text-shadow: 2px 2px 10px #000;
`;

class HeroText extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <_HeroTextDiv>
        <_Title>
          <_PurpText>Toby</_PurpText> <_OjText>Gu</_OjText>
        </_Title>
        <_SubTitle>
          Senior Software Engineer | Designer | Front End Lead Developer
        </_SubTitle>
        <_SubTitle>Photographer, Entrepreneur & World Traveller</_SubTitle>
        <_ButtonRow>
          <_Button>Learn More</_Button>
          <_Button>See Work</_Button>
        </_ButtonRow>
      </_HeroTextDiv>
    );
  }
}

const HeroSvg = styled(Svg)`
  width:11vw;
  @media (max-width:1400px){
    width:12vw;
  }
  @media (max-width:1200px){
    width:14vw;
  }
    @media (max-width:1200px) and (max-height: 600px ){
      width:10vw;
    }
    @media (max-width:1200px) and (min-height:800px ) and (max-height: 500px){
      display: none;
    }
`

const _HeroContainer = styled("div")`
  height:93vh;
  padding-top: 2px;
  width:100%;
  position:relative;
  background-size: cover;
  background-image: url('${props => props.src}');
  background-attachment: fixed;
  background-position: center top;
`;

const _AnimatedTextContainer = styled("div")`
  @media (max-width: 550px) {
    display: none;
  }
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  z-index: 0;
  width: 100vw;
  height: 57vw;
  min-height: 92vh;
  min-width: 161vh;
`;

const _AnimatedText = styled("div")`
  left: 20%;
  top: 40%;
  position: absolute;
  color: white;
`;

export default function Hero(props) {
  return (
    <_HeroContainer src={cover}>
      <_AnimatedTextContainer>
        <_AnimatedText>
          {/* aspect ratio of 7:4 */}
          <div>
            <MtSvgLines
              animate={500}
              duration={3000}
              stagger={100}
              timing="ease-in"
            >
              <HeroSvg className="ass" />
            </MtSvgLines>
          </div>
        </_AnimatedText>
      </_AnimatedTextContainer>
      <HeroText />
    </_HeroContainer>
  );
}
