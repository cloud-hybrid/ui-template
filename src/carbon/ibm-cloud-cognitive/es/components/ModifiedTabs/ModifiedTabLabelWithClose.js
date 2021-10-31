import React from 'react';
import PropTypes from 'prop-types';
import { Close16, CloseFilled16 } from '@carbon/icons-react';
export var ModifiedTabLabelWithClose = function ModifiedTabLabelWithClose(_ref) {
  var unsavedContent = _ref.unsavedContent,
      label = _ref.label,
      onClose = _ref.onClose;

  var handleClose = function handleClose() {
    if (onClose) {
      onClose();
    }
  }; // const handleMousedown = (ev) => {
  //   console.log('mouse down');
  //   console.dir(ev);
  //   ev.stopPropagation();
  //   ev.cancelBubble = true;
  //   ev.preventDefault();
  // };


  return /*#__PURE__*/React.createElement("span", {
    className: "modified-tabs__tab"
  }, /*#__PURE__*/React.createElement("span", {
    className: "modified-tabs__tab-label"
  }, label), /*#__PURE__*/React.createElement("button", {
    title: "Close button",
    onClick: handleClose // onMouseDown={handleMousedown}
    ,
    className: "modified-tabs__tab-close",
    type: "button"
  }, unsavedContent ? /*#__PURE__*/React.createElement(CloseFilled16, null) : /*#__PURE__*/React.createElement(Close16, null)));
};
ModifiedTabLabelWithClose.propTypes = {
  /**
   * Label content of the tab
   */
  label: PropTypes.string.isRequired,

  /**
   * Optional onClose handler
   */
  onClose: PropTypes.func,

  /**
   * unsavedContent indicates tab contents have not been saved
   */
  unsavedContent: PropTypes.bool
};
ModifiedTabLabelWithClose.defaultProps = {
  unsavedContent: false,
  label: '',
  onClose: undefined
};