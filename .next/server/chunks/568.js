exports.id = 568;
exports.ids = [568];
exports.modules = {

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


/***/ })

};
;