import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["className"];

/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { pkg } from '../../settings';
var componentName = 'CreateTearsheetDivider';
var blockClass = "".concat(pkg.prefix, "--tearsheet-create__section--divider");
export var CreateTearsheetDivider = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var className = _ref.className,
      rest = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    ref: ref,
    className: cx(blockClass, className)
  }));
}); // Return a placeholder if not released and not enabled by feature flag

CreateTearsheetDivider = pkg.checkComponentEnabled(CreateTearsheetDivider, componentName);
CreateTearsheetDivider.propTypes = {
  /**
   * Sets an optional className to be added to the tearsheet step
   */
  className: PropTypes.string
};