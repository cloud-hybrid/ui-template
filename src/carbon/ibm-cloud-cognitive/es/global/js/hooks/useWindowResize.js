import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import { useRef, useLayoutEffect } from 'react';
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

export var useWindowResize = function useWindowResize(effect, deps) {
  var throttleInterval = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var windowSize = useRef({});
  var throttleTimeout = useRef(null);

  var doGetWindowSize = function doGetWindowSize() {
    var newVal = {
      previous: windowSize.current,
      current: getWindowSize()
    }; // call effect

    effect(newVal);
    windowSize.current = newVal.current;
    throttleTimeout.current = null;
  };

  useLayoutEffect(function () {
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