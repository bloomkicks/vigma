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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _Support_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Support.module.css */ \"./src/components/layout/Support.module.css\");\n/* harmony import */ var _Support_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Support_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Support = function(props) {\n    var expandHandler = function expandHandler() {\n        setIsShown(false);\n        setExpanded(function(prev) {\n            return !prev;\n        });\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isShown = ref[0], setIsShown = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), expanded = ref1[0], setExpanded = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setTimeout(function() {\n            return setIsShown(true);\n        }, 7500);\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"section\", {\n        className: (_Support_module_css__WEBPACK_IMPORTED_MODULE_2___default().support),\n        onClick: expandHandler,\n        __source: {\n            fileName: \"C:\\\\Users\\\\glink\\\\mess\\\\vigma\\\\src\\\\components\\\\layout\\\\Support.js\",\n            lineNumber: 17,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            expanded && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: (_Support_module_css__WEBPACK_IMPORTED_MODULE_2___default().stack),\n                __source: {\n                    fileName: \"C:\\\\Users\\\\glink\\\\mess\\\\vigma\\\\src\\\\components\\\\layout\\\\Support.js\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                        src: \"/support_vk.svg\",\n                        alt: \"Помощь ВКонтакте\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\glink\\\\mess\\\\vigma\\\\src\\\\components\\\\layout\\\\Support.js\",\n                            lineNumber: 23,\n                            columnNumber: 11\n                        },\n                        __self: _this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                        src: \"/support_wa.svg\",\n                        alt: \"Помощь WhatsApp\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\glink\\\\mess\\\\vigma\\\\src\\\\components\\\\layout\\\\Support.js\",\n                            lineNumber: 27,\n                            columnNumber: 11\n                        },\n                        __self: _this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                        src: \"/support_phone.svg\",\n                        alt: \"Помощь по Телефону\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\glink\\\\mess\\\\vigma\\\\src\\\\components\\\\layout\\\\Support.js\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        },\n                        __self: _this\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                src: \"/support.png\",\n                alt: \"Иконка Тех. Поддержки\",\n                className: (_Support_module_css__WEBPACK_IMPORTED_MODULE_2___default().bg),\n                __source: {\n                    fileName: \"C:\\\\Users\\\\glink\\\\mess\\\\vigma\\\\src\\\\components\\\\layout\\\\Support.js\",\n                    lineNumber: 37,\n                    columnNumber: 7\n                },\n                __self: _this\n            }),\n            isShown && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: (_Support_module_css__WEBPACK_IMPORTED_MODULE_2___default().message),\n                __source: {\n                    fileName: \"C:\\\\Users\\\\glink\\\\mess\\\\vigma\\\\src\\\\components\\\\layout\\\\Support.js\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"b\", {\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\glink\\\\mess\\\\vigma\\\\src\\\\components\\\\layout\\\\Support.js\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        },\n                        __self: _this,\n                        children: \"Готовы помочь!\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\glink\\\\mess\\\\vigma\\\\src\\\\components\\\\layout\\\\Support.js\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        },\n                        __self: _this,\n                        children: \"Здравствуйте, если у вас возникли вопросы - мы с радостью на них ответим и поможем\"\n                    })\n                ]\n            })\n        ]\n    }));\n};\n_s(Support, \"9ip0VbeygKHB3N51NfY26IFA9RQ=\");\n_c = Support;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Support);\nvar _c;\n$RefreshReg$(_c, \"Support\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvU3VwcG9ydC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTJDO0FBQ0Q7OztBQUUxQyxHQUFLLENBQUNHLE9BQU8sR0FBRyxRQUFRLENBQVBDLEtBQUssRUFBSyxDQUFDO1FBT2pCQyxhQUFhLEdBQXRCLFFBQVEsQ0FBQ0EsYUFBYSxHQUFHLENBQUM7UUFDeEJDLFVBQVUsQ0FBQyxLQUFLO1FBQ2hCQyxXQUFXLENBQUMsUUFBUSxDQUFQQyxJQUFJO1lBQUssTUFBTSxFQUFMQSxJQUFJOztJQUM3QixDQUFDOztJQVRELEdBQUssQ0FBeUJSLEdBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLEdBQXJDUyxPQUFPLEdBQWdCVCxHQUFlLEtBQTdCTSxVQUFVLEdBQUlOLEdBQWU7SUFDN0MsR0FBSyxDQUEyQkEsSUFBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssR0FBdkNVLFFBQVEsR0FBaUJWLElBQWUsS0FBOUJPLFdBQVcsR0FBSVAsSUFBZTtJQUUvQ0MsZ0RBQVMsQ0FBQyxRQUFRLEdBQUYsQ0FBQztRQUNmVSxVQUFVLENBQUMsUUFBUTtZQUFGTCxNQUFNLENBQU5BLFVBQVUsQ0FBQyxJQUFJO1dBQUcsSUFBSTtJQUN6QyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBTUwsTUFBTSx1RUFDSE0sQ0FBTztRQUNOQyxTQUFTLEVBQUVYLG9FQUFlO1FBQzFCYSxPQUFPLEVBQUVWLGFBQWE7Ozs7Ozs7O1lBRXJCSyxRQUFRLDBFQUNOTSxDQUFHO2dCQUFDSCxTQUFTLEVBQUVYLGtFQUFhOzs7Ozs7Ozt5RkFDMUJnQixDQUFHO3dCQUNGQyxHQUFHLEVBQUMsQ0FBaUI7d0JBQ3JCQyxHQUFHLEVBQUMsQ0FBa0I7Ozs7Ozs7O3lGQUVSRixDQUFaO3dCQUNGQyxHQUFHLEVBQUMsQ0FBaUI7d0JBQ3JCQyxHQUFHLEVBQUMsQ0FBaUI7Ozs7Ozs7O3lGQUVoQkYsQ0FBSDt3QkFDRkMsR0FBRyxFQUFDLENBQW9CO3dCQUN4QkMsR0FBRyxFQUFDLENBQW9COzs7Ozs7Ozs7O2lGQUliRixDQUFiO2dCQUNGQyxHQUFHLEVBQUMsQ0FBYztnQkFDbEJDLEdBQUcsRUFBQyxDQUF1QjtnQkFDVFAsU0FBVCxFQUFFWCwrREFBVTs7Ozs7Ozs7WUFFdEJPLE9BQU8sMEVBQ0xPLENBQUc7Z0JBQUNILFNBQVMsRUFBRVgsb0VBQWU7Ozs7Ozs7O3lGQUM1QnFCLENBQUM7Ozs7Ozs7a0NBQUMsQ0FBYzs7eUZBQ0pDLENBQVg7Ozs7Ozs7a0NBQUMsQ0FHSDs7Ozs7O0FBS1YsQ0FBQztHQWpES3JCLE9BQU87S0FBUEEsT0FBTztBQW1EYiwrREFBZUEsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2xheW91dC9TdXBwb3J0LmpzPzQzOWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9TdXBwb3J0Lm1vZHVsZS5jc3NcIjtcclxuXHJcbmNvbnN0IFN1cHBvcnQgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBbaXNTaG93biwgc2V0SXNTaG93bl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2V4cGFuZGVkLCBzZXRFeHBhbmRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHNldElzU2hvd24odHJ1ZSksIDc1MDApO1xyXG4gIH0sIFtdKTtcclxuICBmdW5jdGlvbiBleHBhbmRIYW5kbGVyKCkge1xyXG4gICAgc2V0SXNTaG93bihmYWxzZSlcclxuICAgIHNldEV4cGFuZGVkKChwcmV2KSA9PiAhcHJldik7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb25cclxuICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnN1cHBvcnR9XHJcbiAgICAgIG9uQ2xpY2s9e2V4cGFuZEhhbmRsZXJ9XHJcbiAgICA+XHJcbiAgICAgIHtleHBhbmRlZCAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc3RhY2t9PlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBzcmM9XCIvc3VwcG9ydF92ay5zdmdcIlxyXG4gICAgICAgICAgICBhbHQ9XCLQn9C+0LzQvtGJ0Ywg0JLQmtC+0L3RgtCw0LrRgtC1XCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIHNyYz1cIi9zdXBwb3J0X3dhLnN2Z1wiXHJcbiAgICAgICAgICAgIGFsdD1cItCf0L7QvNC+0YnRjCBXaGF0c0FwcFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBzcmM9XCIvc3VwcG9ydF9waG9uZS5zdmdcIlxyXG4gICAgICAgICAgICBhbHQ9XCLQn9C+0LzQvtGJ0Ywg0L/QviDQotC10LvQtdGE0L7QvdGDXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICAgIDxpbWdcclxuICAgICAgICBzcmM9XCIvc3VwcG9ydC5wbmdcIlxyXG4gICAgICAgIGFsdD1cItCY0LrQvtC90LrQsCDQotC10YUuINCf0L7QtNC00LXRgNC20LrQuFwiXHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJnfVxyXG4gICAgICAvPlxyXG4gICAgICB7aXNTaG93biAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubWVzc2FnZX0+XHJcbiAgICAgICAgICA8Yj7Qk9C+0YLQvtCy0Ysg0L/QvtC80L7Rh9GMITwvYj5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICDQl9C00YDQsNCy0YHRgtCy0YPQudGC0LUsINC10YHQu9C4INGDINCy0LDRgSDQstC+0LfQvdC40LrQu9C4INCy0L7Qv9GA0L7RgdGLIC0g0LzRiyDRgVxyXG4gICAgICAgICAgICDRgNCw0LTQvtGB0YLRjNGOINC90LAg0L3QuNGFINC+0YLQstC10YLQuNC8INC4INC/0L7QvNC+0LbQtdC8XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN1cHBvcnQ7XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImNsYXNzZXMiLCJTdXBwb3J0IiwicHJvcHMiLCJleHBhbmRIYW5kbGVyIiwic2V0SXNTaG93biIsInNldEV4cGFuZGVkIiwicHJldiIsImlzU2hvd24iLCJleHBhbmRlZCIsInNldFRpbWVvdXQiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwic3VwcG9ydCIsIm9uQ2xpY2siLCJkaXYiLCJzdGFjayIsImltZyIsInNyYyIsImFsdCIsImJnIiwibWVzc2FnZSIsImIiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/layout/Support.js\n");

/***/ })

});