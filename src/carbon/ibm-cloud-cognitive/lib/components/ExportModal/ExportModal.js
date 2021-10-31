"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExportModal = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _carbonComponentsReact = require("carbon-components-react");

var _classnames = _interopRequireDefault(require("classnames"));

var _iconsReact = require("@carbon/icons-react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _devtools = require("../../global/js/utils/devtools");

var _uuidv = _interopRequireDefault(require("../../global/js/utils/uuidv4"));

var _settings = require("../../settings");

var _excluded = ["body", "className", "error", "errorMessage", "filename", "inputLabel", "invalidInputText", "loading", "loadingMessage", "onClose", "onRequestSubmit", "open", "preformattedExtensions", "preformattedExtensionsLabel", "primaryButtonText", "secondaryButtonText", "successMessage", "successful", "title", "validExtensions"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var componentName = 'ExportModal';
var ExportModal = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var _preformattedExtensio;

  var body = _ref.body,
      className = _ref.className,
      error = _ref.error,
      errorMessage = _ref.errorMessage,
      filename = _ref.filename,
      inputLabel = _ref.inputLabel,
      invalidInputText = _ref.invalidInputText,
      loading = _ref.loading,
      loadingMessage = _ref.loadingMessage,
      onClose = _ref.onClose,
      onRequestSubmit = _ref.onRequestSubmit,
      open = _ref.open,
      preformattedExtensions = _ref.preformattedExtensions,
      preformattedExtensionsLabel = _ref.preformattedExtensionsLabel,
      primaryButtonText = _ref.primaryButtonText,
      secondaryButtonText = _ref.secondaryButtonText,
      successMessage = _ref.successMessage,
      successful = _ref.successful,
      title = _ref.title,
      validExtensions = _ref.validExtensions,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);

  var _useState = (0, _react.useState)(filename),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      name = _useState2[0],
      setName = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      dirtyInput = _useState4[0],
      setDirtyInput = _useState4[1]; // by default (if it exists) use the first extension in the extension array


  var _useState5 = (0, _react.useState)(preformattedExtensions === null || preformattedExtensions === void 0 ? void 0 : (_preformattedExtensio = preformattedExtensions[0]) === null || _preformattedExtensio === void 0 ? void 0 : _preformattedExtensio.extension),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      extension = _useState6[0],
      setExtension = _useState6[1];

  var onNameChangeHandler = function onNameChangeHandler(evt) {
    setName(evt.target.value);
  };

  var onExtensionChangeHandler = function onExtensionChangeHandler(value) {
    setExtension(value);
  };

  var onBlurHandler = function onBlurHandler() {
    setDirtyInput(true);
  };

  var onSubmitHandler = function onSubmitHandler() {
    var returnName = extension ? "".concat(filename, ".").concat(extension.toLocaleLowerCase()) : name;
    onRequestSubmit(returnName);
  };

  var hasInvalidExtension = function hasInvalidExtension() {
    if (!dirtyInput || !validExtensions || !validExtensions.length) {
      return false;
    }

    if (!name.includes('.')) {
      return true;
    }

    var ext = name.split('.').pop();

    if (!validExtensions.includes(ext)) {
      return true;
    }

    return false;
  };

  var blockClass = "".concat(_settings.pkg.prefix, "--export-modal");
  var internalId = (0, _react.useRef)((0, _uuidv.default)());
  var primaryButtonDisabled = loading || !name || hasInvalidExtension();
  var submitted = loading || error || successful;
  return /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.ComposedModal, (0, _extends2.default)({}, rest, {
    className: (0, _classnames.default)(blockClass, className),
    "aria-label": title,
    size: "sm",
    preventCloseOnClickOutside: true
  }, _objectSpread({
    open: open,
    ref: ref,
    onClose: onClose
  }, (0, _devtools.getDevtoolsProps)(componentName))), /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.ModalHeader, {
    className: "".concat(blockClass, "__header"),
    title: title
  }), /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.ModalBody, {
    className: "".concat(blockClass, "__body-container")
  }, !submitted && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, body && /*#__PURE__*/_react.default.createElement("p", {
    className: "".concat(blockClass, "__body")
  }, body), preformattedExtensions.length ? /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.FormGroup, {
    legendText: preformattedExtensionsLabel
  }, /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.RadioButtonGroup, {
    orientation: "vertical",
    onChange: onExtensionChangeHandler,
    valueSelected: extension,
    name: "extensions"
  }, preformattedExtensions.map(function (o) {
    return /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.RadioButton, {
      key: o.extension,
      id: o.extension,
      value: o.extension,
      labelText: "".concat(o.extension, " (").concat(o.description, ")")
    });
  }))) : /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.TextInput, {
    id: "text-input--".concat(internalId.current),
    value: name,
    onChange: onNameChangeHandler,
    labelText: inputLabel,
    invalid: hasInvalidExtension(),
    invalidText: invalidInputText,
    onBlur: onBlurHandler
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(blockClass, "__messaging")
  }, loading && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.Loading, {
    small: true,
    withOverlay: false
  }), /*#__PURE__*/_react.default.createElement("p", null, loadingMessage)), successful && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_iconsReact.CheckmarkFilled16, {
    className: "".concat(blockClass, "__checkmark-icon")
  }), /*#__PURE__*/_react.default.createElement("p", null, successMessage)), error && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_iconsReact.ErrorFilled16, {
    className: "".concat(blockClass, "__error-icon")
  }), /*#__PURE__*/_react.default.createElement("p", null, errorMessage)))), !submitted && /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.ModalFooter, {
    className: "".concat(blockClass, "__footer")
  }, /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.Button, {
    type: "button",
    kind: "secondary",
    onClick: onClose
  }, secondaryButtonText), /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.Button, {
    type: "submit",
    kind: "primary",
    onClick: onSubmitHandler,
    disabled: primaryButtonDisabled
  }, primaryButtonText)));
}); // Return a placeholder if not released and not enabled by feature flag

exports.ExportModal = ExportModal;
exports.ExportModal = ExportModal = _settings.pkg.checkComponentEnabled(ExportModal, componentName);
ExportModal.propTypes = {
  /**
   * Body content for the modal
   */
  body: _propTypes.default.string,

  /**
   * Optional class name
   */
  className: _propTypes.default.string,

  /**
   * specify if an error occurred
   */
  error: _propTypes.default.bool,

  /**
   * messaging to display in the event of an error
   */
  errorMessage: _propTypes.default.string,

  /**
   * name of the file being exported
   */
  filename: _propTypes.default.string.isRequired,

  /**
   * label for the text input
   */
  inputLabel: _propTypes.default.string,

  /**
   * text for an invalid input
   */
  invalidInputText: _propTypes.default.string,

  /**
   * specify if the modal is in a loading state
   */
  loading: _propTypes.default.bool,

  /**
   * message to display during the loading state
   */
  loadingMessage: _propTypes.default.string,

  /**
   * Specify a handler for closing modal
   */
  onClose: _propTypes.default.func,

  /**
   * Specify a handler for "submitting" modal. Returns the file name
   */
  onRequestSubmit: _propTypes.default.func,

  /**
   * Specify whether the Modal is currently open
   */
  open: _propTypes.default.bool,

  /**
   * Array of extensions to display as radio buttons
   */
  preformattedExtensions: _propTypes.default.arrayOf(_propTypes.default.shape({
    extension: _propTypes.default.string,
    description: _propTypes.default.string
  })),

  /**
   * Label for the preformatted label form group
   */
  preformattedExtensionsLabel: _propTypes.default.string,

  /**
   * Specify the text for the primary button
   */
  primaryButtonText: _propTypes.default.string.isRequired,

  /**
   * Specify the text for the secondary button
   */
  secondaryButtonText: _propTypes.default.string.isRequired,

  /**
   * messaging to display if the export was successful
   */
  successMessage: _propTypes.default.string,

  /**
   * specify if the export was successful
   */
  successful: _propTypes.default.bool,

  /**
   * The text displayed at the top of the modal
   */
  title: _propTypes.default.string.isRequired,

  /**
   * array of valid extensions the file can have
   */
  validExtensions: _propTypes.default.array
};
ExportModal.defaultProps = {
  preformattedExtensions: [],
  validExtensions: []
};
ExportModal.displayName = componentName;