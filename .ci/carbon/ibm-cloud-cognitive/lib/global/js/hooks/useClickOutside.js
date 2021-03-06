"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useClickOutside = void 0;

var _react = require("react");

/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
var useClickOutside = function useClickOutside(ref, callback) {
  var handleClick = function handleClick(event) {
    if (ref.current && !ref.current.contains(event.target)) {
      callback();
    }
  };

  (0, _react.useEffect)(function () {
    document.addEventListener('click', handleClick);
    return function () {
      document.removeEventListener('click', handleClick);
    };
  });
};

exports.useClickOutside = useClickOutside;