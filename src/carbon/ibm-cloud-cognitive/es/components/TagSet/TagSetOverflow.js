import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
//
// Copyright IBM Corp. 2021, 2021
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//
import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Link, Tag, Tooltip } from 'carbon-components-react';
import { pkg } from '../../settings';
import { noop } from '../../global/js/utils/pconsole';
var componentName = 'TagSetOverflow';
var blockClass = "".concat(pkg.prefix, "--tag-set-overflow");
export var TagSetOverflow = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var className = _ref.className,
      overflowTags = _ref.overflowTags,
      onShowAllClick = _ref.onShowAllClick,
      overflowAlign = _ref.overflowAlign,
      overflowDirection = _ref.overflowDirection,
      showAllTagsLabel = _ref.showAllTagsLabel,
      allTagsModalSearchThreshold = _ref.allTagsModalSearchThreshold;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      tipOpen = _useState2[0],
      setTipOpen = _useState2[1];

  var overflowTagContent = useRef(null);

  var handleChange = function handleChange(ev, _ref2) {
    var open = _ref2.open;
    setTipOpen(open);
  };

  var handleShowAllTagsClick = function handleShowAllTagsClick(ev) {
    ev.stopPropagation();
    ev.preventDefault();
    setTipOpen(false);
    onShowAllClick();
  };

  return /*#__PURE__*/React.createElement("span", {
    "aria-hidden": overflowTags.length === 0,
    className: cx("".concat(blockClass), _defineProperty({}, "".concat(blockClass, "--hidden"), overflowTags.length === 0)),
    ref: ref
  }, /*#__PURE__*/React.createElement(Tooltip, {
    align: overflowAlign,
    className: cx(className, "".concat(blockClass, "__tooltip")),
    direction: overflowDirection,
    onChange: handleChange,
    open: tipOpen,
    triggerText: /*#__PURE__*/React.createElement(Tag, {
      onClick: noop
    }, "+", overflowTags.length),
    showIcon: false
  }, /*#__PURE__*/React.createElement("div", {
    ref: overflowTagContent,
    className: "".concat(blockClass, "__content")
  }, /*#__PURE__*/React.createElement("ul", {
    className: "".concat(blockClass, "__tag-list")
  }, overflowTags.filter(function (_, index) {
    return overflowTags.length > allTagsModalSearchThreshold ? index < allTagsModalSearchThreshold : index <= allTagsModalSearchThreshold;
  }).map(function (tag, index) {
    return /*#__PURE__*/React.createElement("li", {
      className: "".concat(blockClass, "__tag-item"),
      key: index
    }, /*#__PURE__*/React.cloneElement(tag, {
      filter: false
    }));
  })), overflowTags.length > allTagsModalSearchThreshold && /*#__PURE__*/React.createElement(Link, {
    className: "".concat(blockClass, "__show-all-tags-link"),
    href: "",
    onClick: handleShowAllTagsClick,
    role: "button"
  }, showAllTagsLabel))));
});
TagSetOverflow.displayName = componentName;
TagSetOverflow.propTypes = {
  /**
   * count of overflowTags over which a modal is offered
   */
  allTagsModalSearchThreshold: PropTypes.number,

  /**
   * className
   */
  className: PropTypes.string,

  /**
   * function to execute on clicking show all
   */
  onShowAllClick: PropTypes.func.isRequired,

  /**
   * overflowAlign from the standard tooltip
   */
  overflowAlign: PropTypes.oneOf(['start', 'center', 'end']),

  /**
   * overflowDirection from the standard tooltip
   */
  overflowDirection: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),

  /**
   * tags shown in overflow
   */
  overflowTags: PropTypes.arrayOf(PropTypes.object).isRequired,

  /**
   * label for the overflow show all tags link
   */
  showAllTagsLabel: PropTypes.string
};
TagSetOverflow.defaultProps = {
  allTagsModalSearchThreshold: 10,
  overflowAlign: 'center',
  overflowDirection: 'bottom'
};