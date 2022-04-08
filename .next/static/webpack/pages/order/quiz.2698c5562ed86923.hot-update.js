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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ui_Secondary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/Secondary */ \"./src/components/ui/Secondary.js\");\n/* harmony import */ var _ui_Section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/Section */ \"./src/components/ui/Section.js\");\n/* harmony import */ var _OrderSection_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./OrderSection.module.scss */ \"./src/components/order/OrderSection.module.scss\");\n/* harmony import */ var _OrderSection_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_OrderSection_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) {\n        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++){\n            arr2[i] = arr[i];\n        }\n        return arr2;\n    }\n}\nfunction _iterableToArray(iter) {\n    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance\");\n}\nfunction _objectWithoutProperties(source, excluded) {\n    if (source == null) return {\n    };\n    var target = _objectWithoutPropertiesLoose(source, excluded);\n    var key, i;\n    if (Object.getOwnPropertySymbols) {\n        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);\n        for(i = 0; i < sourceSymbolKeys.length; i++){\n            key = sourceSymbolKeys[i];\n            if (excluded.indexOf(key) >= 0) continue;\n            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;\n            target[key] = source[key];\n        }\n    }\n    return target;\n}\nfunction _objectWithoutPropertiesLoose(source, excluded) {\n    if (source == null) return {\n    };\n    var target = {\n    };\n    var sourceKeys = Object.keys(source);\n    var key, i;\n    for(i = 0; i < sourceKeys.length; i++){\n        key = sourceKeys[i];\n        if (excluded.indexOf(key) >= 0) continue;\n        target[key] = source[key];\n    }\n    return target;\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar customSrc = \"/order-assets/custom.jpg\";\nvar bodySrc = \"/order-assets/materials/body/egger.jpg\";\nvar frontSrc = \"/order-assets/materials/front/plastic.jpg\";\nvar OrderSection = function(props) {\n    var getAllQueries = function getAllQueries(query, param) {\n        var format = param === void 0 ? function(q) {\n            return q;\n        } : param;\n        var _searchParams;\n        var formattedQuery = format(query.slice(1).split(\"=\"));\n        var searchParams = new URLSearchParams(router.query);\n        searchParams.delete(formattedQuery[0]);\n        (_searchParams = searchParams).append.apply(_searchParams, _toConsumableArray(formattedQuery));\n        return searchParams;\n    };\n    _s();\n    var intiImgSrc = props.intiImgSrc, custom = props.custom, query1 = props.query, isBody = props.isBody, isFront = props.isFront, title = props.title, sectionProps = _objectWithoutProperties(props, [\n        \"intiImgSrc\",\n        \"custom\",\n        \"query\",\n        \"isBody\",\n        \"isFront\",\n        \"title\"\n    ]);\n    var imgSrc = custom ? customSrc : isBody ? bodySrc : isFront ? frontSrc : initImgSrc;\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var allQueries = getAllQueries(query1);\n    var inputHandler = function(e) {\n        allQueries = getAllQueries(query1, function(q) {\n            q[1] = e.target.value;\n            return q;\n        });\n    };\n    var orderClickHandler = function(e) {\n        var url = \"\".concat(router.pathname, \"?\").concat(allQueries);\n        if (allQueries.has(\"bundle\")) url = \"/order?\".concat(allQueries);\n        router.push(url);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_ui_Section__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        className: (_OrderSection_module_scss__WEBPACK_IMPORTED_MODULE_4___default().OrderSection),\n        onClick: orderClickHandler,\n        __source: {\n            fileName: \"C:\\\\Users\\\\glink\\\\mess\\\\vigma\\\\src\\\\components\\\\order\\\\OrderSection.js\",\n            lineNumber: 60,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                src: custom ? customSrc : imgSrc,\n                __source: {\n                    fileName: \"C:\\\\Users\\\\glink\\\\mess\\\\vigma\\\\src\\\\components\\\\order\\\\OrderSection.js\",\n                    lineNumber: 64,\n                    columnNumber: 7\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: (_OrderSection_module_scss__WEBPACK_IMPORTED_MODULE_4___default().Title),\n                __source: {\n                    fileName: \"C:\\\\Users\\\\glink\\\\mess\\\\vigma\\\\src\\\\components\\\\order\\\\OrderSection.js\",\n                    lineNumber: 65,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: custom ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                    type: \"text\",\n                    placeholder: \"Ваш Вариант\",\n                    onInput: inputHandler,\n                    onClick: function(e) {\n                        return e.stopPropagation();\n                    },\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\glink\\\\mess\\\\vigma\\\\src\\\\components\\\\order\\\\OrderSection.js\",\n                        lineNumber: 67,\n                        columnNumber: 11\n                    },\n                    __self: _this\n                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ui_Secondary__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\glink\\\\mess\\\\vigma\\\\src\\\\components\\\\order\\\\OrderSection.js\",\n                        lineNumber: 74,\n                        columnNumber: 11\n                    },\n                    __self: _this,\n                    children: title\n                })\n            })\n        ]\n    }));\n};\n_s(OrderSection, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = OrderSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (OrderSection);\nvar _c;\n$RefreshReg$(_c, \"OrderSection\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9vcmRlci9PcmRlclNlY3Rpb24uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF1QztBQUNBO0FBQ0o7QUFDYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEQsR0FBSyxDQUFDSSxTQUFTLEdBQUcsQ0FBMEI7QUFDNUMsR0FBSyxDQUFDQyxPQUFPLEdBQUcsQ0FBd0M7QUFDeEQsR0FBSyxDQUFDQyxRQUFRLEdBQ1osQ0FBMkM7QUFFN0MsR0FBSyxDQUFDQyxZQUFZLEdBQUcsUUFBUSxDQUFQQyxLQUFLLEVBQUssQ0FBQztRQXFCdEJDLGFBQWEsR0FBdEIsUUFBUSxDQUFDQSxhQUFhLENBQUNDLEtBQUssRUFBRUMsS0FBaUIsRUFBRSxDQUFDO1lBQXBCQSxNQUFNLEdBQU5BLEtBQWlCLGNBQVIsUUFBUSxDQUFQQyxDQUFDO1lBQUtBLE1BQ2hELENBRGdEQSxDQUFDO1lBQWpCRCxLQUFpQjtZQU03Q0UsYUFBWTtRQUxaLEdBQUssQ0FBQ0MsY0FBYyxHQUFHSCxNQUFNLENBQzNCRCxLQUFLLENBQUNLLEtBQUssQ0FBQyxDQUFDLEVBQUVDLEtBQUssQ0FBQyxDQUFHO1FBRTFCLEdBQUssQ0FBQ0gsWUFBWSxHQUFHLEdBQUcsQ0FBQ0ksZUFBZSxDQUFDQyxNQUFNLENBQUNSLEtBQUs7UUFDckRHLFlBQVksQ0FBQ00sTUFBTSxDQUFDTCxjQUFjLENBQUMsQ0FBQztTQUNwQ0QsYUFBWSxHQUFaQSxZQUFZLEVBQUNPLE1BQU0sQ0FBbkJQLEtBQXNDLENBQXRDQSxhQUFZLHFCQUFXQyxjQUFjO1FBQ3JDLE1BQU0sQ0FBQ0QsWUFBWTtJQUNyQixDQUFDOztJQTVCRCxHQUFLLENBQ0hRLFVBQVUsR0FPUmIsS0FBSyxDQVBQYSxVQUFVLEVBQ1ZDLE1BQU0sR0FNSmQsS0FBSyxDQU5QYyxNQUFNLEVBQ05aLE1BQUssR0FLSEYsS0FBSyxDQUxQRSxLQUFLLEVBQ0xhLE1BQU0sR0FJSmYsS0FBSyxDQUpQZSxNQUFNLEVBQ05DLE9BQU8sR0FHTGhCLEtBQUssQ0FIUGdCLE9BQU8sRUFDUEMsS0FBSyxHQUVIakIsS0FBSyxDQUZQaUIsS0FBSyxFQUNGQyxZQUFZLDRCQUNibEIsS0FBSztRQVBQYSxDQUFVO1FBQ1ZDLENBQU07UUFDTlosQ0FBSztRQUNMYSxDQUFNO1FBQ05DLENBQU87UUFDUEMsQ0FBSzs7SUFJUCxHQUFLLENBQUNFLE1BQU0sR0FBR0wsTUFBTSxHQUNqQmxCLFNBQVMsR0FDVG1CLE1BQU0sR0FDTmxCLE9BQU8sR0FDUG1CLE9BQU8sR0FDUGxCLFFBQVEsR0FDUnNCLFVBQVU7SUFFZCxHQUFLLENBQUNWLE1BQU0sR0FBR2xCLHNEQUFTO0lBWXhCLEdBQUcsQ0FBQzZCLFVBQVUsR0FBR3BCLGFBQWEsQ0FBQ0MsTUFBSztJQUVwQyxHQUFLLENBQUNvQixZQUFZLEdBQUcsUUFBUSxDQUFQQyxDQUFDLEVBQUssQ0FBQztRQUMzQkYsVUFBVSxHQUFHcEIsYUFBYSxDQUFDQyxNQUFLLEVBQUUsUUFBUSxDQUFQRSxDQUFDLEVBQUssQ0FBQztZQUN4Q0EsQ0FBQyxDQUFDLENBQUMsSUFBSW1CLENBQUMsQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLO1lBQ3JCLE1BQU0sQ0FBQ3JCLENBQUM7UUFDVixDQUFDO0lBQ0gsQ0FBQztJQUVELEdBQUssQ0FBQ3NCLGlCQUFpQixHQUFHLFFBQVEsQ0FBUEgsQ0FBQyxFQUFLLENBQUM7UUFDaEMsR0FBRyxDQUFDSSxHQUFHLEdBQUksR0FBcUJOLE1BQVUsQ0FBN0JYLE1BQU0sQ0FBQ2tCLFFBQVEsRUFBQyxDQUFDLElBQWEsT0FBWFAsVUFBVTtRQUMxQyxFQUFFLEVBQUVBLFVBQVUsQ0FBQ1EsR0FBRyxDQUFDLENBQVEsVUFDekJGLEdBQUcsR0FBSSxDQUFPLFNBQWEsT0FBWE4sVUFBVTtRQUU1QlgsTUFBTSxDQUFDb0IsSUFBSSxDQUFDSCxHQUFHO0lBQ2pCLENBQUM7SUFFRCxNQUFNLHVFQUNIakMsbURBQU87UUFDTnFDLFNBQVMsRUFBRXBDLCtFQUFvQjtRQUMvQnFDLE9BQU8sRUFBRU4saUJBQWlCOzs7Ozs7OztpRkFFekJPLENBQUc7Z0JBQUNDLEdBQUcsRUFBRXBCLE1BQU0sR0FBR2xCLFNBQVMsR0FBR3VCLE1BQU07Ozs7Ozs7O2lGQUNwQ2dCLENBQUc7Z0JBQUNKLFNBQVMsRUFBRXBDLHdFQUFhOzs7Ozs7OzBCQUMxQm1CLE1BQU0sd0VBQ0p1QixDQUFLO29CQUNKQyxJQUFJLEVBQUMsQ0FBTTtvQkFDWEMsV0FBVyxFQUFDLENBQWE7b0JBQ3pCQyxPQUFPLEVBQUVsQixZQUFZO29CQUNyQlUsT0FBTyxFQUFFLFFBQVEsQ0FBUFQsQ0FBQzt3QkFBS0EsTUFBTSxDQUFOQSxDQUFDLENBQUNrQixlQUFlOzs7Ozs7OzswRkFHbENoRCxxREFBUzs7Ozs7Ozs4QkFBRXdCLEtBQUs7Ozs7O0FBSzNCLENBQUM7R0FwRUtsQixZQUFZOztRQW1CRFAsa0RBQVM7OztLQW5CcEJPLFlBQVk7QUFzRWxCLCtEQUFlQSxZQUFZLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvb3JkZXIvT3JkZXJTZWN0aW9uLmpzP2ZmYjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBTZWNvbmRhcnkgZnJvbSBcIi4uL3VpL1NlY29uZGFyeVwiO1xyXG5pbXBvcnQgU2VjdGlvbiBmcm9tIFwiLi4vdWkvU2VjdGlvblwiO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9PcmRlclNlY3Rpb24ubW9kdWxlLnNjc3NcIjtcclxuXHJcbmNvbnN0IGN1c3RvbVNyYyA9IFwiL29yZGVyLWFzc2V0cy9jdXN0b20uanBnXCI7XHJcbmNvbnN0IGJvZHlTcmMgPSBcIi9vcmRlci1hc3NldHMvbWF0ZXJpYWxzL2JvZHkvZWdnZXIuanBnXCI7XHJcbmNvbnN0IGZyb250U3JjID1cclxuICBcIi9vcmRlci1hc3NldHMvbWF0ZXJpYWxzL2Zyb250L3BsYXN0aWMuanBnXCI7XHJcblxyXG5jb25zdCBPcmRlclNlY3Rpb24gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBpbnRpSW1nU3JjLFxyXG4gICAgY3VzdG9tLFxyXG4gICAgcXVlcnksXHJcbiAgICBpc0JvZHksXHJcbiAgICBpc0Zyb250LFxyXG4gICAgdGl0bGUsXHJcbiAgICAuLi5zZWN0aW9uUHJvcHNcclxuICB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IGltZ1NyYyA9IGN1c3RvbVxyXG4gICAgPyBjdXN0b21TcmNcclxuICAgIDogaXNCb2R5XHJcbiAgICA/IGJvZHlTcmNcclxuICAgIDogaXNGcm9udFxyXG4gICAgPyBmcm9udFNyY1xyXG4gICAgOiBpbml0SW1nU3JjO1xyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgZnVuY3Rpb24gZ2V0QWxsUXVlcmllcyhxdWVyeSwgZm9ybWF0ID0gKHEpID0+IHEpIHtcclxuICAgIGNvbnN0IGZvcm1hdHRlZFF1ZXJ5ID0gZm9ybWF0KFxyXG4gICAgICBxdWVyeS5zbGljZSgxKS5zcGxpdChcIj1cIilcclxuICAgICk7XHJcbiAgICBjb25zdCBzZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHJvdXRlci5xdWVyeSk7XHJcbiAgICBzZWFyY2hQYXJhbXMuZGVsZXRlKGZvcm1hdHRlZFF1ZXJ5WzBdKTtcclxuICAgIHNlYXJjaFBhcmFtcy5hcHBlbmQoLi4uZm9ybWF0dGVkUXVlcnkpO1xyXG4gICAgcmV0dXJuIHNlYXJjaFBhcmFtcztcclxuICB9XHJcblxyXG4gIGxldCBhbGxRdWVyaWVzID0gZ2V0QWxsUXVlcmllcyhxdWVyeSk7XHJcblxyXG4gIGNvbnN0IGlucHV0SGFuZGxlciA9IChlKSA9PiB7XHJcbiAgICBhbGxRdWVyaWVzID0gZ2V0QWxsUXVlcmllcyhxdWVyeSwgKHEpID0+IHtcclxuICAgICAgcVsxXSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICByZXR1cm4gcTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9yZGVyQ2xpY2tIYW5kbGVyID0gKGUpID0+IHtcclxuICAgIGxldCB1cmwgPSBgJHtyb3V0ZXIucGF0aG5hbWV9PyR7YWxsUXVlcmllc31gO1xyXG4gICAgaWYgKGFsbFF1ZXJpZXMuaGFzKFwiYnVuZGxlXCIpKVxyXG4gICAgICB1cmwgPSBgL29yZGVyPyR7YWxsUXVlcmllc31gO1xyXG5cclxuICAgIHJvdXRlci5wdXNoKHVybCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTZWN0aW9uXHJcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5PcmRlclNlY3Rpb259XHJcbiAgICAgIG9uQ2xpY2s9e29yZGVyQ2xpY2tIYW5kbGVyfVxyXG4gICAgPlxyXG4gICAgICA8aW1nIHNyYz17Y3VzdG9tID8gY3VzdG9tU3JjIDogaW1nU3JjfSAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5UaXRsZX0+XHJcbiAgICAgICAge2N1c3RvbSA/IChcclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0JLQsNGIINCS0LDRgNC40LDQvdGCXCJcclxuICAgICAgICAgICAgb25JbnB1dD17aW5wdXRIYW5kbGVyfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gZS5zdG9wUHJvcGFnYXRpb24oKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxTZWNvbmRhcnk+e3RpdGxlfTwvU2Vjb25kYXJ5PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9TZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPcmRlclNlY3Rpb247XHJcbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJTZWNvbmRhcnkiLCJTZWN0aW9uIiwiY2xhc3NlcyIsImN1c3RvbVNyYyIsImJvZHlTcmMiLCJmcm9udFNyYyIsIk9yZGVyU2VjdGlvbiIsInByb3BzIiwiZ2V0QWxsUXVlcmllcyIsInF1ZXJ5IiwiZm9ybWF0IiwicSIsInNlYXJjaFBhcmFtcyIsImZvcm1hdHRlZFF1ZXJ5Iiwic2xpY2UiLCJzcGxpdCIsIlVSTFNlYXJjaFBhcmFtcyIsInJvdXRlciIsImRlbGV0ZSIsImFwcGVuZCIsImludGlJbWdTcmMiLCJjdXN0b20iLCJpc0JvZHkiLCJpc0Zyb250IiwidGl0bGUiLCJzZWN0aW9uUHJvcHMiLCJpbWdTcmMiLCJpbml0SW1nU3JjIiwiYWxsUXVlcmllcyIsImlucHV0SGFuZGxlciIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9yZGVyQ2xpY2tIYW5kbGVyIiwidXJsIiwicGF0aG5hbWUiLCJoYXMiLCJwdXNoIiwiY2xhc3NOYW1lIiwib25DbGljayIsImltZyIsInNyYyIsImRpdiIsIlRpdGxlIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbklucHV0Iiwic3RvcFByb3BhZ2F0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/order/OrderSection.js\n");

/***/ })

});