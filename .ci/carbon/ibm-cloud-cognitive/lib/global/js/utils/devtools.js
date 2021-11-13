"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.devtoolsAttribute = void 0;
exports.getDevtoolsId = getDevtoolsId;
exports.getDevtoolsProps = getDevtoolsProps;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _packageSettings = _interopRequireDefault(require("../package-settings"));

/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
var devtoolsAttribute = 'data-carbon-devtools-id';
exports.devtoolsAttribute = devtoolsAttribute;

function getDevtoolsId(componentName) {
  return "".concat(_packageSettings.default.prefix, "--").concat(componentName);
}

function getDevtoolsProps(componentName) {
  return (0, _defineProperty2.default)({}, devtoolsAttribute, getDevtoolsId(componentName));
}