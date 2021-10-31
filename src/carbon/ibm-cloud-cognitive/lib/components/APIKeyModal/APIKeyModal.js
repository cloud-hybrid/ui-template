"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.APIKeyModal = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _carbonComponentsReact = require("carbon-components-react");

var _iconsReact = require("@carbon/icons-react");

var _APIKeyDownloader = require("./APIKeyDownloader");

var _settings = require("../../settings");

var _devtools = require("../../global/js/utils/devtools");

var _propsHelper = require("../../global/js/utils/props-helper");

var _uuidv = _interopRequireDefault(require("../../global/js/utils/uuidv4"));

var _excluded = ["apiKey", "apiKeyLabel", "apiKeyName", "body", "className", "closeButtonText", "copyButtonText", "copyErrorText", "copyIconDescription", "customSteps", "downloadBodyText", "downloadFileName", "downloadFileType", "downloadLinkText", "editButtonText", "editSuccess", "editSuccessTitle", "editing", "error", "errorText", "generateButtonText", "generateSuccessBody", "generateSuccessTitle", "generateTitle", "hasAPIKeyVisibilityToggle", "hasDownloadLink", "hideAPIKeyLabel", "loading", "loadingText", "modalLabel", "nameHelperText", "nameLabel", "namePlaceholder", "nameRequired", "nextStepButtonText", "onClose", "onCopy", "onRequestEdit", "onRequestGenerate", "open", "previousStepButtonText", "showAPIKeyLabel"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var componentName = 'APIKeyModal';
var APIKeyModal = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var apiKey = _ref.apiKey,
      apiKeyLabel = _ref.apiKeyLabel,
      apiKeyName = _ref.apiKeyName,
      body = _ref.body,
      className = _ref.className,
      closeButtonText = _ref.closeButtonText,
      copyButtonText = _ref.copyButtonText,
      copyErrorText = _ref.copyErrorText,
      copyIconDescription = _ref.copyIconDescription,
      customSteps = _ref.customSteps,
      downloadBodyText = _ref.downloadBodyText,
      downloadFileName = _ref.downloadFileName,
      downloadFileType = _ref.downloadFileType,
      downloadLinkText = _ref.downloadLinkText,
      editButtonText = _ref.editButtonText,
      editSuccess = _ref.editSuccess,
      editSuccessTitle = _ref.editSuccessTitle,
      editing = _ref.editing,
      error = _ref.error,
      errorText = _ref.errorText,
      generateButtonText = _ref.generateButtonText,
      generateSuccessBody = _ref.generateSuccessBody,
      generateSuccessTitle = _ref.generateSuccessTitle,
      generateTitle = _ref.generateTitle,
      hasAPIKeyVisibilityToggle = _ref.hasAPIKeyVisibilityToggle,
      hasDownloadLink = _ref.hasDownloadLink,
      hideAPIKeyLabel = _ref.hideAPIKeyLabel,
      loading = _ref.loading,
      loadingText = _ref.loadingText,
      modalLabel = _ref.modalLabel,
      nameHelperText = _ref.nameHelperText,
      nameLabel = _ref.nameLabel,
      namePlaceholder = _ref.namePlaceholder,
      nameRequired = _ref.nameRequired,
      nextStepButtonText = _ref.nextStepButtonText,
      onClose = _ref.onClose,
      onCopy = _ref.onCopy,
      onRequestEdit = _ref.onRequestEdit,
      onRequestGenerate = _ref.onRequestGenerate,
      open = _ref.open,
      previousStepButtonText = _ref.previousStepButtonText,
      showAPIKeyLabel = _ref.showAPIKeyLabel,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      copyError = _useState2[0],
      setCopyError = _useState2[1];

  var _useState3 = (0, _react.useState)(apiKeyName),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      name = _useState4[0],
      setName = _useState4[1];

  var _useState5 = (0, _react.useState)(0),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      currentStep = _useState6[0],
      setCurrentStep = _useState6[1];

  var inputRef = (0, _react.useRef)();
  var copyRef = (0, _react.useRef)();
  var apiKeyInputId = (0, _react.useRef)((0, _uuidv.default)());
  var nameInputId = (0, _react.useRef)((0, _uuidv.default)());
  var hasSteps = Boolean(customSteps.length);
  var apiKeyLoaded = apiKey && !loading;
  var hasNextStep = hasSteps && currentStep < customSteps.length - 1;
  var hasPreviousStep = hasSteps && currentStep !== 0;
  var copyButtonProps = {
    renderIcon: _iconsReact.Copy16,
    iconDescription: copyIconDescription,
    ref: copyRef
  };
  var blockClass = "".concat(_settings.pkg.prefix, "--apikey-modal");
  (0, _react.useEffect)(function () {
    if (inputRef.current && open) {
      inputRef.current.focus();
    }
  }, [open]);
  (0, _react.useEffect)(function () {
    if (copyRef.current && open && apiKeyLoaded) {
      copyRef.current.focus();
    }
  }, [open, apiKeyLoaded]);

  var isPrimaryButtonDisabled = function isPrimaryButtonDisabled() {
    if (loading) {
      return true;
    }

    if (hasSteps && 'valid' in customSteps[currentStep]) {
      return !customSteps[currentStep].valid;
    }

    if (!hasSteps && nameRequired && !name) {
      return true;
    }

    return false;
  };

  var getPrimaryButtonText = function getPrimaryButtonText() {
    if (hasNextStep) {
      return nextStepButtonText;
    }

    if (apiKeyLoaded) {
      return copyButtonText;
    }

    if (editing) {
      return editButtonText;
    }

    return generateButtonText;
  };

  var getSecondaryButtonText = function getSecondaryButtonText() {
    if (hasPreviousStep && !apiKeyLoaded) {
      return previousStepButtonText;
    }

    return closeButtonText;
  };

  var getTitle = function getTitle() {
    if (editing && editSuccess) {
      return editSuccessTitle;
    }

    if (apiKeyLoaded) {
      return generateSuccessTitle;
    }

    if (hasSteps) {
      return customSteps[currentStep].title;
    }

    return generateTitle;
  };

  var setNameHandler = function setNameHandler(evt) {
    setName(evt.target.value);
  };

  var onCloseHandler = function onCloseHandler() {
    setName('');
    setCurrentStep(0);
    onClose();
  };

  var submitHandler = /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!hasNextStep) {
                _context.next = 4;
                break;
              }

              setCurrentStep(currentStep + 1);
              _context.next = 21;
              break;

            case 4:
              if (!apiKeyLoaded) {
                _context.next = 20;
                break;
              }

              if (!onCopy) {
                _context.next = 9;
                break;
              }

              onCopy(apiKey);
              _context.next = 18;
              break;

            case 9:
              _context.prev = 9;
              _context.next = 12;
              return navigator.clipboard.writeText(apiKey);

            case 12:
              _context.next = 18;
              break;

            case 14:
              _context.prev = 14;
              _context.t0 = _context["catch"](9);
              console.error(_context.t0);
              setCopyError(true);

            case 18:
              _context.next = 21;
              break;

            case 20:
              if (editing) {
                onRequestEdit(name);
              } else {
                onRequestGenerate(name);
              }

            case 21:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[9, 14]]);
    }));

    return function submitHandler() {
      return _ref2.apply(this, arguments);
    };
  }();

  var onBackHandler = function onBackHandler() {
    if (hasPreviousStep && !apiKeyLoaded) {
      setCurrentStep(currentStep - 1);
    } else {
      onCloseHandler();
    }
  };

  return /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.ComposedModal, (0, _extends2.default)({}, rest, _objectSpread({
    open: open,
    ref: ref
  }, (0, _devtools.getDevtoolsProps)(componentName)), {
    className: (0, _classnames.default)(className, blockClass),
    onClose: onCloseHandler,
    size: "sm",
    "aria-label": modalLabel,
    preventCloseOnClickOutside: true
  }), /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.ModalHeader, {
    className: "".concat(blockClass, "__header"),
    title: getTitle(),
    label: modalLabel
  }), /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.ModalBody, {
    className: "".concat(blockClass, "__body-container")
  }, hasSteps && !apiKeyLoaded ? customSteps[currentStep].content : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, body && /*#__PURE__*/_react.default.createElement("p", {
    className: "".concat(blockClass, "__body")
  }, body), !editing && apiKey && hasAPIKeyVisibilityToggle && /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.PasswordInput, {
    value: apiKey,
    labelText: apiKeyLabel,
    id: apiKeyInputId.current,
    showPasswordLabel: showAPIKeyLabel,
    hidePasswordLabel: hideAPIKeyLabel,
    tooltipPosition: "left"
  }), !editing && apiKey && !hasAPIKeyVisibilityToggle && /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.TextInput, {
    value: apiKey,
    labelText: apiKeyLabel,
    id: apiKeyInputId.current
  }), (editing || !apiKeyLoaded && nameRequired) && /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.Form, {
    onSubmit: submitHandler
  }, /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.TextInput, {
    helperText: nameHelperText,
    placeholder: namePlaceholder,
    labelText: nameLabel,
    onChange: setNameHandler,
    value: name,
    id: nameInputId.current,
    disabled: loading,
    ref: inputRef,
    required: nameRequired
  })), loading && /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.InlineLoading, {
    description: loadingText,
    className: "".concat(blockClass, "__loader")
  }), (copyError || error) && /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(blockClass, "__messaging")
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(blockClass, "__error-icon")
  }, /*#__PURE__*/_react.default.createElement(_iconsReact.ErrorFilled16, null)), /*#__PURE__*/_react.default.createElement("p", {
    className: "".concat(blockClass, "__messaging-text")
  }, copyError ? copyErrorText : errorText)), apiKeyLoaded && /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(blockClass, "__messaging")
  }, /*#__PURE__*/_react.default.createElement(_iconsReact.InformationFilled16, null), hasDownloadLink ? /*#__PURE__*/_react.default.createElement(_APIKeyDownloader.APIKeyDownloader, {
    apiKey: apiKey,
    body: downloadBodyText,
    fileName: downloadFileName,
    linkText: downloadLinkText,
    fileType: downloadFileType
  }) : /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(blockClass, "__messaging-text")
  }, generateSuccessBody)))), /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.ModalFooter, {
    className: "".concat(blockClass, "__footer")
  }, /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.Button, {
    type: "button",
    kind: "secondary",
    onClick: onBackHandler
  }, getSecondaryButtonText()), /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.Button, (0, _extends2.default)({}, apiKeyLoaded ? copyButtonProps : {}, {
    type: "submit",
    kind: "primary",
    onClick: submitHandler,
    disabled: isPrimaryButtonDisabled()
  }), getPrimaryButtonText())));
});
exports.APIKeyModal = APIKeyModal;

var customStepsRequiredProps = function customStepsRequiredProps(type) {
  return (0, _propsHelper.isRequiredIf)(type, function (_ref3) {
    var customSteps = _ref3.customSteps;
    return customSteps && customSteps.length > 1;
  });
};

var editRequiredProps = function editRequiredProps(type) {
  return (0, _propsHelper.isRequiredIf)(type, function (_ref4) {
    var editing = _ref4.editing;
    return editing;
  });
};

var downloadRequiredProps = function downloadRequiredProps(type) {
  return (0, _propsHelper.isRequiredIf)(type, function (_ref5) {
    var hasDownloadLink = _ref5.hasDownloadLink;
    return hasDownloadLink;
  });
}; // Return a placeholder if not released and not enabled by feature flag


exports.APIKeyModal = APIKeyModal = _settings.pkg.checkComponentEnabled(APIKeyModal, componentName);
APIKeyModal.propTypes = {
  /**
   * the api key that's displayed to the user when a request to create is fulfilled.
   */
  apiKey: _propTypes.default.string,

  /**
   * label for the text input that holds the api key.
   */
  apiKeyLabel: _propTypes.default.string,

  /**
   * the name of the api key. should only be supplied in edit mode.
   */
  apiKeyName: _propTypes.default.string,

  /**
   * body content for the modal
   */
  body: _propTypes.default.string,

  /**
   * optional class name
   */
  className: _propTypes.default.string,

  /**
   * text for the close button
   */
  closeButtonText: _propTypes.default.string,

  /**
   * text for the copy button
   */
  copyButtonText: _propTypes.default.string,

  /**
   * Error message for when the copy function fails
   */
  copyErrorText: _propTypes.default.string,

  /**
   * text description for the copy button icon
   */
  copyIconDescription: _propTypes.default.string,

  /**
   * if you need more options for key creation beyond just the name use custom steps to obtain whatever data is required.
   */
  customSteps: _propTypes.default.arrayOf(_propTypes.default.shape({
    /**
     * designates if the step has passed whatever validation rules are in place.
     */
    valid: _propTypes.default.bool,

    /**
     * designates content is the JSX that holds whatever inputs you need
     */
    content: _propTypes.default.node,

    /**
     * designates the title that's displayed at the top of the modal for each step
     */
    title: _propTypes.default.string
  })),

  /**
   * the content that appears that indicates the key is downloadable
   */
  downloadBodyText: downloadRequiredProps(_propTypes.default.string),

  /**
   * designates the name of downloadable json file with the key. if not specified will default to 'apikey'
   */
  downloadFileName: downloadRequiredProps(_propTypes.default.string),

  /**
   * designates the file type for the downloadable key
   */
  downloadFileType: downloadRequiredProps(_propTypes.default.oneOf(['txt', 'json'])),

  /**
   * anchor text for the download link
   */
  downloadLinkText: downloadRequiredProps(_propTypes.default.string),

  /**
   * text for the edit button
   */
  editButtonText: editRequiredProps(_propTypes.default.string),

  /**
   * designates if the edit request was successful
   */
  editSuccess: editRequiredProps(_propTypes.default.bool),

  /**
   * title for a successful edit
   */
  editSuccessTitle: editRequiredProps(_propTypes.default.string),

  /**
   * designates if the modal is in the edit mode
   */
  editing: _propTypes.default.bool,

  /**
   * designates if an error has occurred in a request
   */
  error: _propTypes.default.bool,

  /**
   * text to display if an error has occurred
   */
  errorText: _propTypes.default.string,

  /**
   * default primary button text for modal in assumed default mode create or generate.
   * in create mode this is the button text prior to supplying an api key, which then
   * uses copyButtonText
   */
  generateButtonText: _propTypes.default.string,

  /**
   * content to display if generate request was successful
   */
  generateSuccessBody: _propTypes.default.node,

  /**
   * title for a successful key generation
   */
  generateSuccessTitle: _propTypes.default.string,

  /**
   * default title for the modal in generate key mode
   */
  generateTitle: _propTypes.default.string,

  /**
   * designates if the api input has the visibility toggle enabled
   */
  hasAPIKeyVisibilityToggle: _propTypes.default.bool,

  /**
   * designates if user is able to download the api key
   */
  hasDownloadLink: _propTypes.default.bool,

  /**
   * label text that's displayed when hovering over visibility toggler to hide key
   */
  hideAPIKeyLabel: _propTypes.default.string,

  /**
   * designates if the modal is in a loading state via a request or some other in progress operation
   */
  loading: _propTypes.default.bool,

  /**
   * text that displays while modal is in the loading state
   */
  loadingText: _propTypes.default.string,

  /**
   * general label text for modal
   */
  modalLabel: _propTypes.default.string,

  /**
   * helper text for name input
   */
  nameHelperText: _propTypes.default.string,

  /**
   * label for api key name input
   */
  nameLabel: _propTypes.default.string,

  /**
   * placeholder text for api key name input
   */
  namePlaceholder: _propTypes.default.string,

  /**
   * designates if a name is required or not for key generation. NOTE- if using custom steps set this to false since you will be using your own validation
   */
  nameRequired: _propTypes.default.bool,

  /**
   * text that displays in the primary button when using custom steps to indicate to the user that there is a next step
   */
  nextStepButtonText: customStepsRequiredProps(_propTypes.default.string),

  /**
   * handler for on modal close
   */
  onClose: _propTypes.default.func,

  /**
   * Optional callback if you want to use your own copy function instead of the build in one
   * onCopy(apiKey)
   */
  onCopy: _propTypes.default.func,

  /**
   * handler for api key edit
   */
  onRequestEdit: _propTypes.default.func,

  /**
   * handler for api key generation
   */
  onRequestGenerate: _propTypes.default.func,

  /**
   * designates if modal is open or closed
   */
  open: _propTypes.default.bool.isRequired,

  /**
   * text that displays in the secondary button when using custom steps to indicate to the user that there is a previous step
   */
  previousStepButtonText: customStepsRequiredProps(_propTypes.default.string),

  /**
   * label text that's displayed when hovering over visibility toggler to show key
   */
  showAPIKeyLabel: _propTypes.default.string
};
APIKeyModal.defaultProps = {
  apiKeyName: '',
  customSteps: [],
  error: false,
  hasAPIKeyVisibilityToggle: false,
  hasDownloadLink: false,
  loading: false,
  nameRequired: false,
  open: false
};
APIKeyModal.displayName = componentName;