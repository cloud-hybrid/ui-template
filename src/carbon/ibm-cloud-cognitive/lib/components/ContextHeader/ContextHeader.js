"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ContextHeader = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _settings = require("../../settings");

//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//
var componentName = 'ContextHeader';

var ContextHeader = function ContextHeader(_ref) {
  var namespace = _ref.namespace,
      name = _ref.name,
      task = _ref.task;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(_settings.pkg.prefix, "-context-header")
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "".concat(_settings.pkg.prefix, "-context-header--task")
  }, task), /*#__PURE__*/_react.default.createElement("span", {
    className: "".concat(_settings.pkg.prefix, "-context-header--name")
  }, name), /*#__PURE__*/_react.default.createElement("span", {
    className: "".concat(_settings.pkg.prefix, "-context-header--separator")
  }, "|"), /*#__PURE__*/_react.default.createElement("span", {
    className: "".concat(_settings.pkg.prefix, "-context-header--namespace")
  }, namespace));
}; // Return a placeholder if not released and not enabled by feature flag


exports.ContextHeader = ContextHeader;
exports.ContextHeader = ContextHeader = _settings.pkg.checkComponentEnabled(ContextHeader, componentName);
ContextHeader.displayName = componentName;
ContextHeader.propTypes = {
  /**
   * The name of the current instance.
   */
  name: _propTypes.default.string.isRequired,

  /**
   * The namespace in which the current instance is deployed.
   */
  namespace: _propTypes.default.string.isRequired,

  /**
   * The high level task the user is using the embedding UI to carry out.
   */
  task: _propTypes.default.string.isRequired
};
var _default = ContextHeader;
exports.default = _default;