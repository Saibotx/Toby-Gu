import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


function FadeIn(Page, method) {
  var method = method || 'FadeIn';
  return props =>
    <ReactCSSTransitionGroup
      transitionAppear={true}
      transitionAppearTimeout={2600}
      transitionEnterTimeout={2600}
      transitionLeaveTimeout={2600}
      transitionName={method}
    >
        <Page {...props} />
    </ReactCSSTransitionGroup>
};
 export default FadeIn;
