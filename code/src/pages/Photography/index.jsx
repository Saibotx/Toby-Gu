//Import Packages
import React from "react";
import Gallery from "react-grid-gallery";
import styled, { css } from "react-emotion";
import { withRouter } from "react-static";
import SplitSection from "components/SplitSection/SplitSection.jsx";

import "./style.css";

import images from "./images";

const _Container = styled("div")`
  z-index: 5;
  height: 100vh;
  position: fixed;
  width: 100vw;
`;
const _FloatingCont = styled("div")`
  width: 100vw;
  z-index: 10;
  text-align: center;
  position: fixed;
`;

const _DButton = styled("button")`
  position:fixed;
  left:0%;
  top:50%;
  transform:translate(30%);
  border-width: 3px;
  padding:10px;
  @media (max-width:550px){
    padding:5px;
  }
  border-color: black;
  color:black;
  background-color: transparent;
  font-size: 1.4em;
  font-weight: 700;
  &:hover{
    background-color: grey
    color:white;
    border-color: transparent;
  }
  &:active{
    background-color: black;
  }
`;

const GalleryContainer = styled("div")`
  width: calc(100% - 200px);
  margin-top: 115px;
  padding-left: 100px;
  height: calc(100vh - 115px);
  overflow: scroll;
`;

class PhotographyPortfolio extends React.Component {
  render() {
    return (
      <_Container>
        <_FloatingCont>
          <h1
            style={{
              marginTop: 10,
              marginBottom: 10,
              fontSize: "2.7em"
            }}
          >
            {"Photographer"}
          </h1>
          <h4 style={{ padding: "0 20%" }}>
            As a digital nomad, I travel, capture my experiences and share these
            with the world. Check out more on my{" "}
            <a href="https://www.instagram.com/guutoby/"><u>instagram page</u></a>
          </h4>
          <_DButton
            onClick={() => {
              this.props.history.push("/", { scrollTop: 1000 });
            }}
          >
            {" "}
            D{" "}
          </_DButton>
        </_FloatingCont>
        <GalleryContainer>
          <Gallery
            style={{ overflow: "scroll" }}
            images={images}
            enableImageSelection={false}
          />
        </GalleryContainer>
        <div style={{ position: "fixed", zIndex: -1 }}>
          <SplitSection fixed hoverSide={null} side={"right"} />
        </div>
      </_Container>
    );
  }
}
export default withRouter(PhotographyPortfolio);
