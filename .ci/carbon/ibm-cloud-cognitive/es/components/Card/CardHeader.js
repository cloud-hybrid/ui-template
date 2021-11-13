import _defineProperty from "@babel/runtime/helpers/defineProperty";
//
// Copyright IBM Corp. 2020, 2021
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//
import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { pkg } from '../../settings';
var componentName = 'CardHeader';
export var CardHeader = function CardHeader(_ref) {
  var _cx;

  var actions = _ref.actions,
      description = _ref.description,
      hasActions = _ref.hasActions,
      label = _ref.label,
      title = _ref.title,
      titleSize = _ref.titleSize;
  var blockClass = "".concat(pkg.prefix, "--card");
  var headerClass = "".concat(blockClass, "__header");
  var headerClasses = cx(headerClass, (_cx = {}, _defineProperty(_cx, "".concat(headerClass, "-label-only"), label && !title && !description), _defineProperty(_cx, "".concat(headerClass, "-has-label"), !!label), _defineProperty(_cx, "".concat(blockClass, "__title-lg"), titleSize === 'large'), _cx));
  return /*#__PURE__*/React.createElement("div", {
    className: headerClasses
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(headerClass, "-container")
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(blockClass, "__title-container")
  }, label && /*#__PURE__*/React.createElement("p", {
    className: "".concat(blockClass, "__label")
  }, label), title && /*#__PURE__*/React.createElement("h6", {
    className: "".concat(blockClass, "__title")
  }, title), description && /*#__PURE__*/React.createElement("p", {
    className: "".concat(blockClass, "__description")
  }, description)), hasActions && /*#__PURE__*/React.createElement("div", {
    className: "".concat(blockClass, "__actions ").concat(blockClass, "__actions-header")
  }, actions)));
};
CardHeader.propTypes = {
  actions: PropTypes.oneOfType([PropTypes.array, PropTypes.node]),
  description: PropTypes.string,
  hasActions: PropTypes.bool,
  label: PropTypes.string,
  title: PropTypes.string,
  titleSize: PropTypes.oneOf(['default', 'large'])
};
CardHeader.defaultProps = {
  hasActions: false,
  titleSize: 'default'
};
CardHeader.displayName = componentName;