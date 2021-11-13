/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { useEffect } from 'react';
/**
 * Logs a warning to console if an invalid number of steps are used with the given CreateComponent
 * @param {Function} getCreateComponentSteps
 * @param {string} componentName
 */

export var useValidCreateStepCount = function useValidCreateStepCount(getCreateComponentSteps, componentName) {
  useEffect(function () {
    var createSteps = getCreateComponentSteps();
    var total = createSteps.length;

    if (total === 1) {
      console.warn("".concat(componentName, ": ").concat(componentName, "s with one step are not permitted. If you require only one step, please use either the CreateTearsheetNarrow, CreateSidePanel, or CreateModal components."));
    }
  }, [getCreateComponentSteps, componentName]);
};