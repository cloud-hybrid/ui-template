"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deprecatedProps = exports.SidePanel = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactResizeDetector = require("react-resize-detector");

var _motion = require("@carbon/motion");

var _devtools = require("../../global/js/utils/devtools");

var _propsHelper = require("../../global/js/utils/props-helper");

var _wrapFocus = _interopRequireDefault(require("../../global/js/utils/wrapFocus"));

var _settings = require("../../settings");

var _constants = require("./constants");

var _carbonComponentsReact = require("carbon-components-react");

var _iconsReact = require("@carbon/icons-react");

var _ActionSet = require("../ActionSet");

var _excluded = ["actionToolbarButtons", "actions", "animateTitle", "children", "className", "closeIconDescription", "condensedActions", "currentStep", "includeOverlay", "labelText", "navigationBackIconDescription", "onNavigationBack", "onRequestClose", "onUnmount", "open", "pageContentSelector", "placement", "preventCloseOnClickOutside", "selectorPageContent", "selectorPrimaryFocus", "size", "slideIn", "subtitle", "title"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var blockClass = "".concat(_settings.pkg.prefix, "--side-panel");
var componentName = 'SidePanel'; // NOTE: the component SCSS is not imported here: it is rolled up separately.

/**
 * Side panels keep users in-context of a page while performing tasks like navigating, editing, viewing details, or configuring something new.
 */

var SidePanel = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var _ref4, _cx4;

  var actionToolbarButtons = _ref.actionToolbarButtons,
      actions = _ref.actions,
      animateTitle = _ref.animateTitle,
      children = _ref.children,
      className = _ref.className,
      closeIconDescription = _ref.closeIconDescription,
      condensedActions = _ref.condensedActions,
      currentStep = _ref.currentStep,
      includeOverlay = _ref.includeOverlay,
      labelText = _ref.labelText,
      navigationBackIconDescription = _ref.navigationBackIconDescription,
      onNavigationBack = _ref.onNavigationBack,
      onRequestClose = _ref.onRequestClose,
      onUnmount = _ref.onUnmount,
      open = _ref.open,
      pageContentSelector = _ref.pageContentSelector,
      placement = _ref.placement,
      preventCloseOnClickOutside = _ref.preventCloseOnClickOutside,
      selectorPageContent = _ref.selectorPageContent,
      selectorPrimaryFocus = _ref.selectorPrimaryFocus,
      size = _ref.size,
      slideIn = _ref.slideIn,
      subtitle = _ref.subtitle,
      title = _ref.title,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);

  var _useState = (0, _react.useState)(open),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      shouldRender = _useState2[0],
      setRender = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      animationComplete = _useState4[0],
      setAnimationComplete = _useState4[1];

  var _useState5 = (0, _react.useState)(0),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      panelHeight = _useState6[0],
      setPanelHeight = _useState6[1];

  var sidePanelRef = (0, _react.useRef)();
  var sidePanelOverlayRef = (0, _react.useRef)();
  var startTrapRef = (0, _react.useRef)();
  var endTrapRef = (0, _react.useRef)();
  var sidePanelInnerRef = (0, _react.useRef)();
  var sidePanelCloseRef = (0, _react.useRef)(); // scroll panel to top going between steps

  (0, _react.useEffect)(function () {
    var panelRef = ref || sidePanelRef;

    if (panelRef && panelRef.current) {
      var scrollableSection = panelRef.current.querySelector(".".concat(blockClass, "__inner-content"));
      scrollableSection.scrollTop = 0;
    }
  }, [currentStep, ref]); // set initial focus when side panel opens

  (0, _react.useEffect)(function () {
    var initialFocus = function initialFocus(focusContainerElement) {
      var containerElement = focusContainerElement;
      var primaryFocusElement = containerElement && containerElement.querySelector(selectorPrimaryFocus);

      if (primaryFocusElement) {
        return primaryFocusElement;
      } else {
        return sidePanelCloseRef && sidePanelCloseRef.current;
      }
    };

    var focusButton = function focusButton(focusContainerElement) {
      var target = initialFocus(focusContainerElement);
      target === null || target === void 0 ? void 0 : target.focus();
    };

    if (open && animationComplete) {
      focusButton(sidePanelInnerRef.current);
    }
  }, [selectorPrimaryFocus, open, animationComplete]);
  (0, _react.useEffect)(function () {
    if (open && actions && actions.length && animationComplete) {
      var sidePanelOuter = document.querySelector("#".concat(blockClass, "-outer"));
      var actionsContainer = getActionsContainerElement();
      var actionsHeight = (actionsContainer === null || actionsContainer === void 0 ? void 0 : actionsContainer.offsetHeight) + 16; // add additional 1rem spacing to bottom padding

      actionsHeight = "".concat(Math.round(actionsHeight / 16), "rem");
      sidePanelOuter === null || sidePanelOuter === void 0 ? void 0 : sidePanelOuter.style.setProperty("--".concat(blockClass, "--content-bottom-padding"), actionsHeight);
    }
  }, [actions, condensedActions, open, animationComplete]); // Add console warning if labelText is provided without a title.
  // This combination is not allowed.

  (0, _react.useEffect)(function () {
    if (!title && labelText) {
      console.warn("".concat(componentName, ": The prop `labelText` was provided without a `title`. It is required to have a `title` when using the `labelText` prop."));
    }
  }, [labelText, title]);
  /* istanbul ignore next */

  var handleResize = function handleResize(width, height) {
    setPanelHeight(height);
    var sidePanelOuter = document.querySelector("#".concat(blockClass, "-outer"));
    var actionsContainer = getActionsContainerElement();
    var actionsHeight = actionsContainer.offsetHeight + 16; // add additional 1rem spacing to bottom padding

    actionsHeight = "".concat(Math.round(actionsHeight / 16), "rem");
    sidePanelOuter.style.setProperty("--".concat(blockClass, "--content-bottom-padding"), actionsHeight);
  };

  var getActionsContainerElement = function getActionsContainerElement() {
    var sidePanelOuter = document.querySelector("#".concat(blockClass, "-outer"));
    return sidePanelOuter && sidePanelOuter.querySelector(".".concat(blockClass, "__actions-container"));
  }; // Title and subtitle scroll animation


  (0, _react.useEffect)(function () {
    if (open && animateTitle && animationComplete && title && title.length) {
      var _document$querySelect, _document$querySelect2, _document$querySelect3;

      var sidePanelOuter = document.querySelector("#".concat(blockClass, "-outer"));
      var sidePanelScrollArea = document.querySelector("#".concat(blockClass, "-outer .").concat(blockClass, "__inner-content"));
      var sidePanelTitleElement = document.querySelector(".".concat(blockClass, "__title-text"));
      var sidePanelCollapsedTitleElement = document.querySelector(".".concat(blockClass, "__collapsed-title-text"));
      var sidePanelSubtitleElement = document.querySelector(".".concat("".concat(blockClass, "__subtitle-text")));
      var sidePanelSubtitleElementHeight = (sidePanelSubtitleElement === null || sidePanelSubtitleElement === void 0 ? void 0 : sidePanelSubtitleElement.offsetHeight) || 0; // set default subtitle height if a subtitle is not provided to enable scrolling animation

      var panelOuterHeight = panelHeight;
      var scrollSectionHeight = (_document$querySelect = document.querySelector(".".concat(blockClass, "__body-content"))) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.offsetHeight;
      var titleContainerHeight = (_document$querySelect2 = document.querySelector(".".concat(blockClass, "__title-container"))) === null || _document$querySelect2 === void 0 ? void 0 : _document$querySelect2.offsetHeight;
      var labelTextHeight = (_document$querySelect3 = document.querySelector(".".concat(blockClass, "__label-text"))) === null || _document$querySelect3 === void 0 ? void 0 : _document$querySelect3.offsetHeight;
      var totalScrollingContentHeight = titleContainerHeight + sidePanelSubtitleElementHeight + scrollSectionHeight; // if the difference between the total scrolling height and the panel height is less than
      // the subtitleElement height OR if the subtitle element height is 0, use that difference
      // as the length of the scroll animation (otherwise the animation will not be able to complete
      // because there is not enough scrolling distance to complete it).

      sidePanelSubtitleElementHeight = totalScrollingContentHeight - panelOuterHeight < sidePanelSubtitleElementHeight ? totalScrollingContentHeight - panelOuterHeight : sidePanelSubtitleElementHeight === 0 ? 16 : sidePanelSubtitleElementHeight;
      sidePanelSubtitleElementHeight = sidePanelSubtitleElementHeight < 0 ? (sidePanelScrollArea === null || sidePanelScrollArea === void 0 ? void 0 : sidePanelScrollArea.scrollHeight) - (sidePanelScrollArea === null || sidePanelScrollArea === void 0 ? void 0 : sidePanelScrollArea.clientHeight) : sidePanelSubtitleElementHeight;
      /* istanbul ignore next */

      sidePanelScrollArea && sidePanelScrollArea.addEventListener('scroll', function () {
        var scrollTop = sidePanelScrollArea.scrollTop; // if scrolling has occurred

        if (scrollTop > 0) {
          sidePanelOuter.classList.add("".concat(blockClass, "__with-condensed-header")); // Set subtitle opacity calculation here
          // as scroll progresses

          var titleOpacity = Math.min(1, (sidePanelSubtitleElementHeight - scrollTop) / sidePanelSubtitleElementHeight);
          titleOpacity = titleOpacity < 0 ? 0 : titleOpacity;
          sidePanelOuter.style.setProperty("--".concat(blockClass, "--subtitle-opacity"), titleOpacity); // Calculate divider opacity to avoid border
          // abruptly appearing when scrolling starts.
          // This approach uses a pseudo element and sets
          // the opacity as scroll progresses.

          var dividerOpacity = Math.min(scrollTop / sidePanelSubtitleElementHeight, 1);
          sidePanelOuter.style.setProperty("--".concat(blockClass, "--divider-opacity"), "".concat(Math.min(1, dividerOpacity))); // We need to know the height of the title element
          // so that we know how far to place the action toolbar
          // from the top since it is sticky

          var titleTextHeight = Math.max(sidePanelTitleElement.offsetHeight);
          sidePanelOuter.style.setProperty("--".concat(blockClass, "--title-height"), "".concat(titleTextHeight + 16, "px")); // Set title y positioning

          var titleYPosition = Math.min(scrollTop / sidePanelSubtitleElementHeight, 1);
          sidePanelOuter.style.setProperty("--".concat(blockClass, "--title-y-position"), "".concat(-Math.abs(titleYPosition), "rem")); // mark title with aria-hidden={true} if opacity reaches 0

          if (titleOpacity === 0) {
            sidePanelTitleElement.setAttribute('aria-hidden', 'true');
            sidePanelCollapsedTitleElement.setAttribute('aria-hidden', 'false');
          } // Set collapsed title y positioning


          var collapsedTitleYPosition = Math.min(1, (sidePanelSubtitleElementHeight - scrollTop) / sidePanelSubtitleElementHeight);
          collapsedTitleYPosition = collapsedTitleYPosition < 0 ? 0 : collapsedTitleYPosition;
          sidePanelOuter.style.setProperty("--".concat(blockClass, "--collapsed-title-y-position"), "".concat(collapsedTitleYPosition, "rem")); // Set label text height

          var scrollAnimationProgress = dividerOpacity;
          var reduceTitleContainerHeightAmount = labelTextHeight * scrollAnimationProgress / titleContainerHeight * 100;
          sidePanelOuter.style.setProperty("--".concat(blockClass, "--label-text-height"), "".concat(Math.trunc(reduceTitleContainerHeightAmount), "px"));
          sidePanelOuter.style.setProperty("--".concat(blockClass, "--title-container-height"), "".concat(titleContainerHeight, "px"));
        } else {
          sidePanelTitleElement.setAttribute('aria-hidden', 'false');
          sidePanelCollapsedTitleElement.setAttribute('aria-hidden', 'true');
          sidePanelOuter.classList.remove("".concat(blockClass, "__with-condensed-header"));
          sidePanelOuter.style.setProperty("--".concat(blockClass, "--subtitle-opacity"), 1);
          sidePanelOuter.style.setProperty("--".concat(blockClass, "--title-y-position"), 0);
          sidePanelOuter.style.setProperty("--".concat(blockClass, "--divider-opacity"), 0);
          sidePanelOuter.style.setProperty("--".concat(blockClass, "--collapsed-title-y-position"), "1rem");
          sidePanelOuter.style.setProperty("--".concat(blockClass, "--label-text-height"), "0px");
        }
      });
    }

    if (open && shouldRender && !animateTitle) {
      var _sidePanelOuter = document.querySelector("#".concat(blockClass, "-outer"));

      var _sidePanelTitleElement = document.querySelector(".".concat(blockClass, "__title-container > .").concat(blockClass, "__title-text"));

      var _sidePanelSubtitleElement = document.querySelector(".".concat(blockClass, "__subtitle-text"));

      var actionToolbarElement = document.querySelector(".".concat(blockClass, "__action-toolbar"));

      var _sidePanelSubtitleElementHeight = (_sidePanelSubtitleElement === null || _sidePanelSubtitleElement === void 0 ? void 0 : _sidePanelSubtitleElement.offsetHeight) || 0;

      var sidePanelActionBarElementHeight = (actionToolbarElement === null || actionToolbarElement === void 0 ? void 0 : actionToolbarElement.offsetHeight) || 0;
      var titleHeight = (_sidePanelTitleElement === null || _sidePanelTitleElement === void 0 ? void 0 : _sidePanelTitleElement.offsetHeight) + 24;
      _sidePanelOuter === null || _sidePanelOuter === void 0 ? void 0 : _sidePanelOuter.style.setProperty("--".concat(blockClass, "--title-text-height"), "".concat(titleHeight, "px"));
      _sidePanelOuter === null || _sidePanelOuter === void 0 ? void 0 : _sidePanelOuter.style.setProperty("--".concat(blockClass, "--subtitle-container-height"), "".concat(_sidePanelSubtitleElementHeight, "px"));
      _sidePanelOuter === null || _sidePanelOuter === void 0 ? void 0 : _sidePanelOuter.style.setProperty("--".concat(blockClass, "--action-bar-container-height"), "".concat(sidePanelActionBarElementHeight, "px"));
    }
  }, [open, animateTitle, animationComplete, shouldRender, panelHeight, title]); // click outside functionality if `includeOverlay` prop is set

  (0, _react.useEffect)(function () {
    var handleOutsideClick = function handleOutsideClick(event) {
      var panelRef = ref || sidePanelRef;

      if (panelRef.current && sidePanelOverlayRef.current && sidePanelOverlayRef.current.contains(event.target) && onRequestClose) {
        onRequestClose();
      }
    };

    var bodyElement = document.body;

    if (includeOverlay && open) {
      bodyElement.style.overflow = 'hidden';
    } else if (includeOverlay && !open) {
      bodyElement.style.overflow = 'initial';
    }

    if (includeOverlay && !preventCloseOnClickOutside) {
      document.addEventListener('click', handleOutsideClick);
    }

    return function () {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [includeOverlay, onRequestClose, open, preventCloseOnClickOutside, ref]); // initialize the side panel to open

  (0, _react.useEffect)(function () {
    if (open) {
      setRender(true);
    }
  }, [open]); // initializes the side panel to close

  var onAnimationEnd = function onAnimationEnd() {
    if (!open) {
      onUnmount && onUnmount();
      setRender(false);
    }

    setAnimationComplete(true);
  }; // initializes the side panel to open


  var _onAnimationStart = function onAnimationStart(event) {
    event.persist();
    var isPanelTarget = event.target.id === "".concat(blockClass, "-outer");

    if (isPanelTarget) {
      setAnimationComplete(false);
    }
  }; // used to reset margins of the slide in panel when closed/closing


  (0, _react.useEffect)(function () {
    if (!open && slideIn) {
      var pageContentElement = document.querySelector(selectorPageContent || pageContentSelector);

      if (placement && placement === 'right' && pageContentElement) {
        pageContentElement.style.marginRight = 0;
      } else if (pageContentElement) {
        pageContentElement.style.marginLeft = 0;
      }
    }
  }, [open, placement, selectorPageContent, pageContentSelector, slideIn]); // used to set margins of content for slide in panel version

  (0, _react.useEffect)(function () {
    if (shouldRender && slideIn) {
      var pageContentElement = document.querySelector(selectorPageContent || pageContentSelector);

      if (placement && placement === 'right' && pageContentElement) {
        pageContentElement.style.marginRight = 0;
        pageContentElement.style.transition = "margin-right ".concat(_motion.moderate02);
        pageContentElement.style.marginRight = _constants.SIDE_PANEL_SIZES[size];
      } else if (pageContentElement) {
        pageContentElement.style.marginLeft = 0;
        pageContentElement.style.transition = "margin-left ".concat(_motion.moderate02);
        pageContentElement.style.marginLeft = _constants.SIDE_PANEL_SIZES[size];
      }
    }
  }, [slideIn, selectorPageContent, pageContentSelector, placement, shouldRender, size]); // adds focus trap functionality

  /* istanbul ignore next */

  var handleBlur = function handleBlur(_ref2) {
    var oldActiveNode = _ref2.target,
        currentActiveNode = _ref2.relatedTarget;

    // focus trap should only be set if the side panel is a `slideOver` type
    if (open && sidePanelInnerRef && !slideIn) {
      (0, _wrapFocus.default)({
        bodyNode: sidePanelInnerRef.current,
        startTrapRef: startTrapRef,
        endTrapRef: endTrapRef,
        currentActiveNode: currentActiveNode,
        oldActiveNode: oldActiveNode
      });
    }
  };

  var primaryActionContainerClassNames = (0, _classnames.default)(["".concat(blockClass, "__actions-container"), (0, _defineProperty2.default)({}, "".concat(blockClass, "__actions-container-condensed"), condensedActions)]);
  var mainPanelClassNames = (0, _classnames.default)([blockClass, className, "".concat(blockClass, "__container"), "".concat(blockClass, "__container--").concat(size), (_ref4 = {}, (0, _defineProperty2.default)(_ref4, "".concat(blockClass, "__container-right-placement"), placement === 'right'), (0, _defineProperty2.default)(_ref4, "".concat(blockClass, "__container-left-placement"), placement === 'left'), (0, _defineProperty2.default)(_ref4, "".concat(blockClass, "__container-with-action-toolbar"), actionToolbarButtons && actionToolbarButtons.length), (0, _defineProperty2.default)(_ref4, "".concat(blockClass, "__container-without-overlay"), !includeOverlay && !slideIn), (0, _defineProperty2.default)(_ref4, "".concat(blockClass, "__container-is-animating"), !animationComplete || !open), _ref4)]);

  var renderHeader = function renderHeader() {
    var _cx, _cx2;

    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
      className: (0, _classnames.default)("".concat(blockClass, "__title-container"), (_cx = {}, (0, _defineProperty2.default)(_cx, "".concat(blockClass, "__on-detail-step"), currentStep > 0), (0, _defineProperty2.default)(_cx, "".concat(blockClass, "__on-detail-step-without-title"), currentStep > 0 && !title), (0, _defineProperty2.default)(_cx, "".concat(blockClass, "__title-container--no-title-animation"), !animateTitle), (0, _defineProperty2.default)(_cx, "".concat(blockClass, "__title-container-is-animating"), !animationComplete || !open), (0, _defineProperty2.default)(_cx, "".concat(blockClass, "__title-container-without-title"), !title), _cx))
    }, currentStep > 0 && /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.Button, {
      "aria-label": navigationBackIconDescription,
      kind: "ghost",
      size: "small",
      disabled: false,
      renderIcon: _iconsReact.ArrowLeft20,
      iconDescription: navigationBackIconDescription,
      className: "".concat(blockClass, "__navigation-back-button"),
      onClick: onNavigationBack
    }), title && title.length && labelText && labelText.length && /*#__PURE__*/_react.default.createElement("p", {
      className: "".concat(blockClass, "__label-text")
    }, labelText), title && title.length && renderTitle()), /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.Button, {
      "aria-label": closeIconDescription,
      kind: "ghost",
      size: "small",
      renderIcon: _iconsReact.Close20,
      iconDescription: closeIconDescription,
      className: "".concat(blockClass, "__close-button"),
      onClick: onRequestClose,
      ref: sidePanelCloseRef
    }), subtitle && subtitle.length && /*#__PURE__*/_react.default.createElement("p", {
      className: (0, _classnames.default)("".concat(blockClass, "__subtitle-text"), (_cx2 = {}, (0, _defineProperty2.default)(_cx2, "".concat(blockClass, "__subtitle-text-no-animation"), !animateTitle), (0, _defineProperty2.default)(_cx2, "".concat(blockClass, "__subtitle-text-no-animation-no-action-toolbar"), !animateTitle && (!actionToolbarButtons || !actionToolbarButtons.length)), (0, _defineProperty2.default)(_cx2, "".concat(blockClass, "__subtitle-text-is-animating"), !animationComplete && animateTitle), (0, _defineProperty2.default)(_cx2, "".concat(blockClass, "__subtitle-without-title"), !title), _cx2))
    }, subtitle), actionToolbarButtons && actionToolbarButtons.length && /*#__PURE__*/_react.default.createElement("div", {
      className: (0, _classnames.default)("".concat(blockClass, "__action-toolbar"), (0, _defineProperty2.default)({}, "".concat(blockClass, "__action-toolbar-no-animation"), !animateTitle))
    }, actionToolbarButtons.map(function (action) {
      var _ref5;

      return /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.Button, {
        key: action.label,
        kind: action.kind || 'ghost',
        size: "small",
        renderIcon: action.icon,
        iconDescription: action.label,
        tooltipPosition: "bottom",
        tooltipAlignment: "center",
        hasIconOnly: !action.leading,
        disabled: action.disabled,
        className: (0, _classnames.default)(["".concat(blockClass, "__action-toolbar-button"), action.className, (_ref5 = {}, (0, _defineProperty2.default)(_ref5, "".concat(blockClass, "__action-toolbar-icon-only-button"), action.icon && !action.leading), (0, _defineProperty2.default)(_ref5, "".concat(blockClass, "__action-toolbar-leading-button"), action.leading), _ref5)]),
        onClick: function onClick(event) {
          return action.onClick ? action.onClick(event) : action.onActionToolbarButtonClick && action.onActionToolbarButtonClick(event);
        }
      }, action.leading && action.label);
    })));
  };

  var renderTitle = function renderTitle() {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, title && title.length && /*#__PURE__*/_react.default.createElement("h2", {
      className: "".concat(blockClass, "__title-text"),
      title: title,
      "aria-hidden": false
    }, title), animateTitle && title && title.length && /*#__PURE__*/_react.default.createElement("h2", {
      className: "".concat(blockClass, "__collapsed-title-text"),
      title: title,
      "aria-hidden": true
    }, title));
  };

  var contentRef = ref || sidePanelRef;
  (0, _reactResizeDetector.useResizeDetector)({
    handleHeight: true,
    onResize: handleResize,
    targetRef: contentRef
  });
  return shouldRender && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, (0, _devtools.getDevtoolsProps)(componentName), rest, {
    id: "".concat(blockClass, "-outer"),
    className: mainPanelClassNames,
    style: {
      animation: "".concat(open ? placement === 'right' ? "sidePanelEntranceRight ".concat(_motion.moderate02) : "sidePanelEntranceLeft ".concat(_motion.moderate02) : placement === 'right' ? "sidePanelExitRight ".concat(_motion.moderate02) : "sidePanelExitLeft ".concat(_motion.moderate02))
    },
    onAnimationEnd: onAnimationEnd,
    onAnimationStart: function onAnimationStart(event) {
      return _onAnimationStart(event);
    },
    onBlur: handleBlur,
    ref: contentRef,
    role: "complementary",
    "aria-label": title
  }), /*#__PURE__*/_react.default.createElement("span", {
    ref: startTrapRef,
    tabIndex: "0",
    role: "link",
    className: "".concat(blockClass, "__visually-hidden")
  }, "Focus sentinel"), !animateTitle && renderHeader(), /*#__PURE__*/_react.default.createElement("div", {
    ref: sidePanelInnerRef,
    className: (0, _classnames.default)("".concat(blockClass, "__inner-content"), (_cx4 = {}, (0, _defineProperty2.default)(_cx4, "".concat(blockClass, "__static-inner-content"), !animateTitle), (0, _defineProperty2.default)(_cx4, "".concat(blockClass, "__inner-content-with-actions"), actions && actions.length), _cx4))
  }, animateTitle && renderHeader(), /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(blockClass, "__body-content")
  }, children), /*#__PURE__*/_react.default.createElement(_ActionSet.ActionSet, {
    actions: actions,
    className: primaryActionContainerClassNames,
    size: size
  })), /*#__PURE__*/_react.default.createElement("span", {
    ref: endTrapRef,
    tabIndex: "0",
    role: "link",
    className: "".concat(blockClass, "__visually-hidden")
  }, "Focus sentinel")), includeOverlay && /*#__PURE__*/_react.default.createElement("div", {
    ref: sidePanelOverlayRef,
    className: "".concat(blockClass, "__overlay"),
    style: {
      animation: "".concat(open ? "sidePanelOverlayEntrance ".concat(_motion.moderate02) : "sidePanelOverlayExit ".concat(_motion.moderate02))
    }
  }));
}); // Return a placeholder if not released and not enabled by feature flag


exports.SidePanel = SidePanel;
exports.SidePanel = SidePanel = _settings.pkg.checkComponentEnabled(SidePanel, componentName);

SidePanel.validatePageContentSelector = function () {
  return function (_ref6) {
    var slideIn = _ref6.slideIn,
        selectorPageContent = _ref6.selectorPageContent;

    if (slideIn && !selectorPageContent) {
      throw new Error("".concat(componentName, ": selectorPageContent prop missing, this is required when using a slideIn panel. If missing, the component will display as a slide over panel."));
    }
  };
};

var deprecatedProps = {
  /**
   * **Deprecated**
   *
   * This is the selector to the element that contains all of the page content that will shrink if the panel is a slide in.
   * This prop is required when using the `slideIn` variant of the side panel.
   */
  pageContentSelector: (0, _propsHelper.deprecateProp)((0, _propsHelper.allPropTypes)([SidePanel.validatePageContentSelector(), _propTypes.default.string]), 'This prop has been renamed to `selectorPageContent`.')
};
exports.deprecatedProps = deprecatedProps;
SidePanel.propTypes = _objectSpread({
  /**
   * Sets the action toolbar buttons
   */
  actionToolbarButtons: _propTypes.default.arrayOf(_propTypes.default.shape({
    label: _propTypes.default.string,
    leading: _propTypes.default.bool,
    icon: _propTypes.default.object,
    onActionToolbarButtonClick: (0, _propsHelper.deprecateProp)(_propTypes.default.func, 'This prop will be removed in the future. Please use `onClick` instead'),
    onClick: _propTypes.default.func,
    kind: _propTypes.default.oneOf(['ghost', 'tertiary', 'secondary', 'primary'])
  })),

  /**
   * The primary actions to be shown in the side panel. Each action is
   * specified as an object with optional fields: 'label' to supply the button
   * label, 'kind' to select the button kind (must be 'primary', 'secondary' or
   * 'ghost'), 'loading' to display a loading indicator, and 'onClick' to
   * receive notifications when the button is clicked. Additional fields in the
   * object will be passed to the Button component, and these can include
   * 'disabled', 'ref', 'className', and any other Button props. Any other
   * fields in the object will be passed through to the button element as HTML
   * attributes.
   *
   * See https://react.carbondesignsystem.com/?path=/docs/components-button--default#component-api
   */
  actions: (0, _propsHelper.allPropTypes)([_ActionSet.ActionSet.validateActions(), _propTypes.default.arrayOf(_propTypes.default.shape(_objectSpread(_objectSpread({}, _carbonComponentsReact.Button.propTypes), {}, {
    kind: _propTypes.default.oneOf(['ghost', 'secondary', 'primary']),
    label: _propTypes.default.string,
    loading: _propTypes.default.bool,
    // we duplicate this Button prop to improve the DocGen here
    onClick: _carbonComponentsReact.Button.propTypes.onClick
  })))]),

  /**
   * Determines if the title will animate on scroll
   */
  animateTitle: _propTypes.default.bool,

  /**
   * Sets the body content of the side panel
   */
  children: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.node), _propTypes.default.node]).isRequired,

  /**
   * Sets an optional className to be added to the side panel outermost element
   */
  className: _propTypes.default.string,

  /**
   * Sets the close button icon description
   */
  closeIconDescription: _propTypes.default.string.isRequired,

  /**
   * Determines whether the side panel should render the condensed version (affects action buttons primarily)
   */
  condensedActions: _propTypes.default.bool,

  /**
   * Sets the current step of the side panel
   */
  currentStep: _propTypes.default.number,

  /**
   * Determines whether the side panel should render with an overlay
   */
  includeOverlay: _propTypes.default.bool,

  /**
   * Sets the label text which will display above the title text
   */
  labelText: _propTypes.default.string,

  /**
   * Sets the icon description for the navigation back icon button
   */
  navigationBackIconDescription: _propTypes.default.string,

  /**
   * Changes the current side panel page to the previous page
   */
  onNavigationBack: _propTypes.default.func,

  /**
   * Specify a handler for closing the side panel.
   * This handler closes the modal, e.g. changing `open` prop.
   */
  onRequestClose: _propTypes.default.func,

  /**
   * Optional function called when the side panel exit animation is complete.
   * This handler can be used for any state cleanup needed before the panel is removed from the DOM.
   */
  onUnmount: _propTypes.default.func,

  /**
   * Determines whether the side panel should render or not
   */
  open: _propTypes.default.bool.isRequired,

  /**
   * Determines if the side panel is on the right or left
   */
  placement: _propTypes.default.oneOf(['left', 'right']),

  /**
   * Prevent closing on click outside of the panel
   */
  preventCloseOnClickOutside: _propTypes.default.bool,

  /**
   * This is the selector to the element that contains all of the page content that will shrink if the panel is a slide in.
   * This prop is required when using the `slideIn` variant of the side panel.
   */
  selectorPageContent: _propTypes.default.string.isRequired.if(function (_ref7) {
    var slideIn = _ref7.slideIn;
    return slideIn === true;
  }),

  /**
   * Specify a CSS selector that matches the DOM element that should
   * be focused when the side panel opens
   */
  selectorPrimaryFocus: _propTypes.default.string,

  /**
   * Sets the size of the side panel
   */
  size: _propTypes.default.oneOf(['xs', 'sm', 'md', 'lg', 'max']),

  /**
   * Determines if this panel slides in
   */
  slideIn: _propTypes.default.bool,

  /**
   * Sets the subtitle text
   */
  subtitle: _propTypes.default.string,

  /**
   * Sets the title text
   */
  title: _propTypes.default.string
}, deprecatedProps);
SidePanel.defaultProps = {
  animateTitle: true,
  placement: 'right',
  size: 'md',
  slideIn: false,
  currentStep: 0,
  navigationBackIconDescription: 'Back',
  closeIconDescription: 'Close',
  preventCloseOnClickOutside: false
};
SidePanel.displayName = componentName;