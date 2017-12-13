import React from 'react';
import Home from './Home.jsx';
import {withRouter} from 'react-router-dom';

class HomePage extends React.Component {
  constructor(props){
    super(props);
    this.pickSide = this.pickSide.bind(this);
    let pathname = props.location.pathname
    var side = null;
    switch (pathname){
      case '/engineer':
        side = 'left';
        break;
      case '/photographer':
        side = 'right';
        break;
      default:
        side = null;
    }
    this.state={
      side
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


export default withRouter(HomePage);
