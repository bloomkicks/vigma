(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[929],{

/***/ 3094:
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
/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1799);
/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9396);
/* harmony import */ var _swc_helpers_src_object_without_properties_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9534);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _ui_Title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9240);
/* harmony import */ var _Page_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6753);
/* harmony import */ var _Page_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Page_module_scss__WEBPACK_IMPORTED_MODULE_3__);






var Page = function(props) {
    var title = props.title, children = props.children, notSpaced = props.notSpaced, className = props.className, wrapperClassName = props.wrapperClassName, pageProps = (0,_swc_helpers_src_object_without_properties_mjs__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(props, [
        "title",
        "children",
        "notSpaced",
        "className",
        "wrapperClassName"
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "\n      ".concat((_Page_module_scss__WEBPACK_IMPORTED_MODULE_3___default().PageSpace), "\n      ").concat(wrapperClassName || "", "\n    "),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)({}, pageProps), {
            className: "\n          ".concat((_Page_module_scss__WEBPACK_IMPORTED_MODULE_3___default().Page), "\n          ").concat(title && (_Page_module_scss__WEBPACK_IMPORTED_MODULE_3___default().Spaced) || "", "\n          ").concat(notSpaced && (_Page_module_scss__WEBPACK_IMPORTED_MODULE_3___default().NotSpaced) || "", "\n          ").concat(className || "", "\n        "),
            children: [
                title && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ui_Title__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                    className: (_Page_module_scss__WEBPACK_IMPORTED_MODULE_3___default().Title),
                    children: title
                }),
                children
            ]
        }))
    });
};
/* harmony default export */ __webpack_exports__["Z"] = (Page);


/***/ }),

/***/ 2276:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1799);
/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9396);
/* harmony import */ var _swc_helpers_src_object_without_properties_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9534);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _Secondary_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5628);
/* harmony import */ var _Secondary_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Secondary_module_scss__WEBPACK_IMPORTED_MODULE_4__);





var Secondary = function(props) {
    var children = props.children, className = props.className, secondaryProps = (0,_swc_helpers_src_object_without_properties_mjs__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(props, [
        "children",
        "className"
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({}, secondaryProps), {
        className: "".concat((_Secondary_module_scss__WEBPACK_IMPORTED_MODULE_4___default().Secondary), " ").concat(className || ""),
        children: children
    }));
};
/* harmony default export */ __webpack_exports__["Z"] = (Secondary);


/***/ }),

/***/ 9240:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _Title_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7077);
/* harmony import */ var _Title_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Title_module_scss__WEBPACK_IMPORTED_MODULE_1__);


var Title = function(props) {
    var className = props.className;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1", {
        className: "\n        ".concat((_Title_module_scss__WEBPACK_IMPORTED_MODULE_1___default().Title), "\n        ").concat(className || "", "\n      ").trim(),
        children: props.children
    });
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
// EXTERNAL MODULE: ./node_modules/@swc/helpers/src/_object_spread.mjs + 1 modules
var _object_spread = __webpack_require__(1799);
// EXTERNAL MODULE: ./node_modules/@swc/helpers/src/_object_spread_props.mjs
var _object_spread_props = __webpack_require__(9396);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./src/data/general/assets-paths.ts
var assets_paths = __webpack_require__(8138);
// EXTERNAL MODULE: ./node_modules/@swc/helpers/src/_object_without_properties.mjs + 1 modules
var _object_without_properties = __webpack_require__(9534);
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
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (Rating_module_default()).Rating,
        children: [
            rating.map(function(star) {
                return /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                    className: (Rating_module_default()).Star,
                    src: starSrc,
                    alt: "Звезда"
                }, Math.random());
            }),
            nonActive.map(function(star) {
                return /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                    className: "".concat((Rating_module_default()).Star, " ").concat((Rating_module_default()).NonActive),
                    src: starSrc,
                    alt: "Звезда"
                }, Math.random());
            })
        ]
    });
};
/* harmony default export */ var reviews_Rating = (Rating);

// EXTERNAL MODULE: ./src/components/reviews/Review.module.css
var Review_module = __webpack_require__(2388);
var Review_module_default = /*#__PURE__*/__webpack_require__.n(Review_module);
;// CONCATENATED MODULE: ./src/components/reviews/Review.js








var Review = function(props) {
    var imageSrc = props.imageSrc, rating = props.rating, name = props.name, text = props.text, reviewProps = (0,_object_without_properties/* default */.Z)(props, [
        "imageSrc",
        "rating",
        "name",
        "text"
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Section/* default */.Z, (0,_object_spread_props/* default */.Z)((0,_object_spread/* default */.Z)({}, reviewProps), {
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
    }));
};
/* harmony default export */ var reviews_Review = (Review);

// EXTERNAL MODULE: ./src/components/reviews/Reviews.module.css
var Reviews_module = __webpack_require__(7798);
var Reviews_module_default = /*#__PURE__*/__webpack_require__.n(Reviews_module);
;// CONCATENATED MODULE: ./src/components/reviews/Reviews.js





var woman = assets_paths/* reviewsAssetsPath */.Fz + "/woman in a blue shirt.jpg";
var coolMan2 = assets_paths/* reviewsAssetsPath */.Fz + "/cool man 2.jpg";
var oldMan = assets_paths/* reviewsAssetsPath */.Fz + "/old man.jpg";


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
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("article", {
        className: (Reviews_module_default()).Reviews,
        children: reviews.map(function(review) {
            return /*#__PURE__*/ (0,react.createElement)(reviews_Review, (0,_object_spread_props/* default */.Z)((0,_object_spread/* default */.Z)({}, review), {
                key: Math.random()
            }));
        })
    });
};
/* harmony default export */ var reviews_Reviews = (Reviews);

// EXTERNAL MODULE: ./src/components/layout/Page.js
var Page = __webpack_require__(7514);
// EXTERNAL MODULE: ./node_modules/next/head.js
var head = __webpack_require__(9008);
var head_default = /*#__PURE__*/__webpack_require__.n(head);
;// CONCATENATED MODULE: ./src/pages/reviews.js





var title = "Отзывы - Vigma";
var description = "Отзывы наших клиентов";
var ReviewsPage = function(props) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((head_default()), {
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
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(reviews_Reviews, {})
            })
        ]
    });
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

/***/ 6753:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"PageSpace":"Page_PageSpace__vlRAS","Page":"Page_Page__TDaJa","Spaced":"Page_Spaced__m35pe","NotSpaced":"Page_NotSpaced__4YxgJ","Title":"Page_Title__TdQ_T"};

/***/ }),

/***/ 5628:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"Secondary":"Secondary_Secondary__TPia2"};

/***/ }),

/***/ 7077:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"Title":"Title_Title__q7br5"};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [888], function() { return __webpack_exec__(3094); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);