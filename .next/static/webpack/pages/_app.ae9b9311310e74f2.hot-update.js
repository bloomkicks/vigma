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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _Support_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Support.module.css */ \"./src/components/layout/Support.module.css\");\n/* harmony import */ var _Support_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Support_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Support = function(props) {\n    var expandHandler = function expandHandler() {\n        setExpanded(function(prev) {\n            return !prev;\n        });\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), isShown = ref[0], setIsShown = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), expanded = ref1[0], setExpanded = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setTimeout(function() {\n            return setIsShown(true);\n        }, 53000);\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"section\", {\n        className: (_Support_module_css__WEBPACK_IMPORTED_MODULE_2___default().support),\n        onClick: expandHandler,\n        __source: {\n            fileName: \"C:\\\\Users\\\\glink\\\\mess\\\\vigma\\\\src\\\\components\\\\layout\\\\Support.js\",\n            lineNumber: 17,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            expanded && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: (_Support_module_css__WEBPACK_IMPORTED_MODULE_2___default().stack),\n                onClick: function(e) {\n                    return e.stopPropagation();\n                },\n                __source: {\n                    fileName: \"C:\\\\Users\\\\glink\\\\mess\\\\vigma\\\\src\\\\components\\\\layout\\\\Support.js\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                        src: \"/support_vk.svg\",\n                        alt: \"Помощь ВКонтакте\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\glink\\\\mess\\\\vigma\\\\src\\\\components\\\\layout\\\\Support.js\",\n                            lineNumber: 23,\n                            columnNumber: 11\n                        },\n                        __self: _this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                        src: \"/support_wa.svg\",\n                        alt: \"Помощь WhatsApp\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\glink\\\\mess\\\\vigma\\\\src\\\\components\\\\layout\\\\Support.js\",\n                            lineNumber: 27,\n                            columnNumber: 11\n                        },\n                        __self: _this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                        src: \"/support_phone.svg\",\n                        alt: \"Помощь по Телефону\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\glink\\\\mess\\\\vigma\\\\src\\\\components\\\\layout\\\\Support.js\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        },\n                        __self: _this\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                src: \"/support.png\",\n                alt: \"Иконка Тех. Поддержки\",\n                className: (_Support_module_css__WEBPACK_IMPORTED_MODULE_2___default().bg),\n                __source: {\n                    fileName: \"C:\\\\Users\\\\glink\\\\mess\\\\vigma\\\\src\\\\components\\\\layout\\\\Support.js\",\n                    lineNumber: 37,\n                    columnNumber: 7\n                },\n                __self: _this\n            }),\n            isShown && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                onClick: function() {\n                    return setIsShown(false);\n                },\n                className: (_Support_module_css__WEBPACK_IMPORTED_MODULE_2___default().message),\n                __source: {\n                    fileName: \"C:\\\\Users\\\\glink\\\\mess\\\\vigma\\\\src\\\\components\\\\layout\\\\Support.js\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"b\", {\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\glink\\\\mess\\\\vigma\\\\src\\\\components\\\\layout\\\\Support.js\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        },\n                        __self: _this,\n                        children: \"Готовы помочь!\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\glink\\\\mess\\\\vigma\\\\src\\\\components\\\\layout\\\\Support.js\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        },\n                        __self: _this,\n                        children: \"Здравствуйте, если у вас возникли вопросы - мы с радостью на них ответим и поможем\"\n                    })\n                ]\n            })\n        ]\n    }));\n};\n_s(Support, \"g+iXZe4GONGQiL9pICOTDZx7w74=\");\n_c = Support;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Support);\nvar _c;\n$RefreshReg$(_c, \"Support\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvU3VwcG9ydC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTJDO0FBQ0Q7OztBQUUxQyxHQUFLLENBQUNHLE9BQU8sR0FBRyxRQUFRLENBQVBDLEtBQUssRUFBSyxDQUFDO1FBUWpCQyxhQUFhLEdBQXRCLFFBQVEsQ0FBQ0EsYUFBYSxHQUFHLENBQUM7UUFDeEJDLFdBQVcsQ0FBQyxRQUFRLENBQVBDLElBQUk7WUFBSyxNQUFNLEVBQUxBLElBQUk7O0lBQzdCLENBQUM7O0lBVEQsR0FBSyxDQUF5QlAsR0FBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksR0FBcENRLE9BQU8sR0FBZ0JSLEdBQWMsS0FBNUJTLFVBQVUsR0FBSVQsR0FBYztJQUM1QyxHQUFLLENBQTJCQSxJQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxHQUF2Q1UsUUFBUSxHQUFpQlYsSUFBZSxLQUE5Qk0sV0FBVyxHQUFJTixJQUFlO0lBRS9DQyxnREFBUyxDQUFDLFFBQVEsR0FBRixDQUFDO1FBQ2ZVLFVBQVUsQ0FBQyxRQUFRO1lBQUZGLE1BQU0sQ0FBTkEsVUFBVSxDQUFDLElBQUk7V0FBRyxLQUFLO0lBQzFDLENBQUMsRUFBRSxDQUFDLENBQUM7SUFNTCxNQUFNLHVFQUNIRyxDQUFPO1FBQ05DLFNBQVMsRUFBRVgsb0VBQWU7UUFDMUJhLE9BQU8sRUFBRVYsYUFBYTs7Ozs7Ozs7WUFFckJLLFFBQVEsMEVBQ05NLENBQUc7Z0JBQUNILFNBQVMsRUFBRVgsa0VBQWE7Z0JBQUVhLE9BQU8sRUFBRUcsUUFBUSxDQUFSQSxDQUFDO29CQUFJQSxNQUFNLENBQU5BLENBQUMsQ0FBQ0MsZUFBZTs7Ozs7Ozs7O3lGQUMzREMsQ0FBRzt3QkFDRkMsR0FBRyxFQUFDLENBQWlCO3dCQUNyQkMsR0FBRyxFQUFDLENBQWtCOzs7Ozs7Ozt5RkFFUkYsQ0FBWjt3QkFDRkMsR0FBRyxFQUFDLENBQWlCO3dCQUNyQkMsR0FBRyxFQUFDLENBQWlCOzs7Ozs7Ozt5RkFFaEJGLENBQUg7d0JBQ0ZDLEdBQUcsRUFBQyxDQUFvQjt3QkFDeEJDLEdBQUcsRUFBQyxDQUFvQjs7Ozs7Ozs7OztpRkFJYkYsQ0FBYjtnQkFDRkMsR0FBRyxFQUFDLENBQWM7Z0JBQ2xCQyxHQUFHLEVBQUMsQ0FBdUI7Z0JBQ1RULFNBQVQsRUFBRVgsK0RBQVU7Ozs7Ozs7O1lBRXRCTSxPQUFPLDBFQUNMUSxDQUFHO2dCQUFDRCxPQUFPLEVBQUUsUUFBUTtvQkFBRk4sTUFBTSxDQUFOQSxVQUFVLENBQUMsS0FBSzs7Z0JBQUdJLFNBQVMsRUFBRVgsb0VBQWU7Ozs7Ozs7O3lGQUM5RHVCLENBQUM7Ozs7Ozs7a0NBQUMsQ0FBYzs7eUZBQ0pDLENBQVg7Ozs7Ozs7a0NBQUMsQ0FHSDs7Ozs7O0FBS1YsQ0FBQztHQWpES3ZCLE9BQU87S0FBUEEsT0FBTztBQW1EYiwrREFBZUEsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2xheW91dC9TdXBwb3J0LmpzPzQzOWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9TdXBwb3J0Lm1vZHVsZS5jc3NcIjtcclxuXHJcbmNvbnN0IFN1cHBvcnQgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBbaXNTaG93biwgc2V0SXNTaG93bl0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbZXhwYW5kZWQsIHNldEV4cGFuZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0SXNTaG93bih0cnVlKSwgNTMwMDApO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgZnVuY3Rpb24gZXhwYW5kSGFuZGxlcigpIHtcclxuICAgIHNldEV4cGFuZGVkKChwcmV2KSA9PiAhcHJldik7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb25cclxuICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnN1cHBvcnR9XHJcbiAgICAgIG9uQ2xpY2s9e2V4cGFuZEhhbmRsZXJ9XHJcbiAgICA+XHJcbiAgICAgIHtleHBhbmRlZCAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc3RhY2t9IG9uQ2xpY2s9e2UgPT4gZS5zdG9wUHJvcGFnYXRpb24oKX0+XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIHNyYz1cIi9zdXBwb3J0X3ZrLnN2Z1wiXHJcbiAgICAgICAgICAgIGFsdD1cItCf0L7QvNC+0YnRjCDQktCa0L7QvdGC0LDQutGC0LVcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgc3JjPVwiL3N1cHBvcnRfd2Euc3ZnXCJcclxuICAgICAgICAgICAgYWx0PVwi0J/QvtC80L7RidGMIFdoYXRzQXBwXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIHNyYz1cIi9zdXBwb3J0X3Bob25lLnN2Z1wiXHJcbiAgICAgICAgICAgIGFsdD1cItCf0L7QvNC+0YnRjCDQv9C+INCi0LXQu9C10YTQvtC90YNcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgICAgPGltZ1xyXG4gICAgICAgIHNyYz1cIi9zdXBwb3J0LnBuZ1wiXHJcbiAgICAgICAgYWx0PVwi0JjQutC+0L3QutCwINCi0LXRhS4g0J/QvtC00LTQtdGA0LbQutC4XCJcclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYmd9XHJcbiAgICAgIC8+XHJcbiAgICAgIHtpc1Nob3duICYmIChcclxuICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHNldElzU2hvd24oZmFsc2UpfSBjbGFzc05hbWU9e2NsYXNzZXMubWVzc2FnZX0+XHJcbiAgICAgICAgICA8Yj7Qk9C+0YLQvtCy0Ysg0L/QvtC80L7Rh9GMITwvYj5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICDQl9C00YDQsNCy0YHRgtCy0YPQudGC0LUsINC10YHQu9C4INGDINCy0LDRgSDQstC+0LfQvdC40LrQu9C4INCy0L7Qv9GA0L7RgdGLIC0g0LzRiyDRgVxyXG4gICAgICAgICAgICDRgNCw0LTQvtGB0YLRjNGOINC90LAg0L3QuNGFINC+0YLQstC10YLQuNC8INC4INC/0L7QvNC+0LbQtdC8XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN1cHBvcnQ7XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImNsYXNzZXMiLCJTdXBwb3J0IiwicHJvcHMiLCJleHBhbmRIYW5kbGVyIiwic2V0RXhwYW5kZWQiLCJwcmV2IiwiaXNTaG93biIsInNldElzU2hvd24iLCJleHBhbmRlZCIsInNldFRpbWVvdXQiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwic3VwcG9ydCIsIm9uQ2xpY2siLCJkaXYiLCJzdGFjayIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJpbWciLCJzcmMiLCJhbHQiLCJiZyIsIm1lc3NhZ2UiLCJiIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/layout/Support.js\n");

/***/ })

});