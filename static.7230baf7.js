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
/******/ 	__webpack_require__.p = "http://tobygu.com/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  cursor: pointer;\n  border-radius: 10px;\n  border-style: solid;\n  background-color: rgba(0,0,0,0);\n  margin-top:10px;\n  color: ', ';\n  border-color: ', ';\n  width:', ';\n  font-size: ', ';\n  padding: ', ';\n  @media (max-width: 550px){\n    width:', ';\n    font-size: ', ';\n    padding: ', ';\n  }\n  font-weight: 200;\n  border-width: 2px;\n  transition: all 0.2s;\n  ', '\n\n  &:hover{\n    background-color: ', ';\n  }\n  &:active{\n    background-color: ', ';\n    }\n  }\n'], ['\n  cursor: pointer;\n  border-radius: 10px;\n  border-style: solid;\n  background-color: rgba(0,0,0,0);\n  margin-top:10px;\n  color: ', ';\n  border-color: ', ';\n  width:', ';\n  font-size: ', ';\n  padding: ', ';\n  @media (max-width: 550px){\n    width:', ';\n    font-size: ', ';\n    padding: ', ';\n  }\n  font-weight: 200;\n  border-width: 2px;\n  transition: all 0.2s;\n  ', '\n\n  &:hover{\n    background-color: ', ';\n  }\n  &:active{\n    background-color: ', ';\n    }\n  }\n']);

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
  return props.shadow && 'text-shadow: 0px 0px 8px ' + (props.color == 'dark' ? 'white' : 'black') + ';\n    box-shadow: 0px 0px 3px ' + (props.color == 'dark' ? 'white' : 'black') + ';';
}, function (props) {
  return props.whiteBg ? 'rgba(255,255,255,0.75)' : 'rgba(213, 217, 255,0.75)';
}, function (props) {
  return props.whiteBg ? 'rgba(255,255,255,1)' : 'rgba(213, 217, 255,1)';
});

exports.default = _Button;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-springy-parallax");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/rageonIMac.84a51abf.png";

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/rageonIphonex.a8faec04.png";

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/rageonPixel2.658624b2.png";

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/rageonLogo.0f866f88.png";

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-addons-css-transition-group");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,Cjxzdmcgd2lkdGg9Ijc5M3B4IiBoZWlnaHQ9Ijc4NnB4IiB2aWV3Qm94PSItOSAtOSA3OTMgNzg2IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0MiAoMzY3ODEpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8cG9seWdvbiBpZD0icGF0aC0xIiBwb2ludHM9Ii01LjY4NDM0MTg5ZS0xNCA3NzkgNzc5IDc3OSA3NzkgLTIuMjczNzM2NzVlLTEzIC01LjY4NDM0MTg5ZS0xNCAtMi4yNzM3MzY3NWUtMTMiPjwvcG9seWdvbj4KICAgICAgICA8cmFkaWFsR3JhZGllbnQgY3g9IjQ0LjU5NTYyNDYlIiBjeT0iMjcuMzQ0MTQxNiUiIGZ4PSI0NC41OTU2MjQ2JSIgZnk9IjI3LjM0NDE0MTYlIiByPSIzMy41NDI1Nzc4JSIgaWQ9InJhZGlhbEdyYWRpZW50LTMiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjQ0VFOEZDIiBvZmZzZXQ9IjAlIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiM4OEM5RjkiIG9mZnNldD0iMTAwJSI+PC9zdG9wPgogICAgICAgIDwvcmFkaWFsR3JhZGllbnQ+CiAgICAgICAgPHBhdGggZD0iTTM4OS41LDc3OSBDMTc0LjM4NzgwNiw3NzkgLTguNTI2NTEyODNlLTEzLDYwNC42MTIxOTQgLTguNTI2NTEyODNlLTEzLDM4OS41IEwtOC41MjY1MTI4M2UtMTMsMzg5LjUgQy04LjUyNjUxMjgzZS0xMywxNzQuMzg3ODA2IDE3NC4zODc4MDYsLTIuMTYwMDQ5OTJlLTEyIDM4OS41LC0yLjE2MDA0OTkyZS0xMiBMMzg5LjUsLTIuMTYwMDQ5OTJlLTEyIEM2MDQuNjEyMTk0LC0yLjE2MDA0OTkyZS0xMiA3NzksMTc0LjM4NzgwNiA3NzksMzg5LjUgTDc3OSwzODkuNSBDNzc5LDYwNC42MTIxOTQgNjA0LjYxMjE5NCw3NzkgMzg5LjUsNzc5IFoiIGlkPSJwYXRoLTQiPjwvcGF0aD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSIxZjMwZiIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQuMjM1NDg0LCAtOC42NDEwMTUpIj4KICAgICAgICA8ZyBpZD0ic3ZnMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuMDAwMDAwLCAwLjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0iZzEwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzOTQuMDAwMDAwLCAzOTAuMDAwMDAwKSBzY2FsZSgtMSwgMSkgcm90YXRlKC0xODAuMDAwMDAwKSB0cmFuc2xhdGUoLTM5NC4wMDAwMDAsIC0zOTAuMDAwMDAwKSB0cmFuc2xhdGUoLTAuMDAwMDAwLCAwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9ImcxMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOS4wMDAwMDAsIC0wLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSJnMTQtQ2xpcHBlZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuMDAwMDAwLCAtMC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgPG1hc2sgaWQ9Im1hc2stMiIgZmlsbD0id2hpdGUiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4KICAgICAgICAgICAgICAgICAgICAgICAgPC9tYXNrPgogICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0icGF0aDE4Ij48L2c+CiAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJnMTQiIG1hc2s9InVybCgjbWFzay0yKSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC4wMDAwMDAsIC0wLjAwMDAwMCkiIGlkPSJnMjAiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjAwMDAwMCwgLTAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik03NzksMzg5LjUgQzc3OSwxNzQuMzg3ODA2IDYwNC42MTIxOTQsLTIuMjczNzM2NzVlLTEzIDM4OS41LC0yLjI3MzczNjc1ZS0xMyBDMTc0LjM4NzgwNiwtMi4yNzM3MzY3NWUtMTMgLTUuNjg0MzQxODllLTE0LDE3NC4zODc4MDYgLTUuNjg0MzQxODllLTE0LDM4OS41IEMtNS42ODQzNDE4OWUtMTQsNjA0LjYxMjE5NCAxNzQuMzg3ODA2LDc3OSAzODkuNSw3NzkgQzYwNC42MTIxOTQsNzc5IDc3OSw2MDQuNjEyMTk0IDc3OSwzODkuNSIgaWQ9InBhdGgyMiIgZmlsbD0idXJsKCNyYWRpYWxHcmFkaWVudC0zKSIgZmlsbC1ydWxlPSJub256ZXJvIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPGcgaWQ9ImcyNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC41MTk1MTksIDAuNzAwODA3KSI+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9ImcyNi1DbGlwcGVkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC4wMDAwMDAsIC0wLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8bWFzayBpZD0ibWFzay01IiBmaWxsPSJ3aGl0ZSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNwYXRoLTQiPjwvdXNlPgogICAgICAgICAgICAgICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJwYXRoMzAiPjwvZz4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTE2Ni4zNDg5NTgsNzM4LjQyNzA4MyBDMTIzLjA3MTE4MSw3NDYuNTQxNjY3IDI1LjY5NjE4MDYsNjg1LjY3MTQ3MiA4LjEyNTQwMjc4LDY2NS4zOTU4MzMgQy05LjQ2NzAxMzg5LDY0NS4xMjAxOTQgLTUyLjc0NDc5MTcsNTQwLjk3MjIyMiAtNjAuODU5Mzc1LDUwNy4xNTA2MzkgQy02OC45NzM5NTgzLDQ3My4zNTA2OTQgLTQ1Ljk5MzQ1ODMsMzI4LjY1MTQ0NCAtNDAuNTgzNzM2MSwyODUuMzczNjY3IEMtMzUuMTc0MDEzOSwyNDIuMDk1ODg5IDI3LjA1OTQzMDYsMTY2LjM1OTc3OCA0NS45OTM0NTgzLDE3Ny4xNzkyMjIgQzY0LjkyNzQ4NjEsMTg3Ljk5ODY2NyA2Mi4yMjI2MjUsMjA4LjI3NDMwNiA2MC44NTkzNzUsMjI5LjkxMzE5NCBDNTkuNTE3NzYzOSwyNTEuNTUyMDgzIDU5LjUxNzc2MzksMjU1LjYyMDE5NCA1OS41MTc3NjM5LDI4MS4zMDU1NTYgQzU5LjUxNzc2MzksMzA3LjAxMjU1NiA3MS42Nzg4MTk0LDMwMi45NDQ0NDQgODMuODM5ODc1LDMxNS4xMjcxMzkgQzk2LjAyMjU2OTQsMzI3LjI4ODE5NCA5My4zMTc3MDgzLDMyOC42NTE0NDQgMTEzLjU5MzM0NywzNDEuOTgxIEMxMzMuODkwNjI1LDM1NS4zMTA1NTYgMTIzLjA3MTE4MSwzNzAuNTY1OTcyIDEyMS43MDc5MzEsMzc4LjY4MDU1NiBDMTIwLjM2NjMxOSwzODYuNzk1MTM5IDEwOC4xODM2MjUsMzgwLjA0MzgwNiA4Ny45MDc5ODYxLDM3Ny4zMzg5NDQgQzY3LjYzMjM0NzIsMzc0LjYzNDA4MyA3NC4zODM2ODA2LDM4NC4wOTAyNzggNjIuMjIyNjI1LDM4OS41IEM1MC4wMzk5MzA2LDM5NC45MDk3MjIgNDQuNjMwMjA4Myw0MDMuMDI0MzA2IDM2LjUxNTYyNSw0MjcuMzY4MDU2IEMyOC40MDEwNDE3LDQ1MS43MTE4MDYgMjcuMDU5NDMwNiw0NTguNDYzMTM5IDI5Ljc2NDI5MTcsNDc4Ljc2MDQxNyBDMzIuNDY5MTUyOCw0OTkuMDM2MDU2IDQxLjkyNTM0NzIsNDgwLjEwMjAyOCA0My4yODg1OTcyLDQ1OC40NjMxMzkgQzQ0LjYzMDIwODMsNDM2LjgyNDI1IDYzLjU2NDIzNjEsNDQ0LjkzODgzMyA2My41NjQyMzYxLDQzMS40MTQ1MjggQzYzLjU2NDIzNjEsNDE3Ljg5MDIyMiA5MC42MTI4NDcyLDQwMy4wMjQzMDYgOTcuMzY0MTgwNiwzOTguOTU2MTk0IEMxMDQuMTM3MTUzLDM5NC45MDk3MjIgMTIzLjA3MTE4MSw0MTkuMjUzNDcyIDEyOS44NDQxNTMsNDI2LjAwNDgwNiBDMTM2LjU5NTQ4Niw0MzIuNzc3Nzc4IDE0NC43MTAwNjksNDQyLjIzMzk3MiAxNDcuNDE0OTMxLDQ0Ny42NDM2OTQgQzE1MC4xMTk3OTIsNDUzLjA1MzQxNyAxODMuOTE5NzM2LDQ1Ny4xMjE1MjggMTkwLjY5MjcwOCw0NTcuMTIxNTI4IEMxOTcuNDQ0MDQyLDQ1Ny4xMjE1MjggMjEzLjY5NDg0Nyw0MzYuODI0MjUgMjEzLjY5NDg0Nyw0MjcuMzY4MDU2IEMyMTMuNjk0ODQ3LDQxNy44OTAyMjIgMjIxLjgwOTQzMSwzOTIuMjA0ODYxIDIyOC41NjA3NjQsMzc3LjMzODk0NCBDMjM1LjMzMzczNiwzNjIuNDUxMzg5IDI1MC4xOTk2NTMsMzU5Ljc0NjUyOCAyNjMuNzIzOTU4LDM0OC45MjcwODMgQzI3Ny4yNDgyNjQsMzM4LjEwNzYzOSAyODMuOTk5NTk3LDM0Ny41ODU0NzIgMjgzLjk5OTU5NywzNDcuNTg1NDcyIEMyODMuOTk5NTk3LDM0Ny41ODU0NzIgMjc4LjU4OTg3NSwzNzAuNTY1OTcyIDI3OC41ODk4NzUsMzg5LjUgQzI3OC41ODk4NzUsNDA4LjQzNDAyOCAyOTQuODE5MDQyLDQyNC42NjMxOTQgMjk0LjgxOTA0Miw0MjQuNjYzMTk0IEMyOTQuODE5MDQyLDQyNC42NjMxOTQgMzIwLjUyNjA0Miw0MDUuNzI5MTY3IDMyMS44Njc2NTMsNDAwLjMxOTQ0NCBDMzIzLjIzMDkwMywzOTQuOTA5NzIyIDM0My41MjgxODEsMzc1Ljk3NTY5NCAzNDQuODY5NzkyLDM2Ni41MTk1IEMzNDYuMjMzMDQyLDM1Ny4wNDE2NjcgMzU3LjA1MjQ4NiwzNDQuODgwNjExIDM3Ni45NjAyNjQsMzQyLjE3NTc1IEMzOTYuODg5NjgxLDMzOS40NzA4ODkgMzgyLjczNzg0NywzNjUuMTU2MjUgMzg5LjUxMDgxOSwzODIuNzQ4NjY3IEMzOTYuMjYyMTUzLDQwMC4zMTk0NDQgNDA1LjczOTk4Niw0MDMuMDI0MzA2IDQxNy45MDEwNDIsNDA1LjcyOTE2NyBDNDMwLjA4MzczNiw0MDguNDM0MDI4IDQzOS41Mzk5MzEsNDE5LjI1MzQ3MiA0NDcuNjU0NTE0LDQzMC4wNzI5MTcgQzQ1NS43NjkwOTcsNDQwLjg5MjM2MSA0NzAuNjU2NjUzLDQ1NS43NTgyNzggNDY5LjI5MzQwMyw0NjcuOTQwOTcyIEM0NjcuOTUxNzkyLDQ4MC4xMDIwMjggNDYzLjg4MzY4MSw0ODguMjE2NjExIDQ1OC40NzM5NTgsNTAzLjEwNDE2NyBDNDUzLjA2NDIzNiw1MTcuOTcwMDgzIDQ3NC43MDMxMjUsNTIzLjM3OTgwNiA0ODQuMTgwOTU4LDU0MC45NzIyMjIgQzQ5My42MzcxNTMsNTU4LjU0MyA0ODQuMTgwOTU4LDU0MC45NzIyMjIgNTA1LjgxOTg0Nyw1NDYuMzgxOTQ0IEM1MjcuNDM3MDk3LDU1MS43OTE2NjcgNTE3Ljk4MDkwMyw1NTEuNzkxNjY3IDUyMi4wMjczNzUsNTU5LjkwNjI1IEM1MjYuMDk1NDg2LDU2OC4wMjA4MzMgNTI4LjgwMDM0Nyw1NzYuMTM1NDE3IDUyNC43MzIyMzYsNTkxLjAyMjk3MiBDNTIwLjY4NTc2NCw2MDUuODg4ODg5IDUwNS44MTk4NDcsNTkxLjAyMjk3MiA0OTAuOTMyMjkyLDU5MS4wMjI5NzIgQzQ3Ni4wNjYzNzUsNTkxLjAyMjk3MiA0OTYuMzQyMDE0LDYxMS4yOTg2MTEgNDk3LjcwNTI2NCw2MjcuNTI3Nzc4IEM0OTkuMDQ2ODc1LDY0My43NTY5NDQgNTE3Ljk4MDkwMyw2MzkuNzEwNDcyIDUzMS41MDUyMDgsNjQxLjA1MjA4MyBDNTQ1LjAyOTUxNCw2NDIuNDE1MzMzIDU0OS4wNzU5ODYsNjIzLjQ4MTMwNiA1NTMuMTQ0MDk3LDYxOS40MTMxOTQgQzU1Ny4xOTA1NjksNjE1LjM2NjcyMiA1OTkuMTI2NzM2LDY0Ni40NjE4MDYgNjA5Ljk0NjE4MSw2NjEuMzI3NzIyIEM2MjAuNzY1NjI1LDY3Ni4yMTUyNzggNjAwLjQ2ODM0Nyw2NzIuMTQ3MTY3IDYwNS44NzgwNjksNjc4LjQyMjQ0NCBDNjExLjI4Nzc5Miw2ODQuNjk3NzIyIDU3My40MTk3MzYsNjg1Ljk3NDQxNyA1NTguNTUzODE5LDY4OC4zNzYzMzMgQzU0My42NjYyNjQsNjkwLjc5OTg4OSA1MDUuODE5ODQ3LDY5Mi40NDQ0NDQgNDkwLjkzMjI5Miw3MDEuNjE5MzMzIEM0NzYuMDY2Mzc1LDcxMC44MTU4NjEgNDE5LjI2NDI5Miw3MDMuODkxNDE3IDQwNC4zNzY3MzYsNjk2LjUxMjU1NiBDMzg5LjUxMDgxOSw2ODkuMTEyMDU2IDM4MC4wMzI5ODYsNjk3LjExODQ0NCAzNzMuMjgxNjUzLDcwNy4zMzIgQzM2Ni41MDg2ODEsNzE3LjUyMzkxNyAzMzguMDk2ODE5LDcxMi40MTcxMzkgMzI5Ljk4MjIzNiw3MTguMTUxNDQ0IEMzMjEuODY3NjUzLDcyMy44NjQxMTEgMzEzLjc1MzA2OSw3MDguNjczNjExIDMwMi45MzM2MjUsNzA0LjYyNzEzOSBDMjkyLjExNDE4MSw3MDAuNTU5MDI4IDI4OC4wNjc3MDgsNjk5LjIxNzQxNyAyNzQuNTQzNDAzLDcwNy4zMzIgQzI2MS4wMTkwOTcsNzE1LjQ0NjU4MyAyNzguNTg5ODc1LDcyNC45MDI3NzggMjU5LjY1NTg0Nyw3MzEuNjc1NzUgQzI0MC43NDM0NTgsNzM4LjQyNzA4MyAyMTYuNjU5Mzc1LDcyOC45OTI1MjggMTY2LjM0ODk1OCw3MzguNDI3MDgzIFogTTM0NC44Njk3OTIsMzE3LjgyMTE4MSBDMzQ0Ljg2OTc5MiwzMDIuOTU1MjY0IDMzNC4wNTAzNDcsMjg2LjcyNjA5NyAzNDQuODY5NzkyLDI3MS44Mzg1NDIgQzM1NS42ODkyMzYsMjU2Ljk1MDk4NiAzNjUuMTQ1NDMxLDI1Ni45NTA5ODYgMzc0LjYyMzI2NCwyNTUuNjA5Mzc1IEMzODQuMDc5NDU4LDI1NC4yNDYxMjUgNDExLjE0OTcwOCwyNTUuNjA5Mzc1IDM4OS41MTA4MTksMjczLjE4MDE1MyBDMzY3Ljg1MDI5MiwyOTAuNzcyNTY5IDM1NS42ODkyMzYsMjc3LjI0ODI2NCAzNTguMzk0MDk3LDI5Ny41NDU1NDIgQzM2MS4wOTg5NTgsMzE3LjgyMTE4MSAzNDQuODY5NzkyLDMxNy44MjExODEgMzQ0Ljg2OTc5MiwzMTcuODIxMTgxIFogTTQ5Ni4zNDIwMTQsNTM0LjIxMDA2OSBDNDk2LjM0MjAxNCw1MTkuMzQ0MTUzIDQ4NS41MjI1NjksNTAzLjExNDk4NiA0OTYuMzQyMDE0LDQ4OC4yMjc0MzEgQzUwNy4xNjE0NTgsNDczLjMzOTg3NSA0NzQuNzAzMTI1LDQ2MS4xNzg4MTkgNDg0LjE4MDk1OCw0NTkuODE1NTY5IEM0OTMuNjM3MTUzLDQ1OC40NzM5NTggNTM0LjIxMDA2OSw0NjMuODgzNjgxIDUxMi41NzExODEsNDgxLjQ1NDQ1OCBDNDkwLjkzMjI5Miw0OTkuMDQ2ODc1IDUwNy4xNjE0NTgsNDkzLjYzNzE1MyA1MDkuODY2MzE5LDUxMy45MzQ0MzEgQzUxMi41NzExODEsNTM0LjIxMDA2OSA0OTYuMzQyMDE0LDUzNC4yMTAwNjkgNDk2LjM0MjAxNCw1MzQuMjEwMDY5IFogTTM5Ny42ODgxNTYsMjk3LjUzNDcyMiBDMzg2LjkzMzYyOCwyNzcuMjU5MDgzIDQxNS4xOTQwMTcsMjg1LjM3MzY2NyA0MjguNjEwMTI4LDI3MC40ODYxMTEgQzQ0Mi4wMjYyMzksMjU1LjYyMDE5NCA0MzYuODMyOTA2LDI3MC40ODYxMTEgNDU0LjQyNTMyMiwyNzcuMjU5MDgzIEM0NzEuOTk2MSwyODQuMDEwNDE3IDQzOS41Mzc3NjcsMjk4Ljg3NjMzMyA0MjguNzE4MzIyLDMwNi45OTA5MTcgQzQxNy44OTg4NzgsMzE1LjEwNTUgNDA3LjE0NDM1LDMxNS40MDg0NDQgMzk3LjY4ODE1NiwyOTcuNTM0NzIyIFogTTQ4Mi44MTc3MDgsMjg2LjUyNDg1NiBDNDY2Ljg2OTg0NywyOTQuNzQ3NjMzIDQ3Ny40MDc5ODYsMjc1LjkwMDE2MSA0ODIuODE3NzA4LDI1NS4yMzUwMjIgQzQ4OC4yMjc0MzEsMjM0LjU2OTg4MyA1MDguNTAzMDY5LDI1MC4xOTMxNjEgNTI3LjQ1ODczNiwyMzkuMzczNzE3IEM1NDYuMzkyNzY0LDIyOC41NTQyNzIgNTQ3LjczNDM3NSwyNDMuNDQxODI4IDU2NS4zMjY3OTIsMjM4LjAzMjEwNiBDNTgyLjg5NzU2OSwyMzIuNjIyMzgzIDU4OS42NDg5MDMsMjIwLjQzOTY4OSA2MDYuNTI3MjM2LDIyMS44MDI5MzkgQzYyMy4zODM5MzEsMjIzLjE0NDU1IDU5My43MTcwMTQsMjM1LjMyNzI0NCA1ODYuOTQ0MDQyLDI0My40NDE4MjggQzU4MC4xOTI3MDgsMjUxLjU1NjQxMSA1NjUuMzI2NzkyLDI1NS42MDI4ODMgNTQ5LjA5NzYyNSwyNTUuMjM1MDIyIEM1MzIuODY4NDU4LDI1NC44NDU1MjIgNTM0LjIxMDA2OSwyNzMuMTk1MyA1MTcuOTgwOTAzLDI3MS44MzIwNSBDNTAxLjc1MTczNiwyNzAuNDkwNDM5IDQ5MC4xNTMyOTIsMjgyLjczODA1IDQ4Mi44MTc3MDgsMjg2LjUyNDg1NiBaIE0zNDAuMDYxNjMxLDE4My45MzA1NTYgQzMyMC42Mjk5MDgsMTY1LjAxODE2NyAzMzEuMzQxMTU4LDE3Ny4xNzkyMjIgMzQwLjA2MTYzMSwxNjQuOTk2NTI4IEMzNDguNzgyMTAzLDE1Mi44MzU0NzIgMzMwLjQ5NzI0MiwxMTQuOTQ1Nzc4IDMyOS4xNTU2MzEsOTMuMzI4NTI3OCBDMzI3Ljc5MjM4MSw3MS42ODk2Mzg5IDM2My43OTk0OTIsMTAwLjA3OTg2MSAzNzcuMzIzNzk3LDEwMi43ODQ3MjIgQzM5MC44NDgxMDMsMTA1LjQ4OTU4MyAzODYuODY2NTQ3LDExMy42MDQxNjcgMzk3LjY4NTk5MiwxMjEuNzE4NzUgQzQwOC41MDU0MzYsMTI5LjgzMzMzMyA0MTUuNTM4MDc1LDEzMS43Mzc1NTYgNDI3LjQxNzgyNSwxMjAuOTE4MTExIEM0MzkuMjc1OTM2LDExMC4wOTg2NjcgNDU0Ljg1NTkzNiwxMDAuMDc5ODYxIDQ1NC44NTU5MzYsODcuOTE4ODA1NiBDNDU0Ljg1NTkzNiw3NS43MzYxMTExIDQ5Ny43MDA5MzYsNTUuNDYwNDcyMiA1MTMuOTMwMTAzLDYzLjU3NTA1NTYgQzUzMC4xNTkyNjksNzEuNjg5NjM4OSA1MzkuNjE1NDY0LDg3LjkxODgwNTYgNTU0LjUwMzAxOSwxMDEuNDIxNDcyIEM1NjkuMzY4OTM2LDExNC45NDU3NzggNTYzLjk1OTIxNCwxNDAuNjUyNzc4IDU2OC4wMjczMjUsMTU2Ljg4MTk0NCBDNTcyLjA3Mzc5NywxNzMuMTExMTExIDU1OC41NDk0OTIsMTcwLjQwNjI1IDU1MS43OTgxNTgsMTgzLjkzMDU1NiBDNTQ1LjAyNTE4NiwxOTcuNDU0ODYxIDUyNS4yNjg4ODEsMjA5LjY1OTE5NCA1MTcuMTU0Mjk3LDIxNi40OTcwODMgQzUwOS4wMzk3MTQsMjIzLjMzNDk3MiA0OTYuMzM3Njg2LDIyNS42NzE5NzIgNDg1LjUxODI0MiwyMjEuNjkwNDE3IEM0NzQuNjk4Nzk3LDIxNy43MDg4NjEgNDY3Ljk0NzQ2NCwyMjEuNjkwNDE3IDQ2Mi41Mzc3NDIsMjMyLjQwMTY2NyBDNDU3LjEyODAxOSwyNDMuMTEyOTE3IDQ0Ny42NTAxODYsMjM5LjM5MTAyOCA0MzkuNTM1NjAzLDIzOC4wMjc3NzggQzQzMS40MjEwMTksMjM2LjY4NjE2NyAzOTguOTYyNjg2LDIyMy4xNDAyMjIgMzgwLjAyODY1OCwyMTMuNjg0MDI4IEMzNjEuMDk0NjMxLDIwNC4yMDYxOTQgMzUyLjQ4MjM1MywxOTYuMDA1MDU2IDM0MC4wNjE2MzEsMTgzLjkzMDU1NiBaIiBpZD0iQ29tYmluZWQtU2hhcGUiIGZpbGw9IiM1QzkxM0IiIGZpbGwtcnVsZT0ibm9uemVybyIgbWFzaz0idXJsKCNtYXNrLTUpIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K"

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/window.4f6d8fb6.png";

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  display:flex;\n  max-height: 100vh;\n  max-width: 100vw;\n  overflow:hidden;\n  flex-direction: row;\n  position: ', ';\n  ', ';\n  background: ', ';\n'], ['\n  display:flex;\n  max-height: 100vh;\n  max-width: 100vw;\n  overflow:hidden;\n  flex-direction: row;\n  position: ', ';\n  ', ';\n  background: ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  height:0;\n  z-index: 0;\n  width: ', ';\n  @media (max-width: ', '){\n    border-bottom: ', ';\n    border-left: ', ';\n  }\n  @media (min-width: ', '){\n    border-bottom: ', ';\n    border-left: ', ';\n  }\n  transition:all 0.5s;\n'], ['\n  height:0;\n  z-index: 0;\n  width: ', ';\n  @media (max-width: ', '){\n    border-bottom: ', ';\n    border-left: ', ';\n  }\n  @media (min-width: ', '){\n    border-bottom: ', ';\n    border-left: ', ';\n  }\n  transition:all 0.5s;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  height:0;\n  z-index: 0;\n  width: ', ';\n  @media (max-width: ', '){\n    border-top: ', ';\n    border-right: ', ';\n  }\n  @media (min-width: ', '){\n    border-top: ', ';\n    border-right: ', ';\n  }\n  transition:all 0.3s;\n'], ['\n  height:0;\n  z-index: 0;\n  width: ', ';\n  @media (max-width: ', '){\n    border-top: ', ';\n    border-right: ', ';\n  }\n  @media (min-width: ', '){\n    border-top: ', ';\n    border-right: ', ';\n  }\n  transition:all 0.3s;\n']);

var _reactEmotion = __webpack_require__(1);

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(4);

var _SplitSectionContent = __webpack_require__(28);

var _SplitSectionContent2 = _interopRequireDefault(_SplitSectionContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } //import packages


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
  return props.fixed ? 'fixed' : 'relative';
}, function (props) {
  return props.fixed && 'height:100%; width:100%';
}, function (props) {
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
      fixed: props.fixed,
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
/* 13 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Li = exports.Code = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(13);

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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = WrappedApp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(16);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactStatic = __webpack_require__(4);

var _App = __webpack_require__(17);

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
/* 16 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(4);

var _reactAddonsCssTransitionGroup = __webpack_require__(9);

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var _Home = __webpack_require__(18);

var _Home2 = _interopRequireDefault(_Home);

var _Work = __webpack_require__(25);

var _Work2 = _interopRequireDefault(_Work);

var _PageNotFound = __webpack_require__(64);

var _PageNotFound2 = _interopRequireDefault(_PageNotFound);

var _FadeIn = __webpack_require__(66);

var _FadeIn2 = _interopRequireDefault(_FadeIn);

var _SplitSection = __webpack_require__(67);

var _SplitSection2 = _interopRequireDefault(_SplitSection);

__webpack_require__(68);

__webpack_require__(69);

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
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.location !== prevProps.location) {
        if (this.props.location && this.props.location.pathname === "/") {
          if (this.state.client) {
            window.scrollTo(0, document.body.scrollHeight);
          }
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var side;
      var pathname = this.props.location.pathname;
      // var Router = (p)=><BrowserRouter>{p.children}</BrowserRouter>;

      //Set Router
      // var Router = (p)=><BrowserRouter>{p.children}</BrowserRouter>;
      //Deal with pathname and sides
      // pathname = window.location.pathname;

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

exports.default = (0, _reactStatic.withRouter)(App);

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n  position: fixed;\n  z-index: 5;\n  border-top: 100px solid orange;\n  border-right: 50px solid transparent;\n  height: 100vh;\n  width: 100vw;\n  left: ", ";\n"], ["\n  position: fixed;\n  z-index: 5;\n  border-top: 100px solid orange;\n  border-right: 50px solid transparent;\n  height: 100vh;\n  width: 100vw;\n  left: ", ";\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n  position: fixed;\n  z-index: 5;\n  border-top: 100px solid orange;\n  border-right: 50px solid transparent;\n  height: 100vh;\n  width: 100vw;\n  right: ", ";\n"], ["\n  position: fixed;\n  z-index: 5;\n  border-top: 100px solid orange;\n  border-right: 50px solid transparent;\n  height: 100vh;\n  width: 100vw;\n  right: ", ";\n"]),
    _templateObject3 = _taggedTemplateLiteral(["\n  max-height: ", ";\n  overflow: hidden;\n  transition: all 0.6s ease-in;\n"], ["\n  max-height: ", ";\n  overflow: hidden;\n  transition: all 0.6s ease-in;\n"]);

exports.default = Home;

var _Hero = __webpack_require__(19);

var _Hero2 = _interopRequireDefault(_Hero);

var _Profile = __webpack_require__(23);

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
      { height: hidden ? "0vh" : "200vh" },
      _react2.default.createElement(_Hero2.default, null),
      _react2.default.createElement(_Profile2.default, null)
    )
  );
}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(["\n  color: white;\n  max-width: 600px;\n  ", " padding:0 10px 0 10px;\n  text-align: center;\n  margin: auto;\n  top: 65vh;\n  transform: translateY(-100%);\n  position: relative;\n  font-weight: 200;\n  z-index: 2;\n  text-shadow: 0px 0px 10px rgb(100, 100, 100);\n"], ["\n  color: white;\n  max-width: 600px;\n  ", " padding:0 10px 0 10px;\n  text-align: center;\n  margin: auto;\n  top: 65vh;\n  transform: translateY(-100%);\n  position: relative;\n  font-weight: 200;\n  z-index: 2;\n  text-shadow: 0px 0px 10px rgb(100, 100, 100);\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  flex-wrap: wrap;\n  max-width: 400px;\n  margin: auto;\n"], ["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  flex-wrap: wrap;\n  max-width: 400px;\n  margin: auto;\n"]),
    _templateObject3 = _taggedTemplateLiteral(["\n  color: #c1c7fa;\n  display: inline;\n"], ["\n  color: #c1c7fa;\n  display: inline;\n"]),
    _templateObject4 = _taggedTemplateLiteral(["\n  color: #f7cb99;\n  display: inline;\n"], ["\n  color: #f7cb99;\n  display: inline;\n"]),
    _templateObject5 = _taggedTemplateLiteral(["\n  position: relative;\n  left: 50%;\n  white-space: nowrap;\n  width: 600px;\n  transform: translate(-50%);\n"], ["\n  position: relative;\n  left: 50%;\n  white-space: nowrap;\n  width: 600px;\n  transform: translate(-50%);\n"]),
    _templateObject6 = _taggedTemplateLiteral([""], [""]),
    _templateObject7 = _taggedTemplateLiteral(["\n  width: 9vw;\n  @media (max-width: 1400px) {\n    width: 12vw;\n  }\n  @media (max-width: 1200px) {\n    width: 13vw;\n  }\n  @media (max-width: 1200px) and (max-height: 900px){\n    width: 10vw;\n  }\n  @media (max-width: 1200px) and (max-height: 600px) {\n    width: 10vw;\n  }\n  @media (max-width: 1200px) and (min-height: 800px) and (max-height: 500px) {\n    display: none;\n  }\n\n"], ["\n  width: 9vw;\n  @media (max-width: 1400px) {\n    width: 12vw;\n  }\n  @media (max-width: 1200px) {\n    width: 13vw;\n  }\n  @media (max-width: 1200px) and (max-height: 900px){\n    width: 10vw;\n  }\n  @media (max-width: 1200px) and (max-height: 600px) {\n    width: 10vw;\n  }\n  @media (max-width: 1200px) and (min-height: 800px) and (max-height: 500px) {\n    display: none;\n  }\n\n"]),
    _templateObject8 = _taggedTemplateLiteral(["\n  height:93vh;\n  padding-top: 2px;\n  width:100%;\n  position:relative;\n  background-size: cover;\n  background-image: url('", "');\n  background-attachment: fixed;\n  background-position: center top;\n"], ["\n  height:93vh;\n  padding-top: 2px;\n  width:100%;\n  position:relative;\n  background-size: cover;\n  background-image: url('", "');\n  background-attachment: fixed;\n  background-position: center top;\n"]),
    _templateObject9 = _taggedTemplateLiteral(["\n  @media (max-width: 600px) {\n    display: none;\n  }\n  @media (max-width: 710px) and (min-height:1000px) {\n    display: none;\n  }\n  position: fixed;\n  left: 50%;\n  transform: translateX(-50%);\n  z-index: 0;\n  width: 100vw;\n  height: 57vw;\n  min-height: 92vh;\n  min-width: 161vh;\n"], ["\n  @media (max-width: 600px) {\n    display: none;\n  }\n  @media (max-width: 710px) and (min-height:1000px) {\n    display: none;\n  }\n  position: fixed;\n  left: 50%;\n  transform: translateX(-50%);\n  z-index: 0;\n  width: 100vw;\n  height: 57vw;\n  min-height: 92vh;\n  min-width: 161vh;\n"]),
    _templateObject10 = _taggedTemplateLiteral(["\n  left: 25%;\n  top: 40%;\n  position: absolute;\n  color: white;\n  @media (max-width: 800px) and (min-height: 900px){\n    left:27%;\n    top: 43%;\n  }\n  @media (max-width: 1200px) and (min-height: 1300px){\n    left:27%;\n    top: 43%;\n  }\n"], ["\n  left: 25%;\n  top: 40%;\n  position: absolute;\n  color: white;\n  @media (max-width: 800px) and (min-height: 900px){\n    left:27%;\n    top: 43%;\n  }\n  @media (max-width: 1200px) and (min-height: 1300px){\n    left:27%;\n    top: 43%;\n  }\n"]);

exports.default = Hero;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactEmotion = __webpack_require__(1);

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

var _reactMtSvgLines = __webpack_require__(20);

var _reactMtSvgLines2 = _interopRequireDefault(_reactMtSvgLines);

var _Button2 = __webpack_require__(2);

var _Button3 = _interopRequireDefault(_Button2);

var _HeroSvg = __webpack_require__(21);

var _HeroSvg2 = _interopRequireDefault(_HeroSvg);

var _cover = __webpack_require__(22);

var _cover2 = _interopRequireDefault(_cover);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } //import packages


//Import components


//Import assets


var _HeroTextDiv = (0, _reactEmotion2.default)("div")(_templateObject, "" /* width:50%; */);

var _ButtonRow = (0, _reactEmotion2.default)("div")(_templateObject2);

var _PurpText = (0, _reactEmotion2.default)("div")(_templateObject3);
var _OjText = (0, _reactEmotion2.default)("div")(_templateObject4);

var _Title = (0, _reactEmotion2.default)("h1")(_templateObject5);

var _SubTitle = (0, _reactEmotion2.default)("h4")(_templateObject6);

var HeroText = function (_React$Component) {
  _inherits(HeroText, _React$Component);

  function HeroText(props) {
    _classCallCheck(this, HeroText);

    return _possibleConstructorReturn(this, (HeroText.__proto__ || Object.getPrototypeOf(HeroText)).call(this, props));
  }

  _createClass(HeroText, [{
    key: "render",
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
            "Toby"
          ),
          " ",
          _react2.default.createElement(
            _OjText,
            null,
            "Gu"
          )
        ),
        _react2.default.createElement(
          _SubTitle,
          null,
          "Senior Software Engineer | Designer | Front End Lead Developer"
        ),
        _react2.default.createElement(
          _SubTitle,
          null,
          "Photographer, Entrepreneur & Digital Nomad"
        ),
        _react2.default.createElement(
          _ButtonRow,
          null,
          _react2.default.createElement(
            _Button3.default,
            null,
            "Learn More"
          ),
          _react2.default.createElement(
            _Button3.default,
            null,
            "See Work"
          )
        )
      );
    }
  }]);

  return HeroText;
}(_react2.default.Component);

var HeroSvg = (0, _reactEmotion2.default)(_HeroSvg2.default)(_templateObject7);

var _HeroContainer = (0, _reactEmotion2.default)("div")(_templateObject8, function (props) {
  return props.src;
});

var _AnimatedTextContainer = (0, _reactEmotion2.default)("div")(_templateObject9);

var _AnimatedText = (0, _reactEmotion2.default)("div")(_templateObject10);

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
        _react2.default.createElement(
          "div",
          null,
          _react2.default.createElement(
            _reactMtSvgLines2.default,
            {
              animate: 500,
              duration: 3000,
              stagger: 100,
              timing: "ease-in"
            },
            _react2.default.createElement(HeroSvg, { className: "ass" })
          )
        )
      )
    ),
    _react2.default.createElement(HeroText, null)
  );
}

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("react-mt-svg-lines");

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HeroSvg = function HeroSvg(props) {
	return _react2.default.createElement(
		'svg',
		{ className: props.className, viewBox: '0 0 284 172.7', style: _extends({}, props.style, { color: 'white' })
		},
		_react2.default.createElement(
			'g',
			{ fill: 'none', stroke: '#FFFFFF', strokeWidth: '4', strokeMiterlimit: '1', strokeLinecap: 'round' },
			_react2.default.createElement('path', { 'class': 'st0', d: 'M4.5,76.5l9.5,26.4' }),
			_react2.default.createElement('path', { 'class': 'st0', d: 'M4.5,76.5l8.8-3.2l4.2-0.1l3.4,1.6l2.2,2.1l2.6,3.3l2.3,6.3l0.1,4.2l-0.4,3l-1.6,3.4l-3.3,2.6l-8.8,3.2' }),
			_react2.default.createElement('path', { 'class': 'st0', d: 'M39.1,74l3.8-1.4l3,0.4l3.4,1.6l2.6,3.3l0.9,2.5l0.1,4.2l-1.6,3.4l-2.1,2.2l-3.8,1.4l-3-0.4l-3.4-1.6l-2.6-3.3 l-0.9-2.5l-0.1-4.2l1.6-3.4L39.1,74' }),
			_react2.default.createElement('path', { 'class': 'st0', d: 'M53.6,58.9l0.8-1.7l1.7,0.8l-0.8,1.7L53.6,58.9' }),
			_react2.default.createElement('path', { 'class': 'st0', d: 'M64.3,84.9L58,67.3' }),
			_react2.default.createElement('path', { 'class': 'st0', d: 'M68.1,63.6l6.3,17.6' }),
			_react2.default.createElement('path', { 'class': 'st0', d: 'M69.9,68.7l2.4-5.1l2.1-2.2l3.8-1.4l3,0.4l2.6,3.3l4.5,12.6' }),
			_react2.default.createElement('path', { 'class': 'st0', d: 'M87,49.6c0.9,0,1.7,0.9,1.6,1.8' }),
			_react2.default.createElement('path', { 'class': 'st0', d: 'M107.7,39.5l0.8-1.7l1.7,0.8l-0.8,1.7L107.7,39.5' }),
			_react2.default.createElement('path', { 'class': 'st0', d: 'M112.2,47.8l6.3,17.6' }),
			_react2.default.createElement('path', { 'class': 'st0', d: 'M136.1,59.1l-2.5,0.9l-3-0.4l-2.6-3.3L120.3,35' }),
			_react2.default.createElement('path', { 'class': 'st0', d: 'M119.7,45.1l8.8-3.2' }),
			_react2.default.createElement('path', { 'class': 'st0', d: 'M165.1,48.8l-7.7-21.4l-0.1-4.2l2.1-2.2l2.5-0.9' }),
			_react2.default.createElement('path', { 'class': 'st0', d: 'M155,32.5l8.8-3.2' }),
			_react2.default.createElement('path', { 'class': 'st0', d: 'M177.6,24.4l3.8-1.4l3,0.4l3.4,1.6l2.6,3.3l0.9,2.5l0.1,4.2l-1.6,3.4l-2.1,2.2l-3.8,1.4l-3-0.4l-3.4-1.6 l-2.6-3.3l-0.9-2.5l-0.1-4.2l1.6-3.4L177.6,24.4' }),
			_react2.default.createElement('path', { 'class': 'st0', d: 'M196.5,17.6l6.3,17.6' }),
			_react2.default.createElement('path', { 'class': 'st0', d: 'M199.2,25.1l-0.1-4.2l1.6-3.4l2.1-2.2l3.8-1.4' }),
			_react2.default.createElement('path', { 'class': 'st0', d: 'M55.9,132.9l-2.5,0.9l-3-0.4l-2.6-3.3l-7.7-21.4' }),
			_react2.default.createElement('path', { 'class': 'st0', d: 'M39.5,118.8l8.8-3.2' }),
			_react2.default.createElement('path', { 'class': 'st0', d: 'M54,103.7l9.5,26.4' }),
			_react2.default.createElement('path', { 'class': 'st0', d: 'M58.9,117.6l2.4-5.1l2.1-2.2l3.8-1.4l3,0.4l2.6,3.3l4.5,12.6' }),
			_react2.default.createElement('path', { 'class': 'st0', d: 'M99.9,112.8l-1.6,3.4l-2.1,2.2l-3.8,1.4l-3-0.4l-3.4-1.6l-2.6-3.3l-0.9-2.5l-0.1-4.2l1.6-3.4l2.1-2.2l3.8-1.4 l3,0.4l1.7,0.8l2.2,2.1l0.9,2.5L82.5,112' }),
			_react2.default.createElement('path', { 'class': 'st0', d: 'M111.9,79.6c1.6-0.1,3,1.5,2.7,3' }),
			_react2.default.createElement('path', { 'class': 'st0', d: 'M144.2,89.8l1.4,3.8l-0.4,3l-1.6,3.4l-2.1,2.2l-5,1.8l-3-0.4l-3.4-1.6l-2.2-2.1l-2.6-3.3l-2.3-6.3l-0.1-4.2 l0.4-3l1.6-3.4l2.1-2.2l5-1.8l3,0.4l3.4,1.6l2.2,2.1' }),
			_react2.default.createElement('path', { 'class': 'st0', d: 'M137.9,92.1l6.3-2.3' }),
			_react2.default.createElement('path', { 'class': 'st0', d: 'M150.3,79.1l6.3,17.6' }),
			_react2.default.createElement('path', { 'class': 'st0', d: 'M153,86.7l-0.1-4.2l1.6-3.4l2.1-2.2l3.8-1.4' }),
			_react2.default.createElement('path', { 'class': 'st0', d: 'M180.5,68.3l6.3,17.6' }),
			_react2.default.createElement('path', { 'class': 'st0', d: 'M185.5,82.1l-1.6,3.4l-2.1,2.2l-3.8,1.4l-3-0.4l-3.4-1.6l-2.6-3.3l-0.9-2.5L168,77l1.6-3.4l2.1-2.2l3.8-1.4 l3,0.4l3.4,1.6' }),
			_react2.default.createElement('path', { 'class': 'st0', d: 'M190.6,64.7l6.3,17.6' }),
			_react2.default.createElement('path', { 'class': 'st0', d: 'M192.4,69.7l2.4-5.1l2.1-2.2l3.8-1.4l3,0.4l2.6,3.3l4.5,12.6' }),
			_react2.default.createElement('path', { 'class': 'st0', d: 'M206.2,64.7l2.4-5.1l2.1-2.2l3.8-1.4l3,0.4l2.6,3.3l4.5,12.6' }),
			_react2.default.createElement('path', { 'class': 'st0', d: 'M142.1,116.4c4,19.1,18,37.1,38.5,49.4c-2.2-4.4-5.1-8.6-8.5-12.6c-3.5,3.2-6.9,6.3-10.4,9.5 c6.3,1,12.6,1.9,18.8,2.9' })
		)
	);
};

exports.default = HeroSvg;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/cover.7b9fe997.jpg";

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  background-color: white;\n  z-index: 2;\n  position: relative;\n"], ["\n  width: 100%;\n  background-color: white;\n  z-index: 2;\n  position: relative;\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n  width: 80%;\n  transform: translateY(-110px);\n  text-align: center;\n  margin-left: 10%;\n  margin-right: 10%;\n  color: #494949;\n  z-index: 2;\n  position: relative;\n"], ["\n  width: 80%;\n  transform: translateY(-110px);\n  text-align: center;\n  margin-left: 10%;\n  margin-right: 10%;\n  color: #494949;\n  z-index: 2;\n  position: relative;\n"]),
    _templateObject3 = _taggedTemplateLiteral(["\n  width: 200px;\n  border-radius: 50%;\n  display: inline-block;\n  @media (max-width: 500px) {\n    width: 150px;\n  }\n"], ["\n  width: 200px;\n  border-radius: 50%;\n  display: inline-block;\n  @media (max-width: 500px) {\n    width: 150px;\n  }\n"]);

exports.default = Profile;

var _reactEmotion = __webpack_require__(1);

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Button2 = __webpack_require__(2);

var _Button3 = _interopRequireDefault(_Button2);

var _profile = __webpack_require__(24);

var _profile2 = _interopRequireDefault(_profile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } //import packages


//import components


//import assets


var _ProfileBackground = (0, _reactEmotion2.default)("div")(_templateObject);

var _ProfileContainer = (0, _reactEmotion2.default)("div")(_templateObject2);

var _PortHole = (0, _reactEmotion2.default)("img")(_templateObject3);

function Profile(props) {
  return _react2.default.createElement(
    _ProfileBackground,
    null,
    _react2.default.createElement(
      _ProfileContainer,
      null,
      _react2.default.createElement(_PortHole, { src: "" + _profile2.default }),
      _react2.default.createElement(
        "h2",
        null,
        "Hey! I'm Toby"
      ),
      _react2.default.createElement(
        "h3",
        null,
        "A Canadian software engineer specializing in front-end development and design.",
        _react2.default.createElement("br", null),
        _react2.default.createElement("br", null),
        "I've founded two startups and have been coding since before facebook was cool."
      )
    )
  );
}

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/profile.11ff6a57.jpg";

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n  z-index: 5;\n  height: 100vh;\n  position: fixed;\n  width: 100vw;\n"], ["\n  z-index: 5;\n  height: 100vh;\n  position: fixed;\n  width: 100vw;\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n  width: 100vw;\n  z-index: 10;\n  text-align: center;\n  position: fixed;\n"], ["\n  width: 100vw;\n  z-index: 10;\n  text-align: center;\n  position: fixed;\n"]),
    _templateObject3 = _taggedTemplateLiteral(["\n  position:fixed;\n  left:100%;\n  top:50%;\n  transform:translate(-130%);\n  border-width: 3px;\n  padding:10px;\n  @media (max-width:550px){\n    padding:5px;\n  }\n  border-color: black;\n  color:black;\n  background-color: transparent;\n  font-size: 1.4em;\n  font-weight: 700;\n  &:hover{\n    background-color: grey\n    color:white;\n    border-color: transparent;\n  }\n  &:active{\n    background-color: black;\n  }\n"], ["\n  position:fixed;\n  left:100%;\n  top:50%;\n  transform:translate(-130%);\n  border-width: 3px;\n  padding:10px;\n  @media (max-width:550px){\n    padding:5px;\n  }\n  border-color: black;\n  color:black;\n  background-color: transparent;\n  font-size: 1.4em;\n  font-weight: 700;\n  &:hover{\n    background-color: grey\n    color:white;\n    border-color: transparent;\n  }\n  &:active{\n    background-color: black;\n  }\n"]);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactSpringyParallax = __webpack_require__(3);

var _reactSpringyParallax2 = _interopRequireDefault(_reactSpringyParallax);

var _reactEmotion = __webpack_require__(1);

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

var _reactStatic = __webpack_require__(4);

var _stars = __webpack_require__(26);

var _stars2 = _interopRequireDefault(_stars);

var _chrometab = __webpack_require__(27);

var _chrometab2 = _interopRequireDefault(_chrometab);

var _earth = __webpack_require__(10);

var _earth2 = _interopRequireDefault(_earth);

var _window = __webpack_require__(11);

var _window2 = _interopRequireDefault(_window);

var _Button2 = __webpack_require__(2);

var _Button3 = _interopRequireDefault(_Button2);

var _SplitSection = __webpack_require__(12);

var _SplitSection2 = _interopRequireDefault(_SplitSection);

var _BackgroundClouds = __webpack_require__(33);

var _BackgroundClouds2 = _interopRequireDefault(_BackgroundClouds);

var _Badges = __webpack_require__(35);

var _Badges2 = _interopRequireDefault(_Badges);

var _RageOn = __webpack_require__(47);

var _RageOn2 = _interopRequireDefault(_RageOn);

var _Applyboard = __webpack_require__(48);

var _Applyboard2 = _interopRequireDefault(_Applyboard);

var _AnataMassage = __webpack_require__(53);

var _AnataMassage2 = _interopRequireDefault(_AnataMassage);

var _Okey = __webpack_require__(54);

var _Okey2 = _interopRequireDefault(_Okey);

var _ReportOn = __webpack_require__(59);

var _ReportOn2 = _interopRequireDefault(_ReportOn);

var _ContactMe = __webpack_require__(63);

var _ContactMe2 = _interopRequireDefault(_ContactMe);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //Import Packages


//Import Assets


//Import Core


//Import Components


var ParallaxFixed = function (_Parallax) {
  _inherits(ParallaxFixed, _Parallax);

  function ParallaxFixed(props) {
    _classCallCheck(this, ParallaxFixed);

    var _this = _possibleConstructorReturn(this, (ParallaxFixed.__proto__ || Object.getPrototypeOf(ParallaxFixed)).call(this, props));

    _this.state = { ready: true };
    return _this;
  }

  return ParallaxFixed;
}(_reactSpringyParallax2.default);

var _Container = (0, _reactEmotion2.default)("div")(_templateObject);
var _FloatingCont = (0, _reactEmotion2.default)("div")(_templateObject2);

var _PButton = (0, _reactEmotion2.default)("button")(_templateObject3);

//Sections:
// RageON page 1 grey
// Applyboard page 2 purp
// OkeyLabs page 3 oj
// ReportOn! page 4 blue
// Work with me bitch page 5

function WorkPortfolio(props) {
  return _react2.default.createElement(
    _Container,
    null,
    _react2.default.createElement(
      _FloatingCont,
      null,
      _react2.default.createElement(
        "h1",
        {
          style: {
            marginTop: 10,
            fontSize: "2.7em"
          }
        },
        "< Developer >"
      ),
      _react2.default.createElement(
        _PButton,
        {
          onClick: function onClick() {
            props.history.push("/", { scrollTop: 1000 });
          }
        },
        " ",
        "P",
        " "
      )
    ),
    _react2.default.createElement(
      ParallaxFixed,
      { pages: 6 },
      _react2.default.createElement(_reactSpringyParallax2.default.Layer, {
        offset: 5,
        speed: 1,
        style: { backgroundColor: "#87BCDE", opacity: 1 }
      }),
      _BackgroundClouds2.default,
      _react2.default.createElement(_reactSpringyParallax2.default.Layer, {
        offset: 0,
        speed: 0,
        factor: 6,
        style: {
          color: "blue",
          backgroundImage: "url(" + _stars2.default + ")",
          backgroundSize: "cover"
        }
      }),
      _react2.default.createElement(_reactSpringyParallax2.default.Layer, {
        offset: 4,
        speed: 1,
        style: { backgroundColor: "#503374", opacity: 0.5 }
      }),
      _react2.default.createElement(_reactSpringyParallax2.default.Layer, {
        offset: 3,
        speed: 1,
        style: { backgroundColor: "#3e3e7c", opacity: 0.5 }
      }),
      _react2.default.createElement(_reactSpringyParallax2.default.Layer, {
        offset: 2,
        speed: 1,
        style: { backgroundColor: "#805E73", opacity: 0.5 }
      }),
      _react2.default.createElement(_reactSpringyParallax2.default.Layer, {
        offset: 1,
        speed: 1,
        style: { backgroundColor: "#243B4A", opacity: 0.5 }
      }),
      _Badges2.default,
      _RageOn2.default,
      _Applyboard2.default,
      _Okey2.default,
      _ReportOn2.default,
      _ContactMe2.default
    ),
    _react2.default.createElement(
      "div",
      { style: { position: 'fixed', zIndex: -1 } },
      _react2.default.createElement(_SplitSection2.default, {
        fixed: true,
        hoverSide: null,
        side: 'left'
      })
    )
  );
}
exports.default = (0, _reactStatic.withRouter)(WorkPortfolio);

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/stars.5546c7c6.svg";

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/chrometab.c7fb842f.png";

/***/ }),
/* 28 */
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

var _reactStatic = __webpack_require__(4);

var _Button2 = __webpack_require__(2);

var _Button3 = _interopRequireDefault(_Button2);

var _splitleft = __webpack_require__(29);

var _splitleft2 = _interopRequireDefault(_splitleft);

var _splitright = __webpack_require__(30);

var _splitright2 = _interopRequireDefault(_splitright);

var _left = __webpack_require__(31);

var _left2 = _interopRequireDefault(_left);

var _right = __webpack_require__(32);

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
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/splitleft.da6e67a3.png";

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/splitright.06a569ec.png";

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/left.39c35abf.png";

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/right.13b4b995.png";

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactEmotion = __webpack_require__(1);

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

var _reactSpringyParallax = __webpack_require__(3);

var _reactSpringyParallax2 = _interopRequireDefault(_reactSpringyParallax);

var _cloud = __webpack_require__(34);

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
  ),
  _react2.default.createElement(
    _reactSpringyParallax2.default.Layer,
    { offset: 4.4, speed: 0.4, style: { opacity: 0.7 } },
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
    { offset: 4.65, speed: 0.1, style: { opacity: 0.5 } },
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
    { offset: 5.2, speed: 0.8, style: { opacity: 0.5 } },
    _react2.default.createElement("img", {
      src: _cloud2.default,
      style: { display: "block", width: "10%", marginLeft: "55%" }
    }),
    _react2.default.createElement("img", {
      src: _cloud2.default,
      style: { display: "block", width: "30%", marginLeft: "5%" }
    })
  ),
  _react2.default.createElement(
    _reactSpringyParallax2.default.Layer,
    { offset: 5.75, speed: 0.5, style: { opacity: 0.5 } },
    _react2.default.createElement("img", {
      src: _cloud2.default,
      style: { display: "block", width: "20%", marginLeft: "70%" }
    }),
    _react2.default.createElement("img", {
      src: _cloud2.default,
      style: { display: "block", width: "20%", marginLeft: "40%" }
    })
  )
);

//Import Assets
exports.default = BackgroundClouds;

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,Cjxzdmcgd2lkdGg9IjQxN3B4IiBoZWlnaHQ9IjI1NnB4IiB2aWV3Qm94PSIwIDAgNDE3IDI1NiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDxwYXRoIGQ9Ik00MTYuNSwxOTEuNSBDNDE2LjUsMjI2Ljg0NCAzODcuODQ0LDI1NS41IDM1Mi41LDI1NS41IEwzNTIuNSwyNTYgTDgwLjUsMjU2IEMzNi4zMTIsMjU2IDAuNSwyMjAuMTg3IDAuNSwxNzYgQzAuNSwxMzcuMjUgMjguMDYzLDEwNC45MzcgNjQuNjU2LDk3LjU5NCBDNjQuNjU2LDk3LjA2MyA2NC41LDk2LjU2MyA2NC41LDk2IEM2NC41LDQyLjk2OSAxMDcuNDY5LDAgMTYwLjUsMCBDMTk3LjkzOCwwIDIzMCwyMS42MjUgMjQ1Ljg0NCw1Mi44NzUgQzI1NC4yMTksNDkuOTM3IDI2My4wOTQsNDggMjcyLjUsNDggQzMxNi4zNDQsNDggMzUxLjg0NCw4My4yNSAzNTIuNDA2LDEyNyBMMzUyLjUsMTI3IEwzNTIuNSwxMjcuNSBDMzg3Ljg0NCwxMjcuNSA0MTYuNSwxNTYuMTU2IDQxNi41LDE5MS41IFoiIGlkPSJTaGFwZSIgc3Ryb2tlPSJub25lIiBmaWxsPSIjRkZGRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD4KPC9zdmc+Cg=="

/***/ }),
/* 35 */
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

var _reactSpringyParallax = __webpack_require__(3);

var _reactSpringyParallax2 = _interopRequireDefault(_reactSpringyParallax);

var _swift = __webpack_require__(36);

var _swift2 = _interopRequireDefault(_swift);

var _redux = __webpack_require__(37);

var _redux2 = _interopRequireDefault(_redux);

var _react3 = __webpack_require__(38);

var _react4 = _interopRequireDefault(_react3);

var _node = __webpack_require__(39);

var _node2 = _interopRequireDefault(_node);

var _java = __webpack_require__(40);

var _java2 = _interopRequireDefault(_java);

var _html = __webpack_require__(41);

var _html2 = _interopRequireDefault(_html);

var _javascript = __webpack_require__(42);

var _javascript2 = _interopRequireDefault(_javascript);

var _css = __webpack_require__(43);

var _css2 = _interopRequireDefault(_css);

var _illustrator = __webpack_require__(44);

var _illustrator2 = _interopRequireDefault(_illustrator);

var _photoshop = __webpack_require__(45);

var _photoshop2 = _interopRequireDefault(_photoshop);

var _aftereffects = __webpack_require__(46);

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
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/swift.d540c67b.png";

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/redux.d48bec4a.png";

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/react.0288e93c.png";

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/node.bee7ff2a.png";

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/java.befdb05b.png";

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/html.73f12929.png";

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/javascript.a90c08be.png";

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/css3.97024fc0.png";

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/illustrator.613f9f61.png";

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/photoshop.89b02948.png";

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/aftereffects.0ccded69.png";

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  @media (max-width: 550px) {\n    ", "\n    justify-content: center;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  @media (max-width: 550px) {\n    ", "\n    justify-content: center;\n  }\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n  width: ", ";\n  max-width: 900px;\n  text-align: center;\n  margin-top: -25vh;\n  @media (max-width: 550px) {\n    width: 75%;\n    ", "\n    padding: 10% 0 10% 0;\n    ", "\n    ", "\n  }\n"], ["\n  width: ", ";\n  max-width: 900px;\n  text-align: center;\n  margin-top: -25vh;\n  @media (max-width: 550px) {\n    width: 75%;\n    ", "\n    padding: 10% 0 10% 0;\n    ", "\n    ", "\n  }\n"]),
    _templateObject3 = _taggedTemplateLiteral(["\n  padding-bottom: 30px;\n  width: 50%;\n  margin-top: 100vh;\n  transform: translateY(-50%);\n  display: block !important;\n"], ["\n  padding-bottom: 30px;\n  width: 50%;\n  margin-top: 100vh;\n  transform: translateY(-50%);\n  display: block !important;\n"]),
    _templateObject4 = _taggedTemplateLiteral(["\n  color: white;\n  opacity: 1;\n  text-shadow: 0px 0px 8px black;\n"], ["\n  color: white;\n  opacity: 1;\n  text-shadow: 0px 0px 8px black;\n"]),
    _templateObject5 = _taggedTemplateLiteral(["\n    ", "\n    width:15vw;\n    margin-top:10vh;\n    max-width: 300px;\n    @media (max-width: 550px) {\n      ", "\n      ", "\n      height:auto;\n      width:25vw;\n    }\n"], ["\n    ", "\n    width:15vw;\n    margin-top:10vh;\n    max-width: 300px;\n    @media (max-width: 550px) {\n      ", "\n      ", "\n      height:auto;\n      width:25vw;\n    }\n"]);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactEmotion = __webpack_require__(1);

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

var _reactSpringyParallax = __webpack_require__(3);

var _reactSpringyParallax2 = _interopRequireDefault(_reactSpringyParallax);

var _Button2 = __webpack_require__(2);

var _Button3 = _interopRequireDefault(_Button2);

var _rageonIMac = __webpack_require__(5);

var _rageonIMac2 = _interopRequireDefault(_rageonIMac);

var _rageonIphonex = __webpack_require__(6);

var _rageonIphonex2 = _interopRequireDefault(_rageonIphonex);

var _rageonPixel = __webpack_require__(7);

var _rageonPixel2 = _interopRequireDefault(_rageonPixel);

var _rageonLogo = __webpack_require__(8);

var _rageonLogo2 = _interopRequireDefault(_rageonLogo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } //Import Packages


//Import Core


//Import Assets


var ParallaxFlex = (0, _reactEmotion2.default)(_reactSpringyParallax2.default.Layer)(_templateObject, '' /* flex-direction: column; */);

var BrowserWindow = (0, _reactEmotion2.default)("div")(_templateObject2, function (props) {
  return props.main ? "60%" : "38%";
}, '' /* margin-top: -15vh; */, function (props) {
  return props.main && "width:90%;";
}, '' /* ${props =>
      !props.main && `display:none;`}; */);

var Desc = (0, _reactEmotion2.default)(BrowserWindow)(_templateObject3);

var workText = (0, _reactEmotion.css)(_templateObject4);

var MobilePhoneImg = (0, _reactEmotion2.default)('img')(_templateObject5, '' /* height:50vh; */, function (props) {
  return props.left && 'padding-right: 10vh;';
}, function (props) {
  return props.right && 'padding-left: 10vh;';
});

var RageOn = _react2.default.createElement(
  "div",
  null,
  _react2.default.createElement(
    ParallaxFlex,
    { offset: 1, speed: 0 },
    _react2.default.createElement(
      BrowserWindow,
      { main: true },
      _react2.default.createElement("img", { style: { width: "100%" }, src: _rageonIMac2.default })
    )
  ),
  _react2.default.createElement(
    ParallaxFlex,
    { offset: 1, speed: 0.2 },
    _react2.default.createElement(
      BrowserWindow,
      null,
      _react2.default.createElement(MobilePhoneImg, { left: true, src: _rageonIphonex2.default })
    ),
    _react2.default.createElement(
      BrowserWindow,
      null,
      _react2.default.createElement(MobilePhoneImg, {
        right: true,
        src: _rageonPixel2.default
      })
    )
  ),
  _react2.default.createElement(
    ParallaxFlex,
    { offset: 1, speed: 0.9 },
    _react2.default.createElement(
      Desc,
      null,
      _react2.default.createElement("img", { style: { width: "80%", maxWidth: 250 }, src: _rageonLogo2.default }),
      _react2.default.createElement(
        "h3",
        { className: workText, style: { marginTop: 5 } },
        "Lead Front End Engineer"
      ),
      _react2.default.createElement(
        "h4",
        { className: workText },
        "RageOn is the world's largest online all over print shop! We empower creators and artists to design and sell garments and products with their art from the comfort of their own home. This is where I currently work and we've been building lots of new web stuff including a web builder, product customization and search page!"
      ),
      _react2.default.createElement(
        "a",
        { target: "_blank", href: "http://rageon.com/" },
        _react2.default.createElement(
          _Button3.default,
          { shadow: true, color: "light" },
          "See Live"
        )
      )
    )
  )
);

exports.default = RageOn;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  @media (max-width: 550px) {\n    flex-direction: column;\n    justify-content: center;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  @media (max-width: 550px) {\n    flex-direction: column;\n    justify-content: center;\n  }\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n  width: ", ";\n  text-align: center;\n  margin-top:-25vh;\n  @media (max-width: 550px) {\n    width: 75%;\n    padding: 10% 0 10% 0;\n    ", "\n    ", "\n  }\n"], ["\n  width: ", ";\n  text-align: center;\n  margin-top:-25vh;\n  @media (max-width: 550px) {\n    width: 75%;\n    padding: 10% 0 10% 0;\n    ", "\n    ", "\n  }\n"]),
    _templateObject3 = _taggedTemplateLiteral(["\n  padding-bottom: 30px;\n  width:50%;\n  margin-top:100vh;\n  transform:translateY(-50%);\n  display:block !important;\n"], ["\n  padding-bottom: 30px;\n  width:50%;\n  margin-top:100vh;\n  transform:translateY(-50%);\n  display:block !important;\n"]),
    _templateObject4 = _taggedTemplateLiteral(["\n  color: white;\n  opacity: 1;\n  text-shadow: 0px 0px 8px black;\n"], ["\n  color: white;\n  opacity: 1;\n  text-shadow: 0px 0px 8px black;\n"]);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactEmotion = __webpack_require__(1);

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

var _reactSpringyParallax = __webpack_require__(3);

var _reactSpringyParallax2 = _interopRequireDefault(_reactSpringyParallax);

var _Button2 = __webpack_require__(2);

var _Button3 = _interopRequireDefault(_Button2);

var _applyboardSchool = __webpack_require__(49);

var _applyboardSchool2 = _interopRequireDefault(_applyboardSchool);

var _applyboardSearch = __webpack_require__(50);

var _applyboardSearch2 = _interopRequireDefault(_applyboardSearch);

var _applyboardEligibility = __webpack_require__(51);

var _applyboardEligibility2 = _interopRequireDefault(_applyboardEligibility);

var _applyboardLogo = __webpack_require__(52);

var _applyboardLogo2 = _interopRequireDefault(_applyboardLogo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } //Import Packages


//Import Core


//Import Assets


var ParallaxFlex = (0, _reactEmotion2.default)(_reactSpringyParallax2.default.Layer)(_templateObject);

var BrowserWindow = (0, _reactEmotion2.default)("div")(_templateObject2, function (props) {
  return props.main ? "50%" : "38%";
}, function (props) {
  return props.main && "width:90%;";
}, function (props) {
  return !props.main && "display:none;";
});

var Desc = (0, _reactEmotion2.default)(BrowserWindow)(_templateObject3);

var workText = (0, _reactEmotion.css)(_templateObject4);

var Applyboard = _react2.default.createElement(
  "div",
  null,
  _react2.default.createElement(
    ParallaxFlex,
    { offset: 2, speed: 0.1 },
    _react2.default.createElement(
      BrowserWindow,
      null,
      _react2.default.createElement("img", {
        src: _applyboardSchool2.default,
        style: { width: "100%" }
      })
    ),
    _react2.default.createElement(
      BrowserWindow,
      null,
      _react2.default.createElement("img", {
        src: _applyboardEligibility2.default,
        style: { width: "100%" }
      })
    )
  ),
  _react2.default.createElement(
    ParallaxFlex,
    { offset: 2, speed: -0.05 },
    _react2.default.createElement(
      BrowserWindow,
      { main: true },
      _react2.default.createElement("img", { style: { width: "100%" }, src: _applyboardSearch2.default })
    )
  ),
  _react2.default.createElement(
    ParallaxFlex,
    { offset: 2, speed: 0.7 },
    _react2.default.createElement(
      Desc,
      null,
      _react2.default.createElement("img", { style: { width: '80%', maxWidth: 250 }, src: _applyboardLogo2.default }),
      _react2.default.createElement(
        "h3",
        { className: workText, style: { marginTop: 5 } },
        "Lead Front Engineer && UX/UI Designer"
      ),
      _react2.default.createElement(
        "h4",
        { className: workText },
        "Applyboard allows international students find & apply to their dream universities in 60 seconds flat. During my time leading the front end team, we rebuilt the school/program search and institution pages to improve UX, user retention, click-through, feel and speed. Oh yeah, I also did some hiring and management \uD83D\uDE07"
      ),
      _react2.default.createElement(
        "a",
        { target: "_blank", href: "http://applyboard.com/schools" },
        _react2.default.createElement(
          _Button3.default,
          { shadow: true, color: "light" },
          "See Live"
        )
      )
    )
  )
);

exports.default = Applyboard;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/applyboardSchool.f85cd392.png";

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/applyboardSearch.fb67f312.png";

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/applyboardEligibility.647e50e9.png";

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/applyboardLogo.f70a2dae.png";

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  @media (max-width: 550px) {\n    flex-direction: column;\n    justify-content: center;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  @media (max-width: 550px) {\n    flex-direction: column;\n    justify-content: center;\n  }\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n  width: ", ";\n  text-align: center;\n  margin-top: -25vh;\n  @media (max-width: 550px) {\n    width: 75%;\n    padding: 10% 0 10% 0;\n    ", " ", ";\n  }\n"], ["\n  width: ", ";\n  text-align: center;\n  margin-top: -25vh;\n  @media (max-width: 550px) {\n    width: 75%;\n    padding: 10% 0 10% 0;\n    ", " ", ";\n  }\n"]),
    _templateObject3 = _taggedTemplateLiteral(["\n  padding-bottom: 30px;\n  width: 50%;\n  margin-top: 100vh;\n  transform: translateY(-50%);\n  display: block !important;\n"], ["\n  padding-bottom: 30px;\n  width: 50%;\n  margin-top: 100vh;\n  transform: translateY(-50%);\n  display: block !important;\n"]),
    _templateObject4 = _taggedTemplateLiteral(["\n  color:black;\n  opacity: 1;\n  ", "\n"], ["\n  color:black;\n  opacity: 1;\n  ", "\n"]);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactEmotion = __webpack_require__(1);

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

var _reactSpringyParallax = __webpack_require__(3);

var _reactSpringyParallax2 = _interopRequireDefault(_reactSpringyParallax);

var _Button2 = __webpack_require__(2);

var _Button3 = _interopRequireDefault(_Button2);

var _rageonIMac = __webpack_require__(5);

var _rageonIMac2 = _interopRequireDefault(_rageonIMac);

var _rageonIphonex = __webpack_require__(6);

var _rageonIphonex2 = _interopRequireDefault(_rageonIphonex);

var _rageonPixel = __webpack_require__(7);

var _rageonPixel2 = _interopRequireDefault(_rageonPixel);

var _rageonLogo = __webpack_require__(8);

var _rageonLogo2 = _interopRequireDefault(_rageonLogo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } //Import Packages


//Import Core


//Import Assets


var ParallaxFlex = (0, _reactEmotion2.default)(_reactSpringyParallax2.default.Layer)(_templateObject);

var BrowserWindow = (0, _reactEmotion2.default)("div")(_templateObject2, function (props) {
  return props.main ? "60%" : "38%";
}, function (props) {
  return props.main && "width:90%;";
}, function (props) {
  return !props.main && "display:none;";
});

var Desc = (0, _reactEmotion2.default)(BrowserWindow)(_templateObject3);

var workText = (0, _reactEmotion.css)(_templateObject4, '' /* text-shadow: 0px 0px 8px black; */);

var AnataMassage = _react2.default.createElement(
  "div",
  null,
  _react2.default.createElement(
    ParallaxFlex,
    { offset: 3, speed: 0 },
    _react2.default.createElement(
      BrowserWindow,
      { main: true },
      _react2.default.createElement("img", { style: { width: "100%" }, src: _rageonIMac2.default })
    )
  ),
  _react2.default.createElement(
    ParallaxFlex,
    { offset: 3, speed: 0.1 },
    _react2.default.createElement(
      BrowserWindow,
      null,
      _react2.default.createElement("img", { src: _rageonPixel2.default, style: { height: "50vh", marginTop: "10vh" } })
    ),
    _react2.default.createElement(
      BrowserWindow,
      null,
      _react2.default.createElement("img", {
        src: _rageonIphonex2.default,
        style: { height: "50vh", marginTop: "10vh" }
      })
    )
  ),
  _react2.default.createElement(
    ParallaxFlex,
    { offset: 3, speed: 0.7 },
    _react2.default.createElement(
      Desc,
      null,
      _react2.default.createElement(
        "h2",
        null,
        "Anata Massage"
      ),
      _react2.default.createElement(
        "h3",
        { className: workText, style: { marginTop: 5 } },
        "Freelance Project Lead"
      ),
      _react2.default.createElement(
        "h4",
        { className: workText },
        "RageOn is the world's largest online all over print shop! We empower creators and artists to design and sell garments and products with their art from the comfort of their own home. We've been working on lots of new web stuff including a web builder, product customization and search page!"
      ),
      _react2.default.createElement(
        "a",
        { target: "_blank", href: "http://rageon.com/" },
        _react2.default.createElement(
          _Button3.default,
          { color: "dark" },
          "See Live"
        )
      )
    )
  )
);

exports.default = AnataMassage;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  @media (max-width: 550px) {\n    ", " justify-content: center;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  @media (max-width: 550px) {\n    ", " justify-content: center;\n  }\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n  width: ", ";\n  max-width: 700px;\n  text-align: center;\n  margin-top: -25vh;\n  @media (max-width: 550px) {\n    width: 75%;\n    ", " padding: 10% 0 10% 0;\n    ", " ", ";\n  }\n"], ["\n  width: ", ";\n  max-width: 700px;\n  text-align: center;\n  margin-top: -25vh;\n  @media (max-width: 550px) {\n    width: 75%;\n    ", " padding: 10% 0 10% 0;\n    ", " ", ";\n  }\n"]),
    _templateObject3 = _taggedTemplateLiteral(["\n  padding-bottom: 30px;\n  width: 50%;\n  margin-top: 100vh;\n  transform: translateY(-50%);\n  display: block !important;\n"], ["\n  padding-bottom: 30px;\n  width: 50%;\n  margin-top: 100vh;\n  transform: translateY(-50%);\n  display: block !important;\n"]),
    _templateObject4 = _taggedTemplateLiteral(["\n  color: white;\n  opacity: 1;\n  text-shadow: 0px 0px 8px black;\n"], ["\n  color: white;\n  opacity: 1;\n  text-shadow: 0px 0px 8px black;\n"]),
    _templateObject5 = _taggedTemplateLiteral(["\n  width:20vw;\n  margin-top: 20vh;\n  max-width: 150px;\n  ", " @media (max-width: 550px) {\n    ", " ", " height:auto;\n    width: 30vw;\n  }\n"], ["\n  width:20vw;\n  margin-top: 20vh;\n  max-width: 150px;\n  ", " @media (max-width: 550px) {\n    ", " ", " height:auto;\n    width: 30vw;\n  }\n"]);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactEmotion = __webpack_require__(1);

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

var _reactSpringyParallax = __webpack_require__(3);

var _reactSpringyParallax2 = _interopRequireDefault(_reactSpringyParallax);

var _Button2 = __webpack_require__(2);

var _Button3 = _interopRequireDefault(_Button2);

var _okeyImac = __webpack_require__(55);

var _okeyImac2 = _interopRequireDefault(_okeyImac);

var _okeywatch = __webpack_require__(56);

var _okeywatch2 = _interopRequireDefault(_okeywatch);

var _okeyphone = __webpack_require__(57);

var _okeyphone2 = _interopRequireDefault(_okeyphone);

var _okeyLogo = __webpack_require__(58);

var _okeyLogo2 = _interopRequireDefault(_okeyLogo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } //Import Packages


//Import Core


//Import Assets


var ParallaxFlex = (0, _reactEmotion2.default)(_reactSpringyParallax2.default.Layer)(_templateObject, "" /* flex-direction: column; */);

var BrowserWindow = (0, _reactEmotion2.default)("div")(_templateObject2, function (props) {
  return props.main ? "45%" : "38%";
}, "" /* margin-top: -15vh; */, function (props) {
  return props.main && "width:90%;";
}, "" /* ${props =>
      !props.main && `display:none;`}; */);

var Desc = (0, _reactEmotion2.default)(BrowserWindow)(_templateObject3);

var workText = (0, _reactEmotion.css)(_templateObject4);

var MobilePhoneImg = (0, _reactEmotion2.default)("img")(_templateObject5, function (props) {
  return props.left && "width:30vw;max-width:260px;margin-top:30vh;";
}, function (props) {
  return props.left && "padding-right: 10vh;";
}, function (props) {
  return props.right && "padding-left: 10vh;";
});

var Okey = _react2.default.createElement(
  "div",
  null,
  _react2.default.createElement(
    ParallaxFlex,
    { offset: 4, speed: 0 },
    _react2.default.createElement(
      BrowserWindow,
      { main: true },
      _react2.default.createElement("img", { style: { width: "100%" }, src: _okeyImac2.default })
    )
  ),
  _react2.default.createElement(
    ParallaxFlex,
    { offset: 4, speed: 0.1 },
    _react2.default.createElement(
      BrowserWindow,
      null,
      _react2.default.createElement(MobilePhoneImg, { left: true, src: _okeywatch2.default })
    ),
    _react2.default.createElement(
      BrowserWindow,
      null,
      _react2.default.createElement(MobilePhoneImg, { right: true, src: _okeyphone2.default })
    )
  ),
  _react2.default.createElement(
    ParallaxFlex,
    { offset: 4, speed: 0.9 },
    _react2.default.createElement(
      Desc,
      null,
      _react2.default.createElement("img", { style: { width: "80%", maxWidth: 250 }, src: _okeyLogo2.default }),
      _react2.default.createElement(
        "h3",
        { className: workText, style: { marginTop: 5 } },
        "Founder, CEO, Lead Engineer"
      ),
      _react2.default.createElement(
        "h4",
        { className: workText },
        "Over a few short months, Okey was built natively on Android, iOS, Apple Watch and OSX. Our products had a combined 30,000 downloads and raised nearly $100k in investment money. I was handled all the business, fund raising and built the mobile and web apps."
      ),
      _react2.default.createElement(
        "a",
        { target: "_blank", href: "https://okeytest.herokuapp.com/" },
        _react2.default.createElement(
          _Button3.default,
          { shadow: true, color: "light" },
          "See Live"
        )
      )
    )
  )
);

exports.default = Okey;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/okeyImac.28fa3a46.png";

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/okeywatch.027df9a0.png";

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/okeyphone.cd835957.png";

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/okeyLogo.aca94c0a.png";

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  ", " @media (max-width: 550px) {\n    flex-direction: column;\n    justify-content: center;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  ", " @media (max-width: 550px) {\n    flex-direction: column;\n    justify-content: center;\n  }\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n  width: 90%;\n  text-align: center;\n  max-width: 1300px;\n  margin-top: -10vh;\n  position: absolute;\n  ", " @media (max-width: 550px) {\n    left: -10px;\n    ", ";\n  }\n"], ["\n  width: 90%;\n  text-align: center;\n  max-width: 1300px;\n  margin-top: -10vh;\n  position: absolute;\n  ", " @media (max-width: 550px) {\n    left: -10px;\n    ", ";\n  }\n"]),
    _templateObject3 = _taggedTemplateLiteral(["\n  padding-bottom: 30px;\n  width: 50%;\n  margin-top: 50vh;\n  transform: translateY(-50%);\n  text-align: center;\n  position: absolute;\n  display: block !important;\n  @media (max-width: 550px) {\n    width: 75%;\n  }\n"], ["\n  padding-bottom: 30px;\n  width: 50%;\n  margin-top: 50vh;\n  transform: translateY(-50%);\n  text-align: center;\n  position: absolute;\n  display: block !important;\n  @media (max-width: 550px) {\n    width: 75%;\n  }\n"]),
    _templateObject4 = _taggedTemplateLiteral(["\n  color: white;\n  opacity: 1;\n  text-shadow: 0px 0px 8px black;\n"], ["\n  color: white;\n  opacity: 1;\n  text-shadow: 0px 0px 8px black;\n"]),
    _templateObject5 = _taggedTemplateLiteral(["\n  height: 60vh;\n  max-width: 800px;\n  @media (max-width: 550px) {\n    height: auto;\n    width: 50vw;\n  }\n"], ["\n  height: 60vh;\n  max-width: 800px;\n  @media (max-width: 550px) {\n    height: auto;\n    width: 50vw;\n  }\n"]);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactEmotion = __webpack_require__(1);

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

var _reactSpringyParallax = __webpack_require__(3);

var _reactSpringyParallax2 = _interopRequireDefault(_reactSpringyParallax);

var _Button2 = __webpack_require__(2);

var _Button3 = _interopRequireDefault(_Button2);

var _reportOniPad = __webpack_require__(60);

var _reportOniPad2 = _interopRequireDefault(_reportOniPad);

var _reportOnLaptop = __webpack_require__(61);

var _reportOnLaptop2 = _interopRequireDefault(_reportOnLaptop);

var _rippleLogo = __webpack_require__(62);

var _rippleLogo2 = _interopRequireDefault(_rippleLogo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } //Import Packages


//Import Core


//Import Assets


var ParallaxFlex = (0, _reactEmotion2.default)(_reactSpringyParallax2.default.Layer)(_templateObject, "" /* width: calc(100% - 30px); */);

var BrowserWindow = (0, _reactEmotion2.default)("div")(_templateObject2, function (props) {
  return props.iPad && "left:calc(30% - 10px);";
}, function (props) {
  return props.iPad && "left:calc(30% - 30px);";
});

var Desc = (0, _reactEmotion2.default)("div")(_templateObject3);

var workText = (0, _reactEmotion.css)(_templateObject4);

var IPad = (0, _reactEmotion2.default)("img")(_templateObject5);

var ReportOn = _react2.default.createElement(
  "div",
  null,
  _react2.default.createElement(
    ParallaxFlex,
    { offset: 3, speed: 0.1 },
    _react2.default.createElement(
      BrowserWindow,
      null,
      _react2.default.createElement("img", { src: _reportOnLaptop2.default, style: { width: "100%" } })
    )
  ),
  _react2.default.createElement(
    ParallaxFlex,
    { offset: 3, speed: -0.1 },
    _react2.default.createElement(
      BrowserWindow,
      { iPad: true },
      _react2.default.createElement(IPad, { src: _reportOniPad2.default })
    )
  ),
  _react2.default.createElement(
    ParallaxFlex,
    { offset: 3, speed: 0.8 },
    _react2.default.createElement(
      Desc,
      null,
      _react2.default.createElement("img", { style: { width: "80%", maxWidth: 250 }, src: _rippleLogo2.default }),
      _react2.default.createElement(
        "h3",
        { className: workText, style: { marginTop: 5 } },
        "Freelance Project Lead - Mobile & Web Engineer"
      ),
      _react2.default.createElement(
        "h4",
        { className: workText },
        "ReportON is a B2B web & mobile app to manage marketing merchandisers in the retail space. My team and I were contracted for a web dashboard and two mobile apps for employees to input data in real time so that managers at head office can see what's happening in field. The project was funded by Ripple Effect Marketing and also generates analytics, reports to improve the efficiency of merchandising employees working for their CPG clients. I built the front end web app and both mobile apps."
      )
    )
  )
);

exports.default = ReportOn;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/reportOniPad.32d3e04a.png";

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/reportOnLaptop.a3e31140.png";

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/rippleLogo.a0af312e.png";

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  @media (max-width: 550px) {\n    ", "\n    justify-content: center;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  @media (max-width: 550px) {\n    ", "\n    justify-content: center;\n  }\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n  width: 60%;\n  display: block !important;\n  max-width: 800px;\n  color:black;\n  text-align: center;\n  margin-top: -25vh;\n  @media (max-width: 550px) {\n    padding: 10% 0 10% 0;\n    width:90%;\n  }\n"], ["\n  width: 60%;\n  display: block !important;\n  max-width: 800px;\n  color:black;\n  text-align: center;\n  margin-top: -25vh;\n  @media (max-width: 550px) {\n    padding: 10% 0 10% 0;\n    width:90%;\n  }\n"]),
    _templateObject3 = _taggedTemplateLiteral(["\n  width:60%;\n  @media (max-width:550px){\n    width:100%;\n  }\n"], ["\n  width:60%;\n  @media (max-width:550px){\n    width:100%;\n  }\n"]);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactEmotion = __webpack_require__(1);

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

var _reactSpringyParallax = __webpack_require__(3);

var _reactSpringyParallax2 = _interopRequireDefault(_reactSpringyParallax);

var _Button2 = __webpack_require__(2);

var _Button3 = _interopRequireDefault(_Button2);

var _rageonIMac = __webpack_require__(5);

var _rageonIMac2 = _interopRequireDefault(_rageonIMac);

var _rageonIphonex = __webpack_require__(6);

var _rageonIphonex2 = _interopRequireDefault(_rageonIphonex);

var _rageonPixel = __webpack_require__(7);

var _rageonPixel2 = _interopRequireDefault(_rageonPixel);

var _rageonLogo = __webpack_require__(8);

var _rageonLogo2 = _interopRequireDefault(_rageonLogo);

var _earth = __webpack_require__(10);

var _earth2 = _interopRequireDefault(_earth);

var _window = __webpack_require__(11);

var _window2 = _interopRequireDefault(_window);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } //Import Packages


//Import Core


//Import Assets


var ParallaxFlex = (0, _reactEmotion2.default)(_reactSpringyParallax2.default.Layer)(_templateObject, '' /* flex-direction: column; */);

var Cont = (0, _reactEmotion2.default)("div")(_templateObject2);

var Earth = (0, _reactEmotion2.default)('img')(_templateObject3);

var RageOn = _react2.default.createElement(
  "div",
  null,
  _react2.default.createElement(
    ParallaxFlex,
    {
      offset: 5.5,
      speed: -0.2
    },
    _react2.default.createElement(Earth, { src: _earth2.default })
  ),
  _react2.default.createElement(
    ParallaxFlex,
    { offset: 5, speed: 0.9 },
    _react2.default.createElement(
      Cont,
      null,
      _react2.default.createElement("img", { src: _window2.default, style: { width: "100%" } }),
      _react2.default.createElement("br", null),
      _react2.default.createElement(
        "a",
        { target: "_blank", href: "mailto:tobiasgoo@gmail.com?Subject=Hello!" },
        _react2.default.createElement(
          _Button3.default,
          { shadow: true, color: "light" },
          "Send Email"
        ),
        _react2.default.createElement("br", null),
        _react2.default.createElement("br", null),
        "(tobias.goo@gmail.com)"
      )
    )
  )
);

exports.default = RageOn;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = PageNotFound;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(13);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _style = __webpack_require__(14);

var _pageNotFound = __webpack_require__(65);

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
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = __webpack_require__(14);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var s = Object.create(_style2.default);

exports.default = s;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactAddonsCssTransitionGroup = __webpack_require__(9);

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
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SplitSection = __webpack_require__(12);

var _SplitSection2 = _interopRequireDefault(_SplitSection);

var _reactStatic = __webpack_require__(4);

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
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.location !== prevProps.location) {
        if (this.props.location && this.props.location.pathname === "/") {
          // let side = this.state.hover === "left" ? "right" : 'left';
          this.setState({ hover: null });
        }
      }
    }
  }, {
    key: "_isInSubPath",
    value: function _isInSubPath() {
      var pathname = this.props.location.pathname;
      if (pathname != "/") {
        return true;
      }
      return false;
    }
  }, {
    key: "onMouseLeave",
    value: function onMouseLeave() {
      if (this.state.hover != null && !this._isInSubPath()) this.setState({ hover: null });
    }
  }, {
    key: "onMouseEnter",
    value: function onMouseEnter(side) {
      if (side && !this._isInSubPath()) {
        this.setState({ hover: side });
      }
    }
  }, {
    key: "render",
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
/* 68 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 69 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
});
//# sourceMappingURL=static.7230baf7.js.map