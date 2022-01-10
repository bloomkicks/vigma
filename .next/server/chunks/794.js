exports.id = 794;
exports.ids = [794];
exports.modules = {

/***/ 6794:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Section_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96);
/* harmony import */ var _Section_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Section_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
const _excluded = ["close", "element", "children", "centered", "className", "isHorizontal"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const Section = props => {
  const {
    close,
    element,
    children,
    centered,
    className,
    isHorizontal
  } = props,
        sectionProps = _objectWithoutProperties(props, _excluded);

  const SectionEl = element || 'section';
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SectionEl, _objectSpread(_objectSpread({}, sectionProps), {}, {
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


/***/ })

};
;