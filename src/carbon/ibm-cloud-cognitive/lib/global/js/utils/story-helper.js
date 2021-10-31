"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.prepareStory = exports.getStoryTitle = exports.getStoryId = void 0;

var _csf = require("@storybook/csf");

var _packageSettings = _interopRequireDefault(require("../package-settings"));

var _storyStructure = require("../../../../../core/story-structure");

//
// Copyright IBM Corp. 2021, 2021
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

/**
 * A helper function to return the structured story title for a component.
 * @param {string} componentName The name of the component.
 * @returns The structured story title.
 */
var getStoryTitle = function getStoryTitle(componentName) {
  var title = // if the component isn't in the master structure, put it in a lost+found section
  (0, _storyStructure.getPathForComponent)('c', componentName) || "Cloud & Cognitive/Lost + found/".concat(componentName); // add a canary tag if the component is public but not normally enabled

  return !_packageSettings.default.isComponentEnabled(componentName, true) && _packageSettings.default.isComponentPublic(componentName, true) ? "".concat(title, "#canary") : title;
};
/**
 * A helper function to return the slug (structured path name reduced to lower
 * case text and hyphens) which identifies individual story instances.
 * @param {string} componentName The name of the component.
 * @param {string} scenario The scenario name, also as a slug.
 * @returns The story id.
 */


exports.getStoryTitle = getStoryTitle;

var getStoryId = function getStoryId(componentName, scenario) {
  return "".concat((0, _csf.sanitize)(getStoryTitle(componentName)), "--").concat(scenario);
};
/**
 * A helper function to prepare storybook stories for export. This function
 * binds the template, adds the supplied fields, and also inserts a sequence
 * number so that stories can then be sorted into declared order reliably.
 * @param template the story template render function
 * @param options an object containing fields to be added to the bound
 * template, such as `args`, `storyName`, etc.
 * @returns A bound template with the option fields applied.
 */


exports.getStoryId = getStoryId;
var sequence = 0;
var bindTarget = {};

var prepareStory = function prepareStory(template, options) {
  var _result$parameters, _result$parameters2, _result$parameters2$c;

  var result = Object.assign(template.bind(bindTarget), options);
  (_result$parameters = result.parameters) !== null && _result$parameters !== void 0 ? _result$parameters : result.parameters = {};
  (_result$parameters2$c = (_result$parameters2 = result.parameters).ccsSettings) !== null && _result$parameters2$c !== void 0 ? _result$parameters2$c : _result$parameters2.ccsSettings = {};
  result.parameters.ccsSettings.sequence = sequence++;
  return result;
};

exports.prepareStory = prepareStory;