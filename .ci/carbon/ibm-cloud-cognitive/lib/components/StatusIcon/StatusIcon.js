"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StatusIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _iconsReact = require("@carbon/icons-react");

var _devtools = require("../../global/js/utils/devtools");

var _settings = require("../../settings");

var _excluded = ["kind", "theme", "size", "className", "iconDescription"];
var icons = {
  fatal: {
    sm: _iconsReact.Misuse16,
    md: _iconsReact.Misuse20,
    lg: _iconsReact.Misuse24,
    xlg: _iconsReact.Misuse32
  },
  critical: {
    sm: _iconsReact.ErrorFilled16,
    md: _iconsReact.ErrorFilled20,
    lg: _iconsReact.ErrorFilled24,
    xlg: _iconsReact.ErrorFilled32
  },
  'major-warning': {
    sm: _iconsReact.WarningAltInvertedFilled16,
    md: _iconsReact.WarningAltInvertedFilled20,
    lg: _iconsReact.WarningAltInvertedFilled24,
    xlg: _iconsReact.WarningAltInvertedFilled32
  },
  'minor-warning': {
    sm: _iconsReact.WarningAltFilled16,
    md: _iconsReact.WarningAltFilled20,
    lg: _iconsReact.WarningAltFilled24,
    xlg: _iconsReact.WarningAltFilled32
  },
  undefined: {
    sm: _iconsReact.UndefinedFilled16,
    md: _iconsReact.UndefinedFilled20,
    lg: _iconsReact.UndefinedFilled24,
    xlg: _iconsReact.UndefinedFilled32
  },
  unknown: {
    sm: _iconsReact.UnknownFilled16,
    md: _iconsReact.UnknownFilled20,
    lg: _iconsReact.UnknownFilled24,
    xlg: _iconsReact.UnknownFilled32
  },
  normal: {
    sm: _iconsReact.CheckmarkFilled16,
    md: _iconsReact.CheckmarkFilled20,
    lg: _iconsReact.CheckmarkFilled24,
    xlg: _iconsReact.CheckmarkFilled32
  },
  info: {
    sm: _iconsReact.InformationSquareFilled16,
    md: _iconsReact.InformationSquareFilled20,
    lg: _iconsReact.InformationSquareFilled24,
    xlg: _iconsReact.InformationSquareFilled32
  },
  'in-progress': {
    sm: _iconsReact.Renew16,
    md: _iconsReact.Renew20,
    lg: _iconsReact.Renew24,
    xlg: _iconsReact.Renew32
  },
  running: {
    sm: _iconsReact.Renew16,
    md: _iconsReact.Renew20,
    lg: _iconsReact.Renew24,
    xlg: _iconsReact.Renew32
  },
  pending: {
    sm: _iconsReact.Time16,
    md: _iconsReact.Time20,
    lg: _iconsReact.Time24,
    xlg: _iconsReact.Time32
  }
};
var blockClass = "".concat(_settings.pkg.prefix, "--status-icon");
var componentName = 'StatusIcon';

var StatusIcon = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var _icons$kind;

  var kind = _ref.kind,
      theme = _ref.theme,
      size = _ref.size,
      className = _ref.className,
      iconDescription = _ref.iconDescription,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var IconComponent = (_icons$kind = icons[kind]) === null || _icons$kind === void 0 ? void 0 : _icons$kind[size];
  var classNames = (0, _classnames.default)(className, blockClass, "".concat(blockClass, "--").concat(theme), (0, _defineProperty2.default)({}, "".concat(blockClass, "--").concat(theme, "-").concat(kind), kind));
  return IconComponent && /*#__PURE__*/_react.default.createElement(IconComponent, (0, _extends2.default)({}, rest, {
    className: classNames,
    ref: ref
  }, (0, _devtools.getDevtoolsProps)(componentName)), /*#__PURE__*/_react.default.createElement("title", null, iconDescription));
});

exports.StatusIcon = StatusIcon;
exports.StatusIcon = StatusIcon = _settings.pkg.checkComponentEnabled(StatusIcon, componentName);
StatusIcon.displayName = componentName;
StatusIcon.propTypes = {
  /**
   * Provide an optional class to be applied to the modal root node.
   */
  className: _propTypes.default.string,

  /**
   * A required prop that provides a title element and tooltip for the icon for accessibility purposes
   */
  iconDescription: _propTypes.default.string.isRequired,

  /**
   * A required prop that displays the respective icon associated with the status
   */
  kind: _propTypes.default.oneOf(['fatal', 'critical', 'major-warning', 'minor-warning', 'undefined', 'unknown', 'normal', 'info', 'in-progress', 'running', 'pending']).isRequired,

  /**
   * A required prop that displays the size of the icon associate with the status
   */
  size: _propTypes.default.oneOf(['sm', 'md', 'lg', 'xlg']).isRequired,

  /**
   * A required prop that displays the theme of the icon associated with the status
   */
  theme: _propTypes.default.oneOf(['light', 'dark']).isRequired
};