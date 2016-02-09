/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Game = __webpack_require__(1);

	var game = new Game();
	game.play;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Jorge = __webpack_require__(2);

	var canvas = document.getElementById('game');
	debugger;
	var context = canvas.getContext('2d');
	var jorge = new Jorge(50, 50);

	var play = function play() {
	  requestAnimationFrame(gameLoop);
	};

	var gameLoop = function gameLoop() {
	  context.clearRect(0, 0, canvas.width, canvas.height);
	  jorge.drawJorge;
	  jorge.moveDown;
	  requestAnimationFrame(gameLoop);
	};

	module.exports = play;

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var Jorge = (function () {
	  function Jorge(x, y) {
	    _classCallCheck(this, Jorge);

	    this.x = x;
	    this.y = y;
	    this.image = new Image();
	    this.image.src = '../assets/images/jorge-bird-small.png';
	  }

	  _createClass(Jorge, [{
	    key: 'moveUp',
	    get: function get() {
	      this.y--;
	    }
	  }, {
	    key: 'moveDown',
	    get: function get() {
	      this.y++;
	    }
	  }, {
	    key: 'spacebarPress',
	    get: function get() {
	      for (var i = 0; i < 50; i++) {
	        this.moveUp;
	      }
	    }
	  }, {
	    key: 'drawJorge',
	    get: function get() {
	      var canvas = document.getElementById('game');
	      var context = canvas.getContext('2d');
	      context.drawImage(this.image, this.x, this.y);
	    }
	  }]);

	  return Jorge;
	})();

	module.exports = Jorge;

/***/ }
/******/ ]);