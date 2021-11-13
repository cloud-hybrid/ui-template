"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateFullPageSection = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _settings = require("../../settings");

var _constants = require("./constants");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

//
// Copyright IBM Corp. 2021, 2021
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//
var blockClass = "".concat(_settings.pkg.prefix, "--create-full-page__section");
var CreateFullPageSection = /*#__PURE__*/(0, _react.forwardRef)( // currently, we are not supporting the use of FullPageSections -- this may be a future feature

/* istanbul ignore next */
function (_ref, ref) {
  var children = _ref.children,
      className = _ref.className,
      id = _ref.id;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)(blockClass, className),
    ref: ref,
    id: id
  }, children);
});
exports.CreateFullPageSection = CreateFullPageSection;
CreateFullPageSection.propTypes = {
  /**
   * Content that shows in the CreateFullPage step
   */
  children: _propTypes.default.node,

  /**
   * Sets an optional className to be added to the CreateFullPage step
   */
  className: _propTypes.default.string,

  /**
   * Sets the id of the CreateTearsheetSection outermost element
   */
  id: _propTypes.default.string.isRequired,

  /**
   * Sets the title text for a CreateFullPage step
   */
  title: _propTypes.default.node.isRequired
}; // Default values for component props. Default values are not required for
// props that are required, nor for props where the component can apply
// 'undefined' values reasonably. Default values should be provided when the
// component needs to make a choice or assumption when a prop is not supplied.

CreateFullPageSection.defaultProps = {
  type: _constants.CREATE_FULL_PAGE_SECTION
};