import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["className", "children"];

/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import cx from 'classnames';
import { node, string } from 'prop-types';
import React, { forwardRef } from 'react';
import { pkg } from '../../settings';
import { blockClass } from './Toolbar';
/** Toolbar groups organize the commands within a toolbar into related groups. */

export var ToolbarGroup = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var className = _ref.className,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    ref: ref,
    className: cx("".concat(blockClass, "__group"), className)
  }), children);
});
var componentName = 'ToolbarGroup';
ToolbarGroup.displayName = componentName;
ToolbarGroup.propTypes = {
  /** Provide the content of the `ToolbarGroup` */
  children: node.isRequired,

  /** Provide an optional class to be applied to the containing node */
  className: string
};
ToolbarGroup = pkg.checkComponentEnabled(ToolbarGroup, componentName);