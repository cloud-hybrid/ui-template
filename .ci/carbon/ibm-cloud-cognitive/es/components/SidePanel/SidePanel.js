import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["actionToolbarButtons", "actions", "animateTitle", "children", "className", "closeIconDescription", "condensedActions", "currentStep", "includeOverlay", "labelText", "navigationBackIconDescription", "onNavigationBack", "onRequestClose", "onUnmount", "open", "pageContentSelector", "placement", "preventCloseOnClickOutside", "selectorPageContent", "selectorPrimaryFocus", "size", "slideIn", "subtitle", "title"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
// Import portions of React that are needed.
import React, { useState, useEffect, useRef } from 'react'; // Other standard imports.

import PropTypes from 'prop-types';
import cx from 'classnames';
import { useResizeDetector } from 'react-resize-detector';
import { moderate02 } from '@carbon/motion';
import { getDevtoolsProps } from '../../global/js/utils/devtools';
import { allPropTypes, deprecateProp } from '../../global/js/utils/props-helper';
import wrapFocus from '../../global/js/utils/wrapFocus';
import { pkg } from '../../settings';
import { SIDE_PANEL_SIZES } from './constants'; // Carbon and package components we use.

import { Button } from 'carbon-components-react';
import { Close20, ArrowLeft20 } from '@carbon/icons-react';
import { ActionSet } from '../ActionSet';
var blockClass = "".concat(pkg.prefix, "--side-panel");
var componentName = 'SidePanel'; // NOTE: the component SCSS is not imported here: it is rolled up separately.

/**
 * Side panels keep users in-context of a page while performing tasks like navigating, editing, viewing details, or configuring something new.
 */

export var SidePanel = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
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
      rest = _objectWithoutProperties(_ref, _excluded);

  var _useState = useState(open),
      _useState2 = _slicedToArray(_useState, 2),
      shouldRender = _useState2[0],
      setRender = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      animationComplete = _useState4[0],
      setAnimationComplete = _useState4[1];

  var _useState5 = useState(0),
      _useState6 = _slicedToArray(_useState5, 2),
      panelHeight = _useState6[0],
      setPanelHeight = _useState6[1];

  var sidePanelRef = useRef();
  var sidePanelOverlayRef = useRef();
  var startTrapRef = useRef();
  var endTrapRef = useRef();
  var sidePanelInnerRef = useRef();
  var sidePanelCloseRef = useRef(); // scroll panel to top going between steps

  useEffect(function () {
    var panelRef = ref || sidePanelRef;

    if (panelRef && panelRef.current) {
      var scrollableSection = panelRef.current.querySelector(".".concat(blockClass, "__inner-content"));
      scrollableSection.scrollTop = 0;
    }
  }, [currentStep, ref]); // set initial focus when side panel opens

  useEffect(function () {
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
  useEffect(function () {
    if (open && actions && actions.length && animationComplete) {
      var sidePanelOuter = document.querySelector("#".concat(blockClass, "-outer"));
      var actionsContainer = getActionsContainerElement();
      var actionsHeight = (actionsContainer === null || actionsContainer === void 0 ? void 0 : actionsContainer.offsetHeight) + 16; // add additional 1rem spacing to bottom padding

      actionsHeight = "".concat(Math.round(actionsHeight / 16), "rem");
      sidePanelOuter === null || sidePanelOuter === void 0 ? void 0 : sidePanelOuter.style.setProperty("--".concat(blockClass, "--content-bottom-padding"), actionsHeight);
    }
  }, [actions, condensedActions, open, animationComplete]); // Add console warning if labelText is provided without a title.
  // This combination is not allowed.

  useEffect(function () {
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


  useEffect(function () {
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

  useEffect(function () {
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

  useEffect(function () {
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


  useEffect(function () {
    if (!open && slideIn) {
      var pageContentElement = document.querySelector(selectorPageContent || pageContentSelector);

      if (placement && placement === 'right' && pageContentElement) {
        pageContentElement.style.marginRight = 0;
      } else if (pageContentElement) {
        pageContentElement.style.marginLeft = 0;
      }
    }
  }, [open, placement, selectorPageContent, pageContentSelector, slideIn]); // used to set margins of content for slide in panel version

  useEffect(function () {
    if (shouldRender && slideIn) {
      var pageContentElement = document.querySelector(selectorPageContent || pageContentSelector);

      if (placement && placement === 'right' && pageContentElement) {
        pageContentElement.style.marginRight = 0;
        pageContentElement.style.transition = "margin-right ".concat(moderate02);
        pageContentElement.style.marginRight = SIDE_PANEL_SIZES[size];
      } else if (pageContentElement) {
        pageContentElement.style.marginLeft = 0;
        pageContentElement.style.transition = "margin-left ".concat(moderate02);
        pageContentElement.style.marginLeft = SIDE_PANEL_SIZES[size];
      }
    }
  }, [slideIn, selectorPageContent, pageContentSelector, placement, shouldRender, size]); // adds focus trap functionality

  /* istanbul ignore next */

  var handleBlur = function handleBlur(_ref2) {
    var oldActiveNode = _ref2.target,
        currentActiveNode = _ref2.relatedTarget;

    // focus trap should only be set if the side panel is a `slideOver` type
    if (open && sidePanelInnerRef && !slideIn) {
      wrapFocus({
        bodyNode: sidePanelInnerRef.current,
        startTrapRef: startTrapRef,
        endTrapRef: endTrapRef,
        currentActiveNode: currentActiveNode,
        oldActiveNode: oldActiveNode
      });
    }
  };

  var primaryActionContainerClassNames = cx(["".concat(blockClass, "__actions-container"), _defineProperty({}, "".concat(blockClass, "__actions-container-condensed"), condensedActions)]);
  var mainPanelClassNames = cx([blockClass, className, "".concat(blockClass, "__container"), "".concat(blockClass, "__container--").concat(size), (_ref4 = {}, _defineProperty(_ref4, "".concat(blockClass, "__container-right-placement"), placement === 'right'), _defineProperty(_ref4, "".concat(blockClass, "__container-left-placement"), placement === 'left'), _defineProperty(_ref4, "".concat(blockClass, "__container-with-action-toolbar"), actionToolbarButtons && actionToolbarButtons.length), _defineProperty(_ref4, "".concat(blockClass, "__container-without-overlay"), !includeOverlay && !slideIn), _defineProperty(_ref4, "".concat(blockClass, "__container-is-animating"), !animationComplete || !open), _ref4)]);

  var renderHeader = function renderHeader() {
    var _cx, _cx2;

    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: cx("".concat(blockClass, "__title-container"), (_cx = {}, _defineProperty(_cx, "".concat(blockClass, "__on-detail-step"), currentStep > 0), _defineProperty(_cx, "".concat(blockClass, "__on-detail-step-without-title"), currentStep > 0 && !title), _defineProperty(_cx, "".concat(blockClass, "__title-container--no-title-animation"), !animateTitle), _defineProperty(_cx, "".concat(blockClass, "__title-container-is-animating"), !animationComplete || !open), _defineProperty(_cx, "".concat(blockClass, "__title-container-without-title"), !title), _cx))
    }, currentStep > 0 && /*#__PURE__*/React.createElement(Button, {
      "aria-label": navigationBackIconDescription,
      kind: "ghost",
      size: "small",
      disabled: false,
      renderIcon: ArrowLeft20,
      iconDescription: navigationBackIconDescription,
      className: "".concat(blockClass, "__navigation-back-button"),
      onClick: onNavigationBack
    }), title && title.length && labelText && labelText.length && /*#__PURE__*/React.createElement("p", {
      className: "".concat(blockClass, "__label-text")
    }, labelText), title && title.length && renderTitle()), /*#__PURE__*/React.createElement(Button, {
      "aria-label": closeIconDescription,
      kind: "ghost",
      size: "small",
      renderIcon: Close20,
      iconDescription: closeIconDescription,
      className: "".concat(blockClass, "__close-button"),
      onClick: onRequestClose,
      ref: sidePanelCloseRef
    }), subtitle && subtitle.length && /*#__PURE__*/React.createElement("p", {
      className: cx("".concat(blockClass, "__subtitle-text"), (_cx2 = {}, _defineProperty(_cx2, "".concat(blockClass, "__subtitle-text-no-animation"), !animateTitle), _defineProperty(_cx2, "".concat(blockClass, "__subtitle-text-no-animation-no-action-toolbar"), !animateTitle && (!actionToolbarButtons || !actionToolbarButtons.length)), _defineProperty(_cx2, "".concat(blockClass, "__subtitle-text-is-animating"), !animationComplete && animateTitle), _defineProperty(_cx2, "".concat(blockClass, "__subtitle-without-title"), !title), _cx2))
    }, subtitle), actionToolbarButtons && actionToolbarButtons.length && /*#__PURE__*/React.createElement("div", {
      className: cx("".concat(blockClass, "__action-toolbar"), _defineProperty({}, "".concat(blockClass, "__action-toolbar-no-animation"), !animateTitle))
    }, actionToolbarButtons.map(function (action) {
      var _ref5;

      return /*#__PURE__*/React.createElement(Button, {
        key: action.label,
        kind: action.kind || 'ghost',
        size: "small",
        renderIcon: action.icon,
        iconDescription: action.label,
        tooltipPosition: "bottom",
        tooltipAlignment: "center",
        hasIconOnly: !action.leading,
        disabled: action.disabled,
        className: cx(["".concat(blockClass, "__action-toolbar-button"), action.className, (_ref5 = {}, _defineProperty(_ref5, "".concat(blockClass, "__action-toolbar-icon-only-button"), action.icon && !action.leading), _defineProperty(_ref5, "".concat(blockClass, "__action-toolbar-leading-button"), action.leading), _ref5)]),
        onClick: function onClick(event) {
          return action.onClick ? action.onClick(event) : action.onActionToolbarButtonClick && action.onActionToolbarButtonClick(event);
        }
      }, action.leading && action.label);
    })));
  };

  var renderTitle = function renderTitle() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, title && title.length && /*#__PURE__*/React.createElement("h2", {
      className: "".concat(blockClass, "__title-text"),
      title: title,
      "aria-hidden": false
    }, title), animateTitle && title && title.length && /*#__PURE__*/React.createElement("h2", {
      className: "".concat(blockClass, "__collapsed-title-text"),
      title: title,
      "aria-hidden": true
    }, title));
  };

  var contentRef = ref || sidePanelRef;
  useResizeDetector({
    handleHeight: true,
    onResize: handleResize,
    targetRef: contentRef
  });
  return shouldRender && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", _extends({}, getDevtoolsProps(componentName), rest, {
    id: "".concat(blockClass, "-outer"),
    className: mainPanelClassNames,
    style: {
      animation: "".concat(open ? placement === 'right' ? "sidePanelEntranceRight ".concat(moderate02) : "sidePanelEntranceLeft ".concat(moderate02) : placement === 'right' ? "sidePanelExitRight ".concat(moderate02) : "sidePanelExitLeft ".concat(moderate02))
    },
    onAnimationEnd: onAnimationEnd,
    onAnimationStart: function onAnimationStart(event) {
      return _onAnimationStart(event);
    },
    onBlur: handleBlur,
    ref: contentRef,
    role: "complementary",
    "aria-label": title
  }), /*#__PURE__*/React.createElement("span", {
    ref: startTrapRef,
    tabIndex: "0",
    role: "link",
    className: "".concat(blockClass, "__visually-hidden")
  }, "Focus sentinel"), !animateTitle && renderHeader(), /*#__PURE__*/React.createElement("div", {
    ref: sidePanelInnerRef,
    className: cx("".concat(blockClass, "__inner-content"), (_cx4 = {}, _defineProperty(_cx4, "".concat(blockClass, "__static-inner-content"), !animateTitle), _defineProperty(_cx4, "".concat(blockClass, "__inner-content-with-actions"), actions && actions.length), _cx4))
  }, animateTitle && renderHeader(), /*#__PURE__*/React.createElement("div", {
    className: "".concat(blockClass, "__body-content")
  }, children), /*#__PURE__*/React.createElement(ActionSet, {
    actions: actions,
    className: primaryActionContainerClassNames,
    size: size
  })), /*#__PURE__*/React.createElement("span", {
    ref: endTrapRef,
    tabIndex: "0",
    role: "link",
    className: "".concat(blockClass, "__visually-hidden")
  }, "Focus sentinel")), includeOverlay && /*#__PURE__*/React.createElement("div", {
    ref: sidePanelOverlayRef,
    className: "".concat(blockClass, "__overlay"),
    style: {
      animation: "".concat(open ? "sidePanelOverlayEntrance ".concat(moderate02) : "sidePanelOverlayExit ".concat(moderate02))
    }
  }));
}); // Return a placeholder if not released and not enabled by feature flag

SidePanel = pkg.checkComponentEnabled(SidePanel, componentName);

SidePanel.validatePageContentSelector = function () {
  return function (_ref6) {
    var slideIn = _ref6.slideIn,
        selectorPageContent = _ref6.selectorPageContent;

    if (slideIn && !selectorPageContent) {
      throw new Error("".concat(componentName, ": selectorPageContent prop missing, this is required when using a slideIn panel. If missing, the component will display as a slide over panel."));
    }
  };
};

export var deprecatedProps = {
  /**
   * **Deprecated**
   *
   * This is the selector to the element that contains all of the page content that will shrink if the panel is a slide in.
   * This prop is required when using the `slideIn` variant of the side panel.
   */
  pageContentSelector: deprecateProp(allPropTypes([SidePanel.validatePageContentSelector(), PropTypes.string]), 'This prop has been renamed to `selectorPageContent`.')
};
SidePanel.propTypes = _objectSpread({
  /**
   * Sets the action toolbar buttons
   */
  actionToolbarButtons: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    leading: PropTypes.bool,
    icon: PropTypes.object,
    onActionToolbarButtonClick: deprecateProp(PropTypes.func, 'This prop will be removed in the future. Please use `onClick` instead'),
    onClick: PropTypes.func,
    kind: PropTypes.oneOf(['ghost', 'tertiary', 'secondary', 'primary'])
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
  actions: allPropTypes([ActionSet.validateActions(), PropTypes.arrayOf(PropTypes.shape(_objectSpread(_objectSpread({}, Button.propTypes), {}, {
    kind: PropTypes.oneOf(['ghost', 'secondary', 'primary']),
    label: PropTypes.string,
    loading: PropTypes.bool,
    // we duplicate this Button prop to improve the DocGen here
    onClick: Button.propTypes.onClick
  })))]),

  /**
   * Determines if the title will animate on scroll
   */
  animateTitle: PropTypes.bool,

  /**
   * Sets the body content of the side panel
   */
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,

  /**
   * Sets an optional className to be added to the side panel outermost element
   */
  className: PropTypes.string,

  /**
   * Sets the close button icon description
   */
  closeIconDescription: PropTypes.string.isRequired,

  /**
   * Determines whether the side panel should render the condensed version (affects action buttons primarily)
   */
  condensedActions: PropTypes.bool,

  /**
   * Sets the current step of the side panel
   */
  currentStep: PropTypes.number,

  /**
   * Determines whether the side panel should render with an overlay
   */
  includeOverlay: PropTypes.bool,

  /**
   * Sets the label text which will display above the title text
   */
  labelText: PropTypes.string,

  /**
   * Sets the icon description for the navigation back icon button
   */
  navigationBackIconDescription: PropTypes.string,

  /**
   * Changes the current side panel page to the previous page
   */
  onNavigationBack: PropTypes.func,

  /**
   * Specify a handler for closing the side panel.
   * This handler closes the modal, e.g. changing `open` prop.
   */
  onRequestClose: PropTypes.func,

  /**
   * Optional function called when the side panel exit animation is complete.
   * This handler can be used for any state cleanup needed before the panel is removed from the DOM.
   */
  onUnmount: PropTypes.func,

  /**
   * Determines whether the side panel should render or not
   */
  open: PropTypes.bool.isRequired,

  /**
   * Determines if the side panel is on the right or left
   */
  placement: PropTypes.oneOf(['left', 'right']),

  /**
   * Prevent closing on click outside of the panel
   */
  preventCloseOnClickOutside: PropTypes.bool,

  /**
   * This is the selector to the element that contains all of the page content that will shrink if the panel is a slide in.
   * This prop is required when using the `slideIn` variant of the side panel.
   */
  selectorPageContent: PropTypes.string.isRequired.if(function (_ref7) {
    var slideIn = _ref7.slideIn;
    return slideIn === true;
  }),

  /**
   * Specify a CSS selector that matches the DOM element that should
   * be focused when the side panel opens
   */
  selectorPrimaryFocus: PropTypes.string,

  /**
   * Sets the size of the side panel
   */
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'max']),

  /**
   * Determines if this panel slides in
   */
  slideIn: PropTypes.bool,

  /**
   * Sets the subtitle text
   */
  subtitle: PropTypes.string,

  /**
   * Sets the title text
   */
  title: PropTypes.string
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