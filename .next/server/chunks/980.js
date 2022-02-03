exports.id = 980;
exports.ids = [980];
exports.modules = {

/***/ 1104:
/***/ ((module) => {

// Exports
module.exports = {
	"ImageContainer": "AsideImage_ImageContainer__1HwjZ",
	"Image": "AsideImage_Image__RhQ94"
};


/***/ }),

/***/ 9526:
/***/ ((module) => {

// Exports
module.exports = {
	"Content": "Content_Content__Klmip",
	"MediaContent": "Content_MediaContent__YIf_4"
};


/***/ }),

/***/ 4522:
/***/ ((module) => {

// Exports
module.exports = {
	"Anchor": "Anchor_Anchor__KIGyl"
};


/***/ }),

/***/ 6712:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AsideImage_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1104);
/* harmony import */ var _AsideImage_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_AsideImage_module_scss__WEBPACK_IMPORTED_MODULE_1__);


const Content = (props)=>{
    const { children , className , containerClassName , ...imageProps } = props;
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("aside", {
        className: `
      ${(_AsideImage_module_scss__WEBPACK_IMPORTED_MODULE_1___default().ImageContainer)} 
      ${containerClassName || ""}
    `,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
            ...imageProps,
            className: `
          ${(_AsideImage_module_scss__WEBPACK_IMPORTED_MODULE_1___default().Image)} 
          ${className || ""}
        `
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Content);


/***/ }),

/***/ 4712:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Content_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9526);
/* harmony import */ var _Content_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Content_module_scss__WEBPACK_IMPORTED_MODULE_1__);


const Content = (props)=>{
    const { children , className , ...contentProps } = props;
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("article", {
        ...contentProps,
        className: `
      ${(_Content_module_scss__WEBPACK_IMPORTED_MODULE_1___default().Content)} 
      ${className || ''}
      ${(_Content_module_scss__WEBPACK_IMPORTED_MODULE_1___default().MediaContent)}
    `,
        children: children
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Content);


/***/ }),

/***/ 224:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var _Anchor_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4522);
/* harmony import */ var _Anchor_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Anchor_module_scss__WEBPACK_IMPORTED_MODULE_2__);



const Anchor = (props)=>{
    const { href , children , className , ...anchorProps } = props;
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
        href: href || "",
        passHref: true,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            className: `${(_Anchor_module_scss__WEBPACK_IMPORTED_MODULE_2___default().Anchor)} ${className || ""}`,
            ...anchorProps,
            children: children
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Anchor);


/***/ })

};
;