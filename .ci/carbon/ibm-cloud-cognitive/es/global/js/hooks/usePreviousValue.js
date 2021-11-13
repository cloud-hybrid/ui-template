/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { useEffect, useRef } from 'react';
/**
 * Returns the previous state values included in the param
 * @param {object} value
 */

export var usePreviousValue = function usePreviousValue(value) {
  var ref = useRef();
  useEffect(function () {
    ref.current = value;
  });
  return ref.current;
};