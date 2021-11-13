"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deprecatedProps = exports.CreateSidePanel = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _settings = require("../../settings");

var _devtools = require("../../global/js/utils/devtools");

var _propsHelper = require("../../global/js/utils/props-helper");

var _carbonComponentsReact = require("carbon-components-react");

var _SidePanel = require("../SidePanel");

var _ActionSet = require("../ActionSet");

var _excluded = ["className", "children", "disableSubmit", "formTitle", "formDescription", "onRequestClose", "onRequestSubmit", "open", "pageContentSelector", "primaryButtonText", "secondaryButtonText", "selectorPageContent", "selectorPrimaryFocus", "subtitle", "title"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// The block part of our conventional BEM class names (blockClass__E--M).
var blockClass = "".concat(_settings.pkg.prefix, "--create-side-panel");
var sidePanelBlockClass = "".concat(_settings.pkg.prefix, "--side-panel");
var componentName = 'CreateSidePanel'; // NOTE: the component SCSS is not imported here: it is rolled up separately.

/**
 * This is an example component to show relevant conventions and usage.
 */

var CreateSidePanel = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var className = _ref.className,
      children = _ref.children,
      disableSubmit = _ref.disableSubmit,
      formTitle = _ref.formTitle,
      formDescription = _ref.formDescription,
      onRequestClose = _ref.onRequestClose,
      onRequestSubmit = _ref.onRequestSubmit,
      open = _ref.open,
      pageContentSelector = _ref.pageContentSelector,
      primaryButtonText = _ref.primaryButtonText,
      secondaryButtonText = _ref.secondaryButtonText,
      selectorPageContent = _ref.selectorPageContent,
      selectorPrimaryFocus = _ref.selectorPrimaryFocus,
      subtitle = _ref.subtitle,
      title = _ref.title,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var actions = [{
    label: primaryButtonText,
    onClick: function onClick(event) {
      event.preventDefault();
      onRequestSubmit();
    },
    kind: 'primary',
    disabled: disableSubmit,
    type: 'submit'
  }, {
    label: secondaryButtonText,
    onClick: onRequestClose,
    kind: 'secondary'
  }];
  var actionContainerClassNames = (0, _classnames.default)(["".concat(blockClass, "__actions-container"), "".concat(sidePanelBlockClass, "__actions-container")]);
  return (selectorPageContent || pageContentSelector) && /*#__PURE__*/_react.default.createElement(_SidePanel.SidePanel, (0, _extends2.default)({}, rest, _objectSpread({
    open: open,
    ref: ref,
    pageContentSelector: pageContentSelector,
    selectorPageContent: selectorPageContent,
    onRequestClose: onRequestClose,
    title: title,
    subtitle: subtitle,
    selectorPrimaryFocus: selectorPrimaryFocus
  }, (0, _devtools.getDevtoolsProps)(componentName)), {
    placement: "right",
    slideIn: true,
    animateTitle: false,
    className: (0, _classnames.default)(blockClass, className),
    size: "md"
  }), /*#__PURE__*/_react.default.createElement("h3", {
    className: "".concat(blockClass, "__form-title-text ").concat(blockClass, "__content-text")
  }, formTitle), /*#__PURE__*/_react.default.createElement("p", {
    className: "".concat(blockClass, "__form-description-text ").concat(blockClass, "__content-text")
  }, formDescription), /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.Form, {
    className: "".concat(blockClass, "__form")
  }, children, /*#__PURE__*/_react.default.createElement(_ActionSet.ActionSet, {
    actions: actions,
    className: actionContainerClassNames,
    size: "md"
  })));
});

exports.CreateSidePanel = CreateSidePanel;
exports.CreateSidePanel = CreateSidePanel = _settings.pkg.checkComponentEnabled(CreateSidePanel, componentName);
CreateSidePanel.displayName = componentName;
var deprecatedProps = {
  /**
   * **Deprecated**
   *
   * This is the selector to the element that contains all of the page content that will shrink if the panel is a slide in.
   * This prop is required when using the `slideIn` variant of the side panel.
   */
  pageContentSelector: (0, _propsHelper.deprecateProp)(_propTypes.default.string, 'This prop has been renamed to `selectorPageContent`.')
};
exports.deprecatedProps = deprecatedProps;
CreateSidePanel.propTypes = _objectSpread({
  /**
   * Sets the body content of the create side panel
   */
  children: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.node), _propTypes.default.node]).isRequired,

  /**
   * Provide an optional class to be applied to the containing node.
   */
  className: _propTypes.default.string,

  /**
   * The description of the CreateSidePanel serves to provide more information about the form within the panel.
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
   * Specifies an optional handler which is called when the CreateSidePanel
   * is closed.
   */
  onRequestClose: _propTypes.default.func,

  /**
   * Specifies an optional handler which is called when the CreateSidePanel
   * primary button is pressed.
   */
  onRequestSubmit: _propTypes.default.func,

  /**
   * Specifies whether the CreateSidePanel is open or not.
   */
  open: _propTypes.default.bool,

  /**
   * Specifies the primary button's text in the modal.
   */
  primaryButtonText: _propTypes.default.string.isRequired,

  /**
   * Specifies the secondary button's text in the modal.
   */
  secondaryButtonText: _propTypes.default.string.isRequired,

  /**
   * This is the selector to the element that contains all of the page content that will shrink if the panel is a slide in.
   * This prop is required when using the `slideIn` variant of the side panel.
   */
  selectorPageContent: _propTypes.default.string.isRequired,

  /**
   * Specifies which DOM element in the form should be focused.
   */
  selectorPrimaryFocus: _propTypes.default.node.isRequired,

  /**
   * The subtitle of the CreateSidePanel is optional and serves to provide more information about the modal.
   */
  subtitle: _propTypes.default.node,

  /**
   * The title of the CreateSidePanel is usually the product or service name.
   */
  title: _propTypes.default.node.isRequired
}, deprecatedProps);