(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[552],{

/***/ 2961:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/about-us",
      function () {
        return __webpack_require__(411);
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

/***/ 9741:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _Bold_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6530);
/* harmony import */ var _Bold_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Bold_module_scss__WEBPACK_IMPORTED_MODULE_1__);


var Bold = function(props) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
        className: (_Bold_module_scss__WEBPACK_IMPORTED_MODULE_1___default().Important),
        children: props.children
    }));
};
/* harmony default export */ __webpack_exports__["Z"] = (Bold);


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

/***/ 411:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ about_us; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/next/head.js
var head = __webpack_require__(9008);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./src/components/ui/Secondary.js
var Secondary = __webpack_require__(2276);
// EXTERNAL MODULE: ./src/components/ui/Section.js
var Section = __webpack_require__(4568);
// EXTERNAL MODULE: ./src/components/ui/Bold.js
var Bold = __webpack_require__(9741);
// EXTERNAL MODULE: ./src/components/aboutus/AboutUsSection.module.scss
var AboutUsSection_module = __webpack_require__(5705);
var AboutUsSection_module_default = /*#__PURE__*/__webpack_require__.n(AboutUsSection_module);
;// CONCATENATED MODULE: ./src/components/aboutus/AboutUsSection.js





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
var AboutUsSection = function(props) {
    var title = props.title, children = props.children, imgSrc = props.imgSrc, logoStyle = props.logoStyle, sectionProps = _objectWithoutProperties(props, [
        "title",
        "children",
        "imgSrc",
        "logoStyle"
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Section/* default */.Z, _objectSpread({
    }, sectionProps, {
        className: (AboutUsSection_module_default()).AboutUsSection,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: (AboutUsSection_module_default()).Heading,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Secondary/* default */.Z, {
                        children: title
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                        className: (AboutUsSection_module_default()).Logo,
                        style: logoStyle,
                        src: imgSrc,
                        alt: ""
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                children: children
            })
        ]
    })));
};
/* harmony default export */ var aboutus_AboutUsSection = (AboutUsSection);

// EXTERNAL MODULE: ./src/components/layout/Content.js
var Content = __webpack_require__(4712);
// EXTERNAL MODULE: ./src/components/aboutus/AboutUsContent.module.css
var AboutUsContent_module = __webpack_require__(5419);
var AboutUsContent_module_default = /*#__PURE__*/__webpack_require__.n(AboutUsContent_module);
;// CONCATENATED MODULE: ./src/components/aboutus/AboutUsContent.js





function AboutUsContent_defineProperty(obj, key, value) {
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
function AboutUsContent_objectSpread(target) {
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
            AboutUsContent_defineProperty(target, key, source[key]);
        });
    }
    return target;
}
var servicesSrc = "/about us/Services.svg";
var cartSrc = "/about us/Cart.svg";
var materialsSrc = "/about us/Materials.svg";
var clockSrc = "/about us/Clock.svg";
var deliverySrc = "/about us/Delivery.svg";
var buildingSrc = "/about us/Building.svg";
var aboutUsSections = [
    {
        imgSrc: servicesSrc,
        title: "Услуги",
        children: "Мы занимаемся изготовлением, сборкой, распилом, доставкой и установкой корпусной мебели на заказ"
    },
    {
        imgSrc: cartSrc,
        title: "Ассортимент",
        children: "Мы готовы изготовить любую корпусную мебель для дома, квартиры, офиса, торговых организаций и др.",
        logoStyle: {
            width: "4rem"
        }
    },
    {
        imgSrc: deliverySrc,
        title: "Доставка",
        children: "Мы осуществляем доставку в пределах Санкт-Петербурга и Лен. области , но при рентабельности заказа готовы работать и на более дальние расстояния",
        logoStyle: {
            width: "4rem"
        }
    },
    {
        imgSrc: materialsSrc,
        title: "Материалы",
        children: "При изготовлении мебели мы используем лишь качественные, крепкие материалы, соответствующие ГОСТу"
    },
    {
        imgSrc: clockSrc,
        title: "Время",
        children: "Мы изготавливаем мебель от 3 до 20 рабочих дней, в зависимости от сложности заказа"
    },
    {
        imgSrc: buildingSrc,
        title: "Наше производство",
        children: "Собственное автоматизированное производство с новым оборудованием. Здесь мы производим мебель \xabпод ключ\xbb от эскизов до сборки"
    }, 
];
var AboutUsContent = function(props) {
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Content/* default */.Z, {
        className: (AboutUsContent_module_default()).AboutUsContent,
        children: aboutUsSections.map(function(section) {
            return(/*#__PURE__*/ (0,react.createElement)(aboutus_AboutUsSection, AboutUsContent_objectSpread({
            }, section, {
                key: Math.random()
            })));
        })
    }));
};
/* harmony default export */ var aboutus_AboutUsContent = (AboutUsContent);

// EXTERNAL MODULE: ./src/components/layout/Page.js
var Page = __webpack_require__(7514);
;// CONCATENATED MODULE: ./src/pages/about-us.js




var title = "О Нас - Vigma";
var description = "Мы занимаемся изготовлением, сборкой, распилом, доставкой и установкой корпусной мебели на заказ";
var AboutUsPage = function(props) {
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(head["default"], {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("meta", {
                        name: "description",
                        content: description
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("title", {
                        children: title
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("meta", {
                        property: "og:title",
                        content: title
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("meta", {
                        property: "og:description",
                        content: description
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("meta", {
                        name: "twitter:title",
                        content: title
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("meta", {
                        name: "og:description",
                        content: description
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Page/* default */.Z, {
                title: "Кратко о нас",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(aboutus_AboutUsContent, {
                })
            })
        ]
    }));
};
/* harmony default export */ var about_us = (AboutUsPage);


/***/ }),

/***/ 5419:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"AboutUsContent":"AboutUsContent_AboutUsContent__6vWUk"};

/***/ }),

/***/ 5705:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"AboutUsSection":"AboutUsSection_AboutUsSection__yHITm","Heading":"AboutUsSection_Heading__wSeED","Logo":"AboutUsSection_Logo__sxKnw"};

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

/***/ 6530:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"Important":"Bold_Important__I4TSj"};

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

/***/ 9008:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(5443)


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [888], function() { return __webpack_exec__(2961); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);