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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
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
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/tabs */ "./src/js/modules/tabs.js");
/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/calc */ "./src/js/modules/calc.js");







document.addEventListener("DOMContentLoaded", () => {
  Object(_modules_modal__WEBPACK_IMPORTED_MODULE_2__["default"])(".popup_engineer_btn", ".popup_engineer");
  Object(_modules_modal__WEBPACK_IMPORTED_MODULE_2__["default"])(".phone_link", ".popup");
  Object(_modules_form__WEBPACK_IMPORTED_MODULE_1__["default"])(".main_form");
  Object(_modules_tabs__WEBPACK_IMPORTED_MODULE_3__["default"])();
  Object(_modules_calc__WEBPACK_IMPORTED_MODULE_4__["default"])();
});

/***/ }),

/***/ "./src/js/modules/calc.js":
/*!********************************!*\
  !*** ./src/js/modules/calc.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/helpers */ "./src/js/services/helpers.js");


const showHidePreview = () => {
  const ramaIcons = document.querySelectorAll('.balcon_icons_img'),
        ramaBigImg = document.querySelectorAll('.big_img img');
  ramaBigImg[0].classList.add('show');
  ramaIcons.forEach((icon, idx) => {
    icon.addEventListener('click', () => {
      Object(_services_helpers__WEBPACK_IMPORTED_MODULE_0__["showHideTab"])(ramaBigImg, idx);
      Object(_services_helpers__WEBPACK_IMPORTED_MODULE_0__["removeClassFromAllElements"])(ramaIcons, 'do_image_more');
      icon.classList.add('do_image_more');
    });
  });
};

const calc = () => {
  const popupCalc = document.querySelector(".popup_calc"); //!temp option for dev

  popupCalc.style.display = "block";
  showHidePreview();
};

/* harmony default export */ __webpack_exports__["default"] = (calc);

/***/ }),

/***/ "./src/js/modules/form.js":
/*!********************************!*\
  !*** ./src/js/modules/form.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_postData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/postData */ "./src/js/services/postData.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal */ "./src/js/modules/modal.js");



const formCallMe = function (formSelector) {
  let popupDivSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  const currentForm = document.querySelectorAll(formSelector);
  const numbers = /^[0-9]+$/;
  currentForm.forEach(form => {
    form.querySelector("button").addEventListener("click", function (e) {
      e.preventDefault();

      if (!form.userPhone.value.match(numbers)) {
        alert("В полі 'Телефон' треба вводити тільки цифри!!!");
        form.userPhone.value = "";
        return false;
      } //get data from form fields and convert to json


      const formData = new FormData(form);
      const postObj = Object.fromEntries(formData.entries()),
            spinner = this.querySelector("span"); //SPINNER      

      spinner.classList.remove('submit-spinner_hide');
      this.disabled = true;
      this.style.color = "grey";
      this.style.filter = "grayscale(70%)";
      const reqUrl = "http://localhost:3000/members";
      Object(_services_postData__WEBPACK_IMPORTED_MODULE_0__["default"])(reqUrl, postObj).then(data => {
        console.log(data);
      }).then(() => {
        spinner.classList.add('submit-spinner_hide');
        this.disabled = false;
        this.style.color = "black";
        this.style.filter = "grayscale(0%)";
        form.reset();
        const span = document.createElement("span");
        span.style.color = "green";
        span.textContent = "Информация отправлена!";
        this.parentElement.append(span);
        setTimeout(() => {
          span.remove();
          Object(_modal__WEBPACK_IMPORTED_MODULE_1__["closeModal"])(popupDivSelector);
        }, 2000);
      }).catch(err => console.error(err));
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
/*! exports provided: default, closeModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeModal", function() { return closeModal; });
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
      Object(_form__WEBPACK_IMPORTED_MODULE_0__["default"])(".form_popup", modalWindow);
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

/***/ "./src/js/modules/tabs.js":
/*!********************************!*\
  !*** ./src/js/modules/tabs.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/helpers */ "./src/js/services/helpers.js");


const tabs = () => {
  const tabContent = document.querySelectorAll(".glazing_content"),
        tabBlock = document.querySelectorAll(".glazing_block");
  tabBlock.forEach((block, idx) => {
    block.querySelector("img").style.cursor = "pointer";
    block.addEventListener("click", () => {
      Object(_services_helpers__WEBPACK_IMPORTED_MODULE_0__["showHideTab"])(tabContent, idx);
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (tabs);

/***/ }),

/***/ "./src/js/services/helpers.js":
/*!************************************!*\
  !*** ./src/js/services/helpers.js ***!
  \************************************/
/*! exports provided: showHideTab, removeClassFromAllElements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showHideTab", function() { return showHideTab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeClassFromAllElements", function() { return removeClassFromAllElements; });
const showHideTab = (tabs, index) => {
  tabs.forEach(tab => {
    tab.classList.remove("show");
    tab.classList.add("hide");
  });
  tabs[index].classList.remove("hide");
  tabs[index].classList.add("show");
};

const removeClassFromAllElements = (el, rmClass) => el.forEach(item => item.classList.remove(rmClass));



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
//VAR 2 - Minin ex
// const postData = (reqMethod, reqUrl) => {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open(reqMethod, reqUrl);
//     xhr.onload = () => {
//       if (xhr.status >= 400) {
//         reject(xhr.response);
//       } else {
//         resolve(xhr.response);
//       }
//     };
//     xhr.onerror = () => {
//       reject(xhr.response);
//     };
//     xhr.send();
//   });
// };
//VAR 3 - FETCH
const postData = async function (url) {
  let data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  const postSettings = {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(data)
  };
  const req = await fetch(url, data ? postSettings : null);

  if (!req.ok) {
    throw new Error(`Could not fetch ${url}, receive status ${req.status}`);
  }

  return await req.json();
};

/* harmony default export */ __webpack_exports__["default"] = (postData);

/***/ }),

/***/ "./src/js/slider.js":
/*!**************************!*\
  !*** ./src/js/slider.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  $('.glazing_slider').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 1201,
      settings: {
        slidesToShow: 4,
        prevArrow: '<button class="prev arrow"></button>',
        nextArrow: '<button class="next arrow"></button>',
        slidesToScroll: 1
      }
    }, {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        prevArrow: '<button class="prev arrow"></button>',
        nextArrow: '<button class="next arrow"></button>',
        slidesToScroll: 2
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        prevArrow: '<button class="prev arrow"></button>',
        nextArrow: '<button class="next arrow"></button>',
        slidesToScroll: 2
      }
    }, {
      breakpoint: 530,
      settings: {
        slidesToShow: 1,
        prevArrow: '<button class="prev arrow"></button>',
        nextArrow: '<button class="next arrow"></button>',
        slidesToScroll: 1
      }
    }]
  });
  $('.decoration_slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        prevArrow: '<button class="prev arrow"></button>',
        nextArrow: '<button class="next arrow"></button>',
        slidesToScroll: 1
      }
    }, {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        prevArrow: '<button class="prev arrow"></button>',
        nextArrow: '<button class="next arrow"></button>',
        slidesToScroll: 2
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        prevArrow: '<button class="prev arrow"></button>',
        nextArrow: '<button class="next arrow"></button>',
        slidesToScroll: 1
      }
    }]
  });
});

/***/ }),

/***/ 0:
/*!*************************************************!*\
  !*** multi ./src/js/main.js ./src/js/slider.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! E:\WEBWRK\JS\jsProjBonus\src\js\main.js */"./src/js/main.js");
module.exports = __webpack_require__(/*! E:\WEBWRK\JS\jsProjBonus\src\js\slider.js */"./src/js/slider.js");


/***/ })

/******/ });
//# sourceMappingURL=script.js.map