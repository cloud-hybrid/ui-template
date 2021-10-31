"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductiveCard = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Card = require("../Card");

var _devtools = require("../../global/js/utils/devtools");

var _propsHelper = require("../../global/js/utils/props-helper");

var _settings = require("../../settings");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

//
// Copyright IBM Corp. 2020, 2021
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//
var componentName = 'ProductiveCard';
var ProductiveCard = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  var validProps = (0, _propsHelper.prepareProps)(props, ['media', 'mediaPosition', 'onSecondaryButtonClick', 'pictogram', 'primaryButtonClick', 'productive', 'secondaryButtonKind', 'secondaryButtonText']);
  return /*#__PURE__*/_react.default.createElement(_Card.Card, (0, _extends2.default)({}, validProps, {
    ref: ref,
    productive: true
  }, (0, _devtools.getDevtoolsProps)(componentName)));
}); // Return a placeholder if not released and not enabled by feature flag

exports.ProductiveCard = ProductiveCard;
exports.ProductiveCard = ProductiveCard = _settings.pkg.checkComponentEnabled(ProductiveCard, componentName);
ProductiveCard.propTypes = {
  /**
   * Icons that are displayed on card. Refer to design documentation for implementation guidelines
   */
  actionIcons: _propTypes.default.arrayOf(_propTypes.default.shape({
    id: _propTypes.default.string,
    icon: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object]),
    onKeyDown: _propTypes.default.func,
    onClick: _propTypes.default.func,
    iconDescription: _propTypes.default.string
  })),

  /**
   * Determines if the action icons are on the top or bottom of the card
   */
  actionsPlacement: _propTypes.default.oneOf(['top', 'bottom']),

  /**
   * Content that shows in the body of the card
   */
  children: _propTypes.default.node,

  /**
   * Optional user provided class
   */
  className: _propTypes.default.string,

  /**
   * Designates which zones of the card are clickable. Refer to design documentation for implementation guidelines
   */
  clickZone: _propTypes.default.oneOf(['one', 'two', 'three']),

  /**
   * Optional header description
   */
  description: _propTypes.default.string,

  /**
   * Optional label for the top of the card
   */
  label: _propTypes.default.string,

  /**
   * Provides the callback for a clickable card
   */
  onClick: _propTypes.default.func,

  /**
   * Function that's called from the primary button or action icon
   */
  onPrimaryButtonClick: _propTypes.default.func,

  /**
   * Use an overflow menu instead of action icons. Refer to design documentation for implementation guidelines
   */
  overflowActions: _propTypes.default.arrayOf(_propTypes.default.shape({
    id: _propTypes.default.string,
    itemText: _propTypes.default.string,
    onClick: _propTypes.default.func,
    onKeyDown: _propTypes.default.func
  })),

  /**
   * Optional prop to allow overriding the icon rendering. Can be a React component class
   */
  primaryButtonHref: _propTypes.default.string,

  /**
   * Optional prop to allow overriding the icon rendering. Can be a React component class
   */
  primaryButtonIcon: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object]),

  /**
   * The text that's displayed in the primary button
   */
  primaryButtonText: _propTypes.default.string,

  /**
   * Title that's displayed at the top of the card
   */
  title: _propTypes.default.string,

  /**
   * Determines title size
   */
  titleSize: _propTypes.default.oneOf(['default', 'large'])
};
ProductiveCard.defaultProps = {
  actionIcons: [],
  actionsPlacement: 'top',
  clickZone: 'one',
  overflowActions: [],
  titleSize: 'default'
};
ProductiveCard.displayName = componentName;