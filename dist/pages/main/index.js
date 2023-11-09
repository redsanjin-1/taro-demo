"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/main/index"],{

/***/ "./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/main/index.tsx":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/main/index.tsx ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/index */ "./src/utils/index.ts");
/* harmony import */ var _info_NavBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../info/NavBar */ "./src/pages/info/NavBar/index.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);





var Main = function Main() {
  var clickFn = function clickFn() {
    if ((0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.isRepeatClick)('click')) return;
    console.log('click');
  };
  var fuck = function fuck() {
    if ((0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.isRepeatClick)('fuck')) return;
    console.log('fuck');
  };
  var renderRight = function renderRight() {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
      children: "test hello"
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    style: {
      backgroundColor: 'green'
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_info_NavBar__WEBPACK_IMPORTED_MODULE_1__.NavBar, {
      title: "\u6D4B\u8BD5\u9875",
      right: renderRight()
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
      onClick: clickFn,
      children: "click me"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
      style: {
        marginTop: 200
      },
      onClick: fuck,
      children: "tap me"
    })]
  });
};
/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ }),

/***/ "./src/pages/main/index.tsx":
/*!**********************************!*\
  !*** ./src/pages/main/index.tsx ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./index.tsx */ "./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/main/index.tsx");


var config = {"navigationStyle":"custom"};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/main/index', {root:{cn:[]}}, config || {}))


/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./src/utils/index.ts":
/*!****************************!*\
  !*** ./src/utils/index.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isRepeatClick: function() { return /* binding */ isRepeatClick; }
/* harmony export */ });
// 重复点击事件时间戳表
var DOUBLE_CLICK_TIME_MAP = {
  default: 0
};
/**
 * 是否为重复点击事件
 * @param type {string} 点击事件类型，默认'default'
 * @param duration {number} 这个时间内，认定为重复时间，默认2000
 */
var isRepeatClick = function isRepeatClick() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'default';
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2000;
  var currentTime = Date.now();
  var timeInterval = currentTime - (DOUBLE_CLICK_TIME_MAP[type] || 0);
  if (0 < timeInterval && timeInterval < duration) {
    return true; //如果间隔在0-2秒内就是快速重复点击
  }

  DOUBLE_CLICK_TIME_MAP[type] = currentTime;
  return false;
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","common"], function() { return __webpack_exec__("./src/pages/main/index.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map