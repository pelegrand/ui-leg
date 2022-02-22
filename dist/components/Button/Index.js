"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Button;

var _react = _interopRequireDefault(require("react"));

var _StyleModule = _interopRequireDefault(require("./Style.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Button(_ref) {
  let {
    color = "blue",
    handleClick,
    text = "Log In",
    buttonStyle = "basic",
    size = "large"
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("button", {
    className: "".concat(_StyleModule.default.Button, " ").concat(_StyleModule.default[color], " ").concat(_StyleModule.default[buttonStyle], " ").concat(_StyleModule.default[size]),
    onClick: handleClick
  }, text);
}

;