(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[929],{

/***/ 2067:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/reviews",
      function () {
        return __webpack_require__(8958);
      }
    ]);
    if(false) {}
  

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

/***/ 8958:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ pages_reviews; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./src/pages/ReviewsPage.module.css
var ReviewsPage_module = __webpack_require__(5191);
var ReviewsPage_module_default = /*#__PURE__*/__webpack_require__.n(ReviewsPage_module);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./src/components/ui/Secondary.js
var Secondary = __webpack_require__(2276);
// EXTERNAL MODULE: ./src/components/ui/Section.js
var Section = __webpack_require__(4568);
// EXTERNAL MODULE: ./src/components/reviews/Rating.module.css
var Rating_module = __webpack_require__(4633);
var Rating_module_default = /*#__PURE__*/__webpack_require__.n(Rating_module);
;// CONCATENATED MODULE: ./src/components/reviews/Rating.js


var starSrc = "/reviews-assets/star.svg";
var Rating = function(props) {
    var rating = new Array(props.rating).fill(true);
    var nonActive = new Array(5 - props.rating).fill(false);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (Rating_module_default()).Rating,
        children: [
            rating.map(function(star) {
                return(/*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                    className: (Rating_module_default()).Star,
                    src: starSrc,
                    alt: "Звезда"
                }, Math.random()));
            }),
            nonActive.map(function(star) {
                return(/*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                    className: "".concat((Rating_module_default()).Star, " ").concat((Rating_module_default()).NonActive),
                    src: starSrc,
                    alt: "Звезда"
                }, Math.random()));
            })
        ]
    }));
};
/* harmony default export */ var reviews_Rating = (Rating);

// EXTERNAL MODULE: ./src/components/reviews/Review.module.css
var Review_module = __webpack_require__(2388);
var Review_module_default = /*#__PURE__*/__webpack_require__.n(Review_module);
;// CONCATENATED MODULE: ./src/components/reviews/Review.js





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
var Review = function(props) {
    var imageSrc = props.imageSrc, rating = props.rating, name = props.name, text = props.text, reviewProps = _objectWithoutProperties(props, [
        "imageSrc",
        "rating",
        "name",
        "text"
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Section/* default */.Z, _objectSpread({
    }, reviewProps, {
        className: (Review_module_default()).Review,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                src: imageSrc,
                alt: name,
                className: (Review_module_default()).Image
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(reviews_Rating, {
                rating: rating
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Secondary/* default */.Z, {
                className: (Review_module_default()).Name,
                children: name
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                className: (Review_module_default()).Text,
                children: text
            })
        ]
    })));
};
/* harmony default export */ var reviews_Review = (Review);

// EXTERNAL MODULE: ./src/components/reviews/Reviews.module.css
var Reviews_module = __webpack_require__(7798);
var Reviews_module_default = /*#__PURE__*/__webpack_require__.n(Reviews_module);
;// CONCATENATED MODULE: ./src/components/reviews/Reviews.js




function Reviews_defineProperty(obj, key, value) {
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
function Reviews_objectSpread(target) {
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
            Reviews_defineProperty(target, key, source[key]);
        });
    }
    return target;
}
var woman = "/reviews-assets/woman in a blue shirt.jpg";
var coolMan2 = "/reviews-assets/cool man 2.jpg";
var oldMan = "reviews-assets/old man.jpg";
var reviews = [
    {
        imageSrc: woman,
        name: "Ольга Рудц",
        rating: 5,
        text: "Качество кухни очень хорошее — ровный, однотонный профиль качественная фурнитурв. Кухня приобрела приобрела новый и современный вид. И хоть мусора после такого превращения было много, мастера все убрали.  Отдельное спасибо установщику Михаилу, который сумел быстро установить высокие полки!  "
    },
    {
        imageSrc: coolMan2,
        name: "Максим Филатов",
        rating: 5,
        text: "Из положительного: внимательное и добожелательное отношение на всех этапах и у всех мастеров. Видно, что ребята проффисионалы: шкаф качественный, красивый, крепкий, ничего не скрипит. Быстро все установили, и убрали за собой мусор.  Не понравилось только одно - доставка затянулась на 2 дня. Хоть на улице и зима, но шкаф я очень сильно ждал (скинули мне фото перед доставкой)"
    },
    {
        imageSrc: oldMan,
        name: "Николай Стровский",
        rating: 5,
        text: "Заказвал кровать, пришла быстро, качественная, дерево прям поет. Считай с мастерами делал, ведь регулярно присылали фото-отчет.  Но как оказалось, вигма не доставляет в Архнагельск, а сам я доехать не мог, очень занят был перед праздниками.  Однако решили всё быстро - мастера, добрые люди, помогли с доставкой - довезли чуть ль не до самого Архангельского.  Остался очень рад, всем рекоммендую!"
    }, 
];
var Reviews = function(props) {
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("article", {
        className: (Reviews_module_default()).Reviews,
        children: reviews.map(function(review) {
            return(/*#__PURE__*/ (0,react.createElement)(reviews_Review, Reviews_objectSpread({
            }, review, {
                key: Math.random()
            })));
        })
    }));
};
/* harmony default export */ var reviews_Reviews = (Reviews);

// EXTERNAL MODULE: ./src/components/layout/Page.js
var Page = __webpack_require__(7514);
// EXTERNAL MODULE: ./node_modules/next/head.js
var head = __webpack_require__(9008);
;// CONCATENATED MODULE: ./src/pages/reviews.js





var title = "Отзывы - Vigma";
var description = "Отзывы наших клиентов";
var ReviewsPage = function(props) {
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
                title: "Отзывы",
                className: (ReviewsPage_module_default()).ReviewsPage,
                wrapperClassName: (ReviewsPage_module_default()).ReviewsWrapper,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(reviews_Reviews, {
                })
            })
        ]
    }));
};
/* harmony default export */ var pages_reviews = (ReviewsPage);


/***/ }),

/***/ 4633:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"Rating":"Rating_Rating__u2FFJ","Star":"Rating_Star__d__YW","NonActive":"Rating_NonActive__XYnJ_"};

/***/ }),

/***/ 2388:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"Review":"Review_Review__xaRJW","Image":"Review_Image__Ip_yL","Text":"Review_Text__Sxl65"};

/***/ }),

/***/ 7798:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"Reviews":"Reviews_Reviews__7KWG5"};

/***/ }),

/***/ 5191:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"ReviewsPage":"ReviewsPage_ReviewsPage__ZTSNF","ReviewsWrapper":"ReviewsPage_ReviewsWrapper__DPmUv"};

/***/ }),

/***/ 2440:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"PageSpace":"Page_PageSpace__vlRAS","Page":"Page_Page__TDaJa","Spaced":"Page_Spaced__m35pe","NotSpaced":"Page_NotSpaced__4YxgJ","Title":"Page_Title__TdQ_T"};

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
/******/ __webpack_require__.O(0, [888], function() { return __webpack_exec__(2067); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);