/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./_assets/js/founction/founction.js":
/*!*******************************************!*\
  !*** ./_assets/js/founction/founction.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRandomInt": function() { return /* binding */ getRandomInt; }
/* harmony export */ });
var getRandomInt = function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!*************************!*\
  !*** ./_assets/main.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_founction_founction_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/founction/founction.js */ "./_assets/js/founction/founction.js");

var counter = document.querySelector(".counter");
var color = ["red", "blue", "green", "pink"];

var func = function func() {
  setInterval(function () {
    var num = counter.textContent;
    num = Number(num) + 1;
    counter.textContent = num;
    counter.classList.forEach(function (className) {
      if (className !== "counter") {
        counter.classList.remove(className);
      }
    });
    counter.classList.add(color[(0,_js_founction_founction_js__WEBPACK_IMPORTED_MODULE_0__.getRandomInt)(0, 4)]);
  }, 1 * 1000);
  var a = new Promise(function () {});
};

func();
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQU8sSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsR0FBRCxFQUFNQyxHQUFOLEVBQWM7QUFDeENELEVBQUFBLEdBQUcsR0FBR0UsSUFBSSxDQUFDQyxJQUFMLENBQVVILEdBQVYsQ0FBTjtBQUNBQyxFQUFBQSxHQUFHLEdBQUdDLElBQUksQ0FBQ0UsS0FBTCxDQUFXSCxHQUFYLENBQU47QUFDQSxTQUFPQyxJQUFJLENBQUNFLEtBQUwsQ0FBV0YsSUFBSSxDQUFDRyxNQUFMLE1BQWlCSixHQUFHLEdBQUdELEdBQXZCLElBQThCQSxHQUF6QyxDQUFQO0FBQ0QsQ0FKTTs7Ozs7O1VDQVA7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQSw4Q0FBOEM7Ozs7O1dDQTlDO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTkE7QUFFQSxJQUFNTSxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixVQUF2QixDQUFoQjtBQUNBLElBQU1DLEtBQUssR0FBRyxDQUFDLEtBQUQsRUFBUSxNQUFSLEVBQWdCLE9BQWhCLEVBQXlCLE1BQXpCLENBQWQ7O0FBQ0EsSUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUNqQkMsRUFBQUEsV0FBVyxDQUFDLFlBQU07QUFDaEIsUUFBSUMsR0FBRyxHQUFHTixPQUFPLENBQUNPLFdBQWxCO0FBQ0FELElBQUFBLEdBQUcsR0FBR0UsTUFBTSxDQUFDRixHQUFELENBQU4sR0FBYyxDQUFwQjtBQUNBTixJQUFBQSxPQUFPLENBQUNPLFdBQVIsR0FBc0JELEdBQXRCO0FBRUFOLElBQUFBLE9BQU8sQ0FBQ1MsU0FBUixDQUFrQkMsT0FBbEIsQ0FBMEIsVUFBQ0MsU0FBRCxFQUFlO0FBQ3ZDLFVBQUlBLFNBQVMsS0FBSyxTQUFsQixFQUE2QjtBQUMzQlgsUUFBQUEsT0FBTyxDQUFDUyxTQUFSLENBQWtCRyxNQUFsQixDQUF5QkQsU0FBekI7QUFDRDtBQUNGLEtBSkQ7QUFLQVgsSUFBQUEsT0FBTyxDQUFDUyxTQUFSLENBQWtCSSxHQUFsQixDQUFzQlYsS0FBSyxDQUFDVix3RUFBWSxDQUFDLENBQUQsRUFBSSxDQUFKLENBQWIsQ0FBM0I7QUFDRCxHQVhVLEVBV1IsSUFBRyxJQVhLLENBQVg7QUFhQSxNQUFNcUIsQ0FBQyxHQUFHLElBQUlDLE9BQUosQ0FBWSxZQUFNLENBQUUsQ0FBcEIsQ0FBVjtBQUNELENBZkQ7O0FBZ0JBWCxJQUFJLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ucG1fc2NyaXB0X3Rlc3QvLi9fYXNzZXRzL2pzL2ZvdW5jdGlvbi9mb3VuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vbnBtX3NjcmlwdF90ZXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL25wbV9zY3JpcHRfdGVzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbnBtX3NjcmlwdF90ZXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbnBtX3NjcmlwdF90ZXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbnBtX3NjcmlwdF90ZXN0Ly4vX2Fzc2V0cy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBnZXRSYW5kb21JbnQgPSAobWluLCBtYXgpID0+IHtcbiAgbWluID0gTWF0aC5jZWlsKG1pbik7XG4gIG1heCA9IE1hdGguZmxvb3IobWF4KTtcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluKTtcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge2dldFJhbmRvbUludH0gZnJvbSBcIi4vanMvZm91bmN0aW9uL2ZvdW5jdGlvbi5qc1wiO1xuXG5jb25zdCBjb3VudGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb3VudGVyXCIpO1xuY29uc3QgY29sb3IgPSBbXCJyZWRcIiwgXCJibHVlXCIsIFwiZ3JlZW5cIiwgXCJwaW5rXCJdO1xuY29uc3QgZnVuYyA9ICgpID0+IHtcbiAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgIGxldCBudW0gPSBjb3VudGVyLnRleHRDb250ZW50O1xuICAgIG51bSA9IE51bWJlcihudW0pICsgMTtcbiAgICBjb3VudGVyLnRleHRDb250ZW50ID0gbnVtO1xuXG4gICAgY291bnRlci5jbGFzc0xpc3QuZm9yRWFjaCgoY2xhc3NOYW1lKSA9PiB7XG4gICAgICBpZiAoY2xhc3NOYW1lICE9PSBcImNvdW50ZXJcIikge1xuICAgICAgICBjb3VudGVyLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBjb3VudGVyLmNsYXNzTGlzdC5hZGQoY29sb3JbZ2V0UmFuZG9tSW50KDAsIDQpXSk7XG4gIH0sIDEgKjEwMDApO1xuXG4gIGNvbnN0IGEgPSBuZXcgUHJvbWlzZSgoKSA9PiB7fSk7XG59O1xuZnVuYygpO1xuIl0sIm5hbWVzIjpbImdldFJhbmRvbUludCIsIm1pbiIsIm1heCIsIk1hdGgiLCJjZWlsIiwiZmxvb3IiLCJyYW5kb20iLCJjb3VudGVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY29sb3IiLCJmdW5jIiwic2V0SW50ZXJ2YWwiLCJudW0iLCJ0ZXh0Q29udGVudCIsIk51bWJlciIsImNsYXNzTGlzdCIsImZvckVhY2giLCJjbGFzc05hbWUiLCJyZW1vdmUiLCJhZGQiLCJhIiwiUHJvbWlzZSJdLCJzb3VyY2VSb290IjoiIn0=