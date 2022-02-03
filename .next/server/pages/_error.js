(() => {
var exports = {};
exports.id = 820;
exports.ids = [820];
exports.modules = {

/***/ 9961:
/***/ ((module) => {

// Exports
module.exports = {
	"ErrorPage": "ErrorPage_ErrorPage__DUPTl",
	"Arrow": "ErrorPage_Arrow__atu69"
};


/***/ }),

/***/ 629:
/***/ ((module) => {

// Exports
module.exports = {
	"Secondary": "Secondary_Secondary__TPia2"
};


/***/ }),

/***/ 2276:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Secondary_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(629);
/* harmony import */ var _Secondary_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Secondary_module_scss__WEBPACK_IMPORTED_MODULE_1__);


const Secondary = (props)=>{
    const { children , ...secondaryProps } = props;
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
        ...secondaryProps,
        className: (_Secondary_module_scss__WEBPACK_IMPORTED_MODULE_1___default().Secondary),
        children: children
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Secondary);


/***/ }),

/***/ 1736:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_Secondary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2276);
/* harmony import */ var _components_layout_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7514);
/* harmony import */ var _ErrorPage_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9961);
/* harmony import */ var _ErrorPage_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ErrorPage_module_css__WEBPACK_IMPORTED_MODULE_3__);




const ErrorPage = (props)=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_layout_Page__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        className: (_ErrorPage_module_css__WEBPACK_IMPORTED_MODULE_3___default().ErrorPage),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_Secondary__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                        children: "Страница по данному адресу не найдена"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: "Сверху достпуна корректная навигация по сайту"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                src: "/error-arrow.svg",
                className: (_ErrorPage_module_css__WEBPACK_IMPORTED_MODULE_3___default().Arrow)
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorPage);


/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [514], () => (__webpack_exec__(1736)));
module.exports = __webpack_exports__;

})();