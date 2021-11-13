"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.string_required_if_more_than_10_tags = exports.default = exports.TagSet = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _TagSetOverflow = require("./TagSetOverflow");

var _TagSetModal = require("./TagSetModal");

var _carbonComponentsReact = require("carbon-components-react");

var _reactResizeDetector = require("react-resize-detector");

var _devtools = require("../../global/js/utils/devtools");

var _propsHelper = require("../../global/js/utils/props-helper");

var _settings = require("../../settings");

var _excluded = ["align", "className", "maxVisible", "overflowAlign", "overflowClassName", "overflowDirection", "allTagsModalTitle", "allTagsModalSearchLabel", "allTagsModalSearchPlaceholderText", "showAllTagsLabel", "tags"],
    _excluded2 = ["label"],
    _excluded3 = ["label"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var componentName = 'TagSet';
var blockClass = "".concat(_settings.pkg.prefix, "--tag-set");
var allTagsModalSearchThreshold = 10;

var TagSet = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var align = _ref.align,
      className = _ref.className,
      maxVisible = _ref.maxVisible,
      overflowAlign = _ref.overflowAlign,
      overflowClassName = _ref.overflowClassName,
      overflowDirection = _ref.overflowDirection,
      allTagsModalTitle = _ref.allTagsModalTitle,
      allTagsModalSearchLabel = _ref.allTagsModalSearchLabel,
      allTagsModalSearchPlaceholderText = _ref.allTagsModalSearchPlaceholderText,
      showAllTagsLabel = _ref.showAllTagsLabel,
      tags = _ref.tags,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);

  var _useState = (0, _react.useState)(3),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      displayCount = _useState2[0],
      setDisplayCount = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      displayedTags = _useState4[0],
      setDisplayedTags = _useState4[1];

  var _useState5 = (0, _react.useState)([]),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      hiddenSizingTags = _useState6[0],
      setHiddenSizingTags = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
      showAllModalOpen = _useState8[0],
      setShowAllModalOpen = _useState8[1];

  var localTagSetRef = (0, _react.useRef)(null);
  var tagSetRef = ref || localTagSetRef;
  var sizingContainerRef = (0, _react.useRef)();
  var displayedArea = (0, _react.useRef)(null);

  var _useState9 = (0, _react.useState)([]),
      _useState10 = (0, _slicedToArray2.default)(_useState9, 2),
      sizingTags = _useState10[0],
      setSizingTags = _useState10[1];

  var overflowTag = (0, _react.useRef)(null);

  var handleShowAllClick = function handleShowAllClick() {
    setShowAllModalOpen(true);
  };

  (0, _react.useEffect)(function () {
    var newSizingTags = []; // create sizing tags

    setHiddenSizingTags(tags && tags.length > 0 ? tags.map(function (_ref2, index) {
      var label = _ref2.label,
          other = (0, _objectWithoutProperties2.default)(_ref2, _excluded2);
      return /*#__PURE__*/_react.default.createElement("div", {
        key: index,
        className: "".concat(blockClass, "__sizing-tag"),
        ref: function ref(el) {
          return newSizingTags[index] = el;
        }
      }, /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.Tag, (0, _extends2.default)({}, other, {
        filter: false
      }), label));
    }) : []);
    setSizingTags(newSizingTags);
  }, [tags]);
  (0, _react.useEffect)(function () {
    // create visible and overflow tags
    var newDisplayedTags = tags && tags.length > 0 ? tags.map(function (_ref3, index) {
      var label = _ref3.label,
          other = (0, _objectWithoutProperties2.default)(_ref3, _excluded3);
      return /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.Tag, (0, _extends2.default)({}, other, {
        filter: false,
        key: "displayed-tag-".concat(index)
      }), label);
    }) : []; // separate out tags for the overflow

    var newOverflowTags = newDisplayedTags.splice(displayCount, newDisplayedTags.length - displayCount); // add wrapper around displayed tags

    newDisplayedTags = newDisplayedTags.map(function (tag, index) {
      return /*#__PURE__*/_react.default.createElement("div", {
        key: index,
        className: "".concat(blockClass, "__displayed-tag")
      }, tag);
    });
    newDisplayedTags.push( /*#__PURE__*/_react.default.createElement(_TagSetOverflow.TagSetOverflow, {
      allTagsModalSearchThreshold: allTagsModalSearchThreshold,
      className: overflowClassName,
      onShowAllClick: handleShowAllClick,
      overflowTags: newOverflowTags,
      overflowAlign: overflowAlign,
      overflowDirection: overflowDirection,
      showAllTagsLabel: showAllTagsLabel,
      key: "displayed-tag-overflow",
      ref: overflowTag
    }));
    setDisplayedTags(newDisplayedTags);
  }, [displayCount, overflowAlign, overflowClassName, overflowDirection, showAllTagsLabel, tags]);
  var checkFullyVisibleTags = (0, _react.useCallback)(function () {
    // how many will fit?
    var willFit = 0;

    if (sizingTags.length > 0) {
      var spaceAvailable = tagSetRef.current.offsetWidth;

      for (var i in sizingTags) {
        var tagWidth = sizingTags[i].offsetWidth;

        if (spaceAvailable >= tagWidth) {
          spaceAvailable -= tagWidth;
          willFit += 1;
        } else {
          break;
        }
      }

      if (willFit < sizingTags.length) {
        while (willFit > 0 && spaceAvailable < overflowTag.current.offsetWidth) {
          // Highly unlikely any useful tag is smaller
          willFit -= 1; // remove one tag

          spaceAvailable += sizingTags[willFit].offsetWidth;
        }
      }
    }

    if (willFit < 1) {
      setDisplayCount(0);
    } else {
      setDisplayCount(maxVisible ? Math.min(willFit, maxVisible) : willFit);
    }
  }, [maxVisible, sizingTags, tagSetRef]);
  (0, _react.useEffect)(function () {
    checkFullyVisibleTags();
  }, [checkFullyVisibleTags, maxVisible, sizingTags]);
  /* don't know how to test resize */

  /* istanbul ignore next */

  var handleResize = function handleResize() {
    /* istanbul ignore next */
    // not sure how to test resize
    checkFullyVisibleTags();
  };
  /* don't know how to test resize */

  /* istanbul ignore next */


  var handleSizerTagsResize = function handleSizerTagsResize() {
    /* istanbul ignore next */
    // not sure how to test resize
    checkFullyVisibleTags();
  };

  var handleModalClose = function handleModalClose() {
    setShowAllModalOpen(false);
  };

  (0, _reactResizeDetector.useResizeDetector)({
    onResize: handleSizerTagsResize,
    targetRef: sizingContainerRef
  });
  (0, _reactResizeDetector.useResizeDetector)({
    onResize: handleResize,
    targetRef: tagSetRef
  });
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, rest, {
    className: (0, _classnames.default)([blockClass, className]),
    ref: tagSetRef
  }, (0, _devtools.getDevtoolsProps)(componentName)), /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)(["".concat(blockClass, "__space"), "".concat(blockClass, "__space--align-").concat(align)])
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(blockClass, "__tag-container ").concat(blockClass, "__tag-container--hidden"),
    "aria-hidden": true,
    ref: sizingContainerRef
  }, hiddenSizingTags), /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(blockClass, "__tag-container"),
    ref: displayedArea
  }, displayedTags)), tags && displayCount < tags.length ? /*#__PURE__*/_react.default.createElement(_TagSetModal.TagSetModal, {
    allTags: tags,
    open: showAllModalOpen,
    title: allTagsModalTitle,
    onClose: handleModalClose,
    searchLabel: allTagsModalSearchLabel,
    searchPlaceholder: allTagsModalSearchPlaceholderText
  }) : null);
}); // Return a placeholder if not released and not enabled by feature flag


exports.TagSet = TagSet;
exports.TagSet = TagSet = _settings.pkg.checkComponentEnabled(TagSet, componentName);
/**
 * The strings shown in the showAllModal are only shown if we have more than allTagsModalSearchLThreshold
 * @returns null if no problems
 */

var string_required_if_more_than_10_tags = (0, _propsHelper.isRequiredIf)(_propTypes.default.string, function (_ref4) {
  var tags = _ref4.tags;
  return tags && tags.length > allTagsModalSearchThreshold;
}); // copied from carbon-components-react/src/components/Tag/Tag.js for DocGen

exports.string_required_if_more_than_10_tags = string_required_if_more_than_10_tags;
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
TagSet.types = tagTypes;
TagSet.propTypes = {
  /**
   * align the Tags displayed by the TagSet. Default start.
   */
  align: _propTypes.default.oneOf(['start', 'center', 'end']),

  /**
   * label text for the show all search. **Note: Required if more than 10 tags**
   */
  allTagsModalSearchLabel: string_required_if_more_than_10_tags,

  /**
   * placeholder text for the show all search. **Note: Required if more than 10 tags**
   */
  allTagsModalSearchPlaceholderText: string_required_if_more_than_10_tags,

  /**
   * title for the show all modal. **Note: Required if more than 10 tags**
   */
  allTagsModalTitle: string_required_if_more_than_10_tags,

  /**
   * className
   */
  className: _propTypes.default.string,

  /**
   * maximum visible tags
   */
  maxVisible: _propTypes.default.number,

  /**
   * overflowAlign from the standard tooltip. Default center.
   */
  overflowAlign: _propTypes.default.oneOf(['start', 'center', 'end']),

  /**
   * overflowClassName for the tooltip popup
   */
  overflowClassName: _propTypes.default.string,

  /**
   * overflowDirection from the standard tooltip
   */
  overflowDirection: _propTypes.default.oneOf(['top', 'right', 'bottom', 'left']),

  /**
   * label for the overflow show all tags link.
   *
   * **Note:** Required if more than 10 tags
   */
  showAllTagsLabel: string_required_if_more_than_10_tags,

  /**
   * The tags to be shown in the TagSet. Each tag is specified as an object
   * with properties: **label**\* (required) to supply the tag content, and
   * other properties will be passed to the Carbon Tag component, such as
   * **type**, **disabled**, **ref**, **className** , and any other Tag props.
   * NOTE: **filter** is not supported. Any other fields in the object will be passed through to the HTML element
   * as HTML attributes.
   *
   * See https://react.carbondesignsystem.com/?path=/docs/components-tag--default
   */
  tags: _propTypes.default.arrayOf(_propTypes.default.shape(_objectSpread(_objectSpread({}, (0, _propsHelper.prepareProps)(_carbonComponentsReact.Tag.propTypes, 'filter')), {}, {
    label: _propTypes.default.string.isRequired,
    // we duplicate this prop to improve the DocGen
    type: _propTypes.default.oneOf(tagTypes)
  })))
};
TagSet.defaultProps = {
  align: 'start',
  overflowAlign: 'center',
  overflowDirection: 'bottom'
};
TagSet.displayName = componentName;
var _default = TagSet;
exports.default = _default;