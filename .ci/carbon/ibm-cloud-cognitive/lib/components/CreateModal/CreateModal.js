"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateModal = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _carbonComponentsReact = require("carbon-components-react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _devtools = require("../../global/js/utils/devtools");

var _settings = require("../../settings");

var _excluded = ["className", "children", "onRequestClose", "onRequestSubmit", "open", "title", "subtitle", "description", "secondaryButtonText", "primaryButtonText", "disableSubmit", "selectorPrimaryFocus"];
var componentName = 'CreateModal';
var blockClass = "".concat(_settings.pkg.prefix, "--create-modal"); // Custom PropType validator which checks and ensures that the children property has no more than 4 nodes

var isValidChildren = function isValidChildren() {
  return function (_ref) {
    var children = _ref.children;

    if (children && children.length > 4) {
      throw new Error('The `CreateModal` component does not take more than 4 nodes as children. This is to ensure that the modal does not overflow. Please remove 1 or more nodes.');
    }

    return;
  };
};

var CreateModal = /*#__PURE__*/_react.default.forwardRef(function (_ref2, ref) {
  var className = _ref2.className,
      children = _ref2.children,
      onRequestClose = _ref2.onRequestClose,
      onRequestSubmit = _ref2.onRequestSubmit,
      open = _ref2.open,
      title = _ref2.title,
      subtitle = _ref2.subtitle,
      description = _ref2.description,
      secondaryButtonText = _ref2.secondaryButtonText,
      primaryButtonText = _ref2.primaryButtonText,
      disableSubmit = _ref2.disableSubmit,
      selectorPrimaryFocus = _ref2.selectorPrimaryFocus,
      rest = (0, _objectWithoutProperties2.default)(_ref2, _excluded);
  return /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.ComposedModal, (0, _extends2.default)({}, rest, {
    selectorPrimaryFocus: selectorPrimaryFocus,
    className: (0, _classnames.default)(blockClass, className),
    open: open,
    ref: ref,
    "aria-label": title,
    size: "sm",
    preventCloseOnClickOutside: true,
    onClose: function onClose() {
      onRequestClose === null || onRequestClose === void 0 ? void 0 : onRequestClose();
      return false;
    }
  }, (0, _devtools.getDevtoolsProps)(componentName)), /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.ModalHeader, {
    title: title,
    titleClassName: "".concat(blockClass, "__title")
  }, subtitle && /*#__PURE__*/_react.default.createElement("p", {
    className: "".concat(blockClass, "__subtitle")
  }, subtitle)), /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.ModalBody, {
    hasForm: true
  }, description && /*#__PURE__*/_react.default.createElement("p", {
    className: "".concat(blockClass, "__description")
  }, description), /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.Form, {
    className: "".concat(blockClass, "__form")
  }, children)), /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.ModalFooter, null, /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.Button, {
    type: "button",
    kind: "secondary",
    onClick: onRequestClose
  }, secondaryButtonText), /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.Button, {
    type: "submit",
    kind: "primary",
    onClick: onRequestSubmit,
    disabled: disableSubmit
  }, primaryButtonText)));
}); // Return a placeholder if not released and not enabled by feature flag


exports.CreateModal = CreateModal;
exports.CreateModal = CreateModal = _settings.pkg.checkComponentEnabled(CreateModal, componentName);
CreateModal.propTypes = {
  /**
   * Children refers to all form items within a form inside of the modal's body.
   */
  children: isValidChildren(),

  /**
   * Specify an optional className to be applied to the modal root node
   */
  className: _propTypes.default.string,

  /**
   * The description of the CreateModal serves to provide more information about the modal.
   */
  description: _propTypes.default.node.isRequired,

  /**
   * Specifies a boolean for disabling or enabling the primary button. This is important for form validation
   * Returning `true` prevents the primary button from being clicked until required fields are completed.
   */
  disableSubmit: _propTypes.default.bool,

  /**
   * Specifies an optional handler which is called when the CreateModal
   * is closed.
   */
  onRequestClose: _propTypes.default.func,

  /**
   * Specifies an optional handler which is called when the CreateModal
   * primary button is pressed.
   */
  onRequestSubmit: _propTypes.default.func,

  /**
   * Specifies whether the CreateModal is open or not.
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
   * Specifies which DOM element in the form should be focused.
   */
  selectorPrimaryFocus: _propTypes.default.node.isRequired,

  /**
   * The subtitle of the CreateModal is optional and serves to provide more information about the modal.
   */
  subtitle: _propTypes.default.node,

  /**
   * The title of the CreateModal is usually the product or service name.
   */
  title: _propTypes.default.node.isRequired
};
CreateModal.displayName = componentName;
CreateModal.defaultProps = {
  disableSubmit: false
};