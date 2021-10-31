import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
var _excluded = ["buttons"],
    _excluded2 = ["label", "key", "kind"],
    _excluded3 = ["buttons"],
    _excluded4 = ["label", "key", "kind"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
// Copyright IBM Corp. 2020, 2021
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//
import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useResizeDetector } from 'react-resize-detector';
import { ButtonSet, Button } from 'carbon-components-react';
import { ButtonMenu, ButtonMenuItem } from '../ButtonMenu';
import { pkg, carbon } from '../../settings';
import { prepareProps } from '../../global/js/utils/props-helper';
var blockClass = "".concat(pkg.prefix, "--button-set-with-overflow");
var componentName = 'ButtonSetWithOverflow';
var buttonSize = 'field';
export var ButtonSetWithOverflow = function ButtonSetWithOverflow(_ref) {
  var buttons = _ref.buttons,
      className = _ref.className,
      onWidthChange = _ref.onWidthChange,
      buttonSetOverflowLabel = _ref.buttonSetOverflowLabel,
      rightAlign = _ref.rightAlign;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      showAsOverflow = _useState2[0],
      setShowAsOverflow = _useState2[1];

  var spaceAvailableRef = useRef(null);
  var sizingContainerRefSet = useRef(null);
  var sizingContainerRefCombo = useRef(null);
  /**
   * checkFullyVisibleItems determines display count based on space available and width of pageActions
   *
   * ButtonSetWithOverflow switches between a Carbon ButtonSet and use of the ButtonMenu component depending
   * on the space available. While there is sufficient space to show all of the buttons side by side the
   * ButtonSet is used, once this is no longer the case it switches to a ButtonMenu.
   *
   */

  var checkFullyVisibleItems = function checkFullyVisibleItems() {
    var _spaceAvailableRef$cu, _sizingContainerRefSe, _sizingContainerRefCo;

    var spaceAvailable = (_spaceAvailableRef$cu = spaceAvailableRef.current) === null || _spaceAvailableRef$cu === void 0 ? void 0 : _spaceAvailableRef$cu.offsetWidth;
    var newShowAsOverflow = true; // get all of the hidden sizing buttons

    var sizingSet = (_sizingContainerRefSe = sizingContainerRefSet.current) === null || _sizingContainerRefSe === void 0 ? void 0 : _sizingContainerRefSe.querySelectorAll(".".concat(carbon.prefix, "--btn")); // calculate total width of button set

    var sizingSetTotalSize = 0;

    var _iterator = _createForOfIteratorHelper(sizingSet),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var item = _step.value;
        sizingSetTotalSize += item.offsetWidth;
      } // check ButtonMenu size

    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    var sizingComboSize = (_sizingContainerRefCo = sizingContainerRefCombo.current) === null || _sizingContainerRefCo === void 0 ? void 0 : _sizingContainerRefCo.offsetWidth; // report min and max width required to host

    onWidthChange && onWidthChange({
      maxWidth: sizingSetTotalSize,
      minWidth: sizingComboSize
    }); // only if space available use ButtonSet.

    if (sizingSetTotalSize <= spaceAvailable) {
      newShowAsOverflow = false;
    }

    setShowAsOverflow(newShowAsOverflow);
  };

  useEffect(function () {
    checkFullyVisibleItems(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [buttons]);
  var AButtonSet = /*#__PURE__*/React.forwardRef(function (_ref2, ref) {
    var buttons = _ref2.buttons,
        rest = _objectWithoutProperties(_ref2, _excluded);

    return /*#__PURE__*/React.createElement(ButtonSet, _extends({}, rest, {
      ref: ref
    }), buttons.map(function (_ref3) {
      var label = _ref3.label,
          key = _ref3.key,
          kind = _ref3.kind,
          other = _objectWithoutProperties(_ref3, _excluded2);

      /* istanbul ignore next */
      var usedKind = kind || 'primary';
      return /*#__PURE__*/React.createElement(Button, _extends({
        key: key && "button-set-".concat(key),
        kind: usedKind
      }, other, {
        size: buttonSize,
        type: "button"
      }), label);
    }));
  });
  var AButtonMenu = /*#__PURE__*/React.forwardRef(function (_ref4, ref) {
    var buttons = _ref4.buttons,
        rest = _objectWithoutProperties(_ref4, _excluded3);

    return /*#__PURE__*/React.createElement(ButtonMenu, _extends({}, rest, {
      ref: ref,
      label: buttonSetOverflowLabel
    }), buttons.map(function (_ref5) {
      var label = _ref5.label,
          key = _ref5.key,
          kind = _ref5.kind,
          other = _objectWithoutProperties(_ref5, _excluded4);

      return /*#__PURE__*/React.createElement(ButtonMenuItem, _extends({
        key: key && "button-menu-".concat(key),
        isDelete: kind === null || kind === void 0 ? void 0 : kind.startsWith('danger'),
        itemText: label
      }, prepareProps(other, ['iconDescription', 'renderIcon'])));
    }).reverse());
  });
  useResizeDetector({
    onResize: checkFullyVisibleItems,
    targetRef: sizingContainerRefSet
  });
  useResizeDetector({
    onResize: checkFullyVisibleItems,
    targetRef: sizingContainerRefCombo
  });
  useResizeDetector({
    onResize: checkFullyVisibleItems,
    targetRef: spaceAvailableRef,
    handleWidth: true
  });
  return /*#__PURE__*/React.createElement("div", {
    className: cx([blockClass, className, _defineProperty({}, "".concat(blockClass, "--right"), rightAlign)]),
    ref: spaceAvailableRef
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(blockClass, "__button-container ").concat(blockClass, "__button-container--hidden")
  }, /*#__PURE__*/React.createElement(AButtonSet, {
    "aria-hidden": true,
    ref: sizingContainerRefSet,
    size: buttonSize,
    buttons: buttons
  })), /*#__PURE__*/React.createElement("div", {
    className: "".concat(blockClass, "__button-container ").concat(blockClass, "__button-container--hidden"),
    "aria-hidden": true
  }, /*#__PURE__*/React.createElement(AButtonMenu, {
    ref: sizingContainerRefCombo,
    buttons: buttons,
    size: buttonSize
  })), showAsOverflow ? /*#__PURE__*/React.createElement(AButtonMenu, {
    buttons: buttons,
    size: buttonSize
  }) : /*#__PURE__*/React.createElement(AButtonSet, {
    className: "".concat(blockClass, "__button-container"),
    size: buttonSize,
    buttons: buttons
  }));
};
ButtonSetWithOverflow.propTypes = {
  /**
   *  buttonSetOverflowLabel - used when button set is shown as combo button
   */
  buttonSetOverflowLabel: PropTypes.node.isRequired,

  /**
   * Specifies the buttons for the ButtonSetWithOverflow. Each item is specified as an object
   * with the properties of a Carbon Button plus a label.
   *
   * Carbon Button API https://react.carbondesignsystem.com/?path=/docs/components-button--default#component-api
   */
  buttons: PropTypes.arrayOf(PropTypes.shape(_objectSpread(_objectSpread({}, Button.propTypes), {}, {
    key: PropTypes.string.isRequired,
    kind: Button.propTypes.kind,
    label: PropTypes.node,
    onClick: PropTypes.func
  }))).isRequired,

  /**
   * className
   */
  className: PropTypes.string,

  /**
   * onResize reports maxSize on resize
   */
  onWidthChange: PropTypes.func,

  /**
   * align buttons to right of available space
   */
  rightAlign: PropTypes.bool
};
ButtonSetWithOverflow.displayName = componentName;