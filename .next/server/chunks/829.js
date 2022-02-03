exports.id = 829;
exports.ids = [829,568];
exports.modules = {

/***/ 3643:
/***/ ((module) => {

// Exports
module.exports = {
	"Button": "MainButton_Button__n72zw"
};


/***/ }),

/***/ 8401:
/***/ ((module) => {

// Exports
module.exports = {
	"Backdrop": "Modal_Backdrop__9RcyN",
	"Modal": "Modal_Modal__FQ769"
};


/***/ }),

/***/ 629:
/***/ ((module) => {

// Exports
module.exports = {
	"Secondary": "Secondary_Secondary__TPia2"
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

/***/ 834:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MainButton_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3643);
/* harmony import */ var _MainButton_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_MainButton_module_scss__WEBPACK_IMPORTED_MODULE_1__);


const MainButton = (props)=>{
    const { children , className , ...buttonProps } = props;
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        ...buttonProps,
        className: `${(_MainButton_module_scss__WEBPACK_IMPORTED_MODULE_1___default().Button)} ${className}`,
        children: children
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainButton);


/***/ }),

/***/ 1089:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export Backdrop */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Modal_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8401);
/* harmony import */ var _Modal_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Modal_module_scss__WEBPACK_IMPORTED_MODULE_2__);



const Backdrop = (props)=>{
    const { children , ...backdropProps } = props;
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        id: "backdrop",
        className: (_Modal_module_scss__WEBPACK_IMPORTED_MODULE_2___default().Backdrop),
        ...backdropProps,
        children: children
    }));
};
const Modal = (props)=>{
    const { 0: isActive , 1: setIsActive  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const clickHandler = (e)=>{
        props.onClose && props.onClose(e);
        setIsActive(false);
    };
    return isActive && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Backdrop, {
        onClick: clickHandler,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: `${(_Modal_module_scss__WEBPACK_IMPORTED_MODULE_2___default().Modal)} ${props.className}`,
            children: props.children
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);


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