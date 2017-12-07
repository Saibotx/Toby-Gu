
import React from 'react';
import styled, { css } from 'react-emotion';

const _Button = styled('button')`
  border-radius: 10px;
  background-color: rgba(0,0,0,0);
  width:${props=>props.small ? '130px' : '175px'};
  margin-top:10px
  color: ${props => props.color == 'dark' ? 'rgb(73,73,73)' : 'white'};
  border-color: ${props => props.color == 'dark' ? 'rgb(73,73,73)' : 'white'};
  font-size: ${props=>props.small ? '1em' : '1.2em'};;
  font-weight: 200;
  padding: ${props=>props.small ? '5px 10px 5px 10px' : '10px 30px 10px 30px'};
  border-width: 2px;
  transition: all 0.2s;
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
