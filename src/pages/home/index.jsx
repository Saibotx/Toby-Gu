import React from 'react';
import Home from './Home.jsx';
//ass

export default class HomePage extends React.Component {
  constructor(){
    super();
    this.pickSide = this.pickSide.bind(this);
    this.state={
      side:null
    }
  }
  pickSide(side){
    var side = side || null;
    this.setState({
      side:side
    })
  }
  render(){
    return (
      <Home
        onPickSide={this.pickSide}
        side={this.state.side}
      />
    );

  }
}
