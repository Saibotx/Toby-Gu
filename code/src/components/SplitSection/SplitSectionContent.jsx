import styled, { css } from 'react-emotion';
import React from 'react';
// import {withRouter} from 'react-router-dom';
import {withRouter} from 'react-static';

import _Button from 'core/Button.jsx';


import splitleft from 'assets/splitleft.png';
import splitright from 'assets/splitright.png';
import left from 'assets/left.png';
import right from 'assets/right.png';

//helper function
function calcHovSideVal(left,right,def,val){
  switch (val){
    case 'left':
      return left
    case 'right':
      return right
    default:
      return def
  }
};

//styling media queries
const mediumWidth = '799px'
const largeWidth = '800px'


const _ContentContainer = styled('div')`
  z-index: 4;
  opacity:${props=>props.side ? '0' : '1'};
  transition: all 0.5s;
`;



const _SplitImage = styled('img')`
  @media (max-width: ${mediumWidth}){
    height:60vh;
  }
  @media (min-width: ${largeWidth}){
    height:80vh;
  }
  opacity: ${props=>calcHovSideVal(
    props.left ? '1' : '0',
    props.left ? '0' : '1',
    '1',
    props.hoverSide)};
  position:absolute;
  z-index: 1;
  bottom:0px;
  left: ${props=>calcHovSideVal('60%','40%','50%',props.hoverSide)};
  transform:translate(-50%);
  transition:all 0.5s;
`;

const _MouseOverCont = styled('div')`
  width:50%;
  height:100%;
  position:absolute;
  z-index:3;
  text-align: center;
`;

const _Profession = styled('div')`
  transition:all 0.5s;
  @media (max-width: ${mediumWidth}){
    width:28vw;
    font-size: 0.9em;
  }
  @media (min-width: ${largeWidth}){
    width:34vw;
  }
  margin-top: 8vw;
  display:inline-block;
  opacity: ${props=>calcHovSideVal(
    props.left ? '1' : '0.1',
    props.left ? '0.1' : '1',
    '1',
    props.hoverSide)};
  margin-left: ${props=>calcHovSideVal('30%','-30%','0',props.hoverSide)};
`

const _Title = styled('h2')`
  @media (max-width: ${mediumWidth}){
    font-size: 1.3em;
  }
`

const _HiddenDescription = styled('div')`
  padding:10px;
  @media (max-width: ${mediumWidth}){
    display: none;
  }
`


function SplitSectionContent(props){
  console.log("splitsection side", props.side);
  return (
    <_ContentContainer side={props.side}>
      <_MouseOverCont
        onMouseEnter={()=>props.onMouseEnter('left')}>
        <_Profession
          left
          hoverSide={props.hoverSide}
          >
          <_Title>{'<Developer>'}</_Title>
            <p>
              Software engineer, front end specialist & React.JS rockstar.
            </p>
            <br/>
          <_HiddenDescription>
            <p>
              I love making visual things sexy with clean,
              elegant and efficient code.
            </p>
            <br/>
          </_HiddenDescription>
          <_Button
            onClick={()=>{
              props.history.push('/engineer');
            }}
            small whiteBg color='dark'>
            See Work
          </_Button>
        </_Profession>
      </_MouseOverCont>
      <_SplitImage hoverSide={props.hoverSide} left src={`${splitleft}`}/>
      <_MouseOverCont
        style={{left:'50%'}}
        onMouseEnter={()=>props.onMouseEnter('right')}>
        <_Profession
          hoverSide={props.hoverSide}
          >
          <_Title>{'Photographer'}</_Title>
            <p>
              Travelling, exploring and learning new things is my passion.
            </p>
            <br/>
            <_HiddenDescription>
            <p>
              I'm a hobby photographer that shares my stories &
              journeys with the world
            </p>
            <br/>
          </_HiddenDescription>
          <_Button
            onClick={()=>{
              props.history.push('/photographer', {scrollToTop:false});
            }}
            small whiteBg color='dark'>
            View Gallery
          </_Button>
        </_Profession>
      </_MouseOverCont>
      <_SplitImage hoverSide={props.hoverSide} src={`${splitright}`}/>
      <_SplitImage hoverSide={props.hoverSide} style={{opacity:props.hoverSide=='left'? 1: 0}} src={`${left}`}/>
      <_SplitImage hoverSide={props.hoverSide} style={{opacity:props.hoverSide=='right'? 1: 0}} src={`${right}`}/>
    </_ContentContainer>
  );
}
export default SplitSectionContent;
