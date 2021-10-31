import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["className", "description", "errorCodeLabel", "links", "title"];

/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
// Import portions of React that are needed.
import React from 'react'; // Other standard imports.

import cx from 'classnames';
import { arrayOf, shape, string } from 'prop-types';
import { HTTPErrorSvg403 } from '../assets/HTTPErrorSvg403';
import { HTTPErrorContent } from '../HTTPErrorContent';
import { getDevtoolsProps } from '../../../global/js/utils/devtools';
import { pkg } from '../../../settings'; // The block part of our conventional BEM class names (blockClass__E--M).

var blockClass = "".concat(pkg.prefix, "--http-errors");
var componentName = 'HTTPError403';
export var HTTPError403 = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var className = _ref.className,
      description = _ref.description,
      errorCodeLabel = _ref.errorCodeLabel,
      links = _ref.links,
      title = _ref.title,
      rest = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    className: cx(blockClass, className),
    ref: ref
  }, getDevtoolsProps(componentName)), /*#__PURE__*/React.createElement(HTTPErrorContent, {
    description: description,
    errorCodeLabel: errorCodeLabel,
    title: title,
    links: links
  }), /*#__PURE__*/React.createElement(HTTPErrorSvg403, {
    className: "".concat(blockClass, "__image")
  }));
}); // Return a placeholder if not released and not enabled by feature flag

HTTPError403 = pkg.checkComponentEnabled(HTTPError403, componentName); // The display name of the component, used by React. Note that displayName
// is used in preference to relying on function.name.

HTTPError403.displayName = componentName; // displayName is used in preference to function.name by React
// The types and DocGen commentary for the component props,
// in alphabetical order (for consistency).
// See https://www.npmjs.com/package/prop-types#usage.

HTTPError403.propTypes = {
  /**
   * Provide an optional class to be applied to the containing node
   */
  className: string,

  /**
   * String that will provide the description for the HTTP error code
   */
  description: string.isRequired,

  /**
   * String that will describe the error that occurred
   */
  errorCodeLabel: string.isRequired,

  /**
   * Links that will display for extra context when receiving particular errors
   */
  links: arrayOf(shape({
    /**
     * The text to display for the link
     */
    text: string.isRequired,

    /**
     * The link's destination
     */
    href: string.isRequired
  })),

  /**
   * This will be for the main title of the HTTP error component
   */
  title: string.isRequired
};