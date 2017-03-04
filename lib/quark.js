(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Collision = exports.Attraction = exports.Alpha = exports.CircleZone = exports.ImageZone = exports.LineZone = exports.PointZone = exports.RectZone = exports.Span = undefined;
	
	var _emitter = __webpack_require__(1);
	
	Object.keys(_emitter).forEach(function (key) {
	    if (key === "default" || key === "__esModule") return;
	    Object.defineProperty(exports, key, {
	        enumerable: true,
	        get: function get() {
	            return _emitter[key];
	        }
	    });
	});
	
	var _initialize = __webpack_require__(14);
	
	Object.keys(_initialize).forEach(function (key) {
	    if (key === "default" || key === "__esModule") return;
	    Object.defineProperty(exports, key, {
	        enumerable: true,
	        get: function get() {
	            return _initialize[key];
	        }
	    });
	});
	exports.getSpan = getSpan;
	
	var _Span = __webpack_require__(8);
	
	var _Span2 = _interopRequireDefault(_Span);
	
	var _RectZone = __webpack_require__(21);
	
	var _RectZone2 = _interopRequireDefault(_RectZone);
	
	var _PointZone = __webpack_require__(23);
	
	var _PointZone2 = _interopRequireDefault(_PointZone);
	
	var _LineZone = __webpack_require__(24);
	
	var _LineZone2 = _interopRequireDefault(_LineZone);
	
	var _ImageZone = __webpack_require__(25);
	
	var _ImageZone2 = _interopRequireDefault(_ImageZone);
	
	var _CircleZone = __webpack_require__(26);
	
	var _CircleZone2 = _interopRequireDefault(_CircleZone);
	
	var _Alpha = __webpack_require__(27);
	
	var _Alpha2 = _interopRequireDefault(_Alpha);
	
	var _Attraction = __webpack_require__(30);
	
	var _Attraction2 = _interopRequireDefault(_Attraction);
	
	var _Collision = __webpack_require__(31);
	
	var _Collision2 = _interopRequireDefault(_Collision);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function getSpan(a, b, center) {
	    return new _Span2.default(a, b, center);
	}
	
	exports.Span = _Span2.default;
	exports.RectZone = _RectZone2.default;
	exports.PointZone = _PointZone2.default;
	exports.LineZone = _LineZone2.default;
	exports.ImageZone = _ImageZone2.default;
	exports.CircleZone = _CircleZone2.default;
	exports.Alpha = _Alpha2.default;
	exports.Attraction = _Attraction2.default;
	exports.Collision = _Collision2.default;
	
	
	global.Quark = exports;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Emitter = undefined;
	
	var _const = __webpack_require__(2);
	
	Object.keys(_const).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _const[key];
	    }
	  });
	});
	
	var _Emitter = __webpack_require__(3);
	
	var _Emitter2 = _interopRequireDefault(_Emitter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Emitter = _Emitter2.default;

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var POOL_MAX = exports.POOL_MAX = 1000;
	var TIME_STEP = exports.TIME_STEP = 60;
	var USE_CLOCK = exports.USE_CLOCK = false;
	var MEASURE = exports.MEASURE = 100;
	var EULER = exports.EULER = 'euler';
	var RK2 = exports.RK2 = 'runge-kutta2';
	var RK4 = exports.RK4 = 'runge-kutta4';
	var VERLET = exports.VERLET = 'verlet';
	var PARTICLE_CREATED = exports.PARTICLE_CREATED = 'partilcleCreated';
	var PARTICLE_UPDATE = exports.PARTICLE_UPDATE = 'partilcleUpdate';
	var PARTICLE_SLEEP = exports.PARTICLE_SLEEP = 'particleSleep';
	var PARTICLE_DEAD = exports.PARTICLE_DEAD = 'partilcleDead';
	var EMITTER_ADDED = exports.EMITTER_ADDED = 'emitterAdded';
	var EMITTER_REMOVED = exports.EMITTER_REMOVED = 'emitterRemoved';

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Particle2 = __webpack_require__(4);
	
	var _Particle3 = _interopRequireDefault(_Particle2);
	
	var _Rate = __webpack_require__(6);
	
	var _Rate2 = _interopRequireDefault(_Rate);
	
	var _NumericalIntegration = __webpack_require__(10);
	
	var _NumericalIntegration2 = _interopRequireDefault(_NumericalIntegration);
	
	var _const = __webpack_require__(2);
	
	var _InitializeUtil = __webpack_require__(11);
	
	var _InitializeUtil2 = _interopRequireDefault(_InitializeUtil);
	
	var _miniSignals = __webpack_require__(13);
	
	var _miniSignals2 = _interopRequireDefault(_miniSignals);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Emitter = function (_Particle) {
	  _inherits(Emitter, _Particle);
	
	  function Emitter() {
	    _classCallCheck(this, Emitter);
	
	    var _this = _possibleConstructorReturn(this, (Emitter.__proto__ || Object.getPrototypeOf(Emitter)).call(this));
	
	    _this.initializes = [];
	    _this.behaviours = [];
	    _this.emitTime = 0;
	    _this.emitTotalTimes = -1;
	    /**
	     * The friction coefficient for all particle emit by This;
	     * @property damping
	     * @type {Number}
	     * @default 0.006
	     */
	    _this.damping = .006;
	    /**
	     * If bindEmitter the particles can bind this emitter's property;
	     * @property bindEmitter
	     * @type {Boolean}
	     * @default true
	     */
	    _this.bindEmitter = true;
	    /**
	     * The number of particles per second emit (a [particle]/b [s]);
	     * @property rate
	     * @type {Quark.Rate}
	     * @default Quark.Rate(1, .1)
	     */
	    _this.rate = new _Rate2.default(1, .1);
	
	    _this.integrator = new _NumericalIntegration2.default();
	
	    _this._tailParticle = null;
	    _this._poolHead = null;
	
	    _this.update = _this.update;
	    _this.createParticle = _this.createParticle;
	    _this.integrate = _this.integrate;
	    _this.setupParticle = _this.setupParticle;
	    return _this;
	  }
	
	  _createClass(Emitter, [{
	    key: 'emit',
	    value: function emit(emitTime, life) {
	      this.emitTime = 0;
	      this.emitTotalTimes = emitTime || Infinity;
	
	      if (!isNaN(life)) {
	        this.life = life;
	      }
	
	      this.rate.init();
	
	      this.particleCreated = new _miniSignals2.default();
	      this.particleUpdate = new _miniSignals2.default();
	      this.particleDead = new _miniSignals2.default();
	    }
	
	    /**
	     * stop emiting
	     * @method stopEmit
	     */
	
	  }, {
	    key: 'stopEmit',
	    value: function stopEmit() {
	      this.emitTotalTimes = -1;
	      this.emitTime = 0;
	    }
	
	    /**
	     * remove current all particles
	     * @method removeAllParticles
	     */
	
	  }, {
	    key: 'removeAllParticles',
	    value: function removeAllParticles() {
	      this._tailParticle = null;
	    }
	
	    /**
	     * create single particle;
	     * 
	     * can use emit({x:10},new Gravity(10),{'particleUpdate',fun}) or emit([{x:10},new Initialize],new Gravity(10),{'particleUpdate',fun})
	     * @method removeAllParticles
	     */
	
	  }, {
	    key: 'createParticle',
	    value: function createParticle(initialize, behaviour) {
	      var particle = new _Particle3.default();
	      this.setupParticle(particle, initialize, behaviour);
	      this.particleCreated.dispatch(particle);
	
	      return particle;
	    }
	
	    /**
	     * add initialize to this emitter
	     * @method addSelfInitialize
	     */
	
	  }, {
	    key: 'addSelfInitialize',
	    value: function addSelfInitialize(pObj) {
	      if (pObj['init']) {
	        pObj.init(this);
	      } else {
	        this.initAll();
	      }
	    }
	
	    /**
	     * add the Initialize to particles;
	     * 
	     * you can use initializes array:for example emitter.addInitialize(initialize1,initialize2,initialize3);
	     * @method addInitialize
	     * @param {Quark.Initialize} initialize like this new Quark.Radius(1, 12)
	     */
	
	  }, {
	    key: 'addInitialize',
	    value: function addInitialize() {
	      var length = arguments.length;
	      for (var i = 0; i < length; i++) {
	        this.initializes.push(arguments[i]);
	      }
	    }
	
	    /**
	     * remove the Initialize
	     * @method removeInitialize
	     * @param {Quark.Initialize} initialize a initialize
	     */
	
	  }, {
	    key: 'removeInitialize',
	    value: function removeInitialize(initializer) {
	      var index = this.initializes.indexOf(initializer);
	      if (index > -1) {
	        this.initializes.splice(index, 1);
	      }
	    }
	
	    /**
	     * remove all Initializes
	     * @method removeInitializers
	     */
	
	  }, {
	    key: 'removeInitializers',
	    value: function removeInitializers() {
	      this.initializes.length = 0;
	    }
	
	    /**
	     * add the Behaviour to particles;
	     * 
	     * you can use Behaviours array:emitter.addBehaviour(Behaviour1,Behaviour2,Behaviour3);
	     * @method addBehaviour
	     * @param {Quark.Behaviour} behaviour like this new Quark.Color('random')
	     */
	
	  }, {
	    key: 'addBehaviour',
	    value: function addBehaviour() {
	      var length = arguments.length;
	      for (var i = 0; i < length; i++) {
	        this.behaviours.push(arguments[i]);
	        if (arguments[i].hasOwnProperty("parents")) arguments[i].parents.push(this);
	      }
	    }
	
	    /**
	     * remove the Behaviour
	     * @method removeBehaviour
	     * @param {Quark.Behaviour} behaviour a behaviour
	     */
	
	  }, {
	    key: 'removeBehaviour',
	    value: function removeBehaviour(behaviour) {
	      var index = this.behaviours.indexOf(behaviour);
	      if (index > -1) this.behaviours.splice(index, 1);
	    }
	
	    /**
	     * remove all behaviours
	     * @method removeAllBehaviours
	     */
	
	  }, {
	    key: 'removeAllBehaviours',
	    value: function removeAllBehaviours() {
	      this.behaviours.length = 0;
	    }
	  }, {
	    key: 'integrate',
	    value: function integrate(time) {
	      var damping = 1 - this.damping;
	
	      this.integrator.integrate(this, time, damping);
	      var particle = this._tailParticle;
	      var i = 0;
	      while (particle) {
	        particle.update(time, i++);
	        this.integrator.integrate(particle, time, damping);
	        if (particle._prev && particle._prev.dead) {
	          this.particleDead.dispatch(particle._prev);
	          particle._prev = particle._prev._prev;
	        }
	        this.particleUpdate.dispatch(particle);
	
	        particle = particle._prev;
	      }
	    }
	  }, {
	    key: 'emitting',
	    value: function emitting(time) {
	      if (this.emitTotalTimes == 'once') {
	        var length = this.rate.getValue(99999);
	        for (var i = 0; i < length; i++) {
	          this.createParticle();
	        }
	
	        this.emitTotalTimes = 'none';
	      } else if (!isNaN(this.emitTotalTimes)) {
	        this.emitTime += time;
	        if (this.emitTime < this.emitTotalTimes) {
	          var _length = this.rate.getValue(time);
	          for (var _i = 0; _i < _length; _i++) {
	            this.createParticle();
	          }
	        }
	      }
	    }
	  }, {
	    key: 'update',
	    value: function update(time) {
	      this.age += time;
	      if (this.age >= this.life || this.dead) {
	        this.destroy();
	      }
	
	      this.emitting(time);
	      this.integrate(time);
	    }
	  }, {
	    key: 'setupParticle',
	    value: function setupParticle(particle, initialize, behaviour) {
	      var initializes = this.initializes;
	      var behaviours = this.behaviours;
	
	      if (initialize) {
	        if (initialize instanceof Array) initializes = initialize;else initializes = [initialize];
	      }
	
	      if (behaviour) {
	        if (behaviour instanceof Array) behaviours = behaviour;else behaviours = [behaviour];
	      }
	
	      particle.reset();
	      (0, _InitializeUtil2.default)(this, particle, initializes);
	      particle.addBehaviours(behaviours);
	      particle.parent = this;
	      particle._prev = this._tailParticle;
	      this._tailParticle = particle;
	    }
	  }, {
	    key: 'destroy',
	
	
	    /**
	     * Destory this Emitter
	     * @method destroy
	     */
	    value: function destroy() {
	      this.dead = true;
	      this.emitTotalTimes = -1;
	
	      if (this._tailParticle === null) {
	        this.removeInitializers();
	        this.removeAllBehaviours();
	
	        if (this.parent) this.parent.removeEmitter(this);
	      }
	    }
	  }]);
	
	  return Emitter;
	}(_Particle3.default);
	
	exports.default = Emitter;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Vector2D = __webpack_require__(5);
	
	var _Vector2D2 = _interopRequireDefault(_Vector2D);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var uid = 0;
	
	var Particle = function () {
	  function Particle() {
	    _classCallCheck(this, Particle);
	
	    this.id = uid++;
	    this.reset(true);
	
	    this.update = this.update;
	    this.destroy = this.destroy;
	  }
	
	  _createClass(Particle, [{
	    key: 'getDirection',
	    value: function getDirection() {
	      return Math.atan2(this.v.x, -this.v.y) * (180 / Math.PI);
	    }
	  }, {
	    key: 'reset',
	    value: function reset(init) {
	      this._prev = null;
	      this.life = Infinity;
	      this.age = 0;
	      this.energy = 1;
	      this.dead = false;
	      this.sleep = false;
	      this.target = null;
	      this.sprite = null;
	      this.parent = null;
	      this.mass = 1;
	      this.radius = 10;
	      this.alpha = 1;
	      this.scale = 1;
	      this.rotation = 0;
	      this.color = null;
	      this.easing = function (val) {
	        return val;
	      };
	      this.transform = {};
	      if (init) {
	        this.p = new _Vector2D2.default();
	        this.v = new _Vector2D2.default();
	        this.a = new _Vector2D2.default();
	        this.old = {
	          p: new _Vector2D2.default(),
	          v: new _Vector2D2.default(),
	          a: new _Vector2D2.default()
	        };
	        this.behaviours = [];
	      } else {
	        // delete this.transform;
	        this.p.set(0, 0);
	        this.v.set(0, 0);
	        this.a.set(0, 0);
	        this.old.p.set(0, 0);
	        this.old.v.set(0, 0);
	        this.old.a.set(0, 0);
	        this.removeAllBehaviours();
	      }
	
	      this.transform.rgb = {
	        r: 255,
	        g: 255,
	        b: 255
	      };
	      return this;
	    }
	  }, {
	    key: 'update',
	    value: function update(time, index) {
	      if (!this.sleep) {
	        this.age += time;
	        var length = this.behaviours.length;
	        var i = void 0;
	        for (i = 0; i < length; i++) {
	          if (this.behaviours[i]) this.behaviours[i].applyBehaviour(this, time, index);
	        }
	      } else {}
	
	      if (this.age >= this.life) {
	        this.destroy();
	      } else {
	        var scale = this.easing(this.age / this.life);
	        this.energy = Math.max(1 - scale, 0);
	      }
	    }
	  }, {
	    key: 'addBehaviour',
	    value: function addBehaviour(behaviour) {
	      this.behaviours.push(behaviour);
	      if (behaviour.hasOwnProperty('parents')) {
	        behaviour.parents.push(this);
	      }
	      behaviour.initialize(this);
	    }
	  }, {
	    key: 'addBehaviours',
	    value: function addBehaviours(behaviours) {
	      var length = behaviours.length,
	          i;
	      for (i = 0; i < length; i++) {
	        this.addBehaviour(behaviours[i]);
	      }
	    }
	  }, {
	    key: 'removeBehaviour',
	    value: function removeBehaviour(behaviour) {
	      var index = this.behaviours.indexOf(behaviour);
	      if (index > -1) {
	        var behaviour = this.behaviours.splice(index, 1);
	        behaviour.parents = null;
	      }
	    }
	  }, {
	    key: 'removeAllBehaviours',
	    value: function removeAllBehaviours() {
	      this.behaviours.length = 0;
	    }
	
	    /**
	     * Destory this particle
	     * @method destroy
	     */
	
	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      this.removeAllBehaviours();
	      this.energy = 0;
	      this.dead = true;
	      this.parent = null;
	    }
	  }]);
	
	  return Particle;
	}();
	
	exports.default = Particle;

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Vector2D = function () {
	  function Vector2D(x, y) {
	    _classCallCheck(this, Vector2D);
	
	    this.x = x || 0;
	    this.y = y || 0;
	  }
	
	  _createClass(Vector2D, [{
	    key: "set",
	    value: function set(x, y) {
	
	      this.x = x;
	      this.y = y;
	      return this;
	    }
	  }, {
	    key: "setX",
	    value: function setX(x) {
	
	      this.x = x;
	      return this;
	    }
	  }, {
	    key: "setY",
	    value: function setY(y) {
	
	      this.y = y;
	
	      return this;
	    }
	  }, {
	    key: "setComponent",
	    value: function setComponent(index, value) {
	
	      switch (index) {
	
	        case 0:
	          this.x = value;
	          break;
	        case 1:
	          this.y = value;
	          break;
	        default:
	          throw new Error("index is out of range: " + index);
	
	      }
	    }
	  }, {
	    key: "getGradient",
	    value: function getGradient() {
	      if (this.x != 0) return Math.atan2(this.y, this.x);else if (this.y > 0) return Math.PI / 2;else if (this.y < 0) return -Math.PI / 2;
	    }
	  }, {
	    key: "getComponent",
	    value: function getComponent(index) {
	
	      switch (index) {
	
	        case 0:
	          return this.x;
	        case 1:
	          return this.y;
	        default:
	          throw new Error("index is out of range: " + index);
	
	      }
	    }
	  }, {
	    key: "copy",
	    value: function copy(v) {
	
	      this.x = v.x;
	      this.y = v.y;
	
	      return this;
	    }
	  }, {
	    key: "add",
	    value: function add(v, w) {
	
	      if (w !== undefined) {
	        return this.addVectors(v, w);
	      }
	
	      this.x += v.x;
	      this.y += v.y;
	
	      return this;
	    }
	  }, {
	    key: "addXY",
	    value: function addXY(a, b) {
	
	      this.x += a;
	      this.y += b;
	
	      return this;
	    }
	  }, {
	    key: "addVectors",
	    value: function addVectors(a, b) {
	
	      this.x = a.x + b.x;
	      this.y = a.y + b.y;
	
	      return this;
	    }
	  }, {
	    key: "addScalar",
	    value: function addScalar(s) {
	
	      this.x += s;
	      this.y += s;
	
	      return this;
	    }
	  }, {
	    key: "sub",
	    value: function sub(v, w) {
	
	      if (w !== undefined) {
	        return this.subVectors(v, w);
	      }
	
	      this.x -= v.x;
	      this.y -= v.y;
	
	      return this;
	    }
	  }, {
	    key: "subVectors",
	    value: function subVectors(a, b) {
	
	      this.x = a.x - b.x;
	      this.y = a.y - b.y;
	
	      return this;
	    }
	  }, {
	    key: "multiplyScalar",
	    value: function multiplyScalar(s) {
	
	      this.x *= s;
	      this.y *= s;
	
	      return this;
	    }
	  }, {
	    key: "divideScalar",
	    value: function divideScalar(s) {
	
	      if (s !== 0) {
	
	        this.x /= s;
	        this.y /= s;
	      } else {
	
	        this.set(0, 0);
	      }
	
	      return this;
	    }
	  }, {
	    key: "min",
	    value: function min(v) {
	
	      if (this.x > v.x) {
	
	        this.x = v.x;
	      }
	
	      if (this.y > v.y) {
	
	        this.y = v.y;
	      }
	
	      return this;
	    }
	  }, {
	    key: "max",
	    value: function max(v) {
	
	      if (this.x < v.x) {
	
	        this.x = v.x;
	      }
	
	      if (this.y < v.y) {
	
	        this.y = v.y;
	      }
	
	      return this;
	    }
	  }, {
	    key: "clamp",
	    value: function clamp(min, max) {
	
	      // This function assumes min < max, if this assumption isn't true it will not operate correctly
	
	      if (this.x < min.x) {
	
	        this.x = min.x;
	      } else if (this.x > max.x) {
	
	        this.x = max.x;
	      }
	
	      if (this.y < min.y) {
	
	        this.y = min.y;
	      } else if (this.y > max.y) {
	
	        this.y = max.y;
	      }
	
	      return this;
	    }
	  }, {
	    key: "negate",
	    value: function negate() {
	
	      return this.multiplyScalar(-1);
	    }
	  }, {
	    key: "dot",
	    value: function dot(v) {
	
	      return this.x * v.x + this.y * v.y;
	    }
	  }, {
	    key: "lengthSq",
	    value: function lengthSq() {
	
	      return this.x * this.x + this.y * this.y;
	    }
	  }, {
	    key: "length",
	    value: function length() {
	
	      return Math.sqrt(this.x * this.x + this.y * this.y);
	    }
	  }, {
	    key: "normalize",
	    value: function normalize() {
	
	      return this.divideScalar(this.length());
	    }
	  }, {
	    key: "distanceTo",
	    value: function distanceTo(v) {
	
	      return Math.sqrt(this.distanceToSquared(v));
	    }
	  }, {
	    key: "rotate",
	    value: function rotate(tha) {
	      var x = this.x;
	      var y = this.y;
	      this.x = x * Math.cos(tha) + y * Math.sin(tha);
	      this.y = -x * Math.sin(tha) + y * Math.cos(tha);
	      return this;
	    }
	  }, {
	    key: "distanceToSquared",
	    value: function distanceToSquared(v) {
	
	      var dx = this.x - v.x,
	          dy = this.y - v.y;
	      return dx * dx + dy * dy;
	    }
	  }, {
	    key: "setLength",
	    value: function setLength(l) {
	
	      var oldLength = this.length();
	
	      if (oldLength !== 0 && l !== oldLength) {
	
	        this.multiplyScalar(l / oldLength);
	      }
	
	      return this;
	    }
	  }, {
	    key: "lerp",
	    value: function lerp(v, alpha) {
	
	      this.x += (v.x - this.x) * alpha;
	      this.y += (v.y - this.y) * alpha;
	
	      return this;
	    }
	  }, {
	    key: "equals",
	    value: function equals(v) {
	
	      return v.x === this.x && v.y === this.y;
	    }
	  }, {
	    key: "toArray",
	    value: function toArray() {
	
	      return [this.x, this.y];
	    }
	  }, {
	    key: "clear",
	    value: function clear() {
	      this.x = 0.0;
	      this.y = 0.0;
	      return this;
	    }
	  }, {
	    key: "clone",
	    value: function clone() {
	
	      return new Vector2D(this.x, this.y);
	    }
	  }]);
	
	  return Vector2D;
	}();
	
	exports.default = Vector2D;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Util = __webpack_require__(7);
	
	var _Util2 = _interopRequireDefault(_Util);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Rate = function () {
	  function Rate(numpan, timepan) {
	    _classCallCheck(this, Rate);
	
	    this.numPan = numpan;
	    this.timePan = timepan;
	    this.numPan = _Util2.default.setSpanValue(this.numPan);
	    this.timePan = _Util2.default.setSpanValue(this.timePan);
	    this.startTime = 0;
	    this.nextTime = 0;
	    this.init();
	  }
	
	  _createClass(Rate, [{
	    key: 'init',
	    value: function init() {
	      this.startTime = 0;
	      this.nextTime = this.timePan.getValue();
	    }
	  }, {
	    key: 'getValue',
	    value: function getValue(time) {
	      this.startTime += time;
	      if (this.startTime >= this.nextTime) {
	        this.startTime = 0;
	        this.nextTime = this.timePan.getValue();
	        if (this.numPan.b == 1) {
	          if (this.numPan.getValue(false) > 0.5) return 1;else return 0;
	        } else {
	          return this.numPan.getValue(true);
	        }
	      }
	      return 0;
	    }
	  }]);
	
	  return Rate;
	}();
	
	exports.default = Rate;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _Vector2D = __webpack_require__(5);
	
	var _Vector2D2 = _interopRequireDefault(_Vector2D);
	
	var _Span = __webpack_require__(8);
	
	var _Span2 = _interopRequireDefault(_Span);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	
	    /**
	     * Returns the default if the value is null or undefined
	     *
	     * @memberof Quark#Quark.Util
	     * @method initValue
	     *
	     * @param {Mixed} value a specific value, could be everything but null or undefined
	     * @param {Mixed} defaults the default if the value is null or undefined
	     */
	    initValue: function initValue(value, defaults) {
	        var value = value != null && value != undefined ? value : defaults;
	        return value;
	    },
	
	    /**
	     * Returns the Vector2D - or creates a new one
	     *
	     * @memberof Quark#Quark.Util
	     * @method getVector2D
	     *
	     * @param {Quark.Vector2D | Number} postionOrX
	     * @param {Number} [y] just valid if 'postionOrX' is not an object
	     *
	     * @return {Quark.Vector2D}
	     */
	    getVector2D: function getVector2D(postionOrX, y) {
	        if ((typeof postionOrX === 'undefined' ? 'undefined' : _typeof(postionOrX)) == 'object') {
	            return postionOrX;
	        } else {
	            var vector2d = new _Vector2D2.default(postionOrX, y);
	            return vector2d;
	        }
	    },
	
	    /**
	     * @memberof Quark#Quark.Util
	     * @method judgeVector2D
	     *
	     * @todo add description for param `pOBJ`
	     * @todo add description for function
	     *
	     * @param {Object} pOBJ
	     *
	     * @return {String} result
	     */
	    judgeVector2D: function judgeVector2D(pOBJ) {
	        var result = '';
	        if (pOBJ.hasOwnProperty('x') || pOBJ.hasOwnProperty('y') || pOBJ.hasOwnProperty('p') || pOBJ.hasOwnProperty('position')) result += 'p';
	        if (pOBJ.hasOwnProperty('vx') || pOBJ.hasOwnProperty('vx') || pOBJ.hasOwnProperty('v') || pOBJ.hasOwnProperty('velocity')) result += 'v';
	        if (pOBJ.hasOwnProperty('ax') || pOBJ.hasOwnProperty('ax') || pOBJ.hasOwnProperty('a') || pOBJ.hasOwnProperty('accelerate')) result += 'a';
	
	        return result;
	    },
	
	    /**
	     * @memberof Quark#Quark.Util
	     * @method setVector2DByObject
	     *
	     * @todo add description for param `target`
	     * @todo add description for param `pOBJ`
	     * @todo add description for function
	     *
	     * @param {Object} target
	     * @param {Object} pOBJ
	     */
	    setVector2DByObject: function setVector2DByObject(target, pOBJ) {
	        if (pOBJ.hasOwnProperty('x')) target.p.x = pOBJ['x'];
	
	        if (pOBJ.hasOwnProperty('y')) target.p.y = pOBJ['y'];
	
	        if (pOBJ.hasOwnProperty('vx')) target.v.x = pOBJ['vx'];
	
	        if (pOBJ.hasOwnProperty('vy')) target.v.y = pOBJ['vy'];
	
	        if (pOBJ.hasOwnProperty('ax')) target.a.x = pOBJ['ax'];
	
	        if (pOBJ.hasOwnProperty('ay')) target.a.y = pOBJ['ay'];
	
	        if (pOBJ.hasOwnProperty('p')) particle.p.copy(pOBJ['p']);
	
	        if (pOBJ.hasOwnProperty('v')) particle.v.copy(pOBJ['v']);
	
	        if (pOBJ.hasOwnProperty('a')) particle.a.copy(pOBJ['a']);
	
	        if (pOBJ.hasOwnProperty('position')) particle.p.copy(pOBJ['position']);
	
	        if (pOBJ.hasOwnProperty('velocity')) particle.v.copy(pOBJ['velocity']);
	
	        if (pOBJ.hasOwnProperty('accelerate')) particle.a.copy(pOBJ['accelerate']);
	    },
	
	    /**
	     * Returns a new Quark.Span object
	     *
	     * @memberof Quark#Quark.Util
	     * @method setSpanValue
	     *
	     * @todo a, b and c should be 'Mixed' or 'Number'?
	     *
	     * @param {Mixed | Quark.Span} a
	     * @param {Mixed}               b
	     * @param {Mixed}               c
	     *
	     * @return {Quark.Span}
	     */
	    setSpanValue: function setSpanValue(a, b, c) {
	        if (a instanceof _Span2.default) {
	            return a;
	        } else {
	            if (!b) {
	                return new _Span2.default(a);
	            } else {
	                if (!c) return new _Span2.default(a, b);else return new _Span2.default(a, b, c);
	            }
	        }
	    },
	
	    /**
	     * Returns the value from a Quark.Span, if the param is not a Quark.Span it will return the given parameter
	     *
	     * @memberof Quark#Quark.Util
	     * @method getSpanValue
	     *
	     * @param {Mixed | Quark.Span} pan
	     *
	     * @return {Mixed} the value of Quark.Span OR the parameter if it is not a Quark.Span
	     */
	    getSpanValue: function getSpanValue(pan) {
	        if (pan instanceof _Span2.default) return pan.getValue();else return pan;
	    },
	
	    /**
	     * @typedef  {Object} rgbObject
	     * @property {Number} r red value
	     * @property {Number} g green value
	     * @property {Number} b blue value
	     */
	    /**
	     * converts a hex value to a rgb object
	     *
	     * @memberof Quark#Quark.Util
	     * @method hexToRGB
	     *
	     * @param {String} h any hex value, e.g. #000000 or 000000 for black
	     *
	     * @return {rgbObject}
	     */
	    hexToRGB: function hexToRGB(h) {
	        var hex16 = h.charAt(0) == "#" ? h.substring(1, 7) : h;
	        var r = parseInt(hex16.substring(0, 2), 16);
	        var g = parseInt(hex16.substring(2, 4), 16);
	        var b = parseInt(hex16.substring(4, 6), 16);
	
	        return {
	            r: r,
	            g: g,
	            b: b
	        };
	    },
	
	    /**
	     * converts a rgb value to a rgb string
	     *
	     * @memberof Quark#Quark.Util
	     * @method rgbToHex
	     *
	     * @param {Object | Quark.hexToRGB} rgb a rgb object like in {@link Quark#Quark.Util.hexToRGB}
	     *
	     * @return {String} rgb()
	     */
	    rgbToHex: function rgbToHex(rbg) {
	        return 'rgb(' + rbg.r + ', ' + rbg.g + ', ' + rbg.b + ')';
	    }
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _MathUtils = __webpack_require__(9);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Span = function () {
		function Span(a, b) {
			var center = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	
			_classCallCheck(this, Span);
	
			if (Array.isArray(a)) {
				this.isArray = true;
				this.a = a;
			} else {
				this.a = a;
				this.b = b || this.a;
				this.center = center;
			}
		}
	
		_createClass(Span, [{
			key: 'getValue',
			value: function getValue(INT) {
				if (this.isArray) {
					return this.a[Math.floor(this.a.length * Math.random())];
				} else {
					if (!this.center) return (0, _MathUtils.randomAToB)(this.a, this.b, INT);else return (0, _MathUtils.randomFloating)(this.a, this.b, INT);
				}
			}
		}]);
	
		return Span;
	}();
	
	exports.default = Span;

/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.randomAToB = randomAToB;
	exports.randomFloating = randomFloating;
	exports.degreeTransform = degreeTransform;
	function randomAToB(a, b, INT) {
	  if (!INT) return a + Math.random() * (b - a);else return Math.floor(Math.random() * (b - a)) + a;
	}
	
	function randomFloating(center, f, INT) {
	  return MathUtils.randomAToB(center - f, center + f, INT);
	}
	
	function degreeTransform(a) {
	  return a * Math.PI / 180;
	}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _const = __webpack_require__(2);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var NumericalIntegration = function () {
	  function NumericalIntegration(type) {
	    _classCallCheck(this, NumericalIntegration);
	
	    this.type = type || _const.EULER;
	  }
	
	  _createClass(NumericalIntegration, [{
	    key: 'integrate',
	    value: function integrate(particle, time, damping) {
	      this.eulerIntegrate(particle, time, damping);
	    }
	  }, {
	    key: 'eulerIntegrate',
	    value: function eulerIntegrate(particle, time, damping) {
	      if (!particle.sleep) {
	        particle.old.p.copy(particle.p);
	        particle.old.v.copy(particle.v);
	        particle.a.multiplyScalar(1 / particle.mass);
	        particle.v.add(particle.a.multiplyScalar(time));
	        particle.p.add(particle.old.v.multiplyScalar(time));
	        if (damping) {
	          particle.v.multiplyScalar(damping);
	        }
	        particle.a.clear();
	      }
	    }
	  }]);
	
	  return NumericalIntegration;
	}();
	
	exports.default = NumericalIntegration;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = initialize;
	
	var _Initialize = __webpack_require__(12);
	
	var _Initialize2 = _interopRequireDefault(_Initialize);
	
	var _MathUtils = __webpack_require__(9);
	
	var _Util = __webpack_require__(7);
	
	var Util = _interopRequireWildcard(_Util);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function initialize(emitter, particle, initializes) {
	  var length = initializes.length;
	  for (var i = 0; i < length; i++) {
	    if (initializes[i] instanceof _Initialize2.default) {
	      initializes[i].init(emitter, particle);
	    } else {
	      init(emitter, particle, initializes[i]);
	    }
	  }
	
	  bindEmitter(emitter, particle);
	}
	
	function init(emitter, particle, initialize) {
	  Util.setPrototypeByObject(particle, initialize);
	  Util.setVector2DByObject(particle, initialize);
	}
	
	function bindEmitter(emitter, particle) {
	  if (emitter.bindEmitter) {
	    particle.p.add(emitter.p);
	    particle.v.add(emitter.v);
	    particle.a.add(emitter.a);
	    particle.v.rotate((0, _MathUtils.degreeTransform)(emitter.rotation));
	  }
	}

/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Initialize = function () {
		function Initialize() {
			_classCallCheck(this, Initialize);
		}
	
		_createClass(Initialize, [{
			key: "reset",
			value: function reset() {}
		}, {
			key: "init",
			value: function init(emitter, particle) {
				if (particle) {
					this.initialize(particle);
				} else {
					this.initialize(emitter);
				}
			}
		}, {
			key: "initialize",
			value: function initialize() {}
		}]);
	
		return Initialize;
	}();
	
	exports.default = Initialize;

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var MiniSignalBinding = (function () {
	  function MiniSignalBinding(fn, once, thisArg) {
	    if (once === undefined) once = false;
	
	    _classCallCheck(this, MiniSignalBinding);
	
	    this._fn = fn;
	    this._once = once;
	    this._thisArg = thisArg;
	    this._next = this._prev = this._owner = null;
	  }
	
	  _createClass(MiniSignalBinding, [{
	    key: 'detach',
	    value: function detach() {
	      if (this._owner === null) return false;
	      this._owner.detach(this);
	      return true;
	    }
	  }]);
	
	  return MiniSignalBinding;
	})();
	
	function _addMiniSignalBinding(self, node) {
	  if (!self._head) {
	    self._head = node;
	    self._tail = node;
	  } else {
	    self._tail._next = node;
	    node._prev = self._tail;
	    self._tail = node;
	  }
	
	  node._owner = self;
	
	  return node;
	}
	
	var MiniSignal = (function () {
	  function MiniSignal() {
	    _classCallCheck(this, MiniSignal);
	
	    this._head = this._tail = undefined;
	  }
	
	  _createClass(MiniSignal, [{
	    key: 'handlers',
	    value: function handlers() {
	      var exists = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];
	
	      var node = this._head;
	
	      if (exists) return !!node;
	
	      var ee = [];
	
	      while (node) {
	        ee.push(node);
	        node = node._next;
	      }
	
	      return ee;
	    }
	  }, {
	    key: 'has',
	    value: function has(node) {
	      if (!(node instanceof MiniSignalBinding)) {
	        throw new Error('MiniSignal#has(): First arg must be a MiniSignalBinding object.');
	      }
	
	      return node._owner === this;
	    }
	  }, {
	    key: 'dispatch',
	    value: function dispatch() {
	      var node = this._head;
	
	      if (!node) return false;
	
	      while (node) {
	        if (node._once) this.detach(node);
	        node._fn.apply(node._thisArg, arguments);
	        node = node._next;
	      }
	
	      return true;
	    }
	  }, {
	    key: 'add',
	    value: function add(fn) {
	      var thisArg = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
	
	      if (typeof fn !== 'function') {
	        throw new Error('MiniSignal#add(): First arg must be a Function.');
	      }
	      return _addMiniSignalBinding(this, new MiniSignalBinding(fn, false, thisArg));
	    }
	  }, {
	    key: 'once',
	    value: function once(fn) {
	      var thisArg = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
	
	      if (typeof fn !== 'function') {
	        throw new Error('MiniSignal#once(): First arg must be a Function.');
	      }
	      return _addMiniSignalBinding(this, new MiniSignalBinding(fn, true, thisArg));
	    }
	  }, {
	    key: 'detach',
	    value: function detach(node) {
	      if (!(node instanceof MiniSignalBinding)) {
	        throw new Error('MiniSignal#detach(): First arg must be a MiniSignalBinding object.');
	      }
	      if (node._owner !== this) return this;
	
	      if (node._prev) node._prev._next = node._next;
	      if (node._next) node._next._prev = node._prev;
	
	      if (node === this._head) {
	        this._head = node._next;
	        if (node._next === null) {
	          this._tail = null;
	        }
	      } else if (node === this._tail) {
	        this._tail = node._prev;
	        this._tail._next = null;
	      }
	
	      node._owner = null;
	      return this;
	    }
	  }, {
	    key: 'detachAll',
	    value: function detachAll() {
	      var node = this._head;
	      if (!node) return this;
	
	      this._head = this._tail = null;
	
	      while (node) {
	        node._owner = null;
	        node = node._next;
	      }
	      return this;
	    }
	  }]);
	
	  return MiniSignal;
	})();
	
	MiniSignal.MiniSignalBinding = MiniSignalBinding;
	
	exports['default'] = MiniSignal;
	module.exports = exports['default'];


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Position = exports.Radius = exports.Mass = exports.Life = exports.Velocity = exports.Rate = undefined;
	
	var _Rate = __webpack_require__(6);
	
	var _Rate2 = _interopRequireDefault(_Rate);
	
	var _Velocity = __webpack_require__(15);
	
	var _Velocity2 = _interopRequireDefault(_Velocity);
	
	var _Life = __webpack_require__(17);
	
	var _Life2 = _interopRequireDefault(_Life);
	
	var _Mass = __webpack_require__(18);
	
	var _Mass2 = _interopRequireDefault(_Mass);
	
	var _Radius = __webpack_require__(19);
	
	var _Radius2 = _interopRequireDefault(_Radius);
	
	var _Position = __webpack_require__(20);
	
	var _Position2 = _interopRequireDefault(_Position);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Rate = _Rate2.default;
	exports.Velocity = _Velocity2.default;
	exports.Life = _Life2.default;
	exports.Mass = _Mass2.default;
	exports.Radius = _Radius2.default;
	exports.Position = _Position2.default;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Initialize2 = __webpack_require__(12);
	
	var _Initialize3 = _interopRequireDefault(_Initialize2);
	
	var _Util = __webpack_require__(7);
	
	var _Util2 = _interopRequireDefault(_Util);
	
	var _const = __webpack_require__(2);
	
	var _Polar2D = __webpack_require__(16);
	
	var _Polar2D2 = _interopRequireDefault(_Polar2D);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Velocity = function (_Initialize) {
		_inherits(Velocity, _Initialize);
	
		function Velocity(rpan, thapan, type) {
			_classCallCheck(this, Velocity);
	
			var _this = _possibleConstructorReturn(this, (Velocity.__proto__ || Object.getPrototypeOf(Velocity)).call(this));
	
			_this.rPan = _Util2.default.setSpanValue(rpan);
			_this.thaPan = _Util2.default.setSpanValue(thapan);
			_this.type = _Util2.default.initValue(type, 'vector');
			return _this;
		}
	
		_createClass(Velocity, [{
			key: 'reset',
			value: function reset(rpan, thapan, type) {
				this.rPan = _Util2.default.setSpanValue(rpan);
				this.thaPan = _Util2.default.setSpanValue(thapan);
				this.type = _Util2.default.initValue(type, 'vector');
			}
		}, {
			key: 'normalizeVelocity',
			value: function normalizeVelocity(vr) {
				return vr * _const.MEASURE;
			}
		}, {
			key: 'initialize',
			value: function initialize(target) {
				if (this.type == 'p' || this.type == 'P' || this.type == 'polar') {
					var polar2d = new _Polar2D2.default(this.normalizeVelocity(this.rPan.getValue()), this.thaPan.getValue() * Math.PI / 180);
					target.v.x = polar2d.getX();
					target.v.y = polar2d.getY();
				} else {
					target.v.x = this.normalizeVelocity(this.rPan.getValue());
					target.v.y = this.normalizeVelocity(this.thaPan.getValue());
				}
			}
		}]);
	
		return Velocity;
	}(_Initialize3.default);
	
	exports.default = Velocity;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Vector2D = __webpack_require__(5);
	
	var _Vector2D2 = _interopRequireDefault(_Vector2D);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Polar2D = function () {
		function Polar2D(r, tha) {
			_classCallCheck(this, Polar2D);
	
			this.r = Math.abs(r) || 0;
			this.tha = tha || 0;
		}
	
		_createClass(Polar2D, [{
			key: 'set',
			value: function set(r, tha) {
	
				this.r = r;
				this.tha = tha;
				return this;
			}
		}, {
			key: 'setR',
			value: function setR(r) {
	
				this.r = r;
				return this;
			}
		}, {
			key: 'setTha',
			value: function setTha(tha) {
	
				this.tha = tha;
	
				return this;
			}
		}, {
			key: 'copy',
			value: function copy(p) {
	
				this.r = p.r;
				this.tha = p.tha;
	
				return this;
			}
		}, {
			key: 'toVector',
			value: function toVector() {
				return new _Vector2D2.default(this.getX(), this.getY());
			}
		}, {
			key: 'getX',
			value: function getX() {
				return this.r * Math.sin(this.tha);
			}
		}, {
			key: 'getY',
			value: function getY() {
				return -this.r * Math.cos(this.tha);
			}
		}, {
			key: 'normalize',
			value: function normalize() {
	
				this.r = 1;
				return this;
			}
		}, {
			key: 'equals',
			value: function equals(v) {
	
				return v.r === this.r && v.tha === this.tha;
			}
		}, {
			key: 'toArray',
			value: function toArray() {
	
				return [this.r, this.tha];
			}
		}, {
			key: 'clear',
			value: function clear() {
				this.r = 0.0;
				this.tha = 0.0;
				return this;
			}
		}, {
			key: 'clone',
			value: function clone() {
	
				return new Polar2D(this.r, this.tha);
			}
		}]);
	
		return Polar2D;
	}();
	
	exports.default = Polar2D;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Initialize2 = __webpack_require__(12);
	
	var _Initialize3 = _interopRequireDefault(_Initialize2);
	
	var _Util = __webpack_require__(7);
	
	var _Util2 = _interopRequireDefault(_Util);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Life = function (_Initialize) {
		_inherits(Life, _Initialize);
	
		function Life(a, b, c) {
			_classCallCheck(this, Life);
	
			var _this = _possibleConstructorReturn(this, (Life.__proto__ || Object.getPrototypeOf(Life)).call(this));
	
			_this.lifePan = _Util2.default.setSpanValue(a, b, c);
			return _this;
		}
	
		_createClass(Life, [{
			key: 'initialize',
			value: function initialize(target) {
				if (this.lifePan.a == Infinity) {
					target.life = Infinity;
				} else {
					target.life = this.lifePan.getValue();
				}
			}
		}]);
	
		return Life;
	}(_Initialize3.default);
	
	exports.default = Life;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Initialize2 = __webpack_require__(12);
	
	var _Initialize3 = _interopRequireDefault(_Initialize2);
	
	var _Util = __webpack_require__(7);
	
	var _Util2 = _interopRequireDefault(_Util);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Mass = function (_Initialize) {
	    _inherits(Mass, _Initialize);
	
	    function Mass(a, b, c) {
	        _classCallCheck(this, Mass);
	
	        var _this = _possibleConstructorReturn(this, (Mass.__proto__ || Object.getPrototypeOf(Mass)).call(this));
	
	        _this.massPan = _Util2.default.setSpanValue(a, b, c);
	        return _this;
	    }
	
	    _createClass(Mass, [{
	        key: 'initialize',
	        value: function initialize(target) {
	            target.mass = this.massPan.getValue();
	        }
	    }]);
	
	    return Mass;
	}(_Initialize3.default);
	
	exports.default = Mass;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Initialize2 = __webpack_require__(12);
	
	var _Initialize3 = _interopRequireDefault(_Initialize2);
	
	var _Util = __webpack_require__(7);
	
	var _Util2 = _interopRequireDefault(_Util);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Radius = function (_Initialize) {
	    _inherits(Radius, _Initialize);
	
	    function Radius(a, b, c) {
	        _classCallCheck(this, Radius);
	
	        var _this = _possibleConstructorReturn(this, (Radius.__proto__ || Object.getPrototypeOf(Radius)).call(this));
	
	        _this.radius = _Util2.default.setSpanValue(a, b, c);
	        return _this;
	    }
	
	    _createClass(Radius, [{
	        key: 'reset',
	        value: function reset(a, b, c) {
	            this.radius = _Util2.default.setSpanValue(a, b, c);
	        }
	    }, {
	        key: 'initialize',
	        value: function initialize(particle) {
	            particle.radius = this.radius.getValue();
	            particle.transform.oldRadius = particle.radius;
	        }
	    }]);
	
	    return Radius;
	}(_Initialize3.default);
	
	exports.default = Radius;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Initialize2 = __webpack_require__(12);
	
	var _Initialize3 = _interopRequireDefault(_Initialize2);
	
	var _Util = __webpack_require__(7);
	
	var _Util2 = _interopRequireDefault(_Util);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Position = function (_Initialize) {
	    _inherits(Position, _Initialize);
	
	    function Position(zone) {
	        _classCallCheck(this, Position);
	
	        var _this = _possibleConstructorReturn(this, (Position.__proto__ || Object.getPrototypeOf(Position)).call(this));
	
	        _this.zone = zone || new PointZone();
	        return _this;
	    }
	
	    _createClass(Position, [{
	        key: 'reset',
	        value: function reset(zone) {
	            this.zone = zone || new PointZone();
	        }
	    }, {
	        key: 'initialize',
	        value: function initialize(target) {
	            this.zone.getPosition();
	            target.p.x = this.zone.vector.x;
	            target.p.y = this.zone.vector.y;
	        }
	    }]);
	
	    return Position;
	}(_Initialize3.default);
	
	exports.default = Position;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Zone2 = __webpack_require__(22);
	
	var _Zone3 = _interopRequireDefault(_Zone2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var RectZone = function (_Zone) {
		_inherits(RectZone, _Zone);
	
		function RectZone(x, y, width, height) {
			_classCallCheck(this, RectZone);
	
			var _this = _possibleConstructorReturn(this, (RectZone.__proto__ || Object.getPrototypeOf(RectZone)).call(this));
	
			_this.x = x;
			_this.y = y;
			_this.width = width;
			_this.height = height;
			return _this;
		}
	
		_createClass(RectZone, [{
			key: 'getPosition',
			value: function getPosition() {
				this.vector.x = this.x + Math.random() * this.width;
				this.vector.y = this.y + Math.random() * this.height;
	
				return this.vector;
			}
		}, {
			key: 'crossing',
			value: function crossing(particle) {
				if (this.crossType == 'dead') {
					if (particle.p.x + particle.radius < this.x) particle.dead = true;else if (particle.p.x - particle.radius > this.x + this.width) particle.dead = true;
	
					if (particle.p.y + particle.radius < this.y) particle.dead = true;else if (particle.p.y - particle.radius > this.y + this.height) particle.dead = true;
				} else if (this.crossType == 'bound') {
					if (particle.p.x - particle.radius < this.x) {
						particle.p.x = this.x + particle.radius;
						particle.v.x *= -1;
					} else if (particle.p.x + particle.radius > this.x + this.width) {
						particle.p.x = this.x + this.width - particle.radius;
						particle.v.x *= -1;
					}
	
					if (particle.p.y - particle.radius < this.y) {
						particle.p.y = this.y + particle.radius;
						particle.v.y *= -1;
					} else if (particle.p.y + particle.radius > this.y + this.height) {
						particle.p.y = this.y + this.height - particle.radius;
						particle.v.y *= -1;
					}
				} else if (this.crossType == 'cross') {
					if (particle.p.x + particle.radius < this.x && particle.v.x <= 0) particle.p.x = this.x + this.width + particle.radius;else if (particle.p.x - particle.radius > this.x + this.width && particle.v.x >= 0) particle.p.x = this.x - particle.radius;
	
					if (particle.p.y + particle.radius < this.y && particle.v.y <= 0) particle.p.y = this.y + this.height + particle.radius;else if (particle.p.y - particle.radius > this.y + this.height && particle.v.y >= 0) particle.p.y = this.y - particle.radius;
				}
			}
		}]);
	
		return RectZone;
	}(_Zone3.default);
	
	exports.default = RectZone;

/***/ },
/* 22 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Zone = function () {
		function Zone() {
			_classCallCheck(this, Zone);
	
			this.vector = new Proton.Vector2D(0, 0);
			this.random = 0;
			this.crossType = 'dead';
			this.alert = true;
		}
	
		_createClass(Zone, [{
			key: 'getPosition',
			value: function getPosition() {}
		}, {
			key: 'crossing',
			value: function crossing(particle) {}
		}]);
	
		return Zone;
	}();
	
	exports.default = Zone;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Zone2 = __webpack_require__(22);
	
	var _Zone3 = _interopRequireDefault(_Zone2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var PointZone = function (_Zone) {
		_inherits(PointZone, _Zone);
	
		function PointZone(x, y) {
			_classCallCheck(this, PointZone);
	
			var _this = _possibleConstructorReturn(this, (PointZone.__proto__ || Object.getPrototypeOf(PointZone)).call(this));
	
			_this.x = x;
			_this.y = y;
			return _this;
		}
	
		_createClass(PointZone, [{
			key: 'getPosition',
			value: function getPosition() {
				this.vector.x = this.x;
				this.vector.y = this.y;
	
				return this.vector;
			}
		}, {
			key: 'crossing',
			value: function crossing(particle) {
				if (this.alert) {
					alert('Sorry PointZone does not support crossing method');
					this.alert = false;
				}
			}
		}]);
	
		return PointZone;
	}(_Zone3.default);
	
	exports.default = PointZone;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Zone2 = __webpack_require__(22);
	
	var _Zone3 = _interopRequireDefault(_Zone2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var LineZone = function (_Zone) {
		_inherits(LineZone, _Zone);
	
		function LineZone(x1, y1, x2, y2, direction) {
			_classCallCheck(this, LineZone);
	
			var _this = _possibleConstructorReturn(this, (LineZone.__proto__ || Object.getPrototypeOf(LineZone)).call(this));
	
			if (x2 - x1 >= 0) {
				_this.x1 = x1;
				_this.y1 = y1;
				_this.x2 = x2;
				_this.y2 = y2;
			} else {
				_this.x1 = x2;
				_this.y1 = y2;
				_this.x2 = x1;
				_this.y2 = y1;
			}
			_this.dx = _this.x2 - _this.x1;
			_this.dy = _this.y2 - _this.y1;
			_this.minx = Math.min(_this.x1, _this.x2);
			_this.miny = Math.min(_this.y1, _this.y2);
			_this.maxx = Math.max(_this.x1, _this.x2);
			_this.maxy = Math.max(_this.y1, _this.y2);
			_this.dot = _this.x2 * _this.y1 - _this.x1 * _this.y2;
			_this.xxyy = _this.dx * _this.dx + _this.dy * _this.dy;
			_this.gradient = _this.getGradient();
			_this.length = _this.getLength();
			_this.direction = direction || '>';
			return _this;
		}
	
		_createClass(LineZone, [{
			key: 'getPosition',
			value: function getPosition() {
				this.random = Math.random();
				this.vector.x = this.x1 + this.random * this.length * Math.cos(this.gradient);
				this.vector.y = this.y1 + this.random * this.length * Math.sin(this.gradient);
	
				return this.vector;
			}
		}, {
			key: 'crossing',
			value: function crossing(particle) {
				var self = this;
				if (this.crossType == "dead") {
					if (this.direction == ">" || this.direction == "R" || this.direction == "right" || this.direction == "down") {
						this.getRange(particle, function () {
							if (self.getDirection(particle.p.x, particle.p.y)) particle.dead = true;
						});
					} else {
						this.getRange(particle, function () {
							if (!self.getDirection(particle.p.x, particle.p.y)) particle.dead = true;
						});
					}
				} else if (this.crossType == "bound") {
					this.getRange(particle, function () {
						if (self.getDistance(particle.p.x, particle.p.y) <= particle.radius) {
							if (self.dx == 0) {
								particle.v.x *= -1;
							} else if (self.dy == 0) {
								particle.v.y *= -1;
							} else {
								self.getSymmetric(particle.v);
							}
						}
					});
				} else if (this.crossType == "cross") {
					if (this.alert) {
						alert('Sorry lineZone does not support cross method');
						this.alert = false;
					}
				}
			}
		}, {
			key: 'getDirection',
			value: function getDirection(x, y) {
				var A = this.dy;
				var B = -this.dx;
				var C = this.dot;
				var D = B == 0 ? 1 : B;
				if ((A * x + B * y + C) * D > 0) return true;else return false;
			}
		}, {
			key: 'getDistance',
			value: function getDistance(x, y) {
				var A = this.dy;
				var B = -this.dx;
				var C = this.dot;
				var D = A * x + B * y + C;
				return D / Math.sqrt(this.xxyy);
			}
		}, {
			key: 'getSymmetric',
			value: function getSymmetric(v) {
				var tha2 = v.getGradient();
				var tha1 = this.getGradient();
				var tha = 2 * (tha1 - tha2);
				var oldx = v.x;
				var oldy = v.y;
				v.x = oldx * Math.cos(tha) - oldy * Math.sin(tha);
				v.y = oldx * Math.sin(tha) + oldy * Math.cos(tha);
				return v;
			}
		}, {
			key: 'getGradient',
			value: function getGradient() {
				return Math.atan2(this.dy, this.dx);
			}
		}, {
			key: 'getRange',
			value: function getRange(particle, fun) {
				var angle = Math.abs(this.getGradient());
				if (angle <= Math.PI / 4) {
					if (particle.p.x < this.maxx && particle.p.x > this.minx) {
						fun();
					}
				} else {
					if (particle.p.y < this.maxy && particle.p.y > this.miny) {
						fun();
					}
				}
			}
		}, {
			key: 'getLength',
			value: function getLength() {
				return Math.sqrt(this.dx * this.dx + this.dy * this.dy);
			}
		}, {
			key: 'crossing',
			value: function crossing(particle) {
				var self = this;
				if (this.crossType == "dead") {
					if (this.direction == ">" || this.direction == "R" || this.direction == "right" || this.direction == "down") {
						this.getRange(particle, function () {
							if (self.getDirection(particle.p.x, particle.p.y)) particle.dead = true;
						});
					} else {
						this.getRange(particle, function () {
							if (!self.getDirection(particle.p.x, particle.p.y)) particle.dead = true;
						});
					}
				} else if (this.crossType == "bound") {
					this.getRange(particle, function () {
						if (self.getDistance(particle.p.x, particle.p.y) <= particle.radius) {
							if (self.dx == 0) {
								particle.v.x *= -1;
							} else if (self.dy == 0) {
								particle.v.y *= -1;
							} else {
								self.getSymmetric(particle.v);
							}
						}
					});
				} else if (this.crossType == "cross") {
					if (this.alert) {
						alert('Sorry lineZone does not support cross method');
						this.alert = false;
					}
				}
			}
		}]);
	
		return LineZone;
	}(_Zone3.default);
	
	exports.default = LineZone;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Zone2 = __webpack_require__(22);
	
	var _Zone3 = _interopRequireDefault(_Zone2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var PointZone = function (_Zone) {
		_inherits(PointZone, _Zone);
	
		function PointZone(imageData, x, y, d) {
			_classCallCheck(this, PointZone);
	
			var _this = _possibleConstructorReturn(this, (PointZone.__proto__ || Object.getPrototypeOf(PointZone)).call(this));
	
			_this.reset(imageData, x, y, d);
			return _this;
		}
	
		_createClass(PointZone, [{
			key: "reset",
			value: function reset(imageData, x, y, d) {
				this.imageData = imageData;
				this.x = x;
				this.y = y;
				this.d = d || 2;
				this.vectors = [];
				this.setVectors();
			}
		}, {
			key: "setVectors",
			value: function setVectors() {
				var i, j;
				var length1 = this.imageData.width;
				var length2 = this.imageData.height;
				for (i = 0; i < length1; i += this.d) {
					for (j = 0; j < length2; j += this.d) {
						var index = ((j >> 0) * length1 + (i >> 0)) * 4;
						if (this.imageData.data[index + 3] > 0) {
							this.vectors.push({
								x: i + this.x,
								y: j + this.y
							});
						}
					}
				}
				return this.vector;
			}
		}, {
			key: "getBound",
			value: function getBound(x, y) {
				var index = ((y >> 0) * this.imageData.width + (x >> 0)) * 4;
				if (this.imageData.data[index + 3] > 0) return true;else return false;
			}
		}, {
			key: "getPosition",
			value: function getPosition() {
				return this.vector.copy(this.vectors[Math.floor(Math.random() * this.vectors.length)]);
			}
		}, {
			key: "getColor",
			value: function getColor(x, y) {
				x -= this.x;
				y -= this.y;
				var i = ((y >> 0) * this.imageData.width + (x >> 0)) * 4;
				return {
					r: this.imageData.data[i],
					g: this.imageData.data[i + 1],
					b: this.imageData.data[i + 2],
					a: this.imageData.data[i + 3]
				};
			}
		}, {
			key: "crossing",
			value: function crossing(particle) {
				if (this.crossType == "dead") {
					if (this.getBound(particle.p.x - this.x, particle.p.y - this.y)) particle.dead = true;else particle.dead = false;
				} else if (this.crossType == "bound") {
					if (!this.getBound(particle.p.x - this.x, particle.p.y - this.y)) particle.v.negate();
				}
			}
		}]);
	
		return PointZone;
	}(_Zone3.default);
	
	exports.default = PointZone;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Zone2 = __webpack_require__(22);
	
	var _Zone3 = _interopRequireDefault(_Zone2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var PointZone = function (_Zone) {
		_inherits(PointZone, _Zone);
	
		function PointZone(x, y, radius) {
			_classCallCheck(this, PointZone);
	
			var _this = _possibleConstructorReturn(this, (PointZone.__proto__ || Object.getPrototypeOf(PointZone)).call(this));
	
			_this.x = x;
			_this.y = y;
			_this.radius = radius;
			_this.angle = 0;
			_this.center = {
				x: _this.x,
				y: _this.y
			};
			return _this;
		}
	
		_createClass(PointZone, [{
			key: "getPosition",
			value: function getPosition() {
				this.random = Math.random();
				this.angle = Math.PI * 2 * Math.random();
				this.vector.x = this.x + this.random * this.radius * Math.cos(this.angle);
				this.vector.y = this.y + this.random * this.radius * Math.sin(this.angle);
				return this.vector;
			}
		}, {
			key: "setCenter",
			value: function setCenter(x, y) {
				this.center.x = x;
				this.center.y = y;
			}
		}, {
			key: "crossing",
			value: function crossing(particle) {
				var d = particle.p.distanceTo(this.center);
				if (this.crossType == "dead") {
					if (d - particle.radius > this.radius) particle.dead = true;
				} else if (this.crossType == "bound") {
					if (d + particle.radius >= this.radius) this.getSymmetric(particle);
				} else if (this.crossType == "cross") {
					if (this.alert) {
						alert('Sorry CircleZone does not support cross method');
						this.alert = false;
					}
				}
			}
		}, {
			key: "getSymmetric",
			value: function getSymmetric(particle) {
				var tha2 = particle.v.getGradient();
				var tha1 = this.getGradient(particle);
				var tha = 2 * (tha1 - tha2);
				var oldx = particle.v.x;
				var oldy = particle.v.y;
				particle.v.x = oldx * Math.cos(tha) - oldy * Math.sin(tha);
				particle.v.y = oldx * Math.sin(tha) + oldy * Math.cos(tha);
			}
		}, {
			key: "getGradient",
			value: function getGradient(particle) {
				return -Math.PI / 2 + Math.atan2(particle.p.y - this.center.y, particle.p.x - this.center.x);
			}
		}]);
	
		return PointZone;
	}(_Zone3.default);
	
	exports.default = PointZone;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _Behaviour2 = __webpack_require__(28);
	
	var _Behaviour3 = _interopRequireDefault(_Behaviour2);
	
	var _Util = __webpack_require__(7);
	
	var _Util2 = _interopRequireDefault(_Util);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Alpha = function (_Behaviour) {
		_inherits(Alpha, _Behaviour);
	
		function Alpha(a, b, life, easing) {
			_classCallCheck(this, Alpha);
	
			var _this = _possibleConstructorReturn(this, (Alpha.__proto__ || Object.getPrototypeOf(Alpha)).call(this, life, easing));
	
			_this.reset(a, b, _this.life);
			_this.name = "Alpha";
	
			_this.applyBehaviour = _this.applyBehaviour;
			return _this;
		}
	
		/**
	  * Reset this behaviour's parameters
	  *
	  * @method reset
	  * @memberof Quark#Quark.Alpha
	  * @instance
	  *
	  * @todo add description for 'a' and 'b'
	  *
	  * @param {Number} a
	  * @param {String} b
	  * @param {Number} [life=Infinity] 				this behaviour's life
	  * @param {String} [easing=Quark.easeLinear] 	this behaviour's easing
	  */
	
	
		_createClass(Alpha, [{
			key: 'reset',
			value: function reset(a, b, life, easing) {
				if (b == null || b == undefined) {
					this.same = true;
				} else {
					this.same = false;
				}
				this.a = _Util2.default.setSpanValue(a || 1);
				this.b = _Util2.default.setSpanValue(b);
				if (life) {
					_get(Alpha.prototype.__proto__ || Object.getPrototypeOf(Alpha.prototype), 'reset', this).call(this, life, easing);
				}
			}
	
			/**
	   * Sets the new alpha value of the particle
	   *
	   * @method initialize
	   * @memberof Quark#Quark.Alpha
	   * @instance
	   *
	   * @param {Quark.Particle} particle A single Quark generated particle
	   */
	
		}, {
			key: 'initialize',
			value: function initialize(particle) {
				particle.transform.alphaA = this.a.getValue();
				if (this.same) {
					particle.transform.alphaB = particle.transform.alphaA;
				} else {
					particle.transform.alphaB = this.b.getValue();
				}
			}
		}, {
			key: 'applyBehaviour',
	
	
			/**
	   * @method applyBehaviour
	   * @memberof Quark#Quark.Alpha
	   * @instance
	   *
	   * @param {Quark.Particle} particle
	   * @param {Number} 			time the integrate time 1/ms
	   * @param {Int} 			index the particle index
	  	 */
			value: function applyBehaviour(particle, time, index) {
				_get(Alpha.prototype.__proto__ || Object.getPrototypeOf(Alpha.prototype), 'applyBehaviour', this).call(this, particle, time, index);
				particle.alpha = particle.transform.alphaB + (particle.transform.alphaA - particle.transform.alphaB) * this.energy;
				if (particle.alpha < 0.001) particle.alpha = 0;
			}
		}]);
	
		return Alpha;
	}(_Behaviour3.default);
	
	exports.default = Alpha;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Util = __webpack_require__(7);
	
	var _Util2 = _interopRequireDefault(_Util);
	
	var _const = __webpack_require__(2);
	
	var _ease = __webpack_require__(29);
	
	var _ease2 = _interopRequireDefault(_ease);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var BEHAVIOUR_ID_BASE = 0xFFFFF;
	var uid = 0;
	
	var Behaviour = function () {
		function Behaviour(life) {
			var easing = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'easeLinear';
	
			_classCallCheck(this, Behaviour);
	
			this.id = BEHAVIOUR_ID_BASE + uid++;
			this.life = life || Infinity;
			this.easing = (0, _ease2.default)(easing);
			this.age = 0;
			this.energy = 1;
			this.dead = false;
			this.parents = [];
			this.name = 'Behaviour';
			this.applyBehaviour = this.applyBehaviour;
		}
	
		/**
	  * Reset this behaviour's parameters
	  *
	  * @method reset
	  * @memberof Proton.Behaviour
	  * @instance
	  *
	  * @param {Number} [life=Infinity] 		this behaviour's life
	  * @param {String} [easing=easeLinear] 	this behaviour's easing
	  */
	
	
		_createClass(Behaviour, [{
			key: 'reset',
			value: function reset(life, easing) {
				this.life = life || Infinity;
				this.easing = easing || (0, _ease2.default)('easeLinear');
			}
	
			/**
	   * Normalize a force by 1:100;
	   *
	   * @method normalizeForce
	   * @memberof Proton.Behaviour
	   * @instance
	   *
	   * @param {Proton.Vector2D} force 
	   */
	
		}, {
			key: 'normalizeForce',
			value: function normalizeForce(force) {
				return force.multiplyScalar(_const.MEASURE);
			}
	
			/**
	   * Normalize a value by 1:100;
	   *
	   * @method normalizeValue
	   * @memberof Proton.Behaviour
	   * @instance
	   *
	   * @param {Number} value
	   */
	
		}, {
			key: 'normalizeValue',
			value: function normalizeValue(value) {
				return value * _const.MEASURE;
			}
	
			/**
	   * Initialize the behaviour's parameters for all particles
	   *
	   * @method initialize
	   * @memberof Proton.Behaviour
	   * @instance
	   *
	   * @param {Proton.Particle} particle
	   */
	
		}, {
			key: 'initialize',
			value: function initialize(particle) {}
	
			/**
	   * Apply this behaviour for all particles every time
	   *
	   * @method applyBehaviour
	   * @memberof Proton.Behaviour
	   * @instance
	   *
	   * @param {Proton.Particle} particle
	   * @param {Number} 			time the integrate time 1/ms
	   * @param {Int} 			index the particle index
	   */
	
		}, {
			key: 'applyBehaviour',
			value: function applyBehaviour(particle, time, index) {
				this.age += time;
				if (this.age >= this.life || this.dead) {
					this.energy = 0;
					this.dead = true;
					this.destroy();
				} else {
					var scale = this.easing(particle.age / particle.life);
					this.energy = Math.max(1 - scale, 0);
				}
			}
	
			/**
	   * Destory this behaviour
	   *
	   * @method destroy
	   * @memberof Proton.Behaviour
	   * @instance
	   */
	
		}, {
			key: 'destroy',
			value: function destroy() {
				var index;
				var length = this.parents.length,
				    i;
				for (i = 0; i < length; i++) {
					this.parents[i].removeBehaviour(this);
				}
	
				this.parents = [];
			}
		}]);
	
		return Behaviour;
	}();
	
	exports.default = Behaviour;

/***/ },
/* 29 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = getEasingByName;
	var easing = {
		easeLinear: function easeLinear(value) {
			return value;
		},
	
		easeInQuad: function easeInQuad(value) {
			return Math.pow(value, 2);
		},
	
		easeOutQuad: function easeOutQuad(value) {
			return -(Math.pow(value - 1, 2) - 1);
		},
	
		easeInOutQuad: function easeInOutQuad(value) {
			if ((value /= 0.5) < 1) return 0.5 * Math.pow(value, 2);
			return -0.5 * ((value -= 2) * value - 2);
		},
	
		easeInCubic: function easeInCubic(value) {
			return Math.pow(value, 3);
		},
	
		easeOutCubic: function easeOutCubic(value) {
			return Math.pow(value - 1, 3) + 1;
		},
	
		easeInOutCubic: function easeInOutCubic(value) {
			if ((value /= 0.5) < 1) return 0.5 * Math.pow(value, 3);
			return 0.5 * (Math.pow(value - 2, 3) + 2);
		},
	
		easeInQuart: function easeInQuart(value) {
			return Math.pow(value, 4);
		},
	
		easeOutQuart: function easeOutQuart(value) {
			return -(Math.pow(value - 1, 4) - 1);
		},
	
		easeInOutQuart: function easeInOutQuart(value) {
			if ((value /= 0.5) < 1) return 0.5 * Math.pow(value, 4);
			return -0.5 * ((value -= 2) * Math.pow(value, 3) - 2);
		},
	
		easeInSine: function easeInSine(value) {
			return -Math.cos(value * (Math.PI / 2)) + 1;
		},
	
		easeOutSine: function easeOutSine(value) {
			return Math.sin(value * (Math.PI / 2));
		},
	
		easeInOutSine: function easeInOutSine(value) {
			return -0.5 * (Math.cos(Math.PI * value) - 1);
		},
	
		easeInExpo: function easeInExpo(value) {
			return value === 0 ? 0 : Math.pow(2, 10 * (value - 1));
		},
	
		easeOutExpo: function easeOutExpo(value) {
			return value === 1 ? 1 : -Math.pow(2, -10 * value) + 1;
		},
	
		easeInOutExpo: function easeInOutExpo(value) {
			if (value === 0) return 0;
			if (value === 1) return 1;
			if ((value /= 0.5) < 1) return 0.5 * Math.pow(2, 10 * (value - 1));
			return 0.5 * (-Math.pow(2, -10 * --value) + 2);
		},
	
		easeInCirc: function easeInCirc(value) {
			return -(Math.sqrt(1 - value * value) - 1);
		},
	
		easeOutCirc: function easeOutCirc(value) {
			return Math.sqrt(1 - Math.pow(value - 1, 2));
		},
	
		easeInOutCirc: function easeInOutCirc(value) {
			if ((value /= 0.5) < 1) return -0.5 * (Math.sqrt(1 - value * value) - 1);
			return 0.5 * (Math.sqrt(1 - (value -= 2) * value) + 1);
		},
	
		easeInBack: function easeInBack(value) {
			var s = 1.70158;
			return value * value * ((s + 1) * value - s);
		},
	
		easeOutBack: function easeOutBack(value) {
			var s = 1.70158;
			return (value = value - 1) * value * ((s + 1) * value + s) + 1;
		},
	
		easeInOutBack: function easeInOutBack(value) {
			var s = 1.70158;
			if ((value /= 0.5) < 1) return 0.5 * (value * value * (((s *= 1.525) + 1) * value - s));
			return 0.5 * ((value -= 2) * value * (((s *= 1.525) + 1) * value + s) + 2);
		}
	};
	
	function getEasingByName(name) {
		return easing[name];
	}

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _Behaviour2 = __webpack_require__(28);
	
	var _Behaviour3 = _interopRequireDefault(_Behaviour2);
	
	var _Vector2D = __webpack_require__(5);
	
	var _Vector2D2 = _interopRequireDefault(_Vector2D);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Attraction = function (_Behaviour) {
		_inherits(Attraction, _Behaviour);
	
		function Attraction(targetPosition, force, radius, life, easing) {
			_classCallCheck(this, Attraction);
	
			var _this = _possibleConstructorReturn(this, (Attraction.__proto__ || Object.getPrototypeOf(Attraction)).call(this, life, easing));
	
			_this.targetPosition = targetPosition || new _Vector2D2.default();
			_this.radius = radius || 1000;
			_this.force = _this.normalizeValue(force) || 100;
			_this.radiusSq = _this.radius * _this.radius;
			_this.attractionForce = new _Vector2D2.default();
			_this.lengthSq = 0;
			_this.name = "Attraction";
	
			_this.applyBehaviour = _this.applyBehaviour;
			return _this;
		}
	
		/**
	  * Reset this behaviour's parameters
	  *
	  * @method reset
	  * @memberof Proton#Proton.Attraction
	  * @instance
	  *
	  * @todo add description for 'force' and 'radius'
	  *
	  * @param {Proton.Vector2D} targetPosition the attraction point coordinates
	  * @param {Number} [force=100]
	  * @param {Number} [radius=1000]
	  * @param {Number} [life=Infinity] 				this behaviour's life
	  * @param {String} [easing=Proton.easeLinear] 	this behaviour's easing
	  */
	
	
		_createClass(Attraction, [{
			key: 'reset',
			value: function reset(targetPosition, force, radius, life, easing) {
				this.targetPosition = targetPosition || new Proton.Vector2D();
				this.radius = radius || 1000;
				this.force = this.normalizeValue(force) || 100;
				this.radiusSq = this.radius * this.radius;
				this.attractionForce = new _Vector2D2.default();
				this.lengthSq = 0;
				if (life) {
					_get(Attraction.prototype.__proto__ || Object.getPrototypeOf(Attraction.prototype), 'reset', this).call(this, life, easing);
				}
			}
	
			/**
	   * Apply this behaviour for all particles every time
	   *
	   * @memberof Proton#Proton.Attraction
	   * @method applyBehaviour
	   * @instance
	   *
	   * @param {Proton.Particle} particle
	   * @param {Number} 			time the integrate time 1/ms
	   * @param {Int} 			index the particle index
	   */
	
		}, {
			key: 'applyBehaviour',
			value: function applyBehaviour(particle, time, index) {
				_get(Attraction.prototype.__proto__ || Object.getPrototypeOf(Attraction.prototype), 'applyBehaviour', this).call(this, particle, time, index);
	
				this.attractionForce.copy(this.targetPosition);
				this.attractionForce.sub(particle.p);
				this.lengthSq = this.attractionForce.lengthSq();
				if (this.lengthSq > 0.000004 && this.lengthSq < this.radiusSq) {
					this.attractionForce.normalize();
					this.attractionForce.multiplyScalar(1 - this.lengthSq / this.radiusSq);
					this.attractionForce.multiplyScalar(this.force);
					particle.a.add(this.attractionForce);
				}
			}
		}]);
	
		return Attraction;
	}(_Behaviour3.default);
	
	exports.default = Attraction;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _Behaviour2 = __webpack_require__(28);
	
	var _Behaviour3 = _interopRequireDefault(_Behaviour2);
	
	var _Util = __webpack_require__(7);
	
	var _Util2 = _interopRequireDefault(_Util);
	
	var _Vector2D = __webpack_require__(5);
	
	var _Vector2D2 = _interopRequireDefault(_Vector2D);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Collision = function (_Behaviour) {
		_inherits(Collision, _Behaviour);
	
		function Collision(emitter, mass, callback, life, easing) {
			_classCallCheck(this, Collision);
	
			var _this = _possibleConstructorReturn(this, (Collision.__proto__ || Object.getPrototypeOf(Collision)).call(this, life, easing));
	
			_this.reset(emitter, mass, callback);
			_this.name = "Collision";
			_this.applyBehaviour = _this.applyBehaviour;
			return _this;
		}
	
		/**
	  * Reset this behaviour's parameters
	  *
	  * @memberof Proton#Proton.Collision
	  * @method reset
	  * @instance
	  *
	  * @todo add description to mass
	  *
	  * @param {Proton.Emitter} 	[emitter=null] 		the attraction point coordinates
	  * @param {Boolean} 		[mass=true]			
	  * @param {Callback}	 	[callback=null]		the callback after the collision
	  * @param {Number} 			[life=Infinity] 	this behaviour's life
	  * @param {String} [easing=Proton.easeLinear] 	this behaviour's easing
	  */
	
	
		_createClass(Collision, [{
			key: 'reset',
			value: function reset(emitter, mass, callback, life, easing) {
				this.emitter = emitter || null;
				this.mass = mass || true;
				this.callback = callback || null;
				this.collisionPool = [];
				this.delta = new _Vector2D2.default();
				if (life) {
					_get(Collision.prototype.__proto__ || Object.getPrototypeOf(Collision.prototype), 'reset', this).call(this, life, easing);
				}
			}
	
			/**
	   * Apply this behaviour for all particles every time
	   *
	   * @memberof Proton#Proton.Collision
	   * @method applyBehaviour
	   * @instance
	   *
	   * @param {Proton.Particle} particle
	   * @param {Number} 			time the integrate time 1/ms
	   * @param {Int} 			index the particle index
	   */
	
		}, {
			key: 'applyBehaviour',
			value: function applyBehaviour(particle, time, index) {
				var newPool = this.emitter.particles.slice(index);
				var otherParticle = void 0;
				var lengthSq = void 0;
				var overlap = void 0;
				var averageMass1 = void 0,
				    averageMass2 = void 0;
				var length = newPool.length;
				for (var i = 0; i < length; i++) {
					otherParticle = newPool[i];
					if (otherParticle !== particle) {
						this.delta.copy(otherParticle.p);
						this.delta.sub(particle.p);
						lengthSq = this.delta.lengthSq();
						var distance = particle.radius + otherParticle.radius;
	
						if (lengthSq <= distance * distance) {
							overlap = distance - Math.sqrt(lengthSq);
							overlap += 0.5;
							var totalMass = particle.mass + otherParticle.mass;
							averageMass1 = this.mass ? otherParticle.mass / totalMass : 0.5;
							averageMass2 = this.mass ? particle.mass / totalMass : 0.5;
							particle.p.add(this.delta.clone().normalize().multiplyScalar(overlap * -averageMass1));
							otherParticle.p.add(this.delta.normalize().multiplyScalar(overlap * averageMass2));
							if (this.callback) {
								this.callback(particle, otherParticle);
							}
						}
					}
				}
			}
		}]);
	
		return Collision;
	}(_Behaviour3.default);
	
	exports.default = Collision;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA2MGQ1ZmJiOGQ5NzQ5NTVlYTZjYSIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VtaXR0ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VtaXR0ZXIvY29uc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VtaXR0ZXIvRW1pdHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9QYXJ0aWNsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWF0aC9WZWN0b3IyRC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5pdGlhbGl6ZS9SYXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL1V0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hdGgvU3Bhbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWF0aC9NYXRoVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hdGgvTnVtZXJpY2FsSW50ZWdyYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luaXRpYWxpemUvSW5pdGlhbGl6ZVV0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luaXRpYWxpemUvSW5pdGlhbGl6ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L21pbmktc2lnbmFscy9saWIvbWluaS1zaWduYWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9pbml0aWFsaXplL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pbml0aWFsaXplL1ZlbG9jaXR5LmpzIiwid2VicGFjazovLy8uL3NyYy9tYXRoL1BvbGFyMkQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luaXRpYWxpemUvTGlmZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5pdGlhbGl6ZS9NYXNzLmpzIiwid2VicGFjazovLy8uL3NyYy9pbml0aWFsaXplL1JhZGl1cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5pdGlhbGl6ZS9Qb3NpdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvem9uZS9SZWN0Wm9uZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvem9uZS9ab25lLmpzIiwid2VicGFjazovLy8uL3NyYy96b25lL1BvaW50Wm9uZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvem9uZS9MaW5lWm9uZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvem9uZS9JbWFnZVpvbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3pvbmUvQ2lyY2xlWm9uZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmVoYXZpb3VyL0FscGhhLmpzIiwid2VicGFjazovLy8uL3NyYy9iZWhhdmlvdXIvQmVoYXZpb3VyLmpzIiwid2VicGFjazovLy8uL3NyYy9tYXRoL2Vhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JlaGF2aW91ci9BdHRyYWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9iZWhhdmlvdXIvQ29sbGlzaW9uLmpzIl0sIm5hbWVzIjpbImdldFNwYW4iLCJhIiwiYiIsImNlbnRlciIsIlNwYW4iLCJSZWN0Wm9uZSIsIlBvaW50Wm9uZSIsIkxpbmVab25lIiwiSW1hZ2Vab25lIiwiQ2lyY2xlWm9uZSIsIkFscGhhIiwiQXR0cmFjdGlvbiIsIkNvbGxpc2lvbiIsImdsb2JhbCIsIlF1YXJrIiwiZXhwb3J0cyIsIkVtaXR0ZXIiLCJQT09MX01BWCIsIlRJTUVfU1RFUCIsIlVTRV9DTE9DSyIsIk1FQVNVUkUiLCJFVUxFUiIsIlJLMiIsIlJLNCIsIlZFUkxFVCIsIlBBUlRJQ0xFX0NSRUFURUQiLCJQQVJUSUNMRV9VUERBVEUiLCJQQVJUSUNMRV9TTEVFUCIsIlBBUlRJQ0xFX0RFQUQiLCJFTUlUVEVSX0FEREVEIiwiRU1JVFRFUl9SRU1PVkVEIiwiaW5pdGlhbGl6ZXMiLCJiZWhhdmlvdXJzIiwiZW1pdFRpbWUiLCJlbWl0VG90YWxUaW1lcyIsImRhbXBpbmciLCJiaW5kRW1pdHRlciIsInJhdGUiLCJpbnRlZ3JhdG9yIiwiX3RhaWxQYXJ0aWNsZSIsIl9wb29sSGVhZCIsInVwZGF0ZSIsImNyZWF0ZVBhcnRpY2xlIiwiaW50ZWdyYXRlIiwic2V0dXBQYXJ0aWNsZSIsImxpZmUiLCJJbmZpbml0eSIsImlzTmFOIiwiaW5pdCIsInBhcnRpY2xlQ3JlYXRlZCIsInBhcnRpY2xlVXBkYXRlIiwicGFydGljbGVEZWFkIiwiaW5pdGlhbGl6ZSIsImJlaGF2aW91ciIsInBhcnRpY2xlIiwiZGlzcGF0Y2giLCJwT2JqIiwiaW5pdEFsbCIsImxlbmd0aCIsImFyZ3VtZW50cyIsImkiLCJwdXNoIiwiaW5pdGlhbGl6ZXIiLCJpbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJoYXNPd25Qcm9wZXJ0eSIsInBhcmVudHMiLCJ0aW1lIiwiX3ByZXYiLCJkZWFkIiwiZ2V0VmFsdWUiLCJhZ2UiLCJkZXN0cm95IiwiZW1pdHRpbmciLCJBcnJheSIsInJlc2V0IiwiYWRkQmVoYXZpb3VycyIsInBhcmVudCIsInJlbW92ZUluaXRpYWxpemVycyIsInJlbW92ZUFsbEJlaGF2aW91cnMiLCJyZW1vdmVFbWl0dGVyIiwidWlkIiwiUGFydGljbGUiLCJpZCIsIk1hdGgiLCJhdGFuMiIsInYiLCJ4IiwieSIsIlBJIiwiZW5lcmd5Iiwic2xlZXAiLCJ0YXJnZXQiLCJzcHJpdGUiLCJtYXNzIiwicmFkaXVzIiwiYWxwaGEiLCJzY2FsZSIsInJvdGF0aW9uIiwiY29sb3IiLCJlYXNpbmciLCJ2YWwiLCJ0cmFuc2Zvcm0iLCJwIiwib2xkIiwic2V0IiwicmdiIiwiciIsImciLCJhcHBseUJlaGF2aW91ciIsIm1heCIsImFkZEJlaGF2aW91ciIsIlZlY3RvcjJEIiwidmFsdWUiLCJFcnJvciIsInciLCJ1bmRlZmluZWQiLCJhZGRWZWN0b3JzIiwicyIsInN1YlZlY3RvcnMiLCJtaW4iLCJtdWx0aXBseVNjYWxhciIsInNxcnQiLCJkaXZpZGVTY2FsYXIiLCJkaXN0YW5jZVRvU3F1YXJlZCIsInRoYSIsImNvcyIsInNpbiIsImR4IiwiZHkiLCJsIiwib2xkTGVuZ3RoIiwiUmF0ZSIsIm51bXBhbiIsInRpbWVwYW4iLCJudW1QYW4iLCJ0aW1lUGFuIiwic2V0U3BhblZhbHVlIiwic3RhcnRUaW1lIiwibmV4dFRpbWUiLCJpbml0VmFsdWUiLCJkZWZhdWx0cyIsImdldFZlY3RvcjJEIiwicG9zdGlvbk9yWCIsInZlY3RvcjJkIiwianVkZ2VWZWN0b3IyRCIsInBPQkoiLCJyZXN1bHQiLCJzZXRWZWN0b3IyREJ5T2JqZWN0IiwiY29weSIsImMiLCJnZXRTcGFuVmFsdWUiLCJwYW4iLCJoZXhUb1JHQiIsImgiLCJoZXgxNiIsImNoYXJBdCIsInN1YnN0cmluZyIsInBhcnNlSW50IiwicmdiVG9IZXgiLCJyYmciLCJpc0FycmF5IiwiSU5UIiwiZmxvb3IiLCJyYW5kb20iLCJyYW5kb21BVG9CIiwicmFuZG9tRmxvYXRpbmciLCJkZWdyZWVUcmFuc2Zvcm0iLCJmIiwiTWF0aFV0aWxzIiwiTnVtZXJpY2FsSW50ZWdyYXRpb24iLCJ0eXBlIiwiZXVsZXJJbnRlZ3JhdGUiLCJhZGQiLCJjbGVhciIsIlV0aWwiLCJlbWl0dGVyIiwic2V0UHJvdG90eXBlQnlPYmplY3QiLCJyb3RhdGUiLCJJbml0aWFsaXplIiwiVmVsb2NpdHkiLCJMaWZlIiwiTWFzcyIsIlJhZGl1cyIsIlBvc2l0aW9uIiwicnBhbiIsInRoYXBhbiIsInJQYW4iLCJ0aGFQYW4iLCJ2ciIsInBvbGFyMmQiLCJub3JtYWxpemVWZWxvY2l0eSIsImdldFgiLCJnZXRZIiwiUG9sYXIyRCIsImFicyIsImxpZmVQYW4iLCJtYXNzUGFuIiwib2xkUmFkaXVzIiwiem9uZSIsImdldFBvc2l0aW9uIiwidmVjdG9yIiwid2lkdGgiLCJoZWlnaHQiLCJjcm9zc1R5cGUiLCJab25lIiwiUHJvdG9uIiwiYWxlcnQiLCJ4MSIsInkxIiwieDIiLCJ5MiIsImRpcmVjdGlvbiIsIm1pbngiLCJtaW55IiwibWF4eCIsIm1heHkiLCJkb3QiLCJ4eHl5IiwiZ3JhZGllbnQiLCJnZXRHcmFkaWVudCIsImdldExlbmd0aCIsInNlbGYiLCJnZXRSYW5nZSIsImdldERpcmVjdGlvbiIsImdldERpc3RhbmNlIiwiZ2V0U3ltbWV0cmljIiwiQSIsIkIiLCJDIiwiRCIsInRoYTIiLCJ0aGExIiwib2xkeCIsIm9sZHkiLCJmdW4iLCJhbmdsZSIsImltYWdlRGF0YSIsImQiLCJ2ZWN0b3JzIiwic2V0VmVjdG9ycyIsImoiLCJsZW5ndGgxIiwibGVuZ3RoMiIsImRhdGEiLCJnZXRCb3VuZCIsIm5lZ2F0ZSIsImRpc3RhbmNlVG8iLCJuYW1lIiwic2FtZSIsImFscGhhQSIsImFscGhhQiIsIkJFSEFWSU9VUl9JRF9CQVNFIiwiQmVoYXZpb3VyIiwiZm9yY2UiLCJyZW1vdmVCZWhhdmlvdXIiLCJnZXRFYXNpbmdCeU5hbWUiLCJlYXNlTGluZWFyIiwiZWFzZUluUXVhZCIsInBvdyIsImVhc2VPdXRRdWFkIiwiZWFzZUluT3V0UXVhZCIsImVhc2VJbkN1YmljIiwiZWFzZU91dEN1YmljIiwiZWFzZUluT3V0Q3ViaWMiLCJlYXNlSW5RdWFydCIsImVhc2VPdXRRdWFydCIsImVhc2VJbk91dFF1YXJ0IiwiZWFzZUluU2luZSIsImVhc2VPdXRTaW5lIiwiZWFzZUluT3V0U2luZSIsImVhc2VJbkV4cG8iLCJlYXNlT3V0RXhwbyIsImVhc2VJbk91dEV4cG8iLCJlYXNlSW5DaXJjIiwiZWFzZU91dENpcmMiLCJlYXNlSW5PdXRDaXJjIiwiZWFzZUluQmFjayIsImVhc2VPdXRCYWNrIiwiZWFzZUluT3V0QmFjayIsInRhcmdldFBvc2l0aW9uIiwibm9ybWFsaXplVmFsdWUiLCJyYWRpdXNTcSIsImF0dHJhY3Rpb25Gb3JjZSIsImxlbmd0aFNxIiwic3ViIiwibm9ybWFsaXplIiwiY2FsbGJhY2siLCJjb2xsaXNpb25Qb29sIiwiZGVsdGEiLCJuZXdQb29sIiwicGFydGljbGVzIiwic2xpY2UiLCJvdGhlclBhcnRpY2xlIiwib3ZlcmxhcCIsImF2ZXJhZ2VNYXNzMSIsImF2ZXJhZ2VNYXNzMiIsImRpc3RhbmNlIiwidG90YWxNYXNzIiwiY2xvbmUiXSwibWFw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QSxRQUFMLENBQWMxTyxRQUFkLEVBQXdCZ1AsYUFBeEI7QUFDQTtBQUNEO0FBQ0Q7QUFDRDtBQUNEOzs7Ozs7bUJBM0VtQjFSLFMiLCJmaWxlIjoicXVhcmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gZmFjdG9yeSgpO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDYwZDVmYmI4ZDk3NDk1NWVhNmNhIiwiZXhwb3J0ICogZnJvbSAnLi9lbWl0dGVyJztcbmV4cG9ydCAqIGZyb20gJy4vaW5pdGlhbGl6ZSc7XG5pbXBvcnQgU3BhbiBmcm9tICcuL21hdGgvU3Bhbic7XG5cbmltcG9ydCBSZWN0Wm9uZSBmcm9tICcuL3pvbmUvUmVjdFpvbmUnO1xuaW1wb3J0IFBvaW50Wm9uZSBmcm9tICcuL3pvbmUvUG9pbnRab25lJztcbmltcG9ydCBMaW5lWm9uZSBmcm9tICcuL3pvbmUvTGluZVpvbmUnO1xuaW1wb3J0IEltYWdlWm9uZSBmcm9tICcuL3pvbmUvSW1hZ2Vab25lJztcbmltcG9ydCBDaXJjbGVab25lIGZyb20gJy4vem9uZS9DaXJjbGVab25lJztcblxuaW1wb3J0IEFscGhhIGZyb20gJy4vYmVoYXZpb3VyL0FscGhhJztcbmltcG9ydCBBdHRyYWN0aW9uIGZyb20gJy4vYmVoYXZpb3VyL0F0dHJhY3Rpb24nO1xuaW1wb3J0IENvbGxpc2lvbiBmcm9tICcuL2JlaGF2aW91ci9Db2xsaXNpb24nO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3BhbihhLCBiLCBjZW50ZXIpIHtcbiAgICByZXR1cm4gbmV3IFNwYW4oYSwgYiwgY2VudGVyKTtcbn1cblxuZXhwb3J0IHsgU3BhbiwgUmVjdFpvbmUsIFBvaW50Wm9uZSwgTGluZVpvbmUsIEltYWdlWm9uZSwgQ2lyY2xlWm9uZSB9O1xuXG5leHBvcnQgeyBBbHBoYSwgQXR0cmFjdGlvbiwgQ29sbGlzaW9uIH07XG5cbmdsb2JhbC5RdWFyayA9IGV4cG9ydHM7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIiwiZXhwb3J0ICogZnJvbSAnLi9jb25zdCc7XG5cbmltcG9ydCBFbWl0dGVyIGZyb20gJy4vRW1pdHRlcic7XG5cbmV4cG9ydCB7RW1pdHRlcn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VtaXR0ZXIvaW5kZXguanMiLCJleHBvcnQgY29uc3QgUE9PTF9NQVggPSAxMDAwO1xuZXhwb3J0IGNvbnN0IFRJTUVfU1RFUCA9IDYwO1xuZXhwb3J0IGNvbnN0IFVTRV9DTE9DSyA9IGZhbHNlO1xuZXhwb3J0IGNvbnN0IE1FQVNVUkUgPSAxMDA7XG5leHBvcnQgY29uc3QgRVVMRVIgPSAnZXVsZXInO1xuZXhwb3J0IGNvbnN0IFJLMiA9ICdydW5nZS1rdXR0YTInO1xuZXhwb3J0IGNvbnN0IFJLNCA9ICdydW5nZS1rdXR0YTQnO1xuZXhwb3J0IGNvbnN0IFZFUkxFVCA9ICd2ZXJsZXQnO1xuZXhwb3J0IGNvbnN0IFBBUlRJQ0xFX0NSRUFURUQgPSAncGFydGlsY2xlQ3JlYXRlZCc7XG5leHBvcnQgY29uc3QgUEFSVElDTEVfVVBEQVRFID0gJ3BhcnRpbGNsZVVwZGF0ZSc7XG5leHBvcnQgY29uc3QgUEFSVElDTEVfU0xFRVAgPSAncGFydGljbGVTbGVlcCc7XG5leHBvcnQgY29uc3QgUEFSVElDTEVfREVBRCA9ICdwYXJ0aWxjbGVEZWFkJztcbmV4cG9ydCBjb25zdCBFTUlUVEVSX0FEREVEID0gJ2VtaXR0ZXJBZGRlZCc7XG5leHBvcnQgY29uc3QgRU1JVFRFUl9SRU1PVkVEID0gJ2VtaXR0ZXJSZW1vdmVkJztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW1pdHRlci9jb25zdC5qcyIsImltcG9ydCBQYXJ0aWNsZSBmcm9tICcuLi9jb3JlL1BhcnRpY2xlJztcbmltcG9ydCBSYXRlIGZyb20gJy4uL2luaXRpYWxpemUvUmF0ZSc7XG5pbXBvcnQgTnVtZXJpY2FsSW50ZWdyYXRpb24gZnJvbSAnLi4vbWF0aC9OdW1lcmljYWxJbnRlZ3JhdGlvbic7XG5pbXBvcnQgeyBQQVJUSUNMRV9DUkVBVEVELCBQQVJUSUNMRV9VUERBVEUsIFBBUlRJQ0xFX0RFQUQgfSBmcm9tICcuL2NvbnN0JztcbmltcG9ydCBpbml0aWFsaXplRm4gZnJvbSAnLi4vaW5pdGlhbGl6ZS9Jbml0aWFsaXplVXRpbCc7XG5pbXBvcnQgTWluaVNpZ25hbCBmcm9tICdtaW5pLXNpZ25hbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbWl0dGVyIGV4dGVuZHMgUGFydGljbGV7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLmluaXRpYWxpemVzID0gW107XG4gICAgdGhpcy5iZWhhdmlvdXJzID0gW107XG4gICAgdGhpcy5lbWl0VGltZSA9IDA7XG4gICAgdGhpcy5lbWl0VG90YWxUaW1lcyA9IC0xO1xuICAgIC8qKlxuICAgICAqIFRoZSBmcmljdGlvbiBjb2VmZmljaWVudCBmb3IgYWxsIHBhcnRpY2xlIGVtaXQgYnkgVGhpcztcbiAgICAgKiBAcHJvcGVydHkgZGFtcGluZ1xuICAgICAqIEB0eXBlIHtOdW1iZXJ9XG4gICAgICogQGRlZmF1bHQgMC4wMDZcbiAgICAgKi9cbiAgICB0aGlzLmRhbXBpbmcgPSAuMDA2O1xuICAgIC8qKlxuICAgICAqIElmIGJpbmRFbWl0dGVyIHRoZSBwYXJ0aWNsZXMgY2FuIGJpbmQgdGhpcyBlbWl0dGVyJ3MgcHJvcGVydHk7XG4gICAgICogQHByb3BlcnR5IGJpbmRFbWl0dGVyXG4gICAgICogQHR5cGUge0Jvb2xlYW59XG4gICAgICogQGRlZmF1bHQgdHJ1ZVxuICAgICAqL1xuICAgIHRoaXMuYmluZEVtaXR0ZXIgPSB0cnVlO1xuICAgIC8qKlxuICAgICAqIFRoZSBudW1iZXIgb2YgcGFydGljbGVzIHBlciBzZWNvbmQgZW1pdCAoYSBbcGFydGljbGVdL2IgW3NdKTtcbiAgICAgKiBAcHJvcGVydHkgcmF0ZVxuICAgICAqIEB0eXBlIHtRdWFyay5SYXRlfVxuICAgICAqIEBkZWZhdWx0IFF1YXJrLlJhdGUoMSwgLjEpXG4gICAgICovXG4gICAgdGhpcy5yYXRlID0gbmV3IFJhdGUoMSwgLjEpO1xuXG4gICAgdGhpcy5pbnRlZ3JhdG9yID0gbmV3IE51bWVyaWNhbEludGVncmF0aW9uKCk7XG5cbiAgICB0aGlzLl90YWlsUGFydGljbGUgPSBudWxsO1xuICAgIHRoaXMuX3Bvb2xIZWFkID0gbnVsbDtcblxuXG4gICAgdGhpcy51cGRhdGUgPSB0aGlzLnVwZGF0ZTtcbiAgICB0aGlzLmNyZWF0ZVBhcnRpY2xlID0gdGhpcy5jcmVhdGVQYXJ0aWNsZTtcbiAgICB0aGlzLmludGVncmF0ZSA9IHRoaXMuaW50ZWdyYXRlO1xuICAgIHRoaXMuc2V0dXBQYXJ0aWNsZSA9IHRoaXMuc2V0dXBQYXJ0aWNsZTtcbiAgfVxuXG4gIGVtaXQoZW1pdFRpbWUsIGxpZmUpIHtcbiAgICB0aGlzLmVtaXRUaW1lID0gMDtcbiAgICB0aGlzLmVtaXRUb3RhbFRpbWVzID0gZW1pdFRpbWUgfHwgSW5maW5pdHk7XG5cbiAgICBpZighaXNOYU4obGlmZSkpIHtcbiAgICAgIHRoaXMubGlmZSA9IGxpZmU7XG4gICAgfVxuXG4gICAgdGhpcy5yYXRlLmluaXQoKTtcblxuICAgIHRoaXMucGFydGljbGVDcmVhdGVkID0gbmV3IE1pbmlTaWduYWwoKTtcbiAgICB0aGlzLnBhcnRpY2xlVXBkYXRlID0gbmV3IE1pbmlTaWduYWwoKTtcbiAgICB0aGlzLnBhcnRpY2xlRGVhZCA9IG5ldyBNaW5pU2lnbmFsKCk7XG4gIH1cblxuICAvKipcbiAgICogc3RvcCBlbWl0aW5nXG4gICAqIEBtZXRob2Qgc3RvcEVtaXRcbiAgICovXG4gIHN0b3BFbWl0KCkge1xuICAgIHRoaXMuZW1pdFRvdGFsVGltZXMgPSAtMTtcbiAgICB0aGlzLmVtaXRUaW1lID0gMDtcbiAgfVxuXG4gIC8qKlxuICAgKiByZW1vdmUgY3VycmVudCBhbGwgcGFydGljbGVzXG4gICAqIEBtZXRob2QgcmVtb3ZlQWxsUGFydGljbGVzXG4gICAqL1xuICByZW1vdmVBbGxQYXJ0aWNsZXMoKSB7XG4gICAgdGhpcy5fdGFpbFBhcnRpY2xlID0gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBjcmVhdGUgc2luZ2xlIHBhcnRpY2xlO1xuICAgKiBcbiAgICogY2FuIHVzZSBlbWl0KHt4OjEwfSxuZXcgR3Jhdml0eSgxMCkseydwYXJ0aWNsZVVwZGF0ZScsZnVufSkgb3IgZW1pdChbe3g6MTB9LG5ldyBJbml0aWFsaXplXSxuZXcgR3Jhdml0eSgxMCkseydwYXJ0aWNsZVVwZGF0ZScsZnVufSlcbiAgICogQG1ldGhvZCByZW1vdmVBbGxQYXJ0aWNsZXNcbiAgICovXG4gIGNyZWF0ZVBhcnRpY2xlKGluaXRpYWxpemUsIGJlaGF2aW91cikge1xuICAgIGNvbnN0IHBhcnRpY2xlID0gbmV3IFBhcnRpY2xlKCk7XG4gICAgdGhpcy5zZXR1cFBhcnRpY2xlKHBhcnRpY2xlLCBpbml0aWFsaXplLCBiZWhhdmlvdXIpO1xuICAgIHRoaXMucGFydGljbGVDcmVhdGVkLmRpc3BhdGNoKHBhcnRpY2xlKTtcblxuICAgIHJldHVybiBwYXJ0aWNsZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBhZGQgaW5pdGlhbGl6ZSB0byB0aGlzIGVtaXR0ZXJcbiAgICogQG1ldGhvZCBhZGRTZWxmSW5pdGlhbGl6ZVxuICAgKi9cbiAgYWRkU2VsZkluaXRpYWxpemUocE9iaikge1xuICAgIGlmIChwT2JqWydpbml0J10pIHtcbiAgICAgIHBPYmouaW5pdCh0aGlzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbml0QWxsKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIGFkZCB0aGUgSW5pdGlhbGl6ZSB0byBwYXJ0aWNsZXM7XG4gICAqIFxuICAgKiB5b3UgY2FuIHVzZSBpbml0aWFsaXplcyBhcnJheTpmb3IgZXhhbXBsZSBlbWl0dGVyLmFkZEluaXRpYWxpemUoaW5pdGlhbGl6ZTEsaW5pdGlhbGl6ZTIsaW5pdGlhbGl6ZTMpO1xuICAgKiBAbWV0aG9kIGFkZEluaXRpYWxpemVcbiAgICogQHBhcmFtIHtRdWFyay5Jbml0aWFsaXplfSBpbml0aWFsaXplIGxpa2UgdGhpcyBuZXcgUXVhcmsuUmFkaXVzKDEsIDEyKVxuICAgKi9cbiAgYWRkSW5pdGlhbGl6ZSgpIHtcbiAgICBjb25zdCBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZXMucHVzaChhcmd1bWVudHNbaV0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiByZW1vdmUgdGhlIEluaXRpYWxpemVcbiAgICogQG1ldGhvZCByZW1vdmVJbml0aWFsaXplXG4gICAqIEBwYXJhbSB7UXVhcmsuSW5pdGlhbGl6ZX0gaW5pdGlhbGl6ZSBhIGluaXRpYWxpemVcbiAgICovXG4gIHJlbW92ZUluaXRpYWxpemUoaW5pdGlhbGl6ZXIpIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuaW5pdGlhbGl6ZXMuaW5kZXhPZihpbml0aWFsaXplcik7XG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogcmVtb3ZlIGFsbCBJbml0aWFsaXplc1xuICAgKiBAbWV0aG9kIHJlbW92ZUluaXRpYWxpemVyc1xuICAgKi9cbiAgcmVtb3ZlSW5pdGlhbGl6ZXJzKCkge1xuICAgIHRoaXMuaW5pdGlhbGl6ZXMubGVuZ3RoID0gMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBhZGQgdGhlIEJlaGF2aW91ciB0byBwYXJ0aWNsZXM7XG4gICAqIFxuICAgKiB5b3UgY2FuIHVzZSBCZWhhdmlvdXJzIGFycmF5OmVtaXR0ZXIuYWRkQmVoYXZpb3VyKEJlaGF2aW91cjEsQmVoYXZpb3VyMixCZWhhdmlvdXIzKTtcbiAgICogQG1ldGhvZCBhZGRCZWhhdmlvdXJcbiAgICogQHBhcmFtIHtRdWFyay5CZWhhdmlvdXJ9IGJlaGF2aW91ciBsaWtlIHRoaXMgbmV3IFF1YXJrLkNvbG9yKCdyYW5kb20nKVxuICAgKi9cbiAgYWRkQmVoYXZpb3VyKCkge1xuICAgIGNvbnN0IGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5iZWhhdmlvdXJzLnB1c2goYXJndW1lbnRzW2ldKTtcbiAgICAgIGlmIChhcmd1bWVudHNbaV0uaGFzT3duUHJvcGVydHkoXCJwYXJlbnRzXCIpKVxuICAgICAgICBhcmd1bWVudHNbaV0ucGFyZW50cy5wdXNoKHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiByZW1vdmUgdGhlIEJlaGF2aW91clxuICAgKiBAbWV0aG9kIHJlbW92ZUJlaGF2aW91clxuICAgKiBAcGFyYW0ge1F1YXJrLkJlaGF2aW91cn0gYmVoYXZpb3VyIGEgYmVoYXZpb3VyXG4gICAqL1xuICByZW1vdmVCZWhhdmlvdXIoYmVoYXZpb3VyKSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmJlaGF2aW91cnMuaW5kZXhPZihiZWhhdmlvdXIpO1xuICAgIGlmIChpbmRleCA+IC0xKVxuICAgICAgdGhpcy5iZWhhdmlvdXJzLnNwbGljZShpbmRleCwgMSk7XG4gIH1cblxuICAvKipcbiAgICogcmVtb3ZlIGFsbCBiZWhhdmlvdXJzXG4gICAqIEBtZXRob2QgcmVtb3ZlQWxsQmVoYXZpb3Vyc1xuICAgKi9cbiAgcmVtb3ZlQWxsQmVoYXZpb3VycygpIHtcbiAgICB0aGlzLmJlaGF2aW91cnMubGVuZ3RoID0gMDtcbiAgfVxuXG4gIGludGVncmF0ZSh0aW1lKSB7XG4gICAgY29uc3QgZGFtcGluZyA9IDEgLSB0aGlzLmRhbXBpbmc7XG5cbiAgICB0aGlzLmludGVncmF0b3IuaW50ZWdyYXRlKHRoaXMsIHRpbWUsIGRhbXBpbmcpO1xuICAgIGxldCBwYXJ0aWNsZSA9IHRoaXMuX3RhaWxQYXJ0aWNsZTtcbiAgICBsZXQgaSA9IDA7XG4gICAgd2hpbGUocGFydGljbGUpe1xuICAgICAgcGFydGljbGUudXBkYXRlKHRpbWUsIGkrKyk7XG4gICAgICB0aGlzLmludGVncmF0b3IuaW50ZWdyYXRlKHBhcnRpY2xlLCB0aW1lLCBkYW1waW5nKTtcbiAgICAgIGlmIChwYXJ0aWNsZS5fcHJldiAmJiBwYXJ0aWNsZS5fcHJldi5kZWFkKSB7XG4gICAgICAgIHRoaXMucGFydGljbGVEZWFkLmRpc3BhdGNoKHBhcnRpY2xlLl9wcmV2KTtcbiAgICAgICAgcGFydGljbGUuX3ByZXYgPSBwYXJ0aWNsZS5fcHJldi5fcHJldjtcbiAgICAgIH1cbiAgICAgIHRoaXMucGFydGljbGVVcGRhdGUuZGlzcGF0Y2gocGFydGljbGUpO1xuXG4gICAgICBwYXJ0aWNsZSA9IHBhcnRpY2xlLl9wcmV2O1xuICAgIH1cbiAgfVxuXG4gIGVtaXR0aW5nKHRpbWUpIHtcbiAgICBpZiAodGhpcy5lbWl0VG90YWxUaW1lcyA9PSAnb25jZScpIHsgIFxuICAgICAgY29uc3QgbGVuZ3RoID0gdGhpcy5yYXRlLmdldFZhbHVlKDk5OTk5KTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy5jcmVhdGVQYXJ0aWNsZSgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmVtaXRUb3RhbFRpbWVzID0gJ25vbmUnO1xuICAgIH0gZWxzZSBpZiAoIWlzTmFOKHRoaXMuZW1pdFRvdGFsVGltZXMpKSB7XG4gICAgICB0aGlzLmVtaXRUaW1lICs9IHRpbWU7XG4gICAgICBpZiAodGhpcy5lbWl0VGltZSA8IHRoaXMuZW1pdFRvdGFsVGltZXMpIHtcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gdGhpcy5yYXRlLmdldFZhbHVlKHRpbWUpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdGhpcy5jcmVhdGVQYXJ0aWNsZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlKHRpbWUpIHtcbiAgICB0aGlzLmFnZSArPSB0aW1lO1xuICAgIGlmICh0aGlzLmFnZSA+PSB0aGlzLmxpZmUgfHwgdGhpcy5kZWFkKSB7XG4gICAgICB0aGlzLmRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICB0aGlzLmVtaXR0aW5nKHRpbWUpO1xuICAgIHRoaXMuaW50ZWdyYXRlKHRpbWUpO1xuICB9O1xuXG4gIHNldHVwUGFydGljbGUocGFydGljbGUsIGluaXRpYWxpemUsIGJlaGF2aW91cikge1xuICAgIGxldCBpbml0aWFsaXplcyA9IHRoaXMuaW5pdGlhbGl6ZXM7XG4gICAgbGV0IGJlaGF2aW91cnMgPSB0aGlzLmJlaGF2aW91cnM7XG5cbiAgICBpZiAoaW5pdGlhbGl6ZSkge1xuICAgICAgaWYgKCBpbml0aWFsaXplIGluc3RhbmNlb2YgQXJyYXkpXG4gICAgICAgIGluaXRpYWxpemVzID0gaW5pdGlhbGl6ZTtcbiAgICAgIGVsc2VcbiAgICAgICAgaW5pdGlhbGl6ZXMgPSBbaW5pdGlhbGl6ZV07XG4gICAgfVxuXG4gICAgaWYgKGJlaGF2aW91cikge1xuICAgICAgaWYgKCBiZWhhdmlvdXIgaW5zdGFuY2VvZiBBcnJheSlcbiAgICAgICAgYmVoYXZpb3VycyA9IGJlaGF2aW91cjtcbiAgICAgIGVsc2VcbiAgICAgICAgYmVoYXZpb3VycyA9IFtiZWhhdmlvdXJdO1xuICAgIH1cblxuICAgIHBhcnRpY2xlLnJlc2V0KCk7XG4gICAgaW5pdGlhbGl6ZUZuKHRoaXMsIHBhcnRpY2xlLCBpbml0aWFsaXplcyk7XG4gICAgcGFydGljbGUuYWRkQmVoYXZpb3VycyhiZWhhdmlvdXJzKTtcbiAgICBwYXJ0aWNsZS5wYXJlbnQgPSB0aGlzO1xuICAgIHBhcnRpY2xlLl9wcmV2ID0gdGhpcy5fdGFpbFBhcnRpY2xlO1xuICAgIHRoaXMuX3RhaWxQYXJ0aWNsZSA9IHBhcnRpY2xlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBEZXN0b3J5IHRoaXMgRW1pdHRlclxuICAgKiBAbWV0aG9kIGRlc3Ryb3lcbiAgICovXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5kZWFkID0gdHJ1ZTtcbiAgICB0aGlzLmVtaXRUb3RhbFRpbWVzID0gLTE7XG5cbiAgICBpZih0aGlzLl90YWlsUGFydGljbGUgPT09IG51bGwpIHtcbiAgICAgIHRoaXMucmVtb3ZlSW5pdGlhbGl6ZXJzKCk7XG4gICAgICB0aGlzLnJlbW92ZUFsbEJlaGF2aW91cnMoKTtcblxuICAgICAgaWYgKHRoaXMucGFyZW50KVxuICAgICAgICB0aGlzLnBhcmVudC5yZW1vdmVFbWl0dGVyKHRoaXMpO1xuICAgIH1cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VtaXR0ZXIvRW1pdHRlci5qcyIsImltcG9ydCBWZWN0b3IyRCBmcm9tICcuLi9tYXRoL1ZlY3RvcjJEJztcblxubGV0IHVpZCA9IDA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhcnRpY2xle1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgdGhpcy5pZCA9IHVpZCsrO1xuICAgICAgdGhpcy5yZXNldCh0cnVlKTtcblxuICAgICAgdGhpcy51cGRhdGUgPSB0aGlzLnVwZGF0ZTtcbiAgICAgIHRoaXMuZGVzdHJveSA9IHRoaXMuZGVzdHJveTtcbiAgICB9XG5cbiAgICBnZXREaXJlY3Rpb24oKSB7XG4gICAgICByZXR1cm4gTWF0aC5hdGFuMih0aGlzLnYueCwgLXRoaXMudi55KSAqICgxODAgLyBNYXRoLlBJKTtcbiAgICB9XG5cbiAgICByZXNldChpbml0KSB7XG4gICAgICB0aGlzLl9wcmV2ID0gbnVsbDtcbiAgICAgIHRoaXMubGlmZSA9IEluZmluaXR5O1xuICAgICAgdGhpcy5hZ2UgPSAwO1xuICAgICAgdGhpcy5lbmVyZ3kgPSAxO1xuICAgICAgdGhpcy5kZWFkID0gZmFsc2U7XG4gICAgICB0aGlzLnNsZWVwID0gZmFsc2U7XG4gICAgICB0aGlzLnRhcmdldCA9IG51bGw7XG4gICAgICB0aGlzLnNwcml0ZSA9IG51bGw7XG4gICAgICB0aGlzLnBhcmVudCA9IG51bGw7XG4gICAgICB0aGlzLm1hc3MgPSAxO1xuICAgICAgdGhpcy5yYWRpdXMgPSAxMDtcbiAgICAgIHRoaXMuYWxwaGEgPSAxO1xuICAgICAgdGhpcy5zY2FsZSA9IDE7XG4gICAgICB0aGlzLnJvdGF0aW9uID0gMDtcbiAgICAgIHRoaXMuY29sb3IgPSBudWxsO1xuICAgICAgdGhpcy5lYXNpbmcgPSAodmFsKSA9PiB2YWw7XG4gICAgICB0aGlzLnRyYW5zZm9ybSA9IHt9XG4gICAgICBpZiAoaW5pdCkge1xuICAgICAgICB0aGlzLnAgPSBuZXcgVmVjdG9yMkQoKTtcbiAgICAgICAgdGhpcy52ID0gbmV3IFZlY3RvcjJEKCk7XG4gICAgICAgIHRoaXMuYSA9IG5ldyBWZWN0b3IyRCgpO1xuICAgICAgICB0aGlzLm9sZCA9IHtcbiAgICAgICAgICBwIDogbmV3IFZlY3RvcjJEKCksXG4gICAgICAgICAgdiA6IG5ldyBWZWN0b3IyRCgpLFxuICAgICAgICAgIGEgOiBuZXcgVmVjdG9yMkQoKVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmJlaGF2aW91cnMgPSBbXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGRlbGV0ZSB0aGlzLnRyYW5zZm9ybTtcbiAgICAgICAgdGhpcy5wLnNldCgwLCAwKTtcbiAgICAgICAgdGhpcy52LnNldCgwLCAwKTtcbiAgICAgICAgdGhpcy5hLnNldCgwLCAwKTtcbiAgICAgICAgdGhpcy5vbGQucC5zZXQoMCwgMCk7XG4gICAgICAgIHRoaXMub2xkLnYuc2V0KDAsIDApO1xuICAgICAgICB0aGlzLm9sZC5hLnNldCgwLCAwKTtcbiAgICAgICAgdGhpcy5yZW1vdmVBbGxCZWhhdmlvdXJzKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMudHJhbnNmb3JtLnJnYiA9IHtcbiAgICAgICAgciA6IDI1NSxcbiAgICAgICAgZyA6IDI1NSxcbiAgICAgICAgYiA6IDI1NVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdXBkYXRlKHRpbWUsIGluZGV4KSB7XG4gICAgICBpZighdGhpcy5zbGVlcCkge1xuICAgICAgICB0aGlzLmFnZSArPSB0aW1lO1xuICAgICAgICBjb25zdCBsZW5ndGggPSB0aGlzLmJlaGF2aW91cnMubGVuZ3RoO1xuICAgICAgICBsZXQgaTtcbiAgICAgICAgZm9yICggaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmICh0aGlzLmJlaGF2aW91cnNbaV0pXG4gICAgICAgICAgICB0aGlzLmJlaGF2aW91cnNbaV0uYXBwbHlCZWhhdmlvdXIodGhpcywgdGltZSwgaW5kZXgpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG5cbiAgICAgIH1cblxuICAgICAgaWYodGhpcy5hZ2UgPj0gdGhpcy5saWZlKSB7XG4gICAgICAgIHRoaXMuZGVzdHJveSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgc2NhbGUgPSB0aGlzLmVhc2luZyh0aGlzLmFnZSAvIHRoaXMubGlmZSk7XG4gICAgICAgIHRoaXMuZW5lcmd5ID0gTWF0aC5tYXgoMSAtIHNjYWxlLCAwKTtcbiAgICAgIH1cblxuICAgIH1cblxuICAgIGFkZEJlaGF2aW91cihiZWhhdmlvdXIpIHtcbiAgICAgIHRoaXMuYmVoYXZpb3Vycy5wdXNoKGJlaGF2aW91cik7XG4gICAgICBpZiAoYmVoYXZpb3VyLmhhc093blByb3BlcnR5KCdwYXJlbnRzJykpe1xuICAgICAgICBiZWhhdmlvdXIucGFyZW50cy5wdXNoKHRoaXMpO1xuICAgICAgfVxuICAgICAgYmVoYXZpb3VyLmluaXRpYWxpemUodGhpcyk7XG4gICAgfVxuXG4gICAgYWRkQmVoYXZpb3VycyhiZWhhdmlvdXJzKSB7XG4gICAgICB2YXIgbGVuZ3RoID0gYmVoYXZpb3Vycy5sZW5ndGgsIGk7XG4gICAgICBmb3IgKCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRoaXMuYWRkQmVoYXZpb3VyKGJlaGF2aW91cnNbaV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJlbW92ZUJlaGF2aW91cihiZWhhdmlvdXIpIHtcbiAgICAgIHZhciBpbmRleCA9IHRoaXMuYmVoYXZpb3Vycy5pbmRleE9mKGJlaGF2aW91cik7XG4gICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICB2YXIgYmVoYXZpb3VyID0gdGhpcy5iZWhhdmlvdXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIGJlaGF2aW91ci5wYXJlbnRzID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZW1vdmVBbGxCZWhhdmlvdXJzKCkge1xuICAgICAgdGhpcy5iZWhhdmlvdXJzLmxlbmd0aCA9IDA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVzdG9yeSB0aGlzIHBhcnRpY2xlXG4gICAgICogQG1ldGhvZCBkZXN0cm95XG4gICAgICovXG4gICAgZGVzdHJveSgpIHtcbiAgICAgIHRoaXMucmVtb3ZlQWxsQmVoYXZpb3VycygpO1xuICAgICAgdGhpcy5lbmVyZ3kgPSAwO1xuICAgICAgdGhpcy5kZWFkID0gdHJ1ZTtcbiAgICAgIHRoaXMucGFyZW50ID0gbnVsbDtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvcmUvUGFydGljbGUuanMiLCJcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVjdG9yMkR7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHgsIHkpe1xyXG4gICAgdGhpcy54ID0geCB8fCAwO1xyXG4gICAgdGhpcy55ID0geSB8fCAwO1xyXG4gIH1cclxuXHJcbiAgc2V0KHgsIHkpIHtcclxuXHJcbiAgICB0aGlzLnggPSB4O1xyXG4gICAgdGhpcy55ID0geTtcclxuICAgIHJldHVybiB0aGlzO1xyXG5cclxuICB9XHJcblxyXG4gIHNldFgoeCkge1xyXG5cclxuICAgIHRoaXMueCA9IHg7XHJcbiAgICByZXR1cm4gdGhpcztcclxuXHJcbiAgfVxyXG5cclxuICBzZXRZKHkpIHtcclxuXHJcbiAgICB0aGlzLnkgPSB5O1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG5cclxuICB9XHJcblxyXG4gIHNldENvbXBvbmVudChpbmRleCwgdmFsdWUpIHtcclxuXHJcbiAgICBzd2l0Y2ggKCBpbmRleCApIHtcclxuXHJcbiAgICAgIGNhc2UgMDpcclxuICAgICAgICB0aGlzLnggPSB2YWx1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAxOlxyXG4gICAgICAgIHRoaXMueSA9IHZhbHVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImluZGV4IGlzIG91dCBvZiByYW5nZTogXCIgKyBpbmRleCk7XHJcblxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIGdldEdyYWRpZW50KCkge1xyXG4gICAgaWYgKHRoaXMueCAhPSAwKVxyXG4gICAgICByZXR1cm4gTWF0aC5hdGFuMih0aGlzLnksIHRoaXMueCk7XHJcbiAgICBlbHNlIGlmICh0aGlzLnkgPiAwKVxyXG4gICAgICByZXR1cm4gTWF0aC5QSSAvIDI7XHJcbiAgICBlbHNlIGlmICh0aGlzLnkgPCAwKVxyXG4gICAgICByZXR1cm4gLU1hdGguUEkgLyAyO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q29tcG9uZW50KGluZGV4KSB7XHJcblxyXG4gICAgc3dpdGNoICggaW5kZXggKSB7XHJcblxyXG4gICAgICBjYXNlIDA6XHJcbiAgICAgICAgcmV0dXJuIHRoaXMueDtcclxuICAgICAgY2FzZSAxOlxyXG4gICAgICAgIHJldHVybiB0aGlzLnk7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaW5kZXggaXMgb3V0IG9mIHJhbmdlOiBcIiArIGluZGV4KTtcclxuXHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgY29weSh2KSB7XHJcblxyXG4gICAgdGhpcy54ID0gdi54O1xyXG4gICAgdGhpcy55ID0gdi55O1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG5cclxuICB9XHJcblxyXG4gIGFkZCh2LCB3KSB7XHJcblxyXG4gICAgaWYgKHcgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5hZGRWZWN0b3JzKHYsIHcpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnggKz0gdi54O1xyXG4gICAgdGhpcy55ICs9IHYueTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuXHJcbiAgfVxyXG5cclxuICBhZGRYWShhLCBiKSB7XHJcblxyXG4gICAgdGhpcy54ICs9IGE7XHJcbiAgICB0aGlzLnkgKz0gYjtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuXHJcbiAgfVxyXG5cclxuICBhZGRWZWN0b3JzKGEsIGIpIHtcclxuXHJcbiAgICB0aGlzLnggPSBhLnggKyBiLng7XHJcbiAgICB0aGlzLnkgPSBhLnkgKyBiLnk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcblxyXG4gIH1cclxuXHJcbiAgYWRkU2NhbGFyKHMpIHtcclxuXHJcbiAgICB0aGlzLnggKz0gcztcclxuICAgIHRoaXMueSArPSBzO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG5cclxuICB9XHJcblxyXG4gIHN1Yih2LCB3KSB7XHJcblxyXG4gICAgaWYgKHcgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5zdWJWZWN0b3JzKHYsIHcpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnggLT0gdi54O1xyXG4gICAgdGhpcy55IC09IHYueTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuXHJcbiAgfVxyXG5cclxuICBzdWJWZWN0b3JzKGEsIGIpIHtcclxuXHJcbiAgICB0aGlzLnggPSBhLnggLSBiLng7XHJcbiAgICB0aGlzLnkgPSBhLnkgLSBiLnk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcblxyXG4gIH1cclxuXHJcbiAgbXVsdGlwbHlTY2FsYXIocykge1xyXG5cclxuICAgIHRoaXMueCAqPSBzO1xyXG4gICAgdGhpcy55ICo9IHM7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcblxyXG4gIH1cclxuXHJcbiAgZGl2aWRlU2NhbGFyKHMpIHtcclxuXHJcbiAgICBpZiAocyAhPT0gMCkge1xyXG5cclxuICAgICAgdGhpcy54IC89IHM7XHJcbiAgICAgIHRoaXMueSAvPSBzO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICB0aGlzLnNldCgwLCAwKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcblxyXG4gIH1cclxuXHJcbiAgbWluKHYpIHtcclxuXHJcbiAgICBpZiAodGhpcy54ID4gdi54KSB7XHJcblxyXG4gICAgICB0aGlzLnggPSB2Lng7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnkgPiB2LnkpIHtcclxuXHJcbiAgICAgIHRoaXMueSA9IHYueTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcblxyXG4gIH1cclxuXHJcbiAgbWF4KHYpIHtcclxuXHJcbiAgICBpZiAodGhpcy54IDwgdi54KSB7XHJcblxyXG4gICAgICB0aGlzLnggPSB2Lng7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnkgPCB2LnkpIHtcclxuXHJcbiAgICAgIHRoaXMueSA9IHYueTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcblxyXG4gIH1cclxuXHJcbiAgY2xhbXAobWluLCBtYXgpIHtcclxuXHJcbiAgICAvLyBUaGlzIGZ1bmN0aW9uIGFzc3VtZXMgbWluIDwgbWF4LCBpZiB0aGlzIGFzc3VtcHRpb24gaXNuJ3QgdHJ1ZSBpdCB3aWxsIG5vdCBvcGVyYXRlIGNvcnJlY3RseVxyXG5cclxuICAgIGlmICh0aGlzLnggPCBtaW4ueCkge1xyXG5cclxuICAgICAgdGhpcy54ID0gbWluLng7XHJcblxyXG4gICAgfSBlbHNlIGlmICh0aGlzLnggPiBtYXgueCkge1xyXG5cclxuICAgICAgdGhpcy54ID0gbWF4Lng7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnkgPCBtaW4ueSkge1xyXG5cclxuICAgICAgdGhpcy55ID0gbWluLnk7XHJcblxyXG4gICAgfSBlbHNlIGlmICh0aGlzLnkgPiBtYXgueSkge1xyXG5cclxuICAgICAgdGhpcy55ID0gbWF4Lnk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG5cclxuICB9XHJcblxyXG4gIG5lZ2F0ZSgpIHtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5tdWx0aXBseVNjYWxhcigtMSk7XHJcblxyXG4gIH1cclxuXHJcbiAgZG90KHYpIHtcclxuXHJcbiAgICByZXR1cm4gdGhpcy54ICogdi54ICsgdGhpcy55ICogdi55O1xyXG5cclxuICB9XHJcblxyXG4gIGxlbmd0aFNxKCkge1xyXG5cclxuICAgIHJldHVybiB0aGlzLnggKiB0aGlzLnggKyB0aGlzLnkgKiB0aGlzLnk7XHJcblxyXG4gIH1cclxuXHJcbiAgbGVuZ3RoKCkge1xyXG5cclxuICAgIHJldHVybiBNYXRoLnNxcnQodGhpcy54ICogdGhpcy54ICsgdGhpcy55ICogdGhpcy55KTtcclxuXHJcbiAgfVxyXG5cclxuICBub3JtYWxpemUoKSB7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuZGl2aWRlU2NhbGFyKHRoaXMubGVuZ3RoKCkpO1xyXG5cclxuICB9XHJcblxyXG4gIGRpc3RhbmNlVG8odikge1xyXG5cclxuICAgIHJldHVybiBNYXRoLnNxcnQodGhpcy5kaXN0YW5jZVRvU3F1YXJlZCh2KSk7XHJcblxyXG4gIH1cclxuXHJcbiAgcm90YXRlKHRoYSkge1xyXG4gICAgdmFyIHggPSB0aGlzLng7XHJcbiAgICB2YXIgeSA9IHRoaXMueTtcclxuICAgIHRoaXMueCA9IHggKiBNYXRoLmNvcyh0aGEpICsgeSAqIE1hdGguc2luKHRoYSk7XHJcbiAgICB0aGlzLnkgPSAteCAqIE1hdGguc2luKHRoYSkgKyB5ICogTWF0aC5jb3ModGhhKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgZGlzdGFuY2VUb1NxdWFyZWQodikge1xyXG5cclxuICAgIHZhciBkeCA9IHRoaXMueCAtIHYueCwgZHkgPSB0aGlzLnkgLSB2Lnk7XHJcbiAgICByZXR1cm4gZHggKiBkeCArIGR5ICogZHk7XHJcblxyXG4gIH1cclxuXHJcbiAgc2V0TGVuZ3RoKGwpIHtcclxuXHJcbiAgICB2YXIgb2xkTGVuZ3RoID0gdGhpcy5sZW5ndGgoKTtcclxuXHJcbiAgICBpZiAob2xkTGVuZ3RoICE9PSAwICYmIGwgIT09IG9sZExlbmd0aCkge1xyXG5cclxuICAgICAgdGhpcy5tdWx0aXBseVNjYWxhcihsIC8gb2xkTGVuZ3RoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuXHJcbiAgfVxyXG5cclxuICBsZXJwKHYsIGFscGhhKSB7XHJcblxyXG4gICAgdGhpcy54ICs9ICh2LnggLSB0aGlzLnggKSAqIGFscGhhO1xyXG4gICAgdGhpcy55ICs9ICh2LnkgLSB0aGlzLnkgKSAqIGFscGhhO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG5cclxuICB9XHJcblxyXG4gIGVxdWFscyh2KSB7XHJcblxyXG4gICAgcmV0dXJuICgodi54ID09PSB0aGlzLnggKSAmJiAodi55ID09PSB0aGlzLnkgKSApO1xyXG5cclxuICB9XHJcblxyXG4gIHRvQXJyYXkoKSB7XHJcblxyXG4gICAgcmV0dXJuIFt0aGlzLngsIHRoaXMueV07XHJcblxyXG4gIH1cclxuXHJcbiAgY2xlYXIoKSB7XHJcbiAgICB0aGlzLnggPSAwLjA7XHJcbiAgICB0aGlzLnkgPSAwLjA7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIGNsb25lKCkge1xyXG5cclxuICAgIHJldHVybiBuZXcgVmVjdG9yMkQodGhpcy54LCB0aGlzLnkpO1xyXG5cclxuICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbWF0aC9WZWN0b3IyRC5qcyIsImltcG9ydCBVdGlsIGZyb20gJy4uL2NvcmUvVXRpbCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSYXRle1xyXG5cclxuICBjb25zdHJ1Y3RvcihudW1wYW4sIHRpbWVwYW4pIHtcclxuICAgIHRoaXMubnVtUGFuID0gbnVtcGFuXHJcbiAgICB0aGlzLnRpbWVQYW4gPSB0aW1lcGFuO1xyXG4gICAgdGhpcy5udW1QYW4gPSBVdGlsLnNldFNwYW5WYWx1ZSh0aGlzLm51bVBhbik7XHJcbiAgICB0aGlzLnRpbWVQYW4gPSBVdGlsLnNldFNwYW5WYWx1ZSh0aGlzLnRpbWVQYW4pO1xyXG4gICAgdGhpcy5zdGFydFRpbWUgPSAwO1xyXG4gICAgdGhpcy5uZXh0VGltZSA9IDA7XHJcbiAgICB0aGlzLmluaXQoKTsgIFxyXG4gIH1cclxuXHJcbiAgaW5pdCgpIHtcclxuICAgIHRoaXMuc3RhcnRUaW1lID0gMDtcclxuICAgIHRoaXMubmV4dFRpbWUgPSB0aGlzLnRpbWVQYW4uZ2V0VmFsdWUoKTsgXHJcbiAgfVxyXG5cclxuICBnZXRWYWx1ZSh0aW1lKSB7XHJcbiAgICB0aGlzLnN0YXJ0VGltZSArPSB0aW1lO1xyXG4gICAgaWYgKHRoaXMuc3RhcnRUaW1lID49IHRoaXMubmV4dFRpbWUpIHtcclxuICAgICAgdGhpcy5zdGFydFRpbWUgPSAwO1xyXG4gICAgICB0aGlzLm5leHRUaW1lID0gdGhpcy50aW1lUGFuLmdldFZhbHVlKCk7XHJcbiAgICAgIGlmICh0aGlzLm51bVBhbi5iID09IDEpIHtcclxuICAgICAgICBpZiAodGhpcy5udW1QYW4uZ2V0VmFsdWUoZmFsc2UpID4gMC41KVxyXG4gICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubnVtUGFuLmdldFZhbHVlKHRydWUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gMDtcclxuICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5pdGlhbGl6ZS9SYXRlLmpzIiwiaW1wb3J0IFZlY3RvcjJEIGZyb20gJy4uL21hdGgvVmVjdG9yMkQnO1xyXG5pbXBvcnQgU3BhbiBmcm9tICcuLi9tYXRoL1NwYW4nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0aGUgZGVmYXVsdCBpZiB0aGUgdmFsdWUgaXMgbnVsbCBvciB1bmRlZmluZWRcclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgUXVhcmsjUXVhcmsuVXRpbFxyXG4gICAgICogQG1ldGhvZCBpbml0VmFsdWVcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge01peGVkfSB2YWx1ZSBhIHNwZWNpZmljIHZhbHVlLCBjb3VsZCBiZSBldmVyeXRoaW5nIGJ1dCBudWxsIG9yIHVuZGVmaW5lZFxyXG4gICAgICogQHBhcmFtIHtNaXhlZH0gZGVmYXVsdHMgdGhlIGRlZmF1bHQgaWYgdGhlIHZhbHVlIGlzIG51bGwgb3IgdW5kZWZpbmVkXHJcbiAgICAgKi9cclxuICAgIGluaXRWYWx1ZTogZnVuY3Rpb24odmFsdWUsIGRlZmF1bHRzKSB7XHJcbiAgICAgICAgdmFyIHZhbHVlID0gKHZhbHVlICE9IG51bGwgJiYgdmFsdWUgIT0gdW5kZWZpbmVkKSA/IHZhbHVlIDogZGVmYXVsdHM7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdGhlIFZlY3RvcjJEIC0gb3IgY3JlYXRlcyBhIG5ldyBvbmVcclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgUXVhcmsjUXVhcmsuVXRpbFxyXG4gICAgICogQG1ldGhvZCBnZXRWZWN0b3IyRFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7UXVhcmsuVmVjdG9yMkQgfCBOdW1iZXJ9IHBvc3Rpb25PclhcclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbeV0ganVzdCB2YWxpZCBpZiAncG9zdGlvbk9yWCcgaXMgbm90IGFuIG9iamVjdFxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge1F1YXJrLlZlY3RvcjJEfVxyXG4gICAgICovXHJcbiAgICBnZXRWZWN0b3IyRDogZnVuY3Rpb24ocG9zdGlvbk9yWCwgeSkge1xyXG4gICAgICAgIGlmICh0eXBlb2YocG9zdGlvbk9yWCkgPT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHBvc3Rpb25Pclg7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIHZlY3RvcjJkID0gbmV3IFZlY3RvcjJEKHBvc3Rpb25PclgsIHkpO1xyXG4gICAgICAgICAgICByZXR1cm4gdmVjdG9yMmQ7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBtZW1iZXJvZiBRdWFyayNRdWFyay5VdGlsXHJcbiAgICAgKiBAbWV0aG9kIGp1ZGdlVmVjdG9yMkRcclxuICAgICAqXHJcbiAgICAgKiBAdG9kbyBhZGQgZGVzY3JpcHRpb24gZm9yIHBhcmFtIGBwT0JKYFxyXG4gICAgICogQHRvZG8gYWRkIGRlc2NyaXB0aW9uIGZvciBmdW5jdGlvblxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBwT0JKXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7U3RyaW5nfSByZXN1bHRcclxuICAgICAqL1xyXG4gICAganVkZ2VWZWN0b3IyRDogZnVuY3Rpb24ocE9CSikge1xyXG4gICAgICAgIHZhciByZXN1bHQgPSAnJztcclxuICAgICAgICBpZiAocE9CSi5oYXNPd25Qcm9wZXJ0eSgneCcpIHx8IHBPQkouaGFzT3duUHJvcGVydHkoJ3knKSB8fCBwT0JKLmhhc093blByb3BlcnR5KCdwJykgfHwgcE9CSi5oYXNPd25Qcm9wZXJ0eSgncG9zaXRpb24nKSlcclxuICAgICAgICAgICAgcmVzdWx0ICs9ICdwJztcclxuICAgICAgICBpZiAocE9CSi5oYXNPd25Qcm9wZXJ0eSgndngnKSB8fCBwT0JKLmhhc093blByb3BlcnR5KCd2eCcpIHx8IHBPQkouaGFzT3duUHJvcGVydHkoJ3YnKSB8fCBwT0JKLmhhc093blByb3BlcnR5KCd2ZWxvY2l0eScpKVxyXG4gICAgICAgICAgICByZXN1bHQgKz0gJ3YnO1xyXG4gICAgICAgIGlmIChwT0JKLmhhc093blByb3BlcnR5KCdheCcpIHx8IHBPQkouaGFzT3duUHJvcGVydHkoJ2F4JykgfHwgcE9CSi5oYXNPd25Qcm9wZXJ0eSgnYScpIHx8IHBPQkouaGFzT3duUHJvcGVydHkoJ2FjY2VsZXJhdGUnKSlcclxuICAgICAgICAgICAgcmVzdWx0ICs9ICdhJztcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAbWVtYmVyb2YgUXVhcmsjUXVhcmsuVXRpbFxyXG4gICAgICogQG1ldGhvZCBzZXRWZWN0b3IyREJ5T2JqZWN0XHJcbiAgICAgKlxyXG4gICAgICogQHRvZG8gYWRkIGRlc2NyaXB0aW9uIGZvciBwYXJhbSBgdGFyZ2V0YFxyXG4gICAgICogQHRvZG8gYWRkIGRlc2NyaXB0aW9uIGZvciBwYXJhbSBgcE9CSmBcclxuICAgICAqIEB0b2RvIGFkZCBkZXNjcmlwdGlvbiBmb3IgZnVuY3Rpb25cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdGFyZ2V0XHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcE9CSlxyXG4gICAgICovXHJcbiAgICBzZXRWZWN0b3IyREJ5T2JqZWN0OiBmdW5jdGlvbih0YXJnZXQsIHBPQkopIHtcclxuICAgICAgICBpZiAocE9CSi5oYXNPd25Qcm9wZXJ0eSgneCcpKVxyXG4gICAgICAgICAgICB0YXJnZXQucC54ID0gcE9CSlsneCddO1xyXG5cclxuICAgICAgICBpZiAocE9CSi5oYXNPd25Qcm9wZXJ0eSgneScpKVxyXG4gICAgICAgICAgICB0YXJnZXQucC55ID0gcE9CSlsneSddO1xyXG5cclxuICAgICAgICBpZiAocE9CSi5oYXNPd25Qcm9wZXJ0eSgndngnKSlcclxuICAgICAgICAgICAgdGFyZ2V0LnYueCA9IHBPQkpbJ3Z4J107XHJcblxyXG4gICAgICAgIGlmIChwT0JKLmhhc093blByb3BlcnR5KCd2eScpKVxyXG4gICAgICAgICAgICB0YXJnZXQudi55ID0gcE9CSlsndnknXTtcclxuXHJcbiAgICAgICAgaWYgKHBPQkouaGFzT3duUHJvcGVydHkoJ2F4JykpXHJcbiAgICAgICAgICAgIHRhcmdldC5hLnggPSBwT0JKWydheCddO1xyXG5cclxuICAgICAgICBpZiAocE9CSi5oYXNPd25Qcm9wZXJ0eSgnYXknKSlcclxuICAgICAgICAgICAgdGFyZ2V0LmEueSA9IHBPQkpbJ2F5J107XHJcblxyXG4gICAgICAgIGlmIChwT0JKLmhhc093blByb3BlcnR5KCdwJykpXHJcbiAgICAgICAgICAgIHBhcnRpY2xlLnAuY29weShwT0JKWydwJ10pO1xyXG5cclxuICAgICAgICBpZiAocE9CSi5oYXNPd25Qcm9wZXJ0eSgndicpKVxyXG4gICAgICAgICAgICBwYXJ0aWNsZS52LmNvcHkocE9CSlsndiddKTtcclxuXHJcbiAgICAgICAgaWYgKHBPQkouaGFzT3duUHJvcGVydHkoJ2EnKSlcclxuICAgICAgICAgICAgcGFydGljbGUuYS5jb3B5KHBPQkpbJ2EnXSk7XHJcblxyXG4gICAgICAgIGlmIChwT0JKLmhhc093blByb3BlcnR5KCdwb3NpdGlvbicpKVxyXG4gICAgICAgICAgICBwYXJ0aWNsZS5wLmNvcHkocE9CSlsncG9zaXRpb24nXSk7XHJcblxyXG4gICAgICAgIGlmIChwT0JKLmhhc093blByb3BlcnR5KCd2ZWxvY2l0eScpKVxyXG4gICAgICAgICAgICBwYXJ0aWNsZS52LmNvcHkocE9CSlsndmVsb2NpdHknXSk7XHJcblxyXG4gICAgICAgIGlmIChwT0JKLmhhc093blByb3BlcnR5KCdhY2NlbGVyYXRlJykpXHJcbiAgICAgICAgICAgIHBhcnRpY2xlLmEuY29weShwT0JKWydhY2NlbGVyYXRlJ10pO1xyXG4gICAgfSxcclxuXHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyBhIG5ldyBRdWFyay5TcGFuIG9iamVjdFxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBRdWFyayNRdWFyay5VdGlsXHJcbiAgICAgKiBAbWV0aG9kIHNldFNwYW5WYWx1ZVxyXG4gICAgICpcclxuICAgICAqIEB0b2RvIGEsIGIgYW5kIGMgc2hvdWxkIGJlICdNaXhlZCcgb3IgJ051bWJlcic/XHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtNaXhlZCB8IFF1YXJrLlNwYW59IGFcclxuICAgICAqIEBwYXJhbSB7TWl4ZWR9ICAgICAgICAgICAgICAgYlxyXG4gICAgICogQHBhcmFtIHtNaXhlZH0gICAgICAgICAgICAgICBjXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7UXVhcmsuU3Bhbn1cclxuICAgICAqL1xyXG4gICAgc2V0U3BhblZhbHVlOiBmdW5jdGlvbihhLCBiLCBjKSB7XHJcbiAgICAgICAgaWYgKGEgaW5zdGFuY2VvZiBTcGFuKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICghYikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBTcGFuKGEpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFjKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgU3BhbihhLCBiKTtcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFNwYW4oYSwgYiwgYyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0aGUgdmFsdWUgZnJvbSBhIFF1YXJrLlNwYW4sIGlmIHRoZSBwYXJhbSBpcyBub3QgYSBRdWFyay5TcGFuIGl0IHdpbGwgcmV0dXJuIHRoZSBnaXZlbiBwYXJhbWV0ZXJcclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgUXVhcmsjUXVhcmsuVXRpbFxyXG4gICAgICogQG1ldGhvZCBnZXRTcGFuVmFsdWVcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge01peGVkIHwgUXVhcmsuU3Bhbn0gcGFuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7TWl4ZWR9IHRoZSB2YWx1ZSBvZiBRdWFyay5TcGFuIE9SIHRoZSBwYXJhbWV0ZXIgaWYgaXQgaXMgbm90IGEgUXVhcmsuU3BhblxyXG4gICAgICovXHJcbiAgICBnZXRTcGFuVmFsdWU6IGZ1bmN0aW9uKHBhbikge1xyXG4gICAgICAgIGlmIChwYW4gaW5zdGFuY2VvZiBTcGFuKVxyXG4gICAgICAgICAgICByZXR1cm4gcGFuLmdldFZhbHVlKCk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gcGFuO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEB0eXBlZGVmICB7T2JqZWN0fSByZ2JPYmplY3RcclxuICAgICAqIEBwcm9wZXJ0eSB7TnVtYmVyfSByIHJlZCB2YWx1ZVxyXG4gICAgICogQHByb3BlcnR5IHtOdW1iZXJ9IGcgZ3JlZW4gdmFsdWVcclxuICAgICAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBiIGJsdWUgdmFsdWVcclxuICAgICAqL1xyXG4gICAgLyoqXHJcbiAgICAgKiBjb252ZXJ0cyBhIGhleCB2YWx1ZSB0byBhIHJnYiBvYmplY3RcclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgUXVhcmsjUXVhcmsuVXRpbFxyXG4gICAgICogQG1ldGhvZCBoZXhUb1JHQlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBoIGFueSBoZXggdmFsdWUsIGUuZy4gIzAwMDAwMCBvciAwMDAwMDAgZm9yIGJsYWNrXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7cmdiT2JqZWN0fVxyXG4gICAgICovXHJcbiAgICBoZXhUb1JHQjogZnVuY3Rpb24oaCkge1xyXG4gICAgICAgIHZhciBoZXgxNiA9IChoLmNoYXJBdCgwKSA9PSBcIiNcIikgPyBoLnN1YnN0cmluZygxLCA3KSA6IGg7XHJcbiAgICAgICAgdmFyIHIgPSBwYXJzZUludChoZXgxNi5zdWJzdHJpbmcoMCwgMiksIDE2KTtcclxuICAgICAgICB2YXIgZyA9IHBhcnNlSW50KGhleDE2LnN1YnN0cmluZygyLCA0KSwgMTYpO1xyXG4gICAgICAgIHZhciBiID0gcGFyc2VJbnQoaGV4MTYuc3Vic3RyaW5nKDQsIDYpLCAxNik7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHI6IHIsXHJcbiAgICAgICAgICAgIGc6IGcsXHJcbiAgICAgICAgICAgIGI6IGJcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogY29udmVydHMgYSByZ2IgdmFsdWUgdG8gYSByZ2Igc3RyaW5nXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIFF1YXJrI1F1YXJrLlV0aWxcclxuICAgICAqIEBtZXRob2QgcmdiVG9IZXhcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdCB8IFF1YXJrLmhleFRvUkdCfSByZ2IgYSByZ2Igb2JqZWN0IGxpa2UgaW4ge0BsaW5rIFF1YXJrI1F1YXJrLlV0aWwuaGV4VG9SR0J9XHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7U3RyaW5nfSByZ2IoKVxyXG4gICAgICovXHJcbiAgICByZ2JUb0hleDogZnVuY3Rpb24ocmJnKSB7XHJcbiAgICAgICAgcmV0dXJuICdyZ2IoJyArIHJiZy5yICsgJywgJyArIHJiZy5nICsgJywgJyArIHJiZy5iICsgJyknO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvcmUvVXRpbC5qcyIsImltcG9ydCB7IHJhbmRvbUFUb0IsIHJhbmRvbUZsb2F0aW5nIH0gZnJvbSAnLi9NYXRoVXRpbHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3BhbntcclxuXHRjb25zdHJ1Y3RvcihhLCBiLCBjZW50ZXIgPSBmYWxzZSkge1xyXG5cdFx0aWYgKEFycmF5LmlzQXJyYXkoYSkpIHtcclxuXHRcdFx0dGhpcy5pc0FycmF5ID0gdHJ1ZTtcclxuXHRcdFx0dGhpcy5hID0gYTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuYSA9IGE7XHJcblx0XHRcdHRoaXMuYiA9IGIgfHwgdGhpcy5hO1xyXG5cdFx0XHR0aGlzLmNlbnRlciA9IGNlbnRlcjtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGdldFZhbHVlKElOVCl7XHJcblx0XHRpZiAodGhpcy5pc0FycmF5KSB7XHJcblx0XHRcdHJldHVybiB0aGlzLmFbTWF0aC5mbG9vcih0aGlzLmEubGVuZ3RoICogTWF0aC5yYW5kb20oKSldO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKCF0aGlzLmNlbnRlcilcclxuXHRcdFx0XHRyZXR1cm4gcmFuZG9tQVRvQih0aGlzLmEsIHRoaXMuYiwgSU5UKTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHJldHVybiByYW5kb21GbG9hdGluZyh0aGlzLmEsIHRoaXMuYiwgSU5UKTtcclxuXHRcdH1cdFxyXG5cdH1cclxuXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbWF0aC9TcGFuLmpzIiwiXHJcbmV4cG9ydCBmdW5jdGlvbiByYW5kb21BVG9CKGEsIGIsIElOVCkge1xyXG4gIGlmICghSU5UKVxyXG4gICAgcmV0dXJuIGEgKyBNYXRoLnJhbmRvbSgpICogKGIgLSBhICk7XHJcbiAgZWxzZVxyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChiIC0gYSkpICsgYTtcclxufVxyXG5cclxuIGV4cG9ydCBmdW5jdGlvbiByYW5kb21GbG9hdGluZyhjZW50ZXIsIGYsIElOVCkge1xyXG4gIHJldHVybiBNYXRoVXRpbHMucmFuZG9tQVRvQihjZW50ZXIgLSBmLCBjZW50ZXIgKyBmLCBJTlQpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVncmVlVHJhbnNmb3JtKGEpIHtcclxuICByZXR1cm4gYSAqIE1hdGguUEkgLyAxODA7XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbWF0aC9NYXRoVXRpbHMuanMiLCJpbXBvcnQgeyBFVUxFUiB9IGZyb20gJy4uL2VtaXR0ZXIvY29uc3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOdW1lcmljYWxJbnRlZ3JhdGlvbiB7XG5cbiAgY29uc3RydWN0b3IodHlwZSkge1xuICAgIHRoaXMudHlwZSA9IHR5cGUgfHwgRVVMRVI7XG4gIH1cblxuICBpbnRlZ3JhdGUocGFydGljbGUsIHRpbWUsIGRhbXBpbmcpIHtcbiAgICB0aGlzLmV1bGVySW50ZWdyYXRlKHBhcnRpY2xlLCB0aW1lLCBkYW1waW5nKTtcbiAgfVxuXG4gIGV1bGVySW50ZWdyYXRlKHBhcnRpY2xlLCB0aW1lLCBkYW1waW5nKSB7XG4gICAgaWYgKCFwYXJ0aWNsZS5zbGVlcCkge1xuICAgICAgcGFydGljbGUub2xkLnAuY29weShwYXJ0aWNsZS5wKTtcbiAgICAgIHBhcnRpY2xlLm9sZC52LmNvcHkocGFydGljbGUudik7XG4gICAgICBwYXJ0aWNsZS5hLm11bHRpcGx5U2NhbGFyKDEgLyBwYXJ0aWNsZS5tYXNzKTtcbiAgICAgIHBhcnRpY2xlLnYuYWRkKHBhcnRpY2xlLmEubXVsdGlwbHlTY2FsYXIodGltZSkpO1xuICAgICAgcGFydGljbGUucC5hZGQocGFydGljbGUub2xkLnYubXVsdGlwbHlTY2FsYXIodGltZSkpO1xuICAgICAgaWYgKGRhbXBpbmcpe1xuICAgICAgICBwYXJ0aWNsZS52Lm11bHRpcGx5U2NhbGFyKGRhbXBpbmcpO1xuICAgICAgfVxuICAgICAgcGFydGljbGUuYS5jbGVhcigpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21hdGgvTnVtZXJpY2FsSW50ZWdyYXRpb24uanMiLCJpbXBvcnQgSW5pdGlhbGl6ZSBmcm9tICcuL0luaXRpYWxpemUnO1xyXG5pbXBvcnQgeyBkZWdyZWVUcmFuc2Zvcm0gfSBmcm9tICcuLi9tYXRoL01hdGhVdGlscyc7XHJcbmltcG9ydCAqIGFzIFV0aWwgZnJvbSAnLi4vY29yZS9VdGlsJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRpYWxpemUoZW1pdHRlciwgcGFydGljbGUsIGluaXRpYWxpemVzKSB7XHJcbiAgY29uc3QgbGVuZ3RoID0gaW5pdGlhbGl6ZXMubGVuZ3RoO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgIGlmIChpbml0aWFsaXplc1tpXSBpbnN0YW5jZW9mIEluaXRpYWxpemUpe1xyXG4gICAgICBpbml0aWFsaXplc1tpXS5pbml0KGVtaXR0ZXIsIHBhcnRpY2xlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGluaXQoZW1pdHRlciwgcGFydGljbGUsIGluaXRpYWxpemVzW2ldKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGJpbmRFbWl0dGVyKGVtaXR0ZXIsIHBhcnRpY2xlKTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGluaXQoZW1pdHRlciwgcGFydGljbGUsIGluaXRpYWxpemUpe1xyXG4gIFV0aWwuc2V0UHJvdG90eXBlQnlPYmplY3QocGFydGljbGUsIGluaXRpYWxpemUpO1xyXG4gIFV0aWwuc2V0VmVjdG9yMkRCeU9iamVjdChwYXJ0aWNsZSwgaW5pdGlhbGl6ZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJpbmRFbWl0dGVyKGVtaXR0ZXIsIHBhcnRpY2xlKSB7XHJcbiAgaWYgKGVtaXR0ZXIuYmluZEVtaXR0ZXIpIHtcclxuICAgIHBhcnRpY2xlLnAuYWRkKGVtaXR0ZXIucCk7XHJcbiAgICBwYXJ0aWNsZS52LmFkZChlbWl0dGVyLnYpO1xyXG4gICAgcGFydGljbGUuYS5hZGQoZW1pdHRlci5hKTtcclxuICAgIHBhcnRpY2xlLnYucm90YXRlKGRlZ3JlZVRyYW5zZm9ybShlbWl0dGVyLnJvdGF0aW9uKSk7XHJcbiAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luaXRpYWxpemUvSW5pdGlhbGl6ZVV0aWwuanMiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBJbml0aWFsaXplIHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHJcblx0fVxyXG5cclxuXHRyZXNldCgpIHtcclxuXHJcblx0fVxyXG5cclxuXHRpbml0KGVtaXR0ZXIsIHBhcnRpY2xlKSB7XHJcblx0XHRpZiAocGFydGljbGUpIHtcclxuXHRcdFx0dGhpcy5pbml0aWFsaXplKHBhcnRpY2xlKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuaW5pdGlhbGl6ZShlbWl0dGVyKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGluaXRpYWxpemUoKSB7XHJcblxyXG5cdH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbml0aWFsaXplL0luaXRpYWxpemUuanMiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxudmFyIE1pbmlTaWduYWxCaW5kaW5nID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gTWluaVNpZ25hbEJpbmRpbmcoZm4sIG9uY2UsIHRoaXNBcmcpIHtcbiAgICBpZiAob25jZSA9PT0gdW5kZWZpbmVkKSBvbmNlID0gZmFsc2U7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWluaVNpZ25hbEJpbmRpbmcpO1xuXG4gICAgdGhpcy5fZm4gPSBmbjtcbiAgICB0aGlzLl9vbmNlID0gb25jZTtcbiAgICB0aGlzLl90aGlzQXJnID0gdGhpc0FyZztcbiAgICB0aGlzLl9uZXh0ID0gdGhpcy5fcHJldiA9IHRoaXMuX293bmVyID0gbnVsbDtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhNaW5pU2lnbmFsQmluZGluZywgW3tcbiAgICBrZXk6ICdkZXRhY2gnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkZXRhY2goKSB7XG4gICAgICBpZiAodGhpcy5fb3duZXIgPT09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgICAgIHRoaXMuX293bmVyLmRldGFjaCh0aGlzKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBNaW5pU2lnbmFsQmluZGluZztcbn0pKCk7XG5cbmZ1bmN0aW9uIF9hZGRNaW5pU2lnbmFsQmluZGluZyhzZWxmLCBub2RlKSB7XG4gIGlmICghc2VsZi5faGVhZCkge1xuICAgIHNlbGYuX2hlYWQgPSBub2RlO1xuICAgIHNlbGYuX3RhaWwgPSBub2RlO1xuICB9IGVsc2Uge1xuICAgIHNlbGYuX3RhaWwuX25leHQgPSBub2RlO1xuICAgIG5vZGUuX3ByZXYgPSBzZWxmLl90YWlsO1xuICAgIHNlbGYuX3RhaWwgPSBub2RlO1xuICB9XG5cbiAgbm9kZS5fb3duZXIgPSBzZWxmO1xuXG4gIHJldHVybiBub2RlO1xufVxuXG52YXIgTWluaVNpZ25hbCA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIE1pbmlTaWduYWwoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1pbmlTaWduYWwpO1xuXG4gICAgdGhpcy5faGVhZCA9IHRoaXMuX3RhaWwgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoTWluaVNpZ25hbCwgW3tcbiAgICBrZXk6ICdoYW5kbGVycycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZXJzKCkge1xuICAgICAgdmFyIGV4aXN0cyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogYXJndW1lbnRzWzBdO1xuXG4gICAgICB2YXIgbm9kZSA9IHRoaXMuX2hlYWQ7XG5cbiAgICAgIGlmIChleGlzdHMpIHJldHVybiAhIW5vZGU7XG5cbiAgICAgIHZhciBlZSA9IFtdO1xuXG4gICAgICB3aGlsZSAobm9kZSkge1xuICAgICAgICBlZS5wdXNoKG5vZGUpO1xuICAgICAgICBub2RlID0gbm9kZS5fbmV4dDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGVlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2hhcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhcyhub2RlKSB7XG4gICAgICBpZiAoIShub2RlIGluc3RhbmNlb2YgTWluaVNpZ25hbEJpbmRpbmcpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTWluaVNpZ25hbCNoYXMoKTogRmlyc3QgYXJnIG11c3QgYmUgYSBNaW5pU2lnbmFsQmluZGluZyBvYmplY3QuJyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBub2RlLl9vd25lciA9PT0gdGhpcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdkaXNwYXRjaCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRpc3BhdGNoKCkge1xuICAgICAgdmFyIG5vZGUgPSB0aGlzLl9oZWFkO1xuXG4gICAgICBpZiAoIW5vZGUpIHJldHVybiBmYWxzZTtcblxuICAgICAgd2hpbGUgKG5vZGUpIHtcbiAgICAgICAgaWYgKG5vZGUuX29uY2UpIHRoaXMuZGV0YWNoKG5vZGUpO1xuICAgICAgICBub2RlLl9mbi5hcHBseShub2RlLl90aGlzQXJnLCBhcmd1bWVudHMpO1xuICAgICAgICBub2RlID0gbm9kZS5fbmV4dDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnYWRkJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkKGZuKSB7XG4gICAgICB2YXIgdGhpc0FyZyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IG51bGwgOiBhcmd1bWVudHNbMV07XG5cbiAgICAgIGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaW5pU2lnbmFsI2FkZCgpOiBGaXJzdCBhcmcgbXVzdCBiZSBhIEZ1bmN0aW9uLicpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIF9hZGRNaW5pU2lnbmFsQmluZGluZyh0aGlzLCBuZXcgTWluaVNpZ25hbEJpbmRpbmcoZm4sIGZhbHNlLCB0aGlzQXJnKSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnb25jZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uY2UoZm4pIHtcbiAgICAgIHZhciB0aGlzQXJnID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGFyZ3VtZW50c1sxXTtcblxuICAgICAgaWYgKHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pbmlTaWduYWwjb25jZSgpOiBGaXJzdCBhcmcgbXVzdCBiZSBhIEZ1bmN0aW9uLicpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIF9hZGRNaW5pU2lnbmFsQmluZGluZyh0aGlzLCBuZXcgTWluaVNpZ25hbEJpbmRpbmcoZm4sIHRydWUsIHRoaXNBcmcpKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdkZXRhY2gnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkZXRhY2gobm9kZSkge1xuICAgICAgaWYgKCEobm9kZSBpbnN0YW5jZW9mIE1pbmlTaWduYWxCaW5kaW5nKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pbmlTaWduYWwjZGV0YWNoKCk6IEZpcnN0IGFyZyBtdXN0IGJlIGEgTWluaVNpZ25hbEJpbmRpbmcgb2JqZWN0LicpO1xuICAgICAgfVxuICAgICAgaWYgKG5vZGUuX293bmVyICE9PSB0aGlzKSByZXR1cm4gdGhpcztcblxuICAgICAgaWYgKG5vZGUuX3ByZXYpIG5vZGUuX3ByZXYuX25leHQgPSBub2RlLl9uZXh0O1xuICAgICAgaWYgKG5vZGUuX25leHQpIG5vZGUuX25leHQuX3ByZXYgPSBub2RlLl9wcmV2O1xuXG4gICAgICBpZiAobm9kZSA9PT0gdGhpcy5faGVhZCkge1xuICAgICAgICB0aGlzLl9oZWFkID0gbm9kZS5fbmV4dDtcbiAgICAgICAgaWYgKG5vZGUuX25leHQgPT09IG51bGwpIHtcbiAgICAgICAgICB0aGlzLl90YWlsID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChub2RlID09PSB0aGlzLl90YWlsKSB7XG4gICAgICAgIHRoaXMuX3RhaWwgPSBub2RlLl9wcmV2O1xuICAgICAgICB0aGlzLl90YWlsLl9uZXh0ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgbm9kZS5fb3duZXIgPSBudWxsO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZGV0YWNoQWxsJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGV0YWNoQWxsKCkge1xuICAgICAgdmFyIG5vZGUgPSB0aGlzLl9oZWFkO1xuICAgICAgaWYgKCFub2RlKSByZXR1cm4gdGhpcztcblxuICAgICAgdGhpcy5faGVhZCA9IHRoaXMuX3RhaWwgPSBudWxsO1xuXG4gICAgICB3aGlsZSAobm9kZSkge1xuICAgICAgICBub2RlLl9vd25lciA9IG51bGw7XG4gICAgICAgIG5vZGUgPSBub2RlLl9uZXh0O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE1pbmlTaWduYWw7XG59KSgpO1xuXG5NaW5pU2lnbmFsLk1pbmlTaWduYWxCaW5kaW5nID0gTWluaVNpZ25hbEJpbmRpbmc7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IE1pbmlTaWduYWw7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9taW5pLXNpZ25hbHMvbGliL21pbmktc2lnbmFscy5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFJhdGUgZnJvbSAnLi9SYXRlJztcbmltcG9ydCBWZWxvY2l0eSBmcm9tICcuL1ZlbG9jaXR5JztcbmltcG9ydCBMaWZlIGZyb20gJy4vTGlmZSc7XG5pbXBvcnQgTWFzcyBmcm9tICcuL01hc3MnO1xuaW1wb3J0IFJhZGl1cyBmcm9tICcuL1JhZGl1cyc7XG5pbXBvcnQgUG9zaXRpb24gZnJvbSAnLi9Qb3NpdGlvbic7XG5cbmV4cG9ydCB7IFJhdGUsIFZlbG9jaXR5LCBMaWZlLCBNYXNzLCBSYWRpdXMsIFBvc2l0aW9uIH07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luaXRpYWxpemUvaW5kZXguanMiLCJpbXBvcnQgSW5pdGlhbGl6ZSBmcm9tICcuL0luaXRpYWxpemUnO1xyXG5pbXBvcnQgVXRpbCBmcm9tICcuLi9jb3JlL1V0aWwnO1xyXG5pbXBvcnQgeyBNRUFTVVJFIH0gZnJvbSAnLi4vZW1pdHRlci9jb25zdCc7XHJcbmltcG9ydCBQb2xhcjJEIGZyb20gJy4uL21hdGgvUG9sYXIyRCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWZWxvY2l0eSBleHRlbmRzIEluaXRpYWxpemV7XHJcblx0Y29uc3RydWN0b3IocnBhbiwgdGhhcGFuLCB0eXBlKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMuclBhbiA9IFV0aWwuc2V0U3BhblZhbHVlKHJwYW4pO1xyXG5cdFx0dGhpcy50aGFQYW4gPSBVdGlsLnNldFNwYW5WYWx1ZSh0aGFwYW4pO1xyXG5cdFx0dGhpcy50eXBlID0gVXRpbC5pbml0VmFsdWUodHlwZSwgJ3ZlY3RvcicpO1xyXG5cdH1cclxuXHJcblx0cmVzZXQocnBhbiwgdGhhcGFuLCB0eXBlKSB7XHJcblx0XHR0aGlzLnJQYW4gPSBVdGlsLnNldFNwYW5WYWx1ZShycGFuKTtcclxuXHRcdHRoaXMudGhhUGFuID0gVXRpbC5zZXRTcGFuVmFsdWUodGhhcGFuKTtcclxuXHRcdHRoaXMudHlwZSA9IFV0aWwuaW5pdFZhbHVlKHR5cGUsICd2ZWN0b3InKTtcclxuXHR9XHJcblxyXG5cdG5vcm1hbGl6ZVZlbG9jaXR5KHZyKSB7XHJcblx0XHRyZXR1cm4gdnIgKiBNRUFTVVJFO1xyXG5cdH1cclxuXHJcblx0aW5pdGlhbGl6ZSh0YXJnZXQpIHtcclxuXHRcdGlmICh0aGlzLnR5cGUgPT0gJ3AnIHx8IHRoaXMudHlwZSA9PSAnUCcgfHwgdGhpcy50eXBlID09ICdwb2xhcicpIHtcclxuXHRcdFx0Y29uc3QgcG9sYXIyZCA9IG5ldyBQb2xhcjJEKHRoaXMubm9ybWFsaXplVmVsb2NpdHkodGhpcy5yUGFuLmdldFZhbHVlKCkpLCB0aGlzLnRoYVBhbi5nZXRWYWx1ZSgpICogTWF0aC5QSSAvIDE4MCk7XHJcblx0XHRcdHRhcmdldC52LnggPSBwb2xhcjJkLmdldFgoKTtcclxuXHRcdFx0dGFyZ2V0LnYueSA9IHBvbGFyMmQuZ2V0WSgpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGFyZ2V0LnYueCA9IHRoaXMubm9ybWFsaXplVmVsb2NpdHkodGhpcy5yUGFuLmdldFZhbHVlKCkpO1xyXG5cdFx0XHR0YXJnZXQudi55ID0gdGhpcy5ub3JtYWxpemVWZWxvY2l0eSh0aGlzLnRoYVBhbi5nZXRWYWx1ZSgpKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5pdGlhbGl6ZS9WZWxvY2l0eS5qcyIsImltcG9ydCBWZWN0b3IyRCBmcm9tICcuL1ZlY3RvcjJEJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvbGFyMkQge1xyXG5cclxuXHRjb25zdHJ1Y3RvcihyLCB0aGEpe1xyXG5cdFx0dGhpcy5yID0gTWF0aC5hYnMocikgfHwgMDtcclxuXHRcdHRoaXMudGhhID0gdGhhIHx8IDA7XHJcblx0fVxyXG5cclxuXHRzZXQociwgdGhhKSB7XHJcblxyXG5cdFx0dGhpcy5yID0gcjtcclxuXHRcdHRoaXMudGhhID0gdGhhO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblxyXG5cdH1cclxuXHJcblx0c2V0UihyKSB7XHJcblxyXG5cdFx0dGhpcy5yID0gcjtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cclxuXHR9XHJcblxyXG5cdHNldFRoYSh0aGEpIHtcclxuXHJcblx0XHR0aGlzLnRoYSA9IHRoYTtcclxuXHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHJcblx0fVxyXG5cclxuXHRjb3B5KHApIHtcclxuXHJcblx0XHR0aGlzLnIgPSBwLnI7XHJcblx0XHR0aGlzLnRoYSA9IHAudGhhO1xyXG5cclxuXHRcdHJldHVybiB0aGlzO1xyXG5cclxuXHR9XHJcblxyXG5cdHRvVmVjdG9yKCkge1xyXG5cdFx0cmV0dXJuIG5ldyBWZWN0b3IyRCh0aGlzLmdldFgoKSwgdGhpcy5nZXRZKCkpO1xyXG5cdH1cclxuXHJcblx0Z2V0WCgpIHtcclxuXHRcdHJldHVybiB0aGlzLnIgKiBNYXRoLnNpbih0aGlzLnRoYSk7XHJcblx0fVxyXG5cclxuXHRnZXRZKCkge1xyXG5cdFx0cmV0dXJuIC10aGlzLnIgKiBNYXRoLmNvcyh0aGlzLnRoYSk7XHJcblx0fVxyXG5cclxuXHRub3JtYWxpemUoKSB7XHJcblxyXG5cdFx0dGhpcy5yID0gMTtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxuXHJcblx0ZXF1YWxzKHYpIHtcclxuXHJcblx0XHRyZXR1cm4gKCh2LnIgPT09IHRoaXMuciApICYmICh2LnRoYSA9PT0gdGhpcy50aGEgKSApO1xyXG5cclxuXHR9XHJcblxyXG5cdHRvQXJyYXkoKSB7XHJcblxyXG5cdFx0cmV0dXJuIFt0aGlzLnIsIHRoaXMudGhhXTtcclxuXHJcblx0fVxyXG5cclxuXHRjbGVhcigpIHtcclxuXHRcdHRoaXMuciA9IDAuMDtcclxuXHRcdHRoaXMudGhhID0gMC4wO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG5cclxuXHRjbG9uZSgpIHtcclxuXHJcblx0XHRyZXR1cm4gbmV3IFBvbGFyMkQodGhpcy5yLCB0aGlzLnRoYSk7XHJcblxyXG5cdH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbWF0aC9Qb2xhcjJELmpzIiwiaW1wb3J0IEluaXRpYWxpemUgZnJvbSAnLi9Jbml0aWFsaXplJztcclxuaW1wb3J0IFV0aWwgZnJvbSAnLi4vY29yZS9VdGlsJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpZmUgZXh0ZW5kcyBJbml0aWFsaXple1xyXG5cclxuXHRjb25zdHJ1Y3RvcihhLCBiLCBjKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMubGlmZVBhbiA9IFV0aWwuc2V0U3BhblZhbHVlKGEsIGIsIGMpO1xyXG5cdH1cclxuXHJcblx0aW5pdGlhbGl6ZSh0YXJnZXQpIHtcclxuXHRcdGlmICh0aGlzLmxpZmVQYW4uYSA9PSBJbmZpbml0eSl7XHJcblx0XHRcdHRhcmdldC5saWZlID0gSW5maW5pdHk7XHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0dGFyZ2V0LmxpZmUgPSB0aGlzLmxpZmVQYW4uZ2V0VmFsdWUoKTtcdFxyXG5cdFx0fVxyXG5cdH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbml0aWFsaXplL0xpZmUuanMiLCJpbXBvcnQgSW5pdGlhbGl6ZSBmcm9tICcuL0luaXRpYWxpemUnO1xyXG5pbXBvcnQgVXRpbCBmcm9tICcuLi9jb3JlL1V0aWwnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFzcyBleHRlbmRzIEluaXRpYWxpemV7XHJcblxyXG4gICAgY29uc3RydWN0b3IoYSwgYiwgYykge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMubWFzc1BhbiA9IFV0aWwuc2V0U3BhblZhbHVlKGEsIGIsIGMpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRpYWxpemUodGFyZ2V0KSB7XHJcbiAgICAgICAgdGFyZ2V0Lm1hc3MgPSB0aGlzLm1hc3NQYW4uZ2V0VmFsdWUoKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbml0aWFsaXplL01hc3MuanMiLCJpbXBvcnQgSW5pdGlhbGl6ZSBmcm9tICcuL0luaXRpYWxpemUnO1xyXG5pbXBvcnQgVXRpbCBmcm9tICcuLi9jb3JlL1V0aWwnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFkaXVzIGV4dGVuZHMgSW5pdGlhbGl6ZXtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihhLCBiLCBjKSB7XHJcbiAgICBcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy5yYWRpdXMgPSBVdGlsLnNldFNwYW5WYWx1ZShhLCBiLCBjKTtcclxuICAgIH1cclxuXHJcbiAgICByZXNldChhLCBiLCBjKXtcclxuXHRcdHRoaXMucmFkaXVzID0gVXRpbC5zZXRTcGFuVmFsdWUoYSwgYiwgYyk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdGlhbGl6ZShwYXJ0aWNsZSkge1xyXG5cdFx0cGFydGljbGUucmFkaXVzID0gdGhpcy5yYWRpdXMuZ2V0VmFsdWUoKTtcclxuXHRcdHBhcnRpY2xlLnRyYW5zZm9ybS5vbGRSYWRpdXMgPSBwYXJ0aWNsZS5yYWRpdXM7XHJcblx0fVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luaXRpYWxpemUvUmFkaXVzLmpzIiwiaW1wb3J0IEluaXRpYWxpemUgZnJvbSAnLi9Jbml0aWFsaXplJztcclxuaW1wb3J0IFV0aWwgZnJvbSAnLi4vY29yZS9VdGlsJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvc2l0aW9uIGV4dGVuZHMgSW5pdGlhbGl6ZXtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih6b25lKSB7XHJcbiAgICBcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy56b25lID0gem9uZSB8fCBuZXcgUG9pbnRab25lKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXQoem9uZSl7XHJcblx0XHR0aGlzLnpvbmUgPSB6b25lIHx8IG5ldyBQb2ludFpvbmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0aWFsaXplKHRhcmdldCkge1xyXG5cdFx0dGhpcy56b25lLmdldFBvc2l0aW9uKCk7XHJcblx0XHR0YXJnZXQucC54ID0gdGhpcy56b25lLnZlY3Rvci54O1xyXG5cdFx0dGFyZ2V0LnAueSA9IHRoaXMuem9uZS52ZWN0b3IueTtcclxuXHR9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5pdGlhbGl6ZS9Qb3NpdGlvbi5qcyIsImltcG9ydCBab25lIGZyb20gJy4vWm9uZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWN0Wm9uZSBleHRlbmRzIFpvbmUge1xyXG5cclxuXHRjb25zdHJ1Y3Rvcih4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMueCA9IHg7XHJcblx0XHR0aGlzLnkgPSB5O1xyXG5cdFx0dGhpcy53aWR0aCA9IHdpZHRoO1xyXG5cdFx0dGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcblx0fVxyXG5cclxuXHRnZXRQb3NpdGlvbigpIHtcclxuXHRcdHRoaXMudmVjdG9yLnggPSB0aGlzLnggKyBNYXRoLnJhbmRvbSgpICogdGhpcy53aWR0aDtcclxuXHRcdHRoaXMudmVjdG9yLnkgPSB0aGlzLnkgKyBNYXRoLnJhbmRvbSgpICogdGhpcy5oZWlnaHQ7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMudmVjdG9yO1xyXG5cdH1cclxuXHJcblx0Y3Jvc3NpbmcocGFydGljbGUpIHtcclxuXHRcdGlmICh0aGlzLmNyb3NzVHlwZSA9PSAnZGVhZCcpIHtcclxuXHRcdFx0aWYgKHBhcnRpY2xlLnAueCArIHBhcnRpY2xlLnJhZGl1cyA8IHRoaXMueClcclxuXHRcdFx0XHRwYXJ0aWNsZS5kZWFkID0gdHJ1ZTtcclxuXHRcdFx0ZWxzZSBpZiAocGFydGljbGUucC54IC0gcGFydGljbGUucmFkaXVzID4gdGhpcy54ICsgdGhpcy53aWR0aClcclxuXHRcdFx0XHRwYXJ0aWNsZS5kZWFkID0gdHJ1ZTtcclxuXHJcblx0XHRcdGlmIChwYXJ0aWNsZS5wLnkgKyBwYXJ0aWNsZS5yYWRpdXMgPCB0aGlzLnkpXHJcblx0XHRcdFx0cGFydGljbGUuZGVhZCA9IHRydWU7XHJcblx0XHRcdGVsc2UgaWYgKHBhcnRpY2xlLnAueSAtIHBhcnRpY2xlLnJhZGl1cyA+IHRoaXMueSArIHRoaXMuaGVpZ2h0KVxyXG5cdFx0XHRcdHBhcnRpY2xlLmRlYWQgPSB0cnVlO1xyXG5cdFx0fSBlbHNlIGlmICh0aGlzLmNyb3NzVHlwZSA9PSAnYm91bmQnKSB7XHJcblx0XHRcdGlmIChwYXJ0aWNsZS5wLnggLSBwYXJ0aWNsZS5yYWRpdXMgPCB0aGlzLngpIHtcclxuXHRcdFx0XHRwYXJ0aWNsZS5wLnggPSB0aGlzLnggKyBwYXJ0aWNsZS5yYWRpdXM7XHJcblx0XHRcdFx0cGFydGljbGUudi54ICo9IC0xO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHBhcnRpY2xlLnAueCArIHBhcnRpY2xlLnJhZGl1cyA+IHRoaXMueCArIHRoaXMud2lkdGgpIHtcclxuXHRcdFx0XHRwYXJ0aWNsZS5wLnggPSB0aGlzLnggKyB0aGlzLndpZHRoIC0gcGFydGljbGUucmFkaXVzO1xyXG5cdFx0XHRcdHBhcnRpY2xlLnYueCAqPSAtMTtcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0aWYgKHBhcnRpY2xlLnAueSAtIHBhcnRpY2xlLnJhZGl1cyA8IHRoaXMueSkge1xyXG5cdFx0XHRcdHBhcnRpY2xlLnAueSA9IHRoaXMueSArIHBhcnRpY2xlLnJhZGl1cztcclxuXHRcdFx0XHRwYXJ0aWNsZS52LnkgKj0gLTE7XHJcblx0XHRcdH0gZWxzZSBpZiAocGFydGljbGUucC55ICsgcGFydGljbGUucmFkaXVzID4gdGhpcy55ICsgdGhpcy5oZWlnaHQpIHtcclxuXHRcdFx0XHRwYXJ0aWNsZS5wLnkgPSB0aGlzLnkgKyB0aGlzLmhlaWdodCAtIHBhcnRpY2xlLnJhZGl1cztcclxuXHRcdFx0XHRwYXJ0aWNsZS52LnkgKj0gLTE7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSBpZiAodGhpcy5jcm9zc1R5cGUgPT0gJ2Nyb3NzJykge1xyXG5cdFx0XHRpZiAocGFydGljbGUucC54ICsgcGFydGljbGUucmFkaXVzIDwgdGhpcy54ICYmIHBhcnRpY2xlLnYueCA8PSAwKVxyXG5cdFx0XHRcdHBhcnRpY2xlLnAueCA9IHRoaXMueCArIHRoaXMud2lkdGggKyBwYXJ0aWNsZS5yYWRpdXM7XHJcblx0XHRcdGVsc2UgaWYgKHBhcnRpY2xlLnAueCAtIHBhcnRpY2xlLnJhZGl1cyA+IHRoaXMueCArIHRoaXMud2lkdGggJiYgcGFydGljbGUudi54ID49IDApXHJcblx0XHRcdFx0cGFydGljbGUucC54ID0gdGhpcy54IC0gcGFydGljbGUucmFkaXVzO1xyXG5cclxuXHRcdFx0aWYgKHBhcnRpY2xlLnAueSArIHBhcnRpY2xlLnJhZGl1cyA8IHRoaXMueSAmJiBwYXJ0aWNsZS52LnkgPD0gMClcclxuXHRcdFx0XHRwYXJ0aWNsZS5wLnkgPSB0aGlzLnkgKyB0aGlzLmhlaWdodCArIHBhcnRpY2xlLnJhZGl1cztcclxuXHRcdFx0ZWxzZSBpZiAocGFydGljbGUucC55IC0gcGFydGljbGUucmFkaXVzID4gdGhpcy55ICsgdGhpcy5oZWlnaHQgJiYgcGFydGljbGUudi55ID49IDApXHJcblx0XHRcdFx0cGFydGljbGUucC55ID0gdGhpcy55IC0gcGFydGljbGUucmFkaXVzO1xyXG5cdFx0fVxyXG5cdH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy96b25lL1JlY3Rab25lLmpzIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgWm9uZSB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0dGhpcy52ZWN0b3IgPSBuZXcgUHJvdG9uLlZlY3RvcjJEKDAsIDApO1xyXG5cdFx0dGhpcy5yYW5kb20gPSAwO1xyXG5cdFx0dGhpcy5jcm9zc1R5cGUgPSAnZGVhZCc7XHJcblx0XHR0aGlzLmFsZXJ0ID0gdHJ1ZTtcclxuXHR9XHJcblxyXG5cdGdldFBvc2l0aW9uKCkge1xyXG5cclxuXHR9XHJcblxyXG5cdGNyb3NzaW5nKHBhcnRpY2xlKSB7XHJcblxyXG5cdH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy96b25lL1pvbmUuanMiLCJpbXBvcnQgWm9uZSBmcm9tICcuL1pvbmUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9pbnRab25lIGV4dGVuZHMgWm9uZSB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHgsIHkpIHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy54ID0geDtcclxuXHRcdHRoaXMueSA9IHk7XHJcblx0fVxyXG5cclxuXHRnZXRQb3NpdGlvbigpIHtcclxuXHRcdHRoaXMudmVjdG9yLnggPSB0aGlzLng7XHJcblx0XHR0aGlzLnZlY3Rvci55ID0gdGhpcy55O1xyXG5cclxuXHRcdHJldHVybiB0aGlzLnZlY3RvcjtcclxuXHR9XHJcblxyXG5cdGNyb3NzaW5nKHBhcnRpY2xlKSB7XHJcblx0XHRpZiAodGhpcy5hbGVydCkge1xyXG5cdFx0XHRhbGVydCgnU29ycnkgUG9pbnRab25lIGRvZXMgbm90IHN1cHBvcnQgY3Jvc3NpbmcgbWV0aG9kJyk7XHJcblx0XHRcdHRoaXMuYWxlcnQgPSBmYWxzZTtcclxuXHRcdH1cclxuXHR9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvem9uZS9Qb2ludFpvbmUuanMiLCJpbXBvcnQgWm9uZSBmcm9tICcuL1pvbmUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGluZVpvbmUgZXh0ZW5kcyBab25lIHtcclxuXHJcblx0Y29uc3RydWN0b3IoeDEsIHkxLCB4MiwgeTIsIGRpcmVjdGlvbikge1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHRpZiAoeDIgLSB4MSA+PSAwKSB7XHJcblx0XHRcdHRoaXMueDEgPSB4MTtcclxuXHRcdFx0dGhpcy55MSA9IHkxO1xyXG5cdFx0XHR0aGlzLngyID0geDI7XHJcblx0XHRcdHRoaXMueTIgPSB5MjtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMueDEgPSB4MjtcclxuXHRcdFx0dGhpcy55MSA9IHkyO1xyXG5cdFx0XHR0aGlzLngyID0geDE7XHJcblx0XHRcdHRoaXMueTIgPSB5MTtcclxuXHRcdH1cclxuXHRcdHRoaXMuZHggPSB0aGlzLngyIC0gdGhpcy54MTtcclxuXHRcdHRoaXMuZHkgPSB0aGlzLnkyIC0gdGhpcy55MTtcclxuXHRcdHRoaXMubWlueCA9IE1hdGgubWluKHRoaXMueDEsIHRoaXMueDIpO1xyXG5cdFx0dGhpcy5taW55ID0gTWF0aC5taW4odGhpcy55MSwgdGhpcy55Mik7XHJcblx0XHR0aGlzLm1heHggPSBNYXRoLm1heCh0aGlzLngxLCB0aGlzLngyKTtcclxuXHRcdHRoaXMubWF4eSA9IE1hdGgubWF4KHRoaXMueTEsIHRoaXMueTIpO1xyXG5cdFx0dGhpcy5kb3QgPSB0aGlzLngyICogdGhpcy55MSAtIHRoaXMueDEgKiB0aGlzLnkyO1xyXG5cdFx0dGhpcy54eHl5ID0gdGhpcy5keCAqIHRoaXMuZHggKyB0aGlzLmR5ICogdGhpcy5keTtcclxuXHRcdHRoaXMuZ3JhZGllbnQgPSB0aGlzLmdldEdyYWRpZW50KCk7XHJcblx0XHR0aGlzLmxlbmd0aCA9IHRoaXMuZ2V0TGVuZ3RoKCk7XHJcblx0XHR0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbiB8fCAnPic7XHJcblx0fVxyXG5cclxuXHRnZXRQb3NpdGlvbigpIHtcclxuXHRcdHRoaXMucmFuZG9tID0gTWF0aC5yYW5kb20oKTtcclxuXHRcdHRoaXMudmVjdG9yLnggPSB0aGlzLngxICsgdGhpcy5yYW5kb20gKiB0aGlzLmxlbmd0aCAqIE1hdGguY29zKHRoaXMuZ3JhZGllbnQpO1xyXG5cdFx0dGhpcy52ZWN0b3IueSA9IHRoaXMueTEgKyB0aGlzLnJhbmRvbSAqIHRoaXMubGVuZ3RoICogTWF0aC5zaW4odGhpcy5ncmFkaWVudCk7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMudmVjdG9yO1xyXG5cdH1cclxuXHJcblx0Y3Jvc3NpbmcocGFydGljbGUpIHtcclxuXHRcdHZhciBzZWxmID0gdGhpcztcclxuXHRcdGlmICh0aGlzLmNyb3NzVHlwZSA9PSBcImRlYWRcIikge1xyXG5cdFx0XHRpZiAodGhpcy5kaXJlY3Rpb24gPT0gXCI+XCIgfHwgdGhpcy5kaXJlY3Rpb24gPT0gXCJSXCIgfHwgdGhpcy5kaXJlY3Rpb24gPT0gXCJyaWdodFwiIHx8IHRoaXMuZGlyZWN0aW9uID09IFwiZG93blwiKSB7XHJcblx0XHRcdFx0dGhpcy5nZXRSYW5nZShwYXJ0aWNsZSwgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRpZiAoc2VsZi5nZXREaXJlY3Rpb24ocGFydGljbGUucC54LCBwYXJ0aWNsZS5wLnkpKVxyXG5cdFx0XHRcdFx0XHRwYXJ0aWNsZS5kZWFkID0gdHJ1ZTtcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMuZ2V0UmFuZ2UocGFydGljbGUsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0aWYgKCFzZWxmLmdldERpcmVjdGlvbihwYXJ0aWNsZS5wLngsIHBhcnRpY2xlLnAueSkpXHJcblx0XHRcdFx0XHRcdHBhcnRpY2xlLmRlYWQgPSB0cnVlO1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSBpZiAodGhpcy5jcm9zc1R5cGUgPT0gXCJib3VuZFwiKSB7XHJcblx0XHRcdHRoaXMuZ2V0UmFuZ2UocGFydGljbGUsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdGlmIChzZWxmLmdldERpc3RhbmNlKHBhcnRpY2xlLnAueCwgcGFydGljbGUucC55KSA8PSBwYXJ0aWNsZS5yYWRpdXMpIHtcclxuXHRcdFx0XHRcdGlmIChzZWxmLmR4ID09IDApIHtcclxuXHRcdFx0XHRcdFx0cGFydGljbGUudi54ICo9IC0xO1xyXG5cdFx0XHRcdFx0fSBlbHNlIGlmIChzZWxmLmR5ID09IDApIHtcclxuXHRcdFx0XHRcdFx0cGFydGljbGUudi55ICo9IC0xO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0c2VsZi5nZXRTeW1tZXRyaWMocGFydGljbGUudik7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH0gZWxzZSBpZiAodGhpcy5jcm9zc1R5cGUgPT0gXCJjcm9zc1wiKSB7XHJcblx0XHRcdGlmICh0aGlzLmFsZXJ0KSB7XHJcblx0XHRcdFx0YWxlcnQoJ1NvcnJ5IGxpbmVab25lIGRvZXMgbm90IHN1cHBvcnQgY3Jvc3MgbWV0aG9kJyk7XHJcblx0XHRcdFx0dGhpcy5hbGVydCA9IGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRnZXREaXJlY3Rpb24oeCwgeSkge1xyXG5cdFx0dmFyIEEgPSB0aGlzLmR5O1xyXG5cdFx0dmFyIEIgPSAtdGhpcy5keDtcclxuXHRcdHZhciBDID0gdGhpcy5kb3Q7XHJcblx0XHR2YXIgRCA9IEIgPT0gMCA/IDEgOiBCO1xyXG5cdFx0aWYgKChBICogeCArIEIgKiB5ICsgQykgKiBEID4gMClcclxuXHRcdFx0cmV0dXJuIHRydWVcclxuXHRcdGVsc2VcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHJcblx0Z2V0RGlzdGFuY2UoeCwgeSkge1xyXG5cdFx0dmFyIEEgPSB0aGlzLmR5O1xyXG5cdFx0dmFyIEIgPSAtdGhpcy5keDtcclxuXHRcdHZhciBDID0gdGhpcy5kb3Q7XHJcblx0XHR2YXIgRCA9IChBICogeCArIEIgKiB5ICsgQyk7XHJcblx0XHRyZXR1cm4gRCAvIE1hdGguc3FydCh0aGlzLnh4eXkpO1xyXG5cdH1cclxuXHJcblx0Z2V0U3ltbWV0cmljKHYpIHtcclxuXHRcdHZhciB0aGEyID0gdi5nZXRHcmFkaWVudCgpO1xyXG5cdFx0dmFyIHRoYTEgPSB0aGlzLmdldEdyYWRpZW50KCk7XHJcblx0XHR2YXIgdGhhID0gMiAqICh0aGExIC0gdGhhMik7XHJcblx0XHR2YXIgb2xkeCA9IHYueDtcclxuXHRcdHZhciBvbGR5ID0gdi55O1xyXG5cdFx0di54ID0gb2xkeCAqIE1hdGguY29zKHRoYSkgLSBvbGR5ICogTWF0aC5zaW4odGhhKTtcclxuXHRcdHYueSA9IG9sZHggKiBNYXRoLnNpbih0aGEpICsgb2xkeSAqIE1hdGguY29zKHRoYSk7XHJcblx0XHRyZXR1cm4gdjtcclxuXHR9XHJcblxyXG5cdGdldEdyYWRpZW50KCkge1xyXG5cdFx0cmV0dXJuIE1hdGguYXRhbjIodGhpcy5keSwgdGhpcy5keCk7XHJcblx0fVxyXG5cclxuXHRnZXRSYW5nZShwYXJ0aWNsZSwgZnVuKSB7XHJcblx0XHR2YXIgYW5nbGUgPSBNYXRoLmFicyh0aGlzLmdldEdyYWRpZW50KCkpO1xyXG5cdFx0aWYgKGFuZ2xlIDw9IE1hdGguUEkgLyA0KSB7XHJcblx0XHRcdGlmIChwYXJ0aWNsZS5wLnggPCB0aGlzLm1heHggJiYgcGFydGljbGUucC54ID4gdGhpcy5taW54KSB7XHJcblx0XHRcdFx0ZnVuKCk7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmIChwYXJ0aWNsZS5wLnkgPCB0aGlzLm1heHkgJiYgcGFydGljbGUucC55ID4gdGhpcy5taW55KSB7XHJcblx0XHRcdFx0ZnVuKCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGdldExlbmd0aCgpIHtcclxuXHRcdHJldHVybiBNYXRoLnNxcnQodGhpcy5keCAqIHRoaXMuZHggKyB0aGlzLmR5ICogdGhpcy5keSlcclxuXHR9XHJcblxyXG5cdGNyb3NzaW5nKHBhcnRpY2xlKSB7XHJcblx0XHR2YXIgc2VsZiA9IHRoaXM7XHJcblx0XHRpZiAodGhpcy5jcm9zc1R5cGUgPT0gXCJkZWFkXCIpIHtcclxuXHRcdFx0aWYgKHRoaXMuZGlyZWN0aW9uID09IFwiPlwiIHx8IHRoaXMuZGlyZWN0aW9uID09IFwiUlwiIHx8IHRoaXMuZGlyZWN0aW9uID09IFwicmlnaHRcIiB8fCB0aGlzLmRpcmVjdGlvbiA9PSBcImRvd25cIikge1xyXG5cdFx0XHRcdHRoaXMuZ2V0UmFuZ2UocGFydGljbGUsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0aWYgKHNlbGYuZ2V0RGlyZWN0aW9uKHBhcnRpY2xlLnAueCwgcGFydGljbGUucC55KSlcclxuXHRcdFx0XHRcdFx0cGFydGljbGUuZGVhZCA9IHRydWU7XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0aGlzLmdldFJhbmdlKHBhcnRpY2xlLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdGlmICghc2VsZi5nZXREaXJlY3Rpb24ocGFydGljbGUucC54LCBwYXJ0aWNsZS5wLnkpKVxyXG5cdFx0XHRcdFx0XHRwYXJ0aWNsZS5kZWFkID0gdHJ1ZTtcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2UgaWYgKHRoaXMuY3Jvc3NUeXBlID09IFwiYm91bmRcIikge1xyXG5cdFx0XHR0aGlzLmdldFJhbmdlKHBhcnRpY2xlLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRpZiAoc2VsZi5nZXREaXN0YW5jZShwYXJ0aWNsZS5wLngsIHBhcnRpY2xlLnAueSkgPD0gcGFydGljbGUucmFkaXVzKSB7XHJcblx0XHRcdFx0XHRpZiAoc2VsZi5keCA9PSAwKSB7XHJcblx0XHRcdFx0XHRcdHBhcnRpY2xlLnYueCAqPSAtMTtcclxuXHRcdFx0XHRcdH0gZWxzZSBpZiAoc2VsZi5keSA9PSAwKSB7XHJcblx0XHRcdFx0XHRcdHBhcnRpY2xlLnYueSAqPSAtMTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHNlbGYuZ2V0U3ltbWV0cmljKHBhcnRpY2xlLnYpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9IGVsc2UgaWYgKHRoaXMuY3Jvc3NUeXBlID09IFwiY3Jvc3NcIikge1xyXG5cdFx0XHRpZiAodGhpcy5hbGVydCkge1xyXG5cdFx0XHRcdGFsZXJ0KCdTb3JyeSBsaW5lWm9uZSBkb2VzIG5vdCBzdXBwb3J0IGNyb3NzIG1ldGhvZCcpO1xyXG5cdFx0XHRcdHRoaXMuYWxlcnQgPSBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy96b25lL0xpbmVab25lLmpzIiwiaW1wb3J0IFpvbmUgZnJvbSAnLi9ab25lJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvaW50Wm9uZSBleHRlbmRzIFpvbmUge1xyXG5cclxuXHRjb25zdHJ1Y3RvcihpbWFnZURhdGEsIHgsIHksIGQpIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHR0aGlzLnJlc2V0KGltYWdlRGF0YSwgeCwgeSwgZCk7XHJcblx0fVxyXG5cclxuXHRyZXNldChpbWFnZURhdGEsIHgsIHksIGQpIHtcclxuXHRcdHRoaXMuaW1hZ2VEYXRhID0gaW1hZ2VEYXRhO1xyXG5cdFx0dGhpcy54ID0geDtcclxuXHRcdHRoaXMueSA9IHk7XHJcblx0XHR0aGlzLmQgPSBkIHx8IDI7XHJcblx0XHR0aGlzLnZlY3RvcnMgPSBbXTtcclxuXHRcdHRoaXMuc2V0VmVjdG9ycygpO1xyXG5cdH1cclxuXHJcblx0c2V0VmVjdG9ycygpIHtcclxuXHRcdHZhciBpLCBqO1xyXG5cdFx0dmFyIGxlbmd0aDEgPSB0aGlzLmltYWdlRGF0YS53aWR0aDtcclxuXHRcdHZhciBsZW5ndGgyID0gdGhpcy5pbWFnZURhdGEuaGVpZ2h0O1xyXG5cdFx0Zm9yICggaSA9IDA7IGkgPCBsZW5ndGgxOyBpICs9IHRoaXMuZCkge1xyXG5cdFx0XHRmb3IgKCBqID0gMDsgaiA8IGxlbmd0aDI7IGogKz0gdGhpcy5kKSB7XHJcblx0XHRcdFx0dmFyIGluZGV4ID0gKChqID4+IDApICogbGVuZ3RoMSArIChpID4+IDApKSAqIDQ7XHJcblx0XHRcdFx0aWYgKHRoaXMuaW1hZ2VEYXRhLmRhdGFbaW5kZXggKyAzXSA+IDApIHtcclxuXHRcdFx0XHRcdHRoaXMudmVjdG9ycy5wdXNoKHtcclxuXHRcdFx0XHRcdFx0eCA6IGkgKyB0aGlzLngsXHJcblx0XHRcdFx0XHRcdHkgOiBqICsgdGhpcy55XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiB0aGlzLnZlY3RvcjtcclxuXHR9XHJcblxyXG5cdGdldEJvdW5kKHgsIHkpIHtcclxuXHRcdHZhciBpbmRleCA9ICgoeSA+PiAwKSAqIHRoaXMuaW1hZ2VEYXRhLndpZHRoICsgKHggPj4gMCkpICogNDtcclxuXHRcdGlmICh0aGlzLmltYWdlRGF0YS5kYXRhW2luZGV4ICsgM10gPiAwKVxyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdGVsc2VcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHJcblx0Z2V0UG9zaXRpb24oKSB7XHJcblx0XHRyZXR1cm4gdGhpcy52ZWN0b3IuY29weSh0aGlzLnZlY3RvcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy52ZWN0b3JzLmxlbmd0aCldKTtcclxuXHR9XHJcblxyXG5cdGdldENvbG9yKHgsIHkpIHtcclxuXHRcdHggLT0gdGhpcy54O1xyXG5cdFx0eSAtPSB0aGlzLnk7XHJcblx0XHR2YXIgaSA9ICgoeSA+PiAwKSAqIHRoaXMuaW1hZ2VEYXRhLndpZHRoICsgKHggPj4gMCkpICogNDtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHIgOiB0aGlzLmltYWdlRGF0YS5kYXRhW2ldLFxyXG5cdFx0XHRnIDogdGhpcy5pbWFnZURhdGEuZGF0YVtpICsgMV0sXHJcblx0XHRcdGIgOiB0aGlzLmltYWdlRGF0YS5kYXRhW2kgKyAyXSxcclxuXHRcdFx0YSA6IHRoaXMuaW1hZ2VEYXRhLmRhdGFbaSArIDNdXHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0Y3Jvc3NpbmcocGFydGljbGUpIHtcclxuXHRcdGlmICh0aGlzLmNyb3NzVHlwZSA9PSBcImRlYWRcIikge1xyXG5cdFx0XHRpZiAodGhpcy5nZXRCb3VuZChwYXJ0aWNsZS5wLnggLSB0aGlzLngsIHBhcnRpY2xlLnAueSAtIHRoaXMueSkpXHJcblx0XHRcdFx0cGFydGljbGUuZGVhZCA9IHRydWU7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRwYXJ0aWNsZS5kZWFkID0gZmFsc2U7XHJcblx0XHR9IGVsc2UgaWYgKHRoaXMuY3Jvc3NUeXBlID09IFwiYm91bmRcIikge1xyXG5cdFx0XHRpZiAoIXRoaXMuZ2V0Qm91bmQocGFydGljbGUucC54IC0gdGhpcy54LCBwYXJ0aWNsZS5wLnkgLSB0aGlzLnkpKVxyXG5cdFx0XHRcdHBhcnRpY2xlLnYubmVnYXRlKCk7XHJcblx0XHR9XHJcblx0fVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3pvbmUvSW1hZ2Vab25lLmpzIiwiaW1wb3J0IFpvbmUgZnJvbSAnLi9ab25lJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvaW50Wm9uZSBleHRlbmRzIFpvbmUge1xyXG5cclxuXHRjb25zdHJ1Y3Rvcih4LCB5LCByYWRpdXMpIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHR0aGlzLnggPSB4O1xyXG5cdFx0dGhpcy55ID0geTtcclxuXHRcdHRoaXMucmFkaXVzID0gcmFkaXVzO1xyXG5cdFx0dGhpcy5hbmdsZSA9IDA7XHJcblx0XHR0aGlzLmNlbnRlciA9IHtcclxuXHRcdFx0eCA6IHRoaXMueCxcclxuXHRcdFx0eSA6IHRoaXMueVxyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdGdldFBvc2l0aW9uKCkge1xyXG5cdFx0dGhpcy5yYW5kb20gPSBNYXRoLnJhbmRvbSgpO1xyXG5cdFx0dGhpcy5hbmdsZSA9IE1hdGguUEkgKiAyICogTWF0aC5yYW5kb20oKTtcclxuXHRcdHRoaXMudmVjdG9yLnggPSB0aGlzLnggKyB0aGlzLnJhbmRvbSAqIHRoaXMucmFkaXVzICogTWF0aC5jb3ModGhpcy5hbmdsZSk7XHJcblx0XHR0aGlzLnZlY3Rvci55ID0gdGhpcy55ICsgdGhpcy5yYW5kb20gKiB0aGlzLnJhZGl1cyAqIE1hdGguc2luKHRoaXMuYW5nbGUpO1xyXG5cdFx0cmV0dXJuIHRoaXMudmVjdG9yO1xyXG5cdH1cclxuXHJcblx0c2V0Q2VudGVyKHgsIHkpIHtcclxuXHRcdHRoaXMuY2VudGVyLnggPSB4O1xyXG5cdFx0dGhpcy5jZW50ZXIueSA9IHk7XHJcblx0fVxyXG5cclxuXHRjcm9zc2luZyhwYXJ0aWNsZSkge1xyXG5cdFx0dmFyIGQgPSBwYXJ0aWNsZS5wLmRpc3RhbmNlVG8odGhpcy5jZW50ZXIpO1xyXG5cdFx0aWYgKHRoaXMuY3Jvc3NUeXBlID09IFwiZGVhZFwiKSB7XHJcblx0XHRcdGlmIChkIC0gcGFydGljbGUucmFkaXVzID4gdGhpcy5yYWRpdXMpXHJcblx0XHRcdFx0cGFydGljbGUuZGVhZCA9IHRydWU7XHJcblx0XHR9IGVsc2UgaWYgKHRoaXMuY3Jvc3NUeXBlID09IFwiYm91bmRcIikge1xyXG5cdFx0XHRpZiAoZCArIHBhcnRpY2xlLnJhZGl1cyA+PSB0aGlzLnJhZGl1cylcclxuXHRcdFx0XHR0aGlzLmdldFN5bW1ldHJpYyhwYXJ0aWNsZSk7XHJcblx0XHR9IGVsc2UgaWYgKHRoaXMuY3Jvc3NUeXBlID09IFwiY3Jvc3NcIikge1xyXG5cdFx0XHRpZiAodGhpcy5hbGVydCkge1xyXG5cdFx0XHRcdGFsZXJ0KCdTb3JyeSBDaXJjbGVab25lIGRvZXMgbm90IHN1cHBvcnQgY3Jvc3MgbWV0aG9kJyk7XHJcblx0XHRcdFx0dGhpcy5hbGVydCA9IGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRnZXRTeW1tZXRyaWMocGFydGljbGUpIHtcclxuXHRcdHZhciB0aGEyID0gcGFydGljbGUudi5nZXRHcmFkaWVudCgpO1xyXG5cdFx0dmFyIHRoYTEgPSB0aGlzLmdldEdyYWRpZW50KHBhcnRpY2xlKTtcclxuXHRcdHZhciB0aGEgPSAyICogKHRoYTEgLSB0aGEyKTtcclxuXHRcdHZhciBvbGR4ID0gcGFydGljbGUudi54O1xyXG5cdFx0dmFyIG9sZHkgPSBwYXJ0aWNsZS52Lnk7XHJcblx0XHRwYXJ0aWNsZS52LnggPSBvbGR4ICogTWF0aC5jb3ModGhhKSAtIG9sZHkgKiBNYXRoLnNpbih0aGEpO1xyXG5cdFx0cGFydGljbGUudi55ID0gb2xkeCAqIE1hdGguc2luKHRoYSkgKyBvbGR5ICogTWF0aC5jb3ModGhhKTtcclxuXHR9XHJcblxyXG5cdGdldEdyYWRpZW50KHBhcnRpY2xlKSB7XHJcblx0XHRyZXR1cm4gLU1hdGguUEkgLyAyICsgTWF0aC5hdGFuMihwYXJ0aWNsZS5wLnkgLSB0aGlzLmNlbnRlci55LCBwYXJ0aWNsZS5wLnggLSB0aGlzLmNlbnRlci54KTtcclxuXHR9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvem9uZS9DaXJjbGVab25lLmpzIiwiaW1wb3J0IEJlaGF2aW91ciBmcm9tICcuL0JlaGF2aW91cic7XHJcbmltcG9ydCBVdGlsIGZyb20gJy4uL2NvcmUvVXRpbCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBbHBoYSBleHRlbmRzIEJlaGF2aW91ciB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKGEsIGIsIGxpZmUsIGVhc2luZykge1xyXG5cdFx0c3VwZXIobGlmZSwgZWFzaW5nKTtcclxuXHJcblx0XHR0aGlzLnJlc2V0KGEsIGIsIHRoaXMubGlmZSk7XHJcblx0XHR0aGlzLm5hbWUgPSBcIkFscGhhXCI7XHJcblxyXG5cdFx0dGhpcy5hcHBseUJlaGF2aW91ciA9IHRoaXMuYXBwbHlCZWhhdmlvdXJcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlc2V0IHRoaXMgYmVoYXZpb3VyJ3MgcGFyYW1ldGVyc1xyXG5cdCAqXHJcblx0ICogQG1ldGhvZCByZXNldFxyXG5cdCAqIEBtZW1iZXJvZiBRdWFyayNRdWFyay5BbHBoYVxyXG5cdCAqIEBpbnN0YW5jZVxyXG5cdCAqXHJcblx0ICogQHRvZG8gYWRkIGRlc2NyaXB0aW9uIGZvciAnYScgYW5kICdiJ1xyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtOdW1iZXJ9IGFcclxuXHQgKiBAcGFyYW0ge1N0cmluZ30gYlxyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbbGlmZT1JbmZpbml0eV0gXHRcdFx0XHR0aGlzIGJlaGF2aW91cidzIGxpZmVcclxuXHQgKiBAcGFyYW0ge1N0cmluZ30gW2Vhc2luZz1RdWFyay5lYXNlTGluZWFyXSBcdHRoaXMgYmVoYXZpb3VyJ3MgZWFzaW5nXHJcblx0ICovXHJcblx0cmVzZXQoYSwgYiwgbGlmZSwgZWFzaW5nKSB7XHJcblx0XHRpZiAoYiA9PSBudWxsIHx8IGIgPT0gdW5kZWZpbmVkKXtcclxuXHRcdFx0dGhpcy5zYW1lID0gdHJ1ZTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuc2FtZSA9IGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5hID0gVXRpbC5zZXRTcGFuVmFsdWUoYSB8fCAxKTtcclxuXHRcdHRoaXMuYiA9IFV0aWwuc2V0U3BhblZhbHVlKGIpO1xyXG5cdFx0aWYgKGxpZmUpe1xyXG5cdFx0XHRzdXBlci5yZXNldChsaWZlLCBlYXNpbmcpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogU2V0cyB0aGUgbmV3IGFscGhhIHZhbHVlIG9mIHRoZSBwYXJ0aWNsZVxyXG5cdCAqXHJcblx0ICogQG1ldGhvZCBpbml0aWFsaXplXHJcblx0ICogQG1lbWJlcm9mIFF1YXJrI1F1YXJrLkFscGhhXHJcblx0ICogQGluc3RhbmNlXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge1F1YXJrLlBhcnRpY2xlfSBwYXJ0aWNsZSBBIHNpbmdsZSBRdWFyayBnZW5lcmF0ZWQgcGFydGljbGVcclxuXHQgKi9cclxuXHRpbml0aWFsaXplKHBhcnRpY2xlKSB7XHJcblx0XHRwYXJ0aWNsZS50cmFuc2Zvcm0uYWxwaGFBID0gdGhpcy5hLmdldFZhbHVlKCk7XHJcblx0XHRpZiAodGhpcy5zYW1lKXtcclxuXHRcdFx0cGFydGljbGUudHJhbnNmb3JtLmFscGhhQiA9IHBhcnRpY2xlLnRyYW5zZm9ybS5hbHBoYUE7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRwYXJ0aWNsZS50cmFuc2Zvcm0uYWxwaGFCID0gdGhpcy5iLmdldFZhbHVlKCk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogQG1ldGhvZCBhcHBseUJlaGF2aW91clxyXG5cdCAqIEBtZW1iZXJvZiBRdWFyayNRdWFyay5BbHBoYVxyXG5cdCAqIEBpbnN0YW5jZVxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtRdWFyay5QYXJ0aWNsZX0gcGFydGljbGVcclxuXHQgKiBAcGFyYW0ge051bWJlcn0gXHRcdFx0dGltZSB0aGUgaW50ZWdyYXRlIHRpbWUgMS9tc1xyXG5cdCAqIEBwYXJhbSB7SW50fSBcdFx0XHRpbmRleCB0aGUgcGFydGljbGUgaW5kZXhcclxuIFx0ICovXHJcblx0YXBwbHlCZWhhdmlvdXIocGFydGljbGUsIHRpbWUsIGluZGV4KSB7XHJcblx0XHRzdXBlci5hcHBseUJlaGF2aW91cihwYXJ0aWNsZSwgdGltZSwgaW5kZXgpO1xyXG5cdFx0cGFydGljbGUuYWxwaGEgPSBwYXJ0aWNsZS50cmFuc2Zvcm0uYWxwaGFCICsgKHBhcnRpY2xlLnRyYW5zZm9ybS5hbHBoYUEgLSBwYXJ0aWNsZS50cmFuc2Zvcm0uYWxwaGFCKSAqIHRoaXMuZW5lcmd5O1xyXG5cdFx0aWYgKHBhcnRpY2xlLmFscGhhIDwgMC4wMDEpXHJcblx0XHRcdHBhcnRpY2xlLmFscGhhID0gMDtcclxuXHR9O1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9iZWhhdmlvdXIvQWxwaGEuanMiLCJpbXBvcnQgVXRpbCBmcm9tICcuLi9jb3JlL1V0aWwnO1xyXG5pbXBvcnQgeyBNRUFTVVJFIH0gZnJvbSAnLi4vZW1pdHRlci9jb25zdCc7XHJcbmltcG9ydCBnZXRFYXNpbmdCeU5hbWUgZnJvbSAnLi4vbWF0aC9lYXNlJztcclxuXHJcblxyXG5jb25zdCBCRUhBVklPVVJfSURfQkFTRSA9IDB4RkZGRkY7XHJcbmxldCB1aWQgPSAwO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmVoYXZpb3VyIHtcclxuXHJcblx0Y29uc3RydWN0b3IobGlmZSwgZWFzaW5nID0gJ2Vhc2VMaW5lYXInKSB7XHJcblx0XHR0aGlzLmlkID0gQkVIQVZJT1VSX0lEX0JBU0UgKyB1aWQrKztcclxuXHRcdHRoaXMubGlmZSA9IGxpZmUgfHwgSW5maW5pdHk7XHJcblx0XHR0aGlzLmVhc2luZyA9IGdldEVhc2luZ0J5TmFtZShlYXNpbmcpO1xyXG5cdFx0dGhpcy5hZ2UgPSAwO1xyXG5cdFx0dGhpcy5lbmVyZ3kgPSAxO1xyXG5cdFx0dGhpcy5kZWFkID0gZmFsc2U7XHJcblx0XHR0aGlzLnBhcmVudHMgPSBbXTtcclxuXHRcdHRoaXMubmFtZSA9ICdCZWhhdmlvdXInO1xyXG5cdFx0dGhpcy5hcHBseUJlaGF2aW91ciA9IHRoaXMuYXBwbHlCZWhhdmlvdXJcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlc2V0IHRoaXMgYmVoYXZpb3VyJ3MgcGFyYW1ldGVyc1xyXG5cdCAqXHJcblx0ICogQG1ldGhvZCByZXNldFxyXG5cdCAqIEBtZW1iZXJvZiBQcm90b24uQmVoYXZpb3VyXHJcblx0ICogQGluc3RhbmNlXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge051bWJlcn0gW2xpZmU9SW5maW5pdHldIFx0XHR0aGlzIGJlaGF2aW91cidzIGxpZmVcclxuXHQgKiBAcGFyYW0ge1N0cmluZ30gW2Vhc2luZz1lYXNlTGluZWFyXSBcdHRoaXMgYmVoYXZpb3VyJ3MgZWFzaW5nXHJcblx0ICovXHJcblx0cmVzZXQobGlmZSwgZWFzaW5nKSB7XHJcblx0XHR0aGlzLmxpZmUgPSBsaWZlIHx8IEluZmluaXR5O1xyXG5cdFx0dGhpcy5lYXNpbmcgPSBlYXNpbmcgfHwgZ2V0RWFzaW5nQnlOYW1lKCdlYXNlTGluZWFyJyk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBOb3JtYWxpemUgYSBmb3JjZSBieSAxOjEwMDtcclxuXHQgKlxyXG5cdCAqIEBtZXRob2Qgbm9ybWFsaXplRm9yY2VcclxuXHQgKiBAbWVtYmVyb2YgUHJvdG9uLkJlaGF2aW91clxyXG5cdCAqIEBpbnN0YW5jZVxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtQcm90b24uVmVjdG9yMkR9IGZvcmNlIFxyXG5cdCAqL1xyXG5cdG5vcm1hbGl6ZUZvcmNlKGZvcmNlKSB7XHJcblx0XHRyZXR1cm4gZm9yY2UubXVsdGlwbHlTY2FsYXIoTUVBU1VSRSk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBOb3JtYWxpemUgYSB2YWx1ZSBieSAxOjEwMDtcclxuXHQgKlxyXG5cdCAqIEBtZXRob2Qgbm9ybWFsaXplVmFsdWVcclxuXHQgKiBAbWVtYmVyb2YgUHJvdG9uLkJlaGF2aW91clxyXG5cdCAqIEBpbnN0YW5jZVxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlXHJcblx0ICovXHJcblx0bm9ybWFsaXplVmFsdWUodmFsdWUpIHtcclxuXHRcdHJldHVybiB2YWx1ZSAqIE1FQVNVUkU7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBJbml0aWFsaXplIHRoZSBiZWhhdmlvdXIncyBwYXJhbWV0ZXJzIGZvciBhbGwgcGFydGljbGVzXHJcblx0ICpcclxuXHQgKiBAbWV0aG9kIGluaXRpYWxpemVcclxuXHQgKiBAbWVtYmVyb2YgUHJvdG9uLkJlaGF2aW91clxyXG5cdCAqIEBpbnN0YW5jZVxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtQcm90b24uUGFydGljbGV9IHBhcnRpY2xlXHJcblx0ICovXHJcblx0aW5pdGlhbGl6ZShwYXJ0aWNsZSkge1xyXG5cdH1cclxuXHRcclxuXHQvKipcclxuXHQgKiBBcHBseSB0aGlzIGJlaGF2aW91ciBmb3IgYWxsIHBhcnRpY2xlcyBldmVyeSB0aW1lXHJcblx0ICpcclxuXHQgKiBAbWV0aG9kIGFwcGx5QmVoYXZpb3VyXHJcblx0ICogQG1lbWJlcm9mIFByb3Rvbi5CZWhhdmlvdXJcclxuXHQgKiBAaW5zdGFuY2VcclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7UHJvdG9uLlBhcnRpY2xlfSBwYXJ0aWNsZVxyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBcdFx0XHR0aW1lIHRoZSBpbnRlZ3JhdGUgdGltZSAxL21zXHJcblx0ICogQHBhcmFtIHtJbnR9IFx0XHRcdGluZGV4IHRoZSBwYXJ0aWNsZSBpbmRleFxyXG5cdCAqL1xyXG5cdGFwcGx5QmVoYXZpb3VyKHBhcnRpY2xlLCB0aW1lLCBpbmRleCkge1xyXG5cdFx0dGhpcy5hZ2UgKz0gdGltZTtcclxuXHRcdGlmICh0aGlzLmFnZSA+PSB0aGlzLmxpZmUgfHwgdGhpcy5kZWFkKSB7XHJcblx0XHRcdHRoaXMuZW5lcmd5ID0gMDtcclxuXHRcdFx0dGhpcy5kZWFkID0gdHJ1ZTtcclxuXHRcdFx0dGhpcy5kZXN0cm95KCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR2YXIgc2NhbGUgPSB0aGlzLmVhc2luZyhwYXJ0aWNsZS5hZ2UgLyBwYXJ0aWNsZS5saWZlKTtcclxuXHRcdFx0dGhpcy5lbmVyZ3kgPSBNYXRoLm1heCgxIC0gc2NhbGUsIDApO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRcclxuXHQvKipcclxuXHQgKiBEZXN0b3J5IHRoaXMgYmVoYXZpb3VyXHJcblx0ICpcclxuXHQgKiBAbWV0aG9kIGRlc3Ryb3lcclxuXHQgKiBAbWVtYmVyb2YgUHJvdG9uLkJlaGF2aW91clxyXG5cdCAqIEBpbnN0YW5jZVxyXG5cdCAqL1xyXG5cdGRlc3Ryb3koKSB7XHJcblx0XHR2YXIgaW5kZXg7XHJcblx0XHR2YXIgbGVuZ3RoID0gdGhpcy5wYXJlbnRzLmxlbmd0aCwgaTtcclxuXHRcdGZvciAoIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dGhpcy5wYXJlbnRzW2ldLnJlbW92ZUJlaGF2aW91cih0aGlzKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLnBhcmVudHMgPSBbXTtcclxuXHR9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYmVoYXZpb3VyL0JlaGF2aW91ci5qcyIsImNvbnN0IGVhc2luZyA9IHtcclxuXHRlYXNlTGluZWFyIDogZnVuY3Rpb24odmFsdWUpIHtcclxuXHRcdHJldHVybiB2YWx1ZTtcclxuXHR9LFxyXG5cclxuXHRlYXNlSW5RdWFkIDogZnVuY3Rpb24odmFsdWUpIHtcclxuXHRcdHJldHVybiBNYXRoLnBvdyh2YWx1ZSwgMik7XHJcblx0fSxcclxuXHJcblx0ZWFzZU91dFF1YWQgOiBmdW5jdGlvbih2YWx1ZSkge1xyXG5cdFx0cmV0dXJuIC0oTWF0aC5wb3coKHZhbHVlIC0gMSksIDIpIC0gMSk7XHJcblx0fSxcclxuXHJcblx0ZWFzZUluT3V0UXVhZCA6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcblx0XHRpZiAoKHZhbHVlIC89IDAuNSkgPCAxKVxyXG5cdFx0XHRyZXR1cm4gMC41ICogTWF0aC5wb3codmFsdWUsIDIpO1xyXG5cdFx0cmV0dXJuIC0wLjUgKiAoKHZhbHVlIC09IDIpICogdmFsdWUgLSAyKTtcclxuXHR9LFxyXG5cclxuXHRlYXNlSW5DdWJpYyA6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcblx0XHRyZXR1cm4gTWF0aC5wb3codmFsdWUsIDMpO1xyXG5cdH0sXHJcblxyXG5cdGVhc2VPdXRDdWJpYyA6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcblx0XHRyZXR1cm4gKE1hdGgucG93KCh2YWx1ZSAtIDEpLCAzKSArIDEpO1xyXG5cdH0sXHJcblxyXG5cdGVhc2VJbk91dEN1YmljIDogZnVuY3Rpb24odmFsdWUpIHtcclxuXHRcdGlmICgodmFsdWUgLz0gMC41KSA8IDEpXHJcblx0XHRcdHJldHVybiAwLjUgKiBNYXRoLnBvdyh2YWx1ZSwgMyk7XHJcblx0XHRyZXR1cm4gMC41ICogKE1hdGgucG93KCh2YWx1ZSAtIDIpLCAzKSArIDIpO1xyXG5cdH0sXHJcblxyXG5cdGVhc2VJblF1YXJ0IDogZnVuY3Rpb24odmFsdWUpIHtcclxuXHRcdHJldHVybiBNYXRoLnBvdyh2YWx1ZSwgNCk7XHJcblx0fSxcclxuXHJcblx0ZWFzZU91dFF1YXJ0IDogZnVuY3Rpb24odmFsdWUpIHtcclxuXHRcdHJldHVybiAtKE1hdGgucG93KCh2YWx1ZSAtIDEpLCA0KSAtIDEpO1xyXG5cdH0sXHJcblxyXG5cdGVhc2VJbk91dFF1YXJ0IDogZnVuY3Rpb24odmFsdWUpIHtcclxuXHRcdGlmICgodmFsdWUgLz0gMC41KSA8IDEpXHJcblx0XHRcdHJldHVybiAwLjUgKiBNYXRoLnBvdyh2YWx1ZSwgNCk7XHJcblx0XHRyZXR1cm4gLTAuNSAqICgodmFsdWUgLT0gMikgKiBNYXRoLnBvdyh2YWx1ZSwgMykgLSAyKTtcclxuXHR9LFxyXG5cclxuXHRlYXNlSW5TaW5lIDogZnVuY3Rpb24odmFsdWUpIHtcclxuXHRcdHJldHVybiAtTWF0aC5jb3ModmFsdWUgKiAoTWF0aC5QSSAvIDIpKSArIDE7XHJcblx0fSxcclxuXHJcblx0ZWFzZU91dFNpbmUgOiBmdW5jdGlvbih2YWx1ZSkge1xyXG5cdFx0cmV0dXJuIE1hdGguc2luKHZhbHVlICogKE1hdGguUEkgLyAyKSk7XHJcblx0fSxcclxuXHJcblx0ZWFzZUluT3V0U2luZSA6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcblx0XHRyZXR1cm4gKC0wLjUgKiAoTWF0aC5jb3MoTWF0aC5QSSAqIHZhbHVlKSAtIDEpKTtcclxuXHR9LFxyXG5cclxuXHRlYXNlSW5FeHBvIDogZnVuY3Rpb24odmFsdWUpIHtcclxuXHRcdHJldHVybiAodmFsdWUgPT09IDApID8gMCA6IE1hdGgucG93KDIsIDEwICogKHZhbHVlIC0gMSkpO1xyXG5cdH0sXHJcblxyXG5cdGVhc2VPdXRFeHBvIDogZnVuY3Rpb24odmFsdWUpIHtcclxuXHRcdHJldHVybiAodmFsdWUgPT09IDEpID8gMSA6IC1NYXRoLnBvdygyLCAtMTAgKiB2YWx1ZSkgKyAxO1xyXG5cdH0sXHJcblxyXG5cdGVhc2VJbk91dEV4cG8gOiBmdW5jdGlvbih2YWx1ZSkge1xyXG5cdFx0aWYgKHZhbHVlID09PSAwKVxyXG5cdFx0XHRyZXR1cm4gMDtcclxuXHRcdGlmICh2YWx1ZSA9PT0gMSlcclxuXHRcdFx0cmV0dXJuIDE7XHJcblx0XHRpZiAoKHZhbHVlIC89IDAuNSkgPCAxKVxyXG5cdFx0XHRyZXR1cm4gMC41ICogTWF0aC5wb3coMiwgMTAgKiAodmFsdWUgLSAxKSk7XHJcblx0XHRyZXR1cm4gMC41ICogKC1NYXRoLnBvdygyLCAtMTAgKiAtLXZhbHVlKSArIDIpO1xyXG5cdH0sXHJcblxyXG5cdGVhc2VJbkNpcmMgOiBmdW5jdGlvbih2YWx1ZSkge1xyXG5cdFx0cmV0dXJuIC0oTWF0aC5zcXJ0KDEgLSAodmFsdWUgKiB2YWx1ZSkpIC0gMSk7XHJcblx0fSxcclxuXHJcblx0ZWFzZU91dENpcmMgOiBmdW5jdGlvbih2YWx1ZSkge1xyXG5cdFx0cmV0dXJuIE1hdGguc3FydCgxIC0gTWF0aC5wb3coKHZhbHVlIC0gMSksIDIpKTtcclxuXHR9LFxyXG5cclxuXHRlYXNlSW5PdXRDaXJjIDogZnVuY3Rpb24odmFsdWUpIHtcclxuXHRcdGlmICgodmFsdWUgLz0gMC41KSA8IDEpXHJcblx0XHRcdHJldHVybiAtMC41ICogKE1hdGguc3FydCgxIC0gdmFsdWUgKiB2YWx1ZSkgLSAxKTtcclxuXHRcdHJldHVybiAwLjUgKiAoTWF0aC5zcXJ0KDEgLSAodmFsdWUgLT0gMikgKiB2YWx1ZSkgKyAxKTtcclxuXHR9LFxyXG5cdFxyXG5cdGVhc2VJbkJhY2sgOiBmdW5jdGlvbih2YWx1ZSkge1xyXG5cdFx0dmFyIHMgPSAxLjcwMTU4O1xyXG5cdFx0cmV0dXJuICh2YWx1ZSkgKiB2YWx1ZSAqICgocyArIDEpICogdmFsdWUgLSBzKTtcclxuXHR9LFxyXG5cclxuXHRlYXNlT3V0QmFjayA6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcblx0XHR2YXIgcyA9IDEuNzAxNTg7XHJcblx0XHRyZXR1cm4gKCB2YWx1ZSA9IHZhbHVlIC0gMSkgKiB2YWx1ZSAqICgocyArIDEpICogdmFsdWUgKyBzKSArIDE7XHJcblx0fSxcclxuXHJcblx0ZWFzZUluT3V0QmFjayA6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcblx0XHR2YXIgcyA9IDEuNzAxNTg7XHJcblx0XHRpZiAoKHZhbHVlIC89IDAuNSkgPCAxKVxyXG5cdFx0XHRyZXR1cm4gMC41ICogKHZhbHVlICogdmFsdWUgKiAoKChzICo9ICgxLjUyNSkpICsgMSkgKiB2YWx1ZSAtIHMpKTtcclxuXHRcdHJldHVybiAwLjUgKiAoKHZhbHVlIC09IDIpICogdmFsdWUgKiAoKChzICo9ICgxLjUyNSkpICsgMSkgKiB2YWx1ZSArIHMpICsgMik7XHJcblx0fSxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0RWFzaW5nQnlOYW1lKG5hbWUpIHtcclxuXHRyZXR1cm4gZWFzaW5nW25hbWVdXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21hdGgvZWFzZS5qcyIsImltcG9ydCBCZWhhdmlvdXIgZnJvbSAnLi9CZWhhdmlvdXInO1xyXG5pbXBvcnQgVmVjdG9yMkQgZnJvbSAnLi4vbWF0aC9WZWN0b3IyRCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdHRyYWN0aW9uIGV4dGVuZHMgQmVoYXZpb3VyIHtcclxuXHJcblx0Y29uc3RydWN0b3IodGFyZ2V0UG9zaXRpb24sIGZvcmNlLCByYWRpdXMsIGxpZmUsIGVhc2luZykge1xyXG5cdFx0c3VwZXIobGlmZSwgZWFzaW5nKTtcclxuXHJcblx0XHR0aGlzLnRhcmdldFBvc2l0aW9uID0gdGFyZ2V0UG9zaXRpb24gfHwgbmV3IFZlY3RvcjJEO1xyXG5cdFx0dGhpcy5yYWRpdXMgPSByYWRpdXMgfHwgMTAwMDtcclxuXHRcdHRoaXMuZm9yY2UgPSB0aGlzLm5vcm1hbGl6ZVZhbHVlKGZvcmNlKSB8fCAxMDA7XHJcblx0XHR0aGlzLnJhZGl1c1NxID0gdGhpcy5yYWRpdXMgKiB0aGlzLnJhZGl1c1xyXG5cdFx0dGhpcy5hdHRyYWN0aW9uRm9yY2UgPSBuZXcgVmVjdG9yMkQoKTtcclxuXHRcdHRoaXMubGVuZ3RoU3EgPSAwO1xyXG5cdFx0dGhpcy5uYW1lID0gXCJBdHRyYWN0aW9uXCI7XHJcblx0XHRcclxuXHRcdHRoaXMuYXBwbHlCZWhhdmlvdXIgPSB0aGlzLmFwcGx5QmVoYXZpb3VyXHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZXNldCB0aGlzIGJlaGF2aW91cidzIHBhcmFtZXRlcnNcclxuXHQgKlxyXG5cdCAqIEBtZXRob2QgcmVzZXRcclxuXHQgKiBAbWVtYmVyb2YgUHJvdG9uI1Byb3Rvbi5BdHRyYWN0aW9uXHJcblx0ICogQGluc3RhbmNlXHJcblx0ICpcclxuXHQgKiBAdG9kbyBhZGQgZGVzY3JpcHRpb24gZm9yICdmb3JjZScgYW5kICdyYWRpdXMnXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge1Byb3Rvbi5WZWN0b3IyRH0gdGFyZ2V0UG9zaXRpb24gdGhlIGF0dHJhY3Rpb24gcG9pbnQgY29vcmRpbmF0ZXNcclxuXHQgKiBAcGFyYW0ge051bWJlcn0gW2ZvcmNlPTEwMF1cclxuXHQgKiBAcGFyYW0ge051bWJlcn0gW3JhZGl1cz0xMDAwXVxyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbbGlmZT1JbmZpbml0eV0gXHRcdFx0XHR0aGlzIGJlaGF2aW91cidzIGxpZmVcclxuXHQgKiBAcGFyYW0ge1N0cmluZ30gW2Vhc2luZz1Qcm90b24uZWFzZUxpbmVhcl0gXHR0aGlzIGJlaGF2aW91cidzIGVhc2luZ1xyXG5cdCAqL1xyXG5cdHJlc2V0KHRhcmdldFBvc2l0aW9uLCBmb3JjZSwgcmFkaXVzLCBsaWZlLCBlYXNpbmcpIHtcclxuXHRcdHRoaXMudGFyZ2V0UG9zaXRpb24gPSB0YXJnZXRQb3NpdGlvbiB8fCBuZXcgUHJvdG9uLlZlY3RvcjJEO1xyXG5cdFx0dGhpcy5yYWRpdXMgPSByYWRpdXMgfHwgMTAwMDtcclxuXHRcdHRoaXMuZm9yY2UgPSB0aGlzLm5vcm1hbGl6ZVZhbHVlKGZvcmNlKSB8fCAxMDA7XHJcblx0XHR0aGlzLnJhZGl1c1NxID0gdGhpcy5yYWRpdXMgKiB0aGlzLnJhZGl1c1xyXG5cdFx0dGhpcy5hdHRyYWN0aW9uRm9yY2UgPSBuZXcgVmVjdG9yMkQoKTtcclxuXHRcdHRoaXMubGVuZ3RoU3EgPSAwO1xyXG5cdFx0aWYgKGxpZmUpe1xyXG5cdFx0XHRzdXBlci5yZXNldChsaWZlLCBlYXNpbmcpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQXBwbHkgdGhpcyBiZWhhdmlvdXIgZm9yIGFsbCBwYXJ0aWNsZXMgZXZlcnkgdGltZVxyXG5cdCAqXHJcblx0ICogQG1lbWJlcm9mIFByb3RvbiNQcm90b24uQXR0cmFjdGlvblxyXG5cdCAqIEBtZXRob2QgYXBwbHlCZWhhdmlvdXJcclxuXHQgKiBAaW5zdGFuY2VcclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7UHJvdG9uLlBhcnRpY2xlfSBwYXJ0aWNsZVxyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBcdFx0XHR0aW1lIHRoZSBpbnRlZ3JhdGUgdGltZSAxL21zXHJcblx0ICogQHBhcmFtIHtJbnR9IFx0XHRcdGluZGV4IHRoZSBwYXJ0aWNsZSBpbmRleFxyXG5cdCAqL1xyXG5cdGFwcGx5QmVoYXZpb3VyKHBhcnRpY2xlLCB0aW1lLCBpbmRleCkge1xyXG5cdFx0c3VwZXIuYXBwbHlCZWhhdmlvdXIocGFydGljbGUsIHRpbWUsIGluZGV4KTtcclxuXHJcblx0XHR0aGlzLmF0dHJhY3Rpb25Gb3JjZS5jb3B5KHRoaXMudGFyZ2V0UG9zaXRpb24pO1xyXG5cdFx0dGhpcy5hdHRyYWN0aW9uRm9yY2Uuc3ViKHBhcnRpY2xlLnApO1xyXG5cdFx0dGhpcy5sZW5ndGhTcSA9IHRoaXMuYXR0cmFjdGlvbkZvcmNlLmxlbmd0aFNxKCk7XHJcblx0XHRpZiAodGhpcy5sZW5ndGhTcSA+IDAuMDAwMDA0ICYmIHRoaXMubGVuZ3RoU3EgPCB0aGlzLnJhZGl1c1NxKSB7XHJcblx0XHRcdHRoaXMuYXR0cmFjdGlvbkZvcmNlLm5vcm1hbGl6ZSgpO1xyXG5cdFx0XHR0aGlzLmF0dHJhY3Rpb25Gb3JjZS5tdWx0aXBseVNjYWxhcigxIC0gdGhpcy5sZW5ndGhTcSAvIHRoaXMucmFkaXVzU3EpO1xyXG5cdFx0XHR0aGlzLmF0dHJhY3Rpb25Gb3JjZS5tdWx0aXBseVNjYWxhcih0aGlzLmZvcmNlKTtcclxuXHRcdFx0cGFydGljbGUuYS5hZGQodGhpcy5hdHRyYWN0aW9uRm9yY2UpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYmVoYXZpb3VyL0F0dHJhY3Rpb24uanMiLCJpbXBvcnQgQmVoYXZpb3VyIGZyb20gJy4vQmVoYXZpb3VyJztcclxuaW1wb3J0IFV0aWwgZnJvbSAnLi4vY29yZS9VdGlsJztcclxuaW1wb3J0IFZlY3RvcjJEIGZyb20gJy4uL21hdGgvVmVjdG9yMkQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sbGlzaW9uIGV4dGVuZHMgQmVoYXZpb3VyIHtcclxuXHJcblx0Y29uc3RydWN0b3IoZW1pdHRlciwgbWFzcywgY2FsbGJhY2ssIGxpZmUsIGVhc2luZykge1xyXG5cdFx0c3VwZXIobGlmZSwgZWFzaW5nKTtcclxuXHRcdHRoaXMucmVzZXQoZW1pdHRlciwgbWFzcywgY2FsbGJhY2spO1xyXG5cdFx0dGhpcy5uYW1lID0gXCJDb2xsaXNpb25cIjtcclxuXHRcdHRoaXMuYXBwbHlCZWhhdmlvdXIgPSB0aGlzLmFwcGx5QmVoYXZpb3VyXHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZXNldCB0aGlzIGJlaGF2aW91cidzIHBhcmFtZXRlcnNcclxuXHQgKlxyXG5cdCAqIEBtZW1iZXJvZiBQcm90b24jUHJvdG9uLkNvbGxpc2lvblxyXG5cdCAqIEBtZXRob2QgcmVzZXRcclxuXHQgKiBAaW5zdGFuY2VcclxuXHQgKlxyXG5cdCAqIEB0b2RvIGFkZCBkZXNjcmlwdGlvbiB0byBtYXNzXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge1Byb3Rvbi5FbWl0dGVyfSBcdFtlbWl0dGVyPW51bGxdIFx0XHR0aGUgYXR0cmFjdGlvbiBwb2ludCBjb29yZGluYXRlc1xyXG5cdCAqIEBwYXJhbSB7Qm9vbGVhbn0gXHRcdFttYXNzPXRydWVdXHRcdFx0XHJcblx0ICogQHBhcmFtIHtDYWxsYmFja31cdCBcdFtjYWxsYmFjaz1udWxsXVx0XHR0aGUgY2FsbGJhY2sgYWZ0ZXIgdGhlIGNvbGxpc2lvblxyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBcdFx0XHRbbGlmZT1JbmZpbml0eV0gXHR0aGlzIGJlaGF2aW91cidzIGxpZmVcclxuXHQgKiBAcGFyYW0ge1N0cmluZ30gW2Vhc2luZz1Qcm90b24uZWFzZUxpbmVhcl0gXHR0aGlzIGJlaGF2aW91cidzIGVhc2luZ1xyXG5cdCAqL1xyXG5cdHJlc2V0KGVtaXR0ZXIsIG1hc3MsIGNhbGxiYWNrLCBsaWZlLCBlYXNpbmcpIHtcclxuXHRcdHRoaXMuZW1pdHRlciA9IGVtaXR0ZXIgfHwgbnVsbDtcclxuXHRcdHRoaXMubWFzcyA9IG1hc3MgfHwgdHJ1ZTtcclxuXHRcdHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjayB8fCBudWxsO1xyXG5cdFx0dGhpcy5jb2xsaXNpb25Qb29sID0gW107XHJcblx0XHR0aGlzLmRlbHRhID0gbmV3IFZlY3RvcjJEKCk7XHJcblx0XHRpZiAobGlmZSl7XHJcblx0XHRcdHN1cGVyLnJlc2V0KGxpZmUsIGVhc2luZyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBBcHBseSB0aGlzIGJlaGF2aW91ciBmb3IgYWxsIHBhcnRpY2xlcyBldmVyeSB0aW1lXHJcblx0ICpcclxuXHQgKiBAbWVtYmVyb2YgUHJvdG9uI1Byb3Rvbi5Db2xsaXNpb25cclxuXHQgKiBAbWV0aG9kIGFwcGx5QmVoYXZpb3VyXHJcblx0ICogQGluc3RhbmNlXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge1Byb3Rvbi5QYXJ0aWNsZX0gcGFydGljbGVcclxuXHQgKiBAcGFyYW0ge051bWJlcn0gXHRcdFx0dGltZSB0aGUgaW50ZWdyYXRlIHRpbWUgMS9tc1xyXG5cdCAqIEBwYXJhbSB7SW50fSBcdFx0XHRpbmRleCB0aGUgcGFydGljbGUgaW5kZXhcclxuXHQgKi9cclxuXHRhcHBseUJlaGF2aW91cihwYXJ0aWNsZSwgdGltZSwgaW5kZXgpIHtcclxuXHRcdGxldCBuZXdQb29sID0gdGhpcy5lbWl0dGVyLnBhcnRpY2xlcy5zbGljZShpbmRleCk7XHJcblx0XHRsZXQgb3RoZXJQYXJ0aWNsZTtcclxuXHRcdGxldCBsZW5ndGhTcTtcclxuXHRcdGxldCBvdmVybGFwO1xyXG5cdFx0bGV0IGF2ZXJhZ2VNYXNzMSwgYXZlcmFnZU1hc3MyO1xyXG5cdFx0bGV0IGxlbmd0aCA9IG5ld1Bvb2wubGVuZ3RoO1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG5cdFx0XHRvdGhlclBhcnRpY2xlID0gbmV3UG9vbFtpXTtcclxuXHRcdFx0aWYgKG90aGVyUGFydGljbGUgIT09IHBhcnRpY2xlKSB7XHJcblx0XHRcdFx0dGhpcy5kZWx0YS5jb3B5KG90aGVyUGFydGljbGUucCk7XHJcblx0XHRcdFx0dGhpcy5kZWx0YS5zdWIocGFydGljbGUucCk7XHJcblx0XHRcdFx0bGVuZ3RoU3EgPSB0aGlzLmRlbHRhLmxlbmd0aFNxKCk7XHJcblx0XHRcdFx0Y29uc3QgZGlzdGFuY2UgPSBwYXJ0aWNsZS5yYWRpdXMgKyBvdGhlclBhcnRpY2xlLnJhZGl1cztcclxuXHJcblx0XHRcdFx0aWYgKGxlbmd0aFNxIDw9IGRpc3RhbmNlICogZGlzdGFuY2UpIHtcclxuXHRcdFx0XHRcdG92ZXJsYXAgPSBkaXN0YW5jZSAtIE1hdGguc3FydChsZW5ndGhTcSk7XHJcblx0XHRcdFx0XHRvdmVybGFwICs9IDAuNTtcclxuXHRcdFx0XHRcdGNvbnN0IHRvdGFsTWFzcyA9IHBhcnRpY2xlLm1hc3MgKyBvdGhlclBhcnRpY2xlLm1hc3M7XHJcblx0XHRcdFx0XHRhdmVyYWdlTWFzczEgPSB0aGlzLm1hc3MgPyBvdGhlclBhcnRpY2xlLm1hc3MgLyB0b3RhbE1hc3MgOiAwLjU7XHJcblx0XHRcdFx0XHRhdmVyYWdlTWFzczIgPSB0aGlzLm1hc3MgPyBwYXJ0aWNsZS5tYXNzIC8gdG90YWxNYXNzIDogMC41O1xyXG5cdFx0XHRcdFx0cGFydGljbGUucC5hZGQodGhpcy5kZWx0YS5jbG9uZSgpLm5vcm1hbGl6ZSgpLm11bHRpcGx5U2NhbGFyKG92ZXJsYXAgKiAtYXZlcmFnZU1hc3MxKSk7XHJcblx0XHRcdFx0XHRvdGhlclBhcnRpY2xlLnAuYWRkKHRoaXMuZGVsdGEubm9ybWFsaXplKCkubXVsdGlwbHlTY2FsYXIob3ZlcmxhcCAqIGF2ZXJhZ2VNYXNzMikpO1xyXG5cdFx0XHRcdFx0aWYgKHRoaXMuY2FsbGJhY2spe1xyXG5cdFx0XHRcdFx0XHR0aGlzLmNhbGxiYWNrKHBhcnRpY2xlLCBvdGhlclBhcnRpY2xlKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYmVoYXZpb3VyL0NvbGxpc2lvbi5qcyJdLCJzb3VyY2VSb290IjoiIn0=