(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 5340:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: ./src/components/ui/Section.js
var Section = __webpack_require__(6794);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./src/components/layout/Footer.module.css
var Footer_module = __webpack_require__(2378);
var Footer_module_default = /*#__PURE__*/__webpack_require__.n(Footer_module);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/layout/Footer.js
const instaSvg = "/footer/instagram.svg";
const vkSvg = "/footer/vkontakte.svg";






const Footer = props => {
  return /*#__PURE__*/jsx_runtime_.jsx("footer", {
    className: (Footer_module_default()).Footer,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (Footer_module_default()).InnerFooter,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Section/* default */.Z, {
        className: (Footer_module_default()).Soc,
        isHorizontal: true,
        children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
          src: vkSvg,
          alt: "\u041D\u0430\u0448 \u0412\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0435"
        }), /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: instaSvg,
          alt: "\u041D\u0430\u0448 \u0418\u043D\u0441\u0442\u0430\u0433\u0440\u0430\u043C"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Section/* default */.Z, {
        isHorizontal: true,
        children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
          children: "\u041E\u0421\u0422\u0410\u0412\u042C\u0422\u0415 \u041E\u0422\u0417\u042B\u0412"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (Footer_module_default()).Text,
          children: /*#__PURE__*/jsx_runtime_.jsx("p", {
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
              href: "mailto:vigmaspb@gmail.com",
              children: "vigmaspb@gmail.com"
            })
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Section/* default */.Z, {
        isHorizontal: true,
        children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
          children: "\u041D\u0410\u0428 \u0410\u0414\u0420\u0415\u0421"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (Footer_module_default()).Text,
          children: /*#__PURE__*/jsx_runtime_.jsx("p", {
            children: "\u0433. \u0421\u0430\u043D\u043A\u0442-\u041F\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433, \u0443\u043B. \u0410\u0432\u0442\u043E\u0431\u0443\u0441\u043D\u0430\u044F, \u0434. 3, \u043B\u0438\u0442. \u0411"
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Section/* default */.Z, {
        isHorizontal: true,
        children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
          children: "\u041A\u041E\u041D\u0422\u0410\u041A\u0422\u042B"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (Footer_module_default()).Text,
          children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
              href: "tel:+7 (812) 642 60-51",
              children: "+7 (812) 642 60-51"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
              href: "tel:+7 (964) 342 60-51",
              children: "+7 (964) 342 60-51"
            })
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Section/* default */.Z, {
        isHorizontal: true,
        children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
          children: "\u0412\u0410\u041A\u0410\u041D\u0421\u0418\u0418"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (Footer_module_default()).Text,
          children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
            children: "\u0412\u0441\u0435\u0433\u0434\u0430 \u043E\u0442\u043A\u0440\u044B\u0442\u044B \u0442\u0430\u043B\u0430\u043D\u0442\u0430\u043C:"
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
              href: "mailto:vigmaspb@gmail.com",
              children: "vigmaspb@gmail.com"
            })
          })]
        })]
      })]
    })
  });
};

/* harmony default export */ const layout_Footer = (Footer);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/ui/NavLink.module.scss
var NavLink_module = __webpack_require__(6769);
var NavLink_module_default = /*#__PURE__*/__webpack_require__.n(NavLink_module);
;// CONCATENATED MODULE: ./src/components/ui/NavLink.js
const _excluded = ["className", "innerClassName", "img", "href", "children"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const NavLink = props => {
  const {
    className,
    innerClassName,
    img,
    href,
    children
  } = props,
        linkProps = _objectWithoutProperties(props, _excluded);

  return /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
    href: href || "",
    passHref: true,
    children: /*#__PURE__*/jsx_runtime_.jsx("div", _objectSpread(_objectSpread({
      className: `
        ${(NavLink_module_default()).Link}
        ${className || ""}
      `.trim()
    }, linkProps), {}, {
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: innerClassName,
        children: children
      })
    }))
  });
};

/* harmony default export */ const ui_NavLink = (NavLink);
// EXTERNAL MODULE: ./src/components/layout/Header.module.css
var Header_module = __webpack_require__(2816);
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);
;// CONCATENATED MODULE: ./src/components/layout/Header.js






const hamMenuSvg = "/ham-menu.svg";
const blueLogo = "/logos/vigma_logo_blue.svg";

const Header = props => {
  const {
    0: isActiveNav,
    1: setIsActiveNav
  } = (0,external_react_.useState)(false);

  const menuClickHandler = e => {
    e.stopPropagation();
    setIsActiveNav(prevState => !prevState);
  };

  const menuBlurHandler = e => {
    setIsActiveNav(false);
  };

  const navClickHandler = e => {
    e.stopPropagation();
  };

  (0,external_react_.useEffect)(() => {
    window.addEventListener("click", menuBlurHandler);
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("header", {
      className: (Header_module_default()).Header,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (Header_module_default()).InnerHeader,
        children: [/*#__PURE__*/jsx_runtime_.jsx(ui_NavLink, {
          innerClassName: (Header_module_default()).LogoInnerContainer,
          className: (Header_module_default()).LogoContainer,
          href: "/main",
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: blueLogo,
            className: (Header_module_default()).Logo,
            tabIndex: 1
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: hamMenuSvg,
          onClick: menuClickHandler,
          alt: "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043C\u0435\u043D\u044E",
          tabIndex: 1,
          className: (Header_module_default()).HamMenu
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("nav", {
          onClick: navClickHandler,
          tabIndex: 1,
          className: `${(Header_module_default()).Nav} ${isActiveNav && (Header_module_default()).Nav__active}`,
          children: [/*#__PURE__*/jsx_runtime_.jsx(ui_NavLink, {
            href: "/order/quiz",
            children: "\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C"
          }), /*#__PURE__*/jsx_runtime_.jsx(ui_NavLink, {
            href: "/contacts",
            children: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"
          }), /*#__PURE__*/jsx_runtime_.jsx(ui_NavLink, {
            href: "/about-us",
            children: "\u041E \u043D\u0430\u0441"
          }), /*#__PURE__*/jsx_runtime_.jsx(ui_NavLink, {
            href: "/reviews",
            children: "\u041E\u0442\u0437\u044B\u0432\u044B"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ui_NavLink, {
            href: "/works",
            children: ["\u041D\u0430\u0448\u0438", /*#__PURE__*/jsx_runtime_.jsx("br", {}), " \u0440\u0430\u0431\u043E\u0442\u044B"]
          })]
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (Header_module_default()).HeaderSpace
    })]
  });
};

/* harmony default export */ const layout_Header = (Header);
// EXTERNAL MODULE: ./src/components/layout/Layout.module.css
var Layout_module = __webpack_require__(2411);
var Layout_module_default = /*#__PURE__*/__webpack_require__.n(Layout_module);
;// CONCATENATED MODULE: ./src/components/layout/Layout.js






const Layout = props => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (Layout_module_default()).Layout,
    children: [/*#__PURE__*/jsx_runtime_.jsx(layout_Header, {}), props.children, /*#__PURE__*/jsx_runtime_.jsx(layout_Footer, {})]
  });
};

/* harmony default export */ const layout_Layout = (Layout);
// EXTERNAL MODULE: ./src/components/layout/Page.js
var Page = __webpack_require__(8725);
;// CONCATENATED MODULE: ./src/pages/_app.js
function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _app_ownKeys(Object(source), true).forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function App({
  Component,
  pageProps
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(layout_Layout, {
    children: /*#__PURE__*/jsx_runtime_.jsx(Component, _app_objectSpread({}, pageProps))
  });
}

/* harmony default export */ const _app = (App);

/***/ }),

/***/ 2378:
/***/ ((module) => {

// Exports
module.exports = {
	"Footer": "Footer_Footer__k8_Ol",
	"InnerFooter": "Footer_InnerFooter__B2Gnl",
	"Soc": "Footer_Soc__qtY0H"
};


/***/ }),

/***/ 2816:
/***/ ((module) => {

// Exports
module.exports = {
	"Header": "Header_Header__fF2ZS",
	"HeaderSpace": "Header_HeaderSpace__DJ5Lz",
	"InnerHeader": "Header_InnerHeader__j7yPX",
	"LogoContainer": "Header_LogoContainer__igXDD",
	"LogoInnerContainer": "Header_LogoInnerContainer__pr0p0",
	"Logo": "Header_Logo__iHwi9",
	"HamMenu": "Header_HamMenu__A8nyv",
	"Nav": "Header_Nav__KVjhM",
	"Nav__active": "Header_Nav__active__r8PfJ"
};


/***/ }),

/***/ 2411:
/***/ ((module) => {

// Exports
module.exports = {
	"Layout": "Layout_Layout__NQ5Vl"
};


/***/ }),

/***/ 6769:
/***/ ((module) => {

// Exports
module.exports = {
	"Link": "NavLink_Link__HV0x9"
};


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
var __webpack_exports__ = __webpack_require__.X(0, [400,664,725,794], () => (__webpack_exec__(5340)));
module.exports = __webpack_exports__;

})();