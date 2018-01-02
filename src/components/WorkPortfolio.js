import React from "react";
import Parallax from "react-springy-parallax";
import styled, { css } from 'react-emotion';

const _Container = styled('div')`
  z-index: 5;
  height:100vh;
  position:fixed;
  width:100vw;
`;
const _FloatingCont = styled('div')`
  width:100vw;
  z-index: 10;
  text-align: center;
  position:fixed;
`;

const _PButton = styled('button')`
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
`

export default class WorkPortfolio extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <_Container>
        <_FloatingCont>
          <h1> {'< Developer >'} </h1>
          <_PButton> P </_PButton>
        </_FloatingCont>


      <Parallax pages={3} ref={ref => (this.parallax = ref)}>
        <Parallax.Layer offset={1} speed={1} style={{ backgroundColor: '#243B4A' }} />
        <Parallax.Layer offset={2} speed={1} style={{ backgroundColor: '#805E73' }} />
        <Parallax.Layer offset={3} speed={1} style={{ backgroundColor: '#87BCDE' }} />
      </Parallax>
      </_Container>
    );
  }
}
