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

/***/ "./src/components/quiz/Actions.tsx":
/*!*****************************************!*\
  !*** ./src/components/quiz/Actions.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var _store_quiz__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/quiz */ \"./src/store/quiz.ts\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Stack */ \"./node_modules/@mui/material/Stack/Stack.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Typography */ \"./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Button */ \"./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Actions = function(param) {\n    var indexOfQuestion = param.indexOfQuestion;\n    var nextHandler = function nextHandler() {\n        dispatch(_store_quiz__WEBPACK_IMPORTED_MODULE_1__.quizActions.nextQuestion());\n    };\n    var backHandler = function backHandler() {\n        dispatch(_store_quiz__WEBPACK_IMPORTED_MODULE_1__.quizActions.previousQuestion());\n    };\n    _s();\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        direction: \"row\",\n        spacing: 2,\n        __source: {\n            fileName: \"C:\\\\Users\\\\bloom\\\\vigma\\\\code\\\\src\\\\components\\\\quiz\\\\Actions.tsx\",\n            lineNumber: 26,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                variant: \"text\",\n                onClick: backHandler,\n                sx: {\n                    display: indexOfQuestion === -1 ? \"block\" : \"none\"\n                },\n                __source: {\n                    fileName: \"C:\\\\Users\\\\bloom\\\\vigma\\\\code\\\\src\\\\components\\\\quiz\\\\Actions.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    variant: \"inherit\",\n                    color: \"text.secondary\",\n                    position: \"relative\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\bloom\\\\vigma\\\\code\\\\src\\\\components\\\\quiz\\\\Actions.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            component: \"span\",\n                            sx: {\n                                width: \"101%\",\n                                height: \"1.3px\",\n                                position: \"absolute\",\n                                left: \"50%\",\n                                bottom: 4,\n                                transform: \"translateX(-50%)\",\n                                bgcolor: \"text.secondary\",\n                                opacity: \"0.8\"\n                            },\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\bloom\\\\vigma\\\\code\\\\src\\\\components\\\\quiz\\\\Actions.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 11\n                            },\n                            __self: _this\n                        }),\n                        \"Назад\"\n                    ]\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                variant: \"contained\",\n                color: \"info\",\n                onClick: nextHandler,\n                __source: {\n                    fileName: \"C:\\\\Users\\\\bloom\\\\vigma\\\\code\\\\src\\\\components\\\\quiz\\\\Actions.tsx\",\n                    lineNumber: 55,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: \"Далее\"\n            })\n        ]\n    }));\n};\n_s(Actions, \"rgTLoBID190wEKCp9+G8W6F7A5M=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch\n    ];\n});\n_c = Actions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Actions);\nvar _c;\n$RefreshReg$(_c, \"Actions\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9xdWl6L0FjdGlvbnMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQThDO0FBQ0w7QUFFRjtBQUNVO0FBQ1I7QUFDTjtBQUNWOzs7QUFFekIsR0FBSyxDQUFDTyxPQUFPLEdBQUcsUUFDWixRQUdFLENBQUM7UUFITEMsZUFBZSxTQUFmQSxlQUFlO1FBTU5DLFdBQVcsR0FBcEIsUUFBUSxDQUFDQSxXQUFXLEdBQUcsQ0FBQztRQUN0QkMsUUFBUSxDQUFDVixpRUFBd0I7SUFDbkMsQ0FBQztRQUVRWSxXQUFXLEdBQXBCLFFBQVEsQ0FBQ0EsV0FBVyxHQUFHLENBQUM7UUFDdEJGLFFBQVEsQ0FBQ1YscUVBQTRCO0lBQ3ZDLENBQUM7O0lBUkQsR0FBSyxDQUFDVSxRQUFRLEdBQUdULHdEQUFXO0lBVTVCLE1BQU0sdUVBQ0hDLDJEQUFLO1FBQUNZLFNBQVMsRUFBQyxDQUFLO1FBQUNDLE9BQU8sRUFBRSxDQUFDOzs7Ozs7OztpRkFDOUJYLDREQUFNO2dCQUNMWSxPQUFPLEVBQUMsQ0FBTTtnQkFDZEMsT0FBTyxFQUFFTCxXQUFXO2dCQUNwQk0sRUFBRSxFQUFFLENBQUM7b0JBQ0hDLE9BQU8sRUFBRVgsZUFBZSxNQUFNLENBQUMsR0FBRyxDQUFPLFNBQUcsQ0FBTTtnQkFDcEQsQ0FBQzs7Ozs7OztnR0FFQUwsZ0VBQVU7b0JBQ1RhLE9BQU8sRUFBQyxDQUFTO29CQUNqQkksS0FBSyxFQUFDLENBQWdCO29CQUN0QkMsUUFBUSxFQUFDLENBQVU7Ozs7Ozs7OzZGQUVsQmhCLHlEQUFHOzRCQUNGaUIsU0FBUyxFQUFDLENBQU07NEJBQ2hCSixFQUFFLEVBQUUsQ0FBQztnQ0FDSEssS0FBSyxFQUFFLENBQU07Z0NBQ2JDLE1BQU0sRUFBRSxDQUFPO2dDQUNmSCxRQUFRLEVBQUUsQ0FBVTtnQ0FDcEJJLElBQUksRUFBRSxDQUFLO2dDQUNYQyxNQUFNLEVBQUUsQ0FBQztnQ0FDVEMsU0FBUyxFQUFFLENBQWtCO2dDQUM3QkMsT0FBTyxFQUFFLENBQWdCO2dDQUN6QkMsT0FBTyxFQUFFLENBQUs7NEJBQ2hCLENBQUM7Ozs7Ozs7O3dCQUNJLENBRVQ7Ozs7aUZBRUR6Qiw0REFBTTtnQkFDTFksT0FBTyxFQUFDLENBQVc7Z0JBQ25CSSxLQUFLLEVBQUMsQ0FBTTtnQkFDWkgsT0FBTyxFQUFFUixXQUFXOzs7Ozs7OzBCQUNyQixDQUVEOzs7O0FBR04sQ0FBQztHQXRES0YsT0FBTzs7UUFLTU4sb0RBQVc7OztLQUx4Qk0sT0FBTztBQXdEYiwrREFBZUEsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3F1aXovQWN0aW9ucy50c3g/ZjBhNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBxdWl6QWN0aW9ucyB9IGZyb20gXCIuLi8uLi9zdG9yZS9xdWl6XCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcblxyXG5pbXBvcnQgU3RhY2sgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvU3RhY2tcIjtcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeVwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbXVpL21hdGVyaWFsL0J1dHRvblwiO1xyXG5pbXBvcnQgQm94IGZyb20gXCJAbXVpL21hdGVyaWFsL0JveFwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBBY3Rpb25zID0gKHtcclxuICBpbmRleE9mUXVlc3Rpb24sXHJcbn06IHtcclxuICBpbmRleE9mUXVlc3Rpb246IG51bWJlcjtcclxufSkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dEhhbmRsZXIoKSB7XHJcbiAgICBkaXNwYXRjaChxdWl6QWN0aW9ucy5uZXh0UXVlc3Rpb24oKSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBiYWNrSGFuZGxlcigpIHtcclxuICAgIGRpc3BhdGNoKHF1aXpBY3Rpb25zLnByZXZpb3VzUXVlc3Rpb24oKSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFN0YWNrIGRpcmVjdGlvbj1cInJvd1wiIHNwYWNpbmc9ezJ9PlxyXG4gICAgICA8QnV0dG9uXHJcbiAgICAgICAgdmFyaWFudD1cInRleHRcIlxyXG4gICAgICAgIG9uQ2xpY2s9e2JhY2tIYW5kbGVyfVxyXG4gICAgICAgIHN4PXt7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmRleE9mUXVlc3Rpb24gPT09IC0xID8gXCJibG9ja1wiIDogXCJub25lXCIsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICB2YXJpYW50PVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCJcclxuICAgICAgICAgIHBvc2l0aW9uPVwicmVsYXRpdmVcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXHJcbiAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IFwiMTAxJVwiLFxyXG4gICAgICAgICAgICAgIGhlaWdodDogXCIxLjNweFwiLFxyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgICAgICAgbGVmdDogXCI1MCVcIixcclxuICAgICAgICAgICAgICBib3R0b206IDQsXHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZVgoLTUwJSlcIixcclxuICAgICAgICAgICAgICBiZ2NvbG9yOiBcInRleHQuc2Vjb25kYXJ5XCIsXHJcbiAgICAgICAgICAgICAgb3BhY2l0eTogXCIwLjhcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID48L0JveD5cclxuICAgICAgICAgINCd0LDQt9Cw0LRcclxuICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8QnV0dG9uXHJcbiAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgY29sb3I9XCJpbmZvXCJcclxuICAgICAgICBvbkNsaWNrPXtuZXh0SGFuZGxlcn1cclxuICAgICAgPlxyXG4gICAgICAgINCU0LDQu9C10LVcclxuICAgICAgPC9CdXR0b24+XHJcbiAgICA8L1N0YWNrPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBY3Rpb25zO1xyXG4iXSwibmFtZXMiOlsicXVpekFjdGlvbnMiLCJ1c2VEaXNwYXRjaCIsIlN0YWNrIiwiVHlwb2dyYXBoeSIsIkJ1dHRvbiIsIkJveCIsIlJlYWN0IiwiQWN0aW9ucyIsImluZGV4T2ZRdWVzdGlvbiIsIm5leHRIYW5kbGVyIiwiZGlzcGF0Y2giLCJuZXh0UXVlc3Rpb24iLCJiYWNrSGFuZGxlciIsInByZXZpb3VzUXVlc3Rpb24iLCJkaXJlY3Rpb24iLCJzcGFjaW5nIiwidmFyaWFudCIsIm9uQ2xpY2siLCJzeCIsImRpc3BsYXkiLCJjb2xvciIsInBvc2l0aW9uIiwiY29tcG9uZW50Iiwid2lkdGgiLCJoZWlnaHQiLCJsZWZ0IiwiYm90dG9tIiwidHJhbnNmb3JtIiwiYmdjb2xvciIsIm9wYWNpdHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/quiz/Actions.tsx\n");

/***/ })

});