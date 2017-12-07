import React from 'react';
import SplitSection from '../presentational/SplitSection.jsx';


export default class SplitSectionContainer extends React.Component {
  constructor() {
    super();
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.state = { hover:null }
  }

  onMouseLeave(){
    if (this.state.hover != null)
      this.setState({hover:null});
  }

  onMouseEnter(side){
    if (side){
      this.setState({hover:side});
    }
  }

  render(){
    return (
      <SplitSection
        hoverSide={this.state.hover}
        onMouseLeave={this.onMouseLeave}
        onMouseEnter={this.onMouseEnter}
      />
    );
  }
}
