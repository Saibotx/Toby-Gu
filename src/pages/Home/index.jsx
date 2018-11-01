//Import Packages
import React from "react";
import styled, { keyframes } from "react-emotion";

//Import components
import Hero from "./components/Hero.jsx";
import Profile from "./components/Profile.jsx";
import tobyface from "../../assets/tobyface.png";

//Import all images to preload
import cover from "../../assets/cover.jpg";
import coverMobile from "../../assets/cover-mobile.png";
import profile from "../../assets/profile.jpg";

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

const _DisspearingDiv = styled("div")`
  max-height: ${props => props.height};
  overflow: hidden;
  transition: all 0.6s ease-in;
`;

const _LoadingOverlay = styled("div")`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: ${props => (props.loading ? 30 : -1)};
  background-color: white;
  opacity: ${props => (props.loading ? 1 : 0)};
  transition: all 0.6s ease-in;
`;

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(359deg); }
`;

const _LoadingFace = styled("img")`
  position: fixed;
  left: calc(50% - 75px);
  top: calc(50% - 75px);
  animation: ${spin} 1s linear infinite;
`;

const _LoadingText = styled('div')`
  position:fixed;
  top: calc(50% + 160px);
  left: 50%;
  transform:translateX(-50%);
`

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.onImagesLoaded = this.onImagesLoaded.bind(this);

    //check if largest image is loaded.. if so, dont splash loading
    let loading = true;
    if (typeof window !== 'undefined') {
      const img = new Image();
      img.src = cover;
      loading = !img.complete
    }
    
    this.state = {
      loading
    };
  }


  componentDidMount() {
    //load all images
    let pictures = [cover, coverMobile, profile];
    pictures.forEach((picture, count) => {
      const img = new Image();
      img.src = picture;
      if (count === pictures.length - 1) {
        img.onload = this.onImagesLoaded;
      }
    });
  }

  onImagesLoaded() {
    this.setState({
      loading: false
    });
  }

  render() {
    let props = this.props;
    let { client } = props;
    var hidden = false;
    if (client) {
      hidden = window.location.pathname != "/";
    }
    return (
      <div>
        <_DisspearingDiv height={hidden ? "0vh" : "200vh"}>
          <_LoadingOverlay loading={this.state.loading}>
            <_LoadingFace src={tobyface} />
            <_LoadingText> ... Loading ...</_LoadingText>
          </_LoadingOverlay>
          <Hero
            scrollToBottom={props.scrollToBottom}
            loading={this.state.loading}
          />
          <Profile />
        </_DisspearingDiv>
      </div>
    );
  }
}
