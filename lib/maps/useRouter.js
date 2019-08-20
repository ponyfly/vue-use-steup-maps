"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useRouter = useRouter;

var _vueFunctionApi = require("vue-function-api");

var _current = require("./current");

function useRouter() {
  var vm = (0, _current.getCurrentVm)();
  var router = (0, _vueFunctionApi.computed)(function () {
    return vm.$router;
  });
  return router;
}