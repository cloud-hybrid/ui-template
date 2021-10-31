"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WebTerminal = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _settings = require("../../settings");

var _iconsReact = require("@carbon/icons-react");

var _carbonComponentsReact = require("carbon-components-react");

var _excluded = ["children", "className", "closeTerminal", "documentationLinks", "documentationLinksIconDescription", "open", "actions", "closeIconDescription"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// The block part of our conventional BEM class names (blockClass__E--M).
var componentName = 'WebTerminal';
var blockClass = "".concat(_settings.pkg.prefix, "--web-terminal");

var WebTerminal = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var _ref2;

  var children = _ref.children,
      className = _ref.className,
      closeTerminal = _ref.closeTerminal,
      documentationLinks = _ref.documentationLinks,
      documentationLinksIconDescription = _ref.documentationLinksIconDescription,
      open = _ref.open,
      actions = _ref.actions,
      closeIconDescription = _ref.closeIconDescription,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);

  var _useState = (0, _react.useState)(open),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      shouldRender = _useState2[0],
      setRender = _useState2[1];
  /**
   * Triggers whenever the user clicks on an item in the help dropdown
   */


  var onDocumentationLinkClick = (0, _react.useCallback)(function (event, onClick) {
    // Runs the function provided by the user if it exists
    if (typeof onClick === 'function') {
      // Passes the event object incase the developer wants to event.preventDefault() the link redirect
      onClick(event);
    }
  }, []);
  var showDocumentationLinks = (0, _react.useMemo)(function () {
    return documentationLinks.length > 0;
  }, [documentationLinks]);
  (0, _react.useEffect)(function () {
    if (open) {
      setRender(true);
    }
  }, [open]);

  var onAnimationEnd = function onAnimationEnd() {
    if (!open) {
      setRender(false);
    }
  };

  return shouldRender ? /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, rest, {
    ref: ref,
    className: (0, _classnames.default)([blockClass, (_ref2 = {}, (0, _defineProperty2.default)(_ref2, "".concat(blockClass, "--open"), open), (0, _defineProperty2.default)(_ref2, "".concat(blockClass, "--closed"), !open), (0, _defineProperty2.default)(_ref2, className, className), _ref2)]),
    style: {
      animation: "".concat(open ? 'webTerminalEntrance 250ms' : 'webTerminalExit 250ms')
    },
    onAnimationEnd: onAnimationEnd
  }), /*#__PURE__*/_react.default.createElement("header", {
    className: "".concat(blockClass, "__bar")
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(blockClass, "__actions")
  }, showDocumentationLinks && /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.Button, {
    hasIconOnly: true,
    kind: "ghost",
    type: "button",
    iconDescription: documentationLinksIconDescription,
    renderIcon: _iconsReact.Help16,
    className: "".concat(blockClass, "__bar-icon-container")
  }, /*#__PURE__*/_react.default.createElement("ul", {
    className: "".concat(blockClass, "__bar-icon-dropdown")
  }, documentationLinks.map(function (_ref3) {
    var label = _ref3.label,
        _onClick = _ref3.onClick,
        _ref3$href = _ref3.href,
        href = _ref3$href === void 0 ? null : _ref3$href,
        _ref3$openInNewTab = _ref3.openInNewTab,
        openInNewTab = _ref3$openInNewTab === void 0 ? true : _ref3$openInNewTab;
    return /*#__PURE__*/_react.default.createElement("li", {
      key: label,
      className: "".concat(blockClass, "__bar-icon-dropdown-item")
    }, /*#__PURE__*/_react.default.createElement("a", {
      className: "".concat(blockClass, "__bar-icon-dropdown-link"),
      onClick: function onClick(event) {
        return onDocumentationLinkClick(event, _onClick);
      },
      href: href,
      target: openInNewTab ? '_blank' : null,
      rel: "noreferrer noopener"
    }, label));
  }))), actions.map(function (_ref4) {
    var renderIcon = _ref4.renderIcon,
        onClick = _ref4.onClick,
        iconDescription = _ref4.iconDescription;
    return /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.Button, {
      key: iconDescription,
      hasIconOnly: true,
      renderIcon: renderIcon,
      onClick: onClick,
      iconDescription: iconDescription,
      kind: "ghost"
    });
  })), /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.Button, {
    hasIconOnly: true,
    renderIcon: _iconsReact.Close16,
    kind: "ghost",
    iconDescription: closeIconDescription,
    onClick: closeTerminal
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(blockClass, "__body")
  }, children)) : null;
}); // Return a placeholder if not released and not enabled by feature flag


exports.WebTerminal = WebTerminal;
exports.WebTerminal = WebTerminal = _settings.pkg.checkComponentEnabled(WebTerminal, componentName); // The display name of the component, used by React. Note that displayName
// is used in preference to relying on function.name.

WebTerminal.displayName = componentName; // The types and DocGen commentary for the component props,
// in alphabetical order (for consistency).
// See https://www.npmjs.com/package/prop-types#usage.

WebTerminal.propTypes = {
  /**
   * An array of actions to be displayed in the web terminal header bar
   */
  actions: _propTypes.default.arrayOf(_propTypes.default.shape({
    renderIcon: _propTypes.default.object.isRequired,
    onClick: _propTypes.default.func.isRequired,
    iconDescription: _propTypes.default.string.isRequired
  })),

  /**
   * Provide your own terminal component as children to show up in the web terminal
   */
  children: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.node), _propTypes.default.node]).isRequired,

  /**
   * Custom classname for additional styling of the web terminal
   */
  className: _propTypes.default.string,

  /**
   * Icon description for the close button
   */
  closeIconDescription: _propTypes.default.string,

  /**
   * Function that should set the open prop to false
   */
  closeTerminal: _propTypes.default.func.isRequired,

  /**
   * Array of objects for each documentation link
   */
  documentationLinks: _propTypes.default.arrayOf(_propTypes.default.shape({
    label: _propTypes.default.string.isRequired,
    href: _propTypes.default.string,
    onClick: _propTypes.default.func,
    openInNewTab: _propTypes.default.bool
  })),

  /**
   * Array of objects for each documentation link
   */
  documentationLinksIconDescription: _propTypes.default.string,

  /**
   * Boolean that determines if the web terminal is opened or closed
   */
  open: _propTypes.default.bool.isRequired
}; // Default values for component props. Default values are not required for
// props that are required, nor for props where the component can apply
// 'undefined' values reasonably. Default values should be provided when the
// component needs to make a choice or assumption when a prop is not supplied.

WebTerminal.defaultProps = {
  actions: [],
  closeIconDescription: 'Close terminal',
  documentationLinks: [],
  documentationLinksIconDescription: 'Show documentation links',
  className: ''
};