//
// Copyright IBM Corp. 2021, 2021
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//
import { sanitize } from '@storybook/csf';
import pkg from '../package-settings';
import { getPathForComponent } from '../../../../../core/story-structure';
/**
 * A helper function to return the structured story title for a component.
 * @param {string} componentName The name of the component.
 * @returns The structured story title.
 */

export var getStoryTitle = function getStoryTitle(componentName) {
  var title = // if the component isn't in the master structure, put it in a lost+found section
  getPathForComponent('c', componentName) || "Cloud & Cognitive/Lost + found/".concat(componentName); // add a canary tag if the component is public but not normally enabled

  return !pkg.isComponentEnabled(componentName, true) && pkg.isComponentPublic(componentName, true) ? "".concat(title, "#canary") : title;
};
/**
 * A helper function to return the slug (structured path name reduced to lower
 * case text and hyphens) which identifies individual story instances.
 * @param {string} componentName The name of the component.
 * @param {string} scenario The scenario name, also as a slug.
 * @returns The story id.
 */

export var getStoryId = function getStoryId(componentName, scenario) {
  return "".concat(sanitize(getStoryTitle(componentName)), "--").concat(scenario);
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

var sequence = 0;
var bindTarget = {};
export var prepareStory = function prepareStory(template, options) {
  var _result$parameters, _result$parameters2, _result$parameters2$c;

  var result = Object.assign(template.bind(bindTarget), options);
  (_result$parameters = result.parameters) !== null && _result$parameters !== void 0 ? _result$parameters : result.parameters = {};
  (_result$parameters2$c = (_result$parameters2 = result.parameters).ccsSettings) !== null && _result$parameters2$c !== void 0 ? _result$parameters2$c : _result$parameters2.ccsSettings = {};
  result.parameters.ccsSettings.sequence = sequence++;
  return result;
};