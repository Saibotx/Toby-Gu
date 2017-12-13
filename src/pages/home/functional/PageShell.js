import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


function PageShell(Page) {
  return props =>
    <ReactCSSTransitionGroup
      transitionAppear={true}
      transitionAppearTimeout={1600}
      transitionEnterTimeout={1600}
      transitionLeaveTimeout={1600}
      transitionName={'FadeIn'}
      // transitionName={props.match.path === '/thanks' ? 'SlideIn' : 'SlideOut'}
    >
        <Page {...props} />
    </ReactCSSTransitionGroup>
};
export default  PageShell;
