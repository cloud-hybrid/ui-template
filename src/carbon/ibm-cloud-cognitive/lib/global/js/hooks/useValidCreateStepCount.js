"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useValidCreateStepCount = void 0;

var _react = require("react");

/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Logs a warning to console if an invalid number of steps are used with the given CreateComponent
 * @param {Function} getCreateComponentSteps
 * @param {string} componentName
 */
var useValidCreateStepCount = function useValidCreateStepCount(getCreateComponentSteps, componentName) {
  (0, _react.useEffect)(function () {
    var createSteps = getCreateComponentSteps();
    var total = createSteps.length;

    if (total === 1) {
      console.warn("".concat(componentName, ": ").concat(componentName, "s with one step are not permitted. If you require only one step, please use either the CreateTearsheetNarrow, CreateSidePanel, or CreateModal components."));
    }
  }, [getCreateComponentSteps, componentName]);
};

exports.useValidCreateStepCount = useValidCreateStepCount;