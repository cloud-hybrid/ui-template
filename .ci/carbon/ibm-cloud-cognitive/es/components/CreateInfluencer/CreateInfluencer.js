import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";

/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
// Import portions of React that are needed.
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { ProgressIndicator, ProgressStep, Toggle } from 'carbon-components-react';
import { SideNav, SideNavItems, SideNavLink } from 'carbon-components-react/lib/components/UIShell';
import { moderate02 } from '@carbon/motion';
import '../../global/js/utils/props-helper';
import { pkg } from '../../settings'; // The block part of our conventional BEM class names (blockClass__E--M).

var blockClass = "".concat(pkg.prefix, "--create-influencer");
var componentName = 'CreateInfluencer';
export var CreateInfluencer = function CreateInfluencer(_ref) {
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

  var _useState = useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      progressIndicatorState = _useState2[0],
      setProgressIndicatorState = _useState2[1];

  var _useState3 = useState(''),
      _useState4 = _slicedToArray(_useState3, 2),
      sideNavState = _useState4[0],
      setSideNavState = _useState4[1]; // Animating states need to be reset here otherwise things won't render
  // the way they should after the component mounts/unmounts

  /* istanbul ignore next */


  useEffect(function () {
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
      }, moderate02);
    } else {
      setSideNavState('closing');
      setTimeout(function () {
        handleToggleState(newToggleValue);
        setProgressIndicatorState('opening');
      }, moderate02);
    }

    handleActiveSectionIndex(0);
    var createComponentContainer = document.querySelector(".".concat(componentBlockClass));

    if (createComponentContainer) {
      createComponentContainer.scrollTop = 0;
    }
  };

  var renderViewAllToggle = function renderViewAllToggle() {
    return /*#__PURE__*/React.createElement(Toggle, {
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

      return /*#__PURE__*/React.createElement("div", {
        className: "".concat(blockClass, "__left-nav")
      }, /*#__PURE__*/React.createElement(SideNav, {
        expanded: true,
        isFixedNav: true,
        "aria-label": sideNavAriaLabel,
        className: cx((_cx = {}, _defineProperty(_cx, "".concat(blockClass, "__side-nav-opening"), sideNavState === 'opening'), _defineProperty(_cx, "".concat(blockClass, "__side-nav-closing"), sideNavState === 'closing'), _cx))
      }, /*#__PURE__*/React.createElement(SideNavItems, null, ((_createComponents$sec = createComponents.sections) === null || _createComponents$sec === void 0 ? void 0 : _createComponents$sec.length) && createComponents.sections.map(function (sectionComponent, sectionIndex) {
        var _sectionComponent$pro;

        return /*#__PURE__*/React.createElement(SideNavLink, {
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
    return /*#__PURE__*/React.createElement("div", {
      className: "".concat(blockClass, "__left-nav")
    }, currentStep === 1 && (_createComponents$ste = createComponents.steps[0]) !== null && _createComponents$ste !== void 0 && (_createComponents$ste2 = _createComponents$ste.props) !== null && _createComponents$ste2 !== void 0 && _createComponents$ste2.introStep ? null : /*#__PURE__*/React.createElement(ProgressIndicator, {
      currentIndex: introStepFound ? currentStep - 2 : currentStep - 1,
      spaceEqually: true,
      vertical: true,
      className: cx("".concat(blockClass, "__progress-indicator"), (_cx2 = {}, _defineProperty(_cx2, "".concat(blockClass, "__progress-indicator-opening"), progressIndicatorState === 'opening'), _defineProperty(_cx2, "".concat(blockClass, "__progress-indicator-closing"), progressIndicatorState === 'closing'), _cx2))
    }, stepsWithoutIntroStep.map(function (child, stepIndex) {
      return /*#__PURE__*/React.createElement(ProgressStep, {
        label: child.props.title,
        key: stepIndex,
        secondaryLabel: child.props.secondaryLabel
      });
    })));
  };

  return /*#__PURE__*/React.createElement("div", {
    className: cx(blockClass, className)
  }, renderProgressSteps(), includeViewAllToggle && renderViewAllToggle());
}; // The display name of the component, used by React. Note that displayName
// is used in preference to relying on function.name.

CreateInfluencer.displayName = componentName;
CreateInfluencer.propTypes = {
  /**
   * Sets the active side nav item when toggle is on
   */
  activeSectionIndex: PropTypes.number.isRequired,

  /**
   * Provide an optional class to be applied to the containing node.
   */
  className: PropTypes.string,

  /**
   * The blockClass for the create component (Tearsheet or FullPage)
   */
  componentBlockClass: PropTypes.string.isRequired,

  /**
   * Used to mark the current step on the ProgressIndicator component
   */
  createComponentName: PropTypes.string.isRequired,

  /**
   * An object with section and step components, needed to render the progress steps. This is where the titles are retrieved from.
   */
  createComponents: PropTypes.shape({
    steps: PropTypes.arrayOf(PropTypes.element),
    sections: PropTypes.arrayOf(PropTypes.element)
  }).isRequired,

  /**
   * Used to mark the current step on the ProgressIndicator component
   */
  currentStep: PropTypes.number.isRequired,

  /**
   * Handler used to set the active section index
   */
  handleActiveSectionIndex: PropTypes.func,

  /**
   * Handler used to track the state of the toggle
   */
  handleToggleState: PropTypes.func,

  /**
   * Used to optionally include view all toggle
   */
  includeViewAllToggle: PropTypes.bool,

  /**
   * This is the open state of the CreateComponent in which the CreateInfluencer is used from
   */
  open: PropTypes.bool,

  /**
   * This is the open state of the CreateComponent in which the CreateInfluencer is used from
   */
  previousState: PropTypes.object,

  /**
   * The aria label to be used for the UI Shell SideNav Carbon component
   */
  sideNavAriaLabel: PropTypes.string.isRequired.if(function (_ref2) {
    var includeViewAllToggle = _ref2.includeViewAllToggle;
    return includeViewAllToggle;
  }),

  /**
   * The current toggled state to be provided to the Toggle component
   */
  toggleState: PropTypes.bool,

  /**
   * Sets the label text for the view all toggle component
   */
  viewAllToggleLabelText: PropTypes.string.isRequired.if(function (_ref3) {
    var includeViewAllToggle = _ref3.includeViewAllToggle;
    return includeViewAllToggle === true;
  }),

  /**
   * Sets the label text for the view all toggle `off` text
   */
  viewAllToggleOffLabelText: PropTypes.string.isRequired.if(function (_ref4) {
    var includeViewAllToggle = _ref4.includeViewAllToggle;
    return includeViewAllToggle === true;
  }),

  /**
   * Sets the label text for the view all toggle `on` text
   */
  viewAllToggleOnLabelText: PropTypes.string.isRequired.if(function (_ref5) {
    var includeViewAllToggle = _ref5.includeViewAllToggle;
    return includeViewAllToggle === true;
  })
};