import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["borderColor", "boxedBorder", "className", "disabled", "onPrimaryClick", "onSecondaryClick", "primaryButtonLabel", "primaryKind", "secondaryButtonLabel", "secondaryKind", "size", "style"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
// Import portions of React that are needed.
import React from 'react'; // Other standard imports.

import PropTypes from 'prop-types';
import cx from 'classnames';
import { pkg } from '../../settings'; // Carbon and package components we use.

import { Button, ButtonSet } from 'carbon-components-react'; // The block part of our conventional BEM class names (blockClass__E--M).

var blockClass = "".concat(pkg.prefix, "--example-component");
var componentName = 'ExampleComponent'; // NOTE: the component SCSS is not imported here: it is rolled up separately.

/**
 * This is an example component to show relevant conventions and usage.
 */

export var ExampleComponent = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var borderColor = _ref.borderColor,
      boxedBorder = _ref.boxedBorder,
      className = _ref.className,
      disabled = _ref.disabled,
      onPrimaryClick = _ref.onPrimaryClick,
      onSecondaryClick = _ref.onSecondaryClick,
      primaryButtonLabel = _ref.primaryButtonLabel,
      primaryKind = _ref.primaryKind,
      secondaryButtonLabel = _ref.secondaryButtonLabel,
      secondaryKind = _ref.secondaryKind,
      size = _ref.size,
      style = _ref.style,
      rest = _objectWithoutProperties(_ref, _excluded);

  var modeClass = boxedBorder ? "".concat(blockClass, "--boxed-set") : "".concat(blockClass, "--shadow-set");

  var handlePrimaryClick = function handlePrimaryClick(e) {
    if (onPrimaryClick) {
      onPrimaryClick(e);
    }
  };

  var handleSecondaryClick = function handleSecondaryClick(e) {
    if (onSecondaryClick) {
      onSecondaryClick(e);
    }
  };

  return /*#__PURE__*/React.createElement(ButtonSet, _extends({}, rest, {
    className: cx(blockClass, // Apply the block class to the main HTML element
    className, // Apply any supplied class names to the main HTML element.
    "".concat(blockClass, "--").concat(size), modeClass),
    ref: ref,
    role: "main",
    style: _objectSpread(_objectSpread({}, style), {}, _defineProperty({}, "--".concat(pkg.prefix, "-border-color"), borderColor))
  }), /*#__PURE__*/React.createElement(Button, {
    className: "".concat(blockClass, "__secondary-button"),
    kind: secondaryKind,
    onClick: handleSecondaryClick,
    disabled: disabled,
    size: size
  }, secondaryButtonLabel), /*#__PURE__*/React.createElement(Button, {
    className: "".concat(blockClass, "__primary-button"),
    kind: primaryKind,
    onClick: handlePrimaryClick,
    disabled: disabled,
    size: size
  }, primaryButtonLabel));
}); // Return a placeholder if not released and not enabled by feature flag.

ExampleComponent = pkg.checkComponentEnabled(ExampleComponent, componentName); // The display name of the component, used by React. Note that displayName
// is used in preference to relying on function.name.

ExampleComponent.displayName = componentName; // The types and DocGen commentary for the component props,
// in alphabetical order (for consistency).
// See https://www.npmjs.com/package/prop-types#usage.

ExampleComponent.propTypes = {
  /**
   * What border color (HTML color value) to use.
   */
  borderColor: PropTypes.string,

  /**
   * If true, the border is a box, otherwise it is a shadow.
   */
  boxedBorder: PropTypes.bool,

  /**
   * Provide an optional class to be applied to the containing node.
   */
  className: PropTypes.string,

  /**
   * If true, the buttons are disabled, otherwise they can be used.
   */
  disabled: PropTypes.bool,

  /**
   * An optional primary button click handler.
   */
  onPrimaryClick: PropTypes.func,

  /**
   * An optional secondary button click handler.
   */
  onSecondaryClick: PropTypes.func,

  /**
   * The primary button label.
   */
  primaryButtonLabel: PropTypes.string.isRequired,

  /**
   * The kind of button for the primary button ('primary' or 'danger').
   */
  primaryKind: PropTypes.oneOf(['primary', 'danger']),

  /**
   * The secondary button label.
   */
  secondaryButtonLabel: PropTypes.string.isRequired,

  /**
   * The kind of button for the secondary button ('secondary' or 'tertiary').
   */
  secondaryKind: PropTypes.oneOf(['secondary', 'tertiary']),

  /**
   * The size for the buttons ('default', 'small' or 'field').
   */
  size: PropTypes.oneOf(['default', 'small', 'field']),

  /**
   * Optional style settings for the containing node.
   */
  style: PropTypes.object
}; // Default values for component props. Default values are not required for
// props that are required, nor for props where the component can apply
// 'undefined' values reasonably. Default values should be provided when the
// component needs to make a choice or assumption when a prop is not supplied.

ExampleComponent.defaultProps = {
  boxedBorder: false,
  primaryKind: 'primary',
  secondaryKind: 'secondary',
  size: 'default'
};