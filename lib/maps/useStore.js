"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStore = useStore;

var _vueFunctionApi = require("vue-function-api");

var _current = require("./current");

function useStore() {
  var vm = (0, _current.getCurrentVm)();
  var store = (0, _vueFunctionApi.computed)(function () {
    return vm.$store;
  });
  return store;
}