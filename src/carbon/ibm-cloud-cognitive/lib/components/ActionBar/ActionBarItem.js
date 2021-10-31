"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ActionBarItem = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _settings = require("../../settings");

var _carbonComponentsReact = require("carbon-components-react");

var _excluded = ["className"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// The block part of our conventional BEM class names (blockClass__E--M).
var componentName = 'ActionBarItem';
var blockClass = "".concat(_settings.pkg.prefix, "--action-bar-item"); // NOTE: the component SCSS is not imported here: it is rolled up separately.

/**
 * The ActionBarItem is used in the page header to populate the action bar
 */

var ActionBarItem = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var className = _ref.className,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.Button, _objectSpread(_objectSpread({}, rest), {}, {
    ref: ref,
    className: (0, _classnames.default)(blockClass, className),
    hasIconOnly: true,
    kind: 'ghost',
    size: 'field',
    tooltipPosition: 'bottom',
    tooltipAlignment: 'end',
    type: 'button'
  }));
}); // Return a placeholder if not released and not enabled by feature flag


exports.ActionBarItem = ActionBarItem;
exports.ActionBarItem = ActionBarItem = _settings.pkg.checkComponentEnabled(ActionBarItem, componentName); // Props the user cannot change

var reservedProps = ['hasIconOnly', 'kind', 'size', 'tooltipPosition', 'tooltipAlignment', 'type']; // Base props on Carbon Button

var propTypes = _objectSpread({}, _carbonComponentsReact.Button.propTypes);

var defaultProps = _objectSpread({}, _carbonComponentsReact.Button.defaultProps); // Remove reserved props


reservedProps.forEach(function (prop) {
  delete propTypes[prop];
  delete defaultProps[prop];
});
ActionBarItem.displayName = componentName;
ActionBarItem.propTypes = _objectSpread(_objectSpread({}, propTypes), {}, {
  /* ***************************************
  /
  /  The declarations below allow storybook & DocGen to produce documentation.
  /  Some or all of them may be inherited from the underlying Carbon component.
  /
  / ****************************************/

  /**
   * Specify an optional className to be added to your Button
   *
   * (inherited from Carbon Button)
   */
  className: _propTypes.default.string,

  /**
   * If specifying the `renderIcon` prop, provide a description for that icon that can
   * be read by screen readers
   *
   * (inherited from Carbon Button)
   */
  iconDescription: _propTypes.default.string,

  /**
   * Optional click handler
   *
   * (inherited from Carbon Button)
   */
  onClick: _propTypes.default.func,

  /**
   * Optional prop to allow overriding the icon rendering.
   * Can be a React component class
   *
   * (inherited from Carbon Button)
   */
  renderIcon: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object])
});
ActionBarItem.defaultProps = _objectSpread({}, defaultProps);