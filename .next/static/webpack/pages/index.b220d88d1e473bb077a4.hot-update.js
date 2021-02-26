webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Countdown.tsx":
/*!**************************************!*\
  !*** ./src/components/Countdown.tsx ***!
  \**************************************/
/*! exports provided: Countdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Countdown", function() { return Countdown; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_petve_OneDrive_Documentos_MeusProjetos_NLW_mova_se_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var C_Users_petve_OneDrive_Documentos_MeusProjetos_NLW_mova_se_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty */ "./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _contexts_CountdownContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contexts/CountdownContext */ "./src/contexts/CountdownContext.tsx");
/* harmony import */ var _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/components/Countdown.module.css */ "./src/styles/components/Countdown.module.css");
/* harmony import */ var _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_5__);





var _jsxFileName = "C:\\Users\\petve\\OneDrive\\Documentos\\MeusProjetos\\NLW\\mova-se\\src\\components\\Countdown.tsx",
    _s = $RefreshSig$();




function Countdown() {
  _s();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_contexts_CountdownContext__WEBPACK_IMPORTED_MODULE_4__["CountdownContext"]);

  Object(C_Users_petve_OneDrive_Documentos_MeusProjetos_NLW_mova_se_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_2__["default"])(_useContext);

  var _String$padStart$spli = String(minutes).padStart(2, '0').split(''),
      _String$padStart$spli2 = Object(C_Users_petve_OneDrive_Documentos_MeusProjetos_NLW_mova_se_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_String$padStart$spli, 2),
      minuteLeft = _String$padStart$spli2[0],
      minuteRight = _String$padStart$spli2[1];

  var _String$padStart$spli3 = String(seconds).padStart(2, '0').split(''),
      _String$padStart$spli4 = Object(C_Users_petve_OneDrive_Documentos_MeusProjetos_NLW_mova_se_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_String$padStart$spli3, 2),
      secondLeft = _String$padStart$spli4[0],
      secondRight = _String$padStart$spli4[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.countdownCountainer,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: minuteLeft
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: minuteRight
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: ":"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: secondLeft
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: secondRight
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, this), hasFinished ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      disabled: true,
      className: _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.countdownButton,
      children: "Ciclo Encerrado"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: isActive ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        type: "button",
        onClick: resetCountdown,
        className: "".concat(_styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.countdownButton, " ").concat(_styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.countdownButtonActive),
        children: "Abandonar Ciclo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 33
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        type: "button",
        onClick: startCountdown,
        className: _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.countdownButton,
        children: "Iniciar um Ciclo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 33
      }, this)
    }, void 0, false)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }, this);
}

_s(Countdown, "57Zz0Yb0DC1YSjiTG2RvfDJKC04=");

_c = Countdown;

var _c;

$RefreshReg$(_c, "Countdown");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./src/contexts/CountdownContext.tsx":
/*!*******************************************!*\
  !*** ./src/contexts/CountdownContext.tsx ***!
  \*******************************************/
/*! exports provided: CountdownContext, CountdownProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountdownContext", function() { return CountdownContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountdownProvider", function() { return CountdownProvider; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ChallengesContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChallengesContext */ "./src/contexts/ChallengesContext.tsx");


var _jsxFileName = "C:\\Users\\petve\\OneDrive\\Documentos\\MeusProjetos\\NLW\\mova-se\\src\\contexts\\CountdownContext.tsx",
    _s = $RefreshSig$();



var CountdownContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])({});
var countdownTimeout;
function CountdownProvider(_ref) {
  _s();

  var children = _ref.children;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__["ChallengesContext"]),
      startNewChallenge = _useContext.startNewChallenge;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0.1 * 60),
      time = _useState[0],
      setTime = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isActive = _useState2[0],
      setIsActive = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      hasFinished = _useState3[0],
      setHasFinished = _useState3[1];

  var minutes = Math.floor(time / 60);
  var seconds = time % 60;

  function startCountdown() {
    setIsActive(true);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(0.1 * 60);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(function () {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CountdownContext.Provider, {
    value: {
      minutes: minutes,
      seconds: seconds,
      hasFinished: hasFinished,
      isActive: isActive,
      startCountdown: startCountdown,
      resetCountdown: resetCountdown
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 9
  }, this);
}

_s(CountdownProvider, "cVu0hsDf1rnm10+qbfS96WIdEJo=");

_c = CountdownProvider;

var _c;

$RefreshReg$(_c, "CountdownProvider");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ291bnRkb3duLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL0NvdW50ZG93bkNvbnRleHQudHN4Il0sIm5hbWVzIjpbIkNvdW50ZG93biIsInVzZUNvbnRleHQiLCJDb3VudGRvd25Db250ZXh0IiwiU3RyaW5nIiwibWludXRlcyIsInBhZFN0YXJ0Iiwic3BsaXQiLCJtaW51dGVMZWZ0IiwibWludXRlUmlnaHQiLCJzZWNvbmRzIiwic2Vjb25kTGVmdCIsInNlY29uZFJpZ2h0Iiwic3R5bGVzIiwiY291bnRkb3duQ291bnRhaW5lciIsImhhc0ZpbmlzaGVkIiwiY291bnRkb3duQnV0dG9uIiwiaXNBY3RpdmUiLCJyZXNldENvdW50ZG93biIsImNvdW50ZG93bkJ1dHRvbkFjdGl2ZSIsInN0YXJ0Q291bnRkb3duIiwiY3JlYXRlQ29udGV4dCIsImNvdW50ZG93blRpbWVvdXQiLCJDb3VudGRvd25Qcm92aWRlciIsImNoaWxkcmVuIiwiQ2hhbGxlbmdlc0NvbnRleHQiLCJzdGFydE5ld0NoYWxsZW5nZSIsInVzZVN0YXRlIiwidGltZSIsInNldFRpbWUiLCJzZXRJc0FjdGl2ZSIsInNldEhhc0ZpbmlzaGVkIiwiTWF0aCIsImZsb29yIiwiY2xlYXJUaW1lb3V0IiwidXNlRWZmZWN0Iiwic2V0VGltZW91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFTyxTQUFTQSxTQUFULEdBQXFCO0FBQUE7O0FBQUEsb0JBR1pDLHdEQUFVLENBQUNDLDJFQUFELENBSEU7O0FBQUE7O0FBQUEsOEJBSVVDLE1BQU0sQ0FBQ0MsT0FBRCxDQUFOLENBQWdCQyxRQUFoQixDQUF5QixDQUF6QixFQUE0QixHQUE1QixFQUFpQ0MsS0FBakMsQ0FBdUMsRUFBdkMsQ0FKVjtBQUFBO0FBQUEsTUFJakJDLFVBSmlCO0FBQUEsTUFJTEMsV0FKSzs7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O0FBQ0RNLHlEQUFTLENBQUMsWUFBTTtBQUNaLFFBQUlsQixRQUFRLElBQUlXLElBQUksR0FBRyxDQUF2QixFQUEwQjtBQUN0Qk4sc0JBQWdCLEdBQUdjLFVBQVUsQ0FBQyxZQUFNO0FBQ2hDUCxlQUFPLENBQUNELElBQUksR0FBRyxDQUFSLENBQVA7QUFDSCxPQUY0QixFQUUxQixJQUYwQixDQUE3QjtBQUdILEtBSkQsTUFJTyxJQUFJWCxRQUFRLElBQUlXLElBQUksS0FBSyxDQUF6QixFQUE0QjtBQUMvQkcsb0JBQWMsQ0FBQyxJQUFELENBQWQ7QUFDQUQsaUJBQVcsQ0FBQyxLQUFELENBQVg7QUFDQUosdUJBQWlCO0FBQ3BCO0FBQ0osR0FWUSxFQVVOLENBQUNULFFBQUQsRUFBV1csSUFBWCxDQVZNLENBQVQ7QUFZQSxzQkFDSSxxRUFBQyxnQkFBRCxDQUFrQixRQUFsQjtBQUEyQixTQUFLLEVBQUU7QUFDOUJ2QixhQUFPLEVBQVBBLE9BRDhCO0FBRTlCSyxhQUFPLEVBQVBBLE9BRjhCO0FBRzlCSyxpQkFBVyxFQUFYQSxXQUg4QjtBQUk5QkUsY0FBUSxFQUFSQSxRQUo4QjtBQUs5Qkcsb0JBQWMsRUFBZEEsY0FMOEI7QUFNOUJGLG9CQUFjLEVBQWRBO0FBTjhCLEtBQWxDO0FBQUEsY0FRS007QUFSTDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFhSDs7R0E1Q2VELGlCOztLQUFBQSxpQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iMjIwZDg4ZDFlNDczYmIwNzdhNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ291bnRkb3duQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHRzL0NvdW50ZG93bkNvbnRleHQnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9jb21wb25lbnRzL0NvdW50ZG93bi5tb2R1bGUuY3NzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDb3VudGRvd24oKSB7XHJcblxyXG5cclxuICAgIGNvbnN0IHsgfSA9IHVzZUNvbnRleHQoQ291bnRkb3duQ29udGV4dClcclxuICAgIGNvbnN0IFttaW51dGVMZWZ0LCBtaW51dGVSaWdodF0gPSBTdHJpbmcobWludXRlcykucGFkU3RhcnQoMiwgJzAnKS5zcGxpdCgnJylcclxuICAgIGNvbnN0IFtzZWNvbmRMZWZ0LCBzZWNvbmRSaWdodF0gPSBTdHJpbmcoc2Vjb25kcykucGFkU3RhcnQoMiwgJzAnKS5zcGxpdCgnJylcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY291bnRkb3duQ291bnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPnttaW51dGVMZWZ0fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57bWludXRlUmlnaHR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj46PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57c2Vjb25kTGVmdH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3NlY29uZFJpZ2h0fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsgaGFzRmluaXNoZWQgPyAoXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY291bnRkb3duQnV0dG9ufT5cclxuICAgICAgICAgICAgICAgICAgICBDaWNsbyBFbmNlcnJhZG9cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgaXNBY3RpdmUgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3Jlc2V0Q291bnRkb3dufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5jb3VudGRvd25CdXR0b259ICR7c3R5bGVzLmNvdW50ZG93bkJ1dHRvbkFjdGl2ZX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWJhbmRvbmFyIENpY2xvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtzdGFydENvdW50ZG93bn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY291bnRkb3duQnV0dG9ufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5pY2lhciB1bSBDaWNsb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn0iLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCBSZWFjdE5vZGUsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQ2hhbGxlbmdlc0NvbnRleHQgfSBmcm9tIFwiLi9DaGFsbGVuZ2VzQ29udGV4dFwiO1xyXG5cclxuaW50ZXJmYWNlIENvdW50RG93bkNvbnRleERhdGEge1xyXG4gICAgbWludXRlczogbnVtYmVyO1xyXG4gICAgc2Vjb25kczogbnVtYmVyO1xyXG4gICAgaGFzRmluaXNoZWQ6IGJvb2xlYW47XHJcbiAgICBpc0FjdGl2ZTogYm9vbGVhbjtcclxuICAgIHN0YXJ0Q291bnRkb3duOiAoKSA9PiB2b2lkO1xyXG4gICAgcmVzZXRDb3VudGRvd246ICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmludGVyZmFjZSBDb3VudGRvd25Qcm92aWRlclByb3BzIHtcclxuICAgIGNoaWxkcmVuOiBSZWFjdE5vZGU7XHJcbn1cclxuZXhwb3J0IGNvbnN0IENvdW50ZG93bkNvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9IGFzIENvdW50RG93bkNvbnRleERhdGEpXHJcblxyXG5sZXQgY291bnRkb3duVGltZW91dDogTm9kZUpTLlRpbWVvdXQ7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ291bnRkb3duUHJvdmlkZXIoeyBjaGlsZHJlbiB9OiBDb3VudGRvd25Qcm92aWRlclByb3BzKSB7XHJcbiAgICBjb25zdCB7IHN0YXJ0TmV3Q2hhbGxlbmdlIH0gPSB1c2VDb250ZXh0KENoYWxsZW5nZXNDb250ZXh0KVxyXG5cclxuICAgIGNvbnN0IFt0aW1lLCBzZXRUaW1lXSA9IHVzZVN0YXRlKDAuMSAqIDYwKVxyXG4gICAgY29uc3QgW2lzQWN0aXZlLCBzZXRJc0FjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtoYXNGaW5pc2hlZCwgc2V0SGFzRmluaXNoZWRdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IodGltZSAvIDYwKVxyXG4gICAgY29uc3Qgc2Vjb25kcyA9IHRpbWUgJSA2MFxyXG5cclxuICAgIGZ1bmN0aW9uIHN0YXJ0Q291bnRkb3duKCkge1xyXG4gICAgICAgIHNldElzQWN0aXZlKHRydWUpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVzZXRDb3VudGRvd24oKSB7XHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KGNvdW50ZG93blRpbWVvdXQpXHJcbiAgICAgICAgc2V0SXNBY3RpdmUoZmFsc2UpXHJcbiAgICAgICAgc2V0VGltZSgwLjEgKiA2MClcclxuICAgIH1cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGlzQWN0aXZlICYmIHRpbWUgPiAwKSB7XHJcbiAgICAgICAgICAgIGNvdW50ZG93blRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldFRpbWUodGltZSAtIDEpXHJcbiAgICAgICAgICAgIH0sIDEwMDApXHJcbiAgICAgICAgfSBlbHNlIGlmIChpc0FjdGl2ZSAmJiB0aW1lID09PSAwKSB7XHJcbiAgICAgICAgICAgIHNldEhhc0ZpbmlzaGVkKHRydWUpXHJcbiAgICAgICAgICAgIHNldElzQWN0aXZlKGZhbHNlKVxyXG4gICAgICAgICAgICBzdGFydE5ld0NoYWxsZW5nZSgpXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2lzQWN0aXZlLCB0aW1lXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb3VudGRvd25Db250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7XHJcbiAgICAgICAgICAgIG1pbnV0ZXMsXHJcbiAgICAgICAgICAgIHNlY29uZHMsXHJcbiAgICAgICAgICAgIGhhc0ZpbmlzaGVkLFxyXG4gICAgICAgICAgICBpc0FjdGl2ZSxcclxuICAgICAgICAgICAgc3RhcnRDb3VudGRvd24sXHJcbiAgICAgICAgICAgIHJlc2V0Q291bnRkb3duXHJcbiAgICAgICAgfX0+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L0NvdW50ZG93bkNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApXHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==