"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/validate";
exports.ids = ["pages/api/validate"];
exports.modules = {

/***/ "./pages/api/validate.jsx":
/*!********************************!*\
  !*** ./pages/api/validate.jsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ validator)\n/* harmony export */ });\n/* harmony import */ var email_deep_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! email-deep-validator */ \"email-deep-validator\");\n/* harmony import */ var email_deep_validator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(email_deep_validator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var is_biz_mail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! is-biz-mail */ \"is-biz-mail\");\n/* harmony import */ var is_biz_mail__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(is_biz_mail__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst emailValidator = new (email_deep_validator__WEBPACK_IMPORTED_MODULE_0___default())();\nasync function validator(req, res) {\n  if (req.method === 'POST') {\n    try {\n      const email = req.query.email;\n      const {\n        wellFormed,\n        validDomain,\n        validMailbox\n      } = await emailValidator.verify(email);\n      const result = is_biz_mail__WEBPACK_IMPORTED_MODULE_1___default().isFreeMailAddress(email);\n\n      if (result) {\n        if (wellFormed, validDomain, validMailbox) {\n          return res.json({\n            SuccessMsg: \"Valid Email 📬\",\n            statusCode: res.statusCode,\n            result: validMailbox\n          });\n        } else if (validMailbox !== null && validMailbox !== false) {\n          return res.json({\n            SuccessMsg: \"Valid Email 📬\",\n            statusCode: res.statusCode,\n            result: validMailbox\n          });\n        } else {\n          return res.json({\n            ErrorMsg: \"Invalid Email 🚫\",\n            result\n          });\n        }\n      }\n\n      return res.json({\n        ErrorMsg: \"Invalid Email Domain 🚫\"\n      });\n    } catch (error) {\n      return res.json({\n        ErrorMsg: error.message\n      });\n    }\n  } else {\n    res.json({\n      Msg: \"Sorry You need to use a POST method!\"\n    });\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvdmFsaWRhdGUuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBLE1BQU1FLGNBQWMsR0FBRyxJQUFJRiw2REFBSixFQUF2QjtBQUVlLGVBQWVHLFNBQWYsQ0FBeUJDLEdBQXpCLEVBQThCQyxHQUE5QixFQUFtQztBQUM5QyxNQUFJRCxHQUFHLENBQUNFLE1BQUosS0FBZSxNQUFuQixFQUEyQjtBQUN2QixRQUFJO0FBRUEsWUFBTUMsS0FBSyxHQUFHSCxHQUFHLENBQUNJLEtBQUosQ0FBVUQsS0FBeEI7QUFFQSxZQUFNO0FBQUVFLFFBQUFBLFVBQUY7QUFBY0MsUUFBQUEsV0FBZDtBQUEyQkMsUUFBQUE7QUFBM0IsVUFBNEMsTUFBTVQsY0FBYyxDQUFDVSxNQUFmLENBQXNCTCxLQUF0QixDQUF4RDtBQUVBLFlBQU1NLE1BQU0sR0FBR1osb0VBQUEsQ0FBNEJNLEtBQTVCLENBQWY7O0FBRUQsVUFBSU0sTUFBSixFQUFXO0FBRVAsWUFBR0osVUFBVSxFQUFFQyxXQUFGLEVBQWVDLFlBQTVCLEVBQXlDO0FBRXhDLGlCQUFPTixHQUFHLENBQUNVLElBQUosQ0FBUztBQUFFQyxZQUFBQSxVQUFVLEVBQUUsZ0JBQWQ7QUFBZ0NDLFlBQUFBLFVBQVUsRUFBRVosR0FBRyxDQUFDWSxVQUFoRDtBQUE0REosWUFBQUEsTUFBTSxFQUFFRjtBQUFwRSxXQUFULENBQVA7QUFFSixTQUpHLE1BSUcsSUFBR0EsWUFBWSxLQUFLLElBQWpCLElBQXlCQSxZQUFZLEtBQUssS0FBN0MsRUFBbUQ7QUFFekQsaUJBQU9OLEdBQUcsQ0FBQ1UsSUFBSixDQUFTO0FBQUVDLFlBQUFBLFVBQVUsRUFBRSxnQkFBZDtBQUFnQ0MsWUFBQUEsVUFBVSxFQUFFWixHQUFHLENBQUNZLFVBQWhEO0FBQTRESixZQUFBQSxNQUFNLEVBQUVGO0FBQXBFLFdBQVQsQ0FBUDtBQUVBLFNBSk0sTUFJQTtBQUNOLGlCQUFPTixHQUFHLENBQUNVLElBQUosQ0FBUztBQUFFRyxZQUFBQSxRQUFRLEVBQUUsa0JBQVo7QUFBZ0NMLFlBQUFBO0FBQWhDLFdBQVQsQ0FBUDtBQUNBO0FBQ0g7O0FBQ0QsYUFBT1IsR0FBRyxDQUFDVSxJQUFKLENBQVM7QUFBQ0csUUFBQUEsUUFBUSxFQUFFO0FBQVgsT0FBVCxDQUFQO0FBRUMsS0F4QkQsQ0F3QkUsT0FBT0MsS0FBUCxFQUFjO0FBRVosYUFBT2QsR0FBRyxDQUFDVSxJQUFKLENBQVM7QUFBRUcsUUFBQUEsUUFBUSxFQUFFQyxLQUFLLENBQUNDO0FBQWxCLE9BQVQsQ0FBUDtBQUNIO0FBQ0osR0E3QkQsTUE2Qk87QUFDSGYsSUFBQUEsR0FBRyxDQUFDVSxJQUFKLENBQVM7QUFBRU0sTUFBQUEsR0FBRyxFQUFFO0FBQVAsS0FBVDtBQUNIO0FBRUoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWVtYWlsLXZhbGlkYXRvci8uL3BhZ2VzL2FwaS92YWxpZGF0ZS5qc3g/NjNhMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRW1haWxWYWxpZGF0b3IgZnJvbSAnZW1haWwtZGVlcC12YWxpZGF0b3InXG5pbXBvcnQgaXNCaXpNYWlsIGZyb20gJ2lzLWJpei1tYWlsJ1xuY29uc3QgZW1haWxWYWxpZGF0b3IgPSBuZXcgRW1haWxWYWxpZGF0b3IoKTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gdmFsaWRhdG9yKHJlcSwgcmVzKSB7XG4gICAgaWYgKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xuICAgICAgICB0cnkge1xuXG4gICAgICAgICAgICBjb25zdCBlbWFpbCA9IHJlcS5xdWVyeS5lbWFpbDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgeyB3ZWxsRm9ybWVkLCB2YWxpZERvbWFpbiwgdmFsaWRNYWlsYm94IH0gPSBhd2FpdCBlbWFpbFZhbGlkYXRvci52ZXJpZnkoZW1haWwpO1xuICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGlzQml6TWFpbC5pc0ZyZWVNYWlsQWRkcmVzcyhlbWFpbCk7XG5cbiAgICAgICAgICAgaWYgKHJlc3VsdCl7IFxuXG4gICAgICAgICAgICAgICBpZih3ZWxsRm9ybWVkLCB2YWxpZERvbWFpbiwgdmFsaWRNYWlsYm94KXtcblxuICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbih7IFN1Y2Nlc3NNc2c6IFwiVmFsaWQgRW1haWwg8J+TrFwiLCBzdGF0dXNDb2RlOiByZXMuc3RhdHVzQ29kZSwgcmVzdWx0OiB2YWxpZE1haWxib3ggfSlcblxuICAgICAgICAgICB9IGVsc2UgaWYodmFsaWRNYWlsYm94ICE9PSBudWxsICYmIHZhbGlkTWFpbGJveCAhPT0gZmFsc2Upe1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKHsgU3VjY2Vzc01zZzogXCJWYWxpZCBFbWFpbCDwn5OsXCIsIHN0YXR1c0NvZGU6IHJlcy5zdGF0dXNDb2RlLCByZXN1bHQ6IHZhbGlkTWFpbGJveCB9KVxuXG4gICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oeyBFcnJvck1zZzogXCJJbnZhbGlkIEVtYWlsIPCfmqtcIiwgcmVzdWx0IH0pXG4gICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzLmpzb24oe0Vycm9yTXNnOiBcIkludmFsaWQgRW1haWwgRG9tYWluIPCfmqtcIn0pXG5cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKHsgRXJyb3JNc2c6IGVycm9yLm1lc3NhZ2UgfSk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICByZXMuanNvbih7IE1zZzogXCJTb3JyeSBZb3UgbmVlZCB0byB1c2UgYSBQT1NUIG1ldGhvZCFcIiB9KVxuICAgIH1cblxufVxuIl0sIm5hbWVzIjpbIkVtYWlsVmFsaWRhdG9yIiwiaXNCaXpNYWlsIiwiZW1haWxWYWxpZGF0b3IiLCJ2YWxpZGF0b3IiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJlbWFpbCIsInF1ZXJ5Iiwid2VsbEZvcm1lZCIsInZhbGlkRG9tYWluIiwidmFsaWRNYWlsYm94IiwidmVyaWZ5IiwicmVzdWx0IiwiaXNGcmVlTWFpbEFkZHJlc3MiLCJqc29uIiwiU3VjY2Vzc01zZyIsInN0YXR1c0NvZGUiLCJFcnJvck1zZyIsImVycm9yIiwibWVzc2FnZSIsIk1zZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/validate.jsx\n");

/***/ }),

/***/ "email-deep-validator":
/*!***************************************!*\
  !*** external "email-deep-validator" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("email-deep-validator");

/***/ }),

/***/ "is-biz-mail":
/*!******************************!*\
  !*** external "is-biz-mail" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("is-biz-mail");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/validate.jsx"));
module.exports = __webpack_exports__;

})();