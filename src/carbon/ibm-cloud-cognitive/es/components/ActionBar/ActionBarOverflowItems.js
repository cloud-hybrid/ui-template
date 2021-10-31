//
// Copyright IBM Corp. 2020, 2021
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//
// Import portions of React that are needed.
import React, { useRef } from 'react'; // Other standard imports.

import PropTypes from 'prop-types';
import cx from 'classnames'; // Carbon and package components we use.

import { OverflowMenu, OverflowMenuItem } from 'carbon-components-react';
import uuidv4 from '../../global/js/utils/uuidv4'; // The block part of our conventional BEM class names (blockClass__E--M).

import { pkg } from '../../settings';
var blockClass = "".concat(pkg.prefix, "--action-bar-overflow-items");
var componentName = 'ActionBar';
export var ActionBarOverflowItems = function ActionBarOverflowItems(_ref) {
  var className = _ref.className,
      overflowItems = _ref.overflowItems,
      overflowAriaLabel = _ref.overflowAriaLabel;
  var internalId = useRef(uuidv4());
  return /*#__PURE__*/React.createElement(OverflowMenu, {
    ariaLabel: overflowAriaLabel,
    className: cx(blockClass, className),
    direction: "bottom",
    flipped: true,
    menuOptionsClass: "".concat(blockClass, "__options")
  }, React.Children.map(overflowItems, function (item) {
    // This uses a copy of a menu item option
    // NOTE: Cannot use a real Tooltip icon below as it uses a <button /> the
    // div equivalent below is based on Carbon 10.25.0
    return /*#__PURE__*/React.createElement(OverflowMenuItem, {
      className: "".concat(blockClass, "__item"),
      itemText: /*#__PURE__*/React.createElement("div", {
        className: "".concat(blockClass, "__item-content"),
        "aria-describedby": "".concat(internalId, "--item-label")
      }, /*#__PURE__*/React.createElement("span", {
        className: "".concat(blockClass, "__item-label"),
        id: "".concat(internalId, "--item-label")
      }, item.props.iconDescription), /*#__PURE__*/React.createElement(item.props.renderIcon, null))
    });
  }));
};
ActionBarOverflowItems.displayName = componentName;
ActionBarOverflowItems.propTypes = {
  // expects action bar item as array or in fragment,

  /**
   * className
   */
  className: PropTypes.string,

  /**
   * overflowAriaLabel label for open close button overflow used for action bar items that do nto fit.
   */
  overflowAriaLabel: PropTypes.string,

  /**
   * overflowItems: items to bre shown in the ActionBar overflow menu
   */
  overflowItems: PropTypes.arrayOf(PropTypes.element)
};