import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _regeneratorRuntime from "@babel/runtime/regenerator";

/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { useCallback, useEffect } from 'react';
export var useCreateComponentStepChange = function useCreateComponentStepChange(_ref) {
  var setCurrentStep = _ref.setCurrentStep,
      setIsSubmitting = _ref.setIsSubmitting,
      setShouldViewAll = _ref.setShouldViewAll,
      onClose = _ref.onClose,
      onRequestSubmit = _ref.onRequestSubmit,
      componentName = _ref.componentName,
      getComponentSteps = _ref.getComponentSteps,
      currentStep = _ref.currentStep,
      shouldViewAll = _ref.shouldViewAll,
      backButtonText = _ref.backButtonText,
      cancelButtonText = _ref.cancelButtonText,
      submitButtonText = _ref.submitButtonText,
      nextButtonText = _ref.nextButtonText,
      isSubmitting = _ref.isSubmitting,
      componentBlockClass = _ref.componentBlockClass,
      setCreateComponentActions = _ref.setCreateComponentActions,
      setModalIsOpen = _ref.setModalIsOpen;
  // useEffect to handle multi step logic
  useEffect(function () {
    var _getComponentSteps;

    var onUnmount = function onUnmount() {
      if (componentName !== 'CreateFullPage') {
        setCurrentStep(0);
      }

      setIsSubmitting(false);
      setShouldViewAll(false);
      onClose();
    };

    var handleOnRequestSubmit = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return onRequestSubmit();

              case 3:
                onUnmount();
                _context.next = 10;
                break;

              case 6:
                _context.prev = 6;
                _context.t0 = _context["catch"](0);
                setIsSubmitting(false);
                console.warn("".concat(componentName, " submit error: ").concat(_context.t0));

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 6]]);
      }));

      return function handleOnRequestSubmit() {
        return _ref2.apply(this, arguments);
      };
    }();

    var isSubmitDisabled = function isSubmitDisabled() {
      var step = 0;
      var submitDisabled = false;
      var viewAllSubmitDisabled = false;
      var createComponentSteps = getComponentSteps();
      createComponentSteps.forEach(function (child) {
        step++;

        if (currentStep === step) {
          submitDisabled = child.props.disableSubmit;
        }

        if (shouldViewAll && child.props.disableSubmit) {
          viewAllSubmitDisabled = true;
        }
      });

      if (!shouldViewAll) {
        return submitDisabled;
      }

      return viewAllSubmitDisabled;
    };

    var handleNext = /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2() {
        var createSteps;
        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                setIsSubmitting(true);
                createSteps = getComponentSteps();

                if (!createSteps[currentStep - 1].props.onNext) {
                  _context2.next = 15;
                  break;
                }

                _context2.prev = 3;
                _context2.next = 6;
                return createSteps[currentStep - 1].props.onNext();

              case 6:
                continueToNextStep();
                _context2.next = 13;
                break;

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2["catch"](3);
                setIsSubmitting(false);
                console.warn("".concat(componentName, " onNext error: ").concat(_context2.t0));

              case 13:
                _context2.next = 16;
                break;

              case 15:
                continueToNextStep();

              case 16:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[3, 9]]);
      }));

      return function handleNext() {
        return _ref3.apply(this, arguments);
      };
    }();

    var handleSubmit = /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3() {
        var createSteps;
        return _regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                setIsSubmitting(true);
                createSteps = getComponentSteps(); // last step should have onNext as well

                if (!createSteps[currentStep - 1].props.onNext) {
                  _context3.next = 16;
                  break;
                }

                _context3.prev = 3;
                _context3.next = 6;
                return createSteps[currentStep - 1].props.onNext();

              case 6:
                _context3.next = 8;
                return handleOnRequestSubmit();

              case 8:
                _context3.next = 14;
                break;

              case 10:
                _context3.prev = 10;
                _context3.t0 = _context3["catch"](3);
                setIsSubmitting(false);
                console.warn("".concat(componentName, " onNext error: ").concat(_context3.t0));

              case 14:
                _context3.next = 18;
                break;

              case 16:
                _context3.next = 18;
                return handleOnRequestSubmit();

              case 18:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[3, 10]]);
      }));

      return function handleSubmit() {
        return _ref4.apply(this, arguments);
      };
    }();

    if ((_getComponentSteps = getComponentSteps()) !== null && _getComponentSteps !== void 0 && _getComponentSteps.length) {
      var createSteps = getComponentSteps();
      var total = createSteps.length;
      var buttons = [];

      if (total > 1 && !shouldViewAll) {
        buttons.push({
          key: 'create-action-button-back',
          label: backButtonText,
          onClick: function onClick() {
            return setCurrentStep(function (prev) {
              return prev - 1;
            });
          },
          kind: 'secondary',
          disabled: currentStep === 1
        });
      }

      buttons.push({
        key: 'create-action-button-cancel',
        label: cancelButtonText,
        onClick: componentName === 'CreateFullPage' ? function () {
          return setModalIsOpen(true);
        } : onUnmount,
        kind: 'ghost'
      });
      buttons.push({
        key: 'create-action-button-submit',
        label: shouldViewAll ? submitButtonText : currentStep < total ? nextButtonText : submitButtonText,
        onClick: shouldViewAll ? handleSubmit : currentStep < total ? handleNext : handleSubmit,
        disabled: isSubmitDisabled(),
        kind: 'primary',
        loading: isSubmitting,
        className: "".concat(componentBlockClass, "__create-button")
      });
      setCreateComponentActions(buttons);
    }
  }, [getComponentSteps, backButtonText, cancelButtonText, currentStep, onClose, nextButtonText, submitButtonText, onRequestSubmit, isSubmitting, shouldViewAll, componentBlockClass, componentName, continueToNextStep, setCurrentStep, setCreateComponentActions, setIsSubmitting, setShouldViewAll, setModalIsOpen]);
  var continueToNextStep = useCallback(function () {
    setIsSubmitting(false);
    setCurrentStep(function (prev) {
      return prev + 1;
    });
  }, [setCurrentStep, setIsSubmitting]);
};