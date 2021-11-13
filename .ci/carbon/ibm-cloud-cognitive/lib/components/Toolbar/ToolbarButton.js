"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToolbarButton = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _carbonComponentsReact = require("carbon-components-react");

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = require("prop-types");

var _react = _interopRequireWildcard(require("react"));

var _Toolbar = require("./Toolbar");

var _settings = require("../../settings");

var _excluded = ["caret", "children", "className"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/** Toolbar buttons are common functions performed as part of a products interface or an open window.  */
var ToolbarButton = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var caret = _ref.caret,
      children = _ref.children,
      className = _ref.className,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.Button, (0, _extends2.default)({}, rest, {
    ref: ref,
    className: (0, _classnames.default)(className, (0, _defineProperty2.default)({}, "".concat(_Toolbar.blockClass, "__button--caret"), caret)),
    kind: "ghost",
    size: "md",
    hasIconOnly: true
  }), /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, children, caret && /*#__PURE__*/_react.default.createElement("span", {
    className: "".concat(_Toolbar.blockClass, "__button__caret")
  })));
});
exports.ToolbarButton = ToolbarButton;
var componentName = 'ToolbarButton';
ToolbarButton.displayName = componentName;
ToolbarButton.propTypes = {
  /** Determines whether the caret is rendered */
  caret: _propTypes.bool,

  /** Provide the content of the `ToolbarButton` */
  children: _propTypes.node,

  /** Provide an optional class to be applied to the containing node */
  className: _propTypes.string
};
ToolbarButton.defaultProps = {
  caret: false
};
exports.ToolbarButton = ToolbarButton = _settings.pkg.checkComponentEnabled(ToolbarButton, componentName);