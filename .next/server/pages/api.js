"use strict";
(() => {
var exports = {};
exports.id = 237;
exports.ids = [237];
exports.modules = {

/***/ 820:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ validator)
/* harmony export */ });
function validator(req, res) {
  res.json({
    Welcome: '*** Email Validation API 📬 ***',
    Usage: 'Send a POST request to the endpoint {/api/validate} with the email address as your query parameter',
    Response: 'Expected responses => SuccessMsg: Valid Email, ErrorMsg: Invalid Email',
    cheers: '🙏🏻 Thank You 🥂'
  });
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(820));
module.exports = __webpack_exports__;

})();