import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["children", "className", "vertical"];

/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import cx from 'classnames';
import { bool, node, string } from 'prop-types';
import React, { forwardRef } from 'react';
import { pkg } from '../../settings';
var checkComponentEnabled = pkg.checkComponentEnabled,
    prefix = pkg.prefix;
var blockClass = "".concat(prefix, "--toolbar");
/** Toolbars are a collection of action items that organize a program’s interaction patterns into a series of closely related commands. */

var Toolbar = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var children = _ref.children,
      className = _ref.className,
      vertical = _ref.vertical,
      rest = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    ref: ref,
    className: cx(blockClass, className, _defineProperty({}, "".concat(blockClass, "--vertical"), vertical))
  }, vertical && {
    'aria-orientation': 'vertical'
  }, {
    role: "toolbar"
  }), children);
});
var componentName = 'Toolbar';
Toolbar.displayName = componentName;
Toolbar.propTypes = {
  /** Provide the content of the `Toolbar` */
  children: node.isRequired,

  /** Provide an optional class to be applied to the containing node */
  className: string,

  /** Determines whether the `Toolbar` is rendered vertically */
  vertical: bool
};
Toolbar = checkComponentEnabled(Toolbar, componentName);
export { blockClass, componentName, Toolbar };