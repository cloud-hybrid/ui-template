"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deprecatedProps = exports.ActionBar = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _settings = require("../../settings");

var _reactResizeDetector = require("react-resize-detector");

var _carbonComponentsReact = require("carbon-components-react");

var _uuidv = _interopRequireDefault(require("../../global/js/utils/uuidv4"));

var _propsHelper = require("../../global/js/utils/props-helper");

var _ActionBarItem = require("./ActionBarItem");

var _ActionBarOverflowItems = require("./ActionBarOverflowItems");

var _excluded = ["actions", "children", "className", "maxVisible", "onWidthChange", "overflowAriaLabel", "rightAlign"],
    _excluded2 = ["key"],
    _excluded3 = ["key"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// The block part of our conventional BEM class names (blockClass__E--M).
var blockClass = "".concat(_settings.pkg.prefix, "--action-bar");
var componentName = 'ActionBar'; // NOTE: the component SCSS is not imported here: it is rolled up separately.

/**
 * The ActionBar is used internally by the PageHeader to wrap ActionBarItems.
 */

var ActionBar = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var actions = _ref.actions,
      children = _ref.children,
      className = _ref.className,
      maxVisible = _ref.maxVisible,
      onWidthChange = _ref.onWidthChange,
      overflowAriaLabel = _ref.overflowAriaLabel,
      rightAlign = _ref.rightAlign,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);

  var _useState = (0, _react.useState)(0),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      displayCount = _useState2[0],
      setDisplayCount = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      displayedItems = _useState4[0],
      setDisplayedItems = _useState4[1];

  var _useState5 = (0, _react.useState)([]),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      hiddenSizingItems = _useState6[0],
      setHiddenSizingItems = _useState6[1];

  var internalId = (0, _react.useRef)((0, _uuidv.default)());

  var _useState7 = (0, _react.useState)([]),
      _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
      itemArray = _useState8[0],
      setItemArray = _useState8[1];

  var refDisplayedItems = (0, _react.useRef)(null);
  var sizingRef = (0, _react.useRef)(null); // create child array from children which may be a fragment and create hidden sizing items

  (0, _react.useEffect)(function () {
    // NOTE: setting item Array inside useEffect prevents looping renders as a result of setting hiddenSizingItems
    var newItemArray;

    if (actions) {
      newItemArray = actions;
    } else {
      newItemArray = (0, _propsHelper.extractShapesArray)(children);
    }

    setItemArray(newItemArray); // Hidden action bar and items used to calculate sizes

    setHiddenSizingItems( /*#__PURE__*/_react.default.createElement("div", {
      className: "".concat(blockClass, "__hidden-sizing-items"),
      "aria-hidden": true,
      ref: sizingRef
    }, /*#__PURE__*/_react.default.createElement(_ActionBarOverflowItems.ActionBarOverflowItems, {
      className: "".concat(blockClass, "__hidden-sizing-item"),
      overflowAriaLabel: "hidden sizing overflow items",
      overflowItems: [],
      key: "hidden-overflow-menu"
    }), newItemArray.map(function (_ref2) {
      var key = _ref2.key,
          rest = (0, _objectWithoutProperties2.default)(_ref2, _excluded2);
      return /*#__PURE__*/_react.default.createElement(_ActionBarItem.ActionBarItem, (0, _extends2.default)({}, rest, {
        key: "hidden-item-".concat(key),
        className: "".concat(blockClass, "__hidden-sizing-item")
      }));
    })));
  }, [actions, children]); // creates displayed items based on itemArray, displayCount and alignment

  (0, _react.useEffect)(function () {
    // Calculate the displayed items
    var newDisplayedItems = itemArray.map(function (_ref3) {
      var key = _ref3.key,
          rest = (0, _objectWithoutProperties2.default)(_ref3, _excluded3);
      return /*#__PURE__*/_react.default.createElement(_ActionBarItem.ActionBarItem, (0, _extends2.default)({}, rest, {
        key: key
      }));
    }); // extract any there is not enough room for into newOverflowItems

    var newOverflowItems = newDisplayedItems.splice(displayCount); // add overflow menu if needed

    if (newOverflowItems.length) {
      newDisplayedItems.push( /*#__PURE__*/_react.default.createElement(_ActionBarOverflowItems.ActionBarOverflowItems, {
        overflowAriaLabel: overflowAriaLabel,
        overflowItems: newOverflowItems,
        key: "overflow-menu-".concat(internalId.current)
      }));
    }

    setDisplayedItems(newDisplayedItems);
  }, [itemArray, displayCount, overflowAriaLabel]); // determine display count based on space available and width of pageActions

  var checkFullyVisibleItems = function checkFullyVisibleItems() {
    /* istanbul ignore if */
    if (sizingRef.current) {
      var sizingItems = Array.from(sizingRef.current.querySelectorAll(".".concat(blockClass, "__hidden-sizing-item"))); // first item is always the overflow even if nothing else is rendered

      var overflowItem = sizingItems.shift(); // determine how many will fit

      var spaceAvailable = refDisplayedItems.current.offsetWidth;
      var willFit = 0;
      var maxVisibleWidth = 0;
      var fitLimit = maxVisible ? Math.min(maxVisible, sizingItems.length) : sizingItems.length; // loop checking the space available

      for (var i = 0; i < fitLimit; i++) {
        var newSpaceAvailable = spaceAvailable - sizingItems[i].offsetWidth; // update maxVisibleWidth for later use by onWidthChange

        maxVisibleWidth += sizingItems[i].offsetWidth;

        if (newSpaceAvailable >= 0) {
          spaceAvailable = newSpaceAvailable;
          willFit += 1;
        }
      } // if not enough space for all items then make room for the overflow


      var overflowWidth = overflowItem.offsetWidth;

      if (willFit < sizingItems.length) {
        // Check space for overflow
        while (willFit > 0 && spaceAvailable < overflowWidth) {
          willFit -= 1; // Highly unlikely that any action bar item is narrower than the overflow item
          // Make sure by removing items in reverse order

          spaceAvailable += sizingItems[willFit].offsetWidth;
        }
      } // emit onWidthChange


      onWidthChange && onWidthChange({
        maxWidth: maxVisibleWidth,
        minWidth: overflowWidth
      });

      if (willFit < 1) {
        setDisplayCount(0);
      } else {
        setDisplayCount(willFit);
      }
    }
  };

  (0, _react.useEffect)(function () {
    checkFullyVisibleItems(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [maxVisible, itemArray]);
  /* istanbul ignore next */
  // not sure how to fake window resize

  var handleResize = function handleResize() {
    // width is the space available for all action bar items horizontally
    // the action bar items are squares so the height should be one item wide

    /* istanbul ignore next */
    // not sure how to fake window resize
    checkFullyVisibleItems();
  };
  /* istanbul ignore next */
  // not sure how to fake window resize


  var handleActionBarItemsResize = function handleActionBarItemsResize() {
    // when the hidden sizing items change size

    /* istanbul ignore next */
    // not sure how to fake window resize
    checkFullyVisibleItems();
  };

  (0, _reactResizeDetector.useResizeDetector)({
    onResize: handleActionBarItemsResize,
    targetRef: sizingRef
  });

  var _useResizeDetector = (0, _reactResizeDetector.useResizeDetector)({
    onResize: handleResize,
    targetRef: ref
  }),
      outerRef = _useResizeDetector.ref;

  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, rest, {
    className: (0, _classnames.default)([blockClass, className]),
    ref: outerRef
  }), hiddenSizingItems, /*#__PURE__*/_react.default.createElement("div", {
    ref: refDisplayedItems,
    className: (0, _classnames.default)(["".concat(blockClass, "__displayed-items"), (0, _defineProperty2.default)({}, "".concat(blockClass, "__displayed-items--right"), rightAlign)])
  }, displayedItems));
});

exports.ActionBar = ActionBar;
var deprecatedProps = {
  /**
   * **Deprecated**
   *
   * children of the action bar (action bar items)
   */
  children: (0, _propsHelper.deprecateProp)(_propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.element), _propTypes.default.element]), 'See documentation on the `actions` prop.')
};
exports.deprecatedProps = deprecatedProps;
ActionBar.displayName = componentName;
ActionBar.propTypes = _objectSpread({
  /**
   * Specifies the action bar items. Each item is specified as an object
   * with required fields: key for array rendering, renderIcon and
   * iconDescription to provide the icon to display,
   * and optional 'onClick' to receive notifications when the button is clicked.
   * Additional fields in the object will be passed to the
   * Button component, and these can include 'disabled', 'ref', 'className',
   * and any other Button props.
   *
   * Note that the Button props 'kind', 'size',
   * 'tooltipPosition', 'tooltipAlignment' and 'type' are ignored, as these
   * cannot be used for an action bar item.
   *
   * Carbon Button API https://react.carbondesignsystem.com/?path=/docs/components-button--default#component-api
   */
  actions: _propTypes.default.arrayOf(_propTypes.default.shape(_objectSpread(_objectSpread({}, (0, _propsHelper.prepareProps)(_carbonComponentsReact.Button.propTypes, [// props not desired from Button.propTypes
  'kind', 'size', 'tooltipPosition', 'tooltipAlignment'])), {}, {
    // Additional props
    key: _propTypes.default.string.isRequired,
    // Redefine as form different  to Button and a key prop used by ActionBarItems
    iconDescription: _propTypes.default.string.isRequired,
    renderIcon: _carbonComponentsReact.Button.propTypes.renderIcon.isRequired,
    // We duplicate onClick here to improve DocGen in Storybook
    onClick: _propTypes.default.func
  }))),
  // expects action bar item as array or in fragment,

  /**
   * className
   */
  className: _propTypes.default.string,

  /**
   * maxVisible : Maximum action bar items visible before going into the overflow menu
   */
  maxVisible: _propTypes.default.number,

  /**
   * onItemCountChange - event reporting maxWidth
   */
  onWidthChange: _propTypes.default.func,

  /**
   * overflowAriaLabel label for open close button overflow used for action bar items that do nto fit.
   */
  overflowAriaLabel: _propTypes.default.string.isRequired,

  /**
   * align tags to right of available space
   */
  rightAlign: _propTypes.default.bool
}, deprecatedProps);
ActionBar.defaultProps = {
  rightAlign: false
};