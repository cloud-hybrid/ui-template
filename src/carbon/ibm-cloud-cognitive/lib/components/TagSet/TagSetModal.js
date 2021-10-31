"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TagSetModal = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _carbonComponentsReact = require("carbon-components-react");

var _settings = require("../../settings");

var _propsHelper = require("../../global/js/utils/props-helper");

var _excluded = ["label"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var componentName = 'TagSetModal';
var blockClass = "".concat(_settings.pkg.prefix, "--tag-set-modal");

var TagSetModal = function TagSetModal(_ref) {
  var allTags = _ref.allTags,
      title = _ref.title,
      onClose = _ref.onClose,
      open = _ref.open,
      searchLabel = _ref.searchLabel,
      searchPlaceholder = _ref.searchPlaceholder;

  var _useState = (0, _react.useState)([]),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      filteredModalTags = _useState2[0],
      setFilteredModalTags = _useState2[1];

  var _useState3 = (0, _react.useState)(''),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      search = _useState4[0],
      setSearch = _useState4[1];

  (0, _react.useEffect)(function () {
    var newFilteredModalTags = [];

    if (open) {
      if (search === '') {
        newFilteredModalTags = allTags.slice(0);
      } else {
        var lCaseSearch = search.toLocaleLowerCase();
        allTags.forEach(function (tag) {
          var _tag$dataSearch, _tag$dataSearch$toLoc, _tag$label, _tag$label$toLocaleLo;

          var dataSearch = (_tag$dataSearch = tag['data-search']) === null || _tag$dataSearch === void 0 ? void 0 : (_tag$dataSearch$toLoc = _tag$dataSearch.toLocaleLowerCase()) === null || _tag$dataSearch$toLoc === void 0 ? void 0 : _tag$dataSearch$toLoc.indexOf(lCaseSearch);
          var labelSearch = (_tag$label = tag.label) === null || _tag$label === void 0 ? void 0 : (_tag$label$toLocaleLo = _tag$label.toLocaleLowerCase()) === null || _tag$label$toLocaleLo === void 0 ? void 0 : _tag$label$toLocaleLo.indexOf(lCaseSearch);

          if (dataSearch > -1 || labelSearch > -1) {
            newFilteredModalTags.push(tag);
          }
        });
      }
    }

    setFilteredModalTags(newFilteredModalTags);
  }, [allTags, open, search]);

  var handleSearch = function handleSearch(ev) {
    setSearch(ev.target.value || '');
  };

  return /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.ComposedModal, {
    containerClassName: "".concat(blockClass, "__container"),
    className: "".concat(blockClass),
    size: "sm",
    open: open,
    onClose: onClose
  }, /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.ModalHeader, {
    title: title,
    className: "".concat(blockClass, "__header")
  }, /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.Search, {
    "data-modal-primary-focus": true,
    className: "".concat(blockClass, "__search"),
    labelText: searchLabel,
    placeholder: searchPlaceholder,
    onChange: handleSearch,
    size: "lg"
  })), /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.ModalBody, {
    className: "".concat(blockClass, "__body"),
    hasForm: true
  }, filteredModalTags.map(function (_ref2, index) {
    var label = _ref2.label,
        other = (0, _objectWithoutProperties2.default)(_ref2, _excluded);
    return /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.Tag, (0, _extends2.default)({}, other, {
      filter: false,
      key: "all-tags-".concat(index)
    }), label);
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(blockClass, "__fade")
  }));
};

exports.TagSetModal = TagSetModal;
TagSetModal.propTypes = {
  allTags: _propTypes.default.arrayOf(_propTypes.default.shape(_objectSpread(_objectSpread({}, (0, _propsHelper.prepareProps)(_carbonComponentsReact.Tag.propTypes, 'filter')), {}, {
    label: _propTypes.default.string.isRequired
  }))),
  onClose: _propTypes.default.func,
  open: _propTypes.default.bool,
  searchLabel: _propTypes.default.string,
  searchPlaceholder: _propTypes.default.string,
  title: _propTypes.default.string
};
TagSetModal.defaultProps = {
  // marked as required by TagSet if needed, default used to satisfy <Search /> component
  searchLabel: ''
};
TagSetModal.displayName = componentName;