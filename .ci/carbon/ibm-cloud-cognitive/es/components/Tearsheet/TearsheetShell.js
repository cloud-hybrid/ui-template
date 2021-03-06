import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["actions", "children", "className", "closeIconDescription", "description", "hasCloseIcon", "headerActions", "influencer", "influencerPosition", "influencerWidth", "label", "navigation", "onClose", "open", "size", "title", "verticalPosition"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
// Import portions of React that are needed.
import React, { useEffect, useLayoutEffect, useState, useRef } from 'react';
import { useResizeDetector } from 'react-resize-detector'; // Other standard imports.

import PropTypes from 'prop-types';
import cx from 'classnames';
import { pkg, carbon } from '../../settings';
import { deprecateProp } from '../../global/js/utils/props-helper';
import pconsole from '../../global/js/utils/pconsole'; // Carbon and package components we use.

import { Button, ComposedModal, ModalHeader, ModalBody } from 'carbon-components-react';
import { ActionSet } from '../ActionSet';
import { Wrap } from '../../global/js/utils/Wrap'; // The block part of our conventional BEM class names (bc__E--M).

var bc = "".concat(pkg.prefix, "--tearsheet");
var bcModalHeader = "".concat(carbon.prefix, "--modal-header");
var componentName = 'TearsheetShell';
var maxDepth = 3; // NOTE: the component SCSS is not imported here: it is rolled up separately.
// Global data structure to communicate the state of tearsheet stacking
// (i.e. when more than one tearsheet is open). Each tearsheet supplies a
// handler to be called whenever the stacking of the tearsheets changes, which
// happens when a tearsheet opens or closes. The 'open' array contains one
// handler per OPEN tearsheet ordered from lowest to highest in visual z-order.
// The 'all' array contains all the handlers for open and closed tearsheets.

var stack = {
  open: [],
  all: []
}; // these props are only applicable when size='wide'

export var tearsheetShellWideProps = ['headerActions', 'influencer', 'influencerPosition', 'influencerWidth', 'navigation'];
export var tearsheetIsPassive = function tearsheetIsPassive(actions) {
  return !actions || !(actions !== null && actions !== void 0 && actions.length);
};
export var tearsheetHasCloseIcon = function tearsheetHasCloseIcon(actions, hasCloseIcon) {
  return hasCloseIcon !== null && hasCloseIcon !== void 0 ? hasCloseIcon : tearsheetIsPassive(actions);
}; // TearSheetShell is used internally by TearSheet and TearSheetNarrow

export var TearsheetShell = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var actions = _ref.actions,
      children = _ref.children,
      className = _ref.className,
      closeIconDescription = _ref.closeIconDescription,
      description = _ref.description,
      hasCloseIcon = _ref.hasCloseIcon,
      headerActions = _ref.headerActions,
      influencer = _ref.influencer,
      influencerPosition = _ref.influencerPosition,
      influencerWidth = _ref.influencerWidth,
      label = _ref.label,
      navigation = _ref.navigation,
      onClose = _ref.onClose,
      open = _ref.open,
      size = _ref.size,
      title = _ref.title,
      verticalPosition = _ref.verticalPosition,
      rest = _objectWithoutProperties(_ref, _excluded);

  var _useResizeDetector = useResizeDetector({
    handleHeight: false
  }),
      width = _useResizeDetector.width,
      resizer = _useResizeDetector.ref; // Keep track of the stack depth and our position in it (1-based, 0=closed)


  var _useState = useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      depth = _useState2[0],
      setDepth = _useState2[1];

  var _useState3 = useState(0),
      _useState4 = _slicedToArray(_useState3, 2),
      position = _useState4[0],
      setPosition = _useState4[1]; // Keep a record of the previous value of depth.


  var prevDepth = useRef();
  useEffect(function () {
    prevDepth.current = depth;
  }); // A "passive" tearsheet is one with no navigation actions.

  var isPassive = tearsheetIsPassive(actions);
  var effectiveHasCloseIcon = tearsheetHasCloseIcon(actions, hasCloseIcon); // Callback that will be called whenever the stacking order changes.
  // position is 1-based with 0 indicating closed.

  function handleStackChange(newDepth, newPosition) {
    setDepth(newDepth);
    setPosition(newPosition);
  } // Hook called whenever the tearsheet mounts, unmounts, or 'open' changes.


  useLayoutEffect(function () {
    var notify = function notify() {
      return stack.all.forEach(function (handler) {
        return handler(Math.min(stack.open.length, maxDepth), stack.open.indexOf(handler) + 1);
      });
    }; // Register this tearsheet's stack change callback/listener.


    stack.all.push(handleStackChange); // If the tearsheet is mounting with open=true or open is changing from
    // false to true to open it then append its notification callback to
    // the end of the stack array (as its ID), and call all the callbacks
    // to notify all open tearsheets that the stacking has changed.

    if (open) {
      stack.open.push(handleStackChange);
      notify();
    } // Cleanup function called whenever the tearsheet unmounts or the open
    // prop changes value (in which case it is called prior to this hook
    // being called again).


    return function cleanup() {
      // Remove the notification callback from the all handlers array.
      stack.all.splice(stack.all.indexOf(handleStackChange), 1); // Remove the notification callback from the open handlers array, if
      // it's there, and notify all open tearsheets that the stacking has
      // changed (only necessary if this tearsheet was open).

      var openIndex = stack.open.indexOf(handleStackChange);

      if (openIndex >= 0) {
        stack.open.splice(openIndex, 1);
        notify();
      }
    };
  }, [open]);

  if (position <= depth) {
    var _cx, _ref2, _cx3, _cx5, _cx6;

    // Include a modal header if and only if one or more of these is given.
    // We can't use a Wrap for the ModalHeader because ComposedModal requires
    // the direct child to be the ModalHeader instance.
    var includeHeader = label || title || description || headerActions || navigation || effectiveHasCloseIcon; // Include an ActionSet if and only if one or more actions is given.

    var includeActions = actions && (actions === null || actions === void 0 ? void 0 : actions.length) > 0;
    return /*#__PURE__*/React.createElement(ComposedModal, _extends({}, rest, {
      "aria-label": title,
      className: cx(bc, className, (_cx = {}, _defineProperty(_cx, "".concat(bc, "--stacked-").concat(position, "-of-").concat(depth), // Don't apply this on the initial open of a single tearsheet.
      depth > 1 || depth === 1 && prevDepth.current > 1), _defineProperty(_cx, "".concat(bc, "--wide"), size === 'wide'), _defineProperty(_cx, "".concat(bc, "--narrow"), size !== 'wide'), _cx)),
      style: (_ref2 = {}, _defineProperty(_ref2, "--".concat(bc, "--stacking-scale-factor-single"), (width - 32) / width), _defineProperty(_ref2, "--".concat(bc, "--stacking-scale-factor-double"), (width - 64) / width), _ref2),
      containerClassName: cx("".concat(bc, "__container"), _defineProperty({}, "".concat(bc, "__container--lower"), verticalPosition === 'lower')),
      onClose: onClose,
      open: open,
      ref: ref,
      preventCloseOnClickOutside: !isPassive,
      size: "sm"
    }), includeHeader && /*#__PURE__*/React.createElement(ModalHeader, {
      className: cx("".concat(bc, "__header"), (_cx3 = {}, _defineProperty(_cx3, "".concat(bc, "__header--with-close-icon"), effectiveHasCloseIcon), _defineProperty(_cx3, "".concat(bc, "__header--with-nav"), navigation), _cx3)),
      closeClassName: cx(_defineProperty({}, "".concat(bc, "__header--no-close-icon"), !effectiveHasCloseIcon)),
      iconDescription: closeIconDescription
    }, /*#__PURE__*/React.createElement(Wrap, {
      className: "".concat(bc, "__header-content")
    }, /*#__PURE__*/React.createElement(Wrap, {
      className: "".concat(bc, "__header-fields")
    }, /*#__PURE__*/React.createElement(Wrap, {
      element: "h2",
      className: "".concat(bcModalHeader, "__label")
    }, label), /*#__PURE__*/React.createElement(Wrap, {
      element: "h3",
      className: cx("".concat(bcModalHeader, "__heading"), "".concat(bc, "__heading"))
    }, title), /*#__PURE__*/React.createElement(Wrap, {
      className: "".concat(bc, "__header-description")
    }, description)), /*#__PURE__*/React.createElement(Wrap, {
      className: "".concat(bc, "__header-actions")
    }, headerActions)), /*#__PURE__*/React.createElement(Wrap, {
      className: "".concat(bc, "__header-navigation")
    }, navigation)), /*#__PURE__*/React.createElement(Wrap, {
      element: ModalBody,
      className: "".concat(bc, "__body")
    }, /*#__PURE__*/React.createElement(Wrap, {
      className: cx((_cx5 = {}, _defineProperty(_cx5, "".concat(bc, "__influencer"), true), _defineProperty(_cx5, "".concat(bc, "__influencer--wide"), influencerWidth === 'wide'), _cx5)),
      neverRender: influencerPosition === 'right'
    }, influencer), /*#__PURE__*/React.createElement(Wrap, {
      className: "".concat(bc, "__right")
    }, /*#__PURE__*/React.createElement(Wrap, {
      alwaysRender: includeActions,
      className: "".concat(bc, "__main")
    }, /*#__PURE__*/React.createElement(Wrap, {
      alwaysRender: influencer && influencerPosition === 'right',
      className: "".concat(bc, "__content")
    }, children), /*#__PURE__*/React.createElement(Wrap, {
      className: cx((_cx6 = {}, _defineProperty(_cx6, "".concat(bc, "__influencer"), true), _defineProperty(_cx6, "".concat(bc, "__influencer--wide"), influencerWidth === 'wide'), _cx6)),
      neverRender: influencerPosition !== 'right'
    }, influencer)), includeActions && /*#__PURE__*/React.createElement(Wrap, {
      className: "".concat(bc, "__button-container")
    }, /*#__PURE__*/React.createElement(ActionSet, {
      actions: actions,
      buttonSize: size === 'wide' ? 'xl' : null,
      className: "".concat(bc, "__buttons"),
      size: size === 'wide' ? 'max' : 'lg'
    })))), /*#__PURE__*/React.createElement("div", {
      className: "".concat(bc, "__resize-detector"),
      ref: resizer
    }));
  } else {
    pconsole.warn('Tearsheet not rendered: maximum stacking depth exceeded.');
    return null;
  }
}); // The display name of the component, used by React. Note that displayName
// is used in preference to relying on function.name.

TearsheetShell.displayName = componentName;
export var deprecatedProps = {
  /**
   * **Deprecated**
   *
   * Prevent the tearsheet from automatically closing (triggering onClose, if
   * provided, which can be cancelled by returning 'false') if the user clicks
   * outside it.
   */
  preventCloseOnClickOutside: deprecateProp(PropTypes.bool, 'The tearsheet will close automatically if the user clicks outside it if and only if the tearsheet is passive (no navigation actions)'),

  /**
   * **Deprecated**
   *
   * The position of the top of tearsheet in the viewport. The 'normal'
   * position is a short distance down from the top of the
   * viewport, leaving room at the top for a global header bar to show through
   * from below. The 'lower' position (the default) provides a little extra room at the top
   * to allow an action bar navigation or breadcrumbs to also show through.
   */
  verticalPosition: PropTypes.oneOf(['normal', 'lower'])
}; // The types and DocGen commentary for the component props,
// in alphabetical order (for consistency).
// See https://www.npmjs.com/package/prop-types#usage.
// Note that the descriptions here should be kept in sync with those for the
// corresponding props for Tearsheet and TearsheetNarrow components.

TearsheetShell.propTypes = _objectSpread({
  /**
   * The actions to be shown as buttons in the action area at the bottom of the
   * tearsheet. Each action is specified as an object with optional fields
   * 'label' to supply the button label, 'kind' to select the button kind (must
   * be 'primary', 'secondary' or 'ghost'), 'loading' to display a loading
   * indicator, and 'onClick' to receive notifications when the button is
   * clicked. Additional fields in the object will be passed to the Button
   * component, and these can include 'disabled', 'ref', 'className', and any
   * other Button props. Any other fields in the object will be passed through
   * to the button element as HTML attributes.
   *
   * See https://react.carbondesignsystem.com/?path=/docs/components-button--default#component-api
   */
  actions: PropTypes.arrayOf( // NB we don't include the validator here, as the component wrapping this
  // one should ensure appropriate validation is done.
  PropTypes.shape(_objectSpread(_objectSpread({}, Button.propTypes), {}, {
    kind: PropTypes.oneOf(['ghost', 'secondary', 'primary']),
    label: PropTypes.string,
    loading: PropTypes.bool,
    // we duplicate this Button prop to improve the DocGen here
    onClick: Button.propTypes.onClick
  }))),

  /**
   * The main content of the tearsheet.
   */
  children: PropTypes.node,

  /**
   * An optional class or classes to be added to the outermost element.
   */
  className: PropTypes.string,

  /**
   * The accessibility title for the close icon (if shown).
   *
   * **Note:** This prop is only required if a close icon is shown, i.e. if
   * there are a no navigation actions and/or hasCloseIcon is true.
   */
  closeIconDescription: PropTypes.string.isRequired.if(function (_ref3) {
    var actions = _ref3.actions,
        hasCloseIcon = _ref3.hasCloseIcon;
    return tearsheetHasCloseIcon(actions, hasCloseIcon);
  }),

  /**
   * A description of the flow, displayed in the header area of the tearsheet.
   */
  description: PropTypes.node,

  /**
   * Enable a close icon ('x') in the header area of the tearsheet. By default,
   * (when this prop is omitted, or undefined or null) a tearsheet does not
   * display a close icon if there are navigation actions ("transactional
   * tearsheet") and displays one if there are no navigation actions ("passive
   * tearsheet"), and that behavior can be overridden if required by setting
   * this prop to either true or false.
   */
  hasCloseIcon: PropTypes.bool,

  /**
   * The content for the header actions area, displayed alongside the title in
   * the header area of the tearsheet. This is typically a drop-down, or a set
   * of small buttons, or similar. NB the headerActions is only applicable for
   * wide tearsheets.
   */
  headerActions: PropTypes.element,

  /**
   * The content for the influencer section of the tearsheet, displayed
   * alongside the main content. This is typically a menu, or filter, or
   * progress indicator, or similar. NB the influencer is only applicable for
   * wide tearsheets.
   */
  influencer: PropTypes.element,

  /**
   * The position of the influencer section, 'left' or 'right'.
   */
  influencerPosition: PropTypes.oneOf(['left', 'right']),

  /**
   * The width of the influencer: 'narrow' (the default) is 256px, and 'wide'
   * is 320px.
   */
  influencerWidth: PropTypes.oneOf(['narrow', 'wide']),

  /**
   * A label for the tearsheet, displayed in the header area of the tearsheet
   * to maintain context for the tearsheet (e.g. as the title changes from page
   * to page of a multi-page task).
   */
  label: PropTypes.node,

  /**
   * Navigation content, such as a set of tabs, to be displayed at the bottom
   * of the header area of the tearsheet. NB the navigation is only applicable
   * for wide tearsheets.
   */
  navigation: PropTypes.element,

  /**
   * An optional handler that is called when the user closes the tearsheet (by
   * clicking the close button, if enabled, or clicking outside, if enabled).
   * Returning `false` here prevents the modal from closing.
   */
  onClose: PropTypes.func,

  /**
   * Specifies whether the tearsheet is currently open.
   */
  open: PropTypes.bool,

  /**
   * Specifies the width of the tearsheet, 'narrow' or 'wide'.
   */
  size: PropTypes.oneOf(['narrow', 'wide']).isRequired,

  /**
   * The main title of the tearsheet, displayed in the header area.
   */
  title: PropTypes.node
}, deprecatedProps);