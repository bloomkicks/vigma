(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[25],{

/***/ 2636:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/order/quiz",
      function () {
        return __webpack_require__(872);
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

/***/ 872:
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
// EXTERNAL MODULE: ./src/components/ui/Secondary.js
var Secondary = __webpack_require__(2276);
// EXTERNAL MODULE: ./src/components/order/OrdersTitle.module.scss
var OrdersTitle_module = __webpack_require__(2804);
var OrdersTitle_module_default = /*#__PURE__*/__webpack_require__.n(OrdersTitle_module);
;// CONCATENATED MODULE: ./src/components/order/OrdersTitle.js




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
var OrdersTitle = function(props) {
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
        className: (OrdersTitle_module_default()).OrdersTitle,
        onClick: clickHandler,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                src: arrowSvg,
                alt: "Назад",
                className: (OrdersTitle_module_default()).Arrow
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Secondary/* default */.Z, {
                style: {
                    cursor: "pointer"
                },
                children: children
            })
        ]
    }));
};
/* harmony default export */ var order_OrdersTitle = (OrdersTitle);

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

// EXTERNAL MODULE: ./src/components/layout/Content.js
var Content = __webpack_require__(4712);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./src/components/ui/Section.js
var Section = __webpack_require__(4568);
// EXTERNAL MODULE: ./src/components/order/OrderSection.module.scss
var OrderSection_module = __webpack_require__(8280);
var OrderSection_module_default = /*#__PURE__*/__webpack_require__.n(OrderSection_module);
// EXTERNAL MODULE: ./src/storage/order-translations.js
var order_translations = __webpack_require__(336);
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
var furtherSrc = "/order-assets/further.jpg";
var customSrc = "/order-assets/custom.jpg";
var bodySrc = "/order-assets/body.jpg";
var frontSrc = "/order-assets/front.jpg";
var OrderSection = function(props) {
    var getAllQueries = function getAllQueries(query, param) {
        var format = param === void 0 ? function(q) {
            return q;
        } : param;
        var _searchParams;
        var formattedQuery = format(query.slice(1).split("="));
        var searchParams = new URLSearchParams(router.query);
        searchParams.delete(formattedQuery[0]);
        (_searchParams = searchParams).append.apply(_searchParams, _toConsumableArray(formattedQuery));
        return searchParams;
    };
    var initImgSrc = props.imgSrc, custom = props.custom, isFurther = props.isFurther, query1 = props.query, isBody = props.isBody, path = props.path, isFront = props.isFront, title = props.title, name = props.name, sectionProps = OrderSection_objectWithoutProperties(props, [
        "imgSrc",
        "custom",
        "isFurther",
        "query",
        "isBody",
        "path",
        "isFront",
        "title",
        "name"
    ]);
    var router = (0,next_router.useRouter)();
    var allQueries = getAllQueries(query1);
    var inputHandler = function(e) {
        allQueries = getAllQueries(query1, function(q) {
            q[1] = e.target.value;
            return q;
        });
    };
    var orderClickHandler = function(e) {
        var url = "".concat(router.pathname, "?").concat(allQueries);
        router.push(url);
    };
    var curParams = new URLSearchParams(router.query);
    var valueCond = !curParams.has("bundle") && !isFurther && curParams.has("category") && curParams.get("shape") !== "current" && curParams.get("front") !== "current" && curParams.get("body") !== "current" && curParams.get("tablet") !== "current";
    var valueRes = order_translations/* default */.Z[curParams.get(name)] || curParams.get(name) || "-";
    var value = valueCond && valueRes;
    var isChosen = false;
    var chosenSrc = null;
    if (valueCond) {
        var myValue = curParams.get(name);
        if (myValue) {
            isChosen = true;
            chosenSrc = path + "/" + name + "/" + curParams.get(name) + ".jpg";
            if ("frontbody".includes(name)) {
                chosenSrc = "/order-assets/materials/" + name + "/" + curParams.get(name) + ".jpg";
            }
            console.log(chosenSrc);
        }
    }
    if (isChosen && (!order_translations/* default */.Z[curParams.get(name)] || curParams.get(name) === "custom")) {
        chosenSrc = customSrc;
    }
    var imgSrc = isChosen ? chosenSrc : custom ? customSrc : isFurther ? furtherSrc : isBody ? bodySrc : isFront ? frontSrc : initImgSrc;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Section/* default */.Z, {
        className: "\n        ".concat((OrderSection_module_default()).OrderSection, " ").concat(custom && (OrderSection_module_default()).custom || "", "\n      "),
        onClick: orderClickHandler,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                src: imgSrc
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: (OrderSection_module_default()).Title,
                children: custom ? /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                    type: "text",
                    placeholder: "Ваш Вариант",
                    onInput: inputHandler,
                    onClick: function(e) {
                        return e.stopPropagation();
                    }
                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Secondary/* default */.Z, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("b", {
                        children: [
                            isFurther ? "Продолжить" : title + (value && ": " || ""),
                            value && /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                style: {
                                    fontWeight: 'normal'
                                },
                                children: value
                            })
                        ]
                    })
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
    var question = props.question, title = props.title, orderContent = OrderContent_objectWithoutProperties(props, [
        "question",
        "title"
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Content/* default */.Z, {
        className: (OrderContent_module_default()).OrderContent,
        children: [
            title && /*#__PURE__*/ (0,jsx_runtime.jsx)(order_OrdersTitle, {
                children: title
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(order_Orders, {
                orders: props.orders
            }),
            !title && /*#__PURE__*/ (0,jsx_runtime.jsx)(next_link["default"], {
                href: "/contacts",
                passHref: true,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_AntiButton, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                        children: "По Телефону"
                    })
                })
            })
        ]
    }));
};
/* harmony default export */ var order_OrderContent = (OrderContent);

// EXTERNAL MODULE: ./src/components/layout/Page.js
var Page = __webpack_require__(7514);
;// CONCATENATED MODULE: ./src/storage/quiz-functions.js
function getMetaOrders(param) {
    var path = param.path, names = param.names, queryType = param.queryType, title = param.title, question = param.question;
    var orders = [];
    var customSection = {
        custom: true,
        query: queryType + "=" + "custom"
    };
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = Object.keys(names)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var name = _step.value;
            var title1 = names[name];
            var imgSrc = path + "/" + name + ".jpg";
            var query = queryType + "=" + name;
            var section = {
                title: title1,
                imgSrc: imgSrc,
                query: query,
                name: name
            };
            orders.push(section);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    orders.push(customSection);
    var metaOrders = {
        title: title,
        question: question,
        orders: orders
    };
    return metaOrders;
}
function getBundle(param) {
    var path = param.path, names = param.names, title = param.title, question = param.question;
    var orders = [];
    var furtherSection = {
        isFurther: true,
        query: "&bundle=custom"
    };
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = Object.keys(names)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var name = _step.value;
            var title2 = names[name];
            var imgSrc = path + "/" + name + ".jpg";
            var query = "&" + name + "=" + "current";
            var section = {
                title: title2,
                imgSrc: imgSrc,
                path: path,
                query: query,
                name: name
            };
            orders.push(section);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    orders.push(furtherSection);
    var metaOrders = {
        title: title,
        question: question,
        orders: orders
    };
    return metaOrders;
}

;// CONCATENATED MODULE: ./src/storage/quiz-orders.js

var categories = {
    question: "Выбирете категорию мебели",
    path: "/order-assets/starting_items",
    queryType: "?category",
    names: {
        kitchen: "Кухни",
        closet: "Шкафы",
        child: "Детская мебель",
        bath: "Мебель для Ванной",
        trade: "Торговая мебель",
        office: "Офисная мебель"
    }
};
// KITCHEN
var kitchenShapes = {
    title: "Форма Кухни",
    question: "Выбирете форму мебели",
    path: "/order-assets/kitchen/shape",
    queryType: "&shape",
    names: {
        linear: "Прямая",
        angled: "Угловая",
        "u-shaped": "П-образная"
    }
};
var tableMaterials = {
    title: "Столешница",
    question: "Выбирете материалы столешницы",
    path: "/order-assets/kitchen/tablet",
    queryType: "&tablet",
    names: {
        "stone-acryl": "Искусственный Акрил",
        massive: "Массив",
        troya: "ДСП Троя",
        agra: "ДСП Агра",
        quartz: "Искусственный Кварц"
    }
};
var kitchenBundle = {
    title: "Кухня",
    question: "Выбирете составляющие кухни",
    path: "/order-assets/kitchen",
    names: {
        shape: "Форма",
        front: "Фасад",
        body: "Корпус",
        tablet: "Столешница"
    }
};
// CLOSET
var closetShapes = {
    title: "Тип",
    question: "Выбирете тип шкафа",
    path: "/order-assets/closet/shape",
    queryType: "&shape",
    names: {
        kupe: "Шкаф-Купе",
        entry: "Прихожая",
        wardrobe: "Гардеробная"
    }
};
var closetBundle = {
    title: "Шкаф",
    question: "Выбирете составляющие шкафа",
    path: "/order-assets/closet",
    names: {
        shape: "Тип Шкафа",
        front: "Фасад",
        body: "Корпус"
    }
};
// CHILD
var childShapes = {
    title: "Категория Детской мебели",
    question: "Выбирете категорию детской мебели",
    queryType: "&shape",
    path: "/order-assets/child/shape",
    names: {
        table: "Столики",
        bed: "Кровати",
        wall: "Детские Стенки"
    }
};
var childBundle = {
    title: "Детская мебель",
    question: "Выбирете составляющие детской мебели",
    path: "/order-assets/child",
    names: {
        shape: "Категория",
        front: "Фасад",
        body: "Корпус"
    }
};
// OFFICE
var officeShapes = {
    title: "Категория Офисной мебели",
    question: "Выбирете категорию офисной мебели",
    queryType: "&shape",
    path: "/order-assets/office/shape",
    names: {
        table: "Столы",
        shelf: "Стеллажи",
        wardrobe: "Гардеробные"
    }
};
var officeBundle = {
    title: "Офисная мебель",
    question: "Выбирете составляющие офисной мебели",
    path: "/order-assets/office",
    names: {
        shape: "Категория",
        front: "Фасад",
        body: "Корпус"
    }
};
// TRADE
var tradeShapes = {
    title: "Категория Торговой мебели",
    question: "Выбирете категорию торговой мебели",
    queryType: "&shape",
    path: "/order-assets/trade/shape",
    names: {
        island: "Островки",
        stall: "Прилавки",
        shelf: "Стеллажи"
    }
};
var tradeBundle = {
    title: "Торговая мебель",
    question: "Выбирете составляющие торговой мебели",
    path: "/order-assets/trade",
    names: {
        shape: "Категория",
        front: "Фасад",
        body: "Корпус"
    }
};
// BATH
var bathShapes = {
    title: "Категория мебели для Ванной",
    question: "Выбирете мебель для ванной",
    queryType: "&shape",
    path: "/order-assets/bath/shape",
    names: {
        penal: "Пенал",
        closet: "Шкаф",
        tablet: "Столешница"
    }
};
var bathBundle = {
    title: "Мебель для Ванной",
    question: "Выбирете составляющие для мебели в ванной",
    path: "/order-assets/bath",
    names: {
        shape: "Категория",
        front: "Фасад",
        body: "Корпус"
    }
};
// BODY MATERIALS
var bodyMaterials = {
    title: "Корпус",
    question: "Выбирете материалы корпуса",
    path: "/order-assets/materials/body",
    queryType: "&body",
    names: {
        egger: "ЛДСП Egger",
        ldsp: "ЛДСП",
        dsp: "ДСП"
    }
};
// FRONT MATERIALS
var frontMaterials = {
    title: "Фасад",
    question: "Выбирете материалы фасада",
    path: "/order-assets/materials/front",
    queryType: "&front",
    names: {
        ldsp: "ЛДСП",
        plastic: "Пластик",
        agt: "МДФ AGT",
        acryllic: "Акрил",
        dyed: "МДФ Крашенный",
        tape: "МДФ Плёнка",
        massive: "Массив"
    }
};
var allOrders = {
    category: getMetaOrders(categories),
    materials: {
        front: getMetaOrders(frontMaterials),
        body: getMetaOrders(bodyMaterials)
    },
    kitchen: {
        shape: getMetaOrders(kitchenShapes),
        tablet: getMetaOrders(tableMaterials),
        bundle: getBundle(kitchenBundle)
    },
    closet: {
        shape: getMetaOrders(closetShapes),
        bundle: getBundle(closetBundle)
    },
    child: {
        shape: getMetaOrders(childShapes),
        bundle: getBundle(childBundle)
    },
    office: {
        shape: getMetaOrders(officeShapes),
        bundle: getBundle(officeBundle)
    },
    trade: {
        shape: getMetaOrders(tradeShapes),
        bundle: getBundle(tradeBundle)
    },
    bath: {
        shape: getMetaOrders(bathShapes),
        bundle: getBundle(bathBundle)
    }
};
/* harmony default export */ var quiz_orders = (allOrders);

;// CONCATENATED MODULE: ./src/pages/order/quiz.js





function quiz_arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++){
            arr2[i] = arr[i];
        }
        return arr2;
    }
}
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
function quiz_iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}
function quiz_nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
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
function quiz_toConsumableArray(arr) {
    return quiz_arrayWithoutHoles(arr) || quiz_iterableToArray(arr) || quiz_nonIterableSpread();
}
var OrderPage = function(props) {
    var getContent = function getContent(tree, values) {
        content = quiz_orders[tree].bundle;
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = content.orders.filter(function(i) {
                return "frontbody".includes(i.name);
            })[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var material = _step.value;
                if (material.name === "front") {
                    material.isFront = true;
                } else {
                    material.isBody = true;
                }
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
        if (!values || values.length === 0) {
            return;
        }
        getCurrent: {
            var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
            try {
                for(var _iterator1 = values[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                    var value = _step1.value;
                    if (router.query[value] === "current") {
                        content = quiz_orders[tree][value];
                        break getCurrent;
                    }
                }
            } catch (err) {
                _didIteratorError1 = true;
                _iteratorError1 = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                        _iterator1.return();
                    }
                } finally{
                    if (_didIteratorError1) {
                        throw _iteratorError1;
                    }
                }
            }
            var _iteratorNormalCompletion2 = true, _didIteratorError2 = false, _iteratorError2 = undefined;
            try {
                for(var _iterator2 = [
                    "front",
                    "body"
                ][Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true){
                    var value1 = _step2.value;
                    if (router.query[value1] === "current") {
                        content = quiz_orders.materials[value1];
                        break getCurrent;
                    }
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                        _iterator2.return();
                    }
                } finally{
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }
        }
    };
    var router = (0,next_router.useRouter)();
    var content = quiz_orders.category;
    var category = router.query["category"];
    var queries = [
        "shape"
    ];
    if (category === "kitchen") {
        queries.push("tablet");
    }
    if ([
        "kitchen",
        "closet",
        "child",
        "bath",
        "trade",
        "office", 
    ].includes(category)) {
        getContent(category, queries);
    } else if (category) {
        router.push("/order?category=".concat(router.query.category));
    }
    var allDone = true;
    var _iteratorNormalCompletion3 = true, _didIteratorError3 = false, _iteratorError3 = undefined;
    try {
        for(var _iterator3 = quiz_toConsumableArray(queries).concat([
            "front",
            "body"
        ])[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true){
            var query = _step3.value;
            var real = router.query[query];
            if (real && real !== "current") {
            } else {
                allDone = false;
            }
        }
    } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                _iterator3.return();
            }
        } finally{
            if (_didIteratorError3) {
                throw _iteratorError3;
            }
        }
    }
    if (allDone) {
        var url = "/order?".concat(new URLSearchParams(router.query));
        router.push(url);
    }
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Page/* default */.Z, {
        title: "Рассчитать",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(order_OrderContent, quiz_objectSpread({
        }, content))
    }));
};
/* harmony default export */ var quiz = (OrderPage);


/***/ }),

/***/ 336:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";
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
var _obj;
var orderTranslations = (_obj = {
    kitchen: "Кухня",
    closet: "Шкаф",
    child: "Детская мебель",
    trade: "Торговая мебель",
    office: "Офисная мебель",
    bath: "Мебель для Ванной",
    linear: "Прямая",
    angled: "Угловая",
    "u-shaped": "П-образная",
    kupe: "Шкаф-Купе",
    wardrobe: "Гардеробная",
    entry: "Прихожая",
    table: "Стол",
    tablet: "Столешница",
    wall: "Детская Стенка",
    bed: "Кровать",
    penal: "Пенал",
    island: "Островок",
    shelf: "Стеллажи",
    stall: "Прилавки",
    ldsp: "ЛДСП",
    plastic: "Пластик",
    agt: "МДФ AGT",
    acryllic: "Акрил",
    dyed: "МДФ Крашенный",
    tape: "МДФ Плёнка",
    massive: "Массив"
}, _defineProperty(_obj, "ldsp", "ЛДСП"), _defineProperty(_obj, "egger", "ЛДСП Egger"), _defineProperty(_obj, "dsp", "ДСП"), _defineProperty(_obj, "stone-acryl", "Камень Акрил"), _defineProperty(_obj, "troya", "ДСП Троя"), _defineProperty(_obj, "agra", "ДСП Агра"), _defineProperty(_obj, "quartz", "Искуственный Кварц"), _defineProperty(_obj, "custom", "Ваш Вариант"), _obj);
/* harmony default export */ __webpack_exports__["Z"] = (orderTranslations);


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
module.exports = {"OrderSection":"OrderSection_OrderSection__bCve4","Title":"OrderSection_Title__oxMhl","custom":"OrderSection_custom__QBXKt"};

/***/ }),

/***/ 2804:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"OrdersTitle":"OrdersTitle_OrdersTitle__JE_a0","Arrow":"OrdersTitle_Arrow__UxwfA"};

/***/ }),

/***/ 4897:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"AntiButton":"AntiButton_AntiButton__k8YX3"};

/***/ }),

/***/ 5917:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"Secondary":"Secondary_Secondary__TPia2"};

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