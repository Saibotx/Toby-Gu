//Import Packages
import React from "react";
import Interactive from "react-interactive";
import { Switch, Route } from "react-router-dom";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

//Import Pages
import Home from "./pages/Home";
import WorkPortfolio from "./pages/Work";
import PageNotFound from "./pages/PageNotFound";

//Import Components
import FadeIn from "./components/FadeIn.js";
import SplitSection from "./components/SplitSection";

//Import CSS
import "./styles/transitions.css";
import "./styles/styles.css";

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

export default function App() {
  var pathname = window.location.pathname;
  var side;
  switch (pathname) {
    case "/engineer":
      side = "left";
      break;
    case "/photographer":
      side = "right";
      break;
    default:
      side = null;
  }
  return (
    <div style={{position:'relative'}}>
      {/* hacky way of dismounting home section with animation. acutal animation happens
        within the Home component.  */}
      <Transition>
        {pathname == "/" && <Home />}
      </Transition>
      {/* sub pages */}
      <Switch>
        <Route path="/engineer" component={FadeIn(WorkPortfolio)} />
        <Route path="/photographer" component={FadeIn(WorkPortfolio)} />
      </Switch>
      {/* background render depending on side */}
      <SplitSection side={side} />
    </div>
  );
}
