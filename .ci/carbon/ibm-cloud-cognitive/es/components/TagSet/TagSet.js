import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _extends from "@babel/runtime/helpers/extends";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["align", "className", "maxVisible", "overflowAlign", "overflowClassName", "overflowDirection", "allTagsModalTitle", "allTagsModalSearchLabel", "allTagsModalSearchPlaceholderText", "showAllTagsLabel", "tags"],
    _excluded2 = ["label"],
    _excluded3 = ["label"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

//
// Copyright IBM Corp. 2020, 2021
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//
import React, { useState, useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { TagSetOverflow } from './TagSetOverflow';
import { TagSetModal } from './TagSetModal';
import { Tag } from 'carbon-components-react';
import { useResizeDetector } from 'react-resize-detector';
import { getDevtoolsProps } from '../../global/js/utils/devtools';
import { prepareProps, isRequiredIf } from '../../global/js/utils/props-helper';
import { pkg } from '../../settings';
var componentName = 'TagSet';
var blockClass = "".concat(pkg.prefix, "--tag-set");
var allTagsModalSearchThreshold = 10;
export var TagSet = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
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
      rest = _objectWithoutProperties(_ref, _excluded);

  var _useState = useState(3),
      _useState2 = _slicedToArray(_useState, 2),
      displayCount = _useState2[0],
      setDisplayCount = _useState2[1];

  var _useState3 = useState([]),
      _useState4 = _slicedToArray(_useState3, 2),
      displayedTags = _useState4[0],
      setDisplayedTags = _useState4[1];

  var _useState5 = useState([]),
      _useState6 = _slicedToArray(_useState5, 2),
      hiddenSizingTags = _useState6[0],
      setHiddenSizingTags = _useState6[1];

  var _useState7 = useState(false),
      _useState8 = _slicedToArray(_useState7, 2),
      showAllModalOpen = _useState8[0],
      setShowAllModalOpen = _useState8[1];

  var localTagSetRef = useRef(null);
  var tagSetRef = ref || localTagSetRef;
  var sizingContainerRef = useRef();
  var displayedArea = useRef(null);

  var _useState9 = useState([]),
      _useState10 = _slicedToArray(_useState9, 2),
      sizingTags = _useState10[0],
      setSizingTags = _useState10[1];

  var overflowTag = useRef(null);

  var handleShowAllClick = function handleShowAllClick() {
    setShowAllModalOpen(true);
  };

  useEffect(function () {
    var newSizingTags = []; // create sizing tags

    setHiddenSizingTags(tags && tags.length > 0 ? tags.map(function (_ref2, index) {
      var label = _ref2.label,
          other = _objectWithoutProperties(_ref2, _excluded2);

      return /*#__PURE__*/React.createElement("div", {
        key: index,
        className: "".concat(blockClass, "__sizing-tag"),
        ref: function ref(el) {
          return newSizingTags[index] = el;
        }
      }, /*#__PURE__*/React.createElement(Tag, _extends({}, other, {
        filter: false
      }), label));
    }) : []);
    setSizingTags(newSizingTags);
  }, [tags]);
  useEffect(function () {
    // create visible and overflow tags
    var newDisplayedTags = tags && tags.length > 0 ? tags.map(function (_ref3, index) {
      var label = _ref3.label,
          other = _objectWithoutProperties(_ref3, _excluded3);

      return /*#__PURE__*/React.createElement(Tag, _extends({}, other, {
        filter: false,
        key: "displayed-tag-".concat(index)
      }), label);
    }) : []; // separate out tags for the overflow

    var newOverflowTags = newDisplayedTags.splice(displayCount, newDisplayedTags.length - displayCount); // add wrapper around displayed tags

    newDisplayedTags = newDisplayedTags.map(function (tag, index) {
      return /*#__PURE__*/React.createElement("div", {
        key: index,
        className: "".concat(blockClass, "__displayed-tag")
      }, tag);
    });
    newDisplayedTags.push( /*#__PURE__*/React.createElement(TagSetOverflow, {
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
  var checkFullyVisibleTags = useCallback(function () {
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
  useEffect(function () {
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

  useResizeDetector({
    onResize: handleSizerTagsResize,
    targetRef: sizingContainerRef
  });
  useResizeDetector({
    onResize: handleResize,
    targetRef: tagSetRef
  });
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    className: cx([blockClass, className]),
    ref: tagSetRef
  }, getDevtoolsProps(componentName)), /*#__PURE__*/React.createElement("div", {
    className: cx(["".concat(blockClass, "__space"), "".concat(blockClass, "__space--align-").concat(align)])
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(blockClass, "__tag-container ").concat(blockClass, "__tag-container--hidden"),
    "aria-hidden": true,
    ref: sizingContainerRef
  }, hiddenSizingTags), /*#__PURE__*/React.createElement("div", {
    className: "".concat(blockClass, "__tag-container"),
    ref: displayedArea
  }, displayedTags)), tags && displayCount < tags.length ? /*#__PURE__*/React.createElement(TagSetModal, {
    allTags: tags,
    open: showAllModalOpen,
    title: allTagsModalTitle,
    onClose: handleModalClose,
    searchLabel: allTagsModalSearchLabel,
    searchPlaceholder: allTagsModalSearchPlaceholderText
  }) : null);
}); // Return a placeholder if not released and not enabled by feature flag

TagSet = pkg.checkComponentEnabled(TagSet, componentName);
/**
 * The strings shown in the showAllModal are only shown if we have more than allTagsModalSearchLThreshold
 * @returns null if no problems
 */

export var string_required_if_more_than_10_tags = isRequiredIf(PropTypes.string, function (_ref4) {
  var tags = _ref4.tags;
  return tags && tags.length > allTagsModalSearchThreshold;
}); // copied from carbon-components-react/src/components/Tag/Tag.js for DocGen

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
  align: PropTypes.oneOf(['start', 'center', 'end']),

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
  className: PropTypes.string,

  /**
   * maximum visible tags
   */
  maxVisible: PropTypes.number,

  /**
   * overflowAlign from the standard tooltip. Default center.
   */
  overflowAlign: PropTypes.oneOf(['start', 'center', 'end']),

  /**
   * overflowClassName for the tooltip popup
   */
  overflowClassName: PropTypes.string,

  /**
   * overflowDirection from the standard tooltip
   */
  overflowDirection: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),

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
  tags: PropTypes.arrayOf(PropTypes.shape(_objectSpread(_objectSpread({}, prepareProps(Tag.propTypes, 'filter')), {}, {
    label: PropTypes.string.isRequired,
    // we duplicate this prop to improve the DocGen
    type: PropTypes.oneOf(tagTypes)
  })))
};
TagSet.defaultProps = {
  align: 'start',
  overflowAlign: 'center',
  overflowDirection: 'bottom'
};
TagSet.displayName = componentName;
export default TagSet;