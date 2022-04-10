(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[888],{

/***/ 1780:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/_app",
      function () {
        return __webpack_require__(4182);
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

/***/ 4182:
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
;// CONCATENATED MODULE: ./node_modules/react-transition-group/node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}
;// CONCATENATED MODULE: ./node_modules/react-transition-group/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}
;// CONCATENATED MODULE: ./node_modules/react-transition-group/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
;// CONCATENATED MODULE: ./node_modules/react-transition-group/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}
;// CONCATENATED MODULE: ./node_modules/dom-helpers/esm/hasClass.js
/**
 * Checks if a given element has a CSS class.
 * 
 * @param element the element
 * @param className the CSS class name
 */
function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);
  return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}
;// CONCATENATED MODULE: ./node_modules/dom-helpers/esm/addClass.js

/**
 * Adds a CSS class to a given element.
 * 
 * @param element the element
 * @param className the CSS class name
 */

function addClass_addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!hasClass(element, className)) if (typeof element.className === 'string') element.className = element.className + " " + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + " " + className);
}
;// CONCATENATED MODULE: ./node_modules/dom-helpers/esm/removeClass.js
function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}
/**
 * Removes a CSS class from a given element.
 * 
 * @param element the element
 * @param className the CSS class name
 */


function removeClass_removeClass(element, className) {
  if (element.classList) {
    element.classList.remove(className);
  } else if (typeof element.className === 'string') {
    element.className = replaceClassName(element.className, className);
  } else {
    element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
  }
}
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(3935);
;// CONCATENATED MODULE: ./node_modules/react-transition-group/esm/config.js
/* harmony default export */ var config = ({
  disabled: false
});
;// CONCATENATED MODULE: ./node_modules/react-transition-group/esm/TransitionGroupContext.js

/* harmony default export */ var TransitionGroupContext = (react.createContext(null));
;// CONCATENATED MODULE: ./node_modules/react-transition-group/esm/Transition.js








var UNMOUNTED = 'unmounted';
var EXITED = 'exited';
var ENTERING = 'entering';
var ENTERED = 'entered';
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 1 },
 *   entered:  { opacity: 1 },
 *   exiting:  { opacity: 0 },
 *   exited:  { opacity: 0 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */

var Transition = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Transition, _React$Component);

  function Transition(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context; // In the context of a TransitionGroup all enters are really appears

    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;

    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }

    return null;
  } // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }
  ;

  var _proto = Transition.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;

    if (prevProps !== this.props) {
      var status = this.state.status;

      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    this.updateStatus(false, nextStatus);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter; // TODO: remove fallback for next major

      appear = timeout.appear !== undefined ? timeout.appear : enter;
    }

    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };

  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();

      if (nextStatus === ENTERING) {
        this.performEnter(mounting);
      } else {
        this.performExit();
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };

  _proto.performEnter = function performEnter(mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;

    var _ref2 = this.props.nodeRef ? [appearing] : [react_dom.findDOMNode(this), appearing],
        maybeNode = _ref2[0],
        maybeAppearing = _ref2[1];

    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter || config.disabled) {
      this.safeSetState({
        status: ENTERED
      }, function () {
        _this2.props.onEntered(maybeNode);
      });
      return;
    }

    this.props.onEnter(maybeNode, maybeAppearing);
    this.safeSetState({
      status: ENTERING
    }, function () {
      _this2.props.onEntering(maybeNode, maybeAppearing);

      _this2.onTransitionEnd(enterTimeout, function () {
        _this2.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(maybeNode, maybeAppearing);
        });
      });
    });
  };

  _proto.performExit = function performExit() {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts();
    var maybeNode = this.props.nodeRef ? undefined : react_dom.findDOMNode(this); // no exit animation skip right to EXITED

    if (!exit || config.disabled) {
      this.safeSetState({
        status: EXITED
      }, function () {
        _this3.props.onExited(maybeNode);
      });
      return;
    }

    this.props.onExit(maybeNode);
    this.safeSetState({
      status: EXITING
    }, function () {
      _this3.props.onExiting(maybeNode);

      _this3.onTransitionEnd(timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(maybeNode);
        });
      });
    });
  };

  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  _proto.onTransitionEnd = function onTransitionEnd(timeout, handler) {
    this.setNextCallback(handler);
    var node = this.props.nodeRef ? this.props.nodeRef.current : react_dom.findDOMNode(this);
    var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }

    if (this.props.addEndListener) {
      var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback],
          maybeNode = _ref3[0],
          maybeNextCallback = _ref3[1];

      this.props.addEndListener(maybeNode, maybeNextCallback);
    }

    if (timeout != null) {
      setTimeout(this.nextCallback, timeout);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
        children = _this$props.children,
        _in = _this$props.in,
        _mountOnEnter = _this$props.mountOnEnter,
        _unmountOnExit = _this$props.unmountOnExit,
        _appear = _this$props.appear,
        _enter = _this$props.enter,
        _exit = _this$props.exit,
        _timeout = _this$props.timeout,
        _addEndListener = _this$props.addEndListener,
        _onEnter = _this$props.onEnter,
        _onEntering = _this$props.onEntering,
        _onEntered = _this$props.onEntered,
        _onExit = _this$props.onExit,
        _onExiting = _this$props.onExiting,
        _onExited = _this$props.onExited,
        _nodeRef = _this$props.nodeRef,
        childProps = _objectWithoutPropertiesLoose(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);

    return (
      /*#__PURE__*/
      // allows for nested Transitions
      react.createElement(TransitionGroupContext.Provider, {
        value: null
      }, typeof children === 'function' ? children(status, childProps) : react.cloneElement(react.Children.only(children), childProps))
    );
  };

  return Transition;
}(react.Component);

Transition.contextType = TransitionGroupContext;
Transition.propTypes =  false ? 0 : {}; // Name the function so it is clearer in the documentation

function noop() {}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = UNMOUNTED;
Transition.EXITED = EXITED;
Transition.ENTERING = ENTERING;
Transition.ENTERED = ENTERED;
Transition.EXITING = EXITING;
/* harmony default export */ var esm_Transition = (Transition);
;// CONCATENATED MODULE: ./node_modules/react-transition-group/esm/CSSTransition.js










var _addClass = function addClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return addClass_addClass(node, c);
  });
};

var removeClass = function removeClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return removeClass_removeClass(node, c);
  });
};
/**
 * A transition component inspired by the excellent
 * [ng-animate](https://docs.angularjs.org/api/ngAnimate) library, you should
 * use it if you're using CSS transitions or animations. It's built upon the
 * [`Transition`](https://reactcommunity.org/react-transition-group/transition)
 * component, so it inherits all of its props.
 *
 * `CSSTransition` applies a pair of class names during the `appear`, `enter`,
 * and `exit` states of the transition. The first class is applied and then a
 * second `*-active` class in order to activate the CSS transition. After the
 * transition, matching `*-done` class names are applied to persist the
 * transition state.
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <CSSTransition in={inProp} timeout={200} classNames="my-node">
 *         <div>
 *           {"I'll receive my-node-* classes"}
 *         </div>
 *       </CSSTransition>
 *       <button type="button" onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the `in` prop is set to `true`, the child component will first receive
 * the class `example-enter`, then the `example-enter-active` will be added in
 * the next tick. `CSSTransition` [forces a
 * reflow](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
 * between before adding the `example-enter-active`. This is an important trick
 * because it allows us to transition between `example-enter` and
 * `example-enter-active` even though they were added immediately one after
 * another. Most notably, this is what makes it possible for us to animate
 * _appearance_.
 *
 * ```css
 * .my-node-enter {
 *   opacity: 0;
 * }
 * .my-node-enter-active {
 *   opacity: 1;
 *   transition: opacity 200ms;
 * }
 * .my-node-exit {
 *   opacity: 1;
 * }
 * .my-node-exit-active {
 *   opacity: 0;
 *   transition: opacity 200ms;
 * }
 * ```
 *
 * `*-active` classes represent which styles you want to animate **to**, so it's
 * important to add `transition` declaration only to them, otherwise transitions
 * might not behave as intended! This might not be obvious when the transitions
 * are symmetrical, i.e. when `*-enter-active` is the same as `*-exit`, like in
 * the example above (minus `transition`), but it becomes apparent in more
 * complex transitions.
 *
 * **Note**: If you're using the
 * [`appear`](http://reactcommunity.org/react-transition-group/transition#Transition-prop-appear)
 * prop, make sure to define styles for `.appear-*` classes as well.
 */


var CSSTransition = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(CSSTransition, _React$Component);

  function CSSTransition() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.appliedClasses = {
      appear: {},
      enter: {},
      exit: {}
    };

    _this.onEnter = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument[0],
          appearing = _this$resolveArgument[1];

      _this.removeClasses(node, 'exit');

      _this.addClass(node, appearing ? 'appear' : 'enter', 'base');

      if (_this.props.onEnter) {
        _this.props.onEnter(maybeNode, maybeAppearing);
      }
    };

    _this.onEntering = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument2 = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument2[0],
          appearing = _this$resolveArgument2[1];

      var type = appearing ? 'appear' : 'enter';

      _this.addClass(node, type, 'active');

      if (_this.props.onEntering) {
        _this.props.onEntering(maybeNode, maybeAppearing);
      }
    };

    _this.onEntered = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument3 = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument3[0],
          appearing = _this$resolveArgument3[1];

      var type = appearing ? 'appear' : 'enter';

      _this.removeClasses(node, type);

      _this.addClass(node, type, 'done');

      if (_this.props.onEntered) {
        _this.props.onEntered(maybeNode, maybeAppearing);
      }
    };

    _this.onExit = function (maybeNode) {
      var _this$resolveArgument4 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument4[0];

      _this.removeClasses(node, 'appear');

      _this.removeClasses(node, 'enter');

      _this.addClass(node, 'exit', 'base');

      if (_this.props.onExit) {
        _this.props.onExit(maybeNode);
      }
    };

    _this.onExiting = function (maybeNode) {
      var _this$resolveArgument5 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument5[0];

      _this.addClass(node, 'exit', 'active');

      if (_this.props.onExiting) {
        _this.props.onExiting(maybeNode);
      }
    };

    _this.onExited = function (maybeNode) {
      var _this$resolveArgument6 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument6[0];

      _this.removeClasses(node, 'exit');

      _this.addClass(node, 'exit', 'done');

      if (_this.props.onExited) {
        _this.props.onExited(maybeNode);
      }
    };

    _this.resolveArguments = function (maybeNode, maybeAppearing) {
      return _this.props.nodeRef ? [_this.props.nodeRef.current, maybeNode] // here `maybeNode` is actually `appearing`
      : [maybeNode, maybeAppearing];
    };

    _this.getClassNames = function (type) {
      var classNames = _this.props.classNames;
      var isStringClassNames = typeof classNames === 'string';
      var prefix = isStringClassNames && classNames ? classNames + "-" : '';
      var baseClassName = isStringClassNames ? "" + prefix + type : classNames[type];
      var activeClassName = isStringClassNames ? baseClassName + "-active" : classNames[type + "Active"];
      var doneClassName = isStringClassNames ? baseClassName + "-done" : classNames[type + "Done"];
      return {
        baseClassName: baseClassName,
        activeClassName: activeClassName,
        doneClassName: doneClassName
      };
    };

    return _this;
  }

  var _proto = CSSTransition.prototype;

  _proto.addClass = function addClass(node, type, phase) {
    var className = this.getClassNames(type)[phase + "ClassName"];

    var _this$getClassNames = this.getClassNames('enter'),
        doneClassName = _this$getClassNames.doneClassName;

    if (type === 'appear' && phase === 'done' && doneClassName) {
      className += " " + doneClassName;
    } // This is to force a repaint,
    // which is necessary in order to transition styles when adding a class name.


    if (phase === 'active') {
      /* eslint-disable no-unused-expressions */
      node && node.scrollTop;
    }

    if (className) {
      this.appliedClasses[type][phase] = className;

      _addClass(node, className);
    }
  };

  _proto.removeClasses = function removeClasses(node, type) {
    var _this$appliedClasses$ = this.appliedClasses[type],
        baseClassName = _this$appliedClasses$.base,
        activeClassName = _this$appliedClasses$.active,
        doneClassName = _this$appliedClasses$.done;
    this.appliedClasses[type] = {};

    if (baseClassName) {
      removeClass(node, baseClassName);
    }

    if (activeClassName) {
      removeClass(node, activeClassName);
    }

    if (doneClassName) {
      removeClass(node, doneClassName);
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        _ = _this$props.classNames,
        props = _objectWithoutPropertiesLoose(_this$props, ["classNames"]);

    return /*#__PURE__*/react.createElement(esm_Transition, _extends({}, props, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  };

  return CSSTransition;
}(react.Component);

CSSTransition.defaultProps = {
  classNames: ''
};
CSSTransition.propTypes =  false ? 0 : {};
/* harmony default export */ var esm_CSSTransition = (CSSTransition);
// EXTERNAL MODULE: ./src/components/layout/Support.module.scss
var Support_module = __webpack_require__(6540);
var Support_module_default = /*#__PURE__*/__webpack_require__.n(Support_module);
;// CONCATENATED MODULE: ./src/components/layout/Support.js




var Support = function(props) {
    var expandHandler = function expandHandler(e) {
        e.stopPropagation();
        setIsExpanded(true);
    };
    var unexpandHandler = function unexpandHandler() {
        setIsExpanded(false);
    };
    var ref = (0,react.useState)(true), isShown = ref[0], setIsShown = ref[1];
    var ref1 = (0,react.useState)(false), isExpanded = ref1[0], setIsExpanded = ref1[1];
    (0,react.useEffect)(function() {
        window.addEventListener("click", function() {
            setIsShown(false);
            unexpandHandler();
        });
    }, []);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
        className: (Support_module_default()).support,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(esm_CSSTransition, {
                timeout: 500,
                in: isExpanded,
                classNames: {
                    enterActive: (Support_module_default()).expanding,
                    enterDone: (Support_module_default()).expanded,
                    exitActive: (Support_module_default()).unexpanding,
                    exitDone: (Support_module_default()).unexpanded
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: (Support_module_default()).stack,
                    onClick: function(e) {
                        e.stopPropagation();
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                            target: "_blank",
                            rel: "noreferrer",
                            href: "https://vk.com/vigmaspb",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                src: "/support_vk.svg",
                                alt: "Помощь ВКонтакте"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                            rel: "noreferrer",
                            target: "_blank",
                            href: "https://wa.me/79643426051",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                src: "/support_wa.svg",
                                alt: "Помощь WhatsApp"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                            href: "tel:+7 (812) 642 60-51",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                src: "/support_phone.svg",
                                alt: "Помощь по Телефону"
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                onClick: isExpanded ? function(e) {
                    return unexpandHandler(e);
                } : function(e) {
                    return expandHandler(e);
                },
                src: isShown ? "/support_message.png" : "/support.png",
                alt: "Иконка Тех. Поддержки",
                className: (Support_module_default()).bg
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(esm_CSSTransition, {
                timeout: 500,
                in: isShown,
                classNames: {
                    enterDone: (Support_module_default()).shown,
                    exitActive: (Support_module_default()).unshowing,
                    exitDone: (Support_module_default()).unshown
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    onClick: function(e) {
                        setTimeout(function() {
                            return setIsShown(true);
                        }, 40000);
                        setIsShown(false);
                        expandHandler(e);
                        e.stopPropagation();
                    },
                    className: (Support_module_default()).message,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("strong", {
                            children: "Готовы помочь!"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                            children: "Здравствуйте, если у вас возник вопрос - просто позвоните или напишите, и мы вам поможем"
                        })
                    ]
                })
            })
        ]
    }));
};
/* harmony default export */ var layout_Support = (Support);

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
    var target = NavLink_objectWithoutPropertiesLoose(source, excluded);
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
function NavLink_objectWithoutPropertiesLoose(source, excluded) {
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
                                    children: "Рассчитать"
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
            /*#__PURE__*/ (0,jsx_runtime.jsx)(layout_Support, {
            }),
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

/***/ 6540:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"support":"Support_support__pKaAs","stack":"Support_stack__FR0Q3","expanding":"Support_expanding__8ysCC","appear":"Support_appear__bAc8O","jump":"Support_jump__ZpiiT","unexpanding":"Support_unexpanding__ZUKxk","fall":"Support_fall__kdswY","disappear":"Support_disappear__JcZvU","unexpanded":"Support_unexpanded__Qzawq","expanded":"Support_expanded__lRtcx","bg":"Support_bg__8gTvl","light":"Support_light__s5Pj4","message":"Support_message__jL4Pv","unshown":"Support_unshown__cdyjA","unshowing":"Support_unshowing__qrnV4","shown":"Support_shown__rW6O0"};

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