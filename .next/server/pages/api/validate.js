"use strict";
(() => {
var exports = {};
exports.id = 408;
exports.ids = [408];
exports.modules = {

/***/ 815:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Validate)
});

;// CONCATENATED MODULE: external "email-deep-validator"
const external_email_deep_validator_namespaceObject = require("email-deep-validator");
var external_email_deep_validator_default = /*#__PURE__*/__webpack_require__.n(external_email_deep_validator_namespaceObject);
;// CONCATENATED MODULE: external "is-biz-mail"
const external_is_biz_mail_namespaceObject = require("is-biz-mail");
var external_is_biz_mail_default = /*#__PURE__*/__webpack_require__.n(external_is_biz_mail_namespaceObject);
;// CONCATENATED MODULE: ./pages/api/validate.jsx


const emailValidator = new (external_email_deep_validator_default())();
async function Validate(req, res) {
  if (req.method === 'POST') {
    try {
      const email = req.query.email;
      const {
        wellFormed,
        validDomain,
        validMailbox
      } = await emailValidator.verify(email);
      const result = external_is_biz_mail_default().isFreeMailAddress(email);

      if (result) {
        if (wellFormed, validDomain, validMailbox) {
          return res.json({
            SuccessMsg: "Valid Email 📬",
            statusCode: res.statusCode,
            result: validMailbox
          });
        } else if (validMailbox !== null && validMailbox !== false) {
          return res.json({
            SuccessMsg: "Valid Email 📬",
            statusCode: res.statusCode,
            result: validMailbox
          });
        } else {
          return res.json({
            ErrorMsg: "Invalid Email 🚫",
            result
          });
        }
      }

      return res.json({
        ErrorMsg: "Invalid Email Domain 🚫"
      });
    } catch (error) {
      return res.json({
        ErrorMsg: error.message
      });
    }
  } else {
    res.json({
      Msg: "Sorry You need to use a POST method!"
    });
  }
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(815));
module.exports = __webpack_exports__;

})();