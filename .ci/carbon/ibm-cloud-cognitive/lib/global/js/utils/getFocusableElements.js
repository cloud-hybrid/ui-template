"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFocusableElements = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
// Returns an array of focusable elements
var getFocusableElements = function getFocusableElements(element) {
  return (0, _toConsumableArray2.default)(element.querySelectorAll('a, button, input, textarea, select, details,[tabindex]:not([tabindex="-1"])')).filter(function (e) {
    return !e.hasAttribute('disabled');
  });
};

exports.getFocusableElements = getFocusableElements;