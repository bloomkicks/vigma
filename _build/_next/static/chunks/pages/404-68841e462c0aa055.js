(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[197],{

/***/ 394:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/404",
      function () {
        return __webpack_require__(2090);
      }
    ]);
    if(false) {}
  

/***/ }),

/***/ 7514:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1799);
/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9396);
/* harmony import */ var _swc_helpers_src_object_without_properties_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9534);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _ui_Title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9240);
/* harmony import */ var _Page_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6753);
/* harmony import */ var _Page_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Page_module_scss__WEBPACK_IMPORTED_MODULE_3__);






var Page = function(props) {
    var title = props.title, children = props.children, notSpaced = props.notSpaced, className = props.className, wrapperClassName = props.wrapperClassName, pageProps = (0,_swc_helpers_src_object_without_properties_mjs__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(props, [
        "title",
        "children",
        "notSpaced",
        "className",
        "wrapperClassName"
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "\n      ".concat((_Page_module_scss__WEBPACK_IMPORTED_MODULE_3___default().PageSpace), "\n      ").concat(wrapperClassName || "", "\n    "),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)({}, pageProps), {
            className: "\n          ".concat((_Page_module_scss__WEBPACK_IMPORTED_MODULE_3___default().Page), "\n          ").concat(title && (_Page_module_scss__WEBPACK_IMPORTED_MODULE_3___default().Spaced) || "", "\n          ").concat(notSpaced && (_Page_module_scss__WEBPACK_IMPORTED_MODULE_3___default().NotSpaced) || "", "\n          ").concat(className || "", "\n        "),
            children: [
                title && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ui_Title__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                    className: (_Page_module_scss__WEBPACK_IMPORTED_MODULE_3___default().Title),
                    children: title
                }),
                children
            ]
        }))
    });
};
/* harmony default export */ __webpack_exports__["Z"] = (Page);


/***/ }),

/***/ 2276:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1799);
/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9396);
/* harmony import */ var _swc_helpers_src_object_without_properties_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9534);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _Secondary_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5628);
/* harmony import */ var _Secondary_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Secondary_module_scss__WEBPACK_IMPORTED_MODULE_4__);





var Secondary = function(props) {
    var children = props.children, className = props.className, secondaryProps = (0,_swc_helpers_src_object_without_properties_mjs__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(props, [
        "children",
        "className"
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({}, secondaryProps), {
        className: "".concat((_Secondary_module_scss__WEBPACK_IMPORTED_MODULE_4___default().Secondary), " ").concat(className || ""),
        children: children
    }));
};
/* harmony default export */ __webpack_exports__["Z"] = (Secondary);


/***/ }),

/***/ 9240:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _Title_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7077);
/* harmony import */ var _Title_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Title_module_scss__WEBPACK_IMPORTED_MODULE_1__);


var Title = function(props) {
    var className = props.className;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1", {
        className: "\n        ".concat((_Title_module_scss__WEBPACK_IMPORTED_MODULE_1___default().Title), "\n        ").concat(className || "", "\n      ").trim(),
        children: props.children
    });
};
/* harmony default export */ __webpack_exports__["Z"] = (Title);


/***/ }),

/***/ 2090:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _components_ui_Secondary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2276);
/* harmony import */ var _components_layout_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7514);
/* harmony import */ var _ErrorPage_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8480);
/* harmony import */ var _ErrorPage_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ErrorPage_module_css__WEBPACK_IMPORTED_MODULE_3__);




var ErrorPage = function() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_layout_Page__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        className: (_ErrorPage_module_css__WEBPACK_IMPORTED_MODULE_3___default().ErrorPage),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_Secondary__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                        children: "Страница по данному адресу не найдена"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                        children: "Сверху достпуна корректная навигация по сайту"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
                src: "/pictures/error-page/error-arrow.svg",
                alt: "Наверху",
                className: (_ErrorPage_module_css__WEBPACK_IMPORTED_MODULE_3___default().Arrow)
            })
        ]
    });
};
/* harmony default export */ __webpack_exports__["default"] = (ErrorPage);


/***/ }),

/***/ 8480:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"ErrorPage":"ErrorPage_ErrorPage__DUPTl","Arrow":"ErrorPage_Arrow__atu69"};

/***/ }),

/***/ 6753:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"PageSpace":"Page_PageSpace__vlRAS","Page":"Page_Page__TDaJa","Spaced":"Page_Spaced__m35pe","NotSpaced":"Page_NotSpaced__4YxgJ","Title":"Page_Title__TdQ_T"};

/***/ }),

/***/ 5628:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"Secondary":"Secondary_Secondary__TPia2"};

/***/ }),

/***/ 7077:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"Title":"Title_Title__q7br5"};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [888], function() { return __webpack_exec__(394); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);