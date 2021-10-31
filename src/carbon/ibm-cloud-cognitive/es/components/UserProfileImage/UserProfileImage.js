import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["backgroundColor", "className", "kind", "initials", "image", "imageDescription", "size", "theme", "tooltipText"];

/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
// Import portions of React that are needed.
import React from 'react'; // Other standard imports.

import PropTypes from 'prop-types';
import cx from 'classnames';
import { getDevtoolsProps } from '../../global/js/utils/devtools';
import '../../global/js/utils/props-helper';
import { pkg } from '../../settings'; // Carbon and package components we use.

import { User20, User24, User32, Group20, Group24, Group32 } from '@carbon/icons-react';
import { TooltipIcon } from 'carbon-components-react'; // The block part of our conventional BEM class names (blockClass__E--M).

var blockClass = "".concat(pkg.prefix, "-user-profile-avatar");
var componentName = 'UserProfileImage'; // NOTE: the component SCSS is not imported here: it is rolled up separately.

/**
 * This is a user profile image component which displays an image, or initials or icon for a user.
 */

export var UserProfileImage = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var backgroundColor = _ref.backgroundColor,
      className = _ref.className,
      kind = _ref.kind,
      initials = _ref.initials,
      image = _ref.image,
      imageDescription = _ref.imageDescription,
      size = _ref.size,
      theme = _ref.theme,
      tooltipText = _ref.tooltipText,
      rest = _objectWithoutProperties(_ref, _excluded);

  var icons = {
    user: {
      md: User20,
      lg: User24,
      xlg: User32
    },
    group: {
      md: Group20,
      lg: Group24,
      xlg: Group32
    }
  };

  var formatInitials = function formatInitials() {
    if (initials.length === 2) {
      return initials;
    } // RegEx takes in the display name and returns the first and last initials. Thomas Watson and Thomas J. Watson
    // both return JW.


    return initials.match(/(^\S\S?|\b\S)?/g).join('').match(/(^\S|\S$)?/g).join('').toUpperCase();
  };

  var FillItem = image ? function () {
    return /*#__PURE__*/React.createElement("img", {
      alt: imageDescription,
      src: image,
      className: "".concat(blockClass, "__photo ").concat(blockClass, "__photo--").concat(size)
    });
  } : initials ? formatInitials : kind && size && icons[kind][size];

  var renderUserProfileImage = function renderUserProfileImage() {
    return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
      ref: ref,
      className: cx([blockClass, className, "".concat(blockClass, "--").concat(size), "".concat(blockClass, "--").concat(theme), "".concat(blockClass, "--").concat(backgroundColor)])
    }, getDevtoolsProps(componentName)), /*#__PURE__*/React.createElement(FillItem, null));
  };

  return FillItem && (tooltipText ? /*#__PURE__*/React.createElement(TooltipIcon, {
    tooltipText: tooltipText
  }, renderUserProfileImage()) : renderUserProfileImage());
}); // Return a placeholder if not released and not enabled by feature flag

UserProfileImage = pkg.checkComponentEnabled(UserProfileImage, componentName);
UserProfileImage.displayName = componentName;
UserProfileImage.propTypes = {
  /**
   * The background color passed should match one of the background colors in the library documentation:
   * https://pages.github.ibm.com/cdai-design/pal/patterns/user-profile-images/
   */
  backgroundColor: PropTypes.oneOf(['light-cyan', 'dark-cyan', 'light-gray', 'dark-gray', 'light-green', 'dark-green', 'light-magenta', 'dark-magenta', 'light-purple', 'dark-purple', 'light-teal', 'dark-teal']),

  /**
   * Provide an optional class to be applied to the containing node.
   */
  className: PropTypes.string,

  /**
   * When passing the image prop, supply a full path to the image to be displayed.
   */
  image: PropTypes.string,

  /**
   * When passing the image prop use the imageDescription prop to describe the image for screen reader.
   */
  imageDescription: PropTypes.string.isRequired.if(function (_ref2) {
    var image = _ref2.image;
    return image;
  }),

  /**
   * When passing the initials prop, either send the initials to be used or the user's display name. The first two capital letters of the display name will be used as the initials.
   */
  initials: PropTypes.string,

  /**
   * When passing the kind prop, use either "user" or "group". The values match up to the Carbon Library icons.
   */
  kind: PropTypes.oneOf(['user', 'group']),

  /**
   * Set the size of the avatar circle
   */
  size: PropTypes.oneOf(['xlg', 'lg', 'md']).isRequired,

  /**
   * Set theme in which the component will be rendered
   */
  theme: PropTypes.oneOf(['light', 'dark']).isRequired,

  /**
   * Pass in the display name to have it shown on hover
   */
  tooltipText: PropTypes.string
};