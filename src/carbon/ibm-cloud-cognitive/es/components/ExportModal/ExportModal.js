import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["body", "className", "error", "errorMessage", "filename", "inputLabel", "invalidInputText", "loading", "loadingMessage", "onClose", "onRequestSubmit", "open", "preformattedExtensions", "preformattedExtensionsLabel", "primaryButtonText", "secondaryButtonText", "successMessage", "successful", "title", "validExtensions"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

//
// Copyright IBM Corp. 2020, 2021
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//
import React, { useState, useRef, forwardRef } from 'react';
import { Button, ComposedModal, ModalHeader, ModalFooter, ModalBody, TextInput, RadioButton, RadioButtonGroup, FormGroup, Loading } from 'carbon-components-react';
import cx from 'classnames';
import { ErrorFilled16, CheckmarkFilled16 } from '@carbon/icons-react';
import PropTypes from 'prop-types';
import { getDevtoolsProps } from '../../global/js/utils/devtools';
import uuidv4 from '../../global/js/utils/uuidv4';
import { pkg } from '../../settings';
var componentName = 'ExportModal';
export var ExportModal = /*#__PURE__*/forwardRef(function (_ref, ref) {
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
      rest = _objectWithoutProperties(_ref, _excluded);

  var _useState = useState(filename),
      _useState2 = _slicedToArray(_useState, 2),
      name = _useState2[0],
      setName = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      dirtyInput = _useState4[0],
      setDirtyInput = _useState4[1]; // by default (if it exists) use the first extension in the extension array


  var _useState5 = useState(preformattedExtensions === null || preformattedExtensions === void 0 ? void 0 : (_preformattedExtensio = preformattedExtensions[0]) === null || _preformattedExtensio === void 0 ? void 0 : _preformattedExtensio.extension),
      _useState6 = _slicedToArray(_useState5, 2),
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

  var blockClass = "".concat(pkg.prefix, "--export-modal");
  var internalId = useRef(uuidv4());
  var primaryButtonDisabled = loading || !name || hasInvalidExtension();
  var submitted = loading || error || successful;
  return /*#__PURE__*/React.createElement(ComposedModal, _extends({}, rest, {
    className: cx(blockClass, className),
    "aria-label": title,
    size: "sm",
    preventCloseOnClickOutside: true
  }, _objectSpread({
    open: open,
    ref: ref,
    onClose: onClose
  }, getDevtoolsProps(componentName))), /*#__PURE__*/React.createElement(ModalHeader, {
    className: "".concat(blockClass, "__header"),
    title: title
  }), /*#__PURE__*/React.createElement(ModalBody, {
    className: "".concat(blockClass, "__body-container")
  }, !submitted && /*#__PURE__*/React.createElement(React.Fragment, null, body && /*#__PURE__*/React.createElement("p", {
    className: "".concat(blockClass, "__body")
  }, body), preformattedExtensions.length ? /*#__PURE__*/React.createElement(FormGroup, {
    legendText: preformattedExtensionsLabel
  }, /*#__PURE__*/React.createElement(RadioButtonGroup, {
    orientation: "vertical",
    onChange: onExtensionChangeHandler,
    valueSelected: extension,
    name: "extensions"
  }, preformattedExtensions.map(function (o) {
    return /*#__PURE__*/React.createElement(RadioButton, {
      key: o.extension,
      id: o.extension,
      value: o.extension,
      labelText: "".concat(o.extension, " (").concat(o.description, ")")
    });
  }))) : /*#__PURE__*/React.createElement(TextInput, {
    id: "text-input--".concat(internalId.current),
    value: name,
    onChange: onNameChangeHandler,
    labelText: inputLabel,
    invalid: hasInvalidExtension(),
    invalidText: invalidInputText,
    onBlur: onBlurHandler
  })), /*#__PURE__*/React.createElement("div", {
    className: "".concat(blockClass, "__messaging")
  }, loading && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Loading, {
    small: true,
    withOverlay: false
  }), /*#__PURE__*/React.createElement("p", null, loadingMessage)), successful && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(CheckmarkFilled16, {
    className: "".concat(blockClass, "__checkmark-icon")
  }), /*#__PURE__*/React.createElement("p", null, successMessage)), error && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ErrorFilled16, {
    className: "".concat(blockClass, "__error-icon")
  }), /*#__PURE__*/React.createElement("p", null, errorMessage)))), !submitted && /*#__PURE__*/React.createElement(ModalFooter, {
    className: "".concat(blockClass, "__footer")
  }, /*#__PURE__*/React.createElement(Button, {
    type: "button",
    kind: "secondary",
    onClick: onClose
  }, secondaryButtonText), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    kind: "primary",
    onClick: onSubmitHandler,
    disabled: primaryButtonDisabled
  }, primaryButtonText)));
}); // Return a placeholder if not released and not enabled by feature flag

ExportModal = pkg.checkComponentEnabled(ExportModal, componentName);
ExportModal.propTypes = {
  /**
   * Body content for the modal
   */
  body: PropTypes.string,

  /**
   * Optional class name
   */
  className: PropTypes.string,

  /**
   * specify if an error occurred
   */
  error: PropTypes.bool,

  /**
   * messaging to display in the event of an error
   */
  errorMessage: PropTypes.string,

  /**
   * name of the file being exported
   */
  filename: PropTypes.string.isRequired,

  /**
   * label for the text input
   */
  inputLabel: PropTypes.string,

  /**
   * text for an invalid input
   */
  invalidInputText: PropTypes.string,

  /**
   * specify if the modal is in a loading state
   */
  loading: PropTypes.bool,

  /**
   * message to display during the loading state
   */
  loadingMessage: PropTypes.string,

  /**
   * Specify a handler for closing modal
   */
  onClose: PropTypes.func,

  /**
   * Specify a handler for "submitting" modal. Returns the file name
   */
  onRequestSubmit: PropTypes.func,

  /**
   * Specify whether the Modal is currently open
   */
  open: PropTypes.bool,

  /**
   * Array of extensions to display as radio buttons
   */
  preformattedExtensions: PropTypes.arrayOf(PropTypes.shape({
    extension: PropTypes.string,
    description: PropTypes.string
  })),

  /**
   * Label for the preformatted label form group
   */
  preformattedExtensionsLabel: PropTypes.string,

  /**
   * Specify the text for the primary button
   */
  primaryButtonText: PropTypes.string.isRequired,

  /**
   * Specify the text for the secondary button
   */
  secondaryButtonText: PropTypes.string.isRequired,

  /**
   * messaging to display if the export was successful
   */
  successMessage: PropTypes.string,

  /**
   * specify if the export was successful
   */
  successful: PropTypes.bool,

  /**
   * The text displayed at the top of the modal
   */
  title: PropTypes.string.isRequired,

  /**
   * array of valid extensions the file can have
   */
  validExtensions: PropTypes.array
};
ExportModal.defaultProps = {
  preformattedExtensions: [],
  validExtensions: []
};
ExportModal.displayName = componentName;