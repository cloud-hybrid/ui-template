import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["children", "className", "closeTerminal", "documentationLinks", "documentationLinksIconDescription", "open", "actions", "closeIconDescription"];

/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
// Import portions of React that are needed.
import React, { useCallback, useMemo, useState, useEffect } from 'react'; // Other standard imports.

import PropTypes from 'prop-types';
import cx from 'classnames';
import { pkg } from '../../settings'; // Carbon and package components we use.

import { Close16 as Close, Help16 as Help } from '@carbon/icons-react';
import { Button } from 'carbon-components-react'; // The block part of our conventional BEM class names (blockClass__E--M).

var componentName = 'WebTerminal';
var blockClass = "".concat(pkg.prefix, "--web-terminal");
export var WebTerminal = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var _ref2;

  var children = _ref.children,
      className = _ref.className,
      closeTerminal = _ref.closeTerminal,
      documentationLinks = _ref.documentationLinks,
      documentationLinksIconDescription = _ref.documentationLinksIconDescription,
      open = _ref.open,
      actions = _ref.actions,
      closeIconDescription = _ref.closeIconDescription,
      rest = _objectWithoutProperties(_ref, _excluded);

  var _useState = useState(open),
      _useState2 = _slicedToArray(_useState, 2),
      shouldRender = _useState2[0],
      setRender = _useState2[1];
  /**
   * Triggers whenever the user clicks on an item in the help dropdown
   */


  var onDocumentationLinkClick = useCallback(function (event, onClick) {
    // Runs the function provided by the user if it exists
    if (typeof onClick === 'function') {
      // Passes the event object incase the developer wants to event.preventDefault() the link redirect
      onClick(event);
    }
  }, []);
  var showDocumentationLinks = useMemo(function () {
    return documentationLinks.length > 0;
  }, [documentationLinks]);
  useEffect(function () {
    if (open) {
      setRender(true);
    }
  }, [open]);

  var onAnimationEnd = function onAnimationEnd() {
    if (!open) {
      setRender(false);
    }
  };

  return shouldRender ? /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    ref: ref,
    className: cx([blockClass, (_ref2 = {}, _defineProperty(_ref2, "".concat(blockClass, "--open"), open), _defineProperty(_ref2, "".concat(blockClass, "--closed"), !open), _defineProperty(_ref2, className, className), _ref2)]),
    style: {
      animation: "".concat(open ? 'webTerminalEntrance 250ms' : 'webTerminalExit 250ms')
    },
    onAnimationEnd: onAnimationEnd
  }), /*#__PURE__*/React.createElement("header", {
    className: "".concat(blockClass, "__bar")
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(blockClass, "__actions")
  }, showDocumentationLinks && /*#__PURE__*/React.createElement(Button, {
    hasIconOnly: true,
    kind: "ghost",
    type: "button",
    iconDescription: documentationLinksIconDescription,
    renderIcon: Help,
    className: "".concat(blockClass, "__bar-icon-container")
  }, /*#__PURE__*/React.createElement("ul", {
    className: "".concat(blockClass, "__bar-icon-dropdown")
  }, documentationLinks.map(function (_ref3) {
    var label = _ref3.label,
        _onClick = _ref3.onClick,
        _ref3$href = _ref3.href,
        href = _ref3$href === void 0 ? null : _ref3$href,
        _ref3$openInNewTab = _ref3.openInNewTab,
        openInNewTab = _ref3$openInNewTab === void 0 ? true : _ref3$openInNewTab;
    return /*#__PURE__*/React.createElement("li", {
      key: label,
      className: "".concat(blockClass, "__bar-icon-dropdown-item")
    }, /*#__PURE__*/React.createElement("a", {
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
    return /*#__PURE__*/React.createElement(Button, {
      key: iconDescription,
      hasIconOnly: true,
      renderIcon: renderIcon,
      onClick: onClick,
      iconDescription: iconDescription,
      kind: "ghost"
    });
  })), /*#__PURE__*/React.createElement(Button, {
    hasIconOnly: true,
    renderIcon: Close,
    kind: "ghost",
    iconDescription: closeIconDescription,
    onClick: closeTerminal
  })), /*#__PURE__*/React.createElement("div", {
    className: "".concat(blockClass, "__body")
  }, children)) : null;
}); // Return a placeholder if not released and not enabled by feature flag

WebTerminal = pkg.checkComponentEnabled(WebTerminal, componentName); // The display name of the component, used by React. Note that displayName
// is used in preference to relying on function.name.

WebTerminal.displayName = componentName; // The types and DocGen commentary for the component props,
// in alphabetical order (for consistency).
// See https://www.npmjs.com/package/prop-types#usage.

WebTerminal.propTypes = {
  /**
   * An array of actions to be displayed in the web terminal header bar
   */
  actions: PropTypes.arrayOf(PropTypes.shape({
    renderIcon: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
    iconDescription: PropTypes.string.isRequired
  })),

  /**
   * Provide your own terminal component as children to show up in the web terminal
   */
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,

  /**
   * Custom classname for additional styling of the web terminal
   */
  className: PropTypes.string,

  /**
   * Icon description for the close button
   */
  closeIconDescription: PropTypes.string,

  /**
   * Function that should set the open prop to false
   */
  closeTerminal: PropTypes.func.isRequired,

  /**
   * Array of objects for each documentation link
   */
  documentationLinks: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    onClick: PropTypes.func,
    openInNewTab: PropTypes.bool
  })),

  /**
   * Array of objects for each documentation link
   */
  documentationLinksIconDescription: PropTypes.string,

  /**
   * Boolean that determines if the web terminal is opened or closed
   */
  open: PropTypes.bool.isRequired
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