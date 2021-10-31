"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoadingBar = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _settings = require("../../settings");

var _excluded = ["active", "ariaLabel", "className", "id", "percentage", "percentageIndicatorText", "showPercentageIndicator", "small"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// Carbon and package components we use.

/* @import(s) of carbon components and other package components. */
// The block part of our conventional BEM class names (blockClass__E--M).
var blockClass = "".concat(_settings.pkg.prefix, "--loading-bar");
var componentName = 'LoadingBar'; // NOTE: the component SCSS is not imported here: it is rolled up separately.

/**
 * The LoadingBar component provides a way to communicate the loading state to users.
 * It is intended to fill the space of where it's used, and should persist until the
 * loading action is complete. Once complete, the active prop may be set to false to
 * hide the LoadingBar.
 * The LoadingBar has two modes of operation: Indeterminate and Determinate.
 * If no percentage is provided to the component, the LoadingBar behaves in indeterminate
 * mode, with the bar moving from side to side, to indicate loading in progress.
 * If a percentage prop is provided, the determinate mode of operation is used and the
 * loading bar fills until the specified percentage to indicate current progress to
 * the user.
 */

var LoadingBar = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var _cx2, _cx3;

  var active = _ref.active,
      ariaLabel = _ref.ariaLabel,
      className = _ref.className,
      id = _ref.id,
      percentage = _ref.percentage,
      percentageIndicatorText = _ref.percentageIndicatorText,
      showPercentageIndicator = _ref.showPercentageIndicator,
      small = _ref.small,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);

  function usePrevious(value) {
    var ref = (0, _react.useRef)();
    (0, _react.useEffect)(function () {
      // Store current value in ref
      ref.current = value;
    }, [value]); // Only re-run if value changes
    // Return previous value (happens before update in useEffect above)

    return ref.current;
  }

  var prevActive = usePrevious(active);
  var isDeterminate = percentage !== undefined;
  var percentProgress = isDeterminate ? percentage > 100 ? "100%" : percentage + '%' : 0;
  var actuallyShowPercentageIndicator = isDeterminate && showPercentageIndicator; // switch classes dependant on props

  var loadingWrapper = (0, _classnames.default)((0, _defineProperty2.default)({}, "".concat(blockClass, "__preload"), !prevActive && !active));
  var loadingClassName = (0, _classnames.default)((_cx2 = {}, (0, _defineProperty2.default)(_cx2, "".concat(blockClass, "__inner"), true), (0, _defineProperty2.default)(_cx2, "".concat(blockClass, "__small"), small), (0, _defineProperty2.default)(_cx2, "".concat(blockClass, "__linear-stop"), !active && isDeterminate), (0, _defineProperty2.default)(_cx2, "".concat(blockClass, "__indefinite-stop"), !active && !isDeterminate), _cx2));
  var animationClassName = (0, _classnames.default)((_cx3 = {}, (0, _defineProperty2.default)(_cx3, "".concat(blockClass, "__linear-progress"), isDeterminate), (0, _defineProperty2.default)(_cx3, "".concat(blockClass, "__stop-progress"), !active && !isDeterminate), (0, _defineProperty2.default)(_cx3, "".concat(blockClass, "__indefinite-progress"), active && !isDeterminate), _cx3));
  var loadingId = id && "loading-bar-id-".concat(id);
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, rest, {
    className: (0, _classnames.default)(loadingWrapper, // Apply any supplied class names to the main HTML element.
    className, blockClass),
    ref: ref,
    role: "progressbar",
    "aria-label": ariaLabel,
    "aria-atomic": "true",
    "aria-labelledby": loadingId,
    "aria-live": active ? 'assertive' : 'off',
    id: loadingId
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: loadingClassName
  }, /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, isDeterminate && {
    style: {
      width: percentProgress
    }
  }, {
    className: "".concat(blockClass, "__progress")
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: animationClassName
  }))), actuallyShowPercentageIndicator && /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(blockClass, "__indicator-wrapper")
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(blockClass, "__indicator")
  }, active && percentageIndicatorText)));
}); // Return a placeholder if not released and not enabled by feature flag


exports.LoadingBar = LoadingBar;
exports.LoadingBar = LoadingBar = _settings.pkg.checkComponentEnabled(LoadingBar, componentName); // The display name of the component, used by React. Note that displayName
// is used in preference to relying on function.name.

LoadingBar.displayName = componentName; // The types and DocGen commentary for the component props,
// in alphabetical order (for consistency).
// See https://www.npmjs.com/package/prop-types#usage.

LoadingBar.propTypes = {
  /**
   * Specify whether you want the loading bar indicator to be active or not
   */
  active: _propTypes.default.bool.isRequired,

  /**
   * Specify a ariaLabel that would be used to best describe the active loading state
   */
  ariaLabel: _propTypes.default.string,

  /**
   * Provide an optional className to be applied to the containing node
   */
  className: _propTypes.default.string,

  /**
   * ID for loading bar
   */
  id: _propTypes.default.string,

  /**
   * Leave undefined for indeterminate duration or specify percentage complete that the determinate bar should indicate (0-100).
   */
  percentage: _propTypes.default.number,

  /**
   * In determinate mode, provide text to be shown on percentage indicator
   */
  percentageIndicatorText: _propTypes.default.string,

  /**
   * In determinate mode, specify whether to show the percentage indicator.
   */
  showPercentageIndicator: _propTypes.default.bool,

  /**
   * Specify whether you would like the small variant of this component
   */
  small: _propTypes.default.bool
}; // Default values for component props. Default values are not required for
// props that are required, nor for props where the component can apply
// 'undefined' values reasonably. Default values should be provided when the
// component needs to make a choice or assumption when a prop is not supplied.

LoadingBar.defaultProps = {
  /* add defaults for relevant props. */
  active: true,
  small: false,
  percentage: undefined,
  showPercentageIndicator: false,
  percentageIndicatorText: undefined,
  ariaLabel: 'Active loading indicator'
};