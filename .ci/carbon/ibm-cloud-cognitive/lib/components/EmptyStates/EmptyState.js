"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmptyStateDefaultProps = exports.EmptyState = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _carbonComponentsReact = require("carbon-components-react");

var _devtools = require("../../global/js/utils/devtools");

require("../../global/js/utils/props-helper");

var _settings = require("../../settings");

var _EmptyStateContent = require("./EmptyStateContent");

var _excluded = ["action", "className", "illustration", "illustrationDescription", "link", "size", "subtitle", "title"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// The block part of our conventional BEM class names (blockClass__E--M).
var blockClass = "".concat(_settings.pkg.prefix, "--empty-state");
var componentName = 'EmptyState';

var EmptyState = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var action = _ref.action,
      className = _ref.className,
      illustration = _ref.illustration,
      illustrationDescription = _ref.illustrationDescription,
      link = _ref.link,
      size = _ref.size,
      subtitle = _ref.subtitle,
      title = _ref.title,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);

  var renderIllustration = function renderIllustration() {
    return /*#__PURE__*/_react.default.createElement("img", {
      src: illustration,
      alt: illustrationDescription,
      className: (0, _classnames.default)(["".concat(blockClass, "__illustration"), "".concat(blockClass, "__illustration--").concat(size)])
    });
  };

  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, rest, {
    className: (0, _classnames.default)(blockClass, className),
    ref: ref
  }, (0, _devtools.getDevtoolsProps)(componentName)), illustration && renderIllustration(), /*#__PURE__*/_react.default.createElement(_EmptyStateContent.EmptyStateContent, {
    action: action,
    link: link,
    size: size,
    subtitle: subtitle,
    title: title
  }));
}); // Return a placeholder if not released and not enabled by feature flag


exports.EmptyState = EmptyState;
exports.EmptyState = EmptyState = _settings.pkg.checkComponentEnabled(EmptyState, componentName);
var EmptyStateDefaultProps = {
  size: 'lg'
};
exports.EmptyStateDefaultProps = EmptyStateDefaultProps;
EmptyState.propTypes = {
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
   * Empty state illustration, specify the `src` for a provided illustration to be displayed. In the case of requiring a light and dark illustration of your own, simply pass the corresponding illustration based on the current theme of your application.
   * For example: `illustration={appTheme === 'dark' ? darkIllustration : lightIllustration}`
   */
  illustration: _propTypes.default.string,

  /**
   * The alt text for custom provided illustrations
   */
  illustrationDescription: _propTypes.default.string.isRequired.if(function (_ref2) {
    var illustration = _ref2.illustration;
    return illustration;
  }),

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
   * Empty state subtext
   */
  subtitle: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]).isRequired,

  /**
   * Empty state heading
   */
  title: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]).isRequired
};
EmptyState.defaultProps = EmptyStateDefaultProps;
EmptyState.displayName = componentName;