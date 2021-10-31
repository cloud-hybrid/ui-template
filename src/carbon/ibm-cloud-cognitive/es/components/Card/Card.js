import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["actionIcons", "actionsPlacement", "children", "className", "clickZone", "description", "label", "media", "mediaPosition", "onClick", "onKeyDown", "onPrimaryButtonClick", "overflowActions", "onSecondaryButtonClick", "pictogram", "primaryButtonIcon", "primaryButtonKind", "primaryButtonText", "productive", "secondaryButtonIcon", "secondaryButtonKind", "secondaryButtonText", "title", "titleSize"],
    _excluded2 = ["id"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

//
// Copyright IBM Corp. 2020, 2021
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//
import React, { forwardRef } from 'react';
import cx from 'classnames';
import { Button, OverflowMenu, OverflowMenuItem } from 'carbon-components-react';
import PropTypes from 'prop-types';
import { CardHeader } from './CardHeader';
import { CardFooter } from './CardFooter';
import { pkg } from '../../settings';
var componentName = 'Card';
export var Card = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var actionIcons = _ref.actionIcons,
      actionsPlacement = _ref.actionsPlacement,
      children = _ref.children,
      className = _ref.className,
      clickZone = _ref.clickZone,
      description = _ref.description,
      label = _ref.label,
      media = _ref.media,
      mediaPosition = _ref.mediaPosition,
      onClick = _ref.onClick,
      onKeyDown = _ref.onKeyDown,
      onPrimaryButtonClick = _ref.onPrimaryButtonClick,
      overflowActions = _ref.overflowActions,
      onSecondaryButtonClick = _ref.onSecondaryButtonClick,
      Pictogram = _ref.pictogram,
      primaryButtonIcon = _ref.primaryButtonIcon,
      primaryButtonKind = _ref.primaryButtonKind,
      primaryButtonText = _ref.primaryButtonText,
      productive = _ref.productive,
      secondaryButtonIcon = _ref.secondaryButtonIcon,
      secondaryButtonKind = _ref.secondaryButtonKind,
      secondaryButtonText = _ref.secondaryButtonText,
      title = _ref.title,
      titleSize = _ref.titleSize,
      rest = _objectWithoutProperties(_ref, _excluded);

  var blockClass = "".concat(pkg.prefix, "--card");
  var hasActions = actionIcons.length > 0 || overflowActions.length > 0;
  var hasFooterActions = hasActions && actionsPlacement === 'bottom';
  var hasFooterButton = !!secondaryButtonText || !!primaryButtonText;
  var hasBottomBar = hasFooterActions || hasFooterButton;
  var hasClickEvent = !!onClick || !!onKeyDown;
  var clickableProps = {
    onClick: onClick,
    onKeyDown: onKeyDown,
    role: 'button',
    tabIndex: '0'
  }; // actions can either be an overflow menu or series of icons

  var getActions = function getActions() {
    if (overflowActions.length > 0) {
      var pos = actionsPlacement === 'top' ? 'bottom' : 'top';
      var size = actionsPlacement === 'top' ? 'sm' : 'xl';
      return /*#__PURE__*/React.createElement(OverflowMenu, {
        size: size,
        direction: pos,
        flipped: true
      }, overflowActions.map(function (_ref2) {
        var id = _ref2.id,
            rest = _objectWithoutProperties(_ref2, _excluded2);

        return /*#__PURE__*/React.createElement(OverflowMenuItem, _extends({
          key: id
        }, rest));
      }));
    }

    var icons = actionIcons.map(function (_ref3) {
      var id = _ref3.id,
          Icon = _ref3.icon,
          onClick = _ref3.onClick,
          iconDescription = _ref3.iconDescription,
          onKeyDown = _ref3.onKeyDown;

      if (productive) {
        return /*#__PURE__*/React.createElement(Button, {
          key: id,
          renderIcon: Icon,
          hasIconOnly: true,
          onClick: onClick,
          size: actionsPlacement === 'top' ? 'sm' : 'field',
          iconDescription: iconDescription,
          kind: "ghost"
        });
      }

      return /*#__PURE__*/React.createElement("div", {
        key: id,
        className: "".concat(blockClass, "__icon"),
        onClick: onClick,
        onKeyDown: onKeyDown,
        role: "button",
        tabIndex: "0"
      }, /*#__PURE__*/React.createElement(Icon, {
        "aria-label": iconDescription
      }));
    });
    return icons;
  };

  var getCardProps = function getCardProps() {
    var _cx;

    var clickable = hasClickEvent && !productive || hasClickEvent && productive && clickZone === 'one';

    var cardProps = _objectSpread(_objectSpread({}, rest), {}, {
      ref: ref,
      className: cx(blockClass, (_cx = {}, _defineProperty(_cx, "".concat(blockClass, "__productive"), productive), _defineProperty(_cx, "".concat(blockClass, "__clickable"), clickable), _defineProperty(_cx, "".concat(blockClass, "__media-left"), mediaPosition === 'left'), _cx), className)
    }, clickable && clickableProps);

    return cardProps;
  }; // the only reason this is necessary is for click zone 2


  var getHeaderBodyProps = function getHeaderBodyProps() {
    var clickable = hasClickEvent && clickZone === 'two';

    var headerBodyProps = _objectSpread({
      className: cx("".concat(blockClass, "__header-body-container"), _defineProperty({}, "".concat(blockClass, "__clickable"), clickable))
    }, clickable && clickableProps);

    return headerBodyProps;
  };

  var getHeaderProps = function getHeaderProps() {
    return {
      actions: getActions(),
      actionsPlacement: actionsPlacement,
      description: description,
      hasActions: hasActions && actionsPlacement === 'top',
      label: label,
      title: title,
      titleSize: titleSize
    };
  };

  var getBodyProps = function getBodyProps() {
    var clickable = hasClickEvent && clickZone === 'three';

    var bodyProps = _objectSpread({
      className: cx("".concat(blockClass, "__body"), _defineProperty({}, "".concat(blockClass, "__clickable"), clickable))
    }, clickable && clickableProps);

    return bodyProps;
  };

  var getFooterProps = function getFooterProps() {
    return {
      actions: getActions(),
      actionsPlacement: actionsPlacement,
      hasActions: hasFooterActions,
      hasButton: hasFooterButton,
      onPrimaryButtonClick: onPrimaryButtonClick,
      onSecondaryButtonClick: onSecondaryButtonClick,
      primaryButtonIcon: primaryButtonIcon,
      primaryButtonKind: primaryButtonKind,
      primaryButtonText: primaryButtonText,
      productive: productive,
      secondaryButtonIcon: secondaryButtonIcon,
      secondaryButtonKind: secondaryButtonKind,
      secondaryButtonText: secondaryButtonText
    };
  };

  return /*#__PURE__*/React.createElement("div", getCardProps(), media && /*#__PURE__*/React.createElement("div", {
    className: "".concat(blockClass, "__media")
  }, media), Pictogram && /*#__PURE__*/React.createElement("div", {
    className: "".concat(blockClass, "__pictogram")
  }, /*#__PURE__*/React.createElement(Pictogram, null)), /*#__PURE__*/React.createElement("div", {
    className: "".concat(blockClass, "__content-container")
  }, /*#__PURE__*/React.createElement("div", getHeaderBodyProps(), /*#__PURE__*/React.createElement(CardHeader, getHeaderProps()), /*#__PURE__*/React.createElement("div", getBodyProps(), children)), hasBottomBar && /*#__PURE__*/React.createElement(CardFooter, getFooterProps())));
});
Card.propTypes = {
  actionIcons: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    icon: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    onKeyDown: PropTypes.func,
    onClick: PropTypes.func,
    iconDescription: PropTypes.string
  })),
  actionsPlacement: PropTypes.oneOf(['top', 'bottom']),
  children: PropTypes.node,
  className: PropTypes.string,
  clickZone: PropTypes.oneOf(['one', 'two', 'three']),
  description: PropTypes.string,
  label: PropTypes.string,
  media: PropTypes.node,
  mediaPosition: PropTypes.oneOf(['top', 'left']),
  onClick: PropTypes.func,
  onKeyDown: PropTypes.func,
  onPrimaryButtonClick: PropTypes.func,
  onSecondaryButtonClick: PropTypes.func,
  overflowActions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    itemText: PropTypes.string,
    onClick: PropTypes.func,
    onKeyDown: PropTypes.func
  })),
  pictogram: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  primaryButtonIcon: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  primaryButtonKind: PropTypes.oneOf(['primary', 'ghost']),
  primaryButtonText: PropTypes.string,
  productive: PropTypes.bool,
  secondaryButtonIcon: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  secondaryButtonKind: PropTypes.oneOf(['secondary', 'ghost']),
  secondaryButtonText: PropTypes.string,
  title: PropTypes.string,
  titleSize: PropTypes.oneOf(['default', 'large'])
};
Card.defaultProps = {
  actionIcons: [],
  actionsPlacement: 'bottom',
  clickZone: 'one',
  mediaPosition: 'top',
  overflowActions: [],
  primaryButtonKind: 'primary',
  productive: false,
  secondaryButtonKind: 'secondary',
  titleSize: 'default'
};
Card.displayName = componentName;