"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateTearsheet = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactResizeDetector = require("react-resize-detector");

var _carbonComponentsReact = require("carbon-components-react");

var _propsHelper = require("../../global/js/utils/props-helper");

var _wrapFocus = _interopRequireDefault(require("../../global/js/utils/wrapFocus"));

var _TearsheetShell = require("../Tearsheet/TearsheetShell");

var _CreateInfluencer = require("../CreateInfluencer");

var _CreateTearsheetDivider = require("./CreateTearsheetDivider");

var _settings = require("../../settings");

var _constants = require("./constants");

var _hooks = require("../../global/js/hooks");

var _hasValidType = require("../../global/js/utils/hasValidType");

var _devtools = require("../../global/js/utils/devtools");

var _excluded = ["backButtonText", "cancelButtonText", "children", "className", "description", "includeViewAllToggle", "influencerWidth", "initialStep", "label", "nextButtonText", "onClose", "onRequestSubmit", "open", "sideNavAriaLabel", "submitButtonText", "title", "verticalPosition", "viewAllToggleLabelText", "viewAllToggleOffLabelText", "viewAllToggleOnLabelText"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var componentName = 'CreateTearsheet';
var blockClass = "".concat(_settings.pkg.prefix, "--tearsheet-create");
var CreateTearsheet = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
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
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);

  var _useState = (0, _react.useState)([]),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      createTearsheetActions = _useState2[0],
      setCreateTearsheetActions = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      shouldViewAll = _useState4[0],
      setShouldViewAll = _useState4[1];

  var _useState5 = (0, _react.useState)(0),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      currentStep = _useState6[0],
      setCurrentStep = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
      isSubmitting = _useState8[0],
      setIsSubmitting = _useState8[1];

  var _useState9 = (0, _react.useState)(0),
      _useState10 = (0, _slicedToArray2.default)(_useState9, 2),
      activeSectionIndex = _useState10[0],
      setActiveSectionIndex = _useState10[1];

  var previousState = (0, _hooks.usePreviousValue)({
    currentStep: currentStep,
    open: open
  });
  var contentRef = (0, _react.useRef)(); // returns an array of tearsheet steps

  var getTearsheetSteps = (0, _react.useCallback)(function () {
    var _childrenArray$;

    var steps = [];
    var childrenArray = Array.isArray(children) ? children : [children];
    var extractedChildren = childrenArray && ((_childrenArray$ = childrenArray[0]) === null || _childrenArray$ === void 0 ? void 0 : _childrenArray$.type) === _react.default.Fragment ? childrenArray[0].props.children : childrenArray;
    extractedChildren.forEach(function (child) {
      if ((0, _hasValidType.hasValidChildType)({
        child: child,
        type: _constants.CREATE_TEARSHEET_STEP
      })) {
        steps.push(child);
      }
    });
    return steps;
  }, [children]);
  (0, _hooks.useCreateComponentFocus)(previousState, currentStep, getTearsheetSteps, blockClass);
  (0, _hooks.useValidCreateStepCount)(getTearsheetSteps, componentName);
  (0, _hooks.useResetCreateComponent)({
    previousState: previousState,
    open: open,
    setCurrentStep: setCurrentStep,
    initialStep: initialStep,
    totalSteps: getTearsheetSteps().length,
    componentName: componentName
  });
  (0, _hooks.useCreateComponentStepChange)({
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

  (0, _react.useEffect)(function () {
    if (includeViewAllToggle && shouldViewAll) {
      var childrenArray = typeof children !== 'undefined' ? children.length ? (0, _toConsumableArray2.default)(children) : [children] : [];
      var tearsheetStepComponents = childrenArray.filter(function (child) {
        return (0, _hasValidType.hasValidChildType)({
          child: child,
          type: _constants.CREATE_TEARSHEET_STEP
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
                if ((0, _hasValidType.hasValidChildType)({
                  child: stepChild,
                  type: _constants.CREATE_TEARSHEET_SECTION
                })) {
                  tearsheetSectionComponents.push(stepChild);
                }
              });
            } else {
              // The TearsheetStep only has a single React element as a child, lets check to see if it is a TearsheetSection
              if ((0, _hasValidType.hasValidChildType)({
                child: child.props.children,
                type: _constants.CREATE_TEARSHEET_SECTION
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
          if (!(0, _hasValidType.hasValidChildType)({
            child: child.props.children,
            type: _constants.CREATE_TEARSHEET_SECTION
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
    var tearsheetStepComponents = childrenArray && ((_childrenArray$2 = childrenArray[0]) === null || _childrenArray$2 === void 0 ? void 0 : _childrenArray$2.type) === _react.default.Fragment ? childrenArray[0].props.children.filter(function (item) {
      return (0, _hasValidType.hasValidChildType)({
        child: item,
        type: _constants.CREATE_TEARSHEET_STEP
      });
    }) : childrenArray.filter(function (item) {
      return (0, _hasValidType.hasValidChildType)({
        child: item,
        type: _constants.CREATE_TEARSHEET_STEP
      });
    });
    var tearsheetSectionComponents = [];
    tearsheetStepComponents.forEach(function (child) {
      var _child$props, _child$props$children;

      // we have received an array of children, lets check to see that each child is
      // a CreateTearsheetSection component before adding it to tearsheetSectionComponents
      if (shouldViewAll && child !== null && child !== void 0 && (_child$props = child.props) !== null && _child$props !== void 0 && (_child$props$children = _child$props.children) !== null && _child$props$children !== void 0 && _child$props$children.length && typeof child.props.children !== 'string') {
        child.props.children.forEach(function (stepChild) {
          if ((0, _hasValidType.hasValidChildType)({
            child: stepChild,
            type: _constants.CREATE_TEARSHEET_SECTION
          })) {
            tearsheetSectionComponents.push(stepChild);
          }
        });
      } // we have received a single child element, lets check to see that it is
      // a CreateTearsheetSection component before adding it to tearsheetSectionComponents


      if (shouldViewAll && typeof child.props.children !== 'undefined' && !child.props.children.length) {
        if ((0, _hasValidType.hasValidChildType)({
          child: child.props.children,
          type: _constants.CREATE_TEARSHEET_SECTION
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
    var formattedChildren = (0, _propsHelper.extractShapesArray)(childrenElements);
    var stepComponents = childrenArray && ((_childrenArray$3 = childrenArray[0]) === null || _childrenArray$3 === void 0 ? void 0 : _childrenArray$3.type) === _react.default.Fragment ? childrenArray[0].props.children.filter(function (item) {
      return (0, _hasValidType.hasValidChildType)({
        child: item,
        type: _constants.CREATE_TEARSHEET_STEP
      });
    }) : childrenArray.filter(function (item) {
      return (0, _hasValidType.hasValidChildType)({
        child: item,
        type: _constants.CREATE_TEARSHEET_STEP
      });
    });
    var indexOfLastTearsheetStep = formattedChildren.map(function (el) {
      return el === null || el === void 0 ? void 0 : el.type;
    }).lastIndexOf(_constants.CREATE_TEARSHEET_STEP);
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, ' ', stepComponents.map(function (child, stepIndex) {
      var _cx;

      step++;
      return /*#__PURE__*/_react.default.cloneElement(child, {
        className: (0, _classnames.default)(child.props.className, (_cx = {}, (0, _defineProperty2.default)(_cx, "".concat(blockClass, "__step--hidden-step"), !shouldViewAll && currentStep !== step), (0, _defineProperty2.default)(_cx, "".concat(blockClass, "__step--visible-step"), currentStep === step), _cx)),
        key: "key_".concat(stepIndex),
        isViewingAllStepsTogether: shouldViewAll
      }, renderStepChildren(child.props.children, indexOfLastTearsheetStep === step - 1));
    }));
  };

  var renderStepChildren = function renderStepChildren(tearsheetStepComponent, isLastTearsheetStep) {
    var tearsheetStepComponents = Array.isArray(tearsheetStepComponent) ? tearsheetStepComponent : [tearsheetStepComponent];
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, tearsheetStepComponents.map(function (child, index) {
      var _cx2;

      if (!(0, _hasValidType.hasValidChildType)({
        child: child,
        type: _constants.CREATE_TEARSHEET_SECTION
      })) {
        return child;
      } // Needed to be able to not render the divider
      // line on the last section of the last step


      var isLastSectionOfLastStep = isLastTearsheetStep && tearsheetStepComponents.length - 1 === index;
      return /*#__PURE__*/_react.default.cloneElement(child, {
        className: (0, _classnames.default)(child.props.className, (_cx2 = {}, (0, _defineProperty2.default)(_cx2, "".concat(blockClass, "__step--hidden-section"), child.props.viewAllOnly && !shouldViewAll), (0, _defineProperty2.default)(_cx2, "".concat(blockClass, "__step--visible-section"), !child.props.viewAllOnly || child.props.viewAllOnly && shouldViewAll), _cx2)),
        key: "key_".concat(index),
        isViewingAllStepsTogether: shouldViewAll
      }, /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, child, shouldViewAll && !isLastSectionOfLastStep && /*#__PURE__*/_react.default.createElement(_CreateTearsheetDivider.CreateTearsheetDivider, null)));
    }));
  }; // adds focus trap functionality

  /* istanbul ignore next */


  var handleBlur = function handleBlur(_ref2) {
    var oldActiveNode = _ref2.target,
        currentActiveNode = _ref2.relatedTarget;
    var visibleStepInnerContent = document.querySelector(".".concat(_settings.pkg.prefix, "--tearsheet__body"));
    var visibleStepStartMarker;
    var visibleStepEndMarker;

    if (open && visibleStepInnerContent) {
      (0, _wrapFocus.default)({
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
    var createTearsheetOuterElement = document.querySelector(".".concat(blockClass, " .").concat(_settings.carbon.prefix, "--modal-container"));
    var influencerElement = document.querySelector(".".concat(blockClass, " .").concat(_settings.pkg.prefix, "--tearsheet__influencer"));
    var totalTearsheetWidth = createTearsheetOuterElement.offsetWidth - influencerElement.offsetWidth;
    createTearsheetOuterElement.style.setProperty("--".concat(blockClass, "--total-width"), "".concat(totalTearsheetWidth, "px"));
  };

  (0, _reactResizeDetector.useResizeDetector)({
    handleWidth: true,
    onResize: handleResize,
    targetRef: contentRef
  });
  return /*#__PURE__*/_react.default.createElement(_TearsheetShell.TearsheetShell, (0, _extends2.default)({}, rest, (0, _devtools.getDevtoolsProps)(componentName), {
    actions: createTearsheetActions,
    className: (0, _classnames.default)(blockClass, className),
    description: description,
    hasCloseIcon: false,
    influencer: /*#__PURE__*/_react.default.createElement(_CreateInfluencer.CreateInfluencer, {
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
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(blockClass, "__content"),
    onBlur: handleBlur,
    ref: contentRef
  }, open ? /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.Grid, null, /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.Form, null, renderChildren(children))) : null));
}); // Return a placeholder if not released and not enabled by feature flag

exports.CreateTearsheet = CreateTearsheet;
exports.CreateTearsheet = CreateTearsheet = _settings.pkg.checkComponentEnabled(CreateTearsheet, componentName); // The display name of the component, used by React. Note that displayName
// is used in preference to relying on function.name.

CreateTearsheet.displayName = componentName; // Note that the descriptions here should be kept in sync with those for the
// corresponding props for TearsheetNarrow and TearsheetShell components.

CreateTearsheet.propTypes = {
  /**
   * The back button text
   */
  backButtonText: _propTypes.default.string.isRequired,

  /**
   * The cancel button text
   */
  cancelButtonText: _propTypes.default.string.isRequired,

  /**
   * The main content of the tearsheet
   */
  children: (0, _hasValidType.hasValidChildrenType)({
    componentName: componentName,
    childType: _constants.CREATE_TEARSHEET_STEP
  }),

  /**
   * An optional class or classes to be added to the outermost element.
   */
  className: _propTypes.default.string,

  /**
   * A description of the flow, displayed in the header area of the tearsheet.
   */
  description: _propTypes.default.node,

  /**
   * @ignore
   * Used to optionally include view all toggle
   */
  includeViewAllToggle: _propTypes.default.bool,

  /**
   * Used to set the size of the influencer
   */
  influencerWidth: _propTypes.default.oneOf(['narrow', 'wide']),

  /**
   * This can be used to open the component to a step other than the first step.
   * For example, a create flow was previously in progress, data was saved, and
   * is now being completed.
   */
  initialStep: _propTypes.default.number,

  /**
   * A label for the tearsheet, displayed in the header area of the tearsheet
   * to maintain context for the tearsheet (e.g. as the title changes from page
   * to page of a multi-page task).
   */
  label: _propTypes.default.node,

  /**
   * The next button text
   */
  nextButtonText: _propTypes.default.string.isRequired,

  /**
   * An optional handler that is called when the user closes the tearsheet (by
   * clicking the close button, if enabled, or clicking outside, if enabled).
   * Returning `false` here prevents the modal from closing.
   */
  onClose: _propTypes.default.func,

  /**
   * Specify a handler for submitting the multi step tearsheet (final step).
   * This function can _optionally_ return a promise that is either resolved or rejected and the CreateTearsheet will handle the submitting state of the create button.
   */
  onRequestSubmit: _propTypes.default.func.isRequired,

  /**
   * Specifies whether the tearsheet is currently open.
   */
  open: _propTypes.default.bool,

  /**
   * @ignore
   * The aria label to be used for the UI Shell SideNav Carbon component
   */
  sideNavAriaLabel: _propTypes.default.string.isRequired.if(function (_ref3) {
    var includeViewAllToggle = _ref3.includeViewAllToggle;
    return includeViewAllToggle;
  }),

  /**
   * The submit button text
   */
  submitButtonText: _propTypes.default.string.isRequired,

  /**
   * The main title of the tearsheet, displayed in the header area.
   */
  title: _propTypes.default.node,

  /**
   * The position of the top of tearsheet in the viewport. The 'normal'
   * position (the default) is a short distance down from the top of the
   * viewport, leaving room at the top for a global header bar to show through
   * from below. The 'lower' position provides a little extra room at the top
   * to allow an action bar navigation or breadcrumbs to also show through.
   */
  verticalPosition: _propTypes.default.oneOf(['normal', 'lower']),

  /**
   * @ignore
   * Sets the label text for the view all toggle component
   */
  viewAllToggleLabelText: _propTypes.default.string.isRequired.if(function (_ref4) {
    var includeViewAllToggle = _ref4.includeViewAllToggle;
    return includeViewAllToggle === true;
  }),

  /**
   * @ignore
   * Sets the label text for the view all toggle `off` text
   */
  viewAllToggleOffLabelText: _propTypes.default.string.isRequired.if(function (_ref5) {
    var includeViewAllToggle = _ref5.includeViewAllToggle;
    return includeViewAllToggle === true;
  }),

  /**
   * @ignore
   * Sets the label text for the view all toggle `on` text
   */
  viewAllToggleOnLabelText: _propTypes.default.string.isRequired.if(function (_ref6) {
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