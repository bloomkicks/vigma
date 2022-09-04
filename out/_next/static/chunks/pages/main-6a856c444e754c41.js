(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[671],{

/***/ 575:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/main",
      function () {
        return __webpack_require__(4030);
      }
    ]);
    if(false) {}
  

/***/ }),

/***/ 4712:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1799);
/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9396);
/* harmony import */ var _swc_helpers_src_object_without_properties_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9534);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _Content_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7680);
/* harmony import */ var _Content_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Content_module_scss__WEBPACK_IMPORTED_MODULE_4__);





var Content = function(props) {
    var children = props.children, className = props.className, contentProps = (0,_swc_helpers_src_object_without_properties_mjs__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(props, [
        "children",
        "className"
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("article", (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({}, contentProps), {
        className: "\n      ".concat((_Content_module_scss__WEBPACK_IMPORTED_MODULE_4___default().Content), " \n      ").concat(className || "", "\n      ").concat((_Content_module_scss__WEBPACK_IMPORTED_MODULE_4___default().MediaContent), "\n    "),
        children: children
    }));
};
/* harmony default export */ __webpack_exports__["Z"] = (Content);


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

/***/ 224:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1799);
/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9396);
/* harmony import */ var _swc_helpers_src_object_without_properties_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9534);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _Anchor_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7776);
/* harmony import */ var _Anchor_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Anchor_module_scss__WEBPACK_IMPORTED_MODULE_4__);





var Anchor = function(props) {
    var href = props.href, children = props.children, className = props.className, anchorProps = (0,_swc_helpers_src_object_without_properties_mjs__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(props, [
        "href",
        "children",
        "className"
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({
        href: href || "",
        className: "".concat((_Anchor_module_scss__WEBPACK_IMPORTED_MODULE_4___default().Anchor), " ").concat(className || "")
    }, anchorProps), {
        tabIndex: "1",
        children: children
    }));
};
/* harmony default export */ __webpack_exports__["Z"] = (Anchor);


/***/ }),

/***/ 9741:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _Bold_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4860);
/* harmony import */ var _Bold_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Bold_module_scss__WEBPACK_IMPORTED_MODULE_1__);


var Bold = function(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
        className: (_Bold_module_scss__WEBPACK_IMPORTED_MODULE_1___default().Important),
        children: props.children
    });
};
/* harmony default export */ __webpack_exports__["Z"] = (Bold);


/***/ }),

/***/ 834:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1799);
/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9396);
/* harmony import */ var _swc_helpers_src_object_without_properties_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9534);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _MainButton_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5187);
/* harmony import */ var _MainButton_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_MainButton_module_scss__WEBPACK_IMPORTED_MODULE_4__);





var MainButton = function(props) {
    var children = props.children, className = props.className, buttonProps = (0,_swc_helpers_src_object_without_properties_mjs__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(props, [
        "children",
        "className"
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({}, buttonProps), {
        className: "".concat((_MainButton_module_scss__WEBPACK_IMPORTED_MODULE_4___default().Button), " ").concat(className || ""),
        children: children
    }));
};
/* harmony default export */ __webpack_exports__["Z"] = (MainButton);


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

/***/ 7054:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ works_Work; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/next/router.js
var next_router = __webpack_require__(1163);
// EXTERNAL MODULE: ./src/store/quiz.ts + 18 modules
var quiz = __webpack_require__(4893);
// EXTERNAL MODULE: ./src/components/ui/MainButton.js
var MainButton = __webpack_require__(834);
// EXTERNAL MODULE: ./src/components/ui/Bold.js
var Bold = __webpack_require__(9741);
// EXTERNAL MODULE: ./src/components/ui/Secondary.js
var Secondary = __webpack_require__(2276);
// EXTERNAL MODULE: ./node_modules/@swc/helpers/src/_object_spread.mjs + 1 modules
var _object_spread = __webpack_require__(1799);
// EXTERNAL MODULE: ./node_modules/@swc/helpers/src/_object_spread_props.mjs
var _object_spread_props = __webpack_require__(9396);
// EXTERNAL MODULE: ./node_modules/@swc/helpers/src/_object_without_properties.mjs + 1 modules
var _object_without_properties = __webpack_require__(9534);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./src/components/ui/Modal.module.scss
var Modal_module = __webpack_require__(7994);
var Modal_module_default = /*#__PURE__*/__webpack_require__.n(Modal_module);
;// CONCATENATED MODULE: ./src/components/ui/Modal.js






var Backdrop = function(props) {
    var children = props.children, backdropProps = (0,_object_without_properties/* default */.Z)(props, [
        "children"
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", (0,_object_spread_props/* default */.Z)((0,_object_spread/* default */.Z)({
        id: "backdrop",
        className: (Modal_module_default()).Backdrop
    }, backdropProps), {
        children: children
    }));
};
var Modal = function(props) {
    var ref = (0,react.useState)(true), isActive = ref[0], setIsActive = ref[1];
    var clickHandler = function(e) {
        props.onClose && props.onClose(e);
        setIsActive(false);
    };
    return isActive && /*#__PURE__*/ (0,jsx_runtime.jsx)(Backdrop, {
        onClick: clickHandler,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: "".concat((Modal_module_default()).Modal, " ").concat(props.className),
            children: props.children
        })
    });
};
/* harmony default export */ var ui_Modal = (Modal);

// EXTERNAL MODULE: ./src/components/works/ZoomedImage.module.css
var ZoomedImage_module = __webpack_require__(8693);
var ZoomedImage_module_default = /*#__PURE__*/__webpack_require__.n(ZoomedImage_module);
;// CONCATENATED MODULE: ./src/components/works/ZoomedImage.js



var ZoomedImage = function(props) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_Modal, {
        className: (ZoomedImage_module_default()).ZoomedWrapper,
        onClose: props.onClose,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
            src: props.src,
            alt: "Фотография в фокусе",
            className: (ZoomedImage_module_default()).ZoomedImage
        })
    });
};
/* harmony default export */ var works_ZoomedImage = (ZoomedImage);

// EXTERNAL MODULE: ./src/components/works/ImageContainer.module.scss
var ImageContainer_module = __webpack_require__(6532);
var ImageContainer_module_default = /*#__PURE__*/__webpack_require__.n(ImageContainer_module);
;// CONCATENATED MODULE: ./src/components/works/ImageContainer.js




var ImageContainer = function(props) {
    var ref = (0,react.useState)(null), zoomed = ref[0], setZoomed = ref[1];
    var photos = props.photos, title = props.title;
    var zoomHandler = function(e) {
        setZoomed(e.target.src);
    };
    var unzoomHandler = function(e) {
        setZoomed(null);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            zoomed && /*#__PURE__*/ (0,jsx_runtime.jsx)(works_ZoomedImage, {
                onClose: unzoomHandler,
                src: zoomed
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: (ImageContainer_module_default()).images,
                children: photos.map(function(photo) {
                    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        onClick: zoomHandler,
                        className: photo.isVertical ? (ImageContainer_module_default()).ver : (ImageContainer_module_default()).hor,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                            src: photo.src,
                            alt: title + " Фотография"
                        })
                    }, Math.random());
                })
            })
        ]
    });
};
/* harmony default export */ var works_ImageContainer = (ImageContainer);

// EXTERNAL MODULE: ./src/components/works/Work.module.scss
var Work_module = __webpack_require__(3332);
var Work_module_default = /*#__PURE__*/__webpack_require__.n(Work_module);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 18 modules
var es = __webpack_require__(5617);
;// CONCATENATED MODULE: ./src/components/works/Work.js









function formatPrice(price) {
    var formattedPrice = "";
    for(var i = price.length; i > 0; i--){
        var toAdd = "";
        if (i % 3 === 0) {
            toAdd = ".";
        }
        toAdd += price[i - 1];
        formattedPrice = toAdd + formattedPrice;
    }
    formattedPrice = "от " + formattedPrice;
    return formattedPrice;
}
var Work = function(props) {
    var router = (0,next_router.useRouter)();
    var dispatch = (0,es/* useDispatch */.I0)();
    var photos = props.photos, title = props.title, description = props.description, price = props.price, colors = props.colors;
    var formattedPrice = "";
    if (price) {
        formattedPrice = formatPrice(price);
    }
    var orderHandler = function(e) {
        dispatch(quiz/* quizActions.selectItem */.JZ.selectItem(title));
        router.push("/order");
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
        className: (Work_module_default()).work,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(works_ImageContainer, {
                photos: photos,
                title: title
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("figcaption", {
                className: (Work_module_default()).left,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Secondary/* default */.Z, {
                        children: title
                    }),
                    description.map(function(desc) {
                        return /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                            children: desc
                        }, Math.random());
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("figcaption", {
                className: (Work_module_default()).right,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: (Work_module_default()).colors,
                        children: colors.map(function(color) {
                            return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                style: {
                                    background: color
                                }
                            }, Math.random());
                        })
                    }),
                    price && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: (Work_module_default()).price,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Bold/* default */.Z, {
                                children: formattedPrice
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("small", {
                                children: "руб. за п.м."
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(MainButton/* default */.Z, {
                tabIndex: 1,
                onClick: orderHandler,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                    children: "Заказать"
                })
            })
        ]
    });
};
/* harmony default export */ var works_Work = (Work);


/***/ }),

/***/ 4030:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ main; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/@swc/helpers/src/_object_spread.mjs + 1 modules
var _object_spread = __webpack_require__(1799);
// EXTERNAL MODULE: ./node_modules/@swc/helpers/src/_object_spread_props.mjs
var _object_spread_props = __webpack_require__(9396);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./src/storage/works.js + 3 modules
var works = __webpack_require__(6623);
// EXTERNAL MODULE: ./src/components/works/Work.js + 3 modules
var Work = __webpack_require__(7054);
// EXTERNAL MODULE: ./src/components/main/MainWork.module.scss
var MainWork_module = __webpack_require__(9472);
var MainWork_module_default = /*#__PURE__*/__webpack_require__.n(MainWork_module);
;// CONCATENATED MODULE: ./src/components/main/MainWork.js







var MainWork = function(props) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("aside", {
        className: (MainWork_module_default()).MainWork,
        children: works/* firstWorks.map */.p.map(function(work, index) {
            return /*#__PURE__*/ (0,react.createElement)(Work/* default */.Z, (0,_object_spread_props/* default */.Z)((0,_object_spread/* default */.Z)({}, work), {
                tabIndex: "1" + index,
                key: work.id
            }));
        })
    });
};
/* harmony default export */ var main_MainWork = (MainWork);

// EXTERNAL MODULE: ./src/data/general/assets-paths.ts
var assets_paths = __webpack_require__(8138);
// EXTERNAL MODULE: ./node_modules/@swc/helpers/src/_object_without_properties.mjs + 1 modules
var _object_without_properties = __webpack_require__(9534);
// EXTERNAL MODULE: ./src/components/ui/Third.module.scss
var Third_module = __webpack_require__(4989);
var Third_module_default = /*#__PURE__*/__webpack_require__.n(Third_module);
;// CONCATENATED MODULE: ./src/components/ui/Third.js





var Third = function(props) {
    var children = props.children, thirdProps = (0,_object_without_properties/* default */.Z)(props, [
        "children"
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", (0,_object_spread_props/* default */.Z)((0,_object_spread/* default */.Z)({}, thirdProps), {
        className: (Third_module_default()).Third,
        children: children
    }));
};
/* harmony default export */ var ui_Third = (Third);

// EXTERNAL MODULE: ./src/components/main/MainAdvantage.module.css
var MainAdvantage_module = __webpack_require__(9530);
var MainAdvantage_module_default = /*#__PURE__*/__webpack_require__.n(MainAdvantage_module);
;// CONCATENATED MODULE: ./src/components/main/MainAdvantage.js




var MainAdvantage = function(props) {
    var style = props.style, children = props.children, title = props.title, logoSrc = props.logoSrc, advantageProps = (0,_object_without_properties/* default */.Z)(props, [
        "style",
        "children",
        "title",
        "logoSrc"
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (MainAdvantage_module_default()).MainAdvantage,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_Third, {
                children: [
                    title,
                    " ",
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                        alt: "",
                        src: logoSrc,
                        className: (MainAdvantage_module_default()).Logo
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                style: style,
                children: children
            })
        ]
    });
};
/* harmony default export */ var main_MainAdvantage = (MainAdvantage);

// EXTERNAL MODULE: ./src/components/ui/Secondary.js
var Secondary = __webpack_require__(2276);
// EXTERNAL MODULE: ./src/components/ui/Bold.js
var Bold = __webpack_require__(9741);
// EXTERNAL MODULE: ./src/components/ui/Section.js
var Section = __webpack_require__(4568);
// EXTERNAL MODULE: ./src/components/main/MainAdvantages.module.css
var MainAdvantages_module = __webpack_require__(3754);
var MainAdvantages_module_default = /*#__PURE__*/__webpack_require__.n(MainAdvantages_module);
;// CONCATENATED MODULE: ./src/components/main/MainAdvantages.js


var packageSvg = assets_paths/* mainAssetsPath */.Fp + "/package.svg";
var rulerSvg = assets_paths/* mainAssetsPath */.Fp + "/ruler.svg";
var gearsSvg = assets_paths/* mainAssetsPath */.Fp + "/gears.svg";





var MainAdvantages = function(pros) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Section/* default */.Z, {
        className: (MainAdvantages_module_default()).Advantages,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Secondary/* default */.Z, {
                children: [
                    "Почему ",
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Bold/* default */.Z, {
                        children: " выбирают нас"
                    }),
                    ":"
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(main_MainAdvantage, {
                        title: "Собственное производство",
                        logoSrc: gearsSvg,
                        style: {
                            fontSize: "0.76rem",
                            marginTop: "3px"
                        },
                        children: "Благодаря отсутствию торговых посредников в цепочке поставок, вы можете приобрести мебель по доступным ценам"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(main_MainAdvantage, {
                        title: "Выезд дизайнера-замерщика",
                        logoSrc: rulerSvg,
                        children: "Предоставляем дизайн-проект с замером бесплатно"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(main_MainAdvantage, {
                        title: "Доставка и установка",
                        logoSrc: packageSvg,
                        children: "Мы оказываем услуги по установке и доставке в пределах Санкт-Петербурга и ЛО"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ var main_MainAdvantages = (MainAdvantages);

// EXTERNAL MODULE: ./src/components/ui/MainButton.js
var MainButton = __webpack_require__(834);
// EXTERNAL MODULE: ./src/components/main/OrderButton.module.css
var OrderButton_module = __webpack_require__(7859);
var OrderButton_module_default = /*#__PURE__*/__webpack_require__.n(OrderButton_module);
;// CONCATENATED MODULE: ./src/components/main/OrderButton.js




var OrderButton = function(props) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
        href: "/order/quiz",
        passHref: true,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(MainButton/* default */.Z, {
            tabIndex: 5,
            className: (OrderButton_module_default()).Button,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                style: {
                    lineHeight: "1em",
                    verticalAlign: "baseline",
                    display: "inline-block"
                },
                children: "Предварительно Рассчитать"
            })
        })
    });
};
/* harmony default export */ var main_OrderButton = (OrderButton);

// EXTERNAL MODULE: ./src/components/layout/Content.js
var Content = __webpack_require__(4712);
// EXTERNAL MODULE: ./src/components/ui/Anchor.js
var Anchor = __webpack_require__(224);
// EXTERNAL MODULE: ./src/components/ui/Title.js
var Title = __webpack_require__(9240);
// EXTERNAL MODULE: ./src/components/main/MainContent.module.scss
var MainContent_module = __webpack_require__(8493);
var MainContent_module_default = /*#__PURE__*/__webpack_require__.n(MainContent_module);
;// CONCATENATED MODULE: ./src/components/main/MainContent.js










var MainContent = function(props) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Content/* default */.Z, {
        className: (MainContent_module_default()).MainContent,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Title/* default */.Z, {
                children: [
                    "создадим ",
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        className: "block",
                        children: " мебель по"
                    }),
                    " ",
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Bold/* default */.Z, {
                        children: "индивидуальному"
                    }),
                    " проекту в",
                    " ",
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        className: "block",
                        children: "Санкт-Петербурге"
                    }),
                    " и Лен. области"
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(main_MainAdvantages, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("h4", {
                    children: [
                        "Есть вопрос?",
                        " ",
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                            className: (MainContent_module_default()).onPhone,
                            children: [
                                "- Мы с радостью ответим вам",
                                " ",
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Anchor/* default */.Z, {
                                    href: "/contacts",
                                    children: "по телефону"
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(main_OrderButton, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(main_MainWork, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                passHref: true,
                href: "/works",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                    tabIndex: 20,
                    children: "Больше наших работ"
                })
            })
        ]
    });
};
/* harmony default export */ var main_MainContent = (MainContent);

// EXTERNAL MODULE: ./src/components/layout/Page.js
var Page = __webpack_require__(7514);
;// CONCATENATED MODULE: ./src/pages/main.js



var MainPage = function(props) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Page/* default */.Z, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(main_MainContent, {})
    });
};
/* harmony default export */ var main = (MainPage);


/***/ }),

/***/ 6623:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ storage_works; },
  "p": function() { return /* binding */ firstWorks; }
});

// EXTERNAL MODULE: ./node_modules/@swc/helpers/src/_array_like_to_array.mjs
var _array_like_to_array = __webpack_require__(943);
;// CONCATENATED MODULE: ./node_modules/@swc/helpers/src/_array_without_holes.mjs


function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return (0,_array_like_to_array/* default */.Z)(arr);
}

// EXTERNAL MODULE: ./node_modules/@swc/helpers/src/_iterable_to_array.mjs
var _iterable_to_array = __webpack_require__(3375);
;// CONCATENATED MODULE: ./node_modules/@swc/helpers/src/_non_iterable_spread.mjs
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

// EXTERNAL MODULE: ./node_modules/@swc/helpers/src/_unsupported_iterable_to_array.mjs
var _unsupported_iterable_to_array = __webpack_require__(1566);
;// CONCATENATED MODULE: ./node_modules/@swc/helpers/src/_to_consumable_array.mjs





function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || (0,_iterable_to_array/* default */.Z)(arr) || (0,_unsupported_iterable_to_array/* default */.Z)(arr) || _nonIterableSpread();
}

// EXTERNAL MODULE: ./src/data/general/assets-paths.ts
var assets_paths = __webpack_require__(8138);
;// CONCATENATED MODULE: ./src/storage/works.js


// QUARTZ KITCHEN
var quartzKitchenFront = "quartz/front.jpeg";
var quartzKitchenSide = "quartz/side.jpeg";
// TIMBER CLOSET
var timberClosetClosed = "timber/closed.jpg";
var timberClosetOpen = "timber/open.jpg";
// BED AND DESK
var bed = "bed, desk, shelf/bed.jpeg";
var desk = "bed, desk, shelf/desk.jpeg";
// RED KITCHEN
var redKitchenLeft = "kitchen_2/left.jpeg";
var redKitchenRight = "kitchen_2/right.jpeg";
// LESS LIME KITCHEN
var lessLimeKitchenLeft = "less lime kitchen/left.jpeg";
var lessLimeKitchenRight = "less lime kitchen/right.jpeg";
// FUTURE KITCHEN
var futureKitchenTop = "kitchen details/top.jpg";
var futureKitchenBottom = "kitchen details/bottom.jpg";
// LATTE KITCHEN
var latteKitchenMain = "latte/main.jpeg";
var latteKitchenAngle = "latte/angle.jpeg";
var latteKitchenFar = "latte/far.jpeg";
// LINEAR_2 KITCHEN
var linear2KitchenMain = "linear_2/main.jpeg";
var linear2KitchenLilFar = "linear_2/lilfar.jpeg";
var linear2KitchenFar = "linear_2/far.jpeg";
// MODERN KITCHEN
var modernKitchenMain = "modern/main.jpeg";
var modernKitchenFront = "modern/front.jpeg";
var modernKitchenLong = "modern/long.jpeg";
// NORWAY KITCHEN
var norwayKitchenMain = "norway/main.jpeg";
var norwayKitchenLight = "norway/light.jpeg";
var norwayKitchenAngle = "norway/angle.jpeg";
// SAFARI KITCHEN
var safariKitchenAngle = "safari/angle.jpeg";
var safariKitchenMain = "safari/main.jpeg";
var safariKitchenFar = "safari/far.jpeg";
// SOLID KITCHEN
var solidKitchenAngleMain = "solid/angle_main.jpeg";
var solidKitchenAngle2 = "solid/angle2.jpeg";
var solidKitchenMain = "solid/main.jpeg";
var firstWorks = [
    {
        id: Math.random(),
        photos: [
            {
                src: latteKitchenMain
            },
            {
                src: latteKitchenAngle,
                isVertical: true
            },
            {
                src: latteKitchenFar,
                isVertical: true
            }, 
        ],
        title: 'Кухня "Латте" Прямая',
        description: [
            "Габариты: 3000x500x2400",
            "Корпус: ЛДСП Влагостойкий",
            "Фасад: МДФ Пластик",
            "Фурнитура: Hettich",
            "Столешница: ДСП Пластик Троя", 
        ],
        price: "38651",
        colors: [
            "#cdcbcc",
            "#7d665e"
        ],
        query: {
            type: "kitchen",
            shape: "straight",
            material: "ldsp+mdf"
        }
    },
    {
        // SOLID
        id: Math.random(),
        photos: [
            {
                src: solidKitchenAngleMain
            },
            {
                src: solidKitchenAngle2,
                isVertical: true
            },
            {
                src: solidKitchenMain,
                isVertical: true
            }, 
        ],
        title: 'Кухня "Солид" Угловая',
        description: [
            "Габариты: 4200x2420x600",
            "Корпус: ЛДСП Влагостойкий",
            "Фасад: МДФ Эмаль",
            "Фурнитура: Hettich",
            "Столешница: Пластик", 
        ],
        price: "34376",
        colors: [
            "#746d71",
            "repeating-linear-gradient(90deg, #733617, #965632 3px)", 
        ],
        query: {
            type: "kitchen",
            shape: "angled",
            material: "lsdp+mdf"
        }
    }, 
];
var works = _toConsumableArray(firstWorks).concat([
    {
        // FUTURISTIC
        id: Math.random(),
        photos: [
            {
                src: futureKitchenTop
            },
            {
                src: futureKitchenBottom
            }, 
        ],
        title: 'Кухня "Футуристик" Угловая',
        description: [
            "Габариты: 2750x500x2400",
            "Корпус: ЛДСП Egger",
            "Фасад: МДФ",
            "Фурнитура: Hettich",
            "Столешница: Искусcтвенный камень", 
        ],
        price: "29875",
        colors: [
            "#b8b19f",
            "#353444"
        ],
        query: {
            type: "kitchen",
            shape: "angled",
            material: "lsdp+mdf"
        },
        style: {
            height: "350px"
        },
        imgContainerStyle: {
            height: "65%"
        }
    },
    {
        // RED BRUSNIKA
        id: Math.random(),
        photos: [
            {
                src: redKitchenLeft,
                isVertical: true
            },
            {
                src: redKitchenRight,
                isVertical: true
            }, 
        ],
        title: 'Кухня "Брусника" Угловая',
        description: [
            "Габариты: 2750x500x2400",
            "Корпус: ЛДСП",
            "Фасад: МДФ Плёнка",
            "Фурнитура: FGV (Италия)",
            "Столешница: Пластик", 
        ],
        price: "30610",
        colors: [
            "#fcfaee",
            "linear-gradient(45deg, #bb2725 30%, #c26267 50%, #bb2725 65%)", 
        ],
        query: {
            type: "kitchen",
            shape: "angled",
            material: "ldsp+lsdp+mdf"
        }
    },
    {
        // MODERN
        id: Math.random(),
        photos: [
            {
                src: modernKitchenMain
            },
            {
                src: modernKitchenFront,
                isVertical: true
            },
            {
                src: modernKitchenLong
            }, 
        ],
        title: 'Кухня "Модерн" c островком',
        description: [
            "Габариты: 2650х600х2500",
            "Корпус: ЛДСП Lamarty",
            "Фасад: Mattelux Super",
            "Фурнитура: Hettich",
            "Столешница: Пластик", 
        ],
        price: "33870",
        colors: [
            "#747675",
            "#c4baa4",
            "#644028"
        ],
        query: {
            type: "kitchen",
            shape: "island",
            material: "lsdp+mdf"
        },
        style: {
            height: "350px"
        },
        imgContainerStyle: {
            height: "60%"
        }
    },
    {
        id: Math.random(),
        photos: [
            {
                src: norwayKitchenMain
            },
            {
                src: norwayKitchenAngle
            },
            {
                src: norwayKitchenLight
            }, 
        ],
        title: 'Кухня "Норвегия" Угловая',
        description: [
            "Габариты: 2750х500х2400",
            "Корпус: ЛДСП Влагостойкий",
            "Фасад: МДФ Плёнка",
            "Фурнитура: Hettich",
            "Столешница: Пластик", 
        ],
        price: "22600",
        colors: [
            "#b8bab9",
            "#41454e",
            "repeating-linear-gradient(90deg, #a37452, #894f20 3px)", 
        ],
        query: {
            type: "kitchen",
            shape: "angled",
            material: "lsdp+mdf"
        },
        style: {
            height: "350px"
        }
    },
    {
        // EXPLIT
        id: Math.random(),
        photos: [
            {
                src: linear2KitchenMain
            },
            {
                src: linear2KitchenLilFar,
                isVertical: true
            },
            {
                src: linear2KitchenFar,
                isVertical: true
            }, 
        ],
        title: 'Кухня "Эксплит" Прямая',
        description: [
            "Габариты: 2850x500x23500",
            "Корпус: ЛДСП Влагостойкий",
            "Фасад: МДФ Плёнка",
            "Фурнитура: Boyard (Китай)", 
        ],
        price: "19400",
        colors: [
            "#c6bbb7",
            "#141614"
        ],
        query: {
            type: "kitchen",
            shape: "straight",
            material: "lsdp+mdf"
        }
    },
    {
        // SAFARI
        id: Math.random(),
        photos: [
            {
                src: safariKitchenAngle
            },
            {
                src: safariKitchenMain,
                isVertical: true
            },
            {
                src: safariKitchenFar,
                isVertical: true
            }, 
        ],
        title: 'Кухня "Сафари" Угловая',
        description: [
            "Габариты: 2500х600х2400",
            "Корпус: ЛДСП Влагостойкий",
            "Фасад: МДФ Плёнка",
            "Фурнитура: Hettich",
            "Столешница: Массив", 
        ],
        price: "31870",
        colors: [
            "repeating-linear-gradient(90deg, #b18a3b, #a37931 3px )",
            "#c2d5db",
            "#0b151f", 
        ],
        query: {
            type: "kitchen",
            shape: "angled",
            material: "lsdp+mdf"
        }
    },
    {
        // QUARTZ
        id: Math.random(),
        photos: [
            {
                src: quartzKitchenFront,
                isVertical: true
            },
            {
                src: quartzKitchenSide,
                isVertical: true
            }, 
        ],
        title: 'Кухня "Кварц" Угловая',
        description: [
            "Габариты: 2400х600х2450",
            "Корпус: ЛДСП",
            "Фасад: МДФ Плёнка",
            "Фурнитура: Hettich",
            "Столешница: Массив", 
        ],
        price: "41300",
        query: {
            type: "kitchen",
            shape: "angled",
            material: "ldsp+mdf"
        },
        colors: [
            "#a3bec5",
            "#6b5851"
        ],
        style: {
            height: "300px"
        },
        imgContainerStyle: {
            height: "70%"
        }
    },
    {
        // TIMBER
        id: Math.random(),
        photos: [
            {
                src: timberClosetClosed
            },
            {
                src: timberClosetOpen
            }, 
        ],
        title: 'Шкаф "Тимбер"',
        colors: [
            "#ada2a0",
            "#6b4b38",
            "#c0bcc3"
        ],
        description: [
            "Габариты: 3100x600x2400",
            "Корпус: ЛДСП Egger",
            "Фасад: МДФ Дуб Молочный",
            "Фурнитура: Boyard (Китай)", 
        ],
        price: "28400",
        query: {
            type: "closet",
            material: "ldsp+mdf"
        }
    },
    {
        // UYT
        id: Math.random(),
        photos: [
            {
                src: bed,
                isVertical: true
            },
            {
                src: desk,
                isVertical: true
            }, 
        ],
        title: 'Детская "Уют"',
        description: [
            "Габариты: 3700х2100х2400",
            "Корпус: ЛДСП с кромкой ПВХ 2мм",
            "Ручки: Направляющие Шариковые", 
        ],
        price: "35400",
        colors: [
            "#c4c2b6",
            "repeating-linear-gradient(-45deg, #aca89c, #786859 3px)", 
        ],
        query: {
            type: "child",
            material: "ldsp"
        }
    },
    {
        // LIME
        id: Math.random(),
        photos: [
            {
                src: lessLimeKitchenLeft,
                isVertical: true
            },
            {
                src: lessLimeKitchenRight,
                isVertical: true
            }, 
        ],
        title: 'Кухня "Лайм" Угловая',
        description: [
            "Габариты: 2780х600х2450",
            "Корпус: ЛДСП",
            "Фасад: МДФ Плёнка",
            "Фурнитура: Hettich",
            "Столешница: Искусственный Камень", 
        ],
        price: "23400",
        colors: [
            "linear-gradient(150deg, #e1fd5b 50%, #ffffff)",
            "#dfe1d4",
            "linear-gradient(45deg, #4f3d2b 20%, #86634d 50%, #4f3d2b)", 
        ],
        query: {
            type: "kitchen",
            shape: "angled",
            material: "lsdp+mdf"
        }
    }, 
]);
works.forEach(function(work, index) {
    var zeros = Array(3 - index.toString().length).fill("0").join("");
    var id = "p" + zeros + index;
    work.id = id;
    work.query.item = work.title;
    work.photos.forEach(function(photo) {
        return photo.src = assets_paths/* worksAssetsPath */.XX + "/" + photo.src;
    });
});
/* harmony default export */ var storage_works = (works);


/***/ }),

/***/ 9530:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"MainAdvantage":"MainAdvantage_MainAdvantage__W9KIv","Logo":"MainAdvantage_Logo__h1XgZ"};

/***/ }),

/***/ 3754:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"Advantages":"MainAdvantages_Advantages__GRyQS"};

/***/ }),

/***/ 7859:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"Button":"OrderButton_Button__57kTn"};

/***/ }),

/***/ 8693:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"ZoomedWrapper":"ZoomedImage_ZoomedWrapper__MLfN_","ZoomedImage":"ZoomedImage_ZoomedImage__ESo8H"};

/***/ }),

/***/ 7680:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"Content":"Content_Content__Klmip","MediaContent":"Content_MediaContent__YIf_4"};

/***/ }),

/***/ 6753:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"PageSpace":"Page_PageSpace__vlRAS","Page":"Page_Page__TDaJa","Spaced":"Page_Spaced__m35pe","NotSpaced":"Page_NotSpaced__4YxgJ","Title":"Page_Title__TdQ_T"};

/***/ }),

/***/ 8493:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"MainContent":"MainContent_MainContent__Ge2SR","Logo":"MainContent_Logo__8IdHR","onPhone":"MainContent_onPhone__inXvR"};

/***/ }),

/***/ 9472:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"MainWork":"MainWork_MainWork__E7j9d"};

/***/ }),

/***/ 7776:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"Anchor":"Anchor_Anchor__KIGyl"};

/***/ }),

/***/ 4860:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"Important":"Bold_Important__I4TSj"};

/***/ }),

/***/ 5187:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"Button":"MainButton_Button__n72zw"};

/***/ }),

/***/ 7994:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"Backdrop":"Modal_Backdrop__9RcyN","Modal":"Modal_Modal__FQ769"};

/***/ }),

/***/ 5628:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"Secondary":"Secondary_Secondary__TPia2"};

/***/ }),

/***/ 4989:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"Third":"Third_Third__Uq0Dd"};

/***/ }),

/***/ 7077:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"Title":"Title_Title__q7br5"};

/***/ }),

/***/ 6532:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"images":"ImageContainer_images__P8pK8","ver":"ImageContainer_ver__aX7Gv","hor":"ImageContainer_hor__VA5nT"};

/***/ }),

/***/ 3332:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"work":"Work_work__mof1y","left":"Work_left__4bVSJ","right":"Work_right__AbQhc","price":"Work_price__MW7il","colors":"Work_colors__ItVwo"};

/***/ }),

/***/ 1163:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(387)


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [888], function() { return __webpack_exec__(575); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);