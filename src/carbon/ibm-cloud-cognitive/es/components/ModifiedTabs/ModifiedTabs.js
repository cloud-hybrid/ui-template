//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//
import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab } from 'carbon-components-react';
import { ModifiedTabLabelWithClose } from './ModifiedTabLabelWithClose';
import { ModifiedTabLabelNew } from './ModifiedTabLabelNew';
import { pkg } from '../../settings';
var componentName = 'ModifiedTabs';
export var ModifiedTabs = function ModifiedTabs(_ref) {
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

  var tabsRef = useRef(null);
  return /*#__PURE__*/React.createElement(Tabs, {
    className: "modified-tabs",
    ref: tabsRef
  }, tabs.map(function (tab) {
    return /*#__PURE__*/React.createElement(Tab, {
      id: tab.id,
      key: tab.id,
      label: /*#__PURE__*/React.createElement(ModifiedTabLabelWithClose, {
        label: tab.label,
        onClose: function onClose() {
          return handleClose(tab.id);
        },
        unsavedContent: tab.unsavedContent
      })
    }, /*#__PURE__*/React.createElement("div", {
      className: "some-content"
    }, tab.content));
  }), /*#__PURE__*/React.createElement(Tab, {
    id: "modified-tabs__tab-new",
    label: /*#__PURE__*/React.createElement(ModifiedTabLabelNew, {
      label: newTabLabel
    }),
    onClick: handleNewTab,
    onKeyUp: function onKeyUp(ev) {
      return ev.keyCode === 32 && handleNewTab();
    },
    role: "button"
  }, /*#__PURE__*/React.createElement("div", {
    className: "some-content"
  }, newTabContent)));
}; // Return a placeholder if not released and not enabled by feature flag

ModifiedTabs = pkg.checkComponentEnabled(ModifiedTabs, componentName);
ModifiedTabs.propTypes = {
  /**
   * New tab content
   */
  newTabContent: PropTypes.object,

  /**
   * New tab label
   */
  newTabLabel: PropTypes.string,

  /**
   * Optional onCloseTab handler
   */
  onCloseTab: PropTypes.func,

  /**
   * New tab content
   */
  onNewTab: PropTypes.func,

  /**
   * Tabs array containing tab object { id, label, content }
   */
  tabs: PropTypes.array
};
ModifiedTabs.defaultProps = {
  tabs: [{
    id: 'tab-1',
    label: 'Tab 1',
    content: /*#__PURE__*/React.createElement("div", null, "Iam am the content of tab 1."),
    unsavedContent: false
  }],
  newTabLabel: 'New tab',
  newTabContent: 'Your new tab will be here soon',
  onNewTab: undefined,
  onCloseTab: undefined
};
ModifiedTabs.displayName = componentName;