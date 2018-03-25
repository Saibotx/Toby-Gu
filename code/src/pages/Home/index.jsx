//Import components
import Hero from "./components/Hero.jsx";
import Profile from "./components/Profile.jsx";
// import SplitSectionContainer from './functional/SplitSectionContainer.jsx';
// import LeftModal from './presentational/'

//Import Packages
import React from "react";
import styled, { css } from "react-emotion";
// import ImageGallery from 'react-image-gallery';
// import "react-image-gallery/styles/css/image-gallery.css";

const LeftModal = styled("div")`
  position: fixed;
  z-index: 5;
  border-top: 100px solid orange;
  border-right: 50px solid transparent;
  height: 100vh;
  width: 100vw;
  left: ${props => props.left || "0%"};
`;

const RightModal = styled("div")`
  position: fixed;
  z-index: 5;
  border-top: 100px solid orange;
  border-right: 50px solid transparent;
  height: 100vh;
  width: 100vw;
  right: ${props => props.right || "0%"};
`;

const _disspearingDiv = styled("div")`
  max-height: ${props => props.height};
  overflow: hidden;
  transition: all 0.6s ease-in;
`;

export default function Home(props) {
  let { client } = props;
  var hidden = false;
  if (client){
    hidden = window.location.pathname != "/";
  }
  return (
    <div>
      <_disspearingDiv height={hidden ? "0vh" : "200vh"}>
        <Hero scrollToBottom={props.scrollToBottom}/>
        <Profile />
      </_disspearingDiv>
    </div>
  );
}
