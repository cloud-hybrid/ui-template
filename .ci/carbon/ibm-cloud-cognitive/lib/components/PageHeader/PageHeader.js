"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deprecatedProps = exports.PageHeader = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _layout = require("@carbon/layout");

var _classnames = _interopRequireDefault(require("classnames"));

var _reactResizeDetector = require("react-resize-detector");

var _carbonComponentsReact = require("carbon-components-react");

var _hooks = require("../../global/js/hooks");

var _devtools = require("../../global/js/utils/devtools");

var _propsHelper = require("../../global/js/utils/props-helper");

var _settings = require("../../settings");

var _ActionBar = require("../ActionBar/");

var _BreadcrumbWithOverflow = require("../BreadcrumbWithOverflow");

var _TagSet = require("../TagSet/TagSet");

var _ButtonSetWithOverflow = require("../ButtonSetWithOverflow");

var _iconsReact = require("@carbon/icons-react");

var _PageHeaderUtils = require("./PageHeaderUtils");

var _excluded = ["actionBarItems", "actionBarOverflowAriaLabel", "actionBarOverflowLabel", "allTagsModalSearchLabel", "allTagsModalSearchPlaceholderText", "allTagsModalTitle", "availableSpace", "background", "hasBackgroundAlways", "breadcrumbOverflowAriaLabel", "breadcrumbOverflowLabel", "breadcrumbItems", "breadcrumbs", "children", "className", "collapseHeader", "collapseHeaderIconDescription", "collapseHeaderLabel", "collapseHeaderToggleWanted", "collapseTitle", "disableBreadcrumbScroll", "expandHeaderIconDescription", "expandHeaderLabel", "fullWidthGrid", "hasCollapseHeaderToggle", "narrowGrid", "navigation", "pageActions", "pageActionsOverflowLabel", "pageHeaderOffset", "preCollapseTitleRow", "preventBreadcrumbScroll", "showAllTagsLabel", "subtitle", "tags", "title", "titleIcon"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var componentName = 'PageHeader';

var PageHeader = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
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
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
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

  var _useState = (0, _react.useState)({}),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      metrics = _useState2[0],
      setMetrics = _useState2[1];

  var _useState3 = (0, _react.useState)(_objectSpread({}, rest.style)),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      pageHeaderStyles = _useState4[0],
      setPageHeaderStyles = _useState4[1]; // refs


  var localHeaderRef = (0, _react.useRef)(null);
  var headerRef = ref || localHeaderRef;
  var sizingContainerRef = (0, _react.useRef)();
  var offsetTopMeasuringRef = (0, _react.useRef)(null); // utility functions
  // Title shape is used to allow title to be string or shape

  var getTitleShape = function getTitleShape() {
    return (0, _PageHeaderUtils.utilGetTitleShape)(title, titleIcon, PageHeader.defaultProps.title);
  };

  var checkUpdateVerticalSpace = function checkUpdateVerticalSpace() {
    return (0, _PageHeaderUtils.utilCheckUpdateVerticalSpace)(headerRef, offsetTopMeasuringRef, navigation, disableBreadcrumbScroll, setMetrics);
  }; // state based on props only


  var actionBarItemArray = (0, _propsHelper.extractShapesArray)(actionBarItems);
  var hasActionBar = actionBarItemArray && actionBarItemArray.length;
  var hasBreadcrumbRow = !(breadcrumbs === undefined && actionBarItems === undefined);
  var pageActionsItemArray = (_extractShapesArray = (0, _propsHelper.extractShapesArray)(pageActions)) === null || _extractShapesArray === void 0 ? void 0 : _extractShapesArray.map(function (shape) {
    return _objectSpread({
      label: shape.children
    }, shape);
  });
  /* Title shape is used to allow title to be string or shape */

  var titleShape = getTitleShape(); // NOTE: The buffer is used to add space between the bottom of the header and the last content
  // Not pre-collapsed and (subtitle or children)

  var lastRowBufferActive = (title || pageActions) && !collapseTitle || subtitle || children; // state based on scroll/resize based effects

  var _useState5 = (0, _react.useState)(false),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      pageActionsInBreadcrumbRow = _useState6[0],
      setPageActionsInBreadcrumbRow = _useState6[1];

  var _useState7 = (0, _react.useState)(0),
      _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
      scrollYValue = _useState8[0],
      setScrollYValue = _useState8[1];

  var _useState9 = (0, _react.useState)(0),
      _useState10 = (0, _slicedToArray2.default)(_useState9, 2),
      backgroundOpacity = _useState10[0],
      setBackgroundOpacity = _useState10[1];

  var _useState11 = (0, _react.useState)(false),
      _useState12 = (0, _slicedToArray2.default)(_useState11, 2),
      hasCollapseButton = _useState12[0],
      setHasCollapseButton = _useState12[1];

  var _useState13 = (0, _react.useState)(false),
      _useState14 = (0, _slicedToArray2.default)(_useState13, 2),
      spaceForCollapseButton = _useState14[0],
      setSpaceForCollapseButton = _useState14[1];

  var _useState15 = (0, _react.useState)(0),
      _useState16 = (0, _slicedToArray2.default)(_useState15, 2),
      actionBarMaxWidth = _useState16[0],
      setActionBarMaxWidth = _useState16[1];

  var _useState17 = (0, _react.useState)(0),
      _useState18 = (0, _slicedToArray2.default)(_useState17, 2),
      actionBarMinWidth = _useState18[0],
      setActionBarMinWidth = _useState18[1];

  var _useState19 = (0, _react.useState)(0),
      _useState20 = (0, _slicedToArray2.default)(_useState19, 2),
      pageActionInBreadcrumbMaxWidth = _useState20[0],
      setPageActionInBreadcrumbMaxWidth = _useState20[1];

  var _useState21 = (0, _react.useState)(0),
      _useState22 = (0, _slicedToArray2.default)(_useState21, 2),
      pageActionInBreadcrumbMinWidth = _useState22[0],
      setPageActionInBreadcrumbMinWidth = _useState22[1];

  var _useState23 = (0, _react.useState)(0),
      _useState24 = (0, _slicedToArray2.default)(_useState23, 2),
      actionBarColumnWidth = _useState24[0],
      setActionBarColumnWidth = _useState24[1];

  var _useState25 = (0, _react.useState)(false),
      _useState26 = (0, _slicedToArray2.default)(_useState25, 2),
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
    (0, _PageHeaderUtils.utilSetCollapsed)(!fullyCollapsed, metrics.headerOffset, metrics.headerTopValue);
  }; // use effects


  (0, _react.useEffect)(function () {
    // Determine the location of the pageAction buttons

    /* istanbul ignore next */
    setPageActionsInBreadcrumbRow(collapseTitle || scrollYValue > metrics.titleRowSpaceAbove && hasActionBar);
  }, [hasActionBar, metrics.breadcrumbRowSpaceBelow, metrics.titleRowSpaceAbove, collapseTitle, scrollYValue]);
  (0, _react.useEffect)(function () {
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

      return _objectSpread(_objectSpread({}, prev), {}, (_objectSpread2 = {}, (0, _defineProperty2.default)(_objectSpread2, "--".concat(_PageHeaderUtils.blockClass, "--max-action-bar-width-px"), newActionBarWidth), (0, _defineProperty2.default)(_objectSpread2, "--".concat(_PageHeaderUtils.blockClass, "--button-set-in-breadcrumb-width-px"), "".concat(newPageActionInBreadcrumbWidth)), _objectSpread2));
    });
  }, [actionBarColumnWidth, actionBarMaxWidth, actionBarMinWidth, pageActionInBreadcrumbMaxWidth, pageActionInBreadcrumbMinWidth, headerRef]);
  (0, _react.useEffect)(function () {
    // Updates custom CSS props used to manage scroll behaviour

    /* istanbul ignore next */
    setPageHeaderStyles(function (prev) {
      var _objectSpread3;

      return _objectSpread(_objectSpread({}, prev), {}, (_objectSpread3 = {}, (0, _defineProperty2.default)(_objectSpread3, "--".concat(_PageHeaderUtils.blockClass, "--height-px"), "".concat(metrics.headerHeight, "px")), (0, _defineProperty2.default)(_objectSpread3, "--".concat(_PageHeaderUtils.blockClass, "--width-px"), "".concat(metrics.headerWidth, "px")), (0, _defineProperty2.default)(_objectSpread3, "--".concat(_PageHeaderUtils.blockClass, "--header-top"), "".concat(metrics.headerTopValue + metrics.headerOffset, "px")), (0, _defineProperty2.default)(_objectSpread3, "--".concat(_PageHeaderUtils.blockClass, "--breadcrumb-title-visibility"), scrollYValue > 0 ? 'visible' : 'hidden'), (0, _defineProperty2.default)(_objectSpread3, "--".concat(_PageHeaderUtils.blockClass, "--scroll"), "".concat(scrollYValue)), (0, _defineProperty2.default)(_objectSpread3, "--".concat(_PageHeaderUtils.blockClass, "--breadcrumb-title-top"), "".concat(Math.max(0, metrics.breadcrumbTitleHeight + metrics.titleRowSpaceAbove - scrollYValue), "px")), (0, _defineProperty2.default)(_objectSpread3, "--".concat(_PageHeaderUtils.blockClass, "--breadcrumb-title-opacity"), "".concat(Math.min(1, Math.max(0, (scrollYValue - (metrics.titleRowSpaceAbove || 0)) / (metrics.breadcrumbTitleHeight || 1) // don't want to divide by zero
      )))), (0, _defineProperty2.default)(_objectSpread3, "--".concat(_PageHeaderUtils.blockClass, "--breadcrumb-row-width-px"), "".concat(metrics.breadcrumbRowWidth, "px")), _objectSpread3));
    });
  }, [headerRef, disableBreadcrumbScroll, metrics, metrics.breadcrumbRowHeight, metrics.breadcrumbRowSpaceBelow, metrics.breadcrumbTitleHeight, metrics.breadcrumbRowWidth, metrics.headerHeight, metrics.headerWidth, metrics.headerOffset, metrics.headerTopValue, metrics.navigationRowHeight, navigation, scrollYValue, tags]);
  (0, _hooks.useNearestScroll)(headerRef, // on scroll or various layout changes check updates if needed
  function (_ref4) {
    var current = _ref4.current;
    setPageHeaderStyles(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, (0, _defineProperty2.default)({}, "--".concat(_PageHeaderUtils.blockClass, "--breadcrumb-top"), "".concat(metrics.headerOffset, "px")));
    });
    var fullyCollapsed = current.scrollY + metrics.headerTopValue + metrics.headerOffset >= 0;
    setFullyCollapsed(fullyCollapsed); // set offset for tagset tooltip

    /* istanbul ignore next */

    var tagsetTooltipOffset = fullyCollapsed ? metrics.headerHeight + metrics.headerTopValue + metrics.headerOffset : metrics.headerHeight + metrics.headerOffset;
    /* istanbul ignore next */

    document.documentElement.style.setProperty("--".concat(_PageHeaderUtils.blockClass, "--tagset-tooltip-position"), fullyCollapsed ? 'fixed' : 'absolute');
    document.documentElement.style.setProperty("--".concat(_PageHeaderUtils.blockClass, "--tagset-tooltip-offset"), "".concat(tagsetTooltipOffset, "px"));
    setScrollYValue(current.scrollY);
  }, [metrics.headerHeight, metrics.headerTopValue, metrics.headerOffset, disableBreadcrumbScroll]);
  (0, _hooks.useWindowResize)(function () {
    // on window resize and other updates some values may have changed
    checkUpdateVerticalSpace();
  }, [actionBarItems, children, breadcrumbs, disableBreadcrumbScroll, navigation, pageActions, subtitle, tags, title]);
  (0, _react.useEffect)(function () {
    checkUpdateVerticalSpace(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fullWidthGrid, narrowGrid]);
  (0, _react.useEffect)(function () {
    // Determines if the hasBackgroundAlways should be one based on the header height or scroll
    var result = hasBackgroundAlways && 1;

    if (!result && metrics.headerHeight > 0 && (breadcrumbs || actionBarItems || tags || navigation)) {
      var startAddingAt = parseFloat(_layout.layout05, 10) * parseInt(_layout.baseFontSize);
      var scrollRemaining = metrics.headerHeight - scrollYValue;
      /* don't know how to test resize */

      /* istanbul ignore if */

      if (scrollRemaining < startAddingAt) {
        var distanceAddingOver = startAddingAt - metrics.breadcrumbRowHeight;
        result = Math.min(1, (startAddingAt - scrollRemaining) / distanceAddingOver);
      }
    }

    setPageHeaderStyles(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, (0, _defineProperty2.default)({}, "--".concat(_PageHeaderUtils.blockClass, "--background-opacity"), result));
    });
    setBackgroundOpacity(result);
  }, [actionBarItems, hasBackgroundAlways, breadcrumbs, headerRef, metrics.breadcrumbRowHeight, metrics.headerHeight, navigation, scrollYValue, hasCollapseHeaderToggle, tags]);
  (0, _react.useEffect)(function () {
    // only has toggle if requested and has hasBackgroundAlways
    // NOTE: prop-types isRequired.if for the expand and collapse
    // icon descriptions depends on the this.
    setHasCollapseButton(hasCollapseHeaderToggle && hasBackgroundAlways);
  }, [hasBackgroundAlways, hasCollapseHeaderToggle]);
  (0, _react.useEffect)(function () {
    // Determine if space is needed in the breadcrumb for a collapse button
    setSpaceForCollapseButton(hasCollapseButton && !(navigation || tags) && metrics.headerHeight);
  }, [hasCollapseButton, navigation, tags, metrics.headerHeight]);

  var nextToTabsCheck = function nextToTabsCheck() {
    /* istanbul ignore next */
    return disableBreadcrumbScroll && actionBarItems === undefined && scrollYValue + metrics.headerTopValue >= 0;
  };

  (0, _react.useEffect)(function () {
    if (typeof collapseHeader === 'boolean') {
      (0, _PageHeaderUtils.utilSetCollapsed)(collapseHeader, metrics.headerOffset, metrics.headerTopValue);
    }
  }, [collapseHeader, metrics.headerOffset, metrics.headerTopValue]);
  var titleText = titleShape.text,
      TitleIcon = titleShape.icon,
      titleLoading = titleShape.loading;
  (0, _reactResizeDetector.useResizeDetector)({
    onResize: handleResizeActionBarColumn,
    targetRef: sizingContainerRef,
    handleWidth: true
  });
  (0, _reactResizeDetector.useResizeDetector)({
    onResize: handleResize,
    targetRef: headerRef,
    handleHeight: true
  });
  var breadcrumbsInWithTitle;

  if (breadcrumbsIn) {
    breadcrumbsInWithTitle = !title ? breadcrumbsIn : breadcrumbsIn.concat({
      isCurrentPage: true,
      className: (0, _classnames.default)(["".concat(_PageHeaderUtils.blockClass, "__breadcrumb-title"), (0, _defineProperty2.default)({}, "".concat(_PageHeaderUtils.blockClass, "__breadcrumb-title--pre-collapsed"), collapseTitle)]),
      key: "breadcrumb-title",
      label: /*#__PURE__*/_react.default.createElement("span", null, titleLoading ? /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.SkeletonText, null) : titleText),
      title: titleText
    });
  }

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(_PageHeaderUtils.blockClass, "--offset-top-measuring-element"),
    ref: offsetTopMeasuringRef
  }), /*#__PURE__*/_react.default.createElement("section", (0, _extends2.default)({}, rest, {
    className: (0, _classnames.default)([_PageHeaderUtils.blockClass, "".concat(_PageHeaderUtils.blockClass, "--no-margins-below-row"), className, (_ref6 = {}, (0, _defineProperty2.default)(_ref6, "".concat(_PageHeaderUtils.blockClass, "--show-background"), backgroundOpacity > 0), (0, _defineProperty2.default)(_ref6, "".concat(_PageHeaderUtils.blockClass, "--has-navigation"), navigation || tags), (0, _defineProperty2.default)(_ref6, "".concat(_PageHeaderUtils.blockClass, "--has-navigation-tags-only"), !navigation && tags), _ref6)]),
    style: pageHeaderStyles,
    ref: headerRef
  }, (0, _devtools.getDevtoolsProps)(componentName)), /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.Grid, {
    fullWidth: fullWidthGrid === true || fullWidthGrid === 'xl',
    narrow: narrowGrid,
    className: (0, _classnames.default)((0, _defineProperty2.default)({}, "".concat(_PageHeaderUtils.blockClass, "--width--xl"), fullWidthGrid === 'xl'))
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(_PageHeaderUtils.blockClass, "__non-navigation-row-content")
  }, hasBreadcrumbRow ? /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.Row, {
    className: (0, _classnames.default)("".concat(_PageHeaderUtils.blockClass, "__breadcrumb-row"), (_cx2 = {}, (0, _defineProperty2.default)(_cx2, "".concat(_PageHeaderUtils.blockClass, "__breadcrumb-row--next-to-tabs"), nextToTabsCheck()), (0, _defineProperty2.default)(_cx2, "".concat(_PageHeaderUtils.blockClass, "__breadcrumb-row--has-breadcrumbs"), breadcrumbs), (0, _defineProperty2.default)(_cx2, "".concat(_PageHeaderUtils.blockClass, "__breadcrumb-row--has-action-bar"), hasActionBar), _cx2))
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(_PageHeaderUtils.blockClass, "__breadcrumb-row--container")
  }, /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.Column, {
    className: (0, _classnames.default)("".concat(_PageHeaderUtils.blockClass, "__breadcrumb-column"), (0, _defineProperty2.default)({}, "".concat(_PageHeaderUtils.blockClass, "__breadcrumb-column--background"), breadcrumbs !== undefined || hasActionBar))
  }, breadcrumbs !== undefined ? /*#__PURE__*/_react.default.createElement(_BreadcrumbWithOverflow.BreadcrumbWithOverflow, {
    className: "".concat(_PageHeaderUtils.blockClass, "__breadcrumb"),
    noTrailingSlash: title !== undefined,
    overflowAriaLabel: breadcrumbOverflowAriaLabel,
    breadcrumbs: breadcrumbsInWithTitle
  }, !breadcrumbsIn ? deprecated_breadcrumbItems : null, !breadcrumbsIn && title ? /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.BreadcrumbItem, {
    isCurrentPage: true,
    className: (0, _classnames.default)(["".concat(_PageHeaderUtils.blockClass, "__breadcrumb-title"), (0, _defineProperty2.default)({}, "".concat(_PageHeaderUtils.blockClass, "__breadcrumb-title--pre-collapsed"), collapseTitle)])
  }, /*#__PURE__*/_react.default.createElement("span", null, titleLoading ? /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.SkeletonText, null) : titleText)) : null) : null), /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.Column, {
    className: (0, _classnames.default)(["".concat(_PageHeaderUtils.blockClass, "__action-bar-column ").concat(_PageHeaderUtils.blockClass, "__action-bar-column--background"), (_ref8 = {}, (0, _defineProperty2.default)(_ref8, "".concat(_PageHeaderUtils.blockClass, "__action-bar-column--has-page-actions"), pageActions), (0, _defineProperty2.default)(_ref8, "".concat(_PageHeaderUtils.blockClass, "__action-bar-column--influenced-by-collapse-button"), spaceForCollapseButton), _ref8)])
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(_PageHeaderUtils.blockClass, "__action-bar-column-content"),
    ref: sizingContainerRef
  }, hasActionBar ?
  /*#__PURE__*/
  // Investigate the responsive  behaviour or this and the title also fix the ActionBar Item and PageAction story css
  _react.default.createElement(_react.default.Fragment, null, pageActions && /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)("".concat(_PageHeaderUtils.blockClass, "__page-actions"), (0, _defineProperty2.default)({}, "".concat(_PageHeaderUtils.blockClass, "__page-actions--in-breadcrumb"), pageActionsInBreadcrumbRow))
  }, /*#__PURE__*/_react.default.createElement(_ButtonSetWithOverflow.ButtonSetWithOverflow, {
    className: "".concat(_PageHeaderUtils.blockClass, "__button-set--in-breadcrumb"),
    onWidthChange: handleButtonSetWidthChange,
    buttons: pageActionsItemArray,
    buttonSetOverflowLabel: pageActionsOverflowLabel
  })), /*#__PURE__*/_react.default.createElement(_ActionBar.ActionBar, {
    overflowAriaLabel: actionBarOverflowAriaLabel,
    actions: actionBarItemArray,
    className: "".concat(_PageHeaderUtils.blockClass, "__action-bar"),
    onWidthChange: handleActionBarWidthChange,
    rightAlign: true
  })) : null)))) : null, !collapseTitle && !(title === undefined && pageActions === undefined) ? /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.Row, {
    className: (0, _classnames.default)("".concat(_PageHeaderUtils.blockClass, "__title-row"), (_cx5 = {}, (0, _defineProperty2.default)(_cx5, "".concat(_PageHeaderUtils.blockClass, "__title-row--no-breadcrumb-row"), !hasBreadcrumbRow), (0, _defineProperty2.default)(_cx5, "".concat(_PageHeaderUtils.blockClass, "__title-row--under-action-bar"), hasActionBar), (0, _defineProperty2.default)(_cx5, "".concat(_PageHeaderUtils.blockClass, "__title-row--has-page-actions"), pageActions !== undefined), (0, _defineProperty2.default)(_cx5, "".concat(_PageHeaderUtils.blockClass, "__title-row--sticky"), pageActions !== undefined && actionBarItems === undefined && hasBreadcrumbRow), _cx5))
  }, /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.Column, {
    className: "".concat(_PageHeaderUtils.blockClass, "__title-column")
  }, title !== undefined ? /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)("".concat(_PageHeaderUtils.blockClass, "__title"), (0, _defineProperty2.default)({}, "".concat(_PageHeaderUtils.blockClass, "__title--fades"), hasBreadcrumbRow))
  }, TitleIcon && !titleLoading ? /*#__PURE__*/_react.default.createElement(TitleIcon, {
    className: "".concat(_PageHeaderUtils.blockClass, "__title-icon")
  }) : null, /*#__PURE__*/_react.default.createElement("span", {
    title: !titleLoading ? titleText : null
  }, titleLoading ? /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.SkeletonText, {
    className: "".concat(_PageHeaderUtils.blockClass, "__title-skeleton")
  }) : titleText)) : null), pageActions !== undefined ? /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.Column, {
    className: (0, _classnames.default)("".concat(_PageHeaderUtils.blockClass, "__page-actions"), (0, _defineProperty2.default)({}, "".concat(_PageHeaderUtils.blockClass, "__page-actions--in-breadcrumb"), pageActionsInBreadcrumbRow))
  }, /*#__PURE__*/_react.default.createElement(_ButtonSetWithOverflow.ButtonSetWithOverflow, {
    className: "".concat(_PageHeaderUtils.blockClass, "__page-actions-container"),
    onWidthChange: handleButtonSetWidthChange,
    buttons: pageActionsItemArray,
    buttonSetOverflowLabel: pageActionsOverflowLabel
  })) : null) : null, subtitle !== undefined ? /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.Row, {
    className: "".concat(_PageHeaderUtils.blockClass, "__subtitle-row")
  }, /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.Column, {
    className: "".concat(_PageHeaderUtils.blockClass, "__subtitle")
  }, subtitle)) : null, children !== undefined ? /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.Row, {
    className: "".concat(_PageHeaderUtils.blockClass, "__available-row")
  }, /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.Column, {
    className: "".concat(_PageHeaderUtils.blockClass, "__available-column")
  }, children)) : null, (breadcrumbs || actionBarItems || title || pageActions || children || subtitle) && /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)(["".concat(_PageHeaderUtils.blockClass, "__last-row-buffer"), (0, _defineProperty2.default)({}, "".concat(_PageHeaderUtils.blockClass, "__last-row-buffer--active"), lastRowBufferActive)])
  }), // this navigation row scrolls under the breadcrumb if there is one
  tags && !navigation ? /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.Row, {
    className: (0, _classnames.default)("".concat(_PageHeaderUtils.blockClass, "__navigation-row"), (0, _defineProperty2.default)({}, "".concat(_PageHeaderUtils.blockClass, "__navigation-row--has-tags"), tags))
  }, /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.Column, {
    className: (0, _classnames.default)("".concat(_PageHeaderUtils.blockClass, "__navigation-tags"), (0, _defineProperty2.default)({}, "".concat(_PageHeaderUtils.blockClass, "__navigation-tags--tags-only"), navigation === undefined))
  }, /*#__PURE__*/_react.default.createElement(_TagSet.TagSet, {
    overflowAlign: "end",
    allTagsModalSearchLabel: allTagsModalSearchLabel,
    allTagsModalSearchPlaceholderText: allTagsModalSearchPlaceholderText,
    allTagsModalTitle: allTagsModalTitle,
    showAllTagsLabel: showAllTagsLabel,
    tags: tags
  }))) : null), // this navigation pushes the breadcrumb off or settles underneath it depending on disableBreadcrumbScroll
  navigation ? /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.Row, {
    className: (0, _classnames.default)("".concat(_PageHeaderUtils.blockClass, "__navigation-row"), (_cx10 = {}, (0, _defineProperty2.default)(_cx10, "".concat(_PageHeaderUtils.blockClass, "__navigation-row--spacing-above-06"), navigation !== undefined), (0, _defineProperty2.default)(_cx10, "".concat(_PageHeaderUtils.blockClass, "__navigation-row--has-tags"), tags), _cx10))
  }, /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.Column, {
    className: "".concat(_PageHeaderUtils.blockClass, "__navigation-tabs")
  }, navigation), tags !== undefined ? /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.Column, {
    className: (0, _classnames.default)("".concat(_PageHeaderUtils.blockClass, "__navigation-tags"), (0, _defineProperty2.default)({}, "".concat(_PageHeaderUtils.blockClass, "__navigation-tags--tags-only"), navigation === undefined))
  }, /*#__PURE__*/_react.default.createElement(_TagSet.TagSet, {
    overflowAlign: "end",
    allTagsModalSearchLabel: allTagsModalSearchLabel,
    allTagsModalSearchPlaceholderText: allTagsModalSearchPlaceholderText,
    allTagsModalTitle: allTagsModalTitle,
    showAllTagsLabel: showAllTagsLabel,
    tags: tags
  })) : null) : null), hasCollapseButton ? /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.Button, {
    className: (0, _classnames.default)("".concat(_PageHeaderUtils.blockClass, "__collapse-expand-toggle"), (0, _defineProperty2.default)({}, "".concat(_PageHeaderUtils.blockClass, "__collapse-expand-toggle--collapsed"), fullyCollapsed)),
    hasIconOnly: true,
    iconDescription:
    /* istanbul ignore next */
    fullyCollapsed ? expandHeaderIconDescription : collapseHeaderIconDescription,
    kind: "ghost",
    onClick: handleCollapseToggle,
    renderIcon: _iconsReact.ChevronUp16,
    size: "field",
    tooltipPosition: "bottom",
    tooltipAlignment: "end",
    type: "button"
  }) : null));
}); // Return a placeholder if not released and not enabled by feature flag


exports.PageHeader = PageHeader;
exports.PageHeader = PageHeader = _settings.pkg.checkComponentEnabled(PageHeader, componentName); // copied from carbon-components-react/src/components/Tag/Tag.js for DocGen

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
var deprecatedProps = {
  /**
   * **Deprecated** see property `actionBarOverflowAriaLabel`
   */
  actionBarOverflowLabel: (0, _propsHelper.deprecateProp)(_propTypes.default.string, 'Property renamed to `actionBarOverflowAriaLabel`.'),

  /**
   * **Deprecated** see property `children`
   */
  availableSpace: (0, _propsHelper.deprecateProp)(_propTypes.default.node, 'Make use of children instead.'),

  /**
   * **Deprecated** see property `hasBackgroundAlways`
   */
  background: (0, _propsHelper.deprecateProp)(_propTypes.default.bool, 'Property renamed to `hasBackgroundAlways`'),

  /**
   * **Deprecated** see property `breadcrumbs`
   */
  breadcrumbItems: (0, _propsHelper.deprecateProp)(_propTypes.default.element, 'Usage changed to expect breadcrumb item like shapes, see `breadcrumbs`.'),

  /**
   * **Deprecated** see property `breadcrumbOverflowAriaLabel`
   */
  breadcrumbOverflowLabel: (0, _propsHelper.deprecateProp)(_propTypes.default.string, 'Property renamed to `breadcrumbOverflowAriaLabel`.'),

  /**
   * **Deprecated** see property `collapseHeaderIconDescription`
   */
  collapseHeaderLabel: (0, _propsHelper.deprecateProp)(_propTypes.default.string, 'Property renamed to `collapseHeaderIconDescription`.'),

  /**
   * **Deprecated** see property `hasCollapseHeaderToggle`
   */
  collapseHeaderToggleWanted: (0, _propsHelper.deprecateProp)(_propTypes.default.bool, 'Property renamed to `hasCollapseHeaderToggle`'),

  /**
   * **Deprecated** see property `expandHeaderIconDescription`
   */
  expandHeaderLabel: (0, _propsHelper.deprecateProp)(_propTypes.default.string, 'Property renamed to `expandHeaderIconDescription`.'),

  /**
   * **Deprecated** no longer required
   */
  pageHeaderOffset: (0, _propsHelper.deprecateProp)(_propTypes.default.number, 'Property removed as no longer required.'),

  /**
   * **Deprecated** see property `collapseTitle`
   */
  preCollapseTitleRow: (0, _propsHelper.deprecateProp)(_propTypes.default.bool, 'Property renamed to `collapseTitle`.'),

  /**
   * **Deprecated** see property `disableBreadcrumbScroll`
   */
  preventBreadcrumbScroll: (0, _propsHelper.deprecateProp)(_propTypes.default.bool, 'Prop renamed to `disableBreadcrumbScroll`.'),

  /**
   * **Deprecated** see property `title object form`
   */
  titleIcon: (0, _propsHelper.deprecateProp)(_propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object]), 'Use `title` prop shape instead.')
};
exports.deprecatedProps = deprecatedProps;
PageHeader.propTypes = _objectSpread({
  /**
   * Specifies the action bar items which are the final items in the row top of the PageHeader.
   * Each item is specified as an object with the properties of a Carbon Button in icon only form.
   * Button kind, size, tooltipPosition, tooltipAlignment and type are ignored.
   */
  actionBarItems: (0, _propsHelper.deprecatePropUsage)(_propTypes.default.arrayOf(_propTypes.default.shape(_objectSpread(_objectSpread({}, (0, _propsHelper.prepareProps)(_carbonComponentsReact.Button.propTypes, ['kind', 'size', 'tooltipPosition', 'tooltipAlignment'])), {}, {
    iconDescription: _propTypes.default.string.isRequired,
    onClick: _carbonComponentsReact.Button.propTypes.onClick,
    renderIcon: _carbonComponentsReact.Button.propTypes.renderIcon.isRequired
  }))), // expects action bar item as array or in fragment
  _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.element), _propTypes.default.element]), 'Expects an array of objects with the following properties: iconDescription, renderIcon and onClick.'),

  /**
   * When there is insufficient space for all actionBarItems to be displayed this
   * aria label is used for the action bar overflow menu
   *
   * NOTE: This prop is required if actionBarItems are supplied
   */
  actionBarOverflowAriaLabel: _propTypes.default.string.isRequired.if(function (_ref10) {
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
  allTagsModalSearchLabel: _TagSet.string_required_if_more_than_10_tags,

  /**
   * When tags are supplied there may not be sufficient space to display all of the tags. This results in an overflow
   * menu being shown. If in the overflow menu there is still insufficient space this placeholder is used in a dialog
   * showing all tags.
   *
   * **Note: Required if more than 10 tags**
   */
  allTagsModalSearchPlaceholderText: _TagSet.string_required_if_more_than_10_tags,

  /**
   * When tags are supplied there may not be sufficient space to display all of the tags. This results in an overflow
   * menu being shown. If in the overflow menu there is still insufficient space this title is used in a dialog showing
   * all tags.
   *
   * **Note: Required if more than 10 tags**
   */
  allTagsModalTitle: _TagSet.string_required_if_more_than_10_tags,

  /**
   * If the user supplies breadcrumbs then this property is required.
   * It is used in an overflow menu when there is insufficient space to display all breadcrumbs inline.
   */
  breadcrumbOverflowAriaLabel: _propTypes.default.string.isRequired.if(function (_ref11) {
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
  breadcrumbs: _propTypes.default.arrayOf(_propTypes.default.shape({
    /**
     * Optional string representing the link location for the BreadcrumbItem
     */
    href: _propTypes.default.string,

    /**
     * Provide if this breadcrumb item represents the current page
     */
    isCurrentPage: _propTypes.default.bool,

    /**
     * Key required to render array efficiently
     */
    key: _propTypes.default.string.isRequired,

    /**
     * Pass in content that will be inside of the BreadcrumbItem
     */
    label: _propTypes.default.node,

    /**
     * A text version of the `label` for display, required if `label` is not a string.
     */
    title: _propTypes.default.string.isRequired.if(function (_ref12) {
      var label = _ref12.label;
      return typeof label !== 'string';
    })
  })),

  /**
   * A zone for placing high-level, client content above the page tabs.
   * Accepts arbitrary renderable content as a React node. Optional.
   */
  children: _propTypes.default.node,

  /**
   * Specifies class(es) to be applied to the top-level PageHeader node.
   * Optional.
   */
  className: _propTypes.default.string,

  /**
   * The header can as a whole be collapsed, expanded or somewhere in between.
   * This setting controls the initial value, but also takes effect on change
   *
   * NOTE: The header is collapsed by setting the scroll position to hide part of the header.
   * Collapsing has no effect if there is insufficient content to scroll.
   */
  collapseHeader: _propTypes.default.bool,

  /**
   * If `hasCollapseHeaderToggle` and `hasBackgroundAlways` are set then assistive text is required
   * for both the expend and collapse states of the button component used.
   */
  collapseHeaderIconDescription: _propTypes.default.string.isRequired.if(function (_ref13) {
    var hasBackgroundAlways = _ref13.hasBackgroundAlways,
        hasCollapseHeaderToggle = _ref13.hasCollapseHeaderToggle;
    return hasBackgroundAlways && hasCollapseHeaderToggle;
  }),

  /**
   * The title row typically starts below the breadcrumb row. This option
   * preCollapses it into the breadcrumb row.
   */
  collapseTitle: _propTypes.default.bool,

  /**
   * Standard behavior scrolls the breadcrumb off to leave just tabs. This
   * option preserves vertical space for both the breadcrumb and tabs if they're supplied.
   */
  disableBreadcrumbScroll: _propTypes.default.bool,

  /**
   * If `hasCollapseHeaderToggle` and `hasBackgroundAlways` are set then assistive text is required
   * for both the expend and collapse states of the button component used.
   */
  expandHeaderIconDescription: _propTypes.default.string.isRequired.if(function (_ref14) {
    var hasBackgroundAlways = _ref14.hasBackgroundAlways,
        hasCollapseHeaderToggle = _ref14.hasCollapseHeaderToggle;
    return hasBackgroundAlways && hasCollapseHeaderToggle;
  }),

  /**
   * The PageHeader is hosted in a Carbon grid, this value is passed through to the Carbon grid fullWidth prop.
   * 'xl' is used to override the grid width setting. Can be used with narrowGrid: true to get the largest size.
   */
  fullWidthGrid: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.oneOf(['xl'])]),

  /**
   * Specifies if the PageHeader should have a background always on and defaults to the preferred `true`.
   * When false some parts of the header gain a background if they stick to the top of the PageHeader on scroll.
   */
  hasBackgroundAlways: _propTypes.default.bool,

  /**
   * Adds a button as the last element of the bottom row which collapses and expands the header.
   *
   * NOTE: The header is collapsed by setting the scroll position to hide part of the header.
   * Collapsing has no effect if there is insufficient content to scroll.
   */
  hasCollapseHeaderToggle: _propTypes.default.bool,

  /**
   * The PageHeader is hosted in a Carbon grid, this value is passed through to the Carbon grid narrow prop
   */
  narrowGrid: _propTypes.default.bool,

  /**
   * Content for the navigation area in the PageHeader. Should
   * be a React element that is normally a Carbon Tabs component. Optional.
   */
  navigation: _propTypes.default.element,
  // Supports Tabs

  /**
   * Specifies the primary page actions which are placed at the same level in the page as the title.
   *
   * Each action is specified as an object with the properties of a Carbon Button plus:
   * - label: node
   *
   * Carbon Button API https://react.carbondesignsystem.com/?path=/docs/components-button--default#component-api
   */
  pageActions: (0, _propsHelper.deprecatePropUsage)(_propTypes.default.arrayOf(_propTypes.default.shape(_objectSpread(_objectSpread({}, _carbonComponentsReact.Button.propTypes), {}, {
    key: _propTypes.default.string.isRequired,
    kind: _carbonComponentsReact.Button.propTypes.kind,
    label: _propTypes.default.node,
    onClick: _propTypes.default.func
  }))), _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.element), _propTypes.default.element]), 'Expects an array of objects with the following properties: label and onClick.'),

  /**
   * When there is insufficient space to display all of hte page actions inline a dropdown button menu is shown,
   * containing the page actions. This label is used as the display content of the dropdown button menu.
   *
   * NOTE: This prop is required if pageActions are supplied
   */
  pageActionsOverflowLabel: _propTypes.default.node.isRequired.if(function (_ref15) {
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
  showAllTagsLabel: _TagSet.string_required_if_more_than_10_tags,

  /**
   * Sitting just below the title is this optional subtitle that provides additional context to
   * identify the current page.
   */
  subtitle: _propTypes.default.string,

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
  tags: _propTypes.default.arrayOf(_propTypes.default.shape(_objectSpread(_objectSpread({}, (0, _propsHelper.prepareProps)(_carbonComponentsReact.Tag.propTypes, 'filter')), {}, {
    label: _propTypes.default.string.isRequired,
    // we duplicate this prop to improve the DocGen
    type: _propTypes.default.oneOf(tagTypes)
  }))),

  /**
   * An optional page title supplied as a string or object with the following attributes: text, icon, loading
   */
  title: _propTypes.default.oneOfType([_propTypes.default.shape({
    text: _propTypes.default.string.isRequired,
    icon: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object]),
    loading: _propTypes.default.bool
  }), _propTypes.default.string])
}, deprecatedProps);
PageHeader.defaultProps = {
  fullWidthGrid: false,
  hasBackgroundAlways: true,
  narrowGrid: false
};
PageHeader.displayName = componentName;