"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.prepareProps = exports.isRequiredIf = exports.getDeprecatedArgTypes = exports.extractShapesArray = exports.deprecatePropUsage = exports.deprecateProp = exports.allPropTypes = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _unwrapIfFragment = _interopRequireDefault(require("./unwrap-if-fragment"));

var _pconsole = _interopRequireDefault(require("./pconsole"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// helper functions for component props

/**
 * Prepare a set of props, or prop types or default props, merging values
 * from one or more sets and optionally blocking keys which should not be
 * passed. Returns the prepared set of props. Does not modify any of the
 * objects passed.
 *
 * @param {{} | '' | ['']} values One or more sets of keys and values to be
 * merged, or names of keys to be blocked. Each parameter that is an object is
 * treated as keys and values to be merged, and each parameter that is a string
 * or an array of strings is treated as keys to be blocked.
 *
 * Examples:
 *   const props = { a: 3, c: 4, d: 5 };
 *
 *   * prepareProps(props) -> { a: 3, c: 4, d: 5 }
 *   * prepareProps(props, 'c') -> { a: 3, d: 5 }
 *   * prepareProps(props, ['a', 'c', 'e']) -> { d: 5 }
 *
 *   * prepareProps({ a: 1, b: 2 }, props) -> { a: 3, b: 2, c: 4, d: 5 }
 *   * prepareProps({ a: 1, b: 2 }, props, ['a', 'c']) -> { b: 2, d: 5 }
 *
 *   * prepareProps(props, { c: 6 }) -> { a: 3, c: 6, d: 5 }
 *   * prepareProps(props, 'a', { c: 6 }) -> { c: 6, d: 5 }
 */
var prepareProps = function prepareProps() {
  // Convert any string or array arg into an object with nulls as values
  var toNulls = function toNulls(arg) {
    return typeof arg === 'string' ? (0, _defineProperty2.default)({}, arg, null) : Array.isArray(arg) ? Object.fromEntries(arg.map(function (key) {
      return [key, null];
    })) : arg;
  }; // Merge all the args from left to right


  for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  var merged = Object.assign.apply(Object, [{}].concat((0, _toConsumableArray2.default)(values.map(toNulls)))); // Now strip any keys whose final value is null

  return Object.entries(merged).reduce(function (result, _ref2) {
    var _ref3 = (0, _slicedToArray2.default)(_ref2, 2),
        key = _ref3[0],
        value = _ref3[1];

    if (value !== null) {
      result[key] = value;
    }

    return result;
  }, {});
}; // Determine whether a named prop in a set of props has been given a value.
// null and undefined do not count as values, but anything else does. If the
// prop is 'children', then an array of null/undefined also does not count as
// a value, but anything else does.


exports.prepareProps = prepareProps;

var propHasValue = function propHasValue(props, propName) {
  var result = props[propName] !== null && props[propName] !== undefined;

  if (result && propName === 'children' && Array.isArray(props[propName])) {
    result = false;

    for (var i = 0; !result && i < props[propName].length; i++) {
      result = props[propName][i] !== null && props[propName][i] !== undefined;
    }
  }

  return result;
};
/**
 * A prop-types type checker that marks a particular usage of a prop as
 * deprecated. The deprecation message is reported if the deprecated validator
 * matches the supplied value.
 * @param {} validator The prop-types validator for the prop usage that is
 * currently supported. If the deprecated validator does not match the supplied
 * value and this validator produces type checking errors they will be reported
 * as usual.
 * @param {} deprecated The prop-types validator for the prop usage that is
 * now deprecated. If the deprecated validator matches the supplied value the
 * deprecation warning message is reported but the value is considered valid.
 * @param {*} additionalInfo One or more sentences to be appended to the
 * deprecation message to explain why the prop usage is deprecated and/or what
 * should be used instead.
 * @returns Any type checking error reported by the validator, or null.
 */


var deprecatePropUsage = function deprecatePropUsage(validator, deprecated, additionalInfo) {
  return function (props, propName, comp, loc, propFullName, secret) {
    if (propHasValue(props, propName) && deprecated(props, propName, comp, loc, propFullName, secret) === null) {
      _pconsole.default.warn("The usage of the ".concat(loc, " `").concat(propFullName || propName, "` of `").concat(comp, "` has been changed and support for the old usage will soon be removed. ").concat(additionalInfo));

      return null;
    } else {
      return validator(props, propName, comp, loc, propFullName, secret);
    }
  };
};
/**
 * A prop-types type checker that marks a prop as deprecated.
 * @param {} validator The prop-types validator for the prop as it should be
 * used if it weren't deprecated. If this validator produces type checking
 * errors they will be reported as usual.
 * @param {*} additionalInfo One or more sentences to be appended to the
 * deprecation message to explain why the prop is deprecated and/or what should
 * be used instead.
 * @returns Any type checking error reported by the validator, or null.
 */


exports.deprecatePropUsage = deprecatePropUsage;

var deprecateProp = function deprecateProp(validator, additionalInfo) {
  return function (props, propName, comp, loc, propFullName, secret) {
    if (propHasValue(props, propName)) {
      _pconsole.default.warn("The ".concat(loc, " `").concat(propFullName || propName, "` of `").concat(comp, "` has been deprecated and will soon be removed. ").concat(additionalInfo));
    }

    return validator(props, propName, comp, loc, propFullName, secret);
  };
};
/**
 * A function that returns a storybook argTypes object configured to remove deprecated
 * props from the storybook controls
 */


exports.deprecateProp = deprecateProp;

var getDeprecatedArgTypes = function getDeprecatedArgTypes(deprecatedProps) {
  var keys = Object.keys(deprecatedProps);
  return keys.reduce(function (acc, cur) {
    return acc[cur] = {
      table: {
        disable: true
      }
    }, acc;
  }, {});
};
/**
 * Takes items as fragment, node or array
 * @param {node || array} items - which may have shape to extract
 * @returns Array of items
 */


exports.getDeprecatedArgTypes = getDeprecatedArgTypes;

var extractShapesArray = function extractShapesArray(items) {
  var _items$, _items$2;

  // unwrap if items or the first index looks like a React element or fragment
  if (items && (items !== null && items !== void 0 && (_items$ = items[0]) !== null && _items$ !== void 0 && _items$.props || (items === null || items === void 0 ? void 0 : (_items$2 = items[0]) === null || _items$2 === void 0 ? void 0 : _items$2.type) === _react.default.Fragment || items.type === _react.default.Fragment)) {
    var unwrappedItems = (0, _unwrapIfFragment.default)(items);
    return unwrappedItems.map(function (item) {
      return _objectSpread({
        key: item.key
      }, item.props);
    });
  }

  return Array.isArray(items) ? items : [];
};
/**
 * A prop-types validation function that takes an array of type checkers and
 * requires prop values to satisfy all of the type checkers. This can be useful
 * to combine custom validation functions with regular prop types, or for
 * combining inherited prop-types from another component with tighter
 * requirements.
 *
 * Examples:
 *
 * MyComponent.propTypes = {
 *
 *   foo: allPropTypes([
 *     customValidationFunction,
 *     PropTypes.arrayOf(
 *       PropTypes.shape({
 *         text: PropType.string
 *       })
 *     )
 *   ]),
 *
 *   kind: allPropTypes([
 *     Button.propTypes.kind,
 *     PropTypes.oneOf(['primary', 'secondary'])
 *   ]),
 *
 * }
 */


exports.extractShapesArray = extractShapesArray;

var allPropTypes = _pconsole.default.shimIfProduction(function (arrayOfTypeCheckers) {
  if (!Array.isArray(arrayOfTypeCheckers)) {
    _pconsole.default.error('Warning: Invalid argument supplied to allPropTypes, expected an instance of array.');

    return _pconsole.default.noop;
  }

  for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
    if (typeof arrayOfTypeCheckers[i] !== 'function') {
      _pconsole.default.error("Invalid argument supplied to allPropTypes. Expected an array of check functions, but received ".concat(arrayOfTypeCheckers[i], " at index ").concat(i, "."));

      return _pconsole.default.noop;
    }
  }

  var checkType = function checkType() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    var error = null;
    arrayOfTypeCheckers.some(function (checker) {
      return error = checker.apply(void 0, args);
    });
    return error;
  };

  checkType.isRequired = function (props, propName, comp, loc, propFullName, secret) {
    var prop = propFullName || propName;
    return props[prop] == null ? new Error("The ".concat(loc, " `").concat(prop, "` is marked as required in `").concat(comp || '<<anonymous>>', "`, but its value is `").concat(props[prop] === null ? 'null' : 'undefined', "`.")) : checkType(props, prop, comp, loc, propFullName, secret);
  };

  return checkType;
});
/**
 * A prop-types validation function that takes a type checkers and a condition
 * function and invokes either the type checker or the isRequired variant of
 * the type checker according to whether the condition function returns false
 * or true when called with the full set of props. This can be useful to make
 * a prop conditionally required. The function also has a decorate function
 * which can be used to add isRequiredIf to any existing type which already has
 * an isRequired variant, and this is automatically applied to the simple type
 * checkers in PropTypes when this props-helper module is imported. The second
 * example produces better results with DocGen and Storybook.
 *
 * Examples:
 *
 * MyComponent1.propTypes = {
 *   showFoo: PropTypes.bool,
 *   fooLabel: isRequiredIf(PropTypes.string, ({ showFoo }) => showFoo),
 * }
 *
 * MyComponent2.propTypes = {
 *   showBar: PropTypes.bool,
 *   barLabel: PropTypes.string.isRequired.if(({ showBar }) => showBar),
 * }
 *
 */


exports.allPropTypes = allPropTypes;

var isRequiredIf = function isRequiredIf(checker, conditionFn) {
  return function (props, propName, componentName, location, propFullName, secret) {
    return (conditionFn(props) ? checker.isRequired : checker)(props, propName, componentName, location, propFullName, secret);
  };
};

exports.isRequiredIf = isRequiredIf;

isRequiredIf.decorate = function (checker) {
  checker.isRequired.if = _pconsole.default.isProduction ? _pconsole.default.noop : isRequiredIf.bind(null, checker);
};

for (var checker in _propTypes.default) {
  if (_propTypes.default[checker].isRequired) {
    isRequiredIf.decorate(_propTypes.default[checker]);
  }
}