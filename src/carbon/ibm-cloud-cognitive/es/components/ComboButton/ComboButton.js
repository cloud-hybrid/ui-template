import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _toArray from "@babel/runtime/helpers/toArray";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["children", "className", "overflowMenu"],
    _excluded2 = ["children"],
    _excluded3 = ["children", "renderIcon"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import ChevronDown16 from '@carbon/icons-react/lib/chevron--down/16';
import ChevronUp16 from '@carbon/icons-react/lib/chevron--up/16';
import { Button, OverflowMenuItem } from 'carbon-components-react';
import { OverflowMenu } from 'carbon-components-react/lib/components/OverflowMenu/OverflowMenu';
import setupGetInstanceId from 'carbon-components-react/lib/tools/setupGetInstanceId';
import classnames from 'classnames';
import { node, shape, string } from 'prop-types';
import React, { Children, createElement, useRef, useState } from 'react';
var getInstanceId = setupGetInstanceId();
var blockClass = 'security--combo-button';
/**
 * The combo button consolidates similar actions, while exposing the most commonly used one.
 */

var ComboButton = function ComboButton(_ref) {
  var children = _ref.children,
      className = _ref.className,
      overflowMenu = _ref.overflowMenu,
      rest = _objectWithoutProperties(_ref, _excluded);

  var _useRef = useRef(getInstanceId()),
      instanceId = _useRef.current;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var _Children$toArray$fil = Children.toArray(children).filter(Boolean).map(function (_ref2) {
    var _ref2$props = _ref2.props,
        children = _ref2$props.children,
        props = _objectWithoutProperties(_ref2$props, _excluded2);

    return _objectSpread(_objectSpread({}, props), {}, {
      children: /*#__PURE__*/React.createElement("span", {
        className: "".concat(blockClass, "__action"),
        title: children
      }, children)
    });
  }),
      _Children$toArray$fil2 = _toArray(_Children$toArray$fil),
      primaryAction = _Children$toArray$fil2[0],
      restActions = _Children$toArray$fil2.slice(1);

  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    className: classnames(blockClass, className),
    "data-floating-menu-container": true
  }), /*#__PURE__*/React.createElement(Button, primaryAction), restActions.length > 0 && /*#__PURE__*/React.createElement(OverflowMenu, _extends({}, overflowMenu, {
    className: "".concat(blockClass, "__overflow-menu"),
    menuOptionsClass: "".concat(blockClass, "__overflow-menu__list"),
    onClick: function onClick() {
      return !isOpen && setIsOpen(true);
    },
    onClose: function onClose() {
      return setIsOpen(false);
    },
    renderIcon: function renderIcon() {
      return /*#__PURE__*/createElement(isOpen ? ChevronUp16 : ChevronDown16, {
        className: "".concat(blockClass, "__overflow-menu__icon")
      });
    },
    flipped: true
  }), restActions.map(function (_ref3, index) {
    var children = _ref3.children,
        Icon = _ref3.renderIcon,
        action = _objectWithoutProperties(_ref3, _excluded3);

    return /*#__PURE__*/React.createElement(OverflowMenuItem, _extends({}, action, {
      key: "".concat(blockClass, "--").concat(instanceId, "__overflow-menu__item__").concat(index),
      className: "".concat(blockClass, "__overflow-menu__item"),
      itemText: /*#__PURE__*/React.createElement(React.Fragment, null, children, Icon && /*#__PURE__*/React.createElement("span", {
        className: "".concat(blockClass, "__overflow-menu__item__icon")
      }, /*#__PURE__*/React.createElement(Icon, null)))
    }));
  })));
};

ComboButton.propTypes = {
  /** Provide the contents of the `ComboButton` */
  children: node.isRequired,

  /** Provide an optional class to be applied to the containing node */
  className: string,

  /** Provide the [props of the `OverflowMenu`](https://react.carbondesignsystem.com/?path=/docs/overflowmenu) */
  overflowMenu: shape(OverflowMenu.propTypes)
};
ComboButton.defaultProps = {
  className: null,
  overflowMenu: OverflowMenu.defaultProps
};
export { ComboButton };