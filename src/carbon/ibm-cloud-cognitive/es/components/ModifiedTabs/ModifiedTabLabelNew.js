//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//
import React from 'react';
import PropTypes from 'prop-types';
import { Add20 } from '@carbon/icons-react';
export var ModifiedTabLabelNew = function ModifiedTabLabelNew(_ref) {
  var label = _ref.label;
  return /*#__PURE__*/React.createElement("span", {
    className: "modified-tabs__tab-new"
  }, /*#__PURE__*/React.createElement("span", {
    className: "modified-tabs__tab-new__label"
  }, label), /*#__PURE__*/React.createElement("span", {
    className: "modified-tabs__tab-new-img"
  }, /*#__PURE__*/React.createElement(Add20, null)));
};
ModifiedTabLabelNew.propTypes = {
  /**
   * Label content of the tab
   */
  label: PropTypes.string,

  /**
   * Optional onClick handler
   */
  onClick: PropTypes.func
};
ModifiedTabLabelNew.defaultProps = {
  label: '',
  onClick: undefined
};