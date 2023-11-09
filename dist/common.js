"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["common"],{

/***/ "./src/pages/backgroundImage/index.tsx":
/*!*********************************************!*\
  !*** ./src/pages/backgroundImage/index.tsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BackgroundImage: function() { return /* binding */ BackgroundImage; }
/* harmony export */ });
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);




var BackgroundImage = function BackgroundImage(props) {
  var src = props.src,
    children = props.children,
    _props$mode = props.mode,
    mode = _props$mode === void 0 ? 'aspectFill' : _props$mode;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
    className: "bg-img",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.Image, {
      src: src,
      mode: mode,
      className: "bg-img__bg"
    }), children]
  });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (BackgroundImage);

/***/ }),

/***/ "./src/pages/info/NavBar/index.tsx":
/*!*****************************************!*\
  !*** ./src/pages/info/NavBar/index.tsx ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavBar: function() { return /* binding */ NavBar; }
/* harmony export */ });
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_back_gray_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/back-gray.png */ "./src/assets/back-gray.png");
/* harmony import */ var _assets_back_white_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/assets/back-white.png */ "./src/assets/back-white.png");
/* harmony import */ var _backgroundImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../backgroundImage */ "./src/pages/backgroundImage/index.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);








var NavBar = function NavBar(props) {
  var _info$safeArea;
  var title = props.title,
    _props$showLeft = props.showLeft,
    showLeft = _props$showLeft === void 0 ? true : _props$showLeft,
    left = props.left,
    right = props.right,
    _props$theme = props.theme,
    theme = _props$theme === void 0 ? 'light' : _props$theme,
    onClickLeft = props.onClickLeft;
  var info = (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__.getSystemInfoSync)();
  var menuInfo = (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__.getMenuButtonBoundingClientRect)();
  var defaultLeftIcon = function defaultLeftIcon() {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
      className: "nav-bar__left--default",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_backgroundImage__WEBPACK_IMPORTED_MODULE_3__.BackgroundImage, {
        src: theme === 'light' ? _assets_back_gray_png__WEBPACK_IMPORTED_MODULE_1__ : _assets_back_white_png__WEBPACK_IMPORTED_MODULE_2__
      })
    });
  };
  var onLeft = function onLeft() {
    if (!showLeft) return;
    if (onClickLeft) {
      onClickLeft();
    } else {
      (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__.navigateBack)();
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
    className: "nav-bar nav-bar--".concat(theme),
    style: {
      marginTop: (_info$safeArea = info.safeArea) === null || _info$safeArea === void 0 ? void 0 : _info$safeArea.top
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
      className: "nav-bar__left",
      style: {
        opacity: showLeft ? 1 : 0
      },
      onClick: onLeft,
      children: left || defaultLeftIcon()
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
      className: "nav-bar__title nav-bar__title--".concat(theme),
      children: title
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
      className: "nav-bar__right",
      style: {
        marginRight: menuInfo.width + (right ? 20 : -80)
      },
      children: right
    })]
  });
};

/***/ }),

/***/ "./src/assets/back-gray.png":
/*!**********************************!*\
  !*** ./src/assets/back-gray.png ***!
  \**********************************/
/***/ (function(module) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAN1JREFUWEfd10EOgjAQBdCpJ4N7sNOtCUfQGxjd4q73gJOBaYkLgovf6Z/W0DXhPz7NFJxUXq5yvhwP0F36JrTqh8eEtEtrIAYv87iGLpN/v9pigG14YcA+XETcqS3yCnLDQ1fqPcAIVwNY4SoAMzwZwA5PAliEwwCrcAhgGY4BztdRxMX5HlfCkKGM4q46YHPI8FuAJqHlPoAA4bmtEDDACpEEsEAkA9gIFYCJUANYiCwAA5EN+IlwcvfD80YZxchN9ojCn+Vf5PpTMjfo00OnIdqA9jrKHtCG/0UDH6RSsCFChulNAAAAAElFTkSuQmCC";

/***/ }),

/***/ "./src/assets/back-white.png":
/*!***********************************!*\
  !*** ./src/assets/back-white.png ***!
  \***********************************/
/***/ (function(module) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAM5JREFUWEfd1tENwyAMBNDcZslm6WTNZo4cUamqqHKYM1TlG+UeBkywTB6YnL/8H8DMVq8qgIOprqwCJfhZQg8A2zDAR7jnjgNUwh2wDdmC3vDrrDD7VJujCA8DVOEhgDK8GaAObwJkhNOArHAKkBnOAry9Xv29DLrJMFf8tg+Y2XSAr/71yMircFsBT8w8BxQgE0EDshBNgAxEM0CNCAGUiDBAhegCKBDdgC+IB4Bd0oqZj1QQ4/6K34GlY67s6qnXkK1AdJ7kDETDf6ICJ9LRgCEBNUlVAAAAAElFTkSuQmCC";

/***/ })

}]);
//# sourceMappingURL=common.js.map