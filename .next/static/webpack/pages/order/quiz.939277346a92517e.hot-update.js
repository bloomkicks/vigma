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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Paper */ \"./node_modules/@mui/material/Paper/Paper.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Typography */ \"./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _this = undefined;\nvar GiftPaper = function(param) {\n    var _amountOfQuestions = param.amountOfQuestions, amountOfQuestions = _amountOfQuestions === void 0 ? 5 : _amountOfQuestions;\n    var questions = \"вопросов\";\n    switch(amountOfQuestions){\n        case 1:\n            questions = \"вопрос\";\n            break;\n        case 2:\n        case 3:\n        case 4:\n            questions = \"вопроса\";\n            break;\n    }\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        sx: {\n            boxShadow: \"none\",\n            padding: 2,\n            mb: 3,\n            width: \"80%\"\n        },\n        __source: {\n            fileName: \"C:\\\\Users\\\\bloom\\\\vigma\\\\code\\\\src\\\\components\\\\quiz\\\\GiftPaper.tsx\",\n            lineNumber: 22,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            variant: \"h2\",\n            align: \"cente\",\n            sx: {\n                textTransform: \"uppercase\",\n                fontWeight: \"400\"\n            },\n            __source: {\n                fileName: \"C:\\\\Users\\\\bloom\\\\vigma\\\\code\\\\src\\\\components\\\\quiz\\\\GiftPaper.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            },\n            __self: _this,\n            children: [\n                \"до подарка осталось:\",\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    variant: \"inherit\",\n                    sx: {\n                        fontWeight: \"bold\"\n                    },\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\bloom\\\\vigma\\\\code\\\\src\\\\components\\\\quiz\\\\GiftPaper.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: [\n                        amountOfQuestions,\n                        \" \",\n                        questions\n                    ]\n                })\n            ]\n        })\n    }));\n};\n_c = GiftPaper;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GiftPaper);\nvar _c;\n$RefreshReg$(_c, \"GiftPaper\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9xdWl6L0dpZnRQYXBlci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF1QztBQUNVO0FBQ3hCOztBQUV6QixHQUFLLENBQUNHLFNBQVMsR0FBRyxRQUNkLFFBR0UsQ0FBQzttQ0FITEMsaUJBQWlCLEVBQWpCQSxpQkFBaUIsbUNBQUcsQ0FBQztJQUlyQixHQUFHLENBQUNDLFNBQVMsR0FBRyxDQUFVO0lBQ2xCLE1BQUYsQ0FBRUQsaUJBQWlCO1FBQ3ZCLElBQUksQ0FBQyxDQUFDO1lBQ0pDLFNBQVMsR0FBRyxDQUFRO1lBQ2QsS0FBRDtRQUNQLElBQUksQ0FBQyxDQUFDO1FBQ04sSUFBSSxDQUFDLENBQUM7UUFDTixJQUFJLENBQUMsQ0FBQztZQUNKQSxTQUFTLEdBQUcsQ0FBUztZQUNkLEtBQUY7O0lBRVQsTUFBTSxzRUFDSEwsMkRBQUs7UUFDSk0sRUFBRSxFQUFFLENBQUM7WUFDSEMsU0FBUyxFQUFFLENBQU07WUFDakJDLE9BQU8sRUFBRSxDQUFDO1lBQ1ZDLEVBQUUsRUFBRSxDQUFDO1lBQ0xDLEtBQUssRUFBRSxDQUFLO1FBQ2QsQ0FBQzs7Ozs7Ozt3RkFFQVQsZ0VBQVU7WUFDVFUsT0FBTyxFQUFDLENBQUk7WUFDWkMsS0FBSyxFQUFDLENBQU87WUFDYk4sRUFBRSxFQUFFLENBQUM7Z0JBQUNPLGFBQWEsRUFBRSxDQUFXO2dCQUFFQyxVQUFVLEVBQUUsQ0FBSztZQUFDLENBQUM7Ozs7Ozs7O2dCQUN0RCxDQUVDO3NGQUFDYixnRUFBVTtvQkFDVFUsT0FBTyxFQUFDLENBQVM7b0JBQ2pCTCxFQUFFLEVBQUUsQ0FBQzt3QkFBQ1EsVUFBVSxFQUFFLENBQU07b0JBQUMsQ0FBQzs7Ozs7Ozs7d0JBRXpCVixpQkFBaUI7d0JBQUMsQ0FBQzt3QkFBQ0MsU0FBUzs7Ozs7O0FBS3hDLENBQUM7S0F4Q0tGLFNBQVM7QUEwQ2YsK0RBQWVBLFNBQVMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9xdWl6L0dpZnRQYXBlci50c3g/OGNlMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFwZXIgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvUGFwZXJcIjtcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeVwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBHaWZ0UGFwZXIgPSAoe1xyXG4gIGFtb3VudE9mUXVlc3Rpb25zID0gNSxcclxufToge1xyXG4gIGFtb3VudE9mUXVlc3Rpb25zOiBudW1iZXI7XHJcbn0pID0+IHtcclxuICBsZXQgcXVlc3Rpb25zID0gXCLQstC+0L/RgNC+0YHQvtCyXCI7XHJcbiAgc3dpdGNoIChhbW91bnRPZlF1ZXN0aW9ucykge1xyXG4gICAgY2FzZSAxOlxyXG4gICAgICBxdWVzdGlvbnMgPSBcItCy0L7Qv9GA0L7RgVwiO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgMjpcclxuICAgIGNhc2UgMzpcclxuICAgIGNhc2UgNDpcclxuICAgICAgcXVlc3Rpb25zID0gXCLQstC+0L/RgNC+0YHQsFwiO1xyXG4gICAgICBicmVhaztcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxQYXBlclxyXG4gICAgICBzeD17e1xyXG4gICAgICAgIGJveFNoYWRvdzogXCJub25lXCIsXHJcbiAgICAgICAgcGFkZGluZzogMixcclxuICAgICAgICBtYjogMyxcclxuICAgICAgICB3aWR0aDogXCI4MCVcIixcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICB2YXJpYW50PVwiaDJcIlxyXG4gICAgICAgIGFsaWduPVwiY2VudGVcIlxyXG4gICAgICAgIHN4PXt7IHRleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCIsIGZvbnRXZWlnaHQ6IFwiNDAwXCIgfX1cclxuICAgICAgPlxyXG4gICAgICAgINC00L4g0L/QvtC00LDRgNC60LAg0L7RgdGC0LDQu9C+0YHRjDpcclxuICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgdmFyaWFudD1cImluaGVyaXRcIlxyXG4gICAgICAgICAgc3g9e3sgZm9udFdlaWdodDogXCJib2xkXCIgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7YW1vdW50T2ZRdWVzdGlvbnN9IHtxdWVzdGlvbnN9XHJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICA8L1BhcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHaWZ0UGFwZXI7XHJcbiJdLCJuYW1lcyI6WyJQYXBlciIsIlR5cG9ncmFwaHkiLCJSZWFjdCIsIkdpZnRQYXBlciIsImFtb3VudE9mUXVlc3Rpb25zIiwicXVlc3Rpb25zIiwic3giLCJib3hTaGFkb3ciLCJwYWRkaW5nIiwibWIiLCJ3aWR0aCIsInZhcmlhbnQiLCJhbGlnbiIsInRleHRUcmFuc2Zvcm0iLCJmb250V2VpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/quiz/GiftPaper.tsx\n");

/***/ })

});