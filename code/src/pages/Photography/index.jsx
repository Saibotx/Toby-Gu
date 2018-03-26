//Import Packages
import React from "react";
import Gallery from "react-photo-gallery";
import Lightbox from "react-images";

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
  width: calc(100% - 105px);
  margin-top: 125px;
  margin-left: 75px;
  @media (max-width:550px){
    margin-left: 55px;
    width: calc(100% - 75px);
  }
  height: calc(100vh - 135px);
  overflow: scroll;
`;

class PhotographyPortfolio extends React.Component {
  constructor(props){
    super(props);
    this.state = { currentImage: 0 };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }
  componentDidMount() {
    this.setState({
      client: true
    });
  }
  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1
    });
  }

  render() {
    var columns = 2;
    if (this.state.client){
      if (window.screen.width > 600){
        columns = 4;
      }
    }
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
            I travel & capture my experiences to share with the world. Check out
            more on my{" "}
            <a href="https://www.instagram.com/guutoby/">
              <u>instagram page</u>
            </a>
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
          <Gallery margin={5} photos={images} columns={columns} onClick={this.openLightbox} />
        </GalleryContainer>
        <div style={{ position: "fixed", zIndex: -1 }}>
          <SplitSection fixed hoverSide={null} side={"right"} />
        </div>
        <Lightbox
          images={images}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
        />
      </_Container>
    );
  }
}
export default withRouter(PhotographyPortfolio);
