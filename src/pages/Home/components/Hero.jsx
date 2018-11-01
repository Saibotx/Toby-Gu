//import packages
import React from "react";
import styled, { css } from "react-emotion";
import MtSvgLines from "react-mt-svg-lines";

//Import components
import _Button from "core/Button.jsx";
import Svg from "./HeroSvg.jsx";

//Import assets
import cover from "../../../assets/cover.jpg";
import coverMobile from "../../../assets/cover-mobile.png";

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
  text-shadow: 0px 0px 10px rgb(100, 100, 100);
`;

const _ButtonRow = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  max-width: 450px;
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

const _SubTitle = styled("h4")``;

class HeroText extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <_HeroTextDiv>
        <_Title>
          <_PurpText>Toby</_PurpText> <_OjText>Guu</_OjText>
        </_Title>
        <_SubTitle>
          Senior Software Engineer | Designer | Front End Lead Developer
        </_SubTitle>
        <_SubTitle>Photographer, Entrepreneur & Digital Nomad</_SubTitle>
        <_ButtonRow>
          <_Button onClick={this.props.scrollToBottom}>Learn More</_Button>
          <a target="_blank" href="mailto:tobiasgoo@gmail.com?Subject=Hello!">
            <_Button>Work With Me!</_Button>
          </a>
        </_ButtonRow>
      </_HeroTextDiv>
    );
  }
}

const HeroSvg = styled(Svg)`
  width: 9vw;
  @media (max-width: 1400px) {
    width: 12vw;
  }
  @media (max-width: 1200px) {
    width: 13vw;
  }
  @media (max-width: 1200px) and (max-height: 900px) {
    width: 10vw;
  }
  @media (max-width: 1200px) and (max-height: 600px) {
    width: 10vw;
  }
  @media (max-width: 1200px) and (min-height: 800px) and (max-height: 500px) {
    display: none;
  }
  @media (max-width: 650px) {
    width: 20vw;
  }
`;

const _HeroContainer = styled("div")`
  height:93vh;
  padding-top: 2px;
  width:100%;
  position:relative;
  background-size: cover;
  background-attachment: fixed;
  background-position: center top;
  @media (min-width: 651px){
    background-image: url('${cover}');
  }
  @media (max-width: 650px){
    background-image: url('${coverMobile}');
    background-attachment: scroll;
    ${'' /* background-color: transparent; */}
    ${'' /* background-image: none; */}
  }

`;

const _AnimatedTextContainer = styled("div")`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  z-index: 0;
  width: 100vw;
  height: 57vw;
  min-height: 92vh;
  min-width: 161vh;
  @media (max-width: 650px) {
    ${'' /* display: none; */}
    position: absolute;
  }
  ${'' /* @media (max-width: 710px) and (min-height:1000px) {
    display: none;
  } */}
`;

const _AnimatedText = styled("div")`
  left: 25%;
  top: 39%;
  position: absolute;
  color: white;
  @media (max-width: 800px) and (min-height: 900px) {
    left: 27%;
    top: 43%;
  }
  @media (max-width: 1200px) and (min-height: 1300px) {
    left: 27%;
    top: 43%;
  }
  @media (max-width: 640px) {
    left: 50%;
    top: 25%;
  }
`;
//
// const _MobileBgWorkAround = styled('div')`
//   width:100%;
//   height:100%;
//   top:0%;
//   left:0%;
//   background-image: url('${coverMobile}');
//   background-size: cover;
//   background-position: center top;
//   position: fixed;
//   z-index: 0;
//   @media (min-width: 651px){
//     display: none;
//   }
//
// `

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
      <HeroText scrollToBottom={props.scrollToBottom} />
      {/* <_MobileBgWorkAround/> */}
    </_HeroContainer>
  );
}
