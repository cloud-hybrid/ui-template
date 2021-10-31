"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _carbonComponentsReact = require("carbon-components-react");

var _iconsReact = require("@carbon/icons-react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var Navigation = function Navigation(_ref) {
  var openTerminal = _ref.openTerminal;
  return /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.Header, {
    "aria-label": "IBM Platform Name"
  }, /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.HeaderName, {
    href: "#",
    prefix: "IBM"
  }, "[Platform]"), /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.HeaderGlobalBar, null, /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.HeaderGlobalAction, {
    "aria-label": "Web terminal",
    onClick: openTerminal
  }, /*#__PURE__*/_react.default.createElement(_iconsReact.Terminal20, null)), /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.HeaderGlobalAction, {
    "aria-label": "Search",
    onClick: function onClick() {}
  }, /*#__PURE__*/_react.default.createElement(_iconsReact.Search20, null)), /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.HeaderGlobalAction, {
    "aria-label": "User",
    onClick: function onClick() {}
  }, /*#__PURE__*/_react.default.createElement(_iconsReact.User20, null))));
};

Navigation.propTypes = {
  /**
   * Opens the terminal
   */
  openTerminal: _propTypes.default.func.isRequired
};
var _default = Navigation;
exports.default = _default;