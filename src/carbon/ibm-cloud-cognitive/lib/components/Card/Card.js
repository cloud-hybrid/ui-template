"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Card = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _carbonComponentsReact = require("carbon-components-react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _CardHeader = require("./CardHeader");

var _CardFooter = require("./CardFooter");

var _settings = require("../../settings");

var _excluded = ["actionIcons", "actionsPlacement", "children", "className", "clickZone", "description", "label", "media", "mediaPosition", "onClick", "onKeyDown", "onPrimaryButtonClick", "overflowActions", "onSecondaryButtonClick", "pictogram", "primaryButtonIcon", "primaryButtonKind", "primaryButtonText", "productive", "secondaryButtonIcon", "secondaryButtonKind", "secondaryButtonText", "title", "titleSize"],
    _excluded2 = ["id"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var componentName = 'Card';
var Card = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
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
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var blockClass = "".concat(_settings.pkg.prefix, "--card");
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
      return /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.OverflowMenu, {
        size: size,
        direction: pos,
        flipped: true
      }, overflowActions.map(function (_ref2) {
        var id = _ref2.id,
            rest = (0, _objectWithoutProperties2.default)(_ref2, _excluded2);
        return /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.OverflowMenuItem, (0, _extends2.default)({
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
        return /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.Button, {
          key: id,
          renderIcon: Icon,
          hasIconOnly: true,
          onClick: onClick,
          size: actionsPlacement === 'top' ? 'sm' : 'field',
          iconDescription: iconDescription,
          kind: "ghost"
        });
      }

      return /*#__PURE__*/_react.default.createElement("div", {
        key: id,
        className: "".concat(blockClass, "__icon"),
        onClick: onClick,
        onKeyDown: onKeyDown,
        role: "button",
        tabIndex: "0"
      }, /*#__PURE__*/_react.default.createElement(Icon, {
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
      className: (0, _classnames.default)(blockClass, (_cx = {}, (0, _defineProperty2.default)(_cx, "".concat(blockClass, "__productive"), productive), (0, _defineProperty2.default)(_cx, "".concat(blockClass, "__clickable"), clickable), (0, _defineProperty2.default)(_cx, "".concat(blockClass, "__media-left"), mediaPosition === 'left'), _cx), className)
    }, clickable && clickableProps);

    return cardProps;
  }; // the only reason this is necessary is for click zone 2


  var getHeaderBodyProps = function getHeaderBodyProps() {
    var clickable = hasClickEvent && clickZone === 'two';

    var headerBodyProps = _objectSpread({
      className: (0, _classnames.default)("".concat(blockClass, "__header-body-container"), (0, _defineProperty2.default)({}, "".concat(blockClass, "__clickable"), clickable))
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
      className: (0, _classnames.default)("".concat(blockClass, "__body"), (0, _defineProperty2.default)({}, "".concat(blockClass, "__clickable"), clickable))
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

  return /*#__PURE__*/_react.default.createElement("div", getCardProps(), media && /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(blockClass, "__media")
  }, media), Pictogram && /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(blockClass, "__pictogram")
  }, /*#__PURE__*/_react.default.createElement(Pictogram, null)), /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(blockClass, "__content-container")
  }, /*#__PURE__*/_react.default.createElement("div", getHeaderBodyProps(), /*#__PURE__*/_react.default.createElement(_CardHeader.CardHeader, getHeaderProps()), /*#__PURE__*/_react.default.createElement("div", getBodyProps(), children)), hasBottomBar && /*#__PURE__*/_react.default.createElement(_CardFooter.CardFooter, getFooterProps())));
});
exports.Card = Card;
Card.propTypes = {
  actionIcons: _propTypes.default.arrayOf(_propTypes.default.shape({
    id: _propTypes.default.string,
    icon: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object]),
    onKeyDown: _propTypes.default.func,
    onClick: _propTypes.default.func,
    iconDescription: _propTypes.default.string
  })),
  actionsPlacement: _propTypes.default.oneOf(['top', 'bottom']),
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  clickZone: _propTypes.default.oneOf(['one', 'two', 'three']),
  description: _propTypes.default.string,
  label: _propTypes.default.string,
  media: _propTypes.default.node,
  mediaPosition: _propTypes.default.oneOf(['top', 'left']),
  onClick: _propTypes.default.func,
  onKeyDown: _propTypes.default.func,
  onPrimaryButtonClick: _propTypes.default.func,
  onSecondaryButtonClick: _propTypes.default.func,
  overflowActions: _propTypes.default.arrayOf(_propTypes.default.shape({
    id: _propTypes.default.string,
    itemText: _propTypes.default.string,
    onClick: _propTypes.default.func,
    onKeyDown: _propTypes.default.func
  })),
  pictogram: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object]),
  primaryButtonIcon: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object]),
  primaryButtonKind: _propTypes.default.oneOf(['primary', 'ghost']),
  primaryButtonText: _propTypes.default.string,
  productive: _propTypes.default.bool,
  secondaryButtonIcon: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object]),
  secondaryButtonKind: _propTypes.default.oneOf(['secondary', 'ghost']),
  secondaryButtonText: _propTypes.default.string,
  title: _propTypes.default.string,
  titleSize: _propTypes.default.oneOf(['default', 'large'])
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