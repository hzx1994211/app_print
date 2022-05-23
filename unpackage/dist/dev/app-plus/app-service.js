(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["app-service"],[
/* 0 */
/*!**************************************************************!*\
  !*** C:/Users/EDY/Desktop/demo/litchi-print_v12.0.1/main.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("__webpack_require__(/*! uni-pages */ 1);var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 17));\nvar _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 18));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}\n\n_vue.default.config.productionTip = false;\n\n_App.default.mpType = 'app';\n\nvar app = new _vue.default(_objectSpread({},\n_App.default));\n\napp.$mount();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyJdLCJuYW1lcyI6WyJWdWUiLCJjb25maWciLCJwcm9kdWN0aW9uVGlwIiwiQXBwIiwibXBUeXBlIiwiYXBwIiwiJG1vdW50Il0sIm1hcHBpbmdzIjoiQUFBQSx3Q0FBbUI7QUFDbkIsd0U7O0FBRUFBLGFBQUlDLE1BQUosQ0FBV0MsYUFBWCxHQUEyQixLQUEzQjs7QUFFQUMsYUFBSUMsTUFBSixHQUFhLEtBQWI7O0FBRUEsSUFBTUMsR0FBRyxHQUFHLElBQUlMLFlBQUo7QUFDTEcsWUFESyxFQUFaOztBQUdBRSxHQUFHLENBQUNDLE1BQUoiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAndW5pLXBhZ2VzJztpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcclxuaW1wb3J0IEFwcCBmcm9tICcuL0FwcCdcclxuXHJcblZ1ZS5jb25maWcucHJvZHVjdGlvblRpcCA9IGZhbHNlXHJcblxyXG5BcHAubXBUeXBlID0gJ2FwcCdcclxuXHJcbmNvbnN0IGFwcCA9IG5ldyBWdWUoe1xyXG4gICAgLi4uQXBwXHJcbn0pXHJcbmFwcC4kbW91bnQoKSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!*****************************************************************!*\
  !*** C:/Users/EDY/Desktop/demo/litchi-print_v12.0.1/pages.json ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}

if (uni.restoreGlobal) {
  uni.restoreGlobal(weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
__definePage('pages/index/index', function () {return Vue.extend(__webpack_require__(/*! pages/index/index.vue?mpType=page */ 2).default);});
__definePage('pages/add/index', function () {return Vue.extend(__webpack_require__(/*! pages/add/index.vue?mpType=page */ 12).default);});

/***/ }),
/* 2 */
/*!****************************************************************************************!*\
  !*** C:/Users/EDY/Desktop/demo/litchi-print_v12.0.1/pages/index/index.vue?mpType=page ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2be84a3c&scoped=true&mpType=page */ 3);\n/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 5);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 11);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"2be84a3c\",\n  null,\n  false,\n  _index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/index/index.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUk7QUFDekk7QUFDb0U7QUFDTDs7O0FBRy9EO0FBQzRMO0FBQzVMLGdCQUFnQixvTUFBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSx1R0FBTTtBQUNSLEVBQUUsZ0hBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMkdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJiZTg0YTNjJnNjb3BlZD10cnVlJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUU6XFxcXGhidWlsZGVyWDMuMS44XFxcXDMuMS44XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxccnVudGltZVxcXFxjb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIyYmU4NGEzY1wiLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy9pbmRleC9pbmRleC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!**********************************************************************************************************************************!*\
  !*** C:/Users/EDY/Desktop/demo/litchi-print_v12.0.1/pages/index/index.vue?vue&type=template&id=2be84a3c&scoped=true&mpType=page ***!
  \**********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=2be84a3c&scoped=true&mpType=page */ 4);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 4 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/EDY/Desktop/demo/litchi-print_v12.0.1/pages/index/index.vue?vue&type=template&id=2be84a3c&scoped=true&mpType=page ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    [
      _c("view"),
      _c("view", { attrs: { _i: 2 }, on: { click: _vm.startSearch } }),
      _vm._l(_vm._$s(3, "f", { forItems: _vm.deviceList }), function(
        device,
        index,
        $20,
        $30
      ) {
        return _c(
          "view",
          {
            key: _vm._$s(3, "f", { forIndex: $20, key: index }),
            staticClass: _vm._$s("3-" + $30, "sc", "uni-flex uni-row"),
            attrs: { _i: "3-" + $30 }
          },
          [
            _c("view", [
              _vm._v(_vm._$s("4-" + $30, "t0-0", _vm._s(index + 1)))
            ]),
            _c("view", [
              _vm._v(_vm._$s("5-" + $30, "t0-0", _vm._s(device.name)))
            ]),
            _c("view", [
              _vm._v(_vm._$s("6-" + $30, "t0-0", _vm._s(device.address)))
            ]),
            _c(
              "view",
              {
                staticClass: _vm._$s("7-" + $30, "sc", "flex-item"),
                attrs: { _i: "7-" + $30 }
              },
              [
                _c("button", {
                  attrs: { _i: "8-" + $30 },
                  on: {
                    click: function($event) {
                      return _vm.printSomething(device, _vm.printTest)
                    }
                  }
                })
              ]
            )
          ]
        )
      }),
      _c("view", {
        attrs: { _i: 9 },
        on: {
          click: function($event) {
            return _vm.printTest(_vm.outputStream)
          }
        }
      }),
      _c("view", { attrs: { _i: 10 }, on: { click: _vm.add } })
    ],
    2
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 5 */
/*!****************************************************************************************************************!*\
  !*** C:/Users/EDY/Desktop/demo/litchi-print_v12.0.1/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js&mpType=page */ 6);\n/* harmony import */ var _E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVvQixDQUFnQixrcUJBQUcsRUFBQyIsImZpbGUiOiI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSFFOlxcXFxoYnVpbGRlclgzLjEuOFxcXFwzLjEuOFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzIUU6XFxcXGhidWlsZGVyWDMuMS44XFxcXDMuMS44XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS02LTEhRTpcXFxcaGJ1aWxkZXJYMy4xLjhcXFxcMy4xLjhcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1hcHAtbG9hZGVyXFxcXHVzaW5nLWNvbXBvbmVudHMuanMhRTpcXFxcaGJ1aWxkZXJYMy4xLjhcXFxcMy4xLjhcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRTpcXFxcaGJ1aWxkZXJYMy4xLjhcXFxcMy4xLjhcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcyFFOlxcXFxoYnVpbGRlclgzLjEuOFxcXFwzLjEuOFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNi0xIUU6XFxcXGhidWlsZGVyWDMuMS44XFxcXDMuMS44XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUU6XFxcXGhidWlsZGVyWDMuMS44XFxcXDMuMS44XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/EDY/Desktop/demo/litchi-print_v12.0.1/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 8));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);}_next(undefined);});};} //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  data: function data() {\n    return {\n      show: {\n        setting: false },\n\n      deviceList: [],\n      outputStream: null,\n      bluetoothSocket: null };\n\n  },\n  onLoad: function onLoad(p) {\n    var that = this;\n\n\n\n  },\n  methods: {\n    add: function add() {\n      __f__(\"log\", '------', \" at pages/index/index.vue:40\");\n      uni.navigateTo({\n        url: '../add/index' });\n\n    },\n    startSearch: function startSearch() {\n      this.initPrinter();\n    },\n    showPrinterList: function showPrinterList() {\n      var that = this;\n      that.show.setting = true;\n      for (var i = 0; i < that.deviceList.length; i++) {\n        if (that.deviceList[i].name == that.device.name) {\n          that.deviceList[i].checked = true;\n        }\n      }\n    },\n    //搜索蓝牙\n    initPrinter: function initPrinter() {\n      var that = this;\n      that.deviceList = [];\n      var main = plus.android.runtimeMainActivity();\n      var Context = plus.android.importClass(\"android.content.Context\");\n      var BManager = main.getSystemService(Context.BLUETOOTH_SERVICE);\n      plus.android.importClass(BManager);\n      var BAdapter = BManager.getAdapter();\n      plus.android.importClass(BAdapter);\n      var lists = BAdapter.getBondedDevices();\n      plus.android.importClass(lists);\n      var iterator = lists.iterator();\n      plus.android.importClass(iterator);\n      while (iterator.hasNext()) {\n        var d = iterator.next();\n        plus.android.importClass(d);\n        var temp = {\n          name: d.getName(),\n          address: d.getAddress(),\n          status: d.getBondState(),\n          uuids: d.getUuids(),\n          op: d };\n\n        that.deviceList.push(temp);\n      }\n    },\n    printSomething: function printSomething(dev, sb) {\n      var that = this;\n      var main = plus.android.runtimeMainActivity();\n      //蓝牙适配器\n      var BluetoothAdapter = plus.android.importClass(\"android.bluetooth.BluetoothAdapter\");\n      var UUID = plus.android.importClass(\"java.util.UUID\");\n      var uuid = UUID.fromString(\"00001101-0000-1000-8000-00805F9B34FB\");\n      //蓝牙本地适配器\n      var BAdapter = BluetoothAdapter.getDefaultAdapter();\n      __f__(\"log\", dev, '----', \" at pages/index/index.vue:93\");\n      var device = BAdapter.getRemoteDevice(dev.address);\n      plus.android.importClass(device);\n      //蓝牙连接\n      this.bluetoothSocket = device.createInsecureRfcommSocketToServiceRecord(uuid);\n      plus.android.importClass(this.bluetoothSocket);\n      __f__(\"log\", \"开始连接打印机:\" + dev.name, \" at pages/index/index.vue:99\");\n      if (!this.bluetoothSocket.isConnected()) {\n        this.bluetoothSocket.connect();\n        if (this.bluetoothSocket.isConnected()) {\n          __f__(\"log\", \"设备已连接,开始发送打印文件\", \" at pages/index/index.vue:103\");\n          this.outputStream = this.bluetoothSocket.getOutputStream();\n          plus.android.importClass(this.outputStream);\n          // sb(this.outputStream);\n          // 关闭蓝牙连接\n          // this.bluetoothSocket.close();\n          uni.showToast({\n            title: '设备连接成功',\n            duration: 2000 });\n\n          if (!this.bluetoothSocket.isConnected()) {\n            __f__(\"log\", \"设备已关闭\", \" at pages/index/index.vue:114\");\n          }\n        } else {\n          uni.showToast({\n            title: '设备连接失败',\n            icon: 'error',\n            duration: 2000 });\n\n        }\n      }\n    },\n    printTest: function printTest(outputStream) {\n      var that = this;\n      var text = \"! 0 200 200 1000 1\\r\\n\"; // 1000 限制高度\n      //打印文字:  T 3(字体编号) 1（字体大小） 300（x轴位置） 160（y轴位置） 1588888888（打印内容）\\r\\n \n      //一维码\n      text += \"BT OFF\\r\\n\";\n      //打印条形码: B 128(type类型) 1（宽度点数） 1（窄宽比例） 80（高度） 0（x轴位置） 50（y轴位置） SF7444435088888（扫码内容）\n      text += \"B 128 1 1 80 0 50 SF7444435088888\\r\\n\";\n\n      //单号\n      text += \"SETBOLD 1\\r\\n\";\n      text += \"T 3 0 0 130 SF7444435088888\\r\\n\";\n      text += \"SETBOLD 0\\r\\n\";\n      //打印线条\n      //横线 y轴要保持一致: L 10（起点开始划线x轴） 120（起点开始划线y轴） 560(结束划线x轴 可以理解为线长) 120（结束划线y轴） 2\n      text += \"L 10 150 560 150 2\\r\\n\";\n      //------------- 收件信息 -------------\n      //加粗\n      text += \"SETBOLD 1\\r\\n\";\n      text += \"T 3 1 30 170 收\\r\\n\";\n      // 取消加粗\n      text += \"SETBOLD 0\\r\\n\";\n      text += \"T 3 1 70 170 懂调度\\r\\n\";\n      text += \"T 3 1 160 170 领送\\r\\n\";\n      text += \"T 3 1 300 170 1588888888\\r\\n\";\n      text += \"T 3 1 70 240 北京市朝阳区建国路15号1号院\\r\\n\";\n      text += \"L 10 280 560 280 2\\r\\n\";\n      //------------- 寄件信息 -------------\n      //加粗\n      text += \"SETBOLD 1\\r\\n\";\n      text += \"T 3 1 30 300 寄\\r\\n\";\n      // 取消加粗\n      text += \"SETBOLD 0\\r\\n\";\n      text += \"T 3 1 70 300 小曾\\r\\n\";\n      text += \"T 3 1 160 300 领送\\r\\n\";\n      text += \"T 3 1 70 330 深圳市宝安区西乡镇固戍\\r\\n\";\n      text += \"L 10 360 560 360 2\\r\\n\";\n      //------------- 收款信息 -------------\n      text += \"T 3 1 30 370 收款:20元\\r\\n\";\n      //画竖线 x轴要保持一致\n      text += \"L 160 360 160 440 2\\r\\n\"; //收款竖线\n      text += \"T 3 1 200 370 服务:领送\\r\\n\";\n      text += \"T 3 1 200 400 签收人:领送\\r\\n\";\n      text += \"L 10 440 400 440 2\\r\\n\"; // 横线\n\n      text += \"T 3 1 30 460 托寄物:9\\r\\n\";\n      text += \"L 10 480 400 480 2\\r\\n\"; // 横线\n\n      text += \"T 3 1 30 500 回单:否:9\\r\\n\";\n      //服务/签收人竖线\n      text += \"L 400 360 400 520 2\\r\\n\";\n      // 横线\n      text += \"L 10 520 560 520 2\\r\\n\";\n      // -------------右侧信息 --------\n      text += \"T 3 1 420 390 C5501/1\\r\\n\";\n      text += \"T 3 1 420 460 重量：2\\r\\n\";\n      text += \"T 3 1 420 500 打印:\\r\\n\";\n      text += \"T 3 2 480 500 2022-05-20\\r\\n\";\n      text += \"T 3 1 10 540 备注:梵蒂冈地方个梵蒂冈梵恢复\\r\\n\";\n      //打印二维码\n      text += \"B QR 10 560 M 2 U 5\\r\\n\";\n      text += \"MA,QR MMM={'k1':'023WA','k2':'023CA','k3':'005','k4':'T4','k5':'SF7444435088888','k6':'','k7':'51ba5363'}\\r\\n\";\n      text += \"ENDQR\\r\\n\";\n\n      // 打印水印\n      text += \"CENTER\\r\\n\";\n      text += \"BACKGROUND 110\\r\\n\";\n      text += \"SETMAG 2 2\\r\\n\";\n      text += \"BKT 24 0 200 560 已验收\\r\\n\";\n      text += \"BACKGROUND 0\\r\\n\";\n\n      // 反白线段\n      text += \"CENTER\\r\\n\";\n      /**\n                             * 反白线段注意 =>TL:IL 200（x0始点） 600（y0竖起点） 350（x1终点） 600（y1竖终点） 45（线宽）\\r\\n\n                             */\n      text += \"T 3 0 160 600 SAVE\\r\\n\";\n      text += 'IL 200 600 350 600 45\\r\\n';\n\n      // text += \"END\\r\\n\";\n      text += \"PRINT\\r\\n\";\n      __f__(\"log\", text, \" at pages/index/index.vue:206\");\n      var arrayBuffer = plus.android.invoke(text, 'getBytes', 'gbk');\n      //输出文件\n      outputStream.write(arrayBuffer);\n      //清空输出流\n      outputStream.flush();\n    },\n    printBox: function printBox(p, l, w, k, s) {//起点坐标、长高、宽、线宽、显示(上左下右)\n      var text = \"\";\n      if (s.t) {\n        text = text.concat(\"L \", p.x, \" \", p.y, \" \", w, \" \", p.y, \" \", k, \"\\r\\n\");\n      }\n      if (s.l) {\n        text = text.concat(\"L \", p.x, \" \", p.y, \" \", p.x, \" \", p.y + l, \" \", k, \"\\r\\n\");\n      }\n      if (s.b) {\n        text = text.concat(\"L \", p.x, \" \", p.y + l, \" \", w, \" \", p.y + l, \" \", k, \"\\r\\n\");\n      }\n      if (s.r) {\n        text = text.concat(\"L \", w, \" \", p.y + l, \" \", w, \" \", p.y, \" \", k, \"\\r\\n\");\n      }\n      return text;\n    },\n    cutLine: function cutLine(p, str) {\n      var r = \"\";\n      var max = 18;\n      var n = parseInt(str.length / max);\n      for (var i = 0; i < n; i++) {\n        var temp = str.substr(i * max, max);\n        r += \"T 3 0 \" + p.x + \" \" + (p.y + 40 * i) + \" \" + temp + \"\\r\\n\";\n      }\n      var w = str.substr(n * max);\n      r += \"T 3 0 \" + p.x + \" \" + (p.y + 40 * n) + \" \" + w + \"\\r\\n\";\n      return r;\n    },\n    printLineList: function printLineList(p, list) {\n      var r = \"\";\n      for (var i = 0; i < list.length && i < 5; i++) {\n        r += \"T 3 0 \" + p.x + \" \" + (p.y + 40 * i) + \" \" + list[i] + \"\\r\\n\";\n      }\n      return r;\n    },\n    printLineList2: function printLineList2(p, list) {\n      var r = \"\";\n      for (var i = 0; i < list.length && i < 10; i = i + 2) {\n        r += \"T 3 0 \" + p.x + \" \" + (p.y + 60 * i) + \" \" + list[i] + \"\\r\\n\";\n        if (i + 1 < list.length) {\n          r += \"T 3 0 \" + (p.x + 150) + \" \" + (p.y + 60 * i) + \" \" + list[i + 1] + \"\\r\\n\";\n        }\n      }\n      return r;\n    },\n    mySleep: function () {var _mySleep = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(time) {return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return (\n                  this.mypromise(time));case 2:case \"end\":return _context.stop();}}}, _callee, this);}));function mySleep(_x) {return _mySleep.apply(this, arguments);}return mySleep;}(),\n\n    mypromise: function mypromise(time) {\n      return new Promise(function (resolve) {return setTimeout(resolve, time);});\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 7)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvaW5kZXgudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBO0FBQ0EsTUFEQSxrQkFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFEQSxFQURBOztBQUlBLG9CQUpBO0FBS0Esd0JBTEE7QUFNQSwyQkFOQTs7QUFRQSxHQVZBO0FBV0EsUUFYQSxrQkFXQSxDQVhBLEVBV0E7QUFDQTs7OztBQUlBLEdBaEJBO0FBaUJBO0FBQ0EsT0FEQSxpQkFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFEQTs7QUFHQSxLQU5BO0FBT0EsZUFQQSx5QkFPQTtBQUNBO0FBQ0EsS0FUQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQWxCQTtBQW1CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFEQTtBQUVBLGlDQUZBO0FBR0Esa0NBSEE7QUFJQSw2QkFKQTtBQUtBLGVBTEE7O0FBT0E7QUFDQTtBQUNBLEtBN0NBO0FBOENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFEQTtBQUVBLDBCQUZBOztBQUlBO0FBQ0E7QUFDQTtBQUNBLFNBZEEsTUFjQTtBQUNBO0FBQ0EsMkJBREE7QUFFQSx5QkFGQTtBQUdBLDBCQUhBOztBQUtBO0FBQ0E7QUFDQSxLQXRGQTtBQXVGQTtBQUNBO0FBQ0EsMENBRkEsQ0FFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0F4Q0EsQ0F3Q0E7QUFDQTtBQUNBO0FBQ0EsdUNBM0NBLENBMkNBOztBQUVBO0FBQ0EsdUNBOUNBLENBOENBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQTlLQTtBQStLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQTlMQTtBQStMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0ExTUE7QUEyTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FqTkE7QUFrTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0EzTkE7QUE0TkE7QUFDQSxzQ0FEQSxtSkE1TkE7O0FBK05BO0FBQ0E7QUFDQSxLQWpPQSxFQWpCQSxFIiwiZmlsZSI6IjYuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG5cdDx2aWV3PlxuXHRcdDx2aWV3IHN0eWxlPVwidGV4dC1hbGlnbjogY2VudGVyO21hcmdpbi1ib3R0b206IDIwcnB4O1wiPlxuXHRcdFx05bey6YWN5a+56JOd54mZ6K6+5aSHXG5cdFx0PC92aWV3PlxuICAgIDx2aWV3IEBjbGljaz1cInN0YXJ0U2VhcmNoXCI+5pCc57Si6JOd54mZPC92aWV3PlxuXHRcdDx2aWV3IHN0eWxlPVwidGV4dC1hbGlnbjogY2VudGVyO3BhZGRpbmc6IDEwcnB4IDA7Ym9yZGVyOiAxcnB4IHNvbGlkICMyQjg1RTQ7Ym9yZGVyLXJhZGl1czogMTVycHg7XCIgY2xhc3M9XCJ1bmktZmxleCB1bmktcm93XCIgdi1mb3I9XCIoZGV2aWNlLGluZGV4KSBpbiBkZXZpY2VMaXN0XCIgOmtleT1cImluZGV4XCI+XG5cdFx0XHQ8dmlldyBzdHlsZT1cIndpZHRoOiAzMHJweDtcIj57e2luZGV4KzF9fTwvdmlldz5cblx0XHRcdDx2aWV3IHN0eWxlPVwid2lkdGg6IDE4MHJweDtcIj57e2RldmljZS5uYW1lfX08L3ZpZXc+XG5cdFx0XHQ8dmlldyBzdHlsZT1cIndpZHRoOiAzMTBycHg7XCI+e3tkZXZpY2UuYWRkcmVzc319PC92aWV3PlxuICAgICAgPCEtLSAgLS0+XG5cdFx0XHQ8dmlldyBjbGFzcz1cImZsZXgtaXRlbVwiPjxidXR0b24gdHlwZT1cInByaW1hcnlcIiBwbGFpbiBzaXplPVwibWluaVwiIEBjbGljaz1cInByaW50U29tZXRoaW5nKGRldmljZSxwcmludFRlc3QpXCI+6L+e5o6l6JOd54mZPC9idXR0b24+PC92aWV3PlxuXHRcdDwvdmlldz5cbiAgICA8dmlldyBAY2xpY2s9XCJwcmludFRlc3Qob3V0cHV0U3RyZWFtKVwiIHN0eWxlPVwibWFyZ2luLXRvcDoyMHB4XCI+5omT5Y2wPC92aWV3PlxuICAgIDx2aWV3IEBjbGljaz1cImFkZFwiIHN0eWxlPVwibWFyZ2luLXRvcDoyMHB4XCI+5rWL6K+V6JOd54mZPC92aWV3PlxuXHQ8L3ZpZXc+XG5cdFxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblx0ZXhwb3J0IGRlZmF1bHQge1xuXHRcdGRhdGEoKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRzaG93OiB7XG5cdFx0XHRcdFx0c2V0dGluZzogZmFsc2Vcblx0XHRcdFx0fSxcblx0XHRcdFx0ZGV2aWNlTGlzdDogW10sXG4gICAgICAgIG91dHB1dFN0cmVhbTpudWxsLFxuICAgICAgICBibHVldG9vdGhTb2NrZXQ6bnVsbFxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0b25Mb2FkKHApIHtcblx0XHRcdHZhciB0aGF0ID0gdGhpcztcblx0XHRcdC8vICNpZmRlZiBBUFAtUExVU1xuXHRcdFx0XG5cdFx0XHQvLyAjZW5kaWZcblx0XHR9LFxuXHRcdG1ldGhvZHM6IHtcbiAgICAgIGFkZCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLScpO1xuICAgICAgICB1bmkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdXJsOiAnLi4vYWRkL2luZGV4J1xuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBzdGFydFNlYXJjaCgpIHtcbiAgICAgICAgdGhpcy5pbml0UHJpbnRlcigpO1xuICAgICAgfSxcblx0XHRcdHNob3dQcmludGVyTGlzdDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHZhciB0aGF0ID0gdGhpcztcblx0XHRcdFx0dGhhdC5zaG93LnNldHRpbmcgPSB0cnVlO1xuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoYXQuZGV2aWNlTGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGlmICh0aGF0LmRldmljZUxpc3RbaV0ubmFtZSA9PSB0aGF0LmRldmljZS5uYW1lKSB7XG5cdFx0XHRcdFx0XHR0aGF0LmRldmljZUxpc3RbaV0uY2hlY2tlZCA9IHRydWVcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0sXG4gICAgICAvL+aQnOe0ouiTneeJmVxuXHRcdFx0aW5pdFByaW50ZXI6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR2YXIgdGhhdCA9IHRoaXM7XG5cdFx0XHRcdHRoYXQuZGV2aWNlTGlzdCA9IFtdO1xuXHRcdFx0XHR2YXIgbWFpbiA9IHBsdXMuYW5kcm9pZC5ydW50aW1lTWFpbkFjdGl2aXR5KCk7XG5cdFx0XHRcdHZhciBDb250ZXh0ID0gcGx1cy5hbmRyb2lkLmltcG9ydENsYXNzKFwiYW5kcm9pZC5jb250ZW50LkNvbnRleHRcIik7XG5cdFx0XHRcdHZhciBCTWFuYWdlciA9IG1haW4uZ2V0U3lzdGVtU2VydmljZShDb250ZXh0LkJMVUVUT09USF9TRVJWSUNFKTtcblx0XHRcdFx0cGx1cy5hbmRyb2lkLmltcG9ydENsYXNzKEJNYW5hZ2VyKTsgXG5cdFx0XHRcdHZhciBCQWRhcHRlciA9IEJNYW5hZ2VyLmdldEFkYXB0ZXIoKTtcblx0XHRcdFx0cGx1cy5hbmRyb2lkLmltcG9ydENsYXNzKEJBZGFwdGVyKTsgXG5cdFx0XHRcdHZhciBsaXN0cyA9IEJBZGFwdGVyLmdldEJvbmRlZERldmljZXMoKTtcblx0XHRcdFx0cGx1cy5hbmRyb2lkLmltcG9ydENsYXNzKGxpc3RzKTtcblx0XHRcdFx0dmFyIGl0ZXJhdG9yID0gbGlzdHMuaXRlcmF0b3IoKTtcblx0XHRcdFx0cGx1cy5hbmRyb2lkLmltcG9ydENsYXNzKGl0ZXJhdG9yKTtcblx0XHRcdFx0d2hpbGUgKGl0ZXJhdG9yLmhhc05leHQoKSkge1xuXHRcdFx0XHRcdHZhciBkID0gaXRlcmF0b3IubmV4dCgpO1xuXHRcdFx0XHRcdHBsdXMuYW5kcm9pZC5pbXBvcnRDbGFzcyhkKTtcblx0XHRcdFx0XHR2YXIgdGVtcCA9IHtcblx0XHRcdFx0XHRcdG5hbWU6IGQuZ2V0TmFtZSgpLFxuXHRcdFx0XHRcdFx0YWRkcmVzczogZC5nZXRBZGRyZXNzKCksXG5cdFx0XHRcdFx0XHRzdGF0dXM6IGQuZ2V0Qm9uZFN0YXRlKCksXG5cdFx0XHRcdFx0XHR1dWlkczogZC5nZXRVdWlkcygpLFxuXHRcdFx0XHRcdFx0b3A6IGRcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdHRoYXQuZGV2aWNlTGlzdC5wdXNoKHRlbXApO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0cHJpbnRTb21ldGhpbmc6IGZ1bmN0aW9uKGRldixzYikge1xuXHRcdFx0XHR2YXIgdGhhdCA9IHRoaXM7XG5cdFx0XHRcdHZhciBtYWluID0gcGx1cy5hbmRyb2lkLnJ1bnRpbWVNYWluQWN0aXZpdHkoKTtcbiAgICAgICAgLy/ok53niZnpgILphY3lmahcblx0XHRcdFx0dmFyIEJsdWV0b290aEFkYXB0ZXIgPSBwbHVzLmFuZHJvaWQuaW1wb3J0Q2xhc3MoXCJhbmRyb2lkLmJsdWV0b290aC5CbHVldG9vdGhBZGFwdGVyXCIpO1xuXHRcdFx0XHR2YXIgVVVJRCA9IHBsdXMuYW5kcm9pZC5pbXBvcnRDbGFzcyhcImphdmEudXRpbC5VVUlEXCIpO1xuXHRcdFx0XHR2YXIgdXVpZCA9IFVVSUQuZnJvbVN0cmluZyhcIjAwMDAxMTAxLTAwMDAtMTAwMC04MDAwLTAwODA1RjlCMzRGQlwiKTtcbiAgICAgICAgLy/ok53niZnmnKzlnLDpgILphY3lmahcblx0XHRcdFx0dmFyIEJBZGFwdGVyID0gQmx1ZXRvb3RoQWRhcHRlci5nZXREZWZhdWx0QWRhcHRlcigpO1xuICAgICAgICBjb25zb2xlLmxvZyhkZXYsJy0tLS0nKTtcblx0XHRcdFx0dmFyIGRldmljZSA9IEJBZGFwdGVyLmdldFJlbW90ZURldmljZShkZXYuYWRkcmVzcyk7XG5cdFx0XHRcdHBsdXMuYW5kcm9pZC5pbXBvcnRDbGFzcyhkZXZpY2UpO1xuICAgICAgICAvL+iTneeJmei/nuaOpVxuXHRcdFx0XHR0aGlzLmJsdWV0b290aFNvY2tldCA9IGRldmljZS5jcmVhdGVJbnNlY3VyZVJmY29tbVNvY2tldFRvU2VydmljZVJlY29yZCh1dWlkKTtcblx0XHRcdFx0cGx1cy5hbmRyb2lkLmltcG9ydENsYXNzKHRoaXMuYmx1ZXRvb3RoU29ja2V0KTtcblx0XHRcdFx0Y29uc29sZS5sb2coXCLlvIDlp4vov57mjqXmiZPljbDmnLo6XCIrZGV2Lm5hbWUpO1xuXHRcdFx0XHRpZiAoIXRoaXMuYmx1ZXRvb3RoU29ja2V0LmlzQ29ubmVjdGVkKCkpIHtcblx0XHRcdFx0XHR0aGlzLmJsdWV0b290aFNvY2tldC5jb25uZWN0KCk7XG5cdFx0XHRcdFx0aWYgKHRoaXMuYmx1ZXRvb3RoU29ja2V0LmlzQ29ubmVjdGVkKCkpIHtcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwi6K6+5aSH5bey6L+e5o6lLOW8gOWni+WPkemAgeaJk+WNsOaWh+S7tlwiKTtcblx0XHRcdFx0XHRcdHRoaXMub3V0cHV0U3RyZWFtID0gdGhpcy5ibHVldG9vdGhTb2NrZXQuZ2V0T3V0cHV0U3RyZWFtKCk7XG5cdFx0XHRcdFx0XHRwbHVzLmFuZHJvaWQuaW1wb3J0Q2xhc3ModGhpcy5vdXRwdXRTdHJlYW0pO1xuXHRcdFx0XHRcdFx0Ly8gc2IodGhpcy5vdXRwdXRTdHJlYW0pO1xuICAgICAgICAgICAgLy8g5YWz6Zet6JOd54mZ6L+e5o6lXG5cdFx0XHRcdFx0XHQvLyB0aGlzLmJsdWV0b290aFNvY2tldC5jbG9zZSgpO1xuICAgICAgICAgICAgdW5pLnNob3dUb2FzdCh7XG5cdFx0XHRcdFx0XHQgICAgdGl0bGU6ICforr7lpIfov57mjqXmiJDlip8nLFxuXHRcdFx0XHRcdFx0ICAgIGR1cmF0aW9uOiAyMDAwXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdGlmICghdGhpcy5ibHVldG9vdGhTb2NrZXQuaXNDb25uZWN0ZWQoKSkge1xuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIuiuvuWkh+W3suWFs+mXrVwiKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XG5cdFx0XHRcdFx0XHQgICAgdGl0bGU6ICforr7lpIfov57mjqXlpLHotKUnLFxuXHRcdFx0XHRcdFx0XHRpY29uOidlcnJvcicsXG5cdFx0XHRcdFx0XHQgICAgZHVyYXRpb246IDIwMDBcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdHByaW50VGVzdDogZnVuY3Rpb24ob3V0cHV0U3RyZWFtKSB7XG5cdFx0XHRcdHZhciB0aGF0ID0gdGhpcztcblx0XHRcdFx0dmFyIHRleHQgPSBcIiEgMCAyMDAgMjAwIDEwMDAgMVxcclxcblwiOyAvLyAxMDAwIOmZkOWItumrmOW6plxuICAgICAgICAvL+aJk+WNsOaWh+WtlzogIFQgMyjlrZfkvZPnvJblj7cpIDHvvIjlrZfkvZPlpKflsI/vvIkgMzAw77yIeOi9tOS9jee9ru+8iSAxNjDvvIh56L205L2N572u77yJIDE1ODg4ODg4ODjvvIjmiZPljbDlhoXlrrnvvIlcXHJcXG4gXG5cdFx0XHRcdC8v5LiA57u056CBXG5cdFx0XHRcdHRleHQgKz0gXCJCVCBPRkZcXHJcXG5cIjtcbiAgICAgICAgLy/miZPljbDmnaHlvaLnoIE6IEIgMTI4KHR5cGXnsbvlnospIDHvvIjlrr3luqbngrnmlbDvvIkgMe+8iOeqhOWuveavlOS+i++8iSA4MO+8iOmrmOW6pu+8iSAw77yIeOi9tOS9jee9ru+8iSA1MO+8iHnovbTkvY3nva7vvIkgU0Y3NDQ0NDM1MDg4ODg477yI5omr56CB5YaF5a6577yJXG5cdFx0XHRcdHRleHQgKz0gXCJCIDEyOCAxIDEgODAgMCA1MCBTRjc0NDQ0MzUwODg4ODhcXHJcXG5cIjtcblx0XHRcdFx0XG5cdFx0XHRcdC8v5Y2V5Y+3XG4gICAgICAgIHRleHQgKz0gXCJTRVRCT0xEIDFcXHJcXG5cIjtcblx0XHRcdFx0dGV4dCArPSBcIlQgMyAwIDAgMTMwIFNGNzQ0NDQzNTA4ODg4OFxcclxcblwiO1xuICAgICAgICB0ZXh0ICs9IFwiU0VUQk9MRCAwXFxyXFxuXCI7XG4gICAgICAgIC8v5omT5Y2w57q/5p2hXG4gICAgICAgIC8v5qiq57q/IHnovbTopoHkv53mjIHkuIDoh7Q6IEwgMTDvvIjotbfngrnlvIDlp4vliJLnur946L2077yJIDEyMO+8iOi1t+eCueW8gOWni+WIkue6v3novbTvvIkgNTYwKOe7k+adn+WIkue6v3jovbQg5Y+v5Lul55CG6Kej5Li657q/6ZW/KSAxMjDvvIjnu5PmnZ/liJLnur956L2077yJIDJcblx0XHRcdFx0dGV4dCArPSBcIkwgMTAgMTUwIDU2MCAxNTAgMlxcclxcblwiO1xuICAgICAgICAvLy0tLS0tLS0tLS0tLS0g5pS25Lu25L+h5oGvIC0tLS0tLS0tLS0tLS1cbiAgICAgICAgLy/liqDnspdcbiAgICAgICAgdGV4dCArPSBcIlNFVEJPTEQgMVxcclxcblwiO1xuICAgICAgICB0ZXh0ICs9IFwiVCAzIDEgMzAgMTcwIOaUtlxcclxcblwiO1xuICAgICAgICAvLyDlj5bmtojliqDnspdcbiAgICAgICAgdGV4dCArPSBcIlNFVEJPTEQgMFxcclxcblwiO1xuICAgICAgICB0ZXh0ICs9IFwiVCAzIDEgNzAgMTcwIOaHguiwg+W6plxcclxcblwiO1xuICAgICAgICB0ZXh0ICs9IFwiVCAzIDEgMTYwIDE3MCDpoobpgIFcXHJcXG5cIjtcbiAgICAgICAgdGV4dCArPSBcIlQgMyAxIDMwMCAxNzAgMTU4ODg4ODg4OFxcclxcblwiO1xuICAgICAgICB0ZXh0ICs9IFwiVCAzIDEgNzAgMjQwIOWMl+S6rOW4guacnemYs+WMuuW7uuWbvei3rzE15Y+3MeWPt+mZolxcclxcblwiO1xuICAgICAgICB0ZXh0ICs9IFwiTCAxMCAyODAgNTYwIDI4MCAyXFxyXFxuXCI7XG4gICAgICAgIC8vLS0tLS0tLS0tLS0tLSDlr4Tku7bkv6Hmga8gLS0tLS0tLS0tLS0tLVxuICAgICAgICAvL+WKoOeyl1xuICAgICAgICB0ZXh0ICs9IFwiU0VUQk9MRCAxXFxyXFxuXCI7XG4gICAgICAgIHRleHQgKz0gXCJUIDMgMSAzMCAzMDAg5a+EXFxyXFxuXCI7XG4gICAgICAgIC8vIOWPlua2iOWKoOeyl1xuICAgICAgICB0ZXh0ICs9IFwiU0VUQk9MRCAwXFxyXFxuXCI7XG4gICAgICAgIHRleHQgKz0gXCJUIDMgMSA3MCAzMDAg5bCP5pu+XFxyXFxuXCI7XG4gICAgICAgIHRleHQgKz0gXCJUIDMgMSAxNjAgMzAwIOmihumAgVxcclxcblwiO1xuICAgICAgICB0ZXh0ICs9IFwiVCAzIDEgNzAgMzMwIOa3seWcs+W4guWuneWuieWMuuilv+S5oemVh+WbuuaIjVxcclxcblwiO1xuICAgICAgICB0ZXh0ICs9IFwiTCAxMCAzNjAgNTYwIDM2MCAyXFxyXFxuXCI7XG4gICAgICAgIC8vLS0tLS0tLS0tLS0tLSDmlLbmrL7kv6Hmga8gLS0tLS0tLS0tLS0tLVxuICAgICAgICB0ZXh0ICs9IFwiVCAzIDEgMzAgMzcwIOaUtuasvjoyMOWFg1xcclxcblwiO1xuICAgICAgICAvL+eUu+erlue6vyB46L206KaB5L+d5oyB5LiA6Ie0XG4gICAgICAgIHRleHQgKz0gXCJMIDE2MCAzNjAgMTYwIDQ0MCAyXFxyXFxuXCI7IC8v5pS25qy+56uW57q/XG4gICAgICAgIHRleHQgKz0gXCJUIDMgMSAyMDAgMzcwIOacjeWKoTrpoobpgIFcXHJcXG5cIjtcbiAgICAgICAgdGV4dCArPSBcIlQgMyAxIDIwMCA0MDAg562+5pS25Lq6OumihumAgVxcclxcblwiO1xuICAgICAgICB0ZXh0ICs9IFwiTCAxMCA0NDAgNDAwIDQ0MCAyXFxyXFxuXCI7ICAvLyDmqKrnur9cblxuICAgICAgICB0ZXh0ICs9IFwiVCAzIDEgMzAgNDYwIOaJmOWvhOeJqTo5XFxyXFxuXCI7XG4gICAgICAgIHRleHQgKz0gXCJMIDEwIDQ4MCA0MDAgNDgwIDJcXHJcXG5cIjsgLy8g5qiq57q/XG5cbiAgICAgICAgdGV4dCArPSBcIlQgMyAxIDMwIDUwMCDlm57ljZU65ZCmOjlcXHJcXG5cIjtcbiAgICAgICAgLy/mnI3liqEv562+5pS25Lq656uW57q/XG4gICAgICAgIHRleHQgKz0gXCJMIDQwMCAzNjAgNDAwIDUyMCAyXFxyXFxuXCI7XG4gICAgICAgIC8vIOaoque6v1xuICAgICAgICB0ZXh0ICs9IFwiTCAxMCA1MjAgNTYwIDUyMCAyXFxyXFxuXCI7XG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS3lj7Pkvqfkv6Hmga8gLS0tLS0tLS1cbiAgICAgICAgdGV4dCArPSBcIlQgMyAxIDQyMCAzOTAgQzU1MDEvMVxcclxcblwiO1xuICAgICAgICB0ZXh0ICs9IFwiVCAzIDEgNDIwIDQ2MCDph43ph4/vvJoyXFxyXFxuXCI7XG4gICAgICAgIHRleHQgKz0gXCJUIDMgMSA0MjAgNTAwIOaJk+WNsDpcXHJcXG5cIjtcbiAgICAgICAgdGV4dCArPSBcIlQgMyAyIDQ4MCA1MDAgMjAyMi0wNS0yMFxcclxcblwiO1xuICAgICAgICB0ZXh0ICs9IFwiVCAzIDEgMTAgNTQwIOWkh+azqDrmorXokoLlhojlnLDmlrnkuKrmorXokoLlhojmorXmgaLlpI1cXHJcXG5cIjtcbiAgICAgICAgLy/miZPljbDkuoznu7TnoIFcbiAgICAgICAgdGV4dCArPSBcIkIgUVIgMTAgNTYwIE0gMiBVIDVcXHJcXG5cIjtcblx0XHRcdFx0dGV4dCArPSBcIk1BLFFSIE1NTT17J2sxJzonMDIzV0EnLCdrMic6JzAyM0NBJywnazMnOicwMDUnLCdrNCc6J1Q0JywnazUnOidTRjc0NDQ0MzUwODg4ODgnLCdrNic6JycsJ2s3JzonNTFiYTUzNjMnfVxcclxcblwiO1xuXHRcdFx0XHR0ZXh0ICs9IFwiRU5EUVJcXHJcXG5cIjtcbiAgICAgICAgXG4gICAgICAgIC8vIOaJk+WNsOawtOWNsFxuICAgICAgICB0ZXh0ICs9IFwiQ0VOVEVSXFxyXFxuXCJcbiAgICAgICAgdGV4dCArPSBcIkJBQ0tHUk9VTkQgMTEwXFxyXFxuXCJcbiAgICAgICAgdGV4dCArPSBcIlNFVE1BRyAyIDJcXHJcXG5cIlxuICAgICAgICB0ZXh0ICs9IFwiQktUIDI0IDAgMjAwIDU2MCDlt7LpqozmlLZcXHJcXG5cIlxuICAgICAgICB0ZXh0ICs9IFwiQkFDS0dST1VORCAwXFxyXFxuXCJcblxuICAgICAgICAvLyDlj43nmb3nur/mrrVcbiAgICAgICAgdGV4dCArPSBcIkNFTlRFUlxcclxcblwiXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlj43nmb3nur/mrrXms6jmhI8gPT5UTDpJTCAyMDDvvIh4MOWni+eCue+8iSA2MDDvvIh5MOerlui1t+eCue+8iSAzNTDvvIh4Mee7iOeCue+8iSA2MDDvvIh5Meerlue7iOeCue+8iSA0Ne+8iOe6v+Wuve+8iVxcclxcblxuICAgICAgICAgKi8gXG4gICAgICAgIHRleHQgKz0gXCJUIDMgMCAxNjAgNjAwIFNBVkVcXHJcXG5cIlxuICAgICAgICB0ZXh0ICs9ICdJTCAyMDAgNjAwIDM1MCA2MDAgNDVcXHJcXG4nXG5cblx0XHRcdFx0Ly8gdGV4dCArPSBcIkVORFxcclxcblwiO1xuXHRcdFx0XHR0ZXh0ICs9IFwiUFJJTlRcXHJcXG5cIlxuXHRcdFx0XHRjb25zb2xlLmxvZyh0ZXh0KVxuXHRcdFx0XHR2YXIgYXJyYXlCdWZmZXIgPSBwbHVzLmFuZHJvaWQuaW52b2tlKHRleHQsICdnZXRCeXRlcycsICdnYmsnKTtcbiAgICAgICAgLy/ovpPlh7rmlofku7Zcblx0XHRcdFx0b3V0cHV0U3RyZWFtLndyaXRlKGFycmF5QnVmZmVyKTtcbiAgICAgICAgLy/muIXnqbrovpPlh7rmtYFcblx0XHRcdFx0b3V0cHV0U3RyZWFtLmZsdXNoKCk7XG5cdFx0XHR9LFxuXHRcdFx0cHJpbnRCb3g6IGZ1bmN0aW9uKHAsIGwsIHcsIGssIHMpIHsgLy/otbfngrnlnZDmoIfjgIHplb/pq5jjgIHlrr3jgIHnur/lrr3jgIHmmL7npLoo5LiK5bem5LiL5Y+zKVxuXHRcdFx0XHR2YXIgdGV4dCA9IFwiXCI7XG5cdFx0XHRcdGlmIChzLnQpIHtcblx0XHRcdFx0XHR0ZXh0ID0gdGV4dC5jb25jYXQoXCJMIFwiLCBwLngsIFwiIFwiLCBwLnksIFwiIFwiLCB3LCBcIiBcIiwgcC55LCBcIiBcIiwgaywgXCJcXHJcXG5cIik7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHMubCkge1xuXHRcdFx0XHRcdHRleHQgPSB0ZXh0LmNvbmNhdChcIkwgXCIsIHAueCwgXCIgXCIsIHAueSwgXCIgXCIsIHAueCwgXCIgXCIsIHAueStsLCBcIiBcIiwgaywgXCJcXHJcXG5cIik7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHMuYikge1xuXHRcdFx0XHRcdHRleHQgPSB0ZXh0LmNvbmNhdChcIkwgXCIsIHAueCwgXCIgXCIsIHAueStsLCBcIiBcIiwgdywgXCIgXCIsIHAueStsLCBcIiBcIiwgaywgXCJcXHJcXG5cIik7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHMucikge1xuXHRcdFx0XHRcdHRleHQgPSB0ZXh0LmNvbmNhdChcIkwgXCIsIHcsIFwiIFwiLCBwLnkrbCwgXCIgXCIsIHcsIFwiIFwiLCBwLnksIFwiIFwiLCBrLCBcIlxcclxcblwiKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gdGV4dDtcblx0XHRcdH0sXG5cdFx0XHRjdXRMaW5lOiBmdW5jdGlvbihwLCBzdHIpIHtcblx0XHRcdFx0dmFyIHIgPSBcIlwiO1xuXHRcdFx0XHR2YXIgbWF4ID0gMTg7XG5cdFx0XHRcdHZhciBuID0gcGFyc2VJbnQoc3RyLmxlbmd0aCAvIG1heCk7XG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbjsgaSsrKSB7XG5cdFx0XHRcdFx0dmFyIHRlbXAgPSBzdHIuc3Vic3RyKGkgKiBtYXgsIG1heCk7XG5cdFx0XHRcdFx0ciArPSBcIlQgMyAwIFwiICsgcC54ICsgXCIgXCIgKyAocC55ICsgNDAgKiBpKSArIFwiIFwiICsgdGVtcCArIFwiXFxyXFxuXCJcblx0XHRcdFx0fVxuXHRcdFx0XHR2YXIgdyA9IHN0ci5zdWJzdHIobiAqIG1heCk7XG5cdFx0XHRcdHIgKz0gXCJUIDMgMCBcIiArIHAueCArIFwiIFwiICsgKHAueSArIDQwICogbikgKyBcIiBcIiArIHcgKyBcIlxcclxcblwiO1xuXHRcdFx0XHRyZXR1cm4gcjtcblx0XHRcdH0sXG5cdFx0XHRwcmludExpbmVMaXN0OiBmdW5jdGlvbihwLCBsaXN0KSB7XG5cdFx0XHRcdHZhciByID0gXCJcIjtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aCYmaTw1OyBpKyspIHtcblx0XHRcdFx0XHRyICs9IFwiVCAzIDAgXCIgKyBwLnggKyBcIiBcIiArIChwLnkgKyA0MCAqIGkpICsgXCIgXCIgKyBsaXN0W2ldICsgXCJcXHJcXG5cIlxuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiByO1xuXHRcdFx0fSxcblx0XHRcdHByaW50TGluZUxpc3QyOiBmdW5jdGlvbihwLCBsaXN0KSB7XG5cdFx0XHRcdHZhciByID0gXCJcIjtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aCYmaTwxMDsgaT1pKzIpIHtcblx0XHRcdFx0XHRyICs9IFwiVCAzIDAgXCIgKyBwLnggKyBcIiBcIiArIChwLnkgKyA2MCAqIGkpICsgXCIgXCIgKyBsaXN0W2ldICsgXCJcXHJcXG5cIjtcblx0XHRcdFx0XHRpZigoaSsxKTxsaXN0Lmxlbmd0aCl7XG5cdFx0XHRcdFx0XHRyICs9IFwiVCAzIDAgXCIgKyAocC54KzE1MCkgKyBcIiBcIiArIChwLnkgKyA2MCAqIGkpICsgXCIgXCIgKyBsaXN0W2krMV0gKyBcIlxcclxcblwiO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gcjtcblx0XHRcdH0sXG5cdFx0XHRteVNsZWVwOmFzeW5jIGZ1bmN0aW9uKHRpbWUpe1xuXHRcdFx0XHRhd2FpdCB0aGlzLm15cHJvbWlzZSh0aW1lKTtcblx0XHRcdH0sXG5cdFx0XHRteXByb21pc2U6ZnVuY3Rpb24odGltZSl7XG5cdFx0XHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCB0aW1lKSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cblx0cGFnZXtcblx0XHRwYWRkaW5nOiAwO1xuXHRcdG1hcmdpbjogMDtcblx0fVxuXHQucGlja2VkIHtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiBsYXZlbmRlcjtcblx0fVxuPC9zdHlsZT5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///6\n");

/***/ }),
/* 7 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! exports provided: log, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatLog; });
function typof (v) {
  var s = Object.prototype.toString.call(v)
  return s.substring(8, s.length - 1)
}

function isDebugMode () {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__
}

function jsonStringifyReplacer (k, p) {
  switch (typof(p)) {
    case 'Function':
      return 'function() { [native code] }'
    default :
      return p
  }
}

function log (type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key]
  }
  console[type].apply(console, args)
}

function formatLog () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key]
  }
  var type = args.shift()
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'))
    return console[type].apply(console, args)
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase()

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v, jsonStringifyReplacer) + '---END:JSON---'
      } catch (e) {
        v = type
      }
    } else {
      if (v === null) {
        v = '---NULL---'
      } else if (v === undefined) {
        v = '---UNDEFINED---'
      } else {
        var vType = typof(v).toUpperCase()

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---'
        } else {
          v = String(v)
        }
      }
    }

    return v
  })
  var msg = ''

  if (msgs.length > 1) {
    var lastMsg = msgs.pop()
    msg = msgs.join('---COMMA---')

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg
    } else {
      msg += '---COMMA---' + lastMsg
    }
  } else {
    msg = msgs[0]
  }

  console[type](msg)
}


/***/ }),
/* 8 */
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ 9);

/***/ }),
/* 9 */
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ 10);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 10 */
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),
/* 11 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 12 */
/*!**************************************************************************************!*\
  !*** C:/Users/EDY/Desktop/demo/litchi-print_v12.0.1/pages/add/index.vue?mpType=page ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_vue_vue_type_template_id_20d7f88b_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=20d7f88b&mpType=page */ 13);\n/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 15);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 11);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_vue_vue_type_template_id_20d7f88b_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_vue_vue_type_template_id_20d7f88b_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _index_vue_vue_type_template_id_20d7f88b_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/add/index.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkg7QUFDN0g7QUFDb0U7QUFDTDs7O0FBRy9EO0FBQzRMO0FBQzVMLGdCQUFnQixvTUFBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSwyRkFBTTtBQUNSLEVBQUUsb0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMTIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yMGQ3Zjg4YiZtcFR5cGU9cGFnZVwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFFOlxcXFxoYnVpbGRlclgzLjEuOFxcXFwzLjEuOFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL2FkZC9pbmRleC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///12\n");

/***/ }),
/* 13 */
/*!********************************************************************************************************************!*\
  !*** C:/Users/EDY/Desktop/demo/litchi-print_v12.0.1/pages/add/index.vue?vue&type=template&id=20d7f88b&mpType=page ***!
  \********************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_20d7f88b_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=20d7f88b&mpType=page */ 14);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_20d7f88b_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_20d7f88b_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_20d7f88b_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_20d7f88b_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 14 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/EDY/Desktop/demo/litchi-print_v12.0.1/pages/add/index.vue?vue&type=template&id=20d7f88b&mpType=page ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("view")
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 15 */
/*!**************************************************************************************************************!*\
  !*** C:/Users/EDY/Desktop/demo/litchi-print_v12.0.1/pages/add/index.vue?vue&type=script&lang=js&mpType=page ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js&mpType=page */ 16);\n/* harmony import */ var _E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVvQixDQUFnQixrcUJBQUcsRUFBQyIsImZpbGUiOiIxNS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRTpcXFxcaGJ1aWxkZXJYMy4xLjhcXFxcMy4xLjhcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcyFFOlxcXFxoYnVpbGRlclgzLjEuOFxcXFwzLjEuOFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNi0xIUU6XFxcXGhidWlsZGVyWDMuMS44XFxcXDMuMS44XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUU6XFxcXGhidWlsZGVyWDMuMS44XFxcXDMuMS44XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUU6XFxcXGhidWlsZGVyWDMuMS44XFxcXDMuMS44XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhRTpcXFxcaGJ1aWxkZXJYMy4xLjhcXFxcMy4xLjhcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTYtMSFFOlxcXFxoYnVpbGRlclgzLjEuOFxcXFwzLjEuOFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLWFwcC1sb2FkZXJcXFxcdXNpbmctY29tcG9uZW50cy5qcyFFOlxcXFxoYnVpbGRlclgzLjEuOFxcXFwzLjEuOFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///15\n");

/***/ }),
/* 16 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/EDY/Desktop/demo/litchi-print_v12.0.1/pages/add/index.vue?vue&type=script&lang=js&mpType=page ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  data: function data() {\n    return {};\n\n\n  } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvYWRkL2luZGV4LnZ1ZSJdLCJuYW1lcyI6WyJkYXRhIl0sIm1hcHBpbmdzIjoid0ZBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2JBLE1BRGEsa0JBQ047QUFDTCxXQUFPLEVBQVA7OztBQUdELEdBTFksRSIsImZpbGUiOiIxNi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcblxyXG4gICAgfVxyXG4gIH0sXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///16\n");

/***/ }),
/* 17 */
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),
/* 18 */
/*!**************************************************************!*\
  !*** C:/Users/EDY/Desktop/demo/litchi-print_v12.0.1/App.vue ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 19);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 11);\nvar render, staticRenderFns, recyclableRender, components\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null,\n  false,\n  components,\n  renderjs\n)\n\ncomponent.options.__file = \"App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUN1RDtBQUNMOzs7QUFHbEQ7QUFDNEw7QUFDNUwsZ0JBQWdCLG9NQUFVO0FBQzFCLEVBQUUseUVBQU07QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNlLGdGIiwiZmlsZSI6IjE4LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhRTpcXFxcaGJ1aWxkZXJYMy4xLjhcXFxcMy4xLjhcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxydW50aW1lXFxcXGNvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJBcHAudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///18\n");

/***/ }),
/* 19 */
/*!***************************************************************************************!*\
  !*** C:/Users/EDY/Desktop/demo/litchi-print_v12.0.1/App.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ 20);\n/* harmony import */ var _E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_hbuilderX3_1_8_3_1_8_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTBuQixDQUFnQixxcEJBQUcsRUFBQyIsImZpbGUiOiIxOS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRTpcXFxcaGJ1aWxkZXJYMy4xLjhcXFxcMy4xLjhcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcyFFOlxcXFxoYnVpbGRlclgzLjEuOFxcXFwzLjEuOFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNi0xIUU6XFxcXGhidWlsZGVyWDMuMS44XFxcXDMuMS44XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUU6XFxcXGhidWlsZGVyWDMuMS44XFxcXDMuMS44XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRTpcXFxcaGJ1aWxkZXJYMy4xLjhcXFxcMy4xLjhcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcyFFOlxcXFxoYnVpbGRlclgzLjEuOFxcXFwzLjEuOFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNi0xIUU6XFxcXGhidWlsZGVyWDMuMS44XFxcXDMuMS44XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUU6XFxcXGhidWlsZGVyWDMuMS44XFxcXDMuMS44XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///19\n");

/***/ }),
/* 20 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/EDY/Desktop/demo/litchi-print_v12.0.1/App.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _default =\n{\n  onLaunch: function onLaunch() {\n    __f__(\"log\", 'App Launch', \" at App.vue:4\");\n  },\n  onShow: function onShow() {\n    __f__(\"log\", 'App Show', \" at App.vue:7\");\n  },\n  onHide: function onHide() {\n    __f__(\"log\", 'App Hide', \" at App.vue:10\");\n  } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 7)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vQXBwLnZ1ZSJdLCJuYW1lcyI6WyJvbkxhdW5jaCIsIm9uU2hvdyIsIm9uSGlkZSJdLCJtYXBwaW5ncyI6IjtBQUNlO0FBQ2RBLFVBQVEsRUFBRSxvQkFBVztBQUNwQixpQkFBWSxZQUFaO0FBQ0EsR0FIYTtBQUlkQyxRQUFNLEVBQUUsa0JBQVc7QUFDbEIsaUJBQVksVUFBWjtBQUNBLEdBTmE7QUFPZEMsUUFBTSxFQUFFLGtCQUFXO0FBQ2xCLGlCQUFZLFVBQVo7QUFDQSxHQVRhLEUiLCJmaWxlIjoiMjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBkZWZhdWx0IHtcblx0b25MYXVuY2g6IGZ1bmN0aW9uKCkge1xuXHRcdGNvbnNvbGUubG9nKCdBcHAgTGF1bmNoJylcblx0fSxcblx0b25TaG93OiBmdW5jdGlvbigpIHtcblx0XHRjb25zb2xlLmxvZygnQXBwIFNob3cnKVxuXHR9LFxuXHRvbkhpZGU6IGZ1bmN0aW9uKCkge1xuXHRcdGNvbnNvbGUubG9nKCdBcHAgSGlkZScpXG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///20\n");

/***/ })
],[[0,"app-config"]]]);