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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Paper */ \"./node_modules/@mui/material/Paper/Paper.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Typography */ \"./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _this = undefined;\nvar GiftPaper = function(param) {\n    var _amountOfQuestions = param.amountOfQuestions, amountOfQuestions = _amountOfQuestions === void 0 ? 5 : _amountOfQuestions;\n    var questions = \"вопросов\";\n    switch(amountOfQuestions){\n        case 1:\n            questions = \"вопрос\";\n            break;\n        case 2:\n        case 3:\n        case 4:\n            questions = \"вопроса\";\n            break;\n    }\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        sx: {\n            boxShadow: \"none\",\n            padding: 2,\n            mb: 3,\n            width: \"80%\",\n            display: \"flex\",\n            justifyContent: \"center\"\n        },\n        __source: {\n            fileName: \"C:\\\\Users\\\\bloom\\\\vigma\\\\code\\\\src\\\\components\\\\quiz\\\\GiftPaper.tsx\",\n            lineNumber: 23,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                variant: \"h2\",\n                align: \"center\",\n                display: \"inline-block\",\n                sx: {\n                    textTransform: \"uppercase\",\n                    fontWeight: \"400\"\n                },\n                __source: {\n                    fileName: \"C:\\\\Users\\\\bloom\\\\vigma\\\\code\\\\src\\\\components\\\\quiz\\\\GiftPaper.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: [\n                    \"до подарка осталось:\",\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        variant: \"inherit\",\n                        sx: {\n                            fontWeight: \"bold\"\n                        },\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\bloom\\\\vigma\\\\code\\\\src\\\\components\\\\quiz\\\\GiftPaper.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: [\n                            amountOfQuestions,\n                            \" \",\n                            questions\n                        ]\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                src: \"/quiz-assets/gift.png\",\n                width: \"120\",\n                height: \"120\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\bloom\\\\vigma\\\\code\\\\src\\\\components\\\\quiz\\\\GiftPaper.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 7\n                },\n                __self: _this\n            })\n        ]\n    }));\n};\n_c = GiftPaper;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GiftPaper);\nvar _c;\n$RefreshReg$(_c, \"GiftPaper\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9xdWl6L0dpZnRQYXBlci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQThCO0FBQ1M7QUFDVTtBQUN4Qjs7QUFFekIsR0FBSyxDQUFDSSxTQUFTLEdBQUcsUUFDZCxRQUdFLENBQUM7bUNBSExDLGlCQUFpQixFQUFqQkEsaUJBQWlCLG1DQUFHLENBQUM7SUFJckIsR0FBRyxDQUFDQyxTQUFTLEdBQUcsQ0FBVTtJQUNsQixNQUFGLENBQUVELGlCQUFpQjtRQUN2QixJQUFJLENBQUMsQ0FBQztZQUNKQyxTQUFTLEdBQUcsQ0FBUTtZQUNkLEtBQUQ7UUFDUCxJQUFJLENBQUMsQ0FBQztRQUNOLElBQUksQ0FBQyxDQUFDO1FBQ04sSUFBSSxDQUFDLENBQUM7WUFDSkEsU0FBUyxHQUFHLENBQVM7WUFDZCxLQUFGOztJQUVULE1BQU0sdUVBQ0hMLDJEQUFLO1FBQ0pNLEVBQUUsRUFBRSxDQUFDO1lBQ0hDLFNBQVMsRUFBRSxDQUFNO1lBQ2pCQyxPQUFPLEVBQUUsQ0FBQztZQUNWQyxFQUFFLEVBQUUsQ0FBQztZQUNMQyxLQUFLLEVBQUUsQ0FBSztZQUNaQyxPQUFPLEVBQUUsQ0FBTTtZQUNmQyxjQUFjLEVBQUUsQ0FBUTtRQUMxQixDQUFDOzs7Ozs7OztrRkFFQVgsZ0VBQVU7Z0JBQ1RZLE9BQU8sRUFBQyxDQUFJO2dCQUNaQyxLQUFLLEVBQUMsQ0FBUTtnQkFDZEgsT0FBTyxFQUFDLENBQWM7Z0JBQ3RCTCxFQUFFLEVBQUUsQ0FBQztvQkFBQ1MsYUFBYSxFQUFFLENBQVc7b0JBQUVDLFVBQVUsRUFBRSxDQUFLO2dCQUFDLENBQUM7Ozs7Ozs7O29CQUN0RCxDQUVDOzBGQUFDZixnRUFBVTt3QkFDVFksT0FBTyxFQUFDLENBQVM7d0JBQ2pCUCxFQUFFLEVBQUUsQ0FBQzs0QkFBQ1UsVUFBVSxFQUFFLENBQU07d0JBQUMsQ0FBQzs7Ozs7Ozs7NEJBRXpCWixpQkFBaUI7NEJBQUMsQ0FBQzs0QkFBQ0MsU0FBUzs7Ozs7aUZBR2pDTixtREFBSztnQkFBQ2tCLEdBQUcsRUFBQyxDQUF1QjtnQkFBQ1AsS0FBSyxFQUFDLENBQUs7Z0JBQUNRLE1BQU0sRUFBQyxDQUFLOzs7Ozs7Ozs7O0FBR2pFLENBQUM7S0E1Q0tmLFNBQVM7QUE4Q2YsK0RBQWVBLFNBQVMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9xdWl6L0dpZnRQYXBlci50c3g/OGNlMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IFBhcGVyIGZyb20gXCJAbXVpL21hdGVyaWFsL1BhcGVyXCI7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHlcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgR2lmdFBhcGVyID0gKHtcclxuICBhbW91bnRPZlF1ZXN0aW9ucyA9IDUsXHJcbn06IHtcclxuICBhbW91bnRPZlF1ZXN0aW9uczogbnVtYmVyO1xyXG59KSA9PiB7XHJcbiAgbGV0IHF1ZXN0aW9ucyA9IFwi0LLQvtC/0YDQvtGB0L7QslwiO1xyXG4gIHN3aXRjaCAoYW1vdW50T2ZRdWVzdGlvbnMpIHtcclxuICAgIGNhc2UgMTpcclxuICAgICAgcXVlc3Rpb25zID0gXCLQstC+0L/RgNC+0YFcIjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIDI6XHJcbiAgICBjYXNlIDM6XHJcbiAgICBjYXNlIDQ6XHJcbiAgICAgIHF1ZXN0aW9ucyA9IFwi0LLQvtC/0YDQvtGB0LBcIjtcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8UGFwZXJcclxuICAgICAgc3g9e3tcclxuICAgICAgICBib3hTaGFkb3c6IFwibm9uZVwiLFxyXG4gICAgICAgIHBhZGRpbmc6IDIsXHJcbiAgICAgICAgbWI6IDMsXHJcbiAgICAgICAgd2lkdGg6IFwiODAlXCIsXHJcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgdmFyaWFudD1cImgyXCJcclxuICAgICAgICBhbGlnbj1cImNlbnRlclwiXHJcbiAgICAgICAgZGlzcGxheT1cImlubGluZS1ibG9ja1wiXHJcbiAgICAgICAgc3g9e3sgdGV4dFRyYW5zZm9ybTogXCJ1cHBlcmNhc2VcIiwgZm9udFdlaWdodDogXCI0MDBcIiB9fVxyXG4gICAgICA+XHJcbiAgICAgICAg0LTQviDQv9C+0LTQsNGA0LrQsCDQvtGB0YLQsNC70L7RgdGMOlxyXG4gICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICB2YXJpYW50PVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICBzeD17eyBmb250V2VpZ2h0OiBcImJvbGRcIiB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHthbW91bnRPZlF1ZXN0aW9uc30ge3F1ZXN0aW9uc31cclxuICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgPEltYWdlIHNyYz1cIi9xdWl6LWFzc2V0cy9naWZ0LnBuZ1wiIHdpZHRoPVwiMTIwXCIgaGVpZ2h0PVwiMTIwXCIgLz5cclxuICAgIDwvUGFwZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdpZnRQYXBlcjtcclxuIl0sIm5hbWVzIjpbIkltYWdlIiwiUGFwZXIiLCJUeXBvZ3JhcGh5IiwiUmVhY3QiLCJHaWZ0UGFwZXIiLCJhbW91bnRPZlF1ZXN0aW9ucyIsInF1ZXN0aW9ucyIsInN4IiwiYm94U2hhZG93IiwicGFkZGluZyIsIm1iIiwid2lkdGgiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJ2YXJpYW50IiwiYWxpZ24iLCJ0ZXh0VHJhbnNmb3JtIiwiZm9udFdlaWdodCIsInNyYyIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/quiz/GiftPaper.tsx\n");

/***/ })

});