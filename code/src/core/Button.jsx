
import React from 'react';
import styled, { css } from 'react-emotion';

const _Button = styled('button')`
  cursor: pointer;
  border-radius: 10px;
  background-color: rgba(0,0,0,0);
  margin-top:10px
  color: ${props => props.color == 'dark' ? 'rgb(73,73,73)' : 'white'};
  border-color: ${props => props.color == 'dark' ? 'rgb(73,73,73)' : 'white'};
  width:${props=>props.small ? '130px' : '175px'};
  font-size: ${props=>props.small ? '1em' : '1.2em'};
  padding: ${props=>props.small ? '5px 10px 5px 10px' : '10px 30px 10px 30px'};
  @media (max-width: 550px){
    width:${props=>props.small ? '100px' : '155px'};
    font-size: ${props=>props.small ? '0.8em' : '1em'};
    padding: ${props=>props.small ? '3px 5px 3px 5px' : '10px 15px 10px 15px'};
  }
  font-weight: 200;
  border-width: 2px;
  transition: all 0.2s;
  ${props => props.shadow && (
    `text-shadow: 0px 0px 8px ${props.color == 'dark' ? 'white' : 'black'};
    box-shadow: 0px 0px 3px ${props.color == 'dark' ? 'white' : 'black'};`
    )}

  &:hover{
    background-color: ${props=>props.whiteBg ?
      'rgba(255,255,255,0.75)' : 'rgba(213, 217, 255,0.75)'};
  }
  &:active{
    background-color: ${props=>props.whiteBg ?
      'rgba(255,255,255,1)' : 'rgba(213, 217, 255,1)'};
    }
  }
`;

export default _Button;
