(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[25],{

/***/ 2636:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/order/quiz",
      function () {
        return __webpack_require__(7715);
      }
    ]);
    if(false) {}
  

/***/ }),

/***/ 4712:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _Content_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6653);
/* harmony import */ var _Content_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Content_module_scss__WEBPACK_IMPORTED_MODULE_1__);


function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {
    };
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {
    };
    var target = {
    };
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
var Content = function(props) {
    var children = props.children, className = props.className, contentProps = _objectWithoutProperties(props, [
        "children",
        "className"
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("article", _objectSpread({
    }, contentProps, {
        className: "\n      ".concat((_Content_module_scss__WEBPACK_IMPORTED_MODULE_1___default().Content), " \n      ").concat(className || '', "\n      ").concat((_Content_module_scss__WEBPACK_IMPORTED_MODULE_1___default().MediaContent), "\n    "),
        children: children
    })));
};
/* harmony default export */ __webpack_exports__["Z"] = (Content);


/***/ }),

/***/ 7514:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _ui_Title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9240);
/* harmony import */ var _Page_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2440);
/* harmony import */ var _Page_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Page_module_scss__WEBPACK_IMPORTED_MODULE_2__);



function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {
    };
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {
    };
    var target = {
    };
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
var Page = function(props) {
    var title = props.title, children = props.children, notSpaced = props.notSpaced, className = props.className, wrapperClassName = props.wrapperClassName, pageProps = _objectWithoutProperties(props, [
        "title",
        "children",
        "notSpaced",
        "className",
        "wrapperClassName"
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "\n      ".concat((_Page_module_scss__WEBPACK_IMPORTED_MODULE_2___default().PageSpace), "\n      ").concat(wrapperClassName || "", "\n    "),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", _objectSpread({
        }, pageProps, {
            className: "\n          ".concat((_Page_module_scss__WEBPACK_IMPORTED_MODULE_2___default().Page), "\n          ").concat(title && (_Page_module_scss__WEBPACK_IMPORTED_MODULE_2___default().Spaced) || "", "\n          ").concat(notSpaced && (_Page_module_scss__WEBPACK_IMPORTED_MODULE_2___default().NotSpaced) || "", "\n          ").concat(className || "", "\n        "),
            children: [
                title && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ui_Title__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                    className: (_Page_module_scss__WEBPACK_IMPORTED_MODULE_2___default().Title),
                    children: title
                }),
                children
            ]
        }))
    }));
};
/* harmony default export */ __webpack_exports__["Z"] = (Page);


/***/ }),

/***/ 2276:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _Secondary_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5917);
/* harmony import */ var _Secondary_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Secondary_module_scss__WEBPACK_IMPORTED_MODULE_1__);


function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {
    };
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {
    };
    var target = {
    };
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
var Secondary = function(props) {
    var children = props.children, secondaryProps = _objectWithoutProperties(props, [
        "children"
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", _objectSpread({
    }, secondaryProps, {
        className: (_Secondary_module_scss__WEBPACK_IMPORTED_MODULE_1___default().Secondary),
        children: children
    })));
};
/* harmony default export */ __webpack_exports__["Z"] = (Secondary);


/***/ }),

/***/ 5328:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _Third_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5761);
/* harmony import */ var _Third_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Third_module_scss__WEBPACK_IMPORTED_MODULE_1__);


function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {
    };
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {
    };
    var target = {
    };
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
var Third = function(props) {
    var children = props.children, thirdProps = _objectWithoutProperties(props, [
        "children"
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", _objectSpread({
    }, thirdProps, {
        className: (_Third_module_scss__WEBPACK_IMPORTED_MODULE_1___default().Third),
        children: children
    })));
};
/* harmony default export */ __webpack_exports__["Z"] = (Third);


/***/ }),

/***/ 9240:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _Title_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2333);
/* harmony import */ var _Title_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Title_module_scss__WEBPACK_IMPORTED_MODULE_1__);


var Title = function(props) {
    var className = props.className;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1", {
        className: "\n        ".concat((_Title_module_scss__WEBPACK_IMPORTED_MODULE_1___default().Title), "\n        ").concat(className || '', "\n      ").trim(),
        children: props.children
    }));
};
/* harmony default export */ __webpack_exports__["Z"] = (Title);


/***/ }),

/***/ 7715:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ quiz; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/next/router.js
var next_router = __webpack_require__(1163);
// EXTERNAL MODULE: ./src/components/ui/Third.js
var Third = __webpack_require__(5328);
// EXTERNAL MODULE: ./src/components/order/OrdersFooter.module.css
var OrdersFooter_module = __webpack_require__(5915);
var OrdersFooter_module_default = /*#__PURE__*/__webpack_require__.n(OrdersFooter_module);
;// CONCATENATED MODULE: ./src/components/order/OrdersFooter.js




function _objectWithoutProperties(source, excluded) {
    if (source == null) return {
    };
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {
    };
    var target = {
    };
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
var arrowSvg = "/order-assets/next-arrow.svg";
var OrdersFooter = function(props) {
    var children = props.children, query = props.query, footerProps = _objectWithoutProperties(props, [
        "children",
        "query"
    ]);
    var router = (0,next_router.useRouter)();
    var clickHandler = function(e) {
        var searchParams = new URLSearchParams(router.query);
        var lastCloset = "";
        searchParams.forEach(function(value, key) {
            return lastCloset = key;
        });
        searchParams.delete(lastCloset);
        router.push("".concat(location.pathname, "?").concat(searchParams));
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (OrdersFooter_module_default()).OrdersFooter,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                onClick: clickHandler,
                src: arrowSvg,
                alt: "Назад",
                className: (OrdersFooter_module_default()).Arrow
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Third/* default */.Z, {
                children: children
            })
        ]
    }));
};
/* harmony default export */ var order_OrdersFooter = (OrdersFooter);

// EXTERNAL MODULE: ./src/components/ui/AntiButton.module.scss
var AntiButton_module = __webpack_require__(4897);
var AntiButton_module_default = /*#__PURE__*/__webpack_require__.n(AntiButton_module);
;// CONCATENATED MODULE: ./src/components/ui/AntiButton.js


function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}
function AntiButton_objectWithoutProperties(source, excluded) {
    if (source == null) return {
    };
    var target = AntiButton_objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function AntiButton_objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {
    };
    var target = {
    };
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
var AntiButton = function(props) {
    var children = props.children, className = props.className, buttonProps = AntiButton_objectWithoutProperties(props, [
        "children",
        "className"
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("button", _objectSpread({
        className: "\n      ".concat((AntiButton_module_default()).AntiButton, "\n      ").concat(className || "", "\n    ")
    }, buttonProps, {
        children: children
    })));
};
/* harmony default export */ var ui_AntiButton = (AntiButton);

// EXTERNAL MODULE: ./src/components/ui/Question.module.scss
var Question_module = __webpack_require__(7142);
var Question_module_default = /*#__PURE__*/__webpack_require__.n(Question_module);
;// CONCATENATED MODULE: ./src/components/ui/Question.js


function Question_defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function Question_objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            Question_defineProperty(target, key, source[key]);
        });
    }
    return target;
}
function Question_objectWithoutProperties(source, excluded) {
    if (source == null) return {
    };
    var target = Question_objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function Question_objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {
    };
    var target = {
    };
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
var Question = function(props) {
    var children = props.children, className = props.className, questionProps = Question_objectWithoutProperties(props, [
        "children",
        "className"
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", Question_objectSpread({
    }, questionProps, {
        className: "\n      ".concat((Question_module_default()).Question, "\n      ").concat(className || '', "\n    "),
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
            children: props.children
        })
    })));
};
/* harmony default export */ var ui_Question = (Question);

// EXTERNAL MODULE: ./src/components/layout/Content.js
var Content = __webpack_require__(4712);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./src/components/ui/Secondary.js
var Secondary = __webpack_require__(2276);
// EXTERNAL MODULE: ./src/components/ui/Section.js
var Section = __webpack_require__(4568);
// EXTERNAL MODULE: ./src/components/order/OrderSection.module.scss
var OrderSection_module = __webpack_require__(8280);
var OrderSection_module_default = /*#__PURE__*/__webpack_require__.n(OrderSection_module);
;// CONCATENATED MODULE: ./src/components/order/OrderSection.js





function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++){
            arr2[i] = arr[i];
        }
        return arr2;
    }
}
function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
}
function OrderSection_objectWithoutProperties(source, excluded) {
    if (source == null) return {
    };
    var target = OrderSection_objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function OrderSection_objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {
    };
    var target = {
    };
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}
var OrderSection = function(props) {
    var _searchParams;
    var imgSrc = props.imgSrc, others = props.others, total = props.total, query = props.query, title = props.title, sectionProps = OrderSection_objectWithoutProperties(props, [
        "imgSrc",
        "others",
        "total",
        "query",
        "title"
    ]);
    var router = (0,next_router.useRouter)();
    var formattedQuery = query.slice(1).split("=");
    var searchParams = new URLSearchParams(router.query);
    searchParams.delete(formattedQuery[0]);
    (_searchParams = searchParams).append.apply(_searchParams, _toConsumableArray(formattedQuery));
    var queryUrl = "".concat(router.pathname, "?").concat(searchParams);
    if (total) queryUrl = "".concat("/order?".concat(searchParams));
    var orderClickHandler = function(e) {
        router.push(queryUrl);
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Section/* default */.Z, {
        onClick: orderClickHandler,
        className: (OrderSection_module_default()).OrderSection,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                src: imgSrc
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: (OrderSection_module_default()).Title,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Secondary/* default */.Z, {
                    children: others ? "Другое (не знаю)" : title
                })
            })
        ]
    }));
};
/* harmony default export */ var order_OrderSection = (OrderSection);

// EXTERNAL MODULE: ./src/components/order/Orders.module.css
var Orders_module = __webpack_require__(2137);
var Orders_module_default = /*#__PURE__*/__webpack_require__.n(Orders_module);
;// CONCATENATED MODULE: ./src/components/order/Orders.js




function Orders_defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function Orders_objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            Orders_defineProperty(target, key, source[key]);
        });
    }
    return target;
}
var Orders = function(props) {
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: (Orders_module_default()).Orders,
        children: props.orders.map(function(order) {
            return(/*#__PURE__*/ (0,react.createElement)(order_OrderSection, Orders_objectSpread({
            }, order, {
                key: Math.random()
            })));
        })
    }));
};
/* harmony default export */ var order_Orders = (Orders);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./src/components/order/OrderContent.module.css
var OrderContent_module = __webpack_require__(7765);
var OrderContent_module_default = /*#__PURE__*/__webpack_require__.n(OrderContent_module);
;// CONCATENATED MODULE: ./src/components/order/OrderContent.js








function OrderContent_objectWithoutProperties(source, excluded) {
    if (source == null) return {
    };
    var target = OrderContent_objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function OrderContent_objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {
    };
    var target = {
    };
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
var OrderContent = function(props) {
    var question = props.question, orderContent = OrderContent_objectWithoutProperties(props, [
        "question"
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Content/* default */.Z, {
        className: (OrderContent_module_default()).OrderContent,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_Question, {
                children: props.question
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(order_Orders, {
                orders: props.orders
            }),
            !props.title ? /*#__PURE__*/ (0,jsx_runtime.jsx)(next_link["default"], {
                href: "/contacts",
                passHref: true,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_AntiButton, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                        children: "По Телефону"
                    })
                })
            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(order_OrdersFooter, {
                children: props.title
            })
        ]
    }));
};
/* harmony default export */ var order_OrderContent = (OrderContent);

// EXTERNAL MODULE: ./src/components/layout/Page.js
var Page = __webpack_require__(7514);
;// CONCATENATED MODULE: ./src/storage/quiz-orders.js
// STARTING ORDERS
var kitchenSrc = "/order-assets/starting_items/kitchen.jpg";
var closetSrc = "/order-assets/starting_items/closet.jpg";
var childSrc = "/order-assets/starting_items/child.jpg";
var officeSrc = "/order-assets/starting_items/office.jpg";
var bathSrc = "/order-assets/starting_items/bath.jpg";
var tradeSrc = "/order-assets/starting_items/trade.jpg";
// KITCHEN ORDERS
var linearSrc = "/order-assets/kitchen/linear.jpg";
var angledSrc = "/order-assets/kitchen/angle.jpg";
var uShapedSrc = "/order-assets/kitchen/u-shaped.jpg";
var kitchenOthersSrc = "/order-assets/kitchen/other.jpg";
// MATERIALS ORDERS
var ldspSrc = "/order-assets/materials/ldsp.jpg";
var mdfSrc = "/order-assets/materials/mdf.jpg";
var massiveSrc = "/order-assets/materials/massive.jpg";
var materialsOthersSrc = "/order-assets/materials/other.jpg";
var startingOrders = [
    {
        imgSrc: kitchenSrc,
        title: "Кухня",
        query: "?type=kitchen"
    },
    {
        imgSrc: closetSrc,
        title: "Шкаф или Прихожая",
        query: "?type=closet"
    },
    {
        imgSrc: childSrc,
        title: "Детская",
        query: "?type=child"
    },
    {
        imgSrc: officeSrc,
        title: "Офисная мебель",
        query: "?type=office"
    },
    {
        imgSrc: bathSrc,
        title: "Мебель для Ванной",
        query: "?type=bath"
    },
    {
        imgSrc: tradeSrc,
        title: "Торговая мебель",
        query: "?type=trade"
    }, 
];
var kitchenOrders = [
    {
        imgSrc: linearSrc,
        title: "Прямая",
        query: "&shape=linear"
    },
    {
        imgSrc: angledSrc,
        title: "Угловая",
        query: "&shape=angled"
    },
    {
        imgSrc: uShapedSrc,
        title: "П-образная",
        query: "&shape=u-shaped"
    },
    {
        imgSrc: kitchenOthersSrc,
        others: true,
        query: "&shape=others"
    }, 
];
var materialsOrders = [
    {
        imgSrc: ldspSrc,
        title: "ЛДСП",
        query: "&material=ldsp",
        total: true
    },
    {
        imgSrc: mdfSrc,
        title: "МДФ",
        query: "&material=mdf",
        total: true
    },
    {
        imgSrc: massiveSrc,
        title: "Массив",
        query: "&material=massive",
        total: true
    },
    {
        imgSrc: materialsOthersSrc,
        others: true,
        query: "&material=others",
        total: true
    }, 
];
var quizOrders = {
    starting: startingOrders,
    kitchen: kitchenOrders,
    materials: materialsOrders
};
/* harmony default export */ var quiz_orders = (quizOrders);

;// CONCATENATED MODULE: ./src/pages/order/quiz.js





function quiz_defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function quiz_objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            quiz_defineProperty(target, key, source[key]);
        });
    }
    return target;
}
var OrderPage = function(props) {
    var router = (0,next_router.useRouter)();
    var content = {
        orders: quiz_orders.starting,
        question: "Выбирете категорию мебель",
        title: null
    };
    if (router.query["type"] === "kitchen" && !router.query["shape"]) {
        content = {
            orders: quiz_orders.kitchen,
            question: "Выбирете форму кухни",
            title: "Кухня"
        };
    } else if (router.query["type"]) {
        content = {
            orders: quiz_orders.materials,
            question: "Выбирете материалы",
            title: "Материалы"
        };
    }
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Page/* default */.Z, {
        title: "Заказать",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(order_OrderContent, quiz_objectSpread({
        }, content))
    }));
};
/* harmony default export */ var quiz = (OrderPage);


/***/ }),

/***/ 7765:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"OrderContent":"OrderContent_OrderContent___3Hp1"};

/***/ }),

/***/ 2137:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"Orders":"Orders_Orders__xedow"};

/***/ }),

/***/ 5915:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"OrdersFooter":"OrdersFooter_OrdersFooter__DJfPm","Arrow":"OrdersFooter_Arrow__Evtzz"};

/***/ }),

/***/ 6653:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"Content":"Content_Content__Klmip","MediaContent":"Content_MediaContent__YIf_4"};

/***/ }),

/***/ 2440:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"PageSpace":"Page_PageSpace__vlRAS","Page":"Page_Page__TDaJa","Spaced":"Page_Spaced__m35pe","NotSpaced":"Page_NotSpaced__4YxgJ","Title":"Page_Title__TdQ_T"};

/***/ }),

/***/ 8280:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"OrderSection":"OrderSection_OrderSection__bCve4","Title":"OrderSection_Title__oxMhl"};

/***/ }),

/***/ 4897:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"AntiButton":"AntiButton_AntiButton__k8YX3"};

/***/ }),

/***/ 7142:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"Question":"Question_Question__X6K03"};

/***/ }),

/***/ 5917:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"Secondary":"Secondary_Secondary__TPia2"};

/***/ }),

/***/ 5761:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"Third":"Third_Third__Uq0Dd"};

/***/ }),

/***/ 2333:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"Title":"Title_Title__q7br5"};

/***/ }),

/***/ 1163:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(387)


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [888], function() { return __webpack_exec__(2636); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);