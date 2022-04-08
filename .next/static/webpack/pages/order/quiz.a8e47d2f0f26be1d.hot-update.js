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

/***/ "./src/storage/quiz-functions.js":
/*!***************************************!*\
  !*** ./src/storage/quiz-functions.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getMetaOrders\": function() { return /* binding */ getMetaOrders; },\n/* harmony export */   \"getBundle\": function() { return /* binding */ getBundle; }\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\nfunction getMetaOrders(param) {\n    var path = param.path, names = param.names, queryType = param.queryType, title = param.title, question = param.question;\n    var orders = [];\n    var customSection = {\n        custom: true,\n        query: queryType + \"=\" + \"custom\"\n    };\n    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;\n    try {\n        for(var _iterator = Object.keys(names)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){\n            var name = _step.value;\n            var title1 = names[name];\n            var imgSrc = path + \"/\" + name + \".jpg\";\n            var query = queryType + \"=\" + name;\n            var section = {\n                title: title1,\n                imgSrc: imgSrc,\n                query: query\n            };\n            orders.push(section);\n        }\n    } catch (err) {\n        _didIteratorError = true;\n        _iteratorError = err;\n    } finally{\n        try {\n            if (!_iteratorNormalCompletion && _iterator.return != null) {\n                _iterator.return();\n            }\n        } finally{\n            if (_didIteratorError) {\n                throw _iteratorError;\n            }\n        }\n    }\n    orders.push(customSection);\n    var metaOrders = {\n        title: title,\n        question: question,\n        orders: orders\n    };\n    return metaOrders;\n}\nfunction getBundle(param) {\n    var path = param.path, names = param.names, title = param.title, question = param.question;\n    var orders = [];\n    var customSection = {\n        custom: true,\n        query: \"&bundle=custom\"\n    };\n    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;\n    try {\n        for(var _iterator = Object.keys(names)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){\n            var name = _step.value;\n            var title2 = names[name];\n            var imgSrc = path + \"/\" + name + \".jpg\";\n            var query = \"&\" + name + \"=\" + \"current\";\n            var section = {\n                title: title2,\n                imgSrc: imgSrc,\n                query: query,\n                name: name\n            };\n            orders.push(section);\n        }\n    } catch (err) {\n        _didIteratorError = true;\n        _iteratorError = err;\n    } finally{\n        try {\n            if (!_iteratorNormalCompletion && _iterator.return != null) {\n                _iterator.return();\n            }\n        } finally{\n            if (_didIteratorError) {\n                throw _iteratorError;\n            }\n        }\n    }\n    orders.push(customSection);\n    var metaOrders = {\n        title: title,\n        question: question,\n        orders: orders\n    };\n    return metaOrders;\n}\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFHLEtBQUdHLElBQUksR0FBRyxDQUFHLEtBQUcsQ0FBUztZQUMxQyxHQUFLLENBQUNFLE9BQU8sR0FBRyxDQUFDO2dCQUNmVixLQUFLLEVBQUxBLE1BQUs7Z0JBQ0xTLE1BQU0sRUFBTkEsTUFBTTtnQkFDTkosS0FBSyxFQUFMQSxLQUFLO2dCQUNMRyxJQUFJLEVBQUpBLElBQUk7WUFDTixDQUFDO1lBQ0ROLE1BQU0sQ0FBQ1MsSUFBSSxDQUFDRCxPQUFPO1FBQ3JCLENBQUM7O1FBWEksaUJBQVE7UUFBUixjQUFROzs7aUJBQVIseUJBQVEsSUFBUixTQUFRO2dCQUFSLFNBQVE7OztnQkFBUixpQkFBUTtzQkFBUixjQUFROzs7O0lBYWJSLE1BQU0sQ0FBQ1MsSUFBSSxDQUFDUixhQUFhO0lBRXpCLEdBQUssQ0FBQ1MsVUFBVSxHQUFHLENBQUM7UUFDbEJaLEtBQUssRUFBTEEsS0FBSztRQUNMQyxRQUFRLEVBQVJBLFFBQVE7UUFDUkMsTUFBTSxFQUFOQSxNQUFNO0lBQ1IsQ0FBQztJQUVELE1BQU0sQ0FBQ1UsVUFBVTtBQUNuQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zdG9yYWdlL3F1aXotZnVuY3Rpb25zLmpzP2UwNGQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGdldE1ldGFPcmRlcnMoe1xyXG4gIHBhdGgsXHJcbiAgbmFtZXMsXHJcbiAgcXVlcnlUeXBlLFxyXG4gIHRpdGxlLFxyXG4gIHF1ZXN0aW9uLFxyXG59KSB7XHJcbiAgY29uc3Qgb3JkZXJzID0gW107XHJcblxyXG4gIGNvbnN0IGN1c3RvbVNlY3Rpb24gPSB7XHJcbiAgICBjdXN0b206IHRydWUsXHJcbiAgICBxdWVyeTogcXVlcnlUeXBlICsgXCI9XCIgKyBcImN1c3RvbVwiLFxyXG4gIH07XHJcblxyXG4gIGZvciAobGV0IG5hbWUgb2YgT2JqZWN0LmtleXMobmFtZXMpKSB7XHJcbiAgICBjb25zdCB0aXRsZSA9IG5hbWVzW25hbWVdO1xyXG4gICAgY29uc3QgaW1nU3JjID0gcGF0aCArIFwiL1wiICsgbmFtZSArIFwiLmpwZ1wiO1xyXG4gICAgY29uc3QgcXVlcnkgPSBxdWVyeVR5cGUgKyBcIj1cIiArIG5hbWU7XHJcbiAgICBjb25zdCBzZWN0aW9uID0ge1xyXG4gICAgICB0aXRsZSxcclxuICAgICAgaW1nU3JjLFxyXG4gICAgICBxdWVyeSxcclxuICAgIH07XHJcbiAgICBvcmRlcnMucHVzaChzZWN0aW9uKTtcclxuICB9XHJcblxyXG4gIG9yZGVycy5wdXNoKGN1c3RvbVNlY3Rpb24pO1xyXG5cclxuICBjb25zdCBtZXRhT3JkZXJzID0ge1xyXG4gICAgdGl0bGUsXHJcbiAgICBxdWVzdGlvbixcclxuICAgIG9yZGVycyxcclxuICB9O1xyXG5cclxuICByZXR1cm4gbWV0YU9yZGVycztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEJ1bmRsZSh7XHJcbiAgcGF0aCxcclxuICBuYW1lcyxcclxuICB0aXRsZSxcclxuICBxdWVzdGlvbixcclxufSkge1xyXG4gIGNvbnN0IG9yZGVycyA9IFtdO1xyXG5cclxuICBjb25zdCBjdXN0b21TZWN0aW9uID0ge1xyXG4gICAgY3VzdG9tOiB0cnVlLFxyXG4gICAgcXVlcnk6IFwiJmJ1bmRsZT1jdXN0b21cIixcclxuICB9O1xyXG5cclxuICBmb3IgKGxldCBuYW1lIG9mIE9iamVjdC5rZXlzKG5hbWVzKSkge1xyXG4gICAgY29uc3QgdGl0bGUgPSBuYW1lc1tuYW1lXTtcclxuICAgIGNvbnN0IGltZ1NyYyA9IHBhdGggKyBcIi9cIiArIG5hbWUgKyBcIi5qcGdcIjtcclxuICAgIGNvbnN0IHF1ZXJ5ID0gXCImXCIgKyBuYW1lICsgXCI9XCIgKyBcImN1cnJlbnRcIjtcclxuICAgIGNvbnN0IHNlY3Rpb24gPSB7XHJcbiAgICAgIHRpdGxlLFxyXG4gICAgICBpbWdTcmMsXHJcbiAgICAgIHF1ZXJ5LFxyXG4gICAgICBuYW1lXHJcbiAgICB9O1xyXG4gICAgb3JkZXJzLnB1c2goc2VjdGlvbik7XHJcbiAgfVxyXG5cclxuICBvcmRlcnMucHVzaChjdXN0b21TZWN0aW9uKTtcclxuXHJcbiAgY29uc3QgbWV0YU9yZGVycyA9IHtcclxuICAgIHRpdGxlLFxyXG4gICAgcXVlc3Rpb24sXHJcbiAgICBvcmRlcnMsXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIG1ldGFPcmRlcnM7XHJcbn1cclxuIl0sIm5hbWVzIjpbImdldE1ldGFPcmRlcnMiLCJwYXRoIiwibmFtZXMiLCJxdWVyeVR5cGUiLCJ0aXRsZSIsInF1ZXN0aW9uIiwib3JkZXJzIiwiY3VzdG9tU2VjdGlvbiIsImN1c3RvbSIsInF1ZXJ5IiwiT2JqZWN0Iiwia2V5cyIsIm5hbWUiLCJpbWdTcmMiLCJzZWN0aW9uIiwicHVzaCIsIm1ldGFPcmRlcnMiLCJnZXRCdW5kbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/storage/quiz-functions.js\n");

/***/ })

});