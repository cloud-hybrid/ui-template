/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
// Custom PropType validator which checks and ensures that all children of the create component are indeed all CreateStep components.
export var hasValidChildrenType = function hasValidChildrenType(_ref) {
  var componentName = _ref.componentName,
      childType = _ref.childType;
  return function (_ref2) {
    var children = _ref2.children;
    children.length > 1 && children.map(function (child) {
      if (child && child.props && child.props.type !== childType) {
        throw new Error("Each child of ".concat(componentName, " is required to be a ").concat(childType, ". Please remove the HTML element, or wrap it around the ").concat(childType, " component."));
      }

      return;
    });
  };
}; // Utility for check the `type` of a child component

export var hasValidChildType = function hasValidChildType(_ref3) {
  var child = _ref3.child,
      type = _ref3.type;

  if (child && child.props && child.props.type === type) {
    return true;
  }

  return false;
};