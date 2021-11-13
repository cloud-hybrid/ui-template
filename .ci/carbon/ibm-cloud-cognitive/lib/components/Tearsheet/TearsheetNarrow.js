"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deprecatedProps = exports.TearsheetNarrow = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _devtools = require("../../global/js/utils/devtools");

var _propsHelper = require("../../global/js/utils/props-helper");

var _settings = require("../../settings");

var _carbonComponentsReact = require("carbon-components-react");

var _ActionSet = require("../ActionSet");

var _TearsheetShell = require("./TearsheetShell");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var componentName = 'TearsheetNarrow'; // NOTE: the component SCSS is not imported here: it is rolled up separately.

/**
 * A narrow tearsheet is a slimmer variant of the tearsheet, providing a dialog
 * that keeps users in-context and focused by bringing actionable content front
 * and center while revealing more of the UI behind it.
 *
 * A narrow tearsheet comprises 3 zones: a heading area including a title, the
 * main content area, and a set of action buttons.
 */

var TearsheetNarrow = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  return /*#__PURE__*/_react.default.createElement(_TearsheetShell.TearsheetShell, (0, _extends2.default)({}, (0, _devtools.getDevtoolsProps)(componentName), (0, _propsHelper.prepareProps)(props, _TearsheetShell.tearsheetShellWideProps, {
    ref: ref,
    size: 'narrow'
  })));
}); // Return a placeholder if not released and not enabled by feature flag


exports.TearsheetNarrow = TearsheetNarrow;
exports.TearsheetNarrow = TearsheetNarrow = _settings.pkg.checkComponentEnabled(TearsheetNarrow, componentName); // The display name of the component, used by React. Note that displayName
// is used in preference to relying on function.name.

TearsheetNarrow.displayName = componentName;
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
// corresponding props for Tearsheet and TearsheetShell components.

exports.deprecatedProps = deprecatedProps;
TearsheetNarrow.propTypes = _objectSpread({
  /**
   * The navigation actions to be shown as buttons in the action area at the
   * bottom of the tearsheet. Each action is specified as an object with
   * optional fields: 'label' to supply the button label, 'kind' to select the
   * button kind (must be 'primary', 'secondary' or 'ghost'), 'loading' to
   * display a loading indicator, and 'onClick' to receive notifications when
   * the button is clicked. Additional fields in the object will be passed to
   * the Button component, and these can include 'disabled', 'ref', 'className',
   * and any other Button props. Any other fields in the object will be passed
   * through to the button element as HTML attributes.
   *
   * See https://react.carbondesignsystem.com/?path=/docs/components-button--default#component-api
   */
  actions: (0, _propsHelper.allPropTypes)([_ActionSet.ActionSet.validateActions(function () {
    return 'lg';
  }), _propTypes.default.arrayOf(_propTypes.default.shape(_objectSpread(_objectSpread({}, _carbonComponentsReact.Button.propTypes), {}, {
    kind: _propTypes.default.oneOf(['ghost', 'secondary', 'primary']),
    label: _propTypes.default.string,
    loading: _propTypes.default.bool,
    // we duplicate this Button prop to improve the DocGen here
    onClick: _carbonComponentsReact.Button.propTypes.onClick
  })))]),

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
  closeIconDescription: _propTypes.default.string.isRequired.if(function (_ref) {
    var actions = _ref.actions,
        hasCloseIcon = _ref.hasCloseIcon;
    return (0, _TearsheetShell.tearsheetHasCloseIcon)(actions, hasCloseIcon);
  }),

  /**
   * A description of the flow, displayed in the header area of the tearsheet.
   */
  description: _propTypes.default.node,

  /**
   * Enable a close icon ('x') in the header area of the tearsheet. By default,
   * a tearsheet does not display a close icon, but one should be enabled if
   * the tearsheet is read-only or has no navigation actions (sometimes called
   * a "passive tearsheet").
   */
  hasCloseIcon: _propTypes.default.bool,

  /**
   * A label for the tearsheet, displayed in the header area of the tearsheet
   * to maintain context for the tearsheet (e.g. as the title changes from page
   * to page of a multi-page task).
   */
  label: _propTypes.default.node,

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
   * The main title of the tearsheet, displayed in the header area.
   */
  title: _propTypes.default.node
}, deprecatedProps); // Default values for component props. Default values are not required for
// props that are required, nor for props where the component can apply
// 'undefined' values reasonably. Default values should be provided when the
// component needs to make a choice or assumption when a prop is not supplied.

TearsheetNarrow.defaultProps = {
  verticalPosition: 'lower'
};