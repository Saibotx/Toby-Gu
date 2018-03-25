//Import Packages
import React from "react";
import styled from "react-emotion";
import Parallax from "react-springy-parallax";

//Import Assets
import cloud from "assets/cloud.svg";


const BackgroundClouds = (
  <div>
    <Parallax.Layer offset={0.4} speed={0.4} style={{ opacity: 0.7 }}>
      <img
        src={cloud}
        style={{ display: "block", width: "20%", marginLeft: "15%" }}
      />
      <img
        src={cloud}
        style={{ display: "block", width: "10%", marginLeft: "75%" }}
      />
    </Parallax.Layer>

    <Parallax.Layer offset={0.65} speed={0.1} style={{ opacity: 0.5 }}>
      <img
        src={cloud}
        style={{ display: "block", width: "20%", margin: "0 0 15% 55%"}}
      />
      <img
        src={cloud}
        style={{ display: "block", width: "10%", marginLeft: "15%" }}
      />
      <img
        src={cloud}
        style={{ display: "block", width: "30%", marginLeft: "80%" }}
      />
    </Parallax.Layer>

    <Parallax.Layer offset={1} speed={0.8} style={{ opacity: 0.5 }}>
      <img
        src={cloud}
        style={{ display: "block", width: "20%", marginLeft: "55%" }}
      />
      <img
        src={cloud}
        style={{ display: "block", width: "10%", marginLeft: "15%" }}
      />
    </Parallax.Layer>

    <Parallax.Layer offset={1.75} speed={0.5} style={{ opacity: 0.5 }}>
      <img
        src={cloud}
        style={{ display: "block", width: "20%", marginLeft: "70%" }}
      />
      <img
        src={cloud}
        style={{ display: "block", width: "20%", marginLeft: "40%" }}
      />
    </Parallax.Layer>

    <Parallax.Layer offset={2} speed={0.2} style={{ opacity: 0.7 }}>
      <img
        src={cloud}
        style={{ display: "block", width: "10%", marginLeft: "10%" }}
      />
      <img
        src={cloud}
        style={{ display: "block", width: "20%", marginLeft: "75%" }}
      />
    </Parallax.Layer>

    <Parallax.Layer offset={2.6} speed={-0.1} style={{ opacity: 0.9 }}>
      <img
        src={cloud}
        style={{ display: "block", width: "20%", marginLeft: "60%" }}
      />
      <img
        src={cloud}
        style={{ display: "block", width: "25%", marginLeft: "30%" }}
      />
      <img
        src={cloud}
        style={{ display: "block", width: "10%", marginLeft: "80%" }}
      />
    </Parallax.Layer>

    <Parallax.Layer offset={3.6} speed={0.4} style={{ opacity: 0.9 }}>
      <img
        src={cloud}
        style={{ display: "block", width: "20%", marginLeft: "5%" }}
      />
      <img
        src={cloud}
        style={{ display: "block", width: "15%", marginLeft: "75%" }}
      />
    </Parallax.Layer>




    <Parallax.Layer offset={4.4} speed={0.4} style={{ opacity: 0.7 }}>
      <img
        src={cloud}
        style={{ display: "block", width: "20%", marginLeft: "15%" }}
      />
      <img
        src={cloud}
        style={{ display: "block", width: "10%", marginLeft: "75%" }}
      />
    </Parallax.Layer>

    <Parallax.Layer offset={4.65} speed={0.1} style={{ opacity: 0.5 }}>
      <img
        src={cloud}
        style={{ display: "block", width: "20%", margin: "0 0 15% 55%"}}
      />
      <img
        src={cloud}
        style={{ display: "block", width: "10%", marginLeft: "15%" }}
      />
      <img
        src={cloud}
        style={{ display: "block", width: "30%", marginLeft: "80%" }}
      />
    </Parallax.Layer>

    <Parallax.Layer offset={5.2} speed={0.8} style={{ opacity: 0.5 }}>
      <img
        src={cloud}
        style={{ display: "block", width: "10%", marginLeft: "55%" }}
      />
      <img
        src={cloud}
        style={{ display: "block", width: "30%", marginLeft: "5%" }}
      />
    </Parallax.Layer>

    <Parallax.Layer offset={5.75} speed={0.5} style={{ opacity: 0.5 }}>
      <img
        src={cloud}
        style={{ display: "block", width: "20%", marginLeft: "70%" }}
      />
      <img
        src={cloud}
        style={{ display: "block", width: "20%", marginLeft: "40%" }}
      />
    </Parallax.Layer>

    {/* <Parallax.Layer offset={5.8} speed={0.2} style={{ opacity: 0.7 }}>
      <img
        src={cloud}
        style={{ display: "block", width: "10%", marginLeft: "10%" }}
      />
      <img
        src={cloud}
        style={{ display: "block", width: "20%", marginLeft: "75%" }}
      />
    </Parallax.Layer> */}

    {/* <Parallax.Layer offset={6.6} speed={-0.1} style={{ opacity: 0.9 }}>
      <img
        src={cloud}
        style={{ display: "block", width: "20%", marginLeft: "60%" }}
      />
      <img
        src={cloud}
        style={{ display: "block", width: "25%", marginLeft: "30%" }}
      />
      <img
        src={cloud}
        style={{ display: "block", width: "10%", marginLeft: "80%" }}
      />
    </Parallax.Layer>

    <Parallax.Layer offset={7.6} speed={0.4} style={{ opacity: 0.9 }}>
      <img
        src={cloud}
        style={{ display: "block", width: "20%", marginLeft: "5%" }}
      />
      <img
        src={cloud}
        style={{ display: "block", width: "15%", marginLeft: "75%" }}
      />
    </Parallax.Layer> */}
  </div>
);

export default BackgroundClouds;
