import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["caret", "children", "className"];

/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Button } from 'carbon-components-react';
import cx from 'classnames';
import { bool, node, string } from 'prop-types';
import React, { forwardRef } from 'react';
import { blockClass } from './Toolbar';
import { pkg } from '../../settings';
/** Toolbar buttons are common functions performed as part of a products interface or an open window.  */

export var ToolbarButton = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var caret = _ref.caret,
      children = _ref.children,
      className = _ref.className,
      rest = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(Button, _extends({}, rest, {
    ref: ref,
    className: cx(className, _defineProperty({}, "".concat(blockClass, "__button--caret"), caret)),
    kind: "ghost",
    size: "md",
    hasIconOnly: true
  }), /*#__PURE__*/React.createElement(React.Fragment, null, children, caret && /*#__PURE__*/React.createElement("span", {
    className: "".concat(blockClass, "__button__caret")
  })));
});
var componentName = 'ToolbarButton';
ToolbarButton.displayName = componentName;
ToolbarButton.propTypes = {
  /** Determines whether the caret is rendered */
  caret: bool,

  /** Provide the content of the `ToolbarButton` */
  children: node,

  /** Provide an optional class to be applied to the containing node */
  className: string
};
ToolbarButton.defaultProps = {
  caret: false
};
ToolbarButton = pkg.checkComponentEnabled(ToolbarButton, componentName);