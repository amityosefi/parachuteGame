// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"data/Boat.ts":[function(require,module,exports) {
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Boat = void 0;
var Boat = /*#__PURE__*/function () {
  function Boat(speed, width, height, position, image) {
    var _this = this;
    _classCallCheck(this, Boat);
    this.speed = speed;
    this.width = width;
    this.height = height;
    this.position = position;
    this.boatImage = new Image();
    this.handleKeyUp = function (e) {
      if (e.code === 'ArrowLeft' || e.key === 'ArrowLeft') _this.moveLeft = false;
      if (e.code === 'ArrowRight' || e.key === 'ArrowRight') _this.moveRight = false;
    };
    this.handleKeyDown = function (e) {
      if (e.code === 'ArrowLeft' || e.key === 'ArrowLeft') _this.moveLeft = true;
      if (e.code === 'ArrowRight' || e.key === 'ArrowRight') _this.moveRight = true;
    };
    this.boatImage.src = image;
    this.width = width;
    this.height = height;
    this.position = position;
    this.speed = speed;
    this.moveLeft = false;
    this.moveRight = false;
    // keyboard listener
    document.addEventListener('keydown', this.handleKeyDown);
    document.addEventListener('keyup', this.handleKeyUp);
  }
  return _createClass(Boat, [{
    key: "isMovingLeft",
    get: function get() {
      return this.moveLeft;
    }
  }, {
    key: "isMovingRight",
    get: function get() {
      return this.moveRight;
    }
  }, {
    key: "moveBoat",
    value: function moveBoat() {
      if (this.moveLeft) this.pos.x -= this.speed;
      if (this.moveRight) this.pos.x += this.speed;
    }
  }, {
    key: "getWidth",
    get: function get() {
      return this.width;
    }
  }, {
    key: "getHeight",
    get: function get() {
      return this.height;
    }
  }, {
    key: "pos",
    get: function get() {
      return this.position;
    }
  }, {
    key: "image",
    get: function get() {
      return this.boatImage;
    }
  }, {
    key: "getSpeed",
    get: function get() {
      return this.speed;
    }
  }]);
}();
exports.Boat = Boat;
},{}],"data/airplane.ts":[function(require,module,exports) {
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Airplane = void 0;
var Airplane = /*#__PURE__*/function () {
  function Airplane(width, height, position, speed, image) {
    _classCallCheck(this, Airplane);
    this.width = width;
    this.height = height;
    this.position = position;
    this.speed = speed;
    this.airplaneImage = new Image();
    this.airplaneImage.src = image;
    this.width = width;
    this.height = height;
    this.position = position;
    this.speed = speed;
  }
  return _createClass(Airplane, [{
    key: "moveAirplane",
    value: function moveAirplane() {
      this.pos.x -= this.speed;
    }
  }, {
    key: "getWidth",
    get: function get() {
      return this.width;
    }
  }, {
    key: "getHeight",
    get: function get() {
      return this.height;
    }
  }, {
    key: "pos",
    get: function get() {
      return this.position;
    }
  }, {
    key: "image",
    get: function get() {
      return this.airplaneImage;
    }
  }, {
    key: "getSpeed",
    get: function get() {
      return this.speed;
    }
  }]);
}();
exports.Airplane = Airplane;
},{}],"data/Life.ts":[function(require,module,exports) {
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Life = void 0;
var Life = /*#__PURE__*/function () {
  function Life() {
    _classCallCheck(this, Life);
    this.lifeScore = 3;
    this.lifeDisplay = document.querySelector('#life');
    this.showLife();
  }
  return _createClass(Life, [{
    key: "getLifeScore",
    value: function getLifeScore() {
      return this.lifeScore;
    }
  }, {
    key: "decreaseLife",
    value: function decreaseLife() {
      this.lifeScore -= 1;
      this.showLife();
    }
  }, {
    key: "showLife",
    value: function showLife() {
      if (this.lifeDisplay) this.lifeDisplay.innerHTML = 'life: ' + this.lifeScore.toString();
    }
  }]);
}();
exports.Life = Life;
},{}],"data/Parachutist.ts":[function(require,module,exports) {
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Parachutist = void 0;
var Parachutist = /*#__PURE__*/function () {
  function Parachutist(width, height, position, speed, image) {
    _classCallCheck(this, Parachutist);
    this.width = width;
    this.height = height;
    this.position = position;
    this.speed = speed;
    this.parachtistImage = new Image();
    this.parachtistImage.src = image;
    this.width = width;
    this.height = height;
    this.position = position;
    this.speed = speed;
  }
  return _createClass(Parachutist, [{
    key: "moveparachutist",
    value: function moveparachutist() {
      this.pos.y += this.speed;
    }
  }, {
    key: "getWidth",
    get: function get() {
      return this.width;
    }
  }, {
    key: "getHeight",
    get: function get() {
      return this.height;
    }
  }, {
    key: "pos",
    get: function get() {
      return this.position;
    }
  }, {
    key: "image",
    get: function get() {
      return this.parachtistImage;
    }
  }, {
    key: "getSpeed",
    get: function get() {
      return this.speed;
    }
  }]);
}();
exports.Parachutist = Parachutist;
},{}],"data/Score.ts":[function(require,module,exports) {
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Score = void 0;
var Score = /*#__PURE__*/function () {
  function Score() {
    _classCallCheck(this, Score);
    this.score = 0;
    this.scoreDisplay = document.querySelector('#score');
    this.showScore();
  }
  return _createClass(Score, [{
    key: "addScore",
    value: function addScore() {
      this.score += 10;
      this.showScore();
    }
  }, {
    key: "showScore",
    value: function showScore() {
      if (this.scoreDisplay) this.scoreDisplay.innerHTML = 'score: ' + this.score.toString();
    }
  }]);
}();
exports.Score = Score;
},{}],"data/Sea.ts":[function(require,module,exports) {
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sea = void 0;
var Sea = /*#__PURE__*/function () {
  function Sea(width, height, position, image) {
    _classCallCheck(this, Sea);
    this.width = width;
    this.height = height;
    this.position = position;
    this.seaImage = new Image();
    this.seaImage.src = image;
    this.width = width;
    this.height = height;
    this.position = position;
  }
  return _createClass(Sea, [{
    key: "getWidth",
    get: function get() {
      return this.width;
    }
  }, {
    key: "getHeight",
    get: function get() {
      return this.height;
    }
  }, {
    key: "pos",
    get: function get() {
      return this.position;
    }
  }, {
    key: "image",
    get: function get() {
      return this.seaImage;
    }
  }]);
}();
exports.Sea = Sea;
},{}],"assets/parachutist.png":[function(require,module,exports) {
module.exports = "/parachutist.f9e509ed.png";
},{}],"assets/sea.png":[function(require,module,exports) {
module.exports = "/sea.5943e690.png";
},{}],"view/CanvasView.ts":[function(require,module,exports) {
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CanvasView = void 0;
var Life_1 = require("../data/Life");
var Parachutist_1 = require("../data/Parachutist");
var Score_1 = require("../data/Score");
var Sea_1 = require("../data/Sea");
var parachutist_png_1 = __importDefault(require("../assets/parachutist.png"));
var sea_png_1 = __importDefault(require("../assets/sea.png"));
var CanvasView = /*#__PURE__*/function () {
  function CanvasView(canvasName, airplane, boat) {
    _classCallCheck(this, CanvasView);
    this.canvas = document.querySelector(canvasName);
    this.context = this.canvas.getContext('2d');
    this.score = new Score_1.Score();
    this.life = new Life_1.Life();
    this.info = document.querySelector('#info');
    this.boat = boat;
    this.airplane = airplane;
    var seaVector = {
      x: 0,
      y: 550
    };
    this.sea = new Sea_1.Sea(1080, 100, seaVector, sea_png_1.default);
    this.parachutistList = new Set();
  }
  return _createClass(CanvasView, [{
    key: "clear",
    value: function clear() {
      var _a;
      (_a = this.context) === null || _a === void 0 ? void 0 : _a.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }, {
    key: "start",
    value: function start() {
      this.score.showScore();
      this.life.showLife();
      this.gameLoop();
    }
  }, {
    key: "drawScore",
    value: function drawScore() {
      this.score.addScore();
    }
  }, {
    key: "drawLife",
    value: function drawLife() {
      if (this.life.getLifeScore() > 0) this.life.decreaseLife();else this.setGameOver();
    }
  }, {
    key: "setGameOver",
    value: function setGameOver() {
      this.clear();
      if (this.info) this.info.innerHTML = 'Game over!';
    }
  }, {
    key: "drawData",
    value: function drawData(elem) {
      var _a;
      if (!elem) return;
      (_a = this.context) === null || _a === void 0 ? void 0 : _a.drawImage(elem.image, elem.pos.x, elem.pos.y, elem.getWidth, elem.getHeight);
    }
  }, {
    key: "gameLoop",
    value: function gameLoop() {
      var _this = this;
      this.clear();
      this.drawData(this.airplane);
      if (this.airplane.pos.x + this.airplane.getWidth > 0) this.airplane.moveAirplane();else this.airplane.pos.x = 1080;
      this.drawData(this.boat);
      if (this.boat.isMovingLeft && this.boat.pos.x > 0 || this.boat.isMovingRight && this.boat.pos.x < this.canvas.width - this.boat.getWidth) this.boat.moveBoat();
      // console.log(this.parachutistList.size);
      var _iterator = _createForOfIteratorHelper(this.parachutistList),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var p = _step.value;
          //   console.log(p.pos.y <= this.boat.pos.y);
          if (p.pos.y > this.boat.pos.y + 10 && p.pos.x > this.boat.pos.x + this.boat.getWidth) {
            this.parachutistList.delete(p);
            this.score.addScore();
          } else if (p.pos.y > this.boat.pos.y + 10 && p.pos.x <= this.boat.pos.x + this.boat.getWidth) {
            this.parachutistList.delete(p);
            if (this.life.getLifeScore() == 1) {
              this.setGameOver();
              this.life.decreaseLife();
              return;
            }
            this.life.decreaseLife();
          } else {
            p.moveparachutist();
            this.drawData(p);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      this.drawData(this.sea);
      this.handleParachutist();
      requestAnimationFrame(function () {
        return _this.gameLoop();
      });
    }
  }, {
    key: "getRandom",
    value: function getRandom() {
      return Math.floor(Math.random() * 500 + 1) > 495 ? true : false;
    }
  }, {
    key: "handleParachutist",
    value: function handleParachutist() {
      if (this.getRandom()) {
        var parachtistVector = {
          x: this.airplane.pos.x,
          y: this.airplane.pos.y - this.airplane.getHeight
        };
        this.parachutistList.add(new Parachutist_1.Parachutist(50, 100, parachtistVector, 3, parachutist_png_1.default));
      }
    }
  }]);
}();
exports.CanvasView = CanvasView;
},{"../data/Life":"data/Life.ts","../data/Parachutist":"data/Parachutist.ts","../data/Score":"data/Score.ts","../data/Sea":"data/Sea.ts","../assets/parachutist.png":"assets/parachutist.png","../assets/sea.png":"assets/sea.png"}],"assets/boat.png":[function(require,module,exports) {
module.exports = "/boat.a79ca21b.png";
},{}],"assets/plane.png":[function(require,module,exports) {
module.exports = "/plane.aa711092.png";
},{}],"index.ts":[function(require,module,exports) {
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ParachutistGame = void 0;
var Boat_1 = require("./data/Boat");
var airplane_1 = require("./data/airplane");
var CanvasView_1 = require("./view/CanvasView");
var boat_png_1 = __importDefault(require("./assets/boat.png"));
var plane_png_1 = __importDefault(require("./assets/plane.png"));
var ParachutistGame = /*#__PURE__*/_createClass(function ParachutistGame() {
  _classCallCheck(this, ParachutistGame);
  this.canvas = document.querySelector('#playField');
  var boatVector = {
    x: 300,
    y: 500
  };
  var airplaneVector = {
    x: 1080,
    y: 10
  };
  this.canvasView = new CanvasView_1.CanvasView('#playField', new airplane_1.Airplane(150, 50, airplaneVector, 3, plane_png_1.default), new Boat_1.Boat(10, 200, 50, boatVector, boat_png_1.default));
  this.canvasView.start();
});
exports.ParachutistGame = ParachutistGame;
new ParachutistGame();
},{"./data/Boat":"data/Boat.ts","./data/airplane":"data/airplane.ts","./view/CanvasView":"view/CanvasView.ts","./assets/boat.png":"assets/boat.png","./assets/plane.png":"assets/plane.png"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52179" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.ts"], null)
//# sourceMappingURL=/src.77de5100.js.map