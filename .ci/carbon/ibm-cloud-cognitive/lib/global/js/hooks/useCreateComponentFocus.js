"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useCreateComponentFocus = void 0;

var _react = require("react");

var _getFocusableElements = require("../utils/getFocusableElements");

/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Returns the previous state values included in the param
 * @param {object} previousState
 * @param {number} currentStep
 * @param {Function} getCreateComponentSteps
 * @param {string} componentBlockClass
 */
var useCreateComponentFocus = function useCreateComponentFocus(previousState, currentStep, getCreateComponentSteps, componentBlockClass) {
  (0, _react.useEffect)(function () {
    if ((previousState === null || previousState === void 0 ? void 0 : previousState.currentStep) !== currentStep && currentStep > 0) {
      var visibleStepInnerContent = document.querySelector(".".concat(componentBlockClass, "__step.").concat(componentBlockClass, "__step--visible-step"));
      var createComponentSteps = getCreateComponentSteps();
      var focusableStepElements = createComponentSteps && createComponentSteps.length && (0, _getFocusableElements.getFocusableElements)(visibleStepInnerContent);
      var activeStepComponent = createComponentSteps && createComponentSteps.length && createComponentSteps[currentStep - 1];

      if (activeStepComponent && activeStepComponent.props.onMount) {
        activeStepComponent.props.onMount();
      }

      if (focusableStepElements && focusableStepElements.length) {
        focusableStepElements[0].focus();
      } else {
        var nextButton = document.querySelector(".".concat(componentBlockClass, "__create-button"));
        nextButton === null || nextButton === void 0 ? void 0 : nextButton.focus();
      }
    }
  }, [currentStep, getCreateComponentSteps, previousState, componentBlockClass]);
};

exports.useCreateComponentFocus = useCreateComponentFocus;