import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["actionBarItems", "actionBarOverflowAriaLabel", "actionBarOverflowLabel", "allTagsModalSearchLabel", "allTagsModalSearchPlaceholderText", "allTagsModalTitle", "availableSpace", "background", "hasBackgroundAlways", "breadcrumbOverflowAriaLabel", "breadcrumbOverflowLabel", "breadcrumbItems", "breadcrumbs", "children", "className", "collapseHeader", "collapseHeaderIconDescription", "collapseHeaderLabel", "collapseHeaderToggleWanted", "collapseTitle", "disableBreadcrumbScroll", "expandHeaderIconDescription", "expandHeaderLabel", "fullWidthGrid", "hasCollapseHeaderToggle", "narrowGrid", "navigation", "pageActions", "pageActionsOverflowLabel", "pageHeaderOffset", "preCollapseTitleRow", "preventBreadcrumbScroll", "showAllTagsLabel", "subtitle", "tags", "title", "titleIcon"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

//
// Copyright IBM Corp. 2020, 2021
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//
import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { layout05, baseFontSize } from '@carbon/layout';
import cx from 'classnames';
import { useResizeDetector } from 'react-resize-detector';
import { BreadcrumbItem, Grid, Column, Row, Button, SkeletonText, Tag } from 'carbon-components-react';
import { useWindowResize, useNearestScroll } from '../../global/js/hooks';
import { getDevtoolsProps } from '../../global/js/utils/devtools';
import { deprecateProp, deprecatePropUsage, extractShapesArray, prepareProps } from '../../global/js/utils/props-helper';
import { pkg } from '../../settings';
import { ActionBar } from '../ActionBar/';
import { BreadcrumbWithOverflow } from '../BreadcrumbWithOverflow';
import { TagSet, string_required_if_more_than_10_tags } from '../TagSet/TagSet';
import { ButtonSetWithOverflow } from '../ButtonSetWithOverflow';
import { ChevronUp16 } from '@carbon/icons-react';
var componentName = 'PageHeader';
import { blockClass, utilCheckUpdateVerticalSpace, utilGetTitleShape, utilSetCollapsed } from './PageHeaderUtils';
export var PageHeader = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var _actionBarOverflowAri, _breadcrumbOverflowAr, _children, _collapseHeaderIconDe, _expandHeaderIconDesc, _hasBackgroundAlways, _hasCollapseHeaderTog, _collapseTitle, _disableBreadcrumbScr, _extractShapesArray, _ref6, _cx2, _ref8, _cx5, _cx10;

  var actionBarItems = _ref.actionBarItems,
      actionBarOverflowAriaLabel = _ref.actionBarOverflowAriaLabel,
      deprecated_actionBarOverflowLabel = _ref.actionBarOverflowLabel,
      allTagsModalSearchLabel = _ref.allTagsModalSearchLabel,
      allTagsModalSearchPlaceholderText = _ref.allTagsModalSearchPlaceholderText,
      allTagsModalTitle = _ref.allTagsModalTitle,
      deprecated_availableSpace = _ref.availableSpace,
      deprecated_background = _ref.background,
      hasBackgroundAlways = _ref.hasBackgroundAlways,
      breadcrumbOverflowAriaLabel = _ref.breadcrumbOverflowAriaLabel,
      deprecated_breadcrumbOverflowLabel = _ref.breadcrumbOverflowLabel,
      deprecated_breadcrumbItems = _ref.breadcrumbItems,
      breadcrumbsIn = _ref.breadcrumbs,
      children = _ref.children,
      className = _ref.className,
      collapseHeader = _ref.collapseHeader,
      collapseHeaderIconDescription = _ref.collapseHeaderIconDescription,
      deprecated_collapseHeaderLabel = _ref.collapseHeaderLabel,
      deprecated_collapseHeaderToggleWanted = _ref.collapseHeaderToggleWanted,
      collapseTitle = _ref.collapseTitle,
      disableBreadcrumbScroll = _ref.disableBreadcrumbScroll,
      expandHeaderIconDescription = _ref.expandHeaderIconDescription,
      deprecated_expandHeaderLabel = _ref.expandHeaderLabel,
      fullWidthGrid = _ref.fullWidthGrid,
      hasCollapseHeaderToggle = _ref.hasCollapseHeaderToggle,
      narrowGrid = _ref.narrowGrid,
      navigation = _ref.navigation,
      pageActions = _ref.pageActions,
      pageActionsOverflowLabel = _ref.pageActionsOverflowLabel,
      _deprecated_pageHeaderOffset = _ref.pageHeaderOffset,
      deprecated_preCollapseTitleRow = _ref.preCollapseTitleRow,
      deprecated_preventBreadcrumbScroll = _ref.preventBreadcrumbScroll,
      showAllTagsLabel = _ref.showAllTagsLabel,
      subtitle = _ref.subtitle,
      tags = _ref.tags,
      title = _ref.title,
      titleIcon = _ref.titleIcon,
      rest = _objectWithoutProperties(_ref, _excluded);

  // handle deprecated props - START
  (_actionBarOverflowAri = actionBarOverflowAriaLabel) !== null && _actionBarOverflowAri !== void 0 ? _actionBarOverflowAri : actionBarOverflowAriaLabel = deprecated_actionBarOverflowLabel;
  (_breadcrumbOverflowAr = breadcrumbOverflowAriaLabel) !== null && _breadcrumbOverflowAr !== void 0 ? _breadcrumbOverflowAr : breadcrumbOverflowAriaLabel = deprecated_breadcrumbOverflowLabel;
  (_children = children) !== null && _children !== void 0 ? _children : children = deprecated_availableSpace;
  (_collapseHeaderIconDe = collapseHeaderIconDescription) !== null && _collapseHeaderIconDe !== void 0 ? _collapseHeaderIconDe : collapseHeaderIconDescription = deprecated_collapseHeaderLabel;
  (_expandHeaderIconDesc = expandHeaderIconDescription) !== null && _expandHeaderIconDesc !== void 0 ? _expandHeaderIconDesc : expandHeaderIconDescription = deprecated_expandHeaderLabel;
  (_hasBackgroundAlways = hasBackgroundAlways) !== null && _hasBackgroundAlways !== void 0 ? _hasBackgroundAlways : hasBackgroundAlways = deprecated_background;
  (_hasCollapseHeaderTog = hasCollapseHeaderToggle) !== null && _hasCollapseHeaderTog !== void 0 ? _hasCollapseHeaderTog : hasCollapseHeaderToggle = deprecated_collapseHeaderToggleWanted;
  (_collapseTitle = collapseTitle) !== null && _collapseTitle !== void 0 ? _collapseTitle : collapseTitle = deprecated_preCollapseTitleRow;
  (_disableBreadcrumbScr = disableBreadcrumbScroll) !== null && _disableBreadcrumbScr !== void 0 ? _disableBreadcrumbScr : disableBreadcrumbScroll = deprecated_preventBreadcrumbScroll;
  var breadcrumbs = breadcrumbsIn !== null && breadcrumbsIn !== void 0 ? breadcrumbsIn : deprecated_breadcrumbItems; // handle deprecated props - END

  var _useState = useState({}),
      _useState2 = _slicedToArray(_useState, 2),
      metrics = _useState2[0],
      setMetrics = _useState2[1];

  var _useState3 = useState(_objectSpread({}, rest.style)),
      _useState4 = _slicedToArray(_useState3, 2),
      pageHeaderStyles = _useState4[0],
      setPageHeaderStyles = _useState4[1]; // refs


  var localHeaderRef = useRef(null);
  var headerRef = ref || localHeaderRef;
  var sizingContainerRef = useRef();
  var offsetTopMeasuringRef = useRef(null); // utility functions
  // Title shape is used to allow title to be string or shape

  var getTitleShape = function getTitleShape() {
    return utilGetTitleShape(title, titleIcon, PageHeader.defaultProps.title);
  };

  var checkUpdateVerticalSpace = function checkUpdateVerticalSpace() {
    return utilCheckUpdateVerticalSpace(headerRef, offsetTopMeasuringRef, navigation, disableBreadcrumbScroll, setMetrics);
  }; // state based on props only


  var actionBarItemArray = extractShapesArray(actionBarItems);
  var hasActionBar = actionBarItemArray && actionBarItemArray.length;
  var hasBreadcrumbRow = !(breadcrumbs === undefined && actionBarItems === undefined);
  var pageActionsItemArray = (_extractShapesArray = extractShapesArray(pageActions)) === null || _extractShapesArray === void 0 ? void 0 : _extractShapesArray.map(function (shape) {
    return _objectSpread({
      label: shape.children
    }, shape);
  });
  /* Title shape is used to allow title to be string or shape */

  var titleShape = getTitleShape(); // NOTE: The buffer is used to add space between the bottom of the header and the last content
  // Not pre-collapsed and (subtitle or children)

  var lastRowBufferActive = (title || pageActions) && !collapseTitle || subtitle || children; // state based on scroll/resize based effects

  var _useState5 = useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      pageActionsInBreadcrumbRow = _useState6[0],
      setPageActionsInBreadcrumbRow = _useState6[1];

  var _useState7 = useState(0),
      _useState8 = _slicedToArray(_useState7, 2),
      scrollYValue = _useState8[0],
      setScrollYValue = _useState8[1];

  var _useState9 = useState(0),
      _useState10 = _slicedToArray(_useState9, 2),
      backgroundOpacity = _useState10[0],
      setBackgroundOpacity = _useState10[1];

  var _useState11 = useState(false),
      _useState12 = _slicedToArray(_useState11, 2),
      hasCollapseButton = _useState12[0],
      setHasCollapseButton = _useState12[1];

  var _useState13 = useState(false),
      _useState14 = _slicedToArray(_useState13, 2),
      spaceForCollapseButton = _useState14[0],
      setSpaceForCollapseButton = _useState14[1];

  var _useState15 = useState(0),
      _useState16 = _slicedToArray(_useState15, 2),
      actionBarMaxWidth = _useState16[0],
      setActionBarMaxWidth = _useState16[1];

  var _useState17 = useState(0),
      _useState18 = _slicedToArray(_useState17, 2),
      actionBarMinWidth = _useState18[0],
      setActionBarMinWidth = _useState18[1];

  var _useState19 = useState(0),
      _useState20 = _slicedToArray(_useState19, 2),
      pageActionInBreadcrumbMaxWidth = _useState20[0],
      setPageActionInBreadcrumbMaxWidth = _useState20[1];

  var _useState21 = useState(0),
      _useState22 = _slicedToArray(_useState21, 2),
      pageActionInBreadcrumbMinWidth = _useState22[0],
      setPageActionInBreadcrumbMinWidth = _useState22[1];

  var _useState23 = useState(0),
      _useState24 = _slicedToArray(_useState23, 2),
      actionBarColumnWidth = _useState24[0],
      setActionBarColumnWidth = _useState24[1];

  var _useState25 = useState(false),
      _useState26 = _slicedToArray(_useState25, 2),
      fullyCollapsed = _useState26[0],
      setFullyCollapsed = _useState26[1]; // handlers


  var handleActionBarWidthChange = function handleActionBarWidthChange(_ref2) {
    var minWidth = _ref2.minWidth,
        maxWidth = _ref2.maxWidth;

    /* don't know how to test resize */

    /* istanbul ignore next */
    setActionBarMaxWidth(maxWidth);
    /* don't know how to test resize */

    /* istanbul ignore next */

    setActionBarMinWidth(minWidth);
  };

  var handleButtonSetWidthChange = function handleButtonSetWidthChange(_ref3) {
    var minWidth = _ref3.minWidth,
        maxWidth = _ref3.maxWidth;

    /* don't know how to test resize */

    /* istanbul ignore next */
    setPageActionInBreadcrumbMaxWidth(maxWidth);
    /* don't know how to test resize */

    /* istanbul ignore next */

    setPageActionInBreadcrumbMinWidth(minWidth);
  };
  /* istanbul ignore next */


  var handleResizeActionBarColumn = function handleResizeActionBarColumn(width) {
    /* don't know how to test resize */

    /* istanbul ignore next */
    setActionBarColumnWidth(width);
  };
  /* istanbul ignore next */


  var handleResize = function handleResize() {
    // receives width and height parameters if needed

    /* don't know how to test resize */

    /* istanbul ignore next */
    checkUpdateVerticalSpace();
  };

  var handleCollapseToggle = function handleCollapseToggle() {
    utilSetCollapsed(!fullyCollapsed, metrics.headerOffset, metrics.headerTopValue);
  }; // use effects


  useEffect(function () {
    // Determine the location of the pageAction buttons

    /* istanbul ignore next */
    setPageActionsInBreadcrumbRow(collapseTitle || scrollYValue > metrics.titleRowSpaceAbove && hasActionBar);
  }, [hasActionBar, metrics.breadcrumbRowSpaceBelow, metrics.titleRowSpaceAbove, collapseTitle, scrollYValue]);
  useEffect(function () {
    var newActionBarWidth = 'initial';
    var newPageActionInBreadcrumbWidth = 'initial';
    /* don't know how to test resize */

    /* istanbul ignore if */

    if (actionBarColumnWidth > 0) {
      if (pageActionInBreadcrumbMaxWidth > 0 && actionBarColumnWidth > actionBarMaxWidth + pageActionInBreadcrumbMaxWidth) {
        newPageActionInBreadcrumbWidth = "".concat(pageActionInBreadcrumbMaxWidth, "px");
      } else if (pageActionInBreadcrumbMinWidth > 0) {
        newPageActionInBreadcrumbWidth = "".concat(pageActionInBreadcrumbMinWidth, "px");
      }

      if (actionBarMaxWidth > 0 && actionBarColumnWidth > pageActionInBreadcrumbMinWidth + actionBarMaxWidth) {
        newActionBarWidth = "".concat(actionBarMaxWidth, "px");
      } else {
        if (actionBarMinWidth > 0) {
          newActionBarWidth = "".concat(actionBarColumnWidth - pageActionInBreadcrumbMinWidth, "px");
        }
      }
    }

    setPageHeaderStyles(function (prev) {
      var _objectSpread2;

      return _objectSpread(_objectSpread({}, prev), {}, (_objectSpread2 = {}, _defineProperty(_objectSpread2, "--".concat(blockClass, "--max-action-bar-width-px"), newActionBarWidth), _defineProperty(_objectSpread2, "--".concat(blockClass, "--button-set-in-breadcrumb-width-px"), "".concat(newPageActionInBreadcrumbWidth)), _objectSpread2));
    });
  }, [actionBarColumnWidth, actionBarMaxWidth, actionBarMinWidth, pageActionInBreadcrumbMaxWidth, pageActionInBreadcrumbMinWidth, headerRef]);
  useEffect(function () {
    // Updates custom CSS props used to manage scroll behaviour

    /* istanbul ignore next */
    setPageHeaderStyles(function (prev) {
      var _objectSpread3;

      return _objectSpread(_objectSpread({}, prev), {}, (_objectSpread3 = {}, _defineProperty(_objectSpread3, "--".concat(blockClass, "--height-px"), "".concat(metrics.headerHeight, "px")), _defineProperty(_objectSpread3, "--".concat(blockClass, "--width-px"), "".concat(metrics.headerWidth, "px")), _defineProperty(_objectSpread3, "--".concat(blockClass, "--header-top"), "".concat(metrics.headerTopValue + metrics.headerOffset, "px")), _defineProperty(_objectSpread3, "--".concat(blockClass, "--breadcrumb-title-visibility"), scrollYValue > 0 ? 'visible' : 'hidden'), _defineProperty(_objectSpread3, "--".concat(blockClass, "--scroll"), "".concat(scrollYValue)), _defineProperty(_objectSpread3, "--".concat(blockClass, "--breadcrumb-title-top"), "".concat(Math.max(0, metrics.breadcrumbTitleHeight + metrics.titleRowSpaceAbove - scrollYValue), "px")), _defineProperty(_objectSpread3, "--".concat(blockClass, "--breadcrumb-title-opacity"), "".concat(Math.min(1, Math.max(0, (scrollYValue - (metrics.titleRowSpaceAbove || 0)) / (metrics.breadcrumbTitleHeight || 1) // don't want to divide by zero
      )))), _defineProperty(_objectSpread3, "--".concat(blockClass, "--breadcrumb-row-width-px"), "".concat(metrics.breadcrumbRowWidth, "px")), _objectSpread3));
    });
  }, [headerRef, disableBreadcrumbScroll, metrics, metrics.breadcrumbRowHeight, metrics.breadcrumbRowSpaceBelow, metrics.breadcrumbTitleHeight, metrics.breadcrumbRowWidth, metrics.headerHeight, metrics.headerWidth, metrics.headerOffset, metrics.headerTopValue, metrics.navigationRowHeight, navigation, scrollYValue, tags]);
  useNearestScroll(headerRef, // on scroll or various layout changes check updates if needed
  function (_ref4) {
    var current = _ref4.current;
    setPageHeaderStyles(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, "--".concat(blockClass, "--breadcrumb-top"), "".concat(metrics.headerOffset, "px")));
    });
    var fullyCollapsed = current.scrollY + metrics.headerTopValue + metrics.headerOffset >= 0;
    setFullyCollapsed(fullyCollapsed); // set offset for tagset tooltip

    /* istanbul ignore next */

    var tagsetTooltipOffset = fullyCollapsed ? metrics.headerHeight + metrics.headerTopValue + metrics.headerOffset : metrics.headerHeight + metrics.headerOffset;
    /* istanbul ignore next */

    document.documentElement.style.setProperty("--".concat(blockClass, "--tagset-tooltip-position"), fullyCollapsed ? 'fixed' : 'absolute');
    document.documentElement.style.setProperty("--".concat(blockClass, "--tagset-tooltip-offset"), "".concat(tagsetTooltipOffset, "px"));
    setScrollYValue(current.scrollY);
  }, [metrics.headerHeight, metrics.headerTopValue, metrics.headerOffset, disableBreadcrumbScroll]);
  useWindowResize(function () {
    // on window resize and other updates some values may have changed
    checkUpdateVerticalSpace();
  }, [actionBarItems, children, breadcrumbs, disableBreadcrumbScroll, navigation, pageActions, subtitle, tags, title]);
  useEffect(function () {
    checkUpdateVerticalSpace(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fullWidthGrid, narrowGrid]);
  useEffect(function () {
    // Determines if the hasBackgroundAlways should be one based on the header height or scroll
    var result = hasBackgroundAlways && 1;

    if (!result && metrics.headerHeight > 0 && (breadcrumbs || actionBarItems || tags || navigation)) {
      var startAddingAt = parseFloat(layout05, 10) * parseInt(baseFontSize);
      var scrollRemaining = metrics.headerHeight - scrollYValue;
      /* don't know how to test resize */

      /* istanbul ignore if */

      if (scrollRemaining < startAddingAt) {
        var distanceAddingOver = startAddingAt - metrics.breadcrumbRowHeight;
        result = Math.min(1, (startAddingAt - scrollRemaining) / distanceAddingOver);
      }
    }

    setPageHeaderStyles(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, "--".concat(blockClass, "--background-opacity"), result));
    });
    setBackgroundOpacity(result);
  }, [actionBarItems, hasBackgroundAlways, breadcrumbs, headerRef, metrics.breadcrumbRowHeight, metrics.headerHeight, navigation, scrollYValue, hasCollapseHeaderToggle, tags]);
  useEffect(function () {
    // only has toggle if requested and has hasBackgroundAlways
    // NOTE: prop-types isRequired.if for the expand and collapse
    // icon descriptions depends on the this.
    setHasCollapseButton(hasCollapseHeaderToggle && hasBackgroundAlways);
  }, [hasBackgroundAlways, hasCollapseHeaderToggle]);
  useEffect(function () {
    // Determine if space is needed in the breadcrumb for a collapse button
    setSpaceForCollapseButton(hasCollapseButton && !(navigation || tags) && metrics.headerHeight);
  }, [hasCollapseButton, navigation, tags, metrics.headerHeight]);

  var nextToTabsCheck = function nextToTabsCheck() {
    /* istanbul ignore next */
    return disableBreadcrumbScroll && actionBarItems === undefined && scrollYValue + metrics.headerTopValue >= 0;
  };

  useEffect(function () {
    if (typeof collapseHeader === 'boolean') {
      utilSetCollapsed(collapseHeader, metrics.headerOffset, metrics.headerTopValue);
    }
  }, [collapseHeader, metrics.headerOffset, metrics.headerTopValue]);
  var titleText = titleShape.text,
      TitleIcon = titleShape.icon,
      titleLoading = titleShape.loading;
  useResizeDetector({
    onResize: handleResizeActionBarColumn,
    targetRef: sizingContainerRef,
    handleWidth: true
  });
  useResizeDetector({
    onResize: handleResize,
    targetRef: headerRef,
    handleHeight: true
  });
  var breadcrumbsInWithTitle;

  if (breadcrumbsIn) {
    breadcrumbsInWithTitle = !title ? breadcrumbsIn : breadcrumbsIn.concat({
      isCurrentPage: true,
      className: cx(["".concat(blockClass, "__breadcrumb-title"), _defineProperty({}, "".concat(blockClass, "__breadcrumb-title--pre-collapsed"), collapseTitle)]),
      key: "breadcrumb-title",
      label: /*#__PURE__*/React.createElement("span", null, titleLoading ? /*#__PURE__*/React.createElement(SkeletonText, null) : titleText),
      title: titleText
    });
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "".concat(blockClass, "--offset-top-measuring-element"),
    ref: offsetTopMeasuringRef
  }), /*#__PURE__*/React.createElement("section", _extends({}, rest, {
    className: cx([blockClass, "".concat(blockClass, "--no-margins-below-row"), className, (_ref6 = {}, _defineProperty(_ref6, "".concat(blockClass, "--show-background"), backgroundOpacity > 0), _defineProperty(_ref6, "".concat(blockClass, "--has-navigation"), navigation || tags), _defineProperty(_ref6, "".concat(blockClass, "--has-navigation-tags-only"), !navigation && tags), _ref6)]),
    style: pageHeaderStyles,
    ref: headerRef
  }, getDevtoolsProps(componentName)), /*#__PURE__*/React.createElement(Grid, {
    fullWidth: fullWidthGrid === true || fullWidthGrid === 'xl',
    narrow: narrowGrid,
    className: cx(_defineProperty({}, "".concat(blockClass, "--width--xl"), fullWidthGrid === 'xl'))
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(blockClass, "__non-navigation-row-content")
  }, hasBreadcrumbRow ? /*#__PURE__*/React.createElement(Row, {
    className: cx("".concat(blockClass, "__breadcrumb-row"), (_cx2 = {}, _defineProperty(_cx2, "".concat(blockClass, "__breadcrumb-row--next-to-tabs"), nextToTabsCheck()), _defineProperty(_cx2, "".concat(blockClass, "__breadcrumb-row--has-breadcrumbs"), breadcrumbs), _defineProperty(_cx2, "".concat(blockClass, "__breadcrumb-row--has-action-bar"), hasActionBar), _cx2))
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(blockClass, "__breadcrumb-row--container")
  }, /*#__PURE__*/React.createElement(Column, {
    className: cx("".concat(blockClass, "__breadcrumb-column"), _defineProperty({}, "".concat(blockClass, "__breadcrumb-column--background"), breadcrumbs !== undefined || hasActionBar))
  }, breadcrumbs !== undefined ? /*#__PURE__*/React.createElement(BreadcrumbWithOverflow, {
    className: "".concat(blockClass, "__breadcrumb"),
    noTrailingSlash: title !== undefined,
    overflowAriaLabel: breadcrumbOverflowAriaLabel,
    breadcrumbs: breadcrumbsInWithTitle
  }, !breadcrumbsIn ? deprecated_breadcrumbItems : null, !breadcrumbsIn && title ? /*#__PURE__*/React.createElement(BreadcrumbItem, {
    isCurrentPage: true,
    className: cx(["".concat(blockClass, "__breadcrumb-title"), _defineProperty({}, "".concat(blockClass, "__breadcrumb-title--pre-collapsed"), collapseTitle)])
  }, /*#__PURE__*/React.createElement("span", null, titleLoading ? /*#__PURE__*/React.createElement(SkeletonText, null) : titleText)) : null) : null), /*#__PURE__*/React.createElement(Column, {
    className: cx(["".concat(blockClass, "__action-bar-column ").concat(blockClass, "__action-bar-column--background"), (_ref8 = {}, _defineProperty(_ref8, "".concat(blockClass, "__action-bar-column--has-page-actions"), pageActions), _defineProperty(_ref8, "".concat(blockClass, "__action-bar-column--influenced-by-collapse-button"), spaceForCollapseButton), _ref8)])
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(blockClass, "__action-bar-column-content"),
    ref: sizingContainerRef
  }, hasActionBar ?
  /*#__PURE__*/
  // Investigate the responsive  behaviour or this and the title also fix the ActionBar Item and PageAction story css
  React.createElement(React.Fragment, null, pageActions && /*#__PURE__*/React.createElement("div", {
    className: cx("".concat(blockClass, "__page-actions"), _defineProperty({}, "".concat(blockClass, "__page-actions--in-breadcrumb"), pageActionsInBreadcrumbRow))
  }, /*#__PURE__*/React.createElement(ButtonSetWithOverflow, {
    className: "".concat(blockClass, "__button-set--in-breadcrumb"),
    onWidthChange: handleButtonSetWidthChange,
    buttons: pageActionsItemArray,
    buttonSetOverflowLabel: pageActionsOverflowLabel
  })), /*#__PURE__*/React.createElement(ActionBar, {
    overflowAriaLabel: actionBarOverflowAriaLabel,
    actions: actionBarItemArray,
    className: "".concat(blockClass, "__action-bar"),
    onWidthChange: handleActionBarWidthChange,
    rightAlign: true
  })) : null)))) : null, !collapseTitle && !(title === undefined && pageActions === undefined) ? /*#__PURE__*/React.createElement(Row, {
    className: cx("".concat(blockClass, "__title-row"), (_cx5 = {}, _defineProperty(_cx5, "".concat(blockClass, "__title-row--no-breadcrumb-row"), !hasBreadcrumbRow), _defineProperty(_cx5, "".concat(blockClass, "__title-row--under-action-bar"), hasActionBar), _defineProperty(_cx5, "".concat(blockClass, "__title-row--has-page-actions"), pageActions !== undefined), _defineProperty(_cx5, "".concat(blockClass, "__title-row--sticky"), pageActions !== undefined && actionBarItems === undefined && hasBreadcrumbRow), _cx5))
  }, /*#__PURE__*/React.createElement(Column, {
    className: "".concat(blockClass, "__title-column")
  }, title !== undefined ? /*#__PURE__*/React.createElement("div", {
    className: cx("".concat(blockClass, "__title"), _defineProperty({}, "".concat(blockClass, "__title--fades"), hasBreadcrumbRow))
  }, TitleIcon && !titleLoading ? /*#__PURE__*/React.createElement(TitleIcon, {
    className: "".concat(blockClass, "__title-icon")
  }) : null, /*#__PURE__*/React.createElement("span", {
    title: !titleLoading ? titleText : null
  }, titleLoading ? /*#__PURE__*/React.createElement(SkeletonText, {
    className: "".concat(blockClass, "__title-skeleton")
  }) : titleText)) : null), pageActions !== undefined ? /*#__PURE__*/React.createElement(Column, {
    className: cx("".concat(blockClass, "__page-actions"), _defineProperty({}, "".concat(blockClass, "__page-actions--in-breadcrumb"), pageActionsInBreadcrumbRow))
  }, /*#__PURE__*/React.createElement(ButtonSetWithOverflow, {
    className: "".concat(blockClass, "__page-actions-container"),
    onWidthChange: handleButtonSetWidthChange,
    buttons: pageActionsItemArray,
    buttonSetOverflowLabel: pageActionsOverflowLabel
  })) : null) : null, subtitle !== undefined ? /*#__PURE__*/React.createElement(Row, {
    className: "".concat(blockClass, "__subtitle-row")
  }, /*#__PURE__*/React.createElement(Column, {
    className: "".concat(blockClass, "__subtitle")
  }, subtitle)) : null, children !== undefined ? /*#__PURE__*/React.createElement(Row, {
    className: "".concat(blockClass, "__available-row")
  }, /*#__PURE__*/React.createElement(Column, {
    className: "".concat(blockClass, "__available-column")
  }, children)) : null, (breadcrumbs || actionBarItems || title || pageActions || children || subtitle) && /*#__PURE__*/React.createElement("div", {
    className: cx(["".concat(blockClass, "__last-row-buffer"), _defineProperty({}, "".concat(blockClass, "__last-row-buffer--active"), lastRowBufferActive)])
  }), // this navigation row scrolls under the breadcrumb if there is one
  tags && !navigation ? /*#__PURE__*/React.createElement(Row, {
    className: cx("".concat(blockClass, "__navigation-row"), _defineProperty({}, "".concat(blockClass, "__navigation-row--has-tags"), tags))
  }, /*#__PURE__*/React.createElement(Column, {
    className: cx("".concat(blockClass, "__navigation-tags"), _defineProperty({}, "".concat(blockClass, "__navigation-tags--tags-only"), navigation === undefined))
  }, /*#__PURE__*/React.createElement(TagSet, {
    overflowAlign: "end",
    allTagsModalSearchLabel: allTagsModalSearchLabel,
    allTagsModalSearchPlaceholderText: allTagsModalSearchPlaceholderText,
    allTagsModalTitle: allTagsModalTitle,
    showAllTagsLabel: showAllTagsLabel,
    tags: tags
  }))) : null), // this navigation pushes the breadcrumb off or settles underneath it depending on disableBreadcrumbScroll
  navigation ? /*#__PURE__*/React.createElement(Row, {
    className: cx("".concat(blockClass, "__navigation-row"), (_cx10 = {}, _defineProperty(_cx10, "".concat(blockClass, "__navigation-row--spacing-above-06"), navigation !== undefined), _defineProperty(_cx10, "".concat(blockClass, "__navigation-row--has-tags"), tags), _cx10))
  }, /*#__PURE__*/React.createElement(Column, {
    className: "".concat(blockClass, "__navigation-tabs")
  }, navigation), tags !== undefined ? /*#__PURE__*/React.createElement(Column, {
    className: cx("".concat(blockClass, "__navigation-tags"), _defineProperty({}, "".concat(blockClass, "__navigation-tags--tags-only"), navigation === undefined))
  }, /*#__PURE__*/React.createElement(TagSet, {
    overflowAlign: "end",
    allTagsModalSearchLabel: allTagsModalSearchLabel,
    allTagsModalSearchPlaceholderText: allTagsModalSearchPlaceholderText,
    allTagsModalTitle: allTagsModalTitle,
    showAllTagsLabel: showAllTagsLabel,
    tags: tags
  })) : null) : null), hasCollapseButton ? /*#__PURE__*/React.createElement(Button, {
    className: cx("".concat(blockClass, "__collapse-expand-toggle"), _defineProperty({}, "".concat(blockClass, "__collapse-expand-toggle--collapsed"), fullyCollapsed)),
    hasIconOnly: true,
    iconDescription:
    /* istanbul ignore next */
    fullyCollapsed ? expandHeaderIconDescription : collapseHeaderIconDescription,
    kind: "ghost",
    onClick: handleCollapseToggle,
    renderIcon: ChevronUp16,
    size: "field",
    tooltipPosition: "bottom",
    tooltipAlignment: "end",
    type: "button"
  }) : null));
}); // Return a placeholder if not released and not enabled by feature flag

PageHeader = pkg.checkComponentEnabled(PageHeader, componentName); // copied from carbon-components-react/src/components/Tag/Tag.js for DocGen

var TYPES = {
  red: 'Red',
  magenta: 'Magenta',
  purple: 'Purple',
  blue: 'Blue',
  cyan: 'Cyan',
  teal: 'Teal',
  green: 'Green',
  gray: 'Gray',
  'cool-gray': 'Cool-Gray',
  'warm-gray': 'Warm-Gray',
  'high-contrast': 'High-Contrast'
};
var tagTypes = Object.keys(TYPES);
export var deprecatedProps = {
  /**
   * **Deprecated** see property `actionBarOverflowAriaLabel`
   */
  actionBarOverflowLabel: deprecateProp(PropTypes.string, 'Property renamed to `actionBarOverflowAriaLabel`.'),

  /**
   * **Deprecated** see property `children`
   */
  availableSpace: deprecateProp(PropTypes.node, 'Make use of children instead.'),

  /**
   * **Deprecated** see property `hasBackgroundAlways`
   */
  background: deprecateProp(PropTypes.bool, 'Property renamed to `hasBackgroundAlways`'),

  /**
   * **Deprecated** see property `breadcrumbs`
   */
  breadcrumbItems: deprecateProp(PropTypes.element, 'Usage changed to expect breadcrumb item like shapes, see `breadcrumbs`.'),

  /**
   * **Deprecated** see property `breadcrumbOverflowAriaLabel`
   */
  breadcrumbOverflowLabel: deprecateProp(PropTypes.string, 'Property renamed to `breadcrumbOverflowAriaLabel`.'),

  /**
   * **Deprecated** see property `collapseHeaderIconDescription`
   */
  collapseHeaderLabel: deprecateProp(PropTypes.string, 'Property renamed to `collapseHeaderIconDescription`.'),

  /**
   * **Deprecated** see property `hasCollapseHeaderToggle`
   */
  collapseHeaderToggleWanted: deprecateProp(PropTypes.bool, 'Property renamed to `hasCollapseHeaderToggle`'),

  /**
   * **Deprecated** see property `expandHeaderIconDescription`
   */
  expandHeaderLabel: deprecateProp(PropTypes.string, 'Property renamed to `expandHeaderIconDescription`.'),

  /**
   * **Deprecated** no longer required
   */
  pageHeaderOffset: deprecateProp(PropTypes.number, 'Property removed as no longer required.'),

  /**
   * **Deprecated** see property `collapseTitle`
   */
  preCollapseTitleRow: deprecateProp(PropTypes.bool, 'Property renamed to `collapseTitle`.'),

  /**
   * **Deprecated** see property `disableBreadcrumbScroll`
   */
  preventBreadcrumbScroll: deprecateProp(PropTypes.bool, 'Prop renamed to `disableBreadcrumbScroll`.'),

  /**
   * **Deprecated** see property `title object form`
   */
  titleIcon: deprecateProp(PropTypes.oneOfType([PropTypes.func, PropTypes.object]), 'Use `title` prop shape instead.')
};
PageHeader.propTypes = _objectSpread({
  /**
   * Specifies the action bar items which are the final items in the row top of the PageHeader.
   * Each item is specified as an object with the properties of a Carbon Button in icon only form.
   * Button kind, size, tooltipPosition, tooltipAlignment and type are ignored.
   */
  actionBarItems: deprecatePropUsage(PropTypes.arrayOf(PropTypes.shape(_objectSpread(_objectSpread({}, prepareProps(Button.propTypes, ['kind', 'size', 'tooltipPosition', 'tooltipAlignment'])), {}, {
    iconDescription: PropTypes.string.isRequired,
    onClick: Button.propTypes.onClick,
    renderIcon: Button.propTypes.renderIcon.isRequired
  }))), // expects action bar item as array or in fragment
  PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element]), 'Expects an array of objects with the following properties: iconDescription, renderIcon and onClick.'),

  /**
   * When there is insufficient space for all actionBarItems to be displayed this
   * aria label is used for the action bar overflow menu
   *
   * NOTE: This prop is required if actionBarItems are supplied
   */
  actionBarOverflowAriaLabel: PropTypes.string.isRequired.if(function (_ref10) {
    var actionBarItems = _ref10.actionBarItems,
        actionBarOverflowLabel = _ref10.actionBarOverflowLabel;
    return actionBarItems && actionBarItems.length > 0 && !actionBarOverflowLabel;
  }),

  /**
   * When tags are supplied there may not be sufficient space to display all of the tags. This results in an overflow
   * menu being shown. If in the overflow menu there is still insufficient space this label is used in a dialog showing
   * all tags.
   *
   * **Note: Required if more than 10 tags**
   */
  allTagsModalSearchLabel: string_required_if_more_than_10_tags,

  /**
   * When tags are supplied there may not be sufficient space to display all of the tags. This results in an overflow
   * menu being shown. If in the overflow menu there is still insufficient space this placeholder is used in a dialog
   * showing all tags.
   *
   * **Note: Required if more than 10 tags**
   */
  allTagsModalSearchPlaceholderText: string_required_if_more_than_10_tags,

  /**
   * When tags are supplied there may not be sufficient space to display all of the tags. This results in an overflow
   * menu being shown. If in the overflow menu there is still insufficient space this title is used in a dialog showing
   * all tags.
   *
   * **Note: Required if more than 10 tags**
   */
  allTagsModalTitle: string_required_if_more_than_10_tags,

  /**
   * If the user supplies breadcrumbs then this property is required.
   * It is used in an overflow menu when there is insufficient space to display all breadcrumbs inline.
   */
  breadcrumbOverflowAriaLabel: PropTypes.string.isRequired.if(function (_ref11) {
    var breadcrumbs = _ref11.breadcrumbs,
        breadcrumbItems = _ref11.breadcrumbItems;
    return breadcrumbs && breadcrumbs.length > 0 || breadcrumbItems && breadcrumbItems.length > 0;
  }),

  /**
   * Specifies the breadcrumb components to be shown in the breadcrumb area of
   * the page header. Each item is specified as an object with optional fields
   * 'label' to supply the breadcrumb label, 'href' to supply the link location,
   * and 'isCurrentPage' to specify whether this breadcrumb component represents
   * the current page. Each item should also include a unique 'key' field to
   * enable efficient rendering, and if the label is not a string then a 'title'
   * field is required to provide a text alternative for display. Any other
   * fields in the object will be passed through to the breadcrumb element as
   * HTML attributes.
   */
  breadcrumbs: PropTypes.arrayOf(PropTypes.shape({
    /**
     * Optional string representing the link location for the BreadcrumbItem
     */
    href: PropTypes.string,

    /**
     * Provide if this breadcrumb item represents the current page
     */
    isCurrentPage: PropTypes.bool,

    /**
     * Key required to render array efficiently
     */
    key: PropTypes.string.isRequired,

    /**
     * Pass in content that will be inside of the BreadcrumbItem
     */
    label: PropTypes.node,

    /**
     * A text version of the `label` for display, required if `label` is not a string.
     */
    title: PropTypes.string.isRequired.if(function (_ref12) {
      var label = _ref12.label;
      return typeof label !== 'string';
    })
  })),

  /**
   * A zone for placing high-level, client content above the page tabs.
   * Accepts arbitrary renderable content as a React node. Optional.
   */
  children: PropTypes.node,

  /**
   * Specifies class(es) to be applied to the top-level PageHeader node.
   * Optional.
   */
  className: PropTypes.string,

  /**
   * The header can as a whole be collapsed, expanded or somewhere in between.
   * This setting controls the initial value, but also takes effect on change
   *
   * NOTE: The header is collapsed by setting the scroll position to hide part of the header.
   * Collapsing has no effect if there is insufficient content to scroll.
   */
  collapseHeader: PropTypes.bool,

  /**
   * If `hasCollapseHeaderToggle` and `hasBackgroundAlways` are set then assistive text is required
   * for both the expend and collapse states of the button component used.
   */
  collapseHeaderIconDescription: PropTypes.string.isRequired.if(function (_ref13) {
    var hasBackgroundAlways = _ref13.hasBackgroundAlways,
        hasCollapseHeaderToggle = _ref13.hasCollapseHeaderToggle;
    return hasBackgroundAlways && hasCollapseHeaderToggle;
  }),

  /**
   * The title row typically starts below the breadcrumb row. This option
   * preCollapses it into the breadcrumb row.
   */
  collapseTitle: PropTypes.bool,

  /**
   * Standard behavior scrolls the breadcrumb off to leave just tabs. This
   * option preserves vertical space for both the breadcrumb and tabs if they're supplied.
   */
  disableBreadcrumbScroll: PropTypes.bool,

  /**
   * If `hasCollapseHeaderToggle` and `hasBackgroundAlways` are set then assistive text is required
   * for both the expend and collapse states of the button component used.
   */
  expandHeaderIconDescription: PropTypes.string.isRequired.if(function (_ref14) {
    var hasBackgroundAlways = _ref14.hasBackgroundAlways,
        hasCollapseHeaderToggle = _ref14.hasCollapseHeaderToggle;
    return hasBackgroundAlways && hasCollapseHeaderToggle;
  }),

  /**
   * The PageHeader is hosted in a Carbon grid, this value is passed through to the Carbon grid fullWidth prop.
   * 'xl' is used to override the grid width setting. Can be used with narrowGrid: true to get the largest size.
   */
  fullWidthGrid: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['xl'])]),

  /**
   * Specifies if the PageHeader should have a background always on and defaults to the preferred `true`.
   * When false some parts of the header gain a background if they stick to the top of the PageHeader on scroll.
   */
  hasBackgroundAlways: PropTypes.bool,

  /**
   * Adds a button as the last element of the bottom row which collapses and expands the header.
   *
   * NOTE: The header is collapsed by setting the scroll position to hide part of the header.
   * Collapsing has no effect if there is insufficient content to scroll.
   */
  hasCollapseHeaderToggle: PropTypes.bool,

  /**
   * The PageHeader is hosted in a Carbon grid, this value is passed through to the Carbon grid narrow prop
   */
  narrowGrid: PropTypes.bool,

  /**
   * Content for the navigation area in the PageHeader. Should
   * be a React element that is normally a Carbon Tabs component. Optional.
   */
  navigation: PropTypes.element,
  // Supports Tabs

  /**
   * Specifies the primary page actions which are placed at the same level in the page as the title.
   *
   * Each action is specified as an object with the properties of a Carbon Button plus:
   * - label: node
   *
   * Carbon Button API https://react.carbondesignsystem.com/?path=/docs/components-button--default#component-api
   */
  pageActions: deprecatePropUsage(PropTypes.arrayOf(PropTypes.shape(_objectSpread(_objectSpread({}, Button.propTypes), {}, {
    key: PropTypes.string.isRequired,
    kind: Button.propTypes.kind,
    label: PropTypes.node,
    onClick: PropTypes.func
  }))), PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element]), 'Expects an array of objects with the following properties: label and onClick.'),

  /**
   * When there is insufficient space to display all of hte page actions inline a dropdown button menu is shown,
   * containing the page actions. This label is used as the display content of the dropdown button menu.
   *
   * NOTE: This prop is required if pageActions are supplied
   */
  pageActionsOverflowLabel: PropTypes.node.isRequired.if(function (_ref15) {
    var pageActions = _ref15.pageActions;
    return pageActions && pageActions.length > 0;
  }),

  /**
   * When tags are supplied there may not be sufficient space to display all of the tags. This results in an overflow
   * menu being shown. If in the overflow menu there is still insufficient space this label is used to offer a
   * "View all tags" option.
   *
   * **Note: Required if more than 10 tags**
   */
  showAllTagsLabel: string_required_if_more_than_10_tags,

  /**
   * Sitting just below the title is this optional subtitle that provides additional context to
   * identify the current page.
   */
  subtitle: PropTypes.string,

  /**
   * An array of tags to be shown as the final content in the PageHeader.
   *
   * Each tag is specified as an object with the following properties
   * **label**\* (required) to supply the tag content, and properties of the the Carbon Tag component,
   * such as **type**, **disabled**, **ref**, **className** , and any other Tag props.
   *
   * NOTE: **filter** is not supported. Any remaining fields in the object will be passed through to the HTML element
   * as HTML attributes.
   *
   * See https://react.carbondesignsystem.com/?path=/docs/components-tag--default
   */
  tags: PropTypes.arrayOf(PropTypes.shape(_objectSpread(_objectSpread({}, prepareProps(Tag.propTypes, 'filter')), {}, {
    label: PropTypes.string.isRequired,
    // we duplicate this prop to improve the DocGen
    type: PropTypes.oneOf(tagTypes)
  }))),

  /**
   * An optional page title supplied as a string or object with the following attributes: text, icon, loading
   */
  title: PropTypes.oneOfType([PropTypes.shape({
    text: PropTypes.string.isRequired,
    icon: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    loading: PropTypes.bool
  }), PropTypes.string])
}, deprecatedProps);
PageHeader.defaultProps = {
  fullWidthGrid: false,
  hasBackgroundAlways: true,
  narrowGrid: false
};
PageHeader.displayName = componentName;