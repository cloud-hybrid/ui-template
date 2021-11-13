"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ErrorEmptyState = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _carbonComponentsReact = require("carbon-components-react");

var _classnames = _interopRequireDefault(require("classnames"));

var _devtools = require("../../../global/js/utils/devtools");

var _settings = require("../../../settings");

var _EmptyStateContent = require("../EmptyStateContent");

var _ErrorIllustration = require("../assets/ErrorIllustration");

var _EmptyState = require("../EmptyState");

var _excluded = ["action", "className", "illustrationTheme", "link", "size", "subtitle", "title"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// The block part of our conventional BEM class names (blockClass__E--M).
var blockClass = "".concat(_settings.pkg.prefix, "--empty-state");
var componentName = 'ErrorEmptyState';

var ErrorEmptyState = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var action = _ref.action,
      className = _ref.className,
      illustrationTheme = _ref.illustrationTheme,
      link = _ref.link,
      size = _ref.size,
      subtitle = _ref.subtitle,
      title = _ref.title,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, rest, {
    className: (0, _classnames.default)(blockClass, className),
    ref: ref
  }, (0, _devtools.getDevtoolsProps)(componentName)), /*#__PURE__*/_react.default.createElement(_ErrorIllustration.ErrorIllustration, {
    theme: illustrationTheme,
    size: size
  }), /*#__PURE__*/_react.default.createElement(_EmptyStateContent.EmptyStateContent, {
    action: action,
    link: link,
    size: size,
    subtitle: subtitle,
    title: title
  }));
}); // Return a placeholder if not released and not enabled by feature flag


exports.ErrorEmptyState = ErrorEmptyState;
exports.ErrorEmptyState = ErrorEmptyState = _settings.pkg.checkComponentEnabled(ErrorEmptyState, componentName); // The display name of the component, used by React. Note that displayName
// is used in preference to relying on function.name.

ErrorEmptyState.displayName = componentName; // The types and DocGen commentary for the component props,
// in alphabetical order (for consistency).
// See https://www.npmjs.com/package/prop-types#usage.

ErrorEmptyState.propTypes = {
  /**
   * Empty state action button
   */
  action: _propTypes.default.shape(_objectSpread(_objectSpread({}, _carbonComponentsReact.Button.propTypes), {}, {
    kind: _propTypes.default.oneOf(['primary', 'secondary', 'tertiary']),
    renderIcon: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object]),
    onClick: _carbonComponentsReact.Button.propTypes.onClick,
    text: _propTypes.default.string
  })),

  /**
   * Provide an optional class to be applied to the containing node.
   */
  className: _propTypes.default.string,

  /**
   * Empty state illustration theme variations.
   * To ensure you use the correct themed illustrations, you can conditionally specify light or dark
   * based on your app's current theme value. Example:
   * `illustrationTheme={appTheme === ('carbon--g100' || 'carbon--g90') ? 'dark' : 'light'}`
   */
  illustrationTheme: _propTypes.default.oneOf(['light', 'dark']),

  /**
   * Empty state link object
   */
  link: _propTypes.default.shape(_objectSpread(_objectSpread({}, _carbonComponentsReact.Link.propTypes), {}, {
    text: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]),
    href: _propTypes.default.string
  })),

  /**
   * Empty state size
   */
  size: _propTypes.default.oneOf(['lg', 'sm']),

  /**
   * Empty state subtitle
   */
  subtitle: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]).isRequired,

  /**
   * Empty state title
   */
  title: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]).isRequired
}; // Default values for component props. Default values are not required for
// props that are required, nor for props where the component can apply
// 'undefined' values reasonably. Default values should be provided when the
// component needs to make a choice or assumption when a prop is not supplied.

ErrorEmptyState.defaultProps = _EmptyState.EmptyStateDefaultProps;