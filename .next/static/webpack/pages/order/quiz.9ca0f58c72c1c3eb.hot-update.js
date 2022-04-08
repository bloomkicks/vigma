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

/***/ "./src/components/order/OrderSection.js":
/*!**********************************************!*\
  !*** ./src/components/order/OrderSection.js ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ui_Secondary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/Secondary */ \"./src/components/ui/Secondary.js\");\n/* harmony import */ var _ui_Section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/Section */ \"./src/components/ui/Section.js\");\n/* harmony import */ var _OrderSection_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./OrderSection.module.scss */ \"./src/components/order/OrderSection.module.scss\");\n/* harmony import */ var _OrderSection_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_OrderSection_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _storage_order_translations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../storage/order-translations */ \"./src/storage/order-translations.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) {\n        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++){\n            arr2[i] = arr[i];\n        }\n        return arr2;\n    }\n}\nfunction _iterableToArray(iter) {\n    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance\");\n}\nfunction _objectWithoutProperties(source, excluded) {\n    if (source == null) return {\n    };\n    var target = _objectWithoutPropertiesLoose(source, excluded);\n    var key, i;\n    if (Object.getOwnPropertySymbols) {\n        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);\n        for(i = 0; i < sourceSymbolKeys.length; i++){\n            key = sourceSymbolKeys[i];\n            if (excluded.indexOf(key) >= 0) continue;\n            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;\n            target[key] = source[key];\n        }\n    }\n    return target;\n}\nfunction _objectWithoutPropertiesLoose(source, excluded) {\n    if (source == null) return {\n    };\n    var target = {\n    };\n    var sourceKeys = Object.keys(source);\n    var key, i;\n    for(i = 0; i < sourceKeys.length; i++){\n        key = sourceKeys[i];\n        if (excluded.indexOf(key) >= 0) continue;\n        target[key] = source[key];\n    }\n    return target;\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar customSrc = \"/order-assets/custom.jpg\";\nvar bodySrc = \"/order-assets/materials/body/egger.jpg\";\nvar frontSrc = \"/order-assets/materials/front/plastic.jpg\";\nvar OrderSection = function(props) {\n    var getAllQueries = function getAllQueries(query, param) {\n        var format = param === void 0 ? function(q) {\n            return q;\n        } : param;\n        var _searchParams;\n        var formattedQuery = format(query.slice(1).split(\"=\"));\n        var searchParams = new URLSearchParams(router.query);\n        searchParams.delete(formattedQuery[0]);\n        (_searchParams = searchParams).append.apply(_searchParams, _toConsumableArray(formattedQuery));\n        return searchParams;\n    };\n    _s();\n    var initImgSrc = props.imgSrc, custom = props.custom, query1 = props.query, isBody = props.isBody, isFront = props.isFront, title = props.title, name = props.name, sectionProps = _objectWithoutProperties(props, [\n        \"imgSrc\",\n        \"custom\",\n        \"query\",\n        \"isBody\",\n        \"isFront\",\n        \"title\",\n        \"name\"\n    ]);\n    var imgSrc = custom ? customSrc : isBody ? bodySrc : isFront ? frontSrc : initImgSrc;\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var allQueries = getAllQueries(query1);\n    var inputHandler = function(e) {\n        allQueries = getAllQueries(query1, function(q) {\n            q[1] = e.target.value;\n            return q;\n        });\n    };\n    var orderClickHandler = function(e) {\n        var url = \"\".concat(router.pathname, \"?\").concat(allQueries);\n        if (allQueries.has(\"bundle\") || allQueries.keys.length === 0 && custom) url = \"/order?\".concat(allQueries);\n        allQueries = getAllQueries(query1);\n        router.push(url);\n    };\n    var value = !allQueries.has(\"bundle\") && allQueries.has(\"category\") && allQueries.get(name) !== \"current\" && _storage_order_translations__WEBPACK_IMPORTED_MODULE_4__[\"default\"][allQueries.get(name)];\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_ui_Section__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        className: (_OrderSection_module_scss__WEBPACK_IMPORTED_MODULE_5___default().OrderSection),\n        onClick: orderClickHandler,\n        __source: {\n            fileName: \"C:\\\\Users\\\\glink\\\\mess\\\\vigma\\\\src\\\\components\\\\order\\\\OrderSection.js\",\n            lineNumber: 72,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                src: custom ? customSrc : imgSrc,\n                __source: {\n                    fileName: \"C:\\\\Users\\\\glink\\\\mess\\\\vigma\\\\src\\\\components\\\\order\\\\OrderSection.js\",\n                    lineNumber: 76,\n                    columnNumber: 7\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: (_OrderSection_module_scss__WEBPACK_IMPORTED_MODULE_5___default().Title),\n                __source: {\n                    fileName: \"C:\\\\Users\\\\glink\\\\mess\\\\vigma\\\\src\\\\components\\\\order\\\\OrderSection.js\",\n                    lineNumber: 77,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: custom ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                    type: \"text\",\n                    placeholder: \"Ваш Вариант\",\n                    onInput: inputHandler,\n                    onClick: function(e) {\n                        return e.stopPropagation();\n                    },\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\glink\\\\mess\\\\vigma\\\\src\\\\components\\\\order\\\\OrderSection.js\",\n                        lineNumber: 79,\n                        columnNumber: 11\n                    },\n                    __self: _this\n                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_ui_Secondary__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\glink\\\\mess\\\\vigma\\\\src\\\\components\\\\order\\\\OrderSection.js\",\n                        lineNumber: 86,\n                        columnNumber: 11\n                    },\n                    __self: _this,\n                    children: [\n                        title,\n                        value && \": \",\n                        value && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"b\", {\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\glink\\\\mess\\\\vigma\\\\src\\\\components\\\\order\\\\OrderSection.js\",\n                                lineNumber: 89,\n                                columnNumber: 23\n                            },\n                            __self: _this,\n                            children: value\n                        })\n                    ]\n                })\n            })\n        ]\n    }));\n};\n_s(OrderSection, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = OrderSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (OrderSection);\nvar _c;\n$RefreshReg$(_c, \"OrderSection\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9vcmRlci9PcmRlclNlY3Rpb24uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBdUM7QUFDQTtBQUNKO0FBQ2E7QUFFZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWhFLEdBQUssQ0FBQ0ssU0FBUyxHQUFHLENBQTBCO0FBQzVDLEdBQUssQ0FBQ0MsT0FBTyxHQUFHLENBQXdDO0FBQ3hELEdBQUssQ0FBQ0MsUUFBUSxHQUNaLENBQTJDO0FBRTdDLEdBQUssQ0FBQ0MsWUFBWSxHQUFHLFFBQVEsQ0FBUEMsS0FBSyxFQUFLLENBQUM7UUFzQnRCQyxhQUFhLEdBQXRCLFFBQVEsQ0FBQ0EsYUFBYSxDQUFDQyxLQUFLLEVBQUVDLEtBQWlCLEVBQUUsQ0FBQztZQUFwQkEsTUFBTSxHQUFOQSxLQUFpQixjQUFSLFFBQVEsQ0FBUEMsQ0FBQztZQUFLQSxNQUNoRCxDQURnREEsQ0FBQztZQUFqQkQsS0FBaUI7WUFNN0NFLGFBQVk7UUFMWixHQUFLLENBQUNDLGNBQWMsR0FBR0gsTUFBTSxDQUMzQkQsS0FBSyxDQUFDSyxLQUFLLENBQUMsQ0FBQyxFQUFFQyxLQUFLLENBQUMsQ0FBRztRQUUxQixHQUFLLENBQUNILFlBQVksR0FBRyxHQUFHLENBQUNJLGVBQWUsQ0FBQ0MsTUFBTSxDQUFDUixLQUFLO1FBQ3JERyxZQUFZLENBQUNNLE1BQU0sQ0FBQ0wsY0FBYyxDQUFDLENBQUM7U0FDcENELGFBQVksR0FBWkEsWUFBWSxFQUFDTyxNQUFNLENBQW5CUCxLQUFzQyxDQUF0Q0EsYUFBWSxxQkFBV0MsY0FBYztRQUNyQyxNQUFNLENBQUNELFlBQVk7SUFDckIsQ0FBQzs7SUE3QkQsR0FBSyxDQUNLUSxVQUFVLEdBUWhCYixLQUFLLENBUlBjLE1BQU0sRUFDTkMsTUFBTSxHQU9KZixLQUFLLENBUFBlLE1BQU0sRUFDTmIsTUFBSyxHQU1IRixLQUFLLENBTlBFLEtBQUssRUFDTGMsTUFBTSxHQUtKaEIsS0FBSyxDQUxQZ0IsTUFBTSxFQUNOQyxPQUFPLEdBSUxqQixLQUFLLENBSlBpQixPQUFPLEVBQ1BDLEtBQUssR0FHSGxCLEtBQUssQ0FIUGtCLEtBQUssRUFDTEMsSUFBSSxHQUVGbkIsS0FBSyxDQUZQbUIsSUFBSSxFQUNEQyxZQUFZLDRCQUNicEIsS0FBSztRQVJQYyxDQUFNO1FBQ05DLENBQU07UUFDTmIsQ0FBSztRQUNMYyxDQUFNO1FBQ05DLENBQU87UUFDUEMsQ0FBSztRQUNMQyxDQUFJOztJQUlOLEdBQUssQ0FBQ0wsTUFBTSxHQUFHQyxNQUFNLEdBQ2pCbkIsU0FBUyxHQUNUb0IsTUFBTSxHQUNObkIsT0FBTyxHQUNQb0IsT0FBTyxHQUNQbkIsUUFBUSxHQUNSZSxVQUFVO0lBRWQsR0FBSyxDQUFDSCxNQUFNLEdBQUduQixzREFBUztJQVl4QixHQUFHLENBQUM4QixVQUFVLEdBQUdwQixhQUFhLENBQUNDLE1BQUs7SUFFcEMsR0FBSyxDQUFDb0IsWUFBWSxHQUFHLFFBQVEsQ0FBUEMsQ0FBQyxFQUFLLENBQUM7UUFDM0JGLFVBQVUsR0FBR3BCLGFBQWEsQ0FBQ0MsTUFBSyxFQUFFLFFBQVEsQ0FBUEUsQ0FBQyxFQUFLLENBQUM7WUFDeENBLENBQUMsQ0FBQyxDQUFDLElBQUltQixDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSztZQUNyQixNQUFNLENBQUNyQixDQUFDO1FBQ1YsQ0FBQztJQUNILENBQUM7SUFFRCxHQUFLLENBQUNzQixpQkFBaUIsR0FBRyxRQUFRLENBQVBILENBQUMsRUFBSyxDQUFDO1FBQ2hDLEdBQUcsQ0FBQ0ksR0FBRyxHQUFJLEdBQXFCTixNQUFVLENBQTdCWCxNQUFNLENBQUNrQixRQUFRLEVBQUMsQ0FBQyxJQUFhLE9BQVhQLFVBQVU7UUFDMUMsRUFBRSxFQUNBQSxVQUFVLENBQUNRLEdBQUcsQ0FBQyxDQUFRLFlBQ3RCUixVQUFVLENBQUNTLElBQUksQ0FBQ0MsTUFBTSxLQUFLLENBQUMsSUFBSWhCLE1BQU0sRUFDdkNZLEdBQUcsR0FBSSxDQUFPLFNBQWEsT0FBWE4sVUFBVTtRQUU1QkEsVUFBVSxHQUFHcEIsYUFBYSxDQUFDQyxNQUFLO1FBQ2hDUSxNQUFNLENBQUNzQixJQUFJLENBQUNMLEdBQUc7SUFDakIsQ0FBQztJQUVELEdBQUssQ0FBQ0YsS0FBSyxJQUNSSixVQUFVLENBQUNRLEdBQUcsQ0FBQyxDQUFRLFlBQ3hCUixVQUFVLENBQUNRLEdBQUcsQ0FBQyxDQUFVLGNBQ3pCUixVQUFVLENBQUNZLEdBQUcsQ0FBQ2QsSUFBSSxNQUFNLENBQVMsWUFDbEN4QixtRUFBaUIsQ0FBQzBCLFVBQVUsQ0FBQ1ksR0FBRyxDQUFDZCxJQUFJO0lBRXZDLE1BQU0sdUVBQ0gxQixtREFBTztRQUNOeUMsU0FBUyxFQUFFeEMsK0VBQW9CO1FBQy9CeUMsT0FBTyxFQUFFVCxpQkFBaUI7Ozs7Ozs7O2lGQUV6QlUsQ0FBRztnQkFBQ0MsR0FBRyxFQUFFdEIsTUFBTSxHQUFHbkIsU0FBUyxHQUFHa0IsTUFBTTs7Ozs7Ozs7aUZBQ3BDd0IsQ0FBRztnQkFBQ0osU0FBUyxFQUFFeEMsd0VBQWE7Ozs7Ozs7MEJBQzFCcUIsTUFBTSx3RUFDSnlCLENBQUs7b0JBQ0pDLElBQUksRUFBQyxDQUFNO29CQUNYQyxXQUFXLEVBQUMsQ0FBYTtvQkFDekJDLE9BQU8sRUFBRXJCLFlBQVk7b0JBQ3JCYSxPQUFPLEVBQUUsUUFBUSxDQUFQWixDQUFDO3dCQUFLQSxNQUFNLENBQU5BLENBQUMsQ0FBQ3FCLGVBQWU7Ozs7Ozs7OzJGQUdsQ3BELHFEQUFTOzs7Ozs7Ozt3QkFDUDBCLEtBQUs7d0JBQ0xPLEtBQUssSUFBSSxDQUFJO3dCQUNiQSxLQUFLLHlFQUFLb0IsQ0FBQzs7Ozs7OztzQ0FBRXBCLEtBQUs7Ozs7Ozs7QUFNL0IsQ0FBQztHQWxGSzFCLFlBQVk7O1FBb0JEUixrREFBUzs7O0tBcEJwQlEsWUFBWTtBQW9GbEIsK0RBQWVBLFlBQVksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9vcmRlci9PcmRlclNlY3Rpb24uanM/ZmZiMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IFNlY29uZGFyeSBmcm9tIFwiLi4vdWkvU2Vjb25kYXJ5XCI7XHJcbmltcG9ydCBTZWN0aW9uIGZyb20gXCIuLi91aS9TZWN0aW9uXCI7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL09yZGVyU2VjdGlvbi5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuaW1wb3J0IG9yZGVyVHJhbnNsYXRpb25zIGZyb20gXCIuLi8uLi9zdG9yYWdlL29yZGVyLXRyYW5zbGF0aW9uc1wiO1xyXG5cclxuY29uc3QgY3VzdG9tU3JjID0gXCIvb3JkZXItYXNzZXRzL2N1c3RvbS5qcGdcIjtcclxuY29uc3QgYm9keVNyYyA9IFwiL29yZGVyLWFzc2V0cy9tYXRlcmlhbHMvYm9keS9lZ2dlci5qcGdcIjtcclxuY29uc3QgZnJvbnRTcmMgPVxyXG4gIFwiL29yZGVyLWFzc2V0cy9tYXRlcmlhbHMvZnJvbnQvcGxhc3RpYy5qcGdcIjtcclxuXHJcbmNvbnN0IE9yZGVyU2VjdGlvbiA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIGltZ1NyYzogaW5pdEltZ1NyYyxcclxuICAgIGN1c3RvbSxcclxuICAgIHF1ZXJ5LFxyXG4gICAgaXNCb2R5LFxyXG4gICAgaXNGcm9udCxcclxuICAgIHRpdGxlLFxyXG4gICAgbmFtZSxcclxuICAgIC4uLnNlY3Rpb25Qcm9wc1xyXG4gIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgaW1nU3JjID0gY3VzdG9tXHJcbiAgICA/IGN1c3RvbVNyY1xyXG4gICAgOiBpc0JvZHlcclxuICAgID8gYm9keVNyY1xyXG4gICAgOiBpc0Zyb250XHJcbiAgICA/IGZyb250U3JjXHJcbiAgICA6IGluaXRJbWdTcmM7XHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBmdW5jdGlvbiBnZXRBbGxRdWVyaWVzKHF1ZXJ5LCBmb3JtYXQgPSAocSkgPT4gcSkge1xyXG4gICAgY29uc3QgZm9ybWF0dGVkUXVlcnkgPSBmb3JtYXQoXHJcbiAgICAgIHF1ZXJ5LnNsaWNlKDEpLnNwbGl0KFwiPVwiKVxyXG4gICAgKTtcclxuICAgIGNvbnN0IHNlYXJjaFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMocm91dGVyLnF1ZXJ5KTtcclxuICAgIHNlYXJjaFBhcmFtcy5kZWxldGUoZm9ybWF0dGVkUXVlcnlbMF0pO1xyXG4gICAgc2VhcmNoUGFyYW1zLmFwcGVuZCguLi5mb3JtYXR0ZWRRdWVyeSk7XHJcbiAgICByZXR1cm4gc2VhcmNoUGFyYW1zO1xyXG4gIH1cclxuXHJcbiAgbGV0IGFsbFF1ZXJpZXMgPSBnZXRBbGxRdWVyaWVzKHF1ZXJ5KTtcclxuXHJcbiAgY29uc3QgaW5wdXRIYW5kbGVyID0gKGUpID0+IHtcclxuICAgIGFsbFF1ZXJpZXMgPSBnZXRBbGxRdWVyaWVzKHF1ZXJ5LCAocSkgPT4ge1xyXG4gICAgICBxWzFdID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgIHJldHVybiBxO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb3JkZXJDbGlja0hhbmRsZXIgPSAoZSkgPT4ge1xyXG4gICAgbGV0IHVybCA9IGAke3JvdXRlci5wYXRobmFtZX0/JHthbGxRdWVyaWVzfWA7XHJcbiAgICBpZiAoXHJcbiAgICAgIGFsbFF1ZXJpZXMuaGFzKFwiYnVuZGxlXCIpIHx8XHJcbiAgICAgIChhbGxRdWVyaWVzLmtleXMubGVuZ3RoID09PSAwICYmIGN1c3RvbSlcclxuICAgICkgdXJsID0gYC9vcmRlcj8ke2FsbFF1ZXJpZXN9YDtcclxuICAgIFxyXG4gICAgYWxsUXVlcmllcyA9IGdldEFsbFF1ZXJpZXMocXVlcnkpXHJcbiAgICByb3V0ZXIucHVzaCh1cmwpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHZhbHVlID1cclxuICAgICFhbGxRdWVyaWVzLmhhcyhcImJ1bmRsZVwiKSAmJlxyXG4gICAgYWxsUXVlcmllcy5oYXMoXCJjYXRlZ29yeVwiKSAmJlxyXG4gICAgYWxsUXVlcmllcy5nZXQobmFtZSkgIT09IFwiY3VycmVudFwiICYmXHJcbiAgICBvcmRlclRyYW5zbGF0aW9uc1thbGxRdWVyaWVzLmdldChuYW1lKV07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8U2VjdGlvblxyXG4gICAgICBjbGFzc05hbWU9e2NsYXNzZXMuT3JkZXJTZWN0aW9ufVxyXG4gICAgICBvbkNsaWNrPXtvcmRlckNsaWNrSGFuZGxlcn1cclxuICAgID5cclxuICAgICAgPGltZyBzcmM9e2N1c3RvbSA/IGN1c3RvbVNyYyA6IGltZ1NyY30gLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuVGl0bGV9PlxyXG4gICAgICAgIHtjdXN0b20gPyAoXHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCS0LDRiCDQktCw0YDQuNCw0L3RglwiXHJcbiAgICAgICAgICAgIG9uSW5wdXQ9e2lucHV0SGFuZGxlcn1cclxuICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGUuc3RvcFByb3BhZ2F0aW9uKCl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8U2Vjb25kYXJ5PlxyXG4gICAgICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgICAgIHt2YWx1ZSAmJiBcIjogXCJ9XHJcbiAgICAgICAgICAgIHt2YWx1ZSAmJiA8Yj57dmFsdWV9PC9iPn1cclxuICAgICAgICAgIDwvU2Vjb25kYXJ5PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9TZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPcmRlclNlY3Rpb247XHJcbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJTZWNvbmRhcnkiLCJTZWN0aW9uIiwiY2xhc3NlcyIsIm9yZGVyVHJhbnNsYXRpb25zIiwiY3VzdG9tU3JjIiwiYm9keVNyYyIsImZyb250U3JjIiwiT3JkZXJTZWN0aW9uIiwicHJvcHMiLCJnZXRBbGxRdWVyaWVzIiwicXVlcnkiLCJmb3JtYXQiLCJxIiwic2VhcmNoUGFyYW1zIiwiZm9ybWF0dGVkUXVlcnkiLCJzbGljZSIsInNwbGl0IiwiVVJMU2VhcmNoUGFyYW1zIiwicm91dGVyIiwiZGVsZXRlIiwiYXBwZW5kIiwiaW5pdEltZ1NyYyIsImltZ1NyYyIsImN1c3RvbSIsImlzQm9keSIsImlzRnJvbnQiLCJ0aXRsZSIsIm5hbWUiLCJzZWN0aW9uUHJvcHMiLCJhbGxRdWVyaWVzIiwiaW5wdXRIYW5kbGVyIiwiZSIsInRhcmdldCIsInZhbHVlIiwib3JkZXJDbGlja0hhbmRsZXIiLCJ1cmwiLCJwYXRobmFtZSIsImhhcyIsImtleXMiLCJsZW5ndGgiLCJwdXNoIiwiZ2V0IiwiY2xhc3NOYW1lIiwib25DbGljayIsImltZyIsInNyYyIsImRpdiIsIlRpdGxlIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbklucHV0Iiwic3RvcFByb3BhZ2F0aW9uIiwiYiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/order/OrderSection.js\n");

/***/ })

});