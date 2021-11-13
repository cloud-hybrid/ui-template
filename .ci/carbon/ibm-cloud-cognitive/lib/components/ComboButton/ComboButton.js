"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ComboButton = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _toArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _ = _interopRequireDefault(require("@carbon/icons-react/lib/chevron--down/16"));

var _2 = _interopRequireDefault(require("@carbon/icons-react/lib/chevron--up/16"));

var _carbonComponentsReact = require("carbon-components-react");

var _OverflowMenu = require("carbon-components-react/lib/components/OverflowMenu/OverflowMenu");

var _setupGetInstanceId = _interopRequireDefault(require("carbon-components-react/lib/tools/setupGetInstanceId"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = require("prop-types");

var _react = _interopRequireWildcard(require("react"));

var _excluded = ["children", "className", "overflowMenu"],
    _excluded2 = ["children"],
    _excluded3 = ["children", "renderIcon"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var getInstanceId = (0, _setupGetInstanceId.default)();
var blockClass = 'security--combo-button';
/**
 * The combo button consolidates similar actions, while exposing the most commonly used one.
 */

var ComboButton = function ComboButton(_ref) {
  var children = _ref.children,
      className = _ref.className,
      overflowMenu = _ref.overflowMenu,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);

  var _useRef = (0, _react.useRef)(getInstanceId()),
      instanceId = _useRef.current;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var _Children$toArray$fil = _react.Children.toArray(children).filter(Boolean).map(function (_ref2) {
    var _ref2$props = _ref2.props,
        children = _ref2$props.children,
        props = (0, _objectWithoutProperties2.default)(_ref2$props, _excluded2);
    return _objectSpread(_objectSpread({}, props), {}, {
      children: /*#__PURE__*/_react.default.createElement("span", {
        className: "".concat(blockClass, "__action"),
        title: children
      }, children)
    });
  }),
      _Children$toArray$fil2 = (0, _toArray2.default)(_Children$toArray$fil),
      primaryAction = _Children$toArray$fil2[0],
      restActions = _Children$toArray$fil2.slice(1);

  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, rest, {
    className: (0, _classnames.default)(blockClass, className),
    "data-floating-menu-container": true
  }), /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.Button, primaryAction), restActions.length > 0 && /*#__PURE__*/_react.default.createElement(_OverflowMenu.OverflowMenu, (0, _extends2.default)({}, overflowMenu, {
    className: "".concat(blockClass, "__overflow-menu"),
    menuOptionsClass: "".concat(blockClass, "__overflow-menu__list"),
    onClick: function onClick() {
      return !isOpen && setIsOpen(true);
    },
    onClose: function onClose() {
      return setIsOpen(false);
    },
    renderIcon: function renderIcon() {
      return /*#__PURE__*/(0, _react.createElement)(isOpen ? _2.default : _.default, {
        className: "".concat(blockClass, "__overflow-menu__icon")
      });
    },
    flipped: true
  }), restActions.map(function (_ref3, index) {
    var children = _ref3.children,
        Icon = _ref3.renderIcon,
        action = (0, _objectWithoutProperties2.default)(_ref3, _excluded3);
    return /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.OverflowMenuItem, (0, _extends2.default)({}, action, {
      key: "".concat(blockClass, "--").concat(instanceId, "__overflow-menu__item__").concat(index),
      className: "".concat(blockClass, "__overflow-menu__item"),
      itemText: /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, children, Icon && /*#__PURE__*/_react.default.createElement("span", {
        className: "".concat(blockClass, "__overflow-menu__item__icon")
      }, /*#__PURE__*/_react.default.createElement(Icon, null)))
    }));
  })));
};

exports.ComboButton = ComboButton;
ComboButton.propTypes = {
  /** Provide the contents of the `ComboButton` */
  children: _propTypes.node.isRequired,

  /** Provide an optional class to be applied to the containing node */
  className: _propTypes.string,

  /** Provide the [props of the `OverflowMenu`](https://react.carbondesignsystem.com/?path=/docs/overflowmenu) */
  overflowMenu: (0, _propTypes.shape)(_OverflowMenu.OverflowMenu.propTypes)
};
ComboButton.defaultProps = {
  className: null,
  overflowMenu: _OverflowMenu.OverflowMenu.defaultProps
};