"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AboutModal = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _reactResizeDetector = require("react-resize-detector");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _settings = require("../../settings");

var _uuidv = _interopRequireDefault(require("../../global/js/utils/uuidv4"));

var _devtools = require("../../global/js/utils/devtools");

var _carbonComponentsReact = require("carbon-components-react");

var _excluded = ["additionalInfo", "className", "closeIconDescription", "content", "copyrightText", "legalText", "links", "logo", "onClose", "open", "title"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// The block part of our conventional BEM class names (blockClass__E--M).
var blockClass = "".concat(_settings.pkg.prefix, "--about-modal");
var componentName = 'AboutModal'; // NOTE: the component SCSS is not imported here: it is rolled up separately.

/**
 * The AboutModal component provides a way to communicate product information
 * to users. It is triggered by a user’s action, appears on top of the main
 * page content, and is persistent until dismissed. The purpose of this modal
 * should be immediately apparent to the user, with a clear and obvious path
 * to completion.
 */

var AboutModal = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var additionalInfo = _ref.additionalInfo,
      className = _ref.className,
      closeIconDescription = _ref.closeIconDescription,
      content = _ref.content,
      copyrightText = _ref.copyrightText,
      legalText = _ref.legalText,
      links = _ref.links,
      logo = _ref.logo,
      onClose = _ref.onClose,
      open = _ref.open,
      title = _ref.title,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);

  var _useState = (0, _react.useState)(true),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      hasScrollingContent = _useState2[0],
      setHasScrollingContent = _useState2[1];

  var bodyRef = (0, _react.useRef)();
  var contentRef = (0, _react.useRef)();
  var contentId = (0, _uuidv.default)();

  var handleResize = function handleResize() {
    setHasScrollingContent( // if our scroll height exceeds the client height enable scrolling
    bodyRef.current.clientHeight < (hasScrollingContent ? // Carbon modal adds 32px bottom margin when scrolling content is enabled
    bodyRef.current.scrollHeight - 32 : bodyRef.current.scrollHeight));
  }; // We can't add a ref directly to the ModalBody, so track it in a ref
  // as the parent of the current bodyRef element


  (0, _react.useEffect)(function () {
    bodyRef.current = contentRef.current.parentElement;
  }, [bodyRef]); // Detect resize of the ModalBody to recalculate whether scrolling is enabled

  (0, _reactResizeDetector.useResizeDetector)({
    onResize: handleResize,
    targetRef: bodyRef
  });
  return /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.ComposedModal, (0, _extends2.default)({}, rest, {
    className: (0, _classnames.default)(blockClass, // Apply the block class to the main HTML element
    className, // Apply any supplied class names to the main HTML element.
    (0, _defineProperty2.default)({}, "".concat(blockClass, "--with-tabs"), additionalInfo && additionalInfo.length > 1))
  }, _objectSpread({
    onClose: onClose,
    open: open,
    ref: ref
  }, (0, _devtools.getDevtoolsProps)(componentName))), /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(blockClass, "__logo")
  }, logo), /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.ModalHeader, {
    className: "".concat(blockClass, "__header"),
    iconDescription: closeIconDescription,
    label: title,
    labelClassName: "".concat(blockClass, "__title")
  }), /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.ModalBody, {
    "aria-label": hasScrollingContent ? '' : null,
    "aria-labelledby": hasScrollingContent ? contentId : null,
    className: "".concat(blockClass, "__body"),
    hasScrollingContent: hasScrollingContent
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(blockClass, "__body-content"),
    ref: contentRef,
    id: contentId
  }, content, /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(blockClass, "__links-container")
  }, links && links.length > 0 && links.map(function (link, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, link);
  })), legalText && /*#__PURE__*/_react.default.createElement("p", {
    className: "".concat(blockClass, "__legal-text")
  }, legalText), copyrightText && /*#__PURE__*/_react.default.createElement("p", {
    className: "".concat(blockClass, "__copyright-text")
  }, copyrightText))), /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.ModalFooter, {
    className: "".concat(blockClass, "__footer")
  }, additionalInfo && additionalInfo.length > 0 && (additionalInfo.length === 1 ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("p", {
    className: "".concat(blockClass, "__version-label")
  }, additionalInfo[0].label), /*#__PURE__*/_react.default.createElement("p", {
    className: "".concat(blockClass, "__version-number")
  }, additionalInfo[0].content)) : /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.Tabs, {
    className: "".concat(blockClass, "__tab-container")
  }, additionalInfo.map(function (tab, i) {
    return /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.Tab, {
      id: 'about-modal-tab-' + tab.label,
      label: tab.label,
      key: i
    }, tab.content);
  })))));
}); // Return a placeholder if not released and not enabled by feature flag


exports.AboutModal = AboutModal;
exports.AboutModal = AboutModal = _settings.pkg.checkComponentEnabled(AboutModal, componentName);
AboutModal.displayName = componentName; // The types and DocGen commentary for the component props,
// in alphabetical order (for consistency).
// See https://www.npmjs.com/package/prop-types#usage.

AboutModal.propTypes = {
  /**
   * Additional information to be displayed in the footer. Can be used for
   * version information and/or a set of tabs with various contents. If only
   * one set of additional information is provided then no tabs are
   * displayed and the label and content are just displayed one above the
   * other in the footer.
   */
  additionalInfo: _propTypes.default.arrayOf(_propTypes.default.shape({
    label: _propTypes.default.string,
    content: _propTypes.default.node
  })),

  /**
   * Provide an optional class to be applied to the modal root node.
   */
  className: _propTypes.default.string,

  /**
   * The accessibility title for the close icon.
   */
  closeIconDescription: _propTypes.default.string.isRequired,

  /**
   * A summary that appears immediately beneath the title, and might
   * include information such as: version name, server name,
   * user name, user role, browser version, browser OS etc.
   */
  content: _propTypes.default.node.isRequired,

  /**
   * Trademark and copyright information. Suggested format for copyright -
   * "Copyright © 2018 Company".
   */
  copyrightText: _propTypes.default.node,

  /**
   * Text providing legal information.
   */
  legalText: _propTypes.default.node,

  /**
   * An array of Carbon `Link` components that contain links to additional
   * information.
   */
  links: _propTypes.default.arrayOf(_propTypes.default.element),

  /**
   * A visual symbol used to represent the product.
   */
  logo: _propTypes.default.node.isRequired,

  /**
   * Specifies an optional handler which is called when the AboutModal
   * is closed. Returning `false` prevents the AboutModal from closing.
   */
  onClose: _propTypes.default.func,

  /**
   * Specifies whether the AboutModal is open or not.
   */
  open: _propTypes.default.bool,

  /**
   * The title of the AboutModal is usually the product or service name.
   */
  title: _propTypes.default.node.isRequired
};