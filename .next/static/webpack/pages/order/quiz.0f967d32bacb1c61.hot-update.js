"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/order/quiz",{

/***/ "./src/components/quiz/GiftPaper.tsx":
/*!*******************************************!*\
  !*** ./src/components/quiz/GiftPaper.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Paper */ \"./node_modules/@mui/material/Paper/Paper.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Typography */ \"./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nvar _this = undefined;\nvar GiftPaper = function(param) {\n    var _amountOfQuestions = param.amountOfQuestions, amountOfQuestions = _amountOfQuestions === void 0 ? 5 : _amountOfQuestions;\n    var questions = \"вопросов\";\n    switch(amountOfQuestions){\n        case 1:\n            questions = \"вопрос\";\n            break;\n        case 2:\n        case 3:\n        case 4:\n            questions = \"вопроса\";\n            break;\n    }\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        sx: {\n            boxShadow: \"none\",\n            px: 2,\n            mb: 3,\n            width: \"80%\",\n            display: \"flex\",\n            justifyContent: \"center\",\n            alignItems: \"center\"\n        },\n        __source: {\n            fileName: \"C:\\\\Users\\\\bloom\\\\vigma\\\\code\\\\src\\\\components\\\\quiz\\\\GiftPaper.tsx\",\n            lineNumber: 24,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                variant: \"h2\",\n                align: \"center\",\n                display: \"inline-block\",\n                sx: {\n                    textTransform: \"uppercase\",\n                    fontWeight: \"400\"\n                },\n                __source: {\n                    fileName: \"C:\\\\Users\\\\bloom\\\\vigma\\\\code\\\\src\\\\components\\\\quiz\\\\GiftPaper.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: [\n                    \"до подарка осталось:\",\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        variant: \"inherit\",\n                        sx: {\n                            fontWeight: \"bold\"\n                        },\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\bloom\\\\vigma\\\\code\\\\src\\\\components\\\\quiz\\\\GiftPaper.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: [\n                            amountOfQuestions,\n                            \" \",\n                            questions\n                        ]\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                component: function() {\n                    /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        src: \"/quiz-assets/gift.png\",\n                        width: \"120\",\n                        height: \"120\"\n                    });\n                },\n                mb: 2,\n                __source: {\n                    fileName: \"C:\\\\Users\\\\bloom\\\\vigma\\\\code\\\\src\\\\components\\\\quiz\\\\GiftPaper.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 7\n                },\n                __self: _this\n            })\n        ]\n    }));\n};\n_c = GiftPaper;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GiftPaper);\nvar _c;\n$RefreshReg$(_c, \"GiftPaper\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9xdWl6L0dpZnRQYXBlci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUE4QjtBQUNTO0FBQ0o7QUFDYztBQUN4Qjs7QUFFekIsR0FBSyxDQUFDSyxTQUFTLEdBQUcsUUFDZCxRQUdFLENBQUM7bUNBSExDLGlCQUFpQixFQUFqQkEsaUJBQWlCLG1DQUFHLENBQUM7SUFJckIsR0FBRyxDQUFDQyxTQUFTLEdBQUcsQ0FBVTtJQUNsQixNQUFGLENBQUVELGlCQUFpQjtRQUN2QixJQUFJLENBQUMsQ0FBQztZQUNKQyxTQUFTLEdBQUcsQ0FBUTtZQUNkLEtBQUQ7UUFDUCxJQUFJLENBQUMsQ0FBQztRQUNOLElBQUksQ0FBQyxDQUFDO1FBQ04sSUFBSSxDQUFDLENBQUM7WUFDSkEsU0FBUyxHQUFHLENBQVM7WUFDZCxLQUFGOztJQUVULE1BQU0sdUVBQ0hOLDJEQUFLO1FBQ0pPLEVBQUUsRUFBRSxDQUFDO1lBQ0hDLFNBQVMsRUFBRSxDQUFNO1lBQ2pCQyxFQUFFLEVBQUUsQ0FBQztZQUNMQyxFQUFFLEVBQUUsQ0FBQztZQUNMQyxLQUFLLEVBQUUsQ0FBSztZQUNaQyxPQUFPLEVBQUUsQ0FBTTtZQUNmQyxjQUFjLEVBQUUsQ0FBUTtZQUN4QkMsVUFBVSxFQUFFLENBQVE7UUFDdEIsQ0FBQzs7Ozs7Ozs7a0ZBRUFaLGdFQUFVO2dCQUNUYSxPQUFPLEVBQUMsQ0FBSTtnQkFDWkMsS0FBSyxFQUFDLENBQVE7Z0JBQ2RKLE9BQU8sRUFBQyxDQUFjO2dCQUN0QkwsRUFBRSxFQUFFLENBQUM7b0JBQUNVLGFBQWEsRUFBRSxDQUFXO29CQUFFQyxVQUFVLEVBQUUsQ0FBSztnQkFBQyxDQUFDOzs7Ozs7OztvQkFDdEQsQ0FFQzswRkFBQ2hCLGdFQUFVO3dCQUNUYSxPQUFPLEVBQUMsQ0FBUzt3QkFDakJSLEVBQUUsRUFBRSxDQUFDOzRCQUFDVyxVQUFVLEVBQUUsQ0FBTTt3QkFBQyxDQUFDOzs7Ozs7Ozs0QkFFekJiLGlCQUFpQjs0QkFBQyxDQUFDOzRCQUFDQyxTQUFTOzs7OztpRkFHakNMLHlEQUFHO2dCQUNGa0IsU0FBUyxFQUFFLFFBQVE7a0NBQ2pCLE1BQU0sd0RBQUxwQixtREFBSzt3QkFDSnFCLEdBQUcsRUFBQyxDQUF1Qjt3QkFDM0JULEtBQUssRUFBQyxDQUFLO3dCQUNYVSxNQUFNLEVBQUMsQ0FBSzs7O2dCQUdoQlgsRUFBRSxFQUFFLENBQUM7Ozs7Ozs7Ozs7QUFJYixDQUFDO0tBdERLTixTQUFTO0FBd0RmLCtEQUFlQSxTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcXVpei9HaWZ0UGFwZXIudHN4PzhjZTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBQYXBlciBmcm9tIFwiQG11aS9tYXRlcmlhbC9QYXBlclwiO1xyXG5pbXBvcnQgQm94IGZyb20gXCJAbXVpL21hdGVyaWFsL0JveFwiO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5XCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IEdpZnRQYXBlciA9ICh7XHJcbiAgYW1vdW50T2ZRdWVzdGlvbnMgPSA1LFxyXG59OiB7XHJcbiAgYW1vdW50T2ZRdWVzdGlvbnM6IG51bWJlcjtcclxufSkgPT4ge1xyXG4gIGxldCBxdWVzdGlvbnMgPSBcItCy0L7Qv9GA0L7RgdC+0LJcIjtcclxuICBzd2l0Y2ggKGFtb3VudE9mUXVlc3Rpb25zKSB7XHJcbiAgICBjYXNlIDE6XHJcbiAgICAgIHF1ZXN0aW9ucyA9IFwi0LLQvtC/0YDQvtGBXCI7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAyOlxyXG4gICAgY2FzZSAzOlxyXG4gICAgY2FzZSA0OlxyXG4gICAgICBxdWVzdGlvbnMgPSBcItCy0L7Qv9GA0L7RgdCwXCI7XHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPFBhcGVyXHJcbiAgICAgIHN4PXt7XHJcbiAgICAgICAgYm94U2hhZG93OiBcIm5vbmVcIixcclxuICAgICAgICBweDogMixcclxuICAgICAgICBtYjogMyxcclxuICAgICAgICB3aWR0aDogXCI4MCVcIixcclxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgIHZhcmlhbnQ9XCJoMlwiXHJcbiAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxyXG4gICAgICAgIGRpc3BsYXk9XCJpbmxpbmUtYmxvY2tcIlxyXG4gICAgICAgIHN4PXt7IHRleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCIsIGZvbnRXZWlnaHQ6IFwiNDAwXCIgfX1cclxuICAgICAgPlxyXG4gICAgICAgINC00L4g0L/QvtC00LDRgNC60LAg0L7RgdGC0LDQu9C+0YHRjDpcclxuICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgdmFyaWFudD1cImluaGVyaXRcIlxyXG4gICAgICAgICAgc3g9e3sgZm9udFdlaWdodDogXCJib2xkXCIgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7YW1vdW50T2ZRdWVzdGlvbnN9IHtxdWVzdGlvbnN9XHJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgIDxCb3hcclxuICAgICAgICBjb21wb25lbnQ9eygpID0+IChcclxuICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICBzcmM9XCIvcXVpei1hc3NldHMvZ2lmdC5wbmdcIlxyXG4gICAgICAgICAgICB3aWR0aD1cIjEyMFwiXHJcbiAgICAgICAgICAgIGhlaWdodD1cIjEyMFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgbWI9ezJ9XHJcbiAgICAgID48L0JveD5cclxuICAgIDwvUGFwZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdpZnRQYXBlcjtcclxuIl0sIm5hbWVzIjpbIkltYWdlIiwiUGFwZXIiLCJCb3giLCJUeXBvZ3JhcGh5IiwiUmVhY3QiLCJHaWZ0UGFwZXIiLCJhbW91bnRPZlF1ZXN0aW9ucyIsInF1ZXN0aW9ucyIsInN4IiwiYm94U2hhZG93IiwicHgiLCJtYiIsIndpZHRoIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsInZhcmlhbnQiLCJhbGlnbiIsInRleHRUcmFuc2Zvcm0iLCJmb250V2VpZ2h0IiwiY29tcG9uZW50Iiwic3JjIiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/quiz/GiftPaper.tsx\n");

/***/ })

});