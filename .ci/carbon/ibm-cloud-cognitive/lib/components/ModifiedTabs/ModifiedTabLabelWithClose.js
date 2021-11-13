"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModifiedTabLabelWithClose = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _iconsReact = require("@carbon/icons-react");

var ModifiedTabLabelWithClose = function ModifiedTabLabelWithClose(_ref) {
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


  return /*#__PURE__*/_react.default.createElement("span", {
    className: "modified-tabs__tab"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "modified-tabs__tab-label"
  }, label), /*#__PURE__*/_react.default.createElement("button", {
    title: "Close button",
    onClick: handleClose // onMouseDown={handleMousedown}
    ,
    className: "modified-tabs__tab-close",
    type: "button"
  }, unsavedContent ? /*#__PURE__*/_react.default.createElement(_iconsReact.CloseFilled16, null) : /*#__PURE__*/_react.default.createElement(_iconsReact.Close16, null)));
};

exports.ModifiedTabLabelWithClose = ModifiedTabLabelWithClose;
ModifiedTabLabelWithClose.propTypes = {
  /**
   * Label content of the tab
   */
  label: _propTypes.default.string.isRequired,

  /**
   * Optional onClose handler
   */
  onClose: _propTypes.default.func,

  /**
   * unsavedContent indicates tab contents have not been saved
   */
  unsavedContent: _propTypes.default.bool
};
ModifiedTabLabelWithClose.defaultProps = {
  unsavedContent: false,
  label: '',
  onClose: undefined
};