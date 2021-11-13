import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["backButtonText", "cancelButtonText", "children", "className", "description", "includeViewAllToggle", "influencerWidth", "initialStep", "label", "nextButtonText", "onClose", "onRequestSubmit", "open", "sideNavAriaLabel", "submitButtonText", "title", "verticalPosition", "viewAllToggleLabelText", "viewAllToggleOffLabelText", "viewAllToggleOnLabelText"];

/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { forwardRef, useCallback, useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useResizeDetector } from 'react-resize-detector';
import { Grid, Form } from 'carbon-components-react';
import { extractShapesArray } from '../../global/js/utils/props-helper';
import wrapFocus from '../../global/js/utils/wrapFocus';
import { TearsheetShell } from '../Tearsheet/TearsheetShell';
import { CreateInfluencer } from '../CreateInfluencer';
import { CreateTearsheetDivider } from './CreateTearsheetDivider';
import { carbon, pkg } from '../../settings';
import { CREATE_TEARSHEET_SECTION, CREATE_TEARSHEET_STEP } from './constants';
import { usePreviousValue, useValidCreateStepCount, useResetCreateComponent, useCreateComponentFocus, useCreateComponentStepChange } from '../../global/js/hooks';
import { hasValidChildrenType, hasValidChildType } from '../../global/js/utils/hasValidType';
import { getDevtoolsProps } from '../../global/js/utils/devtools';
var componentName = 'CreateTearsheet';
var blockClass = "".concat(pkg.prefix, "--tearsheet-create");
export var CreateTearsheet = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var backButtonText = _ref.backButtonText,
      cancelButtonText = _ref.cancelButtonText,
      children = _ref.children,
      className = _ref.className,
      description = _ref.description,
      includeViewAllToggle = _ref.includeViewAllToggle,
      influencerWidth = _ref.influencerWidth,
      initialStep = _ref.initialStep,
      label = _ref.label,
      nextButtonText = _ref.nextButtonText,
      onClose = _ref.onClose,
      onRequestSubmit = _ref.onRequestSubmit,
      open = _ref.open,
      sideNavAriaLabel = _ref.sideNavAriaLabel,
      submitButtonText = _ref.submitButtonText,
      title = _ref.title,
      verticalPosition = _ref.verticalPosition,
      viewAllToggleLabelText = _ref.viewAllToggleLabelText,
      viewAllToggleOffLabelText = _ref.viewAllToggleOffLabelText,
      viewAllToggleOnLabelText = _ref.viewAllToggleOnLabelText,
      rest = _objectWithoutProperties(_ref, _excluded);

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      createTearsheetActions = _useState2[0],
      setCreateTearsheetActions = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      shouldViewAll = _useState4[0],
      setShouldViewAll = _useState4[1];

  var _useState5 = useState(0),
      _useState6 = _slicedToArray(_useState5, 2),
      currentStep = _useState6[0],
      setCurrentStep = _useState6[1];

  var _useState7 = useState(false),
      _useState8 = _slicedToArray(_useState7, 2),
      isSubmitting = _useState8[0],
      setIsSubmitting = _useState8[1];

  var _useState9 = useState(0),
      _useState10 = _slicedToArray(_useState9, 2),
      activeSectionIndex = _useState10[0],
      setActiveSectionIndex = _useState10[1];

  var previousState = usePreviousValue({
    currentStep: currentStep,
    open: open
  });
  var contentRef = useRef(); // returns an array of tearsheet steps

  var getTearsheetSteps = useCallback(function () {
    var _childrenArray$;

    var steps = [];
    var childrenArray = Array.isArray(children) ? children : [children];
    var extractedChildren = childrenArray && ((_childrenArray$ = childrenArray[0]) === null || _childrenArray$ === void 0 ? void 0 : _childrenArray$.type) === React.Fragment ? childrenArray[0].props.children : childrenArray;
    extractedChildren.forEach(function (child) {
      if (hasValidChildType({
        child: child,
        type: CREATE_TEARSHEET_STEP
      })) {
        steps.push(child);
      }
    });
    return steps;
  }, [children]);
  useCreateComponentFocus(previousState, currentStep, getTearsheetSteps, blockClass);
  useValidCreateStepCount(getTearsheetSteps, componentName);
  useResetCreateComponent({
    previousState: previousState,
    open: open,
    setCurrentStep: setCurrentStep,
    initialStep: initialStep,
    totalSteps: getTearsheetSteps().length,
    componentName: componentName
  });
  useCreateComponentStepChange({
    setCurrentStep: setCurrentStep,
    setIsSubmitting: setIsSubmitting,
    setShouldViewAll: setShouldViewAll,
    onClose: onClose,
    onRequestSubmit: onRequestSubmit,
    componentName: componentName,
    getComponentSteps: getTearsheetSteps,
    currentStep: currentStep,
    shouldViewAll: shouldViewAll,
    backButtonText: backButtonText,
    cancelButtonText: cancelButtonText,
    submitButtonText: submitButtonText,
    nextButtonText: nextButtonText,
    isSubmitting: isSubmitting,
    componentBlockClass: blockClass,
    setCreateComponentActions: setCreateTearsheetActions
  }); // Log a warning to the console in the event there are no CreateTearsheetSection components
  // inside of the CreateTearsheetSteps when the viewAll toggle is provided and turned on.

  useEffect(function () {
    if (includeViewAllToggle && shouldViewAll) {
      var childrenArray = typeof children !== 'undefined' ? children.length ? _toConsumableArray(children) : [children] : [];
      var tearsheetStepComponents = childrenArray.filter(function (child) {
        return hasValidChildType({
          child: child,
          type: CREATE_TEARSHEET_STEP
        });
      });
      var tearsheetSectionComponents = [];
      tearsheetStepComponents.forEach(function (child, index) {
        // We have received children for a TearsheetStep
        if (typeof child.props.children !== 'undefined') {
          // Only a string was provided as children of CreateTearsheetStep, this is not permitted when using view all toggle
          if (typeof child.props.children === 'string') {
            console.warn("".concat(componentName, ": You must have at least one CreateTearsheetSection component in a CreateTearsheetStep when using the 'includeViewAllToggle' prop."));
          } else {
            // The TearsheetStep has an array of children, lets check each one to see if it is a TearsheetSection
            if (child.props.children.length) {
              child.props.children.forEach(function (stepChild) {
                if (hasValidChildType({
                  child: stepChild,
                  type: CREATE_TEARSHEET_SECTION
                })) {
                  tearsheetSectionComponents.push(stepChild);
                }
              });
            } else {
              // The TearsheetStep only has a single React element as a child, lets check to see if it is a TearsheetSection
              if (hasValidChildType({
                child: child.props.children,
                type: CREATE_TEARSHEET_SECTION
              })) {
                tearsheetSectionComponents.push(child.props.children);
              }
            }
          }
        } // If there are fewer CreateTearsheetSection components than CreateTearsheetStep components
        // it means that each CreateTearsheetStep does not have at least one CreateTearsheetSection
        // this is not permitted when using view all toggle


        if (tearsheetSectionComponents.length < tearsheetStepComponents.length && index === tearsheetStepComponents.length - 1 // wait until we've finished checking each TearsheetStep before giving a warning
        ) {
          console.warn("".concat(componentName, ": You must have at least one CreateTearsheetSection component in a CreateTearsheetStep when using the 'includeViewAllToggle' prop."));
        } // We have received a single child element, lets check to see that it is
        // a CreateTearsheetSection component, if it is not we should add a console
        // warning, as each CreateTearsheetStep required at least one CreateTearsheetSection,
        // when using the view all toggle


        if (shouldViewAll && typeof child.props.children !== 'undefined' && !child.props.children.length) {
          if (!hasValidChildType({
            child: child.props.children,
            type: CREATE_TEARSHEET_SECTION
          })) {
            console.warn("".concat(componentName, ": You must have at least one CreateTearsheetSection component in a CreateTearsheetStep when using the 'includeViewAllToggle' prop."));
          }
        }
      });
    }
  }, [includeViewAllToggle, shouldViewAll, children]);

  var getTearsheetComponents = function getTearsheetComponents(childrenElements) {
    var _childrenArray$2;

    var childrenArray = Array.isArray(childrenElements) ? childrenElements : [childrenElements];
    var tearsheetStepComponents = childrenArray && ((_childrenArray$2 = childrenArray[0]) === null || _childrenArray$2 === void 0 ? void 0 : _childrenArray$2.type) === React.Fragment ? childrenArray[0].props.children.filter(function (item) {
      return hasValidChildType({
        child: item,
        type: CREATE_TEARSHEET_STEP
      });
    }) : childrenArray.filter(function (item) {
      return hasValidChildType({
        child: item,
        type: CREATE_TEARSHEET_STEP
      });
    });
    var tearsheetSectionComponents = [];
    tearsheetStepComponents.forEach(function (child) {
      var _child$props, _child$props$children;

      // we have received an array of children, lets check to see that each child is
      // a CreateTearsheetSection component before adding it to tearsheetSectionComponents
      if (shouldViewAll && child !== null && child !== void 0 && (_child$props = child.props) !== null && _child$props !== void 0 && (_child$props$children = _child$props.children) !== null && _child$props$children !== void 0 && _child$props$children.length && typeof child.props.children !== 'string') {
        child.props.children.forEach(function (stepChild) {
          if (hasValidChildType({
            child: stepChild,
            type: CREATE_TEARSHEET_SECTION
          })) {
            tearsheetSectionComponents.push(stepChild);
          }
        });
      } // we have received a single child element, lets check to see that it is
      // a CreateTearsheetSection component before adding it to tearsheetSectionComponents


      if (shouldViewAll && typeof child.props.children !== 'undefined' && !child.props.children.length) {
        if (hasValidChildType({
          child: child.props.children,
          type: CREATE_TEARSHEET_SECTION
        })) {
          tearsheetSectionComponents.push(child.props.children);
        }
      }
    });
    return {
      sections: tearsheetSectionComponents,
      steps: tearsheetStepComponents
    };
  }; // renders all children (CreateTearsheetSteps)


  var renderChildren = function renderChildren(childrenElements) {
    var _childrenArray$3;

    var step = 0;
    var childrenArray = Array.isArray(childrenElements) ? childrenElements : [childrenElements];
    var formattedChildren = extractShapesArray(childrenElements);
    var stepComponents = childrenArray && ((_childrenArray$3 = childrenArray[0]) === null || _childrenArray$3 === void 0 ? void 0 : _childrenArray$3.type) === React.Fragment ? childrenArray[0].props.children.filter(function (item) {
      return hasValidChildType({
        child: item,
        type: CREATE_TEARSHEET_STEP
      });
    }) : childrenArray.filter(function (item) {
      return hasValidChildType({
        child: item,
        type: CREATE_TEARSHEET_STEP
      });
    });
    var indexOfLastTearsheetStep = formattedChildren.map(function (el) {
      return el === null || el === void 0 ? void 0 : el.type;
    }).lastIndexOf(CREATE_TEARSHEET_STEP);
    return /*#__PURE__*/React.createElement(React.Fragment, null, ' ', stepComponents.map(function (child, stepIndex) {
      var _cx;

      step++;
      return /*#__PURE__*/React.cloneElement(child, {
        className: cx(child.props.className, (_cx = {}, _defineProperty(_cx, "".concat(blockClass, "__step--hidden-step"), !shouldViewAll && currentStep !== step), _defineProperty(_cx, "".concat(blockClass, "__step--visible-step"), currentStep === step), _cx)),
        key: "key_".concat(stepIndex),
        isViewingAllStepsTogether: shouldViewAll
      }, renderStepChildren(child.props.children, indexOfLastTearsheetStep === step - 1));
    }));
  };

  var renderStepChildren = function renderStepChildren(tearsheetStepComponent, isLastTearsheetStep) {
    var tearsheetStepComponents = Array.isArray(tearsheetStepComponent) ? tearsheetStepComponent : [tearsheetStepComponent];
    return /*#__PURE__*/React.createElement(React.Fragment, null, tearsheetStepComponents.map(function (child, index) {
      var _cx2;

      if (!hasValidChildType({
        child: child,
        type: CREATE_TEARSHEET_SECTION
      })) {
        return child;
      } // Needed to be able to not render the divider
      // line on the last section of the last step


      var isLastSectionOfLastStep = isLastTearsheetStep && tearsheetStepComponents.length - 1 === index;
      return /*#__PURE__*/React.cloneElement(child, {
        className: cx(child.props.className, (_cx2 = {}, _defineProperty(_cx2, "".concat(blockClass, "__step--hidden-section"), child.props.viewAllOnly && !shouldViewAll), _defineProperty(_cx2, "".concat(blockClass, "__step--visible-section"), !child.props.viewAllOnly || child.props.viewAllOnly && shouldViewAll), _cx2)),
        key: "key_".concat(index),
        isViewingAllStepsTogether: shouldViewAll
      }, /*#__PURE__*/React.createElement(React.Fragment, null, child, shouldViewAll && !isLastSectionOfLastStep && /*#__PURE__*/React.createElement(CreateTearsheetDivider, null)));
    }));
  }; // adds focus trap functionality

  /* istanbul ignore next */


  var handleBlur = function handleBlur(_ref2) {
    var oldActiveNode = _ref2.target,
        currentActiveNode = _ref2.relatedTarget;
    var visibleStepInnerContent = document.querySelector(".".concat(pkg.prefix, "--tearsheet__body"));
    var visibleStepStartMarker;
    var visibleStepEndMarker;

    if (open && visibleStepInnerContent) {
      wrapFocus({
        bodyNode: visibleStepInnerContent,
        visibleStepStartMarker: visibleStepStartMarker,
        visibleStepEndMarker: visibleStepEndMarker,
        currentActiveNode: currentActiveNode,
        oldActiveNode: oldActiveNode
      });
    }
  };
  /* istanbul ignore next */


  var handleResize = function handleResize() {
    var createTearsheetOuterElement = document.querySelector(".".concat(blockClass, " .").concat(carbon.prefix, "--modal-container"));
    var influencerElement = document.querySelector(".".concat(blockClass, " .").concat(pkg.prefix, "--tearsheet__influencer"));
    var totalTearsheetWidth = createTearsheetOuterElement.offsetWidth - influencerElement.offsetWidth;
    createTearsheetOuterElement.style.setProperty("--".concat(blockClass, "--total-width"), "".concat(totalTearsheetWidth, "px"));
  };

  useResizeDetector({
    handleWidth: true,
    onResize: handleResize,
    targetRef: contentRef
  });
  return /*#__PURE__*/React.createElement(TearsheetShell, _extends({}, rest, getDevtoolsProps(componentName), {
    actions: createTearsheetActions,
    className: cx(blockClass, className),
    description: description,
    hasCloseIcon: false,
    influencer: /*#__PURE__*/React.createElement(CreateInfluencer, {
      activeSectionIndex: activeSectionIndex,
      componentBlockClass: blockClass,
      createComponentName: componentName,
      currentStep: currentStep,
      createComponents: getTearsheetComponents(children),
      includeViewAllToggle: includeViewAllToggle,
      handleToggleState: function handleToggleState(toggleState) {
        return setShouldViewAll(toggleState);
      },
      handleActiveSectionIndex: function handleActiveSectionIndex(index) {
        return setActiveSectionIndex(index);
      },
      open: open,
      previousState: previousState,
      sideNavAriaLabel: sideNavAriaLabel,
      toggleState: shouldViewAll,
      viewAllToggleLabelText: viewAllToggleLabelText,
      viewAllToggleOffLabelText: viewAllToggleOffLabelText,
      viewAllToggleOnLabelText: viewAllToggleOnLabelText
    }),
    influencerPosition: "left",
    influencerWidth: influencerWidth,
    label: label,
    onClose: onClose,
    open: open,
    size: "wide",
    title: title,
    verticalPosition: verticalPosition,
    ref: ref
  }), /*#__PURE__*/React.createElement("div", {
    className: "".concat(blockClass, "__content"),
    onBlur: handleBlur,
    ref: contentRef
  }, open ? /*#__PURE__*/React.createElement(Grid, null, /*#__PURE__*/React.createElement(Form, null, renderChildren(children))) : null));
}); // Return a placeholder if not released and not enabled by feature flag

CreateTearsheet = pkg.checkComponentEnabled(CreateTearsheet, componentName); // The display name of the component, used by React. Note that displayName
// is used in preference to relying on function.name.

CreateTearsheet.displayName = componentName; // Note that the descriptions here should be kept in sync with those for the
// corresponding props for TearsheetNarrow and TearsheetShell components.

CreateTearsheet.propTypes = {
  /**
   * The back button text
   */
  backButtonText: PropTypes.string.isRequired,

  /**
   * The cancel button text
   */
  cancelButtonText: PropTypes.string.isRequired,

  /**
   * The main content of the tearsheet
   */
  children: hasValidChildrenType({
    componentName: componentName,
    childType: CREATE_TEARSHEET_STEP
  }),

  /**
   * An optional class or classes to be added to the outermost element.
   */
  className: PropTypes.string,

  /**
   * A description of the flow, displayed in the header area of the tearsheet.
   */
  description: PropTypes.node,

  /**
   * @ignore
   * Used to optionally include view all toggle
   */
  includeViewAllToggle: PropTypes.bool,

  /**
   * Used to set the size of the influencer
   */
  influencerWidth: PropTypes.oneOf(['narrow', 'wide']),

  /**
   * This can be used to open the component to a step other than the first step.
   * For example, a create flow was previously in progress, data was saved, and
   * is now being completed.
   */
  initialStep: PropTypes.number,

  /**
   * A label for the tearsheet, displayed in the header area of the tearsheet
   * to maintain context for the tearsheet (e.g. as the title changes from page
   * to page of a multi-page task).
   */
  label: PropTypes.node,

  /**
   * The next button text
   */
  nextButtonText: PropTypes.string.isRequired,

  /**
   * An optional handler that is called when the user closes the tearsheet (by
   * clicking the close button, if enabled, or clicking outside, if enabled).
   * Returning `false` here prevents the modal from closing.
   */
  onClose: PropTypes.func,

  /**
   * Specify a handler for submitting the multi step tearsheet (final step).
   * This function can _optionally_ return a promise that is either resolved or rejected and the CreateTearsheet will handle the submitting state of the create button.
   */
  onRequestSubmit: PropTypes.func.isRequired,

  /**
   * Specifies whether the tearsheet is currently open.
   */
  open: PropTypes.bool,

  /**
   * @ignore
   * The aria label to be used for the UI Shell SideNav Carbon component
   */
  sideNavAriaLabel: PropTypes.string.isRequired.if(function (_ref3) {
    var includeViewAllToggle = _ref3.includeViewAllToggle;
    return includeViewAllToggle;
  }),

  /**
   * The submit button text
   */
  submitButtonText: PropTypes.string.isRequired,

  /**
   * The main title of the tearsheet, displayed in the header area.
   */
  title: PropTypes.node,

  /**
   * The position of the top of tearsheet in the viewport. The 'normal'
   * position (the default) is a short distance down from the top of the
   * viewport, leaving room at the top for a global header bar to show through
   * from below. The 'lower' position provides a little extra room at the top
   * to allow an action bar navigation or breadcrumbs to also show through.
   */
  verticalPosition: PropTypes.oneOf(['normal', 'lower']),

  /**
   * @ignore
   * Sets the label text for the view all toggle component
   */
  viewAllToggleLabelText: PropTypes.string.isRequired.if(function (_ref4) {
    var includeViewAllToggle = _ref4.includeViewAllToggle;
    return includeViewAllToggle === true;
  }),

  /**
   * @ignore
   * Sets the label text for the view all toggle `off` text
   */
  viewAllToggleOffLabelText: PropTypes.string.isRequired.if(function (_ref5) {
    var includeViewAllToggle = _ref5.includeViewAllToggle;
    return includeViewAllToggle === true;
  }),

  /**
   * @ignore
   * Sets the label text for the view all toggle `on` text
   */
  viewAllToggleOnLabelText: PropTypes.string.isRequired.if(function (_ref6) {
    var includeViewAllToggle = _ref6.includeViewAllToggle;
    return includeViewAllToggle === true;
  })
}; // Default values for component props. Default values are not required for
// props that are required, nor for props where the component can apply
// 'undefined' values reasonably. Default values should be provided when the
// component needs to make a choice or assumption when a prop is not supplied.

CreateTearsheet.defaultProps = {
  verticalPosition: 'normal',
  includeViewAllToggle: false,
  influencerWidth: 'narrow'
};