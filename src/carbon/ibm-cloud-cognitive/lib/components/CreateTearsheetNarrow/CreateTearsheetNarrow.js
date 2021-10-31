"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateTearsheetNarrow = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _carbonComponentsReact = require("carbon-components-react");

var _devtools = require("../../global/js/utils/devtools");

var _settings = require("../../settings");

var _TearsheetNarrow = require("../Tearsheet/TearsheetNarrow");

var _excluded = ["children", "className", "description", "disableSubmit", "formDescription", "formTitle", "label", "open", "onRequestClose", "onRequestSubmit", "primaryButtonText", "secondaryButtonText", "selectorPrimaryFocus", "title", "verticalPosition"];
// The block part of our conventional BEM class names (blockClass__E--M).
var blockClass = "".concat(_settings.pkg.prefix, "--create-tearsheet-narrow");
var componentName = 'CreateTearsheetNarrow'; // NOTE: the component SCSS is not imported here: it is rolled up separately.

/**
 * Use a narrow tearsheet as an alternative to a modal when there is scrolling.
 * Use when the form fields can be broken down into sections using section headers.
 */

var CreateTearsheetNarrow = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var children = _ref.children,
      className = _ref.className,
      description = _ref.description,
      disableSubmit = _ref.disableSubmit,
      formDescription = _ref.formDescription,
      formTitle = _ref.formTitle,
      label = _ref.label,
      open = _ref.open,
      onRequestClose = _ref.onRequestClose,
      onRequestSubmit = _ref.onRequestSubmit,
      primaryButtonText = _ref.primaryButtonText,
      secondaryButtonText = _ref.secondaryButtonText,
      selectorPrimaryFocus = _ref.selectorPrimaryFocus,
      title = _ref.title,
      verticalPosition = _ref.verticalPosition,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var actions = [{
    label: primaryButtonText,
    onClick: onRequestSubmit,
    kind: 'primary',
    disabled: disableSubmit
  }, {
    label: secondaryButtonText,
    onClick: onRequestClose,
    kind: 'secondary'
  }];
  var formTextClass = "".concat(blockClass, "__content-text");
  return /*#__PURE__*/_react.default.createElement(_TearsheetNarrow.TearsheetNarrow, (0, _extends2.default)({}, rest, {
    title: title,
    description: description,
    className: (0, _classnames.default)(blockClass, className),
    actions: actions,
    open: open,
    ref: ref,
    onClose: function onClose() {
      onRequestClose === null || onRequestClose === void 0 ? void 0 : onRequestClose();
      return false;
    },
    label: label,
    selectorPrimaryFocus: selectorPrimaryFocus,
    verticalPosition: verticalPosition,
    role: "presentation"
  }, (0, _devtools.getDevtoolsProps)(componentName)), /*#__PURE__*/_react.default.createElement("h3", {
    className: (0, _classnames.default)("".concat(blockClass, "__form-title-text"), formTextClass)
  }, formTitle), /*#__PURE__*/_react.default.createElement("p", {
    className: (0, _classnames.default)("".concat(blockClass, "__form-description-text"), formTextClass)
  }, formDescription), /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.Form, {
    className: "".concat(blockClass, "__form")
  }, children));
}); // Return a placeholder if not released and not enabled by feature flag


exports.CreateTearsheetNarrow = CreateTearsheetNarrow;
exports.CreateTearsheetNarrow = CreateTearsheetNarrow = _settings.pkg.checkComponentEnabled(CreateTearsheetNarrow, componentName); // The display name of the component, used by React. Note that displayName
// is used in preference to relying on function.name.

CreateTearsheetNarrow.displayName = componentName; // The types and DocGen commentary for the component props,
// in alphabetical order (for consistency).
// See https://www.npmjs.com/package/prop-types#usage.

CreateTearsheetNarrow.propTypes = {
  /**
   * Provide the contents of the CreateTearsheetNarrow.
   */
  children: _propTypes.default.node.isRequired,

  /**
   * Provide an optional class to be applied to the containing node.
   */
  className: _propTypes.default.string,

  /**
   * A description of the flow, displayed in the header area of the tearsheet.
   */
  description: _propTypes.default.node,

  /**
   * Specifies a boolean for disabling or enabling the primary button. This is important for form validation
   * Returning `true` prevents the primary button from being clicked until required fields are completed.
   */
  disableSubmit: _propTypes.default.bool,

  /**
   * Specifies an optional field that provides a additional context for a form
   */
  formDescription: _propTypes.default.node,

  /**
   * Specifies a required field that provides a title for a form
   */
  formTitle: _propTypes.default.node.isRequired,

  /**
   * A label for the tearsheet, displayed in the header area of the tearsheet
   * to maintain context for the tearsheet (e.g. as the title changes from page
   * to page of a multi-page task).
   */
  label: _propTypes.default.node,

  /**
   * An optional handler that is called when the user closes the tearsheet (by
   * clicking the close button, if enabled, or clicking outside, if enabled).
   * Returning `false` here prevents the modal from closing.
   */
  onRequestClose: _propTypes.default.func,

  /**
   * Specifies an optional handler which is called when the CreateTearsheetNarrow
   * primary button is pressed.
   */
  onRequestSubmit: _propTypes.default.func,

  /**
   * Specifies whether the tearsheet is currently open.
   */
  open: _propTypes.default.bool,

  /**
   * Specifies the primary button's text in the CreateTearsheetNarrow.
   */
  primaryButtonText: _propTypes.default.string.isRequired,

  /**
   * Specifies the secondary button's text in the CreateTearsheetNarrow.
   */
  secondaryButtonText: _propTypes.default.string.isRequired,

  /**
   * Specifies which DOM element in the form should be focused.
   */
  selectorPrimaryFocus: _propTypes.default.node,

  /**
   * The main title of the tearsheet, displayed in the header area.
   */
  title: _propTypes.default.node,

  /**
   * The position of the top of tearsheet in the viewport. The 'normal'
   * position (the default) is a short distance down from the top of the
   * viewport, leaving room at the top for a global header bar to show through
   * from below. The 'lower' position provides a little extra room at the top
   * to allow an action bar navigation or breadcrumbs to also show through.
   */
  verticalPosition: _propTypes.default.oneOf(['normal', 'lower'])
};