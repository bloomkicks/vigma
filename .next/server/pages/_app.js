(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 2411:
/***/ ((module) => {

// Exports
module.exports = {
	"Layout": "Layout_Layout__NQ5Vl"
};


/***/ }),

/***/ 3873:
/***/ ((module) => {

// Exports
module.exports = {
	"Footer": "Footer_Footer__VvVQB",
	"InnerFooter": "Footer_InnerFooter__8KZL4",
	"Soc": "Footer_Soc__Di4w1"
};


/***/ }),

/***/ 2911:
/***/ ((module) => {

// Exports
module.exports = {
	"Header": "Header_Header__0m0H2",
	"HeaderSpace": "Header_HeaderSpace__qgR7Z",
	"InnerHeader": "Header_InnerHeader__fxQ2X",
	"LogoContainer": "Header_LogoContainer__Mphjp",
	"LogoInnerContainer": "Header_LogoInnerContainer__15lNS",
	"Logo": "Header_Logo__qGZJb",
	"HamMenu": "Header_HamMenu__BINMn",
	"Nav": "Header_Nav__asFiF",
	"Nav__active": "Header_Nav__active__ny3_g"
};


/***/ }),

/***/ 6769:
/***/ ((module) => {

// Exports
module.exports = {
	"Link": "NavLink_Link__HV0x9",
	"black": "NavLink_black__Qjkrk"
};


/***/ }),

/***/ 96:
/***/ ((module) => {

// Exports
module.exports = {
	"Section": "Section_Section__izvEi",
	"Horizontal": "Section_Horizontal__1_FV2",
	"Close": "Section_Close__3E74m",
	"CloseHorizontal": "Section_CloseHorizontal__ZIIWx",
	"Centered": "Section_Centered__FCOir"
};


/***/ }),

/***/ 4568:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Section_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96);
/* harmony import */ var _Section_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Section_module_scss__WEBPACK_IMPORTED_MODULE_1__);


const Section = (props)=>{
    const { close , element , children , centered , className , isHorizontal , ...sectionProps } = props;
    const SectionEl = element || 'section';
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SectionEl, {
        ...sectionProps,
        className: `
      ${isHorizontal ? (_Section_module_scss__WEBPACK_IMPORTED_MODULE_1___default().Horizontal) : (_Section_module_scss__WEBPACK_IMPORTED_MODULE_1___default().Section) || ''}
      ${close && isHorizontal && (_Section_module_scss__WEBPACK_IMPORTED_MODULE_1___default().CloseHorizontal) || ''}
      ${close && !isHorizontal && (_Section_module_scss__WEBPACK_IMPORTED_MODULE_1___default().Close) || ''}
      ${centered && (_Section_module_scss__WEBPACK_IMPORTED_MODULE_1___default().Centered) || ''}
      ${className || ''}
    `.trim(),
        children: children
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Section);


/***/ }),

/***/ 9119:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/components/ui/Section.js
var Section = __webpack_require__(4568);
// EXTERNAL MODULE: ./src/components/layout/Footer.module.scss
var Footer_module = __webpack_require__(3873);
var Footer_module_default = /*#__PURE__*/__webpack_require__.n(Footer_module);
;// CONCATENATED MODULE: ./src/components/layout/Footer.js



const instaSvg = "/footer/instagram.svg";
const vkSvg = "/footer/vkontakte.svg";
const Footer = (props)=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: (Footer_module_default()).Footer,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (Footer_module_default()).InnerFooter,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Section/* default */.Z, {
                    className: (Footer_module_default()).Soc,
                    isHorizontal: true,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "https://vk.com/vigmaspb",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                tabIndex: "1",
                                src: vkSvg,
                                alt: "Наш ВКонтакте"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "https://instagram.com/vigmaspb",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                tabIndex: "1",
                                src: instaSvg,
                                alt: "Наш Инстаграм"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Section/* default */.Z, {
                    isHorizontal: true,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                            children: "ОСТАВЬТЕ ОТЗЫВ"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (Footer_module_default()).Text,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "mailto:vigmaspb@gmail.com",
                                        children: "vigmaspb@gmail.com"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "vk.com/vigmaspb",
                                        children: "В ВКонтакте"
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Section/* default */.Z, {
                    isHorizontal: true,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                            children: "НАШ АДРЕС"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (Footer_module_default()).Text,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "г. Санкт-Петербург, ул. Автобусная, д. 3, лит. Б"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Section/* default */.Z, {
                    isHorizontal: true,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                            children: "КОНТАКТЫ"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (Footer_module_default()).Text,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "tel:+7 (812) 642 60-51",
                                        children: "+7 (812) 642 60-51"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "tel:+7 (964) 342 60-51",
                                        children: "+7 (964) 342 60-51"
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Section/* default */.Z, {
                    isHorizontal: true,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                            children: "ВАКАНСИИ"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (Footer_module_default()).Text,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "Всегда открыты талантам:"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "mailto:vigmaspb@gmail.com",
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
/* harmony default export */ const layout_Footer = (Footer);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./src/components/ui/NavLink.module.scss
var NavLink_module = __webpack_require__(6769);
var NavLink_module_default = /*#__PURE__*/__webpack_require__.n(NavLink_module);
;// CONCATENATED MODULE: ./src/components/ui/NavLink.js



const NavLink = (props)=>{
    const { className , innerClassName , isBlack , img , href , children , ...linkProps } = props;
    return(/*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
        href: href || "",
        passHref: true,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: `
          ${(NavLink_module_default()).Link}
          ${isBlack && (NavLink_module_default()).black || ""}
          ${className || ""}
        `.trim(),
            ...linkProps,
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: innerClassName,
                children: children
            })
        })
    }));
};
/* harmony default export */ const ui_NavLink = (NavLink);

// EXTERNAL MODULE: ./src/components/layout/Header.module.scss
var Header_module = __webpack_require__(2911);
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);
;// CONCATENATED MODULE: ./src/components/layout/Header.js




const hamMenuSvg = "/ham-menu.svg";
const blueLogo = "/logos/logo_new.svg";
const Header = (props)=>{
    const { 0: isActiveNav , 1: setIsActiveNav  } = (0,external_react_.useState)(false);
    const menuClickHandler = (e)=>{
        e.stopPropagation();
        setIsActiveNav((prevState)=>{
            if (prevState) {
                e.target.blur();
            }
            return !prevState;
        });
    };
    const navFocusHandler = (e)=>{
        e.stopPropagation();
        setIsActiveNav(true);
    };
    const navBlurHandler = (e)=>{
        setIsActiveNav(false);
    };
    const navClickHandler = (e)=>{
        e.stopPropagation();
        setIsActiveNav((prevState)=>!prevState
        );
        e.target.blur();
    };
    (0,external_react_.useEffect)(()=>{
        window.addEventListener("click", ()=>setIsActiveNav(false)
        );
    }, []);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("header", {
                className: (Header_module_default()).Header,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (Header_module_default()).InnerHeader,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(ui_NavLink, {
                            innerClassName: (Header_module_default()).LogoInnerContainer,
                            className: (Header_module_default()).LogoContainer,
                            style: {
                                color: "black"
                            },
                            href: "/main",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: blueLogo,
                                className: (Header_module_default()).Logo,
                                title: "На Главную",
                                alt: "На Главную",
                                tabIndex: 1
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: hamMenuSvg,
                            onClick: menuClickHandler,
                            alt: "Открыть меню",
                            tabIndex: 1,
                            className: (Header_module_default()).HamMenu
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                            onClick: navClickHandler,
                            className: `${(Header_module_default()).Nav} ${isActiveNav && (Header_module_default()).Nav__active}`,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(ui_NavLink, {
                                    href: "/order/quiz",
                                    tabIndex: 1,
                                    onClick: navClickHandler,
                                    onFocus: navFocusHandler,
                                    onBlur: navBlurHandler,
                                    isBlack: true,
                                    children: "Заказать"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(ui_NavLink, {
                                    href: "/contacts",
                                    tabIndex: 1,
                                    onClick: navClickHandler,
                                    onFocus: navFocusHandler,
                                    onBlur: navBlurHandler,
                                    isBlack: true,
                                    children: "Контакты"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ui_NavLink, {
                                    href: "/works",
                                    tabIndex: 1,
                                    onClick: navClickHandler,
                                    onFocus: navFocusHandler,
                                    onBlur: navBlurHandler,
                                    isBlack: true,
                                    children: [
                                        "Наши",
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {
                                        }),
                                        " работы"
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(ui_NavLink, {
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
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Header_module_default()).HeaderSpace
            })
        ]
    }));
};
/* harmony default export */ const layout_Header = (Header);

// EXTERNAL MODULE: ./src/components/layout/Layout.module.css
var Layout_module = __webpack_require__(2411);
var Layout_module_default = /*#__PURE__*/__webpack_require__.n(Layout_module);
;// CONCATENATED MODULE: ./src/components/layout/Layout.js




const Layout = (props)=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Layout_module_default()).Layout,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(layout_Header, {
            }),
            props.children,
            /*#__PURE__*/ jsx_runtime_.jsx(layout_Footer, {
            })
        ]
    }));
};
/* harmony default export */ const layout_Layout = (Layout);

;// CONCATENATED MODULE: ./src/pages/_app.js



function App({ Component , pageProps  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(layout_Layout, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    }));
}
/* harmony default export */ const _app = (App);


/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664], () => (__webpack_exec__(9119)));
module.exports = __webpack_exports__;

})();