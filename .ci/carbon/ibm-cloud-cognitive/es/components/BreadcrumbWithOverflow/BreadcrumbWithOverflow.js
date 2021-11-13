import _extends from "@babel/runtime/helpers/extends";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["children"],
    _excluded2 = ["breadcrumbs", "children", "className", "maxVisible", "noTrailingSlash", "overflowAriaLabel"],
    _excluded3 = ["title"],
    _excluded4 = ["className", "key", "label", "title"],
    _excluded5 = ["label", "key"];

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

//
// Copyright IBM Corp. 2020, 2021
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//
// Import portions of React that are needed.
import React, { useState, useEffect, useRef } from 'react'; // Other standard imports.

import PropTypes from 'prop-types';
import cx from 'classnames';
import { Button } from 'carbon-components-react';
import { pkg, carbon } from '../../settings';
import { useResizeDetector } from 'react-resize-detector';
import { ArrowLeft16 } from '@carbon/icons-react'; // Carbon and package components we use.

import { Breadcrumb, BreadcrumbItem, OverflowMenu, OverflowMenuItem } from 'carbon-components-react';
import { OverflowMenuHorizontal32 } from '@carbon/icons-react';
import uuidv4 from '../../global/js/utils/uuidv4';
import { deprecateProp, extractShapesArray } from '../../global/js/utils/props-helper'; // The block part of our conventional BEM class names (blockClass__E--M).

var blockClass = "".concat(pkg.prefix, "--breadcrumb-with-overflow");
var componentName = 'BreadcrumbWithOverflow'; // NOTE: the component SCSS is not imported here: it is rolled up separately.

var getHref = function getHref(shape) {
  var _shape$children, _shape$children$props;

  // This function should extract href from item
  // It expects that the href is attached either to the item or direct child
  // It prefers item.props.href
  return shape !== null && shape !== void 0 && shape.href ? shape.href : shape === null || shape === void 0 ? void 0 : (_shape$children = shape.children) === null || _shape$children === void 0 ? void 0 : (_shape$children$props = _shape$children.props) === null || _shape$children$props === void 0 ? void 0 : _shape$children$props.href;
};

var getTitle = function getTitle(shape) {
  // This function should extract text based title from the item.
  // It prefers in this order
  // - shape.data-title
  // - shape.title
  // - shape.label if string
  // - shape.label.props.children if string. This case is likely if an <a /> is used inside a BreadcrumbItem
  var useAsTitle = null;
  /* istanbul ignore else */

  if (shape) {
    var _shape$label, _shape$label$props;

    // list represents preferred order with checks, no else case expected

    /* istanbul ignore next */
    if (shape['data-title']) {
      useAsTitle = shape['data-title'];
    } else if (shape.title) {
      useAsTitle = shape.title;
    } else if (typeof shape.label === 'string') {
      useAsTitle = shape.label;
    } else if (typeof (shape === null || shape === void 0 ? void 0 : (_shape$label = shape.label) === null || _shape$label === void 0 ? void 0 : (_shape$label$props = _shape$label.props) === null || _shape$label$props === void 0 ? void 0 : _shape$label$props.children) === 'string') {
      useAsTitle = shape.label.props.children;
    }
  }

  return useAsTitle;
};
/**
 * Converts the deprecated children array shapes into breadcrumbs
 */


var processShapesArray = function processShapesArray(arr) {
  return arr.map(function (shape) {
    var label = shape.children,
        rest = _objectWithoutProperties(shape, _excluded);

    var href = getHref(shape);
    return _objectSpread(_objectSpread({}, rest), {}, {
      href: href,
      label: label
    });
  });
};
/**
 * The BreadcrumbWithOverflow is used internally by the PageHeader to wrap BreadcrumbItems.
 */


export var BreadcrumbWithOverflow = function BreadcrumbWithOverflow(_ref) {
  var _backItem, _backItem2, _backItem3;

  var breadcrumbsIn = _ref.breadcrumbs,
      deprecated_children = _ref.children,
      className = _ref.className,
      maxVisible = _ref.maxVisible,
      noTrailingSlash = _ref.noTrailingSlash,
      overflowAriaLabel = _ref.overflowAriaLabel,
      other = _objectWithoutProperties(_ref, _excluded2);

  var _useState = useState(3),
      _useState2 = _slicedToArray(_useState, 2),
      displayCount = _useState2[0],
      setDisplayCount = _useState2[1];

  var _useState3 = useState([]),
      _useState4 = _slicedToArray(_useState3, 2),
      displayedBreadcrumbItems = _useState4[0],
      setDisplayedBreadcrumbItems = _useState4[1];

  var breadcrumbItemWithOverflow = useRef(null);
  var sizingContainerRef = useRef(null);
  var internalId = useRef(uuidv4());

  var _useState5 = useState([]),
      _useState6 = _slicedToArray(_useState5, 2),
      breadcrumbs = _useState6[0],
      setBreadcrumbs = _useState6[1]; // eslint-disable-next-line react/prop-types


  var BreadcrumbOverflowMenu = function BreadcrumbOverflowMenu(_ref2) {
    var overflowItems = _ref2.overflowItems;
    return /*#__PURE__*/React.createElement(BreadcrumbItem, {
      key: "breadcrumb-overflow-".concat(internalId.current)
    }, /*#__PURE__*/React.createElement(OverflowMenu, {
      ariaLabel: overflowAriaLabel,
      menuOffset: {
        top: 10,
        left: 59
      } // TODO: REMOVE when this is fixed https://github.com/carbon-design-system/carbon/issues/9155
      ,
      renderIcon: OverflowMenuHorizontal32,
      className: "".concat(blockClass, "__overflow-menu"),
      menuOptionsClass: "".concat(carbon.prefix, "--breadcrumb-menu-options") // TODO: REMOVE when this is fixed https://github.com/carbon-design-system/carbon/issues/9155

    }, // eslint-disable-next-line react/prop-types
    overflowItems.map(function (item, index) {
      return /*#__PURE__*/React.createElement(OverflowMenuItem, {
        key: "breadcrumb-overflow-menu-item-".concat(internalId.current, "-").concat(index),
        href: item.props.href,
        onClick: item.props.onClick,
        itemText: item.props.children
      });
    })));
  };

  useEffect(function () {
    var workWith = breadcrumbsIn !== null && breadcrumbsIn !== void 0 ? breadcrumbsIn : processShapesArray(extractShapesArray(deprecated_children));
    var newBreadcrumbs = workWith.map(function (_ref3) {
      var title = _ref3.title,
          rest = _objectWithoutProperties(_ref3, _excluded3);

      return _objectSpread(_objectSpread({}, rest), {}, {
        title: title !== null && title !== void 0 ? title : getTitle(rest)
      });
    });
    setBreadcrumbs(newBreadcrumbs);
  }, [breadcrumbsIn, deprecated_children]);
  useEffect(function () {
    // updates displayedBreadcrumbItems and overflowBreadcrumbItems based on displayCount and breadcrumbs
    if (breadcrumbs.length === 0) {
      setDisplayedBreadcrumbItems([]);
      return;
    }

    var newDisplayedBreadcrumbItems = breadcrumbs.map(function (_ref4, index) {
      var className = _ref4.className,
          key = _ref4.key,
          label = _ref4.label,
          title = _ref4.title,
          rest = _objectWithoutProperties(_ref4, _excluded4);

      return /*#__PURE__*/React.createElement(BreadcrumbItem, _extends({
        key: key,
        className: index > 0 || displayCount > 1 ? cx([className, "".concat(blockClass, "__displayed-breadcrumb")]) : className,
        title: index + 1 === breadcrumbs.length ? title : null
      }, rest), label);
    }); // The breadcrumb has the form [first item] [overflow] [items 2...(n-1)] [last item].
    // The overflow is only shown if there isn't space to display all the items, and in that case:
    //  * the last item is always displayed (even if there isn't really space for it -- it can contract to an ellipsis);
    //  * the first item is the next to be displayed, if there's space once the last item and overflow are shown;
    //  * any remaining space after the first item, last item and overflow are shown is used to show items (n-1), (n-2), (n-3), ..., until the space is used up ;
    // Note that displayCount (min 1) has been computed based on the available space and the above sequence.

    var overflowPosition = displayCount > 1 ? 1 : 0;
    var newOverflowBreadcrumbItems = newDisplayedBreadcrumbItems.splice(overflowPosition, breadcrumbs.length - displayCount); // if needed add overflow menu

    if (newOverflowBreadcrumbItems.length) {
      newDisplayedBreadcrumbItems.splice(overflowPosition, 0, /*#__PURE__*/React.createElement(BreadcrumbOverflowMenu, {
        overflowItems: newOverflowBreadcrumbItems,
        key: "displayed-breadcrumb-".concat(internalId, "-overflow")
      }));
    }

    setDisplayedBreadcrumbItems(newDisplayedBreadcrumbItems);
  }, [breadcrumbs, displayCount]);

  var checkFullyVisibleBreadcrumbItems = function checkFullyVisibleBreadcrumbItems() {
    var displayItemIndex = function displayItemIndex(itemCount, index) {
      // In this data set the overflow measuring item is [0]
      // so the first displayItem in the list is [1]
      // we never return 0;
      if (index === 0) {
        return itemCount - 1; // the last item in the list
      } else if (index === 1) {
        return 1; // the first item in the list
      } else {
        return itemCount - index; // count down from itemCount - 2 to 1
      }
    };

    if (maxVisible <= 1) {
      setDisplayCount(1);
    } else {
      // how many will fit?
      var willFit = 0;
      var spaceAvailable = breadcrumbItemWithOverflow.current.offsetWidth; // not sure how to test resize

      /* istanbul ignore next */

      if (sizingContainerRef.current) {
        var sizingBreadcrumbItems = sizingContainerRef.current.querySelectorAll(".".concat(carbon.prefix, "--breadcrumb-item"));
        var breadcrumbWidthsIncludingMargin = [];

        var _iterator = _createForOfIteratorHelper(sizingBreadcrumbItems),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var item = _step.value;
            var computedStyle = window ? window.getComputedStyle(sizingBreadcrumbItems[0]) : null;
            var marginWidths = computedStyle ? parseFloat(computedStyle.marginLeft || 0, 10) + parseFloat(computedStyle.marginRight || 0, 10) : 0;
            breadcrumbWidthsIncludingMargin.push(item.offsetWidth + marginWidths);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        var overflowWidth = breadcrumbWidthsIncludingMargin[0];

        for (var i = 0; i < breadcrumbWidthsIncludingMargin.length - 1; i++) {
          // count used one less than length to account for the included overflow item
          var index = displayItemIndex(breadcrumbWidthsIncludingMargin.length, i);

          if (spaceAvailable >= breadcrumbWidthsIncludingMargin[index]) {
            spaceAvailable -= breadcrumbWidthsIncludingMargin[index];
            willFit += 1;
          } else {
            break;
          }
        } // if not enough space for all breadcrumb items


        if (willFit < breadcrumbWidthsIncludingMargin.length - 1) {
          // -1 for overflow item
          while (willFit > 0 && spaceAvailable < overflowWidth) {
            willFit -= 1; // Highly unlikely any useful breadcrumb-item is smaller than the overflow menu, but we loop anyway just in case
            // item removed is based on last item added which is the current value of willFit

            var itemToRemove = displayItemIndex(breadcrumbWidthsIncludingMargin.length, willFit);
            spaceAvailable += breadcrumbWidthsIncludingMargin[itemToRemove];
          }
        }
      }

      if (willFit <= 1) {
        setDisplayCount(1);
      } else {
        setDisplayCount(maxVisible ? Math.min(willFit, maxVisible) : willFit);
      }
    }
  };

  useEffect(function () {
    checkFullyVisibleBreadcrumbItems(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [breadcrumbs, maxVisible]);
  /* istanbul ignore next */
  // not sure how to test resize

  var handleResize = function handleResize() {
    /* istanbul ignore next */
    // not sure how to test resize
    checkFullyVisibleBreadcrumbItems();
  };
  /* istanbul ignore next */
  // not sure how to test resize


  var handleBreadcrumbItemsResize = function handleBreadcrumbItemsResize() {
    /* istanbul ignore next */
    // not sure how to test resize
    checkFullyVisibleBreadcrumbItems();
  };

  var backItem = breadcrumbs[breadcrumbs.length - 1];
  /* istanbul ignore if */
  // not sure how to test media queries

  if ((_backItem = backItem) !== null && _backItem !== void 0 && _backItem.isCurrentPage) {
    backItem = breadcrumbs[breadcrumbs.length - 2];
  }

  useResizeDetector({
    onResize: handleBreadcrumbItemsResize,
    targetRef: sizingContainerRef
  });
  useResizeDetector({
    onResize: handleResize,
    targetRef: breadcrumbItemWithOverflow
  });
  return /*#__PURE__*/React.createElement("div", {
    className: cx(blockClass, className, _defineProperty({}, "".concat(blockClass, "__with-items"), displayedBreadcrumbItems.length > 1)),
    ref: breadcrumbItemWithOverflow
  }, /*#__PURE__*/React.createElement("div", {
    className: cx(["".concat(blockClass, "__space")])
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(blockClass, "__breadcrumb-container ").concat(blockClass, "__breadcrumb-container--hidden"),
    "aria-hidden": true,
    ref: sizingContainerRef
  }, /*#__PURE__*/React.createElement(Breadcrumb, null, /*#__PURE__*/React.createElement(BreadcrumbItem, {
    key: "".concat(blockClass, "-hidden-overflow-").concat(internalId)
  }, /*#__PURE__*/React.createElement(OverflowMenu, {
    ariaLabel: overflowAriaLabel,
    renderIcon: OverflowMenuHorizontal32
  })), breadcrumbs.map(function (_ref5) {
    var children = _ref5.label,
        key = _ref5.key,
        rest = _objectWithoutProperties(_ref5, _excluded5);

    return /*#__PURE__*/React.createElement(BreadcrumbItem, _extends({
      key: key
    }, rest), children);
  }))), ((_backItem2 = backItem) === null || _backItem2 === void 0 ? void 0 : _backItem2.href) && ((_backItem3 = backItem) === null || _backItem3 === void 0 ? void 0 : _backItem3.title) && /*#__PURE__*/React.createElement(Button, {
    className: "".concat(blockClass, "__breadcrumb-back-button"),
    hasIconOnly: true,
    iconDescription: backItem.title,
    kind: "ghost",
    href: backItem.href,
    renderIcon: ArrowLeft16,
    size: "field",
    tooltipPosition: "right",
    type: "button"
  }), /*#__PURE__*/React.createElement(Breadcrumb, _extends({
    className: cx("".concat(blockClass, "__breadcrumb-container"), _defineProperty({}, "".concat(blockClass, "__breadcrumb-container-with-items"), displayedBreadcrumbItems.length > 1)),
    noTrailingSlash: noTrailingSlash
  }, other), displayedBreadcrumbItems)));
}; // Return a placeholder if not released and not enabled by feature flag

BreadcrumbWithOverflow = pkg.checkComponentEnabled(BreadcrumbWithOverflow, componentName);
export var deprecatedProps = {
  /**
   * **Deprecated** see property `breadcrumbs`
   *
   * children of the breadcrumb-item set (these are expected to be breadcrumb-items)
   */
  children: deprecateProp(PropTypes.arrayOf(PropTypes.element), 'Usage changed to expect breadcrumb item like shapes, see `breadcrumbs`.')
};
BreadcrumbWithOverflow.propTypes = _objectSpread({
  breadcrumbs: PropTypes.arrayOf(PropTypes.shape({
    /**
     * Optional string representing the link location for the BreadcrumbItem
     */
    href: PropTypes.string,

    /**
     * Provide if this breadcrumb item represents the current page
     */
    isCurrentPage: PropTypes.bool,

    /**
     * Key required to render array efficiently
     */
    key: PropTypes.string.isRequired,

    /**
     * Pass in content that will be inside of the BreadcrumbItem
     */
    label: PropTypes.node,

    /**
     * A string based alternative to the children, required only if children is not of type string.
     */
    title: PropTypes.string.isRequired.if(function (_ref6) {
      var label = _ref6.label;
      return typeof label !== 'string';
    })
  })),

  /**
   * className
   */
  className: PropTypes.string,

  /**
   * maxVisible: maximum visible breadcrumb-items before overflow is used (values less than 1 are treated as 1)
   */
  maxVisible: PropTypes.number,

  /**
   * noTrailing slash - same as for Carbon
   */
  noTrailingSlash: PropTypes.bool,

  /**
   * overflowAriaLabel label for open close button overflow used for action bar items that do nto fit.
   */
  overflowAriaLabel: PropTypes.string.isRequired
}, deprecatedProps);
BreadcrumbWithOverflow.defaultProps = {
  noTrailingSlash: false
};
BreadcrumbWithOverflow.displayName = componentName;