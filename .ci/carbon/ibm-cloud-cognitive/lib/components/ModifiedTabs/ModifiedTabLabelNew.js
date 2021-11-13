"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModifiedTabLabelNew = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _iconsReact = require("@carbon/icons-react");

//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//
var ModifiedTabLabelNew = function ModifiedTabLabelNew(_ref) {
  var label = _ref.label;
  return /*#__PURE__*/_react.default.createElement("span", {
    className: "modified-tabs__tab-new"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "modified-tabs__tab-new__label"
  }, label), /*#__PURE__*/_react.default.createElement("span", {
    className: "modified-tabs__tab-new-img"
  }, /*#__PURE__*/_react.default.createElement(_iconsReact.Add20, null)));
};

exports.ModifiedTabLabelNew = ModifiedTabLabelNew;
ModifiedTabLabelNew.propTypes = {
  /**
   * Label content of the tab
   */
  label: _propTypes.default.string,

  /**
   * Optional onClick handler
   */
  onClick: _propTypes.default.func
};
ModifiedTabLabelNew.defaultProps = {
  label: '',
  onClick: undefined
};