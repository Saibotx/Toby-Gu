//import packages
import React from 'react';
import styled, { css } from 'react-emotion';

//Import components
import _Button from 'core/Button.jsx';

//Import assets
import cover from '../../../assets/cover.jpg';

const _HeroTextDiv = styled('div')`
  color:white;
  max-width:600px;
  ${'' /* width:50%; */}
  padding:0 10px 0 10px;
  text-align:center;
  margin:auto;
  top:65vh;
  transform:translateY(-100%);
  position:relative;
  font-weight: 200;
  z-index: 2;
`;

const _ButtonRow = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  max-width:400px;
  margin:auto;
`;

const _PurpText = styled('div')`
  color:#c1c7fa;
`;
const _OjText = styled('div')`
  color:#f7cb99;
`;

const _Title=styled('h1')`
  position:relative;
  left:50%;
  white-space: nowrap;
  width:600px;
  transform:translate(-50%);
`

class HeroText extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <_HeroTextDiv>
        <_Title><_PurpText>Toby</_PurpText> <_OjText>Gu</_OjText></_Title>
        <h4>Senior Software Engineer | Designer | Front End Lead Developer</h4>
        <h4>Photographer, Entrepreneur & World Traveller</h4>
        <_ButtonRow>
          <_Button>Learn More</_Button>
          <_Button>See Work</_Button>
        </_ButtonRow>
      </_HeroTextDiv>
    );
  }
}



const _HeroContainer = styled('div')`
  height:93vh;
  padding-top: 2px;
  width:100%;
  position:relative;
  background-size: cover;
  background-image: url('${props => props.src}');
  background-attachment: fixed;
  background-position: center top;
`;

const _AnimatedTextContainer = styled('div')`
  @media (max-width: 550px){
    display:none;
  };
  position:fixed;
  left:50%;
  transform: translateX(-50%);
  z-index:0;
  width:100vw;
  height:57vw;
  min-height:92vh;
  min-width:161vh;
`;

const _AnimatedText = styled('div')`
  left:32%;
  top:40%;
  position:absolute;
  color:white
`;


export default function Hero(props){
  return (
    <_HeroContainer src={cover}>
      <_AnimatedTextContainer>
        <_AnimatedText>
        {/* aspect ratio of 7:4 */}
          AssHole with small face
        </_AnimatedText>
      </_AnimatedTextContainer>
      <HeroText/>
    </_HeroContainer>
  )
}
