import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["className", "disabled", "kind", "label", "loading", "onClick", "size"],
    _excluded2 = ["actions", "buttonSize", "className", "size"];

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
import { pkg } from '../../settings';
import { allPropTypes } from '../../global/js/utils/props-helper'; // Carbon and package components we use.

import { Button, ButtonSet, InlineLoading } from 'carbon-components-react';
var blockClass = "".concat(pkg.prefix, "--action-set");
var componentName = 'ActionSet'; // NOTE: the component SCSS is not imported here: it is rolled up separately.

var ActionSetButton = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var className = _ref.className,
      disabled = _ref.disabled,
      kind = _ref.kind,
      label = _ref.label,
      loading = _ref.loading,
      onClick = _ref.onClick,
      size = _ref.size,
      rest = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(Button, _extends({}, rest, {
    isExpressive: true,
    className: cx(className, ["".concat(blockClass, "__action-button"), _defineProperty({}, "".concat(blockClass, "__action-button--ghost"), kind === 'ghost')]),
    disabled: disabled || loading || false,
    kind: kind,
    onClick: onClick,
    ref: ref,
    size: size
  }), label, loading && /*#__PURE__*/React.createElement(InlineLoading, null));
});
ActionSetButton.displayName = 'ActionSetButton';
ActionSetButton.propTypes = _objectSpread(_objectSpread({}, Button.PropTypes), {}, {
  kind: PropTypes.oneOf(['ghost', 'secondary', 'primary']),
  label: PropTypes.string,
  loading: PropTypes.bool
});
var defaultKind = Button.defaultProps.kind;

var willStack = function willStack(size, numberOfActions) {
  return size === 'xs' || size === 'sm' || size === 'md' && numberOfActions > 2;
};
/**
 * An ActionSet presents a set of action buttons, constructed from bundles
 * of prop values and applying some layout rules. When the size is 'xs' or 'sm'
 * the buttons are stacked, and should only include primary and secondary
 * kinds. When the size is 'md' the buttons are stacked if there are three or
 * more. When the size is 'md' or 'lg', two buttons share the horizontal space.
 * When the size is 'lg', three or more buttons use a quarter of the available
 * horizontal space, and if the size is 'xlg' or 'max' the buttons always use
 * a quarter of the available horizontal space. If there is a ghost button,
 * it appears at the left side. If there is a primary button it appears at the
 * right.
 */


export var ActionSet = /*#__PURE__*/React.forwardRef(function (_ref3, ref) {
  var _actions$slice, _cx;

  var actions = _ref3.actions,
      buttonSize = _ref3.buttonSize,
      className = _ref3.className,
      size = _ref3.size,
      rest = _objectWithoutProperties(_ref3, _excluded2);

  var buttons = actions && ((_actions$slice = actions.slice) === null || _actions$slice === void 0 ? void 0 : _actions$slice.call(actions, 0)) || []; // We stack the buttons in a xs/sm set, or if there are three or more in a md set.

  var stacking = willStack(size, buttons.length); // order the actions with ghost buttons first and primary buttons last
  // (and the opposite way if we're stacking)

  buttons.sort(function (action1, action2) {
    var kind1 = action1.kind || defaultKind;
    var kind2 = action2.kind || defaultKind;
    return kind1 === 'ghost' || kind2 === 'primary' ? stacking ? 1 : -1 : kind1 === 'primary' || kind2 === 'ghost' ? stacking ? -1 : 1 : 0;
  });
  return /*#__PURE__*/React.createElement(ButtonSet, _extends({}, rest, {
    className: cx(blockClass, className, (_cx = {}, _defineProperty(_cx, "".concat(blockClass, "--row-single"), !stacking && buttons.length === 1), _defineProperty(_cx, "".concat(blockClass, "--row-double"), !stacking && buttons.length === 2), _defineProperty(_cx, "".concat(blockClass, "--row-triple"), !stacking && buttons.length === 3), _defineProperty(_cx, "".concat(blockClass, "--row-quadruple"), !stacking && buttons.length >= 4), _defineProperty(_cx, "".concat(blockClass, "--stacking"), stacking), _cx), "".concat(blockClass, "--").concat(size)),
    ref: ref,
    role: "presentation",
    stacked: stacking
  }), buttons.map(function (action, index) {
    return /*#__PURE__*/React.createElement(ActionSetButton, _extends({
      key: action.key || index
    }, action, {
      size: buttonSize
    }));
  }));
});
ActionSet.displayName = componentName;
/**
 * A validator function to help validate the actions supplied for a particular
 * size of component. When the size is xs or sm, or md with three actions, the
 * buttons will be stacked and a maximum of three buttons is applied with no
 * ghosts unless the ghost is the only button. Otherwise a maximum of four
 * buttons with a maximum of one ghost is applied. In either case, a maximum
 * of one primary button is allowed.
 * @param sizeFn An optional function which will be passed all the props and
 * returns the size that the component should be treated as being: if not
 * provided, a 'size' prop is used to determine the size of the component.
 * @returns null if the actions meet the requirements, or an Error object with
 * an explanatory message.
 */

ActionSet.validateActions = function (sizeFn) {
  return function (props, propName, componentName, location, propFullName) {
    var name = propFullName || propName;
    var prop = props[name];
    var actions = prop && (prop === null || prop === void 0 ? void 0 : prop.length);
    var problems = [];

    if (actions > 0) {
      var size = sizeFn ? sizeFn(props) : props.size;
      var stacking = willStack(size, actions);

      var countActions = function countActions(kind) {
        return prop.filter(function (action) {
          return (action.kind || defaultKind) === kind;
        }).length;
      };

      var primaryActions = countActions('primary');
      var secondaryActions = countActions('secondary');
      var ghostActions = countActions('ghost');
      stacking && actions > 3 && problems.push("you cannot have more than three actions in this size of ".concat(componentName));
      actions > 4 && problems.push("you cannot have more than four actions in a ".concat(componentName));
      primaryActions > 1 && problems.push("you cannot have more than one 'primary' action in a ".concat(componentName));
      ghostActions > 1 && problems.push("you cannot have more than one 'ghost' action in a ".concat(componentName));
      stacking && actions > 1 && ghostActions > 0 && problems.push("you cannot have a 'ghost' button in conjunction with other action types in this size of ".concat(componentName));
      actions > primaryActions + secondaryActions + ghostActions && problems.push("you can only have 'primary', 'secondary' and 'ghost' buttons in a ".concat(componentName));
    }

    return problems.length > 0 ? new Error("Invalid ".concat(location, " `").concat(name, "` supplied to `").concat(componentName, "`: ").concat(problems.join(', and '), ".")) : null;
  };
};

ActionSet.propTypes = {
  /**
   * The action buttons to show. Each action is specified as an
   * object with optional fields 'label' to supply the button label, 'kind'
   * to select the button kind (must be 'primary', 'secondary' or 'ghost'),
   * 'loading' to display a loading indicator, and 'onClick' to receive
   * notifications when the button is clicked. Additional fields in the object
   * will be passed to the Button component, and these can include 'disabled',
   * 'ref', 'className', and any other Button props. Any other fields in the
   * object will be passed through to the button element as HTML attributes.
   *
   * See https://react.carbondesignsystem.com/?path=/docs/components-button--default#component-api
   */
  actions: allPropTypes([ActionSet.validateActions(), PropTypes.arrayOf(PropTypes.shape(_objectSpread(_objectSpread({}, Button.propTypes), {}, {
    kind: PropTypes.oneOf(['ghost', 'secondary', 'primary']),
    label: PropTypes.string,
    loading: PropTypes.bool,
    // we duplicate this Button prop to improve the DocGen here
    onClick: Button.propTypes.onClick
  })))]),

  /**
   * The size of buttons to use for the actions. The allowed values are
   * those for the size prop of carbon Button. If this prop is specified, all
   * the buttons will be set to this size, overriding any 'size' values (if any)
   * supplied in the actions array (if any).
   */
  buttonSize: Button.propTypes.size,

  /**
   * An optional class or classes to be added to the outermost element.
   */
  className: PropTypes.string,

  /**
   * The size of the action set. Different button arrangements are used at
   * different sizes, to make best use of the available space.
   */
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xlg', 'max'])
};
ActionSet.defaultProps = {
  size: 'md'
};