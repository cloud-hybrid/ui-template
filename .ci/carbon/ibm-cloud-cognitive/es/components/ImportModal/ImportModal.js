import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["accept", "className", "defaultErrorBody", "defaultErrorHeader", "description", "fetchErrorBody", "fetchErrorHeader", "fileDropHeader", "fileDropLabel", "fileUploadLabel", "inputButtonText", "inputId", "inputLabel", "inputPlaceholder", "invalidFileTypeErrorBody", "invalidFileTypeErrorHeader", "invalidIconDescription", "maxFileSize", "maxFileSizeErrorBody", "maxFileSizeErrorHeader", "onClose", "onRequestSubmit", "open", "primaryButtonText", "secondaryButtonText", "title"];
import _regeneratorRuntime from "@babel/runtime/regenerator";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

//
// Copyright IBM Corp. 2021, 2021
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//
import React, { useState, forwardRef } from 'react';
import { ComposedModal, ModalHeader, ModalFooter, ModalBody, FileUploaderDropContainer, FileUploaderItem, TextInput, Button } from 'carbon-components-react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { getDevtoolsProps } from '../../global/js/utils/devtools';
import uuidv4 from '../../global/js/utils/uuidv4';
import { pkg } from '../../settings';
var componentName = 'ImportModal';
export var ImportModal = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var accept = _ref.accept,
      className = _ref.className,
      defaultErrorBody = _ref.defaultErrorBody,
      defaultErrorHeader = _ref.defaultErrorHeader,
      description = _ref.description,
      fetchErrorBody = _ref.fetchErrorBody,
      fetchErrorHeader = _ref.fetchErrorHeader,
      fileDropHeader = _ref.fileDropHeader,
      fileDropLabel = _ref.fileDropLabel,
      fileUploadLabel = _ref.fileUploadLabel,
      inputButtonText = _ref.inputButtonText,
      inputId = _ref.inputId,
      inputLabel = _ref.inputLabel,
      inputPlaceholder = _ref.inputPlaceholder,
      invalidFileTypeErrorBody = _ref.invalidFileTypeErrorBody,
      invalidFileTypeErrorHeader = _ref.invalidFileTypeErrorHeader,
      invalidIconDescription = _ref.invalidIconDescription,
      maxFileSize = _ref.maxFileSize,
      maxFileSizeErrorBody = _ref.maxFileSizeErrorBody,
      maxFileSizeErrorHeader = _ref.maxFileSizeErrorHeader,
      onClose = _ref.onClose,
      onRequestSubmit = _ref.onRequestSubmit,
      open = _ref.open,
      primaryButtonText = _ref.primaryButtonText,
      secondaryButtonText = _ref.secondaryButtonText,
      title = _ref.title,
      rest = _objectWithoutProperties(_ref, _excluded);

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      files = _useState2[0],
      setFiles = _useState2[1];

  var _useState3 = useState(''),
      _useState4 = _slicedToArray(_useState3, 2),
      importUrl = _useState4[0],
      setImportUrl = _useState4[1];

  var isInvalidFileType = function isInvalidFileType(file) {
    var acceptSet = new Set(accept);
    var name = file.name;
    var mimeType = file.type;
    var extension = name.split('.').pop();

    if (acceptSet.has(mimeType) || acceptSet.has(extension)) {
      return false;
    }

    return true;
  };

  var updateFiles = function updateFiles(newFiles) {
    var updatedFiles = newFiles.map(function (file) {
      var newFile = {
        uuid: file.uuid || uuidv4(),
        status: 'edit',
        iconDescription: invalidIconDescription,
        name: file.name,
        fileSize: file.size,
        invalidFileType: file.invalidFileType,
        fileData: file,
        fetchError: file.fetchError
      };

      if (newFile.fetchError) {
        newFile.errorBody = fetchErrorBody || defaultErrorBody;
        newFile.errorSubject = fetchErrorHeader || defaultErrorHeader;
        newFile.invalid = true;
      } else if (newFile.invalidFileType) {
        newFile.errorBody = invalidFileTypeErrorBody || defaultErrorBody;
        newFile.errorSubject = invalidFileTypeErrorHeader || defaultErrorHeader;
        newFile.invalid = true;
      } else if (maxFileSize && newFile.fileSize > maxFileSize) {
        newFile.errorBody = maxFileSizeErrorBody || defaultErrorBody;
        newFile.errorSubject = maxFileSizeErrorHeader || defaultErrorHeader;
        newFile.invalid = true;
      }

      return newFile;
    });

    var finalFiles = _toConsumableArray(updatedFiles);

    setFiles(finalFiles);
  };

  var fetchFile = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(evt) {
      var fileName, pendingFile, response, blob, fetchedFile, failedFile;
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              evt.preventDefault();
              fileName = importUrl.substring(importUrl.lastIndexOf('/') + 1).split('?')[0];
              pendingFile = {
                name: fileName,
                status: 'uploading',
                uuid: uuidv4()
              };
              setFiles([pendingFile]);
              _context.prev = 4;
              _context.next = 7;
              return fetch(importUrl);

            case 7:
              response = _context.sent;

              if (!(!response.ok || response.status !== 200)) {
                _context.next = 10;
                break;
              }

              throw new Error(response.status);

            case 10:
              _context.next = 12;
              return response.blob();

            case 12:
              blob = _context.sent;
              fetchedFile = new File([blob], fileName, {
                type: blob.type
              });
              fetchedFile.invalidFileType = isInvalidFileType(fetchedFile);
              fetchedFile.uuid = pendingFile.uuid;
              updateFiles([fetchedFile]);
              _context.next = 23;
              break;

            case 19:
              _context.prev = 19;
              _context.t0 = _context["catch"](4);
              failedFile = _objectSpread(_objectSpread({}, pendingFile), {}, {
                fetchError: true
              });
              updateFiles([failedFile]);

            case 23:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[4, 19]]);
    }));

    return function fetchFile(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var onAddFile = function onAddFile(evt, _ref3) {
    var addedFiles = _ref3.addedFiles;
    evt.stopPropagation();
    updateFiles(addedFiles);
  };

  var onRemoveFile = function onRemoveFile(uuid) {
    var updatedFiles = files.filter(function (f) {
      return f.uuid !== uuid;
    });
    setFiles(updatedFiles);
  };

  var onSubmitHandler = function onSubmitHandler() {
    onRequestSubmit(files);
  };

  var inputHandler = function inputHandler(evt) {
    setImportUrl(evt.target.value);
  };

  var numberOfFiles = files.length;
  var numberOfValidFiles = files.filter(function (f) {
    return !f.invalid;
  }).length;
  var hasFiles = numberOfFiles > 0;
  var primaryButtonDisabled = !hasFiles || !(numberOfValidFiles > 0);
  var importButtonDisabled = !importUrl || hasFiles;
  var fileStatusString = "".concat(numberOfValidFiles, " / ").concat(numberOfFiles, " ").concat(fileUploadLabel);
  var blockClass = "".concat(pkg.prefix, "--import-modal");
  return /*#__PURE__*/React.createElement(ComposedModal, _extends({}, rest, _objectSpread({
    open: open,
    ref: ref,
    onClose: onClose
  }, getDevtoolsProps(componentName)), {
    "aria-label": title,
    className: cx(blockClass, className),
    size: "sm",
    preventCloseOnClickOutside: true
  }), /*#__PURE__*/React.createElement(ModalHeader, {
    className: "".concat(blockClass, "__header"),
    title: title
  }), /*#__PURE__*/React.createElement(ModalBody, {
    className: "".concat(blockClass, "__body-container")
  }, description && /*#__PURE__*/React.createElement("p", {
    className: "".concat(blockClass, "__body")
  }, description), fileDropHeader && /*#__PURE__*/React.createElement("p", {
    className: "".concat(blockClass, "__file-drop-header")
  }, fileDropHeader), /*#__PURE__*/React.createElement(FileUploaderDropContainer, {
    accept: accept,
    labelText: fileDropLabel,
    onAddFiles: onAddFile,
    disabled: hasFiles
  }), inputLabel && /*#__PURE__*/React.createElement("p", {
    className: "".concat(blockClass, "__label")
  }, inputLabel), /*#__PURE__*/React.createElement("div", {
    className: "".concat(blockClass, "__input-group")
  }, /*#__PURE__*/React.createElement(TextInput, {
    labelText: "",
    id: inputId,
    onChange: inputHandler,
    placeholder: inputPlaceholder,
    value: importUrl,
    disabled: hasFiles,
    "aria-label": inputLabel
  }), /*#__PURE__*/React.createElement(Button, {
    onClick: fetchFile,
    className: "".concat(blockClass, "__import-button"),
    size: "sm",
    disabled: importButtonDisabled
  }, inputButtonText)), /*#__PURE__*/React.createElement("div", {
    className: "bx--file-container ".concat(blockClass, "__file-container")
  }, hasFiles && /*#__PURE__*/React.createElement("p", {
    className: "".concat(blockClass, "__helper-text")
  }, fileStatusString), files.map(function (file) {
    return /*#__PURE__*/React.createElement(FileUploaderItem, {
      key: file.uuid,
      onDelete: function onDelete() {
        return onRemoveFile(file.uuid);
      },
      name: file.name,
      status: file.status,
      size: "default",
      uuid: file.uuid,
      iconDescription: file.iconDescription,
      invalid: file.invalid,
      errorBody: file.errorBody,
      errorSubject: file.errorSubject,
      filesize: file.fileSize
      /* cspell:disable-line */

    });
  }))), /*#__PURE__*/React.createElement(ModalFooter, {
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

ImportModal = pkg.checkComponentEnabled(ImportModal, componentName);
ImportModal.propTypes = {
  /**
   * Specifies the file types that are valid for importing
   */
  accept: PropTypes.array,

  /**
   * Optional class name
   */
  className: PropTypes.string,

  /**
   * The default message shown for an import error
   */
  defaultErrorBody: PropTypes.string.isRequired,

  /**
   * The default header that is displayed to show an error message
   */
  defaultErrorHeader: PropTypes.string.isRequired,

  /**
   * Content that is displayed inside the modal
   */
  description: PropTypes.string,

  /**
   * Optional error body to display specifically for a fetch error
   */
  fetchErrorBody: PropTypes.string,

  /**
   * Optional error header to display specifically for a fetch error
   */
  fetchErrorHeader: PropTypes.string,

  /**
   * Header for the drag and drop box
   */
  fileDropHeader: PropTypes.string,

  /**
   * Label for the drag and drop box
   */
  fileDropLabel: PropTypes.string,

  /**
   * Label that appears when a file is uploaded to show number of files (1 / 1)
   */
  fileUploadLabel: PropTypes.string,

  /**
   * Button text for import by url button
   */
  inputButtonText: PropTypes.string.isRequired,

  /**
   * ID for text input
   */
  inputId: PropTypes.string,

  /**
   * Header to display above import by url
   */
  inputLabel: PropTypes.string,

  /**
   * Placeholder for text input
   */
  inputPlaceholder: PropTypes.string,

  /**
   * Optional error message to display specifically for a invalid file type error
   */
  invalidFileTypeErrorBody: PropTypes.string,

  /**
   * Optional error header to display specifically for a invalid file type error
   */
  invalidFileTypeErrorHeader: PropTypes.string,

  /**
   * Description for delete file icon
   */
  invalidIconDescription: PropTypes.string,

  /**
   * File size limit in bytes
   */
  maxFileSize: PropTypes.number,

  /**
   * Optional error message to display specifically for a max file size error
   */
  maxFileSizeErrorBody: PropTypes.string,

  /**
   * Optional error header to display specifically for a max file size error
   */
  maxFileSizeErrorHeader: PropTypes.string,

  /**
   * Specify a handler for closing modal
   */
  onClose: PropTypes.func,

  /**
   * Specify a handler for "submitting" modal. Access the imported file via `file => {}`
   */
  onRequestSubmit: PropTypes.func,

  /**
   * Specify whether the Modal is currently open
   */
  open: PropTypes.bool,

  /**
   * Specify the text for the primary button
   */
  primaryButtonText: PropTypes.string.isRequired,

  /**
   * Specify the text for the secondary button
   */
  secondaryButtonText: PropTypes.string.isRequired,

  /**
   * The text displayed at the top of the modal
   */
  title: PropTypes.string.isRequired
};
ImportModal.defaultProps = {
  accept: []
};
ImportModal.displayName = componentName;