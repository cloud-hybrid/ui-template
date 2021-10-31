"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pkg = exports.carbon = void 0;

var _Canary = require("./components/_Canary");

var _featureFlags = _interopRequireDefault(require("./generated/feature-flags/feature-flags"));

var _packageSettings = _interopRequireDefault(require("./global/js/package-settings"));

var _carbonComponents = require("carbon-components");

var _react = _interopRequireDefault(require("react"));

var _themes = require("@carbon/themes");

var carbon = {
  get prefix() {
    return _carbonComponents.settings.prefix;
  },

  set prefix(val) {
    _carbonComponents.settings.prefix = val;
  },

  get flags() {
    return _featureFlags.default;
  },

  get themes() {
    return _themes.themes;
  }

}; // Check that a component is enabled. This function returns a stub which checks
// the component status on first use and then renders as the component or as
// a Canary placeholder initialized with the name of the replaced component.
// Note that the returned stub carries any other properties which had already
// been assigned (eg propTypes, displayName, etc).

exports.carbon = carbon;

_packageSettings.default.checkComponentEnabled = function (component, name) {
  if (component.render) {
    // The component is a forward-ref, so make a stub forward-ref.
    var forward = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
      return (// Replace the stub's render fn so this test only happens once.
        (forward.render = _packageSettings.default.isComponentEnabled(name) || !_packageSettings.default.isComponentPublic(name) ? // If the component is enabled, or if it's not a public component,
        // replace the stub's render fn with the component's render fn.
        component.render : // Note that Canary is a direct render fn (not a forward-ref) and
        // will ignore the passed props and ref (if any)
        _Canary.Canary.bind(undefined, {
          componentName: name
        }))( // Call it now (after this it will be directly called).
        props, ref)
      );
    }); // Transfer object properties already assigned (eg propTypes, displayName)
    // then merge in the stub forward-ref which checks the component status
    // when first used.


    return Object.assign({}, component, forward);
  } else {
    // The component is a direct render fn, so make a stub render fn.
    var _render = function render(props) {
      return (// Replace the stub render fn so this test only happens once.
        (_render = _packageSettings.default.isComponentEnabled(name) || !_packageSettings.default.isComponentPublic(name) ? // If the component is enabled, or if it's not a public component,
        // replace the stub render fn with the component render fn.
        component : // Replace the stub render fn with the Canary render fn, which will
        // ignore the passed props.
        _Canary.Canary.bind(undefined, {
          componentName: name
        }))( // Call it now (after this it will be directly called).
        props)
      );
    }; // Transfer object properties already assigned (eg propTypes, displayName)
    // to a function which calls the stub render fn which checks the component
    // status when first used.


    return Object.assign(function (props) {
      return _render(props);
    }, component);
  }
};

var pkg = _packageSettings.default;
exports.pkg = pkg;