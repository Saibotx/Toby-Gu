(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-emotion");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  border-radius: 10px;\n  background-color: rgba(0,0,0,0);\n\n  margin-top:10px\n  color: ', ';\n  border-color: ', ';\n  width:', ';\n  font-size: ', ';\n  padding: ', ';\n  @media (max-width: 550px){\n    width:', ';\n    font-size: ', ';\n    padding: ', ';\n  }\n  font-weight: 200;\n  border-width: 2px;\n  transition: all 0.2s;\n  &:hover{\n    background-color: ', ';\n  }\n  &:active{\n    background-color: ', ';\n    }\n  }\n'], ['\n  border-radius: 10px;\n  background-color: rgba(0,0,0,0);\n\n  margin-top:10px\n  color: ', ';\n  border-color: ', ';\n  width:', ';\n  font-size: ', ';\n  padding: ', ';\n  @media (max-width: 550px){\n    width:', ';\n    font-size: ', ';\n    padding: ', ';\n  }\n  font-weight: 200;\n  border-width: 2px;\n  transition: all 0.2s;\n  &:hover{\n    background-color: ', ';\n  }\n  &:active{\n    background-color: ', ';\n    }\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactEmotion = __webpack_require__(1);

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _Button = (0, _reactEmotion2.default)('button')(_templateObject, function (props) {
  return props.color == 'dark' ? 'rgb(73,73,73)' : 'white';
}, function (props) {
  return props.color == 'dark' ? 'rgb(73,73,73)' : 'white';
}, function (props) {
  return props.small ? '130px' : '175px';
}, function (props) {
  return props.small ? '1em' : '1.2em';
}, function (props) {
  return props.small ? '5px 10px 5px 10px' : '10px 30px 10px 30px';
}, function (props) {
  return props.small ? '100px' : '155px';
}, function (props) {
  return props.small ? '0.8em' : '1em';
}, function (props) {
  return props.small ? '3px 5px 3px 5px' : '10px 15px 10px 15px';
}, function (props) {
  return props.whiteBg ? 'rgba(255,255,255,0.75)' : 'rgba(213, 217, 255,0.75)';
}, function (props) {
  return props.whiteBg ? 'rgba(255,255,255,1)' : 'rgba(213, 217, 255,1)';
});

exports.default = _Button;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-springy-parallax");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-addons-css-transition-group");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Li = exports.Code = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(6);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var link = {
  normal: {
    borderBottom: '1px dotted rgb(0, 168, 0)'
  },
  hover: {
    borderBottom: '1px solid rgb(0, 168, 0)',
    color: 'black'
  },
  active: 'hover',
  touchActive: {
    borderBottom: '1px dashed rgb(0, 168, 0)',
    color: 'black'
  },
  focusFromTab: {
    outline: '2px solid rgb(0, 152, 0)',
    outlineOffset: '2px',
    color: 'black'
  },
  touchActiveTapOnly: true
};

var childLink = {};
Object.keys(link).forEach(function (key) {
  if (key !== 'touchActiveTapOnly') {
    childLink['onParent' + key.slice(0, 1).toUpperCase() + key.slice(1)] = link[key];
  }
});

exports.default = {
  link: link,
  childLink: childLink,
  p: {
    margin: '3vh 0',
    lineHeight: '1.4'
  }
};
var Code = exports.Code = function Code(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    'code',
    {
      style: {
        fontFamily: 'monospace',
        fontSize: '15px',
        paddingLeft: '2px'
      }
    },
    children
  );
};

Code.propTypes = {
  children: _propTypes2.default.string.isRequired
};

var Li = function Li(_ref2) {
  var children = _ref2.children,
      rest = _objectWithoutProperties(_ref2, ['children']);

  return _react2.default.createElement(
    'li',
    _extends({
      style: {
        paddingLeft: '18px',
        textIndent: '-15px',
        margin: '0.5vh 0',
        listStyle: 'none'
      }
    }, rest),
    _react2.default.createElement(
      'span',
      { style: { paddingRight: '7px' } },
      '\u2013'
    ),
    children
  );
};

exports.Li = Li;
Li.propTypes = {
  children: _propTypes2.default.string.isRequired
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = WrappedApp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(9);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactStatic = __webpack_require__(2);

var _App = __webpack_require__(10);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Export your top level component as JSX (for static rendering)
// export default App;
function WrappedApp(p) {
  return _react2.default.createElement(
    _reactStatic.Router,
    { autoScrollToTop: false },
    _react2.default.createElement(_App2.default, null)
  );
}

// Render your app

// import { BrowserRouter as Router } from "react-router-dom";

// Your top level component
if (typeof document !== "undefined") {
  var renderMethod =  false ? _reactDom2.default.render : _reactDom2.default.hydrate || _reactDom2.default.render;
  var render = function render(Comp) {
    renderMethod(_react2.default.createElement(
      _reactStatic.Router,
      { autoScrollToTop: false },
      _react2.default.createElement(Comp, null)
    ), document.getElementById("root"));
  };

  // Render!
  render(_App2.default);
}

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(2);

var _reactAddonsCssTransitionGroup = __webpack_require__(5);

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var _Home = __webpack_require__(11);

var _Home2 = _interopRequireDefault(_Home);

var _Work = __webpack_require__(16);

var _Work2 = _interopRequireDefault(_Work);

var _PageNotFound = __webpack_require__(38);

var _PageNotFound2 = _interopRequireDefault(_PageNotFound);

var _FadeIn = __webpack_require__(40);

var _FadeIn2 = _interopRequireDefault(_FadeIn);

var _SplitSection = __webpack_require__(41);

var _SplitSection2 = _interopRequireDefault(_SplitSection);

__webpack_require__(48);

__webpack_require__(49);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //Import Packages

// import { Switch, Route, BrowserRouter as Router } from "react-router-dom";


//Import Pages


//Import Components


//Import CSS


//Define helper functions
var Transition = function Transition(props) {
  return _react2.default.createElement(
    _reactAddonsCssTransitionGroup2.default,
    {
      transitionEnterTimeout: 1200,
      transitionLeaveTimeout: 1200,
      transitionName: "undefined"
    },
    props.children
  );
};

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {};
    return _this;
  }

  _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        client: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      var side;
      var pathname;
      // var Router = (p)=><BrowserRouter>{p.children}</BrowserRouter>;
      if (this.state.client) {
        //Set Router
        // var Router = (p)=><BrowserRouter>{p.children}</BrowserRouter>;
        //Deal with pathname and sides
        pathname = window.location.pathname;
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
      }

      return _react2.default.createElement(
        "div",
        { style: { position: "relative" } },
        _react2.default.createElement(
          Transition,
          null,
          pathname == "/" && _react2.default.createElement(_Home2.default, { client: this.state.client })
        ),
        _react2.default.createElement(
          _reactStatic.Switch,
          null,
          _react2.default.createElement(_reactStatic.Route, { path: "/engineer", component: (0, _FadeIn2.default)(_Work2.default) }),
          _react2.default.createElement(_reactStatic.Route, { path: "/photographer", component: (0, _FadeIn2.default)(_Work2.default) })
        ),
        _react2.default.createElement(_SplitSection2.default, { side: side })
      );
    }
  }]);

  return App;
}(_react2.default.Component);

exports.default = App;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n  position: fixed;\n  z-index: 5;\n  border-top: 100px solid orange;\n  border-right: 50px solid transparent;\n  height: 100vh;\n  width: 100vw;\n  left: ", ";\n"], ["\n  position: fixed;\n  z-index: 5;\n  border-top: 100px solid orange;\n  border-right: 50px solid transparent;\n  height: 100vh;\n  width: 100vw;\n  left: ", ";\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n  position: fixed;\n  z-index: 5;\n  border-top: 100px solid orange;\n  border-right: 50px solid transparent;\n  height: 100vh;\n  width: 100vw;\n  right: ", ";\n"], ["\n  position: fixed;\n  z-index: 5;\n  border-top: 100px solid orange;\n  border-right: 50px solid transparent;\n  height: 100vh;\n  width: 100vw;\n  right: ", ";\n"]),
    _templateObject3 = _taggedTemplateLiteral(["\n  max-height: ", ";\n  overflow: hidden;\n  transition: all 0.6s ease-in;\n"], ["\n  max-height: ", ";\n  overflow: hidden;\n  transition: all 0.6s ease-in;\n"]);

exports.default = Home;

var _Hero = __webpack_require__(12);

var _Hero2 = _interopRequireDefault(_Hero);

var _Profile = __webpack_require__(14);

var _Profile2 = _interopRequireDefault(_Profile);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactEmotion = __webpack_require__(1);

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } //Import components

// import SplitSectionContainer from './functional/SplitSectionContainer.jsx';
// import LeftModal from './presentational/'

//Import Packages


// import ImageGallery from 'react-image-gallery';
// import "react-image-gallery/styles/css/image-gallery.css";

var LeftModal = (0, _reactEmotion2.default)("div")(_templateObject, function (props) {
  return props.left || "0%";
});

var RightModal = (0, _reactEmotion2.default)("div")(_templateObject2, function (props) {
  return props.right || "0%";
});

var _disspearingDiv = (0, _reactEmotion2.default)("div")(_templateObject3, function (props) {
  return props.height;
});

function Home(props) {
  var client = props.client;

  var hidden = false;
  if (client) {
    hidden = window.location.pathname != "/";
  }
  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      _disspearingDiv,
      { height: hidden ? "0vh" : "150vh" },
      _react2.default.createElement(_Hero2.default, null),
      _react2.default.createElement(_Profile2.default, null)
    )
  );
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  color:white;\n  max-width:600px;\n  ', '\n  padding:0 10px 0 10px;\n  text-align:center;\n  margin:auto;\n  top:65vh;\n  transform:translateY(-100%);\n  position:relative;\n  font-weight: 200;\n  z-index: 2;\n'], ['\n  color:white;\n  max-width:600px;\n  ', '\n  padding:0 10px 0 10px;\n  text-align:center;\n  margin:auto;\n  top:65vh;\n  transform:translateY(-100%);\n  position:relative;\n  font-weight: 200;\n  z-index: 2;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  flex-wrap: wrap;\n  max-width:400px;\n  margin:auto;\n'], ['\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  flex-wrap: wrap;\n  max-width:400px;\n  margin:auto;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  color:#c1c7fa;\n'], ['\n  color:#c1c7fa;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  color:#f7cb99;\n'], ['\n  color:#f7cb99;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  position:relative;\n  left:50%;\n  white-space: nowrap;\n  width:600px;\n  transform:translate(-50%);\n'], ['\n  position:relative;\n  left:50%;\n  white-space: nowrap;\n  width:600px;\n  transform:translate(-50%);\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  height:93vh;\n  padding-top: 2px;\n  width:100%;\n  position:relative;\n  background-size: cover;\n  background-image: url(\'', '\');\n  background-attachment: fixed;\n  background-position: center top;\n'], ['\n  height:93vh;\n  padding-top: 2px;\n  width:100%;\n  position:relative;\n  background-size: cover;\n  background-image: url(\'', '\');\n  background-attachment: fixed;\n  background-position: center top;\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n  @media (max-width: 550px){\n    display:none;\n  };\n  position:fixed;\n  left:50%;\n  transform: translateX(-50%);\n  z-index:0;\n  width:100vw;\n  height:57vw;\n  min-height:92vh;\n  min-width:161vh;\n'], ['\n  @media (max-width: 550px){\n    display:none;\n  };\n  position:fixed;\n  left:50%;\n  transform: translateX(-50%);\n  z-index:0;\n  width:100vw;\n  height:57vw;\n  min-height:92vh;\n  min-width:161vh;\n']),
    _templateObject8 = _taggedTemplateLiteral(['\n  left:32%;\n  top:40%;\n  position:absolute;\n  color:white\n'], ['\n  left:32%;\n  top:40%;\n  position:absolute;\n  color:white\n']);

exports.default = Hero;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactEmotion = __webpack_require__(1);

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

var _Button2 = __webpack_require__(3);

var _Button3 = _interopRequireDefault(_Button2);

var _cover = __webpack_require__(13);

var _cover2 = _interopRequireDefault(_cover);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } //import packages


//Import components


//Import assets


var _HeroTextDiv = (0, _reactEmotion2.default)('div')(_templateObject, '' /* width:50%; */);

var _ButtonRow = (0, _reactEmotion2.default)('div')(_templateObject2);

var _PurpText = (0, _reactEmotion2.default)('div')(_templateObject3);
var _OjText = (0, _reactEmotion2.default)('div')(_templateObject4);

var _Title = (0, _reactEmotion2.default)('h1')(_templateObject5);

var HeroText = function (_React$Component) {
  _inherits(HeroText, _React$Component);

  function HeroText(props) {
    _classCallCheck(this, HeroText);

    return _possibleConstructorReturn(this, (HeroText.__proto__ || Object.getPrototypeOf(HeroText)).call(this, props));
  }

  _createClass(HeroText, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _HeroTextDiv,
        null,
        _react2.default.createElement(
          _Title,
          null,
          _react2.default.createElement(
            _PurpText,
            null,
            'Toby'
          ),
          ' ',
          _react2.default.createElement(
            _OjText,
            null,
            'Gu'
          )
        ),
        _react2.default.createElement(
          'h4',
          null,
          'Senior Software Engineer | Designer | Front End Lead Developer'
        ),
        _react2.default.createElement(
          'h4',
          null,
          'Photographer, Entrepreneur & World Traveller'
        ),
        _react2.default.createElement(
          _ButtonRow,
          null,
          _react2.default.createElement(
            _Button3.default,
            null,
            'Learn More'
          ),
          _react2.default.createElement(
            _Button3.default,
            null,
            'See Work'
          )
        )
      );
    }
  }]);

  return HeroText;
}(_react2.default.Component);

var _HeroContainer = (0, _reactEmotion2.default)('div')(_templateObject6, function (props) {
  return props.src;
});

var _AnimatedTextContainer = (0, _reactEmotion2.default)('div')(_templateObject7);

var _AnimatedText = (0, _reactEmotion2.default)('div')(_templateObject8);

function Hero(props) {
  return _react2.default.createElement(
    _HeroContainer,
    { src: _cover2.default },
    _react2.default.createElement(
      _AnimatedTextContainer,
      null,
      _react2.default.createElement(
        _AnimatedText,
        null,
        'AssHole with small face'
      )
    ),
    _react2.default.createElement(HeroText, null)
  );
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/cover.7b9fe997.jpg";

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  width:100%;\n  background-color:white;\n  z-index:2;\n  position:relative\n'], ['\n  width:100%;\n  background-color:white;\n  z-index:2;\n  position:relative\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    width:80%;\n    transform:translateY(-110px);\n    text-align: center;\n    margin-left: 10%;\n    margin-right: 10%;\n    color:#494949;\n    z-index: 2;\n    position:relative;\n'], ['\n    width:80%;\n    transform:translateY(-110px);\n    text-align: center;\n    margin-left: 10%;\n    margin-right: 10%;\n    color:#494949;\n    z-index: 2;\n    position:relative;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  width:200px;\n  border-radius: 50%;\n  display:inline-block;\n'], ['\n  width:200px;\n  border-radius: 50%;\n  display:inline-block;\n']);

exports.default = Profile;

var _reactEmotion = __webpack_require__(1);

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Button2 = __webpack_require__(3);

var _Button3 = _interopRequireDefault(_Button2);

var _profile = __webpack_require__(15);

var _profile2 = _interopRequireDefault(_profile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } //import packages


//import components


//import assets


var _ProfileBackground = (0, _reactEmotion2.default)('div')(_templateObject);

var _ProfileContainer = (0, _reactEmotion2.default)('div')(_templateObject2);

var _PortHole = (0, _reactEmotion2.default)('img')(_templateObject3);

function Profile(props) {
  return _react2.default.createElement(
    _ProfileBackground,
    null,
    _react2.default.createElement(
      _ProfileContainer,
      null,
      _react2.default.createElement(_PortHole, { src: '' + _profile2.default }),
      _react2.default.createElement(
        'h2',
        null,
        'Hey! I\'m Toby'
      ),
      _react2.default.createElement(
        'h3',
        null,
        ' A Canadian software engineer specializing in front-end development and design. ',
        _react2.default.createElement('br', null),
        _react2.default.createElement('br', null),
        ' I\'ve founded two startups and have been coding since before facebook was cool.'
      ),
      _react2.default.createElement(
        _Button3.default,
        { color: 'dark' },
        'Learn More'
      )
    )
  );
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/profile.11ff6a57.jpg";

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(["\n  z-index: 5;\n  height: 100vh;\n  position: fixed;\n  width: 100vw;\n  ", "\n"], ["\n  z-index: 5;\n  height: 100vh;\n  position: fixed;\n  width: 100vw;\n  ", "\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n  width: 100vw;\n  z-index: 10;\n  text-align: center;\n  position: fixed;\n"], ["\n  width: 100vw;\n  z-index: 10;\n  text-align: center;\n  position: fixed;\n"]),
    _templateObject3 = _taggedTemplateLiteral(["\n  position:fixed;\n  left:100%;\n  top:50%;\n  transform:translate(-130%);\n  border-width: 3px;\n  padding:10px;\n  @media (max-width:550px){\n    padding:5px;\n  }\n  border-color: black;\n  color:black;\n  background-color: transparent;\n  font-size: 1.4em;\n  font-weight: 700;\n  &:hover{\n    background-color: grey\n    color:white;\n    border-color: transparent;\n  }\n  &:active{\n    background-color: black;\n  }\n"], ["\n  position:fixed;\n  left:100%;\n  top:50%;\n  transform:translate(-130%);\n  border-width: 3px;\n  padding:10px;\n  @media (max-width:550px){\n    padding:5px;\n  }\n  border-color: black;\n  color:black;\n  background-color: transparent;\n  font-size: 1.4em;\n  font-weight: 700;\n  &:hover{\n    background-color: grey\n    color:white;\n    border-color: transparent;\n  }\n  &:active{\n    background-color: black;\n  }\n"]),
    _templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  width: 90%;\n  @media (max-width: 550px) {\n    flex-direction: column;\n    justify-content: center;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  width: 90%;\n  @media (max-width: 550px) {\n    flex-direction: column;\n    justify-content: center;\n  }\n"]),
    _templateObject5 = _taggedTemplateLiteral(["\n  width: ", ";\n  @media (max-width: 550px) {\n    width: 75%;\n    padding: 10% 0 10% 0;\n    ", ";\n  }\n"], ["\n  width: ", ";\n  @media (max-width: 550px) {\n    width: 75%;\n    padding: 10% 0 10% 0;\n    ", ";\n  }\n"]);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactSpringyParallax = __webpack_require__(4);

var _reactSpringyParallax2 = _interopRequireDefault(_reactSpringyParallax);

var _reactEmotion = __webpack_require__(1);

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

var _stars = __webpack_require__(17);

var _stars2 = _interopRequireDefault(_stars);

var _satellite = __webpack_require__(18);

var _satellite2 = _interopRequireDefault(_satellite);

var _chrometab = __webpack_require__(19);

var _chrometab2 = _interopRequireDefault(_chrometab);

var _clients = __webpack_require__(20);

var _clients2 = _interopRequireDefault(_clients);

var _applyboardSchool = __webpack_require__(21);

var _applyboardSchool2 = _interopRequireDefault(_applyboardSchool);

var _applyboardSearch = __webpack_require__(22);

var _applyboardSearch2 = _interopRequireDefault(_applyboardSearch);

var _applyboardEligibility = __webpack_require__(23);

var _applyboardEligibility2 = _interopRequireDefault(_applyboardEligibility);

var _BackgroundClouds = __webpack_require__(24);

var _BackgroundClouds2 = _interopRequireDefault(_BackgroundClouds);

var _Badges = __webpack_require__(26);

var _Badges2 = _interopRequireDefault(_Badges);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

//Import Components


// const url = (name, wrap = false) => `${wrap ? ' : ''uild/assets/${name}.svg${wrap ? ')' : ''}`;

var _Container = (0, _reactEmotion2.default)("div")(_templateObject, '' /* background-color: lightgrey; */);
var _FloatingCont = (0, _reactEmotion2.default)("div")(_templateObject2);

var _PButton = (0, _reactEmotion2.default)("button")(_templateObject3);

var ParallaxFlex = (0, _reactEmotion2.default)(_reactSpringyParallax2.default.Layer)(_templateObject4);

var BrowserWindowImg = (0, _reactEmotion2.default)("img")(_templateObject5, function (props) {
  return props.main ? "60%" : "40%";
}, function (props) {
  return props.main && "width:90%;";
});

var WorkPortfolio = function (_React$Component) {
  _inherits(WorkPortfolio, _React$Component);

  function WorkPortfolio(props) {
    _classCallCheck(this, WorkPortfolio);

    return _possibleConstructorReturn(this, (WorkPortfolio.__proto__ || Object.getPrototypeOf(WorkPortfolio)).call(this, props));
  }

  _createClass(WorkPortfolio, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        _Container,
        null,
        _react2.default.createElement(
          _FloatingCont,
          null,
          _react2.default.createElement(
            "h1",
            { style: { marginTop: 10 } },
            " ",
            "< Developer >",
            " "
          ),
          _react2.default.createElement(
            _PButton,
            null,
            " P "
          )
        ),
        _react2.default.createElement(
          _reactSpringyParallax2.default,
          { pages: 4, ref: function ref(_ref) {
              return _this2.parallax = _ref;
            } },
          _react2.default.createElement(_reactSpringyParallax2.default.Layer, {
            offset: 3,
            speed: 1,
            style: { backgroundColor: "#87BCDE" }
          }),
          _BackgroundClouds2.default,
          _react2.default.createElement(_reactSpringyParallax2.default.Layer, {
            offset: 1,
            speed: 1,
            style: { backgroundColor: "#243B4A", opacity: 0.5 }
          }),
          _react2.default.createElement(_reactSpringyParallax2.default.Layer, {
            offset: 2,
            speed: 1,
            style: { backgroundColor: "#805E73" }
          }),
          _react2.default.createElement(_reactSpringyParallax2.default.Layer, {
            offset: 1,
            speed: 0,
            factor: 4,
            style: {
              color: "blue",
              backgroundImage: "url(" + _stars2.default + ")",
              backgroundSize: "cover"
            }
          }),
          _Badges2.default,
          _react2.default.createElement(
            ParallaxFlex,
            { offset: 1, speed: 0.1 },
            _react2.default.createElement(BrowserWindowImg, { src: _applyboardSchool2.default }),
            _react2.default.createElement(BrowserWindowImg, { src: _applyboardEligibility2.default })
          ),
          _react2.default.createElement(
            ParallaxFlex,
            { offset: 1, speed: -0.1 },
            _react2.default.createElement(BrowserWindowImg, { main: true, src: _applyboardSearch2.default })
          )
        )
      );
    }
  }]);

  return WorkPortfolio;
}(_react2.default.Component);

exports.default = WorkPortfolio;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/stars.08216dc8.png";

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,Cjxzdmcgd2lkdGg9IjM4MXB4IiBoZWlnaHQ9IjM4MXB4IiB2aWV3Qm94PSIxNjcgMjk2IDM4MSAzODEiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8ZyBpZD0ic2F0ZWxsaXRlLXN2Z3JlcG8tY29tLSgzKSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTY3LjAwMDAwMCwgMjk2LjAwMDAwMCkiPgogICAgICAgIDxnIGlkPSJMYXllcl8xIiBmaWxsLXJ1bGU9Im5vbnplcm8iPgogICAgICAgICAgICA8ZyBpZD0iWE1MSURfMTAyOF8iPgogICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlhNTElEXzEwMzBfIiBmaWxsPSIjMDYzODRBIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMzcuNzI5NTM2LCAyMDMuMzczNTQ2KSByb3RhdGUoMTM1LjAwMDAwMCkgdHJhbnNsYXRlKC0yMzcuNzI5NTM2LCAtMjAzLjM3MzU0NikgIiB4PSIyMjcuNzI5NjMyIiB5PSIxNjAuODc0NDUzIiB3aWR0aD0iMTkuOTk5ODA4MiIgaGVpZ2h0PSI4NC45OTgxODQ5Ij48L3JlY3Q+CiAgICAgICAgICAgICAgICA8cmVjdCBpZD0iWE1MSURfMTAzMV8iIGZpbGw9IiMwODRCNjMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE3Ny42MjU5MDYsIDE0My4yNzA1NTMpIHJvdGF0ZSgxMzUuMDAwMDAwKSB0cmFuc2xhdGUoLTE3Ny42MjU5MDYsIC0xNDMuMjcwNTUzKSAiIHg9IjE2Ny42MjYwMDIiIHk9IjEwMC43NzE0NiIgd2lkdGg9IjE5Ljk5OTgwODIiIGhlaWdodD0iODQuOTk4MTg0OSI+PC9yZWN0PgogICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlhNTElEXzY3XyIgZmlsbD0iIzQxOUVCRSIgcG9pbnRzPSI1NS42NSA0Mi41MDggMzQuNDM3IDYzLjcyMSA3OC42MzEgMTA3LjkxNSA5Ni4zMDggMTA0LjM3OSA5OS44NDQgODYuNzAyIDc5LjUxNSA1Mi4yMyI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlhNTElEXzY2XyIgZmlsbD0iIzQxOUVCRSIgcG9pbnRzPSI5OC4wNzYgMC4wODEgNzYuODYzIDIxLjI5NCA4Ni41ODYgNDUuMTU5IDEyMS4wNTcgNjUuNDg5IDEzOC43MzUgNjEuOTUzIDE0Mi4yNyA0NC4yNzUiPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJYTUxJRF82NV8iIGZpbGw9IiM4MkM4REIiIHBvaW50cz0iNzYuODYzIDIxLjI5NCA1NS42NSA0Mi41MDggOTkuODQ0IDg2LjcwMiAxMTcuNTIyIDgzLjE2NiAxMjEuMDU3IDY1LjQ4OSI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlhNTElEXzY0XyIgZmlsbD0iIzE0NkE4QSIgcG9pbnRzPSIxNDQuMDM4IDEzMC44OTYgMTI3LjI0NCA5OS45NiA5OS44NDQgODYuNzAyIDc4LjYzMSAxMDcuOTE1IDEyMi44MjUgMTUyLjEwOSI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlhNTElEXzYzXyIgZmlsbD0iIzE0NkE4QSIgcG9pbnRzPSIxODYuNDY0IDg4LjQ3IDE0Mi4yNyA0NC4yNzUgMTIxLjA1NyA2NS40ODkgMTM0LjMxNSA5Mi44ODkgMTY1LjI1MSAxMDkuNjgzIj48L3BvbHlnb24+CiAgICAgICAgICAgICAgICA8cmVjdCBpZD0iWE1MSURfNjJfIiBmaWxsPSIjNDE5RUJFIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMzIuNTQ4MTEyLCA5OC4xOTI4MTQpIHJvdGF0ZSgtMTM1LjAwMDAwMCkgdHJhbnNsYXRlKC0xMzIuNTQ4MTEyLCAtOTguMTkyODE0KSAiIHg9IjEwMS4yOTg5MTEiIHk9IjgzLjE5Mjk1NzYiIHdpZHRoPSI2Mi40OTg0MDA2IiBoZWlnaHQ9IjI5Ljk5OTcxMjMiPjwvcmVjdD4KICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJYTUxJRF82MV8iIGZpbGw9IiMxNDZBOEEiIHBvaW50cz0iMjUwLjEwNCAyMzYuOTYyIDIyOC44OTEgMjU4LjE3NSAyNzMuMDg1IDMwMi4zNjkgMjkwLjc2MyAyOTguODM0IDI5NC4yOTggMjgxLjE1NiAyODEuMDQgMjUzLjc1NiI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlhNTElEXzYwXyIgZmlsbD0iIzE0NkE4QSIgcG9pbnRzPSIyOTIuNTMgMTk0LjUzNiAyNzEuMzE3IDIxNS43NDkgMjg4LjExMSAyNDYuNjg1IDMxNS41MTEgMjU5Ljk0MyAzMzMuMTg5IDI1Ni40MDcgMzM2LjcyNSAyMzguNzMiPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJYTUxJRF81OV8iIGZpbGw9IiMyMDg5QjAiIHBvaW50cz0iMjcxLjMxNyAyMTUuNzQ5IDI1MC4xMDQgMjM2Ljk2MiAyOTQuMjk4IDI4MS4xNTYgMzExLjk3NiAyNzcuNjIxIDMxNS41MTEgMjU5Ljk0MyI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlhNTElEXzU4XyIgZmlsbD0iIzA2Mzg0QSIgcG9pbnRzPSIzMzguNDkyIDMyNS4zNSAzMjguNzcgMzAxLjQ4NSAyOTQuMjk4IDI4MS4xNTYgMjczLjA4NSAzMDIuMzY5IDMxNy4yNzkgMzQ2LjU2NCI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlhNTElEXzU3XyIgZmlsbD0iIzA2Mzg0QSIgcG9pbnRzPSIzODAuOTE5IDI4Mi45MjQgMzM2LjcyNSAyMzguNzMgMzE1LjUxMSAyNTkuOTQzIDMzNS44NDEgMjk0LjQxNCAzNTkuNzA2IDMwNC4xMzciPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJYTUxJRF81Nl8iIGZpbGw9IiMxNDZBOEEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMyNy4wMDE2OTgsIDI5Mi42NDcxODEpIHJvdGF0ZSgtMTM1LjAwMDAwMCkgdHJhbnNsYXRlKC0zMjcuMDAxNjk4LCAtMjkyLjY0NzE4MSkgIiB4PSIyOTUuNzUyNDk3IiB5PSIyNzcuNjQ3MzI1IiB3aWR0aD0iNjIuNDk4NDAwNiIgaGVpZ2h0PSIyOS45OTk3MTIzIj48L3JlY3Q+CiAgICAgICAgICAgICAgICA8cmVjdCBpZD0iWE1MSURfNTVfIiBmaWxsPSIjMDYzODRBIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNDUuNDUyMDIxLCAyMzUuNTQ3NTk3KSByb3RhdGUoMTM1LjAwMDAwMCkgdHJhbnNsYXRlKC0xNDUuNDUyMDIxLCAtMjM1LjU0NzU5NykgIiB4PSIxMjIuNDUyMjQyIiB5PSIyMjAuNTQ3NzQxIiB3aWR0aD0iNDUuOTk5NTU4OSIgaGVpZ2h0PSIyOS45OTk3MTIzIj48L3JlY3Q+CiAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iWE1MSURfNTRfIiBmaWxsPSIjMDYzODRBIiBwb2ludHM9IjM0Mi4wMjggNjAuMTg1IDMyMC44MTUgMzguOTcyIDI5Mi41MyAzOC45NzIgMzEwLjIwOCA3MC43OTIgMzQyLjAyOCA4OC40NyI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlhNTElEXzUzXyIgZmlsbD0iIzYyQjNDRCIgcG9pbnRzPSIyOTIuNTMgMzguOTcyIDI1Ny4xNzUgNzQuMzI3IDI4MS45MjQgOTkuMDc2IDMxMy43NDQgODEuMzk4IDMxNy4yNzkgNjMuNzIxIj48L3BvbHlnb24+CiAgICAgICAgICAgICAgICA8cmVjdCBpZD0iWE1MSURfNTJfIiBmaWxsPSIjMjA4OUIwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzMTEuOTc1NTQ0LCA5My43NzIzMTEpIHJvdGF0ZSgtMTM1LjAwMDAwMCkgdHJhbnNsYXRlKC0zMTEuOTc1NTQ0LCAtOTMuNzcyMzExKSAiIHg9IjI5NC40NzU3MTIiIHk9IjY4Ljc3MjU1MDMiIHdpZHRoPSIzNC45OTk2NjQzIiBoZWlnaHQ9IjQ5Ljk5OTUyMDUiPjwvcmVjdD4KICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJYTUxJRF81MV8iIGZpbGw9IiM4MkM4REIiIHBvaW50cz0iMjUwLjEwNCA1My4xMTQgMTIyLjgyNSAxODAuMzkzIDE2MS43MTYgMjE5LjI4NCAyMjUuMzU1IDE2OS43ODcgMjg4Ljk5NSA5Mi4wMDUiPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJYTUxJRF81MF8iIGZpbGw9IiM0MTlFQkUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI0NC44MDExODQsIDE3NS4wOTAxNDkpIHJvdGF0ZSgtMTM1LjAwMDAwMCkgdHJhbnNsYXRlKC0yNDQuODAxMTg0LCAtMTc1LjA5MDE0OSkgIiB4PSIyMTcuMzAxOTQ4IiB5PSI4NS4wOTIwMTE4IiB3aWR0aD0iNTQuOTk4NDcyNiIgaGVpZ2h0PSIxNzkuOTk2Mjc0Ij48L3JlY3Q+CiAgICAgICAgICAgICAgICA8cmVjdCBpZD0iWE1MSURfNDlfIiBmaWxsPSIjMDYzODRBIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1OC42Nzc0NDksIDMyMS4zMDY3MjApIHJvdGF0ZSgxMzUuMDAwMDAwKSB0cmFuc2xhdGUoLTU4LjY3NzQ0OSwgLTMyMS4zMDY3MjApICIgeD0iNDMuNjc3NTkzIiB5PSIzMTEuMzA2ODE2IiB3aWR0aD0iMjkuOTk5NzEyMyIgaGVpZ2h0PSIxOS45OTk4MDgyIj48L3JlY3Q+CiAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iWE1MSURfNDhfIiBmaWxsPSIjMTQ2QThBIiBwb2ludHM9IjcxLjQ2OCAyOTguNzQzIDg4LjQ0NSAyNjYuNTIzIDcwLjc1MSAyNTcuMiA0Ni45MDIgMzAyLjQ2IDYyLjcyMSAzMTguMjc5IDc2Ljg2MyAzMTguMjc5IDc2Ljg2MyAzMDQuMTM3Ij48L3BvbHlnb24+CiAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iWE1MSURfNDdfIiBmaWxsPSIjMDYzODRBIiBwb2ludHM9IjEyMy44IDMxMC4yNDkgMTE0LjQ3NyAyOTIuNTU1IDgyLjI1NyAzMDkuNTMyIDc2Ljg2MyAzMDQuMTM3IDYyLjcyMSAzMTguMjc5IDc4LjU0IDMzNC4wOTgiPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0wLjY5LDE5Ni40NjIgTDkyLjYxNCwyODguMzg2IEwxMjYuMjAyLDI2OC45NDEgTDE0NS42NDcsMjM1LjM1MyBDMTA2LjM2NiwxOTYuMDcyIDUwLjc0MiwxODMuMTA5IDAuNjksMTk2LjQ2MiBaIiBpZD0iWE1MSURfNDZfIiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTQ1LjY0NywyMzUuMzUzIEw5Mi42MTQsMjg4LjM4NiBMMTg0LjUzOCwzODAuMzEgQzE5Ny44OTEsMzMwLjI1OCAxODQuOTI4LDI3NC42MzQgMTQ1LjY0NywyMzUuMzUzIFoiIGlkPSJYTUxJRF80NV8iIGZpbGw9IiNBM0RERTkiPjwvcGF0aD4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg=="

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/chrometab.c7fb842f.png";

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,Cjxzdmcgd2lkdGg9Ijc0M3B4IiBoZWlnaHQ9IjEzNnB4IiB2aWV3Qm94PSIxMzggNTE2IDc0MyAxMzYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQyICgzNjc4MSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJDTElFTlQiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEzOC4wMDAwMDAsIDUxNi4wMDAwMDApIj4KICAgICAgICA8ZyBpZD0iY2xpZW50Ij4KICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS01IiBmaWxsPSIjRDhEOEQ4IiB4PSIwIiB5PSIwIiB3aWR0aD0iMjMxIiBoZWlnaHQ9IjEzNiIgcng9IjgiPjwvcmVjdD4KICAgICAgICAgICAgPHBhdGggZD0iTTAsMTggTDIzMSwxOCBMMjMxLDEyOC4wMDUyNzEgQzIzMSwxMzIuNDIwNjM4IDIyNy40MTc5MDEsMTM2IDIyMi45OTgxNjksMTM2IEw4LjAwMTgzMDk1LDEzNiBDMy41ODI1NDE3NCwxMzYgMCwxMzIuNDIwMjIyIDAsMTI4LjAwNTI3MSBMMCwxOCBaIiBpZD0iUmVjdGFuZ2xlLTYiIGZpbGw9IiNGNEY0RjQiPjwvcGF0aD4KICAgICAgICAgICAgPGcgaWQ9ImRvdHMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDYuMDAwMDAwLCA2LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0icmVkIiBmaWxsPSIjREY0RTQ3IiBjeD0iNCIgY3k9IjQiIHI9IjQiPjwvY2lyY2xlPgogICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0ieWVsbG93IiBmaWxsPSIjRDFBODM5IiBjeD0iMTYiIGN5PSI0IiByPSI0Ij48L2NpcmNsZT4KICAgICAgICAgICAgICAgIDxjaXJjbGUgaWQ9ImdyZWVuIiBmaWxsPSIjMzRCMThGIiBjeD0iMjgiIGN5PSI0IiByPSI0Ij48L2NpcmNsZT4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgICAgICA8ZyBpZD0iY2xpZW50LWNvcHktMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTEyLjAwMDAwMCwgMC4wMDAwMDApIj4KICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS01IiBmaWxsPSIjRDhEOEQ4IiB4PSIwIiB5PSIwIiB3aWR0aD0iMjMxIiBoZWlnaHQ9IjEzNiIgcng9IjgiPjwvcmVjdD4KICAgICAgICAgICAgPHBhdGggZD0iTTAsMTggTDIzMSwxOCBMMjMxLDEyOC4wMDUyNzEgQzIzMSwxMzIuNDIwNjM4IDIyNy40MTc5MDEsMTM2IDIyMi45OTgxNjksMTM2IEw4LjAwMTgzMDk1LDEzNiBDMy41ODI1NDE3NCwxMzYgMCwxMzIuNDIwMjIyIDAsMTI4LjAwNTI3MSBMMCwxOCBaIiBpZD0iUmVjdGFuZ2xlLTYiIGZpbGw9IiNGNEY0RjQiPjwvcGF0aD4KICAgICAgICAgICAgPGcgaWQ9ImRvdHMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDYuMDAwMDAwLCA2LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0icmVkIiBmaWxsPSIjREY0RTQ3IiBjeD0iNCIgY3k9IjQiIHI9IjQiPjwvY2lyY2xlPgogICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0ieWVsbG93IiBmaWxsPSIjRDFBODM5IiBjeD0iMTYiIGN5PSI0IiByPSI0Ij48L2NpcmNsZT4KICAgICAgICAgICAgICAgIDxjaXJjbGUgaWQ9ImdyZWVuIiBmaWxsPSIjMzRCMThGIiBjeD0iMjgiIGN5PSI0IiByPSI0Ij48L2NpcmNsZT4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg=="

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/applyboardSchool.f85cd392.png";

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/applyboardSearch.fb67f312.png";

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/applyboardEligibility.647e50e9.png";

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactEmotion = __webpack_require__(1);

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

var _reactSpringyParallax = __webpack_require__(4);

var _reactSpringyParallax2 = _interopRequireDefault(_reactSpringyParallax);

var _cloud = __webpack_require__(25);

var _cloud2 = _interopRequireDefault(_cloud);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Import Packages
var BackgroundClouds = _react2.default.createElement(
  "div",
  null,
  _react2.default.createElement(
    _reactSpringyParallax2.default.Layer,
    { offset: 0.4, speed: 0.4, style: { opacity: 0.7 } },
    _react2.default.createElement("img", {
      src: _cloud2.default,
      style: { display: "block", width: "20%", marginLeft: "15%" }
    }),
    _react2.default.createElement("img", {
      src: _cloud2.default,
      style: { display: "block", width: "10%", marginLeft: "75%" }
    })
  ),
  _react2.default.createElement(
    _reactSpringyParallax2.default.Layer,
    { offset: 0.65, speed: 0.1, style: { opacity: 0.5 } },
    _react2.default.createElement("img", {
      src: _cloud2.default,
      style: { display: "block", width: "20%", margin: "0 0 15% 55%" }
    }),
    _react2.default.createElement("img", {
      src: _cloud2.default,
      style: { display: "block", width: "10%", marginLeft: "15%" }
    }),
    _react2.default.createElement("img", {
      src: _cloud2.default,
      style: { display: "block", width: "30%", marginLeft: "80%" }
    })
  ),
  _react2.default.createElement(
    _reactSpringyParallax2.default.Layer,
    { offset: 1, speed: 0.8, style: { opacity: 0.5 } },
    _react2.default.createElement("img", {
      src: _cloud2.default,
      style: { display: "block", width: "20%", marginLeft: "55%" }
    }),
    _react2.default.createElement("img", {
      src: _cloud2.default,
      style: { display: "block", width: "10%", marginLeft: "15%" }
    })
  ),
  _react2.default.createElement(
    _reactSpringyParallax2.default.Layer,
    { offset: 1.75, speed: 0.5, style: { opacity: 0.5 } },
    _react2.default.createElement("img", {
      src: _cloud2.default,
      style: { display: "block", width: "20%", marginLeft: "70%" }
    }),
    _react2.default.createElement("img", {
      src: _cloud2.default,
      style: { display: "block", width: "20%", marginLeft: "40%" }
    })
  ),
  _react2.default.createElement(
    _reactSpringyParallax2.default.Layer,
    { offset: 2, speed: 0.2, style: { opacity: 0.7 } },
    _react2.default.createElement("img", {
      src: _cloud2.default,
      style: { display: "block", width: "10%", marginLeft: "10%" }
    }),
    _react2.default.createElement("img", {
      src: _cloud2.default,
      style: { display: "block", width: "20%", marginLeft: "75%" }
    })
  ),
  _react2.default.createElement(
    _reactSpringyParallax2.default.Layer,
    { offset: 2.6, speed: -0.1, style: { opacity: 0.9 } },
    _react2.default.createElement("img", {
      src: _cloud2.default,
      style: { display: "block", width: "20%", marginLeft: "60%" }
    }),
    _react2.default.createElement("img", {
      src: _cloud2.default,
      style: { display: "block", width: "25%", marginLeft: "30%" }
    }),
    _react2.default.createElement("img", {
      src: _cloud2.default,
      style: { display: "block", width: "10%", marginLeft: "80%" }
    })
  ),
  _react2.default.createElement(
    _reactSpringyParallax2.default.Layer,
    { offset: 3.6, speed: 0.4, style: { opacity: 0.9 } },
    _react2.default.createElement("img", {
      src: _cloud2.default,
      style: { display: "block", width: "20%", marginLeft: "5%" }
    }),
    _react2.default.createElement("img", {
      src: _cloud2.default,
      style: { display: "block", width: "15%", marginLeft: "75%" }
    })
  )
);

//Import Assets
exports.default = BackgroundClouds;

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,Cjxzdmcgd2lkdGg9IjQxN3B4IiBoZWlnaHQ9IjI1NnB4IiB2aWV3Qm94PSIwIDAgNDE3IDI1NiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDxwYXRoIGQ9Ik00MTYuNSwxOTEuNSBDNDE2LjUsMjI2Ljg0NCAzODcuODQ0LDI1NS41IDM1Mi41LDI1NS41IEwzNTIuNSwyNTYgTDgwLjUsMjU2IEMzNi4zMTIsMjU2IDAuNSwyMjAuMTg3IDAuNSwxNzYgQzAuNSwxMzcuMjUgMjguMDYzLDEwNC45MzcgNjQuNjU2LDk3LjU5NCBDNjQuNjU2LDk3LjA2MyA2NC41LDk2LjU2MyA2NC41LDk2IEM2NC41LDQyLjk2OSAxMDcuNDY5LDAgMTYwLjUsMCBDMTk3LjkzOCwwIDIzMCwyMS42MjUgMjQ1Ljg0NCw1Mi44NzUgQzI1NC4yMTksNDkuOTM3IDI2My4wOTQsNDggMjcyLjUsNDggQzMxNi4zNDQsNDggMzUxLjg0NCw4My4yNSAzNTIuNDA2LDEyNyBMMzUyLjUsMTI3IEwzNTIuNSwxMjcuNSBDMzg3Ljg0NCwxMjcuNSA0MTYuNSwxNTYuMTU2IDQxNi41LDE5MS41IFoiIGlkPSJTaGFwZSIgc3Ryb2tlPSJub25lIiBmaWxsPSIjRkZGRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD4KPC9zdmc+Cg=="

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n  margin-left: auto;\n  margin-right: auto;\n  text-align: center;\n  width: 80%;\n  line-height: 1.5;\n"], ["\n  margin-left: auto;\n  margin-right: auto;\n  text-align: center;\n  width: 80%;\n  line-height: 1.5;\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  position: relative;\n"], ["\n  display: flex;\n  justify-content: center;\n  position: relative;\n"]),
    _templateObject3 = _taggedTemplateLiteral(["\n  width: ", "vw;\n  max-width: ", "px;\n  height: ", "vw;\n  max-height: ", "px;\n  padding: ", "vw;\n  position: relative;\n  ", " ", ";\n"], ["\n  width: ", "vw;\n  max-width: ", "px;\n  height: ", "vw;\n  max-height: ", "px;\n  padding: ", "vw;\n  position: relative;\n  ", " ", ";\n"]),
    _templateObject4 = _taggedTemplateLiteral(["\n  width: ", "vw;\n  max-width: ", "px;\n  max-height: ", "px;\n  padding: ", "vw;\n  height: 14vw;\n  ", ";\n"], ["\n  width: ", "vw;\n  max-width: ", "px;\n  max-height: ", "px;\n  padding: ", "vw;\n  height: 14vw;\n  ", ";\n"]),
    _templateObject5 = _taggedTemplateLiteral(["\n  margin-top: calc(20vh + 400px);\n  @media (max-width: 550px){\n    margin-top:calc(20vh + 38vw);\n  }\n\n"], ["\n  margin-top: calc(20vh + 400px);\n  @media (max-width: 550px){\n    margin-top:calc(20vh + 38vw);\n  }\n\n"]),
    _templateObject6 = _taggedTemplateLiteral(["\n  margin-top: calc(20vh + 450px);\n  @media (max-width: 550px){\n    margin-top:calc(20vh + 45vw);\n  }\n"], ["\n  margin-top: calc(20vh + 450px);\n  @media (max-width: 550px){\n    margin-top:calc(20vh + 45vw);\n  }\n"]);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactEmotion = __webpack_require__(1);

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

var _reactSpringyParallax = __webpack_require__(4);

var _reactSpringyParallax2 = _interopRequireDefault(_reactSpringyParallax);

var _swift = __webpack_require__(27);

var _swift2 = _interopRequireDefault(_swift);

var _redux = __webpack_require__(28);

var _redux2 = _interopRequireDefault(_redux);

var _react3 = __webpack_require__(29);

var _react4 = _interopRequireDefault(_react3);

var _node = __webpack_require__(30);

var _node2 = _interopRequireDefault(_node);

var _java = __webpack_require__(31);

var _java2 = _interopRequireDefault(_java);

var _html = __webpack_require__(32);

var _html2 = _interopRequireDefault(_html);

var _javascript = __webpack_require__(33);

var _javascript2 = _interopRequireDefault(_javascript);

var _css = __webpack_require__(34);

var _css2 = _interopRequireDefault(_css);

var _illustrator = __webpack_require__(35);

var _illustrator2 = _interopRequireDefault(_illustrator);

var _photoshop = __webpack_require__(36);

var _photoshop2 = _interopRequireDefault(_photoshop);

var _aftereffects = __webpack_require__(37);

var _aftereffects2 = _interopRequireDefault(_aftereffects);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } //Import Packages


//Import Assets


var SubTitle = (0, _reactEmotion2.default)("h3")(_templateObject);

var BadgeRow = (0, _reactEmotion2.default)("div")(_templateObject2);
var Badge = (0, _reactEmotion2.default)("img")(_templateObject3, function (props) {
  return (props.scale || 1) * 14;
}, function (props) {
  return (props.scale || 1) * 150;
}, function (props) {
  return (props.scale || 1) * 14;
}, function (props) {
  return (props.scale || 1) * 150;
}, function (props) {
  return (props.scale || 1) * 1;
}, "" /* margin:0 5px 0 5px; */, "" /* flex:1; */);

var BadgePlaceHolder = (0, _reactEmotion2.default)("div")(_templateObject4, function (props) {
  return props.width * 14;
}, function (props) {
  return (props.width || 1) * 150;
}, function (props) {
  return (props.width || 1) * 150;
}, function (props) {
  return (props.width || 1) * 1;
}, "" /* flex:${props=>props.flex}; */);

var RowTwo = (0, _reactEmotion.css)(_templateObject5);

var RowThree = (0, _reactEmotion.css)(_templateObject6);

var Badges = _react2.default.createElement(
  "div",
  null,
  _react2.default.createElement(
    _reactSpringyParallax2.default.Layer,
    { offset: 0, speed: 2 },
    _react2.default.createElement(
      SubTitle,
      { style: { marginTop: "12vh" } },
      "My selected works have been built using some of the following:"
    )
  ),
  _react2.default.createElement(
    _reactSpringyParallax2.default.Layer,
    { offset: 0, speed: 2 },
    _react2.default.createElement(
      BadgeRow,
      { style: { top: "20vh" } },
      _react2.default.createElement(Badge, { src: _swift2.default }),
      _react2.default.createElement(BadgePlaceHolder, { width: 3 }),
      _react2.default.createElement(Badge, { src: _java2.default })
    )
  ),
  _react2.default.createElement(
    _reactSpringyParallax2.default.Layer,
    { offset: 0, speed: 1.6 },
    _react2.default.createElement(
      BadgeRow,
      { style: { top: "20vh" } },
      _react2.default.createElement(Badge, { src: _redux2.default }),
      _react2.default.createElement(BadgePlaceHolder, { width: 1 }),
      _react2.default.createElement(Badge, { src: _node2.default })
    ),
    _react2.default.createElement(
      BadgeRow,
      { style: { top: "20vh" } },
      _react2.default.createElement(Badge, { src: _javascript2.default }),
      _react2.default.createElement(BadgePlaceHolder, { width: 1 }),
      _react2.default.createElement(Badge, { src: _css2.default })
    )
  ),
  _react2.default.createElement(
    _reactSpringyParallax2.default.Layer,
    { offset: 0, speed: 1.2 },
    _react2.default.createElement(
      BadgeRow,
      { style: { top: "20vh" } },
      _react2.default.createElement(Badge, { src: _react4.default })
    ),
    _react2.default.createElement(
      BadgeRow,
      { style: { top: "20vh" } },
      _react2.default.createElement(Badge, { src: _html2.default })
    )
  ),
  _react2.default.createElement(
    _reactSpringyParallax2.default.Layer,
    { offset: 0, speed: 1.4 },
    _react2.default.createElement(
      SubTitle,
      { className: RowTwo },
      "With designs created using"
    )
  ),
  _react2.default.createElement(
    _reactSpringyParallax2.default.Layer,
    { offset: 0, speed: 1.4 },
    _react2.default.createElement(
      BadgeRow,
      { className: RowThree },
      _react2.default.createElement(Badge, { src: _photoshop2.default })
    )
  ),
  _react2.default.createElement(
    _reactSpringyParallax2.default.Layer,
    { offset: 0, speed: 1.2 },
    _react2.default.createElement(
      BadgeRow,
      { className: RowThree },
      _react2.default.createElement(Badge, { style: { padding: 10 }, scale: 0.7, src: _illustrator2.default }),
      _react2.default.createElement(BadgePlaceHolder, { width: 1 }),
      _react2.default.createElement(Badge, { style: { padding: 10 }, scale: 0.7, src: _aftereffects2.default })
    )
  )
);

exports.default = Badges;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/swift.d540c67b.png";

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/redux.d48bec4a.png";

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/react.0288e93c.png";

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/node.bee7ff2a.png";

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/java.befdb05b.png";

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/html.73f12929.png";

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/javascript.a90c08be.png";

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/css3.97024fc0.png";

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/illustrator.613f9f61.png";

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/photoshop.89b02948.png";

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/aftereffects.0ccded69.png";

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = PageNotFound;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(6);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _style = __webpack_require__(7);

var _pageNotFound = __webpack_require__(39);

var _pageNotFound2 = _interopRequireDefault(_pageNotFound);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  location: _propTypes2.default.object.isRequired
};

function PageNotFound(_ref) {
  var location = _ref.location;

  return _react2.default.createElement(
    'p',
    { style: _pageNotFound2.default.p },
    'Page not found - the path, ',
    _react2.default.createElement(
      _style.Code,
      null,
      location.pathname
    ),
    ', did not match any React Router routes.'
  );
}

PageNotFound.propTypes = propTypes;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = __webpack_require__(7);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var s = Object.create(_style2.default);

exports.default = s;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactAddonsCssTransitionGroup = __webpack_require__(5);

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function FadeIn(Page, method) {
  var method = method || 'FadeIn';
  return function (props) {
    return _react2.default.createElement(
      _reactAddonsCssTransitionGroup2.default,
      {
        transitionAppear: true,
        transitionAppearTimeout: 2600,
        transitionEnterTimeout: 2600,
        transitionLeaveTimeout: 2600,
        transitionName: method
      },
      _react2.default.createElement(Page, props)
    );
  };
};
exports.default = FadeIn;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SplitSection = __webpack_require__(42);

var _SplitSection2 = _interopRequireDefault(_SplitSection);

var _reactStatic = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import {withRouter} from 'react-router-dom';


var SplitSectionContainer = function (_React$Component) {
  _inherits(SplitSectionContainer, _React$Component);

  function SplitSectionContainer() {
    _classCallCheck(this, SplitSectionContainer);

    var _this = _possibleConstructorReturn(this, (SplitSectionContainer.__proto__ || Object.getPrototypeOf(SplitSectionContainer)).call(this));

    _this.onMouseLeave = _this.onMouseLeave.bind(_this);
    _this.onMouseEnter = _this.onMouseEnter.bind(_this);
    _this._isInSubPath = _this._isInSubPath.bind(_this);
    _this.state = { hover: null };
    return _this;
  }

  _createClass(SplitSectionContainer, [{
    key: '_isInSubPath',
    value: function _isInSubPath() {
      var pathname = this.props.location.pathname;
      if (pathname != '/') {
        return true;
      }
      return false;
    }
  }, {
    key: 'onMouseLeave',
    value: function onMouseLeave() {
      if (this.state.hover != null && !this._isInSubPath()) this.setState({ hover: null });
    }
  }, {
    key: 'onMouseEnter',
    value: function onMouseEnter(side) {
      if (side && !this._isInSubPath()) {
        this.setState({ hover: side });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      // console.log("side is", this.props.side);
      return _react2.default.createElement(_SplitSection2.default, {
        hoverSide: this.state.hover,
        onMouseLeave: this.onMouseLeave,
        onMouseEnter: this.onMouseEnter,
        side: this.props.side
      });
    }
  }]);

  return SplitSectionContainer;
}(_react2.default.Component);

exports.default = (0, _reactStatic.withRouter)(SplitSectionContainer);

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  display:flex;\n  max-height: 100vh;\n  max-width: 100vw;\n  overflow:hidden;\n  flex-direction: row;\n  position:relative;\n  background: ', ';\n'], ['\n  display:flex;\n  max-height: 100vh;\n  max-width: 100vw;\n  overflow:hidden;\n  flex-direction: row;\n  position:relative;\n  background: ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  height:0;\n  z-index: 0;\n  width: ', ';\n  @media (max-width: ', '){\n    border-bottom: ', ';\n    border-left: ', ';\n  }\n  @media (min-width: ', '){\n    border-bottom: ', ';\n    border-left: ', ';\n  }\n  transition:all 0.5s;\n'], ['\n  height:0;\n  z-index: 0;\n  width: ', ';\n  @media (max-width: ', '){\n    border-bottom: ', ';\n    border-left: ', ';\n  }\n  @media (min-width: ', '){\n    border-bottom: ', ';\n    border-left: ', ';\n  }\n  transition:all 0.5s;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  height:0;\n  z-index: 0;\n  width: ', ';\n  @media (max-width: ', '){\n    border-top: ', ';\n    border-right: ', ';\n  }\n  @media (min-width: ', '){\n    border-top: ', ';\n    border-right: ', ';\n  }\n  transition:all 0.3s;\n'], ['\n  height:0;\n  z-index: 0;\n  width: ', ';\n  @media (max-width: ', '){\n    border-top: ', ';\n    border-right: ', ';\n  }\n  @media (min-width: ', '){\n    border-top: ', ';\n    border-right: ', ';\n  }\n  transition:all 0.3s;\n']);

var _reactEmotion = __webpack_require__(1);

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(2);

var _SplitSectionContent = __webpack_require__(43);

var _SplitSectionContent2 = _interopRequireDefault(_SplitSectionContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } //import packages

// import {withRouter} from 'react-router-dom';


//import components


//helper function
function calcHovSideVal(left, right, def, val) {
  switch (val) {
    case 'left':
      return left;
    case 'right':
      return right;
    default:
      return def;
  }
};

//styling media queries
var mediumWidth = '799px';
var largeWidth = '800px';

var _SplitContainer = (0, _reactEmotion2.default)('div')(_templateObject, function (props) {
  return props.side != 'right' ? '#e2e2e2' : '#d5d9ff';
});

var _RightBg = (0, _reactEmotion2.default)('div')(_templateObject2, function (props) {
  if (props.side) {
    return props.side == 'left' ? '3%' : '97%';
  }
  return calcHovSideVal('30%', '70%', '50%', props.hoverSide);
}, mediumWidth, function (props) {
  if (props.side) {
    return '100vh solid #d5d9ff';
  }
  return '60vh solid #d5d9ff';
}, function (props) {
  if (props.side) {
    return '11vh solid transparent';
  }
  return '6.75vh solid transparent';
}, largeWidth, function (props) {
  if (props.side) {
    return '100vh solid #d5d9ff';
  }
  return '80vh solid #d5d9ff';
}, function (props) {
  if (props.side) {
    return '11vh solid transparent';
  }
  return '9vh solid transparent';
});

var _LeftBg = (0, _reactEmotion2.default)('div')(_templateObject3, function (props) {
  if (props.side) {
    return props.side == 'left' ? '97%' : '3%';
  }
  return calcHovSideVal('70%', '30%', '50%', props.hoverSide);
}, mediumWidth, function (props) {
  if (props.side) {
    return '100vh solid #e2e2e2';
  }
  return '60vh solid #e2e2e2';
}, function (props) {
  if (props.side) {
    return '11vh solid transparent';
  }
  return '6.75vh solid transparent';
}, largeWidth, function (props) {
  if (props.side) {
    return '100vh solid #e2e2e2';
  }
  return '80vh solid #e2e2e2';
}, function (props) {
  if (props.side) {
    return '11vh solid transparent';
  }
  return '9vh solid transparent';
});

function SplitSection(props) {
  return _react2.default.createElement(
    _SplitContainer,
    {
      onMouseLeave: props.onMouseLeave,
      side: props.side
    },
    _react2.default.createElement(_SplitSectionContent2.default, props),
    _react2.default.createElement(_LeftBg, { side: props.side, hoverSide: props.hoverSide }),
    _react2.default.createElement(_RightBg, { side: props.side, hoverSide: props.hoverSide })
  );
}

exports.default = (0, _reactStatic.withRouter)(SplitSection);

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  z-index: 4;\n  opacity:', ';\n  transition: all 0.5s;\n'], ['\n  z-index: 4;\n  opacity:', ';\n  transition: all 0.5s;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  @media (max-width: ', '){\n    height:60vh;\n  }\n  @media (min-width: ', '){\n    height:80vh;\n  }\n  opacity: ', ';\n  position:absolute;\n  z-index: 1;\n  bottom:0px;\n  left: ', ';\n  transform:translate(-50%);\n  transition:all 0.5s;\n'], ['\n  @media (max-width: ', '){\n    height:60vh;\n  }\n  @media (min-width: ', '){\n    height:80vh;\n  }\n  opacity: ', ';\n  position:absolute;\n  z-index: 1;\n  bottom:0px;\n  left: ', ';\n  transform:translate(-50%);\n  transition:all 0.5s;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  width:50%;\n  height:100%;\n  position:absolute;\n  z-index:3;\n  text-align: center;\n'], ['\n  width:50%;\n  height:100%;\n  position:absolute;\n  z-index:3;\n  text-align: center;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  transition:all 0.5s;\n  @media (max-width: ', '){\n    width:28vw;\n    font-size: 0.9em;\n  }\n  @media (min-width: ', '){\n    width:34vw;\n  }\n  margin-top: 8vw;\n  display:inline-block;\n  opacity: ', ';\n  margin-left: ', ';\n'], ['\n  transition:all 0.5s;\n  @media (max-width: ', '){\n    width:28vw;\n    font-size: 0.9em;\n  }\n  @media (min-width: ', '){\n    width:34vw;\n  }\n  margin-top: 8vw;\n  display:inline-block;\n  opacity: ', ';\n  margin-left: ', ';\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  @media (max-width: ', '){\n    font-size: 1.3em;\n  }\n'], ['\n  @media (max-width: ', '){\n    font-size: 1.3em;\n  }\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  padding:10px;\n  @media (max-width: ', '){\n    display: none;\n  }\n'], ['\n  padding:10px;\n  @media (max-width: ', '){\n    display: none;\n  }\n']);

var _reactEmotion = __webpack_require__(1);

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(2);

var _Button2 = __webpack_require__(3);

var _Button3 = _interopRequireDefault(_Button2);

var _splitleft = __webpack_require__(44);

var _splitleft2 = _interopRequireDefault(_splitleft);

var _splitright = __webpack_require__(45);

var _splitright2 = _interopRequireDefault(_splitright);

var _left = __webpack_require__(46);

var _left2 = _interopRequireDefault(_left);

var _right = __webpack_require__(47);

var _right2 = _interopRequireDefault(_right);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
// import {withRouter} from 'react-router-dom';


//helper function
function calcHovSideVal(left, right, def, val) {
  switch (val) {
    case 'left':
      return left;
    case 'right':
      return right;
    default:
      return def;
  }
};

//styling media queries
var mediumWidth = '799px';
var largeWidth = '800px';

var _ContentContainer = (0, _reactEmotion2.default)('div')(_templateObject, function (props) {
  return props.side ? '0' : '1';
});

var _SplitImage = (0, _reactEmotion2.default)('img')(_templateObject2, mediumWidth, largeWidth, function (props) {
  return calcHovSideVal(props.left ? '1' : '0', props.left ? '0' : '1', '1', props.hoverSide);
}, function (props) {
  return calcHovSideVal('60%', '40%', '50%', props.hoverSide);
});

var _MouseOverCont = (0, _reactEmotion2.default)('div')(_templateObject3);

var _Profession = (0, _reactEmotion2.default)('div')(_templateObject4, mediumWidth, largeWidth, function (props) {
  return calcHovSideVal(props.left ? '1' : '0.1', props.left ? '0.1' : '1', '1', props.hoverSide);
}, function (props) {
  return calcHovSideVal('30%', '-30%', '0', props.hoverSide);
});

var _Title = (0, _reactEmotion2.default)('h2')(_templateObject5, mediumWidth);

var _HiddenDescription = (0, _reactEmotion2.default)('div')(_templateObject6, mediumWidth);

function SplitSectionContent(props) {
  return _react2.default.createElement(
    _ContentContainer,
    { side: props.side },
    _react2.default.createElement(
      _MouseOverCont,
      {
        onMouseEnter: function onMouseEnter() {
          return props.onMouseEnter('left');
        } },
      _react2.default.createElement(
        _Profession,
        {
          left: true,
          hoverSide: props.hoverSide
        },
        _react2.default.createElement(
          _Title,
          null,
          '<Developer>'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Software engineer, front end specialist & React.JS rockstar.'
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          _HiddenDescription,
          null,
          _react2.default.createElement(
            'p',
            null,
            'I love making visual things sexy with clean, elegant and efficient code.'
          ),
          _react2.default.createElement('br', null)
        ),
        _react2.default.createElement(
          _Button3.default,
          {
            onClick: function onClick() {
              props.history.push('/engineer');
            },
            small: true, whiteBg: true, color: 'dark' },
          'See Work'
        )
      )
    ),
    _react2.default.createElement(_SplitImage, { hoverSide: props.hoverSide, left: true, src: '' + _splitleft2.default }),
    _react2.default.createElement(
      _MouseOverCont,
      {
        style: { left: '50%' },
        onMouseEnter: function onMouseEnter() {
          return props.onMouseEnter('right');
        } },
      _react2.default.createElement(
        _Profession,
        {
          hoverSide: props.hoverSide
        },
        _react2.default.createElement(
          _Title,
          null,
          'Photographer'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Travelling, exploring and learning new things is my passion.'
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          _HiddenDescription,
          null,
          _react2.default.createElement(
            'p',
            null,
            'I\'m a hobby photographer that shares my stories & journeys with the world'
          ),
          _react2.default.createElement('br', null)
        ),
        _react2.default.createElement(
          _Button3.default,
          {
            onClick: function onClick() {
              props.history.push('/photographer', { scrollToTop: false });
            },
            small: true, whiteBg: true, color: 'dark' },
          'View Gallery'
        )
      )
    ),
    _react2.default.createElement(_SplitImage, { hoverSide: props.hoverSide, src: '' + _splitright2.default }),
    _react2.default.createElement(_SplitImage, { hoverSide: props.hoverSide, style: { opacity: props.hoverSide == 'left' ? 1 : 0 }, src: '' + _left2.default }),
    _react2.default.createElement(_SplitImage, { hoverSide: props.hoverSide, style: { opacity: props.hoverSide == 'right' ? 1 : 0 }, src: '' + _right2.default })
  );
}
exports.default = SplitSectionContent;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/splitleft.da6e67a3.png";

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/splitright.06a569ec.png";

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/left.39c35abf.png";

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/right.13b4b995.png";

/***/ }),
/* 48 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 49 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
});
//# sourceMappingURL=static.c6090516.js.map