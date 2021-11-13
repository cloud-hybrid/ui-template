import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["children", "className", "grid"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

//
// Copyright IBM Corp. 20201, 2021
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//
import React, { forwardRef } from 'react';
import { Grid } from 'carbon-components-react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { pkg } from '../../settings';
import { getDevtoolsProps } from '../../global/js/utils/devtools';
var blockClass = "".concat(pkg.prefix, "--cascade");
var componentName = 'Cascade';
export var Cascade = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var children = _ref.children,
      className = _ref.className,
      grid = _ref.grid,
      rest = _objectWithoutProperties(_ref, _excluded);

  var props = _objectSpread(_objectSpread({}, rest), {}, {
    className: cx(blockClass, className),
    ref: ref
  }, getDevtoolsProps(componentName));

  var modifyChildren = function modifyChildren(child) {
    var className = cx(child.props.className, "".concat(blockClass, "__element"));
    return /*#__PURE__*/React.cloneElement(child, {
      className: className
    });
  };

  var getModifiedChildren = function getModifiedChildren() {
    return React.Children.map(children, function (child) {
      return modifyChildren(child);
    });
  };

  if (grid) {
    var colIdx = 0;
    var gridElm = React.Children.map(children, function (row) {
      var cols = React.Children.map(row.props.children, function (col) {
        colIdx = colIdx + 1;
        var colClassnames = cx(col.props.className, "".concat(blockClass, "__col"), "".concat(blockClass, "__col-").concat(colIdx));
        return /*#__PURE__*/React.cloneElement(col, {
          className: colClassnames
        });
      });
      return /*#__PURE__*/React.cloneElement(row, {
        children: cols
      });
    });
    return /*#__PURE__*/React.createElement("div", props, /*#__PURE__*/React.createElement(Grid, null, gridElm));
  }

  return /*#__PURE__*/React.createElement("div", props, getModifiedChildren());
});
Cascade = pkg.checkComponentEnabled(Cascade, componentName);
Cascade.displayName = componentName;
Cascade.propTypes = {
  /**
   * Main content that is shown.
   */
  children: PropTypes.node,

  /**
   * Optional class name.
   */
  className: PropTypes.string,

  /**
   * Specifies whether or not to wrap the child content in a <Grid />.
   * If this is set to true it's important that the children are being wrapped in rows in columns.
   * Check the documentation for additional clarification.
   */
  grid: PropTypes.bool
};
Cascade.defaultProps = {
  grid: false
};