"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = install;
Object.defineProperty(exports, "useThis", {
  enumerable: true,
  get: function get() {
    return _useThis.useThis;
  }
});
Object.defineProperty(exports, "useStore", {
  enumerable: true,
  get: function get() {
    return _useStore.useStore;
  }
});
Object.defineProperty(exports, "useRouter", {
  enumerable: true,
  get: function get() {
    return _useRouter.useRouter;
  }
});
Object.defineProperty(exports, "useRoute", {
  enumerable: true,
  get: function get() {
    return _useRoute.useRoute;
  }
});

var _current = require("./maps/current");

var _useThis = require("./maps/useThis");

var _useStore = require("./maps/useStore");

var _useRouter = require("./maps/useRouter");

var _useRoute = require("./maps/useRoute");

function install(Vue) {
  Vue.mixin({
    beforeCreate: _current.setCurrentVm
  });
}