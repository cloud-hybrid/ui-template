"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateFullPageStep = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _settings = require("../../settings");

var _constants = require("./constants.js");

var _carbonComponentsReact = require("carbon-components-react");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
var componentName = 'CreateFullPageStep';
var blockClass = "".concat(_settings.pkg.prefix, "--create-full-page__step");
var CreateFullPageStep = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var children = _ref.children,
      className = _ref.className,
      subtitle = _ref.subtitle,
      description = _ref.description,
      title = _ref.title,
      hasFieldset = _ref.hasFieldset,
      fieldsetLegendText = _ref.fieldsetLegendText;
  return /*#__PURE__*/_react.default.createElement("section", {
    className: (0, _classnames.default)(blockClass, className),
    ref: ref
  }, /*#__PURE__*/_react.default.createElement("h5", {
    className: "".concat(blockClass, "-title")
  }, title), subtitle && /*#__PURE__*/_react.default.createElement("h6", {
    className: "".concat(blockClass, "-subtitle")
  }, subtitle), description && /*#__PURE__*/_react.default.createElement("p", {
    className: "".concat(blockClass, "-description")
  }, description), hasFieldset ? /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.FormGroup, {
    legendText: fieldsetLegendText,
    className: "".concat(blockClass, "-fieldset")
  }, children) : children);
}); // Return a placeholder if not released and not enabled by feature flag

exports.CreateFullPageStep = CreateFullPageStep;
exports.CreateFullPageStep = CreateFullPageStep = _settings.pkg.checkComponentEnabled(CreateFullPageStep, componentName);
CreateFullPageStep.propTypes = {
  /**
   * Content that shows in the CreateFullPage step
   */
  children: _propTypes.default.node,

  /**
   * Sets an optional className to be added to the CreateFullPage step
   */
  className: _propTypes.default.string,

  /**
   * Sets an optional description on the progress step component
   */
  description: _propTypes.default.string,

  /**
   * This will conditionally disable the submit button in the multi step CreateFullPage
   */
  disableSubmit: _propTypes.default.bool,

  /**
   * This is the legend text that appears above a fieldset html element for accessibility purposes. It is required when the optional `hasFieldset` prop is provided to a FullPageStep.
   */
  fieldsetLegendText: _propTypes.default.string.isRequired.if(function (_ref2) {
    var hasFieldset = _ref2.hasFieldset;
    return hasFieldset === true;
  }),

  /**
   * This optional prop will render your form content inside of a fieldset html element
   */
  hasFieldset: _propTypes.default.bool,

  /**
   * This prop can be used on the first step to mark it as an intro step, which will not render the progress indicator steps
   */
  introStep: _propTypes.default.bool,

  /**
   * Optional function to be called on initial mount of a step.
   * For example, this can be used to fetch data that is required on a particular step.
   */
  onMount: _propTypes.default.func,

  /**
   * Optional function to be called on a step change.
   * For example, this can be used to validate input fields before proceeding to the next step.
   * This function can _optionally_ return a promise that is either resolved or rejected and the CreateFullPage will handle the submitting state of the next button.
   */
  onNext: _propTypes.default.func,

  /**
   * Sets the optional secondary label on the progress step component
   */
  secondaryLabel: _propTypes.default.string,

  /**
   * Sets an optional subtitle on the progress step component
   */
  subtitle: _propTypes.default.string,

  /**
   * Sets the title text for a create full page step
   */
  title: _propTypes.default.node.isRequired
}; // Default values for component props. Default values are not required for
// props that are required, nor for props where the component can apply
// 'undefined' values reasonably. Default values should be provided when the
// component needs to make a choice or assumption when a prop is not supplied.

CreateFullPageStep.defaultProps = {
  type: _constants.CREATE_FULL_PAGE_STEP
};