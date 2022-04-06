(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[888],{

/***/ 1780:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/_app",
      function () {
        return __webpack_require__(9119);
      }
    ]);
    if(false) {}
  

/***/ }),

/***/ 8418:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var __webpack_unused_export__;

function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function _iterableToArrayLimit(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;
    try {
        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}
var _typeof = function(obj) {
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
__webpack_unused_export__ = ({
    value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(__webpack_require__(7294));
var _router = __webpack_require__(6273);
var _router1 = __webpack_require__(387);
var _useIntersection = __webpack_require__(7190);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var prefetched = {
};
function prefetch(router, href, as, options) {
    if ( false || !router) return;
    if (!(0, _router).isLocalURL(href)) return;
    // Prefetch the JSON page if asked (only in the client)
    // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch
    router.prefetch(href, as, options).catch(function(err) {
        if (false) {}
    });
    var curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale;
    // Join on an invalid URI character
    prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}
function isModifiedEvent(event) {
    var target = event.currentTarget.target;
    return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.nativeEvent && event.nativeEvent.which === 2;
}
function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
    var nodeName = e.currentTarget.nodeName;
    if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router).isLocalURL(href))) {
        // ignore click for browser’s default behavior
        return;
    }
    e.preventDefault();
    //  avoid scroll for urls with anchor refs
    if (scroll == null && as.indexOf('#') >= 0) {
        scroll = false;
    }
    // replace state instead of push if prop is present
    router[replace ? 'replace' : 'push'](href, as, {
        shallow: shallow,
        locale: locale,
        scroll: scroll
    });
}
function Link(props) {
    if (false) { var hasWarned, optionalProps, optionalPropsGuard, requiredProps, requiredPropsGuard, createPropError; }
    var p = props.prefetch !== false;
    var router = (0, _router1).useRouter();
    var ref2 = _react.default.useMemo(function() {
        var ref = _slicedToArray((0, _router).resolveHref(router, props.href, true), 2), resolvedHref = ref[0], resolvedAs = ref[1];
        return {
            href: resolvedHref,
            as: props.as ? (0, _router).resolveHref(router, props.as) : resolvedAs || resolvedHref
        };
    }, [
        router,
        props.href,
        props.as
    ]), href = ref2.href, as = ref2.as;
    var children = props.children, replace = props.replace, shallow = props.shallow, scroll = props.scroll, locale = props.locale;
    if (typeof children === 'string') {
        children = /*#__PURE__*/ _react.default.createElement("a", null, children);
    }
    // This will return the first child, if multiple are provided it will throw an error
    var child;
    if (false) {} else {
        child = _react.default.Children.only(children);
    }
    var childRef = child && typeof child === 'object' && child.ref;
    var ref1 = _slicedToArray((0, _useIntersection).useIntersection({
        rootMargin: '200px'
    }), 2), setIntersectionRef = ref1[0], isVisible = ref1[1];
    var setRef = _react.default.useCallback(function(el) {
        setIntersectionRef(el);
        if (childRef) {
            if (typeof childRef === 'function') childRef(el);
            else if (typeof childRef === 'object') {
                childRef.current = el;
            }
        }
    }, [
        childRef,
        setIntersectionRef
    ]);
    _react.default.useEffect(function() {
        var shouldPrefetch = isVisible && p && (0, _router).isLocalURL(href);
        var curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
        var isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];
        if (shouldPrefetch && !isPrefetched) {
            prefetch(router, href, as, {
                locale: curLocale
            });
        }
    }, [
        as,
        href,
        isVisible,
        locale,
        p,
        router
    ]);
    var childProps = {
        ref: setRef,
        onClick: function(e) {
            if (child.props && typeof child.props.onClick === 'function') {
                child.props.onClick(e);
            }
            if (!e.defaultPrevented) {
                linkClicked(e, router, href, as, replace, shallow, scroll, locale);
            }
        }
    };
    childProps.onMouseEnter = function(e) {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
            child.props.onMouseEnter(e);
        }
        if ((0, _router).isLocalURL(href)) {
            prefetch(router, href, as, {
                priority: true
            });
        }
    };
    // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user
    if (props.passHref || child.type === 'a' && !('href' in child.props)) {
        var curLocale1 = typeof locale !== 'undefined' ? locale : router && router.locale;
        // we only render domain locales if we are currently on a domain locale
        // so that locale links are still visitable in development/preview envs
        var localeDomain = router && router.isLocaleDomain && (0, _router).getDomainLocale(as, curLocale1, router && router.locales, router && router.domainLocales);
        childProps.href = localeDomain || (0, _router).addBasePath((0, _router).addLocale(as, curLocale1, router && router.defaultLocale));
    }
    return(/*#__PURE__*/ _react.default.cloneElement(child, childProps));
}
var _default = Link;
exports["default"] = _default; //# sourceMappingURL=link.js.map


/***/ }),

/***/ 7190:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function _iterableToArrayLimit(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;
    try {
        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.useIntersection = useIntersection;
var _react = __webpack_require__(7294);
var _requestIdleCallback = __webpack_require__(9311);
var hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';
function useIntersection(param) {
    var rootMargin = param.rootMargin, disabled = param.disabled;
    var isDisabled = disabled || !hasIntersectionObserver;
    var unobserve = (0, _react).useRef();
    var ref = _slicedToArray((0, _react).useState(false), 2), visible = ref[0], setVisible = ref[1];
    var setRef = (0, _react).useCallback(function(el) {
        if (unobserve.current) {
            unobserve.current();
            unobserve.current = undefined;
        }
        if (isDisabled || visible) return;
        if (el && el.tagName) {
            unobserve.current = observe(el, function(isVisible) {
                return isVisible && setVisible(isVisible);
            }, {
                rootMargin: rootMargin
            });
        }
    }, [
        isDisabled,
        rootMargin,
        visible
    ]);
    (0, _react).useEffect(function() {
        if (!hasIntersectionObserver) {
            if (!visible) {
                var idleCallback = (0, _requestIdleCallback).requestIdleCallback(function() {
                    return setVisible(true);
                });
                return function() {
                    return (0, _requestIdleCallback).cancelIdleCallback(idleCallback);
                };
            }
        }
    }, [
        visible
    ]);
    return [
        setRef,
        visible
    ];
}
function observe(element, callback, options) {
    var ref = createObserver(options), id = ref.id, observer = ref.observer, elements = ref.elements;
    elements.set(element, callback);
    observer.observe(element);
    return function unobserve() {
        elements.delete(element);
        observer.unobserve(element);
        // Destroy observer when there's nothing left to watch:
        if (elements.size === 0) {
            observer.disconnect();
            observers.delete(id);
        }
    };
}
var observers = new Map();
function createObserver(options) {
    var id = options.rootMargin || '';
    var instance = observers.get(id);
    if (instance) {
        return instance;
    }
    var elements = new Map();
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            var callback = elements.get(entry.target);
            var isVisible = entry.isIntersecting || entry.intersectionRatio > 0;
            if (callback && isVisible) {
                callback(isVisible);
            }
        });
    }, options);
    observers.set(id, instance = {
        id: id,
        observer: observer,
        elements: elements
    });
    return instance;
} //# sourceMappingURL=use-intersection.js.map


/***/ }),

/***/ 4568:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _Section_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5890);
/* harmony import */ var _Section_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Section_module_scss__WEBPACK_IMPORTED_MODULE_1__);


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
var Section = function(props) {
    var close = props.close, element = props.element, children = props.children, centered = props.centered, className = props.className, isHorizontal = props.isHorizontal, sectionProps = _objectWithoutProperties(props, [
        "close",
        "element",
        "children",
        "centered",
        "className",
        "isHorizontal"
    ]);
    var SectionEl = element || 'section';
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SectionEl, _objectSpread({
    }, sectionProps, {
        className: "\n      ".concat(isHorizontal ? (_Section_module_scss__WEBPACK_IMPORTED_MODULE_1___default().Horizontal) : (_Section_module_scss__WEBPACK_IMPORTED_MODULE_1___default().Section) || '', "\n      ").concat(close && isHorizontal && (_Section_module_scss__WEBPACK_IMPORTED_MODULE_1___default().CloseHorizontal) || '', "\n      ").concat(close && !isHorizontal && (_Section_module_scss__WEBPACK_IMPORTED_MODULE_1___default().Close) || '', "\n      ").concat(centered && (_Section_module_scss__WEBPACK_IMPORTED_MODULE_1___default().Centered) || '', "\n      ").concat(className || '', "\n    ").trim(),
        children: children
    })));
};
/* harmony default export */ __webpack_exports__["Z"] = (Section);


/***/ }),

/***/ 9119:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _app; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./src/components/ui/Section.js
var Section = __webpack_require__(4568);
// EXTERNAL MODULE: ./src/components/layout/Footer.module.scss
var Footer_module = __webpack_require__(3025);
var Footer_module_default = /*#__PURE__*/__webpack_require__.n(Footer_module);
;// CONCATENATED MODULE: ./src/components/layout/Footer.js



var instaSvg = "/footer/instagram.svg";
var vkSvg = "/footer/vkontakte.svg";
var Footer = function(props) {
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("footer", {
        className: (Footer_module_default()).Footer,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: (Footer_module_default()).InnerFooter,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Section/* default */.Z, {
                    className: (Footer_module_default()).Soc,
                    isHorizontal: true,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                            href: "https://vk.com/vigmaspb",
                            tabIndex: 50,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                tabIndex: "1",
                                src: vkSvg,
                                alt: "Наш ВКонтакте"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                            href: "https://instagram.com/vigmaspb",
                            tabIndex: 51,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                tabIndex: "1",
                                src: instaSvg,
                                alt: "Наш Инстаграм"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Section/* default */.Z, {
                    isHorizontal: true,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("h4", {
                            children: "ОСТАВЬТЕ ОТЗЫВ"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: (Footer_module_default()).Text,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                        href: "mailto:vigmaspb@gmail.com",
                                        tabIndex: 52,
                                        children: "vigmaspb@gmail.com"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                        href: "vk.com/vigmaspb",
                                        tabIndex: 53,
                                        children: "В ВКонтакте"
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Section/* default */.Z, {
                    isHorizontal: true,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("h4", {
                            children: "НАШ АДРЕС"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: (Footer_module_default()).Text,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                children: "г. Санкт-Петербург, ул. Автобусная, д. 3, лит. Б"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Section/* default */.Z, {
                    isHorizontal: true,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("h4", {
                            children: "КОНТАКТЫ"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: (Footer_module_default()).Text,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                        href: "tel:+7 (812) 642 60-51",
                                        tabIndex: 54,
                                        children: "+7 (812) 642 60-51"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                        href: "tel:+7 (964) 342 60-51",
                                        tabIndex: 55,
                                        children: "+7 (964) 342 60-51"
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Section/* default */.Z, {
                    isHorizontal: true,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("h4", {
                            children: "ВАКАНСИИ"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: (Footer_module_default()).Text,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                    children: "Всегда открыты талантам:"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                        href: "mailto:vigmaspb@gmail.com",
                                        tabIndex: 56,
                                        children: "vigmaspb@gmail.com"
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ var layout_Footer = (Footer);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./src/components/ui/NavLink.module.scss
var NavLink_module = __webpack_require__(6957);
var NavLink_module_default = /*#__PURE__*/__webpack_require__.n(NavLink_module);
;// CONCATENATED MODULE: ./src/components/ui/NavLink.js



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
var NavLink = function(props) {
    var className = props.className, innerClassName = props.innerClassName, isBlack = props.isBlack, img = props.img, href = props.href, children = props.children, linkProps = _objectWithoutProperties(props, [
        "className",
        "innerClassName",
        "isBlack",
        "img",
        "href",
        "children"
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(next_link["default"], {
        href: href || "",
        passHref: true,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", _objectSpread({
            className: "\n          ".concat((NavLink_module_default()).Link, "\n          ").concat(isBlack && (NavLink_module_default()).black || "", "\n          ").concat(className || "", "\n        ").trim()
        }, linkProps, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: innerClassName,
                children: children
            })
        }))
    }));
};
/* harmony default export */ var ui_NavLink = (NavLink);

// EXTERNAL MODULE: ./src/components/layout/Header.module.scss
var Header_module = __webpack_require__(2963);
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);
;// CONCATENATED MODULE: ./src/components/layout/Header.js




var hamMenuSvg = "/ham-menu.svg";
var blueLogo = "/logos/header_new.png";
var Header = function(props) {
    var ref = (0,react.useState)(false), isActiveNav = ref[0], setIsActiveNav = ref[1];
    var menuClickHandler = function(e) {
        e.stopPropagation();
        setIsActiveNav(function(prevState) {
            if (prevState) {
                e.target.blur();
            }
            return !prevState;
        });
    };
    var navFocusHandler = function(e) {
        e.stopPropagation();
        setIsActiveNav(true);
    };
    var navBlurHandler = function(e) {
        setIsActiveNav(false);
    };
    var navClickHandler = function(e) {
        e.stopPropagation();
        setIsActiveNav(function(prevState) {
            return !prevState;
        });
        e.target.blur();
    };
    (0,react.useEffect)(function() {
        window.addEventListener("click", function() {
            return setIsActiveNav(false);
        });
    }, []);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("header", {
                className: (Header_module_default()).Header,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: (Header_module_default()).InnerHeader,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_NavLink, {
                            innerClassName: (Header_module_default()).LogoInnerContainer,
                            className: (Header_module_default()).LogoContainer,
                            tabIndex: 1,
                            style: {
                                color: "black"
                            },
                            href: "/main",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                src: blueLogo,
                                className: (Header_module_default()).Logo,
                                title: "На Главную",
                                alt: "На Главную"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                            src: hamMenuSvg,
                            onClick: menuClickHandler,
                            alt: "Открыть меню",
                            className: (Header_module_default()).HamMenu
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("nav", {
                            onClick: navClickHandler,
                            className: "".concat((Header_module_default()).Nav, " ").concat(isActiveNav && (Header_module_default()).Nav__active),
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_NavLink, {
                                    href: "/order/quiz",
                                    tabIndex: 1,
                                    onClick: navClickHandler,
                                    onFocus: navFocusHandler,
                                    onBlur: navBlurHandler,
                                    isBlack: true,
                                    children: "Заказать"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_NavLink, {
                                    href: "/contacts",
                                    tabIndex: 1,
                                    onClick: navClickHandler,
                                    onFocus: navFocusHandler,
                                    onBlur: navBlurHandler,
                                    isBlack: true,
                                    children: "Контакты"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_NavLink, {
                                    href: "/works",
                                    tabIndex: 1,
                                    onClick: navClickHandler,
                                    onFocus: navFocusHandler,
                                    onBlur: navBlurHandler,
                                    isBlack: true,
                                    children: [
                                        "Наши",
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {
                                        }),
                                        " работы"
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_NavLink, {
                                    href: "/about-us",
                                    tabIndex: 1,
                                    onClick: navClickHandler,
                                    onFocus: navFocusHandler,
                                    onBlur: navBlurHandler,
                                    isBlack: true,
                                    children: "О нас"
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: (Header_module_default()).HeaderSpace
            })
        ]
    }));
};
/* harmony default export */ var layout_Header = (Header);

// EXTERNAL MODULE: ./src/components/layout/Layout.module.css
var Layout_module = __webpack_require__(8979);
var Layout_module_default = /*#__PURE__*/__webpack_require__.n(Layout_module);
;// CONCATENATED MODULE: ./src/components/layout/Layout.js




var Layout = function(props) {
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (Layout_module_default()).Layout,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(layout_Header, {
            }),
            props.children,
            /*#__PURE__*/ (0,jsx_runtime.jsx)(layout_Footer, {
            })
        ]
    }));
};
/* harmony default export */ var layout_Layout = (Layout);

// EXTERNAL MODULE: ./src/styles/globals.scss
var globals = __webpack_require__(2605);
;// CONCATENATED MODULE: ./src/pages/_app.js



function _app_defineProperty(obj, key, value) {
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
function _app_objectSpread(target) {
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
            _app_defineProperty(target, key, source[key]);
        });
    }
    return target;
}
function App(param) {
    var Component = param.Component, pageProps = param.pageProps;
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(layout_Layout, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Component, _app_objectSpread({
        }, pageProps))
    }));
}
/* harmony default export */ var _app = (App);


/***/ }),

/***/ 8979:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"Layout":"Layout_Layout__NQ5Vl"};

/***/ }),

/***/ 3025:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"Footer":"Footer_Footer__VvVQB","InnerFooter":"Footer_InnerFooter__8KZL4","Soc":"Footer_Soc__Di4w1"};

/***/ }),

/***/ 2963:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"Header":"Header_Header__0m0H2","HeaderSpace":"Header_HeaderSpace__qgR7Z","InnerHeader":"Header_InnerHeader__fxQ2X","LogoContainer":"Header_LogoContainer__Mphjp","LogoInnerContainer":"Header_LogoInnerContainer__15lNS","Logo":"Header_Logo__qGZJb","HamMenu":"Header_HamMenu__BINMn","Nav":"Header_Nav__asFiF","Nav__active":"Header_Nav__active__ny3_g"};

/***/ }),

/***/ 6957:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"Link":"NavLink_Link__HV0x9","black":"NavLink_black__Qjkrk"};

/***/ }),

/***/ 5890:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"Section":"Section_Section__izvEi","Horizontal":"Section_Horizontal__1_FV2","Close":"Section_Close__3E74m","CloseHorizontal":"Section_CloseHorizontal__ZIIWx","Centered":"Section_Centered__FCOir"};

/***/ }),

/***/ 2605:
/***/ (function() {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 1664:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(8418)


/***/ }),

/***/ 5251:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
__webpack_require__(6086);var f=__webpack_require__(7294),g=60103;exports.Fragment=60107;if("function"===typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element");exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,k){var b,d={},e=null,l=null;void 0!==k&&(e=""+k);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(l=a.ref);for(b in a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q;exports.jsxs=q;


/***/ }),

/***/ 5893:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(5251);
} else {}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__(1780), __webpack_exec__(387));
/******/ _N_E = __webpack_exports__;
/******/ }
]);