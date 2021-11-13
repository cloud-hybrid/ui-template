import _extends from "@babel/runtime/helpers/extends";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _regeneratorRuntime from "@babel/runtime/regenerator";

/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { pkg } from '../../settings';
var componentName = 'APIKeyDownloader';
export var APIKeyDownloader = function APIKeyDownloader(_ref) {
  var apiKey = _ref.apiKey,
      body = _ref.body,
      fileName = _ref.fileName,
      fileType = _ref.fileType,
      linkText = _ref.linkText;

  var _useState = useState({}),
      _useState2 = _slicedToArray(_useState, 2),
      linkProps = _useState2[0],
      setLinkProps = _useState2[1];

  useEffect(function () {
    var generateLinkProps = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
        var data, blob, href, download, props;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
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
  return /*#__PURE__*/React.createElement("div", {
    className: "".concat(pkg.prefix, "--apikey-modal__download-container")
  }, /*#__PURE__*/React.createElement("p", {
    className: "".concat(pkg.prefix, "--apikey-modal__messaging-text")
  }, body, ' ', /*#__PURE__*/React.createElement("a", _extends({}, linkProps, {
    className: "".concat(pkg.prefix, "--apikey-modal__download-link")
  }), linkText)));
};
APIKeyDownloader.displayName = componentName;
APIKeyDownloader.propTypes = {
  /**
   * the api key that's displayed to the user when a request to create is fulfilled.
   */
  apiKey: PropTypes.string.isRequired,

  /**
   * body content for the downloader
   */
  body: PropTypes.string.isRequired,

  /**
   * designates the name of downloadable json file with the key. if not specified will default to 'apikey'
   */
  fileName: PropTypes.string.isRequired,

  /**
   * designates the file type for the downloadable key
   */
  fileType: PropTypes.oneOf(['txt', 'json']).isRequired,

  /**
   * anchor text for the download link
   */
  linkText: PropTypes.string.isRequired
};