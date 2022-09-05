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

/***/ 5797:
/***/ ((module) => {

// Exports
module.exports = {
	"PageSpace": "Page_PageSpace__vlRAS",
	"Page": "Page_Page__TDaJa",
	"Spaced": "Page_Spaced__m35pe",
	"NotSpaced": "Page_NotSpaced__4YxgJ",
	"Title": "Page_Title__TdQ_T"
};


/***/ }),

/***/ 202:
/***/ ((module) => {

// Exports
module.exports = {
	"Secondary": "Secondary_Secondary__TPia2"
};


/***/ }),

/***/ 9286:
/***/ ((module) => {

// Exports
module.exports = {
	"Title": "Title_Title__q7br5"
};


/***/ }),

/***/ 7514:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ui_Title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9240);
/* harmony import */ var _Page_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5797);
/* harmony import */ var _Page_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Page_module_scss__WEBPACK_IMPORTED_MODULE_2__);



const Page = (props)=>{
    const { title , children , notSpaced , className , wrapperClassName , ...pageProps } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `
      ${(_Page_module_scss__WEBPACK_IMPORTED_MODULE_2___default().PageSpace)}
      ${wrapperClassName || ""}
    `,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
            ...pageProps,
            className: `
          ${(_Page_module_scss__WEBPACK_IMPORTED_MODULE_2___default().Page)}
          ${title && (_Page_module_scss__WEBPACK_IMPORTED_MODULE_2___default().Spaced) || ""}
          ${notSpaced && (_Page_module_scss__WEBPACK_IMPORTED_MODULE_2___default().NotSpaced) || ""}
          ${className || ""}
        `,
            children: [
                title && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_Title__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                    className: (_Page_module_scss__WEBPACK_IMPORTED_MODULE_2___default().Title),
                    children: title
                }),
                children
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);


/***/ }),

/***/ 2276:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Secondary_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(202);
/* harmony import */ var _Secondary_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Secondary_module_scss__WEBPACK_IMPORTED_MODULE_1__);


const Secondary = (props)=>{
    const { children , className , ...secondaryProps } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
        ...secondaryProps,
        className: `${(_Secondary_module_scss__WEBPACK_IMPORTED_MODULE_1___default().Secondary)} ${className || ""}`,
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Secondary);


/***/ }),

/***/ 9240:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Title_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9286);
/* harmony import */ var _Title_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Title_module_scss__WEBPACK_IMPORTED_MODULE_1__);


const Title = (props)=>{
    const { className  } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
        className: `
        ${(_Title_module_scss__WEBPACK_IMPORTED_MODULE_1___default().Title)}
        ${className || ""}
      `.trim(),
        children: props.children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Title);


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




const ErrorPage = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_layout_Page__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
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
                src: "./pictures/general" + "/error-arrow.svg",
                alt: "Наверху",
                className: (_ErrorPage_module_css__WEBPACK_IMPORTED_MODULE_3___default().Arrow)
            })
        ]
    });
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
var __webpack_exports__ = (__webpack_exec__(1736));
module.exports = __webpack_exports__;

})();