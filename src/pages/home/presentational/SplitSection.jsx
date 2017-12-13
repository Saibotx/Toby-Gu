//import packages
import styled, { css } from 'react-emotion';
import React from 'react';
import {withRouter} from 'react-router-dom';
import { Switch, Route} from 'react-router-dom';

//import components
import _Button from '../core/_Button.jsx';
import SplitSectionContent from './SplitSectionContent.jsx';
import PageShell from '../functional/PageShell';
import ExampleComponent from '../../../components/ExampleComponent';



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

const _SplitContainer = styled('div')`
  display:flex;
  flex-direction: row;
  position:relative;
  background: ${props=>props.side != 'right' ? '#e2e2e2' :  '#d5d9ff'};
`;

const _RightBg = styled('div')`
  height:0;
  z-index: 0;
  width: ${props=>{
    if (props.side) {
      return props.side == 'left' ? '3%' : '97%'
    }
    return calcHovSideVal('30%','70%','50%',props.hoverSide)
    }
  };
  @media (max-width: ${mediumWidth}){
    border-bottom: ${props=>{
      if (props.side){
        return '100vh solid #d5d9ff';
      }
      return '60vh solid #d5d9ff';
    }};
    border-left: ${props=>{
      if(props.side){
        return '11vh solid transparent';
      }
      return '6.75vh solid transparent';
    }};
  }
  @media (min-width: ${largeWidth}){
    border-bottom: ${props=>{
      if (props.side){
        return '100vh solid #d5d9ff';
      }
      return '80vh solid #d5d9ff';
    }};
    border-left: ${props=>{
      if(props.side){
        return '11vh solid transparent';
      }
      return '9vh solid transparent';
    }};
  }
  transition:all 0.5s;
`;

const _LeftBg = styled('div')`
  height:0;
  z-index: 0;
  width: ${props=>{
    if (props.side) {
      return props.side == 'left' ? '97%' : '3%'
    }
    return calcHovSideVal('70%','30%','50%',props.hoverSide)
    }
  };
  @media (max-width: ${mediumWidth}){
    border-top: ${props=>{
      if (props.side){
        return '100vh solid #e2e2e2';
        // return '100vh solid blue';
      }
      return '60vh solid #e2e2e2';
      // return '60vh solid blue';
    }};
    border-right: ${props=>{
      if(props.side){
        return '11vh solid transparent';
      }
      return '6.75vh solid transparent';
    }};
  }
  @media (min-width: ${largeWidth}){
    border-top: ${props=>{
      if (props.side){
        return '100vh solid #e2e2e2';
        // return '100vh solid blue';
      }
      return '80vh solid #e2e2e2';
      // return '80vh solid blue';
    }};
    border-right: ${props=>{
      if(props.side){
        return '11vh solid transparent';
      }
      return '9vh solid transparent';
    }};
  }
  transition:all 0.5s;
`;

function SplitSection(props){
  return (
    <_SplitContainer
      onMouseLeave={props.onMouseLeave}
      side={props.side}
      >
      <SplitSectionContent {...props}/>
      <div style={{position:'absolute', zIndex:5}}>
        <Switch>
          {/* <Route  */}
          <Route exact path="/engineer" component={PageShell(ExampleComponent)} />
          <Route exact path="/photographer" component={PageShell(ExampleComponent)} />
          {/* <Route exact path="/photographer" component={PageShell(ExampleComponent)} /> */}
        </Switch>
      </div>
      <_LeftBg side={props.side} hoverSide={props.hoverSide}/>
      <_RightBg side={props.side} hoverSide={props.hoverSide}/>
    </_SplitContainer>
  );
}

export default withRouter(SplitSection);
