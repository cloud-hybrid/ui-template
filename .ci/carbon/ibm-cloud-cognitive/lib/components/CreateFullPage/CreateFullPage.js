"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateFullPage = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _devtools = require("../../global/js/utils/devtools");

var _settings = require("../../settings");

var _constants = require("./constants");

var _carbonComponentsReact = require("carbon-components-react");

var _CreateInfluencer = require("../CreateInfluencer");

var _ActionSet = require("../ActionSet");

var _hooks = require("../../global/js/hooks");

var _hasValidType = require("../../global/js/utils/hasValidType");

var _excluded = ["backButtonText", "cancelButtonText", "children", "className", "includeViewAllToggle", "modalDangerButtonText", "modalDescription", "modalSecondaryButtonText", "modalTitle", "nextButtonText", "onClose", "onRequestSubmit", "sideNavAriaLabel", "submitButtonText", "viewAllToggleLabelText", "viewAllToggleOffLabelText", "viewAllToggleOnLabelText"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var blockClass = "".concat(_settings.pkg.prefix, "--create-full-page");
var componentName = 'CreateFullPage';

var CreateFullPage = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var backButtonText = _ref.backButtonText,
      cancelButtonText = _ref.cancelButtonText,
      children = _ref.children,
      className = _ref.className,
      includeViewAllToggle = _ref.includeViewAllToggle,
      modalDangerButtonText = _ref.modalDangerButtonText,
      modalDescription = _ref.modalDescription,
      modalSecondaryButtonText = _ref.modalSecondaryButtonText,
      modalTitle = _ref.modalTitle,
      nextButtonText = _ref.nextButtonText,
      onClose = _ref.onClose,
      onRequestSubmit = _ref.onRequestSubmit,
      sideNavAriaLabel = _ref.sideNavAriaLabel,
      submitButtonText = _ref.submitButtonText,
      viewAllToggleLabelText = _ref.viewAllToggleLabelText,
      viewAllToggleOffLabelText = _ref.viewAllToggleOffLabelText,
      viewAllToggleOnLabelText = _ref.viewAllToggleOnLabelText,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);

  var _useState = (0, _react.useState)([]),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      createFullPageActions = _useState2[0],
      setCreateFullPageActions = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      shouldViewAll = _useState4[0],
      setShouldViewAll = _useState4[1];

  var _useState5 = (0, _react.useState)(1),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      currentStep = _useState6[0],
      setCurrentStep = _useState6[1];

  var _useState7 = (0, _react.useState)(0),
      _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
      activeSectionIndex = _useState8[0],
      setActiveSectionIndex = _useState8[1];

  var _useState9 = (0, _react.useState)(false),
      _useState10 = (0, _slicedToArray2.default)(_useState9, 2),
      isSubmitting = _useState10[0],
      setIsSubmitting = _useState10[1];

  var _useState11 = (0, _react.useState)(false),
      _useState12 = (0, _slicedToArray2.default)(_useState11, 2),
      modalIsOpen = _useState12[0],
      setModalIsOpen = _useState12[1];

  var previousState = (0, _hooks.usePreviousValue)({
    currentStep: currentStep,
    open: open
  }); // returns an array of full page steps

  var getFullPageSteps = (0, _react.useCallback)(function () {
    var _childrenArray$;

    var steps = [];
    var childrenArray = Array.isArray(children) ? children : [children];
    var extractedChildren = childrenArray && ((_childrenArray$ = childrenArray[0]) === null || _childrenArray$ === void 0 ? void 0 : _childrenArray$.type) === _react.default.Fragment ? childrenArray[0].props.children : childrenArray;
    extractedChildren.forEach(function (child) {
      if (isFullPageStep(child)) {
        steps.push(child);
      }
    });
    return steps;
  }, [children]);
  (0, _hooks.useCreateComponentFocus)(previousState, currentStep, getFullPageSteps, blockClass);
  (0, _hooks.useValidCreateStepCount)(getFullPageSteps, componentName);
  (0, _hooks.useCreateComponentStepChange)({
    setCurrentStep: setCurrentStep,
    setIsSubmitting: setIsSubmitting,
    setShouldViewAll: setShouldViewAll,
    onClose: onClose,
    onRequestSubmit: onRequestSubmit,
    componentName: componentName,
    getComponentSteps: getFullPageSteps,
    currentStep: currentStep,
    shouldViewAll: shouldViewAll,
    backButtonText: backButtonText,
    cancelButtonText: cancelButtonText,
    submitButtonText: submitButtonText,
    nextButtonText: nextButtonText,
    isSubmitting: isSubmitting,
    componentBlockClass: blockClass,
    setCreateComponentActions: setCreateFullPageActions,
    setModalIsOpen: setModalIsOpen
  }); // Log a warning to the console in the event there are no CreateFullPageSection components
  // inside of the CreateFullPageSteps when the viewAll toggle is provided and turned on.
  // currently, we are not supporting the use of FullPageSections -- this may be a future feature

  /* istanbul ignore next */

  (0, _react.useEffect)(function () {
    if (includeViewAllToggle && shouldViewAll) {
      var childrenArray = Array.isArray(children) ? children : [children];
      var fullPageStepComponents = childrenArray.filter(function (child) {
        return isFullPageStep(child);
      });
      var fullPageSectionComponents = [];
      fullPageStepComponents.forEach(function (child, index) {
        // We have received children for a FullPageStep
        if (shouldViewAll && typeof child.props.children !== 'undefined') {
          // Only a string was provided as children of CreateFullPageStep, this is not permitted when using view all toggle
          if (typeof child.props.children === 'string') {
            console.warn("".concat(componentName, ": You must have at least one CreateFullPageSection component in a CreateFullPageStep when using the 'includeViewAllToggle' prop."));
          } else {
            // The FullPageStep has an array of children, lets check each one to see if it is a FullPageSection
            if (child.props.children.length) {
              child.props.children.forEach(function (stepChild) {
                if (isFullPageSection(stepChild)) {
                  fullPageSectionComponents.push(stepChild);
                }
              });
            } else {
              // The FullPageStep only has a single React element as a child, lets check to see if it is a FullPageSection
              if (isFullPageSection(child.props.children)) {
                fullPageSectionComponents.push(child.props.children);
              }
            }
          }
        } // If there are fewer CreateFullPageSection components than CreateFullPageStep components
        // it means that each CreateFullPageStep does not have at least one CreateFullPageSection
        // this is not permitted when using view all toggle


        if (fullPageSectionComponents.length < fullPageStepComponents.length && index === fullPageStepComponents.length - 1 // wait until we've finished checking each FullPageStep before giving a warning
        ) {
          console.warn("".concat(componentName, ": You must have at least one CreateFullPageSection component in a CreateFullPageStep when using the 'includeViewAllToggle' prop."));
        } // We have received a single child element, lets check to see that it is
        // a CreateFullPageSection component, if it is not we should add a console
        // warning, as each CreateFullPageStep required at least one CreateFullPageSection,
        // when using the view all toggle


        if (shouldViewAll && typeof child.props.children !== 'undefined' && !child.props.children.length) {
          if (!isFullPageSection(child.props.children)) {
            console.warn("".concat(componentName, ": You must have at least one CreateFullPageSection component in a CreateFullPageStep when using the 'includeViewAllToggle' prop."));
          }
        }
      });
    }
  }, [includeViewAllToggle, shouldViewAll, children]); // check if child is a full page step component

  var isFullPageStep = function isFullPageStep(child) {
    if (child && child.props && child.props.type === _constants.CREATE_FULL_PAGE_STEP) {
      return true;
    }

    return false;
  }; // check if child is a full page section component
  // currently, we are not supporting the use of FullPageSections -- this may be a future feature

  /* istanbul ignore next */


  var isFullPageSection = function isFullPageSection(child) {
    if (child && child.props && child.props.type === _constants.CREATE_FULL_PAGE_SECTION) {
      return true;
    }

    return false;
  }; // renders the step progression components in the left influencer area


  var getFullPageComponents = function getFullPageComponents(childrenElements) {
    var childrenArray = Array.isArray(childrenElements) ? childrenElements : [childrenElements];
    var fullPageStepComponents = childrenArray.filter(function (child) {
      return isFullPageStep(child);
    });
    var sectionChildElements = [];
    fullPageStepComponents.forEach(function (child) {
      // we have received an array of children, lets check to see that each child is
      // a FullPageSection component before adding it to sectionChildElements
      // currently, we are not supporting the use of FullPageSections -- this may be a future feature

      /* istanbul ignore next */
      if (shouldViewAll && child.props.children.length) {
        child.props.children.forEach(function (stepChild) {
          if (isFullPageSection(stepChild)) {
            sectionChildElements.push(stepChild);
          }
        });
      } // we have received a single child element, lets check to see that it is
      // a CreateFullPageSection component before adding it to sectionChildElements


      if (shouldViewAll && typeof child.props.children !== 'undefined' && !child.props.children.length) {
        // currently, we are not supporting the use of FullPageSections -- this may be a future feature

        /* istanbul ignore next */
        if (isFullPageSection(child.props.children)) {
          sectionChildElements.push(child.props.children);
        }
      }
    });
    return {
      sections: sectionChildElements,
      steps: fullPageStepComponents
    };
  }; // renders all children (CreateFullPageSteps and regular children elements)


  var renderChildren = function renderChildren(childrenElements) {
    var step = 0;
    var childrenArray = Array.isArray(childrenElements) ? childrenElements : [childrenElements];
    var indexOfLastFullPageStep = childrenArray.map(function (el) {
      var _el$props;

      return el === null || el === void 0 ? void 0 : (_el$props = el.props) === null || _el$props === void 0 ? void 0 : _el$props.type;
    }).lastIndexOf(_constants.CREATE_FULL_PAGE_STEP);
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, childrenArray.map(function (child, stepIndex) {
      var _cx;

      if (!isFullPageStep(child)) {
        return child;
      }

      step++;
      return /*#__PURE__*/_react.default.cloneElement(child, {
        className: (0, _classnames.default)(child.props.className, (_cx = {}, (0, _defineProperty2.default)(_cx, "".concat(blockClass, "__step--hidden-step"), !shouldViewAll && currentStep !== step), (0, _defineProperty2.default)(_cx, "".concat(blockClass, "__step--visible-step"), currentStep === step), _cx)),
        key: "key_".concat(stepIndex)
      }, /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, renderStepChildren(child.props.children, indexOfLastFullPageStep === step - 1)));
    }));
  };

  var renderStepChildren = function renderStepChildren(fullPageStepComponent, isLastFullPageStep) {
    var fullPageStepComponents = Array.isArray(fullPageStepComponent) ? fullPageStepComponent : [fullPageStepComponent];
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, fullPageStepComponents.map(function (child, index) {
      var _cx2;

      if (!isFullPageSection(child)) {
        return child;
      } // Needed to be able to not render the divider
      // line on the last section of the last step
      // currently, we are not supporting the use of FullPageSections -- this may be a future feature

      /* istanbul ignore next */


      var isLastSectionOfLastStep = isLastFullPageStep && fullPageStepComponents.length - 1 === index;
      /* istanbul ignore next */

      return /*#__PURE__*/_react.default.cloneElement(child, {
        className: (0, _classnames.default)(child.props.className, (_cx2 = {}, (0, _defineProperty2.default)(_cx2, "".concat(blockClass, "__step--hidden-section"), child.props.viewAllOnly && !shouldViewAll), (0, _defineProperty2.default)(_cx2, "".concat(blockClass, "__step--visible-section"), !child.props.viewAllOnly || child.props.viewAllOnly && shouldViewAll), _cx2)),
        key: "key_".concat(index)
      }, /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, shouldViewAll && /*#__PURE__*/_react.default.createElement("h4", {
        className: "".concat(blockClass, "__step-title")
      }, child.props.title), child, shouldViewAll && !isLastSectionOfLastStep && /*#__PURE__*/_react.default.createElement("span", {
        className: "".concat(blockClass, "__section-divider")
      })));
    }));
  }; // currently, we are not supporting the use of 'view all' toggle state or CreateFullPageSection -- this may be a future feature

  /* istanbul ignore next */


  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, rest, {
    ref: ref,
    className: (0, _classnames.default)(blockClass, className)
  }, (0, _devtools.getDevtoolsProps)(componentName)), /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(blockClass, "__influencer")
  }, /*#__PURE__*/_react.default.createElement(_CreateInfluencer.CreateInfluencer, {
    activeSectionIndex: activeSectionIndex,
    componentBlockClass: blockClass,
    createComponentName: componentName,
    currentStep: currentStep,
    createComponents: getFullPageComponents(children),
    includeViewAllToggle: includeViewAllToggle,
    handleToggleState: function handleToggleState(toggleState) {
      return setShouldViewAll(toggleState);
    },
    handleActiveSectionIndex: function handleActiveSectionIndex(index) {
      return setActiveSectionIndex(index);
    },
    previousState: previousState,
    sideNavAriaLabel: sideNavAriaLabel,
    toggleState: shouldViewAll,
    viewAllToggleLabelText: viewAllToggleLabelText,
    viewAllToggleOffLabelText: viewAllToggleOffLabelText,
    viewAllToggleOnLabelText: viewAllToggleOnLabelText
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(blockClass, "__body")
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(blockClass, "__main")
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(blockClass, "__content")
  }, /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.Grid, null, /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.Form, {
    className: "".concat(blockClass, "__form")
  }, renderChildren(children)))), /*#__PURE__*/_react.default.createElement(_ActionSet.ActionSet, {
    className: "".concat(blockClass, "__buttons"),
    actions: createFullPageActions,
    size: "max"
  }))), /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.ComposedModal, {
    className: "".concat(blockClass, "__modal"),
    size: "sm",
    open: modalIsOpen,
    "aria-label": modalTitle
  }, /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.ModalHeader, {
    title: modalTitle
  }), /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.ModalBody, null, /*#__PURE__*/_react.default.createElement("p", null, modalDescription)), /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.ModalFooter, null, /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.Button, {
    type: "button",
    kind: "secondary",
    onClick: function onClick() {
      setModalIsOpen(!modalIsOpen);
    }
  }, modalSecondaryButtonText), /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.Button, {
    type: "button",
    kind: "danger",
    onClick: onClose
  }, modalDangerButtonText))));
}); // Return a placeholder if not released and not enabled by feature flag.


exports.CreateFullPage = CreateFullPage;
exports.CreateFullPage = CreateFullPage = _settings.pkg.checkComponentEnabled(CreateFullPage, componentName); // The display name of the component, used by React. Note that displayName
// is used in preference to relying on function.name.

CreateFullPage.displayName = componentName; // The types and DocGen commentary for the component props,
// in alphabetical order (for consistency).
// See https://www.npmjs.com/package/prop-types#usage.

CreateFullPage.propTypes = {
  /**
   * The back button text
   */
  backButtonText: _propTypes.default.string.isRequired,

  /**
   * The cancel button text
   */
  cancelButtonText: _propTypes.default.string.isRequired,

  /**
   * The main content of the full page
   */
  children: (0, _hasValidType.hasValidChildrenType)({
    componentName: componentName,
    childType: _constants.CREATE_FULL_PAGE_STEP
  }),

  /**
   * Provide an optional class to be applied to the containing node.
   */
  className: _propTypes.default.string,

  /**
   * @ignore
   * An optional prop that provides a toggle element in the left side influencer panel
   */
  includeViewAllToggle: _propTypes.default.bool,

  /**
   * The primary 'danger' button text in the modal
   */
  modalDangerButtonText: _propTypes.default.string.isRequired,

  /**
   * The description located below the title in the modal
   */
  modalDescription: _propTypes.default.string,

  /**
   * The secondary button text in the modal
   */
  modalSecondaryButtonText: _propTypes.default.string.isRequired,

  /**
   * The title located in the header of the modal
   */
  modalTitle: _propTypes.default.string.isRequired,

  /**
   * The next button text
   */
  nextButtonText: _propTypes.default.string.isRequired,

  /**
   * An optional handler that is called when the user closes the full page (by
   * clicking the secondary button, located in the modal, which triggers after
   * clicking the ghost button in the modal
   */
  onClose: _propTypes.default.func,

  /**
   * Specify a handler for submitting the multi step full page (final step).
   * This function can _optionally_ return a promise that is either resolved or rejected and the CreateFullPage will handle the submitting state of the create button.
   */
  onRequestSubmit: _propTypes.default.func.isRequired,

  /**
   * @ignore
   * The aria label to be used for the UI Shell SideNav Carbon component
   */
  sideNavAriaLabel: _propTypes.default.string,

  /**
   * The submit button text
   */
  submitButtonText: _propTypes.default.string.isRequired,

  /**
   * The main title of the full page, displayed in the header area.
   */
  title: _propTypes.default.node,

  /**
   * @ignore
   * Sets the label text for the view all toggle component
   */
  viewAllToggleLabelText: _propTypes.default.string,

  /**
   * @ignore
   * Sets the label text for the view all toggle `off` text
   */
  viewAllToggleOffLabelText: _propTypes.default.string,

  /**
   * @ignore
   * Sets the label text for the view all toggle `on` text
   */
  viewAllToggleOnLabelText: _propTypes.default.string
};
CreateFullPage.defaultProps = {
  includeViewAllToggle: false
};