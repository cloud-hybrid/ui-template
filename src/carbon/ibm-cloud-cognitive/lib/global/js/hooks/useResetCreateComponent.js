"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useResetCreateComponent = void 0;

var _react = require("react");

/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Resets the current step of the create component if it has been closed.
 * @param {object} useResetCreateComponent - Create component that uses this custom hook
 * @param {object} useResetCreateComponent.previousState
 * @param {boolean} useResetCreateComponent.open
 * @param {Function} useResetCreateComponent.setCurrentStep
 * @param {number} useResetCreateComponent.initialStep
 * @param {number} useResetCreateComponent.totalSteps
 * @param {string} useResetCreateComponent.componentName
 */
var useResetCreateComponent = function useResetCreateComponent(_ref) {
  var previousState = _ref.previousState,
      open = _ref.open,
      setCurrentStep = _ref.setCurrentStep,
      initialStep = _ref.initialStep,
      totalSteps = _ref.totalSteps,
      componentName = _ref.componentName;
  (0, _react.useEffect)(function () {
    if (!(previousState !== null && previousState !== void 0 && previousState.open) && open) {
      if (initialStep && totalSteps && Number(initialStep) <= Number(totalSteps) && Number(initialStep) > 0) {
        setCurrentStep(Number(initialStep));
      } else {
        setCurrentStep(1);
      } // An invalid initialStep value was provided, we'll default to rendering the first step in this scenario


      if (initialStep && totalSteps && Number(initialStep) > Number(totalSteps) || Number(initialStep) <= 0) {
        console.warn("".concat(componentName, ": An invalid `initialStep` prop was supplied. The `initialStep` prop should be a number that is greater than 0 or less than or equal to the number of steps your ").concat(componentName, " has."));
      }
    }
  }, [open, previousState, setCurrentStep, initialStep, totalSteps, componentName]);
};

exports.useResetCreateComponent = useResetCreateComponent;