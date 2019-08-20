"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useThis = useThis;

var _current = require("./current");

function useThis() {
  return (0, _current.getCurrentVm)();
}