"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useRoute = useRoute;

var _vueFunctionApi = require("vue-function-api");

var _current = require("./current");

function useRoute() {
  var vm = (0, _current.getCurrentVm)();
  var route = (0, _vueFunctionApi.computed)(function () {
    return vm.$route;
  });
  return route;
}