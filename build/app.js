var stk =
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _modules = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function App() {
  _classCallCheck(this, App);

  this.master = new _modules.Master();
};

window.onload = function () {
  var app = new App();
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _master = __webpack_require__(2);

Object.keys(_master).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _master[key];
    }
  });
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Master = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _render = __webpack_require__(10);

var _scene = __webpack_require__(5);

var _time = __webpack_require__(7);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Master = function () {
  function Master() {
    _classCallCheck(this, Master);

    this.width = 960;
    this.height = 540;
    this.scene = new _scene.Scene(this.width, this.height);
    this.renderer = new _render.Renderer(this.width, this.height, this.scene.getScene(), this.scene.getCamera());
    this.timer = new _time.Timer();
    this.loop();
  }

  _createClass(Master, [{
    key: 'loop',
    value: function loop() {
      var _this = this;

      // the main loop

      if (!this.paused) {
        if (!this.loopGuard) {
          this.loopGuard = true;
          requestAnimationFrame(function () {
            _this.loopGuard = false;
            _this.loop();
          });
        }
        var delta = this.timer.getDelta();
        this.scene.update(delta);
        this.renderer.render(delta);
      }
    }
  }]);

  return Master;
}();

exports.Master = Master;

/***/ }),
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _scene = __webpack_require__(6);

Object.keys(_scene).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _scene[key];
    }
  });
});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Scene = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _camera = __webpack_require__(9);

var _lighting = __webpack_require__(23);

var _player = __webpack_require__(24);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Scene = function () {
  function Scene(width, height) {
    _classCallCheck(this, Scene);

    this.scene = new THREE.Scene();
    this.camera = new _camera.Camera(width, height);
    this.colliderSystem = new Collider.System();
    this.player = new _player.Player(this.scene, this.colliderSystem);
    this.lighting = new _lighting.Lighting(this.scene);

    this.scene.add(new THREE.Mesh(new THREE.BoxBufferGeometry(6, 2, 6), new THREE.MeshPhongMaterial({})));
  }

  _createClass(Scene, [{
    key: 'update',
    value: function update(delta) {
      this.camera.update(delta);
    }
  }, {
    key: 'getScene',
    value: function getScene() {
      return this.scene;
    }
  }, {
    key: 'getCamera',
    value: function getCamera() {
      return this.camera.getCamera();
    }
  }]);

  return Scene;
}();

exports.Scene = Scene;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _timer = __webpack_require__(8);

Object.keys(_timer).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _timer[key];
    }
  });
});

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Timer = function () {
  function Timer() {
    _classCallCheck(this, Timer);

    // timekeeping

    this.time = new Date().getTime();
    this.age = 0;
  }

  _createClass(Timer, [{
    key: "getDelta",
    value: function getDelta() {
      // update timer, get delta time

      var now = new Date().getTime();
      var delta = (this.time - now) / 1000.;
      this.age += delta;
      this.time = now;

      return delta;
    }
  }]);

  return Timer;
}();

exports.Timer = Timer;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Camera = function () {
  function Camera(width, height) {
    _classCallCheck(this, Camera);

    this.fov = 90;
    this.aspectRatio = width / height;
    this.near = 0.1;
    this.far = 1000;
    this.origin = new THREE.Vector3(0, 0, 0);
    this.angle = 0;
    this.len = 20;
    this.camera = new THREE.PerspectiveCamera(this.fov, this.aspectRatio, this.near, this.far);
  }

  _createClass(Camera, [{
    key: "update",
    value: function update(delta) {
      this.angle += delta * Math.PI * 0.125;
      this.camera.position.set(Math.cos(this.angle) * this.len, this.len / 2, Math.sin(this.angle) * this.len);
      this.camera.lookAt(this.origin);
    }
  }, {
    key: "getCamera",
    value: function getCamera() {
      return this.camera;
    }
  }]);

  return Camera;
}();

exports.Camera = Camera;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _renderer = __webpack_require__(11);

Object.keys(_renderer).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _renderer[key];
    }
  });
});

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Renderer = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(12);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Renderer = function () {
  function Renderer(width, height, scene, camera) {
    _classCallCheck(this, Renderer);

    // webgl renderer

    this.scene = scene;
    this.camera = camera;
    this.width = width;
    this.height = height;
    this.size = new THREE.Vector2(this.width, this.height);
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(this.width, this.height);
    this.renderer.setClearColor(0x101010, 1);
    this.postProcessingSetup();

    // add to doc

    $('.content__inner').append(this.renderer.domElement);
  }

  _createClass(Renderer, [{
    key: 'postProcessingSetup',
    value: function postProcessingSetup() {
      // post processing passes

      var strength = 0.7;
      var radius = 1.0;
      var threshold = 0.7;
      this.renderPass = new THREE.RenderPass(this.scene, this.camera);
      this.bloomPass = new THREE.UnrealBloomPass(this.size, strength, radius, threshold);
      this.noisePass = new THREE.NoisePass();
      this.noisePass.renderToScreen = true;
      this.composer = new THREE.EffectComposer(this.renderer);
      this.composer.setSize(this.width, this.height);
      this.composer.addPass(this.renderPass);
      this.composer.addPass(this.bloomPass);
      this.composer.addPass(this.noisePass);
      this.renderer.gammaInput = true;
      this.renderer.gammaOutput = true;
    }
  }, {
    key: 'render',
    value: function render(delta) {
      this.composer.render(delta);
    }
  }]);

  return Renderer;
}();

exports.Renderer = Renderer;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(13);

__webpack_require__(14);

__webpack_require__(15);

__webpack_require__(16);

__webpack_require__(17);

__webpack_require__(18);

__webpack_require__(19);

__webpack_require__(20);

__webpack_require__(21);

__webpack_require__(22);

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @author alteredq / http://alteredqualia.com/
 *
 * Full-screen textured quad shader
 */

THREE.CopyShader = {

		uniforms: {

				"tDiffuse": { value: null },
				"opacity": { value: 1.0 }

		},

		vertexShader: ["varying vec2 vUv;", "void main() {", "vUv = uv;", "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", "}"].join("\n"),

		fragmentShader: ["uniform float opacity;", "uniform sampler2D tDiffuse;", "varying vec2 vUv;", "void main() {", "vec4 texel = texture2D( tDiffuse, vUv );", "gl_FragColor = opacity * texel;", "}"].join("\n")

};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @author alteredq / http://alteredqualia.com/
 */

THREE.EffectComposer = function (renderer, renderTarget) {

	this.renderer = renderer;

	if (renderTarget === undefined) {

		var parameters = {
			minFilter: THREE.LinearFilter,
			magFilter: THREE.LinearFilter,
			format: THREE.RGBAFormat,
			stencilBuffer: false
		};

		var size = renderer.getDrawingBufferSize();
		renderTarget = new THREE.WebGLRenderTarget(size.width, size.height, parameters);
		renderTarget.texture.name = 'EffectComposer.rt1';
	}

	this.renderTarget1 = renderTarget;
	this.renderTarget2 = renderTarget.clone();
	this.renderTarget2.texture.name = 'EffectComposer.rt2';

	this.writeBuffer = this.renderTarget1;
	this.readBuffer = this.renderTarget2;

	this.passes = [];

	// dependencies

	if (THREE.CopyShader === undefined) {

		console.error('THREE.EffectComposer relies on THREE.CopyShader');
	}

	if (THREE.ShaderPass === undefined) {

		console.error('THREE.EffectComposer relies on THREE.ShaderPass');
	}

	this.copyPass = new THREE.ShaderPass(THREE.CopyShader);
};

Object.assign(THREE.EffectComposer.prototype, {

	swapBuffers: function swapBuffers() {

		var tmp = this.readBuffer;
		this.readBuffer = this.writeBuffer;
		this.writeBuffer = tmp;
	},

	addPass: function addPass(pass) {

		this.passes.push(pass);

		var size = this.renderer.getDrawingBufferSize();
		pass.setSize(size.width, size.height);
	},

	insertPass: function insertPass(pass, index) {

		this.passes.splice(index, 0, pass);
	},

	render: function render(delta) {

		var maskActive = false;

		var pass,
		    i,
		    il = this.passes.length;

		for (i = 0; i < il; i++) {

			pass = this.passes[i];

			if (pass.enabled === false) continue;

			pass.render(this.renderer, this.writeBuffer, this.readBuffer, delta, maskActive);

			if (pass.needsSwap) {

				if (maskActive) {

					var context = this.renderer.context;

					context.stencilFunc(context.NOTEQUAL, 1, 0xffffffff);

					this.copyPass.render(this.renderer, this.writeBuffer, this.readBuffer, delta);

					context.stencilFunc(context.EQUAL, 1, 0xffffffff);
				}

				this.swapBuffers();
			}

			if (THREE.MaskPass !== undefined) {

				if (pass instanceof THREE.MaskPass) {

					maskActive = true;
				} else if (pass instanceof THREE.ClearMaskPass) {

					maskActive = false;
				}
			}
		}
	},

	reset: function reset(renderTarget) {

		if (renderTarget === undefined) {

			var size = this.renderer.getDrawingBufferSize();

			renderTarget = this.renderTarget1.clone();
			renderTarget.setSize(size.width, size.height);
		}

		this.renderTarget1.dispose();
		this.renderTarget2.dispose();
		this.renderTarget1 = renderTarget;
		this.renderTarget2 = renderTarget.clone();

		this.writeBuffer = this.renderTarget1;
		this.readBuffer = this.renderTarget2;
	},

	setSize: function setSize(width, height) {

		this.renderTarget1.setSize(width, height);
		this.renderTarget2.setSize(width, height);

		for (var i = 0; i < this.passes.length; i++) {

			this.passes[i].setSize(width, height);
		}
	}

});

THREE.Pass = function () {

	// if set to true, the pass is processed by the composer
	this.enabled = true;

	// if set to true, the pass indicates to swap read and write buffer after rendering
	this.needsSwap = true;

	// if set to true, the pass clears its buffer before rendering
	this.clear = false;

	// if set to true, the result of the pass is rendered to screen
	this.renderToScreen = false;
};

Object.assign(THREE.Pass.prototype, {

	setSize: function setSize(width, height) {},

	render: function render(renderer, writeBuffer, readBuffer, delta, maskActive) {

		console.error('THREE.Pass: .render() must be implemented in derived pass.');
	}

});

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @author bhouston / http://clara.io/
 *
 * Luminosity
 * http://en.wikipedia.org/wiki/Luminosity
 */

THREE.LuminosityHighPassShader = {

		shaderID: "luminosityHighPass",

		uniforms: {

				"tDiffuse": { type: "t", value: null },
				"luminosityThreshold": { type: "f", value: 1.0 },
				"smoothWidth": { type: "f", value: 1.0 },
				"defaultColor": { type: "c", value: new THREE.Color(0x000000) },
				"defaultOpacity": { type: "f", value: 0.0 }

		},

		vertexShader: ["varying vec2 vUv;", "void main() {", "vUv = uv;", "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", "}"].join("\n"),

		fragmentShader: ["uniform sampler2D tDiffuse;", "uniform vec3 defaultColor;", "uniform float defaultOpacity;", "uniform float luminosityThreshold;", "uniform float smoothWidth;", "varying vec2 vUv;", "void main() {", "vec4 texel = texture2D( tDiffuse, vUv );", "vec3 luma = vec3( 0.299, 0.587, 0.114 );", "float v = dot( texel.xyz, luma );", "vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );", "float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );", "gl_FragColor = mix( outputColor, texel, alpha );", "}"].join("\n")

};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


window.mobilecheck = function () {
  var check = false;
  (function (a) {
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @author alteredq / http://alteredqualia.com/
 */

THREE.RenderPass = function (scene, camera, overrideMaterial, clearColor, clearAlpha) {

		THREE.Pass.call(this);

		this.scene = scene;
		this.camera = camera;

		this.overrideMaterial = overrideMaterial;

		this.clearColor = clearColor;
		this.clearAlpha = clearAlpha !== undefined ? clearAlpha : 0;

		this.clear = true;
		this.clearDepth = false;
		this.needsSwap = false;
};

THREE.RenderPass.prototype = Object.assign(Object.create(THREE.Pass.prototype), {

		constructor: THREE.RenderPass,

		render: function render(renderer, writeBuffer, readBuffer, delta, maskActive) {

				var oldAutoClear = renderer.autoClear;
				renderer.autoClear = false;

				this.scene.overrideMaterial = this.overrideMaterial;

				var oldClearColor, oldClearAlpha;

				if (this.clearColor) {

						oldClearColor = renderer.getClearColor().getHex();
						oldClearAlpha = renderer.getClearAlpha();

						renderer.setClearColor(this.clearColor, this.clearAlpha);
				}

				if (this.clearDepth) {

						renderer.clearDepth();
				}

				renderer.render(this.scene, this.camera, this.renderToScreen ? null : readBuffer, this.clear);

				if (this.clearColor) {

						renderer.setClearColor(oldClearColor, oldClearAlpha);
				}

				this.scene.overrideMaterial = null;
				renderer.autoClear = oldAutoClear;
		}

});

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @author alteredq / http://alteredqualia.com/
 */

THREE.ShaderPass = function (shader, textureID) {

	THREE.Pass.call(this);

	this.textureID = textureID !== undefined ? textureID : "tDiffuse";

	if (shader instanceof THREE.ShaderMaterial) {

		this.uniforms = shader.uniforms;

		this.material = shader;
	} else if (shader) {

		this.uniforms = THREE.UniformsUtils.clone(shader.uniforms);

		this.material = new THREE.ShaderMaterial({

			defines: shader.defines || {},
			uniforms: this.uniforms,
			vertexShader: shader.vertexShader,
			fragmentShader: shader.fragmentShader

		});
	}

	this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
	this.scene = new THREE.Scene();

	this.quad = new THREE.Mesh(new THREE.PlaneBufferGeometry(2, 2), null);
	this.quad.frustumCulled = false; // Avoid getting clipped
	this.scene.add(this.quad);
};

THREE.ShaderPass.prototype = Object.assign(Object.create(THREE.Pass.prototype), {

	constructor: THREE.ShaderPass,

	render: function render(renderer, writeBuffer, readBuffer, delta, maskActive) {

		if (this.uniforms[this.textureID]) {

			this.uniforms[this.textureID].value = readBuffer.texture;
		}

		this.quad.material = this.material;

		if (this.renderToScreen) {

			renderer.render(this.scene, this.camera);
		} else {

			renderer.render(this.scene, this.camera, writeBuffer, this.clear);
		}
	}

});

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @author spidersharma / http://eduperiment.com/
 *
 * Inspired from Unreal Engine
 * https://docs.unrealengine.com/latest/INT/Engine/Rendering/PostProcessEffects/Bloom/
 */
THREE.UnrealBloomPass = function (resolution, strength, radius, threshold) {

	THREE.Pass.call(this);

	this.strength = strength !== undefined ? strength : 1;
	this.radius = radius;
	this.threshold = threshold;
	this.resolution = resolution !== undefined ? new THREE.Vector2(resolution.x, resolution.y) : new THREE.Vector2(256, 256);

	// render targets
	var pars = { minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, format: THREE.RGBAFormat };
	this.renderTargetsHorizontal = [];
	this.renderTargetsVertical = [];
	this.nMips = 5;
	var resx = Math.round(this.resolution.x / 2);
	var resy = Math.round(this.resolution.y / 2);

	this.renderTargetBright = new THREE.WebGLRenderTarget(resx, resy, pars);
	this.renderTargetBright.texture.name = "UnrealBloomPass.bright";
	this.renderTargetBright.texture.generateMipmaps = false;

	for (var i = 0; i < this.nMips; i++) {

		var renderTarget = new THREE.WebGLRenderTarget(resx, resy, pars);

		renderTarget.texture.name = "UnrealBloomPass.h" + i;
		renderTarget.texture.generateMipmaps = false;

		this.renderTargetsHorizontal.push(renderTarget);

		var renderTarget = new THREE.WebGLRenderTarget(resx, resy, pars);

		renderTarget.texture.name = "UnrealBloomPass.v" + i;
		renderTarget.texture.generateMipmaps = false;

		this.renderTargetsVertical.push(renderTarget);

		resx = Math.round(resx / 2);

		resy = Math.round(resy / 2);
	}

	// luminosity high pass material

	if (THREE.LuminosityHighPassShader === undefined) console.error("THREE.UnrealBloomPass relies on THREE.LuminosityHighPassShader");

	var highPassShader = THREE.LuminosityHighPassShader;
	this.highPassUniforms = THREE.UniformsUtils.clone(highPassShader.uniforms);

	this.highPassUniforms["luminosityThreshold"].value = threshold;
	this.highPassUniforms["smoothWidth"].value = 0.01;

	this.materialHighPassFilter = new THREE.ShaderMaterial({
		uniforms: this.highPassUniforms,
		vertexShader: highPassShader.vertexShader,
		fragmentShader: highPassShader.fragmentShader,
		defines: {}
	});

	// Gaussian Blur Materials
	this.separableBlurMaterials = [];
	var kernelSizeArray = [3, 5, 7, 9, 11];
	var resx = Math.round(this.resolution.x / 2);
	var resy = Math.round(this.resolution.y / 2);

	for (var i = 0; i < this.nMips; i++) {

		this.separableBlurMaterials.push(this.getSeperableBlurMaterial(kernelSizeArray[i]));

		this.separableBlurMaterials[i].uniforms["texSize"].value = new THREE.Vector2(resx, resy);

		resx = Math.round(resx / 2);

		resy = Math.round(resy / 2);
	}

	// Composite material
	this.compositeMaterial = this.getCompositeMaterial(this.nMips);
	this.compositeMaterial.uniforms["blurTexture1"].value = this.renderTargetsVertical[0].texture;
	this.compositeMaterial.uniforms["blurTexture2"].value = this.renderTargetsVertical[1].texture;
	this.compositeMaterial.uniforms["blurTexture3"].value = this.renderTargetsVertical[2].texture;
	this.compositeMaterial.uniforms["blurTexture4"].value = this.renderTargetsVertical[3].texture;
	this.compositeMaterial.uniforms["blurTexture5"].value = this.renderTargetsVertical[4].texture;
	this.compositeMaterial.uniforms["bloomStrength"].value = strength;
	this.compositeMaterial.uniforms["bloomRadius"].value = 0.1;
	this.compositeMaterial.needsUpdate = true;

	var bloomFactors = [1.0, 0.8, 0.6, 0.4, 0.2];
	this.compositeMaterial.uniforms["bloomFactors"].value = bloomFactors;
	this.bloomTintColors = [new THREE.Vector3(1, 1, 1), new THREE.Vector3(1, 1, 1), new THREE.Vector3(1, 1, 1), new THREE.Vector3(1, 1, 1), new THREE.Vector3(1, 1, 1)];
	this.compositeMaterial.uniforms["bloomTintColors"].value = this.bloomTintColors;

	// copy material
	if (THREE.CopyShader === undefined) {

		console.error("THREE.BloomPass relies on THREE.CopyShader");
	}

	var copyShader = THREE.CopyShader;

	this.copyUniforms = THREE.UniformsUtils.clone(copyShader.uniforms);
	this.copyUniforms["opacity"].value = 1.0;

	this.materialCopy = new THREE.ShaderMaterial({
		uniforms: this.copyUniforms,
		vertexShader: copyShader.vertexShader,
		fragmentShader: copyShader.fragmentShader,
		blending: THREE.AdditiveBlending,
		depthTest: false,
		depthWrite: false,
		transparent: true
	});

	this.enabled = true;
	this.needsSwap = false;

	this.oldClearColor = new THREE.Color();
	this.oldClearAlpha = 1;

	this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
	this.scene = new THREE.Scene();

	this.basic = new THREE.MeshBasicMaterial();

	this.quad = new THREE.Mesh(new THREE.PlaneBufferGeometry(2, 2), null);
	this.quad.frustumCulled = false; // Avoid getting clipped
	this.scene.add(this.quad);
};

THREE.UnrealBloomPass.prototype = Object.assign(Object.create(THREE.Pass.prototype), {

	constructor: THREE.UnrealBloomPass,

	dispose: function dispose() {

		for (var i = 0; i < this.renderTargetsHorizontal.length; i++) {

			this.renderTargetsHorizontal[i].dispose();
		}

		for (var i = 0; i < this.renderTargetsVertical.length; i++) {

			this.renderTargetsVertical[i].dispose();
		}

		this.renderTargetBright.dispose();
	},

	setSize: function setSize(width, height) {

		var resx = Math.round(width / 2);
		var resy = Math.round(height / 2);

		this.renderTargetBright.setSize(resx, resy);

		for (var i = 0; i < this.nMips; i++) {

			this.renderTargetsHorizontal[i].setSize(resx, resy);
			this.renderTargetsVertical[i].setSize(resx, resy);

			this.separableBlurMaterials[i].uniforms["texSize"].value = new THREE.Vector2(resx, resy);

			resx = Math.round(resx / 2);
			resy = Math.round(resy / 2);
		}
	},

	render: function render(renderer, writeBuffer, readBuffer, delta, maskActive) {

		this.oldClearColor.copy(renderer.getClearColor());
		this.oldClearAlpha = renderer.getClearAlpha();
		var oldAutoClear = renderer.autoClear;
		renderer.autoClear = false;

		renderer.setClearColor(new THREE.Color(0, 0, 0), 0);

		if (maskActive) renderer.context.disable(renderer.context.STENCIL_TEST);

		// Render input to screen

		if (this.renderToScreen) {

			this.quad.material = this.basic;
			this.basic.map = readBuffer.texture;

			renderer.render(this.scene, this.camera, undefined, true);
		}

		// 1. Extract Bright Areas

		this.highPassUniforms["tDiffuse"].value = readBuffer.texture;
		this.highPassUniforms["luminosityThreshold"].value = this.threshold;
		this.quad.material = this.materialHighPassFilter;

		renderer.render(this.scene, this.camera, this.renderTargetBright, true);

		// 2. Blur All the mips progressively

		var inputRenderTarget = this.renderTargetBright;

		for (var i = 0; i < this.nMips; i++) {

			this.quad.material = this.separableBlurMaterials[i];

			this.separableBlurMaterials[i].uniforms["colorTexture"].value = inputRenderTarget.texture;
			this.separableBlurMaterials[i].uniforms["direction"].value = THREE.UnrealBloomPass.BlurDirectionX;
			renderer.render(this.scene, this.camera, this.renderTargetsHorizontal[i], true);

			this.separableBlurMaterials[i].uniforms["colorTexture"].value = this.renderTargetsHorizontal[i].texture;
			this.separableBlurMaterials[i].uniforms["direction"].value = THREE.UnrealBloomPass.BlurDirectionY;
			renderer.render(this.scene, this.camera, this.renderTargetsVertical[i], true);

			inputRenderTarget = this.renderTargetsVertical[i];
		}

		// Composite All the mips

		this.quad.material = this.compositeMaterial;
		this.compositeMaterial.uniforms["bloomStrength"].value = this.strength;
		this.compositeMaterial.uniforms["bloomRadius"].value = this.radius;
		this.compositeMaterial.uniforms["bloomTintColors"].value = this.bloomTintColors;

		renderer.render(this.scene, this.camera, this.renderTargetsHorizontal[0], true);

		// Blend it additively over the input texture

		this.quad.material = this.materialCopy;
		this.copyUniforms["tDiffuse"].value = this.renderTargetsHorizontal[0].texture;

		if (maskActive) renderer.context.enable(renderer.context.STENCIL_TEST);

		if (this.renderToScreen) {

			renderer.render(this.scene, this.camera, undefined, false);
		} else {

			renderer.render(this.scene, this.camera, readBuffer, false);
		}

		// Restore renderer settings

		renderer.setClearColor(this.oldClearColor, this.oldClearAlpha);
		renderer.autoClear = oldAutoClear;
	},

	getSeperableBlurMaterial: function getSeperableBlurMaterial(kernelRadius) {

		return new THREE.ShaderMaterial({

			defines: {
				"KERNEL_RADIUS": kernelRadius,
				"SIGMA": kernelRadius
			},

			uniforms: {
				"colorTexture": { value: null },
				"texSize": { value: new THREE.Vector2(0.5, 0.5) },
				"direction": { value: new THREE.Vector2(0.5, 0.5) }
			},

			vertexShader: "varying vec2 vUv;\n\
				void main() {\n\
					vUv = uv;\n\
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\
				}",

			fragmentShader: "#include <common>\
				varying vec2 vUv;\n\
				uniform sampler2D colorTexture;\n\
				uniform vec2 texSize;\
				uniform vec2 direction;\
				\
				float gaussianPdf(in float x, in float sigma) {\
					return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;\
				}\
				void main() {\n\
					vec2 invSize = 1.0 / texSize;\
					float fSigma = float(SIGMA);\
					float weightSum = gaussianPdf(0.0, fSigma);\
					vec3 diffuseSum = texture2D( colorTexture, vUv).rgb * weightSum;\
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {\
						float x = float(i);\
						float w = gaussianPdf(x, fSigma);\
						vec2 uvOffset = direction * invSize * x;\
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset).rgb;\
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset).rgb;\
						diffuseSum += (sample1 + sample2) * w;\
						weightSum += 2.0 * w;\
					}\
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);\n\
				}"
		});
	},

	getCompositeMaterial: function getCompositeMaterial(nMips) {

		return new THREE.ShaderMaterial({

			defines: {
				"NUM_MIPS": nMips
			},

			uniforms: {
				"blurTexture1": { value: null },
				"blurTexture2": { value: null },
				"blurTexture3": { value: null },
				"blurTexture4": { value: null },
				"blurTexture5": { value: null },
				"dirtTexture": { value: null },
				"bloomStrength": { value: 1.0 },
				"bloomFactors": { value: null },
				"bloomTintColors": { value: null },
				"bloomRadius": { value: 0.0 }
			},

			vertexShader: "varying vec2 vUv;\n\
				void main() {\n\
					vUv = uv;\n\
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\
				}",

			fragmentShader: "varying vec2 vUv;\
				uniform sampler2D blurTexture1;\
				uniform sampler2D blurTexture2;\
				uniform sampler2D blurTexture3;\
				uniform sampler2D blurTexture4;\
				uniform sampler2D blurTexture5;\
				uniform sampler2D dirtTexture;\
				uniform float bloomStrength;\
				uniform float bloomRadius;\
				uniform float bloomFactors[NUM_MIPS];\
				uniform vec3 bloomTintColors[NUM_MIPS];\
				\
				float lerpBloomFactor(const in float factor) { \
					float mirrorFactor = 1.2 - factor;\
					return mix(factor, mirrorFactor, bloomRadius);\
				}\
				\
				void main() {\
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) + \
													 lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) + \
													 lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) + \
													 lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) + \
													 lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );\
				}"
		});
	}

});

THREE.UnrealBloomPass.BlurDirectionX = new THREE.Vector2(1.0, 0.0);
THREE.UnrealBloomPass.BlurDirectionY = new THREE.Vector2(0.0, 1.0);

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
  @author meatbags / https://github.com/meatbags
  **/

// modify shader depending on time of day
var hours = new Date().getHours();
var BLUE = 'BLUE';
var GOLD = 'GOLD';
var RED = 'RED';
var SHADER_TYPE = hours < 6 || hours >= 21 ? BLUE : hours == 12 ? GOLD : RED;

// for testing
if (window.location.hash == '#red') {
  SHADER_TYPE = RED;
} else if (window.location.hash == '#blue') {
  SHADER_TYPE = BLUE;
} else if (window.location.hash == '#gold') {
  SHADER_TYPE = GOLD;
}

THREE.MechanicsShader = {
  uniforms: {
    'time': { value: 0.0 },
    'width': { value: 100.0 },
    'height': { value: 100.0 },
    'tDiffuse': { value: null }
  },
  vertexShader: '\n    varying vec2 vUv;\n\n    void main() {\n      vUv = uv;\n      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n    }\n  ',
  fragmentShader: '\n    #define PI 3.14159\n    #define UV_SCALE 0.02\n    #define MAX_HEIGHT 4.0\n\n    varying vec2 vUv;\n    uniform sampler2D tDiffuse;\n    uniform float time;\n\n    float rand(vec2 seed) {\n      return fract(sin(dot(seed.xy, vec2(12.9898,78.233))) * 43758.5453);\n    }\n\n    vec2 randVec2() {\n      return vec2(rand(vUv + time), rand(vUv + time + 1.));\n    }\n\n    vec3 getPosition(vec2 coords) {\n      vec4 sample = texture2D(tDiffuse, coords);\n      vec3 res = vec3(coords.x / UV_SCALE, sample.x * MAX_HEIGHT, coords.y / UV_SCALE);\n      return res;\n    }\n\n    float computeAO(vec2 uvOff, vec3 P, vec3 N) {\n      vec3 Vpos = getPosition(vUv + uvOff * UV_SCALE) - P;\n      vec3 Vnorm = normalize(Vpos);\n      float dist = length(Vpos);\n      return max(dot(N, Vnorm) * (1.0 / (1.0 + dist)), 0.0);\n    }\n\n    float sampleAO(vec3 P) {\n      vec3 N = vec3(0., 1., 0.);\n      vec2 randOffset = randVec2();\n      const int iterations = 4;\n      float totalAO = 0.0;\n\n      for (int i=0; i<iterations; i++) {\n        vec2 coord1 = reflect(vec2(\n          (i < 2) ? ((i == 0) ? 1.0 : -1.0) : 0.0,\n          (i > 1) ? ((i == 2) ? 1.0 : -1.0) : 0.0\n        ), randOffset);\n        vec2 coord2 = vec2(\n          coord1.x * 0.707 - coord1.y * 0.707,\n          coord1.x * 0.707 + coord1.y * 0.707\n        );\n        totalAO += computeAO(coord1 * 0.25, P, N);\n        totalAO += computeAO(coord2 * 0.5, P, N);\n        totalAO += computeAO(coord1 * 0.75, P, N);\n        totalAO += computeAO(coord2, P, N);\n      }\n\n      return (totalAO / (float(iterations) * 4.));\n    }\n\n    void main() {\n      float minc = 0.0625;\n      //float invc = 0.9375;\n\n      vec4 tex = texture2D(tDiffuse, vUv);\n      vec3 P = getPosition(vUv);\n      float ao = sampleAO(P);\n      vec4 frag = max(tex - ao, minc);\n\n      ' + (SHADER_TYPE == RED ? "frag.r += ao * 0.5;" : SHADER_TYPE == BLUE ? "frag.g += ao * 0.2; frag.b += ao * 0.6;" : "frag.r += ao * 0.3; frag.g += ao * 0.2;") + '\n\n      gl_FragColor = frag;\n    }\n  '
};

// render pass
THREE.MechanicsPass = function (size) {
  THREE.Pass.call(this);

  this.shader = THREE.MechanicsShader;
  this.material = new THREE.ShaderMaterial(this.shader);
  this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  this.scene = new THREE.Scene();
  this.quad = new THREE.Mesh(new THREE.PlaneBufferGeometry(2, 2), this.material);
  this.quad.frustumCulled = false;
  this.scene.add(this.quad);
  this.time = 0;
};

THREE.MechanicsPass.prototype = Object.assign(Object.create(THREE.Pass.prototype), {
  constructor: THREE.MechanicsPass,
  render: function render(renderer, writeBuffer, readBuffer, delta, maskActive) {
    this.shader.uniforms['tDiffuse'].value = readBuffer.texture;
    this.time = (this.time + delta) % 10.;
    this.shader.uniforms['time'].value = this.time;

    if (this.renderToScreen) {
      renderer.render(this.scene, this.camera);
    } else {
      renderer.render(this.scene, this.camera, writeBuffer, this.clear);
    }
  }
});

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
  @author meatbags / https://github.com/meatbags
  **/

THREE.NoiseShader = {
  uniforms: {
    'tDiffuse': { value: null },
    'time': { value: 0.0 }
  },
  vertexShader: '\n    varying vec2 vUv;\n\n    void main() {\n      vUv = uv;\n      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n    }\n  ',
  fragmentShader: '\n    varying vec2 vUv;\n    uniform float time;\n    uniform sampler2D tDiffuse;\n\n    float rand(vec2 seed) {\n      return fract(sin(dot(seed.xy ,vec2(12.9898,78.233))) * 43758.5453);\n    }\n\n    void main() {\n      vec4 tex = texture2D(tDiffuse, vUv);\n      float scale = 1.0 - tex.r;\n      float r = tex.r + rand(vUv + time) * 0.02 * scale;\n      float g = tex.g + rand(vUv + time + 1.) * 0.02 * scale;\n      float b = tex.b + rand(vUv + time + 2.) * 0.03 * scale;\n\n      gl_FragColor = vec4(r, g, b, tex.a);\n    }\n  '
};

// render pass
THREE.NoisePass = function () {
  THREE.Pass.call(this);

  this.shader = THREE.NoiseShader;
  this.material = new THREE.ShaderMaterial(this.shader);
  this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  this.scene = new THREE.Scene();
  this.quad = new THREE.Mesh(new THREE.PlaneBufferGeometry(2, 2), this.material);
  this.quad.frustumCulled = false;
  this.time = 0;
  this.scene.add(this.quad);
};

THREE.NoisePass.prototype = Object.assign(Object.create(THREE.Pass.prototype), {
  constructor: THREE.NoisePass,
  render: function render(renderer, writeBuffer, readBuffer, delta, maskActive) {
    // limit time
    this.time = (this.time + delta) % 10.0;
    this.shader.uniforms['time'].value = this.time;

    // set texture
    this.shader.uniforms['tDiffuse'].value = readBuffer.texture;

    // render
    if (this.renderToScreen) {
      renderer.render(this.scene, this.camera);
    } else {
      renderer.render(this.scene, this.camera, writeBuffer, this.clear);
    }
  }
});

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
  @author meatbags / https://github.com/meatbags
  **/

THREE.DepthShader = {
  uniforms: {},
  vertexShader: "\n    varying vec4 vModel;\n    varying vec3 vNormal;\n\n    void main() {\n      vNormal = normal;\n      vModel = modelMatrix * vec4(position, 1.0);\n      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.);\n    }\n  ",
  fragmentShader: "\n    varying vec4 vModel;\n    varying vec3 vNormal;\n\n    void main() {\n      float minc = 0.0625;\n      float invc = 0.9375;\n\n      if (vModel.y <= 0.) {\n        gl_FragColor = vec4(minc, minc, minc, 1.0);\n      } else {\n        float t = (vModel.y >= 0.0) ? vModel.y / 3.0 : 0.0;\n        float d = (t <= 1.0) ? t : max(1.0 - 0.75 * (t - 1.0), 0.0);\n        d = d * invc + minc;\n        gl_FragColor = vec4(d, d, d, 1.0);\n      }\n    }\n  "
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Lighting = function () {
  function Lighting(scene) {
    _classCallCheck(this, Lighting);

    // create scene lighting

    this.scene = scene;
    this.lights = {
      point: {
        a: new THREE.PointLight(0xffffff, 1, 30, 2)
      },
      ambient: {
        a: new THREE.AmbientLight(0xffffff, 0.05)
      }
    };
    this.setLightPositions();

    for (var p in this.lights.point) {
      if (this.lights.point.hasOwnProperty(p)) {
        this.scene.add(this.lights.point[p]);
      }
    }
    for (var a in this.lights.ambient) {
      if (this.lights.ambient.hasOwnProperty(a)) {
        this.scene.add(this.lights.ambient[a]);
      }
    }
  }

  _createClass(Lighting, [{
    key: "setLightPositions",
    value: function setLightPositions() {
      this.lights.point.a.position.set(1, 5, -2);
    }
  }]);

  return Lighting;
}();

exports.Lighting = Lighting;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Player = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _input = __webpack_require__(25);

var _maths = __webpack_require__(27);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Player = function () {
  function Player(scene, colliderSystem) {
    var _this = this;

    _classCallCheck(this, Player);

    // represents the player

    this.scene = scene;
    this.position = new THREE.Vector3();
    this.motion = new THREE.Vector3();
    this.target = { position: new THREE.Vector3() };
    this.speed = 6;
    this.jump = 12;
    this.falling = false;
    this.fallTime = 0;
    this.fallTimeThreshold = 0.1;
    this.keys = {};
    this.keyboard = new _input.Keyboard(function (key) {
      _this.onKeyboard(key);
    });
    this.collider = new Collider.Collider(this.target.position, this.motion);
    this.colliderSystem = colliderSystem;
  }

  _createClass(Player, [{
    key: 'onKeyboard',
    value: function onKeyboard(key) {
      switch (key) {
        case 'a':case 'A':case 'ArrowLeft':
          this.keys.left = this.keyboard.keys[key];
          break;
        case 'd':case 'D':case 'ArrowRight':
          this.keys.right = this.keyboard.keys[key];
          break;
        case 'w':case 'W':case 'ArrowUp':case ' ':
          this.keys.up = this.keyboard.keys[key];
          break;
        case 's':case 'S':case 'ArrowDown':
          this.keys.down = this.keyboard.keys[key];
          break;
        default:
          break;
      }
    }
  }, {
    key: 'move',
    value: function move(delta) {
      // translate key input to motion

      if (this.keys.left || this.keys.right) {
        this.target.motion.z = ((this.keys.left ? -1 : 0) + (this.keys.right ? 1 : 0)) * this.speed;
      }

      if (this.keys.up) {
        this.keys.up = false;

        if (this.motion.y == 0 || this.fallTime < this.fallTimeThreshold) {
          this.motion.y = this.jump;
          this.fallTime = this.fallTimeThreshold;
        }
      }

      this.falling = this.motion.y != 0;
      this.fallTime = this.falling ? this.fallTime + delta : 0;

      if (!this.falling) {
        this.motion.x = this.target.motion.x;
        this.motion.z = this.target.motion.z;
      } else {
        this.motion.x = (0, _maths.Blend)(this.motion.x, this.target.motion.x, 0.1);
        this.motion.z = (0, _maths.Blend)(this.motion.x, this.target.motion.x, 0.1);
      }
    }
  }, {
    key: 'update',
    value: function update(delta) {
      this.move();
      this.collider.move(this.colliderSystem);
      this.position.x = (0, _maths.Blend)(this.position.x, this.target.position.x, 0.1);
      this.position.y = (0, _maths.Blend)(this.position.y, this.target.position.y, 0.1);
      this.position.z = (0, _maths.Blend)(this.position.z, this.target.position.z, 0.1);
    }
  }]);

  return Player;
}();

exports.Player = Player;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keyboard = __webpack_require__(26);

Object.keys(_keyboard).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _keyboard[key];
    }
  });
});

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Keyboard = function () {
  function Keyboard(onEvent) {
    var _this = this;

    _classCallCheck(this, Keyboard);

    // keyboard event handlers

    this.keys = {};
    this.onEvent = onEvent;
    document.addEventListener('keydown', function (key) {
      _this.onKeyDown(key);
    });
    document.addEventListener('keyup', function (key) {
      _this.onKeyUp(key);
    });
  }

  _createClass(Keyboard, [{
    key: 'onKeyDown',
    value: function onKeyDown(key) {
      this.keys[key.key] = true;
      this.onEvent(key.key);
    }
  }, {
    key: 'onKeyUp',
    value: function onKeyUp(key) {
      this.keys[key.key] = false;
      this.onEvent(key.key);
    }
  }, {
    key: 'isSpecial',
    value: function isSpecial() {
      return this.keys['Shift'] || this.keys['Control'] || this.keys['Alt'];
    }
  }, {
    key: 'isControl',
    value: function isControl() {
      return this.keys['Control'];
    }
  }, {
    key: 'isShift',
    value: function isShift() {
      return this.keys['Shift'];
    }
  }, {
    key: 'isAlt',
    value: function isAlt() {
      return this.keys['Alt'];
    }
  }]);

  return Keyboard;
}();

exports.Keyboard = Keyboard;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _general = __webpack_require__(28);

Object.keys(_general).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _general[key];
    }
  });
});

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var Blend = function Blend(a, b, factor) {
  return (b - a) * factor + a;
};

exports.Blend = Blend;

/***/ })
/******/ ]);