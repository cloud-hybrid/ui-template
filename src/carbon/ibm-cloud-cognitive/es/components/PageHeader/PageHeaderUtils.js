import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { pkg } from '../../settings';
import { scrollableAncestor } from '../../global/js/utils/scrollableAncestor';
export var blockClass = "".concat(pkg.prefix, "--page-header");
/**
 * Assesses the vertical height of various elements and calls setMetrics with update
 * @param {{}} headerRef
 * @param {{}} offsetTopMeasuringRef
 * @param {{}} navigation
 * @param {boolean} disableBreadcrumbScroll
 * @param {()} setMetrics
 */

export var utilCheckUpdateVerticalSpace = function utilCheckUpdateVerticalSpace(headerRef, offsetTopMeasuringRef, navigation, disableBreadcrumbScroll, setMetrics) {
  var dynamicRefs = {};

  var getDynamicRef = function getDynamicRef(selector) {
    // would love to do this differently but digging in the dom seems easier
    // than getting a ref to a conditionally rendered item

    /* don't know how to test resize */

    /* istanbul ignore if */
    if (!headerRef.current) {
      return undefined;
    } else {
      var dRef = dynamicRefs[selector];
      /* istanbul ignore else */

      if (!dRef ||
      /* istanbul ignore next */
      dRef.parentNode === null) {
        dynamicRefs[selector] = headerRef.current.querySelector(selector);
      }
    }

    return dynamicRefs[selector];
  };

  setMetrics(function (previous) {
    // Utility function that checks the heights of various elements which are used to determine layout
    var update = {};
    var breadcrumbTitleEl = getDynamicRef(".".concat(blockClass, "__breadcrumb-title"));
    var breadcrumbRowEl = getDynamicRef(".".concat(blockClass, "__breadcrumb-row"));
    var titleRowEl = getDynamicRef(".".concat(blockClass, "__title-row"));
    var subtitleRowEl = getDynamicRef(".".concat(blockClass, "__subtitle-row"));
    var availableRowEl = getDynamicRef(".".concat(blockClass, "__available-row"));
    var navigationRowEl = getDynamicRef(".".concat(blockClass, "__navigation-row"));
    /* istanbul ignore next */

    update.headerHeight = headerRef.current ? headerRef.current.clientHeight : 0;
    /* istanbul ignore next */

    update.headerWidth = headerRef.current ? headerRef.current.offsetWidth : 0; // The header offset is the vertical distance from the top of the document to
    // the page header, which we obtain using getBoundingClientRect() for robust
    // behavior. We use this offset as the scroll/fixed threshold.

    var scrollableContainer = scrollableAncestor(headerRef.current);
    /* istanbul ignore next */

    update.headerOffset = offsetTopMeasuringRef.current.getBoundingClientRect().top - (scrollableContainer === null || scrollableContainer === void 0 ? void 0 : scrollableContainer.getBoundingClientRect().top) || 0;
    /* istanbul ignore next */

    update.breadcrumbRowHeight = breadcrumbRowEl ? breadcrumbRowEl.clientHeight : 0;
    /* istanbul ignore next */

    update.breadcrumbRowWidth = breadcrumbRowEl ? breadcrumbRowEl.offsetWidth : 0;
    /* istanbul ignore next */

    update.breadcrumbTitleHeight = breadcrumbTitleEl ? breadcrumbTitleEl.clientHeight : 1;
    /* istanbul ignore next */

    update.titleRowHeight = titleRowEl ? titleRowEl.clientHeight : 0;
    /* istanbul ignore next */

    update.subtitleRowHeight = subtitleRowEl ? subtitleRowEl.clientHeight : 0;
    /* istanbul ignore next */

    update.availableRowHeight = availableRowEl ? availableRowEl.clientHeight : 0;
    /* istanbul ignore next */

    update.navigationRowHeight = navigationRowEl ? navigationRowEl.clientHeight : 1; // Base for calculating sticky top

    update.headerTopValue = -update.headerHeight;

    if (navigation) {
      // adjust top for sticky with navigation
      update.headerTopValue += update.navigationRowHeight;
    }

    if (disableBreadcrumbScroll || !navigation) {
      // adjust sticky top if no navigation or breadcrumb is to stay on screen
      update.headerTopValue += update.breadcrumbRowHeight;
    }

    if (window) {
      var val;
      /* don't know how to test resize */

      /* istanbul ignore if */

      if (breadcrumbRowEl) {
        val = parseFloat(window.getComputedStyle(breadcrumbRowEl).getPropertyValue('margin-bottom'), 10);
        update.breadcrumbRowSpaceBelow = isNaN(val) ? 0 : val;
      }
      /* don't know how to test resize */

      /* istanbul ignore if */


      if (titleRowEl) {
        val = parseFloat(window.getComputedStyle(titleRowEl).getPropertyValue('margin-top'), 10);
        update.titleRowSpaceAbove = isNaN(val) ? 0 : val;
      }
    } else {
      update.breadcrumbRowSpaceBelow = 0;
      update.titleRowSpaceAbove = 0;
    }

    return _objectSpread(_objectSpread({}, previous), update);
  });
};
/**
 * Takes the title parameters and returns a titleShape
 * @param {{} | string} title
 * @param {{}} titleIcon
 * @param {string} defaultTitle
 * @returns
 */

export var utilGetTitleShape = function utilGetTitleShape(title, titleIcon, defaultTitle) {
  // Title shape is used to allow title to be string or shape
  var newShape = _objectSpread({}, defaultTitle);

  if (title) {
    if (typeof title !== 'string') {
      // title is in shape format
      newShape = Object.assign(newShape, _objectSpread({}, title));
    } else {
      // title is a string
      newShape.text = title;
    }
  }

  if (!newShape.icon && titleIcon) {
    // if no icon use titleIcon if supplied
    newShape.icon = titleIcon;
  }

  return newShape;
}; // Trigger a window scroll, if necessary, to set the collapsed state.

export var utilSetCollapsed = function utilSetCollapsed(collapse, headerOffset, headerTopValue) {
  /* don't know how to test resize */

  /* istanbul ignore else */
  if (collapse) {
    window.scrollTo({
      top: headerOffset - headerTopValue,
      behavior: 'smooth'
    });
  } else {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
};