"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModifiedTabs = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _carbonComponentsReact = require("carbon-components-react");

var _ModifiedTabLabelWithClose = require("./ModifiedTabLabelWithClose");

var _ModifiedTabLabelNew = require("./ModifiedTabLabelNew");

var _settings = require("../../settings");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//
var componentName = 'ModifiedTabs';

var ModifiedTabs = function ModifiedTabs(_ref) {
  var tabs = _ref.tabs,
      newTabLabel = _ref.newTabLabel,
      newTabContent = _ref.newTabContent,
      onNewTab = _ref.onNewTab,
      onCloseTab = _ref.onCloseTab;

  var handleNewTab = function handleNewTab() {
    if (onNewTab) {
      onNewTab();
      setTimeout(function () {
        // set focus to the new tab
        var tab = tabsRef.current.getTabAt(tabs.length);

        if (tab & tab.tabAnchor) {
          tab.tabAnchor.focus();
        }
      });
    }
  };

  var handleClose = function handleClose(id) {
    if (onCloseTab) {
      onCloseTab(id);
    }
  };

  var tabsRef = (0, _react.useRef)(null);
  return /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.Tabs, {
    className: "modified-tabs",
    ref: tabsRef
  }, tabs.map(function (tab) {
    return /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.Tab, {
      id: tab.id,
      key: tab.id,
      label: /*#__PURE__*/_react.default.createElement(_ModifiedTabLabelWithClose.ModifiedTabLabelWithClose, {
        label: tab.label,
        onClose: function onClose() {
          return handleClose(tab.id);
        },
        unsavedContent: tab.unsavedContent
      })
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "some-content"
    }, tab.content));
  }), /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.Tab, {
    id: "modified-tabs__tab-new",
    label: /*#__PURE__*/_react.default.createElement(_ModifiedTabLabelNew.ModifiedTabLabelNew, {
      label: newTabLabel
    }),
    onClick: handleNewTab,
    onKeyUp: function onKeyUp(ev) {
      return ev.keyCode === 32 && handleNewTab();
    },
    role: "button"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "some-content"
  }, newTabContent)));
}; // Return a placeholder if not released and not enabled by feature flag


exports.ModifiedTabs = ModifiedTabs;
exports.ModifiedTabs = ModifiedTabs = _settings.pkg.checkComponentEnabled(ModifiedTabs, componentName);
ModifiedTabs.propTypes = {
  /**
   * New tab content
   */
  newTabContent: _propTypes.default.object,

  /**
   * New tab label
   */
  newTabLabel: _propTypes.default.string,

  /**
   * Optional onCloseTab handler
   */
  onCloseTab: _propTypes.default.func,

  /**
   * New tab content
   */
  onNewTab: _propTypes.default.func,

  /**
   * Tabs array containing tab object { id, label, content }
   */
  tabs: _propTypes.default.array
};
ModifiedTabs.defaultProps = {
  tabs: [{
    id: 'tab-1',
    label: 'Tab 1',
    content: /*#__PURE__*/_react.default.createElement("div", null, "Iam am the content of tab 1."),
    unsavedContent: false
  }],
  newTabLabel: 'New tab',
  newTabContent: 'Your new tab will be here soon',
  onNewTab: undefined,
  onCloseTab: undefined
};
ModifiedTabs.displayName = componentName;