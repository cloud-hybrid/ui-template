import _defineProperty from "@babel/runtime/helpers/defineProperty";
//
// Copyright IBM Corp. 2020, 2021
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//
import React from 'react';
import cx from 'classnames';
import { Button } from 'carbon-components-react';
import PropTypes from 'prop-types';
import { pkg } from '../../settings';
var componentName = 'CardFooter';
export var CardFooter = function CardFooter(_ref) {
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
  var blockClass = "".concat(pkg.prefix, "--card");
  var footerClass = "".concat(pkg.prefix, "--card__footer");
  var footerClasses = cx(footerClass, _defineProperty({}, "".concat(footerClass, "-no-button"), !hasButton));
  return /*#__PURE__*/React.createElement("div", {
    className: footerClasses
  }, secondaryButtonText && /*#__PURE__*/React.createElement(Button, {
    kind: secondaryButtonKind,
    onClick: onSecondaryButtonClick,
    size: "field",
    renderIcon: secondaryButtonIcon,
    href: secondaryButtonHref
  }, secondaryButtonText), primaryButtonText && /*#__PURE__*/React.createElement(Button, {
    kind: productive ? 'ghost' : primaryButtonKind,
    onClick: onPrimaryButtonClick,
    size: "field",
    renderIcon: primaryButtonIcon,
    href: primaryButtonHref
  }, primaryButtonText), hasActions && /*#__PURE__*/React.createElement("div", {
    className: "".concat(blockClass, "__actions")
  }, actions));
};
CardFooter.propTypes = {
  actions: PropTypes.oneOfType([PropTypes.array, PropTypes.node]),
  hasActions: PropTypes.bool,
  hasButton: PropTypes.bool,
  onPrimaryButtonClick: PropTypes.func,
  onSecondaryButtonClick: PropTypes.func,
  primaryButtonHref: PropTypes.string,
  primaryButtonIcon: PropTypes.string,
  primaryButtonKind: PropTypes.oneOf(['primary', 'ghost']),
  primaryButtonText: PropTypes.string,
  productive: PropTypes.bool,
  secondaryButtonHref: PropTypes.string,
  secondaryButtonIcon: PropTypes.string,
  secondaryButtonKind: PropTypes.oneOf(['secondary', 'ghost']),
  secondaryButtonText: PropTypes.string
};
CardFooter.defaultProps = {
  actions: [],
  primaryButtonKind: 'primary',
  productive: false,
  secondaryButtonKind: 'secondary'
};
CardFooter.displayName = componentName;