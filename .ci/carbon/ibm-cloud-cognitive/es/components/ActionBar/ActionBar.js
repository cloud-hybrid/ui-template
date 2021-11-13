import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _extends from "@babel/runtime/helpers/extends";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["actions", "children", "className", "maxVisible", "onWidthChange", "overflowAriaLabel", "rightAlign"],
    _excluded2 = ["key"],
    _excluded3 = ["key"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

//
// Copyright IBM Corp. 2020, 2021
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//
// Import portions of React that are needed.
import React, { useEffect, useState, useRef } from 'react'; // Other standard imports.

import PropTypes from 'prop-types';
import cx from 'classnames';
import { pkg } from '../../settings';
import { useResizeDetector } from 'react-resize-detector'; // Carbon and package components we use.

import { Button } from 'carbon-components-react';
import uuidv4 from '../../global/js/utils/uuidv4';
import { deprecateProp, extractShapesArray, prepareProps } from '../../global/js/utils/props-helper';
import { ActionBarItem } from './ActionBarItem';
import { ActionBarOverflowItems } from './ActionBarOverflowItems'; // The block part of our conventional BEM class names (blockClass__E--M).

var blockClass = "".concat(pkg.prefix, "--action-bar");
var componentName = 'ActionBar'; // NOTE: the component SCSS is not imported here: it is rolled up separately.

/**
 * The ActionBar is used internally by the PageHeader to wrap ActionBarItems.
 */

export var ActionBar = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var actions = _ref.actions,
      children = _ref.children,
      className = _ref.className,
      maxVisible = _ref.maxVisible,
      onWidthChange = _ref.onWidthChange,
      overflowAriaLabel = _ref.overflowAriaLabel,
      rightAlign = _ref.rightAlign,
      rest = _objectWithoutProperties(_ref, _excluded);

  var _useState = useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      displayCount = _useState2[0],
      setDisplayCount = _useState2[1];

  var _useState3 = useState([]),
      _useState4 = _slicedToArray(_useState3, 2),
      displayedItems = _useState4[0],
      setDisplayedItems = _useState4[1];

  var _useState5 = useState([]),
      _useState6 = _slicedToArray(_useState5, 2),
      hiddenSizingItems = _useState6[0],
      setHiddenSizingItems = _useState6[1];

  var internalId = useRef(uuidv4());

  var _useState7 = useState([]),
      _useState8 = _slicedToArray(_useState7, 2),
      itemArray = _useState8[0],
      setItemArray = _useState8[1];

  var refDisplayedItems = useRef(null);
  var sizingRef = useRef(null); // create child array from children which may be a fragment and create hidden sizing items

  useEffect(function () {
    // NOTE: setting item Array inside useEffect prevents looping renders as a result of setting hiddenSizingItems
    var newItemArray;

    if (actions) {
      newItemArray = actions;
    } else {
      newItemArray = extractShapesArray(children);
    }

    setItemArray(newItemArray); // Hidden action bar and items used to calculate sizes

    setHiddenSizingItems( /*#__PURE__*/React.createElement("div", {
      className: "".concat(blockClass, "__hidden-sizing-items"),
      "aria-hidden": true,
      ref: sizingRef
    }, /*#__PURE__*/React.createElement(ActionBarOverflowItems, {
      className: "".concat(blockClass, "__hidden-sizing-item"),
      overflowAriaLabel: "hidden sizing overflow items",
      overflowItems: [],
      key: "hidden-overflow-menu"
    }), newItemArray.map(function (_ref2) {
      var key = _ref2.key,
          rest = _objectWithoutProperties(_ref2, _excluded2);

      return /*#__PURE__*/React.createElement(ActionBarItem, _extends({}, rest, {
        key: "hidden-item-".concat(key),
        className: "".concat(blockClass, "__hidden-sizing-item")
      }));
    })));
  }, [actions, children]); // creates displayed items based on itemArray, displayCount and alignment

  useEffect(function () {
    // Calculate the displayed items
    var newDisplayedItems = itemArray.map(function (_ref3) {
      var key = _ref3.key,
          rest = _objectWithoutProperties(_ref3, _excluded3);

      return /*#__PURE__*/React.createElement(ActionBarItem, _extends({}, rest, {
        key: key
      }));
    }); // extract any there is not enough room for into newOverflowItems

    var newOverflowItems = newDisplayedItems.splice(displayCount); // add overflow menu if needed

    if (newOverflowItems.length) {
      newDisplayedItems.push( /*#__PURE__*/React.createElement(ActionBarOverflowItems, {
        overflowAriaLabel: overflowAriaLabel,
        overflowItems: newOverflowItems,
        key: "overflow-menu-".concat(internalId.current)
      }));
    }

    setDisplayedItems(newDisplayedItems);
  }, [itemArray, displayCount, overflowAriaLabel]); // determine display count based on space available and width of pageActions

  var checkFullyVisibleItems = function checkFullyVisibleItems() {
    /* istanbul ignore if */
    if (sizingRef.current) {
      var sizingItems = Array.from(sizingRef.current.querySelectorAll(".".concat(blockClass, "__hidden-sizing-item"))); // first item is always the overflow even if nothing else is rendered

      var overflowItem = sizingItems.shift(); // determine how many will fit

      var spaceAvailable = refDisplayedItems.current.offsetWidth;
      var willFit = 0;
      var maxVisibleWidth = 0;
      var fitLimit = maxVisible ? Math.min(maxVisible, sizingItems.length) : sizingItems.length; // loop checking the space available

      for (var i = 0; i < fitLimit; i++) {
        var newSpaceAvailable = spaceAvailable - sizingItems[i].offsetWidth; // update maxVisibleWidth for later use by onWidthChange

        maxVisibleWidth += sizingItems[i].offsetWidth;

        if (newSpaceAvailable >= 0) {
          spaceAvailable = newSpaceAvailable;
          willFit += 1;
        }
      } // if not enough space for all items then make room for the overflow


      var overflowWidth = overflowItem.offsetWidth;

      if (willFit < sizingItems.length) {
        // Check space for overflow
        while (willFit > 0 && spaceAvailable < overflowWidth) {
          willFit -= 1; // Highly unlikely that any action bar item is narrower than the overflow item
          // Make sure by removing items in reverse order

          spaceAvailable += sizingItems[willFit].offsetWidth;
        }
      } // emit onWidthChange


      onWidthChange && onWidthChange({
        maxWidth: maxVisibleWidth,
        minWidth: overflowWidth
      });

      if (willFit < 1) {
        setDisplayCount(0);
      } else {
        setDisplayCount(willFit);
      }
    }
  };

  useEffect(function () {
    checkFullyVisibleItems(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [maxVisible, itemArray]);
  /* istanbul ignore next */
  // not sure how to fake window resize

  var handleResize = function handleResize() {
    // width is the space available for all action bar items horizontally
    // the action bar items are squares so the height should be one item wide

    /* istanbul ignore next */
    // not sure how to fake window resize
    checkFullyVisibleItems();
  };
  /* istanbul ignore next */
  // not sure how to fake window resize


  var handleActionBarItemsResize = function handleActionBarItemsResize() {
    // when the hidden sizing items change size

    /* istanbul ignore next */
    // not sure how to fake window resize
    checkFullyVisibleItems();
  };

  useResizeDetector({
    onResize: handleActionBarItemsResize,
    targetRef: sizingRef
  });

  var _useResizeDetector = useResizeDetector({
    onResize: handleResize,
    targetRef: ref
  }),
      outerRef = _useResizeDetector.ref;

  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    className: cx([blockClass, className]),
    ref: outerRef
  }), hiddenSizingItems, /*#__PURE__*/React.createElement("div", {
    ref: refDisplayedItems,
    className: cx(["".concat(blockClass, "__displayed-items"), _defineProperty({}, "".concat(blockClass, "__displayed-items--right"), rightAlign)])
  }, displayedItems));
});
export var deprecatedProps = {
  /**
   * **Deprecated**
   *
   * children of the action bar (action bar items)
   */
  children: deprecateProp(PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element]), 'See documentation on the `actions` prop.')
};
ActionBar.displayName = componentName;
ActionBar.propTypes = _objectSpread({
  /**
   * Specifies the action bar items. Each item is specified as an object
   * with required fields: key for array rendering, renderIcon and
   * iconDescription to provide the icon to display,
   * and optional 'onClick' to receive notifications when the button is clicked.
   * Additional fields in the object will be passed to the
   * Button component, and these can include 'disabled', 'ref', 'className',
   * and any other Button props.
   *
   * Note that the Button props 'kind', 'size',
   * 'tooltipPosition', 'tooltipAlignment' and 'type' are ignored, as these
   * cannot be used for an action bar item.
   *
   * Carbon Button API https://react.carbondesignsystem.com/?path=/docs/components-button--default#component-api
   */
  actions: PropTypes.arrayOf(PropTypes.shape(_objectSpread(_objectSpread({}, prepareProps(Button.propTypes, [// props not desired from Button.propTypes
  'kind', 'size', 'tooltipPosition', 'tooltipAlignment'])), {}, {
    // Additional props
    key: PropTypes.string.isRequired,
    // Redefine as form different  to Button and a key prop used by ActionBarItems
    iconDescription: PropTypes.string.isRequired,
    renderIcon: Button.propTypes.renderIcon.isRequired,
    // We duplicate onClick here to improve DocGen in Storybook
    onClick: PropTypes.func
  }))),
  // expects action bar item as array or in fragment,

  /**
   * className
   */
  className: PropTypes.string,

  /**
   * maxVisible : Maximum action bar items visible before going into the overflow menu
   */
  maxVisible: PropTypes.number,

  /**
   * onItemCountChange - event reporting maxWidth
   */
  onWidthChange: PropTypes.func,

  /**
   * overflowAriaLabel label for open close button overflow used for action bar items that do nto fit.
   */
  overflowAriaLabel: PropTypes.string.isRequired,

  /**
   * align tags to right of available space
   */
  rightAlign: PropTypes.bool
}, deprecatedProps);
ActionBar.defaultProps = {
  rightAlign: false
};