(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[941],{

/***/ 6054:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/order",
      function () {
        return __webpack_require__(3763);
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

/***/ 5328:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _Third_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5761);
/* harmony import */ var _Third_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Third_module_scss__WEBPACK_IMPORTED_MODULE_1__);


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
var Third = function(props) {
    var children = props.children, thirdProps = _objectWithoutProperties(props, [
        "children"
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", _objectSpread({
    }, thirdProps, {
        className: (_Third_module_scss__WEBPACK_IMPORTED_MODULE_1___default().Third),
        children: children
    })));
};
/* harmony default export */ __webpack_exports__["Z"] = (Third);


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

/***/ 3763:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ order; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/next/router.js
var next_router = __webpack_require__(1163);
// EXTERNAL MODULE: ./node_modules/next/node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(8520);
var runtime_default = /*#__PURE__*/__webpack_require__.n(runtime);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
;// CONCATENATED MODULE: ./node_modules/@emailjs/browser/es/store/store.js
const store = {
    _origin: 'https://api.emailjs.com',
};

;// CONCATENATED MODULE: ./node_modules/@emailjs/browser/es/methods/init/init.js

/**
 * Initiation
 * @param {string} userID - set the EmailJS user ID
 * @param {string} origin - set the EmailJS origin
 */
const init = (userID, origin = 'https://api.emailjs.com') => {
    store._userID = userID;
    store._origin = origin;
};

;// CONCATENATED MODULE: ./node_modules/@emailjs/browser/es/utils/validateParams.js
const validateParams = (userID, serviceID, templateID) => {
    if (!userID) {
        throw 'The user ID is required. Visit https://dashboard.emailjs.com/admin/integration';
    }
    if (!serviceID) {
        throw 'The service ID is required. Visit https://dashboard.emailjs.com/admin';
    }
    if (!templateID) {
        throw 'The template ID is required. Visit https://dashboard.emailjs.com/admin/templates';
    }
    return true;
};

;// CONCATENATED MODULE: ./node_modules/@emailjs/browser/es/models/EmailJSResponseStatus.js
class EmailJSResponseStatus {
    constructor(httpResponse) {
        this.status = httpResponse.status;
        this.text = httpResponse.responseText;
    }
}

;// CONCATENATED MODULE: ./node_modules/@emailjs/browser/es/api/sendPost.js


const sendPost = (url, data, headers = {}) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.addEventListener('load', ({ target }) => {
            const responseStatus = new EmailJSResponseStatus(target);
            if (responseStatus.status === 200 || responseStatus.text === 'OK') {
                resolve(responseStatus);
            }
            else {
                reject(responseStatus);
            }
        });
        xhr.addEventListener('error', ({ target }) => {
            reject(new EmailJSResponseStatus(target));
        });
        xhr.open('POST', store._origin + url, true);
        Object.keys(headers).forEach((key) => {
            xhr.setRequestHeader(key, headers[key]);
        });
        xhr.send(data);
    });
};

;// CONCATENATED MODULE: ./node_modules/@emailjs/browser/es/methods/send/send.js



/**
 * Send a template to the specific EmailJS service
 * @param {string} serviceID - the EmailJS service ID
 * @param {string} templateID - the EmailJS template ID
 * @param {object} templatePrams - the template params, what will be set to the EmailJS template
 * @param {string} userID - the EmailJS user ID
 * @returns {Promise<EmailJSResponseStatus>}
 */
const send = (serviceID, templateID, templatePrams, userID) => {
    const uID = userID || store._userID;
    validateParams(uID, serviceID, templateID);
    const params = {
        lib_version: '3.3.1',
        user_id: uID,
        service_id: serviceID,
        template_id: templateID,
        template_params: templatePrams,
    };
    return sendPost('/api/v1.0/email/send', JSON.stringify(params), {
        'Content-type': 'application/json',
    });
};

;// CONCATENATED MODULE: ./node_modules/@emailjs/browser/es/methods/sendForm/sendForm.js



const findHTMLForm = (form) => {
    let currentForm;
    if (typeof form === 'string') {
        currentForm = document.querySelector(form);
    }
    else {
        currentForm = form;
    }
    if (!currentForm || currentForm.nodeName !== 'FORM') {
        throw 'The 3rd parameter is expected to be the HTML form element or the style selector of form';
    }
    return currentForm;
};
/**
 * Send a form the specific EmailJS service
 * @param {string} serviceID - the EmailJS service ID
 * @param {string} templateID - the EmailJS template ID
 * @param {string | HTMLFormElement} form - the form element or selector
 * @param {string} userID - the EmailJS user ID
 * @returns {Promise<EmailJSResponseStatus>}
 */
const sendForm = (serviceID, templateID, form, userID) => {
    const uID = userID || store._userID;
    const currentForm = findHTMLForm(form);
    validateParams(uID, serviceID, templateID);
    const formData = new FormData(currentForm);
    formData.append('lib_version', '3.3.1');
    formData.append('service_id', serviceID);
    formData.append('template_id', templateID);
    formData.append('user_id', uID);
    return sendPost('/api/v1.0/email/send-form', formData);
};

;// CONCATENATED MODULE: ./node_modules/@emailjs/browser/es/index.js




/* harmony default export */ var es = ({
    init: init,
    send: send,
    sendForm: sendForm,
});

// EXTERNAL MODULE: ./src/components/ui/MainButton.js
var MainButton = __webpack_require__(834);
// EXTERNAL MODULE: ./src/components/ui/Third.js
var Third = __webpack_require__(5328);
// EXTERNAL MODULE: ./src/components/ui/Section.js
var Section = __webpack_require__(4568);
// EXTERNAL MODULE: ./src/components/ui/Input.module.scss
var Input_module = __webpack_require__(3380);
var Input_module_default = /*#__PURE__*/__webpack_require__.n(Input_module);
;// CONCATENATED MODULE: ./src/components/ui/Input.js




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
var Input = function(props) {
    var label = props.label, input = props.input, InputElement = props.InputElement, id = props.id, isNeeded = props.isNeeded;
    id = (0,react.useRef)(id || Math.random());
    InputElement = InputElement || "input";
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Section/* default */.Z, {
        className: (Input_module_default()).Container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", _objectSpread({
            }, label.props, {
                htmlFor: id.current,
                className: "\n          ".concat((Input_module_default()).Label, "\n          ").concat(label.className || "", "\n          ").concat(isNeeded && (Input_module_default()).needed || "", "\n        ").trim(),
                children: [
                    label.children,
                    " ",
                    isNeeded && /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        title: "Обязательное поле",
                        className: (Input_module_default()).needSign,
                        children: "*"
                    })
                ]
            })),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(InputElement, _objectSpread({
            }, input.props, {
                id: id.current,
                className: "\n          ".concat((Input_module_default()).Input, " \n          ").concat(input.className || "", "\n        ").trim()
            }))
        ]
    }));
};
/* harmony default export */ var ui_Input = (Input);

// EXTERNAL MODULE: ./src/components/ui/Spinner.module.scss
var Spinner_module = __webpack_require__(9044);
var Spinner_module_default = /*#__PURE__*/__webpack_require__.n(Spinner_module);
;// CONCATENATED MODULE: ./src/components/ui/Spinner.js


var Spinner = function(props) {
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (Spinner_module_default()).SpinnerWrapper,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: (Spinner_module_default()).Spinner
            }),
            props.text && /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                children: props.text
            })
        ]
    }));
};
/* harmony default export */ var ui_Spinner = (Spinner);

// EXTERNAL MODULE: ./src/components/ui/Secondary.js
var Secondary = __webpack_require__(2276);
// EXTERNAL MODULE: ./src/components/ui/Modal.js
var Modal = __webpack_require__(1089);
// EXTERNAL MODULE: ./src/components/total order/OrderedModal.module.css
var OrderedModal_module = __webpack_require__(892);
var OrderedModal_module_default = /*#__PURE__*/__webpack_require__.n(OrderedModal_module);
;// CONCATENATED MODULE: ./src/components/total order/OrderedModal.js




function OrderedModal_defineProperty(obj, key, value) {
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
function OrderedModal_objectSpread(target) {
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
            OrderedModal_defineProperty(target, key, source[key]);
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
var OrderedModal = function(props) {
    var text = props.text, status = props.status, children = props.children, modalProps = _objectWithoutProperties(props, [
        "text",
        "status",
        "children"
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Modal/* default */.Z, OrderedModal_objectSpread({
        className: (OrderedModal_module_default()).Modal
    }, modalProps, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Secondary/* default */.Z, {
                children: status
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                children: text
            })
        ]
    })));
};
/* harmony default export */ var total_order_OrderedModal = (OrderedModal);

// EXTERNAL MODULE: ./src/components/total order/TotalOrderForm.module.css
var TotalOrderForm_module = __webpack_require__(4595);
var TotalOrderForm_module_default = /*#__PURE__*/__webpack_require__.n(TotalOrderForm_module);
;// CONCATENATED MODULE: ./src/components/total order/TotalOrderForm.js











function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function TotalOrderForm_defineProperty(obj, key, value) {
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
function TotalOrderForm_objectSpread(target) {
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
            TotalOrderForm_defineProperty(target, key, source[key]);
        });
    }
    return target;
}
var SERVICE_ID = "service_kiq0jp9";
var TEMPLATE_ID = "template_hci5war";
var USER_ID = "user_2FU0yfDjTaoUzX8yIWhal";
function telInputHandler(e) {
    var cleanNumber = e.target.value.replace(/[^\d]/g, "");
    if (!cleanNumber) return e.target.value = "";
    var number = [
        cleanNumber[0],
        cleanNumber.slice(1, 4),
        cleanNumber.slice(4, 7),
        cleanNumber.slice(7, 9),
        cleanNumber.slice(9, 11), 
    ];
    var formattedNumber = "";
    var addNumbers = function(prefix, group) {
        if (group) {
            formattedNumber += prefix + group;
        }
    };
    var signs = [
        "+",
        " (",
        ") ",
        " ",
        "-"
    ];
    number.forEach(function(group) {
        return addNumbers(signs.shift(), group);
    });
    e.target.value = formattedNumber;
}
function getTrim(ref) {
    return ref.current.value.trim();
}
var TotalOrderForm = function(props) {
    var router = (0,next_router.useRouter)();
    var ref = (0,react.useState)(false), isSent = ref[0], setIsSent = ref[1];
    var ref1 = (0,react.useState)(false), error = ref1[0], setError = ref1[1];
    var ref2 = (0,react.useState)(false), isLoading = ref2[0], setIsLoading = ref2[1];
    // Client info
    var nameRef = (0,react.useRef)();
    var numberRef = (0,react.useRef)();
    var emailRef = (0,react.useRef)();
    var commentRef = (0,react.useRef)();
    var orderHandler = _asyncToGenerator(runtime_default().mark(function _callee(e) {
        var email, name, number, comment, isNameValid, isEmailValid, isNumberValid, isFormValid, clientInfo, emailParams;
        return runtime_default().wrap(function _callee$(_ctx) {
            while(1)switch(_ctx.prev = _ctx.next){
                case 0:
                    e.preventDefault();
                    email = getTrim(emailRef);
                    name = getTrim(nameRef);
                    number = getTrim(numberRef);
                    comment = getTrim(commentRef);
                    isNameValid = name.length > 2;
                    isEmailValid = email.match(/^.*@[A-Za-z]+\.[A-Za-z]+$/g);
                    isNumberValid = number.match(/\d+/g) && number.length >= 7 || isEmailValid;
                    isEmailValid = isEmailValid || isNumberValid;
                    isFormValid = isEmailValid && isNameValid && isNumberValid;
                    if (isFormValid) {
                        _ctx.next = 13;
                        break;
                    }
                    setError({
                        status: "Неверная форма",
                        text: "Вы должны заполнить все поля правильно (кроме комментария)"
                    });
                    return _ctx.abrupt("return");
                case 13:
                    setIsLoading(true);
                    clientInfo = {
                        name: name,
                        number: number,
                        email: email,
                        comment: comment
                    };
                    emailParams = TotalOrderForm_objectSpread({
                        item: item
                    }, orderInfo, clientInfo);
                    _ctx.prev = 16;
                    _ctx.next = 19;
                    return send(SERVICE_ID, TEMPLATE_ID, emailParams, USER_ID);
                case 19:
                    setIsLoading(false);
                    setIsSent(true);
                    _ctx.next = 27;
                    break;
                case 23:
                    _ctx.prev = 23;
                    _ctx.t0 = _ctx["catch"](16);
                    setIsLoading(false);
                    setError(_ctx.t0);
                case 27:
                case "end":
                    return _ctx.stop();
            }
        }, _callee, null, [
            [
                16,
                23
            ]
        ]);
    }));
    var closeHandler = function(e) {
        router.push("/main");
    };
    if (isLoading) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(ui_Spinner, {
        text: "Загрузка..."
    }));
    if (error) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(total_order_OrderedModal, {
        status: error.status || "Ошибка",
        onClose: function() {
            setError(false);
            setIsSent(false);
            setIsLoading(false);
        },
        text: error.text || "Что-то пошло не так. Пожалуйста, повторите попытку"
    }));
    if (isSent) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(total_order_OrderedModal, {
        status: "Заказ успешно отправлен!",
        onClose: closeHandler,
        text: "В скором времени вам позвонит менеджер и договорится о встрече"
    }));
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
            className: (TotalOrderForm_module_default()).TotalOrderForm,
            onSubmit: orderHandler,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_Input, {
                    id: "name-input",
                    isNeeded: true,
                    label: {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Third/* default */.Z, {
                            children: "Ваше имя"
                        })
                    },
                    input: {
                        props: {
                            ref: nameRef,
                            type: "text",
                            placeholder: "Имя"
                        }
                    }
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_Input, {
                            isNeeded: true,
                            id: "number-input",
                            label: {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Third/* default */.Z, {
                                    children: "Номер телефона"
                                })
                            },
                            input: {
                                props: {
                                    ref: numberRef,
                                    type: "tel",
                                    placeholder: "+_ (___) ___ __-__",
                                    onInput: telInputHandler
                                },
                                className: (TotalOrderForm_module_default()).MinInput
                            }
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_Input, {
                            id: "email-input",
                            label: {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Third/* default */.Z, {
                                    children: "Адрес эл. почты"
                                }),
                                props: {
                                    title: "Адрес электронной почты"
                                }
                            },
                            input: {
                                props: {
                                    ref: emailRef,
                                    type: "email",
                                    placeholder: "example@gmail.com"
                                },
                                className: (TotalOrderForm_module_default()).MinInput
                            }
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_Input, {
                    id: "comment-input",
                    InputElement: "textarea",
                    label: {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Third/* default */.Z, {
                            children: "Оставьте комментарий"
                        })
                    },
                    input: {
                        props: {
                            ref: commentRef,
                            rows: "3",
                            placeholder: "Ваш комментарий"
                        },
                        className: (TotalOrderForm_module_default()).CommentInput
                    }
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(MainButton/* default */.Z, {
                    type: "submit",
                    className: (TotalOrderForm_module_default()).MainButton,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                        children: "Оставить заявку"
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ var total_order_TotalOrderForm = (TotalOrderForm);

// EXTERNAL MODULE: ./src/components/total order/TotalOrderTree.module.scss
var TotalOrderTree_module = __webpack_require__(5538);
var TotalOrderTree_module_default = /*#__PURE__*/__webpack_require__.n(TotalOrderTree_module);
;// CONCATENATED MODULE: ./src/components/total order/TotalOrderTree.js




function TotalOrderTree_objectWithoutProperties(source, excluded) {
    if (source == null) return {
    };
    var target = TotalOrderTree_objectWithoutPropertiesLoose(source, excluded);
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
function TotalOrderTree_objectWithoutPropertiesLoose(source, excluded) {
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
var doubleArrowSvg = "/order-assets/double-arrow.svg";
var TotalOrderTree = function(props) {
    var orderInfo = props.orderInfo, item1 = props.item, treeProps = TotalOrderTree_objectWithoutProperties(props, [
        "orderInfo",
        "item"
    ]);
    if (item1) {
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
            children: item1
        }));
    }
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Section/* default */.Z, {
        className: (TotalOrderTree_module_default()).TotalOrderTree,
        children: orderInfo.filter(function(item) {
            return item.property;
        }).map(function(info, index, array) {
            var isLast = index >= array.length - 1;
            return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                children: [
                                    info.key,
                                    ":"
                                ]
                            }),
                            typeof info.property === "object" ? info.property.map(function(prop, i) {
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Third/* default */.Z, {
                                    children: prop
                                }, prop + i);
                            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Third/* default */.Z, {
                                children: info.property
                            })
                        ]
                    }),
                    !isLast && /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                        src: doubleArrowSvg
                    }, Math.random())
                ]
            }, index));
        })
    }));
};
/* harmony default export */ var total_order_TotalOrderTree = (TotalOrderTree);

;// CONCATENATED MODULE: ./src/storage/order-translations.js
var orderTranslations = {
    type: {
        kitchen: "Кухня",
        closet: "Шкаф",
        child: "Детская",
        "trade": "Торговый островок"
    },
    shape: {
        linear: "Прямая",
        angled: "Угловая",
        "u-shaped": "П-образная",
        others: "Другое"
    },
    material: {
        ldsp: "ЛДСП",
        mdf: "МДФ",
        massive: "Массив",
        others: "Другое"
    }
};
/* harmony default export */ var order_translations = (orderTranslations);

// EXTERNAL MODULE: ./src/components/layout/Page.js
var Page = __webpack_require__(7514);
// EXTERNAL MODULE: ./src/pages/order/TotalOrderPage.module.css
var TotalOrderPage_module = __webpack_require__(5402);
var TotalOrderPage_module_default = /*#__PURE__*/__webpack_require__.n(TotalOrderPage_module);
;// CONCATENATED MODULE: ./src/pages/order/index.js







var TotalOrderPage = function(props) {
    var router = (0,next_router.useRouter)();
    var item = router.query.item;
    var orderInfo;
    if (!item) {
        orderInfo = [
            {
                key: "Категория",
                property: order_translations.type[router.query.type]
            },
            {
                key: "Форма",
                property: order_translations.shape[router.query.shape]
            },
            {
                key: "Материалы",
                property: (router.query.material || "").split("+").map(function(query) {
                    return order_translations.material[query];
                }).join(" + ")
            }, 
        ];
    }
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Page/* default */.Z, {
        title: "Заказать",
        className: (TotalOrderPage_module_default()).TotalOrderPage,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(total_order_TotalOrderTree, {
                item: item,
                orderInfo: orderInfo
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(total_order_TotalOrderForm, {
                item: item,
                orderInfo: orderInfo
            })
        ]
    }));
};
/* harmony default export */ var order = (TotalOrderPage);


/***/ }),

/***/ 892:
/***/ (function() {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 4595:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"TotalOrderForm":"TotalOrderForm_TotalOrderForm__XoB0f","MainButton":"TotalOrderForm_MainButton__YZFbz","FileInput":"TotalOrderForm_FileInput__SnR7m","FileInputWrapper":"TotalOrderForm_FileInputWrapper__0WFht","CommentInput":"TotalOrderForm_CommentInput__sAONw"};

/***/ }),

/***/ 5402:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"TotalOrderPage":"TotalOrderPage_TotalOrderPage__UuPe4"};

/***/ }),

/***/ 2440:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"PageSpace":"Page_PageSpace__vlRAS","Page":"Page_Page__TDaJa","Spaced":"Page_Spaced__m35pe","NotSpaced":"Page_NotSpaced__4YxgJ","Title":"Page_Title__TdQ_T"};

/***/ }),

/***/ 5538:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"Query":"TotalOrderTree_Query__g2Eqs","TotalOrderTree":"TotalOrderTree_TotalOrderTree__DDW7P"};

/***/ }),

/***/ 3380:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"Container":"Input_Container__plrlU","Label":"Input_Label__zPh0u","Input":"Input_Input__tA__d","needed":"Input_needed__HLEk1","needSign":"Input_needSign__x4RQt"};

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

/***/ 9044:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"SpinnerWrapper":"Spinner_SpinnerWrapper__dcV6F","Spinner":"Spinner_Spinner__rYTKy","spin":"Spinner_spin__VtJdE"};

/***/ }),

/***/ 5761:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"Third":"Third_Third__Uq0Dd"};

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
/******/ __webpack_require__.O(0, [888], function() { return __webpack_exec__(6054); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);