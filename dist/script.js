/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_postData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/postData */ "./src/js/services/postData.js");
/* harmony import */ var _modules_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/form */ "./src/js/modules/form.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ "./src/js/modules/modal.js");





document.addEventListener("DOMContentLoaded", () => {
  const reqUrl = "https://jsonplaceholder.typicode.com/todos/1";
  const req = Object(_services_postData__WEBPACK_IMPORTED_MODULE_0__["default"])("GET", reqUrl);
  console.log(req); // .then((data) => console.log(data))
  // .catch((err) => console.log(err));

  Object(_modules_modal__WEBPACK_IMPORTED_MODULE_2__["default"])(".popup_engineer_btn", ".popup_engineer");
  Object(_modules_modal__WEBPACK_IMPORTED_MODULE_2__["default"])(".phone_link", ".popup");
  Object(_modules_form__WEBPACK_IMPORTED_MODULE_1__["default"])(".main_form");
  Object(_modules_form__WEBPACK_IMPORTED_MODULE_1__["default"])(".popup_form");
});

/***/ }),

/***/ "./src/js/modules/form.js":
/*!********************************!*\
  !*** ./src/js/modules/form.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const formCallMe = formSelector => {
  const forms = document.querySelectorAll(formSelector);
  const numbers = /^[0-9]+$/;
  forms.forEach(form => {
    // form.querySelector('[name="user_phone"]').addEventListener("keyup", () => {
    //     console.log(form.querySelector('[name="user_phone"]').value);
    // });
    // console.log(form);
    form.querySelector("button").addEventListener("click", e => {
      e.preventDefault();

      if (!form.userPhone.value.match(numbers)) {
        alert("В полі 'Телефон' треба вводити тільки цифри!!!");
        form.userPhone.value = ""; // form.querySelector('[name="user_phone"]').value = "";

        return false;
      } //get data from form fields and convert to json


      const formData = new FormData(form);
      const json = JSON.stringify(Object.fromEntries(formData.entries())); //HERE MUST BE A POSTDATA FUNCTION WITH AJAX

      console.log(Object.fromEntries(formData.entries()));
      console.log("Data has been posted!");
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (formCallMe);

/***/ }),

/***/ "./src/js/modules/modal.js":
/*!*********************************!*\
  !*** ./src/js/modules/modal.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form */ "./src/js/modules/form.js");
 //MODAL's open&close functions

const openModal = modObj => {
  modObj.classList.remove("hide");
  modObj.classList.add("show");
};

const closeModal = modObj => {
  modObj.classList.remove("show");
  modObj.classList.add("hide");
};

const modal = (modTriggerSelector, modalWindowSelector) => {
  const modTrigger = document.querySelectorAll(modTriggerSelector),
        modalWindow = document.querySelector(modalWindowSelector); //open modal window event

  modTrigger.forEach(item => {
    item.addEventListener("click", e => {
      e.preventDefault();
      openModal(modalWindow);
      Object(_form__WEBPACK_IMPORTED_MODULE_0__["default"])(".main_form.show");
    });
  }); //close modal window event (add "data-close attr to index.html")

  modalWindow.addEventListener("click", e => {
    if (e.target === modalWindow || e.target.parentElement.getAttribute("data-close") == "") {
      closeModal(modalWindow);
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (modal);

/***/ }),

/***/ "./src/js/services/postData.js":
/*!*************************************!*\
  !*** ./src/js/services/postData.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//XHR
// const postData = (reqMethod, reqUrl) => {
//   const request = new XMLHttpRequest();
//   request.open(reqMethod, reqUrl);
//   request.setRequestHeader("Content-type", "application/json; charset=utf-8");
//   request.responseType = "JSON";
//   request.send();
//   request.addEventListener("load", () => {
//     console.log(JSON.parse(request.response));
//   });
// };
const postData = (reqMethod, reqUrl) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(reqMethod, reqUrl);

    xhr.onload = () => {
      if (xhr.status >= 400) {
        reject(xhr.response);
      } else {
        resolve(xhr.response);
      }
    };

    xhr.onerror = () => {
      reject(xhr.response);
    };

    xhr.send();
  });
};

/* harmony default export */ __webpack_exports__["default"] = (postData);

/***/ })

/******/ });
//# sourceMappingURL=script.js.map