"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardHeader = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _settings = require("../../settings");

//
// Copyright IBM Corp. 2020, 2021
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//
var componentName = 'CardHeader';

var CardHeader = function CardHeader(_ref) {
  var _cx;

  var actions = _ref.actions,
      description = _ref.description,
      hasActions = _ref.hasActions,
      label = _ref.label,
      title = _ref.title,
      titleSize = _ref.titleSize;
  var blockClass = "".concat(_settings.pkg.prefix, "--card");
  var headerClass = "".concat(blockClass, "__header");
  var headerClasses = (0, _classnames.default)(headerClass, (_cx = {}, (0, _defineProperty2.default)(_cx, "".concat(headerClass, "-label-only"), label && !title && !description), (0, _defineProperty2.default)(_cx, "".concat(headerClass, "-has-label"), !!label), (0, _defineProperty2.default)(_cx, "".concat(blockClass, "__title-lg"), titleSize === 'large'), _cx));
  return /*#__PURE__*/_react.default.createElement("div", {
    className: headerClasses
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(headerClass, "-container")
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(blockClass, "__title-container")
  }, label && /*#__PURE__*/_react.default.createElement("p", {
    className: "".concat(blockClass, "__label")
  }, label), title && /*#__PURE__*/_react.default.createElement("h6", {
    className: "".concat(blockClass, "__title")
  }, title), description && /*#__PURE__*/_react.default.createElement("p", {
    className: "".concat(blockClass, "__description")
  }, description)), hasActions && /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(blockClass, "__actions ").concat(blockClass, "__actions-header")
  }, actions)));
};

exports.CardHeader = CardHeader;
CardHeader.propTypes = {
  actions: _propTypes.default.oneOfType([_propTypes.default.array, _propTypes.default.node]),
  description: _propTypes.default.string,
  hasActions: _propTypes.default.bool,
  label: _propTypes.default.string,
  title: _propTypes.default.string,
  titleSize: _propTypes.default.oneOf(['default', 'large'])
};
CardHeader.defaultProps = {
  hasActions: false,
  titleSize: 'default'
};
CardHeader.displayName = componentName;