"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserProfileImage = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _devtools = require("../../global/js/utils/devtools");

require("../../global/js/utils/props-helper");

var _settings = require("../../settings");

var _iconsReact = require("@carbon/icons-react");

var _carbonComponentsReact = require("carbon-components-react");

var _excluded = ["backgroundColor", "className", "kind", "initials", "image", "imageDescription", "size", "theme", "tooltipText"];
// The block part of our conventional BEM class names (blockClass__E--M).
var blockClass = "".concat(_settings.pkg.prefix, "-user-profile-avatar");
var componentName = 'UserProfileImage'; // NOTE: the component SCSS is not imported here: it is rolled up separately.

/**
 * This is a user profile image component which displays an image, or initials or icon for a user.
 */

var UserProfileImage = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var backgroundColor = _ref.backgroundColor,
      className = _ref.className,
      kind = _ref.kind,
      initials = _ref.initials,
      image = _ref.image,
      imageDescription = _ref.imageDescription,
      size = _ref.size,
      theme = _ref.theme,
      tooltipText = _ref.tooltipText,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var icons = {
    user: {
      md: _iconsReact.User20,
      lg: _iconsReact.User24,
      xlg: _iconsReact.User32
    },
    group: {
      md: _iconsReact.Group20,
      lg: _iconsReact.Group24,
      xlg: _iconsReact.Group32
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
    return /*#__PURE__*/_react.default.createElement("img", {
      alt: imageDescription,
      src: image,
      className: "".concat(blockClass, "__photo ").concat(blockClass, "__photo--").concat(size)
    });
  } : initials ? formatInitials : kind && size && icons[kind][size];

  var renderUserProfileImage = function renderUserProfileImage() {
    return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, rest, {
      ref: ref,
      className: (0, _classnames.default)([blockClass, className, "".concat(blockClass, "--").concat(size), "".concat(blockClass, "--").concat(theme), "".concat(blockClass, "--").concat(backgroundColor)])
    }, (0, _devtools.getDevtoolsProps)(componentName)), /*#__PURE__*/_react.default.createElement(FillItem, null));
  };

  return FillItem && (tooltipText ? /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.TooltipIcon, {
    tooltipText: tooltipText
  }, renderUserProfileImage()) : renderUserProfileImage());
}); // Return a placeholder if not released and not enabled by feature flag


exports.UserProfileImage = UserProfileImage;
exports.UserProfileImage = UserProfileImage = _settings.pkg.checkComponentEnabled(UserProfileImage, componentName);
UserProfileImage.displayName = componentName;
UserProfileImage.propTypes = {
  /**
   * The background color passed should match one of the background colors in the library documentation:
   * https://pages.github.ibm.com/cdai-design/pal/patterns/user-profile-images/
   */
  backgroundColor: _propTypes.default.oneOf(['light-cyan', 'dark-cyan', 'light-gray', 'dark-gray', 'light-green', 'dark-green', 'light-magenta', 'dark-magenta', 'light-purple', 'dark-purple', 'light-teal', 'dark-teal']),

  /**
   * Provide an optional class to be applied to the containing node.
   */
  className: _propTypes.default.string,

  /**
   * When passing the image prop, supply a full path to the image to be displayed.
   */
  image: _propTypes.default.string,

  /**
   * When passing the image prop use the imageDescription prop to describe the image for screen reader.
   */
  imageDescription: _propTypes.default.string.isRequired.if(function (_ref2) {
    var image = _ref2.image;
    return image;
  }),

  /**
   * When passing the initials prop, either send the initials to be used or the user's display name. The first two capital letters of the display name will be used as the initials.
   */
  initials: _propTypes.default.string,

  /**
   * When passing the kind prop, use either "user" or "group". The values match up to the Carbon Library icons.
   */
  kind: _propTypes.default.oneOf(['user', 'group']),

  /**
   * Set the size of the avatar circle
   */
  size: _propTypes.default.oneOf(['xlg', 'lg', 'md']).isRequired,

  /**
   * Set theme in which the component will be rendered
   */
  theme: _propTypes.default.oneOf(['light', 'dark']).isRequired,

  /**
   * Pass in the display name to have it shown on hover
   */
  tooltipText: _propTypes.default.string
};