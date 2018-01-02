import React from "react";
import Parallax from "react-springy-parallax";

export default class WorkPortfolio extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      // <div style={{position:'relative'}}>
      //   <h1> {'< Developer >'} </h1>
      <Parallax pages={3} ref={ref => (this.parallax = ref)}>
        {/* <Parallax.Layer
          // Page offset, or where the layer will be at when scrolled to
          // 0 means start, 1 second page, 1.5 second and half, and so on ...
          offset={0}
          // Parallax factor, allows for positive and negative values
          // Shifts the layer up or down in accordance to its offset
          speed={0.5}
        >
          <span>Layers can contain anything</span>
        </Parallax.Layer>
         */}
        <Parallax.Layer offset={1} speed={1} style={{ backgroundColor: '#243B4A' }} />
          <Parallax.Layer offset={2} speed={1} style={{ backgroundColor: '#805E73' }} />
          <Parallax.Layer offset={3} speed={1} style={{ backgroundColor: '#87BCDE' }} />
      </Parallax>
      // </div>
    );
  }
}
