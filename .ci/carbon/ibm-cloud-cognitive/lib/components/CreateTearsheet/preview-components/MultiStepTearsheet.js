"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MultiStepTearsheet = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _carbonComponentsReact = require("carbon-components-react");

var _classnames = _interopRequireDefault(require("classnames"));

var _settings = require("../../../settings");

var _CreateTearsheet = require("../CreateTearsheet");

var _CreateTearsheetStep = require("../CreateTearsheetStep");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/* eslint-disable react/prop-types */

/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
var blockClass = "".concat(_settings.pkg.prefix, "--tearsheet-create-multi-step");

var MultiStepTearsheet = function MultiStepTearsheet(_ref) {
  var backButtonText = _ref.backButtonText,
      cancelButtonText = _ref.cancelButtonText,
      className = _ref.className,
      description = _ref.description,
      influencerWidth = _ref.influencerWidth,
      label = _ref.label,
      nextButtonText = _ref.nextButtonText,
      submitButtonText = _ref.submitButtonText,
      title = _ref.title;

  var _useState = (0, _react.useState)(750),
      _useState2 = (0, _slicedToArray2.default)(_useState, 1),
      simulatedDelay = _useState2[0];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      open = _useState4[0],
      setOpen = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      shouldReject = _useState6[0],
      setShouldReject = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
      hasSubmitError = _useState8[0],
      setHasSubmitError = _useState8[1];

  var _useState9 = (0, _react.useState)(''),
      _useState10 = (0, _slicedToArray2.default)(_useState9, 2),
      stepOneTextInputValue = _useState10[0],
      setStepOneTextInputValue = _useState10[1];

  var _useState11 = (0, _react.useState)(''),
      _useState12 = (0, _slicedToArray2.default)(_useState11, 2),
      topicDescriptionValue = _useState12[0],
      setTopicDescriptionValue = _useState12[1];

  var _useState13 = (0, _react.useState)(''),
      _useState14 = (0, _slicedToArray2.default)(_useState13, 2),
      topicVersionValue = _useState14[0],
      setTopicVersionValue = _useState14[1];

  var _useState15 = (0, _react.useState)(1),
      _useState16 = (0, _slicedToArray2.default)(_useState15, 2),
      stepTwoTextInputValue = _useState16[0],
      setStepTwoTextInputValue = _useState16[1];

  var _useState17 = (0, _react.useState)('one-day'),
      _useState18 = (0, _slicedToArray2.default)(_useState17, 2),
      stepThreeTextInputValue = _useState18[0],
      setStepThreeTextInputValue = _useState18[1];

  var _useState19 = (0, _react.useState)(false),
      _useState20 = (0, _slicedToArray2.default)(_useState19, 2),
      isInvalid = _useState20[0],
      setIsInvalid = _useState20[1];

  var clearCreateData = function clearCreateData() {
    setStepOneTextInputValue('');
    setTopicDescriptionValue('');
    setTopicVersionValue('');
    setStepTwoTextInputValue(1);
    setStepThreeTextInputValue('one-day');
    setHasSubmitError(false);
    setIsInvalid(false);
    setOpen(false);
  };

  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("style", null, ".".concat(blockClass, " { opacity: 0 }"), ";"), /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.Button, {
    onClick: function onClick() {
      return setOpen(!open);
    }
  }, open ? 'Close CreateTearsheet' : 'Open CreateTearsheet'), /*#__PURE__*/_react.default.createElement(_CreateTearsheet.CreateTearsheet, {
    influencerWidth: influencerWidth,
    label: label,
    className: (0, _classnames.default)(blockClass, className),
    submitButtonText: submitButtonText,
    cancelButtonText: cancelButtonText,
    backButtonText: backButtonText,
    nextButtonText: nextButtonText,
    description: description,
    title: title,
    open: open,
    onClose: clearCreateData,
    onRequestSubmit: function onRequestSubmit() {
      return new Promise(function (resolve) {
        setTimeout(function () {
          clearCreateData();
          resolve();
        }, simulatedDelay);
      });
    }
  }, /*#__PURE__*/_react.default.createElement(_CreateTearsheetStep.CreateTearsheetStep, {
    onNext: function onNext() {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          // Example usage of how to prevent the next step if some kind
          // of error occurred during the `onNext` handler.
          if (shouldReject) {
            setHasSubmitError(true);
            reject();
          }

          setIsInvalid(false);
          resolve();
        }, simulatedDelay);
      });
    },
    title: "Topic name",
    fieldsetLegendText: "Topic information",
    disableSubmit: !stepOneTextInputValue,
    subtitle: "This is the unique name used to recognize your topic",
    description: "It will also be used by your producers and consumers as part of the connection information, so make it something easy to recognize."
  }, /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.Row, null, /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.Column, {
    xlg: 8,
    lg: 8,
    md: 8,
    sm: 8
  }, /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.TextInput, {
    labelText: "Topic name",
    id: "tearsheet-multi-step-story-text-input-multi-step-1",
    value: stepOneTextInputValue,
    placeholder: "Enter topic name",
    onChange: function onChange(event) {
      if (event.target.value.length) {
        setIsInvalid(false);
      }

      setStepOneTextInputValue(event.target.value);
    },
    invalid: isInvalid,
    invalidText: "This is a required field",
    onBlur: function onBlur() {
      if (!stepOneTextInputValue.length) {
        setIsInvalid(true);
      }
    }
  }), /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.TextInput, {
    labelText: "Topic description (optional)",
    id: "tearsheet-multi-step-story-text-input-multi-step-1-input-2",
    value: topicDescriptionValue,
    placeholder: "Enter topic description",
    onChange: function onChange(event) {
      return setTopicDescriptionValue(event.target.value);
    }
  }), /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.TextInput, {
    labelText: "Topic version (optional)",
    id: "tearsheet-multi-step-story-text-input-multi-step-1-input-3",
    value: topicVersionValue,
    placeholder: "Enter topic version",
    onChange: function onChange(event) {
      return setTopicVersionValue(event.target.value);
    }
  }), hasSubmitError && /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.InlineNotification, {
    kind: "error",
    title: "Error",
    subtitle: "Resolve errors to continue",
    onClose: function onClose() {
      return setHasSubmitError(false);
    }
  }), /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.Toggle, {
    className: "".concat(blockClass, "__error--toggle"),
    id: "simulated-error-toggle",
    size: "sm",
    labelText: "Simulate error",
    onToggle: function onToggle(event) {
      return setShouldReject(event);
    }
  })))), /*#__PURE__*/_react.default.createElement(_CreateTearsheetStep.CreateTearsheetStep, {
    title: "Partitions",
    disableSubmit: !stepTwoTextInputValue,
    subtitle: "One or more partitions make up a topic. A partition is an ordered list of messages.",
    description: "Partitions are distributed across the brokers in order to increase the scalability of your topic. You can also use them to distribute messages across the members of a consumer group.",
    fieldsetLegendText: "Partition information"
  }, /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.Row, null, /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.Column, {
    xlg: 3,
    lg: 3
  }, /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.NumberInput, {
    id: "carbon-number",
    min: 1,
    max: 100,
    value: stepTwoTextInputValue,
    label: "Partitions",
    helperText: "1 partition is sufficient for getting started but, production systems often have more.",
    invalidText: "Max partitions is 100, min is 1",
    onChange: function onChange(event) {
      return setStepTwoTextInputValue(event.imaginaryTarget.value);
    }
  })))), /*#__PURE__*/_react.default.createElement(_CreateTearsheetStep.CreateTearsheetStep, {
    title: "Message retention",
    disableSubmit: !stepThreeTextInputValue,
    onNext: function onNext() {
      return Promise.resolve();
    },
    subtitle: "This is how long messages are retained before they are deleted.",
    description: "If your messages are not read by a consumer within this time, they will be missed.",
    fieldsetLegendText: "Message retention scheduling"
  }, /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.Row, null, /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.Column, {
    xlg: 8,
    lg: 8,
    md: 8,
    sm: 8
  }, /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.RadioButtonGroup, {
    legendText: "Message retention",
    name: "radio-button-group",
    defaultSelected: stepThreeTextInputValue,
    onChange: function onChange(value) {
      return setStepThreeTextInputValue(value);
    },
    orientation: "vertical"
  }, /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.RadioButton, {
    labelText: "A day",
    value: "one-day",
    id: "one-day"
  }), /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.RadioButton, {
    labelText: "A week",
    value: "one-week",
    id: "one-week"
  }), /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.RadioButton, {
    labelText: "A month",
    value: "one-month",
    id: "one-month"
  })))))));
};

exports.MultiStepTearsheet = MultiStepTearsheet;