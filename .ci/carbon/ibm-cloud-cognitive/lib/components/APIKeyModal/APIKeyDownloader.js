"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.APIKeyDownloader = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _settings = require("../../settings");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
var componentName = 'APIKeyDownloader';

var APIKeyDownloader = function APIKeyDownloader(_ref) {
  var apiKey = _ref.apiKey,
      body = _ref.body,
      fileName = _ref.fileName,
      fileType = _ref.fileType,
      linkText = _ref.linkText;

  var _useState = (0, _react.useState)({}),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      linkProps = _useState2[0],
      setLinkProps = _useState2[1];

  (0, _react.useEffect)(function () {
    var generateLinkProps = /*#__PURE__*/function () {
      var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var data, blob, href, download, props;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                data = fileType === 'txt' ? apiKey : JSON.stringify({
                  apiKey: apiKey
                });
                blob = new Blob([data], {
                  type: fileType === 'txt' ? 'text/plain' : 'application/json'
                });
                _context.next = 4;
                return URL.createObjectURL(blob);

              case 4:
                href = _context.sent;
                download = "".concat(fileName || 'apikey', ".").concat(fileType);
                props = {
                  href: href,
                  download: download
                };
                setLinkProps(props);

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function generateLinkProps() {
        return _ref2.apply(this, arguments);
      };
    }();

    generateLinkProps();
  }, [apiKey, fileName, fileType]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(_settings.pkg.prefix, "--apikey-modal__download-container")
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "".concat(_settings.pkg.prefix, "--apikey-modal__messaging-text")
  }, body, ' ', /*#__PURE__*/_react.default.createElement("a", (0, _extends2.default)({}, linkProps, {
    className: "".concat(_settings.pkg.prefix, "--apikey-modal__download-link")
  }), linkText)));
};

exports.APIKeyDownloader = APIKeyDownloader;
APIKeyDownloader.displayName = componentName;
APIKeyDownloader.propTypes = {
  /**
   * the api key that's displayed to the user when a request to create is fulfilled.
   */
  apiKey: _propTypes.default.string.isRequired,

  /**
   * body content for the downloader
   */
  body: _propTypes.default.string.isRequired,

  /**
   * designates the name of downloadable json file with the key. if not specified will default to 'apikey'
   */
  fileName: _propTypes.default.string.isRequired,

  /**
   * designates the file type for the downloadable key
   */
  fileType: _propTypes.default.oneOf(['txt', 'json']).isRequired,

  /**
   * anchor text for the download link
   */
  linkText: _propTypes.default.string.isRequired
};