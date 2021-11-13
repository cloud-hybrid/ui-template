"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.componentName = exports.blockClass = exports.Toolbar = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = require("prop-types");

var _react = _interopRequireWildcard(require("react"));

var _settings = require("../../settings");

var _excluded = ["children", "className", "vertical"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var checkComponentEnabled = _settings.pkg.checkComponentEnabled,
    prefix = _settings.pkg.prefix;
var blockClass = "".concat(prefix, "--toolbar");
/** Toolbars are a collection of action items that organize a program’s interaction patterns into a series of closely related commands. */

exports.blockClass = blockClass;
var Toolbar = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var children = _ref.children,
      className = _ref.className,
      vertical = _ref.vertical,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, rest, {
    ref: ref,
    className: (0, _classnames.default)(blockClass, className, (0, _defineProperty2.default)({}, "".concat(blockClass, "--vertical"), vertical))
  }, vertical && {
    'aria-orientation': 'vertical'
  }, {
    role: "toolbar"
  }), children);
});
exports.Toolbar = Toolbar;
var componentName = 'Toolbar';
exports.componentName = componentName;
Toolbar.displayName = componentName;
Toolbar.propTypes = {
  /** Provide the content of the `Toolbar` */
  children: _propTypes.node.isRequired,

  /** Provide an optional class to be applied to the containing node */
  className: _propTypes.string,

  /** Determines whether the `Toolbar` is rendered vertically */
  vertical: _propTypes.bool
};
exports.Toolbar = Toolbar = checkComponentEnabled(Toolbar, componentName);