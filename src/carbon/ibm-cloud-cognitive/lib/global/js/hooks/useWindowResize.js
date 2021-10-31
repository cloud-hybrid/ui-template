"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useWindowResize = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = require("react");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var windowExists = typeof window !== "undefined";

var getWindowSize = function getWindowSize() {
  if (!windowExists) {
    return {
      innerHeight: 0,
      innerWidth: 0,
      outerHeight: 0,
      outerWidth: 0
    };
  }

  var _window = _objectSpread({}, window),
      innerHeight = _window.innerHeight,
      innerWidth = _window.innerWidth,
      outerHeight = _window.outerHeight,
      outerWidth = _window.outerWidth;

  return {
    innerHeight: innerHeight,
    innerWidth: innerWidth,
    outerHeight: outerHeight,
    outerWidth: outerWidth
  };
};

var useWindowResize = function useWindowResize(effect, deps) {
  var throttleInterval = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var windowSize = (0, _react.useRef)({});
  var throttleTimeout = (0, _react.useRef)(null);

  var doGetWindowSize = function doGetWindowSize() {
    var newVal = {
      previous: windowSize.current,
      current: getWindowSize()
    }; // call effect

    effect(newVal);
    windowSize.current = newVal.current;
    throttleTimeout.current = null;
  };

  (0, _react.useLayoutEffect)(function () {
    var handleResize = function handleResize() {
      if (throttleInterval) {
        if (throttleTimeout.current === null) {
          throttleTimeout.current = setTimeout(doGetWindowSize, throttleInterval);
        }
      } else {
        doGetWindowSize();
      }
    };

    window.addEventListener('resize', handleResize);
    doGetWindowSize();
    return function () {
      return window.removeEventListener('resize', handleResize);
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};

exports.useWindowResize = useWindowResize;