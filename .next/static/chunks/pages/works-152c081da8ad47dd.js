(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[547],{

/***/ 9765:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/works",
      function () {
        return __webpack_require__(9771);
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

/***/ 834:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _MainButton_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1281);
/* harmony import */ var _MainButton_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_MainButton_module_scss__WEBPACK_IMPORTED_MODULE_1__);


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
var MainButton = function(props) {
    var children = props.children, className = props.className, buttonProps = _objectWithoutProperties(props, [
        "children",
        "className"
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", _objectSpread({
    }, buttonProps, {
        className: "".concat((_MainButton_module_scss__WEBPACK_IMPORTED_MODULE_1___default().Button), " ").concat(className || ""),
        children: children
    })));
};
/* harmony default export */ __webpack_exports__["Z"] = (MainButton);


/***/ }),

/***/ 1089:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Backdrop */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7294);
/* harmony import */ var _Modal_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3033);
/* harmony import */ var _Modal_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Modal_module_scss__WEBPACK_IMPORTED_MODULE_2__);



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
var Backdrop = function(props) {
    var children = props.children, backdropProps = _objectWithoutProperties(props, [
        "children"
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", _objectSpread({
        id: "backdrop",
        className: (_Modal_module_scss__WEBPACK_IMPORTED_MODULE_2___default().Backdrop)
    }, backdropProps, {
        children: children
    })));
};

var Modal = function(props) {
    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), isActive = ref[0], setIsActive = ref[1];
    var clickHandler = function(e) {
        props.onClose && props.onClose(e);
        setIsActive(false);
    };
    return isActive && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Backdrop, {
        onClick: clickHandler,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: "".concat((_Modal_module_scss__WEBPACK_IMPORTED_MODULE_2___default().Modal), " ").concat(props.className),
            children: props.children
        })
    });
};
/* harmony default export */ __webpack_exports__["Z"] = (Modal);


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

/***/ 9023:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ works_Work; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./src/components/ui/MainButton.js
var MainButton = __webpack_require__(834);
// EXTERNAL MODULE: ./src/components/ui/Bold.js
var Bold = __webpack_require__(9741);
// EXTERNAL MODULE: ./src/components/ui/Secondary.js
var Secondary = __webpack_require__(2276);
// EXTERNAL MODULE: ./src/components/ui/Modal.js
var Modal = __webpack_require__(1089);
// EXTERNAL MODULE: ./src/components/works/ZoomedImage.module.css
var ZoomedImage_module = __webpack_require__(8693);
var ZoomedImage_module_default = /*#__PURE__*/__webpack_require__.n(ZoomedImage_module);
;// CONCATENATED MODULE: ./src/components/works/ZoomedImage.js



var ZoomedImage = function(props) {
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Modal/* default */.Z, {
        className: (ZoomedImage_module_default()).ZoomedWrapper,
        onClose: props.onClose,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
            src: props.src,
            alt: "Фотография в фокусе",
            className: (ZoomedImage_module_default()).ZoomedImage
        })
    }));
};
/* harmony default export */ var works_ZoomedImage = (ZoomedImage);

// EXTERNAL MODULE: ./src/components/works/ImageContainer.module.scss
var ImageContainer_module = __webpack_require__(1821);
var ImageContainer_module_default = /*#__PURE__*/__webpack_require__.n(ImageContainer_module);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
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
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            zoomed && /*#__PURE__*/ (0,jsx_runtime.jsx)(works_ZoomedImage, {
                onClose: unzoomHandler,
                src: zoomed
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: (ImageContainer_module_default()).images,
                children: photos.map(function(photo) {
                    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        onClick: zoomHandler,
                        className: photo.isVertical ? (ImageContainer_module_default()).ver : (ImageContainer_module_default()).hor,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                            src: photo.src,
                            alt: title + " Фотография"
                        })
                    }, Math.random()));
                })
            })
        ]
    }));
};
/* harmony default export */ var works_ImageContainer = (ImageContainer);

// EXTERNAL MODULE: ./src/components/works/Work.module.scss
var Work_module = __webpack_require__(33);
var Work_module_default = /*#__PURE__*/__webpack_require__.n(Work_module);
// EXTERNAL MODULE: ./node_modules/next/router.js
var next_router = __webpack_require__(1163);
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
    var photos = props.photos, title = props.title, description = props.description, price = props.price, colors = props.colors, query = props.query;
    var formattedPrice = "";
    if (price) {
        formattedPrice = formatPrice(price);
    }
    var orderHandler = function(e) {
        router.push("/order?item=" + query.item);
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
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
                        /*#__PURE__*/ return (0,jsx_runtime.jsx)("p", {
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
                            /*#__PURE__*/ return (0,jsx_runtime.jsx)("div", {
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
                    children: "ЗАКАЗАТЬ"
                })
            })
        ]
    }));
};
/* harmony default export */ var works_Work = (Work);


/***/ }),

/***/ 9771:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ pages_works; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./src/components/works/Work.js + 2 modules
var Work = __webpack_require__(9023);
// EXTERNAL MODULE: ./src/storage/works.js
var works = __webpack_require__(1963);
// EXTERNAL MODULE: ./src/components/works/WorksContent.module.css
var WorksContent_module = __webpack_require__(9447);
var WorksContent_module_default = /*#__PURE__*/__webpack_require__.n(WorksContent_module);
;// CONCATENATED MODULE: ./src/components/works/WorksContent.js





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
var WorksContent = function(props) {
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("article", {
        className: (WorksContent_module_default()).WorksContent,
        children: works/* default.map */.Z.map(function(work) {
            return(/*#__PURE__*/ (0,react.createElement)(Work/* default */.Z, _objectSpread({
            }, work, {
                key: work.id
            })));
        })
    }));
};
/* harmony default export */ var works_WorksContent = (WorksContent);

// EXTERNAL MODULE: ./node_modules/next/head.js
var head = __webpack_require__(9008);
// EXTERNAL MODULE: ./src/components/layout/Page.js
var Page = __webpack_require__(7514);
;// CONCATENATED MODULE: ./src/pages/works.js




var title = "Наши работы - Vigma";
var description = "Посмотрите на наши работы и найдете мебель себе по душе";
var WorkPage = function(props) {
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
                title: "Наши работы",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(works_WorksContent, {
                })
            })
        ]
    }));
};
/* harmony default export */ var pages_works = (WorkPage);


/***/ }),

/***/ 1963:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": function() { return /* binding */ firstWorks; }
/* harmony export */ });
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
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}
var parentFolder = "/works-assets/";
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
            "Столешница: Массив"
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
        return photo.src = parentFolder + photo.src;
    });
});
/* harmony default export */ __webpack_exports__["Z"] = (works);


/***/ }),

/***/ 9447:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"WorksContent":"WorksContent_WorksContent__a2sOv"};

/***/ }),

/***/ 8693:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"ZoomedWrapper":"ZoomedImage_ZoomedWrapper__MLfN_","ZoomedImage":"ZoomedImage_ZoomedImage__ESo8H"};

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

/***/ 1281:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"Button":"MainButton_Button__n72zw"};

/***/ }),

/***/ 3033:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"Backdrop":"Modal_Backdrop__9RcyN","Modal":"Modal_Modal__FQ769"};

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

/***/ 1821:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"images":"ImageContainer_images__P8pK8","ver":"ImageContainer_ver__aX7Gv","hor":"ImageContainer_hor__VA5nT"};

/***/ }),

/***/ 33:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"work":"Work_work__mof1y","left":"Work_left__4bVSJ","right":"Work_right__AbQhc","price":"Work_price__MW7il","colors":"Work_colors__ItVwo"};

/***/ }),

/***/ 9008:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(5443)


/***/ }),

/***/ 1163:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(387)


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [888], function() { return __webpack_exec__(9765); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);