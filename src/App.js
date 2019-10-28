//Import Packages
import React from "react";
// import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { Router, Link, Route, Switch } from "react-static";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { withRouter } from "react-static";
import Scroll from "react-scroll";
import MouseActionIndicator from "react-mouse-action-indicator"

//Import Pages
import Home from "./pages/Home";
import WorkPortfolio from "./pages/Work";
import Photography from "./pages/Photography";
import PageNotFound from "./pages/PageNotFound";

//Import Components
import FadeIn from "./components/FadeIn.js";
import SplitSection from "./components/SplitSection";

//Import CSS
import "./styles/transitions.css";
import "./styles/styles.css";

//Initialize Scroll
var scroll = Scroll.animateScroll;

//Define helper functions
const Transition = props => {
  return (
    <ReactCSSTransitionGroup
      transitionEnterTimeout={1200}
      transitionLeaveTimeout={1200}
      transitionName={"undefined"}
    >
      {props.children}
    </ReactCSSTransitionGroup>
  );
};

class App extends React.Component {
  constructor() {
    super();
    this.scrollToBottom = this.scrollToBottom.bind(this);
    this.state = {};
  }
  componentDidMount() {
    this.setState({
      client: true
    });
  }
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      if (this.props.location && this.props.location.pathname === "/") {
        if (this.state.client) {
          window.scrollTo(0, document.body.scrollHeight);
        }
      }
    }
  }
  scrollToBottom() {
    if (this.state.client) {
      scroll.scrollTo(document.body.scrollHeight);
    }
  }
  render() {
    var side;
    var pathname = this.props.location.pathname;
    pathname = pathname.replace(/\//gi, '')
    switch (pathname) {
      case ("engineer"):
        side = "left";
        break;
      case ("photographer"):
        side = "right";
        break;
      default:
        side = null;
    }
    return (
      <MouseActionIndicator>
      <div style={{ position: "relative" }}>
        {/* hacky way of dismounting home section with animation.
          acutal animation happens
          within the Home component.  */}
        <Transition>
          {pathname == "" && (
            <Home
              scrollToBottom={this.scrollToBottom}
              client={this.state.client}
            />
          )}
        </Transition>
        {/* sub pages */}
        <Switch>
          <Route path="/engineer" component={FadeIn(WorkPortfolio)} />
          <Route path="/photographer" component={FadeIn(Photography)} />
        </Switch>
        {/* background render depending on side */}
        <SplitSection side={side} />
      </div>
      </MouseActionIndicator>
    );
  }
}

export default withRouter(App);
