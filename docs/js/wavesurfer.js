/*!
 * wavesurfer.js 2.1.3 (2019-01-21)
 * https://github.com/katspaugh/wavesurfer.js
 * @license BSD-3-Clause
 */
! function(e, t) {
	"object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define
		.amd ? define("WaveSurfer", [], t) : "object" == typeof exports ? exports.WaveSurfer = t() : e.WaveSurfer = t()
}(window, function() {
	return function(r) {
		var n = {};

		function i(e) {
			if (n[e]) return n[e].exports;
			var t = n[e] = {
				i: e,
				l: !1,
				exports: {}
			};
			return r[e].call(t.exports, t, t.exports, i), t.l = !0, t.exports
		}
		return i.m = r, i.c = n, i.d = function(e, t, r) {
			i.o(e, t) || Object.defineProperty(e, t, {
				enumerable: !0,
				get: r
			})
		}, i.r = function(e) {
			"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
				value: "Module"
			}), Object.defineProperty(e, "__esModule", {
				value: !0
			})
		}, i.t = function(t, e) {
			if (1 & e && (t = i(t)), 8 & e) return t;
			if (4 & e && "object" == typeof t && t && t.__esModule) return t;
			var r = Object.create(null);
			if (i.r(r), Object.defineProperty(r, "default", {
					enumerable: !0,
					value: t
				}), 2 & e && "string" != typeof t)
				for (var n in t) i.d(r, n, function(e) {
					return t[e]
				}.bind(null, n));
			return r
		}, i.n = function(e) {
			var t = e && e.__esModule ? function() {
				return e.default
			} : function() {
				return e
			};
			return i.d(t, "a", t), t
		}, i.o = function(e, t) {
			return Object.prototype.hasOwnProperty.call(e, t)
		}, i.p = "", i(i.s = 4)
	}([function(e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), Object.defineProperty(t, "ajax", {
			enumerable: !0,
			get: function() {
				return n.default
			}
		}), Object.defineProperty(t, "getId", {
			enumerable: !0,
			get: function() {
				return i.default
			}
		}), Object.defineProperty(t, "max", {
			enumerable: !0,
			get: function() {
				return a.default
			}
		}), Object.defineProperty(t, "min", {
			enumerable: !0,
			get: function() {
				return s.default
			}
		}), Object.defineProperty(t, "Observer", {
			enumerable: !0,
			get: function() {
				return o.default
			}
		}), Object.defineProperty(t, "extend", {
			enumerable: !0,
			get: function() {
				return u.default
			}
		}), Object.defineProperty(t, "style", {
			enumerable: !0,
			get: function() {
				return l.default
			}
		}), Object.defineProperty(t, "requestAnimationFrame", {
			enumerable: !0,
			get: function() {
				return c.default
			}
		}), Object.defineProperty(t, "frame", {
			enumerable: !0,
			get: function() {
				return h.default
			}
		}), Object.defineProperty(t, "debounce", {
			enumerable: !0,
			get: function() {
				return f.default
			}
		}), Object.defineProperty(t, "preventClick", {
			enumerable: !0,
			get: function() {
				return d.default
			}
		});
		var n = p(r(5)),
			i = p(r(6)),
			a = p(r(7)),
			s = p(r(8)),
			o = p(r(1)),
			u = p(r(9)),
			l = p(r(10)),
			c = p(r(2)),
			h = p(r(11)),
			f = p(r(12)),
			d = p(r(13));

		function p(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
	}, function(e, t, r) {
		"use strict";

		function i(e, t) {
			for (var r = 0; r < t.length; r++) {
				var n = t[r];
				n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(
					e, n.key, n)
			}
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = void 0;
		var n = function() {
			function e() {
				! function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.handlers = null
			}
			var t, r, n;
			return t = e, (r = [{
				key: "on",
				value: function(e, t) {
					var r = this;
					this.handlers || (this.handlers = {});
					var n = this.handlers[e];
					return n || (n = this.handlers[e] = []), n.push(t), {
						name: e,
						callback: t,
						un: function(e, t) {
							return r.un(e, t)
						}
					}
				}
			}, {
				key: "un",
				value: function(e, t) {
					if (this.handlers) {
						var r, n = this.handlers[e];
						if (n)
							if (t)
								for (r = n.length - 1; 0 <= r; r--) n[r] == t && n.splice(r, 1);
							else n.length = 0
					}
				}
			}, {
				key: "unAll",
				value: function() {
					this.handlers = null
				}
			}, {
				key: "once",
				value: function(i, a) {
					var s = this;
					return this.on(i, function e() {
						for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
						a.apply(s, r), setTimeout(function() {
							s.un(i, e)
						}, 0)
					})
				}
			}, {
				key: "fireEvent",
				value: function(e) {
					for (var t = arguments.length, r = new Array(1 < t ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[
						n];
					if (this.handlers) {
						var i = this.handlers[e];
						i && i.forEach(function(e) {
							e.apply(void 0, r)
						})
					}
				}
			}]) && i(t.prototype, r), n && i(t, n), e
		}();
		t.default = n, e.exports = t.default
	}, function(e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = void 0;
		var n = (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame ||
			window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e, t) {
				return setTimeout(e, 1e3 / 60)
			}).bind(window);
		t.default = n, e.exports = t.default
	}, function(e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = void 0;
		var n = function(e) {
			{
				if (e && e.__esModule) return e;
				var t = {};
				if (null != e)
					for (var r in e)
						if (Object.prototype.hasOwnProperty.call(e, r)) {
							var n = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, r) : {};
							n.get || n.set ? Object.defineProperty(t, r, n) : t[r] = e[r]
						} return t.default = e, t
			}
		}(r(0));

		function i(e) {
			return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" :
					typeof e
			})(e)
		}

		function a(e, t, r) {
			return t in e ? Object.defineProperty(e, t, {
				value: r,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = r, e
		}

		function s(e, t) {
			return !t || "object" !== i(t) && "function" != typeof t ? function(e) {
				if (void 0 !== e) return e;
				throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
			}(e) : t
		}

		function o(e) {
			return (o = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
				return e.__proto__ || Object.getPrototypeOf(e)
			})(e)
		}

		function u(e, t) {
			for (var r = 0; r < t.length; r++) {
				var n = t[r];
				n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(
					e, n.key, n)
			}
		}

		function l(e, t, r) {
			return t && u(e.prototype, t), r && u(e, r), e
		}

		function c(e, t) {
			return (c = Object.setPrototypeOf || function(e, t) {
				return e.__proto__ = t, e
			})(e, t)
		}
		var h = "playing",
			f = "paused",
			d = "finished",
			p = function(e) {
				function i(e) {
					var t, r, n;
					return function(e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, i), (n = s(this, o(i).call(this))).audioContext = null, n.offlineAudioContext = null, n.stateBehaviors =
						(a(t = {}, h, {
							init: function() {
								this.addOnAudioProcess()
							},
							getPlayedPercents: function() {
								var e = this.getDuration();
								return this.getCurrentTime() / e || 0
							},
							getCurrentTime: function() {
								return this.startPosition + this.getPlayedTime()
							}
						}), a(t, f, {
							init: function() {
								this.removeOnAudioProcess()
							},
							getPlayedPercents: function() {
								var e = this.getDuration();
								return this.getCurrentTime() / e || 0
							},
							getCurrentTime: function() {
								return this.startPosition
							}
						}), a(t, d, {
							init: function() {
								this.removeOnAudioProcess(), this.fireEvent("finish")
							},
							getPlayedPercents: function() {
								return 1
							},
							getCurrentTime: function() {
								return this.getDuration()
							}
						}), t), n.params = e, n.ac = e.audioContext || n.getAudioContext(), n.lastPlay = n.ac.currentTime, n.startPosition =
						0, n.scheduledPause = null, n.states = (a(r = {}, h, Object.create(n.stateBehaviors[h])), a(r, f, Object.create(
							n.stateBehaviors[f])), a(r, d, Object.create(n.stateBehaviors[d])), r), n.analyser = null, n.buffer = null,
						n.filters = [], n.gainNode = null, n.mergedPeaks = null, n.offlineAc = null, n.peaks = null, n.playbackRate =
						1, n.analyser = null, n.scriptNode = null, n.source = null, n.splitPeaks = [], n.state = null, n.explicitDuration =
						null, n
				}
				return function(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError(
						"Super expression must either be null or a function");
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							writable: !0,
							configurable: !0
						}
					}), t && c(e, t)
				}(i, n.Observer), l(i, [{
					key: "supportsWebAudio",
					value: function() {
						return !(!window.AudioContext && !window.webkitAudioContext)
					}
				}, {
					key: "getAudioContext",
					value: function() {
						return window.WaveSurferAudioContext || (window.WaveSurferAudioContext = new(window.AudioContext ||
							window.webkitAudioContext)), window.WaveSurferAudioContext
					}
				}, {
					key: "getOfflineAudioContext",
					value: function(e) {
						return window.WaveSurferOfflineAudioContext || (window.WaveSurferOfflineAudioContext = new(window.OfflineAudioContext ||
							window.webkitOfflineAudioContext)(1, 2, e)), window.WaveSurferOfflineAudioContext
					}
				}]), l(i, [{
					key: "init",
					value: function() {
						this.createVolumeNode(), this.createScriptNode(), this.createAnalyserNode(), this.setState(f), this.setPlaybackRate(
							this.params.audioRate), this.setLength(0)
					}
				}, {
					key: "disconnectFilters",
					value: function() {
						this.filters && (this.filters.forEach(function(e) {
							e && e.disconnect()
						}), this.filters = null, this.analyser.connect(this.gainNode))
					}
				}, {
					key: "setState",
					value: function(e) {
						this.state !== this.states[e] && (this.state = this.states[e], this.state.init.call(this))
					}
				}, {
					key: "setFilter",
					value: function() {
						for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
						this.setFilters(t)
					}
				}, {
					key: "setFilters",
					value: function(e) {
						this.disconnectFilters(), e && e.length && (this.filters = e, this.analyser.disconnect(), e.reduce(
							function(e, t) {
								return e.connect(t), t
							}, this.analyser).connect(this.gainNode))
					}
				}, {
					key: "createScriptNode",
					value: function() {
						this.params.audioScriptProcessor ? this.scriptNode = this.params.audioScriptProcessor : this.ac.createScriptProcessor ?
							this.scriptNode = this.ac.createScriptProcessor(i.scriptBufferSize) : this.scriptNode = this.ac.createJavaScriptNode(
								i.scriptBufferSize), this.scriptNode.connect(this.ac.destination)
					}
				}, {
					key: "addOnAudioProcess",
					value: function() {
						var t = this;
						this.scriptNode.onaudioprocess = function() {
							var e = t.getCurrentTime();
							e >= t.getDuration() ? (t.setState(d), t.fireEvent("pause")) : e >= t.scheduledPause ? t.pause() : t.state ===
								t.states[h] && t.fireEvent("audioprocess", e)
						}
					}
				}, {
					key: "removeOnAudioProcess",
					value: function() {
						this.scriptNode.onaudioprocess = function() {}
					}
				}, {
					key: "createAnalyserNode",
					value: function() {
						this.analyser = this.ac.createAnalyser(), this.analyser.connect(this.gainNode)
					}
				}, {
					key: "createVolumeNode",
					value: function() {
						this.ac.createGain ? this.gainNode = this.ac.createGain() : this.gainNode = this.ac.createGainNode(),
							this.gainNode.connect(this.ac.destination)
					}
				}, {
					key: "setSinkId",
					value: function(e) {
						if (e) {
							var t = new window.Audio;
							if (!t.setSinkId) return Promise.reject(new Error("setSinkId is not supported in your browser"));
							t.autoplay = !0;
							var r = this.ac.createMediaStreamDestination();
							return this.gainNode.disconnect(), this.gainNode.connect(r), t.srcObject = r.stream, t.setSinkId(e)
						}
						return Promise.reject(new Error("Invalid deviceId: " + e))
					}
				}, {
					key: "setVolume",
					value: function(e) {
						this.gainNode.gain.setValueAtTime(e, this.ac.currentTime)
					}
				}, {
					key: "getVolume",
					value: function() {
						return this.gainNode.gain.value
					}
				}, {
					key: "decodeArrayBuffer",
					value: function(e, t, r) {
						this.offlineAc || (this.offlineAc = this.getOfflineAudioContext(this.ac && this.ac.sampleRate ? this.ac.sampleRate :
							44100)), this.offlineAc.decodeAudioData(e, function(e) {
							return t(e)
						}, r)
					}
				}, {
					key: "setPeaks",
					value: function(e, t) {
						this.explicitDuration = t, this.peaks = e
					}
				}, {
					key: "setLength",
					value: function(e) {
						if (!this.mergedPeaks || e != 2 * this.mergedPeaks.length - 1 + 2) {
							this.splitPeaks = [], this.mergedPeaks = [];
							var t, r = this.buffer ? this.buffer.numberOfChannels : 1;
							for (t = 0; t < r; t++) this.splitPeaks[t] = [], this.splitPeaks[t][2 * (e - 1)] = 0, this.splitPeaks[t]
								[2 * (e - 1) + 1] = 0;
							this.mergedPeaks[2 * (e - 1)] = 0, this.mergedPeaks[2 * (e - 1) + 1] = 0
						}
					}
				}, {
					key: "getPeaks",
					value: function(e, t, r) {
						if (this.peaks) return this.peaks;
						if (t = t || 0, r = r || e - 1, this.setLength(e), !this.buffer) return this.params.splitChannels ? this.splitPeaks :
							this.mergedPeaks;
						if (!this.buffer.length) {
							var n = this.createBuffer(1, 4096, this.sampleRate);
							this.buffer = n.buffer
						}
						var i, a = this.buffer.length / e,
							s = ~~(a / 10) || 1,
							o = this.buffer.numberOfChannels;
						for (i = 0; i < o; i++) {
							var u = this.splitPeaks[i],
								l = this.buffer.getChannelData(i),
								c = void 0;
							for (c = t; c <= r; c++) {
								var h = ~~(c * a),
									f = ~~(h + a),
									d = 0,
									p = 0,
									v = void 0;
								for (v = h; v < f; v += s) {
									var y = l[v];
									p < y && (p = y), y < d && (d = y)
								}
								u[2 * c] = p, u[2 * c + 1] = d, (0 == i || p > this.mergedPeaks[2 * c]) && (this.mergedPeaks[2 * c] = p),
									(0 == i || d < this.mergedPeaks[2 * c + 1]) && (this.mergedPeaks[2 * c + 1] = d)
							}
						}
						return this.params.splitChannels ? this.splitPeaks : this.mergedPeaks
					}
				}, {
					key: "getPlayedPercents",
					value: function() {
						return this.state.getPlayedPercents.call(this)
					}
				}, {
					key: "disconnectSource",
					value: function() {
						this.source && this.source.disconnect()
					}
				}, {
					key: "destroy",
					value: function() {
						this.isPaused() || this.pause(), this.unAll(), this.buffer = null, this.disconnectFilters(), this.disconnectSource(),
							this.gainNode.disconnect(), this.scriptNode.disconnect(), this.analyser.disconnect(), this.params.closeAudioContext &&
							("function" == typeof this.ac.close && "closed" != this.ac.state && this.ac.close(), this.ac = null,
								this.params.audioContext ? this.params.audioContext = null : window.WaveSurferAudioContext = null,
								window.WaveSurferOfflineAudioContext = null)
					}
				}, {
					key: "load",
					value: function(e) {
						this.startPosition = 0, this.lastPlay = this.ac.currentTime, this.buffer = e, this.createSource()
					}
				}, {
					key: "createSource",
					value: function() {
						this.disconnectSource(), this.source = this.ac.createBufferSource(), this.source.start = this.source.start ||
							this.source.noteGrainOn, this.source.stop = this.source.stop || this.source.noteOff, this.source.playbackRate
							.setValueAtTime(this.playbackRate, this.ac.currentTime), this.source.buffer = this.buffer, this.source.connect(
								this.analyser)
					}
				}, {
					key: "isPaused",
					value: function() {
						return this.state !== this.states[h]
					}
				}, {
					key: "getDuration",
					value: function() {
						return this.buffer ? this.buffer.duration : this.explicitDuration ? this.explicitDuration : 0
					}
				}, {
					key: "seekTo",
					value: function(e, t) {
						if (this.buffer) return (this.scheduledPause = null) == e && (e = this.getCurrentTime()) >= this.getDuration() &&
							(e = 0), null == t && (t = this.getDuration()), this.startPosition = e, this.lastPlay = this.ac.currentTime,
							this.state === this.states[d] && this.setState(f), {
								start: e,
								end: t
							}
					}
				}, {
					key: "getPlayedTime",
					value: function() {
						return (this.ac.currentTime - this.lastPlay) * this.playbackRate
					}
				}, {
					key: "play",
					value: function(e, t) {
						if (this.buffer) {
							this.createSource();
							var r = this.seekTo(e, t);
							e = r.start, t = r.end, this.scheduledPause = t, this.source.start(0, e, t - e), "suspended" == this.ac.state &&
								this.ac.resume && this.ac.resume(), this.setState(h), this.fireEvent("play")
						}
					}
				}, {
					key: "pause",
					value: function() {
						this.scheduledPause = null, this.startPosition += this.getPlayedTime(), this.source && this.source.stop(0),
							this.setState(f), this.fireEvent("pause")
					}
				}, {
					key: "getCurrentTime",
					value: function() {
						return this.state.getCurrentTime.call(this)
					}
				}, {
					key: "getPlaybackRate",
					value: function() {
						return this.playbackRate
					}
				}, {
					key: "setPlaybackRate",
					value: function(e) {
						e = e || 1, this.isPaused() ? this.playbackRate = e : (this.pause(), this.playbackRate = e, this.play())
					}
				}]), i
			}();
		(t.default = p).scriptBufferSize = 256, e.exports = t.default
	}, function(e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = void 0;
		var i = function(e) {
				{
					if (e && e.__esModule) return e;
					var t = {};
					if (null != e)
						for (var r in e)
							if (Object.prototype.hasOwnProperty.call(e, r)) {
								var n = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, r) : {};
								n.get || n.set ? Object.defineProperty(t, r, n) : t[r] = e[r]
							} return t.default = e, t
				}
			}(r(0)),
			a = n(r(14)),
			s = n(r(3)),
			o = n(r(16)),
			u = n(r(17));

		function n(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}

		function l(e) {
			return (l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" :
					typeof e
			})(e)
		}

		function c(e, t) {
			return !t || "object" !== l(t) && "function" != typeof t ? d(e) : t
		}

		function h(e) {
			return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
				return e.__proto__ || Object.getPrototypeOf(e)
			})(e)
		}

		function f(e, t) {
			return (f = Object.setPrototypeOf || function(e, t) {
				return e.__proto__ = t, e
			})(e, t)
		}

		function d(e) {
			if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return e
		}

		function p(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function v(e, t) {
			for (var r = 0; r < t.length; r++) {
				var n = t[r];
				n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(
					e, n.key, n)
			}
		}

		function y(e, t, r) {
			return t && v(e.prototype, t), r && v(e, r), e
		}
		var m = function(e) {
			function n(e) {
				var t;
				if (p(this, n), (t = c(this, h(n).call(this))).defaultParams = {
						audioContext: null,
						audioScriptProcessor: null,
						audioRate: 1,
						autoCenter: !0,
						backend: "WebAudio",
						barHeight: 1,
						barGap: null,
						container: null,
						cursorColor: "#333",
						cursorWidth: 1,
						dragSelection: !0,
						fillParent: !0,
						forceDecode: !1,
						height: 128,
						hideScrollbar: !1,
						interact: !0,
						loopSelection: !0,
						maxCanvasWidth: 4e3,
						mediaContainer: null,
						mediaControls: !1,
						mediaType: "audio",
						minPxPerSec: 20,
						normalize: !1,
						partialRender: !1,
						pixelRatio: window.devicePixelRatio || screen.deviceXDPI / screen.logicalXDPI,
						plugins: [],
						progressColor: "#555",
						removeMediaElementOnDestroy: !0,
						renderer: a.default,
						responsive: !1,
						scrollParent: !1,
						skipLength: 2,
						splitChannels: !1,
						waveColor: "#999",
						xhr: {}
					}, t.backends = {
						MediaElement: o.default,
						WebAudio: s.default
					}, t.util = i, t.params = i.extend({}, t.defaultParams, e), t.container = "string" == typeof e.container ?
					document.querySelector(t.params.container) : t.params.container, !t.container) throw new Error(
					"Container element not found");
				if (null == t.params.mediaContainer ? t.mediaContainer = t.container : "string" == typeof t.params.mediaContainer ?
					t.mediaContainer = document.querySelector(t.params.mediaContainer) : t.mediaContainer = t.params.mediaContainer,
					!t.mediaContainer) throw new Error("Media Container element not found");
				if (t.params.maxCanvasWidth <= 1) throw new Error("maxCanvasWidth must be greater than 1");
				if (t.params.maxCanvasWidth % 2 == 1) throw new Error("maxCanvasWidth must be an even number");
				if (t.savedVolume = 0, t.isMuted = !1, t.tmpEvents = [], t.currentAjax = null, t.arraybuffer = null, t.drawer =
					null, t.backend = null, t.peakCache = null, "function" != typeof t.params.renderer) throw new Error(
					"Renderer parameter is invalid");
				t.Drawer = t.params.renderer, t.Backend = t.backends[t.params.backend], t.initialisedPluginList = {}, t.isDestroyed = !
					1, t.isReady = !1;
				var r = 0;
				return t._onResize = i.debounce(function() {
					r == t.drawer.wrapper.clientWidth || t.params.scrollParent || (r = t.drawer.wrapper.clientWidth, t.drawer.fireEvent(
						"redraw"))
				}, "number" == typeof t.params.responsive ? t.params.responsive : 100), c(t, d(d(t)))
			}
			return function(e, t) {
				if ("function" != typeof t && null !== t) throw new TypeError(
					"Super expression must either be null or a function");
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						writable: !0,
						configurable: !0
					}
				}), t && f(e, t)
			}(n, i.Observer), y(n, null, [{
				key: "create",
				value: function(e) {
					return new n(e).init()
				}
			}]), y(n, [{
				key: "init",
				value: function() {
					return this.registerPlugins(this.params.plugins), this.createDrawer(), this.createBackend(), this.createPeakCache(),
						this
				}
			}, {
				key: "registerPlugins",
				value: function(e) {
					var t = this;
					return e.forEach(function(e) {
						return t.addPlugin(e)
					}), e.forEach(function(e) {
						e.deferInit || t.initPlugin(e.name)
					}), this.fireEvent("plugins-registered", e), this
				}
			}, {
				key: "addPlugin",
				value: function(t) {
					var r = this;
					if (!t.name) throw new Error("Plugin does not have a name!");
					if (!t.instance) throw new Error("Plugin ".concat(t.name, " does not have an instance property!"));
					t.staticProps && Object.keys(t.staticProps).forEach(function(e) {
						r[e] = t.staticProps[e]
					});
					var n = t.instance;
					return Object.getOwnPropertyNames(i.Observer.prototype).forEach(function(e) {
						n.prototype[e] = i.Observer.prototype[e]
					}), this[t.name] = new n(t.params || {}, this), this.fireEvent("plugin-added", t.name), this
				}
			}, {
				key: "initPlugin",
				value: function(e) {
					if (!this[e]) throw new Error("Plugin ".concat(e, " has not been added yet!"));
					return this.initialisedPluginList[e] && this.destroyPlugin(e), this[e].init(), this.initialisedPluginList[
						e] = !0, this.fireEvent("plugin-initialised", e), this
				}
			}, {
				key: "destroyPlugin",
				value: function(e) {
					if (!this[e]) throw new Error("Plugin ".concat(e, " has not been added yet and cannot be destroyed!"));
					if (!this.initialisedPluginList[e]) throw new Error("Plugin ".concat(e,
						" is not active and cannot be destroyed!"));
					if ("function" != typeof this[e].destroy) throw new Error("Plugin ".concat(e,
						" does not have a destroy function!"));
					return this[e].destroy(), delete this.initialisedPluginList[e], this.fireEvent("plugin-destroyed", e),
						this
				}
			}, {
				key: "destroyAllPlugins",
				value: function() {
					var t = this;
					Object.keys(this.initialisedPluginList).forEach(function(e) {
						return t.destroyPlugin(e)
					})
				}
			}, {
				key: "createDrawer",
				value: function() {
					var r = this;
					this.drawer = new this.Drawer(this.container, this.params), this.drawer.init(), this.fireEvent(
						"drawer-created", this.drawer), !1 !== this.params.responsive && (window.addEventListener("resize",
						this._onResize, !0), window.addEventListener("orientationchange", this._onResize, !0)), this.drawer.on(
						"redraw",
						function() {
							r.drawBuffer(), r.drawer.progress(r.backend.getPlayedPercents())
						}), this.drawer.on("click", function(e, t) {
						setTimeout(function() {
							return r.seekTo(t)
						}, 0)
					}), this.drawer.on("scroll", function(e) {
						r.params.partialRender && r.drawBuffer(), r.fireEvent("scroll", e)
					})
				}
			}, {
				key: "createBackend",
				value: function() {
					var t = this;
					this.backend && this.backend.destroy(), "AudioElement" == this.params.backend && (this.params.backend =
							"MediaElement"), "WebAudio" != this.params.backend || this.Backend.prototype.supportsWebAudio.call(null) ||
						(this.params.backend = "MediaElement"), this.backend = new this.Backend(this.params), this.backend.init(),
						this.fireEvent("backend-created", this.backend), this.backend.on("finish", function() {
							t.drawer.progress(t.backend.getPlayedPercents()), t.fireEvent("finish")
						}), this.backend.on("play", function() {
							return t.fireEvent("play")
						}), this.backend.on("pause", function() {
							return t.fireEvent("pause")
						}), this.backend.on("audioprocess", function(e) {
							t.drawer.progress(t.backend.getPlayedPercents()), t.fireEvent("audioprocess", e)
						})
				}
			}, {
				key: "createPeakCache",
				value: function() {
					this.params.partialRender && (this.peakCache = new u.default)
				}
			}, {
				key: "getDuration",
				value: function() {
					return this.backend.getDuration()
				}
			}, {
				key: "getCurrentTime",
				value: function() {
					return this.backend.getCurrentTime()
				}
			}, {
				key: "setCurrentTime",
				value: function(e) {
					e >= this.getDuration() ? this.seekTo(1) : this.seekTo(e / this.getDuration())
				}
			}, {
				key: "play",
				value: function(e, t) {
					var r = this;
					return this.fireEvent("interaction", function() {
						return r.play(e, t)
					}), this.backend.play(e, t)
				}
			}, {
				key: "pause",
				value: function() {
					if (!this.backend.isPaused()) return this.backend.pause()
				}
			}, {
				key: "playPause",
				value: function() {
					return this.backend.isPaused() ? this.play() : this.pause()
				}
			}, {
				key: "isPlaying",
				value: function() {
					return !this.backend.isPaused()
				}
			}, {
				key: "skipBackward",
				value: function(e) {
					this.skip(-e || -this.params.skipLength)
				}
			}, {
				key: "skipForward",
				value: function(e) {
					this.skip(e || this.params.skipLength)
				}
			}, {
				key: "skip",
				value: function(e) {
					var t = this.getDuration() || 1,
						r = this.getCurrentTime() || 0;
					r = Math.max(0, Math.min(t, r + (e || 0))), this.seekAndCenter(r / t)
				}
			}, {
				key: "seekAndCenter",
				value: function(e) {
					this.seekTo(e), this.drawer.recenter(e)
				}
			}, {
				key: "seekTo",
				value: function(e) {
					var t = this;
					if ("number" != typeof e || !isFinite(e) || e < 0 || 1 < e) return console.error(
						"Error calling wavesurfer.seekTo, parameter must be a number between 0 and 1!");
					this.fireEvent("interaction", function() {
						return t.seekTo(e)
					});
					var r = this.backend.isPaused();
					r || this.backend.pause();
					var n = this.params.scrollParent;
					this.params.scrollParent = !1, this.backend.seekTo(e * this.getDuration()), this.drawer.progress(e), r ||
						this.backend.play(), this.params.scrollParent = n, this.fireEvent("seek", e)
				}
			}, {
				key: "stop",
				value: function() {
					this.pause(), this.seekTo(0), this.drawer.progress(0)
				}
			}, {
				key: "setSinkId",
				value: function(e) {
					return this.backend.setSinkId(e)
				}
			}, {
				key: "setVolume",
				value: function(e) {
					this.backend.setVolume(e), this.fireEvent("volume", e)
				}
			}, {
				key: "getVolume",
				value: function() {
					return this.backend.getVolume()
				}
			}, {
				key: "setPlaybackRate",
				value: function(e) {
					this.backend.setPlaybackRate(e)
				}
			}, {
				key: "getPlaybackRate",
				value: function() {
					return this.backend.getPlaybackRate()
				}
			}, {
				key: "toggleMute",
				value: function() {
					this.setMute(!this.isMuted)
				}
			}, {
				key: "setMute",
				value: function(e) {
					e !== this.isMuted && (e ? (this.savedVolume = this.backend.getVolume(), this.backend.setVolume(0), this.isMuted = !
						0, this.fireEvent("volume", 0)) : (this.backend.setVolume(this.savedVolume), this.isMuted = !1, this.fireEvent(
						"volume", this.savedVolume))), this.fireEvent("mute", this.isMuted)
				}
			}, {
				key: "getMute",
				value: function() {
					return this.isMuted
				}
			}, {
				key: "isReady",
				value: function() {
					return this.isReady
				}
			}, {
				key: "getFilters",
				value: function() {
					return this.backend.filters || []
				}
			}, {
				key: "toggleScroll",
				value: function() {
					this.params.scrollParent = !this.params.scrollParent, this.drawBuffer()
				}
			}, {
				key: "toggleInteraction",
				value: function() {
					this.params.interact = !this.params.interact
				}
			}, {
				key: "getWaveColor",
				value: function() {
					return this.params.waveColor
				}
			}, {
				key: "setWaveColor",
				value: function(e) {
					this.params.waveColor = e, this.drawBuffer()
				}
			}, {
				key: "getProgressColor",
				value: function() {
					return this.params.progressColor
				}
			}, {
				key: "setProgressColor",
				value: function(e) {
					this.params.progressColor = e, this.drawBuffer()
				}
			}, {
				key: "getCursorColor",
				value: function() {
					return this.params.cursorColor
				}
			}, {
				key: "setCursorColor",
				value: function(e) {
					this.params.cursorColor = e, this.drawer.updateCursor()
				}
			}, {
				key: "getHeight",
				value: function() {
					return this.params.height
				}
			}, {
				key: "setHeight",
				value: function(e) {
					this.params.height = e, this.drawer.setHeight(e * this.params.pixelRatio), this.drawBuffer()
				}
			}, {
				key: "drawBuffer",
				value: function() {
					var e, t = Math.round(this.getDuration() * this.params.minPxPerSec * this.params.pixelRatio),
						r = this.drawer.getWidth(),
						n = t,
						i = this.drawer.getScrollX(),
						a = Math.max(i + r, n);
					if (this.params.fillParent && (!this.params.scrollParent || t < r) && (i = 0, a = n = r), this.params.partialRender) {
						var s, o = this.peakCache.addRangeToPeakCache(n, i, a);
						for (s = 0; s < o.length; s++) e = this.backend.getPeaks(n, o[s][0], o[s][1]), this.drawer.drawPeaks(e,
							n, o[s][0], o[s][1])
					} else e = this.backend.getPeaks(n, i, a), this.drawer.drawPeaks(e, n, i, a);
					this.fireEvent("redraw", e, n)
				}
			}, {
				key: "zoom",
				value: function(e) {
					this.params.scrollParent = e ? (this.params.minPxPerSec = e, !0) : (this.params.minPxPerSec = this.defaultParams
							.minPxPerSec, !1), this.drawBuffer(), this.drawer.progress(this.backend.getPlayedPercents()), this.drawer
						.recenter(this.getCurrentTime() / this.getDuration()), this.fireEvent("zoom", e)
				}
			}, {
				key: "loadArrayBuffer",
				value: function(e) {
					var t = this;
					this.decodeArrayBuffer(e, function(e) {
						t.isDestroyed || t.loadDecodedBuffer(e)
					})
				}
			}, {
				key: "loadDecodedBuffer",
				value: function(e) {
					this.backend.load(e), this.drawBuffer(), this.fireEvent("ready"), this.isReady = !0
				}
			}, {
				key: "loadBlob",
				value: function(e) {
					var t = this,
						r = new FileReader;
					r.addEventListener("progress", function(e) {
						return t.onProgress(e)
					}), r.addEventListener("load", function(e) {
						return t.loadArrayBuffer(e.target.result)
					}), r.addEventListener("error", function() {
						return t.fireEvent("error", "Error reading file")
					}), r.readAsArrayBuffer(e), this.empty()
				}
			}, {
				key: "load",
				value: function(e, t, r, n) {
					if (this.empty(), r) {
						var i = {
								"Preload is not 'auto', 'none' or 'metadata'": -1 === ["auto", "metadata", "none"].indexOf(r),
								"Peaks are not provided": !t,
								"Backend is not of type MediaElement": "MediaElement" !== this.params.backend,
								"Url is not of type string": "string" != typeof e
							},
							a = Object.keys(i).filter(function(e) {
								return i[e]
							});
						a.length && (console.warn("Preload parameter of wavesurfer.load will be ignored because:\n\t- " + a.join(
							"\n\t- ")), r = null)
					}
					switch (this.params.backend) {
						case "WebAudio":
							return this.loadBuffer(e, t, n);
						case "MediaElement":
							return this.loadMediaElement(e, t, r, n)
					}
				}
			}, {
				key: "loadBuffer",
				value: function(t, e, r) {
					var n = this,
						i = function(e) {
							return e && n.tmpEvents.push(n.once("ready", e)), n.getArrayBuffer(t, function(e) {
								return n.loadArrayBuffer(e)
							})
						};
					if (!e) return i();
					this.backend.setPeaks(e, r), this.drawBuffer(), this.tmpEvents.push(this.once("interaction", i))
				}
			}, {
				key: "loadMediaElement",
				value: function(e, t, r, n) {
					var i = this,
						a = e;
					if ("string" == typeof e) this.backend.load(a, this.mediaContainer, t, r);
					else {
						var s = e;
						this.backend.loadElt(s, t), a = s.src
					}
					this.tmpEvents.push(this.backend.once("canplay", function() {
							i.drawBuffer(), i.fireEvent("ready"), i.isReady = !0
						}), this.backend.once("error", function(e) {
							return i.fireEvent("error", e)
						})), t && this.backend.setPeaks(t, n), t && !this.params.forceDecode || !this.backend.supportsWebAudio() ||
						this.getArrayBuffer(a, function(e) {
							i.decodeArrayBuffer(e, function(e) {
								i.backend.buffer = e, i.backend.setPeaks(null), i.drawBuffer(), i.fireEvent("waveform-ready")
							})
						})
				}
			}, {
				key: "decodeArrayBuffer",
				value: function(t, r) {
					var n = this;
					this.arraybuffer = t, this.backend.decodeArrayBuffer(t, function(e) {
						n.isDestroyed || n.arraybuffer != t || (r(e), n.arraybuffer = null)
					}, function() {
						return n.fireEvent("error", "Error decoding audiobuffer")
					})
				}
			}, {
				key: "getArrayBuffer",
				value: function(e, r) {
					var n = this,
						t = i.ajax({
							url: e,
							responseType: "arraybuffer",
							xhr: this.params.xhr
						});
					return this.currentAjax = t, this.tmpEvents.push(t.on("progress", function(e) {
						n.onProgress(e)
					}), t.on("success", function(e, t) {
						r(e), n.currentAjax = null
					}), t.on("error", function(e) {
						n.fireEvent("error", "XHR error: " + e.target.statusText), n.currentAjax = null
					})), t
				}
			}, {
				key: "onProgress",
				value: function(e) {
					var t;
					t = e.lengthComputable ? e.loaded / e.total : e.loaded / (e.loaded + 1e6), this.fireEvent("loading", Math
						.round(100 * t), e.target)
				}
			}, {
				key: "exportPCM",
				value: function(e, t, r, n) {
					e = e || 1024, n = n || 0, t = t || 1e4, r = r || !1;
					var i = this.backend.getPeaks(e, n),
						a = [].map.call(i, function(e) {
							return Math.round(e * t) / t
						}),
						s = JSON.stringify(a);
					return r || window.open("data:application/json;charset=utf-8," + encodeURIComponent(s)), s
				}
			}, {
				key: "exportImage",
				value: function(e, t) {
					return e || (e = "image/png"), t || (t = 1), this.drawer.getImage(e, t)
				}
			}, {
				key: "cancelAjax",
				value: function() {
					this.currentAjax && (this.currentAjax.xhr.abort(), this.currentAjax = null)
				}
			}, {
				key: "clearTmpEvents",
				value: function() {
					this.tmpEvents.forEach(function(e) {
						return e.un()
					})
				}
			}, {
				key: "empty",
				value: function() {
					this.backend.isPaused() || (this.stop(), this.backend.disconnectSource()), this.isReady = !1, this.cancelAjax(),
						this.clearTmpEvents(), this.drawer.progress(0), this.drawer.setWidth(0), this.drawer.drawPeaks({
							length: this.drawer.getWidth()
						}, 0)
				}
			}, {
				key: "destroy",
				value: function() {
					this.destroyAllPlugins(), this.fireEvent("destroy"), this.cancelAjax(), this.clearTmpEvents(), this.unAll(),
						!1 !== this.params.responsive && (window.removeEventListener("resize", this._onResize, !0), window.removeEventListener(
							"orientationchange", this._onResize, !0)), this.backend.destroy(), this.drawer.destroy(), this.isDestroyed = !
						0, this.isReady = !1, this.arraybuffer = null
				}
			}]), n
		}();
		(t.default = m).VERSION = "2.1.3", m.util = i, e.exports = t.default
	}, function(e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = function(e) {
			var t = new i.default,
				r = new XMLHttpRequest,
				n = !1;
			r.open(e.method || "GET", e.url, !0), r.responseType = e.responseType || "json", e.xhr && (e.xhr.requestHeaders &&
				e.xhr.requestHeaders.forEach(function(e) {
					r.setRequestHeader(e.key, e.value)
				}), e.xhr.withCredentials && (r.withCredentials = !0));
			return r.addEventListener("progress", function(e) {
				t.fireEvent("progress", e), e.lengthComputable && e.loaded == e.total && (n = !0)
			}), r.addEventListener("load", function(e) {
				n || t.fireEvent("progress", e), t.fireEvent("load", e), 200 == r.status || 206 == r.status ? t.fireEvent(
					"success", r.response, e) : t.fireEvent("error", e)
			}), r.addEventListener("error", function(e) {
				return t.fireEvent("error", e)
			}), r.send(), t.xhr = r, t
		};
		var n, i = (n = r(1)) && n.__esModule ? n : {
			default: n
		};
		e.exports = t.default
	}, function(e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = function() {
			return "wavesurfer_" + Math.random().toString(32).substring(2)
		}, e.exports = t.default
	}, function(e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = function(t) {
			var r = -1 / 0;
			return Object.keys(t).forEach(function(e) {
				t[e] > r && (r = t[e])
			}), r
		}, e.exports = t.default
	}, function(e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = function(t) {
			var r = Number(1 / 0);
			return Object.keys(t).forEach(function(e) {
				t[e] < r && (r = t[e])
			}), r
		}, e.exports = t.default
	}, function(e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = function(r) {
			for (var e = arguments.length, t = new Array(1 < e ? e - 1 : 0), n = 1; n < e; n++) t[n - 1] = arguments[n];
			return t.forEach(function(t) {
				Object.keys(t).forEach(function(e) {
					r[e] = t[e]
				})
			}), r
		}, e.exports = t.default
	}, function(e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = function(t, r) {
			return Object.keys(r).forEach(function(e) {
				t.style[e] !== r[e] && (t.style[e] = r[e])
			}), t
		}, e.exports = t.default
	}, function(e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = function(n) {
			return function() {
				for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
				return (0, i.default)(function() {
					return n.apply(void 0, t)
				})
			}
		};
		var n, i = (n = r(2)) && n.__esModule ? n : {
			default: n
		};
		e.exports = t.default
	}, function(e, t) {
		function r(t, r, n) {
			var i, a, s, o, u;

			function l() {
				var e = Date.now() - o;
				e < r && 0 <= e ? i = setTimeout(l, r - e) : (i = null, n || (u = t.apply(s, a), s = a = null))
			}
			null == r && (r = 100);
			var e = function() {
				s = this, a = arguments, o = Date.now();
				var e = n && !i;
				return i || (i = setTimeout(l, r)), e && (u = t.apply(s, a), s = a = null), u
			};
			return e.clear = function() {
				i && (clearTimeout(i), i = null)
			}, e.flush = function() {
				i && (u = t.apply(s, a), s = a = null, clearTimeout(i), i = null)
			}, e
		}
		r.debounce = r, e.exports = r
	}, function(e, t, r) {
		"use strict";

		function n(e) {
			e.stopPropagation(), document.body.removeEventListener("click", n, !0)
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = function(e) {
			document.body.addEventListener("click", n, !0)
		}, e.exports = t.default
	}, function(e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = void 0;
		var n, a = (n = r(15)) && n.__esModule ? n : {
				default: n
			},
			f = function(e) {
				{
					if (e && e.__esModule) return e;
					var t = {};
					if (null != e)
						for (var r in e)
							if (Object.prototype.hasOwnProperty.call(e, r)) {
								var n = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, r) : {};
								n.get || n.set ? Object.defineProperty(t, r, n) : t[r] = e[r]
							} return t.default = e, t
				}
			}(r(0));

		function i(e) {
			return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" :
					typeof e
			})(e)
		}

		function s(e, t) {
			for (var r = 0; r < t.length; r++) {
				var n = t[r];
				n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(
					e, n.key, n)
			}
		}

		function o(e, t) {
			return !t || "object" !== i(t) && "function" != typeof t ? function(e) {
				if (void 0 !== e) return e;
				throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
			}(e) : t
		}

		function u(e) {
			return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
				return e.__proto__ || Object.getPrototypeOf(e)
			})(e)
		}

		function l(e, t) {
			return (l = Object.setPrototypeOf || function(e, t) {
				return e.__proto__ = t, e
			})(e, t)
		}
		var c = function(e) {
			function n(e, t) {
				var r;
				return function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, n), (r = o(this, u(n).call(this, e, t))).maxCanvasWidth = t.maxCanvasWidth, r.maxCanvasElementWidth =
					Math.round(t.maxCanvasWidth / t.pixelRatio), r.hasProgressCanvas = t.waveColor != t.progressColor, r.halfPixel =
					.5 / t.pixelRatio, r.canvases = [], r.progressWave = null, r
			}
			var t, r, i;
			return function(e, t) {
				if ("function" != typeof t && null !== t) throw new TypeError(
					"Super expression must either be null or a function");
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						writable: !0,
						configurable: !0
					}
				}), t && l(e, t)
			}(n, a.default), t = n, (r = [{
				key: "init",
				value: function() {
					this.createWrapper(), this.createElements()
				}
			}, {
				key: "createElements",
				value: function() {
					this.progressWave = this.wrapper.appendChild(this.style(document.createElement("wave"), {
						position: "absolute",
						zIndex: 3,
						left: 0,
						top: 0,
						bottom: 0,
						overflow: "hidden",
						width: "0",
						display: "none",
						boxSizing: "border-box",
						borderRightStyle: "solid",
						pointerEvents: "none"
					})), this.addCanvas(), this.updateCursor()
				}
			}, {
				key: "updateCursor",
				value: function() {
					this.style(this.progressWave, {
						borderRightWidth: this.params.cursorWidth + "px",
						borderRightColor: this.params.cursorColor
					})
				}
			}, {
				key: "updateSize",
				value: function() {
					for (var n = this, e = Math.round(this.width / this.params.pixelRatio), t = Math.ceil(e / this.maxCanvasElementWidth); this
						.canvases.length < t;) this.addCanvas();
					for (; this.canvases.length > t;) this.removeCanvas();
					this.canvases.forEach(function(e, t) {
						var r = n.maxCanvasWidth + 2 * Math.ceil(n.params.pixelRatio / 2);
						t == n.canvases.length - 1 && (r = n.width - n.maxCanvasWidth * (n.canvases.length - 1)), n.updateDimensions(
							e, r, n.height), n.clearWaveForEntry(e)
					})
				}
			}, {
				key: "addCanvas",
				value: function() {
					var e = {},
						t = this.maxCanvasElementWidth * this.canvases.length;
					e.wave = this.wrapper.appendChild(this.style(document.createElement("canvas"), {
						position: "absolute",
						zIndex: 2,
						left: t + "px",
						top: 0,
						bottom: 0,
						height: "100%",
						pointerEvents: "none"
					})), e.waveCtx = e.wave.getContext("2d"), this.hasProgressCanvas && (e.progress = this.progressWave.appendChild(
						this.style(document.createElement("canvas"), {
							position: "absolute",
							left: t + "px",
							top: 0,
							bottom: 0,
							height: "100%"
						})), e.progressCtx = e.progress.getContext("2d")), this.canvases.push(e)
				}
			}, {
				key: "removeCanvas",
				value: function() {
					var e = this.canvases.pop();
					e.wave.parentElement.removeChild(e.wave), this.hasProgressCanvas && e.progress.parentElement.removeChild(
						e.progress)
				}
			}, {
				key: "updateDimensions",
				value: function(e, t, r) {
					var n = Math.round(t / this.params.pixelRatio),
						i = Math.round(this.width / this.params.pixelRatio);
					e.start = e.waveCtx.canvas.offsetLeft / i || 0, e.end = e.start + n / i, e.waveCtx.canvas.width = t, e.waveCtx
						.canvas.height = r, this.style(e.waveCtx.canvas, {
							width: n + "px"
						}), this.style(this.progressWave, {
							display: "block"
						}), this.hasProgressCanvas && (e.progressCtx.canvas.width = t, e.progressCtx.canvas.height = r, this.style(
							e.progressCtx.canvas, {
								width: n + "px"
							}))
				}
			}, {
				key: "clearWave",
				value: function() {
					var t = this;
					this.canvases.forEach(function(e) {
						return t.clearWaveForEntry(e)
					})
				}
			}, {
				key: "clearWaveForEntry",
				value: function(e) {
					e.waveCtx.clearRect(0, 0, e.waveCtx.canvas.width, e.waveCtx.canvas.height), this.hasProgressCanvas && e.progressCtx
						.clearRect(0, 0, e.progressCtx.canvas.width, e.progressCtx.canvas.height)
				}
			}, {
				key: "drawBars",
				value: function(e, t, v, y) {
					var m = this;
					return this.prepareDraw(e, t, v, y, function(e) {
						var t = e.absmax,
							r = e.hasMinVals,
							n = (e.height, e.offsetY),
							i = e.halfH,
							a = e.peaks;
						if (void 0 !== v) {
							var s, o = r ? 2 : 1,
								u = a.length / o,
								l = m.params.barWidth * m.params.pixelRatio,
								c = l + (null === m.params.barGap ? Math.max(m.params.pixelRatio, ~~(l / 2)) : Math.max(m.params.pixelRatio,
									m.params.barGap * m.params.pixelRatio)),
								h = u / m.width,
								f = y;
							for (s = v; s < f; s += c) {
								var d = a[Math.floor(s * h * o)] || 0,
									p = Math.round(d / t * i);
								m.fillRect(s + m.halfPixel, i - p + n, l + m.halfPixel, 2 * p)
							}
						}
					})
				}
			}, {
				key: "drawWave",
				value: function(e, t, l, c) {
					var h = this;
					return this.prepareDraw(e, t, l, c, function(e) {
						var t = e.absmax,
							r = e.hasMinVals,
							n = (e.height, e.offsetY),
							i = e.halfH,
							a = e.peaks;
						if (!r) {
							var s, o = [],
								u = a.length;
							for (s = 0; s < u; s++) o[2 * s] = a[s], o[2 * s + 1] = -a[s];
							a = o
						}
						void 0 !== l && h.drawLine(a, t, i, n, l, c), h.fillRect(0, i + n - h.halfPixel, h.width, h.halfPixel)
					})
				}
			}, {
				key: "drawLine",
				value: function(t, r, n, i, a, s) {
					var o = this;
					this.canvases.forEach(function(e) {
						o.setFillStyles(e), o.drawLineToContext(e, e.waveCtx, t, r, n, i, a, s), o.drawLineToContext(e, e.progressCtx,
							t, r, n, i, a, s)
					})
				}
			}, {
				key: "drawLineToContext",
				value: function(e, t, r, n, i, a, s, o) {
					if (t) {
						var u = r.length / 2,
							l = this.params.fillParent && this.width != u ? this.width / u : 1,
							c = Math.round(u * e.start),
							h = Math.round(u * e.end) + 1;
						if (!(o < c || h < s)) {
							var f, d, p = Math.min(c, s),
								v = Math.max(h, o);
							for (t.beginPath(), t.moveTo((p - c) * l + this.halfPixel, i + a), f = p; f < v; f++) {
								var y = r[2 * f] || 0,
									m = Math.round(y / n * i);
								t.lineTo((f - c) * l + this.halfPixel, i - m + a)
							}
							for (d = v - 1; p <= d; d--) {
								var b = r[2 * d + 1] || 0,
									g = Math.round(b / n * i);
								t.lineTo((d - c) * l + this.halfPixel, i - g + a)
							}
							t.closePath(), t.fill()
						}
					}
				}
			}, {
				key: "fillRect",
				value: function(e, t, r, n) {
					var i, a = Math.floor(e / this.maxCanvasWidth),
						s = Math.min(Math.ceil((e + r) / this.maxCanvasWidth) + 1, this.canvases.length);
					for (i = a; i < s; i++) {
						var o = this.canvases[i],
							u = i * this.maxCanvasWidth,
							l = {
								x1: Math.max(e, i * this.maxCanvasWidth),
								y1: t,
								x2: Math.min(e + r, i * this.maxCanvasWidth + o.waveCtx.canvas.width),
								y2: t + n
							};
						l.x1 < l.x2 && (this.setFillStyles(o), this.fillRectToContext(o.waveCtx, l.x1 - u, l.y1, l.x2 - l.x1, l.y2 -
							l.y1), this.fillRectToContext(o.progressCtx, l.x1 - u, l.y1, l.x2 - l.x1, l.y2 - l.y1))
					}
				}
			}, {
				key: "prepareDraw",
				value: function(s, o, u, l, c) {
					var h = this;
					return f.frame(function() {
						if (s[0] instanceof Array) {
							var e = s;
							if (h.params.splitChannels) return h.setHeight(e.length * h.params.height * h.params.pixelRatio), e.forEach(
								function(e, t) {
									return h.prepareDraw(e, t, u, l, c)
								});
							s = e[0]
						}
						var t = 1 / h.params.barHeight;
						if (h.params.normalize) {
							var r = f.max(s),
								n = f.min(s);
							t = r < -n ? -n : r
						}
						var i = [].some.call(s, function(e) {
								return e < 0
							}),
							a = h.params.height * h.params.pixelRatio;
						return c({
							absmax: t,
							hasMinVals: i,
							height: a,
							offsetY: a * o || 0,
							halfH: a / 2,
							peaks: s
						})
					})()
				}
			}, {
				key: "fillRectToContext",
				value: function(e, t, r, n, i) {
					e && e.fillRect(t, r, n, i)
				}
			}, {
				key: "setFillStyles",
				value: function(e) {
					e.waveCtx.fillStyle = this.params.waveColor, this.hasProgressCanvas && (e.progressCtx.fillStyle = this.params
						.progressColor)
				}
			}, {
				key: "getImage",
				value: function(t, r) {
					var e = this.canvases.map(function(e) {
						return e.wave.toDataURL(t, r)
					});
					return 1 < e.length ? e : e[0]
				}
			}, {
				key: "updateProgress",
				value: function(e) {
					this.style(this.progressWave, {
						width: e + "px"
					})
				}
			}]) && s(t.prototype, r), i && s(t, i), n
		}();
		t.default = c, e.exports = t.default
	}, function(e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = void 0;
		var a = function(e) {
			{
				if (e && e.__esModule) return e;
				var t = {};
				if (null != e)
					for (var r in e)
						if (Object.prototype.hasOwnProperty.call(e, r)) {
							var n = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, r) : {};
							n.get || n.set ? Object.defineProperty(t, r, n) : t[r] = e[r]
						} return t.default = e, t
			}
		}(r(0));

		function n(e) {
			return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" :
					typeof e
			})(e)
		}

		function s(e, t) {
			for (var r = 0; r < t.length; r++) {
				var n = t[r];
				n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(
					e, n.key, n)
			}
		}

		function o(e, t) {
			return !t || "object" !== n(t) && "function" != typeof t ? function(e) {
				if (void 0 !== e) return e;
				throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
			}(e) : t
		}

		function u(e) {
			return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
				return e.__proto__ || Object.getPrototypeOf(e)
			})(e)
		}

		function l(e, t) {
			return (l = Object.setPrototypeOf || function(e, t) {
				return e.__proto__ = t, e
			})(e, t)
		}
		var i = function(e) {
			function n(e, t) {
				var r;
				return function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, n), (r = o(this, u(n).call(this))).container = e, r.params = t, r.width = 0, r.height = t.height * r.params
					.pixelRatio, r.lastPos = 0, r.wrapper = null, r
			}
			var t, r, i;
			return function(e, t) {
				if ("function" != typeof t && null !== t) throw new TypeError(
					"Super expression must either be null or a function");
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						writable: !0,
						configurable: !0
					}
				}), t && l(e, t)
			}(n, a.Observer), t = n, (r = [{
				key: "style",
				value: function(e, t) {
					return a.style(e, t)
				}
			}, {
				key: "createWrapper",
				value: function() {
					this.wrapper = this.container.appendChild(document.createElement("wave")), this.style(this.wrapper, {
						display: "block",
						position: "relative",
						userSelect: "none",
						webkitUserSelect: "none",
						height: this.params.height + "px"
					}), (this.params.fillParent || this.params.scrollParent) && this.style(this.wrapper, {
						width: "100%",
						overflowX: this.params.hideScrollbar ? "hidden" : "auto",
						overflowY: "hidden"
					}), this.setupWrapperEvents()
				}
			}, {
				key: "handleEvent",
				value: function(e, t) {
					!t && e.preventDefault();
					var r, n = e.targetTouches ? e.targetTouches[0].clientX : e.clientX,
						i = this.wrapper.getBoundingClientRect(),
						a = this.width,
						s = this.getWidth();
					return !this.params.fillParent && a < s ? 1 < (r = (n - i.left) * (this.params.pixelRatio / a) || 0) && (
						r = 1) : r = (n - i.left + this.wrapper.scrollLeft) / this.wrapper.scrollWidth || 0, r
				}
			}, {
				key: "setupWrapperEvents",
				value: function() {
					var n = this;
					this.wrapper.addEventListener("click", function(e) {
						var t = n.wrapper.offsetHeight - n.wrapper.clientHeight;
						if (0 != t) {
							var r = n.wrapper.getBoundingClientRect();
							if (e.clientY >= r.bottom - t) return
						}
						n.params.interact && n.fireEvent("click", e, n.handleEvent(e))
					}), this.wrapper.addEventListener("scroll", function(e) {
						return n.fireEvent("scroll", e)
					})
				}
			}, {
				key: "drawPeaks",
				value: function(e, t, r, n) {
					this.setWidth(t) || this.clearWave(), this.params.barWidth ? this.drawBars(e, 0, r, n) : this.drawWave(e,
						0, r, n)
				}
			}, {
				key: "resetScroll",
				value: function() {
					null !== this.wrapper && (this.wrapper.scrollLeft = 0)
				}
			}, {
				key: "recenter",
				value: function(e) {
					var t = this.wrapper.scrollWidth * e;
					this.recenterOnPosition(t, !0)
				}
			}, {
				key: "recenterOnPosition",
				value: function(e, t) {
					var r = this.wrapper.scrollLeft,
						n = ~~(this.wrapper.clientWidth / 2),
						i = this.wrapper.scrollWidth - this.wrapper.clientWidth,
						a = e - n,
						s = a - r;
					if (0 != i) {
						if (!t && -n <= s && s < n) {
							a = r + (s = Math.max(-5, Math.min(5, s)))
						}(a = Math.max(0, Math.min(i, a))) != r && (this.wrapper.scrollLeft = a)
					}
				}
			}, {
				key: "getScrollX",
				value: function() {
					var e = this.params.pixelRatio,
						t = Math.round(this.wrapper.scrollLeft * e);
					if (this.params.scrollParent) {
						var r = ~~(this.wrapper.scrollWidth * e - this.getWidth());
						t = Math.min(r, Math.max(0, t))
					}
					return t
				}
			}, {
				key: "getWidth",
				value: function() {
					return Math.round(this.container.clientWidth * this.params.pixelRatio)
				}
			}, {
				key: "setWidth",
				value: function(e) {
					return this.width != e && (this.width = e, this.params.fillParent || this.params.scrollParent ? this.style(
						this.wrapper, {
							width: ""
						}) : this.style(this.wrapper, {
						width: ~~(this.width / this.params.pixelRatio) + "px"
					}), this.updateSize(), !0)
				}
			}, {
				key: "setHeight",
				value: function(e) {
					return e != this.height && (this.height = e, this.style(this.wrapper, {
						height: ~~(this.height / this.params.pixelRatio) + "px"
					}), this.updateSize(), !0)
				}
			}, {
				key: "progress",
				value: function(e) {
					var t = 1 / this.params.pixelRatio,
						r = Math.round(e * this.width) * t;
					if (r < this.lastPos || r - this.lastPos >= t) {
						if (this.lastPos = r, this.params.scrollParent && this.params.autoCenter) {
							var n = ~~(this.wrapper.scrollWidth * e);
							this.recenterOnPosition(n)
						}
						this.updateProgress(r)
					}
				}
			}, {
				key: "destroy",
				value: function() {
					this.unAll(), this.wrapper && (this.wrapper.parentNode == this.container && this.container.removeChild(
						this.wrapper), this.wrapper = null)
				}
			}, {
				key: "updateCursor",
				value: function() {}
			}, {
				key: "updateSize",
				value: function() {}
			}, {
				key: "drawBars",
				value: function(e, t, r, n) {}
			}, {
				key: "drawWave",
				value: function(e, t, r, n) {}
			}, {
				key: "clearWave",
				value: function() {}
			}, {
				key: "updateProgress",
				value: function(e) {}
			}]) && s(t.prototype, r), i && s(t, i), n
		}();
		t.default = i, e.exports = t.default
	}, function(e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = void 0;
		var n, a = (n = r(3)) && n.__esModule ? n : {
			default: n
		};
		! function(e) {
			{
				if (e && e.__esModule) return;
				var t = {};
				if (null != e)
					for (var r in e)
						if (Object.prototype.hasOwnProperty.call(e, r)) {
							var n = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, r) : {};
							n.get || n.set ? Object.defineProperty(t, r, n) : t[r] = e[r]
						} t.default = e
			}
		}(r(0));

		function i(e) {
			return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" :
					typeof e
			})(e)
		}

		function s(e, t) {
			for (var r = 0; r < t.length; r++) {
				var n = t[r];
				n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(
					e, n.key, n)
			}
		}

		function o(e, t) {
			return !t || "object" !== i(t) && "function" != typeof t ? function(e) {
				if (void 0 !== e) return e;
				throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
			}(e) : t
		}

		function u(e, t, r) {
			return (u = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, r) {
				var n = function(e, t) {
					for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = l(e)););
					return e
				}(e, t);
				if (n) {
					var i = Object.getOwnPropertyDescriptor(n, t);
					return i.get ? i.get.call(r) : i.value
				}
			})(e, t, r || e)
		}

		function l(e) {
			return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
				return e.__proto__ || Object.getPrototypeOf(e)
			})(e)
		}

		function c(e, t) {
			return (c = Object.setPrototypeOf || function(e, t) {
				return e.__proto__ = t, e
			})(e, t)
		}
		var h = function(e) {
			function n(e) {
				var t;
				return function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, n), (t = o(this, l(n).call(this, e))).params = e, t.media = {
						currentTime: 0,
						duration: 0,
						paused: !0,
						playbackRate: 1,
						play: function() {},
						pause: function() {},
						volume: 0
					}, t.mediaType = e.mediaType.toLowerCase(), t.elementPosition = e.elementPosition, t.peaks = null, t.playbackRate =
					1, t.volume = 1, t.buffer = null, t.onPlayEnd = null, t
			}
			var t, r, i;
			return function(e, t) {
				if ("function" != typeof t && null !== t) throw new TypeError(
					"Super expression must either be null or a function");
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						writable: !0,
						configurable: !0
					}
				}), t && c(e, t)
			}(n, a.default), t = n, (r = [{
				key: "init",
				value: function() {
					this.setPlaybackRate(this.params.audioRate), this.createTimer()
				}
			}, {
				key: "createTimer",
				value: function() {
					var t = this;
					this.on("play", function e() {
						t.isPaused() || (t.fireEvent("audioprocess", t.getCurrentTime()), (window.requestAnimationFrame ||
							window.webkitRequestAnimationFrame)(e))
					}), this.on("pause", function() {
						t.fireEvent("audioprocess", t.getCurrentTime())
					})
				}
			}, {
				key: "load",
				value: function(e, t, r, n) {
					var i = document.createElement(this.mediaType);
					i.controls = this.params.mediaControls, i.autoplay = this.params.autoplay || !1, i.preload = null == n ?
						"auto" : n, i.src = e, i.style.width = "100%";
					var a = t.querySelector(this.mediaType);
					a && t.removeChild(a), t.appendChild(i), this._load(i, r)
				}
			}, {
				key: "loadElt",
				value: function(e, t) {
					e.controls = this.params.mediaControls, e.autoplay = this.params.autoplay || !1, this._load(e, t)
				}
			}, {
				key: "_load",
				value: function(e, t) {
					var r = this;
					"function" == typeof e.load && e.load(), e.addEventListener("error", function() {
						r.fireEvent("error", "Error loading media element")
					}), e.addEventListener("canplay", function() {
						r.fireEvent("canplay")
					}), e.addEventListener("ended", function() {
						r.fireEvent("finish")
					}), e.addEventListener("play", function() {
						r.fireEvent("play")
					}), e.addEventListener("pause", function() {
						r.fireEvent("pause")
					}), this.media = e, this.peaks = t, this.onPlayEnd = null, this.buffer = null, this.setPlaybackRate(this
						.playbackRate), this.setVolume(this.volume)
				}
			}, {
				key: "isPaused",
				value: function() {
					return !this.media || this.media.paused
				}
			}, {
				key: "getDuration",
				value: function() {
					if (this.explicitDuration) return this.explicitDuration;
					var e = (this.buffer || this.media).duration;
					return 1 / 0 <= e && (e = this.media.seekable.end(0)), e
				}
			}, {
				key: "getCurrentTime",
				value: function() {
					return this.media && this.media.currentTime
				}
			}, {
				key: "getPlayedPercents",
				value: function() {
					return this.getCurrentTime() / this.getDuration() || 0
				}
			}, {
				key: "getPlaybackRate",
				value: function() {
					return this.playbackRate || this.media.playbackRate
				}
			}, {
				key: "setPlaybackRate",
				value: function(e) {
					this.playbackRate = e || 1, this.media.playbackRate = this.playbackRate
				}
			}, {
				key: "seekTo",
				value: function(e) {
					null != e && (this.media.currentTime = e), this.clearPlayEnd()
				}
			}, {
				key: "play",
				value: function(e, t) {
					this.seekTo(e);
					var r = this.media.play();
					return t && this.setPlayEnd(t), r
				}
			}, {
				key: "pause",
				value: function() {
					var e;
					return this.media && (e = this.media.pause()), this.clearPlayEnd(), e
				}
			}, {
				key: "setPlayEnd",
				value: function(t) {
					var r = this;
					this._onPlayEnd = function(e) {
						t <= e && (r.pause(), r.seekTo(t))
					}, this.on("audioprocess", this._onPlayEnd)
				}
			}, {
				key: "clearPlayEnd",
				value: function() {
					this._onPlayEnd && (this.un("audioprocess", this._onPlayEnd), this._onPlayEnd = null)
				}
			}, {
				key: "getPeaks",
				value: function(e, t, r) {
					return this.buffer ? u(l(n.prototype), "getPeaks", this).call(this, e, t, r) : this.peaks || []
				}
			}, {
				key: "setSinkId",
				value: function(e) {
					return e ? this.media.setSinkId ? this.media.setSinkId(e) : Promise.reject(new Error(
						"setSinkId is not supported in your browser")) : Promise.reject(new Error("Invalid deviceId: " + e))
				}
			}, {
				key: "getVolume",
				value: function() {
					return this.volume || this.media.volume
				}
			}, {
				key: "setVolume",
				value: function(e) {
					this.volume = e, this.media.volume = this.volume
				}
			}, {
				key: "destroy",
				value: function() {
					this.pause(), this.unAll(), this.params.removeMediaElementOnDestroy && this.media && this.media.parentNode &&
						this.media.parentNode.removeChild(this.media), this.media = null
				}
			}]) && s(t.prototype, r), i && s(t, i), n
		}();
		t.default = h, e.exports = t.default
	}, function(e, t, r) {
		"use strict";

		function i(e, t) {
			for (var r = 0; r < t.length; r++) {
				var n = t[r];
				n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(
					e, n.key, n)
			}
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = void 0;
		var n = function() {
			function e() {
				! function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.clearPeakCache()
			}
			var t, r, n;
			return t = e, (r = [{
				key: "clearPeakCache",
				value: function() {
					this.peakCacheRanges = [], this.peakCacheLength = -1
				}
			}, {
				key: "addRangeToPeakCache",
				value: function(e, t, r) {
					e != this.peakCacheLength && (this.clearPeakCache(), this.peakCacheLength = e);
					for (var n = [], i = 0; i < this.peakCacheRanges.length && this.peakCacheRanges[i] < t;) i++;
					for (i % 2 == 0 && n.push(t); i < this.peakCacheRanges.length && this.peakCacheRanges[i] <= r;) n.push(
						this.peakCacheRanges[i]), i++;
					i % 2 == 0 && n.push(r), n = n.filter(function(e, t, r) {
						return 0 == t ? e != r[t + 1] : t == r.length - 1 ? e != r[t - 1] : e != r[t - 1] && e != r[t + 1]
					}), this.peakCacheRanges = this.peakCacheRanges.concat(n), this.peakCacheRanges = this.peakCacheRanges.sort(
						function(e, t) {
							return e - t
						}).filter(function(e, t, r) {
						return 0 == t ? e != r[t + 1] : t == r.length - 1 ? e != r[t - 1] : e != r[t - 1] && e != r[t + 1]
					});
					var a = [];
					for (i = 0; i < n.length; i += 2) a.push([n[i], n[i + 1]]);
					return a
				}
			}, {
				key: "getCacheRanges",
				value: function() {
					var e, t = [];
					for (e = 0; e < this.peakCacheRanges.length; e += 2) t.push([this.peakCacheRanges[e], this.peakCacheRanges[
						e + 1]]);
					return t
				}
			}]) && i(t.prototype, r), n && i(t, n), e
		}();
		t.default = n, e.exports = t.default
	}])
});
//# sourceMappingURL=wavesurfer.min.js.map
