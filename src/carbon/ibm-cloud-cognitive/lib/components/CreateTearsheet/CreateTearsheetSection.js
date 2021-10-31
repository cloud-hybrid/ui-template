"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateTearsheetSection = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _carbonComponentsReact = require("carbon-components-react");

var _settings = require("../../settings");

var _constants = require("./constants");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
var blockClass = "".concat(_settings.pkg.prefix, "--tearsheet-create__section");
var CreateTearsheetSection = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var id = _ref.id,
      children = _ref.children,
      className = _ref.className,
      subtitle = _ref.subtitle,
      description = _ref.description,
      title = _ref.title,
      isViewingAllStepsTogether = _ref.isViewingAllStepsTogether;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)(blockClass, className),
    ref: ref,
    id: id
  }, /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.Row, null, /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.Column, {
    xlg: 12,
    lg: 12,
    md: 8,
    sm: 8
  }, isViewingAllStepsTogether && /*#__PURE__*/_react.default.createElement("h4", {
    className: "".concat(blockClass, "--title")
  }, title), isViewingAllStepsTogether && subtitle && /*#__PURE__*/_react.default.createElement("h6", {
    className: "".concat(blockClass, "--subtitle")
  }, subtitle), isViewingAllStepsTogether && description && /*#__PURE__*/_react.default.createElement("p", {
    className: "".concat(blockClass, "--description")
  }, description))), children);
});
exports.CreateTearsheetSection = CreateTearsheetSection;
CreateTearsheetSection.propTypes = {
  /**
   * Content that shows in the tearsheet step
   */
  children: _propTypes.default.node,

  /**
   * Sets an optional className to be added to the tearsheet step
   */
  className: _propTypes.default.string,

  /**
   * Sets an optional description on the section component
   */
  description: _propTypes.default.string,

  /**
   * Sets the id of the CreateTearsheetSection outermost element
   */
  id: _propTypes.default.string.isRequired,

  /**
   * The is an internal prop set in CreateTearsheet so the section knows when to render it's title
   */
  isViewingAllStepsTogether: _propTypes.default.bool,

  /**
   * Sets an optional subtitle on the section component
   */
  subtitle: _propTypes.default.string,

  /**
   * Sets the title text for a tearsheet step
   */
  title: _propTypes.default.node.isRequired
}; // Default values for component props. Default values are not required for
// props that are required, nor for props where the component can apply
// 'undefined' values reasonably. Default values should be provided when the
// component needs to make a choice or assumption when a prop is not supplied.

CreateTearsheetSection.defaultProps = {
  type: _constants.CREATE_TEARSHEET_SECTION
};