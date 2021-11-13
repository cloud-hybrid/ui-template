//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//
import React from 'react';
import PropTypes from 'prop-types';
import { pkg } from '../../settings';
var componentName = 'ContextHeader';
export var ContextHeader = function ContextHeader(_ref) {
  var namespace = _ref.namespace,
      name = _ref.name,
      task = _ref.task;
  return /*#__PURE__*/React.createElement("div", {
    className: "".concat(pkg.prefix, "-context-header")
  }, /*#__PURE__*/React.createElement("span", {
    className: "".concat(pkg.prefix, "-context-header--task")
  }, task), /*#__PURE__*/React.createElement("span", {
    className: "".concat(pkg.prefix, "-context-header--name")
  }, name), /*#__PURE__*/React.createElement("span", {
    className: "".concat(pkg.prefix, "-context-header--separator")
  }, "|"), /*#__PURE__*/React.createElement("span", {
    className: "".concat(pkg.prefix, "-context-header--namespace")
  }, namespace));
}; // Return a placeholder if not released and not enabled by feature flag

ContextHeader = pkg.checkComponentEnabled(ContextHeader, componentName);
ContextHeader.displayName = componentName;
ContextHeader.propTypes = {
  /**
   * The name of the current instance.
   */
  name: PropTypes.string.isRequired,

  /**
   * The namespace in which the current instance is deployed.
   */
  namespace: PropTypes.string.isRequired,

  /**
   * The high level task the user is using the embedding UI to carry out.
   */
  task: PropTypes.string.isRequired
};
export default ContextHeader;