import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["action", "className", "illustrationTheme", "link", "size", "subtitle", "title"];

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
import { Button, Link } from 'carbon-components-react';
import { getDevtoolsProps } from '../../../global/js/utils/devtools';
import { pkg } from '../../../settings';
import { EmptyStateContent } from '../EmptyStateContent';
import { NotificationsIllustration } from '../assets/NotificationsIllustration';
import { EmptyStateDefaultProps } from '../EmptyState'; // The block part of our conventional BEM class names (blockClass__E--M).

var blockClass = "".concat(pkg.prefix, "--empty-state");
var componentName = 'NotificationsEmptyState';
export var NotificationsEmptyState = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var action = _ref.action,
      className = _ref.className,
      illustrationTheme = _ref.illustrationTheme,
      link = _ref.link,
      size = _ref.size,
      subtitle = _ref.subtitle,
      title = _ref.title,
      rest = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    className: cx(blockClass, className),
    ref: ref
  }, getDevtoolsProps(componentName)), /*#__PURE__*/React.createElement(NotificationsIllustration, {
    size: size,
    theme: illustrationTheme
  }), /*#__PURE__*/React.createElement(EmptyStateContent, {
    action: action,
    link: link,
    size: size,
    subtitle: subtitle,
    title: title
  }));
}); // Return a placeholder if not released and not enabled by feature flag

NotificationsEmptyState = pkg.checkComponentEnabled(NotificationsEmptyState, componentName); // The display name of the component, used by React. Note that displayName
// is used in preference to relying on function.name.

NotificationsEmptyState.displayName = componentName; // The types and DocGen commentary for the component props,
// in alphabetical order (for consistency).
// See https://www.npmjs.com/package/prop-types#usage.

NotificationsEmptyState.propTypes = {
  /**
   * Empty state action button
   */
  action: PropTypes.shape(_objectSpread(_objectSpread({}, Button.propTypes), {}, {
    kind: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
    renderIcon: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    onClick: Button.propTypes.onClick,
    text: PropTypes.string
  })),

  /**
   * Provide an optional class to be applied to the containing node.
   */
  className: PropTypes.string,

  /**
   * Empty state illustration theme variations.
   * To ensure you use the correct themed illustrations, you can conditionally specify light or dark
   * based on your app's current theme value. Example:
   * `illustrationTheme={appTheme === ('carbon--g100' || 'carbon--g90') ? 'dark' : 'light'}`
   */
  illustrationTheme: PropTypes.oneOf(['light', 'dark']),

  /**
   * Empty state link object
   */
  link: PropTypes.shape(_objectSpread(_objectSpread({}, Link.propTypes), {}, {
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    href: PropTypes.string
  })),

  /**
   * Empty state size
   */
  size: PropTypes.oneOf(['lg', 'sm']),

  /**
   * Empty state subtitle
   */
  subtitle: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,

  /**
   * Empty state title
   */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired
}; // Default values for component props. Default values are not required for
// props that are required, nor for props where the component can apply
// 'undefined' values reasonably. Default values should be provided when the
// component needs to make a choice or assumption when a prop is not supplied.

NotificationsEmptyState.defaultProps = EmptyStateDefaultProps;