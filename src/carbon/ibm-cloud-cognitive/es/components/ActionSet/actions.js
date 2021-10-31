/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
export var actionsOptions = [0, 1, 2, 3, 4, 5, 6, 7];
export var actionsLabels = {
  0: 'None',
  1: 'One button',
  2: 'One ghost button',
  3: 'Two buttons',
  4: 'Two buttons including one ghost',
  5: 'Three buttons',
  6: 'Three buttons including one ghost',
  7: 'Four buttons including one ghost'
};
export var actionsMapping = function actionsMapping(labels, action) {
  var _labels$primary, _labels$secondary, _labels$secondary2, _labels$ghost;

  var act = function act(label, kind, key) {
    var actionCall = action && action("Click on '".concat(label, "'"));
    return {
      label: label,
      kind: kind,
      key: key,
      onClick: actionCall && function (evt) {
        evt && evt.persist();
        actionCall(evt);
      }
    };
  };

  var primary = act((_labels$primary = labels === null || labels === void 0 ? void 0 : labels.primary) !== null && _labels$primary !== void 0 ? _labels$primary : 'Primary', 'primary', 1);
  var secondary = act((_labels$secondary = labels === null || labels === void 0 ? void 0 : labels.secondary) !== null && _labels$secondary !== void 0 ? _labels$secondary : 'Secondary', 'secondary', 2);
  var secondary2 = act((_labels$secondary2 = labels === null || labels === void 0 ? void 0 : labels.secondary2) !== null && _labels$secondary2 !== void 0 ? _labels$secondary2 : 'Secondary', 'secondary', 3);
  var ghost = act((_labels$ghost = labels === null || labels === void 0 ? void 0 : labels.ghost) !== null && _labels$ghost !== void 0 ? _labels$ghost : 'Ghost', 'ghost', 4);
  return {
    0: [],
    1: [primary],
    2: [ghost],
    3: [primary, secondary],
    4: [primary, ghost],
    5: [primary, secondary, secondary2],
    6: [primary, secondary, ghost],
    7: [primary, secondary, secondary2, ghost]
  };
};