import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


function FadeIn(Page, method) {
  var method = method || 'FadeIn';
  return props =>
    <ReactCSSTransitionGroup
      transitionAppear={true}
      transitionAppearTimeout={1600}
      transitionEnterTimeout={1600}
      transitionLeaveTimeout={1600}
      transitionName={method}
    >
        <Page {...props} />
    </ReactCSSTransitionGroup>
};
 export default FadeIn;
