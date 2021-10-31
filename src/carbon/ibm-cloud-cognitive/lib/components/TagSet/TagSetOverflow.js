"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TagSetOverflow = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _carbonComponentsReact = require("carbon-components-react");

var _settings = require("../../settings");

var _pconsole = require("../../global/js/utils/pconsole");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

//
// Copyright IBM Corp. 2021, 2021
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//
var componentName = 'TagSetOverflow';
var blockClass = "".concat(_settings.pkg.prefix, "--tag-set-overflow");

var TagSetOverflow = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var className = _ref.className,
      overflowTags = _ref.overflowTags,
      onShowAllClick = _ref.onShowAllClick,
      overflowAlign = _ref.overflowAlign,
      overflowDirection = _ref.overflowDirection,
      showAllTagsLabel = _ref.showAllTagsLabel,
      allTagsModalSearchThreshold = _ref.allTagsModalSearchThreshold;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      tipOpen = _useState2[0],
      setTipOpen = _useState2[1];

  var overflowTagContent = (0, _react.useRef)(null);

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

  return /*#__PURE__*/_react.default.createElement("span", {
    "aria-hidden": overflowTags.length === 0,
    className: (0, _classnames.default)("".concat(blockClass), (0, _defineProperty2.default)({}, "".concat(blockClass, "--hidden"), overflowTags.length === 0)),
    ref: ref
  }, /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.Tooltip, {
    align: overflowAlign,
    className: (0, _classnames.default)(className, "".concat(blockClass, "__tooltip")),
    direction: overflowDirection,
    onChange: handleChange,
    open: tipOpen,
    triggerText: /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.Tag, {
      onClick: _pconsole.noop
    }, "+", overflowTags.length),
    showIcon: false
  }, /*#__PURE__*/_react.default.createElement("div", {
    ref: overflowTagContent,
    className: "".concat(blockClass, "__content")
  }, /*#__PURE__*/_react.default.createElement("ul", {
    className: "".concat(blockClass, "__tag-list")
  }, overflowTags.filter(function (_, index) {
    return overflowTags.length > allTagsModalSearchThreshold ? index < allTagsModalSearchThreshold : index <= allTagsModalSearchThreshold;
  }).map(function (tag, index) {
    return /*#__PURE__*/_react.default.createElement("li", {
      className: "".concat(blockClass, "__tag-item"),
      key: index
    }, /*#__PURE__*/_react.default.cloneElement(tag, {
      filter: false
    }));
  })), overflowTags.length > allTagsModalSearchThreshold && /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.Link, {
    className: "".concat(blockClass, "__show-all-tags-link"),
    href: "",
    onClick: handleShowAllTagsClick,
    role: "button"
  }, showAllTagsLabel))));
});

exports.TagSetOverflow = TagSetOverflow;
TagSetOverflow.displayName = componentName;
TagSetOverflow.propTypes = {
  /**
   * count of overflowTags over which a modal is offered
   */
  allTagsModalSearchThreshold: _propTypes.default.number,

  /**
   * className
   */
  className: _propTypes.default.string,

  /**
   * function to execute on clicking show all
   */
  onShowAllClick: _propTypes.default.func.isRequired,

  /**
   * overflowAlign from the standard tooltip
   */
  overflowAlign: _propTypes.default.oneOf(['start', 'center', 'end']),

  /**
   * overflowDirection from the standard tooltip
   */
  overflowDirection: _propTypes.default.oneOf(['top', 'right', 'bottom', 'left']),

  /**
   * tags shown in overflow
   */
  overflowTags: _propTypes.default.arrayOf(_propTypes.default.object).isRequired,

  /**
   * label for the overflow show all tags link
   */
  showAllTagsLabel: _propTypes.default.string
};
TagSetOverflow.defaultProps = {
  allTagsModalSearchThreshold: 10,
  overflowAlign: 'center',
  overflowDirection: 'bottom'
};