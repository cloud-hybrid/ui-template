"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usePreviousValue = void 0;

var _react = require("react");

/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Returns the previous state values included in the param
 * @param {object} value
 */
var usePreviousValue = function usePreviousValue(value) {
  var ref = (0, _react.useRef)();
  (0, _react.useEffect)(function () {
    ref.current = value;
  });
  return ref.current;
};

exports.usePreviousValue = usePreviousValue;