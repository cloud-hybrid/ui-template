import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["children", "className", "disableSubmit", "formTitle", "formDescription", "onRequestClose", "onRequestSubmit", "open", "placement", "primaryButtonText", "secondaryButtonText", "selectorPrimaryFocus", "selectorPageContent", "size", "slideIn", "subtitle", "title"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
// Import portions of React that are needed.
import React from 'react'; // Other standard imports.

import PropTypes from 'prop-types';
import cx from 'classnames';
import { getDevtoolsProps } from '../../global/js/utils/devtools';
import { pkg
/*, carbon */
} from '../../settings'; // Carbon and package components we use.

import { Form } from 'carbon-components-react';
import { SidePanel } from '../SidePanel';
import { ActionSet } from '../ActionSet';
import '../../global/js/utils/props-helper'; // The block part of our conventional BEM class names (blockClass__E--M).

var blockClass = "".concat(pkg.prefix, "--edit-side-panel");
var sidePanelBlockClass = "".concat(pkg.prefix, "--side-panel");
var componentName = 'EditSidePanel'; // NOTE: the component SCSS is not imported here: it is rolled up separately.

/**
 * TODO: A description of the component.
 */

export var EditSidePanel = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var children = _ref.children,
      className = _ref.className,
      disableSubmit = _ref.disableSubmit,
      formTitle = _ref.formTitle,
      formDescription = _ref.formDescription,
      onRequestClose = _ref.onRequestClose,
      onRequestSubmit = _ref.onRequestSubmit,
      open = _ref.open,
      placement = _ref.placement,
      primaryButtonText = _ref.primaryButtonText,
      secondaryButtonText = _ref.secondaryButtonText,
      selectorPrimaryFocus = _ref.selectorPrimaryFocus,
      selectorPageContent = _ref.selectorPageContent,
      size = _ref.size,
      slideIn = _ref.slideIn,
      subtitle = _ref.subtitle,
      title = _ref.title,
      rest = _objectWithoutProperties(_ref, _excluded);

  var actions = [{
    label: primaryButtonText,
    onClick: function onClick(event) {
      event.preventDefault();
      onRequestSubmit();
    },
    kind: 'primary',
    disabled: disableSubmit,
    type: 'submit'
  }, {
    label: secondaryButtonText,
    onClick: onRequestClose,
    kind: 'secondary'
  }];
  var actionContainerClassNames = cx(["".concat(blockClass, "__actions-container"), "".concat(sidePanelBlockClass, "__actions-container")]);
  return /*#__PURE__*/React.createElement(SidePanel, _extends({}, rest, _objectSpread({
    open: open,
    ref: ref,
    selectorPageContent: selectorPageContent,
    onRequestClose: onRequestClose,
    title: title,
    subtitle: subtitle,
    selectorPrimaryFocus: selectorPrimaryFocus
  }, getDevtoolsProps(componentName)), {
    placement: placement,
    slideIn: slideIn,
    animateTitle: false,
    className: cx(blockClass, className),
    size: size,
    preventCloseOnClickOutside: true
  }), formTitle && /*#__PURE__*/React.createElement("h3", {
    className: "".concat(blockClass, "__form-title-text ").concat(blockClass, "__content-text")
  }, formTitle), formDescription && /*#__PURE__*/React.createElement("p", {
    className: "".concat(blockClass, "__form-description-text ").concat(blockClass, "__content-text")
  }, formDescription), /*#__PURE__*/React.createElement(Form, {
    className: "".concat(blockClass, "__form")
  }, children, /*#__PURE__*/React.createElement(ActionSet, {
    actions: actions,
    className: actionContainerClassNames,
    size: size
  })));
}); // Return a placeholder if not released and not enabled by feature flag

EditSidePanel = pkg.checkComponentEnabled(EditSidePanel, componentName); // The display name of the component, used by React. Note that displayName
// is used in preference to relying on function.name.

EditSidePanel.displayName = componentName; // The types and DocGen commentary for the component props,
// in alphabetical order (for consistency).
// See https://www.npmjs.com/package/prop-types#usage.

EditSidePanel.propTypes = {
  /**
   * Sets the body content of the create side panel
   */
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,

  /**
   * Provide an optional class to be applied to the containing node.
   */
  className: PropTypes.string,

  /**
   * Specifies a boolean for disabling or enabling the primary button. This is important for form validation
   * Returning `true` prevents the primary button from being clicked until required fields are completed.
   */
  disableSubmit: PropTypes.bool,

  /**
   * Specifies an optional field that provides a additional context for a form
   */
  formDescription: PropTypes.node,

  /**
   * Specifies a required field that provides a title for a form
   */
  formTitle: PropTypes.node,

  /**
   * Specifies an optional handler which is called when the CreateSidePanel
   * is closed.
   */
  onRequestClose: PropTypes.func,

  /**
   * Specifies an optional handler which is called when the CreateSidePanel
   * primary button is pressed.
   */
  onRequestSubmit: PropTypes.func,

  /**
   * Specifies whether the CreateSidePanel is open or not.
   */
  open: PropTypes.bool,

  /**
   * Determines if the side panel is on the right or left
   */
  placement: PropTypes.oneOf(['left', 'right']),

  /**
   * Specifies the primary button's text in the modal.
   */
  primaryButtonText: PropTypes.string.isRequired,

  /**
   * Specifies the secondary button's text in the modal.
   */
  secondaryButtonText: PropTypes.string.isRequired,

  /**
   * This is the selector to the element that contains all of the page content that will shrink if the panel is a slide in.
   * This prop is required when using the `slideIn` variant of the side panel.
   */
  selectorPageContent: PropTypes.string.isRequired.if(function (_ref2) {
    var slideIn = _ref2.slideIn;
    return slideIn;
  }),

  /**
   * Specifies which DOM element in the form should be focused.
   */
  selectorPrimaryFocus: PropTypes.node.isRequired,

  /**
   * Sets the size of the side panel
   */
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'max']),

  /**
   * Specifies which DOM element in the form should be focused.
   */
  slideIn: PropTypes.bool,

  /**
   * The subtitle of the CreateSidePanel is optional and serves to provide more information about the modal.
   */
  subtitle: PropTypes.node,

  /**
   * The title of the CreateSidePanel is usually the product or service name.
   */
  title: PropTypes.node.isRequired
}; // Default values for component props. Default values are not required for
// props that are required, nor for props where the component can apply
// 'undefined' values reasonably. Default values should be provided when the
// component needs to make a choice or assumption when a prop is not supplied.

EditSidePanel.defaultProps = {
  placement: 'right',
  size: 'md'
};