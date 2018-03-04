//import packages
import styled, { css } from 'react-emotion';
import React from 'react';

//import components
import _Button from 'core/Button.jsx';

//import assets
import profile from '../../../assets/profile.jpg';

const _ProfileBackground = styled('div')`
  width:100%;
  background-color:white;
  z-index:2;
  position:relative
`;

const _ProfileContainer = styled('div')`
    width:80%;
    transform:translateY(-110px);
    text-align: center;
    margin-left: 10%;
    margin-right: 10%;
    color:#494949;
    z-index: 2;
    position:relative;
`;

const _PortHole = styled('img')`
  width:200px;
  border-radius: 50%;
  display:inline-block;
`

export default function Profile(props){
  return (
    <_ProfileBackground>
      <_ProfileContainer>
        <_PortHole src={`${profile}`}/>
        <h2>Hey! I'm Toby</h2>
        <h3> A Canadian software engineer specializing in front-end development and design. <br/><br/> I've founded two startups and have been coding since before facebook was cool.</h3>
        <_Button color='dark'>Learn More</_Button>
      </_ProfileContainer>
    </_ProfileBackground>
  )
}
