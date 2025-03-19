"use strict";
(self["webpackChunkformulario_f"] = self["webpackChunkformulario_f"] || []).push([["index"],{

/***/ "./src/js/modules/formHandler.js":
/*!***************************************!*\
  !*** ./src/js/modules/formHandler.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setupFormHandler)
/* harmony export */ });
function setupFormHandler() {
  const form = document.getElementById('survey-form');
  const messageContainer = document.getElementById('message-container');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('number').value;
    const dropdown = document.getElementById('dropdown').value;
    const radioButtons = document.querySelectorAll('input[name="choice"]:checked');
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    const comments = document.getElementById('comments').value;

    if (name && email && age && dropdown && radioButtons && checkboxes.length > 0 && comments) {
      messageContainer.textContent = 'FORMULARIO ENVIADO CON ÉXITO';
      messageContainer.style.color = 'green'; // Estilo para el mensaje de éxito
      form.reset(); // Opcional: Resetea el formulario después de enviarlo
    } else {
      messageContainer.textContent = 'Por favor, complete todos los campos requeridos.';
      messageContainer.style.color = 'red'; // Estilo para el mensaje de error
    }
  });
}


/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_modules_formHandler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/modules/formHandler.js */ "./src/js/modules/formHandler.js");


document.addEventListener('DOMContentLoaded', () => {
  (0,_js_modules_formHandler_js__WEBPACK_IMPORTED_MODULE_0__["default"])(); // configurar el listener del formulario
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/main.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDLG9CQUFvQjtBQUNwQixNQUFNO0FBQ047QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7QUN4QjJEOztBQUUzRDtBQUNBLEVBQUUsc0VBQWdCLElBQUk7QUFDdEIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zvcm11bGFyaW9fZi8uL3NyYy9qcy9tb2R1bGVzL2Zvcm1IYW5kbGVyLmpzIiwid2VicGFjazovL2Zvcm11bGFyaW9fZi8uL3NyYy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldHVwRm9ybUhhbmRsZXIoKSB7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VydmV5LWZvcm0nKTtcbiAgY29uc3QgbWVzc2FnZUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZXNzYWdlLWNvbnRhaW5lcicpO1xuXG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZScpLnZhbHVlO1xuICAgIGNvbnN0IGVtYWlsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VtYWlsJykudmFsdWU7XG4gICAgY29uc3QgYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ251bWJlcicpLnZhbHVlO1xuICAgIGNvbnN0IGRyb3Bkb3duID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Ryb3Bkb3duJykudmFsdWU7XG4gICAgY29uc3QgcmFkaW9CdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbbmFtZT1cImNob2ljZVwiXTpjaGVja2VkJyk7XG4gICAgY29uc3QgY2hlY2tib3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkJyk7XG4gICAgY29uc3QgY29tbWVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tbWVudHMnKS52YWx1ZTtcblxuICAgIGlmIChuYW1lICYmIGVtYWlsICYmIGFnZSAmJiBkcm9wZG93biAmJiByYWRpb0J1dHRvbnMgJiYgY2hlY2tib3hlcy5sZW5ndGggPiAwICYmIGNvbW1lbnRzKSB7XG4gICAgICBtZXNzYWdlQ29udGFpbmVyLnRleHRDb250ZW50ID0gJ0ZPUk1VTEFSSU8gRU5WSUFETyBDT04gw4lYSVRPJztcbiAgICAgIG1lc3NhZ2VDb250YWluZXIuc3R5bGUuY29sb3IgPSAnZ3JlZW4nOyAvLyBFc3RpbG8gcGFyYSBlbCBtZW5zYWplIGRlIMOpeGl0b1xuICAgICAgZm9ybS5yZXNldCgpOyAvLyBPcGNpb25hbDogUmVzZXRlYSBlbCBmb3JtdWxhcmlvIGRlc3B1w6lzIGRlIGVudmlhcmxvXG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2VDb250YWluZXIudGV4dENvbnRlbnQgPSAnUG9yIGZhdm9yLCBjb21wbGV0ZSB0b2RvcyBsb3MgY2FtcG9zIHJlcXVlcmlkb3MuJztcbiAgICAgIG1lc3NhZ2VDb250YWluZXIuc3R5bGUuY29sb3IgPSAncmVkJzsgLy8gRXN0aWxvIHBhcmEgZWwgbWVuc2FqZSBkZSBlcnJvclxuICAgIH1cbiAgfSk7XG59XG4iLCJpbXBvcnQgc2V0dXBGb3JtSGFuZGxlciBmcm9tICcuL2pzL21vZHVsZXMvZm9ybUhhbmRsZXIuanMnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBzZXR1cEZvcm1IYW5kbGVyKCk7IC8vIGNvbmZpZ3VyYXIgZWwgbGlzdGVuZXIgZGVsIGZvcm11bGFyaW9cbn0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==