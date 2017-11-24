//Import Packages
import React from 'react';
import styled, { css } from 'react-emotion';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
//Import assets
import cover from '../../assets/cover.jpg';
import profile from '../../assets/profile.jpg';


const _HeroContainer = styled('div')`
  height:93vh;
  width:100%;
  position:relative;
  background-size: cover;
  background-image: url('${props => props.src}');
  background-attachment: fixed;
  background-position: center top;
`;

const _HeroText = styled('div')`
  color:white;
  max-width:600px;
  width:50%;
  text-align:center;
  margin:auto;
  top:65vh;
  transform:translateY(-100%);
  position:relative;
  font-weight: 200;
`;

const _ButtonRow = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  max-width:400px;
  margin:auto;
`;

const _Button = styled('button')`
  border-radius: 10px;
  background-color: rgba(0,0,0,0);
  width:175px;
  margin-top:10px
  color: ${props => props.color || 'white'};
  border-color: ${props => props.color || 'white'};
  font-size: 1.2em;
  font-weight: 200;
  padding:10px 30px 10px 30px;
  border-width: 2px;

`;

const _PurpText = styled('text')`
  color:#c1c7fa;
`;
const _OjText = styled('text')`
  color:#f7cb99;
`;

const _Title=styled('h1')`
  position:relative;
  left:50%;
  white-space: nowrap;
  width:600px;
  transform:translate(-50%);
`



function Hero(props){
  return (
    <_HeroContainer src={cover}>
      <div style={{position:'fixed', left:'50%', transform:'translateX(-50%)', zIndex:1, width:'100vw', height:'57vw', minHeight:'92vh', minWidth:'161vh', backgroundColor:'red', opacity:0.5}}>
        <div style={{left:'32%', top:'46%', position:'absolute',}}>
        {/* aspect ratio of 7:4 */}
          AssHole with small face
        </div>
      </div>
      <_HeroText>
        <_Title><_PurpText>Toby</_PurpText> <_OjText>Gu</_OjText></_Title>
        <h4>Senior Software Engineer | Designer | Front End Lead Developer</h4>
        <h4>Photographer, Entrepreneur & World Traveller</h4>
        <_ButtonRow>
          <_Button>Learn More</_Button>
          <_Button>See Work</_Button>
        </_ButtonRow>
      </_HeroText>
    </_HeroContainer>
  )
}

const _ProfileContainer = styled('div')`
    width:60%;
    transform:translateY(-110px);
    text-align: center;
    margin-left: 20%;
    margin-right: 20%;
    color:#494949;
    z-index: 2;
    position:relative;
`;

const _PortHole = styled('img')`
  width:200px;
  border-radius: 50%;
  display:inline-block;
`

function Profile(props){
  return (
    <div style={{width:'100%', backgroundColor:'white', zIndex:2, position:'relative'}}>
    <_ProfileContainer>
      <_PortHole src={`${profile}`}/>
      <h2>Hey! I'm Toby</h2>
      <h3> A Toronto based software engineer specializing in front-end development and design. <br/> I've founded two startups and have been coding since before facebook was cool.</h3>
      <_Button color='#494949'>Learn More</_Button>
    </_ProfileContainer>
  </div>
  )
}


export default function Home(props) {
  return(
    <div>
      <Hero/>
      <Profile/>
    </div>
  );
}
