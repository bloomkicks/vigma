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

/***/ "./src/components/quiz/Page.tsx":
/*!**************************************!*\
  !*** ./src/components/quiz/Page.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _quiz_List__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quiz/List */ \"./src/components/quiz/quiz/List.tsx\");\n/* harmony import */ var _GiftPaper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GiftPaper */ \"./src/components/quiz/GiftPaper.tsx\");\n/* harmony import */ var _Actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Actions */ \"./src/components/quiz/Actions.tsx\");\n/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Stack */ \"./node_modules/@mui/material/Stack/Stack.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Typography */ \"./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Page = function() {\n    _s();\n    var quizState = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function(state) {\n        return state.quiz;\n    });\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        alignItems: \"center\",\n        sx: {\n            pt: 4\n        },\n        __source: {\n            fileName: \"C:\\\\Users\\\\bloom\\\\vigma\\\\code\\\\src\\\\components\\\\quiz\\\\Page.tsx\",\n            lineNumber: 17,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_GiftPaper__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                amountOfQuestions: (quizState.categoryQuestions ? quizState.categoryQuestions.length : 2) - quizState.indexOfQuestion,\n                __source: {\n                    fileName: \"C:\\\\Users\\\\bloom\\\\vigma\\\\code\\\\src\\\\components\\\\quiz\\\\Page.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 7\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                variant: \"h1\",\n                mb: 1.5,\n                align: \"center\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\bloom\\\\vigma\\\\code\\\\src\\\\components\\\\quiz\\\\Page.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: quizState.currentQuestion\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_quiz_List__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                answers: quizState.availableAnswers,\n                selectedAnswers: quizState.selectedAnswers,\n                __source: {\n                    fileName: \"C:\\\\Users\\\\bloom\\\\vigma\\\\code\\\\src\\\\components\\\\quiz\\\\Page.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 7\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Actions__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                indexOfQuestion: quizState.indexOfQuestion,\n                __source: {\n                    fileName: \"C:\\\\Users\\\\bloom\\\\vigma\\\\code\\\\src\\\\components\\\\quiz\\\\Page.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 7\n                },\n                __self: _this\n            })\n        ]\n    }));\n};\n_s(Page, \"Uq3tIUxE2xj/NQ2mxi/B/HsHXjY=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector\n    ];\n});\n_c = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9xdWl6L1BhZ2UudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ3lDO0FBRVg7QUFDSztBQUNKO0FBQ1E7QUFDVTtBQUN4Qjs7O0FBRXpCLEdBQUssQ0FBQ08sSUFBSSxHQUFHLFFBQVEsR0FBRixDQUFDOztJQUNsQixHQUFLLENBQUNDLFNBQVMsR0FBR1Isd0RBQVcsQ0FDM0IsUUFBUSxDQUFQUyxLQUFnQjtRQUFLQSxNQUFNQyxDQUFORCxLQUFLLENBQUNDLElBQUk7O0lBR2xDLE1BQU0sdUVBQ0hOLDJEQUFLO1FBQUNPLFVBQVUsRUFBQyxDQUFRO1FBQUNDLEVBQUUsRUFBRSxDQUFDO1lBQUNDLEVBQUUsRUFBRSxDQUFDO1FBQUMsQ0FBQzs7Ozs7Ozs7aUZBQ3JDWCxrREFBUztnQkFDUlksaUJBQWlCLEdBQ2ROLFNBQVMsQ0FBQ08saUJBQWlCLEdBQ3hCUCxTQUFTLENBQUNPLGlCQUFpQixDQUFFQyxNQUFNLEdBQ25DLENBQUMsSUFBSVIsU0FBUyxDQUFDUyxlQUFlOzs7Ozs7OztpRkFHckNaLGdFQUFVO2dCQUFDYSxPQUFPLEVBQUMsQ0FBSTtnQkFBQ0MsRUFBRSxFQUFFLEdBQUc7Z0JBQUVDLEtBQUssRUFBQyxDQUFROzs7Ozs7OzBCQUM3Q1osU0FBUyxDQUFDYSxlQUFlOztpRkFFM0JwQixrREFBSTtnQkFBQ3FCLE9BQU8sRUFBRWQsU0FBUyxDQUFDZSxnQkFBZ0I7Z0JBQUVDLGVBQWUsRUFBRWhCLFNBQVMsQ0FBQ2dCLGVBQWU7Ozs7Ozs7O2lGQUNwRnJCLGdEQUFPO2dCQUFDYyxlQUFlLEVBQUVULFNBQVMsQ0FBQ1MsZUFBZTs7Ozs7Ozs7OztBQUd6RCxDQUFDO0dBckJLVixJQUFJOztRQUNVUCxvREFBVzs7O0tBRHpCTyxJQUFJO0FBdUJWLCtEQUFlQSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcXVpei9QYWdlLnRzeD9hNjM0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gXCIuLi8uLi9zdG9yZVwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5cclxuaW1wb3J0IExpc3QgZnJvbSBcIi4vcXVpei9MaXN0XCI7XHJcbmltcG9ydCBHaWZ0UGFwZXIgZnJvbSBcIi4vR2lmdFBhcGVyXCI7XHJcbmltcG9ydCBBY3Rpb25zIGZyb20gXCIuL0FjdGlvbnNcIjtcclxuaW1wb3J0IFN0YWNrIGZyb20gXCJAbXVpL21hdGVyaWFsL1N0YWNrXCI7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHlcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgUGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBxdWl6U3RhdGUgPSB1c2VTZWxlY3RvcihcclxuICAgIChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS5xdWl6XHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTdGFjayBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgc3g9e3sgcHQ6IDQgfX0+XHJcbiAgICAgIDxHaWZ0UGFwZXJcclxuICAgICAgICBhbW91bnRPZlF1ZXN0aW9ucz17XHJcbiAgICAgICAgICAocXVpelN0YXRlLmNhdGVnb3J5UXVlc3Rpb25zXHJcbiAgICAgICAgICAgID8gcXVpelN0YXRlLmNhdGVnb3J5UXVlc3Rpb25zIS5sZW5ndGhcclxuICAgICAgICAgICAgOiAyKSAtIHF1aXpTdGF0ZS5pbmRleE9mUXVlc3Rpb25cclxuICAgICAgICB9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoMVwiIG1iPXsxLjV9IGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAge3F1aXpTdGF0ZS5jdXJyZW50UXVlc3Rpb259XHJcbiAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgPExpc3QgYW5zd2Vycz17cXVpelN0YXRlLmF2YWlsYWJsZUFuc3dlcnN9IHNlbGVjdGVkQW5zd2Vycz17cXVpelN0YXRlLnNlbGVjdGVkQW5zd2Vyc30gLz5cclxuICAgICAgPEFjdGlvbnMgaW5kZXhPZlF1ZXN0aW9uPXtxdWl6U3RhdGUuaW5kZXhPZlF1ZXN0aW9ufSAvPlxyXG4gICAgPC9TdGFjaz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZTtcclxuIl0sIm5hbWVzIjpbInVzZVNlbGVjdG9yIiwiTGlzdCIsIkdpZnRQYXBlciIsIkFjdGlvbnMiLCJTdGFjayIsIlR5cG9ncmFwaHkiLCJSZWFjdCIsIlBhZ2UiLCJxdWl6U3RhdGUiLCJzdGF0ZSIsInF1aXoiLCJhbGlnbkl0ZW1zIiwic3giLCJwdCIsImFtb3VudE9mUXVlc3Rpb25zIiwiY2F0ZWdvcnlRdWVzdGlvbnMiLCJsZW5ndGgiLCJpbmRleE9mUXVlc3Rpb24iLCJ2YXJpYW50IiwibWIiLCJhbGlnbiIsImN1cnJlbnRRdWVzdGlvbiIsImFuc3dlcnMiLCJhdmFpbGFibGVBbnN3ZXJzIiwic2VsZWN0ZWRBbnN3ZXJzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/quiz/Page.tsx\n");

/***/ })

});