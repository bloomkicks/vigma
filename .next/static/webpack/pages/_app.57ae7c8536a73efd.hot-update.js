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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _Support_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Support.module.css */ \"./src/components/layout/Support.module.css\");\n/* harmony import */ var _Support_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Support_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Support = function(props) {\n    var expandHandler = function expandHandler(e) {\n        e.stopPropagation();\n        setExpanded(true);\n    };\n    var unexpandHandler = function unexpandHandler() {\n        setExpanded(false);\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), isShown = ref[0], setIsShown = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), expanded = ref1[0], setExpanded = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        window.addEventListener(\"click\", unexpandHandler);\n        setTimeout(function() {\n            return setIsShown(true);\n        }, 53000);\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"section\", {\n        className: (_Support_module_css__WEBPACK_IMPORTED_MODULE_2___default().support),\n        __source: {\n            fileName: \"C:\\\\Users\\\\glink\\\\mess\\\\vigma\\\\src\\\\components\\\\layout\\\\Support.js\",\n            lineNumber: 22,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            expanded && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: (_Support_module_css__WEBPACK_IMPORTED_MODULE_2___default().stack),\n                onClick: function(e) {\n                    e.stopPropagation();\n                },\n                __source: {\n                    fileName: \"C:\\\\Users\\\\glink\\\\mess\\\\vigma\\\\src\\\\components\\\\layout\\\\Support.js\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                        target: \"_blank\",\n                        href: \"https://vk.com/vigmaspb\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\glink\\\\mess\\\\vigma\\\\src\\\\components\\\\layout\\\\Support.js\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                            src: \"/support_vk.svg\",\n                            alt: \"Помощь ВКонтакте\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\glink\\\\mess\\\\vigma\\\\src\\\\components\\\\layout\\\\Support.js\",\n                                lineNumber: 31,\n                                columnNumber: 13\n                            },\n                            __self: _this\n                        })\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                        href: \"tel:8 (964) 342 60-51\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\glink\\\\mess\\\\vigma\\\\src\\\\components\\\\layout\\\\Support.js\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                            src: \"/support_wa.svg\",\n                            alt: \"Помощь WhatsApp\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\glink\\\\mess\\\\vigma\\\\src\\\\components\\\\layout\\\\Support.js\",\n                                lineNumber: 37,\n                                columnNumber: 13\n                            },\n                            __self: _this\n                        })\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                        href: \"tel: 8 (812) 642 60-51\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\glink\\\\mess\\\\vigma\\\\src\\\\components\\\\layout\\\\Support.js\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                            src: \"/support_phone.svg\",\n                            alt: \"Помощь по Телефону\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\glink\\\\mess\\\\vigma\\\\src\\\\components\\\\layout\\\\Support.js\",\n                                lineNumber: 43,\n                                columnNumber: 13\n                            },\n                            __self: _this\n                        })\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                onClick: expanded ? function(e) {\n                    return unexpandHandler(e);\n                } : function(e) {\n                    return expandHandler(e);\n                },\n                src: \"/support.png\",\n                alt: \"Иконка Тех. Поддержки\",\n                className: (_Support_module_css__WEBPACK_IMPORTED_MODULE_2___default().bg),\n                __source: {\n                    fileName: \"C:\\\\Users\\\\glink\\\\mess\\\\vigma\\\\src\\\\components\\\\layout\\\\Support.js\",\n                    lineNumber: 50,\n                    columnNumber: 7\n                },\n                __self: _this\n            }),\n            isShown && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                onClick: function(e) {\n                    expandHandler(e);\n                    setIsShown(false);\n                    e.stopPropagation();\n                },\n                className: (_Support_module_css__WEBPACK_IMPORTED_MODULE_2___default().message),\n                __source: {\n                    fileName: \"C:\\\\Users\\\\glink\\\\mess\\\\vigma\\\\src\\\\components\\\\layout\\\\Support.js\",\n                    lineNumber: 61,\n                    columnNumber: 9\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"b\", {\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\glink\\\\mess\\\\vigma\\\\src\\\\components\\\\layout\\\\Support.js\",\n                            lineNumber: 69,\n                            columnNumber: 11\n                        },\n                        __self: _this,\n                        children: \"Готовы помочь!\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\glink\\\\mess\\\\vigma\\\\src\\\\components\\\\layout\\\\Support.js\",\n                            lineNumber: 70,\n                            columnNumber: 11\n                        },\n                        __self: _this,\n                        children: \"Здравствуйте, если у вас возникли вопросы - мы с радостью на них ответим и поможем\"\n                    })\n                ]\n            })\n        ]\n    }));\n};\n_s(Support, \"g+iXZe4GONGQiL9pICOTDZx7w74=\");\n_c = Support;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Support);\nvar _c;\n$RefreshReg$(_c, \"Support\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b3V0L1N1cHBvcnQuanM/NDM5ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL1N1cHBvcnQubW9kdWxlLmNzc1wiO1xyXG5cclxuY29uc3QgU3VwcG9ydCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IFtpc1Nob3duLCBzZXRJc1Nob3duXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFtleHBhbmRlZCwgc2V0RXhwYW5kZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBmdW5jdGlvbiBleHBhbmRIYW5kbGVyKGUpIHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBzZXRFeHBhbmRlZCh0cnVlKTtcclxuICB9XHJcbiAgZnVuY3Rpb24gdW5leHBhbmRIYW5kbGVyKCkge1xyXG4gICAgc2V0RXhwYW5kZWQoZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdW5leHBhbmRIYW5kbGVyKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0SXNTaG93bih0cnVlKSwgNTMwMDApO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5zdXBwb3J0fT5cclxuICAgICAge2V4cGFuZGVkICYmIChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuc3RhY2t9XHJcbiAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly92ay5jb20vdmlnbWFzcGJcIj5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIHNyYz1cIi9zdXBwb3J0X3ZrLnN2Z1wiXHJcbiAgICAgICAgICAgICAgYWx0PVwi0J/QvtC80L7RidGMINCS0JrQvtC90YLQsNC60YLQtVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8YSBocmVmPVwidGVsOjggKDk2NCkgMzQyIDYwLTUxXCI+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBzcmM9XCIvc3VwcG9ydF93YS5zdmdcIlxyXG4gICAgICAgICAgICAgIGFsdD1cItCf0L7QvNC+0YnRjCBXaGF0c0FwcFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8YSBocmVmPVwidGVsOiA4ICg4MTIpIDY0MiA2MC01MVwiPlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgc3JjPVwiL3N1cHBvcnRfcGhvbmUuc3ZnXCJcclxuICAgICAgICAgICAgICBhbHQ9XCLQn9C+0LzQvtGJ0Ywg0L/QviDQotC10LvQtdGE0L7QvdGDXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgICAgPGltZ1xyXG4gICAgICAgIG9uQ2xpY2s9e1xyXG4gICAgICAgICAgZXhwYW5kZWRcclxuICAgICAgICAgICAgPyAoZSkgPT4gdW5leHBhbmRIYW5kbGVyKGUpXHJcbiAgICAgICAgICAgIDogKGUpID0+IGV4cGFuZEhhbmRsZXIoZSlcclxuICAgICAgICB9XHJcbiAgICAgICAgc3JjPVwiL3N1cHBvcnQucG5nXCJcclxuICAgICAgICBhbHQ9XCLQmNC60L7QvdC60LAg0KLQtdGFLiDQn9C+0LTQtNC10YDQttC60LhcIlxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5iZ31cclxuICAgICAgLz5cclxuICAgICAge2lzU2hvd24gJiYgKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgIGV4cGFuZEhhbmRsZXIoZSk7XHJcbiAgICAgICAgICAgIHNldElzU2hvd24oZmFsc2UpXHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1lc3NhZ2V9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGI+0JPQvtGC0L7QstGLINC/0L7QvNC+0YfRjCE8L2I+XHJcbiAgICAgICAgICA8cD5cclxuICAgICAgICAgICAg0JfQtNGA0LDQstGB0YLQstGD0LnRgtC1LCDQtdGB0LvQuCDRgyDQstCw0YEg0LLQvtC30L3QuNC60LvQuCDQstC+0L/RgNC+0YHRiyAtINC80Ysg0YFcclxuICAgICAgICAgICAg0YDQsNC00L7RgdGC0YzRjiDQvdCwINC90LjRhSDQvtGC0LLQtdGC0LjQvCDQuCDQv9C+0LzQvtC20LXQvFxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdXBwb3J0O1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJjbGFzc2VzIiwiU3VwcG9ydCIsInByb3BzIiwiZXhwYW5kSGFuZGxlciIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJzZXRFeHBhbmRlZCIsInVuZXhwYW5kSGFuZGxlciIsImlzU2hvd24iLCJzZXRJc1Nob3duIiwiZXhwYW5kZWQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwic2V0VGltZW91dCIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJzdXBwb3J0IiwiZGl2Iiwic3RhY2siLCJvbkNsaWNrIiwiYSIsInRhcmdldCIsImhyZWYiLCJpbWciLCJzcmMiLCJhbHQiLCJiZyIsIm1lc3NhZ2UiLCJiIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/layout/Support.js\n");

/***/ })

});