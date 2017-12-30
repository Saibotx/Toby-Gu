//Import Packages
import React from 'react';
import Interactive from 'react-interactive';
import { Switch, Route } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

//Import Pages
import Home from '../pages/home/Home.jsx';
import WorkPortfolio from './WorkPortfolio.js';
import PageNotFound from './PageNotFound';

//Import Components
import FadeIn from './FadeIn.js';
import SplitSectionContainer from './SplitSectionContainer.jsx';

//Import CSS
import '../styles/transitions.css';

//Define helper functions
const Transition = (props) => {
  return (
    <ReactCSSTransitionGroup
      transitionEnterTimeout={1000}
      transitionLeaveTimeout={1000}
      transitionName={'grow'}
      >
        {props.children}
    </ReactCSSTransitionGroup>
  )
}

export default function App() {
  var pathname = window.location.pathname;
  var side;
  switch (pathname) {
    case '/engineer':
      side = 'left';
      break;
    case '/photographer':
      side = 'right';
      break;
    default:
      side = null;
  }
  var renderHome = pathname == '/' ? Home : null;
  return (
    <div style={{positon:'relative'}}>
      {/* hacky way of dismounting home section with animation. acutal animation happens
        within the Home component.  */}
      <Transition >
        { pathname == '/' && <Home hidden={pathname != '/'}/> }
      </Transition>
      {/* sub pages */}
      <Switch>
        <Route path="/engineer" component={FadeIn(WorkPortfolio)} />
        <Route path="/photographer" component={FadeIn(WorkPortfolio)} />
      </Switch>
      {/* background render depending on side */}
      <SplitSectionContainer side={side}/>
    </div>
  );
}
