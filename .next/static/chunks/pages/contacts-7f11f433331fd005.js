(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[192],{

/***/ 8862:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/contacts",
      function () {
        return __webpack_require__(2936);
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

/***/ 224:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _Anchor_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7051);
/* harmony import */ var _Anchor_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Anchor_module_scss__WEBPACK_IMPORTED_MODULE_1__);


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
var Anchor = function(props) {
    var href = props.href, children = props.children, className = props.className, anchorProps = _objectWithoutProperties(props, [
        "href",
        "children",
        "className"
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", _objectSpread({
        href: href || "",
        className: "".concat((_Anchor_module_scss__WEBPACK_IMPORTED_MODULE_1___default().Anchor), " ").concat(className || "")
    }, anchorProps, {
        tabIndex: "1",
        children: children
    })));
};
/* harmony default export */ __webpack_exports__["Z"] = (Anchor);


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

/***/ 2936:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ contacts; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./src/components/ui/Anchor.js
var Anchor = __webpack_require__(224);
// EXTERNAL MODULE: ./src/components/layout/Content.js
var Content = __webpack_require__(4712);
// EXTERNAL MODULE: ./src/components/ui/Section.js
var Section = __webpack_require__(4568);
// EXTERNAL MODULE: ./src/components/contacts/ContactsSection.module.css
var ContactsSection_module = __webpack_require__(6546);
var ContactsSection_module_default = /*#__PURE__*/__webpack_require__.n(ContactsSection_module);
;// CONCATENATED MODULE: ./src/components/contacts/ContactsSection.js



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
var ContactsSection = function(props) {
    var contactKey = props.contactKey, logoSrc = props.logoSrc, children = props.children, imgProps = props.imgProps, sectionProps = _objectWithoutProperties(props, [
        "contactKey",
        "logoSrc",
        "children",
        "imgProps"
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Section/* default */.Z, _objectSpread({
    }, sectionProps, {
        className: (ContactsSection_module_default()).ContactsSection,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
            className: (ContactsSection_module_default()).Text,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                    className: (ContactsSection_module_default()).Key,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("img", _objectSpread({
                        }, imgProps, {
                            src: logoSrc,
                            className: (ContactsSection_module_default()).Logo,
                            alt: ""
                        })),
                        contactKey
                    ]
                }),
                children
            ]
        })
    })));
};
/* harmony default export */ var contacts_ContactsSection = (ContactsSection);

// EXTERNAL MODULE: ./src/components/ui/Italic.module.scss
var Italic_module = __webpack_require__(9964);
var Italic_module_default = /*#__PURE__*/__webpack_require__.n(Italic_module);
;// CONCATENATED MODULE: ./src/components/ui/Italic.js


function Italic_defineProperty(obj, key, value) {
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
function Italic_objectSpread(target) {
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
            Italic_defineProperty(target, key, source[key]);
        });
    }
    return target;
}
function Italic_objectWithoutProperties(source, excluded) {
    if (source == null) return {
    };
    var target = Italic_objectWithoutPropertiesLoose(source, excluded);
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
function Italic_objectWithoutPropertiesLoose(source, excluded) {
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
var Italic = function(props) {
    var children = props.children, className = props.className, italicProps = Italic_objectWithoutProperties(props, [
        "children",
        "className"
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("span", Italic_objectSpread({
    }, italicProps, {
        className: "\n      ".concat((Italic_module_default()).Italic, "\n      ").concat(className || '', "\n    ").trim(),
        children: children
    })));
};
/* harmony default export */ var ui_Italic = (Italic);

// EXTERNAL MODULE: ./src/components/contacts/ContactsContent.module.css
var ContactsContent_module = __webpack_require__(2006);
var ContactsContent_module_default = /*#__PURE__*/__webpack_require__.n(ContactsContent_module);
;// CONCATENATED MODULE: ./src/components/contacts/ContactsContent.js






var phoneSrc = "/contact/phone.svg";
var emailSrc = "/contact/email.svg";
var locationSrc = "/contact/location.svg";
var timeSrc = "/contact/time.svg";
var directorSrc = "/contact/director.svg";
var ContactsContent = function(props) {
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Content/* default */.Z, {
        className: (ContactsContent_module_default()).ContactsContent,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(contacts_ContactsSection, {
                logoSrc: phoneSrc,
                imgProps: {
                    style: {
                        height: "3rem",
                        width: "auto",
                        bottom: "-10px"
                    }
                },
                contactKey: "Номер телефона:",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Anchor/* default */.Z, {
                        tabIndex: "1",
                        href: "tel:+7 (812) 642 60-51",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("b", {
                            children: "+7 (812) 642 60-51"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                        children: [
                            "WhatsApp: ",
                            " ",
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Anchor/* default */.Z, {
                                tabIndex: "1",
                                href: "tel:+7 (812) 642 60-51",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("b", {
                                    children: "+7 (964) 342 60-51"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(contacts_ContactsSection, {
                contactKey: "Адрес эл. почты:",
                logoSrc: emailSrc,
                imgProps: {
                    style: {
                        width: "2.5rem",
                        height: "auto",
                        left: "-40%"
                    }
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Anchor/* default */.Z, {
                    href: "mailto:vigmaspb@gmail.com",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("b", {
                        children: "vigmaspb@gmail.com"
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(contacts_ContactsSection, {
                logoSrc: locationSrc,
                imgProps: {
                    style: {
                        transform: "scaleX(-1)",
                        bottom: "-15px",
                        left: "-20%",
                        height: "2.5rem"
                    }
                },
                contactKey: "Адрес производства:",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("b", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                children: "г. Санкт-Петербург,"
                            }),
                            " ",
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                children: "ул. Автобусная,"
                            }),
                            " ",
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                children: "д. 3,"
                            }),
                            " ",
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                children: "лит. Б"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(contacts_ContactsSection, {
                close: true,
                contactKey: "График приёма:",
                imgProps: {
                    style: {
                        left: "-25px"
                    }
                },
                logoSrc: timeSrc,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("b", {
                        children: "с 9:30 до 20:00 "
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_Italic, {
                        style: {
                            marginLeft: "5px"
                        },
                        children: "(по договорённости)"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(contacts_ContactsSection, {
                contactKey: "Имя менеджера:",
                logoSrc: directorSrc,
                imgProps: {
                    style: {
                        width: "2.5rem",
                        height: "auto",
                        bottom: "-5px"
                    }
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("b", {
                    children: "Филатова Галина Михайловна"
                })
            })
        ]
    }));
};
/* harmony default export */ var contacts_ContactsContent = (ContactsContent);

// EXTERNAL MODULE: ./src/components/contacts/ContactsMap.module.css
var ContactsMap_module = __webpack_require__(6343);
var ContactsMap_module_default = /*#__PURE__*/__webpack_require__.n(ContactsMap_module);
;// CONCATENATED MODULE: ./src/components/contacts/ContactsMap.js


var ContactsMap = function(props) {
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("aside", {
        style: {
            position: "relative",
            overflow: "hidden"
        },
        className: (ContactsMap_module_default()).Map,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                href: "https://yandex.com/maps/org/vigma/191512945068/?utm_medium=mapframe&utm_source=maps",
                style: {
                    color: "#eee",
                    fontSize: "12px",
                    position: "absolute",
                    top: "0px"
                },
                children: "VIGMA Мебель"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                href: "https://yandex.com/maps/2/saint-petersburg/category/industrial_enterprise/184106880/?utm_medium=mapframe&utm_source=maps",
                style: {
                    color: "#eee",
                    fontSize: "12px",
                    position: "absolute",
                    top: "14px"
                },
                children: "Производственное предприятие в Санкт‑Петербурге"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                href: "https://yandex.com/maps/2/saint-petersburg/category/cabinet_furniture/184107869/?utm_medium=mapframe&utm_source=maps",
                style: {
                    color: "#eee",
                    fontSize: "12px",
                    position: "absolute",
                    top: "28px"
                },
                children: "Корпусная мебель в Санкт‑Петербурге"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("iframe", {
                src: "https://yandex.com/map-widget/v1/-/CCU5f6v5sB",
                width: "400",
                height: "350",
                frameBorder: "0",
                allowFullScreen: true
            })
        ]
    }));
};
/* harmony default export */ var contacts_ContactsMap = (ContactsMap);

// EXTERNAL MODULE: ./node_modules/next/head.js
var head = __webpack_require__(9008);
// EXTERNAL MODULE: ./src/components/layout/Page.js
var Page = __webpack_require__(7514);
;// CONCATENATED MODULE: ./src/pages/contacts.js





var title = "Контакты - Vigma";
var description = "+7 (812) 642 60-51 | vigmaspb@gmail.com";
var Contacts = function(props) {
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
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Page/* default */.Z, {
                notSpaced: true,
                title: "Контакты",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(contacts_ContactsContent, {
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(contacts_ContactsMap, {
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ var contacts = (Contacts);


/***/ }),

/***/ 2006:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"ContactsContent":"ContactsContent_ContactsContent__Avv3r"};

/***/ }),

/***/ 6343:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"Map":"ContactsMap_Map__er8pP"};

/***/ }),

/***/ 6546:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"ContactsSection":"ContactsSection_ContactsSection__f5_pg","Text":"ContactsSection_Text__S3boH","Logo":"ContactsSection_Logo__iRnWN","Key":"ContactsSection_Key__lz8Ob"};

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

/***/ 7051:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"Anchor":"Anchor_Anchor__KIGyl"};

/***/ }),

/***/ 9964:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"Italic":"Italic_Italic__JBxGv"};

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
/******/ __webpack_require__.O(0, [888], function() { return __webpack_exec__(8862); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);