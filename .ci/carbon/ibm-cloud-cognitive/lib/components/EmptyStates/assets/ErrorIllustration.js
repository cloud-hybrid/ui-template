"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ErrorIllustration = void 0;

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

var ErrorIllustration = function ErrorIllustration(_ref) {
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
    x1: 38.9,
    y1: 77.08,
    x2: 38.9,
    y2: 8.15,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0,
    stopColor: "#262626"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 1,
    stopColor: "#393939"
  })), /*#__PURE__*/_react.default.createElement("linearGradient", {
    id: "prefix__b_dark_".concat(svgId),
    x1: 12.43,
    y1: 10.8,
    x2: 76.33,
    y2: 47.7,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0,
    stopColor: "#525252"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.52,
    stopColor: "#393939"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.61,
    stopColor: "#393939"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.99,
    stopColor: "#161616"
  })), /*#__PURE__*/_react.default.createElement("linearGradient", {
    id: "prefix__c_dark_".concat(svgId),
    x1: 39.38,
    y1: 31.37,
    x2: 52.04,
    y2: 9.45,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.11,
    stopColor: "#6f6f6f",
    stopOpacity: 0
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.94,
    stopColor: "#6f6f6f"
  }))), /*#__PURE__*/_react.default.createElement("path", {
    fill: "none",
    d: "M0 0h80v80H0z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    opacity: 0.25,
    d: "M59.91 78.34l-43-24.83 4.86-2.81 43 24.83-4.86 2.81z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M39 6.92c12.15 7 22 24 21.92 38S51 64.49 38.83 57.48s-22-24-21.92-38S26.83-.09 39 6.92z",
    fill: "url(#prefix__a_dark_".concat(svgId, ")")
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M42.85 4.68C36.74 1.15 31.2.82 27.2 3.15l-3.66 2.13C27.52 3.08 33 3.45 39 6.92c12.15 7 22 24 21.92 38 0 6.77-2.35 11.58-6.13 13.94h-.07c-.32.2 3.66-2.1 3.66-2.1 4-2.3 6.39-7.18 6.41-14.12C64.81 28.7 55 11.69 42.85 4.68z",
    fill: "url(#prefix__b_dark_".concat(svgId, ")")
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M29.11 3.91v.36a19.59 19.59 0 019.68 3c12 6.94 21.78 23.84 21.74 37.65 0 9.4-4.56 15.23-11.83 15.23a19.54 19.54 0 01-9.68-3C27 50.21 17.24 33.32 17.28 19.5c0-9.39 4.56-15.23 11.83-15.23v-.36m0 0c-7.21 0-12.17 5.71-12.2 15.59 0 14 9.77 31 21.92 38a20.12 20.12 0 009.87 3c7.21 0 12.17-5.71 12.2-15.6 0-13.95-9.77-30.95-21.92-38a20 20 0 00-9.87-3z",
    fill: "url(#prefix__c_dark_".concat(svgId, ")")
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M38.93 49.79a6.9 6.9 0 01-2.66-2.51 6.11 6.11 0 01-.81-3v-1a2.26 2.26 0 01.81-2c.54-.35 1.43-.17 2.66.54a6.71 6.71 0 012.61 2.5 6.06 6.06 0 01.81 3v1a2.24 2.24 0 01-.81 2.05c-.54.29-1.41.12-2.61-.58zm-1.16-11.63L36 22.77V13l5.81 3.36v9.73l-1.64 13.46z",
    fill: "#525252"
  })) : /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({}, rest, {
    xmlns: "http://www.w3.org/2000/svg",
    width: 80,
    height: 80,
    viewBox: "0 0 80 80",
    className: (0, _classnames.default)(["".concat(blockClass, "__illustration"), "".concat(blockClass, "__illustration--").concat(size)])
  }), /*#__PURE__*/_react.default.createElement("defs", null, /*#__PURE__*/_react.default.createElement("linearGradient", {
    id: "prefix__a_".concat(svgId),
    x1: 29.96,
    y1: 45.68,
    x2: 53.15,
    y2: 85.84,
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
    x1: 38.9,
    y1: 52.59,
    x2: 38.9,
    y2: 3.3,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0,
    stopColor: "#c6c6c6"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.78,
    stopColor: "#e0e0e0"
  })), /*#__PURE__*/_react.default.createElement("linearGradient", {
    id: "prefix__c_".concat(svgId),
    x1: 18.07,
    y1: 14.06,
    x2: 71.64,
    y2: 44.99,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0,
    stopColor: "#e0e0e0"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.13,
    stopColor: "#f4f4f4"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.56,
    stopColor: "#e0e0e0"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.62,
    stopColor: "#d8d8d8"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.7,
    stopColor: "#c6c6c6"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.89,
    stopColor: "#a8a8a8"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 1,
    stopColor: "#8d8d8d"
  })), /*#__PURE__*/_react.default.createElement("linearGradient", {
    id: "prefix__d_".concat(svgId),
    x1: 27.94,
    y1: 51.19,
    x2: 49.87,
    y2: 13.21,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.54,
    stopColor: "#d0d0d0",
    stopOpacity: 0
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.82,
    stopColor: "#f1f1f1",
    stopOpacity: 0.7
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.94,
    stopColor: "#fff"
  })), /*#__PURE__*/_react.default.createElement("linearGradient", {
    id: "prefix__e_".concat(svgId),
    x1: 28.66,
    y1: 26.33,
    x2: 47.15,
    y2: 37,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0,
    stopColor: "#fff"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.05,
    stopColor: "#fdfdfd"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.3,
    stopColor: "#f6f6f6"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 1,
    stopColor: "#f4f4f4"
  }))), /*#__PURE__*/_react.default.createElement("path", {
    fill: "none",
    d: "M0 0h80v80H0z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    fill: "url(#prefix__a_".concat(svgId, ")"),
    d: "M59.91 78.34l-43-24.83 4.86-2.81 43 24.83-4.86 2.81z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M39 6.92c12.15 7 22 24 21.92 38S51 64.49 38.83 57.48s-22-24-21.92-38S26.83-.09 39 6.92z",
    fill: "url(#prefix__b_".concat(svgId, ")")
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M42.85 4.68C36.74 1.15 31.2.82 27.2 3.15l-3.66 2.13C27.52 3.08 33 3.45 39 6.92c12.15 7 22 24 21.92 38 0 6.77-2.35 11.58-6.13 13.94h-.07c-.32.2 3.66-2.1 3.66-2.1 4-2.3 6.39-7.18 6.41-14.12C64.81 28.7 55 11.69 42.85 4.68z",
    fill: "url(#prefix__c_".concat(svgId, ")")
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M29.11 3.91v.36a19.59 19.59 0 019.68 3c12 6.94 21.78 23.84 21.74 37.65 0 9.4-4.56 15.23-11.83 15.23a19.54 19.54 0 01-9.68-3C27 50.21 17.24 33.32 17.28 19.5c0-9.39 4.56-15.23 11.83-15.23v-.36m0 0c-7.21 0-12.17 5.71-12.2 15.59 0 14 9.77 31 21.92 38a20.12 20.12 0 009.87 3c7.21 0 12.17-5.71 12.2-15.6 0-13.95-9.77-30.95-21.92-38a20 20 0 00-9.87-3z",
    fill: "url(#prefix__d_".concat(svgId, ")")
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M38.93 49.79a6.9 6.9 0 01-2.66-2.51 6.11 6.11 0 01-.81-3v-1a2.26 2.26 0 01.81-2c.54-.35 1.43-.17 2.66.54a6.71 6.71 0 012.61 2.5 6.06 6.06 0 01.81 3v1a2.24 2.24 0 01-.81 2.05c-.54.29-1.41.12-2.61-.58zm-1.16-11.63L36 22.77V13l5.81 3.36v9.73l-1.64 13.46z",
    fill: "url(#prefix__e_".concat(svgId, ")")
  }));
};

exports.ErrorIllustration = ErrorIllustration;
ErrorIllustration.propTypes = {
  size: _propTypes.default.oneOf(['lg', 'sm']),
  theme: _propTypes.default.oneOf(['light', 'dark'])
};