"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/layout/Support.js":
/*!******************************************!*\
  !*** ./src/components/layout/Support.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _Support_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Support.module.css */ \"./src/components/layout/Support.module.css\");\n/* harmony import */ var _Support_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Support_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Support = function(props) {\n    var expandHandler = function expandHandler() {\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isShown = ref[0], setIsShown = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setTimeout(function() {\n            return setIsShown(true);\n        }, 7500);\n    }, []);\n    return isShown && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"section\", {\n        className: (_Support_module_css__WEBPACK_IMPORTED_MODULE_2___default().support),\n        onClick: expandHandler,\n        __source: {\n            fileName: \"C:\\\\Users\\\\glink\\\\mess\\\\vigma\\\\src\\\\components\\\\layout\\\\Support.js\",\n            lineNumber: 14,\n            columnNumber: 7\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                src: \"/support_phone.svg\",\n                alt: \"Икока Тех. Поддержки\",\n                className: (_Support_module_css__WEBPACK_IMPORTED_MODULE_2___default().bg),\n                __source: {\n                    fileName: \"C:\\\\Users\\\\glink\\\\mess\\\\vigma\\\\src\\\\components\\\\layout\\\\Support.js\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: (_Support_module_css__WEBPACK_IMPORTED_MODULE_2___default().message),\n                __source: {\n                    fileName: \"C:\\\\Users\\\\glink\\\\mess\\\\vigma\\\\src\\\\components\\\\layout\\\\Support.js\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"b\", {\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\glink\\\\mess\\\\vigma\\\\src\\\\components\\\\layout\\\\Support.js\",\n                            lineNumber: 24,\n                            columnNumber: 11\n                        },\n                        __self: _this,\n                        children: \"Готовы помочь!\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\glink\\\\mess\\\\vigma\\\\src\\\\components\\\\layout\\\\Support.js\",\n                            lineNumber: 25,\n                            columnNumber: 11\n                        },\n                        __self: _this,\n                        children: \"Здравствуйте, если у вас возникли вопросы - мы с радостью на них ответим и поможем\"\n                    })\n                ]\n            })\n        ]\n    });\n};\n_s(Support, \"R6oiTacYga5DaYN6hPJc8sHhe7Y=\");\n_c = Support;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Support);\nvar _c;\n$RefreshReg$(_c, \"Support\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvU3VwcG9ydC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTJDO0FBQ0Q7OztBQUUxQyxHQUFLLENBQUNHLE9BQU8sR0FBRyxRQUFRLENBQVBDLEtBQUssRUFBSyxDQUFDO1FBTWpCQyxhQUFhLEdBQXRCLFFBQVEsQ0FBQ0EsYUFBYSxHQUFHLENBQUM7SUFBQSxDQUFDOztJQUwzQixHQUFLLENBQXlCTCxHQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxHQUFyQ00sT0FBTyxHQUFnQk4sR0FBZSxLQUE3Qk8sVUFBVSxHQUFJUCxHQUFlO0lBRTdDQyxnREFBUyxDQUFDLFFBQVEsR0FBRixDQUFDO1FBQ2ZPLFVBQVUsQ0FBQyxRQUFRO1lBQUZELE1BQU0sQ0FBTkEsVUFBVSxDQUFDLElBQUk7V0FBRyxJQUFJO0lBQ3pDLENBQUMsRUFBRSxDQUFDLENBQUM7SUFHTCxNQUFNLENBQ0pELE9BQU8sMEVBQ0pHLENBQU87UUFDTkMsU0FBUyxFQUFFUixvRUFBZTtRQUMxQlUsT0FBTyxFQUFFUCxhQUFhOzs7Ozs7OztpRkFFckJRLENBQUc7Z0JBQ0ZDLEdBQUcsRUFBQyxDQUFvQjtnQkFDeEJDLEdBQUcsRUFBQyxDQUFzQjtnQkFDVEwsU0FBUixFQUFFUiwrREFBVTs7Ozs7Ozs7a0ZBRXRCZSxDQUFHO2dCQUFDUCxTQUFTLEVBQUVSLG9FQUFlOzs7Ozs7Ozt5RkFDNUJpQixDQUFDOzs7Ozs7O2tDQUFDLENBQWM7O3lGQUNKQyxDQUFYOzs7Ozs7O2tDQUFDLENBR0g7Ozs7OztBQUtWLENBQUM7R0E3QktqQixPQUFPO0tBQVBBLE9BQU87QUErQmIsK0RBQWVBLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvU3VwcG9ydC5qcz80MzlmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vU3VwcG9ydC5tb2R1bGUuY3NzXCI7XHJcblxyXG5jb25zdCBTdXBwb3J0ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgW2lzU2hvd24sIHNldElzU2hvd25dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiBzZXRJc1Nob3duKHRydWUpLCA3NTAwKTtcclxuICB9LCBbXSk7XHJcbiAgZnVuY3Rpb24gZXhwYW5kSGFuZGxlcigpIHt9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICBpc1Nob3duICYmIChcclxuICAgICAgPHNlY3Rpb25cclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuc3VwcG9ydH1cclxuICAgICAgICBvbkNsaWNrPXtleHBhbmRIYW5kbGVyfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgc3JjPVwiL3N1cHBvcnRfcGhvbmUuc3ZnXCJcclxuICAgICAgICAgIGFsdD1cItCY0LrQvtC60LAg0KLQtdGFLiDQn9C+0LTQtNC10YDQttC60LhcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJnfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubWVzc2FnZX0+XHJcbiAgICAgICAgICA8Yj7Qk9C+0YLQvtCy0Ysg0L/QvtC80L7Rh9GMITwvYj5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICDQl9C00YDQsNCy0YHRgtCy0YPQudGC0LUsINC10YHQu9C4INGDINCy0LDRgSDQstC+0LfQvdC40LrQu9C4INCy0L7Qv9GA0L7RgdGLIC0g0LzRiyDRgVxyXG4gICAgICAgICAgICDRgNCw0LTQvtGB0YLRjNGOINC90LAg0L3QuNGFINC+0YLQstC10YLQuNC8INC4INC/0L7QvNC+0LbQtdC8XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgIClcclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3VwcG9ydDtcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiY2xhc3NlcyIsIlN1cHBvcnQiLCJwcm9wcyIsImV4cGFuZEhhbmRsZXIiLCJpc1Nob3duIiwic2V0SXNTaG93biIsInNldFRpbWVvdXQiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwic3VwcG9ydCIsIm9uQ2xpY2siLCJpbWciLCJzcmMiLCJhbHQiLCJiZyIsImRpdiIsIm1lc3NhZ2UiLCJiIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/layout/Support.js\n");

/***/ })

});