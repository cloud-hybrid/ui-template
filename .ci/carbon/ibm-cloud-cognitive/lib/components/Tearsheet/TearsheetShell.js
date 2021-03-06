"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tearsheetShellWideProps = exports.tearsheetIsPassive = exports.tearsheetHasCloseIcon = exports.deprecatedProps = exports.TearsheetShell = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _reactResizeDetector = require("react-resize-detector");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _settings = require("../../settings");

var _propsHelper = require("../../global/js/utils/props-helper");

var _pconsole = _interopRequireDefault(require("../../global/js/utils/pconsole"));

var _carbonComponentsReact = require("carbon-components-react");

var _ActionSet = require("../ActionSet");

var _Wrap = require("../../global/js/utils/Wrap");

var _excluded = ["actions", "children", "className", "closeIconDescription", "description", "hasCloseIcon", "headerActions", "influencer", "influencerPosition", "influencerWidth", "label", "navigation", "onClose", "open", "size", "title", "verticalPosition"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// The block part of our conventional BEM class names (bc__E--M).
var bc = "".concat(_settings.pkg.prefix, "--tearsheet");
var bcModalHeader = "".concat(_settings.carbon.prefix, "--modal-header");
var componentName = 'TearsheetShell';
var maxDepth = 3; // NOTE: the component SCSS is not imported here: it is rolled up separately.
// Global data structure to communicate the state of tearsheet stacking
// (i.e. when more than one tearsheet is open). Each tearsheet supplies a
// handler to be called whenever the stacking of the tearsheets changes, which
// happens when a tearsheet opens or closes. The 'open' array contains one
// handler per OPEN tearsheet ordered from lowest to highest in visual z-order.
// The 'all' array contains all the handlers for open and closed tearsheets.

var stack = {
  open: [],
  all: []
}; // these props are only applicable when size='wide'

var tearsheetShellWideProps = ['headerActions', 'influencer', 'influencerPosition', 'influencerWidth', 'navigation'];
exports.tearsheetShellWideProps = tearsheetShellWideProps;

var tearsheetIsPassive = function tearsheetIsPassive(actions) {
  return !actions || !(actions !== null && actions !== void 0 && actions.length);
};

exports.tearsheetIsPassive = tearsheetIsPassive;

var tearsheetHasCloseIcon = function tearsheetHasCloseIcon(actions, hasCloseIcon) {
  return hasCloseIcon !== null && hasCloseIcon !== void 0 ? hasCloseIcon : tearsheetIsPassive(actions);
}; // TearSheetShell is used internally by TearSheet and TearSheetNarrow


exports.tearsheetHasCloseIcon = tearsheetHasCloseIcon;

var TearsheetShell = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var actions = _ref.actions,
      children = _ref.children,
      className = _ref.className,
      closeIconDescription = _ref.closeIconDescription,
      description = _ref.description,
      hasCloseIcon = _ref.hasCloseIcon,
      headerActions = _ref.headerActions,
      influencer = _ref.influencer,
      influencerPosition = _ref.influencerPosition,
      influencerWidth = _ref.influencerWidth,
      label = _ref.label,
      navigation = _ref.navigation,
      onClose = _ref.onClose,
      open = _ref.open,
      size = _ref.size,
      title = _ref.title,
      verticalPosition = _ref.verticalPosition,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);

  var _useResizeDetector = (0, _reactResizeDetector.useResizeDetector)({
    handleHeight: false
  }),
      width = _useResizeDetector.width,
      resizer = _useResizeDetector.ref; // Keep track of the stack depth and our position in it (1-based, 0=closed)


  var _useState = (0, _react.useState)(0),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      depth = _useState2[0],
      setDepth = _useState2[1];

  var _useState3 = (0, _react.useState)(0),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      position = _useState4[0],
      setPosition = _useState4[1]; // Keep a record of the previous value of depth.


  var prevDepth = (0, _react.useRef)();
  (0, _react.useEffect)(function () {
    prevDepth.current = depth;
  }); // A "passive" tearsheet is one with no navigation actions.

  var isPassive = tearsheetIsPassive(actions);
  var effectiveHasCloseIcon = tearsheetHasCloseIcon(actions, hasCloseIcon); // Callback that will be called whenever the stacking order changes.
  // position is 1-based with 0 indicating closed.

  function handleStackChange(newDepth, newPosition) {
    setDepth(newDepth);
    setPosition(newPosition);
  } // Hook called whenever the tearsheet mounts, unmounts, or 'open' changes.


  (0, _react.useLayoutEffect)(function () {
    var notify = function notify() {
      return stack.all.forEach(function (handler) {
        return handler(Math.min(stack.open.length, maxDepth), stack.open.indexOf(handler) + 1);
      });
    }; // Register this tearsheet's stack change callback/listener.


    stack.all.push(handleStackChange); // If the tearsheet is mounting with open=true or open is changing from
    // false to true to open it then append its notification callback to
    // the end of the stack array (as its ID), and call all the callbacks
    // to notify all open tearsheets that the stacking has changed.

    if (open) {
      stack.open.push(handleStackChange);
      notify();
    } // Cleanup function called whenever the tearsheet unmounts or the open
    // prop changes value (in which case it is called prior to this hook
    // being called again).


    return function cleanup() {
      // Remove the notification callback from the all handlers array.
      stack.all.splice(stack.all.indexOf(handleStackChange), 1); // Remove the notification callback from the open handlers array, if
      // it's there, and notify all open tearsheets that the stacking has
      // changed (only necessary if this tearsheet was open).

      var openIndex = stack.open.indexOf(handleStackChange);

      if (openIndex >= 0) {
        stack.open.splice(openIndex, 1);
        notify();
      }
    };
  }, [open]);

  if (position <= depth) {
    var _cx, _ref2, _cx3, _cx5, _cx6;

    // Include a modal header if and only if one or more of these is given.
    // We can't use a Wrap for the ModalHeader because ComposedModal requires
    // the direct child to be the ModalHeader instance.
    var includeHeader = label || title || description || headerActions || navigation || effectiveHasCloseIcon; // Include an ActionSet if and only if one or more actions is given.

    var includeActions = actions && (actions === null || actions === void 0 ? void 0 : actions.length) > 0;
    return /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.ComposedModal, (0, _extends2.default)({}, rest, {
      "aria-label": title,
      className: (0, _classnames.default)(bc, className, (_cx = {}, (0, _defineProperty2.default)(_cx, "".concat(bc, "--stacked-").concat(position, "-of-").concat(depth), // Don't apply this on the initial open of a single tearsheet.
      depth > 1 || depth === 1 && prevDepth.current > 1), (0, _defineProperty2.default)(_cx, "".concat(bc, "--wide"), size === 'wide'), (0, _defineProperty2.default)(_cx, "".concat(bc, "--narrow"), size !== 'wide'), _cx)),
      style: (_ref2 = {}, (0, _defineProperty2.default)(_ref2, "--".concat(bc, "--stacking-scale-factor-single"), (width - 32) / width), (0, _defineProperty2.default)(_ref2, "--".concat(bc, "--stacking-scale-factor-double"), (width - 64) / width), _ref2),
      containerClassName: (0, _classnames.default)("".concat(bc, "__container"), (0, _defineProperty2.default)({}, "".concat(bc, "__container--lower"), verticalPosition === 'lower')),
      onClose: onClose,
      open: open,
      ref: ref,
      preventCloseOnClickOutside: !isPassive,
      size: "sm"
    }), includeHeader && /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.ModalHeader, {
      className: (0, _classnames.default)("".concat(bc, "__header"), (_cx3 = {}, (0, _defineProperty2.default)(_cx3, "".concat(bc, "__header--with-close-icon"), effectiveHasCloseIcon), (0, _defineProperty2.default)(_cx3, "".concat(bc, "__header--with-nav"), navigation), _cx3)),
      closeClassName: (0, _classnames.default)((0, _defineProperty2.default)({}, "".concat(bc, "__header--no-close-icon"), !effectiveHasCloseIcon)),
      iconDescription: closeIconDescription
    }, /*#__PURE__*/_react.default.createElement(_Wrap.Wrap, {
      className: "".concat(bc, "__header-content")
    }, /*#__PURE__*/_react.default.createElement(_Wrap.Wrap, {
      className: "".concat(bc, "__header-fields")
    }, /*#__PURE__*/_react.default.createElement(_Wrap.Wrap, {
      element: "h2",
      className: "".concat(bcModalHeader, "__label")
    }, label), /*#__PURE__*/_react.default.createElement(_Wrap.Wrap, {
      element: "h3",
      className: (0, _classnames.default)("".concat(bcModalHeader, "__heading"), "".concat(bc, "__heading"))
    }, title), /*#__PURE__*/_react.default.createElement(_Wrap.Wrap, {
      className: "".concat(bc, "__header-description")
    }, description)), /*#__PURE__*/_react.default.createElement(_Wrap.Wrap, {
      className: "".concat(bc, "__header-actions")
    }, headerActions)), /*#__PURE__*/_react.default.createElement(_Wrap.Wrap, {
      className: "".concat(bc, "__header-navigation")
    }, navigation)), /*#__PURE__*/_react.default.createElement(_Wrap.Wrap, {
      element: _carbonComponentsReact.ModalBody,
      className: "".concat(bc, "__body")
    }, /*#__PURE__*/_react.default.createElement(_Wrap.Wrap, {
      className: (0, _classnames.default)((_cx5 = {}, (0, _defineProperty2.default)(_cx5, "".concat(bc, "__influencer"), true), (0, _defineProperty2.default)(_cx5, "".concat(bc, "__influencer--wide"), influencerWidth === 'wide'), _cx5)),
      neverRender: influencerPosition === 'right'
    }, influencer), /*#__PURE__*/_react.default.createElement(_Wrap.Wrap, {
      className: "".concat(bc, "__right")
    }, /*#__PURE__*/_react.default.createElement(_Wrap.Wrap, {
      alwaysRender: includeActions,
      className: "".concat(bc, "__main")
    }, /*#__PURE__*/_react.default.createElement(_Wrap.Wrap, {
      alwaysRender: influencer && influencerPosition === 'right',
      className: "".concat(bc, "__content")
    }, children), /*#__PURE__*/_react.default.createElement(_Wrap.Wrap, {
      className: (0, _classnames.default)((_cx6 = {}, (0, _defineProperty2.default)(_cx6, "".concat(bc, "__influencer"), true), (0, _defineProperty2.default)(_cx6, "".concat(bc, "__influencer--wide"), influencerWidth === 'wide'), _cx6)),
      neverRender: influencerPosition !== 'right'
    }, influencer)), includeActions && /*#__PURE__*/_react.default.createElement(_Wrap.Wrap, {
      className: "".concat(bc, "__button-container")
    }, /*#__PURE__*/_react.default.createElement(_ActionSet.ActionSet, {
      actions: actions,
      buttonSize: size === 'wide' ? 'xl' : null,
      className: "".concat(bc, "__buttons"),
      size: size === 'wide' ? 'max' : 'lg'
    })))), /*#__PURE__*/_react.default.createElement("div", {
      className: "".concat(bc, "__resize-detector"),
      ref: resizer
    }));
  } else {
    _pconsole.default.warn('Tearsheet not rendered: maximum stacking depth exceeded.');

    return null;
  }
}); // The display name of the component, used by React. Note that displayName
// is used in preference to relying on function.name.


exports.TearsheetShell = TearsheetShell;
TearsheetShell.displayName = componentName;
var deprecatedProps = {
  /**
   * **Deprecated**
   *
   * Prevent the tearsheet from automatically closing (triggering onClose, if
   * provided, which can be cancelled by returning 'false') if the user clicks
   * outside it.
   */
  preventCloseOnClickOutside: (0, _propsHelper.deprecateProp)(_propTypes.default.bool, 'The tearsheet will close automatically if the user clicks outside it if and only if the tearsheet is passive (no navigation actions)'),

  /**
   * **Deprecated**
   *
   * The position of the top of tearsheet in the viewport. The 'normal'
   * position is a short distance down from the top of the
   * viewport, leaving room at the top for a global header bar to show through
   * from below. The 'lower' position (the default) provides a little extra room at the top
   * to allow an action bar navigation or breadcrumbs to also show through.
   */
  verticalPosition: _propTypes.default.oneOf(['normal', 'lower'])
}; // The types and DocGen commentary for the component props,
// in alphabetical order (for consistency).
// See https://www.npmjs.com/package/prop-types#usage.
// Note that the descriptions here should be kept in sync with those for the
// corresponding props for Tearsheet and TearsheetNarrow components.

exports.deprecatedProps = deprecatedProps;
TearsheetShell.propTypes = _objectSpread({
  /**
   * The actions to be shown as buttons in the action area at the bottom of the
   * tearsheet. Each action is specified as an object with optional fields
   * 'label' to supply the button label, 'kind' to select the button kind (must
   * be 'primary', 'secondary' or 'ghost'), 'loading' to display a loading
   * indicator, and 'onClick' to receive notifications when the button is
   * clicked. Additional fields in the object will be passed to the Button
   * component, and these can include 'disabled', 'ref', 'className', and any
   * other Button props. Any other fields in the object will be passed through
   * to the button element as HTML attributes.
   *
   * See https://react.carbondesignsystem.com/?path=/docs/components-button--default#component-api
   */
  actions: _propTypes.default.arrayOf( // NB we don't include the validator here, as the component wrapping this
  // one should ensure appropriate validation is done.
  _propTypes.default.shape(_objectSpread(_objectSpread({}, _carbonComponentsReact.Button.propTypes), {}, {
    kind: _propTypes.default.oneOf(['ghost', 'secondary', 'primary']),
    label: _propTypes.default.string,
    loading: _propTypes.default.bool,
    // we duplicate this Button prop to improve the DocGen here
    onClick: _carbonComponentsReact.Button.propTypes.onClick
  }))),

  /**
   * The main content of the tearsheet.
   */
  children: _propTypes.default.node,

  /**
   * An optional class or classes to be added to the outermost element.
   */
  className: _propTypes.default.string,

  /**
   * The accessibility title for the close icon (if shown).
   *
   * **Note:** This prop is only required if a close icon is shown, i.e. if
   * there are a no navigation actions and/or hasCloseIcon is true.
   */
  closeIconDescription: _propTypes.default.string.isRequired.if(function (_ref3) {
    var actions = _ref3.actions,
        hasCloseIcon = _ref3.hasCloseIcon;
    return tearsheetHasCloseIcon(actions, hasCloseIcon);
  }),

  /**
   * A description of the flow, displayed in the header area of the tearsheet.
   */
  description: _propTypes.default.node,

  /**
   * Enable a close icon ('x') in the header area of the tearsheet. By default,
   * (when this prop is omitted, or undefined or null) a tearsheet does not
   * display a close icon if there are navigation actions ("transactional
   * tearsheet") and displays one if there are no navigation actions ("passive
   * tearsheet"), and that behavior can be overridden if required by setting
   * this prop to either true or false.
   */
  hasCloseIcon: _propTypes.default.bool,

  /**
   * The content for the header actions area, displayed alongside the title in
   * the header area of the tearsheet. This is typically a drop-down, or a set
   * of small buttons, or similar. NB the headerActions is only applicable for
   * wide tearsheets.
   */
  headerActions: _propTypes.default.element,

  /**
   * The content for the influencer section of the tearsheet, displayed
   * alongside the main content. This is typically a menu, or filter, or
   * progress indicator, or similar. NB the influencer is only applicable for
   * wide tearsheets.
   */
  influencer: _propTypes.default.element,

  /**
   * The position of the influencer section, 'left' or 'right'.
   */
  influencerPosition: _propTypes.default.oneOf(['left', 'right']),

  /**
   * The width of the influencer: 'narrow' (the default) is 256px, and 'wide'
   * is 320px.
   */
  influencerWidth: _propTypes.default.oneOf(['narrow', 'wide']),

  /**
   * A label for the tearsheet, displayed in the header area of the tearsheet
   * to maintain context for the tearsheet (e.g. as the title changes from page
   * to page of a multi-page task).
   */
  label: _propTypes.default.node,

  /**
   * Navigation content, such as a set of tabs, to be displayed at the bottom
   * of the header area of the tearsheet. NB the navigation is only applicable
   * for wide tearsheets.
   */
  navigation: _propTypes.default.element,

  /**
   * An optional handler that is called when the user closes the tearsheet (by
   * clicking the close button, if enabled, or clicking outside, if enabled).
   * Returning `false` here prevents the modal from closing.
   */
  onClose: _propTypes.default.func,

  /**
   * Specifies whether the tearsheet is currently open.
   */
  open: _propTypes.default.bool,

  /**
   * Specifies the width of the tearsheet, 'narrow' or 'wide'.
   */
  size: _propTypes.default.oneOf(['narrow', 'wide']).isRequired,

  /**
   * The main title of the tearsheet, displayed in the header area.
   */
  title: _propTypes.default.node
}, deprecatedProps);