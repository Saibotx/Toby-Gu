import React from 'react';
import SplitSection from './SplitSection.jsx';
import {withRouter} from 'react-router-dom';
// import {withRouter} from 'react-static';

class SplitSectionContainer extends React.Component {
  constructor() {
    super();
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this._isInSubPath = this._isInSubPath.bind(this);
    this.state = { hover:null }
  }

  _isInSubPath(){
    let pathname = this.props.location.pathname
    if ( pathname != '/'){
      return true
    }
    return false;
  }

  onMouseLeave(){
    if (this.state.hover != null && !this._isInSubPath())
      this.setState({hover:null});
  }

  onMouseEnter(side){
    if (side && !this._isInSubPath()){
      this.setState({hover:side});
    }
  }

  render(){
    // console.log("side is", this.props.side);
    return (
      <SplitSection
        hoverSide={this.state.hover}
        onMouseLeave={this.onMouseLeave}
        onMouseEnter={this.onMouseEnter}
        side={this.props.side}
      />
    );
  }
}

export default withRouter(SplitSectionContainer);
