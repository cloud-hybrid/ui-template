"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ActionBarOverflowItems = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _carbonComponentsReact = require("carbon-components-react");

var _uuidv = _interopRequireDefault(require("../../global/js/utils/uuidv4"));

var _settings = require("../../settings");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

//
// Copyright IBM Corp. 2020, 2021
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//
// Import portions of React that are needed.
// Other standard imports.
// Carbon and package components we use.
// The block part of our conventional BEM class names (blockClass__E--M).
var blockClass = "".concat(_settings.pkg.prefix, "--action-bar-overflow-items");
var componentName = 'ActionBar';

var ActionBarOverflowItems = function ActionBarOverflowItems(_ref) {
  var className = _ref.className,
      overflowItems = _ref.overflowItems,
      overflowAriaLabel = _ref.overflowAriaLabel;
  var internalId = (0, _react.useRef)((0, _uuidv.default)());
  return /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.OverflowMenu, {
    ariaLabel: overflowAriaLabel,
    className: (0, _classnames.default)(blockClass, className),
    direction: "bottom",
    flipped: true,
    menuOptionsClass: "".concat(blockClass, "__options")
  }, _react.default.Children.map(overflowItems, function (item) {
    // This uses a copy of a menu item option
    // NOTE: Cannot use a real Tooltip icon below as it uses a <button /> the
    // div equivalent below is based on Carbon 10.25.0
    return /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.OverflowMenuItem, {
      className: "".concat(blockClass, "__item"),
      itemText: /*#__PURE__*/_react.default.createElement("div", {
        className: "".concat(blockClass, "__item-content"),
        "aria-describedby": "".concat(internalId, "--item-label")
      }, /*#__PURE__*/_react.default.createElement("span", {
        className: "".concat(blockClass, "__item-label"),
        id: "".concat(internalId, "--item-label")
      }, item.props.iconDescription), /*#__PURE__*/_react.default.createElement(item.props.renderIcon, null))
    });
  }));
};

exports.ActionBarOverflowItems = ActionBarOverflowItems;
ActionBarOverflowItems.displayName = componentName;
ActionBarOverflowItems.propTypes = {
  // expects action bar item as array or in fragment,

  /**
   * className
   */
  className: _propTypes.default.string,

  /**
   * overflowAriaLabel label for open close button overflow used for action bar items that do nto fit.
   */
  overflowAriaLabel: _propTypes.default.string,

  /**
   * overflowItems: items to bre shown in the ActionBar overflow menu
   */
  overflowItems: _propTypes.default.arrayOf(_propTypes.default.element)
};