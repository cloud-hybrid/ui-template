import React from 'react';
import { Header, HeaderName, HeaderGlobalAction, HeaderGlobalBar } from 'carbon-components-react';
import { Terminal20 as Terminal, Search20 as Search, User20 as User } from '@carbon/icons-react';
import PropTypes from 'prop-types';

var Navigation = function Navigation(_ref) {
  var openTerminal = _ref.openTerminal;
  return /*#__PURE__*/React.createElement(Header, {
    "aria-label": "IBM Platform Name"
  }, /*#__PURE__*/React.createElement(HeaderName, {
    href: "#",
    prefix: "IBM"
  }, "[Platform]"), /*#__PURE__*/React.createElement(HeaderGlobalBar, null, /*#__PURE__*/React.createElement(HeaderGlobalAction, {
    "aria-label": "Web terminal",
    onClick: openTerminal
  }, /*#__PURE__*/React.createElement(Terminal, null)), /*#__PURE__*/React.createElement(HeaderGlobalAction, {
    "aria-label": "Search",
    onClick: function onClick() {}
  }, /*#__PURE__*/React.createElement(Search, null)), /*#__PURE__*/React.createElement(HeaderGlobalAction, {
    "aria-label": "User",
    onClick: function onClick() {}
  }, /*#__PURE__*/React.createElement(User, null))));
};

Navigation.propTypes = {
  /**
   * Opens the terminal
   */
  openTerminal: PropTypes.func.isRequired
};
export default Navigation;