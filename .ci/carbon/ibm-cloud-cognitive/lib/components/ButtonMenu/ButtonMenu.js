"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonMenu = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _settings = require("../../settings");

var _carbonComponentsReact = require("carbon-components-react");

var _excluded = ["children", "className", "iconDescription", "label", "renderIcon", "size"];
// The block part of our conventional BEM class names (blockClass__E--M).
var blockClass = "".concat(_settings.pkg.prefix, "--button-menu");
var componentName = 'ButtonMenu'; // NOTE: the component SCSS is not imported here: it is rolled up separately.

/**
 * Combining a standard button with an overflow menu, this component appears
 * as a button and has all the usual carbon Button props and rendering, but
 * acts as an overflow menu when clicked. The ButtonMenu component can contain
 * zero to many ButtonMenuItem, which is identical to the carbon
 * OverflowMenuItem component.
 */

var ButtonMenu = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var children = _ref.children,
      className = _ref.className,
      iconDescription = _ref.iconDescription,
      label = _ref.label,
      Icon = _ref.renderIcon,
      size = _ref.size,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.OverflowMenu, (0, _extends2.default)({}, rest, {
    className: (0, _classnames.default)(blockClass, // Apply the block class to the main HTML element
    className // Apply any supplied class names to the main HTML element.
    ),
    menuOptionsClass: "".concat(blockClass, "__options"),
    renderIcon: function renderIcon() {
      return /*#__PURE__*/_react.default.createElement("div", {
        className: (0, _classnames.default)(["".concat(blockClass, "__trigger"), "".concat(_settings.carbon.prefix, "--btn"), "".concat(_settings.carbon.prefix, "--btn--primary"), "".concat(_settings.carbon.prefix, "--btn--").concat(size)])
      }, label, Icon && /*#__PURE__*/_react.default.createElement(Icon, {
        "aria-hidden": "true",
        "aria-label": iconDescription,
        className: "".concat(_settings.carbon.prefix, "--btn__icon")
      }));
    },
    ref: ref
  }), children);
}); // Return a placeholder if not released and not enabled by feature flag


exports.ButtonMenu = ButtonMenu;
exports.ButtonMenu = ButtonMenu = _settings.pkg.checkComponentEnabled(ButtonMenu, componentName); // The display name of the component, used by React. Note that displayName
// is used in preference to relying on function.name.

ButtonMenu.displayName = componentName; // The types and DocGen commentary for the component props,
// in alphabetical order (for consistency).
// See https://www.npmjs.com/package/prop-types#usage.

ButtonMenu.propTypes = {
  /**
   * Provide the contents of the ButtonMenu. This should be one or more
   * ButtonMenuItem components.
   */
  children: _propTypes.default.arrayOf(_propTypes.default.element).isRequired,

  /**
   * Provide an optional class to be applied to the containing node.
   */
  className: _propTypes.default.string,

  /**
   * If specifying the `renderIcon` prop, provide a description for that icon that can
   * be read by screen readers
   */
  iconDescription: _carbonComponentsReact.Button.propTypes.iconDescription,

  /**
   * The button label for the menu trigger.
   */
  label: _propTypes.default.node,

  /**
   * Optional prop to allow overriding the icon rendering.
   * Can be a React component class
   */
  renderIcon: _carbonComponentsReact.Button.propTypes.renderIcon,

  /**
   * The size of the button for the menu trigger. The values can be any valid
   * value for the carbon Button component 'size' prop.
   */
  size: _carbonComponentsReact.Button.propTypes.size
};
ButtonMenu.defaultProps = {
  size: _carbonComponentsReact.Button.defaultProps.size
};