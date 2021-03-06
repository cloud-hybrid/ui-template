"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NoTagsIllustration = void 0;

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

var NoTagsIllustration = function NoTagsIllustration(_ref) {
  var theme = _ref.theme,
      size = _ref.size,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var svgId = (0, _uuidv.default)();
  return theme === 'dark' ? /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({}, rest, {
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: 80,
    height: 80,
    viewBox: "0 0 80 80",
    className: (0, _classnames.default)(["".concat(blockClass, "__illustration"), "".concat(blockClass, "__illustration--").concat(size)])
  }), /*#__PURE__*/_react.default.createElement("defs", null, /*#__PURE__*/_react.default.createElement("linearGradient", {
    id: "prefix__c_dark_".concat(svgId),
    x1: 34.96,
    y1: 5.37,
    x2: 48.48,
    y2: 28.8,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0,
    stopColor: "#525252"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 1,
    stopColor: "#393939"
  })), /*#__PURE__*/_react.default.createElement("linearGradient", {
    id: "prefix__a_dark_".concat(svgId),
    x1: 45.47,
    y1: 46.54,
    x2: 55.21,
    y2: 46.54,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0,
    stopColor: "#262626"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 1,
    stopColor: "#393939"
  })), /*#__PURE__*/_react.default.createElement("linearGradient", {
    id: "prefix__d_dark_".concat(svgId),
    x1: 38.25,
    y1: 70.94,
    x2: 38.25,
    y2: -3.31,
    xlinkHref: "#prefix__a_dark_".concat(svgId)
  }), /*#__PURE__*/_react.default.createElement("linearGradient", {
    id: "prefix__e_dark_".concat(svgId),
    x1: 28.77,
    y1: 9.54,
    x2: 48.15,
    y2: 40.79,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.42,
    stopColor: "#6f6f6f"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.51,
    stopColor: "#6e6e6e",
    stopOpacity: 0.98
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.56,
    stopColor: "#6c6c6c",
    stopOpacity: 0.9
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.61,
    stopColor: "#686868",
    stopOpacity: 0.77
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.65,
    stopColor: "#636363",
    stopOpacity: 0.58
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.69,
    stopColor: "#5c5c5c",
    stopOpacity: 0.34
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.72,
    stopColor: "#545454",
    stopOpacity: 0.05
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.73,
    stopColor: "#525252",
    stopOpacity: 0
  })), /*#__PURE__*/_react.default.createElement("linearGradient", {
    id: "prefix__b_dark_".concat(svgId),
    x1: 51.28,
    y1: 68.32,
    x2: 51.34,
    y2: 68.35,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.87,
    stopColor: "#fff"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.89,
    stopColor: "#fefefe",
    stopOpacity: 0.98
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.9,
    stopColor: "#fcfcfc",
    stopOpacity: 0.93
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.92,
    stopColor: "#f8f8f8",
    stopOpacity: 0.84
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.94,
    stopColor: "#f2f2f2",
    stopOpacity: 0.72
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.95,
    stopColor: "#eaeaea",
    stopOpacity: 0.56
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.97,
    stopColor: "#e1e1e1",
    stopOpacity: 0.37
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.99,
    stopColor: "#d7d7d7",
    stopOpacity: 0.14
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 1,
    stopColor: "#d0d0d0",
    stopOpacity: 0
  })), /*#__PURE__*/_react.default.createElement("linearGradient", {
    id: "prefix__f_dark_".concat(svgId),
    x1: 51.09,
    y1: 68.25,
    x2: 51.22,
    y2: 68.33,
    xlinkHref: "#prefix__b_dark_".concat(svgId)
  }), /*#__PURE__*/_react.default.createElement("linearGradient", {
    id: "prefix__g_dark_".concat(svgId),
    x1: 51.41,
    y1: 68.32,
    x2: 51.46,
    y2: 68.35,
    xlinkHref: "#prefix__b_dark_".concat(svgId)
  }), /*#__PURE__*/_react.default.createElement("linearGradient", {
    id: "prefix__h_dark_".concat(svgId),
    x1: 33.94,
    y1: 119.46,
    x2: 42.79,
    y2: 119.46,
    gradientTransform: "translate(0 -100)",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0,
    stopColor: "#262626"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 1,
    stopColor: "#161616"
  })), /*#__PURE__*/_react.default.createElement("linearGradient", {
    id: "prefix__i_dark_".concat(svgId),
    x1: 35.3,
    y1: 23.46,
    x2: 38.85,
    y2: 17.31,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0,
    stopColor: "#6f6f6f"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.09,
    stopColor: "#6f6f6f",
    stopOpacity: 0.9
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.24,
    stopColor: "#6f6f6f",
    stopOpacity: 0.63
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.44,
    stopColor: "#6f6f6f",
    stopOpacity: 0.19
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.52,
    stopColor: "#6f6f6f",
    stopOpacity: 0
  }))), /*#__PURE__*/_react.default.createElement("path", {
    fill: "none",
    d: "M0 0h80v80H0z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    opacity: 0.25,
    d: "M51.59 78.34l-26.8-15.48 3.62-2.09 26.8 15.48-3.62 2.09z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M45.47 30.38l6.58-3.76 3.12-1.85v.15a1.28 1.28 0 00-.17-.47L42.19 2.21c-.24-.42-.63-.65-.88-.51L28.47 9.12a.44.44 0 00-.18.4l13.88 3a1.38 1.38 0 00.62 1.07z",
    fill: "url(#prefix__c_dark_".concat(svgId, ")")
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M55 66.29a.46.46 0 00.18-.41V25.06a1 1 0 000-.29l-3.12 1.85-6.58 3.76 6.06 37.92z",
    fill: "url(#prefix__a_dark_".concat(svgId, ")")
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M51.53 26.47L38.69 4.23c-.25-.42-.64-.64-.88-.5L25 11.14a.43.43 0 00-.18.4v40.82a1.35 1.35 0 00.62 1.07l25.65 14.83c.34.2.62 0 .62-.36V27.08a1.33 1.33 0 00-.18-.61zM37.08 24a6.93 6.93 0 01-3.14-5.44c0-2 1.4-2.81 3.14-1.81a7 7 0 013.13 5.44c0 2.01-1.4 2.81-3.13 1.81z",
    fill: "url(#prefix__d_dark_".concat(svgId, ")")
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M39.05 4a1.71 1.71 0 00-.64-.64l-.6.34a.3.3 0 01.16 0 1 1 0 01.72.55l12.84 22.22a1.33 1.33 0 01.18.61V67.9a.41.41 0 01-.19.4l.58-.34V27.08a1.75 1.75 0 00-.24-.82z",
    fill: "url(#prefix__e_dark_".concat(svgId, ")")
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M51.28 68.33z",
    fill: "url(#prefix__b_dark_".concat(svgId, ")")
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M51.23 68.32a.42.42 0 01-.14-.06.42.42 0 00.14.06z",
    fill: "url(#prefix__f_dark_".concat(svgId, ")")
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M51.48 68.32h-.08z",
    fill: "url(#prefix__g_dark_".concat(svgId, ")")
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M39.66 22.17a6.93 6.93 0 01-3.14-5.44 1.36 1.36 0 010-.21c-1.48-.56-2.6.27-2.6 2.05A6.93 6.93 0 0037.08 24c1.66 1 3 .24 3.11-1.6a3.49 3.49 0 01-.53-.23z",
    fill: "url(#prefix__h_dark_".concat(svgId, ")")
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M35.67 16.33a2.88 2.88 0 011.41.43 7 7 0 013.13 5.44c0 1.42-.7 2.24-1.73 2.24a2.82 2.82 0 01-1.4-.43 6.93 6.93 0 01-3.14-5.44c0-1.42.7-2.24 1.73-2.24m0-.41c-1.3 0-2.15 1-2.15 2.65a7.3 7.3 0 003.35 5.8 3.23 3.23 0 001.61.48c1.3 0 2.15-1 2.15-2.65a7.29 7.29 0 00-3.35-5.8 3.2 3.2 0 00-1.61-.48z",
    fill: "url(#prefix__i_dark_".concat(svgId, ")")
  })) : /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({}, rest, {
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: 80,
    height: 80,
    viewBox: "0 0 80 80",
    className: (0, _classnames.default)(["".concat(blockClass, "__illustration"), "".concat(blockClass, "__illustration--").concat(size)])
  }), /*#__PURE__*/_react.default.createElement("defs", null, /*#__PURE__*/_react.default.createElement("linearGradient", {
    id: "prefix__b_".concat(svgId),
    x1: 634.81,
    y1: 667.18,
    x2: 644.85,
    y2: 684.56,
    gradientTransform: "matrix(.87 .5 -1 .58 161.49 -640.11)",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0,
    stopColor: "#525252",
    stopOpacity: 0.05
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 1,
    stopOpacity: 0.1
  })), /*#__PURE__*/_react.default.createElement("linearGradient", {
    id: "prefix__c_".concat(svgId),
    x1: 29.21,
    y1: 7.75,
    x2: 56.14,
    y2: 23.3,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0,
    stopColor: "#f4f4f4"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.78,
    stopColor: "#e0e0e0"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 1,
    stopColor: "#c6c6c6"
  })), /*#__PURE__*/_react.default.createElement("linearGradient", {
    id: "prefix__d_".concat(svgId),
    x1: 45.47,
    y1: 46.54,
    x2: 55.21,
    y2: 46.54,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0,
    stopColor: "#a8a8a8"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 1,
    stopColor: "#c6c6c6"
  })), /*#__PURE__*/_react.default.createElement("linearGradient", {
    id: "prefix__e_".concat(svgId),
    x1: 38.25,
    y1: 59.31,
    x2: 38.25,
    y2: 2.99,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0,
    stopColor: "#c6c6c6"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.78,
    stopColor: "#e0e0e0"
  })), /*#__PURE__*/_react.default.createElement("linearGradient", {
    id: "prefix__f_".concat(svgId),
    x1: 28.77,
    y1: 9.54,
    x2: 48.15,
    y2: 40.79,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.42,
    stopColor: "#fff"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.49,
    stopColor: "#fff",
    stopOpacity: 0.99
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.53,
    stopColor: "#fdfdfd",
    stopOpacity: 0.96
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.56,
    stopColor: "#fafafa",
    stopOpacity: 0.9
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.59,
    stopColor: "#f6f6f6",
    stopOpacity: 0.82
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.62,
    stopColor: "#f2f2f2",
    stopOpacity: 0.71
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.65,
    stopColor: "#ebebeb",
    stopOpacity: 0.59
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.67,
    stopColor: "#e4e4e4",
    stopOpacity: 0.43
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.7,
    stopColor: "#dcdcdc",
    stopOpacity: 0.25
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.72,
    stopColor: "#d3d3d3",
    stopOpacity: 0.06
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.73,
    stopColor: "#d0d0d0",
    stopOpacity: 0
  })), /*#__PURE__*/_react.default.createElement("linearGradient", {
    id: "prefix__a_".concat(svgId),
    x1: 51.28,
    y1: 68.32,
    x2: 51.34,
    y2: 68.35,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.87,
    stopColor: "#fff"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.89,
    stopColor: "#fefefe",
    stopOpacity: 0.98
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.9,
    stopColor: "#fcfcfc",
    stopOpacity: 0.93
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.92,
    stopColor: "#f8f8f8",
    stopOpacity: 0.84
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.94,
    stopColor: "#f2f2f2",
    stopOpacity: 0.72
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.95,
    stopColor: "#eaeaea",
    stopOpacity: 0.56
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.97,
    stopColor: "#e1e1e1",
    stopOpacity: 0.37
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.99,
    stopColor: "#d7d7d7",
    stopOpacity: 0.14
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 1,
    stopColor: "#d0d0d0",
    stopOpacity: 0
  })), /*#__PURE__*/_react.default.createElement("linearGradient", {
    id: "prefix__g_".concat(svgId),
    x1: 51.09,
    y1: 68.25,
    x2: 51.22,
    y2: 68.33,
    xlinkHref: "#prefix__a_".concat(svgId)
  }), /*#__PURE__*/_react.default.createElement("linearGradient", {
    id: "prefix__h_".concat(svgId),
    x1: 51.41,
    y1: 68.32,
    x2: 51.46,
    y2: 68.35,
    xlinkHref: "#prefix__a_".concat(svgId)
  }), /*#__PURE__*/_react.default.createElement("linearGradient", {
    id: "prefix__i_".concat(svgId),
    x1: 33.94,
    y1: 19.46,
    x2: 42.79,
    y2: 19.46,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0,
    stopColor: "#a4a4a4"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 1,
    stopColor: "#8c8c8c"
  })), /*#__PURE__*/_react.default.createElement("linearGradient", {
    id: "prefix__j_".concat(svgId),
    x1: 35.3,
    y1: 23.46,
    x2: 38.85,
    y2: 17.31,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0,
    stopColor: "#fff"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.04,
    stopColor: "#fdfdfd",
    stopOpacity: 0.96
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.12,
    stopColor: "#f7f7f7",
    stopOpacity: 0.84
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.23,
    stopColor: "#eee",
    stopOpacity: 0.64
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.36,
    stopColor: "#e2e2e2",
    stopOpacity: 0.38
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.5,
    stopColor: "#d2d2d2",
    stopOpacity: 0.04
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.52,
    stopColor: "#d0d0d0",
    stopOpacity: 0
  }))), /*#__PURE__*/_react.default.createElement("path", {
    fill: "none",
    d: "M0 0h80v80H0z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    fill: "url(#prefix__b_".concat(svgId, ")"),
    d: "M51.59 78.34l-26.8-15.48 3.62-2.09 26.8 15.48-3.62 2.09z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M45.47 30.38l6.58-3.76 3.12-1.85v.15a1.28 1.28 0 00-.17-.47L42.19 2.21c-.24-.42-.63-.65-.88-.51L28.47 9.12a.44.44 0 00-.18.4l13.88 3a1.38 1.38 0 00.62 1.07z",
    fill: "url(#prefix__c_".concat(svgId, ")")
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M55 66.29a.46.46 0 00.18-.41V25.06a1 1 0 000-.29l-3.12 1.85-6.58 3.76 6.06 37.92z",
    fill: "url(#prefix__d_".concat(svgId, ")")
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M51.53 26.47L38.69 4.23c-.25-.42-.64-.64-.88-.5L25 11.14a.43.43 0 00-.18.4v40.82a1.35 1.35 0 00.62 1.07l25.65 14.83c.34.2.62 0 .62-.36V27.08a1.33 1.33 0 00-.18-.61zM37.08 24a6.93 6.93 0 01-3.14-5.44c0-2 1.4-2.81 3.14-1.81a7 7 0 013.13 5.44c0 2.01-1.4 2.81-3.13 1.81z",
    fill: "url(#prefix__e_".concat(svgId, ")")
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M39.05 4a1.71 1.71 0 00-.64-.64l-.6.34a.3.3 0 01.16 0 1 1 0 01.72.55l12.84 22.22a1.33 1.33 0 01.18.61V67.9a.41.41 0 01-.19.4l.58-.34V27.08a1.75 1.75 0 00-.24-.82z",
    fill: "url(#prefix__f_".concat(svgId, ")")
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M51.28 68.33z",
    fill: "url(#prefix__a_".concat(svgId, ")")
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M51.23 68.32a.42.42 0 01-.14-.06.42.42 0 00.14.06z",
    fill: "url(#prefix__g_".concat(svgId, ")")
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M51.48 68.32h-.08z",
    fill: "url(#prefix__h_".concat(svgId, ")")
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M39.66 22.17a6.93 6.93 0 01-3.14-5.44 1.36 1.36 0 010-.21c-1.48-.56-2.6.27-2.6 2.05A6.93 6.93 0 0037.08 24c1.66 1 3 .24 3.11-1.6a3.49 3.49 0 01-.53-.23z",
    fill: "url(#prefix__i_".concat(svgId, ")")
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M35.67 16.33a2.88 2.88 0 011.41.43 7 7 0 013.13 5.44c0 1.42-.7 2.24-1.73 2.24a2.82 2.82 0 01-1.4-.43 6.93 6.93 0 01-3.14-5.44c0-1.42.7-2.24 1.73-2.24m0-.41c-1.3 0-2.15 1-2.15 2.65a7.3 7.3 0 003.35 5.8 3.23 3.23 0 001.61.48c1.3 0 2.15-1 2.15-2.65a7.29 7.29 0 00-3.35-5.8 3.2 3.2 0 00-1.61-.48z",
    fill: "url(#prefix__j_".concat(svgId, ")")
  }));
};

exports.NoTagsIllustration = NoTagsIllustration;
NoTagsIllustration.propTypes = {
  size: _propTypes.default.oneOf(['lg', 'sm']),
  theme: _propTypes.default.oneOf(['light', 'dark'])
};