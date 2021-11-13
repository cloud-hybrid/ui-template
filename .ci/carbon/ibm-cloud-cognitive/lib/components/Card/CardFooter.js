"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardFooter = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _carbonComponentsReact = require("carbon-components-react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _settings = require("../../settings");

//
// Copyright IBM Corp. 2020, 2021
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//
var componentName = 'CardFooter';

var CardFooter = function CardFooter(_ref) {
  var actions = _ref.actions,
      hasActions = _ref.hasActions,
      hasButton = _ref.hasButton,
      onPrimaryButtonClick = _ref.onPrimaryButtonClick,
      onSecondaryButtonClick = _ref.onSecondaryButtonClick,
      primaryButtonHref = _ref.primaryButtonHref,
      primaryButtonIcon = _ref.primaryButtonIcon,
      primaryButtonKind = _ref.primaryButtonKind,
      primaryButtonText = _ref.primaryButtonText,
      productive = _ref.productive,
      secondaryButtonHref = _ref.secondaryButtonHref,
      secondaryButtonIcon = _ref.secondaryButtonIcon,
      secondaryButtonKind = _ref.secondaryButtonKind,
      secondaryButtonText = _ref.secondaryButtonText;
  var blockClass = "".concat(_settings.pkg.prefix, "--card");
  var footerClass = "".concat(_settings.pkg.prefix, "--card__footer");
  var footerClasses = (0, _classnames.default)(footerClass, (0, _defineProperty2.default)({}, "".concat(footerClass, "-no-button"), !hasButton));
  return /*#__PURE__*/_react.default.createElement("div", {
    className: footerClasses
  }, secondaryButtonText && /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.Button, {
    kind: secondaryButtonKind,
    onClick: onSecondaryButtonClick,
    size: "field",
    renderIcon: secondaryButtonIcon,
    href: secondaryButtonHref
  }, secondaryButtonText), primaryButtonText && /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.Button, {
    kind: productive ? 'ghost' : primaryButtonKind,
    onClick: onPrimaryButtonClick,
    size: "field",
    renderIcon: primaryButtonIcon,
    href: primaryButtonHref
  }, primaryButtonText), hasActions && /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(blockClass, "__actions")
  }, actions));
};

exports.CardFooter = CardFooter;
CardFooter.propTypes = {
  actions: _propTypes.default.oneOfType([_propTypes.default.array, _propTypes.default.node]),
  hasActions: _propTypes.default.bool,
  hasButton: _propTypes.default.bool,
  onPrimaryButtonClick: _propTypes.default.func,
  onSecondaryButtonClick: _propTypes.default.func,
  primaryButtonHref: _propTypes.default.string,
  primaryButtonIcon: _propTypes.default.string,
  primaryButtonKind: _propTypes.default.oneOf(['primary', 'ghost']),
  primaryButtonText: _propTypes.default.string,
  productive: _propTypes.default.bool,
  secondaryButtonHref: _propTypes.default.string,
  secondaryButtonIcon: _propTypes.default.string,
  secondaryButtonKind: _propTypes.default.oneOf(['secondary', 'ghost']),
  secondaryButtonText: _propTypes.default.string
};
CardFooter.defaultProps = {
  actions: [],
  primaryButtonKind: 'primary',
  productive: false,
  secondaryButtonKind: 'secondary'
};
CardFooter.displayName = componentName;