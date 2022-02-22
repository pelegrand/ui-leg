"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = LoginForm;

var _react = _interopRequireDefault(require("react"));

var _Index = _interopRequireDefault(require("../Button/Index"));

var _StyleModule = _interopRequireDefault(require("./Style.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function LoginForm(_ref) {
  let {
    title = "connexion",
    subtitle = "to your user account",
    buttonColor = "red",
    buttonText = "Log In",
    placeHolderOne = "username",
    placeHolderTwo = "password"
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _StyleModule.default.ConnexionContainer
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: _StyleModule.default.ConnexionTitle
  }, title.toUpperCase()), /*#__PURE__*/_react.default.createElement("span", null, subtitle), /*#__PURE__*/_react.default.createElement("form", {
    className: _StyleModule.default.ConnexionForm
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _StyleModule.default.ConnexionInputContainer
  }, /*#__PURE__*/_react.default.createElement("input", {
    placeholder: placeHolderOne,
    className: _StyleModule.default.ConnexionInput,
    required: true
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: _StyleModule.default.ConnexionInputContainer
  }, /*#__PURE__*/_react.default.createElement("input", {
    placeholder: placeHolderTwo,
    type: "password",
    className: _StyleModule.default.ConnexionInput,
    required: true
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: _StyleModule.default.ConnexionFooter
  }, /*#__PURE__*/_react.default.createElement(_Index.default, {
    type: "submit"
  }))));
}