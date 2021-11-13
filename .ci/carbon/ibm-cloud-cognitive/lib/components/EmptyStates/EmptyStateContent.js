"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmptyStateContent = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _settings = require("../../settings");

var _classnames = _interopRequireDefault(require("classnames"));

var _carbonComponentsReact = require("carbon-components-react");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// The block part of our conventional BEM class names (blockClass__E--M).
var blockClass = "".concat(_settings.pkg.prefix, "--empty-state");
var componentName = 'EmptyStateContent';

var EmptyStateContent = function EmptyStateContent(_ref) {
  var action = _ref.action,
      link = _ref.link,
      size = _ref.size,
      subtitle = _ref.subtitle,
      title = _ref.title;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("h3", {
    className: (0, _classnames.default)("".concat(blockClass, "__header"), (0, _defineProperty2.default)({}, "".concat(blockClass, "__header--small"), size === 'sm'))
  }, title), /*#__PURE__*/_react.default.createElement("p", {
    className: (0, _classnames.default)("".concat(blockClass, "__subtitle"), (0, _defineProperty2.default)({}, "".concat(blockClass, "__subtitle--small"), size === 'sm'))
  }, subtitle), (action === null || action === void 0 ? void 0 : action.text) && (action === null || action === void 0 ? void 0 : action.onClick) && /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.Button, (0, _extends2.default)({}, action, {
    className: "".concat(blockClass, "__action-button"),
    kind: action.kind || 'tertiary',
    onClick: action.onClick,
    renderIcon: action.renderIcon || null
  }), action.text), (link === null || link === void 0 ? void 0 : link.text) && (link === null || link === void 0 ? void 0 : link.href) && /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.Link, (0, _extends2.default)({}, link, {
    className: "".concat(blockClass, "__link"),
    href: link.href
  }), link.text));
}; // The display name of the component, used by React. Note that displayName
// is used in preference to relying on function.name.


exports.EmptyStateContent = EmptyStateContent;
EmptyStateContent.displayName = componentName; // The types and DocGen commentary for the component props,
// in alphabetical order (for consistency).
// See https://www.npmjs.com/package/prop-types#usage.

EmptyStateContent.propTypes = {
  /**
   * Empty state action button
   */
  action: _propTypes.default.shape(_objectSpread(_objectSpread({}, _carbonComponentsReact.Button.propTypes), {}, {
    iconDescription: _propTypes.default.string,
    kind: _propTypes.default.oneOf(['primary', 'secondary', 'tertiary']),
    renderIcon: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object]),
    onClick: _carbonComponentsReact.Button.propTypes.onClick,
    text: _propTypes.default.string
  })),

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
};