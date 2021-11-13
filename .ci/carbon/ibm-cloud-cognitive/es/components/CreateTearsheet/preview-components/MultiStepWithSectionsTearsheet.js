import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _regeneratorRuntime from "@babel/runtime/regenerator";

/* eslint-disable react/prop-types */

/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { useState } from 'react';
import { Button, Column, Dropdown, FormGroup, InlineNotification, RadioButtonGroup, RadioButton, Row, TextInput, Toggle } from 'carbon-components-react';
import cx from 'classnames';
import { pkg } from '../../../settings';
import { CreateTearsheet } from '../CreateTearsheet';
import { CreateTearsheetStep } from '../CreateTearsheetStep';
import { CreateTearsheetDivider } from '../CreateTearsheetDivider';
var blockClass = "".concat(pkg.prefix, "--tearsheet-create-multi-step");
var componentBlockClass = "".concat(pkg.prefix, "--tearsheet-create");
export var MultiStepWithSectionsTearsheet = function MultiStepWithSectionsTearsheet(_ref) {
  var backButtonText = _ref.backButtonText,
      cancelButtonText = _ref.cancelButtonText,
      className = _ref.className,
      description = _ref.description,
      influencerWidth = _ref.influencerWidth,
      label = _ref.label,
      nextButtonText = _ref.nextButtonText,
      submitButtonText = _ref.submitButtonText,
      title = _ref.title;

  var _useState = useState(750),
      _useState2 = _slicedToArray(_useState, 1),
      simulatedDelay = _useState2[0];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      open = _useState4[0],
      setOpen = _useState4[1];

  var _useState5 = useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      shouldReject = _useState6[0],
      setShouldReject = _useState6[1];

  var _useState7 = useState(false),
      _useState8 = _slicedToArray(_useState7, 2),
      hasSubmitError = _useState8[0],
      setHasSubmitError = _useState8[1];

  var _useState9 = useState(''),
      _useState10 = _slicedToArray(_useState9, 2),
      stepOneTextInputValue = _useState10[0],
      setStepOneTextInputValue = _useState10[1];

  var _useState11 = useState(''),
      _useState12 = _slicedToArray(_useState11, 2),
      topicDescriptionValue = _useState12[0],
      setTopicDescriptionValue = _useState12[1];

  var _useState13 = useState(''),
      _useState14 = _slicedToArray(_useState13, 2),
      topicVersionValue = _useState14[0],
      setTopicVersionValue = _useState14[1];

  var _useState15 = useState(''),
      _useState16 = _slicedToArray(_useState15, 2),
      topicMetaData = _useState16[0],
      setTopicMetaData = _useState16[1];

  var _useState17 = useState('one-day'),
      _useState18 = _slicedToArray(_useState17, 2),
      stepThreeTextInputValue = _useState18[0],
      setStepThreeTextInputValue = _useState18[1];

  var _useState19 = useState(false),
      _useState20 = _slicedToArray(_useState19, 2),
      isInvalid = _useState20[0],
      setIsInvalid = _useState20[1];

  var _useState21 = useState([]),
      _useState22 = _slicedToArray(_useState21, 2),
      allTopicOwners = _useState22[0],
      setAllTopicOwners = _useState22[1];

  var _useState23 = useState(null),
      _useState24 = _slicedToArray(_useState23, 2),
      selectedTopicOwner = _useState24[0],
      setSelectedTopicOwner = _useState24[1];

  var _useState25 = useState(false),
      _useState26 = _slicedToArray(_useState25, 2),
      apiFailed = _useState26[0],
      setApiFailed = _useState26[1];

  var clearCreateData = function clearCreateData() {
    setStepOneTextInputValue('');
    setTopicDescriptionValue('');
    setTopicVersionValue('');
    setStepThreeTextInputValue('one-day');
    setHasSubmitError(false);
    setIsInvalid(false);
    setOpen(false);
    setAllTopicOwners([]);
    setSelectedTopicOwner(null);
    setApiFailed(false);
  };

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("style", null, ".".concat(blockClass, " { opacity: 0 }"), ";"), /*#__PURE__*/React.createElement(Button, {
    onClick: function onClick() {
      return setOpen(!open);
    }
  }, open ? 'Close CreateTearsheet' : 'Open CreateTearsheet'), /*#__PURE__*/React.createElement(CreateTearsheet, {
    influencerWidth: influencerWidth,
    label: label,
    className: cx(blockClass, className),
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
  }, /*#__PURE__*/React.createElement(CreateTearsheetStep, {
    onMount: /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
      var data, json;
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return fetch('https://randomuser.me/api/?results=5');

            case 3:
              data = _context.sent;
              _context.next = 6;
              return data.json();

            case 6:
              json = _context.sent;

              if (data.ok) {
                _context.next = 9;
                break;
              }

              throw new Error('received non 200 response');

            case 9:
              setAllTopicOwners(json.results);
              _context.next = 16;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](0);
              console.warn("CreateTearsheet [storybook example]: API request failed.");
              setApiFailed(true);

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 12]]);
    })),
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
    fieldsetLegendText: "Topic name information",
    disableSubmit: !stepOneTextInputValue,
    subtitle: "This is the unique name used to recognize your topic",
    description: "It will also be used by your producers and consumers as part of the connection information, so make it something easy to recognize."
  }, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Column, {
    xlg: 8,
    lg: 8,
    md: 8,
    sm: 8
  }, /*#__PURE__*/React.createElement(TextInput, {
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
  }), /*#__PURE__*/React.createElement(TextInput, {
    labelText: "Topic description (optional)",
    id: "tearsheet-multi-step-story-text-input-multi-step-1-input-2",
    value: topicDescriptionValue,
    placeholder: "Enter topic description",
    onChange: function onChange(event) {
      return setTopicDescriptionValue(event.target.value);
    }
  }), /*#__PURE__*/React.createElement(TextInput, {
    labelText: "Topic version (optional)",
    id: "tearsheet-multi-step-story-text-input-multi-step-1-input-3",
    value: topicVersionValue,
    placeholder: "Enter topic version",
    onChange: function onChange(event) {
      return setTopicVersionValue(event.target.value);
    }
  }), /*#__PURE__*/React.createElement(Dropdown, {
    ariaLabel: "Topic owner dropdown",
    className: "bx--form-item",
    id: "create-tearsheet-topic-owner",
    items: allTopicOwners,
    itemToString: function itemToString(item) {
      return item ? item.email : '';
    },
    label: "Select a topic owner",
    onChange: function onChange(_ref3) {
      var selectedItem = _ref3.selectedItem;
      return setSelectedTopicOwner(selectedItem);
    },
    selectedItem: selectedTopicOwner,
    titleText: "Topic owner (optional)",
    warn: apiFailed,
    warnText: "API request failed."
  }), hasSubmitError && /*#__PURE__*/React.createElement(InlineNotification, {
    kind: "error",
    title: "Error",
    subtitle: "Resolve errors to continue",
    onClose: function onClose() {
      return setHasSubmitError(false);
    }
  }), /*#__PURE__*/React.createElement(Toggle, {
    className: "".concat(blockClass, "__error--toggle"),
    id: "simulated-error-toggle",
    size: "sm",
    labelText: "Simulate error",
    onToggle: function onToggle(event) {
      return setShouldReject(event);
    }
  }))), /*#__PURE__*/React.createElement(CreateTearsheetDivider, null), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Column, {
    xlg: 8,
    lg: 8,
    md: 8,
    sm: 8
  }, /*#__PURE__*/React.createElement("h4", {
    className: "".concat(componentBlockClass, "__step--title")
  }, "Meta data"), /*#__PURE__*/React.createElement(FormGroup, {
    className: "".concat(pkg.prefix, "--tearsheet-create__step--fieldset"),
    legendText: "Enter any topic meta data here"
  }, /*#__PURE__*/React.createElement(TextInput, {
    labelText: "Topic meta data (optional)",
    id: "tearsheet-multi-step-story-text-input-multi-step-1-input-4",
    value: topicMetaData,
    placeholder: "Enter topic meta data",
    onChange: function onChange(event) {
      return setTopicMetaData(event.target.value);
    }
  }))))), /*#__PURE__*/React.createElement(CreateTearsheetStep, {
    title: "Message retention",
    fieldsetLegendText: "Message retention scheduling",
    disableSubmit: !stepThreeTextInputValue,
    onNext: function onNext() {
      return Promise.resolve();
    },
    subtitle: "This is how long messages are retained before they are deleted.",
    description: "If your messages are not read by a consumer within this time, they will be missed."
  }, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Column, {
    xlg: 8,
    lg: 8,
    md: 8,
    sm: 8
  }, /*#__PURE__*/React.createElement(RadioButtonGroup, {
    legendText: "Message retention",
    name: "radio-button-group",
    defaultSelected: stepThreeTextInputValue,
    onChange: function onChange(value) {
      return setStepThreeTextInputValue(value);
    },
    orientation: "vertical"
  }, /*#__PURE__*/React.createElement(RadioButton, {
    labelText: "A day",
    value: "one-day",
    id: "one-day"
  }), /*#__PURE__*/React.createElement(RadioButton, {
    labelText: "A week",
    value: "one-week",
    id: "one-week"
  }), /*#__PURE__*/React.createElement(RadioButton, {
    labelText: "A month",
    value: "one-month",
    id: "one-month"
  }), /*#__PURE__*/React.createElement(RadioButton, {
    labelText: "Custom",
    value: "custom",
    id: "custom"
  })))))));
};