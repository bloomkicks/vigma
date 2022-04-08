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

/***/ "./src/pages/order/quiz.js":
/*!*********************************!*\
  !*** ./src/pages/order/quiz.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_order_OrderContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/order/OrderContent */ \"./src/components/order/OrderContent.js\");\n/* harmony import */ var _components_layout_Page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/layout/Page */ \"./src/components/layout/Page.js\");\n/* harmony import */ var _storage_quiz_orders__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../storage/quiz-orders */ \"./src/storage/quiz-orders.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) {\n        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++){\n            arr2[i] = arr[i];\n        }\n        return arr2;\n    }\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArray(iter) {\n    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {\n        };\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar OrderPage = function(props) {\n    var getContent = function getContent(tree, values) {\n        content = _storage_quiz_orders__WEBPACK_IMPORTED_MODULE_4__[\"default\"][tree].bundle;\n        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;\n        try {\n            for(var _iterator = content.orders.filter(function(i) {\n                return \"frontbody\".includes(i.name);\n            })[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){\n                var material = _step.value;\n                if (material.name === \"front\") {\n                    material.isFront = true;\n                } else {\n                    material.isBody = true;\n                }\n            }\n        } catch (err) {\n            _didIteratorError = true;\n            _iteratorError = err;\n        } finally{\n            try {\n                if (!_iteratorNormalCompletion && _iterator.return != null) {\n                    _iterator.return();\n                }\n            } finally{\n                if (_didIteratorError) {\n                    throw _iteratorError;\n                }\n            }\n        }\n        if (!values || values.length === 0) {\n            return;\n        }\n        getCurrent: {\n            var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;\n            try {\n                for(var _iterator1 = values[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){\n                    var value = _step1.value;\n                    if (router.query[value] === \"current\") {\n                        content = _storage_quiz_orders__WEBPACK_IMPORTED_MODULE_4__[\"default\"][tree][value];\n                        break getCurrent;\n                    }\n                }\n            } catch (err) {\n                _didIteratorError1 = true;\n                _iteratorError1 = err;\n            } finally{\n                try {\n                    if (!_iteratorNormalCompletion1 && _iterator1.return != null) {\n                        _iterator1.return();\n                    }\n                } finally{\n                    if (_didIteratorError1) {\n                        throw _iteratorError1;\n                    }\n                }\n            }\n            var _iteratorNormalCompletion2 = true, _didIteratorError2 = false, _iteratorError2 = undefined;\n            try {\n                for(var _iterator2 = [\n                    \"front\",\n                    \"body\"\n                ][Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true){\n                    var value1 = _step2.value;\n                    if (router.query[value1] === \"current\") {\n                        content = _storage_quiz_orders__WEBPACK_IMPORTED_MODULE_4__[\"default\"].materials[value1];\n                        break getCurrent;\n                    }\n                }\n            } catch (err) {\n                _didIteratorError2 = true;\n                _iteratorError2 = err;\n            } finally{\n                try {\n                    if (!_iteratorNormalCompletion2 && _iterator2.return != null) {\n                        _iterator2.return();\n                    }\n                } finally{\n                    if (_didIteratorError2) {\n                        throw _iteratorError2;\n                    }\n                }\n            }\n        }\n    };\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var content = _storage_quiz_orders__WEBPACK_IMPORTED_MODULE_4__[\"default\"].category;\n    var category = router.query[\"category\"];\n    var queries = [\n        \"shape\"\n    ];\n    if (category === \"kitchen\") {\n        queries.push(\"table\");\n    } else if ([\n        \"kitchen\",\n        \"closet\",\n        \"child\",\n        \"bath\",\n        \"trade\",\n        \"office\", \n    ].includes(category)) {\n        getContent(category, queries);\n    }\n    var allDone;\n    for(var query in _toConsumableArray(queries).concat([\n        \"front\",\n        \"body\"\n    ])){\n        if (router.query[query] && router.query[query] !== \"current\") {\n            allDone = true;\n        }\n    }\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_layout_Page__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        title: \"Заказать\",\n        __source: {\n            fileName: \"C:\\\\Users\\\\glink\\\\mess\\\\vigma\\\\src\\\\pages\\\\order\\\\quiz.js\",\n            lineNumber: 69,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_order_OrderContent__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _objectSpread({\n        }, content, {\n            __source: {\n                fileName: \"C:\\\\Users\\\\glink\\\\mess\\\\vigma\\\\src\\\\pages\\\\order\\\\quiz.js\",\n                lineNumber: 70,\n                columnNumber: 7\n            },\n            __self: _this\n        }))\n    }));\n};\n_s(OrderPage, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = OrderPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (OrderPage);\nvar _c;\n$RefreshReg$(_c, \"OrderPage\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvb3JkZXIvcXVpei5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBdUM7QUFFdUI7QUFDZjtBQUNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWpELEdBQUssQ0FBQ0ksU0FBUyxHQUFHLFFBQVEsQ0FBUEMsS0FBSyxFQUFLLENBQUM7UUFJbkJDLFVBQVUsR0FBbkIsUUFBUSxDQUFDQSxVQUFVLENBQUNDLElBQUksRUFBRUMsTUFBTSxFQUFFLENBQUM7UUFDakNDLE9BQU8sR0FBR04sNERBQVMsQ0FBQ0ksSUFBSSxFQUFFRyxNQUFNO1lBQzNCLHlCQUFZLFNBQVosaUJBQVksVUFBWixjQUFZOztZQUFqQixHQUFHLEtBQUUsU0FBWSxHQUFJRCxPQUFPLENBQUNFLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDLFFBQy9DLENBRGdEQyxDQUFDO2dCQUMzQyxNQUFNLENBQU4sQ0FBVyxXQUFDQyxRQUFRLENBQUNELENBQUMsQ0FBQ0UsSUFBSTttQ0FEeEIsS0FBWSxJQUFaLHlCQUFZLElBQVosS0FBWSxHQUFaLFNBQVksZ0JBQVoseUJBQVksUUFFZCxDQUFDO2dCQUZDLEdBQUcsQ0FBQ0MsUUFBUSxHQUFaLEtBQVk7Z0JBR2YsRUFBRSxFQUFFQSxRQUFRLENBQUNELElBQUksS0FBSyxDQUFPLFFBQUUsQ0FBQztvQkFDOUJDLFFBQVEsQ0FBQ0MsT0FBTyxHQUFHLElBQUk7Z0JBQ3pCLENBQUMsTUFBTSxDQUFDO29CQUNORCxRQUFRLENBQUNFLE1BQU0sR0FBRyxJQUFJO2dCQUN4QixDQUFDO1lBQ0gsQ0FBQzs7WUFSSSxpQkFBWTtZQUFaLGNBQVk7OztxQkFBWix5QkFBWSxJQUFaLFNBQVk7b0JBQVosU0FBWTs7O29CQUFaLGlCQUFZOzBCQUFaLGNBQVk7Ozs7UUFTakIsRUFBRSxHQUFHVixNQUFNLElBQUlBLE1BQU0sQ0FBQ1csTUFBTSxLQUFLLENBQUMsRUFBRSxDQUFDO1lBQ25DLE1BQU07UUFDUixDQUFDO1FBRURDLFVBQVUsRUFBRSxDQUFDO2dCQUNOLDBCQUFTLFNBQVQsa0JBQVMsVUFBVCxlQUFTOztnQkFBZCxHQUFHLEtBQUUsVUFBUyxHQUFJWixNQUFNLHFCQUFuQixNQUFTLElBQVQsMEJBQVMsSUFBVCxNQUFTLEdBQVQsVUFBUyxnQkFBVCwwQkFBUyxRQUFZLENBQUM7b0JBQXRCLEdBQUcsQ0FBQ2EsS0FBSyxHQUFULE1BQVM7b0JBQ1osRUFBRSxFQUFFQyxNQUFNLENBQUNDLEtBQUssQ0FBQ0YsS0FBSyxNQUFNLENBQVMsVUFBRSxDQUFDO3dCQUN0Q1osT0FBTyxHQUFHTiw0REFBUyxDQUFDSSxJQUFJLEVBQUVjLEtBQUs7d0JBQy9CLEtBQUssQ0FBQ0QsVUFBVTtvQkFDbEIsQ0FBQztnQkFDSCxDQUFDOztnQkFMSSxrQkFBUztnQkFBVCxlQUFTOzs7eUJBQVQsMEJBQVMsSUFBVCxVQUFTO3dCQUFULFVBQVM7Ozt3QkFBVCxrQkFBUzs4QkFBVCxlQUFTOzs7O2dCQU1ULDBCQUFTLFNBQVQsa0JBQVMsVUFBVCxlQUFTOztnQkFBZCxHQUFHLEtBQUUsVUFBUyxHQUFJLENBQUM7b0JBQUEsQ0FBTztvQkFBRSxDQUFNO2dCQUFBLENBQUMscUJBQTlCLE1BQVMsSUFBVCwwQkFBUyxJQUFULE1BQVMsR0FBVCxVQUFTLGdCQUFULDBCQUFTLFFBQXVCLENBQUM7b0JBQWpDLEdBQUcsQ0FBQ0MsTUFBSyxHQUFULE1BQVM7b0JBQ1osRUFBRSxFQUFFQyxNQUFNLENBQUNDLEtBQUssQ0FBQ0YsTUFBSyxNQUFNLENBQVMsVUFBRSxDQUFDO3dCQUN0Q1osT0FBTyxHQUFHTixzRUFBbUIsQ0FBQ2tCLE1BQUs7d0JBQ25DLEtBQUssQ0FBQ0QsVUFBVTtvQkFDbEIsQ0FBQztnQkFDSCxDQUFDOztnQkFMSSxrQkFBUztnQkFBVCxlQUFTOzs7eUJBQVQsMEJBQVMsSUFBVCxVQUFTO3dCQUFULFVBQVM7Ozt3QkFBVCxrQkFBUzs4QkFBVCxlQUFTOzs7O1FBTWhCLENBQUM7SUFDSCxDQUFDOztJQWhDRCxHQUFLLENBQUNFLE1BQU0sR0FBR3RCLHNEQUFTO0lBRXhCLEdBQUcsQ0FBQ1MsT0FBTyxHQUFHTixxRUFBa0I7SUFnQ2hDLEdBQUssQ0FBQ3NCLFFBQVEsR0FBR0gsTUFBTSxDQUFDQyxLQUFLLENBQUMsQ0FBVTtJQUN4QyxHQUFLLENBQUNHLE9BQU8sR0FBRyxDQUFDO1FBQUEsQ0FBTztJQUFBLENBQUM7SUFDekIsRUFBRSxFQUFFRCxRQUFRLEtBQUssQ0FBUyxVQUFFLENBQUM7UUFDM0JDLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDLENBQU87SUFDdEIsQ0FBQyxNQUFNLEVBQUUsRUFDUCxDQUFDO1FBQ0MsQ0FBUztRQUNULENBQVE7UUFDUixDQUFPO1FBQ1AsQ0FBTTtRQUNOLENBQU87UUFDUCxDQUFRO0lBQ1YsQ0FBQyxDQUFDYixRQUFRLENBQUNXLFFBQVEsR0FDbkIsQ0FBQztRQUNEbkIsVUFBVSxDQUFDbUIsUUFBUSxFQUFFQyxPQUFPO0lBQzlCLENBQUM7SUFDRCxHQUFHLENBQUNFLE9BQU87SUFDWCxHQUFHLENBQUUsR0FBRyxDQUFDTCxLQUFLLHVCQUFRRyxPQUFPLFNBQVgsQ0FBQztRQUFZLENBQU87UUFBRSxDQUFNO0lBQUEsQ0FBQyxFQUFFLENBQUM7UUFDaEQsRUFBRSxFQUNBSixNQUFNLENBQUNDLEtBQUssQ0FBQ0EsS0FBSyxLQUNsQkQsTUFBTSxDQUFDQyxLQUFLLENBQUNBLEtBQUssTUFBTSxDQUFTLFVBQ2pDLENBQUM7WUFDREssT0FBTyxHQUFHLElBQUk7UUFDaEIsQ0FBQztJQUNILENBQUM7SUFFRCxNQUFNLHNFQUNIMUIsK0RBQUk7UUFBQzJCLEtBQUssRUFBQyxDQUFVOzs7Ozs7O3VGQUNuQjVCLHNFQUFZO1dBQUtRLE9BQU87Ozs7Ozs7OztBQUcvQixDQUFDO0dBbEVLTCxTQUFTOztRQUNFSixrREFBUzs7O0tBRHBCSSxTQUFTO0FBb0VmLCtEQUFlQSxTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL29yZGVyL3F1aXouanM/ZmNlMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCBPcmRlckNvbnRlbnQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvb3JkZXIvT3JkZXJDb250ZW50XCI7XHJcbmltcG9ydCBQYWdlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2xheW91dC9QYWdlXCI7XHJcbmltcG9ydCBhbGxPcmRlcnMgZnJvbSBcIi4uLy4uL3N0b3JhZ2UvcXVpei1vcmRlcnNcIjtcclxuXHJcbmNvbnN0IE9yZGVyUGFnZSA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBsZXQgY29udGVudCA9IGFsbE9yZGVycy5jYXRlZ29yeTtcclxuICBmdW5jdGlvbiBnZXRDb250ZW50KHRyZWUsIHZhbHVlcykge1xyXG4gICAgY29udGVudCA9IGFsbE9yZGVyc1t0cmVlXS5idW5kbGU7XHJcbiAgICBmb3IgKGxldCBtYXRlcmlhbCBvZiBjb250ZW50Lm9yZGVycy5maWx0ZXIoKGkpID0+XHJcbiAgICAgIFwiZnJvbnRib2R5XCIuaW5jbHVkZXMoaS5uYW1lKVxyXG4gICAgKSkge1xyXG4gICAgICBpZiAobWF0ZXJpYWwubmFtZSA9PT0gXCJmcm9udFwiKSB7XHJcbiAgICAgICAgbWF0ZXJpYWwuaXNGcm9udCA9IHRydWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbWF0ZXJpYWwuaXNCb2R5ID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKCF2YWx1ZXMgfHwgdmFsdWVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q3VycmVudDoge1xyXG4gICAgICBmb3IgKGxldCB2YWx1ZSBvZiB2YWx1ZXMpIHtcclxuICAgICAgICBpZiAocm91dGVyLnF1ZXJ5W3ZhbHVlXSA9PT0gXCJjdXJyZW50XCIpIHtcclxuICAgICAgICAgIGNvbnRlbnQgPSBhbGxPcmRlcnNbdHJlZV1bdmFsdWVdO1xyXG4gICAgICAgICAgYnJlYWsgZ2V0Q3VycmVudDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgZm9yIChsZXQgdmFsdWUgb2YgW1wiZnJvbnRcIiwgXCJib2R5XCJdKSB7XHJcbiAgICAgICAgaWYgKHJvdXRlci5xdWVyeVt2YWx1ZV0gPT09IFwiY3VycmVudFwiKSB7XHJcbiAgICAgICAgICBjb250ZW50ID0gYWxsT3JkZXJzLm1hdGVyaWFsc1t2YWx1ZV07XHJcbiAgICAgICAgICBicmVhayBnZXRDdXJyZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgY2F0ZWdvcnkgPSByb3V0ZXIucXVlcnlbXCJjYXRlZ29yeVwiXTtcclxuICBjb25zdCBxdWVyaWVzID0gW1wic2hhcGVcIl07XHJcbiAgaWYgKGNhdGVnb3J5ID09PSBcImtpdGNoZW5cIikge1xyXG4gICAgcXVlcmllcy5wdXNoKFwidGFibGVcIik7XHJcbiAgfSBlbHNlIGlmIChcclxuICAgIFtcclxuICAgICAgXCJraXRjaGVuXCIsXHJcbiAgICAgIFwiY2xvc2V0XCIsXHJcbiAgICAgIFwiY2hpbGRcIixcclxuICAgICAgXCJiYXRoXCIsXHJcbiAgICAgIFwidHJhZGVcIixcclxuICAgICAgXCJvZmZpY2VcIixcclxuICAgIF0uaW5jbHVkZXMoY2F0ZWdvcnkpXHJcbiAgKSB7XHJcbiAgICBnZXRDb250ZW50KGNhdGVnb3J5LCBxdWVyaWVzKTtcclxuICB9XHJcbiAgbGV0IGFsbERvbmU7XHJcbiAgZm9yIChsZXQgcXVlcnkgaW4gWy4uLnF1ZXJpZXMsIFwiZnJvbnRcIiwgXCJib2R5XCJdKSB7XHJcbiAgICBpZiAoXHJcbiAgICAgIHJvdXRlci5xdWVyeVtxdWVyeV0gJiZcclxuICAgICAgcm91dGVyLnF1ZXJ5W3F1ZXJ5XSAhPT0gXCJjdXJyZW50XCJcclxuICAgICkge1xyXG4gICAgICBhbGxEb25lID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UGFnZSB0aXRsZT1cItCX0LDQutCw0LfQsNGC0YxcIj5cclxuICAgICAgPE9yZGVyQ29udGVudCB7Li4uY29udGVudH0gLz5cclxuICAgIDwvUGFnZT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgT3JkZXJQYWdlO1xyXG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiT3JkZXJDb250ZW50IiwiUGFnZSIsImFsbE9yZGVycyIsIk9yZGVyUGFnZSIsInByb3BzIiwiZ2V0Q29udGVudCIsInRyZWUiLCJ2YWx1ZXMiLCJjb250ZW50IiwiYnVuZGxlIiwib3JkZXJzIiwiZmlsdGVyIiwiaSIsImluY2x1ZGVzIiwibmFtZSIsIm1hdGVyaWFsIiwiaXNGcm9udCIsImlzQm9keSIsImxlbmd0aCIsImdldEN1cnJlbnQiLCJ2YWx1ZSIsInJvdXRlciIsInF1ZXJ5IiwibWF0ZXJpYWxzIiwiY2F0ZWdvcnkiLCJxdWVyaWVzIiwicHVzaCIsImFsbERvbmUiLCJ0aXRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/order/quiz.js\n");

/***/ })

});