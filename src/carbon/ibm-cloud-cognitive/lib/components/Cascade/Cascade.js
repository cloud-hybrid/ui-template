"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Cascade = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _carbonComponentsReact = require("carbon-components-react");

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _settings = require("../../settings");

var _devtools = require("../../global/js/utils/devtools");

var _excluded = ["children", "className", "grid"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var blockClass = "".concat(_settings.pkg.prefix, "--cascade");
var componentName = 'Cascade';
var Cascade = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var children = _ref.children,
      className = _ref.className,
      grid = _ref.grid,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);

  var props = _objectSpread(_objectSpread({}, rest), {}, {
    className: (0, _classnames.default)(blockClass, className),
    ref: ref
  }, (0, _devtools.getDevtoolsProps)(componentName));

  var modifyChildren = function modifyChildren(child) {
    var className = (0, _classnames.default)(child.props.className, "".concat(blockClass, "__element"));
    return /*#__PURE__*/_react.default.cloneElement(child, {
      className: className
    });
  };

  var getModifiedChildren = function getModifiedChildren() {
    return _react.default.Children.map(children, function (child) {
      return modifyChildren(child);
    });
  };

  if (grid) {
    var colIdx = 0;

    var gridElm = _react.default.Children.map(children, function (row) {
      var cols = _react.default.Children.map(row.props.children, function (col) {
        colIdx = colIdx + 1;
        var colClassnames = (0, _classnames.default)(col.props.className, "".concat(blockClass, "__col"), "".concat(blockClass, "__col-").concat(colIdx));
        return /*#__PURE__*/_react.default.cloneElement(col, {
          className: colClassnames
        });
      });

      return /*#__PURE__*/_react.default.cloneElement(row, {
        children: cols
      });
    });

    return /*#__PURE__*/_react.default.createElement("div", props, /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.Grid, null, gridElm));
  }

  return /*#__PURE__*/_react.default.createElement("div", props, getModifiedChildren());
});
exports.Cascade = Cascade;
exports.Cascade = Cascade = _settings.pkg.checkComponentEnabled(Cascade, componentName);
Cascade.displayName = componentName;
Cascade.propTypes = {
  /**
   * Main content that is shown.
   */
  children: _propTypes.default.node,

  /**
   * Optional class name.
   */
  className: _propTypes.default.string,

  /**
   * Specifies whether or not to wrap the child content in a <Grid />.
   * If this is set to true it's important that the children are being wrapped in rows in columns.
   * Check the documentation for additional clarification.
   */
  grid: _propTypes.default.bool
};
Cascade.defaultProps = {
  grid: false
};