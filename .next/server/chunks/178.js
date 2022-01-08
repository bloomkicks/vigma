exports.id = 178;
exports.ids = [178];
exports.modules = {

/***/ 8774:
/***/ ((module) => {

// Exports
module.exports = {
	"PageSpace": "Page_PageSpace__p7Twr",
	"Page": "Page_Page__6rsDo",
	"Spaced": "Page_Spaced__vL7Ed",
	"NotSpaced": "Page_NotSpaced__kBSTr",
	"Title": "Page_Title__MjN_r"
};


/***/ }),

/***/ 96:
/***/ ((module) => {

// Exports
module.exports = {
	"Section": "Section_Section__izvEi",
	"Horizontal": "Section_Horizontal__1_FV2",
	"Close": "Section_Close__3E74m",
	"CloseHorizontal": "Section_CloseHorizontal__ZIIWx",
	"Centered": "Section_Centered__FCOir"
};


/***/ }),

/***/ 8580:
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
/* harmony import */ var _Page_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8774);
/* harmony import */ var _Page_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Page_module_css__WEBPACK_IMPORTED_MODULE_2__);



const Page = (props)=>{
    const { title , children , notSpaced , className , wrapperClassName , ...pageProps } = props;
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `
      ${(_Page_module_css__WEBPACK_IMPORTED_MODULE_2___default().PageSpace)}
      ${wrapperClassName || ''}
    `,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
            ...pageProps,
            className: `
          ${(_Page_module_css__WEBPACK_IMPORTED_MODULE_2___default().Page)}
          ${title && (_Page_module_css__WEBPACK_IMPORTED_MODULE_2___default().Spaced)}
          ${notSpaced && (_Page_module_css__WEBPACK_IMPORTED_MODULE_2___default().NotSpaced)}
          ${className || ''}
        `,
            children: [
                title && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_Title__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                    className: (_Page_module_css__WEBPACK_IMPORTED_MODULE_2___default().Title),
                    children: title
                }),
                children
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);


/***/ }),

/***/ 4568:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Section_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96);
/* harmony import */ var _Section_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Section_module_scss__WEBPACK_IMPORTED_MODULE_1__);


const Section = (props)=>{
    const { close , element , children , centered , className , isHorizontal , ...sectionProps } = props;
    const SectionEl = element || 'section';
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SectionEl, {
        ...sectionProps,
        className: `
      ${isHorizontal ? (_Section_module_scss__WEBPACK_IMPORTED_MODULE_1___default().Horizontal) : (_Section_module_scss__WEBPACK_IMPORTED_MODULE_1___default().Section) || ''}
      ${close && isHorizontal && (_Section_module_scss__WEBPACK_IMPORTED_MODULE_1___default().CloseHorizontal) || ''}
      ${close && !isHorizontal && (_Section_module_scss__WEBPACK_IMPORTED_MODULE_1___default().Close) || ''}
      ${centered && (_Section_module_scss__WEBPACK_IMPORTED_MODULE_1___default().Centered) || ''}
      ${className || ''}
    `.trim(),
        children: children
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Section);


/***/ }),

/***/ 9240:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Title_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8580);
/* harmony import */ var _Title_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Title_module_scss__WEBPACK_IMPORTED_MODULE_1__);


const Title = (props)=>{
    const { className  } = props;
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
        className: `
        ${(_Title_module_scss__WEBPACK_IMPORTED_MODULE_1___default().Title)}
        ${className || ''}
      `.trim(),
        children: props.children
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Title);


/***/ })

};
;