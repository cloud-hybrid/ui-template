"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImportModal = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _carbonComponentsReact = require("carbon-components-react");

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _devtools = require("../../global/js/utils/devtools");

var _uuidv = _interopRequireDefault(require("../../global/js/utils/uuidv4"));

var _settings = require("../../settings");

var _excluded = ["accept", "className", "defaultErrorBody", "defaultErrorHeader", "description", "fetchErrorBody", "fetchErrorHeader", "fileDropHeader", "fileDropLabel", "fileUploadLabel", "inputButtonText", "inputId", "inputLabel", "inputPlaceholder", "invalidFileTypeErrorBody", "invalidFileTypeErrorHeader", "invalidIconDescription", "maxFileSize", "maxFileSizeErrorBody", "maxFileSizeErrorHeader", "onClose", "onRequestSubmit", "open", "primaryButtonText", "secondaryButtonText", "title"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var componentName = 'ImportModal';
var ImportModal = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
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
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);

  var _useState = (0, _react.useState)([]),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      files = _useState2[0],
      setFiles = _useState2[1];

  var _useState3 = (0, _react.useState)(''),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
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
        uuid: file.uuid || (0, _uuidv.default)(),
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
    var finalFiles = (0, _toConsumableArray2.default)(updatedFiles);
    setFiles(finalFiles);
  };

  var fetchFile = /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(evt) {
      var fileName, pendingFile, response, blob, fetchedFile, failedFile;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              evt.preventDefault();
              fileName = importUrl.substring(importUrl.lastIndexOf('/') + 1).split('?')[0];
              pendingFile = {
                name: fileName,
                status: 'uploading',
                uuid: (0, _uuidv.default)()
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
  var blockClass = "".concat(_settings.pkg.prefix, "--import-modal");
  return /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.ComposedModal, (0, _extends2.default)({}, rest, _objectSpread({
    open: open,
    ref: ref,
    onClose: onClose
  }, (0, _devtools.getDevtoolsProps)(componentName)), {
    "aria-label": title,
    className: (0, _classnames.default)(blockClass, className),
    size: "sm",
    preventCloseOnClickOutside: true
  }), /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.ModalHeader, {
    className: "".concat(blockClass, "__header"),
    title: title
  }), /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.ModalBody, {
    className: "".concat(blockClass, "__body-container")
  }, description && /*#__PURE__*/_react.default.createElement("p", {
    className: "".concat(blockClass, "__body")
  }, description), fileDropHeader && /*#__PURE__*/_react.default.createElement("p", {
    className: "".concat(blockClass, "__file-drop-header")
  }, fileDropHeader), /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.FileUploaderDropContainer, {
    accept: accept,
    labelText: fileDropLabel,
    onAddFiles: onAddFile,
    disabled: hasFiles
  }), inputLabel && /*#__PURE__*/_react.default.createElement("p", {
    className: "".concat(blockClass, "__label")
  }, inputLabel), /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(blockClass, "__input-group")
  }, /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.TextInput, {
    labelText: "",
    id: inputId,
    onChange: inputHandler,
    placeholder: inputPlaceholder,
    value: importUrl,
    disabled: hasFiles,
    "aria-label": inputLabel
  }), /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.Button, {
    onClick: fetchFile,
    className: "".concat(blockClass, "__import-button"),
    size: "sm",
    disabled: importButtonDisabled
  }, inputButtonText)), /*#__PURE__*/_react.default.createElement("div", {
    className: "bx--file-container ".concat(blockClass, "__file-container")
  }, hasFiles && /*#__PURE__*/_react.default.createElement("p", {
    className: "".concat(blockClass, "__helper-text")
  }, fileStatusString), files.map(function (file) {
    return /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.FileUploaderItem, {
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
  }))), /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.ModalFooter, {
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

exports.ImportModal = ImportModal;
exports.ImportModal = ImportModal = _settings.pkg.checkComponentEnabled(ImportModal, componentName);
ImportModal.propTypes = {
  /**
   * Specifies the file types that are valid for importing
   */
  accept: _propTypes.default.array,

  /**
   * Optional class name
   */
  className: _propTypes.default.string,

  /**
   * The default message shown for an import error
   */
  defaultErrorBody: _propTypes.default.string.isRequired,

  /**
   * The default header that is displayed to show an error message
   */
  defaultErrorHeader: _propTypes.default.string.isRequired,

  /**
   * Content that is displayed inside the modal
   */
  description: _propTypes.default.string,

  /**
   * Optional error body to display specifically for a fetch error
   */
  fetchErrorBody: _propTypes.default.string,

  /**
   * Optional error header to display specifically for a fetch error
   */
  fetchErrorHeader: _propTypes.default.string,

  /**
   * Header for the drag and drop box
   */
  fileDropHeader: _propTypes.default.string,

  /**
   * Label for the drag and drop box
   */
  fileDropLabel: _propTypes.default.string,

  /**
   * Label that appears when a file is uploaded to show number of files (1 / 1)
   */
  fileUploadLabel: _propTypes.default.string,

  /**
   * Button text for import by url button
   */
  inputButtonText: _propTypes.default.string.isRequired,

  /**
   * ID for text input
   */
  inputId: _propTypes.default.string,

  /**
   * Header to display above import by url
   */
  inputLabel: _propTypes.default.string,

  /**
   * Placeholder for text input
   */
  inputPlaceholder: _propTypes.default.string,

  /**
   * Optional error message to display specifically for a invalid file type error
   */
  invalidFileTypeErrorBody: _propTypes.default.string,

  /**
   * Optional error header to display specifically for a invalid file type error
   */
  invalidFileTypeErrorHeader: _propTypes.default.string,

  /**
   * Description for delete file icon
   */
  invalidIconDescription: _propTypes.default.string,

  /**
   * File size limit in bytes
   */
  maxFileSize: _propTypes.default.number,

  /**
   * Optional error message to display specifically for a max file size error
   */
  maxFileSizeErrorBody: _propTypes.default.string,

  /**
   * Optional error header to display specifically for a max file size error
   */
  maxFileSizeErrorHeader: _propTypes.default.string,

  /**
   * Specify a handler for closing modal
   */
  onClose: _propTypes.default.func,

  /**
   * Specify a handler for "submitting" modal. Access the imported file via `file => {}`
   */
  onRequestSubmit: _propTypes.default.func,

  /**
   * Specify whether the Modal is currently open
   */
  open: _propTypes.default.bool,

  /**
   * Specify the text for the primary button
   */
  primaryButtonText: _propTypes.default.string.isRequired,

  /**
   * Specify the text for the secondary button
   */
  secondaryButtonText: _propTypes.default.string.isRequired,

  /**
   * The text displayed at the top of the modal
   */
  title: _propTypes.default.string.isRequired
};
ImportModal.defaultProps = {
  accept: []
};
ImportModal.displayName = componentName;