"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RemoveModal = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _carbonComponentsReact = require("carbon-components-react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _devtools = require("../../global/js/utils/devtools");

var _uuidv = _interopRequireDefault(require("../../global/js/utils/uuidv4"));

var _settings = require("../../settings");

var _excluded = ["body", "className", "iconDescription", "inputInvalidText", "inputLabelText", "inputPlaceholderText", "label", "onClose", "onRequestSubmit", "open", "preventCloseOnClickOutside", "primaryButtonText", "resourceName", "secondaryButtonText", "textConfirmation", "title"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var componentName = 'RemoveModal';
var RemoveModal = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var body = _ref.body,
      className = _ref.className,
      iconDescription = _ref.iconDescription,
      inputInvalidText = _ref.inputInvalidText,
      inputLabelText = _ref.inputLabelText,
      inputPlaceholderText = _ref.inputPlaceholderText,
      label = _ref.label,
      onClose = _ref.onClose,
      onRequestSubmit = _ref.onRequestSubmit,
      open = _ref.open,
      preventCloseOnClickOutside = _ref.preventCloseOnClickOutside,
      primaryButtonText = _ref.primaryButtonText,
      resourceName = _ref.resourceName,
      secondaryButtonText = _ref.secondaryButtonText,
      textConfirmation = _ref.textConfirmation,
      title = _ref.title,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);

  var _useState = (0, _react.useState)(''),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      userInput = _useState2[0],
      setUserInput = _useState2[1];

  var idRef = (0, _react.useRef)((0, _uuidv.default)());

  var onChangeHandler = function onChangeHandler(e) {
    setUserInput(e.target.value);
  };

  var primaryButtonDisabled = textConfirmation && userInput !== resourceName;
  var blockClass = "".concat(_settings.pkg.prefix, "--remove-modal");
  return /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.ComposedModal, (0, _extends2.default)({}, rest, {
    className: (0, _classnames.default)(blockClass, className),
    size: "sm"
  }, _objectSpread({
    open: open,
    ref: ref,
    preventCloseOnClickOutside: preventCloseOnClickOutside,
    onClose: onClose
  }, (0, _devtools.getDevtoolsProps)(componentName))), /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.ModalHeader, {
    title: title,
    label: label,
    iconDescription: iconDescription
  }), /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.ModalBody, null, /*#__PURE__*/_react.default.createElement("p", {
    className: "".concat(blockClass, "__body")
  }, body), textConfirmation && /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.TextInput, {
    id: "".concat(idRef.current, "-confirmation-input"),
    className: "".concat(blockClass, "__input"),
    invalidText: inputInvalidText,
    labelText: inputLabelText,
    placeholder: inputPlaceholderText,
    onChange: onChangeHandler
  })), /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.ModalFooter, null, /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.Button, {
    type: "button",
    kind: "secondary",
    onClick: onClose
  }, secondaryButtonText), /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.Button, {
    type: "submit",
    kind: "danger",
    onClick: onRequestSubmit,
    disabled: primaryButtonDisabled
  }, primaryButtonText)));
}); // Return a placeholder if not released and not enabled by feature flag

exports.RemoveModal = RemoveModal;
exports.RemoveModal = RemoveModal = _settings.pkg.checkComponentEnabled(RemoveModal, componentName);
RemoveModal.propTypes = {
  /**
   * The content to be displayed in the body of the modal
   */
  body: _propTypes.default.string.isRequired,

  /**
   * Optional classname
   */
  className: _propTypes.default.string,

  /**
   * Provide a description for "close" icon that can be read by screen readers
   */
  iconDescription: _propTypes.default.string.isRequired,

  /**
   * Message showed when user input fails validation
   */
  inputInvalidText: _propTypes.default.string,

  /**
   * Label for text box
   */
  inputLabelText: _propTypes.default.node,

  /**
   * Placeholder for text box
   */
  inputPlaceholderText: _propTypes.default.string,

  /**
   * Specify the modal label texts
   */
  label: _propTypes.default.string,

  /**
   * Callback function that runs when user closes the modal
   */
  onClose: _propTypes.default.func,

  /**
   * Callback function that runs when user submits the modal
   */
  onRequestSubmit: _propTypes.default.func,

  /**
   * Specify whether the Modal is currently open
   */
  open: _propTypes.default.bool.isRequired,

  /**
   * Prevent closing on click outside of modal
   */
  preventCloseOnClickOutside: _propTypes.default.bool,

  /**
   * Specify the text for the primary button
   */
  primaryButtonText: _propTypes.default.string,

  /**
   * The name of the resource being acted upon
   */
  resourceName: _propTypes.default.string.isRequired,

  /**
   * Specify the text for the secondary button
   */
  secondaryButtonText: _propTypes.default.string,

  /**
   * Specify whether or not to show the text confirmation input
   */
  textConfirmation: _propTypes.default.bool,

  /**
   * The text displayed at the top of the modal
   */
  title: _propTypes.default.string.isRequired
};
RemoveModal.defaultProps = {
  textConfirmation: false
};
RemoveModal.displayName = componentName;