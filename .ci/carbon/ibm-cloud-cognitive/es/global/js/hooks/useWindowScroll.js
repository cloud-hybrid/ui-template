import { useRef, useLayoutEffect } from 'react';
import { scrollableAncestor } from '../utils/scrollableAncestor';
var windowExists = typeof window !== "undefined";

var useTargetScroll = function useTargetScroll(target, effect, deps, throttleInterval) {
  var scrollPosition = useRef({});
  var throttleTimeout = useRef(null);

  var getScrollPosition = function getScrollPosition() {
    if (!target || !windowExists && target === window) {
      return {
        scrollX: -1,
        scrollY: -1
      };
    } //


    var scrollX, scrollY;

    if (target === window) {
      scrollX = window.scrollX;
      scrollY = window.scrollY;
    } else {
      scrollX = target.scrollLeft;
      scrollY = target.scrollTop;
    }

    return {
      scrollX: scrollX,
      scrollY: scrollY
    };
  };

  var doGetScrollPosition = function doGetScrollPosition() {
    var newVal = {
      previous: scrollPosition.current,
      current: getScrollPosition()
    }; // call effect

    effect(newVal);
    scrollPosition.current = newVal.current;
    throttleTimeout.current = null;
  };

  useLayoutEffect(function () {
    var handleScroll = function handleScroll() {
      if (throttleInterval) {
        if (throttleTimeout.current === null) {
          throttleTimeout.current = setTimeout(doGetScrollPosition, throttleInterval);
        }
      } else {
        doGetScrollPosition();
      }
    };

    if (target) {
      target.addEventListener('scroll', handleScroll);
      doGetScrollPosition();
    }

    return function () {
      return target && target.removeEventListener('scroll', handleScroll);
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};

export function useWindowScroll(effect, deps) {
  var throttleInterval = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  return useTargetScroll(window, effect, deps, throttleInterval);
}
export function useNearestScroll(ref, effect, deps) {
  var throttle = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var scrollableTarget = scrollableAncestor(ref.current);

  if (scrollableTarget && (document.body === scrollableTarget || scrollableTarget.contains(document.body))) {
    scrollableTarget = window;
  }

  return useTargetScroll(scrollableTarget, effect, deps, throttle);
}