import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["action", "className", "illustration", "illustrationDescription", "link", "size", "subtitle", "title"];

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
import { getDevtoolsProps } from '../../global/js/utils/devtools';
import '../../global/js/utils/props-helper';
import { pkg } from '../../settings';
import { EmptyStateContent } from './EmptyStateContent'; // The block part of our conventional BEM class names (blockClass__E--M).

var blockClass = "".concat(pkg.prefix, "--empty-state");
var componentName = 'EmptyState';
export var EmptyState = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var action = _ref.action,
      className = _ref.className,
      illustration = _ref.illustration,
      illustrationDescription = _ref.illustrationDescription,
      link = _ref.link,
      size = _ref.size,
      subtitle = _ref.subtitle,
      title = _ref.title,
      rest = _objectWithoutProperties(_ref, _excluded);

  var renderIllustration = function renderIllustration() {
    return /*#__PURE__*/React.createElement("img", {
      src: illustration,
      alt: illustrationDescription,
      className: cx(["".concat(blockClass, "__illustration"), "".concat(blockClass, "__illustration--").concat(size)])
    });
  };

  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    className: cx(blockClass, className),
    ref: ref
  }, getDevtoolsProps(componentName)), illustration && renderIllustration(), /*#__PURE__*/React.createElement(EmptyStateContent, {
    action: action,
    link: link,
    size: size,
    subtitle: subtitle,
    title: title
  }));
}); // Return a placeholder if not released and not enabled by feature flag

EmptyState = pkg.checkComponentEnabled(EmptyState, componentName);
export var EmptyStateDefaultProps = {
  size: 'lg'
};
EmptyState.propTypes = {
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
   * Empty state illustration, specify the `src` for a provided illustration to be displayed. In the case of requiring a light and dark illustration of your own, simply pass the corresponding illustration based on the current theme of your application.
   * For example: `illustration={appTheme === 'dark' ? darkIllustration : lightIllustration}`
   */
  illustration: PropTypes.string,

  /**
   * The alt text for custom provided illustrations
   */
  illustrationDescription: PropTypes.string.isRequired.if(function (_ref2) {
    var illustration = _ref2.illustration;
    return illustration;
  }),

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
   * Empty state subtext
   */
  subtitle: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,

  /**
   * Empty state heading
   */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired
};
EmptyState.defaultProps = EmptyStateDefaultProps;
EmptyState.displayName = componentName;