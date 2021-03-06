"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NoDataIllustration = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _settings = require("../../../settings");

var _uuidv = _interopRequireDefault(require("../../../global/js/utils/uuidv4"));

var _excluded = ["theme", "size"];
// The block part of our conventional BEM class names (blockClass__E--M).
var blockClass = "".concat(_settings.pkg.prefix, "--empty-state");

var NoDataIllustration = function NoDataIllustration(_ref) {
  var theme = _ref.theme,
      size = _ref.size,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var svgId = (0, _uuidv.default)();
  return theme === 'dark' ? /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({}, rest, {
    xmlns: "http://www.w3.org/2000/svg",
    width: 80,
    height: 80,
    viewBox: "0 0 80 80",
    className: (0, _classnames.default)(["".concat(blockClass, "__illustration"), "".concat(blockClass, "__illustration--").concat(size)])
  }), /*#__PURE__*/_react.default.createElement("defs", null, /*#__PURE__*/_react.default.createElement("linearGradient", {
    id: "prefix__a_dark_".concat(svgId),
    x1: 11.12,
    y1: 43.34,
    x2: 40,
    y2: 43.34,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0,
    stopColor: "#393939"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 1,
    stopColor: "#262626"
  })), /*#__PURE__*/_react.default.createElement("linearGradient", {
    id: "prefix__b_dark_".concat(svgId),
    x1: 40,
    y1: 43.34,
    x2: 68.88,
    y2: 43.34,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0,
    stopColor: "#161616"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 1,
    stopColor: "#262626"
  })), /*#__PURE__*/_react.default.createElement("linearGradient", {
    id: "prefix__c_dark_".concat(svgId),
    x1: 32.78,
    y1: 30.83,
    x2: 47.22,
    y2: 5.83,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0,
    stopColor: "#525252"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 1,
    stopColor: "#393939"
  }))), /*#__PURE__*/_react.default.createElement("path", {
    fill: "none",
    d: "M0 0h80v80H0z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    opacity: 0.25,
    d: "M40 78.34L11.13 61.67 40 45.01l28.86 16.66L40 78.34z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    fill: "url(#prefix__a_dark_".concat(svgId, ")"),
    d: "M40 68.35L11.12 51.68l.01-33.35L40 34.99v33.36z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    fill: "url(#prefix__b_dark_".concat(svgId, ")"),
    d: "M68.88 51.68L40 68.35V34.99l28.87-16.66.01 33.35z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    fill: "url(#prefix__c_dark_".concat(svgId, ")"),
    d: "M40 34.99L11.13 18.33 40 1.66l28.87 16.67L40 34.99z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    fill: "#262626",
    d: "M25.97 26.67l28.67-16.55-.42-.24-28.68 16.56.43.23z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    fill: "#6f6f6f",
    d: "M40 35.24L11.13 18.57v-.24l.21-.12 28.87 16.67-.21.11v.25z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    fill: "#525252",
    d: "M21.49 33.33l-8.2-4.73.01-5.69 8.19 4.74v5.68z"
  })) : /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({}, rest, {
    xmlns: "http://www.w3.org/2000/svg",
    width: 80,
    height: 80,
    viewBox: "0 0 80 80",
    className: (0, _classnames.default)(["".concat(blockClass, "__illustration"), "".concat(blockClass, "__illustration--").concat(size)])
  }), /*#__PURE__*/_react.default.createElement("defs", null, /*#__PURE__*/_react.default.createElement("linearGradient", {
    id: "prefix__a_".concat(svgId),
    x1: 18.35,
    y1: 74.17,
    x2: 61.65,
    y2: 49.17,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0,
    stopColor: "#525252",
    stopOpacity: 0.05
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 1,
    stopOpacity: 0.1
  })), /*#__PURE__*/_react.default.createElement("linearGradient", {
    id: "prefix__b_".concat(svgId),
    x1: 15.16,
    y1: 43.34,
    x2: 40.31,
    y2: 43.34,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0,
    stopColor: "#e0e0e0"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 1,
    stopColor: "#c6c6c6"
  })), /*#__PURE__*/_react.default.createElement("linearGradient", {
    id: "prefix__c_".concat(svgId),
    x1: 40,
    y1: 43.34,
    x2: 68.88,
    y2: 43.34,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0,
    stopColor: "#a8a8a8"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 1,
    stopColor: "#c6c6c6"
  })), /*#__PURE__*/_react.default.createElement("linearGradient", {
    id: "prefix__d_".concat(svgId),
    x1: 18.35,
    y1: 30.83,
    x2: 61.65,
    y2: 5.83,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0,
    stopColor: "#f4f4f4"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 1,
    stopColor: "#e0e0e0"
  })), /*#__PURE__*/_react.default.createElement("style", null, ".prefix__g_".concat(svgId, "{fill:#fff}"))), /*#__PURE__*/_react.default.createElement("path", {
    fill: "none",
    d: "M0 0h80v80H0z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    fill: "url(#prefix__a_".concat(svgId, ")"),
    d: "M40 78.34L11.13 61.67 40 45.01l28.86 16.66L40 78.34z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    fill: "url(#prefix__b_".concat(svgId, ")"),
    d: "M40 68.35L11.12 51.68l.01-33.35L40 34.99v33.36z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    fill: "url(#prefix__c_".concat(svgId, ")"),
    d: "M68.88 51.68L40 68.35V34.99l28.87-16.66.01 33.35z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    fill: "url(#prefix__d_".concat(svgId, ")"),
    d: "M40 34.99L11.13 18.33 40 1.66l28.87 16.67L40 34.99z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    fill: "#c6c6c6",
    d: "M25.97 26.67l28.67-16.55-.42-.24-28.68 16.56.43.23z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    className: "prefix__g_".concat(svgId),
    d: "M40 35.24L11.13 18.57v-.24l.21-.12 28.87 16.67-.21.11v.25zM21.49 33.33l-8.2-4.73.01-5.69 8.19 4.74v5.68z"
  }));
};

exports.NoDataIllustration = NoDataIllustration;
NoDataIllustration.propTypes = {
  size: _propTypes.default.oneOf(['lg', 'sm']),
  theme: _propTypes.default.oneOf(['light', 'dark'])
};