"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateInfluencer = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _carbonComponentsReact = require("carbon-components-react");

var _UIShell = require("carbon-components-react/lib/components/UIShell");

var _motion = require("@carbon/motion");

require("../../global/js/utils/props-helper");

var _settings = require("../../settings");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
// Import portions of React that are needed.
// The block part of our conventional BEM class names (blockClass__E--M).
var blockClass = "".concat(_settings.pkg.prefix, "--create-influencer");
var componentName = 'CreateInfluencer';

var CreateInfluencer = function CreateInfluencer(_ref) {
  var activeSectionIndex = _ref.activeSectionIndex,
      className = _ref.className,
      componentBlockClass = _ref.componentBlockClass,
      createComponentName = _ref.createComponentName,
      createComponents = _ref.createComponents,
      currentStep = _ref.currentStep,
      handleToggleState = _ref.handleToggleState,
      handleActiveSectionIndex = _ref.handleActiveSectionIndex,
      includeViewAllToggle = _ref.includeViewAllToggle,
      open = _ref.open,
      previousState = _ref.previousState,
      sideNavAriaLabel = _ref.sideNavAriaLabel,
      toggleState = _ref.toggleState,
      viewAllToggleLabelText = _ref.viewAllToggleLabelText,
      viewAllToggleOffLabelText = _ref.viewAllToggleOffLabelText,
      viewAllToggleOnLabelText = _ref.viewAllToggleOnLabelText;

  var _useState = (0, _react.useState)(''),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      progressIndicatorState = _useState2[0],
      setProgressIndicatorState = _useState2[1];

  var _useState3 = (0, _react.useState)(''),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      sideNavState = _useState4[0],
      setSideNavState = _useState4[1]; // Animating states need to be reset here otherwise things won't render
  // the way they should after the component mounts/unmounts

  /* istanbul ignore next */


  (0, _react.useEffect)(function () {
    if (!(previousState !== null && previousState !== void 0 && previousState.open) && open) {
      setSideNavState('');
      setProgressIndicatorState('');
    }
  }, [open, previousState]);
  /* istanbul ignore next */

  var handleViewAllToggle = function handleViewAllToggle(newToggleValue) {
    if (newToggleValue) {
      setProgressIndicatorState('closing');
      setTimeout(function () {
        handleToggleState(newToggleValue);
        setSideNavState('opening');
      }, _motion.moderate02);
    } else {
      setSideNavState('closing');
      setTimeout(function () {
        handleToggleState(newToggleValue);
        setProgressIndicatorState('opening');
      }, _motion.moderate02);
    }

    handleActiveSectionIndex(0);
    var createComponentContainer = document.querySelector(".".concat(componentBlockClass));

    if (createComponentContainer) {
      createComponentContainer.scrollTop = 0;
    }
  };

  var renderViewAllToggle = function renderViewAllToggle() {
    return /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.Toggle, {
      id: "".concat(blockClass, "__view-all-toggle"),
      toggled: toggleState,
      labelText: viewAllToggleLabelText,
      labelA: viewAllToggleOffLabelText,
      labelB: viewAllToggleOnLabelText,
      onToggle: function onToggle(value) {
        return handleViewAllToggle(value);
      },
      className: "".concat(blockClass, "__view-all-toggle"),
      defaultToggled: false
    });
  }; // renders the step progression components in the left influencer area


  var renderProgressSteps = function renderProgressSteps() {
    var _createComponents$ste, _createComponents$ste2, _cx2;

    /* istanbul ignore next */
    if (toggleState) {
      var _cx, _createComponents$sec;

      return /*#__PURE__*/_react.default.createElement("div", {
        className: "".concat(blockClass, "__left-nav")
      }, /*#__PURE__*/_react.default.createElement(_UIShell.SideNav, {
        expanded: true,
        isFixedNav: true,
        "aria-label": sideNavAriaLabel,
        className: (0, _classnames.default)((_cx = {}, (0, _defineProperty2.default)(_cx, "".concat(blockClass, "__side-nav-opening"), sideNavState === 'opening'), (0, _defineProperty2.default)(_cx, "".concat(blockClass, "__side-nav-closing"), sideNavState === 'closing'), _cx))
      }, /*#__PURE__*/_react.default.createElement(_UIShell.SideNavItems, null, ((_createComponents$sec = createComponents.sections) === null || _createComponents$sec === void 0 ? void 0 : _createComponents$sec.length) && createComponents.sections.map(function (sectionComponent, sectionIndex) {
        var _sectionComponent$pro;

        return /*#__PURE__*/_react.default.createElement(_UIShell.SideNavLink, {
          href: "#".concat(sectionComponent === null || sectionComponent === void 0 ? void 0 : (_sectionComponent$pro = sectionComponent.props) === null || _sectionComponent$pro === void 0 ? void 0 : _sectionComponent$pro.id),
          key: sectionIndex,
          isActive: activeSectionIndex === sectionIndex,
          onClick: function onClick(event) {
            event.preventDefault();
            handleActiveSectionIndex(sectionIndex);

            if (sectionComponent.props.id) {
              var _scrollTarget$getBoun;

              var scrollTarget = document.querySelector("#".concat(sectionComponent.props.id));
              var scrollContainer = document.querySelector(".".concat(componentBlockClass, "__content"));
              var scrollTopValue = createComponentName === 'CreateFullPage' ? (scrollTarget === null || scrollTarget === void 0 ? void 0 : (_scrollTarget$getBoun = scrollTarget.getBoundingClientRect()) === null || _scrollTarget$getBoun === void 0 ? void 0 : _scrollTarget$getBoun.y) + (scrollContainer === null || scrollContainer === void 0 ? void 0 : scrollContainer.scrollTop) : scrollTarget === null || scrollTarget === void 0 ? void 0 : scrollTarget.offsetTop;
              scrollContainer === null || scrollContainer === void 0 ? void 0 : scrollContainer.scrollTo({
                top: scrollTopValue,
                behavior: 'smooth'
              });
            } else {
              console.warn("".concat(createComponentName, ": ").concat(createComponentName, "Section component is missing a required prop of 'id'"));
            }
          }
        }, sectionComponent.props.title);
      }))));
    }

    var stepsWithoutIntroStep = createComponents.steps.filter(function (item) {
      return !item.props.introStep;
    });
    var introStepFound = !!createComponents.steps.filter(function (item) {
      return item.props.introStep;
    }).length;
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "".concat(blockClass, "__left-nav")
    }, currentStep === 1 && (_createComponents$ste = createComponents.steps[0]) !== null && _createComponents$ste !== void 0 && (_createComponents$ste2 = _createComponents$ste.props) !== null && _createComponents$ste2 !== void 0 && _createComponents$ste2.introStep ? null : /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.ProgressIndicator, {
      currentIndex: introStepFound ? currentStep - 2 : currentStep - 1,
      spaceEqually: true,
      vertical: true,
      className: (0, _classnames.default)("".concat(blockClass, "__progress-indicator"), (_cx2 = {}, (0, _defineProperty2.default)(_cx2, "".concat(blockClass, "__progress-indicator-opening"), progressIndicatorState === 'opening'), (0, _defineProperty2.default)(_cx2, "".concat(blockClass, "__progress-indicator-closing"), progressIndicatorState === 'closing'), _cx2))
    }, stepsWithoutIntroStep.map(function (child, stepIndex) {
      return /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.ProgressStep, {
        label: child.props.title,
        key: stepIndex,
        secondaryLabel: child.props.secondaryLabel
      });
    })));
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)(blockClass, className)
  }, renderProgressSteps(), includeViewAllToggle && renderViewAllToggle());
}; // The display name of the component, used by React. Note that displayName
// is used in preference to relying on function.name.


exports.CreateInfluencer = CreateInfluencer;
CreateInfluencer.displayName = componentName;
CreateInfluencer.propTypes = {
  /**
   * Sets the active side nav item when toggle is on
   */
  activeSectionIndex: _propTypes.default.number.isRequired,

  /**
   * Provide an optional class to be applied to the containing node.
   */
  className: _propTypes.default.string,

  /**
   * The blockClass for the create component (Tearsheet or FullPage)
   */
  componentBlockClass: _propTypes.default.string.isRequired,

  /**
   * Used to mark the current step on the ProgressIndicator component
   */
  createComponentName: _propTypes.default.string.isRequired,

  /**
   * An object with section and step components, needed to render the progress steps. This is where the titles are retrieved from.
   */
  createComponents: _propTypes.default.shape({
    steps: _propTypes.default.arrayOf(_propTypes.default.element),
    sections: _propTypes.default.arrayOf(_propTypes.default.element)
  }).isRequired,

  /**
   * Used to mark the current step on the ProgressIndicator component
   */
  currentStep: _propTypes.default.number.isRequired,

  /**
   * Handler used to set the active section index
   */
  handleActiveSectionIndex: _propTypes.default.func,

  /**
   * Handler used to track the state of the toggle
   */
  handleToggleState: _propTypes.default.func,

  /**
   * Used to optionally include view all toggle
   */
  includeViewAllToggle: _propTypes.default.bool,

  /**
   * This is the open state of the CreateComponent in which the CreateInfluencer is used from
   */
  open: _propTypes.default.bool,

  /**
   * This is the open state of the CreateComponent in which the CreateInfluencer is used from
   */
  previousState: _propTypes.default.object,

  /**
   * The aria label to be used for the UI Shell SideNav Carbon component
   */
  sideNavAriaLabel: _propTypes.default.string.isRequired.if(function (_ref2) {
    var includeViewAllToggle = _ref2.includeViewAllToggle;
    return includeViewAllToggle;
  }),

  /**
   * The current toggled state to be provided to the Toggle component
   */
  toggleState: _propTypes.default.bool,

  /**
   * Sets the label text for the view all toggle component
   */
  viewAllToggleLabelText: _propTypes.default.string.isRequired.if(function (_ref3) {
    var includeViewAllToggle = _ref3.includeViewAllToggle;
    return includeViewAllToggle === true;
  }),

  /**
   * Sets the label text for the view all toggle `off` text
   */
  viewAllToggleOffLabelText: _propTypes.default.string.isRequired.if(function (_ref4) {
    var includeViewAllToggle = _ref4.includeViewAllToggle;
    return includeViewAllToggle === true;
  }),

  /**
   * Sets the label text for the view all toggle `on` text
   */
  viewAllToggleOnLabelText: _propTypes.default.string.isRequired.if(function (_ref5) {
    var includeViewAllToggle = _ref5.includeViewAllToggle;
    return includeViewAllToggle === true;
  })
};