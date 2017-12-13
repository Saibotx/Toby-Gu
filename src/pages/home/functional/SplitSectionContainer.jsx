import React from 'react';
import SplitSection from '../presentational/SplitSection.jsx';
import {withRouter} from 'react-router-dom';

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
    return (
      <SplitSection
        hoverSide={this.state.hover}
        onMouseLeave={this.onMouseLeave}
        onMouseEnter={this.onMouseEnter}
        onPickSide={this.props.onPickSide}
        side={this.props.side}
      />
    );
  }
}
// SplitSectionContainer.contextTypes = {
//     router: React.PropTypes.object,
//     location: React.PropTypes.object
// }

export default withRouter(SplitSectionContainer);
