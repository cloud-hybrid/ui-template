import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
var _excluded = ["label"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

//
// Copyright IBM Corp. 2021, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ComposedModal, ModalHeader, ModalBody, Search, Tag } from 'carbon-components-react';
import { pkg } from '../../settings';
import { prepareProps } from '../../global/js/utils/props-helper';
var componentName = 'TagSetModal';
var blockClass = "".concat(pkg.prefix, "--tag-set-modal");
export var TagSetModal = function TagSetModal(_ref) {
  var allTags = _ref.allTags,
      title = _ref.title,
      onClose = _ref.onClose,
      open = _ref.open,
      searchLabel = _ref.searchLabel,
      searchPlaceholder = _ref.searchPlaceholder;

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      filteredModalTags = _useState2[0],
      setFilteredModalTags = _useState2[1];

  var _useState3 = useState(''),
      _useState4 = _slicedToArray(_useState3, 2),
      search = _useState4[0],
      setSearch = _useState4[1];

  useEffect(function () {
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

  return /*#__PURE__*/React.createElement(ComposedModal, {
    containerClassName: "".concat(blockClass, "__container"),
    className: "".concat(blockClass),
    size: "sm",
    open: open,
    onClose: onClose
  }, /*#__PURE__*/React.createElement(ModalHeader, {
    title: title,
    className: "".concat(blockClass, "__header")
  }, /*#__PURE__*/React.createElement(Search, {
    "data-modal-primary-focus": true,
    className: "".concat(blockClass, "__search"),
    labelText: searchLabel,
    placeholder: searchPlaceholder,
    onChange: handleSearch,
    size: "lg"
  })), /*#__PURE__*/React.createElement(ModalBody, {
    className: "".concat(blockClass, "__body"),
    hasForm: true
  }, filteredModalTags.map(function (_ref2, index) {
    var label = _ref2.label,
        other = _objectWithoutProperties(_ref2, _excluded);

    return /*#__PURE__*/React.createElement(Tag, _extends({}, other, {
      filter: false,
      key: "all-tags-".concat(index)
    }), label);
  })), /*#__PURE__*/React.createElement("div", {
    className: "".concat(blockClass, "__fade")
  }));
};
TagSetModal.propTypes = {
  allTags: PropTypes.arrayOf(PropTypes.shape(_objectSpread(_objectSpread({}, prepareProps(Tag.propTypes, 'filter')), {}, {
    label: PropTypes.string.isRequired
  }))),
  onClose: PropTypes.func,
  open: PropTypes.bool,
  searchLabel: PropTypes.string,
  searchPlaceholder: PropTypes.string,
  title: PropTypes.string
};
TagSetModal.defaultProps = {
  // marked as required by TagSet if needed, default used to satisfy <Search /> component
  searchLabel: ''
};
TagSetModal.displayName = componentName;