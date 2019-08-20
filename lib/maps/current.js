"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setCurrentVm = setCurrentVm;
exports.getCurrentVm = getCurrentVm;
var currentVm = null;

function setCurrentVm(vue) {
  var vm = this || vue;

  if (typeof vm.$options.setup === 'function') {
    currentVm = vm;
  }
}

function getCurrentVm() {
  if (currentVm) return currentVm;
  throw new ReferenceError('Can Not found vm.');
}