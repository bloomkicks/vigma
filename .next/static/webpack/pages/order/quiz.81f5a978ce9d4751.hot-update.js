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

/***/ "./src/components/order/OrdersFooter.js":
/*!**********************************************!*\
  !*** ./src/components/order/OrdersFooter.js ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ui_Third__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/Third */ \"./src/components/ui/Third.js\");\n/* harmony import */ var _OrdersFooter_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./OrdersFooter.module.css */ \"./src/components/order/OrdersFooter.module.css\");\n/* harmony import */ var _OrdersFooter_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_OrdersFooter_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction _objectWithoutProperties(source, excluded) {\n    if (source == null) return {\n    };\n    var target = _objectWithoutPropertiesLoose(source, excluded);\n    var key, i;\n    if (Object.getOwnPropertySymbols) {\n        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);\n        for(i = 0; i < sourceSymbolKeys.length; i++){\n            key = sourceSymbolKeys[i];\n            if (excluded.indexOf(key) >= 0) continue;\n            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;\n            target[key] = source[key];\n        }\n    }\n    return target;\n}\nfunction _objectWithoutPropertiesLoose(source, excluded) {\n    if (source == null) return {\n    };\n    var target = {\n    };\n    var sourceKeys = Object.keys(source);\n    var key, i;\n    for(i = 0; i < sourceKeys.length; i++){\n        key = sourceKeys[i];\n        if (excluded.indexOf(key) >= 0) continue;\n        target[key] = source[key];\n    }\n    return target;\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar arrowSvg = \"/order-assets/next-arrow.svg\";\nvar OrdersFooter = function(props) {\n    _s();\n    var children = props.children, query = props.query, footerProps = _objectWithoutProperties(props, [\n        \"children\",\n        \"query\"\n    ]);\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var clickHandler = function(e) {\n        var searchParams = new URLSearchParams(router.query);\n        var lastCloset = \"\";\n        searchParams.forEach(function(value, key) {\n            return lastCloset = key;\n        });\n        searchParams.delete(lastCloset);\n        router.push(\"\".concat(location.pathname, \"?\").concat(searchParams));\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: (_OrdersFooter_module_css__WEBPACK_IMPORTED_MODULE_3___default().OrdersFooter),\n        onClick: clickHandler,\n        __source: {\n            fileName: \"C:\\\\Users\\\\glink\\\\mess\\\\vigma\\\\src\\\\components\\\\order\\\\OrdersFooter.js\",\n            lineNumber: 20,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                src: arrowSvg,\n                alt: \"Назад\",\n                className: (_OrdersFooter_module_css__WEBPACK_IMPORTED_MODULE_3___default().Arrow),\n                __source: {\n                    fileName: \"C:\\\\Users\\\\glink\\\\mess\\\\vigma\\\\src\\\\components\\\\order\\\\OrdersFooter.js\",\n                    lineNumber: 24,\n                    columnNumber: 7\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ui_Third__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\glink\\\\mess\\\\vigma\\\\src\\\\components\\\\order\\\\OrdersFooter.js\",\n                    lineNumber: 29,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: children\n            })\n        ]\n    }));\n};\n_s(OrdersFooter, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = OrdersFooter;\n/* harmony default export */ __webpack_exports__[\"default\"] = (OrdersFooter);\nvar _c;\n$RefreshReg$(_c, \"OrdersFooter\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9vcmRlci9PcmRlcnNGb290ZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXVDO0FBRVI7QUFDZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUYvQyxHQUFLLENBQUNHLFFBQVEsR0FBRyxDQUE4QjtBQUkvQyxHQUFLLENBQUNDLFlBQVksR0FBRyxRQUFRLENBQVBDLEtBQUssRUFBSyxDQUFDOztJQUMvQixHQUFLLENBQUdDLFFBQVEsR0FBNEJELEtBQUssQ0FBekNDLFFBQVEsRUFBRUMsS0FBSyxHQUFxQkYsS0FBSyxDQUEvQkUsS0FBSyxFQUFLQyxXQUFXLDRCQUFLSCxLQUFLO1FBQXpDQyxDQUFRO1FBQUVDLENBQUs7O0lBQ3ZCLEdBQUssQ0FBQ0UsTUFBTSxHQUFHVCxzREFBUztJQUV4QixHQUFLLENBQUNVLFlBQVksR0FBRyxRQUFRLENBQVBDLENBQUMsRUFBSyxDQUFDO1FBQzNCLEdBQUssQ0FBQ0MsWUFBWSxHQUFHLEdBQUcsQ0FBQ0MsZUFBZSxDQUFDSixNQUFNLENBQUNGLEtBQUs7UUFDckQsR0FBRyxDQUFDTyxVQUFVLEdBQUcsQ0FBRTtRQUNuQkYsWUFBWSxDQUFDRyxPQUFPLENBQUMsUUFBUUMsQ0FBUEMsS0FBSyxFQUFFRCxHQUFHO1lBQUssTUFBTSxDQUFMRixVQUFVLEdBQUdFLEdBQUc7O1FBQ3RESixZQUFZLENBQUNNLE1BQU0sQ0FBQ0osVUFBVTtRQUU5QkwsTUFBTSxDQUFDVSxJQUFJLENBQUUsR0FBdUJQLE1BQVksQ0FBakNRLFFBQVEsQ0FBQ0MsUUFBUSxFQUFDLENBQUMsSUFBZSxPQUFiVCxZQUFZO0lBQ2xELENBQUM7SUFFRCxNQUFNLHVFQUNIVSxDQUFHO1FBQUNDLFNBQVMsRUFBRXJCLDhFQUFvQjtRQUVoQ3NCLE9BQU8sRUFBRWQsWUFBWTs7Ozs7Ozs7aUZBRXRCZSxDQUFHO2dCQUNGQyxHQUFHLEVBQUV2QixRQUFRO2dCQUNid0IsR0FBRyxFQUFDLENBQU87Z0JBQ1hKLFNBQVMsRUFBRXJCLHVFQUFhOzs7Ozs7OztpRkFFekJELGlEQUFLOzs7Ozs7OzBCQUFFSyxRQUFROzs7O0FBR3RCLENBQUM7R0ExQktGLFlBQVk7O1FBRURKLGtEQUFTOzs7S0FGcEJJLFlBQVk7QUE0QmxCLCtEQUFlQSxZQUFZLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvb3JkZXIvT3JkZXJzRm9vdGVyLmpzPzAwZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmNvbnN0IGFycm93U3ZnID0gXCIvb3JkZXItYXNzZXRzL25leHQtYXJyb3cuc3ZnXCI7XHJcbmltcG9ydCBUaGlyZCBmcm9tIFwiLi4vdWkvVGhpcmRcIjtcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vT3JkZXJzRm9vdGVyLm1vZHVsZS5jc3NcIjtcclxuXHJcbmNvbnN0IE9yZGVyc0Zvb3RlciA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgY2hpbGRyZW4sIHF1ZXJ5LCAuLi5mb290ZXJQcm9wcyB9ID0gcHJvcHM7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IGNsaWNrSGFuZGxlciA9IChlKSA9PiB7XHJcbiAgICBjb25zdCBzZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHJvdXRlci5xdWVyeSk7XHJcbiAgICBsZXQgbGFzdENsb3NldCA9IFwiXCI7XHJcbiAgICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4gKGxhc3RDbG9zZXQgPSBrZXkpKTtcclxuICAgIHNlYXJjaFBhcmFtcy5kZWxldGUobGFzdENsb3NldClcclxuXHJcbiAgICByb3V0ZXIucHVzaChgJHtsb2NhdGlvbi5wYXRobmFtZX0/JHtzZWFyY2hQYXJhbXN9YCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLk9yZGVyc0Zvb3Rlcn1cclxuICAgIFxyXG4gICAgICAgIG9uQ2xpY2s9e2NsaWNrSGFuZGxlcn1cclxuICAgID5cclxuICAgICAgPGltZ1xyXG4gICAgICAgIHNyYz17YXJyb3dTdmd9XHJcbiAgICAgICAgYWx0PVwi0J3QsNC30LDQtFwiXHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLkFycm93fVxyXG4gICAgICAvPlxyXG4gICAgICA8VGhpcmQ+e2NoaWxkcmVufTwvVGhpcmQ+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgT3JkZXJzRm9vdGVyO1xyXG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiVGhpcmQiLCJjbGFzc2VzIiwiYXJyb3dTdmciLCJPcmRlcnNGb290ZXIiLCJwcm9wcyIsImNoaWxkcmVuIiwicXVlcnkiLCJmb290ZXJQcm9wcyIsInJvdXRlciIsImNsaWNrSGFuZGxlciIsImUiLCJzZWFyY2hQYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJsYXN0Q2xvc2V0IiwiZm9yRWFjaCIsImtleSIsInZhbHVlIiwiZGVsZXRlIiwicHVzaCIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiaW1nIiwic3JjIiwiYWx0IiwiQXJyb3ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/order/OrdersFooter.js\n");

/***/ })

});