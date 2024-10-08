/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */ !(function (t) {
    var e = {};
    function n(r) {
        if (e[r]) return e[r].exports;
        var i = (e[r] = { i: r, l: !1, exports: {} });
        return t[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
    }
    (n.m = t),
        (n.c = e),
        (n.d = function (t, e, r) {
            n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
        }),
        (n.r = function (t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 });
        }),
        (n.t = function (t, e) {
            if ((1 & e && (t = n(t)), 8 & e)) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var r = Object.create(null);
            if ((n.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t))
                for (var i in t)
                    n.d(
                        r,
                        i,
                        function (e) {
                            return t[e];
                        }.bind(null, i)
                    );
            return r;
        }),
        (n.n = function (t) {
            var e =
                t && t.__esModule
                    ? function () {
                          return t.default;
                      }
                    : function () {
                          return t;
                      };
            return n.d(e, "a", e), e;
        }),
        (n.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
        }),
        (n.p = ""),
        n((n.s = 120));
})([
    function (t, e) {
        t.exports = function (t) {
            return t && t.__esModule ? t : { default: t };
        };
    },
    function (t, e) {
        var n = Array.isArray;
        t.exports = n;
    },
    function (t, e, n) {
        "use strict";
        var r = {},
            i = {},
            o = [],
            a = window.Webflow || [],
            u = window.jQuery,
            c = u(window),
            s = u(document),
            l = u.isFunction,
            f = (r._ = n(122)),
            d = (r.tram = n(65) && u.tram),
            p = !1,
            v = !1;
        function h(t) {
            r.env() && (l(t.design) && c.on("__wf_design", t.design), l(t.preview) && c.on("__wf_preview", t.preview)),
                l(t.destroy) && c.on("__wf_destroy", t.destroy),
                t.ready &&
                    l(t.ready) &&
                    (function (t) {
                        if (p) return void t.ready();
                        if (f.contains(o, t.ready)) return;
                        o.push(t.ready);
                    })(t);
        }
        function g(t) {
            l(t.design) && c.off("__wf_design", t.design),
                l(t.preview) && c.off("__wf_preview", t.preview),
                l(t.destroy) && c.off("__wf_destroy", t.destroy),
                t.ready &&
                    l(t.ready) &&
                    (function (t) {
                        o = f.filter(o, function (e) {
                            return e !== t.ready;
                        });
                    })(t);
        }
        (d.config.hideBackface = !1),
            (d.config.keepInherited = !0),
            (r.define = function (t, e, n) {
                i[t] && g(i[t]);
                var r = (i[t] = e(u, f, n) || {});
                return h(r), r;
            }),
            (r.require = function (t) {
                return i[t];
            }),
            (r.push = function (t) {
                p ? l(t) && t() : a.push(t);
            }),
            (r.env = function (t) {
                var e = window.__wf_design,
                    n = void 0 !== e;
                return t
                    ? "design" === t
                        ? n && e
                        : "preview" === t
                        ? n && !e
                        : "slug" === t
                        ? n && window.__wf_slug
                        : "editor" === t
                        ? window.WebflowEditor
                        : "test" === t
                        ? window.__wf_test
                        : "frame" === t
                        ? window !== window.top
                        : void 0
                    : n;
            });
        var E,
            m = navigator.userAgent.toLowerCase(),
            y = (r.env.touch = "ontouchstart" in window || (window.DocumentTouch && document instanceof window.DocumentTouch)),
            _ = (r.env.chrome = /chrome/.test(m) && /Google/.test(navigator.vendor) && parseInt(m.match(/chrome\/(\d+)\./)[1], 10)),
            I = (r.env.ios = /(ipod|iphone|ipad)/.test(m));
        (r.env.safari = /safari/.test(m) && !_ && !I),
            y &&
                s.on("touchstart mousedown", function (t) {
                    E = t.target;
                }),
            (r.validClick = y
                ? function (t) {
                      return t === E || u.contains(t, E);
                  }
                : function () {
                      return !0;
                  });
        var b,
            w = "resize.webflow orientationchange.webflow load.webflow";
        function T(t, e) {
            var n = [],
                r = {};
            return (
                (r.up = f.throttle(function (t) {
                    f.each(n, function (e) {
                        e(t);
                    });
                })),
                t && e && t.on(e, r.up),
                (r.on = function (t) {
                    "function" == typeof t && (f.contains(n, t) || n.push(t));
                }),
                (r.off = function (t) {
                    n = arguments.length
                        ? f.filter(n, function (e) {
                              return e !== t;
                          })
                        : [];
                }),
                r
            );
        }
        function O(t) {
            l(t) && t();
        }
        function A() {
            b && (b.reject(), c.off("load", b.resolve)), (b = new u.Deferred()), c.on("load", b.resolve);
        }
        (r.resize = T(c, w)),
            (r.scroll = T(c, "scroll.webflow resize.webflow orientationchange.webflow load.webflow")),
            (r.redraw = T()),
            (r.location = function (t) {
                window.location = t;
            }),
            r.env() && (r.location = function () {}),
            (r.ready = function () {
                (p = !0), v ? ((v = !1), f.each(i, h)) : f.each(o, O), f.each(a, O), r.resize.up();
            }),
            (r.load = function (t) {
                b.then(t);
            }),
            (r.destroy = function (t) {
                (t = t || {}), (v = !0), c.triggerHandler("__wf_destroy"), null != t.domready && (p = t.domready), f.each(i, g), r.resize.off(), r.scroll.off(), r.redraw.off(), (o = []), (a = []), "pending" === b.state() && A();
            }),
            u(r.ready),
            A(),
            (t.exports = window.Webflow = r);
    },
    function (t, e, n) {
        "use strict";
        var r = n(14);
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = { IX2EngineActionTypes: !0, IX2EngineConstants: !0 };
        e.IX2EngineConstants = e.IX2EngineActionTypes = void 0;
        var o = n(170);
        Object.keys(o).forEach(function (t) {
            "default" !== t &&
                "__esModule" !== t &&
                (Object.prototype.hasOwnProperty.call(i, t) ||
                    Object.defineProperty(e, t, {
                        enumerable: !0,
                        get: function () {
                            return o[t];
                        },
                    }));
        });
        var a = n(171);
        Object.keys(a).forEach(function (t) {
            "default" !== t &&
                "__esModule" !== t &&
                (Object.prototype.hasOwnProperty.call(i, t) ||
                    Object.defineProperty(e, t, {
                        enumerable: !0,
                        get: function () {
                            return a[t];
                        },
                    }));
        });
        var u = n(172);
        Object.keys(u).forEach(function (t) {
            "default" !== t &&
                "__esModule" !== t &&
                (Object.prototype.hasOwnProperty.call(i, t) ||
                    Object.defineProperty(e, t, {
                        enumerable: !0,
                        get: function () {
                            return u[t];
                        },
                    }));
        });
        var c = r(n(173));
        e.IX2EngineActionTypes = c;
        var s = r(n(174));
        e.IX2EngineConstants = s;
    },
    function (t, e, n) {
        (function (e) {
            var n = "object",
                r = function (t) {
                    return t && t.Math == Math && t;
                };
            t.exports = r(typeof globalThis == n && globalThis) || r(typeof window == n && window) || r(typeof self == n && self) || r(typeof e == n && e) || Function("return this")();
        }.call(this, n(23)));
    },
    function (t, e, n) {
        var r = n(89),
            i = "object" == typeof self && self && self.Object === Object && self,
            o = r || i || Function("return this")();
        t.exports = o;
    },
    function (t, e) {
        t.exports = function (t) {
            var e = typeof t;
            return null != t && ("object" == e || "function" == e);
        };
    },
    function (t, e, n) {
        var r = n(177),
            i = n(231),
            o = n(59),
            a = n(1),
            u = n(240);
        t.exports = function (t) {
            return "function" == typeof t ? t : null == t ? o : "object" == typeof t ? (a(t) ? i(t[0], t[1]) : r(t)) : u(t);
        };
    },
    function (t, e, n) {
        var r = n(189),
            i = n(194);
        t.exports = function (t, e) {
            var n = i(t, e);
            return r(n) ? n : void 0;
        };
    },
    function (t, e) {
        t.exports = function (t) {
            return null != t && "object" == typeof t;
        };
    },
    function (t, e, n) {
        "use strict";
        var r = n(14);
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.IX2VanillaUtils = e.IX2VanillaPlugins = e.IX2ElementsReducer = e.IX2EasingUtils = e.IX2Easings = e.IX2BrowserSupport = void 0);
        var i = r(n(44));
        e.IX2BrowserSupport = i;
        var o = r(n(106));
        e.IX2Easings = o;
        var a = r(n(108));
        e.IX2EasingUtils = a;
        var u = r(n(247));
        e.IX2ElementsReducer = u;
        var c = r(n(110));
        e.IX2VanillaPlugins = c;
        var s = r(n(249));
        e.IX2VanillaUtils = s;
    },
    function (t, e, n) {
        var r = n(20),
            i = n(190),
            o = n(191),
            a = "[object Null]",
            u = "[object Undefined]",
            c = r ? r.toStringTag : void 0;
        t.exports = function (t) {
            return null == t ? (void 0 === t ? u : a) : c && c in Object(t) ? i(t) : o(t);
        };
    },
    function (t, e, n) {
        var r = n(88),
            i = n(52);
        t.exports = function (t) {
            return null != t && i(t.length) && !r(t);
        };
    },
    function (t, e, n) {
        "use strict";
        var r = n(124);
        function i(t, e) {
            var n = document.createEvent("CustomEvent");
            n.initCustomEvent(e, !0, !0, null), t.dispatchEvent(n);
        }
        var o = window.jQuery,
            a = {},
            u = {
                reset: function (t, e) {
                    r.triggers.reset(t, e);
                },
                intro: function (t, e) {
                    r.triggers.intro(t, e), i(e, "COMPONENT_ACTIVE");
                },
                outro: function (t, e) {
                    r.triggers.outro(t, e), i(e, "COMPONENT_INACTIVE");
                },
            };
        (a.triggers = {}), (a.types = { INTRO: "w-ix-intro.w-ix", OUTRO: "w-ix-outro.w-ix" }), o.extend(a.triggers, u), (t.exports = a);
    },
    function (t, e) {
        t.exports = function (t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var n in t)
                    if (Object.prototype.hasOwnProperty.call(t, n)) {
                        var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(t, n) : {};
                        r.get || r.set ? Object.defineProperty(e, n, r) : (e[n] = t[n]);
                    }
            return (e.default = t), e;
        };
    },
    function (t, e, n) {
        var r = n(16);
        t.exports = !r(function () {
            return (
                7 !=
                Object.defineProperty({}, "a", {
                    get: function () {
                        return 7;
                    },
                }).a
            );
        });
    },
    function (t, e) {
        t.exports = function (t) {
            try {
                return !!t();
            } catch (t) {
                return !0;
            }
        };
    },
    function (t, e) {
        var n = {}.hasOwnProperty;
        t.exports = function (t, e) {
            return n.call(t, e);
        };
    },
    function (t, e, n) {
        var r = n(15),
            i = n(38),
            o = n(67);
        t.exports = r
            ? function (t, e, n) {
                  return i.f(t, e, o(1, n));
              }
            : function (t, e, n) {
                  return (t[e] = n), t;
              };
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                      return typeof t;
                  }
                : function (t) {
                      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                  };
        (e.clone = c),
            (e.addLast = f),
            (e.addFirst = d),
            (e.removeLast = p),
            (e.removeFirst = v),
            (e.insert = h),
            (e.removeAt = g),
            (e.replaceAt = E),
            (e.getIn = m),
            (e.set = y),
            (e.setIn = _),
            (e.update = I),
            (e.updateIn = b),
            (e.merge = w),
            (e.mergeDeep = T),
            (e.mergeIn = O),
            (e.omit = A),
            (e.addDefaults = x);
        /*!
         * Timm
         *
         * Immutability helpers with fast reads and acceptable writes.
         *
         * @copyright Guillermo Grau Panea 2016
         * @license MIT
         */
        var i = "INVALID_ARGS";
        function o(t) {
            throw new Error(t);
        }
        function a(t) {
            var e = Object.keys(t);
            return Object.getOwnPropertySymbols ? e.concat(Object.getOwnPropertySymbols(t)) : e;
        }
        var u = {}.hasOwnProperty;
        function c(t) {
            if (Array.isArray(t)) return t.slice();
            for (var e = a(t), n = {}, r = 0; r < e.length; r++) {
                var i = e[r];
                n[i] = t[i];
            }
            return n;
        }
        function s(t, e, n) {
            var r = n;
            null == r && o(i);
            for (var u = !1, f = arguments.length, d = Array(f > 3 ? f - 3 : 0), p = 3; p < f; p++) d[p - 3] = arguments[p];
            for (var v = 0; v < d.length; v++) {
                var h = d[v];
                if (null != h) {
                    var g = a(h);
                    if (g.length)
                        for (var E = 0; E <= g.length; E++) {
                            var m = g[E];
                            if (!t || void 0 === r[m]) {
                                var y = h[m];
                                e && l(r[m]) && l(y) && (y = s(t, e, r[m], y)), void 0 !== y && y !== r[m] && (u || ((u = !0), (r = c(r))), (r[m] = y));
                            }
                        }
                }
            }
            return r;
        }
        function l(t) {
            var e = void 0 === t ? "undefined" : r(t);
            return null != t && ("object" === e || "function" === e);
        }
        function f(t, e) {
            return Array.isArray(e) ? t.concat(e) : t.concat([e]);
        }
        function d(t, e) {
            return Array.isArray(e) ? e.concat(t) : [e].concat(t);
        }
        function p(t) {
            return t.length ? t.slice(0, t.length - 1) : t;
        }
        function v(t) {
            return t.length ? t.slice(1) : t;
        }
        function h(t, e, n) {
            return t
                .slice(0, e)
                .concat(Array.isArray(n) ? n : [n])
                .concat(t.slice(e));
        }
        function g(t, e) {
            return e >= t.length || e < 0 ? t : t.slice(0, e).concat(t.slice(e + 1));
        }
        function E(t, e, n) {
            if (t[e] === n) return t;
            for (var r = t.length, i = Array(r), o = 0; o < r; o++) i[o] = t[o];
            return (i[e] = n), i;
        }
        function m(t, e) {
            if ((!Array.isArray(e) && o(i), null != t)) {
                for (var n = t, r = 0; r < e.length; r++) {
                    var a = e[r];
                    if (void 0 === (n = null != n ? n[a] : void 0)) return n;
                }
                return n;
            }
        }
        function y(t, e, n) {
            var r = null == t ? ("number" == typeof e ? [] : {}) : t;
            if (r[e] === n) return r;
            var i = c(r);
            return (i[e] = n), i;
        }
        function _(t, e, n) {
            return e.length
                ? (function t(e, n, r, i) {
                      var o = void 0,
                          a = n[i];
                      o = i === n.length - 1 ? r : t(l(e) && l(e[a]) ? e[a] : "number" == typeof n[i + 1] ? [] : {}, n, r, i + 1);
                      return y(e, a, o);
                  })(t, e, n, 0)
                : n;
        }
        function I(t, e, n) {
            return y(t, e, n(null == t ? void 0 : t[e]));
        }
        function b(t, e, n) {
            return _(t, e, n(m(t, e)));
        }
        function w(t, e, n, r, i, o) {
            for (var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++) u[c - 6] = arguments[c];
            return u.length ? s.call.apply(s, [null, !1, !1, t, e, n, r, i, o].concat(u)) : s(!1, !1, t, e, n, r, i, o);
        }
        function T(t, e, n, r, i, o) {
            for (var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++) u[c - 6] = arguments[c];
            return u.length ? s.call.apply(s, [null, !1, !0, t, e, n, r, i, o].concat(u)) : s(!1, !0, t, e, n, r, i, o);
        }
        function O(t, e, n, r, i, o, a) {
            var u = m(t, e);
            null == u && (u = {});
            for (var c = arguments.length, l = Array(c > 7 ? c - 7 : 0), f = 7; f < c; f++) l[f - 7] = arguments[f];
            return _(t, e, l.length ? s.call.apply(s, [null, !1, !1, u, n, r, i, o, a].concat(l)) : s(!1, !1, u, n, r, i, o, a));
        }
        function A(t, e) {
            for (var n = Array.isArray(e) ? e : [e], r = !1, i = 0; i < n.length; i++)
                if (u.call(t, n[i])) {
                    r = !0;
                    break;
                }
            if (!r) return t;
            for (var o = {}, c = a(t), s = 0; s < c.length; s++) {
                var l = c[s];
                n.indexOf(l) >= 0 || (o[l] = t[l]);
            }
            return o;
        }
        function x(t, e, n, r, i, o) {
            for (var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++) u[c - 6] = arguments[c];
            return u.length ? s.call.apply(s, [null, !0, !1, t, e, n, r, i, o].concat(u)) : s(!0, !1, t, e, n, r, i, o);
        }
        var S = { clone: c, addLast: f, addFirst: d, removeLast: p, removeFirst: v, insert: h, removeAt: g, replaceAt: E, getIn: m, set: y, setIn: _, update: I, updateIn: b, merge: w, mergeDeep: T, mergeIn: O, omit: A, addDefaults: x };
        e.default = S;
    },
    function (t, e, n) {
        var r = n(5).Symbol;
        t.exports = r;
    },
    function (t, e, n) {
        var r = n(36),
            i = 1 / 0;
        t.exports = function (t) {
            if ("string" == typeof t || r(t)) return t;
            var e = t + "";
            return "0" == e && 1 / t == -i ? "-0" : e;
        };
    },
    function (t, e) {
        function n(t) {
            return (n =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      })(t);
        }
        function r(e) {
            return (
                "function" == typeof Symbol && "symbol" === n(Symbol.iterator)
                    ? (t.exports = r = function (t) {
                          return n(t);
                      })
                    : (t.exports = r = function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : n(t);
                      }),
                r(e)
            );
        }
        t.exports = r;
    },
    function (t, e) {
        var n;
        n = (function () {
            return this;
        })();
        try {
            n = n || new Function("return this")();
        } catch (t) {
            "object" == typeof window && (n = window);
        }
        t.exports = n;
    },
    function (t, e) {
        t.exports = function (t) {
            return "object" == typeof t ? null !== t : "function" == typeof t;
        };
    },
    function (t, e, n) {
        var r = n(24);
        t.exports = function (t) {
            if (!r(t)) throw TypeError(String(t) + " is not an object");
            return t;
        };
    },
    function (t, e, n) {
        var r = n(4),
            i = n(39),
            o = n(136),
            a = r["__core-js_shared__"] || i("__core-js_shared__", {});
        (t.exports = function (t, e) {
            return a[t] || (a[t] = void 0 !== e ? e : {});
        })("versions", []).push({ version: "3.1.3", mode: o ? "pure" : "global", copyright: "Â© 2019 Denis Pushkarev (zloirock.ru)" });
    },
    function (t, e) {
        t.exports = function (t, e, n) {
            return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
        };
    },
    function (t, e) {
        function n() {
            return (
                (t.exports = n =
                    Object.assign ||
                    function (t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = arguments[e];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                        }
                        return t;
                    }),
                n.apply(this, arguments)
            );
        }
        t.exports = n;
    },
    function (t, e, n) {
        var r = n(179),
            i = n(180),
            o = n(181),
            a = n(182),
            u = n(183);
        function c(t) {
            var e = -1,
                n = null == t ? 0 : t.length;
            for (this.clear(); ++e < n; ) {
                var r = t[e];
                this.set(r[0], r[1]);
            }
        }
        (c.prototype.clear = r), (c.prototype.delete = i), (c.prototype.get = o), (c.prototype.has = a), (c.prototype.set = u), (t.exports = c);
    },
    function (t, e, n) {
        var r = n(45);
        t.exports = function (t, e) {
            for (var n = t.length; n--; ) if (r(t[n][0], e)) return n;
            return -1;
        };
    },
    function (t, e, n) {
        var r = n(8)(Object, "create");
        t.exports = r;
    },
    function (t, e, n) {
        var r = n(203);
        t.exports = function (t, e) {
            var n = t.__data__;
            return r(e) ? n["string" == typeof e ? "string" : "hash"] : n.map;
        };
    },
    function (t, e, n) {
        var r = n(96),
            i = n(53),
            o = n(12);
        t.exports = function (t) {
            return o(t) ? r(t) : i(t);
        };
    },
    function (t, e, n) {
        var r = n(221),
            i = n(9),
            o = Object.prototype,
            a = o.hasOwnProperty,
            u = o.propertyIsEnumerable,
            c = r(
                (function () {
                    return arguments;
                })()
            )
                ? r
                : function (t) {
                      return i(t) && a.call(t, "callee") && !u.call(t, "callee");
                  };
        t.exports = c;
    },
    function (t, e, n) {
        var r = n(1),
            i = n(58),
            o = n(232),
            a = n(235);
        t.exports = function (t, e) {
            return r(t) ? t : i(t, e) ? [t] : o(a(t));
        };
    },
    function (t, e, n) {
        var r = n(11),
            i = n(9),
            o = "[object Symbol]";
        t.exports = function (t) {
            return "symbol" == typeof t || (i(t) && r(t) == o);
        };
    },
    function (t, e, n) {
        var r = n(132),
            i = n(134);
        t.exports = function (t) {
            return r(i(t));
        };
    },
    function (t, e, n) {
        var r = n(15),
            i = n(69),
            o = n(25),
            a = n(68),
            u = Object.defineProperty;
        e.f = r
            ? u
            : function (t, e, n) {
                  if ((o(t), (e = a(e, !0)), o(n), i))
                      try {
                          return u(t, e, n);
                      } catch (t) {}
                  if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
                  return "value" in n && (t[e] = n.value), t;
              };
    },
    function (t, e, n) {
        var r = n(4),
            i = n(18);
        t.exports = function (t, e) {
            try {
                i(r, t, e);
            } catch (n) {
                r[t] = e;
            }
            return e;
        };
    },
    function (t, e) {
        t.exports = {};
    },
    function (t, e) {
        t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
    },
    function (t, e, n) {
        "use strict";
        n.r(e),
            n.d(e, "ActionTypes", function () {
                return o;
            }),
            n.d(e, "default", function () {
                return a;
            });
        var r = n(79),
            i = n(165),
            o = { INIT: "@@redux/INIT" };
        function a(t, e, n) {
            var u;
            if (("function" == typeof e && void 0 === n && ((n = e), (e = void 0)), void 0 !== n)) {
                if ("function" != typeof n) throw new Error("Expected the enhancer to be a function.");
                return n(a)(t, e);
            }
            if ("function" != typeof t) throw new Error("Expected the reducer to be a function.");
            var c = t,
                s = e,
                l = [],
                f = l,
                d = !1;
            function p() {
                f === l && (f = l.slice());
            }
            function v() {
                return s;
            }
            function h(t) {
                if ("function" != typeof t) throw new Error("Expected listener to be a function.");
                var e = !0;
                return (
                    p(),
                    f.push(t),
                    function () {
                        if (e) {
                            (e = !1), p();
                            var n = f.indexOf(t);
                            f.splice(n, 1);
                        }
                    }
                );
            }
            function g(t) {
                if (!Object(r.default)(t)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
                if (void 0 === t.type) throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
                if (d) throw new Error("Reducers may not dispatch actions.");
                try {
                    (d = !0), (s = c(s, t));
                } finally {
                    d = !1;
                }
                for (var e = (l = f), n = 0; n < e.length; n++) e[n]();
                return t;
            }
            return (
                g({ type: o.INIT }),
                ((u = {
                    dispatch: g,
                    subscribe: h,
                    getState: v,
                    replaceReducer: function (t) {
                        if ("function" != typeof t) throw new Error("Expected the nextReducer to be a function.");
                        (c = t), g({ type: o.INIT });
                    },
                })[i.default] = function () {
                    var t,
                        e = h;
                    return (
                        ((t = {
                            subscribe: function (t) {
                                if ("object" != typeof t) throw new TypeError("Expected the observer to be an object.");
                                function n() {
                                    t.next && t.next(v());
                                }
                                return n(), { unsubscribe: e(n) };
                            },
                        })[i.default] = function () {
                            return this;
                        }),
                        t
                    );
                }),
                u
            );
        }
    },
    function (t, e, n) {
        "use strict";
        function r() {
            for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
            if (0 === e.length)
                return function (t) {
                    return t;
                };
            if (1 === e.length) return e[0];
            var r = e[e.length - 1],
                i = e.slice(0, -1);
            return function () {
                return i.reduceRight(function (t, e) {
                    return e(t);
                }, r.apply(void 0, arguments));
            };
        }
        n.r(e),
            n.d(e, "default", function () {
                return r;
            });
    },
    function (t, e, n) {
        "use strict";
        var r = n(0);
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.TRANSFORM_STYLE_PREFIXED = e.TRANSFORM_PREFIXED = e.FLEX_PREFIXED = e.ELEMENT_MATCHES = e.withBrowser = e.IS_BROWSER_ENV = void 0);
        var i = r(n(85)),
            o = "undefined" != typeof window;
        e.IS_BROWSER_ENV = o;
        var a = function (t, e) {
            return o ? t() : e;
        };
        e.withBrowser = a;
        var u = a(function () {
            return (0, i.default)(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], function (t) {
                return t in Element.prototype;
            });
        });
        e.ELEMENT_MATCHES = u;
        var c = a(function () {
            var t = document.createElement("i"),
                e = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"];
            try {
                for (var n = e.length, r = 0; r < n; r++) {
                    var i = e[r];
                    if (((t.style.display = i), t.style.display === i)) return i;
                }
                return "";
            } catch (t) {
                return "";
            }
        }, "flex");
        e.FLEX_PREFIXED = c;
        var s = a(function () {
            var t = document.createElement("i");
            if (null == t.style.transform)
                for (var e = ["Webkit", "Moz", "ms"], n = e.length, r = 0; r < n; r++) {
                    var i = e[r] + "Transform";
                    if (void 0 !== t.style[i]) return i;
                }
            return "transform";
        }, "transform");
        e.TRANSFORM_PREFIXED = s;
        var l = s.split("transform")[0],
            f = l ? l + "TransformStyle" : "transformStyle";
        e.TRANSFORM_STYLE_PREFIXED = f;
    },
    function (t, e) {
        t.exports = function (t, e) {
            return t === e || (t != t && e != e);
        };
    },
    function (t, e, n) {
        var r = n(8)(n(5), "Map");
        t.exports = r;
    },
    function (t, e, n) {
        var r = n(195),
            i = n(202),
            o = n(204),
            a = n(205),
            u = n(206);
        function c(t) {
            var e = -1,
                n = null == t ? 0 : t.length;
            for (this.clear(); ++e < n; ) {
                var r = t[e];
                this.set(r[0], r[1]);
            }
        }
        (c.prototype.clear = r), (c.prototype.delete = i), (c.prototype.get = o), (c.prototype.has = a), (c.prototype.set = u), (t.exports = c);
    },
    function (t, e) {
        t.exports = function (t, e) {
            for (var n = -1, r = e.length, i = t.length; ++n < r; ) t[i + n] = e[n];
            return t;
        };
    },
    function (t, e, n) {
        (function (t) {
            var r = n(5),
                i = n(222),
                o = e && !e.nodeType && e,
                a = o && "object" == typeof t && t && !t.nodeType && t,
                u = a && a.exports === o ? r.Buffer : void 0,
                c = (u ? u.isBuffer : void 0) || i;
            t.exports = c;
        }.call(this, n(97)(t)));
    },
    function (t, e) {
        var n = 9007199254740991,
            r = /^(?:0|[1-9]\d*)$/;
        t.exports = function (t, e) {
            var i = typeof t;
            return !!(e = null == e ? n : e) && ("number" == i || ("symbol" != i && r.test(t))) && t > -1 && t % 1 == 0 && t < e;
        };
    },
    function (t, e, n) {
        var r = n(223),
            i = n(224),
            o = n(225),
            a = o && o.isTypedArray,
            u = a ? i(a) : r;
        t.exports = u;
    },
    function (t, e) {
        var n = 9007199254740991;
        t.exports = function (t) {
            return "number" == typeof t && t > -1 && t % 1 == 0 && t <= n;
        };
    },
    function (t, e, n) {
        var r = n(54),
            i = n(226),
            o = Object.prototype.hasOwnProperty;
        t.exports = function (t) {
            if (!r(t)) return i(t);
            var e = [];
            for (var n in Object(t)) o.call(t, n) && "constructor" != n && e.push(n);
            return e;
        };
    },
    function (t, e) {
        var n = Object.prototype;
        t.exports = function (t) {
            var e = t && t.constructor;
            return t === (("function" == typeof e && e.prototype) || n);
        };
    },
    function (t, e, n) {
        var r = n(227),
            i = n(46),
            o = n(228),
            a = n(229),
            u = n(99),
            c = n(11),
            s = n(90),
            l = s(r),
            f = s(i),
            d = s(o),
            p = s(a),
            v = s(u),
            h = c;
        ((r && "[object DataView]" != h(new r(new ArrayBuffer(1)))) || (i && "[object Map]" != h(new i())) || (o && "[object Promise]" != h(o.resolve())) || (a && "[object Set]" != h(new a())) || (u && "[object WeakMap]" != h(new u()))) &&
            (h = function (t) {
                var e = c(t),
                    n = "[object Object]" == e ? t.constructor : void 0,
                    r = n ? s(n) : "";
                if (r)
                    switch (r) {
                        case l:
                            return "[object DataView]";
                        case f:
                            return "[object Map]";
                        case d:
                            return "[object Promise]";
                        case p:
                            return "[object Set]";
                        case v:
                            return "[object WeakMap]";
                    }
                return e;
            }),
            (t.exports = h);
    },
    function (t, e, n) {
        var r = n(57);
        t.exports = function (t, e, n) {
            var i = null == t ? void 0 : r(t, e);
            return void 0 === i ? n : i;
        };
    },
    function (t, e, n) {
        var r = n(35),
            i = n(21);
        t.exports = function (t, e) {
            for (var n = 0, o = (e = r(e, t)).length; null != t && n < o; ) t = t[i(e[n++])];
            return n && n == o ? t : void 0;
        };
    },
    function (t, e, n) {
        var r = n(1),
            i = n(36),
            o = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            a = /^\w*$/;
        t.exports = function (t, e) {
            if (r(t)) return !1;
            var n = typeof t;
            return !("number" != n && "symbol" != n && "boolean" != n && null != t && !i(t)) || a.test(t) || !o.test(t) || (null != e && t in Object(e));
        };
    },
    function (t, e) {
        t.exports = function (t) {
            return t;
        };
    },
    function (t, e, n) {
        var r = n(6),
            i = n(36),
            o = NaN,
            a = /^\s+|\s+$/g,
            u = /^[-+]0x[0-9a-f]+$/i,
            c = /^0b[01]+$/i,
            s = /^0o[0-7]+$/i,
            l = parseInt;
        t.exports = function (t) {
            if ("number" == typeof t) return t;
            if (i(t)) return o;
            if (r(t)) {
                var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                t = r(e) ? e + "" : e;
            }
            if ("string" != typeof t) return 0 === t ? t : +t;
            t = t.replace(a, "");
            var n = c.test(t);
            return n || s.test(t) ? l(t.slice(2), n ? 2 : 8) : u.test(t) ? o : +t;
        };
    },
    function (t, e, n) {
        "use strict";
        var r = n(0);
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.mediaQueriesDefined = e.viewportWidthChanged = e.actionListPlaybackChanged = e.elementStateChanged = e.instanceRemoved = e.instanceStarted = e.instanceAdded = e.parameterChanged = e.animationFrameChanged = e.eventStateChanged = e.testFrameRendered = e.eventListenerAdded = e.clearRequested = e.stopRequested = e.playbackRequested = e.previewRequested = e.sessionStopped = e.sessionStarted = e.sessionInitialized = e.rawDataImported = void 0);
        var i = r(n(28)),
            o = n(3),
            a = n(10),
            u = o.IX2EngineActionTypes,
            c = u.IX2_RAW_DATA_IMPORTED,
            s = u.IX2_SESSION_INITIALIZED,
            l = u.IX2_SESSION_STARTED,
            f = u.IX2_SESSION_STOPPED,
            d = u.IX2_PREVIEW_REQUESTED,
            p = u.IX2_PLAYBACK_REQUESTED,
            v = u.IX2_STOP_REQUESTED,
            h = u.IX2_CLEAR_REQUESTED,
            g = u.IX2_EVENT_LISTENER_ADDED,
            E = u.IX2_TEST_FRAME_RENDERED,
            m = u.IX2_EVENT_STATE_CHANGED,
            y = u.IX2_ANIMATION_FRAME_CHANGED,
            _ = u.IX2_PARAMETER_CHANGED,
            I = u.IX2_INSTANCE_ADDED,
            b = u.IX2_INSTANCE_STARTED,
            w = u.IX2_INSTANCE_REMOVED,
            T = u.IX2_ELEMENT_STATE_CHANGED,
            O = u.IX2_ACTION_LIST_PLAYBACK_CHANGED,
            A = u.IX2_VIEWPORT_WIDTH_CHANGED,
            x = u.IX2_MEDIA_QUERIES_DEFINED,
            S = a.IX2VanillaUtils.reifyState;
        e.rawDataImported = function (t) {
            return { type: c, payload: (0, i.default)({}, S(t)) };
        };
        e.sessionInitialized = function (t) {
            var e = t.hasBoundaryNodes;
            return { type: s, payload: { hasBoundaryNodes: e } };
        };
        e.sessionStarted = function () {
            return { type: l };
        };
        e.sessionStopped = function () {
            return { type: f };
        };
        e.previewRequested = function (t) {
            var e = t.rawData,
                n = t.defer;
            return { type: d, payload: { defer: n, rawData: e } };
        };
        e.playbackRequested = function (t) {
            var e = t.actionTypeId,
                n = void 0 === e ? o.ActionTypeConsts.GENERAL_START_ACTION : e,
                r = t.actionListId,
                i = t.actionItemId,
                a = t.eventId,
                u = t.allowEvents,
                c = t.immediate,
                s = t.testManual,
                l = t.verbose,
                f = t.rawData;
            return { type: p, payload: { actionTypeId: n, actionListId: r, actionItemId: i, testManual: s, eventId: a, allowEvents: u, immediate: c, verbose: l, rawData: f } };
        };
        e.stopRequested = function (t) {
            return { type: v, payload: { actionListId: t } };
        };
        e.clearRequested = function () {
            return { type: h };
        };
        e.eventListenerAdded = function (t, e) {
            return { type: g, payload: { target: t, listenerParams: e } };
        };
        e.testFrameRendered = function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
            return { type: E, payload: { step: t } };
        };
        e.eventStateChanged = function (t, e) {
            return { type: m, payload: { stateKey: t, newState: e } };
        };
        e.animationFrameChanged = function (t, e) {
            return { type: y, payload: { now: t, parameters: e } };
        };
        e.parameterChanged = function (t, e) {
            return { type: _, payload: { key: t, value: e } };
        };
        e.instanceAdded = function (t) {
            return { type: I, payload: (0, i.default)({}, t) };
        };
        e.instanceStarted = function (t, e) {
            return { type: b, payload: { instanceId: t, time: e } };
        };
        e.instanceRemoved = function (t) {
            return { type: w, payload: { instanceId: t } };
        };
        e.elementStateChanged = function (t, e, n, r) {
            return { type: T, payload: { elementId: t, actionTypeId: e, current: n, actionItem: r } };
        };
        e.actionListPlaybackChanged = function (t) {
            var e = t.actionListId,
                n = t.isPlaying;
            return { type: O, payload: { actionListId: e, isPlaying: n } };
        };
        e.viewportWidthChanged = function (t) {
            var e = t.width,
                n = t.mediaQueries;
            return { type: A, payload: { width: e, mediaQueries: n } };
        };
        e.mediaQueriesDefined = function () {
            return { type: x };
        };
    },
    function (t, e, n) {
        var r = n(117),
            i = n(63);
        function o(t, e) {
            (this.__wrapped__ = t), (this.__actions__ = []), (this.__chain__ = !!e), (this.__index__ = 0), (this.__values__ = void 0);
        }
        (o.prototype = r(i.prototype)), (o.prototype.constructor = o), (t.exports = o);
    },
    function (t, e) {
        t.exports = function () {};
    },
    function (t, e, n) {
        var r = n(117),
            i = n(63),
            o = 4294967295;
        function a(t) {
            (this.__wrapped__ = t), (this.__actions__ = []), (this.__dir__ = 1), (this.__filtered__ = !1), (this.__iteratees__ = []), (this.__takeCount__ = o), (this.__views__ = []);
        }
        (a.prototype = r(i.prototype)), (a.prototype.constructor = a), (t.exports = a);
    },
    function (t, e, n) {
        "use strict";
        var r = n(0)(n(22));
        window.tram = (function (t) {
            function e(t, e) {
                return new k.Bare().init(t, e);
            }
            function n(t) {
                return t.replace(/[A-Z]/g, function (t) {
                    return "-" + t.toLowerCase();
                });
            }
            function i(t) {
                var e = parseInt(t.slice(1), 16);
                return [(e >> 16) & 255, (e >> 8) & 255, 255 & e];
            }
            function o(t, e, n) {
                return "#" + ((1 << 24) | (t << 16) | (e << 8) | n).toString(16).slice(1);
            }
            function a() {}
            function u(t, e, n) {
                s("Units do not match [" + t + "]: " + e + ", " + n);
            }
            function c(t, e, n) {
                if ((void 0 !== e && (n = e), void 0 === t)) return n;
                var r = n;
                return $.test(t) || !Z.test(t) ? (r = parseInt(t, 10)) : Z.test(t) && (r = 1e3 * parseFloat(t)), 0 > r && (r = 0), r == r ? r : n;
            }
            function s(t) {
                H.debug && window && window.console.warn(t);
            }
            var l = (function (t, e, n) {
                    function i(t) {
                        return "object" == (0, r.default)(t);
                    }
                    function o(t) {
                        return "function" == typeof t;
                    }
                    function a() {}
                    return function r(u, c) {
                        function s() {
                            var t = new l();
                            return o(t.init) && t.init.apply(t, arguments), t;
                        }
                        function l() {}
                        c === n && ((c = u), (u = Object)), (s.Bare = l);
                        var f,
                            d = (a[t] = u[t]),
                            p = (l[t] = s[t] = new a());
                        return (
                            (p.constructor = s),
                            (s.mixin = function (e) {
                                return (l[t] = s[t] = r(s, e)[t]), s;
                            }),
                            (s.open = function (t) {
                                if (((f = {}), o(t) ? (f = t.call(s, p, d, s, u)) : i(t) && (f = t), i(f))) for (var n in f) e.call(f, n) && (p[n] = f[n]);
                                return o(p.init) || (p.init = u), s;
                            }),
                            s.open(c)
                        );
                    };
                })("prototype", {}.hasOwnProperty),
                f = {
                    ease: [
                        "ease",
                        function (t, e, n, r) {
                            var i = (t /= r) * t,
                                o = i * t;
                            return e + n * (-2.75 * o * i + 11 * i * i + -15.5 * o + 8 * i + 0.25 * t);
                        },
                    ],
                    "ease-in": [
                        "ease-in",
                        function (t, e, n, r) {
                            var i = (t /= r) * t,
                                o = i * t;
                            return e + n * (-1 * o * i + 3 * i * i + -3 * o + 2 * i);
                        },
                    ],
                    "ease-out": [
                        "ease-out",
                        function (t, e, n, r) {
                            var i = (t /= r) * t,
                                o = i * t;
                            return e + n * (0.3 * o * i + -1.6 * i * i + 2.2 * o + -1.8 * i + 1.9 * t);
                        },
                    ],
                    "ease-in-out": [
                        "ease-in-out",
                        function (t, e, n, r) {
                            var i = (t /= r) * t,
                                o = i * t;
                            return e + n * (2 * o * i + -5 * i * i + 2 * o + 2 * i);
                        },
                    ],
                    linear: [
                        "linear",
                        function (t, e, n, r) {
                            return (n * t) / r + e;
                        },
                    ],
                    "ease-in-quad": [
                        "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
                        function (t, e, n, r) {
                            return n * (t /= r) * t + e;
                        },
                    ],
                    "ease-out-quad": [
                        "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
                        function (t, e, n, r) {
                            return -n * (t /= r) * (t - 2) + e;
                        },
                    ],
                    "ease-in-out-quad": [
                        "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
                        function (t, e, n, r) {
                            return (t /= r / 2) < 1 ? (n / 2) * t * t + e : (-n / 2) * (--t * (t - 2) - 1) + e;
                        },
                    ],
                    "ease-in-cubic": [
                        "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
                        function (t, e, n, r) {
                            return n * (t /= r) * t * t + e;
                        },
                    ],
                    "ease-out-cubic": [
                        "cubic-bezier(0.215, 0.610, 0.355, 1)",
                        function (t, e, n, r) {
                            return n * ((t = t / r - 1) * t * t + 1) + e;
                        },
                    ],
                    "ease-in-out-cubic": [
                        "cubic-bezier(0.645, 0.045, 0.355, 1)",
                        function (t, e, n, r) {
                            return (t /= r / 2) < 1 ? (n / 2) * t * t * t + e : (n / 2) * ((t -= 2) * t * t + 2) + e;
                        },
                    ],
                    "ease-in-quart": [
                        "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
                        function (t, e, n, r) {
                            return n * (t /= r) * t * t * t + e;
                        },
                    ],
                    "ease-out-quart": [
                        "cubic-bezier(0.165, 0.840, 0.440, 1)",
                        function (t, e, n, r) {
                            return -n * ((t = t / r - 1) * t * t * t - 1) + e;
                        },
                    ],
                    "ease-in-out-quart": [
                        "cubic-bezier(0.770, 0, 0.175, 1)",
                        function (t, e, n, r) {
                            return (t /= r / 2) < 1 ? (n / 2) * t * t * t * t + e : (-n / 2) * ((t -= 2) * t * t * t - 2) + e;
                        },
                    ],
                    "ease-in-quint": [
                        "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
                        function (t, e, n, r) {
                            return n * (t /= r) * t * t * t * t + e;
                        },
                    ],
                    "ease-out-quint": [
                        "cubic-bezier(0.230, 1, 0.320, 1)",
                        function (t, e, n, r) {
                            return n * ((t = t / r - 1) * t * t * t * t + 1) + e;
                        },
                    ],
                    "ease-in-out-quint": [
                        "cubic-bezier(0.860, 0, 0.070, 1)",
                        function (t, e, n, r) {
                            return (t /= r / 2) < 1 ? (n / 2) * t * t * t * t * t + e : (n / 2) * ((t -= 2) * t * t * t * t + 2) + e;
                        },
                    ],
                    "ease-in-sine": [
                        "cubic-bezier(0.470, 0, 0.745, 0.715)",
                        function (t, e, n, r) {
                            return -n * Math.cos((t / r) * (Math.PI / 2)) + n + e;
                        },
                    ],
                    "ease-out-sine": [
                        "cubic-bezier(0.390, 0.575, 0.565, 1)",
                        function (t, e, n, r) {
                            return n * Math.sin((t / r) * (Math.PI / 2)) + e;
                        },
                    ],
                    "ease-in-out-sine": [
                        "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
                        function (t, e, n, r) {
                            return (-n / 2) * (Math.cos((Math.PI * t) / r) - 1) + e;
                        },
                    ],
                    "ease-in-expo": [
                        "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
                        function (t, e, n, r) {
                            return 0 === t ? e : n * Math.pow(2, 10 * (t / r - 1)) + e;
                        },
                    ],
                    "ease-out-expo": [
                        "cubic-bezier(0.190, 1, 0.220, 1)",
                        function (t, e, n, r) {
                            return t === r ? e + n : n * (1 - Math.pow(2, (-10 * t) / r)) + e;
                        },
                    ],
                    "ease-in-out-expo": [
                        "cubic-bezier(1, 0, 0, 1)",
                        function (t, e, n, r) {
                            return 0 === t ? e : t === r ? e + n : (t /= r / 2) < 1 ? (n / 2) * Math.pow(2, 10 * (t - 1)) + e : (n / 2) * (2 - Math.pow(2, -10 * --t)) + e;
                        },
                    ],
                    "ease-in-circ": [
                        "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
                        function (t, e, n, r) {
                            return -n * (Math.sqrt(1 - (t /= r) * t) - 1) + e;
                        },
                    ],
                    "ease-out-circ": [
                        "cubic-bezier(0.075, 0.820, 0.165, 1)",
                        function (t, e, n, r) {
                            return n * Math.sqrt(1 - (t = t / r - 1) * t) + e;
                        },
                    ],
                    "ease-in-out-circ": [
                        "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
                        function (t, e, n, r) {
                            return (t /= r / 2) < 1 ? (-n / 2) * (Math.sqrt(1 - t * t) - 1) + e : (n / 2) * (Math.sqrt(1 - (t -= 2) * t) + 1) + e;
                        },
                    ],
                    "ease-in-back": [
                        "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
                        function (t, e, n, r, i) {
                            return void 0 === i && (i = 1.70158), n * (t /= r) * t * ((i + 1) * t - i) + e;
                        },
                    ],
                    "ease-out-back": [
                        "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
                        function (t, e, n, r, i) {
                            return void 0 === i && (i = 1.70158), n * ((t = t / r - 1) * t * ((i + 1) * t + i) + 1) + e;
                        },
                    ],
                    "ease-in-out-back": [
                        "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
                        function (t, e, n, r, i) {
                            return void 0 === i && (i = 1.70158), (t /= r / 2) < 1 ? (n / 2) * t * t * ((1 + (i *= 1.525)) * t - i) + e : (n / 2) * ((t -= 2) * t * ((1 + (i *= 1.525)) * t + i) + 2) + e;
                        },
                    ],
                },
                d = { "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)", "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)", "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)" },
                p = document,
                v = window,
                h = "bkwld-tram",
                g = /[\-\.0-9]/g,
                E = /[A-Z]/,
                m = "number",
                y = /^(rgb|#)/,
                _ = /(em|cm|mm|in|pt|pc|px)$/,
                I = /(em|cm|mm|in|pt|pc|px|%)$/,
                b = /(deg|rad|turn)$/,
                w = "unitless",
                T = /(all|none) 0s ease 0s/,
                O = /^(width|height)$/,
                A = " ",
                x = p.createElement("a"),
                S = ["Webkit", "Moz", "O", "ms"],
                R = ["-webkit-", "-moz-", "-o-", "-ms-"],
                C = function (t) {
                    if (t in x.style) return { dom: t, css: t };
                    var e,
                        n,
                        r = "",
                        i = t.split("-");
                    for (e = 0; e < i.length; e++) r += i[e].charAt(0).toUpperCase() + i[e].slice(1);
                    for (e = 0; e < S.length; e++) if ((n = S[e] + r) in x.style) return { dom: n, css: R[e] + t };
                },
                N = (e.support = { bind: Function.prototype.bind, transform: C("transform"), transition: C("transition"), backface: C("backface-visibility"), timing: C("transition-timing-function") });
            if (N.transition) {
                var L = N.timing.dom;
                if (((x.style[L] = f["ease-in-back"][0]), !x.style[L])) for (var D in d) f[D][0] = d[D];
            }
            var P = (e.frame = (function () {
                    var t = v.requestAnimationFrame || v.webkitRequestAnimationFrame || v.mozRequestAnimationFrame || v.oRequestAnimationFrame || v.msRequestAnimationFrame;
                    return t && N.bind
                        ? t.bind(v)
                        : function (t) {
                              v.setTimeout(t, 16);
                          };
                })()),
                M = (e.now = (function () {
                    var t = v.performance,
                        e = t && (t.now || t.webkitNow || t.msNow || t.mozNow);
                    return e && N.bind
                        ? e.bind(t)
                        : Date.now ||
                              function () {
                                  return +new Date();
                              };
                })()),
                j = l(function (e) {
                    function i(t, e) {
                        var n = (function (t) {
                                for (var e = -1, n = t ? t.length : 0, r = []; ++e < n; ) {
                                    var i = t[e];
                                    i && r.push(i);
                                }
                                return r;
                            })(("" + t).split(A)),
                            r = n[0];
                        e = e || {};
                        var i = Q[r];
                        if (!i) return s("Unsupported property: " + r);
                        if (!e.weak || !this.props[r]) {
                            var o = i[0],
                                a = this.props[r];
                            return a || (a = this.props[r] = new o.Bare()), a.init(this.$el, n, i, e), a;
                        }
                    }
                    function o(t, e, n) {
                        if (t) {
                            var o = (0, r.default)(t);
                            if ((e || (this.timer && this.timer.destroy(), (this.queue = []), (this.active = !1)), "number" == o && e)) return (this.timer = new W({ duration: t, context: this, complete: a })), void (this.active = !0);
                            if ("string" == o && e) {
                                switch (t) {
                                    case "hide":
                                        l.call(this);
                                        break;
                                    case "stop":
                                        u.call(this);
                                        break;
                                    case "redraw":
                                        f.call(this);
                                        break;
                                    default:
                                        i.call(this, t, n && n[1]);
                                }
                                return a.call(this);
                            }
                            if ("function" == o) return void t.call(this, this);
                            if ("object" == o) {
                                var s = 0;
                                p.call(
                                    this,
                                    t,
                                    function (t, e) {
                                        t.span > s && (s = t.span), t.stop(), t.animate(e);
                                    },
                                    function (t) {
                                        "wait" in t && (s = c(t.wait, 0));
                                    }
                                ),
                                    d.call(this),
                                    s > 0 && ((this.timer = new W({ duration: s, context: this })), (this.active = !0), e && (this.timer.complete = a));
                                var v = this,
                                    h = !1,
                                    g = {};
                                P(function () {
                                    p.call(v, t, function (t) {
                                        t.active && ((h = !0), (g[t.name] = t.nextStyle));
                                    }),
                                        h && v.$el.css(g);
                                });
                            }
                        }
                    }
                    function a() {
                        if ((this.timer && this.timer.destroy(), (this.active = !1), this.queue.length)) {
                            var t = this.queue.shift();
                            o.call(this, t.options, !0, t.args);
                        }
                    }
                    function u(t) {
                        var e;
                        this.timer && this.timer.destroy(),
                            (this.queue = []),
                            (this.active = !1),
                            "string" == typeof t ? ((e = {})[t] = 1) : (e = "object" == (0, r.default)(t) && null != t ? t : this.props),
                            p.call(this, e, v),
                            d.call(this);
                    }
                    function l() {
                        u.call(this), (this.el.style.display = "none");
                    }
                    function f() {
                        this.el.offsetHeight;
                    }
                    function d() {
                        var t,
                            e,
                            n = [];
                        for (t in (this.upstream && n.push(this.upstream), this.props)) (e = this.props[t]).active && n.push(e.string);
                        (n = n.join(",")), this.style !== n && ((this.style = n), (this.el.style[N.transition.dom] = n));
                    }
                    function p(t, e, r) {
                        var o,
                            a,
                            u,
                            c,
                            s = e !== v,
                            l = {};
                        for (o in t) (u = t[o]), o in q ? (l.transform || (l.transform = {}), (l.transform[o] = u)) : (E.test(o) && (o = n(o)), o in Q ? (l[o] = u) : (c || (c = {}), (c[o] = u)));
                        for (o in l) {
                            if (((u = l[o]), !(a = this.props[o]))) {
                                if (!s) continue;
                                a = i.call(this, o);
                            }
                            e.call(this, a, u);
                        }
                        r && c && r.call(this, c);
                    }
                    function v(t) {
                        t.stop();
                    }
                    function g(t, e) {
                        t.set(e);
                    }
                    function m(t) {
                        this.$el.css(t);
                    }
                    function y(t, n) {
                        e[t] = function () {
                            return this.children
                                ? function (t, e) {
                                      var n,
                                          r = this.children.length;
                                      for (n = 0; r > n; n++) t.apply(this.children[n], e);
                                      return this;
                                  }.call(this, n, arguments)
                                : (this.el && n.apply(this, arguments), this);
                        };
                    }
                    (e.init = function (e) {
                        if (((this.$el = t(e)), (this.el = this.$el[0]), (this.props = {}), (this.queue = []), (this.style = ""), (this.active = !1), H.keepInherited && !H.fallback)) {
                            var n = Y(this.el, "transition");
                            n && !T.test(n) && (this.upstream = n);
                        }
                        N.backface && H.hideBackface && z(this.el, N.backface.css, "hidden");
                    }),
                        y("add", i),
                        y("start", o),
                        y("wait", function (t) {
                            (t = c(t, 0)), this.active ? this.queue.push({ options: t }) : ((this.timer = new W({ duration: t, context: this, complete: a })), (this.active = !0));
                        }),
                        y("then", function (t) {
                            return this.active ? (this.queue.push({ options: t, args: arguments }), void (this.timer.complete = a)) : s("No active transition timer. Use start() or wait() before then().");
                        }),
                        y("next", a),
                        y("stop", u),
                        y("set", function (t) {
                            u.call(this, t), p.call(this, t, g, m);
                        }),
                        y("show", function (t) {
                            "string" != typeof t && (t = "block"), (this.el.style.display = t);
                        }),
                        y("hide", l),
                        y("redraw", f),
                        y("destroy", function () {
                            u.call(this), t.removeData(this.el, h), (this.$el = this.el = null);
                        });
                }),
                k = l(j, function (e) {
                    function n(e, n) {
                        var r = t.data(e, h) || t.data(e, h, new j.Bare());
                        return r.el || r.init(e), n ? r.start(n) : r;
                    }
                    e.init = function (e, r) {
                        var i = t(e);
                        if (!i.length) return this;
                        if (1 === i.length) return n(i[0], r);
                        var o = [];
                        return (
                            i.each(function (t, e) {
                                o.push(n(e, r));
                            }),
                            (this.children = o),
                            this
                        );
                    };
                }),
                F = l(function (t) {
                    function e() {
                        var t = this.get();
                        this.update("auto");
                        var e = this.get();
                        return this.update(t), e;
                    }
                    function n(t) {
                        var e = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(t);
                        return (e ? o(e[1], e[2], e[3]) : t).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3");
                    }
                    var i = 500,
                        a = "ease",
                        u = 0;
                    (t.init = function (t, e, n, r) {
                        (this.$el = t), (this.el = t[0]);
                        var o = e[0];
                        n[2] && (o = n[2]),
                            K[o] && (o = K[o]),
                            (this.name = o),
                            (this.type = n[1]),
                            (this.duration = c(e[1], this.duration, i)),
                            (this.ease = (function (t, e, n) {
                                return void 0 !== e && (n = e), t in f ? t : n;
                            })(e[2], this.ease, a)),
                            (this.delay = c(e[3], this.delay, u)),
                            (this.span = this.duration + this.delay),
                            (this.active = !1),
                            (this.nextStyle = null),
                            (this.auto = O.test(this.name)),
                            (this.unit = r.unit || this.unit || H.defaultUnit),
                            (this.angle = r.angle || this.angle || H.defaultAngle),
                            H.fallback || r.fallback
                                ? (this.animate = this.fallback)
                                : ((this.animate = this.transition), (this.string = this.name + A + this.duration + "ms" + ("ease" != this.ease ? A + f[this.ease][0] : "") + (this.delay ? A + this.delay + "ms" : "")));
                    }),
                        (t.set = function (t) {
                            (t = this.convert(t, this.type)), this.update(t), this.redraw();
                        }),
                        (t.transition = function (t) {
                            (this.active = !0), (t = this.convert(t, this.type)), this.auto && ("auto" == this.el.style[this.name] && (this.update(this.get()), this.redraw()), "auto" == t && (t = e.call(this))), (this.nextStyle = t);
                        }),
                        (t.fallback = function (t) {
                            var n = this.el.style[this.name] || this.convert(this.get(), this.type);
                            (t = this.convert(t, this.type)),
                                this.auto && ("auto" == n && (n = this.convert(this.get(), this.type)), "auto" == t && (t = e.call(this))),
                                (this.tween = new V({ from: n, to: t, duration: this.duration, delay: this.delay, ease: this.ease, update: this.update, context: this }));
                        }),
                        (t.get = function () {
                            return Y(this.el, this.name);
                        }),
                        (t.update = function (t) {
                            z(this.el, this.name, t);
                        }),
                        (t.stop = function () {
                            (this.active || this.nextStyle) && ((this.active = !1), (this.nextStyle = null), z(this.el, this.name, this.get()));
                            var t = this.tween;
                            t && t.context && t.destroy();
                        }),
                        (t.convert = function (t, e) {
                            if ("auto" == t && this.auto) return t;
                            var i,
                                o = "number" == typeof t,
                                a = "string" == typeof t;
                            switch (e) {
                                case m:
                                    if (o) return t;
                                    if (a && "" === t.replace(g, "")) return +t;
                                    i = "number(unitless)";
                                    break;
                                case y:
                                    if (a) {
                                        if ("" === t && this.original) return this.original;
                                        if (e.test(t)) return "#" == t.charAt(0) && 7 == t.length ? t : n(t);
                                    }
                                    i = "hex or rgb string";
                                    break;
                                case _:
                                    if (o) return t + this.unit;
                                    if (a && e.test(t)) return t;
                                    i = "number(px) or string(unit)";
                                    break;
                                case I:
                                    if (o) return t + this.unit;
                                    if (a && e.test(t)) return t;
                                    i = "number(px) or string(unit or %)";
                                    break;
                                case b:
                                    if (o) return t + this.angle;
                                    if (a && e.test(t)) return t;
                                    i = "number(deg) or string(angle)";
                                    break;
                                case w:
                                    if (o) return t;
                                    if (a && I.test(t)) return t;
                                    i = "number(unitless) or string(unit or %)";
                            }
                            return (
                                (function (t, e) {
                                    s("Type warning: Expected: [" + t + "] Got: [" + (0, r.default)(e) + "] " + e);
                                })(i, t),
                                t
                            );
                        }),
                        (t.redraw = function () {
                            this.el.offsetHeight;
                        });
                }),
                G = l(F, function (t, e) {
                    t.init = function () {
                        e.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), y));
                    };
                }),
                X = l(F, function (t, e) {
                    (t.init = function () {
                        e.init.apply(this, arguments), (this.animate = this.fallback);
                    }),
                        (t.get = function () {
                            return this.$el[this.name]();
                        }),
                        (t.update = function (t) {
                            this.$el[this.name](t);
                        });
                }),
                U = l(F, function (t, e) {
                    function n(t, e) {
                        var n, r, i, o, a;
                        for (n in t) (i = (o = q[n])[0]), (r = o[1] || n), (a = this.convert(t[n], i)), e.call(this, r, a, i);
                    }
                    (t.init = function () {
                        e.init.apply(this, arguments), this.current || ((this.current = {}), q.perspective && H.perspective && ((this.current.perspective = H.perspective), z(this.el, this.name, this.style(this.current)), this.redraw()));
                    }),
                        (t.set = function (t) {
                            n.call(this, t, function (t, e) {
                                this.current[t] = e;
                            }),
                                z(this.el, this.name, this.style(this.current)),
                                this.redraw();
                        }),
                        (t.transition = function (t) {
                            var e = this.values(t);
                            this.tween = new B({ current: this.current, values: e, duration: this.duration, delay: this.delay, ease: this.ease });
                            var n,
                                r = {};
                            for (n in this.current) r[n] = n in e ? e[n] : this.current[n];
                            (this.active = !0), (this.nextStyle = this.style(r));
                        }),
                        (t.fallback = function (t) {
                            var e = this.values(t);
                            this.tween = new B({ current: this.current, values: e, duration: this.duration, delay: this.delay, ease: this.ease, update: this.update, context: this });
                        }),
                        (t.update = function () {
                            z(this.el, this.name, this.style(this.current));
                        }),
                        (t.style = function (t) {
                            var e,
                                n = "";
                            for (e in t) n += e + "(" + t[e] + ") ";
                            return n;
                        }),
                        (t.values = function (t) {
                            var e,
                                r = {};
                            return (
                                n.call(this, t, function (t, n, i) {
                                    (r[t] = n), void 0 === this.current[t] && ((e = 0), ~t.indexOf("scale") && (e = 1), (this.current[t] = this.convert(e, i)));
                                }),
                                r
                            );
                        });
                }),
                V = l(function (e) {
                    function n() {
                        var t,
                            e,
                            r,
                            i = c.length;
                        if (i) for (P(n), e = M(), t = i; t--; ) (r = c[t]) && r.render(e);
                    }
                    var r = { ease: f.ease[1], from: 0, to: 1 };
                    (e.init = function (t) {
                        (this.duration = t.duration || 0), (this.delay = t.delay || 0);
                        var e = t.ease || r.ease;
                        f[e] && (e = f[e][1]), "function" != typeof e && (e = r.ease), (this.ease = e), (this.update = t.update || a), (this.complete = t.complete || a), (this.context = t.context || this), (this.name = t.name);
                        var n = t.from,
                            i = t.to;
                        void 0 === n && (n = r.from),
                            void 0 === i && (i = r.to),
                            (this.unit = t.unit || ""),
                            "number" == typeof n && "number" == typeof i ? ((this.begin = n), (this.change = i - n)) : this.format(i, n),
                            (this.value = this.begin + this.unit),
                            (this.start = M()),
                            !1 !== t.autoplay && this.play();
                    }),
                        (e.play = function () {
                            var t;
                            this.active || (this.start || (this.start = M()), (this.active = !0), (t = this), 1 === c.push(t) && P(n));
                        }),
                        (e.stop = function () {
                            var e, n, r;
                            this.active && ((this.active = !1), (e = this), (r = t.inArray(e, c)) >= 0 && ((n = c.slice(r + 1)), (c.length = r), n.length && (c = c.concat(n))));
                        }),
                        (e.render = function (t) {
                            var e,
                                n = t - this.start;
                            if (this.delay) {
                                if (n <= this.delay) return;
                                n -= this.delay;
                            }
                            if (n < this.duration) {
                                var r = this.ease(n, 0, 1, this.duration);
                                return (
                                    (e = this.startRGB
                                        ? (function (t, e, n) {
                                              return o(t[0] + n * (e[0] - t[0]), t[1] + n * (e[1] - t[1]), t[2] + n * (e[2] - t[2]));
                                          })(this.startRGB, this.endRGB, r)
                                        : (function (t) {
                                              return Math.round(t * s) / s;
                                          })(this.begin + r * this.change)),
                                    (this.value = e + this.unit),
                                    void this.update.call(this.context, this.value)
                                );
                            }
                            (e = this.endHex || this.begin + this.change), (this.value = e + this.unit), this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy();
                        }),
                        (e.format = function (t, e) {
                            if (((e += ""), "#" == (t += "").charAt(0))) return (this.startRGB = i(e)), (this.endRGB = i(t)), (this.endHex = t), (this.begin = 0), void (this.change = 1);
                            if (!this.unit) {
                                var n = e.replace(g, "");
                                n !== t.replace(g, "") && u("tween", e, t), (this.unit = n);
                            }
                            (e = parseFloat(e)), (t = parseFloat(t)), (this.begin = this.value = e), (this.change = t - e);
                        }),
                        (e.destroy = function () {
                            this.stop(), (this.context = null), (this.ease = this.update = this.complete = a);
                        });
                    var c = [],
                        s = 1e3;
                }),
                W = l(V, function (t) {
                    (t.init = function (t) {
                        (this.duration = t.duration || 0), (this.complete = t.complete || a), (this.context = t.context), this.play();
                    }),
                        (t.render = function (t) {
                            t - this.start < this.duration || (this.complete.call(this.context), this.destroy());
                        });
                }),
                B = l(V, function (t, e) {
                    (t.init = function (t) {
                        var e, n;
                        for (e in ((this.context = t.context), (this.update = t.update), (this.tweens = []), (this.current = t.current), t.values))
                            (n = t.values[e]), this.current[e] !== n && this.tweens.push(new V({ name: e, from: this.current[e], to: n, duration: t.duration, delay: t.delay, ease: t.ease, autoplay: !1 }));
                        this.play();
                    }),
                        (t.render = function (t) {
                            var e,
                                n,
                                r = !1;
                            for (e = this.tweens.length; e--; ) (n = this.tweens[e]).context && (n.render(t), (this.current[n.name] = n.value), (r = !0));
                            return r ? void (this.update && this.update.call(this.context)) : this.destroy();
                        }),
                        (t.destroy = function () {
                            if ((e.destroy.call(this), this.tweens)) {
                                var t;
                                for (t = this.tweens.length; t--; ) this.tweens[t].destroy();
                                (this.tweens = null), (this.current = null);
                            }
                        });
                }),
                H = (e.config = { debug: !1, defaultUnit: "px", defaultAngle: "deg", keepInherited: !1, hideBackface: !1, perspective: "", fallback: !N.transition, agentTests: [] });
            (e.fallback = function (t) {
                if (!N.transition) return (H.fallback = !0);
                H.agentTests.push("(" + t + ")");
                var e = new RegExp(H.agentTests.join("|"), "i");
                H.fallback = e.test(navigator.userAgent);
            }),
                e.fallback("6.0.[2-5] Safari"),
                (e.tween = function (t) {
                    return new V(t);
                }),
                (e.delay = function (t, e, n) {
                    return new W({ complete: e, duration: t, context: n });
                }),
                (t.fn.tram = function (t) {
                    return e.call(null, this, t);
                });
            var z = t.style,
                Y = t.css,
                K = { transform: N.transform && N.transform.css },
                Q = {
                    color: [G, y],
                    background: [G, y, "background-color"],
                    "outline-color": [G, y],
                    "border-color": [G, y],
                    "border-top-color": [G, y],
                    "border-right-color": [G, y],
                    "border-bottom-color": [G, y],
                    "border-left-color": [G, y],
                    "border-width": [F, _],
                    "border-top-width": [F, _],
                    "border-right-width": [F, _],
                    "border-bottom-width": [F, _],
                    "border-left-width": [F, _],
                    "border-spacing": [F, _],
                    "letter-spacing": [F, _],
                    margin: [F, _],
                    "margin-top": [F, _],
                    "margin-right": [F, _],
                    "margin-bottom": [F, _],
                    "margin-left": [F, _],
                    padding: [F, _],
                    "padding-top": [F, _],
                    "padding-right": [F, _],
                    "padding-bottom": [F, _],
                    "padding-left": [F, _],
                    "outline-width": [F, _],
                    opacity: [F, m],
                    top: [F, I],
                    right: [F, I],
                    bottom: [F, I],
                    left: [F, I],
                    "font-size": [F, I],
                    "text-indent": [F, I],
                    "word-spacing": [F, I],
                    width: [F, I],
                    "min-width": [F, I],
                    "max-width": [F, I],
                    height: [F, I],
                    "min-height": [F, I],
                    "max-height": [F, I],
                    "line-height": [F, w],
                    "scroll-top": [X, m, "scrollTop"],
                    "scroll-left": [X, m, "scrollLeft"],
                },
                q = {};
            N.transform && ((Q.transform = [U]), (q = { x: [I, "translateX"], y: [I, "translateY"], rotate: [b], rotateX: [b], rotateY: [b], scale: [m], scaleX: [m], scaleY: [m], skew: [b], skewX: [b], skewY: [b] })),
                N.transform && N.backface && ((q.z = [I, "translateZ"]), (q.rotateZ = [b]), (q.scaleZ = [m]), (q.perspective = [_]));
            var $ = /ms/,
                Z = /s|\./;
            return (t.tram = e);
        })(window.jQuery);
    },
    function (t, e, n) {
        var r = n(15),
            i = n(131),
            o = n(67),
            a = n(37),
            u = n(68),
            c = n(17),
            s = n(69),
            l = Object.getOwnPropertyDescriptor;
        e.f = r
            ? l
            : function (t, e) {
                  if (((t = a(t)), (e = u(e, !0)), s))
                      try {
                          return l(t, e);
                      } catch (t) {}
                  if (c(t, e)) return o(!i.f.call(t, e), t[e]);
              };
    },
    function (t, e) {
        t.exports = function (t, e) {
            return { enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e };
        };
    },
    function (t, e, n) {
        var r = n(24);
        t.exports = function (t, e) {
            if (!r(t)) return t;
            var n, i;
            if (e && "function" == typeof (n = t.toString) && !r((i = n.call(t)))) return i;
            if ("function" == typeof (n = t.valueOf) && !r((i = n.call(t)))) return i;
            if (!e && "function" == typeof (n = t.toString) && !r((i = n.call(t)))) return i;
            throw TypeError("Can't convert object to primitive value");
        };
    },
    function (t, e, n) {
        var r = n(15),
            i = n(16),
            o = n(70);
        t.exports =
            !r &&
            !i(function () {
                return (
                    7 !=
                    Object.defineProperty(o("div"), "a", {
                        get: function () {
                            return 7;
                        },
                    }).a
                );
            });
    },
    function (t, e, n) {
        var r = n(4),
            i = n(24),
            o = r.document,
            a = i(o) && i(o.createElement);
        t.exports = function (t) {
            return a ? o.createElement(t) : {};
        };
    },
    function (t, e, n) {
        var r = n(26);
        t.exports = r("native-function-to-string", Function.toString);
    },
    function (t, e, n) {
        var r = n(26),
            i = n(73),
            o = r("keys");
        t.exports = function (t) {
            return o[t] || (o[t] = i(t));
        };
    },
    function (t, e) {
        var n = 0,
            r = Math.random();
        t.exports = function (t) {
            return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++n + r).toString(36);
        };
    },
    function (t, e, n) {
        var r = n(141),
            i = n(4),
            o = function (t) {
                return "function" == typeof t ? t : void 0;
            };
        t.exports = function (t, e) {
            return arguments.length < 2 ? o(r[t]) || o(i[t]) : (r[t] && r[t][e]) || (i[t] && i[t][e]);
        };
    },
    function (t, e, n) {
        var r = n(17),
            i = n(37),
            o = n(76).indexOf,
            a = n(40);
        t.exports = function (t, e) {
            var n,
                u = i(t),
                c = 0,
                s = [];
            for (n in u) !r(a, n) && r(u, n) && s.push(n);
            for (; e.length > c; ) r(u, (n = e[c++])) && (~o(s, n) || s.push(n));
            return s;
        };
    },
    function (t, e, n) {
        var r = n(37),
            i = n(143),
            o = n(144),
            a = function (t) {
                return function (e, n, a) {
                    var u,
                        c = r(e),
                        s = i(c.length),
                        l = o(a, s);
                    if (t && n != n) {
                        for (; s > l; ) if ((u = c[l++]) != u) return !0;
                    } else for (; s > l; l++) if ((t || l in c) && c[l] === n) return t || l || 0;
                    return !t && -1;
                };
            };
        t.exports = { includes: a(!0), indexOf: a(!1) };
    },
    function (t, e) {
        var n = Math.ceil,
            r = Math.floor;
        t.exports = function (t) {
            return isNaN((t = +t)) ? 0 : (t > 0 ? r : n)(t);
        };
    },
    function (t, e, n) {
        "use strict";
        n.r(e);
        var r = n(42);
        n.d(e, "createStore", function () {
            return r.default;
        });
        var i = n(81);
        n.d(e, "combineReducers", function () {
            return i.default;
        });
        var o = n(83);
        n.d(e, "bindActionCreators", function () {
            return o.default;
        });
        var a = n(84);
        n.d(e, "applyMiddleware", function () {
            return a.default;
        });
        var u = n(43);
        n.d(e, "compose", function () {
            return u.default;
        });
        n(82);
    },
    function (t, e, n) {
        "use strict";
        n.r(e);
        var r = n(157),
            i = n(162),
            o = n(164),
            a = "[object Object]",
            u = Function.prototype,
            c = Object.prototype,
            s = u.toString,
            l = c.hasOwnProperty,
            f = s.call(Object);
        e.default = function (t) {
            if (!Object(o.default)(t) || Object(r.default)(t) != a) return !1;
            var e = Object(i.default)(t);
            if (null === e) return !0;
            var n = l.call(e, "constructor") && e.constructor;
            return "function" == typeof n && n instanceof n && s.call(n) == f;
        };
    },
    function (t, e, n) {
        "use strict";
        n.r(e);
        var r = n(158).default.Symbol;
        e.default = r;
    },
    function (t, e, n) {
        "use strict";
        n.r(e),
            n.d(e, "default", function () {
                return o;
            });
        var r = n(42);
        n(79), n(82);
        function i(t, e) {
            var n = e && e.type;
            return "Given action " + ((n && '"' + n.toString() + '"') || "an action") + ', reducer "' + t + '" returned undefined. To ignore an action, you must explicitly return the previous state.';
        }
        function o(t) {
            for (var e = Object.keys(t), n = {}, o = 0; o < e.length; o++) {
                var a = e[o];
                0, "function" == typeof t[a] && (n[a] = t[a]);
            }
            var u,
                c = Object.keys(n);
            try {
                !(function (t) {
                    Object.keys(t).forEach(function (e) {
                        var n = t[e];
                        if (void 0 === n(void 0, { type: r.ActionTypes.INIT }))
                            throw new Error(
                                'Reducer "' + e + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.'
                            );
                        if (void 0 === n(void 0, { type: "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".") }))
                            throw new Error(
                                'Reducer "' +
                                    e +
                                    "\" returned undefined when probed with a random type. Don't try to handle " +
                                    r.ActionTypes.INIT +
                                    ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.'
                            );
                    });
                })(n);
            } catch (t) {
                u = t;
            }
            return function () {
                var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                    e = arguments[1];
                if (u) throw u;
                for (var r = !1, o = {}, a = 0; a < c.length; a++) {
                    var s = c[a],
                        l = n[s],
                        f = t[s],
                        d = l(f, e);
                    if (void 0 === d) {
                        var p = i(s, e);
                        throw new Error(p);
                    }
                    (o[s] = d), (r = r || d !== f);
                }
                return r ? o : t;
            };
        }
    },
    function (t, e, n) {
        "use strict";
        function r(t) {
            "undefined" != typeof console && "function" == typeof console.error && console.error(t);
            try {
                throw new Error(t);
            } catch (t) {}
        }
        n.r(e),
            n.d(e, "default", function () {
                return r;
            });
    },
    function (t, e, n) {
        "use strict";
        function r(t, e) {
            return function () {
                return e(t.apply(void 0, arguments));
            };
        }
        function i(t, e) {
            if ("function" == typeof t) return r(t, e);
            if ("object" != typeof t || null === t)
                throw new Error("bindActionCreators expected an object or a function, instead received " + (null === t ? "null" : typeof t) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
            for (var n = Object.keys(t), i = {}, o = 0; o < n.length; o++) {
                var a = n[o],
                    u = t[a];
                "function" == typeof u && (i[a] = r(u, e));
            }
            return i;
        }
        n.r(e),
            n.d(e, "default", function () {
                return i;
            });
    },
    function (t, e, n) {
        "use strict";
        n.r(e),
            n.d(e, "default", function () {
                return o;
            });
        var r = n(43),
            i =
                Object.assign ||
                function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                    }
                    return t;
                };
        function o() {
            for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
            return function (t) {
                return function (n, o, a) {
                    var u,
                        c = t(n, o, a),
                        s = c.dispatch,
                        l = {
                            getState: c.getState,
                            dispatch: function (t) {
                                return s(t);
                            },
                        };
                    return (
                        (u = e.map(function (t) {
                            return t(l);
                        })),
                        (s = r.default.apply(void 0, u)(c.dispatch)),
                        i({}, c, { dispatch: s })
                    );
                };
            };
        }
    },
    function (t, e, n) {
        var r = n(86)(n(242));
        t.exports = r;
    },
    function (t, e, n) {
        var r = n(7),
            i = n(12),
            o = n(33);
        t.exports = function (t) {
            return function (e, n, a) {
                var u = Object(e);
                if (!i(e)) {
                    var c = r(n, 3);
                    (e = o(e)),
                        (n = function (t) {
                            return c(u[t], t, u);
                        });
                }
                var s = t(e, n, a);
                return s > -1 ? u[c ? e[s] : s] : void 0;
            };
        };
    },
    function (t, e, n) {
        var r = n(29),
            i = n(184),
            o = n(185),
            a = n(186),
            u = n(187),
            c = n(188);
        function s(t) {
            var e = (this.__data__ = new r(t));
            this.size = e.size;
        }
        (s.prototype.clear = i), (s.prototype.delete = o), (s.prototype.get = a), (s.prototype.has = u), (s.prototype.set = c), (t.exports = s);
    },
    function (t, e, n) {
        var r = n(11),
            i = n(6),
            o = "[object AsyncFunction]",
            a = "[object Function]",
            u = "[object GeneratorFunction]",
            c = "[object Proxy]";
        t.exports = function (t) {
            if (!i(t)) return !1;
            var e = r(t);
            return e == a || e == u || e == o || e == c;
        };
    },
    function (t, e, n) {
        (function (e) {
            var n = "object" == typeof e && e && e.Object === Object && e;
            t.exports = n;
        }.call(this, n(23)));
    },
    function (t, e) {
        var n = Function.prototype.toString;
        t.exports = function (t) {
            if (null != t) {
                try {
                    return n.call(t);
                } catch (t) {}
                try {
                    return t + "";
                } catch (t) {}
            }
            return "";
        };
    },
    function (t, e, n) {
        var r = n(207),
            i = n(9);
        t.exports = function t(e, n, o, a, u) {
            return e === n || (null == e || null == n || (!i(e) && !i(n)) ? e != e && n != n : r(e, n, o, a, t, u));
        };
    },
    function (t, e, n) {
        var r = n(208),
            i = n(211),
            o = n(212),
            a = 1,
            u = 2;
        t.exports = function (t, e, n, c, s, l) {
            var f = n & a,
                d = t.length,
                p = e.length;
            if (d != p && !(f && p > d)) return !1;
            var v = l.get(t),
                h = l.get(e);
            if (v && h) return v == e && h == t;
            var g = -1,
                E = !0,
                m = n & u ? new r() : void 0;
            for (l.set(t, e), l.set(e, t); ++g < d; ) {
                var y = t[g],
                    _ = e[g];
                if (c) var I = f ? c(_, y, g, e, t, l) : c(y, _, g, t, e, l);
                if (void 0 !== I) {
                    if (I) continue;
                    E = !1;
                    break;
                }
                if (m) {
                    if (
                        !i(e, function (t, e) {
                            if (!o(m, e) && (y === t || s(y, t, n, c, l))) return m.push(e);
                        })
                    ) {
                        E = !1;
                        break;
                    }
                } else if (y !== _ && !s(y, _, n, c, l)) {
                    E = !1;
                    break;
                }
            }
            return l.delete(t), l.delete(e), E;
        };
    },
    function (t, e, n) {
        var r = n(48),
            i = n(1);
        t.exports = function (t, e, n) {
            var o = e(t);
            return i(t) ? o : r(o, n(t));
        };
    },
    function (t, e, n) {
        var r = n(219),
            i = n(95),
            o = Object.prototype.propertyIsEnumerable,
            a = Object.getOwnPropertySymbols,
            u = a
                ? function (t) {
                      return null == t
                          ? []
                          : ((t = Object(t)),
                            r(a(t), function (e) {
                                return o.call(t, e);
                            }));
                  }
                : i;
        t.exports = u;
    },
    function (t, e) {
        t.exports = function () {
            return [];
        };
    },
    function (t, e, n) {
        var r = n(220),
            i = n(34),
            o = n(1),
            a = n(49),
            u = n(50),
            c = n(51),
            s = Object.prototype.hasOwnProperty;
        t.exports = function (t, e) {
            var n = o(t),
                l = !n && i(t),
                f = !n && !l && a(t),
                d = !n && !l && !f && c(t),
                p = n || l || f || d,
                v = p ? r(t.length, String) : [],
                h = v.length;
            for (var g in t) (!e && !s.call(t, g)) || (p && ("length" == g || (f && ("offset" == g || "parent" == g)) || (d && ("buffer" == g || "byteLength" == g || "byteOffset" == g)) || u(g, h))) || v.push(g);
            return v;
        };
    },
    function (t, e) {
        t.exports = function (t) {
            return (
                t.webpackPolyfill ||
                    ((t.deprecate = function () {}),
                    (t.paths = []),
                    t.children || (t.children = []),
                    Object.defineProperty(t, "loaded", {
                        enumerable: !0,
                        get: function () {
                            return t.l;
                        },
                    }),
                    Object.defineProperty(t, "id", {
                        enumerable: !0,
                        get: function () {
                            return t.i;
                        },
                    }),
                    (t.webpackPolyfill = 1)),
                t
            );
        };
    },
    function (t, e) {
        t.exports = function (t, e) {
            return function (n) {
                return t(e(n));
            };
        };
    },
    function (t, e, n) {
        var r = n(8)(n(5), "WeakMap");
        t.exports = r;
    },
    function (t, e, n) {
        var r = n(6);
        t.exports = function (t) {
            return t == t && !r(t);
        };
    },
    function (t, e) {
        t.exports = function (t, e) {
            return function (n) {
                return null != n && n[t] === e && (void 0 !== e || t in Object(n));
            };
        };
    },
    function (t, e) {
        t.exports = function (t, e) {
            for (var n = -1, r = null == t ? 0 : t.length, i = Array(r); ++n < r; ) i[n] = e(t[n], n, t);
            return i;
        };
    },
    function (t, e) {
        t.exports = function (t) {
            return function (e) {
                return null == e ? void 0 : e[t];
            };
        };
    },
    function (t, e) {
        t.exports = function (t, e, n, r) {
            for (var i = t.length, o = n + (r ? 1 : -1); r ? o-- : ++o < i; ) if (e(t[o], o, t)) return o;
            return -1;
        };
    },
    function (t, e, n) {
        var r = n(243);
        t.exports = function (t) {
            var e = r(t),
                n = e % 1;
            return e == e ? (n ? e - n : e) : 0;
        };
    },
    function (t, e, n) {
        "use strict";
        var r = n(0);
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.inQuad = function (t) {
                return Math.pow(t, 2);
            }),
            (e.outQuad = function (t) {
                return -(Math.pow(t - 1, 2) - 1);
            }),
            (e.inOutQuad = function (t) {
                if ((t /= 0.5) < 1) return 0.5 * Math.pow(t, 2);
                return -0.5 * ((t -= 2) * t - 2);
            }),
            (e.inCubic = function (t) {
                return Math.pow(t, 3);
            }),
            (e.outCubic = function (t) {
                return Math.pow(t - 1, 3) + 1;
            }),
            (e.inOutCubic = function (t) {
                if ((t /= 0.5) < 1) return 0.5 * Math.pow(t, 3);
                return 0.5 * (Math.pow(t - 2, 3) + 2);
            }),
            (e.inQuart = function (t) {
                return Math.pow(t, 4);
            }),
            (e.outQuart = function (t) {
                return -(Math.pow(t - 1, 4) - 1);
            }),
            (e.inOutQuart = function (t) {
                if ((t /= 0.5) < 1) return 0.5 * Math.pow(t, 4);
                return -0.5 * ((t -= 2) * Math.pow(t, 3) - 2);
            }),
            (e.inQuint = function (t) {
                return Math.pow(t, 5);
            }),
            (e.outQuint = function (t) {
                return Math.pow(t - 1, 5) + 1;
            }),
            (e.inOutQuint = function (t) {
                if ((t /= 0.5) < 1) return 0.5 * Math.pow(t, 5);
                return 0.5 * (Math.pow(t - 2, 5) + 2);
            }),
            (e.inSine = function (t) {
                return 1 - Math.cos(t * (Math.PI / 2));
            }),
            (e.outSine = function (t) {
                return Math.sin(t * (Math.PI / 2));
            }),
            (e.inOutSine = function (t) {
                return -0.5 * (Math.cos(Math.PI * t) - 1);
            }),
            (e.inExpo = function (t) {
                return 0 === t ? 0 : Math.pow(2, 10 * (t - 1));
            }),
            (e.outExpo = function (t) {
                return 1 === t ? 1 : 1 - Math.pow(2, -10 * t);
            }),
            (e.inOutExpo = function (t) {
                if (0 === t) return 0;
                if (1 === t) return 1;
                if ((t /= 0.5) < 1) return 0.5 * Math.pow(2, 10 * (t - 1));
                return 0.5 * (2 - Math.pow(2, -10 * --t));
            }),
            (e.inCirc = function (t) {
                return -(Math.sqrt(1 - t * t) - 1);
            }),
            (e.outCirc = function (t) {
                return Math.sqrt(1 - Math.pow(t - 1, 2));
            }),
            (e.inOutCirc = function (t) {
                if ((t /= 0.5) < 1) return -0.5 * (Math.sqrt(1 - t * t) - 1);
                return 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
            }),
            (e.outBounce = function (t) {
                return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375 : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
            }),
            (e.inBack = function (t) {
                return t * t * ((o + 1) * t - o);
            }),
            (e.outBack = function (t) {
                return (t -= 1) * t * ((o + 1) * t + o) + 1;
            }),
            (e.inOutBack = function (t) {
                var e = o;
                if ((t /= 0.5) < 1) return t * t * ((1 + (e *= 1.525)) * t - e) * 0.5;
                return 0.5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2);
            }),
            (e.inElastic = function (t) {
                var e = o,
                    n = 0,
                    r = 1;
                if (0 === t) return 0;
                if (1 === t) return 1;
                n || (n = 0.3);
                r < 1 ? ((r = 1), (e = n / 4)) : (e = (n / (2 * Math.PI)) * Math.asin(1 / r));
                return -r * Math.pow(2, 10 * (t -= 1)) * Math.sin(((t - e) * (2 * Math.PI)) / n);
            }),
            (e.outElastic = function (t) {
                var e = o,
                    n = 0,
                    r = 1;
                if (0 === t) return 0;
                if (1 === t) return 1;
                n || (n = 0.3);
                r < 1 ? ((r = 1), (e = n / 4)) : (e = (n / (2 * Math.PI)) * Math.asin(1 / r));
                return r * Math.pow(2, -10 * t) * Math.sin(((t - e) * (2 * Math.PI)) / n) + 1;
            }),
            (e.inOutElastic = function (t) {
                var e = o,
                    n = 0,
                    r = 1;
                if (0 === t) return 0;
                if (2 == (t /= 0.5)) return 1;
                n || (n = 0.3 * 1.5);
                r < 1 ? ((r = 1), (e = n / 4)) : (e = (n / (2 * Math.PI)) * Math.asin(1 / r));
                if (t < 1) return r * Math.pow(2, 10 * (t -= 1)) * Math.sin(((t - e) * (2 * Math.PI)) / n) * -0.5;
                return r * Math.pow(2, -10 * (t -= 1)) * Math.sin(((t - e) * (2 * Math.PI)) / n) * 0.5 + 1;
            }),
            (e.swingFromTo = function (t) {
                var e = o;
                return (t /= 0.5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * 0.5 : 0.5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2);
            }),
            (e.swingFrom = function (t) {
                return t * t * ((o + 1) * t - o);
            }),
            (e.swingTo = function (t) {
                return (t -= 1) * t * ((o + 1) * t + o) + 1;
            }),
            (e.bounce = function (t) {
                return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375 : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
            }),
            (e.bouncePast = function (t) {
                return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 2 - (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) : t < 2.5 / 2.75 ? 2 - (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) : 2 - (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375);
            }),
            (e.easeInOut = e.easeOut = e.easeIn = e.ease = void 0);
        var i = r(n(107)),
            o = 1.70158,
            a = (0, i.default)(0.25, 0.1, 0.25, 1);
        e.ease = a;
        var u = (0, i.default)(0.42, 0, 1, 1);
        e.easeIn = u;
        var c = (0, i.default)(0, 0, 0.58, 1);
        e.easeOut = c;
        var s = (0, i.default)(0.42, 0, 0.58, 1);
        e.easeInOut = s;
    },
    function (t, e) {
        var n = 4,
            r = 0.001,
            i = 1e-7,
            o = 10,
            a = 11,
            u = 1 / (a - 1),
            c = "function" == typeof Float32Array;
        function s(t, e) {
            return 1 - 3 * e + 3 * t;
        }
        function l(t, e) {
            return 3 * e - 6 * t;
        }
        function f(t) {
            return 3 * t;
        }
        function d(t, e, n) {
            return ((s(e, n) * t + l(e, n)) * t + f(e)) * t;
        }
        function p(t, e, n) {
            return 3 * s(e, n) * t * t + 2 * l(e, n) * t + f(e);
        }
        t.exports = function (t, e, s, l) {
            if (!(0 <= t && t <= 1 && 0 <= s && s <= 1)) throw new Error("bezier x values must be in [0, 1] range");
            var f = c ? new Float32Array(a) : new Array(a);
            if (t !== e || s !== l) for (var v = 0; v < a; ++v) f[v] = d(v * u, t, s);
            function h(e) {
                for (var c = 0, l = 1, v = a - 1; l !== v && f[l] <= e; ++l) c += u;
                var h = c + ((e - f[--l]) / (f[l + 1] - f[l])) * u,
                    g = p(h, t, s);
                return g >= r
                    ? (function (t, e, r, i) {
                          for (var o = 0; o < n; ++o) {
                              var a = p(e, r, i);
                              if (0 === a) return e;
                              e -= (d(e, r, i) - t) / a;
                          }
                          return e;
                      })(e, h, t, s)
                    : 0 === g
                    ? h
                    : (function (t, e, n, r, a) {
                          var u,
                              c,
                              s = 0;
                          do {
                              (u = d((c = e + (n - e) / 2), r, a) - t) > 0 ? (n = c) : (e = c);
                          } while (Math.abs(u) > i && ++s < o);
                          return c;
                      })(e, c, c + u, t, s);
            }
            return function (n) {
                return t === e && s === l ? n : 0 === n ? 0 : 1 === n ? 1 : d(h(n), e, l);
            };
        };
    },
    function (t, e, n) {
        "use strict";
        var r = n(0)(n(109)),
            i = n(0),
            o = n(14);
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.optimizeFloat = c),
            (e.createBezierEasing = function (t) {
                return u.default.apply(void 0, (0, r.default)(t));
            }),
            (e.applyEasing = function (t, e, n) {
                if (0 === e) return 0;
                if (1 === e) return 1;
                if (n) return c(e > 0 ? n(e) : e);
                return c(e > 0 && t && a[t] ? a[t](e) : e);
            });
        var a = o(n(106)),
            u = i(n(107));
        function c(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5,
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
                r = Math.pow(n, e),
                i = Number(Math.round(t * r) / r);
            return Math.abs(i) > 1e-4 ? i : 0;
        }
    },
    function (t, e, n) {
        var r = n(244),
            i = n(245),
            o = n(246);
        t.exports = function (t) {
            return r(t) || i(t) || o();
        };
    },
    function (t, e, n) {
        "use strict";
        var r = n(0)(n(27));
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.isPluginType = function (t) {
                return t === o.ActionTypeConsts.PLUGIN_LOTTIE;
            }),
            (e.clearPlugin = e.renderPlugin = e.createPluginInstance = e.getPluginDestination = e.getPluginDuration = e.getPluginOrigin = e.getPluginConfig = void 0);
        var i = n(248),
            o = n(3),
            a = n(44),
            u = (0, r.default)({}, o.ActionTypeConsts.PLUGIN_LOTTIE, {
                getConfig: i.getPluginConfig,
                getOrigin: i.getPluginOrigin,
                getDuration: i.getPluginDuration,
                getDestination: i.getPluginDestination,
                createInstance: i.createPluginInstance,
                render: i.renderPlugin,
                clear: i.clearPlugin,
            });
        var c = function (t) {
                return function (e) {
                    if (!a.IS_BROWSER_ENV)
                        return function () {
                            return null;
                        };
                    var n = u[e];
                    if (!n) throw new Error("IX2 no plugin configured for: ".concat(e));
                    var r = n[t];
                    if (!r) throw new Error("IX2 invalid plugin method: ".concat(t));
                    return r;
                };
            },
            s = c("getConfig");
        e.getPluginConfig = s;
        var l = c("getOrigin");
        e.getPluginOrigin = l;
        var f = c("getDuration");
        e.getPluginDuration = f;
        var d = c("getDestination");
        e.getPluginDestination = d;
        var p = c("createInstance");
        e.createPluginInstance = p;
        var v = c("render");
        e.renderPlugin = v;
        var h = c("clear");
        e.clearPlugin = h;
    },
    function (t, e, n) {
        var r = n(112),
            i = n(255)(r);
        t.exports = i;
    },
    function (t, e, n) {
        var r = n(253),
            i = n(33);
        t.exports = function (t, e) {
            return t && r(t, e, i);
        };
    },
    function (t, e, n) {
        "use strict";
        var r = n(259);
        (e.__esModule = !0), (e.default = void 0);
        var i = r(n(260)).default;
        e.default = i;
    },
    function (t, e, n) {
        "use strict";
        var r = n(0)(n(109)),
            i = n(14),
            o = n(0);
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.observeRequests = function (t) {
                P({
                    store: t,
                    select: function (t) {
                        var e = t.ixRequest;
                        return e.preview;
                    },
                    onChange: et,
                }),
                    P({
                        store: t,
                        select: function (t) {
                            var e = t.ixRequest;
                            return e.playback;
                        },
                        onChange: rt,
                    }),
                    P({
                        store: t,
                        select: function (t) {
                            var e = t.ixRequest;
                            return e.stop;
                        },
                        onChange: it,
                    }),
                    P({
                        store: t,
                        select: function (t) {
                            var e = t.ixRequest;
                            return e.clear;
                        },
                        onChange: ot,
                    });
            }),
            (e.startEngine = at),
            (e.stopEngine = ut),
            (e.stopAllActionGroups = ht),
            (e.stopActionGroup = gt),
            (e.startActionGroup = Et);
        var a = o(n(28)),
            u = o(n(263)),
            c = o(n(85)),
            s = o(n(56)),
            l = o(n(264)),
            f = o(n(270)),
            d = o(n(282)),
            p = o(n(283)),
            v = o(n(284)),
            h = o(n(287)),
            g = o(n(113)),
            E = n(3),
            m = n(10),
            y = n(61),
            _ = i(n(290)),
            I = o(n(291)),
            b = Object.keys(E.QuickEffectIds),
            w = function (t) {
                return b.includes(t);
            },
            T = E.IX2EngineConstants,
            O = T.COLON_DELIMITER,
            A = T.BOUNDARY_SELECTOR,
            x = T.HTML_ELEMENT,
            S = T.RENDER_GENERAL,
            R = T.W_MOD_IX,
            C = m.IX2VanillaUtils,
            N = C.getAffectedElements,
            L = C.getElementId,
            D = C.getDestinationValues,
            P = C.observeStore,
            M = C.getInstanceId,
            j = C.renderHTMLElement,
            k = C.clearAllStyles,
            F = C.getMaxDurationItemIndex,
            G = C.getComputedStyle,
            X = C.getInstanceOrigin,
            U = C.reduceListToGroup,
            V = C.shouldNamespaceEventParameter,
            W = C.getNamespacedParameterId,
            B = C.shouldAllowMediaQuery,
            H = C.cleanupHTMLElement,
            z = C.stringifyTarget,
            Y = C.mediaQueriesEqual,
            K = m.IX2VanillaPlugins,
            Q = K.isPluginType,
            q = K.createPluginInstance,
            $ = K.getPluginDuration,
            Z = navigator.userAgent,
            J = Z.match(/iPad/i) || Z.match(/iPhone/),
            tt = 12;
        function et(t, e) {
            var n = t.rawData,
                r = function () {
                    at({ store: e, rawData: n, allowEvents: !0 }), nt();
                };
            t.defer ? setTimeout(r, 0) : r();
        }
        function nt() {
            document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
        }
        function rt(t, e) {
            var n = t.actionTypeId,
                r = t.actionListId,
                i = t.actionItemId,
                o = t.eventId,
                a = t.allowEvents,
                u = t.immediate,
                c = t.testManual,
                s = t.verbose,
                l = void 0 === s || s,
                f = t.rawData;
            if (r && i && f && u) {
                var d = f.actionLists[r];
                d && (f = U({ actionList: d, actionItemId: i, rawData: f }));
            }
            if ((at({ store: e, rawData: f, allowEvents: a, testManual: c }), (r && n === E.ActionTypeConsts.GENERAL_START_ACTION) || w(n))) {
                gt({ store: e, actionListId: r }), vt({ store: e, actionListId: r, eventId: o });
                var p = Et({ store: e, eventId: o, actionListId: r, immediate: u, verbose: l });
                l && p && e.dispatch((0, y.actionListPlaybackChanged)({ actionListId: r, isPlaying: !u }));
            }
        }
        function it(t, e) {
            var n = t.actionListId;
            n ? gt({ store: e, actionListId: n }) : ht({ store: e }), ut(e);
        }
        function ot(t, e) {
            ut(e), k({ store: e, elementApi: _ });
        }
        function at(t) {
            var e,
                n = t.store,
                i = t.rawData,
                o = t.allowEvents,
                a = t.testManual,
                u = n.getState().ixSession;
            i && n.dispatch((0, y.rawDataImported)(i)),
                u.active ||
                    (n.dispatch((0, y.sessionInitialized)({ hasBoundaryNodes: Boolean(document.querySelector(A)) })),
                    o &&
                        ((function (t) {
                            var e = t.getState().ixData.eventTypeMap;
                            lt(t),
                                (0, v.default)(e, function (e, n) {
                                    var i = I.default[n];
                                    i
                                        ? (function (t) {
                                              var e = t.logic,
                                                  n = t.store,
                                                  i = t.events;
                                              !(function (t) {
                                                  if (J) {
                                                      var e = {},
                                                          n = "";
                                                      for (var r in t) {
                                                          var i = t[r],
                                                              o = i.eventTypeId,
                                                              a = i.target,
                                                              u = _.getQuerySelector(a);
                                                          e[u] || (o !== E.EventTypeConsts.MOUSE_CLICK && o !== E.EventTypeConsts.MOUSE_SECOND_CLICK) || ((e[u] = !0), (n += u + "{cursor: pointer;touch-action: manipulation;}"));
                                                      }
                                                      if (n) {
                                                          var c = document.createElement("style");
                                                          (c.textContent = n), document.body.appendChild(c);
                                                      }
                                                  }
                                              })(i);
                                              var o = e.types,
                                                  a = e.handler,
                                                  u = n.getState().ixData,
                                                  f = u.actionLists,
                                                  d = ft(i, pt);
                                              if ((0, l.default)(d)) {
                                                  (0, v.default)(d, function (t, e) {
                                                      var o = i[e],
                                                          a = o.action,
                                                          l = o.id,
                                                          d = o.mediaQueries,
                                                          p = void 0 === d ? u.mediaQueryKeys : d,
                                                          v = a.config.actionListId;
                                                      if ((Y(p, u.mediaQueryKeys) || n.dispatch((0, y.mediaQueriesDefined)()), a.actionTypeId === E.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION)) {
                                                          var h = Array.isArray(o.config) ? o.config : [o.config];
                                                          h.forEach(function (e) {
                                                              var i = e.continuousParameterGroupId,
                                                                  o = (0, s.default)(f, "".concat(v, ".continuousParameterGroups"), []),
                                                                  a = (0, c.default)(o, function (t) {
                                                                      var e = t.id;
                                                                      return e === i;
                                                                  }),
                                                                  u = (e.smoothing || 0) / 100,
                                                                  d = (e.restingState || 0) / 100;
                                                              a &&
                                                                  t.forEach(function (t, i) {
                                                                      var o = l + O + i;
                                                                      !(function (t) {
                                                                          var e = t.store,
                                                                              n = t.eventStateKey,
                                                                              i = t.eventTarget,
                                                                              o = t.eventId,
                                                                              a = t.eventConfig,
                                                                              u = t.actionListId,
                                                                              c = t.parameterGroup,
                                                                              l = t.smoothing,
                                                                              f = t.restingValue,
                                                                              d = e.getState(),
                                                                              p = d.ixData,
                                                                              v = d.ixSession,
                                                                              h = p.events[o],
                                                                              g = h.eventTypeId,
                                                                              E = {},
                                                                              m = {},
                                                                              y = [],
                                                                              I = c.continuousActionGroups,
                                                                              b = c.id;
                                                                          V(g, a) && (b = W(n, b));
                                                                          var w = v.hasBoundaryNodes && i ? _.getClosestElement(i, A) : null;
                                                                          I.forEach(function (t) {
                                                                              var e = t.keyframe,
                                                                                  n = t.actionItems;
                                                                              n.forEach(function (t) {
                                                                                  var n = t.actionTypeId,
                                                                                      o = t.config.target;
                                                                                  if (o) {
                                                                                      var a = o.boundaryMode ? w : null,
                                                                                          u = z(o) + O + n;
                                                                                      if (
                                                                                          ((m[u] = (function () {
                                                                                              var t,
                                                                                                  e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                                                                                  n = arguments.length > 1 ? arguments[1] : void 0,
                                                                                                  i = arguments.length > 2 ? arguments[2] : void 0,
                                                                                                  o = (0, r.default)(e);
                                                                                              return (
                                                                                                  o.some(function (e, r) {
                                                                                                      return e.keyframe === n && ((t = r), !0);
                                                                                                  }),
                                                                                                  null == t && ((t = o.length), o.push({ keyframe: n, actionItems: [] })),
                                                                                                  o[t].actionItems.push(i),
                                                                                                  o
                                                                                              );
                                                                                          })(m[u], e, t)),
                                                                                          !E[u])
                                                                                      ) {
                                                                                          E[u] = !0;
                                                                                          var c = t.config;
                                                                                          N({ config: c, event: h, eventTarget: i, elementRoot: a, elementApi: _ }).forEach(function (t) {
                                                                                              y.push({ element: t, key: u });
                                                                                          });
                                                                                      }
                                                                                  }
                                                                              });
                                                                          }),
                                                                              y.forEach(function (t) {
                                                                                  var n = t.element,
                                                                                      r = t.key,
                                                                                      i = m[r],
                                                                                      a = (0, s.default)(i, "[0].actionItems[0]", {}),
                                                                                      c = a.actionTypeId,
                                                                                      d = Q(c) ? q(c)(n, a) : null,
                                                                                      p = D({ element: n, actionItem: a, elementApi: _ }, d);
                                                                                  mt({
                                                                                      store: e,
                                                                                      element: n,
                                                                                      eventId: o,
                                                                                      actionListId: u,
                                                                                      actionItem: a,
                                                                                      destination: p,
                                                                                      continuous: !0,
                                                                                      parameterId: b,
                                                                                      actionGroups: i,
                                                                                      smoothing: l,
                                                                                      restingValue: f,
                                                                                      pluginInstance: d,
                                                                                  });
                                                                              });
                                                                      })({ store: n, eventStateKey: o, eventTarget: t, eventId: l, eventConfig: e, actionListId: v, parameterGroup: a, smoothing: u, restingValue: d });
                                                                  });
                                                          });
                                                      }
                                                      (a.actionTypeId === E.ActionTypeConsts.GENERAL_START_ACTION || w(a.actionTypeId)) && vt({ store: n, actionListId: v, eventId: l });
                                                  });
                                                  var p = function (t) {
                                                          var e = n.getState(),
                                                              r = e.ixSession;
                                                          dt(d, function (e, o, c) {
                                                              var s = i[o],
                                                                  l = r.eventState[c],
                                                                  f = s.action,
                                                                  d = s.mediaQueries,
                                                                  p = void 0 === d ? u.mediaQueryKeys : d;
                                                              if (B(p, r.mediaQueryKey)) {
                                                                  var v = function () {
                                                                      var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                                                          i = a({ store: n, element: e, event: s, eventConfig: r, nativeEvent: t, eventStateKey: c }, l);
                                                                      (0, g.default)(i, l) || n.dispatch((0, y.eventStateChanged)(c, i));
                                                                  };
                                                                  if (f.actionTypeId === E.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION) {
                                                                      var h = Array.isArray(s.config) ? s.config : [s.config];
                                                                      h.forEach(v);
                                                                  } else v();
                                                              }
                                                          });
                                                      },
                                                      m = (0, h.default)(p, tt),
                                                      I = function (t) {
                                                          var e = t.target,
                                                              r = void 0 === e ? document : e,
                                                              i = t.types,
                                                              o = t.throttle;
                                                          i.split(" ")
                                                              .filter(Boolean)
                                                              .forEach(function (t) {
                                                                  var e = o ? m : p;
                                                                  r.addEventListener(t, e), n.dispatch((0, y.eventListenerAdded)(r, [t, e]));
                                                              });
                                                      };
                                                  Array.isArray(o) ? o.forEach(I) : "string" == typeof o && I(e);
                                              }
                                          })({ logic: i, store: t, events: e })
                                        : console.warn("IX2 event type not configured: ".concat(n));
                                }),
                                t.getState().ixSession.eventListeners.length &&
                                    (function (t) {
                                        var e = function () {
                                            lt(t);
                                        };
                                        st.forEach(function (n) {
                                            window.addEventListener(n, e), t.dispatch((0, y.eventListenerAdded)(window, [n, e]));
                                        }),
                                            e();
                                    })(t);
                        })(n),
                        -1 === (e = document.documentElement).className.indexOf(R) && (e.className += " ".concat(R)),
                        n.getState().ixSession.hasDefinedMediaQueries &&
                            (function (t) {
                                P({
                                    store: t,
                                    select: function (t) {
                                        return t.ixSession.mediaQueryKey;
                                    },
                                    onChange: function () {
                                        ut(t), k({ store: t, elementApi: _ }), at({ store: t, allowEvents: !0 }), nt();
                                    },
                                });
                            })(n)),
                    n.dispatch((0, y.sessionStarted)()),
                    (function (t, e) {
                        !(function n(r) {
                            var i = t.getState(),
                                o = i.ixSession,
                                a = i.ixParameters;
                            o.active &&
                                (t.dispatch((0, y.animationFrameChanged)(r, a)),
                                e
                                    ? (function (t, e) {
                                          var n = P({
                                              store: t,
                                              select: function (t) {
                                                  return t.ixSession.tick;
                                              },
                                              onChange: function (t) {
                                                  e(t), n();
                                              },
                                          });
                                      })(t, n)
                                    : requestAnimationFrame(n));
                        })(window.performance.now());
                    })(n, a));
        }
        function ut(t) {
            var e = t.getState().ixSession;
            e.active && (e.eventListeners.forEach(ct), t.dispatch((0, y.sessionStopped)()));
        }
        function ct(t) {
            var e = t.target,
                n = t.listenerParams;
            e.removeEventListener.apply(e, n);
        }
        var st = ["resize", "orientationchange"];
        function lt(t) {
            var e = t.getState(),
                n = e.ixSession,
                r = e.ixData,
                i = window.innerWidth;
            if (i !== n.viewportWidth) {
                var o = r.mediaQueries;
                t.dispatch((0, y.viewportWidthChanged)({ width: i, mediaQueries: o }));
            }
        }
        var ft = function (t, e) {
                return (0, f.default)((0, p.default)(t, e), d.default);
            },
            dt = function (t, e) {
                (0, v.default)(t, function (t, n) {
                    t.forEach(function (t, r) {
                        e(t, n, n + O + r);
                    });
                });
            },
            pt = function (t) {
                var e = { target: t.target, targets: t.targets };
                return N({ config: e, elementApi: _ });
            };
        function vt(t) {
            var e = t.store,
                n = t.actionListId,
                r = t.eventId,
                i = e.getState(),
                o = i.ixData,
                a = i.ixSession,
                u = o.actionLists,
                c = o.events[r],
                l = u[n];
            if (l && l.useFirstGroupAsInitialState) {
                var f = (0, s.default)(l, "actionItemGroups[0].actionItems", []),
                    d = (0, s.default)(c, "mediaQueries", o.mediaQueryKeys);
                if (!B(d, a.mediaQueryKey)) return;
                f.forEach(function (t) {
                    var i,
                        o = t.config,
                        a = t.actionTypeId,
                        u = !0 === (null == o ? void 0 : null === (i = o.target) || void 0 === i ? void 0 : i.useEventTarget) ? { target: c.target, targets: c.targets } : o,
                        s = N({ config: u, event: c, elementApi: _ }),
                        l = Q(a);
                    s.forEach(function (i) {
                        var o = l ? q(a)(i, t) : null;
                        mt({ destination: D({ element: i, actionItem: t, elementApi: _ }, o), immediate: !0, store: e, element: i, eventId: r, actionItem: t, actionListId: n, pluginInstance: o });
                    });
                });
            }
        }
        function ht(t) {
            var e = t.store,
                n = e.getState().ixInstances;
            (0, v.default)(n, function (t) {
                if (!t.continuous) {
                    var n = t.actionListId,
                        r = t.verbose;
                    yt(t, e), r && e.dispatch((0, y.actionListPlaybackChanged)({ actionListId: n, isPlaying: !1 }));
                }
            });
        }
        function gt(t) {
            var e = t.store,
                n = t.eventId,
                r = t.eventTarget,
                i = t.eventStateKey,
                o = t.actionListId,
                a = e.getState(),
                u = a.ixInstances,
                c = a.ixSession.hasBoundaryNodes && r ? _.getClosestElement(r, A) : null;
            (0, v.default)(u, function (t) {
                var r = (0, s.default)(t, "actionItem.config.target.boundaryMode"),
                    a = !i || t.eventStateKey === i;
                if (t.actionListId === o && t.eventId === n && a) {
                    if (c && r && !_.elementContains(c, t.element)) return;
                    yt(t, e), t.verbose && e.dispatch((0, y.actionListPlaybackChanged)({ actionListId: o, isPlaying: !1 }));
                }
            });
        }
        function Et(t) {
            var e,
                n = t.store,
                r = t.eventId,
                i = t.eventTarget,
                o = t.eventStateKey,
                a = t.actionListId,
                u = t.groupIndex,
                c = void 0 === u ? 0 : u,
                l = t.immediate,
                f = t.verbose,
                d = n.getState(),
                p = d.ixData,
                v = d.ixSession,
                h = p.events[r] || {},
                g = h.mediaQueries,
                E = void 0 === g ? p.mediaQueryKeys : g,
                m = (0, s.default)(p, "actionLists.".concat(a), {}),
                y = m.actionItemGroups,
                I = m.useFirstGroupAsInitialState;
            if (!y || !y.length) return !1;
            c >= y.length && (0, s.default)(h, "config.loop") && (c = 0), 0 === c && I && c++;
            var b = (0 === c || (1 === c && I)) && w(null === (e = h.action) || void 0 === e ? void 0 : e.actionTypeId) ? h.config.delay : void 0,
                T = (0, s.default)(y, [c, "actionItems"], []);
            if (!T.length) return !1;
            if (!B(E, v.mediaQueryKey)) return !1;
            var O = v.hasBoundaryNodes && i ? _.getClosestElement(i, A) : null,
                x = F(T),
                S = !1;
            return (
                T.forEach(function (t, e) {
                    var u = t.config,
                        s = t.actionTypeId,
                        d = Q(s),
                        p = u.target;
                    if (p) {
                        var v = p.boundaryMode ? O : null;
                        N({ config: u, event: h, eventTarget: i, elementRoot: v, elementApi: _ }).forEach(function (u, p) {
                            var v = d ? q(s)(u, t) : null,
                                h = d ? $(s)(u, t) : null;
                            S = !0;
                            var g = x === e && 0 === p,
                                E = G({ element: u, actionItem: t }),
                                m = D({ element: u, actionItem: t, elementApi: _ }, v);
                            mt({
                                store: n,
                                element: u,
                                actionItem: t,
                                eventId: r,
                                eventTarget: i,
                                eventStateKey: o,
                                actionListId: a,
                                groupIndex: c,
                                isCarrier: g,
                                computedStyle: E,
                                destination: m,
                                immediate: l,
                                verbose: f,
                                pluginInstance: v,
                                pluginDuration: h,
                                instanceDelay: b,
                            });
                        });
                    }
                }),
                S
            );
        }
        function mt(t) {
            var e = t.store,
                n = t.computedStyle,
                r = (0, u.default)(t, ["store", "computedStyle"]),
                i = !r.continuous,
                o = r.element,
                c = r.actionItem,
                s = r.immediate,
                l = r.pluginInstance,
                f = M(),
                d = e.getState(),
                p = d.ixElements,
                v = d.ixSession,
                h = L(p, o),
                g = (p[h] || {}).refState,
                E = _.getRefType(o),
                m = X(o, g, n, c, _, l);
            e.dispatch((0, y.instanceAdded)((0, a.default)({ instanceId: f, elementId: h, origin: m, refType: E }, r))),
                _t(document.body, "ix2-animation-started", f),
                s
                    ? (function (t, e) {
                          var n = t.getState().ixParameters;
                          t.dispatch((0, y.instanceStarted)(e, 0)), t.dispatch((0, y.animationFrameChanged)(performance.now(), n)), It(t.getState().ixInstances[e], t);
                      })(e, f)
                    : (P({
                          store: e,
                          select: function (t) {
                              return t.ixInstances[f];
                          },
                          onChange: It,
                      }),
                      i && e.dispatch((0, y.instanceStarted)(f, v.tick)));
        }
        function yt(t, e) {
            _t(document.body, "ix2-animation-stopping", { instanceId: t.id, state: e.getState() });
            var n = t.elementId,
                r = t.actionItem,
                i = e.getState().ixElements[n] || {},
                o = i.ref;
            i.refType === x && H(o, r, _), e.dispatch((0, y.instanceRemoved)(t.id));
        }
        function _t(t, e, n) {
            var r = document.createEvent("CustomEvent");
            r.initCustomEvent(e, !0, !0, n), t.dispatchEvent(r);
        }
        function It(t, e) {
            var n = t.active,
                r = t.continuous,
                i = t.complete,
                o = t.elementId,
                a = t.actionItem,
                u = t.actionTypeId,
                c = t.renderType,
                s = t.current,
                l = t.groupIndex,
                f = t.eventId,
                d = t.eventTarget,
                p = t.eventStateKey,
                v = t.actionListId,
                h = t.isCarrier,
                g = t.styleProp,
                E = t.verbose,
                m = t.pluginInstance,
                I = e.getState(),
                b = I.ixData,
                w = I.ixSession,
                T = (b.events[f] || {}).mediaQueries,
                O = void 0 === T ? b.mediaQueryKeys : T;
            if (B(O, w.mediaQueryKey) && (r || n || i)) {
                if (s || (c === S && i)) {
                    e.dispatch((0, y.elementStateChanged)(o, u, s, a));
                    var A = e.getState().ixElements[o] || {},
                        R = A.ref,
                        C = A.refType,
                        N = A.refState,
                        L = N && N[u];
                    switch (C) {
                        case x:
                            j(R, N, L, f, a, g, _, c, m);
                    }
                }
                if (i) {
                    if (h) {
                        var D = Et({ store: e, eventId: f, eventTarget: d, eventStateKey: p, actionListId: v, groupIndex: l + 1, verbose: E });
                        E && !D && e.dispatch((0, y.actionListPlaybackChanged)({ actionListId: v, isPlaying: !1 }));
                    }
                    yt(t, e);
                }
            }
        }
    },
    function (t, e, n) {
        var r = n(116);
        t.exports = function (t, e, n) {
            "__proto__" == e && r ? r(t, e, { configurable: !0, enumerable: !0, value: n, writable: !0 }) : (t[e] = n);
        };
    },
    function (t, e, n) {
        var r = n(8),
            i = (function () {
                try {
                    var t = r(Object, "defineProperty");
                    return t({}, "", {}), t;
                } catch (t) {}
            })();
        t.exports = i;
    },
    function (t, e, n) {
        var r = n(6),
            i = Object.create,
            o = (function () {
                function t() {}
                return function (e) {
                    if (!r(e)) return {};
                    if (i) return i(e);
                    t.prototype = e;
                    var n = new t();
                    return (t.prototype = void 0), n;
                };
            })();
        t.exports = o;
    },
    function (t, e, n) {
        var r = n(304),
            i = n(305),
            o = r
                ? function (t) {
                      return r.get(t);
                  }
                : i;
        t.exports = o;
    },
    function (t, e, n) {
        var r = n(306),
            i = Object.prototype.hasOwnProperty;
        t.exports = function (t) {
            for (var e = t.name + "", n = r[e], o = i.call(r, e) ? n.length : 0; o--; ) {
                var a = n[o],
                    u = a.func;
                if (null == u || u == t) return a.name;
            }
            return e;
        };
    },
    function (t, e, n) {
        n(121), n(123), n(13), n(125), n(313), n(314), n(315), n(316), n(317), n(322), n(323), n(324), n(325), (t.exports = n(326));
    },
    function (t, e, n) {
        "use strict";
        var r = n(2);
        r.define(
            "brand",
            (t.exports = function (t) {
                var e,
                    n = {},
                    i = document,
                    c = window.location,
                    s = /PhantomJS/i.test(navigator.userAgent),
                    l = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange";
                function f() {
                    var n = i.fullScreen || i.mozFullScreen || i.webkitIsFullScreen || i.msFullscreenElement || Boolean(i.webkitFullscreenElement);
                    t(e).attr("style", n ? "display: none !important;" : "");
                }
            })
        );
    },
    function (t, e, n) {
        "use strict";
        var r = window.$,
            i = n(65) && r.tram;
        /*!
         * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
         * _.each
         * _.map
         * _.find
         * _.filter
         * _.any
         * _.contains
         * _.delay
         * _.defer
         * _.throttle (webflow)
         * _.debounce
         * _.keys
         * _.has
         * _.now
         *
         * http://underscorejs.org
         * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
         * Underscore may be freely distributed under the MIT license.
         * @license MIT
         */
        t.exports = (function () {
            var t = { VERSION: "1.6.0-Webflow" },
                e = {},
                n = Array.prototype,
                r = Object.prototype,
                o = Function.prototype,
                a = (n.push, n.slice),
                u = (n.concat, r.toString, r.hasOwnProperty),
                c = n.forEach,
                s = n.map,
                l = (n.reduce, n.reduceRight, n.filter),
                f = (n.every, n.some),
                d = n.indexOf,
                p = (n.lastIndexOf, Array.isArray, Object.keys),
                v =
                    (o.bind,
                    (t.each = t.forEach = function (n, r, i) {
                        if (null == n) return n;
                        if (c && n.forEach === c) n.forEach(r, i);
                        else if (n.length === +n.length) {
                            for (var o = 0, a = n.length; o < a; o++) if (r.call(i, n[o], o, n) === e) return;
                        } else {
                            var u = t.keys(n);
                            for (o = 0, a = u.length; o < a; o++) if (r.call(i, n[u[o]], u[o], n) === e) return;
                        }
                        return n;
                    }));
            (t.map = t.collect = function (t, e, n) {
                var r = [];
                return null == t
                    ? r
                    : s && t.map === s
                    ? t.map(e, n)
                    : (v(t, function (t, i, o) {
                          r.push(e.call(n, t, i, o));
                      }),
                      r);
            }),
                (t.find = t.detect = function (t, e, n) {
                    var r;
                    return (
                        h(t, function (t, i, o) {
                            if (e.call(n, t, i, o)) return (r = t), !0;
                        }),
                        r
                    );
                }),
                (t.filter = t.select = function (t, e, n) {
                    var r = [];
                    return null == t
                        ? r
                        : l && t.filter === l
                        ? t.filter(e, n)
                        : (v(t, function (t, i, o) {
                              e.call(n, t, i, o) && r.push(t);
                          }),
                          r);
                });
            var h = (t.some = t.any = function (n, r, i) {
                r || (r = t.identity);
                var o = !1;
                return null == n
                    ? o
                    : f && n.some === f
                    ? n.some(r, i)
                    : (v(n, function (t, n, a) {
                          if (o || (o = r.call(i, t, n, a))) return e;
                      }),
                      !!o);
            });
            (t.contains = t.include = function (t, e) {
                return (
                    null != t &&
                    (d && t.indexOf === d
                        ? -1 != t.indexOf(e)
                        : h(t, function (t) {
                              return t === e;
                          }))
                );
            }),
                (t.delay = function (t, e) {
                    var n = a.call(arguments, 2);
                    return setTimeout(function () {
                        return t.apply(null, n);
                    }, e);
                }),
                (t.defer = function (e) {
                    return t.delay.apply(t, [e, 1].concat(a.call(arguments, 1)));
                }),
                (t.throttle = function (t) {
                    var e, n, r;
                    return function () {
                        e ||
                            ((e = !0),
                            (n = arguments),
                            (r = this),
                            i.frame(function () {
                                (e = !1), t.apply(r, n);
                            }));
                    };
                }),
                (t.debounce = function (e, n, r) {
                    var i,
                        o,
                        a,
                        u,
                        c,
                        s = function s() {
                            var l = t.now() - u;
                            l < n ? (i = setTimeout(s, n - l)) : ((i = null), r || ((c = e.apply(a, o)), (a = o = null)));
                        };
                    return function () {
                        (a = this), (o = arguments), (u = t.now());
                        var l = r && !i;
                        return i || (i = setTimeout(s, n)), l && ((c = e.apply(a, o)), (a = o = null)), c;
                    };
                }),
                (t.defaults = function (e) {
                    if (!t.isObject(e)) return e;
                    for (var n = 1, r = arguments.length; n < r; n++) {
                        var i = arguments[n];
                        for (var o in i) void 0 === e[o] && (e[o] = i[o]);
                    }
                    return e;
                }),
                (t.keys = function (e) {
                    if (!t.isObject(e)) return [];
                    if (p) return p(e);
                    var n = [];
                    for (var r in e) t.has(e, r) && n.push(r);
                    return n;
                }),
                (t.has = function (t, e) {
                    return u.call(t, e);
                }),
                (t.isObject = function (t) {
                    return t === Object(t);
                }),
                (t.now =
                    Date.now ||
                    function () {
                        return new Date().getTime();
                    }),
                (t.templateSettings = { evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g });
            var g = /(.)^/,
                E = { "'": "'", "\\": "\\", "\r": "r", "\n": "n", "\u2028": "u2028", "\u2029": "u2029" },
                m = /\\|'|\r|\n|\u2028|\u2029/g,
                y = function (t) {
                    return "\\" + E[t];
                };
            return (
                (t.template = function (e, n, r) {
                    !n && r && (n = r), (n = t.defaults({}, n, t.templateSettings));
                    var i = RegExp([(n.escape || g).source, (n.interpolate || g).source, (n.evaluate || g).source].join("|") + "|$", "g"),
                        o = 0,
                        a = "__p+='";
                    e.replace(i, function (t, n, r, i, u) {
                        return (
                            (a += e.slice(o, u).replace(m, y)),
                            (o = u + t.length),
                            n ? (a += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'") : r ? (a += "'+\n((__t=(" + r + "))==null?'':__t)+\n'") : i && (a += "';\n" + i + "\n__p+='"),
                            t
                        );
                    }),
                        (a += "';\n"),
                        n.variable || (a = "with(obj||{}){\n" + a + "}\n"),
                        (a = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + a + "return __p;\n");
                    try {
                        var u = new Function(n.variable || "obj", "_", a);
                    } catch (t) {
                        throw ((t.source = a), t);
                    }
                    var c = function (e) {
                            return u.call(this, e, t);
                        },
                        s = n.variable || "obj";
                    return (c.source = "function(" + s + "){\n" + a + "}"), c;
                }),
                t
            );
        })();
    },
    function (t, e, n) {
        "use strict";
        var r = n(2);
        r.define(
            "edit",
            (t.exports = function (t, e, n) {
                if (
                    ((n = n || {}),
                    (r.env("test") || r.env("frame")) &&
                        !n.fixture &&
                        !(function () {
                            try {
                                return window.top.__Cypress__;
                            } catch (t) {
                                return !1;
                            }
                        })())
                )
                    return { exit: 1 };
                var i,
                    o = t(window),
                    a = t(document.documentElement),
                    u = document.location,
                    c = "hashchange",
                    s =
                        n.load ||
                        function () {
                            (i = !0),
                                (window.WebflowEditor = !0),
                                o.off(c, f),
                                (function (t) {
                                    var e = window.document.createElement("iframe");
                                    (e.src = "https://webflow.com/site/third-party-cookie-check.html"), (e.style.display = "none"), (e.sandbox = "allow-scripts allow-same-origin");
                                    var n = function n(r) {
                                        "WF_third_party_cookies_unsupported" === r.data ? (E(e, n), t(!1)) : "WF_third_party_cookies_supported" === r.data && (E(e, n), t(!0));
                                    };
                                    (e.onerror = function () {
                                        E(e, n), t(!1);
                                    }),
                                        window.addEventListener("message", n, !1),
                                        window.document.body.appendChild(e);
                                })(function (e) {
                                    t.ajax({ url: g("https://editor-api.webflow.com/api/editor/view"), data: { siteId: a.attr("data-wf-site") }, xhrFields: { withCredentials: !0 }, dataType: "json", crossDomain: !0, success: d(e) });
                                });
                        },
                    l = !1;
                try {
                    l = localStorage && localStorage.getItem && localStorage.getItem("WebflowEditor");
                } catch (t) {}
                function f() {
                    i || (/\?edit/.test(u.hash) && s());
                }
                function d(t) {
                    return function (e) {
                        e
                            ? ((e.thirdPartyCookiesSupported = t),
                              p(h(e.bugReporterScriptPath), function () {
                                  p(h(e.scriptPath), function () {
                                      window.WebflowEditor(e);
                                  });
                              }))
                            : console.error("Could not load editor data");
                    };
                }
                function p(e, n) {
                    t.ajax({ type: "GET", url: e, dataType: "script", cache: !0 }).then(n, v);
                }
                function v(t, e, n) {
                    throw (console.error("Could not load editor script: " + e), n);
                }
                function h(t) {
                    return t.indexOf("//") >= 0 ? t : g("https://editor-api.webflow.com" + t);
                }
                function g(t) {
                    return t.replace(/([^:])\/\//g, "$1/");
                }
                function E(t, e) {
                    window.removeEventListener("message", e, !1), t.remove();
                }
                return l ? s() : u.search ? (/[?&](edit)(?:[=&?]|$)/.test(u.search) || /\?edit$/.test(u.href)) && s() : o.on(c, f).triggerHandler(c), {};
            })
        );
    },
    function (t, e, n) {
        "use strict";
        var r = window.jQuery,
            i = {},
            o = [],
            a = {
                reset: function (t, e) {
                    e.__wf_intro = null;
                },
                intro: function (t, e) {
                    e.__wf_intro || ((e.__wf_intro = !0), r(e).triggerHandler(i.types.INTRO));
                },
                outro: function (t, e) {
                    e.__wf_intro && ((e.__wf_intro = null), r(e).triggerHandler(i.types.OUTRO));
                },
            };
        (i.triggers = {}),
            (i.types = { INTRO: "w-ix-intro.w-ix", OUTRO: "w-ix-outro.w-ix" }),
            (i.init = function () {
                for (var t = o.length, e = 0; e < t; e++) {
                    var n = o[e];
                    n[0](0, n[1]);
                }
                (o = []), r.extend(i.triggers, a);
            }),
            (i.async = function () {
                for (var t in a) {
                    var e = a[t];
                    a.hasOwnProperty(t) &&
                        (i.triggers[t] = function (t, n) {
                            o.push([e, n]);
                        });
                }
            }),
            i.async(),
            (t.exports = i);
    },
    function (t, e, n) {
        "use strict";
        var r = n(2),
            i = n(126);
        i.setEnv(r.env),
            r.define(
                "ix2",
                (t.exports = function () {
                    return i;
                })
            );
    },
    function (t, e, n) {
        "use strict";
        var r = n(14),
            i = n(0);
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.setEnv = function (t) {
                t() && (0, u.observeRequests)(s);
            }),
            (e.init = function (t) {
                l(), (0, u.startEngine)({ store: s, rawData: t, allowEvents: !0 });
            }),
            (e.destroy = l),
            (e.actions = e.store = void 0),
            n(127);
        var o = n(78),
            a = i(n(168)),
            u = n(114),
            c = r(n(61));
        e.actions = c;
        var s = (0, o.createStore)(a.default);
        function l() {
            (0, u.stopEngine)(s);
        }
        e.store = s;
    },
    function (t, e, n) {
        t.exports = n(128);
    },
    function (t, e, n) {
        n(129);
        var r = n(154);
        t.exports = r("Array", "includes");
    },
    function (t, e, n) {
        "use strict";
        var r = n(130),
            i = n(76).includes,
            o = n(147);
        r(
            { target: "Array", proto: !0 },
            {
                includes: function (t) {
                    return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
                },
            }
        ),
            o("includes");
    },
    function (t, e, n) {
        var r = n(4),
            i = n(66).f,
            o = n(18),
            a = n(135),
            u = n(39),
            c = n(139),
            s = n(146);
        t.exports = function (t, e) {
            var n,
                l,
                f,
                d,
                p,
                v = t.target,
                h = t.global,
                g = t.stat;
            if ((n = h ? r : g ? r[v] || u(v, {}) : (r[v] || {}).prototype))
                for (l in e) {
                    if (((d = e[l]), (f = t.noTargetGet ? (p = i(n, l)) && p.value : n[l]), !s(h ? l : v + (g ? "." : "#") + l, t.forced) && void 0 !== f)) {
                        if (typeof d == typeof f) continue;
                        c(d, f);
                    }
                    (t.sham || (f && f.sham)) && o(d, "sham", !0), a(n, l, d, t);
                }
        };
    },
    function (t, e, n) {
        "use strict";
        var r = {}.propertyIsEnumerable,
            i = Object.getOwnPropertyDescriptor,
            o = i && !r.call({ 1: 2 }, 1);
        e.f = o
            ? function (t) {
                  var e = i(this, t);
                  return !!e && e.enumerable;
              }
            : r;
    },
    function (t, e, n) {
        var r = n(16),
            i = n(133),
            o = "".split;
        t.exports = r(function () {
            return !Object("z").propertyIsEnumerable(0);
        })
            ? function (t) {
                  return "String" == i(t) ? o.call(t, "") : Object(t);
              }
            : Object;
    },
    function (t, e) {
        var n = {}.toString;
        t.exports = function (t) {
            return n.call(t).slice(8, -1);
        };
    },
    function (t, e) {
        t.exports = function (t) {
            if (null == t) throw TypeError("Can't call method on " + t);
            return t;
        };
    },
    function (t, e, n) {
        var r = n(4),
            i = n(26),
            o = n(18),
            a = n(17),
            u = n(39),
            c = n(71),
            s = n(137),
            l = s.get,
            f = s.enforce,
            d = String(c).split("toString");
        i("inspectSource", function (t) {
            return c.call(t);
        }),
            (t.exports = function (t, e, n, i) {
                var c = !!i && !!i.unsafe,
                    s = !!i && !!i.enumerable,
                    l = !!i && !!i.noTargetGet;
                "function" == typeof n && ("string" != typeof e || a(n, "name") || o(n, "name", e), (f(n).source = d.join("string" == typeof e ? e : ""))),
                    t !== r ? (c ? !l && t[e] && (s = !0) : delete t[e], s ? (t[e] = n) : o(t, e, n)) : s ? (t[e] = n) : u(e, n);
            })(Function.prototype, "toString", function () {
                return ("function" == typeof this && l(this).source) || c.call(this);
            });
    },
    function (t, e) {
        t.exports = !1;
    },
    function (t, e, n) {
        var r,
            i,
            o,
            a = n(138),
            u = n(4),
            c = n(24),
            s = n(18),
            l = n(17),
            f = n(72),
            d = n(40),
            p = u.WeakMap;
        if (a) {
            var v = new p(),
                h = v.get,
                g = v.has,
                E = v.set;
            (r = function (t, e) {
                return E.call(v, t, e), e;
            }),
                (i = function (t) {
                    return h.call(v, t) || {};
                }),
                (o = function (t) {
                    return g.call(v, t);
                });
        } else {
            var m = f("state");
            (d[m] = !0),
                (r = function (t, e) {
                    return s(t, m, e), e;
                }),
                (i = function (t) {
                    return l(t, m) ? t[m] : {};
                }),
                (o = function (t) {
                    return l(t, m);
                });
        }
        t.exports = {
            set: r,
            get: i,
            has: o,
            enforce: function (t) {
                return o(t) ? i(t) : r(t, {});
            },
            getterFor: function (t) {
                return function (e) {
                    var n;
                    if (!c(e) || (n = i(e)).type !== t) throw TypeError("Incompatible receiver, " + t + " required");
                    return n;
                };
            },
        };
    },
    function (t, e, n) {
        var r = n(4),
            i = n(71),
            o = r.WeakMap;
        t.exports = "function" == typeof o && /native code/.test(i.call(o));
    },
    function (t, e, n) {
        var r = n(17),
            i = n(140),
            o = n(66),
            a = n(38);
        t.exports = function (t, e) {
            for (var n = i(e), u = a.f, c = o.f, s = 0; s < n.length; s++) {
                var l = n[s];
                r(t, l) || u(t, l, c(e, l));
            }
        };
    },
    function (t, e, n) {
        var r = n(74),
            i = n(142),
            o = n(145),
            a = n(25);
        t.exports =
            r("Reflect", "ownKeys") ||
            function (t) {
                var e = i.f(a(t)),
                    n = o.f;
                return n ? e.concat(n(t)) : e;
            };
    },
    function (t, e, n) {
        t.exports = n(4);
    },
    function (t, e, n) {
        var r = n(75),
            i = n(41).concat("length", "prototype");
        e.f =
            Object.getOwnPropertyNames ||
            function (t) {
                return r(t, i);
            };
    },
    function (t, e, n) {
        var r = n(77),
            i = Math.min;
        t.exports = function (t) {
            return t > 0 ? i(r(t), 9007199254740991) : 0;
        };
    },
    function (t, e, n) {
        var r = n(77),
            i = Math.max,
            o = Math.min;
        t.exports = function (t, e) {
            var n = r(t);
            return n < 0 ? i(n + e, 0) : o(n, e);
        };
    },
    function (t, e) {
        e.f = Object.getOwnPropertySymbols;
    },
    function (t, e, n) {
        var r = n(16),
            i = /#|\.prototype\./,
            o = function (t, e) {
                var n = u[a(t)];
                return n == s || (n != c && ("function" == typeof e ? r(e) : !!e));
            },
            a = (o.normalize = function (t) {
                return String(t).replace(i, ".").toLowerCase();
            }),
            u = (o.data = {}),
            c = (o.NATIVE = "N"),
            s = (o.POLYFILL = "P");
        t.exports = o;
    },
    function (t, e, n) {
        var r = n(148),
            i = n(150),
            o = n(18),
            a = r("unscopables"),
            u = Array.prototype;
        null == u[a] && o(u, a, i(null)),
            (t.exports = function (t) {
                u[a][t] = !0;
            });
    },
    function (t, e, n) {
        var r = n(4),
            i = n(26),
            o = n(73),
            a = n(149),
            u = r.Symbol,
            c = i("wks");
        t.exports = function (t) {
            return c[t] || (c[t] = (a && u[t]) || (a ? u : o)("Symbol." + t));
        };
    },
    function (t, e, n) {
        var r = n(16);
        t.exports =
            !!Object.getOwnPropertySymbols &&
            !r(function () {
                return !String(Symbol());
            });
    },
    function (t, e, n) {
        var r = n(25),
            i = n(151),
            o = n(41),
            a = n(40),
            u = n(153),
            c = n(70),
            s = n(72)("IE_PROTO"),
            l = function () {},
            f = function () {
                var t,
                    e = c("iframe"),
                    n = o.length;
                for (e.style.display = "none", u.appendChild(e), e.src = String("javascript:"), (t = e.contentWindow.document).open(), t.write("<script>document.F=Object</script>"), t.close(), f = t.F; n--; ) delete f.prototype[o[n]];
                return f();
            };
        (t.exports =
            Object.create ||
            function (t, e) {
                var n;
                return null !== t ? ((l.prototype = r(t)), (n = new l()), (l.prototype = null), (n[s] = t)) : (n = f()), void 0 === e ? n : i(n, e);
            }),
            (a[s] = !0);
    },
    function (t, e, n) {
        var r = n(15),
            i = n(38),
            o = n(25),
            a = n(152);
        t.exports = r
            ? Object.defineProperties
            : function (t, e) {
                  o(t);
                  for (var n, r = a(e), u = r.length, c = 0; u > c; ) i.f(t, (n = r[c++]), e[n]);
                  return t;
              };
    },
    function (t, e, n) {
        var r = n(75),
            i = n(41);
        t.exports =
            Object.keys ||
            function (t) {
                return r(t, i);
            };
    },
    function (t, e, n) {
        var r = n(74);
        t.exports = r("document", "documentElement");
    },
    function (t, e, n) {
        var r = n(4),
            i = n(155),
            o = Function.call;
        t.exports = function (t, e, n) {
            return i(o, r[t].prototype[e], n);
        };
    },
    function (t, e, n) {
        var r = n(156);
        t.exports = function (t, e, n) {
            if ((r(t), void 0 === e)) return t;
            switch (n) {
                case 0:
                    return function () {
                        return t.call(e);
                    };
                case 1:
                    return function (n) {
                        return t.call(e, n);
                    };
                case 2:
                    return function (n, r) {
                        return t.call(e, n, r);
                    };
                case 3:
                    return function (n, r, i) {
                        return t.call(e, n, r, i);
                    };
            }
            return function () {
                return t.apply(e, arguments);
            };
        };
    },
    function (t, e) {
        t.exports = function (t) {
            if ("function" != typeof t) throw TypeError(String(t) + " is not a function");
            return t;
        };
    },
    function (t, e, n) {
        "use strict";
        n.r(e);
        var r = n(80),
            i = n(160),
            o = n(161),
            a = "[object Null]",
            u = "[object Undefined]",
            c = r.default ? r.default.toStringTag : void 0;
        e.default = function (t) {
            return null == t ? (void 0 === t ? u : a) : c && c in Object(t) ? Object(i.default)(t) : Object(o.default)(t);
        };
    },
    function (t, e, n) {
        "use strict";
        n.r(e);
        var r = n(159),
            i = "object" == typeof self && self && self.Object === Object && self,
            o = r.default || i || Function("return this")();
        e.default = o;
    },
    function (t, e, n) {
        "use strict";
        n.r(e),
            function (t) {
                var n = "object" == typeof t && t && t.Object === Object && t;
                e.default = n;
            }.call(this, n(23));
    },
    function (t, e, n) {
        "use strict";
        n.r(e);
        var r = n(80),
            i = Object.prototype,
            o = i.hasOwnProperty,
            a = i.toString,
            u = r.default ? r.default.toStringTag : void 0;
        e.default = function (t) {
            var e = o.call(t, u),
                n = t[u];
            try {
                t[u] = void 0;
                var r = !0;
            } catch (t) {}
            var i = a.call(t);
            return r && (e ? (t[u] = n) : delete t[u]), i;
        };
    },
    function (t, e, n) {
        "use strict";
        n.r(e);
        var r = Object.prototype.toString;
        e.default = function (t) {
            return r.call(t);
        };
    },
    function (t, e, n) {
        "use strict";
        n.r(e);
        var r = n(163),
            i = Object(r.default)(Object.getPrototypeOf, Object);
        e.default = i;
    },
    function (t, e, n) {
        "use strict";
        n.r(e),
            (e.default = function (t, e) {
                return function (n) {
                    return t(e(n));
                };
            });
    },
    function (t, e, n) {
        "use strict";
        n.r(e),
            (e.default = function (t) {
                return null != t && "object" == typeof t;
            });
    },
    function (t, e, n) {
        "use strict";
        n.r(e),
            function (t, r) {
                var i,
                    o = n(167);
                i = "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== t ? t : r;
                var a = Object(o.default)(i);
                e.default = a;
            }.call(this, n(23), n(166)(t));
    },
    function (t, e) {
        t.exports = function (t) {
            if (!t.webpackPolyfill) {
                var e = Object.create(t);
                e.children || (e.children = []),
                    Object.defineProperty(e, "loaded", {
                        enumerable: !0,
                        get: function () {
                            return e.l;
                        },
                    }),
                    Object.defineProperty(e, "id", {
                        enumerable: !0,
                        get: function () {
                            return e.i;
                        },
                    }),
                    Object.defineProperty(e, "exports", { enumerable: !0 }),
                    (e.webpackPolyfill = 1);
            }
            return e;
        };
    },
    function (t, e, n) {
        "use strict";
        function r(t) {
            var e,
                n = t.Symbol;
            return "function" == typeof n ? (n.observable ? (e = n.observable) : ((e = n("observable")), (n.observable = e))) : (e = "@@observable"), e;
        }
        n.r(e),
            n.d(e, "default", function () {
                return r;
            });
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
        var r = n(78),
            i = n(169),
            o = n(175),
            a = n(176),
            u = n(10),
            c = n(261),
            s = n(262),
            l = u.IX2ElementsReducer.ixElements,
            f = (0, r.combineReducers)({ ixData: i.ixData, ixRequest: o.ixRequest, ixSession: a.ixSession, ixElements: l, ixInstances: c.ixInstances, ixParameters: s.ixParameters });
        e.default = f;
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.ixData = void 0);
        var r = n(3).IX2EngineActionTypes.IX2_RAW_DATA_IMPORTED;
        e.ixData = function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object.freeze({}),
                e = arguments.length > 1 ? arguments[1] : void 0;
            switch (e.type) {
                case r:
                    return e.payload.ixData || Object.freeze({});
                default:
                    return t;
            }
        };
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.QuickEffectDirectionConsts = e.QuickEffectIds = e.EventLimitAffectedElements = e.EventContinuousMouseAxes = e.EventBasedOn = e.EventAppliesTo = e.EventTypeConsts = void 0);
        e.EventTypeConsts = {
            NAVBAR_OPEN: "NAVBAR_OPEN",
            NAVBAR_CLOSE: "NAVBAR_CLOSE",
            TAB_ACTIVE: "TAB_ACTIVE",
            TAB_INACTIVE: "TAB_INACTIVE",
            SLIDER_ACTIVE: "SLIDER_ACTIVE",
            SLIDER_INACTIVE: "SLIDER_INACTIVE",
            DROPDOWN_OPEN: "DROPDOWN_OPEN",
            DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
            MOUSE_CLICK: "MOUSE_CLICK",
            MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
            MOUSE_DOWN: "MOUSE_DOWN",
            MOUSE_UP: "MOUSE_UP",
            MOUSE_OVER: "MOUSE_OVER",
            MOUSE_OUT: "MOUSE_OUT",
            MOUSE_MOVE: "MOUSE_MOVE",
            MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
            SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
            SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
            SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
            ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
            ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
            PAGE_START: "PAGE_START",
            PAGE_FINISH: "PAGE_FINISH",
            PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
            PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
            PAGE_SCROLL: "PAGE_SCROLL",
        };
        e.EventAppliesTo = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" };
        e.EventBasedOn = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" };
        e.EventContinuousMouseAxes = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" };
        e.EventLimitAffectedElements = { CHILDREN: "CHILDREN", SIBLINGS: "SIBLINGS", IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN" };
        e.QuickEffectIds = {
            FADE_EFFECT: "FADE_EFFECT",
            SLIDE_EFFECT: "SLIDE_EFFECT",
            GROW_EFFECT: "GROW_EFFECT",
            SHRINK_EFFECT: "SHRINK_EFFECT",
            SPIN_EFFECT: "SPIN_EFFECT",
            FLY_EFFECT: "FLY_EFFECT",
            POP_EFFECT: "POP_EFFECT",
            FLIP_EFFECT: "FLIP_EFFECT",
            JIGGLE_EFFECT: "JIGGLE_EFFECT",
            PULSE_EFFECT: "PULSE_EFFECT",
            DROP_EFFECT: "DROP_EFFECT",
            BLINK_EFFECT: "BLINK_EFFECT",
            BOUNCE_EFFECT: "BOUNCE_EFFECT",
            FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
            FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
            RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
            JELLO_EFFECT: "JELLO_EFFECT",
            GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
            SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
            PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT",
        };
        e.QuickEffectDirectionConsts = {
            LEFT: "LEFT",
            RIGHT: "RIGHT",
            BOTTOM: "BOTTOM",
            TOP: "TOP",
            BOTTOM_LEFT: "BOTTOM_LEFT",
            BOTTOM_RIGHT: "BOTTOM_RIGHT",
            TOP_RIGHT: "TOP_RIGHT",
            TOP_LEFT: "TOP_LEFT",
            CLOCKWISE: "CLOCKWISE",
            COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE",
        };
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.ActionAppliesTo = e.ActionTypeConsts = void 0);
        e.ActionTypeConsts = {
            TRANSFORM_MOVE: "TRANSFORM_MOVE",
            TRANSFORM_SCALE: "TRANSFORM_SCALE",
            TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
            TRANSFORM_SKEW: "TRANSFORM_SKEW",
            STYLE_OPACITY: "STYLE_OPACITY",
            STYLE_SIZE: "STYLE_SIZE",
            STYLE_FILTER: "STYLE_FILTER",
            STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
            STYLE_BORDER: "STYLE_BORDER",
            STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
            PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
            GENERAL_DISPLAY: "GENERAL_DISPLAY",
            GENERAL_START_ACTION: "GENERAL_START_ACTION",
            GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
            GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
            GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
            GENERAL_LOOP: "GENERAL_LOOP",
            STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
        };
        e.ActionAppliesTo = { ELEMENT: "ELEMENT", ELEMENT_CLASS: "ELEMENT_CLASS", TRIGGER_ELEMENT: "TRIGGER_ELEMENT" };
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.InteractionTypeConsts = void 0);
        e.InteractionTypeConsts = {
            MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
            MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
            MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
            SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
            SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
            MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
            PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
            PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
            PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
            NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
            DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
            ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
            TAB_INTERACTION: "TAB_INTERACTION",
            SLIDER_INTERACTION: "SLIDER_INTERACTION",
        };
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.IX2_TEST_FRAME_RENDERED = e.IX2_MEDIA_QUERIES_DEFINED = e.IX2_VIEWPORT_WIDTH_CHANGED = e.IX2_ACTION_LIST_PLAYBACK_CHANGED = e.IX2_ELEMENT_STATE_CHANGED = e.IX2_INSTANCE_REMOVED = e.IX2_INSTANCE_STARTED = e.IX2_INSTANCE_ADDED = e.IX2_PARAMETER_CHANGED = e.IX2_ANIMATION_FRAME_CHANGED = e.IX2_EVENT_STATE_CHANGED = e.IX2_EVENT_LISTENER_ADDED = e.IX2_CLEAR_REQUESTED = e.IX2_STOP_REQUESTED = e.IX2_PLAYBACK_REQUESTED = e.IX2_PREVIEW_REQUESTED = e.IX2_SESSION_STOPPED = e.IX2_SESSION_STARTED = e.IX2_SESSION_INITIALIZED = e.IX2_RAW_DATA_IMPORTED = void 0);
        e.IX2_RAW_DATA_IMPORTED = "IX2_RAW_DATA_IMPORTED";
        e.IX2_SESSION_INITIALIZED = "IX2_SESSION_INITIALIZED";
        e.IX2_SESSION_STARTED = "IX2_SESSION_STARTED";
        e.IX2_SESSION_STOPPED = "IX2_SESSION_STOPPED";
        e.IX2_PREVIEW_REQUESTED = "IX2_PREVIEW_REQUESTED";
        e.IX2_PLAYBACK_REQUESTED = "IX2_PLAYBACK_REQUESTED";
        e.IX2_STOP_REQUESTED = "IX2_STOP_REQUESTED";
        e.IX2_CLEAR_REQUESTED = "IX2_CLEAR_REQUESTED";
        e.IX2_EVENT_LISTENER_ADDED = "IX2_EVENT_LISTENER_ADDED";
        e.IX2_EVENT_STATE_CHANGED = "IX2_EVENT_STATE_CHANGED";
        e.IX2_ANIMATION_FRAME_CHANGED = "IX2_ANIMATION_FRAME_CHANGED";
        e.IX2_PARAMETER_CHANGED = "IX2_PARAMETER_CHANGED";
        e.IX2_INSTANCE_ADDED = "IX2_INSTANCE_ADDED";
        e.IX2_INSTANCE_STARTED = "IX2_INSTANCE_STARTED";
        e.IX2_INSTANCE_REMOVED = "IX2_INSTANCE_REMOVED";
        e.IX2_ELEMENT_STATE_CHANGED = "IX2_ELEMENT_STATE_CHANGED";
        e.IX2_ACTION_LIST_PLAYBACK_CHANGED = "IX2_ACTION_LIST_PLAYBACK_CHANGED";
        e.IX2_VIEWPORT_WIDTH_CHANGED = "IX2_VIEWPORT_WIDTH_CHANGED";
        e.IX2_MEDIA_QUERIES_DEFINED = "IX2_MEDIA_QUERIES_DEFINED";
        e.IX2_TEST_FRAME_RENDERED = "IX2_TEST_FRAME_RENDERED";
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.RENDER_PLUGIN = e.RENDER_STYLE = e.RENDER_GENERAL = e.RENDER_TRANSFORM = e.ABSTRACT_NODE = e.PLAIN_OBJECT = e.HTML_ELEMENT = e.PRESERVE_3D = e.PARENT = e.SIBLINGS = e.IMMEDIATE_CHILDREN = e.CHILDREN = e.BAR_DELIMITER = e.COLON_DELIMITER = e.COMMA_DELIMITER = e.AUTO = e.WILL_CHANGE = e.FLEX = e.DISPLAY = e.COLOR = e.BORDER_COLOR = e.BACKGROUND = e.BACKGROUND_COLOR = e.HEIGHT = e.WIDTH = e.FILTER = e.OPACITY = e.SKEW_Y = e.SKEW_X = e.SKEW = e.ROTATE_Z = e.ROTATE_Y = e.ROTATE_X = e.SCALE_3D = e.SCALE_Z = e.SCALE_Y = e.SCALE_X = e.TRANSLATE_3D = e.TRANSLATE_Z = e.TRANSLATE_Y = e.TRANSLATE_X = e.TRANSFORM = e.CONFIG_UNIT = e.CONFIG_Z_UNIT = e.CONFIG_Y_UNIT = e.CONFIG_X_UNIT = e.CONFIG_VALUE = e.CONFIG_Z_VALUE = e.CONFIG_Y_VALUE = e.CONFIG_X_VALUE = e.BOUNDARY_SELECTOR = e.W_MOD_IX = e.W_MOD_JS = e.WF_PAGE = e.IX2_ID_DELIMITER = void 0);
        e.IX2_ID_DELIMITER = "|";
        e.WF_PAGE = "data-wf-page";
        e.W_MOD_JS = "w-mod-js";
        e.W_MOD_IX = "w-mod-ix";
        e.BOUNDARY_SELECTOR = ".w-dyn-item";
        e.CONFIG_X_VALUE = "xValue";
        e.CONFIG_Y_VALUE = "yValue";
        e.CONFIG_Z_VALUE = "zValue";
        e.CONFIG_VALUE = "value";
        e.CONFIG_X_UNIT = "xUnit";
        e.CONFIG_Y_UNIT = "yUnit";
        e.CONFIG_Z_UNIT = "zUnit";
        e.CONFIG_UNIT = "unit";
        e.TRANSFORM = "transform";
        e.TRANSLATE_X = "translateX";
        e.TRANSLATE_Y = "translateY";
        e.TRANSLATE_Z = "translateZ";
        e.TRANSLATE_3D = "translate3d";
        e.SCALE_X = "scaleX";
        e.SCALE_Y = "scaleY";
        e.SCALE_Z = "scaleZ";
        e.SCALE_3D = "scale3d";
        e.ROTATE_X = "rotateX";
        e.ROTATE_Y = "rotateY";
        e.ROTATE_Z = "rotateZ";
        e.SKEW = "skew";
        e.SKEW_X = "skewX";
        e.SKEW_Y = "skewY";
        e.OPACITY = "opacity";
        e.FILTER = "filter";
        e.WIDTH = "width";
        e.HEIGHT = "height";
        e.BACKGROUND_COLOR = "backgroundColor";
        e.BACKGROUND = "background";
        e.BORDER_COLOR = "borderColor";
        e.COLOR = "color";
        e.DISPLAY = "display";
        e.FLEX = "flex";
        e.WILL_CHANGE = "willChange";
        e.AUTO = "AUTO";
        e.COMMA_DELIMITER = ",";
        e.COLON_DELIMITER = ":";
        e.BAR_DELIMITER = "|";
        e.CHILDREN = "CHILDREN";
        e.IMMEDIATE_CHILDREN = "IMMEDIATE_CHILDREN";
        e.SIBLINGS = "SIBLINGS";
        e.PARENT = "PARENT";
        e.PRESERVE_3D = "preserve-3d";
        e.HTML_ELEMENT = "HTML_ELEMENT";
        e.PLAIN_OBJECT = "PLAIN_OBJECT";
        e.ABSTRACT_NODE = "ABSTRACT_NODE";
        e.RENDER_TRANSFORM = "RENDER_TRANSFORM";
        e.RENDER_GENERAL = "RENDER_GENERAL";
        e.RENDER_STYLE = "RENDER_STYLE";
        e.RENDER_PLUGIN = "RENDER_PLUGIN";
    },
    function (t, e, n) {
        "use strict";
        var r,
            i = n(0)(n(27)),
            o = n(0);
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.ixRequest = void 0);
        var a = o(n(28)),
            u = n(3),
            c = n(19),
            s = u.IX2EngineActionTypes,
            l = s.IX2_PREVIEW_REQUESTED,
            f = s.IX2_PLAYBACK_REQUESTED,
            d = s.IX2_STOP_REQUESTED,
            p = s.IX2_CLEAR_REQUESTED,
            v = { preview: {}, playback: {}, stop: {}, clear: {} },
            h = Object.create(null, ((r = {}), (0, i.default)(r, l, { value: "preview" }), (0, i.default)(r, f, { value: "playback" }), (0, i.default)(r, d, { value: "stop" }), (0, i.default)(r, p, { value: "clear" }), r));
        e.ixRequest = function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : v,
                e = arguments.length > 1 ? arguments[1] : void 0;
            if (e.type in h) {
                var n = [h[e.type]];
                return (0, c.setIn)(t, [n], (0, a.default)({}, e.payload));
            }
            return t;
        };
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.ixSession = void 0);
        var r = n(3),
            i = n(19),
            o = r.IX2EngineActionTypes,
            a = o.IX2_SESSION_INITIALIZED,
            u = o.IX2_SESSION_STARTED,
            c = o.IX2_TEST_FRAME_RENDERED,
            s = o.IX2_SESSION_STOPPED,
            l = o.IX2_EVENT_LISTENER_ADDED,
            f = o.IX2_EVENT_STATE_CHANGED,
            d = o.IX2_ANIMATION_FRAME_CHANGED,
            p = o.IX2_ACTION_LIST_PLAYBACK_CHANGED,
            v = o.IX2_VIEWPORT_WIDTH_CHANGED,
            h = o.IX2_MEDIA_QUERIES_DEFINED,
            g = { active: !1, tick: 0, eventListeners: [], eventState: {}, playbackState: {}, viewportWidth: 0, mediaQueryKey: null, hasBoundaryNodes: !1, hasDefinedMediaQueries: !1 };
        e.ixSession = function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g,
                e = arguments.length > 1 ? arguments[1] : void 0;
            switch (e.type) {
                case a:
                    var n = e.payload.hasBoundaryNodes;
                    return (0, i.set)(t, "hasBoundaryNodes", n);
                case u:
                    return (0, i.set)(t, "active", !0);
                case c:
                    var r = e.payload.step,
                        o = void 0 === r ? 20 : r;
                    return (0, i.set)(t, "tick", t.tick + o);
                case s:
                    return g;
                case d:
                    var E = e.payload.now;
                    return (0, i.set)(t, "tick", E);
                case l:
                    var m = (0, i.addLast)(t.eventListeners, e.payload);
                    return (0, i.set)(t, "eventListeners", m);
                case f:
                    var y = e.payload,
                        _ = y.stateKey,
                        I = y.newState;
                    return (0, i.setIn)(t, ["eventState", _], I);
                case p:
                    var b = e.payload,
                        w = b.actionListId,
                        T = b.isPlaying;
                    return (0, i.setIn)(t, ["playbackState", w], T);
                case v:
                    for (var O = e.payload, A = O.width, x = O.mediaQueries, S = x.length, R = null, C = 0; C < S; C++) {
                        var N = x[C],
                            L = N.key,
                            D = N.min,
                            P = N.max;
                        if (A >= D && A <= P) {
                            R = L;
                            break;
                        }
                    }
                    return (0, i.merge)(t, { viewportWidth: A, mediaQueryKey: R });
                case h:
                    return (0, i.set)(t, "hasDefinedMediaQueries", !0);
                default:
                    return t;
            }
        };
    },
    function (t, e, n) {
        var r = n(178),
            i = n(230),
            o = n(101);
        t.exports = function (t) {
            var e = i(t);
            return 1 == e.length && e[0][2]
                ? o(e[0][0], e[0][1])
                : function (n) {
                      return n === t || r(n, t, e);
                  };
        };
    },
    function (t, e, n) {
        var r = n(87),
            i = n(91),
            o = 1,
            a = 2;
        t.exports = function (t, e, n, u) {
            var c = n.length,
                s = c,
                l = !u;
            if (null == t) return !s;
            for (t = Object(t); c--; ) {
                var f = n[c];
                if (l && f[2] ? f[1] !== t[f[0]] : !(f[0] in t)) return !1;
            }
            for (; ++c < s; ) {
                var d = (f = n[c])[0],
                    p = t[d],
                    v = f[1];
                if (l && f[2]) {
                    if (void 0 === p && !(d in t)) return !1;
                } else {
                    var h = new r();
                    if (u) var g = u(p, v, d, t, e, h);
                    if (!(void 0 === g ? i(v, p, o | a, u, h) : g)) return !1;
                }
            }
            return !0;
        };
    },
    function (t, e) {
        t.exports = function () {
            (this.__data__ = []), (this.size = 0);
        };
    },
    function (t, e, n) {
        var r = n(30),
            i = Array.prototype.splice;
        t.exports = function (t) {
            var e = this.__data__,
                n = r(e, t);
            return !(n < 0 || (n == e.length - 1 ? e.pop() : i.call(e, n, 1), --this.size, 0));
        };
    },
    function (t, e, n) {
        var r = n(30);
        t.exports = function (t) {
            var e = this.__data__,
                n = r(e, t);
            return n < 0 ? void 0 : e[n][1];
        };
    },
    function (t, e, n) {
        var r = n(30);
        t.exports = function (t) {
            return r(this.__data__, t) > -1;
        };
    },
    function (t, e, n) {
        var r = n(30);
        t.exports = function (t, e) {
            var n = this.__data__,
                i = r(n, t);
            return i < 0 ? (++this.size, n.push([t, e])) : (n[i][1] = e), this;
        };
    },
    function (t, e, n) {
        var r = n(29);
        t.exports = function () {
            (this.__data__ = new r()), (this.size = 0);
        };
    },
    function (t, e) {
        t.exports = function (t) {
            var e = this.__data__,
                n = e.delete(t);
            return (this.size = e.size), n;
        };
    },
    function (t, e) {
        t.exports = function (t) {
            return this.__data__.get(t);
        };
    },
    function (t, e) {
        t.exports = function (t) {
            return this.__data__.has(t);
        };
    },
    function (t, e, n) {
        var r = n(29),
            i = n(46),
            o = n(47),
            a = 200;
        t.exports = function (t, e) {
            var n = this.__data__;
            if (n instanceof r) {
                var u = n.__data__;
                if (!i || u.length < a - 1) return u.push([t, e]), (this.size = ++n.size), this;
                n = this.__data__ = new o(u);
            }
            return n.set(t, e), (this.size = n.size), this;
        };
    },
    function (t, e, n) {
        var r = n(88),
            i = n(192),
            o = n(6),
            a = n(90),
            u = /^\[object .+?Constructor\]$/,
            c = Function.prototype,
            s = Object.prototype,
            l = c.toString,
            f = s.hasOwnProperty,
            d = RegExp(
                "^" +
                    l
                        .call(f)
                        .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                        .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") +
                    "$"
            );
        t.exports = function (t) {
            return !(!o(t) || i(t)) && (r(t) ? d : u).test(a(t));
        };
    },
    function (t, e, n) {
        var r = n(20),
            i = Object.prototype,
            o = i.hasOwnProperty,
            a = i.toString,
            u = r ? r.toStringTag : void 0;
        t.exports = function (t) {
            var e = o.call(t, u),
                n = t[u];
            try {
                t[u] = void 0;
                var r = !0;
            } catch (t) {}
            var i = a.call(t);
            return r && (e ? (t[u] = n) : delete t[u]), i;
        };
    },
    function (t, e) {
        var n = Object.prototype.toString;
        t.exports = function (t) {
            return n.call(t);
        };
    },
    function (t, e, n) {
        var r,
            i = n(193),
            o = (r = /[^.]+$/.exec((i && i.keys && i.keys.IE_PROTO) || "")) ? "Symbol(src)_1." + r : "";
        t.exports = function (t) {
            return !!o && o in t;
        };
    },
    function (t, e, n) {
        var r = n(5)["__core-js_shared__"];
        t.exports = r;
    },
    function (t, e) {
        t.exports = function (t, e) {
            return null == t ? void 0 : t[e];
        };
    },
    function (t, e, n) {
        var r = n(196),
            i = n(29),
            o = n(46);
        t.exports = function () {
            (this.size = 0), (this.__data__ = { hash: new r(), map: new (o || i)(), string: new r() });
        };
    },
    function (t, e, n) {
        var r = n(197),
            i = n(198),
            o = n(199),
            a = n(200),
            u = n(201);
        function c(t) {
            var e = -1,
                n = null == t ? 0 : t.length;
            for (this.clear(); ++e < n; ) {
                var r = t[e];
                this.set(r[0], r[1]);
            }
        }
        (c.prototype.clear = r), (c.prototype.delete = i), (c.prototype.get = o), (c.prototype.has = a), (c.prototype.set = u), (t.exports = c);
    },
    function (t, e, n) {
        var r = n(31);
        t.exports = function () {
            (this.__data__ = r ? r(null) : {}), (this.size = 0);
        };
    },
    function (t, e) {
        t.exports = function (t) {
            var e = this.has(t) && delete this.__data__[t];
            return (this.size -= e ? 1 : 0), e;
        };
    },
    function (t, e, n) {
        var r = n(31),
            i = "__lodash_hash_undefined__",
            o = Object.prototype.hasOwnProperty;
        t.exports = function (t) {
            var e = this.__data__;
            if (r) {
                var n = e[t];
                return n === i ? void 0 : n;
            }
            return o.call(e, t) ? e[t] : void 0;
        };
    },
    function (t, e, n) {
        var r = n(31),
            i = Object.prototype.hasOwnProperty;
        t.exports = function (t) {
            var e = this.__data__;
            return r ? void 0 !== e[t] : i.call(e, t);
        };
    },
    function (t, e, n) {
        var r = n(31),
            i = "__lodash_hash_undefined__";
        t.exports = function (t, e) {
            var n = this.__data__;
            return (this.size += this.has(t) ? 0 : 1), (n[t] = r && void 0 === e ? i : e), this;
        };
    },
    function (t, e, n) {
        var r = n(32);
        t.exports = function (t) {
            var e = r(this, t).delete(t);
            return (this.size -= e ? 1 : 0), e;
        };
    },
    function (t, e) {
        t.exports = function (t) {
            var e = typeof t;
            return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t;
        };
    },
    function (t, e, n) {
        var r = n(32);
        t.exports = function (t) {
            return r(this, t).get(t);
        };
    },
    function (t, e, n) {
        var r = n(32);
        t.exports = function (t) {
            return r(this, t).has(t);
        };
    },
    function (t, e, n) {
        var r = n(32);
        t.exports = function (t, e) {
            var n = r(this, t),
                i = n.size;
            return n.set(t, e), (this.size += n.size == i ? 0 : 1), this;
        };
    },
    function (t, e, n) {
        var r = n(87),
            i = n(92),
            o = n(213),
            a = n(217),
            u = n(55),
            c = n(1),
            s = n(49),
            l = n(51),
            f = 1,
            d = "[object Arguments]",
            p = "[object Array]",
            v = "[object Object]",
            h = Object.prototype.hasOwnProperty;
        t.exports = function (t, e, n, g, E, m) {
            var y = c(t),
                _ = c(e),
                I = y ? p : u(t),
                b = _ ? p : u(e),
                w = (I = I == d ? v : I) == v,
                T = (b = b == d ? v : b) == v,
                O = I == b;
            if (O && s(t)) {
                if (!s(e)) return !1;
                (y = !0), (w = !1);
            }
            if (O && !w) return m || (m = new r()), y || l(t) ? i(t, e, n, g, E, m) : o(t, e, I, n, g, E, m);
            if (!(n & f)) {
                var A = w && h.call(t, "__wrapped__"),
                    x = T && h.call(e, "__wrapped__");
                if (A || x) {
                    var S = A ? t.value() : t,
                        R = x ? e.value() : e;
                    return m || (m = new r()), E(S, R, n, g, m);
                }
            }
            return !!O && (m || (m = new r()), a(t, e, n, g, E, m));
        };
    },
    function (t, e, n) {
        var r = n(47),
            i = n(209),
            o = n(210);
        function a(t) {
            var e = -1,
                n = null == t ? 0 : t.length;
            for (this.__data__ = new r(); ++e < n; ) this.add(t[e]);
        }
        (a.prototype.add = a.prototype.push = i), (a.prototype.has = o), (t.exports = a);
    },
    function (t, e) {
        var n = "__lodash_hash_undefined__";
        t.exports = function (t) {
            return this.__data__.set(t, n), this;
        };
    },
    function (t, e) {
        t.exports = function (t) {
            return this.__data__.has(t);
        };
    },
    function (t, e) {
        t.exports = function (t, e) {
            for (var n = -1, r = null == t ? 0 : t.length; ++n < r; ) if (e(t[n], n, t)) return !0;
            return !1;
        };
    },
    function (t, e) {
        t.exports = function (t, e) {
            return t.has(e);
        };
    },
    function (t, e, n) {
        var r = n(20),
            i = n(214),
            o = n(45),
            a = n(92),
            u = n(215),
            c = n(216),
            s = 1,
            l = 2,
            f = "[object Boolean]",
            d = "[object Date]",
            p = "[object Error]",
            v = "[object Map]",
            h = "[object Number]",
            g = "[object RegExp]",
            E = "[object Set]",
            m = "[object String]",
            y = "[object Symbol]",
            _ = "[object ArrayBuffer]",
            I = "[object DataView]",
            b = r ? r.prototype : void 0,
            w = b ? b.valueOf : void 0;
        t.exports = function (t, e, n, r, b, T, O) {
            switch (n) {
                case I:
                    if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;
                    (t = t.buffer), (e = e.buffer);
                case _:
                    return !(t.byteLength != e.byteLength || !T(new i(t), new i(e)));
                case f:
                case d:
                case h:
                    return o(+t, +e);
                case p:
                    return t.name == e.name && t.message == e.message;
                case g:
                case m:
                    return t == e + "";
                case v:
                    var A = u;
                case E:
                    var x = r & s;
                    if ((A || (A = c), t.size != e.size && !x)) return !1;
                    var S = O.get(t);
                    if (S) return S == e;
                    (r |= l), O.set(t, e);
                    var R = a(A(t), A(e), r, b, T, O);
                    return O.delete(t), R;
                case y:
                    if (w) return w.call(t) == w.call(e);
            }
            return !1;
        };
    },
    function (t, e, n) {
        var r = n(5).Uint8Array;
        t.exports = r;
    },
    function (t, e) {
        t.exports = function (t) {
            var e = -1,
                n = Array(t.size);
            return (
                t.forEach(function (t, r) {
                    n[++e] = [r, t];
                }),
                n
            );
        };
    },
    function (t, e) {
        t.exports = function (t) {
            var e = -1,
                n = Array(t.size);
            return (
                t.forEach(function (t) {
                    n[++e] = t;
                }),
                n
            );
        };
    },
    function (t, e, n) {
        var r = n(218),
            i = 1,
            o = Object.prototype.hasOwnProperty;
        t.exports = function (t, e, n, a, u, c) {
            var s = n & i,
                l = r(t),
                f = l.length;
            if (f != r(e).length && !s) return !1;
            for (var d = f; d--; ) {
                var p = l[d];
                if (!(s ? p in e : o.call(e, p))) return !1;
            }
            var v = c.get(t),
                h = c.get(e);
            if (v && h) return v == e && h == t;
            var g = !0;
            c.set(t, e), c.set(e, t);
            for (var E = s; ++d < f; ) {
                var m = t[(p = l[d])],
                    y = e[p];
                if (a) var _ = s ? a(y, m, p, e, t, c) : a(m, y, p, t, e, c);
                if (!(void 0 === _ ? m === y || u(m, y, n, a, c) : _)) {
                    g = !1;
                    break;
                }
                E || (E = "constructor" == p);
            }
            if (g && !E) {
                var I = t.constructor,
                    b = e.constructor;
                I != b && "constructor" in t && "constructor" in e && !("function" == typeof I && I instanceof I && "function" == typeof b && b instanceof b) && (g = !1);
            }
            return c.delete(t), c.delete(e), g;
        };
    },
    function (t, e, n) {
        var r = n(93),
            i = n(94),
            o = n(33);
        t.exports = function (t) {
            return r(t, o, i);
        };
    },
    function (t, e) {
        t.exports = function (t, e) {
            for (var n = -1, r = null == t ? 0 : t.length, i = 0, o = []; ++n < r; ) {
                var a = t[n];
                e(a, n, t) && (o[i++] = a);
            }
            return o;
        };
    },
    function (t, e) {
        t.exports = function (t, e) {
            for (var n = -1, r = Array(t); ++n < t; ) r[n] = e(n);
            return r;
        };
    },
    function (t, e, n) {
        var r = n(11),
            i = n(9),
            o = "[object Arguments]";
        t.exports = function (t) {
            return i(t) && r(t) == o;
        };
    },
    function (t, e) {
        t.exports = function () {
            return !1;
        };
    },
    function (t, e, n) {
        var r = n(11),
            i = n(52),
            o = n(9),
            a = {};
        (a["[object Float32Array]"] = a["[object Float64Array]"] = a["[object Int8Array]"] = a["[object Int16Array]"] = a["[object Int32Array]"] = a["[object Uint8Array]"] = a["[object Uint8ClampedArray]"] = a["[object Uint16Array]"] = a[
            "[object Uint32Array]"
        ] = !0),
            (a["[object Arguments]"] = a["[object Array]"] = a["[object ArrayBuffer]"] = a["[object Boolean]"] = a["[object DataView]"] = a["[object Date]"] = a["[object Error]"] = a["[object Function]"] = a["[object Map]"] = a[
                "[object Number]"
            ] = a["[object Object]"] = a["[object RegExp]"] = a["[object Set]"] = a["[object String]"] = a["[object WeakMap]"] = !1),
            (t.exports = function (t) {
                return o(t) && i(t.length) && !!a[r(t)];
            });
    },
    function (t, e) {
        t.exports = function (t) {
            return function (e) {
                return t(e);
            };
        };
    },
    function (t, e, n) {
        (function (t) {
            var r = n(89),
                i = e && !e.nodeType && e,
                o = i && "object" == typeof t && t && !t.nodeType && t,
                a = o && o.exports === i && r.process,
                u = (function () {
                    try {
                        var t = o && o.require && o.require("util").types;
                        return t || (a && a.binding && a.binding("util"));
                    } catch (t) {}
                })();
            t.exports = u;
        }.call(this, n(97)(t)));
    },
    function (t, e, n) {
        var r = n(98)(Object.keys, Object);
        t.exports = r;
    },
    function (t, e, n) {
        var r = n(8)(n(5), "DataView");
        t.exports = r;
    },
    function (t, e, n) {
        var r = n(8)(n(5), "Promise");
        t.exports = r;
    },
    function (t, e, n) {
        var r = n(8)(n(5), "Set");
        t.exports = r;
    },
    function (t, e, n) {
        var r = n(100),
            i = n(33);
        t.exports = function (t) {
            for (var e = i(t), n = e.length; n--; ) {
                var o = e[n],
                    a = t[o];
                e[n] = [o, a, r(a)];
            }
            return e;
        };
    },
    function (t, e, n) {
        var r = n(91),
            i = n(56),
            o = n(237),
            a = n(58),
            u = n(100),
            c = n(101),
            s = n(21),
            l = 1,
            f = 2;
        t.exports = function (t, e) {
            return a(t) && u(e)
                ? c(s(t), e)
                : function (n) {
                      var a = i(n, t);
                      return void 0 === a && a === e ? o(n, t) : r(e, a, l | f);
                  };
        };
    },
    function (t, e, n) {
        var r = n(233),
            i = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            o = /\\(\\)?/g,
            a = r(function (t) {
                var e = [];
                return (
                    46 === t.charCodeAt(0) && e.push(""),
                    t.replace(i, function (t, n, r, i) {
                        e.push(r ? i.replace(o, "$1") : n || t);
                    }),
                    e
                );
            });
        t.exports = a;
    },
    function (t, e, n) {
        var r = n(234),
            i = 500;
        t.exports = function (t) {
            var e = r(t, function (t) {
                    return n.size === i && n.clear(), t;
                }),
                n = e.cache;
            return e;
        };
    },
    function (t, e, n) {
        var r = n(47),
            i = "Expected a function";
        function o(t, e) {
            if ("function" != typeof t || (null != e && "function" != typeof e)) throw new TypeError(i);
            var n = function () {
                var r = arguments,
                    i = e ? e.apply(this, r) : r[0],
                    o = n.cache;
                if (o.has(i)) return o.get(i);
                var a = t.apply(this, r);
                return (n.cache = o.set(i, a) || o), a;
            };
            return (n.cache = new (o.Cache || r)()), n;
        }
        (o.Cache = r), (t.exports = o);
    },
    function (t, e, n) {
        var r = n(236);
        t.exports = function (t) {
            return null == t ? "" : r(t);
        };
    },
    function (t, e, n) {
        var r = n(20),
            i = n(102),
            o = n(1),
            a = n(36),
            u = 1 / 0,
            c = r ? r.prototype : void 0,
            s = c ? c.toString : void 0;
        t.exports = function t(e) {
            if ("string" == typeof e) return e;
            if (o(e)) return i(e, t) + "";
            if (a(e)) return s ? s.call(e) : "";
            var n = e + "";
            return "0" == n && 1 / e == -u ? "-0" : n;
        };
    },
    function (t, e, n) {
        var r = n(238),
            i = n(239);
        t.exports = function (t, e) {
            return null != t && i(t, e, r);
        };
    },
    function (t, e) {
        t.exports = function (t, e) {
            return null != t && e in Object(t);
        };
    },
    function (t, e, n) {
        var r = n(35),
            i = n(34),
            o = n(1),
            a = n(50),
            u = n(52),
            c = n(21);
        t.exports = function (t, e, n) {
            for (var s = -1, l = (e = r(e, t)).length, f = !1; ++s < l; ) {
                var d = c(e[s]);
                if (!(f = null != t && n(t, d))) break;
                t = t[d];
            }
            return f || ++s != l ? f : !!(l = null == t ? 0 : t.length) && u(l) && a(d, l) && (o(t) || i(t));
        };
    },
    function (t, e, n) {
        var r = n(103),
            i = n(241),
            o = n(58),
            a = n(21);
        t.exports = function (t) {
            return o(t) ? r(a(t)) : i(t);
        };
    },
    function (t, e, n) {
        var r = n(57);
        t.exports = function (t) {
            return function (e) {
                return r(e, t);
            };
        };
    },
    function (t, e, n) {
        var r = n(104),
            i = n(7),
            o = n(105),
            a = Math.max;
        t.exports = function (t, e, n) {
            var u = null == t ? 0 : t.length;
            if (!u) return -1;
            var c = null == n ? 0 : o(n);
            return c < 0 && (c = a(u + c, 0)), r(t, i(e, 3), c);
        };
    },
    function (t, e, n) {
        var r = n(60),
            i = 1 / 0,
            o = 1.7976931348623157e308;
        t.exports = function (t) {
            return t ? ((t = r(t)) === i || t === -i ? (t < 0 ? -1 : 1) * o : t == t ? t : 0) : 0 === t ? t : 0;
        };
    },
    function (t, e) {
        t.exports = function (t) {
            if (Array.isArray(t)) {
                for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
                return n;
            }
        };
    },
    function (t, e) {
        t.exports = function (t) {
            if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t);
        };
    },
    function (t, e) {
        t.exports = function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance");
        };
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.createElementState = I), (e.mergeActionState = b), (e.ixElements = void 0);
        var r = n(19),
            i = n(3),
            o = i.IX2EngineConstants,
            a = (o.HTML_ELEMENT, o.PLAIN_OBJECT),
            u = (o.ABSTRACT_NODE, o.CONFIG_X_VALUE),
            c = o.CONFIG_Y_VALUE,
            s = o.CONFIG_Z_VALUE,
            l = o.CONFIG_VALUE,
            f = o.CONFIG_X_UNIT,
            d = o.CONFIG_Y_UNIT,
            p = o.CONFIG_Z_UNIT,
            v = o.CONFIG_UNIT,
            h = i.IX2EngineActionTypes,
            g = h.IX2_SESSION_STOPPED,
            E = h.IX2_INSTANCE_ADDED,
            m = h.IX2_ELEMENT_STATE_CHANGED,
            y = {},
            _ = "refState";
        function I(t, e, n, i, o) {
            var u = n === a ? (0, r.getIn)(o, ["config", "target", "objectId"]) : null;
            return (0, r.mergeIn)(t, [i], { id: i, ref: e, refId: u, refType: n });
        }
        function b(t, e, n, i, o) {
            var a = (function (t) {
                    var e = t.config;
                    return w.reduce(function (t, n) {
                        var r = n[0],
                            i = n[1],
                            o = e[r],
                            a = e[i];
                        return null != o && null != a && (t[i] = a), t;
                    }, {});
                })(o),
                u = [e, _, n];
            return (0, r.mergeIn)(t, u, i, a);
        }
        e.ixElements = function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : y,
                e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            switch (e.type) {
                case g:
                    return y;
                case E:
                    var n = e.payload,
                        i = n.elementId,
                        o = n.element,
                        a = n.origin,
                        u = n.actionItem,
                        c = n.refType,
                        s = u.actionTypeId,
                        l = t;
                    return (0, r.getIn)(l, [i, o]) !== o && (l = I(l, o, c, i, u)), b(l, i, s, a, u);
                case m:
                    var f = e.payload;
                    return b(t, f.elementId, f.actionTypeId, f.current, f.actionItem);
                default:
                    return t;
            }
        };
        var w = [
            [u, f],
            [c, d],
            [s, p],
            [l, v],
        ];
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.clearPlugin = e.renderPlugin = e.createPluginInstance = e.getPluginDestination = e.getPluginOrigin = e.getPluginDuration = e.getPluginConfig = void 0);
        e.getPluginConfig = function (t) {
            return t.value;
        };
        e.getPluginDuration = function (t, e) {
            if ("auto" !== e.config.duration) return null;
            var n = parseFloat(t.getAttribute("data-duration"));
            return n > 0 ? 1e3 * n : 1e3 * parseFloat(t.getAttribute("data-default-duration"));
        };
        e.getPluginOrigin = function (t) {
            return t || { value: 0 };
        };
        e.getPluginDestination = function (t) {
            return { value: t.value };
        };
        e.createPluginInstance = function (t) {
            var e = window.Webflow.require("lottie").createInstance(t);
            return e.stop(), e.setSubframe(!0), e;
        };
        e.renderPlugin = function (t, e, n) {
            if (t) {
                var r = e[n.actionTypeId].value / 100;
                t.goToFrame(t.frames * r);
            }
        };
        e.clearPlugin = function (t) {
            window.Webflow.require("lottie").createInstance(t).stop();
        };
    },
    function (t, e, n) {
        "use strict";
        var r,
            i,
            o,
            a = n(0),
            u = a(n(22)),
            c = a(n(27)),
            s = n(0);
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.getInstanceId = function () {
                return "i" + vt++;
            }),
            (e.getElementId = function (t, e) {
                for (var n in t) {
                    var r = t[n];
                    if (r && r.ref === e) return r.id;
                }
                return "e" + ht++;
            }),
            (e.reifyState = function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    e = t.events,
                    n = t.actionLists,
                    r = t.site,
                    i = (0, f.default)(
                        e,
                        function (t, e) {
                            var n = e.eventTypeId;
                            return t[n] || (t[n] = {}), (t[n][e.id] = e), t;
                        },
                        {}
                    ),
                    o = r && r.mediaQueries,
                    a = [];
                o
                    ? (a = o.map(function (t) {
                          return t.key;
                      }))
                    : ((o = []), console.warn("IX2 missing mediaQueries in site data"));
                return { ixData: { events: e, actionLists: n, eventTypeMap: i, mediaQueries: o, mediaQueryKeys: a } };
            }),
            (e.observeStore = function (t) {
                var e = t.store,
                    n = t.select,
                    r = t.onChange,
                    i = t.comparator,
                    o = void 0 === i ? gt : i,
                    a = e.getState,
                    u = (0, e.subscribe)(function () {
                        var t = n(a());
                        if (null == t) return void u();
                        o(t, c) || r((c = t), e);
                    }),
                    c = n(a());
                return u;
            }),
            (e.getAffectedElements = mt),
            (e.getComputedStyle = function (t) {
                var e = t.element,
                    n = t.actionItem;
                if (!m.IS_BROWSER_ENV) return {};
                switch (n.actionTypeId) {
                    case it:
                    case ot:
                    case at:
                    case ut:
                    case ct:
                        return window.getComputedStyle(e);
                    default:
                        return {};
                }
            }),
            (e.getInstanceOrigin = function (t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    r = arguments.length > 3 ? arguments[3] : void 0,
                    i = (arguments.length > 4 ? arguments[4] : void 0).getStyle,
                    o = r.actionTypeId,
                    a = r.config;
                if ((0, E.isPluginType)(o)) return (0, E.getPluginOrigin)(o)(e[o]);
                switch (o) {
                    case Z:
                    case J:
                    case tt:
                    case et:
                        return e[o] || wt[o];
                    case rt:
                        return _t(e[o], r.config.filters);
                    case nt:
                        return { value: (0, l.default)(parseFloat(i(t, C)), 1) };
                    case it:
                        var u,
                            c,
                            s = i(t, L),
                            f = i(t, D);
                        return (
                            (u = a.widthUnit === W ? (yt.test(s) ? parseFloat(s) : parseFloat(n.width)) : (0, l.default)(parseFloat(s), parseFloat(n.width))),
                            (c = a.heightUnit === W ? (yt.test(f) ? parseFloat(f) : parseFloat(n.height)) : (0, l.default)(parseFloat(f), parseFloat(n.height))),
                            { widthValue: u, heightValue: c }
                        );
                    case ot:
                    case at:
                    case ut:
                        return (function (t) {
                            var e = t.element,
                                n = t.actionTypeId,
                                r = t.computedStyle,
                                i = t.getStyle,
                                o = ft[n],
                                a = i(e, o),
                                u = xt.test(a) ? a : r[o],
                                c = (function (t, e) {
                                    var n = t.exec(e);
                                    return n ? n[1] : "";
                                })(St, u).split(B);
                            return { rValue: (0, l.default)(parseInt(c[0], 10), 255), gValue: (0, l.default)(parseInt(c[1], 10), 255), bValue: (0, l.default)(parseInt(c[2], 10), 255), aValue: (0, l.default)(parseFloat(c[3]), 1) };
                        })({ element: t, actionTypeId: o, computedStyle: n, getStyle: i });
                    case ct:
                        return { value: (0, l.default)(i(t, U), n.display) };
                    case st:
                        return e[o] || { value: 0 };
                    default:
                        return;
                }
            }),
            (e.getDestinationValues = function (t) {
                var e = t.element,
                    n = t.actionItem,
                    r = t.elementApi,
                    i = n.actionTypeId;
                if ((0, E.isPluginType)(i)) return (0, E.getPluginDestination)(i)(n.config);
                switch (i) {
                    case Z:
                    case J:
                    case tt:
                    case et:
                        var o = n.config,
                            a = o.xValue,
                            u = o.yValue,
                            c = o.zValue;
                        return { xValue: a, yValue: u, zValue: c };
                    case it:
                        var s = r.getStyle,
                            l = r.setStyle,
                            f = r.getProperty,
                            d = n.config,
                            p = d.widthUnit,
                            v = d.heightUnit,
                            h = n.config,
                            g = h.widthValue,
                            y = h.heightValue;
                        if (!m.IS_BROWSER_ENV) return { widthValue: g, heightValue: y };
                        if (p === W) {
                            var _ = s(e, L);
                            l(e, L, ""), (g = f(e, "offsetWidth")), l(e, L, _);
                        }
                        if (v === W) {
                            var I = s(e, D);
                            l(e, D, ""), (y = f(e, "offsetHeight")), l(e, D, I);
                        }
                        return { widthValue: g, heightValue: y };
                    case ot:
                    case at:
                    case ut:
                        var b = n.config,
                            w = b.rValue,
                            T = b.gValue,
                            O = b.bValue,
                            A = b.aValue;
                        return { rValue: w, gValue: T, bValue: O, aValue: A };
                    case rt:
                        return n.config.filters.reduce(It, {});
                    default:
                        var x = n.config.value;
                        return { value: x };
                }
            }),
            (e.getRenderType = bt),
            (e.getStyleProp = function (t, e) {
                return t === Q ? e.replace("STYLE_", "").toLowerCase() : null;
            }),
            (e.renderHTMLElement = function (t, e, n, r, i, o, a, u, c) {
                switch (u) {
                    case Y:
                        return (function (t, e, n, r, i) {
                            var o = At.map(function (t) {
                                    var n = wt[t],
                                        r = e[t] || {},
                                        i = r.xValue,
                                        o = void 0 === i ? n.xValue : i,
                                        a = r.yValue,
                                        u = void 0 === a ? n.yValue : a,
                                        c = r.zValue,
                                        s = void 0 === c ? n.zValue : c,
                                        l = r.xUnit,
                                        f = void 0 === l ? "" : l,
                                        d = r.yUnit,
                                        p = void 0 === d ? "" : d,
                                        v = r.zUnit,
                                        h = void 0 === v ? "" : v;
                                    switch (t) {
                                        case Z:
                                            return "".concat(b, "(").concat(o).concat(f, ", ").concat(u).concat(p, ", ").concat(s).concat(h, ")");
                                        case J:
                                            return "".concat(w, "(").concat(o).concat(f, ", ").concat(u).concat(p, ", ").concat(s).concat(h, ")");
                                        case tt:
                                            return "".concat(T, "(").concat(o).concat(f, ") ").concat(O, "(").concat(u).concat(p, ") ").concat(A, "(").concat(s).concat(h, ")");
                                        case et:
                                            return "".concat(x, "(").concat(o).concat(f, ", ").concat(u).concat(p, ")");
                                        default:
                                            return "";
                                    }
                                }).join(" "),
                                a = i.setStyle;
                            Rt(t, m.TRANSFORM_PREFIXED, i),
                                a(t, m.TRANSFORM_PREFIXED, o),
                                (u = r),
                                (c = n),
                                (s = u.actionTypeId),
                                (l = c.xValue),
                                (f = c.yValue),
                                (d = c.zValue),
                                ((s === Z && void 0 !== d) || (s === J && void 0 !== d) || (s === tt && (void 0 !== l || void 0 !== f))) && a(t, m.TRANSFORM_STYLE_PREFIXED, S);
                            var u, c, s, l, f, d;
                        })(t, e, n, i, a);
                    case Q:
                        return (function (t, e, n, r, i, o) {
                            var a = o.setStyle,
                                u = r.actionTypeId,
                                c = r.config;
                            switch (u) {
                                case it:
                                    var s = r.config,
                                        l = s.widthUnit,
                                        d = void 0 === l ? "" : l,
                                        p = s.heightUnit,
                                        v = void 0 === p ? "" : p,
                                        h = n.widthValue,
                                        g = n.heightValue;
                                    void 0 !== h && (d === W && (d = "px"), Rt(t, L, o), a(t, L, h + d)), void 0 !== g && (v === W && (v = "px"), Rt(t, D, o), a(t, D, g + v));
                                    break;
                                case rt:
                                    !(function (t, e, n, r) {
                                        var i = (0, f.default)(
                                                e,
                                                function (t, e, r) {
                                                    return "".concat(t, " ").concat(r, "(").concat(e).concat(Ot(r, n), ")");
                                                },
                                                ""
                                            ),
                                            o = r.setStyle;
                                        Rt(t, N, r), o(t, N, i);
                                    })(t, n, c, o);
                                    break;
                                case ot:
                                case at:
                                case ut:
                                    var E = ft[u],
                                        m = Math.round(n.rValue),
                                        y = Math.round(n.gValue),
                                        _ = Math.round(n.bValue),
                                        I = n.aValue;
                                    Rt(t, E, o), a(t, E, I >= 1 ? "rgb(".concat(m, ",").concat(y, ",").concat(_, ")") : "rgba(".concat(m, ",").concat(y, ",").concat(_, ",").concat(I, ")"));
                                    break;
                                default:
                                    var b = c.unit,
                                        w = void 0 === b ? "" : b;
                                    Rt(t, i, o), a(t, i, n.value + w);
                            }
                        })(t, 0, n, i, o, a);
                    case K:
                        return (function (t, e, n) {
                            var r = n.setStyle;
                            switch (e.actionTypeId) {
                                case ct:
                                    var i = e.config.value;
                                    return void (i === R && m.IS_BROWSER_ENV ? r(t, U, m.FLEX_PREFIXED) : r(t, U, i));
                            }
                        })(t, i, a);
                    case q:
                        var s = i.actionTypeId;
                        if ((0, E.isPluginType)(s)) return (0, E.renderPlugin)(s)(c, e, i);
                }
            }),
            (e.clearAllStyles = function (t) {
                var e = t.store,
                    n = t.elementApi,
                    r = e.getState().ixData,
                    i = r.events,
                    o = void 0 === i ? {} : i,
                    a = r.actionLists,
                    u = void 0 === a ? {} : a;
                Object.keys(o).forEach(function (t) {
                    var e = o[t],
                        r = e.action.config,
                        i = r.actionListId,
                        a = u[i];
                    a && Nt({ actionList: a, event: e, elementApi: n });
                }),
                    Object.keys(u).forEach(function (t) {
                        Nt({ actionList: u[t], elementApi: n });
                    });
            }),
            (e.cleanupHTMLElement = function (t, e, n) {
                var r = n.setStyle,
                    i = n.getStyle,
                    o = e.actionTypeId;
                if (o === it) {
                    var a = e.config;
                    a.widthUnit === W && r(t, L, ""), a.heightUnit === W && r(t, D, "");
                }
                i(t, V) && Dt({ effect: Ct, actionTypeId: o, elementApi: n })(t);
            }),
            (e.getMaxDurationItemIndex = Mt),
            (e.getActionListProgress = function (t, e) {
                var n = t.actionItemGroups,
                    r = t.useFirstGroupAsInitialState,
                    i = e.actionItem,
                    o = e.verboseTimeElapsed,
                    a = void 0 === o ? 0 : o,
                    u = 0,
                    c = 0;
                return (
                    n.forEach(function (t, e) {
                        if (!r || 0 !== e) {
                            var n = t.actionItems,
                                o = n[Mt(n)],
                                s = o.config,
                                l = o.actionTypeId;
                            i.id === o.id && (c = u + a);
                            var f = bt(l) === K ? 0 : s.duration;
                            u += s.delay + f;
                        }
                    }),
                    u > 0 ? (0, g.optimizeFloat)(c / u) : 0
                );
            }),
            (e.reduceListToGroup = function (t) {
                var e = t.actionList,
                    n = t.actionItemId,
                    r = t.rawData,
                    i = e.actionItemGroups,
                    o = e.continuousParameterGroups,
                    a = [],
                    u = function (t) {
                        return a.push((0, p.mergeIn)(t, ["config"], { delay: 0, duration: 0 })), t.id === n;
                    };
                return (
                    i &&
                        i.some(function (t) {
                            return t.actionItems.some(u);
                        }),
                    o &&
                        o.some(function (t) {
                            return t.continuousActionGroups.some(function (t) {
                                return t.actionItems.some(u);
                            });
                        }),
                    (0, p.setIn)(r, ["actionLists"], (0, c.default)({}, e.id, { id: e.id, actionItemGroups: [{ actionItems: a }] }))
                );
            }),
            (e.shouldNamespaceEventParameter = function (t, e) {
                var n = e.basedOn;
                return (t === h.EventTypeConsts.SCROLLING_IN_VIEW && (n === h.EventBasedOn.ELEMENT || null == n)) || (t === h.EventTypeConsts.MOUSE_MOVE && n === h.EventBasedOn.ELEMENT);
            }),
            (e.getNamespacedParameterId = function (t, e) {
                return t + H + e;
            }),
            (e.shouldAllowMediaQuery = function (t, e) {
                if (null == e) return !0;
                return -1 !== t.indexOf(e);
            }),
            (e.mediaQueriesEqual = function (t, e) {
                return (0, v.default)(t && t.sort(), e && e.sort());
            }),
            (e.stringifyTarget = function (t) {
                if ("string" == typeof t) return t;
                var e = t.id,
                    n = void 0 === e ? "" : e,
                    r = t.selector,
                    i = void 0 === r ? "" : r,
                    o = t.useEventTarget;
                return n + z + i + z + (void 0 === o ? "" : o);
            }),
            (e.getItemConfigByKey = void 0);
        var l = s(n(250)),
            f = s(n(251)),
            d = s(n(257)),
            p = n(19),
            v = s(n(113)),
            h = n(3),
            g = n(108),
            E = n(110),
            m = n(44),
            y = h.IX2EngineConstants,
            _ = y.BACKGROUND,
            I = y.TRANSFORM,
            b = y.TRANSLATE_3D,
            w = y.SCALE_3D,
            T = y.ROTATE_X,
            O = y.ROTATE_Y,
            A = y.ROTATE_Z,
            x = y.SKEW,
            S = y.PRESERVE_3D,
            R = y.FLEX,
            C = y.OPACITY,
            N = y.FILTER,
            L = y.WIDTH,
            D = y.HEIGHT,
            P = y.BACKGROUND_COLOR,
            M = y.BORDER_COLOR,
            j = y.COLOR,
            k = y.CHILDREN,
            F = y.IMMEDIATE_CHILDREN,
            G = y.SIBLINGS,
            X = y.PARENT,
            U = y.DISPLAY,
            V = y.WILL_CHANGE,
            W = y.AUTO,
            B = y.COMMA_DELIMITER,
            H = y.COLON_DELIMITER,
            z = y.BAR_DELIMITER,
            Y = y.RENDER_TRANSFORM,
            K = y.RENDER_GENERAL,
            Q = y.RENDER_STYLE,
            q = y.RENDER_PLUGIN,
            $ = h.ActionTypeConsts,
            Z = $.TRANSFORM_MOVE,
            J = $.TRANSFORM_SCALE,
            tt = $.TRANSFORM_ROTATE,
            et = $.TRANSFORM_SKEW,
            nt = $.STYLE_OPACITY,
            rt = $.STYLE_FILTER,
            it = $.STYLE_SIZE,
            ot = $.STYLE_BACKGROUND_COLOR,
            at = $.STYLE_BORDER,
            ut = $.STYLE_TEXT_COLOR,
            ct = $.GENERAL_DISPLAY,
            st = "OBJECT_VALUE",
            lt = function (t) {
                return t.trim();
            },
            ft = Object.freeze(((r = {}), (0, c.default)(r, ot, P), (0, c.default)(r, at, M), (0, c.default)(r, ut, j), r)),
            dt = Object.freeze(((i = {}), (0, c.default)(i, m.TRANSFORM_PREFIXED, I), (0, c.default)(i, P, _), (0, c.default)(i, C, C), (0, c.default)(i, N, N), (0, c.default)(i, L, L), (0, c.default)(i, D, D), i)),
            pt = {},
            vt = 1;
        var ht = 1;
        var gt = function (t, e) {
            return t === e;
        };
        function Et(t) {
            var e = (0, u.default)(t);
            return "string" === e ? { id: t } : null != t && "object" === e ? { id: t.id, objectId: t.objectId, selector: t.selector, selectorGuids: t.selectorGuids, appliesTo: t.appliesTo, useEventTarget: t.useEventTarget } : {};
        }
        function mt(t) {
            var e,
                n,
                r,
                i = t.config,
                o = t.event,
                a = t.eventTarget,
                u = t.elementRoot,
                c = t.elementApi;
            if (!c) throw new Error("IX2 missing elementApi");
            var s = i.targets;
            if (Array.isArray(s) && s.length > 0)
                return s.reduce(function (t, e) {
                    return t.concat(mt({ config: { target: e }, event: o, eventTarget: a, elementRoot: u, elementApi: c }));
                }, []);
            var l = c.getValidDocument,
                f = c.getQuerySelector,
                d = c.queryDocument,
                p = c.getChildElements,
                v = c.getSiblingElements,
                g = c.matchSelector,
                E = c.elementContains,
                y = c.isSiblingNode,
                _ = i.target;
            if (!_) return [];
            var I = Et(_),
                b = I.id,
                w = I.objectId,
                T = I.selector,
                O = I.selectorGuids,
                A = I.appliesTo,
                x = I.useEventTarget;
            if (w) return [pt[w] || (pt[w] = {})];
            if (A === h.EventAppliesTo.PAGE) {
                var S = l(b);
                return S ? [S] : [];
            }
            var R,
                C,
                N,
                L = (null !== (e = null == o ? void 0 : null === (n = o.action) || void 0 === n ? void 0 : null === (r = n.config) || void 0 === r ? void 0 : r.affectedElements) && void 0 !== e ? e : {})[b || T] || {},
                D = Boolean(L.id || L.selector),
                P = o && f(Et(o.target));
            if ((D ? ((R = L.limitAffectedElements), (C = P), (N = f(L))) : (C = N = f({ id: b, selector: T, selectorGuids: O })), o && x)) {
                var M = a && (N || !0 === x) ? [a] : d(P);
                if (N) {
                    if (x === X)
                        return d(N).filter(function (t) {
                            return M.some(function (e) {
                                return E(t, e);
                            });
                        });
                    if (x === k)
                        return d(N).filter(function (t) {
                            return M.some(function (e) {
                                return E(e, t);
                            });
                        });
                    if (x === G)
                        return d(N).filter(function (t) {
                            return M.some(function (e) {
                                return y(e, t);
                            });
                        });
                }
                return M;
            }
            return null == C || null == N
                ? []
                : m.IS_BROWSER_ENV && u
                ? d(N).filter(function (t) {
                      return u.contains(t);
                  })
                : R === k
                ? d(C, N)
                : R === F
                ? p(d(C)).filter(g(N))
                : R === G
                ? v(d(C)).filter(g(N))
                : d(N);
        }
        var yt = /px/,
            _t = function (t, e) {
                return e.reduce(function (t, e) {
                    return null == t[e.type] && (t[e.type] = Tt[e.type]), t;
                }, t || {});
            };
        var It = function (t, e) {
            return e && (t[e.type] = e.value || 0), t;
        };
        function bt(t) {
            return /^TRANSFORM_/.test(t) ? Y : /^STYLE_/.test(t) ? Q : /^GENERAL_/.test(t) ? K : /^PLUGIN_/.test(t) ? q : void 0;
        }
        e.getItemConfigByKey = function (t, e, n) {
            if ((0, E.isPluginType)(t)) return (0, E.getPluginConfig)(t)(n, e);
            switch (t) {
                case rt:
                    var r = (0, d.default)(n.filters, function (t) {
                        return t.type === e;
                    });
                    return r ? r.value : 0;
                default:
                    return n[e];
            }
        };
        var wt =
                ((o = {}),
                (0, c.default)(o, Z, Object.freeze({ xValue: 0, yValue: 0, zValue: 0 })),
                (0, c.default)(o, J, Object.freeze({ xValue: 1, yValue: 1, zValue: 1 })),
                (0, c.default)(o, tt, Object.freeze({ xValue: 0, yValue: 0, zValue: 0 })),
                (0, c.default)(o, et, Object.freeze({ xValue: 0, yValue: 0 })),
                o),
            Tt = Object.freeze({ blur: 0, "hue-rotate": 0, invert: 0, grayscale: 0, saturate: 100, sepia: 0, contrast: 100, brightness: 100 }),
            Ot = function (t, e) {
                var n = (0, d.default)(e.filters, function (e) {
                    return e.type === t;
                });
                if (n && n.unit) return n.unit;
                switch (t) {
                    case "blur":
                        return "px";
                    case "hue-rotate":
                        return "deg";
                    default:
                        return "%";
                }
            },
            At = Object.keys(wt);
        var xt = /^rgb/,
            St = RegExp("rgba?".concat("\\(([^)]+)\\)"));
        function Rt(t, e, n) {
            if (m.IS_BROWSER_ENV) {
                var r = dt[e];
                if (r) {
                    var i = n.getStyle,
                        o = n.setStyle,
                        a = i(t, V);
                    if (a) {
                        var u = a.split(B).map(lt);
                        -1 === u.indexOf(r) && o(t, V, u.concat(r).join(B));
                    } else o(t, V, r);
                }
            }
        }
        function Ct(t, e, n) {
            if (m.IS_BROWSER_ENV) {
                var r = dt[e];
                if (r) {
                    var i = n.getStyle,
                        o = n.setStyle,
                        a = i(t, V);
                    a &&
                        -1 !== a.indexOf(r) &&
                        o(
                            t,
                            V,
                            a
                                .split(B)
                                .map(lt)
                                .filter(function (t) {
                                    return t !== r;
                                })
                                .join(B)
                        );
                }
            }
        }
        function Nt(t) {
            var e = t.actionList,
                n = void 0 === e ? {} : e,
                r = t.event,
                i = t.elementApi,
                o = n.actionItemGroups,
                a = n.continuousParameterGroups;
            o &&
                o.forEach(function (t) {
                    Lt({ actionGroup: t, event: r, elementApi: i });
                }),
                a &&
                    a.forEach(function (t) {
                        t.continuousActionGroups.forEach(function (t) {
                            Lt({ actionGroup: t, event: r, elementApi: i });
                        });
                    });
        }
        function Lt(t) {
            var e = t.actionGroup,
                n = t.event,
                r = t.elementApi;
            e.actionItems.forEach(function (t) {
                var e,
                    i = t.actionTypeId,
                    o = t.config;
                (e = (0, E.isPluginType)(i) ? (0, E.clearPlugin)(i) : Dt({ effect: Pt, actionTypeId: i, elementApi: r })), mt({ config: o, event: n, elementApi: r }).forEach(e);
            });
        }
        var Dt = function (t) {
            var e = t.effect,
                n = t.actionTypeId,
                r = t.elementApi;
            return function (t) {
                switch (n) {
                    case Z:
                    case J:
                    case tt:
                    case et:
                        e(t, m.TRANSFORM_PREFIXED, r);
                        break;
                    case rt:
                        e(t, N, r);
                        break;
                    case nt:
                        e(t, C, r);
                        break;
                    case it:
                        e(t, L, r), e(t, D, r);
                        break;
                    case ot:
                    case at:
                    case ut:
                        e(t, ft[n], r);
                        break;
                    case ct:
                        e(t, U, r);
                }
            };
        };
        function Pt(t, e, n) {
            var r = n.setStyle;
            Ct(t, e, n), r(t, e, ""), e === m.TRANSFORM_PREFIXED && r(t, m.TRANSFORM_STYLE_PREFIXED, "");
        }
        function Mt(t) {
            var e = 0,
                n = 0;
            return (
                t.forEach(function (t, r) {
                    var i = t.config,
                        o = i.delay + i.duration;
                    o >= e && ((e = o), (n = r));
                }),
                n
            );
        }
    },
    function (t, e) {
        t.exports = function (t, e) {
            return null == t || t != t ? e : t;
        };
    },
    function (t, e, n) {
        var r = n(252),
            i = n(111),
            o = n(7),
            a = n(256),
            u = n(1);
        t.exports = function (t, e, n) {
            var c = u(t) ? r : a,
                s = arguments.length < 3;
            return c(t, o(e, 4), n, s, i);
        };
    },
    function (t, e) {
        t.exports = function (t, e, n, r) {
            var i = -1,
                o = null == t ? 0 : t.length;
            for (r && o && (n = t[++i]); ++i < o; ) n = e(n, t[i], i, t);
            return n;
        };
    },
    function (t, e, n) {
        var r = n(254)();
        t.exports = r;
    },
    function (t, e) {
        t.exports = function (t) {
            return function (e, n, r) {
                for (var i = -1, o = Object(e), a = r(e), u = a.length; u--; ) {
                    var c = a[t ? u : ++i];
                    if (!1 === n(o[c], c, o)) break;
                }
                return e;
            };
        };
    },
    function (t, e, n) {
        var r = n(12);
        t.exports = function (t, e) {
            return function (n, i) {
                if (null == n) return n;
                if (!r(n)) return t(n, i);
                for (var o = n.length, a = e ? o : -1, u = Object(n); (e ? a-- : ++a < o) && !1 !== i(u[a], a, u); );
                return n;
            };
        };
    },
    function (t, e) {
        t.exports = function (t, e, n, r, i) {
            return (
                i(t, function (t, i, o) {
                    n = r ? ((r = !1), t) : e(n, t, i, o);
                }),
                n
            );
        };
    },
    function (t, e, n) {
        var r = n(86)(n(258));
        t.exports = r;
    },
    function (t, e, n) {
        var r = n(104),
            i = n(7),
            o = n(105),
            a = Math.max,
            u = Math.min;
        t.exports = function (t, e, n) {
            var c = null == t ? 0 : t.length;
            if (!c) return -1;
            var s = c - 1;
            return void 0 !== n && ((s = o(n)), (s = n < 0 ? a(c + s, 0) : u(s, c - 1))), r(t, i(e, 3), s, !0);
        };
    },
    function (t, e) {
        t.exports = function (t) {
            return t && t.__esModule ? t : { default: t };
        };
    },
    function (t, e, n) {
        "use strict";
        var r = Object.prototype.hasOwnProperty;
        function i(t, e) {
            return t === e ? 0 !== t || 0 !== e || 1 / t == 1 / e : t != t && e != e;
        }
        t.exports = function (t, e) {
            if (i(t, e)) return !0;
            if ("object" != typeof t || null === t || "object" != typeof e || null === e) return !1;
            var n = Object.keys(t),
                o = Object.keys(e);
            if (n.length !== o.length) return !1;
            for (var a = 0; a < n.length; a++) if (!r.call(e, n[a]) || !i(t[n[a]], e[n[a]])) return !1;
            return !0;
        };
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.ixInstances = void 0);
        var r = n(3),
            i = n(10),
            o = n(19),
            a = r.IX2EngineActionTypes,
            u = a.IX2_RAW_DATA_IMPORTED,
            c = a.IX2_SESSION_STOPPED,
            s = a.IX2_INSTANCE_ADDED,
            l = a.IX2_INSTANCE_STARTED,
            f = a.IX2_INSTANCE_REMOVED,
            d = a.IX2_ANIMATION_FRAME_CHANGED,
            p = i.IX2EasingUtils,
            v = p.optimizeFloat,
            h = p.applyEasing,
            g = p.createBezierEasing,
            E = r.IX2EngineConstants.RENDER_GENERAL,
            m = i.IX2VanillaUtils,
            y = m.getItemConfigByKey,
            _ = m.getRenderType,
            I = m.getStyleProp,
            b = function (t, e) {
                var n = t.position,
                    r = t.parameterId,
                    i = t.actionGroups,
                    a = t.destinationKeys,
                    u = t.smoothing,
                    c = t.restingValue,
                    s = t.actionTypeId,
                    l = t.customEasingFn,
                    f = e.payload.parameters,
                    d = Math.max(1 - u, 0.01),
                    p = f[r];
                null == p && ((d = 1), (p = c));
                var g,
                    E,
                    m,
                    _,
                    I = Math.max(p, 0) || 0,
                    b = v(I - n),
                    w = v(n + b * d),
                    T = 100 * w;
                if (w === n && t.current) return t;
                for (var O = 0, A = i.length; O < A; O++) {
                    var x = i[O],
                        S = x.keyframe,
                        R = x.actionItems;
                    if ((0 === O && (g = R[0]), T >= S)) {
                        g = R[0];
                        var C = i[O + 1],
                            N = C && T !== S;
                        (E = N ? C.actionItems[0] : null), N && ((m = S / 100), (_ = (C.keyframe - S) / 100));
                    }
                }
                var L = {};
                if (g && !E)
                    for (var D = 0, P = a.length; D < P; D++) {
                        var M = a[D];
                        L[M] = y(s, M, g.config);
                    }
                else if (g && E && void 0 !== m && void 0 !== _)
                    for (var j = (w - m) / _, k = g.config.easing, F = h(k, j, l), G = 0, X = a.length; G < X; G++) {
                        var U = a[G],
                            V = y(s, U, g.config),
                            W = (y(s, U, E.config) - V) * F + V;
                        L[U] = W;
                    }
                return (0, o.merge)(t, { position: w, current: L });
            },
            w = function (t, e) {
                var n = t,
                    r = n.active,
                    i = n.origin,
                    a = n.start,
                    u = n.immediate,
                    c = n.renderType,
                    s = n.verbose,
                    l = n.actionItem,
                    f = n.destination,
                    d = n.destinationKeys,
                    p = n.pluginDuration,
                    g = n.instanceDelay,
                    m = n.customEasingFn,
                    y = l.config.easing,
                    _ = l.config,
                    I = _.duration,
                    b = _.delay;
                null != p && (I = p), (b = null != g ? g : b), c === E ? (I = 0) : u && (I = b = 0);
                var w = e.payload.now;
                if (r && i) {
                    var T = w - (a + b);
                    if (s) {
                        var O = w - a,
                            A = I + b,
                            x = v(Math.min(Math.max(0, O / A), 1));
                        t = (0, o.set)(t, "verboseTimeElapsed", A * x);
                    }
                    if (T < 0) return t;
                    var S = v(Math.min(Math.max(0, T / I), 1)),
                        R = h(y, S, m),
                        C = {},
                        N = null;
                    return (
                        d.length &&
                            (N = d.reduce(function (t, e) {
                                var n = f[e],
                                    r = parseFloat(i[e]) || 0,
                                    o = (parseFloat(n) - r) * R + r;
                                return (t[e] = o), t;
                            }, {})),
                        (C.current = N),
                        (C.position = S),
                        1 === S && ((C.active = !1), (C.complete = !0)),
                        (0, o.merge)(t, C)
                    );
                }
                return t;
            };
        e.ixInstances = function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object.freeze({}),
                e = arguments.length > 1 ? arguments[1] : void 0;
            switch (e.type) {
                case u:
                    return e.payload.ixInstances || Object.freeze({});
                case c:
                    return Object.freeze({});
                case s:
                    var n = e.payload,
                        r = n.instanceId,
                        i = n.elementId,
                        a = n.actionItem,
                        p = n.eventId,
                        v = n.eventTarget,
                        h = n.eventStateKey,
                        E = n.actionListId,
                        m = n.groupIndex,
                        y = n.isCarrier,
                        T = n.origin,
                        O = n.destination,
                        A = n.immediate,
                        x = n.verbose,
                        S = n.continuous,
                        R = n.parameterId,
                        C = n.actionGroups,
                        N = n.smoothing,
                        L = n.restingValue,
                        D = n.pluginInstance,
                        P = n.pluginDuration,
                        M = n.instanceDelay,
                        j = a.actionTypeId,
                        k = _(j),
                        F = I(k, j),
                        G = Object.keys(O).filter(function (t) {
                            return null != O[t];
                        }),
                        X = a.config.easing;
                    return (0, o.set)(t, r, {
                        id: r,
                        elementId: i,
                        active: !1,
                        position: 0,
                        start: 0,
                        origin: T,
                        destination: O,
                        destinationKeys: G,
                        immediate: A,
                        verbose: x,
                        current: null,
                        actionItem: a,
                        actionTypeId: j,
                        eventId: p,
                        eventTarget: v,
                        eventStateKey: h,
                        actionListId: E,
                        groupIndex: m,
                        renderType: k,
                        isCarrier: y,
                        styleProp: F,
                        continuous: S,
                        parameterId: R,
                        actionGroups: C,
                        smoothing: N,
                        restingValue: L,
                        pluginInstance: D,
                        pluginDuration: P,
                        instanceDelay: M,
                        customEasingFn: Array.isArray(X) && 4 === X.length ? g(X) : void 0,
                    });
                case l:
                    var U = e.payload,
                        V = U.instanceId,
                        W = U.time;
                    return (0, o.mergeIn)(t, [V], { active: !0, complete: !1, start: W });
                case f:
                    var B = e.payload.instanceId;
                    if (!t[B]) return t;
                    for (var H = {}, z = Object.keys(t), Y = z.length, K = 0; K < Y; K++) {
                        var Q = z[K];
                        Q !== B && (H[Q] = t[Q]);
                    }
                    return H;
                case d:
                    for (var q = t, $ = Object.keys(t), Z = $.length, J = 0; J < Z; J++) {
                        var tt = $[J],
                            et = t[tt],
                            nt = et.continuous ? b : w;
                        q = (0, o.set)(q, tt, nt(et, e));
                    }
                    return q;
                default:
                    return t;
            }
        };
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.ixParameters = void 0);
        var r = n(3).IX2EngineActionTypes,
            i = r.IX2_RAW_DATA_IMPORTED,
            o = r.IX2_SESSION_STOPPED,
            a = r.IX2_PARAMETER_CHANGED;
        e.ixParameters = function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                e = arguments.length > 1 ? arguments[1] : void 0;
            switch (e.type) {
                case i:
                    return e.payload.ixParameters || {};
                case o:
                    return {};
                case a:
                    var n = e.payload,
                        r = n.key,
                        u = n.value;
                    return (t[r] = u), t;
                default:
                    return t;
            }
        };
    },
    function (t, e) {
        t.exports = function (t, e) {
            if (null == t) return {};
            var n,
                r,
                i = {},
                o = Object.keys(t);
            for (r = 0; r < o.length; r++) (n = o[r]), e.indexOf(n) >= 0 || (i[n] = t[n]);
            return i;
        };
    },
    function (t, e, n) {
        var r = n(53),
            i = n(55),
            o = n(12),
            a = n(265),
            u = n(266),
            c = "[object Map]",
            s = "[object Set]";
        t.exports = function (t) {
            if (null == t) return 0;
            if (o(t)) return a(t) ? u(t) : t.length;
            var e = i(t);
            return e == c || e == s ? t.size : r(t).length;
        };
    },
    function (t, e, n) {
        var r = n(11),
            i = n(1),
            o = n(9),
            a = "[object String]";
        t.exports = function (t) {
            return "string" == typeof t || (!i(t) && o(t) && r(t) == a);
        };
    },
    function (t, e, n) {
        var r = n(267),
            i = n(268),
            o = n(269);
        t.exports = function (t) {
            return i(t) ? o(t) : r(t);
        };
    },
    function (t, e, n) {
        var r = n(103)("length");
        t.exports = r;
    },
    function (t, e) {
        var n = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
        t.exports = function (t) {
            return n.test(t);
        };
    },
    function (t, e) {
        var n = "[\\ud800-\\udfff]",
            r = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
            i = "\\ud83c[\\udffb-\\udfff]",
            o = "[^\\ud800-\\udfff]",
            a = "(?:\\ud83c[\\udde6-\\uddff]){2}",
            u = "[\\ud800-\\udbff][\\udc00-\\udfff]",
            c = "(?:" + r + "|" + i + ")" + "?",
            s = "[\\ufe0e\\ufe0f]?" + c + ("(?:\\u200d(?:" + [o, a, u].join("|") + ")[\\ufe0e\\ufe0f]?" + c + ")*"),
            l = "(?:" + [o + r + "?", r, a, u, n].join("|") + ")",
            f = RegExp(i + "(?=" + i + ")|" + l + s, "g");
        t.exports = function (t) {
            for (var e = (f.lastIndex = 0); f.test(t); ) ++e;
            return e;
        };
    },
    function (t, e, n) {
        var r = n(7),
            i = n(271),
            o = n(272);
        t.exports = function (t, e) {
            return o(t, i(r(e)));
        };
    },
    function (t, e) {
        var n = "Expected a function";
        t.exports = function (t) {
            if ("function" != typeof t) throw new TypeError(n);
            return function () {
                var e = arguments;
                switch (e.length) {
                    case 0:
                        return !t.call(this);
                    case 1:
                        return !t.call(this, e[0]);
                    case 2:
                        return !t.call(this, e[0], e[1]);
                    case 3:
                        return !t.call(this, e[0], e[1], e[2]);
                }
                return !t.apply(this, e);
            };
        };
    },
    function (t, e, n) {
        var r = n(102),
            i = n(7),
            o = n(273),
            a = n(276);
        t.exports = function (t, e) {
            if (null == t) return {};
            var n = r(a(t), function (t) {
                return [t];
            });
            return (
                (e = i(e)),
                o(t, n, function (t, n) {
                    return e(t, n[0]);
                })
            );
        };
    },
    function (t, e, n) {
        var r = n(57),
            i = n(274),
            o = n(35);
        t.exports = function (t, e, n) {
            for (var a = -1, u = e.length, c = {}; ++a < u; ) {
                var s = e[a],
                    l = r(t, s);
                n(l, s) && i(c, o(s, t), l);
            }
            return c;
        };
    },
    function (t, e, n) {
        var r = n(275),
            i = n(35),
            o = n(50),
            a = n(6),
            u = n(21);
        t.exports = function (t, e, n, c) {
            if (!a(t)) return t;
            for (var s = -1, l = (e = i(e, t)).length, f = l - 1, d = t; null != d && ++s < l; ) {
                var p = u(e[s]),
                    v = n;
                if ("__proto__" === p || "constructor" === p || "prototype" === p) return t;
                if (s != f) {
                    var h = d[p];
                    void 0 === (v = c ? c(h, p, d) : void 0) && (v = a(h) ? h : o(e[s + 1]) ? [] : {});
                }
                r(d, p, v), (d = d[p]);
            }
            return t;
        };
    },
    function (t, e, n) {
        var r = n(115),
            i = n(45),
            o = Object.prototype.hasOwnProperty;
        t.exports = function (t, e, n) {
            var a = t[e];
            (o.call(t, e) && i(a, n) && (void 0 !== n || e in t)) || r(t, e, n);
        };
    },
    function (t, e, n) {
        var r = n(93),
            i = n(277),
            o = n(279);
        t.exports = function (t) {
            return r(t, o, i);
        };
    },
    function (t, e, n) {
        var r = n(48),
            i = n(278),
            o = n(94),
            a = n(95),
            u = Object.getOwnPropertySymbols
                ? function (t) {
                      for (var e = []; t; ) r(e, o(t)), (t = i(t));
                      return e;
                  }
                : a;
        t.exports = u;
    },
    function (t, e, n) {
        var r = n(98)(Object.getPrototypeOf, Object);
        t.exports = r;
    },
    function (t, e, n) {
        var r = n(96),
            i = n(280),
            o = n(12);
        t.exports = function (t) {
            return o(t) ? r(t, !0) : i(t);
        };
    },
    function (t, e, n) {
        var r = n(6),
            i = n(54),
            o = n(281),
            a = Object.prototype.hasOwnProperty;
        t.exports = function (t) {
            if (!r(t)) return o(t);
            var e = i(t),
                n = [];
            for (var u in t) ("constructor" != u || (!e && a.call(t, u))) && n.push(u);
            return n;
        };
    },
    function (t, e) {
        t.exports = function (t) {
            var e = [];
            if (null != t) for (var n in Object(t)) e.push(n);
            return e;
        };
    },
    function (t, e, n) {
        var r = n(53),
            i = n(55),
            o = n(34),
            a = n(1),
            u = n(12),
            c = n(49),
            s = n(54),
            l = n(51),
            f = "[object Map]",
            d = "[object Set]",
            p = Object.prototype.hasOwnProperty;
        t.exports = function (t) {
            if (null == t) return !0;
            if (u(t) && (a(t) || "string" == typeof t || "function" == typeof t.splice || c(t) || l(t) || o(t))) return !t.length;
            var e = i(t);
            if (e == f || e == d) return !t.size;
            if (s(t)) return !r(t).length;
            for (var n in t) if (p.call(t, n)) return !1;
            return !0;
        };
    },
    function (t, e, n) {
        var r = n(115),
            i = n(112),
            o = n(7);
        t.exports = function (t, e) {
            var n = {};
            return (
                (e = o(e, 3)),
                i(t, function (t, i, o) {
                    r(n, i, e(t, i, o));
                }),
                n
            );
        };
    },
    function (t, e, n) {
        var r = n(285),
            i = n(111),
            o = n(286),
            a = n(1);
        t.exports = function (t, e) {
            return (a(t) ? r : i)(t, o(e));
        };
    },
    function (t, e) {
        t.exports = function (t, e) {
            for (var n = -1, r = null == t ? 0 : t.length; ++n < r && !1 !== e(t[n], n, t); );
            return t;
        };
    },
    function (t, e, n) {
        var r = n(59);
        t.exports = function (t) {
            return "function" == typeof t ? t : r;
        };
    },
    function (t, e, n) {
        var r = n(288),
            i = n(6),
            o = "Expected a function";
        t.exports = function (t, e, n) {
            var a = !0,
                u = !0;
            if ("function" != typeof t) throw new TypeError(o);
            return i(n) && ((a = "leading" in n ? !!n.leading : a), (u = "trailing" in n ? !!n.trailing : u)), r(t, e, { leading: a, maxWait: e, trailing: u });
        };
    },
    function (t, e, n) {
        var r = n(6),
            i = n(289),
            o = n(60),
            a = "Expected a function",
            u = Math.max,
            c = Math.min;
        t.exports = function (t, e, n) {
            var s,
                l,
                f,
                d,
                p,
                v,
                h = 0,
                g = !1,
                E = !1,
                m = !0;
            if ("function" != typeof t) throw new TypeError(a);
            function y(e) {
                var n = s,
                    r = l;
                return (s = l = void 0), (h = e), (d = t.apply(r, n));
            }
            function _(t) {
                var n = t - v;
                return void 0 === v || n >= e || n < 0 || (E && t - h >= f);
            }
            function I() {
                var t = i();
                if (_(t)) return b(t);
                p = setTimeout(
                    I,
                    (function (t) {
                        var n = e - (t - v);
                        return E ? c(n, f - (t - h)) : n;
                    })(t)
                );
            }
            function b(t) {
                return (p = void 0), m && s ? y(t) : ((s = l = void 0), d);
            }
            function w() {
                var t = i(),
                    n = _(t);
                if (((s = arguments), (l = this), (v = t), n)) {
                    if (void 0 === p)
                        return (function (t) {
                            return (h = t), (p = setTimeout(I, e)), g ? y(t) : d;
                        })(v);
                    if (E) return clearTimeout(p), (p = setTimeout(I, e)), y(v);
                }
                return void 0 === p && (p = setTimeout(I, e)), d;
            }
            return (
                (e = o(e) || 0),
                r(n) && ((g = !!n.leading), (f = (E = "maxWait" in n) ? u(o(n.maxWait) || 0, e) : f), (m = "trailing" in n ? !!n.trailing : m)),
                (w.cancel = function () {
                    void 0 !== p && clearTimeout(p), (h = 0), (s = v = l = p = void 0);
                }),
                (w.flush = function () {
                    return void 0 === p ? d : b(i());
                }),
                w
            );
        };
    },
    function (t, e, n) {
        var r = n(5);
        t.exports = function () {
            return r.Date.now();
        };
    },
    function (t, e, n) {
        "use strict";
        var r = n(0)(n(22));
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.setStyle = function (t, e, n) {
                t.style[e] = n;
            }),
            (e.getStyle = function (t, e) {
                return t.style[e];
            }),
            (e.getProperty = function (t, e) {
                return t[e];
            }),
            (e.matchSelector = function (t) {
                return function (e) {
                    return e[a](t);
                };
            }),
            (e.getQuerySelector = function (t) {
                var e = t.id,
                    n = t.selector;
                if (e) {
                    var r = e;
                    if (-1 !== e.indexOf(c)) {
                        var i = e.split(c),
                            o = i[0];
                        if (((r = i[1]), o !== document.documentElement.getAttribute(f))) return null;
                    }
                    return '[data-w-id="'.concat(r, '"], [data-w-id^="').concat(r, '_instance"]');
                }
                return n;
            }),
            (e.getValidDocument = function (t) {
                if (null == t || t === document.documentElement.getAttribute(f)) return document;
                return null;
            }),
            (e.queryDocument = function (t, e) {
                return Array.prototype.slice.call(document.querySelectorAll(e ? t + " " + e : t));
            }),
            (e.elementContains = function (t, e) {
                return t.contains(e);
            }),
            (e.isSiblingNode = function (t, e) {
                return t !== e && t.parentNode === e.parentNode;
            }),
            (e.getChildElements = function (t) {
                for (var e = [], n = 0, r = (t || []).length; n < r; n++) {
                    var i = t[n].children,
                        o = i.length;
                    if (o) for (var a = 0; a < o; a++) e.push(i[a]);
                }
                return e;
            }),
            (e.getSiblingElements = function () {
                for (var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], e = [], n = [], r = 0, i = t.length; r < i; r++) {
                    var o = t[r].parentNode;
                    if (o && o.children && o.children.length && -1 === n.indexOf(o)) {
                        n.push(o);
                        for (var a = o.firstElementChild; null != a; ) -1 === t.indexOf(a) && e.push(a), (a = a.nextElementSibling);
                    }
                }
                return e;
            }),
            (e.getRefType = function (t) {
                if (null != t && "object" == (0, r.default)(t)) return t instanceof Element ? s : l;
                return null;
            }),
            (e.getClosestElement = void 0);
        var i = n(10),
            o = n(3),
            a = i.IX2BrowserSupport.ELEMENT_MATCHES,
            u = o.IX2EngineConstants,
            c = u.IX2_ID_DELIMITER,
            s = u.HTML_ELEMENT,
            l = u.PLAIN_OBJECT,
            f = u.WF_PAGE;
        var d = Element.prototype.closest
            ? function (t, e) {
                  return document.documentElement.contains(t) ? t.closest(e) : null;
              }
            : function (t, e) {
                  if (!document.documentElement.contains(t)) return null;
                  var n = t;
                  do {
                      if (n[a] && n[a](e)) return n;
                      n = n.parentNode;
                  } while (null != n);
                  return null;
              };
        e.getClosestElement = d;
    },
    function (t, e, n) {
        "use strict";
        var r,
            i = n(0),
            o = i(n(27)),
            a = i(n(22)),
            u = n(0);
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
        var c,
            s,
            l,
            f = u(n(28)),
            d = u(n(292)),
            p = u(n(56)),
            v = u(n(311)),
            h = n(3),
            g = n(114),
            E = n(61),
            m = n(10),
            y = h.EventTypeConsts,
            _ = y.MOUSE_CLICK,
            I = y.MOUSE_SECOND_CLICK,
            b = y.MOUSE_DOWN,
            w = y.MOUSE_UP,
            T = y.MOUSE_OVER,
            O = y.MOUSE_OUT,
            A = y.DROPDOWN_CLOSE,
            x = y.DROPDOWN_OPEN,
            S = y.SLIDER_ACTIVE,
            R = y.SLIDER_INACTIVE,
            C = y.TAB_ACTIVE,
            N = y.TAB_INACTIVE,
            L = y.NAVBAR_CLOSE,
            D = y.NAVBAR_OPEN,
            P = y.MOUSE_MOVE,
            M = y.PAGE_SCROLL_DOWN,
            j = y.SCROLL_INTO_VIEW,
            k = y.SCROLL_OUT_OF_VIEW,
            F = y.PAGE_SCROLL_UP,
            G = y.SCROLLING_IN_VIEW,
            X = y.PAGE_FINISH,
            U = y.ECOMMERCE_CART_CLOSE,
            V = y.ECOMMERCE_CART_OPEN,
            W = y.PAGE_START,
            B = y.PAGE_SCROLL,
            H = "COMPONENT_ACTIVE",
            z = "COMPONENT_INACTIVE",
            Y = h.IX2EngineConstants.COLON_DELIMITER,
            K = m.IX2VanillaUtils.getNamespacedParameterId,
            Q = function (t) {
                return function (e) {
                    return !("object" !== (0, a.default)(e) || !t(e)) || e;
                };
            },
            q = Q(function (t) {
                return t.element === t.nativeEvent.target;
            }),
            $ = Q(function (t) {
                var e = t.element,
                    n = t.nativeEvent;
                return e.contains(n.target);
            }),
            Z = (0, d.default)([q, $]),
            J = function (t, e) {
                if (e) {
                    var n = t.getState().ixData.events[e];
                    if (n && !at[n.eventTypeId]) return n;
                }
                return null;
            },
            tt = function (t, e) {
                var n = t.store,
                    r = t.event,
                    i = t.element,
                    o = t.eventStateKey,
                    a = r.action,
                    u = r.id,
                    c = a.config,
                    s = c.actionListId,
                    l = c.autoStopEventId,
                    f = J(n, l);
                return (
                    f && (0, g.stopActionGroup)({ store: n, eventId: l, eventTarget: i, eventStateKey: l + Y + o.split(Y)[1], actionListId: (0, p.default)(f, "action.config.actionListId") }),
                    (0, g.stopActionGroup)({ store: n, eventId: u, eventTarget: i, eventStateKey: o, actionListId: s }),
                    (0, g.startActionGroup)({ store: n, eventId: u, eventTarget: i, eventStateKey: o, actionListId: s }),
                    e
                );
            },
            et = function (t, e) {
                return function (n, r) {
                    return !0 === t(n, r) ? e(n, r) : r;
                };
            },
            nt = { handler: et(Z, tt) },
            rt = (0, f.default)({}, nt, { types: [H, z].join(" ") }),
            it = [
                { target: window, types: "resize orientationchange", throttle: !0 },
                { target: document, types: "scroll wheel readystatechange IX2_PAGE_UPDATE", throttle: !0 },
            ],
            ot = { types: it },
            at = { PAGE_START: W, PAGE_FINISH: X },
            ut =
                ((c = void 0 !== window.pageXOffset),
                (s = "CSS1Compat" === document.compatMode ? document.documentElement : document.body),
                function () {
                    return {
                        scrollLeft: c ? window.pageXOffset : s.scrollLeft,
                        scrollTop: c ? window.pageYOffset : s.scrollTop,
                        stiffScrollTop: (0, v.default)(c ? window.pageYOffset : s.scrollTop, 0, s.scrollHeight - window.innerHeight),
                        scrollWidth: s.scrollWidth,
                        scrollHeight: s.scrollHeight,
                        clientWidth: s.clientWidth,
                        clientHeight: s.clientHeight,
                        innerWidth: window.innerWidth,
                        innerHeight: window.innerHeight,
                    };
                }),
            ct = function (t) {
                var e = t.element,
                    n = t.nativeEvent,
                    r = n.type,
                    i = n.target,
                    o = n.relatedTarget,
                    a = e.contains(i);
                if ("mouseover" === r && a) return !0;
                var u = e.contains(o);
                return !("mouseout" !== r || !a || !u);
            },
            st = function (t) {
                var e,
                    n,
                    r = t.element,
                    i = t.event.config,
                    o = ut(),
                    a = o.clientWidth,
                    u = o.clientHeight,
                    c = i.scrollOffsetValue,
                    s = "PX" === i.scrollOffsetUnit ? c : (u * (c || 0)) / 100;
                return (e = r.getBoundingClientRect()), (n = { left: 0, top: s, right: a, bottom: u - s }), !(e.left > n.right || e.right < n.left || e.top > n.bottom || e.bottom < n.top);
            },
            lt = function (t) {
                return function (e, n) {
                    var r = e.nativeEvent.type,
                        i = -1 !== [H, z].indexOf(r) ? r === H : n.isActive,
                        o = (0, f.default)({}, n, { isActive: i });
                    return n && o.isActive === n.isActive ? o : t(e, o) || o;
                };
            },
            ft = function (t) {
                return function (e, n) {
                    var r = { elementHovered: ct(e) };
                    return ((n ? r.elementHovered !== n.elementHovered : r.elementHovered) && t(e, r)) || r;
                };
            },
            dt = function (t) {
                return function (e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        r = ut(),
                        i = r.stiffScrollTop,
                        o = r.scrollHeight,
                        a = r.innerHeight,
                        u = e.event,
                        c = u.config,
                        s = u.eventTypeId,
                        l = c.scrollOffsetValue,
                        d = "PX" === c.scrollOffsetUnit,
                        p = o - a,
                        v = Number((i / p).toFixed(2));
                    if (n && n.percentTop === v) return n;
                    var h,
                        g,
                        E = (d ? l : (a * (l || 0)) / 100) / p,
                        m = 0;
                    n && ((h = v > n.percentTop), (m = (g = n.scrollingDown !== h) ? v : n.anchorTop));
                    var y = s === M ? v >= m + E : v <= m - E,
                        _ = (0, f.default)({}, n, { percentTop: v, inBounds: y, anchorTop: m, scrollingDown: h });
                    return (n && y && (g || _.inBounds !== n.inBounds) && t(e, _)) || _;
                };
            },
            pt = function (t) {
                return function (e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { clickCount: 0 },
                        r = { clickCount: (n.clickCount % 2) + 1 };
                    return (r.clickCount !== n.clickCount && t(e, r)) || r;
                };
            },
            vt = function () {
                var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                return (0, f.default)({}, rt, {
                    handler: et(
                        t ? Z : q,
                        lt(function (t, e) {
                            return e.isActive ? nt.handler(t, e) : e;
                        })
                    ),
                });
            },
            ht = function () {
                var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                return (0, f.default)({}, rt, {
                    handler: et(
                        t ? Z : q,
                        lt(function (t, e) {
                            return e.isActive ? e : nt.handler(t, e);
                        })
                    ),
                });
            },
            gt = (0, f.default)({}, ot, {
                handler:
                    ((l = function (t, e) {
                        var n = e.elementVisible,
                            r = t.event;
                        return !t.store.getState().ixData.events[r.action.config.autoStopEventId] && e.triggered ? e : (r.eventTypeId === j) === n ? (tt(t), (0, f.default)({}, e, { triggered: !0 })) : e;
                    }),
                    function (t, e) {
                        var n = (0, f.default)({}, e, { elementVisible: st(t) });
                        return ((e ? n.elementVisible !== e.elementVisible : n.elementVisible) && l(t, n)) || n;
                    }),
            }),
            Et =
                ((r = {}),
                (0, o.default)(r, S, vt()),
                (0, o.default)(r, R, ht()),
                (0, o.default)(r, x, vt()),
                (0, o.default)(r, A, ht()),
                (0, o.default)(r, D, vt(!1)),
                (0, o.default)(r, L, ht(!1)),
                (0, o.default)(r, C, vt()),
                (0, o.default)(r, N, ht()),
                (0, o.default)(r, V, { types: "ecommerce-cart-open", handler: et(Z, tt) }),
                (0, o.default)(r, U, { types: "ecommerce-cart-close", handler: et(Z, tt) }),
                (0, o.default)(r, _, {
                    types: "click",
                    handler: et(
                        Z,
                        pt(function (t, e) {
                            var n,
                                r,
                                i,
                                o = e.clickCount;
                            (r = (n = t).store), (i = n.event.action.config.autoStopEventId), Boolean(J(r, i)) ? 1 === o && tt(t) : tt(t);
                        })
                    ),
                }),
                (0, o.default)(r, I, {
                    types: "click",
                    handler: et(
                        Z,
                        pt(function (t, e) {
                            2 === e.clickCount && tt(t);
                        })
                    ),
                }),
                (0, o.default)(r, b, (0, f.default)({}, nt, { types: "mousedown" })),
                (0, o.default)(r, w, (0, f.default)({}, nt, { types: "mouseup" })),
                (0, o.default)(r, T, {
                    types: "mouseover mouseout",
                    handler: et(
                        Z,
                        ft(function (t, e) {
                            e.elementHovered && tt(t);
                        })
                    ),
                }),
                (0, o.default)(r, O, {
                    types: "mouseover mouseout",
                    handler: et(
                        Z,
                        ft(function (t, e) {
                            e.elementHovered || tt(t);
                        })
                    ),
                }),
                (0, o.default)(r, P, {
                    types: "mousemove mouseout scroll",
                    handler: function (t) {
                        var e = t.store,
                            n = t.element,
                            r = t.eventConfig,
                            i = t.nativeEvent,
                            o = t.eventStateKey,
                            a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { clientX: 0, clientY: 0, pageX: 0, pageY: 0 },
                            u = r.basedOn,
                            c = r.selectedAxis,
                            s = r.continuousParameterGroupId,
                            l = r.reverse,
                            f = r.restingState,
                            d = void 0 === f ? 0 : f,
                            p = i.clientX,
                            v = void 0 === p ? a.clientX : p,
                            g = i.clientY,
                            m = void 0 === g ? a.clientY : g,
                            y = i.pageX,
                            _ = void 0 === y ? a.pageX : y,
                            I = i.pageY,
                            b = void 0 === I ? a.pageY : I,
                            w = "X_AXIS" === c,
                            T = "mouseout" === i.type,
                            O = d / 100,
                            A = s,
                            x = !1;
                        switch (u) {
                            case h.EventBasedOn.VIEWPORT:
                                O = w ? Math.min(v, window.innerWidth) / window.innerWidth : Math.min(m, window.innerHeight) / window.innerHeight;
                                break;
                            case h.EventBasedOn.PAGE:
                                var S = ut(),
                                    R = S.scrollLeft,
                                    C = S.scrollTop,
                                    N = S.scrollWidth,
                                    L = S.scrollHeight;
                                O = w ? Math.min(R + _, N) / N : Math.min(C + b, L) / L;
                                break;
                            case h.EventBasedOn.ELEMENT:
                            default:
                                A = K(o, s);
                                var D = 0 === i.type.indexOf("mouse");
                                if (D && !0 !== Z({ element: n, nativeEvent: i })) break;
                                var P = n.getBoundingClientRect(),
                                    M = P.left,
                                    j = P.top,
                                    k = P.width,
                                    F = P.height;
                                if (
                                    !D &&
                                    !(function (t, e) {
                                        return t.left > e.left && t.left < e.right && t.top > e.top && t.top < e.bottom;
                                    })({ left: v, top: m }, P)
                                )
                                    break;
                                (x = !0), (O = w ? (v - M) / k : (m - j) / F);
                        }
                        return (
                            T && (O > 0.95 || O < 0.05) && (O = Math.round(O)),
                            (u !== h.EventBasedOn.ELEMENT || x || x !== a.elementHovered) && ((O = l ? 1 - O : O), e.dispatch((0, E.parameterChanged)(A, O))),
                            { elementHovered: x, clientX: v, clientY: m, pageX: _, pageY: b }
                        );
                    },
                }),
                (0, o.default)(r, B, {
                    types: it,
                    handler: function (t) {
                        var e = t.store,
                            n = t.eventConfig,
                            r = n.continuousParameterGroupId,
                            i = n.reverse,
                            o = ut(),
                            a = o.scrollTop / (o.scrollHeight - o.clientHeight);
                        (a = i ? 1 - a : a), e.dispatch((0, E.parameterChanged)(r, a));
                    },
                }),
                (0, o.default)(r, G, {
                    types: it,
                    handler: function (t) {
                        var e = t.element,
                            n = t.store,
                            r = t.eventConfig,
                            i = t.eventStateKey,
                            o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { scrollPercent: 0 },
                            a = ut(),
                            u = a.scrollLeft,
                            c = a.scrollTop,
                            s = a.scrollWidth,
                            l = a.scrollHeight,
                            f = a.clientHeight,
                            d = r.basedOn,
                            p = r.selectedAxis,
                            v = r.continuousParameterGroupId,
                            g = r.startsEntering,
                            m = r.startsExiting,
                            y = r.addEndOffset,
                            _ = r.addStartOffset,
                            I = r.addOffsetValue,
                            b = void 0 === I ? 0 : I,
                            w = r.endOffsetValue,
                            T = void 0 === w ? 0 : w,
                            O = "X_AXIS" === p;
                        if (d === h.EventBasedOn.VIEWPORT) {
                            var A = O ? u / s : c / l;
                            return A !== o.scrollPercent && n.dispatch((0, E.parameterChanged)(v, A)), { scrollPercent: A };
                        }
                        var x = K(i, v),
                            S = e.getBoundingClientRect(),
                            R = (_ ? b : 0) / 100,
                            C = (y ? T : 0) / 100;
                        (R = g ? R : 1 - R), (C = m ? C : 1 - C);
                        var N = S.top + Math.min(S.height * R, f),
                            L = S.top + S.height * C - N,
                            D = Math.min(f + L, l),
                            P = Math.min(Math.max(0, f - N), D) / D;
                        return P !== o.scrollPercent && n.dispatch((0, E.parameterChanged)(x, P)), { scrollPercent: P };
                    },
                }),
                (0, o.default)(r, j, gt),
                (0, o.default)(r, k, gt),
                (0, o.default)(
                    r,
                    M,
                    (0, f.default)({}, ot, {
                        handler: dt(function (t, e) {
                            e.scrollingDown && tt(t);
                        }),
                    })
                ),
                (0, o.default)(
                    r,
                    F,
                    (0, f.default)({}, ot, {
                        handler: dt(function (t, e) {
                            e.scrollingDown || tt(t);
                        }),
                    })
                ),
                (0, o.default)(r, X, {
                    types: "readystatechange IX2_PAGE_UPDATE",
                    handler: et(
                        q,
                        (function (t) {
                            return function (e, n) {
                                var r = { finished: "complete" === document.readyState };
                                return !r.finished || (n && n.finshed) || t(e), r;
                            };
                        })(tt)
                    ),
                }),
                (0, o.default)(r, W, {
                    types: "readystatechange IX2_PAGE_UPDATE",
                    handler: et(
                        q,
                        (function (t) {
                            return function (e, n) {
                                return n || t(e), { started: !0 };
                            };
                        })(tt)
                    ),
                }),
                r);
        e.default = Et;
    },
    function (t, e, n) {
        var r = n(293)();
        t.exports = r;
    },
    function (t, e, n) {
        var r = n(62),
            i = n(294),
            o = n(118),
            a = n(119),
            u = n(1),
            c = n(307),
            s = "Expected a function",
            l = 8,
            f = 32,
            d = 128,
            p = 256;
        t.exports = function (t) {
            return i(function (e) {
                var n = e.length,
                    i = n,
                    v = r.prototype.thru;
                for (t && e.reverse(); i--; ) {
                    var h = e[i];
                    if ("function" != typeof h) throw new TypeError(s);
                    if (v && !g && "wrapper" == a(h)) var g = new r([], !0);
                }
                for (i = g ? i : n; ++i < n; ) {
                    h = e[i];
                    var E = a(h),
                        m = "wrapper" == E ? o(h) : void 0;
                    g = m && c(m[0]) && m[1] == (d | l | f | p) && !m[4].length && 1 == m[9] ? g[a(m[0])].apply(g, m[3]) : 1 == h.length && c(h) ? g[E]() : g.thru(h);
                }
                return function () {
                    var t = arguments,
                        r = t[0];
                    if (g && 1 == t.length && u(r)) return g.plant(r).value();
                    for (var i = 0, o = n ? e[i].apply(this, t) : r; ++i < n; ) o = e[i].call(this, o);
                    return o;
                };
            });
        };
    },
    function (t, e, n) {
        var r = n(295),
            i = n(298),
            o = n(300);
        t.exports = function (t) {
            return o(i(t, void 0, r), t + "");
        };
    },
    function (t, e, n) {
        var r = n(296);
        t.exports = function (t) {
            return null != t && t.length ? r(t, 1) : [];
        };
    },
    function (t, e, n) {
        var r = n(48),
            i = n(297);
        t.exports = function t(e, n, o, a, u) {
            var c = -1,
                s = e.length;
            for (o || (o = i), u || (u = []); ++c < s; ) {
                var l = e[c];
                n > 0 && o(l) ? (n > 1 ? t(l, n - 1, o, a, u) : r(u, l)) : a || (u[u.length] = l);
            }
            return u;
        };
    },
    function (t, e, n) {
        var r = n(20),
            i = n(34),
            o = n(1),
            a = r ? r.isConcatSpreadable : void 0;
        t.exports = function (t) {
            return o(t) || i(t) || !!(a && t && t[a]);
        };
    },
    function (t, e, n) {
        var r = n(299),
            i = Math.max;
        t.exports = function (t, e, n) {
            return (
                (e = i(void 0 === e ? t.length - 1 : e, 0)),
                function () {
                    for (var o = arguments, a = -1, u = i(o.length - e, 0), c = Array(u); ++a < u; ) c[a] = o[e + a];
                    a = -1;
                    for (var s = Array(e + 1); ++a < e; ) s[a] = o[a];
                    return (s[e] = n(c)), r(t, this, s);
                }
            );
        };
    },
    function (t, e) {
        t.exports = function (t, e, n) {
            switch (n.length) {
                case 0:
                    return t.call(e);
                case 1:
                    return t.call(e, n[0]);
                case 2:
                    return t.call(e, n[0], n[1]);
                case 3:
                    return t.call(e, n[0], n[1], n[2]);
            }
            return t.apply(e, n);
        };
    },
    function (t, e, n) {
        var r = n(301),
            i = n(303)(r);
        t.exports = i;
    },
    function (t, e, n) {
        var r = n(302),
            i = n(116),
            o = n(59),
            a = i
                ? function (t, e) {
                      return i(t, "toString", { configurable: !0, enumerable: !1, value: r(e), writable: !0 });
                  }
                : o;
        t.exports = a;
    },
    function (t, e) {
        t.exports = function (t) {
            return function () {
                return t;
            };
        };
    },
    function (t, e) {
        var n = 800,
            r = 16,
            i = Date.now;
        t.exports = function (t) {
            var e = 0,
                o = 0;
            return function () {
                var a = i(),
                    u = r - (a - o);
                if (((o = a), u > 0)) {
                    if (++e >= n) return arguments[0];
                } else e = 0;
                return t.apply(void 0, arguments);
            };
        };
    },
    function (t, e, n) {
        var r = n(99),
            i = r && new r();
        t.exports = i;
    },
    function (t, e) {
        t.exports = function () {};
    },
    function (t, e) {
        t.exports = {};
    },
    function (t, e, n) {
        var r = n(64),
            i = n(118),
            o = n(119),
            a = n(308);
        t.exports = function (t) {
            var e = o(t),
                n = a[e];
            if ("function" != typeof n || !(e in r.prototype)) return !1;
            if (t === n) return !0;
            var u = i(n);
            return !!u && t === u[0];
        };
    },
    function (t, e, n) {
        var r = n(64),
            i = n(62),
            o = n(63),
            a = n(1),
            u = n(9),
            c = n(309),
            s = Object.prototype.hasOwnProperty;
        function l(t) {
            if (u(t) && !a(t) && !(t instanceof r)) {
                if (t instanceof i) return t;
                if (s.call(t, "__wrapped__")) return c(t);
            }
            return new i(t);
        }
        (l.prototype = o.prototype), (l.prototype.constructor = l), (t.exports = l);
    },
    function (t, e, n) {
        var r = n(64),
            i = n(62),
            o = n(310);
        t.exports = function (t) {
            if (t instanceof r) return t.clone();
            var e = new i(t.__wrapped__, t.__chain__);
            return (e.__actions__ = o(t.__actions__)), (e.__index__ = t.__index__), (e.__values__ = t.__values__), e;
        };
    },
    function (t, e) {
        t.exports = function (t, e) {
            var n = -1,
                r = t.length;
            for (e || (e = Array(r)); ++n < r; ) e[n] = t[n];
            return e;
        };
    },
    function (t, e, n) {
        var r = n(312),
            i = n(60);
        t.exports = function (t, e, n) {
            return void 0 === n && ((n = e), (e = void 0)), void 0 !== n && (n = (n = i(n)) == n ? n : 0), void 0 !== e && (e = (e = i(e)) == e ? e : 0), r(i(t), e, n);
        };
    },
    function (t, e) {
        t.exports = function (t, e, n) {
            return t == t && (void 0 !== n && (t = t <= n ? t : n), void 0 !== e && (t = t >= e ? t : e)), t;
        };
    },
    function (t, e, n) {
        "use strict";
        var r = n(2);
        r.define(
            "links",
            (t.exports = function (t, e) {
                var n,
                    i,
                    o,
                    a = {},
                    u = t(window),
                    c = r.env(),
                    s = window.location,
                    l = document.createElement("a"),
                    f = "w--current",
                    d = /index\.(html|php)$/,
                    p = /\/$/;
                function v(e) {
                    var r = (n && e.getAttribute("href-disabled")) || e.getAttribute("href");
                    if (((l.href = r), !(r.indexOf(":") >= 0))) {
                        var a = t(e);
                        if (l.hash.length > 1 && l.host + l.pathname === s.host + s.pathname) {
                            if (!/^#[a-zA-Z0-9\-\_]+$/.test(l.hash)) return;
                            var u = t(l.hash);
                            u.length && i.push({ link: a, sec: u, active: !1 });
                        } else if ("#" !== r && "" !== r) {
                            var c = l.href === s.href || r === o || (d.test(r) && p.test(o));
                            g(a, f, c);
                        }
                    }
                }
                function h() {
                    var t = u.scrollTop(),
                        n = u.height();
                    e.each(i, function (e) {
                        var r = e.link,
                            i = e.sec,
                            o = i.offset().top,
                            a = i.outerHeight(),
                            u = 0.5 * n,
                            c = i.is(":visible") && o + a - u >= t && o + u <= t + n;
                        e.active !== c && ((e.active = c), g(r, f, c));
                    });
                }
                function g(t, e, n) {
                    var r = t.hasClass(e);
                    (n && r) || ((n || r) && (n ? t.addClass(e) : t.removeClass(e)));
                }
                return (
                    (a.ready = a.design = a.preview = function () {
                        (n = c && r.env("design")), (o = r.env("slug") || s.pathname || ""), r.scroll.off(h), (i = []);
                        for (var t = document.links, e = 0; e < t.length; ++e) v(t[e]);
                        i.length && (r.scroll.on(h), h());
                    }),
                    a
                );
            })
        );
    },
    function (t, e, n) {
        "use strict";
        var r = n(2);
        r.define(
            "scroll",
            (t.exports = function (t) {
                var e,
                    n = { WF_CHANGE: "change.wf-change", WF_CLICK_EMPTY: "click.wf-empty-link", WF_CLICK_SCROLL: "click.wf-scroll" },
                    i = t(document),
                    o = window,
                    a = o.location,
                    u = (function () {
                        try {
                            return Boolean(o.frameElement);
                        } catch (t) {
                            return !0;
                        }
                    })()
                        ? null
                        : o.history,
                    c = /^[a-zA-Z0-9][\w:.-]*$/,
                    s = 'a[href="#"]',
                    l = 'a[href*="#"]:not(.w-tab-link):not(' + s + ")";
                function f(n) {
                    if (!(r.env("design") || (window.$.mobile && t(n.currentTarget).hasClass("ui-link")))) {
                        var i = this.href.split("#"),
                            s = i[0] === e ? i[1] : null;
                        s &&
                            (function (e, n) {
                                if (!c.test(e)) return;
                                var i = t("#" + e);
                                if (!i.length) return;
                                n && (n.preventDefault(), n.stopPropagation());
                                if (a.hash !== e && u && u.pushState && (!r.env.chrome || "file:" !== a.protocol)) {
                                    var s = u.state && u.state.hash;
                                    s !== e && u.pushState({ hash: e }, "", "#" + e);
                                }
                                var l = r.env("editor") ? ".w-editor-body" : "body",
                                    f = t("header, " + l + " > .header, " + l + " > .w-nav:not([data-no-scroll])"),
                                    d = "fixed" === f.css("position") ? f.outerHeight() : 0;
                                o.setTimeout(
                                    function () {
                                        !(function (e, n) {
                                            var r = t(o).scrollTop(),
                                                i = e.offset().top - n;
                                            if ("mid" === e.data("scroll")) {
                                                var a = t(o).height() - n,
                                                    u = e.outerHeight();
                                                u < a && (i -= Math.round((a - u) / 2));
                                            }
                                            var c = 1;
                                            t("body")
                                                .add(e)
                                                .each(function () {
                                                    var e = parseFloat(t(this).attr("data-scroll-time"), 10);
                                                    !isNaN(e) && (0 === e || e > 0) && (c = e);
                                                }),
                                                Date.now ||
                                                    (Date.now = function () {
                                                        return new Date().getTime();
                                                    });
                                            var s = Date.now(),
                                                l =
                                                    o.requestAnimationFrame ||
                                                    o.mozRequestAnimationFrame ||
                                                    o.webkitRequestAnimationFrame ||
                                                    function (t) {
                                                        o.setTimeout(t, 15);
                                                    },
                                                f = (472.143 * Math.log(Math.abs(r - i) + 125) - 2e3) * c;
                                            !(function t() {
                                                var e = Date.now() - s;
                                                o.scroll(
                                                    0,
                                                    (function (t, e, n, r) {
                                                        if (n > r) return e;
                                                        return t + (e - t) * ((i = n / r), i < 0.5 ? 4 * i * i * i : (i - 1) * (2 * i - 2) * (2 * i - 2) + 1);
                                                        var i;
                                                    })(r, i, e, f)
                                                ),
                                                    e <= f && l(t);
                                            })();
                                        })(i, d);
                                    },
                                    n ? 0 : 300
                                );
                            })(s, n);
                    }
                }
                return {
                    ready: function () {
                        n.WF_CHANGE;
                        var t = n.WF_CLICK_EMPTY,
                            r = n.WF_CLICK_SCROLL;
                        (e = a.href.split("#")[0]),
                            i.on(r, l, f),
                            i.on(t, s, function (t) {
                                t.preventDefault();
                            });
                    },
                };
            })
        );
    },
    function (t, e, n) {
        "use strict";
        n(2).define(
            "touch",
            (t.exports = function (t) {
                var e = {},
                    n = window.getSelection;
                function r(e) {
                    var r,
                        i,
                        o = !1,
                        a = !1,
                        u = Math.min(Math.round(0.04 * window.innerWidth), 40);
                    function c(t) {
                        var e = t.touches;
                        (e && e.length > 1) || ((o = !0), e ? ((a = !0), (r = e[0].clientX)) : (r = t.clientX), (i = r));
                    }
                    function s(e) {
                        if (o) {
                            if (a && "mousemove" === e.type) return e.preventDefault(), void e.stopPropagation();
                            var r = e.touches,
                                c = r ? r[0].clientX : e.clientX,
                                s = c - i;
                            (i = c),
                                Math.abs(s) > u &&
                                    n &&
                                    "" === String(n()) &&
                                    (!(function (e, n, r) {
                                        var i = t.Event(e, { originalEvent: n });
                                        t(n.target).trigger(i, r);
                                    })("swipe", e, { direction: s > 0 ? "right" : "left" }),
                                    f());
                        }
                    }
                    function l(t) {
                        if (o) return (o = !1), a && "mouseup" === t.type ? (t.preventDefault(), t.stopPropagation(), void (a = !1)) : void 0;
                    }
                    function f() {
                        o = !1;
                    }
                    e.addEventListener("touchstart", c, !1),
                        e.addEventListener("touchmove", s, !1),
                        e.addEventListener("touchend", l, !1),
                        e.addEventListener("touchcancel", f, !1),
                        e.addEventListener("mousedown", c, !1),
                        e.addEventListener("mousemove", s, !1),
                        e.addEventListener("mouseup", l, !1),
                        e.addEventListener("mouseout", f, !1),
                        (this.destroy = function () {
                            e.removeEventListener("touchstart", c, !1),
                                e.removeEventListener("touchmove", s, !1),
                                e.removeEventListener("touchend", l, !1),
                                e.removeEventListener("touchcancel", f, !1),
                                e.removeEventListener("mousedown", c, !1),
                                e.removeEventListener("mousemove", s, !1),
                                e.removeEventListener("mouseup", l, !1),
                                e.removeEventListener("mouseout", f, !1),
                                (e = null);
                        });
                }
                return (
                    (t.event.special.tap = { bindType: "click", delegateType: "click" }),
                    (e.init = function (e) {
                        return (e = "string" == typeof e ? t(e).get(0) : e) ? new r(e) : null;
                    }),
                    (e.instance = e.init(document)),
                    e
                );
            })
        );
    },
    function (t, e, n) {
        "use strict";
        var r = n(2),
            i = n(13),
            o = { ARROW_LEFT: 37, ARROW_UP: 38, ARROW_RIGHT: 39, ARROW_DOWN: 40, ESCAPE: 27, SPACE: 32, ENTER: 13, HOME: 36, END: 35 },
            a = !0,
            u = /^#[a-zA-Z0-9\-_]+$/;
        r.define(
            "dropdown",
            (t.exports = function (t, e) {
                var n,
                    c,
                    s = e.debounce,
                    l = {},
                    f = r.env(),
                    d = !1,
                    p = r.env.touch,
                    v = ".w-dropdown",
                    h = "w--open",
                    g = i.triggers,
                    E = 900,
                    m = "focusout" + v,
                    y = "keydown" + v,
                    _ = "mouseenter" + v,
                    I = "mousemove" + v,
                    b = "mouseleave" + v,
                    w = (p ? "click" : "mouseup") + v,
                    T = "w-close" + v,
                    O = "setting" + v,
                    A = t(document);
                function x() {
                    (n = f && r.env("design")), (c = A.find(v)).each(S);
                }
                function S(e, i) {
                    var c = t(i),
                        l = t.data(i, v);
                    l || (l = t.data(i, v, { open: !1, el: c, config: {}, selectedIdx: -1 })),
                        (l.toggle = l.el.children(".w-dropdown-toggle")),
                        (l.list = l.el.children(".w-dropdown-list")),
                        (l.links = l.list.find("a:not(.w-dropdown .w-dropdown a)")),
                        (l.complete = (function (t) {
                            return function () {
                                t.list.removeClass(h), t.toggle.removeClass(h), t.manageZ && t.el.css("z-index", "");
                            };
                        })(l)),
                        (l.mouseLeave = (function (t) {
                            return function () {
                                (t.hovering = !1), t.links.is(":focus") || L(t);
                            };
                        })(l)),
                        (l.mouseUpOutside = (function (e) {
                            e.mouseUpOutside && A.off(w, e.mouseUpOutside);
                            return s(function (n) {
                                if (e.open) {
                                    var i = t(n.target);
                                    if (!i.closest(".w-dropdown-toggle").length) {
                                        var o = -1 === t.inArray(e.el[0], i.parents(v)),
                                            a = r.env("editor");
                                        if (o) {
                                            if (a) {
                                                var u = 1 === i.parents().length && 1 === i.parents("svg").length,
                                                    c = i.parents(".w-editor-bem-EditorHoverControls").length;
                                                if (u || c) return;
                                            }
                                            L(e);
                                        }
                                    }
                                }
                            });
                        })(l)),
                        (l.mouseMoveOutside = (function (e) {
                            return s(function (n) {
                                if (e.open) {
                                    var r = t(n.target),
                                        i = -1 === t.inArray(e.el[0], r.parents(v));
                                    if (i) {
                                        var o = r.parents(".w-editor-bem-EditorHoverControls").length,
                                            a = r.parents(".w-editor-bem-RTToolbar").length,
                                            u = t(".w-editor-bem-EditorOverlay"),
                                            c = u.find(".w-editor-edit-outline").length || u.find(".w-editor-bem-RTToolbar").length;
                                        if (o || a || c) return;
                                        (e.hovering = !1), L(e);
                                    }
                                }
                            });
                        })(l)),
                        R(l);
                    var p = l.toggle.attr("id"),
                        g = l.list.attr("id");
                    p || (p = "w-dropdown-toggle-" + e),
                        g || (g = "w-dropdown-list-" + e),
                        l.toggle.attr("id", p),
                        l.toggle.attr("aria-controls", g),
                        l.toggle.attr("aria-haspopup", "menu"),
                        l.toggle.attr("aria-expanded", "false"),
                        "BUTTON" !== l.toggle.prop("tagName") && (l.toggle.attr("role", "button"), l.toggle.attr("tabindex") || l.toggle.attr("tabindex", "0")),
                        l.list.attr("id", g),
                        l.list.attr("aria-labelledby", p),
                        l.links.each(function (t, e) {
                            e.hasAttribute("tabindex") || e.setAttribute("tabindex", "0"), u.test(e.hash) && e.addEventListener("click", L.bind(null, l));
                        }),
                        l.el.off(v),
                        l.toggle.off(v),
                        l.nav && l.nav.off(v);
                    var E = C(l, a);
                    n &&
                        l.el.on(
                            O,
                            (function (t) {
                                return function (e, n) {
                                    (n = n || {}), R(t), !0 === n.open && N(t), !1 === n.open && L(t, { immediate: !0 });
                                };
                            })(l)
                        ),
                        n ||
                            (f && ((l.hovering = !1), L(l)),
                            l.config.hover &&
                                l.toggle.on(
                                    _,
                                    (function (t) {
                                        return function () {
                                            (t.hovering = !0), N(t);
                                        };
                                    })(l)
                                ),
                            l.el.on(T, E),
                            l.el.on(
                                y,
                                (function (t) {
                                    return function (e) {
                                        if (!n && !d && t.open)
                                            switch (((t.selectedIdx = t.links.index(document.activeElement)), e.keyCode)) {
                                                case o.HOME:
                                                    if (!t.open) return;
                                                    return (t.selectedIdx = 0), D(t), e.preventDefault();
                                                case o.END:
                                                    if (!t.open) return;
                                                    return (t.selectedIdx = t.links.length - 1), D(t), e.preventDefault();
                                                case o.ESCAPE:
                                                    return L(t), t.toggle.focus(), e.stopPropagation();
                                                case o.ARROW_RIGHT:
                                                case o.ARROW_DOWN:
                                                    return (t.selectedIdx = Math.min(t.links.length - 1, t.selectedIdx + 1)), D(t), e.preventDefault();
                                                case o.ARROW_LEFT:
                                                case o.ARROW_UP:
                                                    return (t.selectedIdx = Math.max(-1, t.selectedIdx - 1)), D(t), e.preventDefault();
                                            }
                                    };
                                })(l)
                            ),
                            l.el.on(
                                m,
                                (function (t) {
                                    return s(function (e) {
                                        var n = e.relatedTarget,
                                            r = e.target,
                                            i = t.el[0],
                                            o = i.contains(n) || i.contains(r);
                                        return o || L(t), e.stopPropagation();
                                    });
                                })(l)
                            ),
                            l.toggle.on(w, E),
                            l.toggle.on(
                                y,
                                (function (t) {
                                    var e = C(t, a);
                                    return function (r) {
                                        if (!n && !d) {
                                            if (!t.open)
                                                switch (r.keyCode) {
                                                    case o.ARROW_UP:
                                                    case o.ARROW_DOWN:
                                                        return r.stopPropagation();
                                                }
                                            switch (r.keyCode) {
                                                case o.SPACE:
                                                case o.ENTER:
                                                    return e(), r.stopPropagation(), r.preventDefault();
                                            }
                                        }
                                    };
                                })(l)
                            ),
                            (l.nav = l.el.closest(".w-nav")),
                            l.nav.on(T, E));
                }
                function R(t) {
                    var e = Number(t.el.css("z-index"));
                    (t.manageZ = e === E || e === E + 1), (t.config = { hover: (!0 === t.el.attr("data-hover") || "1" === t.el.attr("data-hover")) && !p, delay: Number(t.el.attr("data-delay")) || 0 });
                }
                function C(t, e) {
                    return s(function (n) {
                        if (t.open || (n && "w-close" === n.type)) return L(t, { forceClose: e });
                        N(t);
                    });
                }
                function N(e) {
                    if (!e.open) {
                        !(function (e) {
                            var n = e.el[0];
                            c.each(function (e, r) {
                                var i = t(r);
                                i.is(n) || i.has(n).length || i.triggerHandler(T);
                            });
                        })(e),
                            (e.open = !0),
                            e.list.addClass(h),
                            e.toggle.addClass(h),
                            e.toggle.attr("aria-expanded", "true"),
                            g.intro(0, e.el[0]),
                            r.redraw.up(),
                            e.manageZ && e.el.css("z-index", E + 1);
                        var i = r.env("editor");
                        n || A.on(w, e.mouseUpOutside), e.hovering && !i && e.el.on(b, e.mouseLeave), e.hovering && i && A.on(I, e.mouseMoveOutside), window.clearTimeout(e.delayId);
                    }
                }
                function L(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = e.immediate,
                        r = e.forceClose;
                    if (t.open && (!t.config.hover || !t.hovering || r)) {
                        t.toggle.attr("aria-expanded", "false"), (t.open = !1);
                        var i = t.config;
                        if ((g.outro(0, t.el[0]), A.off(w, t.mouseUpOutside), A.off(I, t.mouseMoveOutside), t.el.off(b, t.mouseLeave), window.clearTimeout(t.delayId), !i.delay || n)) return t.complete();
                        t.delayId = window.setTimeout(t.complete, i.delay);
                    }
                }
                function D(t) {
                    t.links[t.selectedIdx] && t.links[t.selectedIdx].focus();
                }
                return (
                    (l.ready = x),
                    (l.design = function () {
                        d &&
                            A.find(v).each(function (e, n) {
                                t(n).triggerHandler(T);
                            }),
                            (d = !1),
                            x();
                    }),
                    (l.preview = function () {
                        (d = !0), x();
                    }),
                    l
                );
            })
        );
    },
    function (t, e, n) {
        "use strict";
        var r = n(0)(n(318)),
            i = n(2);
        i.define(
            "forms",
            (t.exports = function (t, e) {
                var n,
                    o,
                    a,
                    u,
                    c,
                    s = {},
                    l = t(document),
                    f = window.location,
                    d = window.XDomainRequest && !window.atob,
                    p = ".w-form",
                    v = /e(-)?mail/i,
                    h = /^\S+@\S+$/,
                    g = window.alert,
                    E = i.env(),
                    m = /list-manage[1-9]?.com/i,
                    y = e.debounce(function () {
                        g("Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.");
                    }, 100);
                function _(e, n) {
                    var r = t(n),
                        i = t.data(n, p);
                    i || (i = t.data(n, p, { form: r })), I(i);
                    var a = r.closest("div.w-form");
                    (i.done = a.find("> .w-form-done")),
                        (i.fail = a.find("> .w-form-fail")),
                        (i.fileUploads = a.find(".w-file-upload")),
                        i.fileUploads.each(function (e) {
                            !(function (e, n) {
                                if (!n.fileUploads || !n.fileUploads[e]) return;
                                var r,
                                    i = t(n.fileUploads[e]),
                                    o = i.find("> .w-file-upload-default"),
                                    a = i.find("> .w-file-upload-uploading"),
                                    u = i.find("> .w-file-upload-success"),
                                    s = i.find("> .w-file-upload-error"),
                                    l = o.find(".w-file-upload-input"),
                                    f = o.find(".w-file-upload-label"),
                                    d = f.children(),
                                    p = s.find(".w-file-upload-error-msg"),
                                    v = u.find(".w-file-upload-file"),
                                    h = u.find(".w-file-remove-link"),
                                    g = v.find(".w-file-upload-file-name"),
                                    m = p.attr("data-w-size-error"),
                                    y = p.attr("data-w-type-error"),
                                    _ = p.attr("data-w-generic-error");
                                if (E)
                                    l.on("click", function (t) {
                                        t.preventDefault();
                                    }),
                                        f.on("click", function (t) {
                                            t.preventDefault();
                                        }),
                                        d.on("click", function (t) {
                                            t.preventDefault();
                                        });
                                else {
                                    h.on("click", function () {
                                        l.removeAttr("data-value"), l.val(""), g.html(""), o.toggle(!0), u.toggle(!1);
                                    }),
                                        l.on("change", function (i) {
                                            (r = i.target && i.target.files && i.target.files[0]) &&
                                                (o.toggle(!1),
                                                s.toggle(!1),
                                                a.toggle(!0),
                                                g.text(r.name),
                                                x() || b(n),
                                                (n.fileUploads[e].uploading = !0),
                                                (function (e, n) {
                                                    var r = { name: e.name, size: e.size };
                                                    t.ajax({ type: "POST", url: c, data: r, dataType: "json", crossDomain: !0 })
                                                        .done(function (t) {
                                                            n(null, t);
                                                        })
                                                        .fail(function (t) {
                                                            n(t);
                                                        });
                                                })(r, O));
                                        });
                                    var w = f.outerHeight();
                                    l.height(w), l.width(1);
                                }
                                function T(t) {
                                    var r = t.responseJSON && t.responseJSON.msg,
                                        i = _;
                                    "string" == typeof r && 0 === r.indexOf("InvalidFileTypeError") ? (i = y) : "string" == typeof r && 0 === r.indexOf("MaxFileSizeError") && (i = m),
                                        p.text(i),
                                        l.removeAttr("data-value"),
                                        l.val(""),
                                        a.toggle(!1),
                                        o.toggle(!0),
                                        s.toggle(!0),
                                        (n.fileUploads[e].uploading = !1),
                                        x() || I(n);
                                }
                                function O(e, n) {
                                    if (e) return T(e);
                                    var i = n.fileName,
                                        o = n.postData,
                                        a = n.fileId,
                                        u = n.s3Url;
                                    l.attr("data-value", a),
                                        (function (e, n, r, i, o) {
                                            var a = new FormData();
                                            for (var u in n) a.append(u, n[u]);
                                            a.append("file", r, i),
                                                t
                                                    .ajax({ type: "POST", url: e, data: a, processData: !1, contentType: !1 })
                                                    .done(function () {
                                                        o(null);
                                                    })
                                                    .fail(function (t) {
                                                        o(t);
                                                    });
                                        })(u, o, r, i, A);
                                }
                                function A(t) {
                                    if (t) return T(t);
                                    a.toggle(!1), u.css("display", "inline-block"), (n.fileUploads[e].uploading = !1), x() || I(n);
                                }
                                function x() {
                                    var t = (n.fileUploads && n.fileUploads.toArray()) || [];
                                    return t.some(function (t) {
                                        return t.uploading;
                                    });
                                }
                            })(e, i);
                        });
                    var u = (i.action = r.attr("action"));
                    (i.handler = null), (i.redirect = r.attr("data-redirect")), m.test(u) ? (i.handler = O) : u || (o ? (i.handler = T) : y());
                }
                function I(t) {
                    var e = (t.btn = t.form.find(':input[type="submit"]'));
                    (t.wait = t.btn.attr("data-wait") || null), (t.success = !1), e.prop("disabled", !1), t.label && e.val(t.label);
                }
                function b(t) {
                    var e = t.btn,
                        n = t.wait;
                    e.prop("disabled", !0), n && ((t.label = e.val()), e.val(n));
                }
                function w(e, n) {
                    var r = null;
                    return (
                        (n = n || {}),
                        e.find(':input:not([type="submit"]):not([type="file"])').each(function (i, o) {
                            var a = t(o),
                                u = a.attr("type"),
                                c = a.attr("data-name") || a.attr("name") || "Field " + (i + 1),
                                s = a.val();
                            if ("checkbox" === u) s = a.is(":checked");
                            else if ("radio" === u) {
                                if (null === n[c] || "string" == typeof n[c]) return;
                                s = e.find('input[name="' + a.attr("name") + '"]:checked').val() || null;
                            }
                            "string" == typeof s && (s = t.trim(s)),
                                (n[c] = s),
                                (r =
                                    r ||
                                    (function (t, e, n, r) {
                                        var i = null;
                                        "password" === e
                                            ? (i = "Passwords cannot be submitted.")
                                            : t.attr("required")
                                            ? r
                                                ? v.test(t.attr("type")) && (h.test(r) || (i = "Please enter a valid email address for: " + n))
                                                : (i = "Please fill out the required field: " + n)
                                            : "g-recaptcha-response" !== n || r || (i = "Please confirm youâ€™re not a robot.");
                                        return i;
                                    })(a, u, c, s));
                        }),
                        r
                    );
                }
                function T(e) {
                    I(e);
                    var n = e.form,
                        r = { name: n.attr("data-name") || n.attr("name") || "Untitled Form", source: f.href, test: i.env(), fields: {}, fileUploads: {}, dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(n.html()) };
                    x(e);
                    var a = w(n, r.fields);
                    if (a) return g(a);
                    (r.fileUploads = (function (e) {
                        var n = {};
                        return (
                            e.find(':input[type="file"]').each(function (e, r) {
                                var i = t(r),
                                    o = i.attr("data-name") || i.attr("name") || "File " + (e + 1),
                                    a = i.attr("data-value");
                                "string" == typeof a && (a = t.trim(a)), (n[o] = a);
                            }),
                            n
                        );
                    })(n)),
                        b(e),
                        o
                            ? t
                                  .ajax({ url: u, type: "POST", data: r, dataType: "json", crossDomain: !0 })
                                  .done(function (t) {
                                      t && 200 === t.code && (e.success = !0), A(e);
                                  })
                                  .fail(function () {
                                      A(e);
                                  })
                            : A(e);
                }
                function O(n) {
                    I(n);
                    var r = n.form,
                        i = {};
                    if (!/^https/.test(f.href) || /^https/.test(n.action)) {
                        x(n);
                        var o,
                            a = w(r, i);
                        if (a) return g(a);
                        b(n),
                            e.each(i, function (t, e) {
                                v.test(e) && (i.EMAIL = t), /^((full[ _-]?)?name)$/i.test(e) && (o = t), /^(first[ _-]?name)$/i.test(e) && (i.FNAME = t), /^(last[ _-]?name)$/i.test(e) && (i.LNAME = t);
                            }),
                            o && !i.FNAME && ((o = o.split(" ")), (i.FNAME = o[0]), (i.LNAME = i.LNAME || o[1]));
                        var u = n.action.replace("/post?", "/post-json?") + "&c=?",
                            c = u.indexOf("u=") + 2;
                        c = u.substring(c, u.indexOf("&", c));
                        var s = u.indexOf("id=") + 3;
                        (s = u.substring(s, u.indexOf("&", s))),
                            (i["b_" + c + "_" + s] = ""),
                            t
                                .ajax({ url: u, data: i, dataType: "jsonp" })
                                .done(function (t) {
                                    (n.success = "success" === t.result || /already/.test(t.msg)), n.success || console.info("MailChimp error: " + t.msg), A(n);
                                })
                                .fail(function () {
                                    A(n);
                                });
                    } else r.attr("method", "post");
                }
                function A(t) {
                    var e = t.form,
                        n = t.redirect,
                        r = t.success;
                    r && n ? i.location(n) : (t.done.toggle(r), t.fail.toggle(!r), e.toggle(!r), I(t));
                }
                function x(t) {
                    t.evt && t.evt.preventDefault(), (t.evt = null);
                }
                return (
                    (s.ready = s.design = s.preview = function () {
                        !(function () {
                            (o = t("html").attr("data-wf-site")), (u = "https://webflow.com/api/v1/form/" + o), d && u.indexOf("https://webflow.com") >= 0 && (u = u.replace("https://webflow.com", "http://formdata.webflow.com"));
                            if (((c = "".concat(u, "/signFile")), !(n = t(p + " form")).length)) return;
                            n.each(_);
                        })(),
                            E ||
                                a ||
                                (function () {
                                    (a = !0),
                                        l.on("submit", p + " form", function (e) {
                                            var n = t.data(this, p);
                                            n.handler && ((n.evt = e), n.handler(n));
                                        });
                                    var e = [
                                        ["checkbox", ".w-checkbox-input"],
                                        ["radio", ".w-radio-input"],
                                    ];
                                    l.on("change", p + ' form input[type="checkbox"]:not(.w-checkbox-input)', function (e) {
                                        t(e.target).siblings(".w-checkbox-input").toggleClass("w--redirected-checked");
                                    }),
                                        l.on("change", p + ' form input[type="radio"]', function (e) {
                                            t('input[name="'.concat(e.target.name, '"]:not(').concat(".w-checkbox-input", ")")).map(function (e, n) {
                                                return t(n).siblings(".w-radio-input").removeClass("w--redirected-checked");
                                            });
                                            var n = t(e.target);
                                            n.hasClass("w-radio-input") || n.siblings(".w-radio-input").addClass("w--redirected-checked");
                                        }),
                                        e.forEach(function (e) {
                                            var n = (0, r.default)(e, 2),
                                                i = n[0],
                                                o = n[1];
                                            l.on("focus", p + ' form input[type="'.concat(i, '"]:not(') + o + ")", function (e) {
                                                t(e.target).siblings(o).addClass("w--redirected-focus");
                                            }),
                                                l.on("blur", p + ' form input[type="'.concat(i, '"]:not(') + o + ")", function (e) {
                                                    t(e.target).siblings(o).removeClass("w--redirected-focus");
                                                });
                                        });
                                })();
                    }),
                    s
                );
            })
        );
    },
    function (t, e, n) {
        var r = n(319),
            i = n(320),
            o = n(321);
        t.exports = function (t, e) {
            return r(t) || i(t, e) || o();
        };
    },
    function (t, e) {
        t.exports = function (t) {
            if (Array.isArray(t)) return t;
        };
    },
    function (t, e) {
        t.exports = function (t, e) {
            var n = [],
                r = !0,
                i = !1,
                o = void 0;
            try {
                for (var a, u = t[Symbol.iterator](); !(r = (a = u.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0);
            } catch (t) {
                (i = !0), (o = t);
            } finally {
                try {
                    r || null == u.return || u.return();
                } finally {
                    if (i) throw o;
                }
            }
            return n;
        };
    },
    function (t, e) {
        t.exports = function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        };
    },
    function (t, e, n) {
        "use strict";
        var r = n(2),
            i = "w-condition-invisible",
            o = "." + i;
        function a(t) {
            return Boolean(t.$el && t.$el.closest(o).length);
        }
        function u(t, e) {
            for (var n = t; n >= 0; n--) if (!a(e[n])) return n;
            return -1;
        }
        function c(t, e) {
            for (var n = t; n <= e.length - 1; n++) if (!a(e[n])) return n;
            return -1;
        }
        function s(t, e, n, r) {
            var o,
                s,
                l,
                f = n.tram,
                d = Array.isArray,
                p = "w-lightbox-",
                v = /(^|\s+)/g,
                h = [];
            function g(t, e) {
                return (
                    (h = d(t) ? t : [t]),
                    s || g.build(),
                    (function (t) {
                        return t.filter(function (t) {
                            return !a(t);
                        });
                    })(h).length > 1 &&
                        ((s.items = s.empty),
                        h.forEach(function (t) {
                            var e = P("thumbnail"),
                                n = P("item").append(e);
                            a(t) && n.addClass(i),
                                (s.items = s.items.add(n)),
                                x(t.thumbnailUrl || t.url, function (t) {
                                    t.prop("width") > t.prop("height") ? N(t, "wide") : N(t, "tall"), e.append(N(t, "thumbnail-image"));
                                });
                        }),
                        s.strip.empty().append(s.items),
                        N(s.content, "group")),
                    f(L(s.lightbox, "hide").trigger("focus")).add("opacity .3s").start({ opacity: 1 }),
                    N(s.html, "noscroll"),
                    g.show(e || 0)
                );
            }
            function E(t) {
                return function (e) {
                    this === e.target && (e.stopPropagation(), e.preventDefault(), t());
                };
            }
            (g.build = function () {
                return (
                    g.destroy(),
                    ((s = { html: n(e.documentElement), empty: n() }).arrowLeft = P("control left inactive")),
                    (s.arrowRight = P("control right inactive")),
                    (s.close = P("control close")),
                    (s.spinner = P("spinner")),
                    (s.strip = P("strip")),
                    (l = new S(s.spinner, R("hide"))),
                    (s.content = P("content").append(s.spinner, s.arrowLeft, s.arrowRight, s.close)),
                    (s.container = P("container").append(s.content, s.strip)),
                    (s.lightbox = P("backdrop hide").append(s.container)),
                    s.strip.on("click", C("item"), I),
                    s.content.on("swipe", b).on("click", C("left"), m).on("click", C("right"), y).on("click", C("close"), _).on("click", C("image, caption"), y),
                    s.container.on("click", C("view"), _).on("dragstart", C("img"), T),
                    s.lightbox.on("keydown", O).on("focusin", w),
                    n(r).append(s.lightbox.prop("tabIndex", 0)),
                    g
                );
            }),
                (g.destroy = function () {
                    s && (L(s.html, "noscroll"), s.lightbox.remove(), (s = void 0));
                }),
                (g.show = function (t) {
                    if (t !== o) {
                        var e = h[t];
                        if (!e) return g.hide();
                        if (a(e)) {
                            if (t < o) {
                                var r = u(t - 1, h);
                                t = r > -1 ? r : t;
                            } else {
                                var i = c(t + 1, h);
                                t = i > -1 ? i : t;
                            }
                            e = h[t];
                        }
                        var d,
                            p,
                            v = o;
                        return (
                            (o = t),
                            l.show(),
                            x((e.html && ((d = e.width), (p = e.height), "data:image/svg+xml;charset=utf-8," + encodeURI('<svg xmlns="http://www.w3.org/2000/svg" width="' + d + '" height="' + p + '"/>'))) || e.url, function (r) {
                                if (t === o) {
                                    var i,
                                        a,
                                        d = P("figure", "figure").append(N(r, "image")),
                                        p = P("frame").append(d),
                                        g = P("view").append(p);
                                    e.html && ((a = (i = n(e.html)).is("iframe")) && i.on("load", E), d.append(N(i, "embed"))), e.caption && d.append(P("caption", "figcaption").text(e.caption)), s.spinner.before(g), a || E();
                                }
                                function E() {
                                    var e;
                                    if ((l.hide(), t === o)) {
                                        if (
                                            (D(
                                                s.arrowLeft,
                                                "inactive",
                                                (function (t, e) {
                                                    return -1 === u(t - 1, e);
                                                })(t, h)
                                            ),
                                            D(
                                                s.arrowRight,
                                                "inactive",
                                                (function (t, e) {
                                                    return -1 === c(t + 1, e);
                                                })(t, h)
                                            ),
                                            s.view
                                                ? (f(s.view)
                                                      .add("opacity .3s")
                                                      .start({ opacity: 0 })
                                                      .then(
                                                          ((e = s.view),
                                                          function () {
                                                              e.remove();
                                                          })
                                                      ),
                                                  f(g)
                                                      .add("opacity .3s")
                                                      .add("transform .3s")
                                                      .set({ x: t > v ? "80px" : "-80px" })
                                                      .start({ opacity: 1, x: 0 }))
                                                : g.css("opacity", 1),
                                            (s.view = g),
                                            s.items)
                                        ) {
                                            L(s.items, "active");
                                            var n = s.items.eq(t);
                                            N(n, "active"),
                                                (function (t) {
                                                    var e,
                                                        n = t.get(0),
                                                        r = s.strip.get(0),
                                                        i = n.offsetLeft,
                                                        o = n.clientWidth,
                                                        a = r.scrollLeft,
                                                        u = r.clientWidth,
                                                        c = r.scrollWidth - u;
                                                    i < a ? (e = Math.max(0, i + o - u)) : i + o > u + a && (e = Math.min(i, c));
                                                    null != e && f(s.strip).add("scroll-left 500ms").start({ "scroll-left": e });
                                                })(n);
                                        }
                                    } else g.remove();
                                }
                            }),
                            g
                        );
                    }
                }),
                (g.hide = function () {
                    return f(s.lightbox).add("opacity .3s").start({ opacity: 0 }).then(A), g;
                }),
                (g.prev = function () {
                    var t = u(o - 1, h);
                    t > -1 && g.show(t);
                }),
                (g.next = function () {
                    var t = c(o + 1, h);
                    t > -1 && g.show(t);
                });
            var m = E(g.prev),
                y = E(g.next),
                _ = E(g.hide),
                I = function (t) {
                    var e = n(this).index();
                    t.preventDefault(), g.show(e);
                },
                b = function (t, e) {
                    t.preventDefault(), "left" === e.direction ? g.next() : "right" === e.direction && g.prev();
                },
                w = function () {
                    this.focus();
                };
            function T(t) {
                t.preventDefault();
            }
            function O(t) {
                var e = t.keyCode;
                27 === e ? g.hide() : 37 === e ? g.prev() : 39 === e && g.next();
            }
            function A() {
                s && (s.strip.scrollLeft(0).empty(), L(s.html, "noscroll"), N(s.lightbox, "hide"), s.view && s.view.remove(), L(s.content, "group"), N(s.arrowLeft, "inactive"), N(s.arrowRight, "inactive"), (o = s.view = void 0));
            }
            function x(t, e) {
                var n = P("img", "img");
                return (
                    n.one("load", function () {
                        e(n);
                    }),
                    n.attr("src", t),
                    n
                );
            }
            function S(t, e, n) {
                (this.$element = t), (this.className = e), (this.delay = n || 200), this.hide();
            }
            function R(t, e) {
                return t.replace(v, (e ? " ." : " ") + p);
            }
            function C(t) {
                return R(t, !0);
            }
            function N(t, e) {
                return t.addClass(R(e));
            }
            function L(t, e) {
                return t.removeClass(R(e));
            }
            function D(t, e, n) {
                return t.toggleClass(R(e), n);
            }
            function P(t, r) {
                return N(n(e.createElement(r || "div")), t);
            }
            return (
                (S.prototype.show = function () {
                    var t = this;
                    t.timeoutId ||
                        (t.timeoutId = setTimeout(function () {
                            t.$element.removeClass(t.className), delete t.timeoutId;
                        }, t.delay));
                }),
                (S.prototype.hide = function () {
                    if (this.timeoutId) return clearTimeout(this.timeoutId), void delete this.timeoutId;
                    this.$element.addClass(this.className);
                }),
                (function () {
                    var n = t.navigator.userAgent,
                        r = n.match(/(iPhone|iPad|iPod);[^OS]*OS (\d)/);
                    if ((n.indexOf("Android ") > -1 && -1 === n.indexOf("Chrome")) || (r && !(r[2] > 7))) {
                        var i = e.createElement("style");
                        e.head.appendChild(i), t.addEventListener("resize", o, !0), o();
                    }
                    function o() {
                        var e = t.innerHeight,
                            n = t.innerWidth,
                            r =
                                ".w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" +
                                e +
                                "px}.w-lightbox-view {width:" +
                                n +
                                "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" +
                                0.86 * e +
                                "px}.w-lightbox-image {max-width:" +
                                n +
                                "px;max-height:" +
                                e +
                                "px}.w-lightbox-group .w-lightbox-image {max-height:" +
                                0.86 * e +
                                "px}.w-lightbox-strip {padding: 0 " +
                                0.01 * e +
                                "px}.w-lightbox-item {width:" +
                                0.1 * e +
                                "px;padding:" +
                                0.02 * e +
                                "px " +
                                0.01 * e +
                                "px}.w-lightbox-thumbnail {height:" +
                                0.1 * e +
                                "px}@media (min-width: 768px) {.w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" +
                                0.96 * e +
                                "px}.w-lightbox-content {margin-top:" +
                                0.02 * e +
                                "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" +
                                0.84 * e +
                                "px}.w-lightbox-image {max-width:" +
                                0.96 * n +
                                "px;max-height:" +
                                0.96 * e +
                                "px}.w-lightbox-group .w-lightbox-image {max-width:" +
                                0.823 * n +
                                "px;max-height:" +
                                0.84 * e +
                                "px}}";
                        i.textContent = r;
                    }
                })(),
                g
            );
        }
        r.define(
            "lightbox",
            (t.exports = function (t) {
                var e,
                    n,
                    i = {},
                    o = r.env(),
                    a = s(window, document, t, o ? "#lightbox-mountpoint" : "body"),
                    u = t(document),
                    c = ".w-lightbox";
                function l(t) {
                    var e,
                        r,
                        i = t.el.children(".w-json").html();
                    if (i) {
                        try {
                            i = JSON.parse(i);
                        } catch (t) {
                            console.error("Malformed lightbox JSON configuration.", t);
                        }
                        !(function (t) {
                            t.images &&
                                (t.images.forEach(function (t) {
                                    t.type = "image";
                                }),
                                (t.items = t.images));
                            t.embed && ((t.embed.type = "video"), (t.items = [t.embed]));
                            t.groupId && (t.group = t.groupId);
                        })(i),
                            i.items.forEach(function (e) {
                                e.$el = t.el;
                            }),
                            (e = i.group) ? ((r = n[e]) || (r = n[e] = []), (t.items = r), i.items.length && ((t.index = r.length), r.push.apply(r, i.items))) : ((t.items = i.items), (t.index = 0));
                    } else t.items = [];
                }
                return (
                    (i.ready = i.design = i.preview = function () {
                        (e = o && r.env("design")), a.destroy(), (n = {}), u.find(c).webflowLightBox();
                    }),
                    jQuery.fn.extend({
                        webflowLightBox: function () {
                            t.each(this, function (n, r) {
                                var i = t.data(r, c);
                                i || (i = t.data(r, c, { el: t(r), mode: "images", images: [], embed: "" })),
                                    i.el.off(c),
                                    l(i),
                                    e
                                        ? i.el.on("setting" + c, l.bind(null, i))
                                        : i.el
                                              .on(
                                                  "click" + c,
                                                  (function (t) {
                                                      return function () {
                                                          t.items.length && a(t.items, t.index || 0);
                                                      };
                                                  })(i)
                                              )
                                              .on("click" + c, function (t) {
                                                  t.preventDefault();
                                              });
                            });
                        },
                    }),
                    i
                );
            })
        );
    },
    function (t, e, n) {
        "use strict";
        var r = n(2),
            i = n(13),
            o = { ARROW_LEFT: 37, ARROW_UP: 38, ARROW_RIGHT: 39, ARROW_DOWN: 40, ESCAPE: 27, SPACE: 32, ENTER: 13, HOME: 36, END: 35 };
        r.define(
            "navbar",
            (t.exports = function (t, e) {
                var n,
                    a,
                    u,
                    c,
                    s = {},
                    l = t.tram,
                    f = t(window),
                    d = t(document),
                    p = e.debounce,
                    v = r.env(),
                    h = '<div class="w-nav-overlay" data-wf-ignore />',
                    g = ".w-nav",
                    E = "w--open",
                    m = "w--nav-dropdown-open",
                    y = "w--nav-dropdown-toggle-open",
                    _ = "w--nav-dropdown-list-open",
                    I = "w--nav-link-open",
                    b = i.triggers,
                    w = t();
                function T() {
                    r.resize.off(O);
                }
                function O() {
                    a.each(M);
                }
                function A(n, r) {
                    var i = t(r),
                        a = t.data(r, g);
                    a || (a = t.data(r, g, { open: !1, el: i, config: {}, selectedIdx: -1 })),
                        (a.menu = i.find(".w-nav-menu")),
                        (a.links = a.menu.find(".w-nav-link")),
                        (a.dropdowns = a.menu.find(".w-dropdown")),
                        (a.dropdownToggle = a.menu.find(".w-dropdown-toggle")),
                        (a.dropdownList = a.menu.find(".w-dropdown-list")),
                        (a.button = i.find(".w-nav-button")),
                        (a.container = i.find(".w-container")),
                        (a.overlayContainerId = "w-nav-overlay-" + n),
                        (a.outside = (function (e) {
                            e.outside && d.off("click" + g, e.outside);
                            return function (n) {
                                var r = t(n.target);
                                (c && r.closest(".w-editor-bem-EditorOverlay").length) || P(e, r);
                            };
                        })(a));
                    var s = i.find(".w-nav-brand");
                    s && "/" === s.attr("href") && null == s.attr("aria-label") && s.attr("aria-label", "home"),
                        a.button.attr("style", "-webkit-user-select: text;"),
                        null == a.button.attr("aria-label") && a.button.attr("aria-label", "menu"),
                        a.button.attr("role", "button"),
                        a.button.attr("tabindex", "0"),
                        a.button.attr("aria-controls", a.overlayContainerId),
                        a.button.attr("aria-haspopup", "menu"),
                        a.button.attr("aria-expanded", "false"),
                        a.el.off(g),
                        a.button.off(g),
                        a.menu.off(g),
                        R(a),
                        u
                            ? (S(a),
                              a.el.on(
                                  "setting" + g,
                                  (function (t) {
                                      return function (n, r) {
                                          r = r || {};
                                          var i = f.width();
                                          R(t),
                                              !0 === r.open && G(t, !0),
                                              !1 === r.open && U(t, !0),
                                              t.open &&
                                                  e.defer(function () {
                                                      i !== f.width() && N(t);
                                                  });
                                      };
                                  })(a)
                              ))
                            : (!(function (e) {
                                  if (e.overlay) return;
                                  (e.overlay = t(h).appendTo(e.el)), e.overlay.attr("id", e.overlayContainerId), (e.parent = e.menu.parent()), U(e, !0);
                              })(a),
                              a.button.on("click" + g, L(a)),
                              a.menu.on("click" + g, "a", D(a)),
                              a.button.on(
                                  "keydown" + g,
                                  (function (t) {
                                      return function (e) {
                                          switch (e.keyCode) {
                                              case o.SPACE:
                                              case o.ENTER:
                                                  return L(t)(), e.preventDefault(), e.stopPropagation();
                                              case o.ESCAPE:
                                                  return U(t), e.preventDefault(), e.stopPropagation();
                                              case o.ARROW_RIGHT:
                                              case o.ARROW_DOWN:
                                              case o.HOME:
                                              case o.END:
                                                  return t.open ? (e.keyCode === o.END ? (t.selectedIdx = t.links.length - 1) : (t.selectedIdx = 0), C(t), e.preventDefault(), e.stopPropagation()) : (e.preventDefault(), e.stopPropagation());
                                          }
                                      };
                                  })(a)
                              ),
                              a.el.on(
                                  "keydown" + g,
                                  (function (t) {
                                      return function (e) {
                                          if (t.open)
                                              switch (((t.selectedIdx = t.links.index(document.activeElement)), e.keyCode)) {
                                                  case o.HOME:
                                                  case o.END:
                                                      return e.keyCode === o.END ? (t.selectedIdx = t.links.length - 1) : (t.selectedIdx = 0), C(t), e.preventDefault(), e.stopPropagation();
                                                  case o.ESCAPE:
                                                      return U(t), t.button.focus(), e.preventDefault(), e.stopPropagation();
                                                  case o.ARROW_LEFT:
                                                  case o.ARROW_UP:
                                                      return (t.selectedIdx = Math.max(-1, t.selectedIdx - 1)), C(t), e.preventDefault(), e.stopPropagation();
                                                  case o.ARROW_RIGHT:
                                                  case o.ARROW_DOWN:
                                                      return (t.selectedIdx = Math.min(t.links.length - 1, t.selectedIdx + 1)), C(t), e.preventDefault(), e.stopPropagation();
                                              }
                                      };
                                  })(a)
                              )),
                        M(n, r);
                }
                function x(e, n) {
                    var r = t.data(n, g);
                    r && (S(r), t.removeData(n, g));
                }
                function S(t) {
                    t.overlay && (U(t, !0), t.overlay.remove(), (t.overlay = null));
                }
                function R(t) {
                    var n = {},
                        r = t.config || {},
                        i = (n.animation = t.el.attr("data-animation") || "default");
                    (n.animOver = /^over/.test(i)), (n.animDirect = /left$/.test(i) ? -1 : 1), r.animation !== i && t.open && e.defer(N, t), (n.easing = t.el.attr("data-easing") || "ease"), (n.easing2 = t.el.attr("data-easing2") || "ease");
                    var o = t.el.attr("data-duration");
                    (n.duration = null != o ? Number(o) : 400), (n.docHeight = t.el.attr("data-doc-height")), (t.config = n);
                }
                function C(t) {
                    if (t.links[t.selectedIdx]) {
                        var e = t.links[t.selectedIdx];
                        e.focus(), D(e);
                    }
                }
                function N(t) {
                    t.open && (U(t, !0), G(t, !0));
                }
                function L(t) {
                    return p(function () {
                        t.open ? U(t) : G(t);
                    });
                }
                function D(e) {
                    return function (n) {
                        var i = t(this).attr("href");
                        r.validClick(n.currentTarget) ? i && 0 === i.indexOf("#") && e.open && U(e) : n.preventDefault();
                    };
                }
                (s.ready = s.design = s.preview = function () {
                    if (((u = v && r.env("design")), (c = r.env("editor")), (n = t(document.body)), !(a = d.find(g)).length)) return;
                    a.each(A), T(), r.resize.on(O);
                }),
                    (s.destroy = function () {
                        (w = t()), T(), a && a.length && a.each(x);
                    });
                var P = p(function (t, e) {
                    if (t.open) {
                        var n = e.closest(".w-nav-menu");
                        t.menu.is(n) || U(t);
                    }
                });
                function M(e, n) {
                    var r = t.data(n, g),
                        i = (r.collapsed = "none" !== r.button.css("display"));
                    if ((!r.open || i || u || U(r, !0), r.container.length)) {
                        var o = (function (e) {
                            var n = e.container.css(j);
                            "none" === n && (n = "");
                            return function (e, r) {
                                (r = t(r)).css(j, ""), "none" === r.css(j) && r.css(j, n);
                            };
                        })(r);
                        r.links.each(o), r.dropdowns.each(o);
                    }
                    r.open && X(r);
                }
                var j = "max-width";
                function k(t, e) {
                    e.setAttribute("data-nav-menu-open", "");
                }
                function F(t, e) {
                    e.removeAttribute("data-nav-menu-open");
                }
                function G(t, e) {
                    if (!t.open) {
                        (t.open = !0), t.menu.each(k), t.links.addClass(I), t.dropdowns.addClass(m), t.dropdownToggle.addClass(y), t.dropdownList.addClass(_), t.button.addClass(E);
                        var n = t.config;
                        ("none" !== n.animation && l.support.transform) || (e = !0);
                        var i = X(t),
                            o = t.menu.outerHeight(!0),
                            a = t.menu.outerWidth(!0),
                            c = t.el.height(),
                            s = t.el[0];
                        if ((M(0, s), b.intro(0, s), r.redraw.up(), u || d.on("click" + g, t.outside), e)) v();
                        else {
                            var f = "transform " + n.duration + "ms " + n.easing;
                            if ((t.overlay && ((w = t.menu.prev()), t.overlay.show().append(t.menu)), n.animOver))
                                return (
                                    l(t.menu)
                                        .add(f)
                                        .set({ x: n.animDirect * a, height: i })
                                        .start({ x: 0 })
                                        .then(v),
                                    void (t.overlay && t.overlay.width(a))
                                );
                            var p = c + o;
                            l(t.menu).add(f).set({ y: -p }).start({ y: 0 }).then(v);
                        }
                    }
                    function v() {
                        t.button.attr("aria-expanded", "true");
                    }
                }
                function X(t) {
                    var e = t.config,
                        r = e.docHeight ? d.height() : n.height();
                    return e.animOver ? t.menu.height(r) : "fixed" !== t.el.css("position") && (r -= t.el.outerHeight(!0)), t.overlay && t.overlay.height(r), r;
                }
                function U(t, e) {
                    if (t.open) {
                        (t.open = !1), t.button.removeClass(E);
                        var n = t.config;
                        if ((("none" === n.animation || !l.support.transform || n.duration <= 0) && (e = !0), b.outro(0, t.el[0]), d.off("click" + g, t.outside), e)) return l(t.menu).stop(), void c();
                        var r = "transform " + n.duration + "ms " + n.easing2,
                            i = t.menu.outerHeight(!0),
                            o = t.menu.outerWidth(!0),
                            a = t.el.height();
                        if (n.animOver)
                            l(t.menu)
                                .add(r)
                                .start({ x: o * n.animDirect })
                                .then(c);
                        else {
                            var u = a + i;
                            l(t.menu).add(r).start({ y: -u }).then(c);
                        }
                    }
                    function c() {
                        t.menu.height(""),
                            l(t.menu).set({ x: 0, y: 0 }),
                            t.menu.each(F),
                            t.links.removeClass(I),
                            t.dropdowns.removeClass(m),
                            t.dropdownToggle.removeClass(y),
                            t.dropdownList.removeClass(_),
                            t.overlay && t.overlay.children().length && (w.length ? t.menu.insertAfter(w) : t.menu.prependTo(t.parent), t.overlay.attr("style", "").hide()),
                            t.el.triggerHandler("w-close"),
                            t.button.attr("aria-expanded", "false");
                    }
                }
                return s;
            })
        );
    },
    function (t, e, n) {
        "use strict";
        var r = n(2),
            i = n(13),
            o = { ARROW_LEFT: 37, ARROW_UP: 38, ARROW_RIGHT: 39, ARROW_DOWN: 40, SPACE: 32, ENTER: 13, HOME: 36, END: 35 },
            a = 'a[href], area[href], [role="button"], input, select, textarea, button, iframe, object, embed, *[tabindex], *[contenteditable]';
        r.define(
            "slider",
            (t.exports = function (t, e) {
                var n,
                    u,
                    c,
                    s,
                    l = {},
                    f = t.tram,
                    d = t(document),
                    p = r.env(),
                    v = ".w-slider",
                    h = '<div class="w-slider-dot" data-wf-ignore />',
                    g = '<div aria-live="off" aria-atomic="true" class="w-slider-aria-label" data-wf-ignore />',
                    E = i.triggers;
                function m() {
                    (n = d.find(v)).length && (n.each(I), (s = null), c || (y(), r.resize.on(_), r.redraw.on(l.redraw)));
                }
                function y() {
                    r.resize.off(_), r.redraw.off(l.redraw);
                }
                function _() {
                    n.filter(":visible").each(D);
                }
                function I(e, n) {
                    var r = t(n),
                        i = t.data(n, v);
                    i || (i = t.data(n, v, { index: 0, depth: 1, hasFocus: { keyboard: !1, mouse: !1 }, el: r, config: {} })),
                        (i.mask = r.children(".w-slider-mask")),
                        (i.left = r.children(".w-slider-arrow-left")),
                        (i.right = r.children(".w-slider-arrow-right")),
                        (i.nav = r.children(".w-slider-nav")),
                        (i.slides = i.mask.children(".w-slide")),
                        i.slides.each(E.reset),
                        s && (i.maskWidth = 0),
                        void 0 === r.attr("role") && r.attr("role", "region"),
                        void 0 === r.attr("aria-label") && r.attr("aria-label", "carousel");
                    var o = i.mask.attr("id");
                    if (
                        (o || ((o = "w-slider-mask-" + e), i.mask.attr("id", o)),
                        (i.ariaLiveLabel = t(g).appendTo(i.mask)),
                        i.left.attr("role", "button"),
                        i.left.attr("tabindex", "0"),
                        i.left.attr("aria-controls", o),
                        void 0 === i.left.attr("aria-label") && i.left.attr("aria-label", "previous slide"),
                        i.right.attr("role", "button"),
                        i.right.attr("tabindex", "0"),
                        i.right.attr("aria-controls", o),
                        void 0 === i.right.attr("aria-label") && i.right.attr("aria-label", "next slide"),
                        !f.support.transform)
                    )
                        return i.left.hide(), i.right.hide(), i.nav.hide(), void (c = !0);
                    i.el.off(v),
                        i.left.off(v),
                        i.right.off(v),
                        i.nav.off(v),
                        b(i),
                        u
                            ? (i.el.on("setting" + v, C(i)), R(i), (i.hasTimer = !1))
                            : (i.el.on("swipe" + v, C(i)),
                              i.left.on("click" + v, A(i)),
                              i.right.on("click" + v, x(i)),
                              i.left.on("keydown" + v, O(i, A)),
                              i.right.on("keydown" + v, O(i, x)),
                              i.nav.on("keydown" + v, "> div", C(i)),
                              i.config.autoplay && !i.hasTimer && ((i.hasTimer = !0), (i.timerCount = 1), S(i)),
                              i.el.on("mouseenter" + v, T(i, !0, "mouse")),
                              i.el.on("focusin" + v, T(i, !0, "keyboard")),
                              i.el.on("mouseleave" + v, T(i, !1, "mouse")),
                              i.el.on("focusout" + v, T(i, !1, "keyboard"))),
                        i.nav.on("click" + v, "> div", C(i)),
                        p ||
                            i.mask
                                .contents()
                                .filter(function () {
                                    return 3 === this.nodeType;
                                })
                                .remove();
                    var a = r.filter(":hidden");
                    a.show();
                    var l = r.parents(":hidden");
                    l.show(), D(e, n), a.css("display", ""), l.css("display", "");
                }
                function b(t) {
                    var e = { crossOver: 0 };
                    (e.animation = t.el.attr("data-animation") || "slide"), "outin" === e.animation && ((e.animation = "cross"), (e.crossOver = 0.5)), (e.easing = t.el.attr("data-easing") || "ease");
                    var n = t.el.attr("data-duration");
                    if (
                        ((e.duration = null != n ? parseInt(n, 10) : 500),
                        w(t.el.attr("data-infinite")) && (e.infinite = !0),
                        w(t.el.attr("data-disable-swipe")) && (e.disableSwipe = !0),
                        w(t.el.attr("data-hide-arrows")) ? (e.hideArrows = !0) : t.config.hideArrows && (t.left.show(), t.right.show()),
                        w(t.el.attr("data-autoplay")))
                    ) {
                        (e.autoplay = !0), (e.delay = parseInt(t.el.attr("data-delay"), 10) || 2e3), (e.timerMax = parseInt(t.el.attr("data-autoplay-limit"), 10));
                        var r = "mousedown" + v + " touchstart" + v;
                        u ||
                            t.el.off(r).one(r, function () {
                                R(t);
                            });
                    }
                    var i = t.right.width();
                    (e.edge = i ? i + 40 : 100), (t.config = e);
                }
                function w(t) {
                    return "1" === t || "true" === t;
                }
                function T(e, n, r) {
                    return function (i) {
                        if (n) e.hasFocus[r] = n;
                        else {
                            if (t.contains(e.el.get(0), i.relatedTarget)) return;
                            if (((e.hasFocus[r] = n), (e.hasFocus.mouse && "keyboard" === r) || (e.hasFocus.keyboard && "mouse" === r))) return;
                        }
                        n ? (e.ariaLiveLabel.attr("aria-live", "polite"), e.hasTimer && R(e)) : (e.ariaLiveLabel.attr("aria-live", "off"), e.hasTimer && S(e));
                    };
                }
                function O(t, e) {
                    return function (n) {
                        switch (n.keyCode) {
                            case o.SPACE:
                            case o.ENTER:
                                return e(t)(), n.preventDefault(), n.stopPropagation();
                        }
                    };
                }
                function A(t) {
                    return function () {
                        L(t, { index: t.index - 1, vector: -1 });
                    };
                }
                function x(t) {
                    return function () {
                        L(t, { index: t.index + 1, vector: 1 });
                    };
                }
                function S(t) {
                    R(t);
                    var e = t.config,
                        n = e.timerMax;
                    (n && t.timerCount++ > n) ||
                        (t.timerId = window.setTimeout(function () {
                            null == t.timerId || u || (x(t)(), S(t));
                        }, e.delay));
                }
                function R(t) {
                    window.clearTimeout(t.timerId), (t.timerId = null);
                }
                function C(n) {
                    return function (i, a) {
                        a = a || {};
                        var c = n.config;
                        if (u && "setting" === i.type) {
                            if ("prev" === a.select) return A(n)();
                            if ("next" === a.select) return x(n)();
                            if ((b(n), P(n), null == a.select)) return;
                            !(function (n, r) {
                                var i = null;
                                r === n.slides.length && (m(), P(n)),
                                    e.each(n.anchors, function (e, n) {
                                        t(e.els).each(function (e, o) {
                                            t(o).index() === r && (i = n);
                                        });
                                    }),
                                    null != i && L(n, { index: i, immediate: !0 });
                            })(n, a.select);
                        } else {
                            if ("swipe" === i.type) {
                                if (c.disableSwipe) return;
                                if (r.env("editor")) return;
                                return "left" === a.direction ? x(n)() : "right" === a.direction ? A(n)() : void 0;
                            }
                            if (n.nav.has(i.target).length) {
                                var s = t(i.target).index();
                                if (("click" === i.type && L(n, { index: s }), "keydown" === i.type))
                                    switch (i.keyCode) {
                                        case o.ENTER:
                                        case o.SPACE:
                                            L(n, { index: s }), i.preventDefault();
                                            break;
                                        case o.ARROW_LEFT:
                                        case o.ARROW_UP:
                                            N(n.nav, Math.max(s - 1, 0)), i.preventDefault();
                                            break;
                                        case o.ARROW_RIGHT:
                                        case o.ARROW_DOWN:
                                            N(n.nav, Math.min(s + 1, n.pages)), i.preventDefault();
                                            break;
                                        case o.HOME:
                                            N(n.nav, 0), i.preventDefault();
                                            break;
                                        case o.END:
                                            N(n.nav, n.pages), i.preventDefault();
                                            break;
                                        default:
                                            return;
                                    }
                            }
                        }
                    };
                }
                function N(t, e) {
                    var n = t.children().eq(e).focus();
                    t.children().not(n);
                }
                function L(e, n) {
                    n = n || {};
                    var r = e.config,
                        i = e.anchors;
                    e.previous = e.index;
                    var o = n.index,
                        c = {};
                    o < 0
                        ? ((o = i.length - 1), r.infinite && ((c.x = -e.endX), (c.from = 0), (c.to = i[0].width)))
                        : o >= i.length && ((o = 0), r.infinite && ((c.x = i[i.length - 1].width), (c.from = -i[i.length - 1].x), (c.to = c.from - c.x))),
                        (e.index = o);
                    var l = e.nav.children().eq(o).addClass("w-active").attr("aria-selected", "true").attr("tabindex", "0");
                    e.nav.children().not(l).removeClass("w-active").attr("aria-selected", "false").attr("tabindex", "-1"),
                        r.hideArrows && (e.index === i.length - 1 ? e.right.hide() : e.right.show(), 0 === e.index ? e.left.hide() : e.left.show());
                    var d = e.offsetX || 0,
                        p = (e.offsetX = -i[e.index].x),
                        v = { x: p, opacity: 1, visibility: "" },
                        h = t(i[e.index].els),
                        g = t(i[e.previous] && i[e.previous].els),
                        m = e.slides.not(h),
                        y = r.animation,
                        _ = r.easing,
                        I = Math.round(r.duration),
                        b = n.vector || (e.index > e.previous ? 1 : -1),
                        w = "opacity " + I + "ms " + _,
                        T = "transform " + I + "ms " + _;
                    if (
                        (h.find(a).removeAttr("tabindex"),
                        h.removeAttr("aria-hidden"),
                        h.find("*").removeAttr("aria-hidden"),
                        m.find(a).attr("tabindex", "-1"),
                        m.attr("aria-hidden", "true"),
                        m.find("*").attr("aria-hidden", "true"),
                        u || (h.each(E.intro), m.each(E.outro)),
                        n.immediate && !s)
                    )
                        return f(h).set(v), void x();
                    if (e.index !== e.previous) {
                        if ((e.ariaLiveLabel.text("Slide ".concat(o + 1, " of ").concat(i.length, ".")), "cross" === y)) {
                            var O = Math.round(I - I * r.crossOver),
                                A = Math.round(I - O);
                            return (
                                (w = "opacity " + O + "ms " + _),
                                f(g).set({ visibility: "" }).add(w).start({ opacity: 0 }),
                                void f(h)
                                    .set({ visibility: "", x: p, opacity: 0, zIndex: e.depth++ })
                                    .add(w)
                                    .wait(A)
                                    .then({ opacity: 1 })
                                    .then(x)
                            );
                        }
                        if ("fade" === y)
                            return (
                                f(g).set({ visibility: "" }).stop(),
                                void f(h)
                                    .set({ visibility: "", x: p, opacity: 0, zIndex: e.depth++ })
                                    .add(w)
                                    .start({ opacity: 1 })
                                    .then(x)
                            );
                        if ("over" === y)
                            return (
                                (v = { x: e.endX }),
                                f(g).set({ visibility: "" }).stop(),
                                void f(h)
                                    .set({ visibility: "", zIndex: e.depth++, x: p + i[e.index].width * b })
                                    .add(T)
                                    .start({ x: p })
                                    .then(x)
                            );
                        r.infinite && c.x
                            ? (f(e.slides.not(g)).set({ visibility: "", x: c.x }).add(T).start({ x: p }), f(g).set({ visibility: "", x: c.from }).add(T).start({ x: c.to }), (e.shifted = g))
                            : (r.infinite && e.shifted && (f(e.shifted).set({ visibility: "", x: d }), (e.shifted = null)), f(e.slides).set({ visibility: "" }).add(T).start({ x: p }));
                    }
                    function x() {
                        (h = t(i[e.index].els)), (m = e.slides.not(h)), "slide" !== y && (v.visibility = "hidden"), f(m).set(v);
                    }
                }
                function D(e, n) {
                    var r = t.data(n, v);
                    if (r)
                        return (function (t) {
                            var e = t.mask.width();
                            if (t.maskWidth !== e) return (t.maskWidth = e), !0;
                            return !1;
                        })(r)
                            ? P(r)
                            : void (
                                  u &&
                                  (function (e) {
                                      var n = 0;
                                      if (
                                          (e.slides.each(function (e, r) {
                                              n += t(r).outerWidth(!0);
                                          }),
                                          e.slidesWidth !== n)
                                      )
                                          return (e.slidesWidth = n), !0;
                                      return !1;
                                  })(r) &&
                                  P(r)
                              );
                }
                function P(e) {
                    var n = 1,
                        r = 0,
                        i = 0,
                        o = 0,
                        a = e.maskWidth,
                        c = a - e.config.edge;
                    c < 0 && (c = 0),
                        (e.anchors = [{ els: [], x: 0, width: 0 }]),
                        e.slides.each(function (u, s) {
                            i - r > c && (n++, (r += a), (e.anchors[n - 1] = { els: [], x: i, width: 0 })), (o = t(s).outerWidth(!0)), (i += o), (e.anchors[n - 1].width += o), e.anchors[n - 1].els.push(s);
                            var l = u + 1 + " of " + e.slides.length;
                            t(s).attr("aria-label", l), t(s).attr("role", "group");
                        }),
                        (e.endX = i),
                        u && (e.pages = null),
                        e.nav.length &&
                            e.pages !== n &&
                            ((e.pages = n),
                            (function (e) {
                                var n,
                                    r = [],
                                    i = e.el.attr("data-nav-spacing");
                                i && (i = parseFloat(i) + "px");
                                for (var o = 0, a = e.pages; o < a; o++)
                                    (n = t(h))
                                        .attr("aria-label", "Show slide " + (o + 1) + " of " + a)
                                        .attr("aria-selected", "false")
                                        .attr("role", "button")
                                        .attr("tabindex", "-1"),
                                        e.nav.hasClass("w-num") && n.text(o + 1),
                                        null != i && n.css({ "margin-left": i, "margin-right": i }),
                                        r.push(n);
                                e.nav.empty().append(r);
                            })(e));
                    var s = e.index;
                    s >= n && (s = n - 1), L(e, { immediate: !0, index: s });
                }
                return (
                    (l.ready = function () {
                        (u = r.env("design")), m();
                    }),
                    (l.design = function () {
                        (u = !0), m();
                    }),
                    (l.preview = function () {
                        (u = !1), m();
                    }),
                    (l.redraw = function () {
                        (s = !0), m();
                    }),
                    (l.destroy = y),
                    l
                );
            })
        );
    },
    function (t, e, n) {
        "use strict";
        var r = n(2),
            i = n(13);
        r.define(
            "tabs",
            (t.exports = function (t) {
                var e,
                    n,
                    o = {},
                    a = t.tram,
                    u = t(document),
                    c = r.env,
                    s = c.safari,
                    l = c(),
                    f = "data-w-tab",
                    d = "data-w-pane",
                    p = ".w-tabs",
                    v = "w--current",
                    h = "w--tab-active",
                    g = i.triggers,
                    E = !1;
                function m() {
                    (n = l && r.env("design")), (e = u.find(p)).length && (e.each(I), r.env("preview") && !E && e.each(_), y(), r.redraw.on(o.redraw));
                }
                function y() {
                    r.redraw.off(o.redraw);
                }
                function _(e, n) {
                    var r = t.data(n, p);
                    r && (r.links && r.links.each(g.reset), r.panes && r.panes.each(g.reset));
                }
                function I(e, r) {
                    var i = p.substr(1) + "-" + e,
                        o = t(r),
                        a = t.data(r, p);
                    if (
                        (a || (a = t.data(r, p, { el: o, config: {} })),
                        (a.current = null),
                        (a.tabIdentifier = i + "-" + f),
                        (a.paneIdentifier = i + "-" + d),
                        (a.menu = o.children(".w-tab-menu")),
                        (a.links = a.menu.children(".w-tab-link")),
                        (a.content = o.children(".w-tab-content")),
                        (a.panes = a.content.children(".w-tab-pane")),
                        a.el.off(p),
                        a.links.off(p),
                        a.menu.attr("role", "tablist"),
                        a.links.attr("tabindex", "-1"),
                        (function (t) {
                            var e = {};
                            e.easing = t.el.attr("data-easing") || "ease";
                            var n = parseInt(t.el.attr("data-duration-in"), 10);
                            n = e.intro = n == n ? n : 0;
                            var r = parseInt(t.el.attr("data-duration-out"), 10);
                            (r = e.outro = r == r ? r : 0), (e.immediate = !n && !r), (t.config = e);
                        })(a),
                        !n)
                    ) {
                        a.links.on(
                            "click" + p,
                            (function (t) {
                                return function (e) {
                                    e.preventDefault();
                                    var n = e.currentTarget.getAttribute(f);
                                    n && b(t, { tab: n });
                                };
                            })(a)
                        ),
                            a.links.on(
                                "keydown" + p,
                                (function (t) {
                                    return function (e) {
                                        var n = (function (t) {
                                                var e = t.current;
                                                return Array.prototype.findIndex.call(
                                                    t.links,
                                                    function (t) {
                                                        return t.getAttribute(f) === e;
                                                    },
                                                    null
                                                );
                                            })(t),
                                            r = e.key,
                                            i = { ArrowLeft: n - 1, ArrowUp: n - 1, ArrowRight: n + 1, ArrowDown: n + 1, End: t.links.length - 1, Home: 0 };
                                        if (r in i) {
                                            e.preventDefault();
                                            var o = i[r];
                                            -1 === o && (o = t.links.length - 1), o === t.links.length && (o = 0);
                                            var a = t.links[o],
                                                u = a.getAttribute(f);
                                            u && b(t, { tab: u });
                                        }
                                    };
                                })(a)
                            );
                        var u = a.links.filter("." + v).attr(f);
                        u && b(a, { tab: u, immediate: !0 });
                    }
                }
                function b(e, n) {
                    n = n || {};
                    var i = e.config,
                        o = i.easing,
                        u = n.tab;
                    if (u !== e.current) {
                        var c;
                        (e.current = u),
                            e.links.each(function (r, o) {
                                var a = t(o);
                                if (n.immediate || i.immediate) {
                                    var s = e.panes[r];
                                    o.id || (o.id = e.tabIdentifier + "-" + r),
                                        s.id || (s.id = e.paneIdentifier + "-" + r),
                                        (o.href = "#" + s.id),
                                        o.setAttribute("role", "tab"),
                                        o.setAttribute("aria-controls", s.id),
                                        o.setAttribute("aria-selected", "false"),
                                        s.setAttribute("role", "tabpanel"),
                                        s.setAttribute("aria-labelledby", o.id);
                                }
                                o.getAttribute(f) === u
                                    ? ((c = o), a.addClass(v).removeAttr("tabindex").attr({ "aria-selected": "true" }).each(g.intro))
                                    : a.hasClass(v) && a.removeClass(v).attr({ tabindex: "-1", "aria-selected": "false" }).each(g.outro);
                            });
                        var l = [],
                            d = [];
                        e.panes.each(function (e, n) {
                            var r = t(n);
                            n.getAttribute(f) === u ? l.push(n) : r.hasClass(h) && d.push(n);
                        });
                        var p = t(l),
                            m = t(d);
                        if (n.immediate || i.immediate) return p.addClass(h).each(g.intro), m.removeClass(h), void (E || r.redraw.up());
                        var y = window.scrollX,
                            _ = window.scrollY;
                        c.focus(),
                            window.scrollTo(y, _),
                            m.length && i.outro
                                ? (m.each(g.outro),
                                  a(m)
                                      .add("opacity " + i.outro + "ms " + o, { fallback: s })
                                      .start({ opacity: 0 })
                                      .then(function () {
                                          return w(i, m, p);
                                      }))
                                : w(i, m, p);
                    }
                }
                function w(t, e, n) {
                    if ((e.removeClass(h).css({ opacity: "", transition: "", transform: "", width: "", height: "" }), n.addClass(h).each(g.intro), r.redraw.up(), !t.intro)) return a(n).set({ opacity: 1 });
                    a(n)
                        .set({ opacity: 0 })
                        .redraw()
                        .add("opacity " + t.intro + "ms " + t.easing, { fallback: s })
                        .start({ opacity: 1 });
                }
                return (
                    (o.ready = o.design = o.preview = m),
                    (o.redraw = function () {
                        (E = !0), m(), (E = !1);
                    }),
                    (o.destroy = function () {
                        (e = u.find(p)).length && (e.each(_), y());
                    }),
                    o
                );
            })
        );
    },
    function (t, e, n) {
        "use strict";
        var r = n(2);
        r.define(
            "maps",
            (t.exports = function (t, e) {
                var n,
                    i = {},
                    o = t(document),
                    a = null,
                    u = ".w-widget-map",
                    c = "AIzaSyB_L9igpJHLoSVSdFzzxAbGlFUytLom-ag";
                function s() {
                    r.resize.off(f), r.redraw.off(f);
                }
                function l(e, n) {
                    v(n, t(n).data());
                }
                function f() {
                    n.each(d);
                }
                function d(t, e) {
                    var n = v(e);
                    a.maps.event.trigger(n.map, "resize"), n.setMapPosition();
                }
                (i.ready = function () {
                    r.env() ||
                        (function () {
                            if (!(n = o.find(u)).length) return;
                            null === a ? (t.getScript("https://maps.googleapis.com/maps/api/js?v=3.31&sensor=false&callback=_wf_maps_loaded&key=" + c), (window._wf_maps_loaded = e)) : e();
                            function e() {
                                (window._wf_maps_loaded = function () {}), (a = window.google), n.each(l), s(), r.resize.on(f), r.redraw.on(f);
                            }
                        })();
                }),
                    (i.destroy = s);
                var p = "w-widget-map";
                function v(e, n) {
                    var i = t.data(e, p);
                    if (i) return i;
                    var o = t(e);
                    i = t.data(e, p, { latLng: "51.511214,-0.119824", tooltip: "", style: "roadmap", zoom: 12, marker: new a.maps.Marker({ draggable: !1 }), infowindow: new a.maps.InfoWindow({ disableAutoPan: !0 }) });
                    var u = n.widgetLatlng || i.latLng;
                    i.latLng = u;
                    var c = u.split(","),
                        s = new a.maps.LatLng(c[0], c[1]);
                    i.latLngObj = s;
                    var l = !(r.env.touch && n.disableTouch);
                    (i.map = new a.maps.Map(e, {
                        center: i.latLngObj,
                        zoom: i.zoom,
                        maxZoom: 18,
                        mapTypeControl: !1,
                        panControl: !1,
                        streetViewControl: !1,
                        scrollwheel: !n.disableScroll,
                        draggable: l,
                        zoomControl: !0,
                        zoomControlOptions: { style: a.maps.ZoomControlStyle.SMALL },
                        mapTypeId: i.style,
                    })),
                        i.marker.setMap(i.map),
                        (i.setMapPosition = function () {
                            i.map.setCenter(i.latLngObj);
                            var t = 0,
                                e = 0,
                                n = o.css(["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"]);
                            (t -= parseInt(n.paddingLeft, 10)), (t += parseInt(n.paddingRight, 10)), (e -= parseInt(n.paddingTop, 10)), (e += parseInt(n.paddingBottom, 10)), (t || e) && i.map.panBy(t, e), o.css("position", "");
                        }),
                        a.maps.event.addListener(i.map, "tilesloaded", function () {
                            a.maps.event.clearListeners(i.map, "tilesloaded"), i.setMapPosition();
                        }),
                        i.setMapPosition(),
                        i.marker.setPosition(i.latLngObj),
                        i.infowindow.setPosition(i.latLngObj);
                    var f = n.widgetTooltip;
                    f && ((i.tooltip = f), i.infowindow.setContent(f), i.infowindowOpen || (i.infowindow.open(i.map, i.marker), (i.infowindowOpen = !0)));
                    var d = n.widgetStyle;
                    d && i.map.setMapTypeId(d);
                    var v = n.widgetZoom;
                    return (
                        null != v && ((i.zoom = v), i.map.setZoom(Number(v))),
                        a.maps.event.addListener(i.marker, "click", function () {
                            window.open("https://maps.google.com/?z=" + i.zoom + "&daddr=" + i.latLng);
                        }),
                        i
                    );
                }
                return i;
            })
        );
    },
]);
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require("ix2").init({
    events: {
        "e-2": {
            id: "e-2",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_FINISH",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a", affectedElements: {}, playInReverse: false, autoStopEventId: "e" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "5fb1bda997835a671983e6f7", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "5fb1bda997835a671983e6f7", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1603678280305,
        },
        "e-3": {
            id: "e-3",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL_UP",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-2", affectedElements: {}, playInReverse: false, autoStopEventId: "e-4" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "5fb1bda997835a671983e6f7", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "5fb1bda997835a671983e6f7", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1603681674757,
        },
        "e-4": {
            id: "e-4",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL_DOWN",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-3", affectedElements: {}, playInReverse: false, autoStopEventId: "e-3" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "5fb1bda997835a671983e6f7", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "5fb1bda997835a671983e6f7", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1603681674757,
        },
        "e-5": {
            id: "e-5",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-4", affectedElements: {}, playInReverse: false, autoStopEventId: "e-6" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { selector: ".announcement-cross", originalId: "5fb1bda997835a671983e6f7|500c8e06-8d99-7339-b5f9-163ec5d1b733", appliesTo: "CLASS" },
            targets: [{ selector: ".announcement-cross", originalId: "5fb1bda997835a671983e6f7|500c8e06-8d99-7339-b5f9-163ec5d1b733", appliesTo: "CLASS" }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1603685745214,
        },
        "e-7": {
            id: "e-7",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-5", affectedElements: {}, playInReverse: false, autoStopEventId: "e-8" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { selector: ".trigger-search-modal", originalId: "5fb1bda997835a671983e6f7|439c0476-e606-1dd6-4d70-ec295876f60b", appliesTo: "CLASS" },
            targets: [{ selector: ".trigger-search-modal", originalId: "5fb1bda997835a671983e6f7|439c0476-e606-1dd6-4d70-ec295876f60b", appliesTo: "CLASS" }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1603686050187,
        },
        "e-9": {
            id: "e-9",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-6", affectedElements: {}, playInReverse: false, autoStopEventId: "e-10" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { selector: ".search-modal-screen", originalId: "f15c684a-9087-46c0-c7c0-43533413b377", appliesTo: "CLASS" },
            targets: [{ selector: ".search-modal-screen", originalId: "f15c684a-9087-46c0-c7c0-43533413b377", appliesTo: "CLASS" }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1603686165003,
        },
        "e-11": {
            id: "e-11",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-5", affectedElements: {}, playInReverse: false, autoStopEventId: "e-12" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { selector: ".search-trigger", originalId: "813e830e-a96a-eb63-db82-ca815b70ae13", appliesTo: "CLASS" },
            targets: [{ selector: ".search-trigger", originalId: "813e830e-a96a-eb63-db82-ca815b70ae13", appliesTo: "CLASS" }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1610324146632,
        },
        "e-20": {
            id: "e-20",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_FINISH",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a", affectedElements: {}, playInReverse: false, autoStopEventId: "e-19" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "5ffe667d322c895e29c578e3", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "5ffe667d322c895e29c578e3", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1610507901258,
        },
        "e-21": {
            id: "e-21",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_SCROLL_UP",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-2", affectedElements: {}, playInReverse: false, autoStopEventId: "e-22" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "5ffe667d322c895e29c578e3", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "5ffe667d322c895e29c578e3", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1610507901258,
        },
        "e-22": {
            id: "e-22",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_SCROLL_DOWN",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-3", affectedElements: {}, playInReverse: false, autoStopEventId: "e-21" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "5ffe667d322c895e29c578e3", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "5ffe667d322c895e29c578e3", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1610507901258,
        },
        "e-23": {
            id: "e-23",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-10", affectedElements: {}, playInReverse: false, autoStopEventId: "e-24" } },
            mediaQueries: ["main"],
            target: { selector: ".underline-link", originalId: "d25df371-e14f-5651-3418-4ac8cd4baa24", appliesTo: "CLASS" },
            targets: [{ selector: ".underline-link", originalId: "d25df371-e14f-5651-3418-4ac8cd4baa24", appliesTo: "CLASS" }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1610510492928,
        },
        "e-24": {
            id: "e-24",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-11", affectedElements: {}, playInReverse: false, autoStopEventId: "e-23" } },
            mediaQueries: ["main"],
            target: { selector: ".underline-link", originalId: "d25df371-e14f-5651-3418-4ac8cd4baa24", appliesTo: "CLASS" },
            targets: [{ selector: ".underline-link", originalId: "d25df371-e14f-5651-3418-4ac8cd4baa24", appliesTo: "CLASS" }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1610510492929,
        },
        "e-28": {
            id: "e-28",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_FINISH",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a", affectedElements: {}, playInReverse: false, autoStopEventId: "e-27" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "600501a03c9a4b2c2f471c27", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "600501a03c9a4b2c2f471c27", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1610940832949,
        },
        "e-29": {
            id: "e-29",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_SCROLL_UP",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-2", affectedElements: {}, playInReverse: false, autoStopEventId: "e-30" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "600501a03c9a4b2c2f471c27", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "600501a03c9a4b2c2f471c27", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1610940832949,
        },
        "e-30": {
            id: "e-30",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_SCROLL_DOWN",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-3", affectedElements: {}, playInReverse: false, autoStopEventId: "e-29" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "600501a03c9a4b2c2f471c27", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "600501a03c9a4b2c2f471c27", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1610940832949,
        },
        "e-32": {
            id: "e-32",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_FINISH",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a", affectedElements: {}, playInReverse: false, autoStopEventId: "e-31" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "600503d7f587c60cad5d011f", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "600503d7f587c60cad5d011f", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1610941400066,
        },
        "e-33": {
            id: "e-33",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_SCROLL_UP",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-2", affectedElements: {}, playInReverse: false, autoStopEventId: "e-34" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "600503d7f587c60cad5d011f", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "600503d7f587c60cad5d011f", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1610941400066,
        },
        "e-34": {
            id: "e-34",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_SCROLL_DOWN",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-3", affectedElements: {}, playInReverse: false, autoStopEventId: "e-33" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "600503d7f587c60cad5d011f", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "600503d7f587c60cad5d011f", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1610941400066,
        },
        "e-44": {
            id: "e-44",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_FINISH",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a", affectedElements: {}, playInReverse: false, autoStopEventId: "e-43" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "60063706728d4a784cb2a27f", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "60063706728d4a784cb2a27f", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1611020038486,
        },
        "e-45": {
            id: "e-45",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_SCROLL_UP",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-2", affectedElements: {}, playInReverse: false, autoStopEventId: "e-46" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "60063706728d4a784cb2a27f", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "60063706728d4a784cb2a27f", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1611020038486,
        },
        "e-46": {
            id: "e-46",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_SCROLL_DOWN",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-3", affectedElements: {}, playInReverse: false, autoStopEventId: "e-45" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "60063706728d4a784cb2a27f", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "60063706728d4a784cb2a27f", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1611020038486,
        },
        "e-50": {
            id: "e-50",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_FINISH",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a", affectedElements: {}, playInReverse: false, autoStopEventId: "e-49" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "60079c129a3dafa3ca60fc64", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "60079c129a3dafa3ca60fc64", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1611111443304,
        },
        "e-51": {
            id: "e-51",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_SCROLL_UP",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-2", affectedElements: {}, playInReverse: false, autoStopEventId: "e-52" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "60079c129a3dafa3ca60fc64", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "60079c129a3dafa3ca60fc64", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1611111443304,
        },
        "e-52": {
            id: "e-52",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_SCROLL_DOWN",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-3", affectedElements: {}, playInReverse: false, autoStopEventId: "e-51" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "60079c129a3dafa3ca60fc64", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "60079c129a3dafa3ca60fc64", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1611111443304,
        },
        "e-54": {
            id: "e-54",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_FINISH",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a", affectedElements: {}, playInReverse: false, autoStopEventId: "e-53" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "6008d5d9eaaa46212da299ce", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "6008d5d9eaaa46212da299ce", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1611191770367,
        },
        "e-55": {
            id: "e-55",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_SCROLL_UP",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-2", affectedElements: {}, playInReverse: false, autoStopEventId: "e-56" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "6008d5d9eaaa46212da299ce", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "6008d5d9eaaa46212da299ce", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1611191770367,
        },
        "e-56": {
            id: "e-56",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_SCROLL_DOWN",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-3", affectedElements: {}, playInReverse: false, autoStopEventId: "e-55" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "6008d5d9eaaa46212da299ce", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "6008d5d9eaaa46212da299ce", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1611191770367,
        },
        "e-58": {
            id: "e-58",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_FINISH",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a", affectedElements: {}, playInReverse: false, autoStopEventId: "e-57" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "601239db7e98190140150c18", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "601239db7e98190140150c18", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1611807195980,
        },
        "e-59": {
            id: "e-59",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_SCROLL_UP",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-2", affectedElements: {}, playInReverse: false, autoStopEventId: "e-60" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "601239db7e98190140150c18", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "601239db7e98190140150c18", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1611807195980,
        },
        "e-60": {
            id: "e-60",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_SCROLL_DOWN",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-3", affectedElements: {}, playInReverse: false, autoStopEventId: "e-59" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "601239db7e98190140150c18", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "601239db7e98190140150c18", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1611807195980,
        },
        "e-62": {
            id: "e-62",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_FINISH",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a", affectedElements: {}, playInReverse: false, autoStopEventId: "e-61" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "6015cd6226d1525552a94702", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "6015cd6226d1525552a94702", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1612041570646,
        },
        "e-63": {
            id: "e-63",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_SCROLL_UP",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-2", affectedElements: {}, playInReverse: false, autoStopEventId: "e-64" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "6015cd6226d1525552a94702", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "6015cd6226d1525552a94702", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612041570646,
        },
        "e-64": {
            id: "e-64",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_SCROLL_DOWN",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-3", affectedElements: {}, playInReverse: false, autoStopEventId: "e-63" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "6015cd6226d1525552a94702", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "6015cd6226d1525552a94702", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612041570646,
        },
        "e-65": {
            id: "e-65",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: { id: "", actionTypeId: "GENERAL_CONTINUOUS_ACTION", config: { actionListId: "a-16", affectedElements: {}, duration: 0 } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { selector: ".text-banner", originalId: "6015cd6226d1525552a94702|TextBlock 2", appliesTo: "CLASS" },
            targets: [{ selector: ".text-banner", originalId: "6015cd6226d1525552a94702|TextBlock 2", appliesTo: "CLASS" }],
            config: [{ continuousParameterGroupId: "a-16-p", smoothing: 50, startsEntering: true, addStartOffset: false, addOffsetValue: 50, startsExiting: false, addEndOffset: false, endOffsetValue: 50 }],
            createdOn: 1612042577378,
        },
        "e-67": {
            id: "e-67",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_FINISH",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a", affectedElements: {}, playInReverse: false, autoStopEventId: "e-66" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "6015f1eaf1455fa8e245aabf", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "6015f1eaf1455fa8e245aabf", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1612050922876,
        },
        "e-68": {
            id: "e-68",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_SCROLL_UP",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-2", affectedElements: {}, playInReverse: false, autoStopEventId: "e-69" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "6015f1eaf1455fa8e245aabf", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "6015f1eaf1455fa8e245aabf", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612050922876,
        },
        "e-69": {
            id: "e-69",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_SCROLL_DOWN",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-3", affectedElements: {}, playInReverse: false, autoStopEventId: "e-68" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "6015f1eaf1455fa8e245aabf", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "6015f1eaf1455fa8e245aabf", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612050922876,
        },
        "e-71": {
            id: "e-71",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_FINISH",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a", affectedElements: {}, playInReverse: false, autoStopEventId: "e-70" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "601719e859b47539c45d0ae0", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "601719e859b47539c45d0ae0", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1612126696918,
        },
        "e-72": {
            id: "e-72",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_SCROLL_UP",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-2", affectedElements: {}, playInReverse: false, autoStopEventId: "e-73" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "601719e859b47539c45d0ae0", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "601719e859b47539c45d0ae0", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612126696918,
        },
        "e-73": {
            id: "e-73",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_SCROLL_DOWN",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-3", affectedElements: {}, playInReverse: false, autoStopEventId: "e-72" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "601719e859b47539c45d0ae0", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "601719e859b47539c45d0ae0", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612126696918,
        },
        "e-74": {
            id: "e-74",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-17", affectedElements: {}, playInReverse: false, autoStopEventId: "e-75" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { selector: ".accordion-title", originalId: "601239db7e98190140150c18|8a75c62a-c70d-5d3b-99d2-94e3045e3c1c", appliesTo: "CLASS" },
            targets: [{ selector: ".accordion-title", originalId: "601239db7e98190140150c18|8a75c62a-c70d-5d3b-99d2-94e3045e3c1c", appliesTo: "CLASS" }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1612150147427,
        },
        "e-75": {
            id: "e-75",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_SECOND_CLICK",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-18", affectedElements: {}, playInReverse: false, autoStopEventId: "e-74" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { selector: ".accordion-title", originalId: "601239db7e98190140150c18|8a75c62a-c70d-5d3b-99d2-94e3045e3c1c", appliesTo: "CLASS" },
            targets: [{ selector: ".accordion-title", originalId: "601239db7e98190140150c18|8a75c62a-c70d-5d3b-99d2-94e3045e3c1c", appliesTo: "CLASS" }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1612150147429,
        },
        "e-77": {
            id: "e-77",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_FINISH",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a", affectedElements: {}, playInReverse: false, autoStopEventId: "e-76" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "601889b09bb728d9bd3baa7e", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "601889b09bb728d9bd3baa7e", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1612220849114,
        },
        "e-78": {
            id: "e-78",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_SCROLL_UP",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-2", affectedElements: {}, playInReverse: false, autoStopEventId: "e-79" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "601889b09bb728d9bd3baa7e", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "601889b09bb728d9bd3baa7e", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612220849114,
        },
        "e-79": {
            id: "e-79",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_SCROLL_DOWN",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-3", affectedElements: {}, playInReverse: false, autoStopEventId: "e-78" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "601889b09bb728d9bd3baa7e", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "601889b09bb728d9bd3baa7e", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612220849114,
        },
        "e-81": {
            id: "e-81",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_FINISH",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a", affectedElements: {}, playInReverse: false, autoStopEventId: "e-80" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "60188aefb8dba52b1e4a6554", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "60188aefb8dba52b1e4a6554", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1612221167632,
        },
        "e-82": {
            id: "e-82",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_SCROLL_UP",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-2", affectedElements: {}, playInReverse: false, autoStopEventId: "e-83" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "60188aefb8dba52b1e4a6554", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "60188aefb8dba52b1e4a6554", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612221167632,
        },
        "e-83": {
            id: "e-83",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_SCROLL_DOWN",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-3", affectedElements: {}, playInReverse: false, autoStopEventId: "e-82" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "60188aefb8dba52b1e4a6554", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "60188aefb8dba52b1e4a6554", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612221167632,
        },
        "e-85": {
            id: "e-85",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_FINISH",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a", affectedElements: {}, playInReverse: false, autoStopEventId: "e-84" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "5fb1bda997835a607083e6f9", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "5fb1bda997835a607083e6f9", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1612223431609,
        },
        "e-86": {
            id: "e-86",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL_UP",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-2", affectedElements: {}, playInReverse: false, autoStopEventId: "e-87" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "5fb1bda997835a607083e6f9", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "5fb1bda997835a607083e6f9", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612223441191,
        },
        "e-87": {
            id: "e-87",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL_DOWN",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-3", affectedElements: {}, playInReverse: false, autoStopEventId: "e-86" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "5fb1bda997835a607083e6f9", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "5fb1bda997835a607083e6f9", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612223441194,
        },
        "e-89": {
            id: "e-89",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_FINISH",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a", affectedElements: {}, playInReverse: false, autoStopEventId: "e-88" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "6018961da2172664de1beba5", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "6018961da2172664de1beba5", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1612224029810,
        },
        "e-90": {
            id: "e-90",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_SCROLL_UP",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-2", affectedElements: {}, playInReverse: false, autoStopEventId: "e-91" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "6018961da2172664de1beba5", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "6018961da2172664de1beba5", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612224029810,
        },
        "e-91": {
            id: "e-91",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_SCROLL_DOWN",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-3", affectedElements: {}, playInReverse: false, autoStopEventId: "e-90" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "6018961da2172664de1beba5", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "6018961da2172664de1beba5", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612224029810,
        },
        "e-93": {
            id: "e-93",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_FINISH",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a", affectedElements: {}, playInReverse: false, autoStopEventId: "e-92" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "60189ae91751901fb751feec", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "60189ae91751901fb751feec", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1612229699036,
        },
        "e-94": {
            id: "e-94",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL_UP",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-2", affectedElements: {}, playInReverse: false, autoStopEventId: "e-95" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "60189ae91751901fb751feec", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "60189ae91751901fb751feec", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612229709733,
        },
        "e-95": {
            id: "e-95",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL_DOWN",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-3", affectedElements: {}, playInReverse: false, autoStopEventId: "e-94" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "60189ae91751901fb751feec", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "60189ae91751901fb751feec", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612229709736,
        },
        "e-97": {
            id: "e-97",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_FINISH",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a", affectedElements: {}, playInReverse: false, autoStopEventId: "e-96" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "6018b1073b0d58cbfc5fd338", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "6018b1073b0d58cbfc5fd338", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1612230919639,
        },
        "e-98": {
            id: "e-98",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_SCROLL_UP",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-2", affectedElements: {}, playInReverse: false, autoStopEventId: "e-99" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "6018b1073b0d58cbfc5fd338", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "6018b1073b0d58cbfc5fd338", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612230919639,
        },
        "e-99": {
            id: "e-99",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_SCROLL_DOWN",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-3", affectedElements: {}, playInReverse: false, autoStopEventId: "e-98" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "6018b1073b0d58cbfc5fd338", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "6018b1073b0d58cbfc5fd338", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612230919639,
        },
        "e-101": {
            id: "e-101",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_FINISH",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a", affectedElements: {}, playInReverse: false, autoStopEventId: "e-100" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "60189a861474bd73b1bf1624", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "60189a861474bd73b1bf1624", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1612234621629,
        },
        "e-102": {
            id: "e-102",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL_UP",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-2", affectedElements: {}, playInReverse: false, autoStopEventId: "e-103" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "60189a861474bd73b1bf1624", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "60189a861474bd73b1bf1624", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612234627202,
        },
        "e-103": {
            id: "e-103",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL_DOWN",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-3", affectedElements: {}, playInReverse: false, autoStopEventId: "e-102" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "60189a861474bd73b1bf1624", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "60189a861474bd73b1bf1624", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612234627205,
        },
        "e-105": {
            id: "e-105",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_FINISH",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a", affectedElements: {}, playInReverse: false, autoStopEventId: "e-104" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "6018cb772e13f6819a9bb1b9", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "6018cb772e13f6819a9bb1b9", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1612238430866,
        },
        "e-106": {
            id: "e-106",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL_UP",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-2", affectedElements: {}, playInReverse: false, autoStopEventId: "e-107" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "6018cb772e13f6819a9bb1b9", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "6018cb772e13f6819a9bb1b9", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612238436706,
        },
        "e-107": {
            id: "e-107",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL_DOWN",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-3", affectedElements: {}, playInReverse: false, autoStopEventId: "e-106" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "6018cb772e13f6819a9bb1b9", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "6018cb772e13f6819a9bb1b9", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612238436709,
        },
        "e-109": {
            id: "e-109",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_FINISH",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a", affectedElements: {}, playInReverse: false, autoStopEventId: "e-108" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "6018dc8531a6843d3a200732", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "6018dc8531a6843d3a200732", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1612242053934,
        },
        "e-110": {
            id: "e-110",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_SCROLL_UP",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-2", affectedElements: {}, playInReverse: false, autoStopEventId: "e-111" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "6018dc8531a6843d3a200732", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "6018dc8531a6843d3a200732", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612242053934,
        },
        "e-111": {
            id: "e-111",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_SCROLL_DOWN",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-3", affectedElements: {}, playInReverse: false, autoStopEventId: "e-110" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "6018dc8531a6843d3a200732", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "6018dc8531a6843d3a200732", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612242053934,
        },
        "e-113": {
            id: "e-113",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_FINISH",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a", affectedElements: {}, playInReverse: false, autoStopEventId: "e-112" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "6018ddf49614ec759585a83f", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "6018ddf49614ec759585a83f", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1612242421359,
        },
        "e-114": {
            id: "e-114",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_SCROLL_UP",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-2", affectedElements: {}, playInReverse: false, autoStopEventId: "e-115" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "6018ddf49614ec759585a83f", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "6018ddf49614ec759585a83f", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612242421359,
        },
        "e-115": {
            id: "e-115",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_SCROLL_DOWN",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-3", affectedElements: {}, playInReverse: false, autoStopEventId: "e-114" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "6018ddf49614ec759585a83f", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "6018ddf49614ec759585a83f", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612242421359,
        },
        "e-117": {
            id: "e-117",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_FINISH",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a", affectedElements: {}, playInReverse: false, autoStopEventId: "e-116" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "6018de81a8d17f5cc81ec65d", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "6018de81a8d17f5cc81ec65d", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1612242561919,
        },
        "e-118": {
            id: "e-118",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_SCROLL_UP",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-2", affectedElements: {}, playInReverse: false, autoStopEventId: "e-119" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "6018de81a8d17f5cc81ec65d", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "6018de81a8d17f5cc81ec65d", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612242561919,
        },
        "e-119": {
            id: "e-119",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_SCROLL_DOWN",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-3", affectedElements: {}, playInReverse: false, autoStopEventId: "e-118" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "6018de81a8d17f5cc81ec65d", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "6018de81a8d17f5cc81ec65d", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612242561919,
        },
        "e-121": {
            id: "e-121",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_FINISH",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a", affectedElements: {}, playInReverse: false, autoStopEventId: "e-120" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "6018ded0a1b0dd2144e86465", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "6018ded0a1b0dd2144e86465", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1612242640885,
        },
        "e-122": {
            id: "e-122",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_SCROLL_UP",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-2", affectedElements: {}, playInReverse: false, autoStopEventId: "e-123" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "6018ded0a1b0dd2144e86465", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "6018ded0a1b0dd2144e86465", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612242640885,
        },
        "e-123": {
            id: "e-123",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_SCROLL_DOWN",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-3", affectedElements: {}, playInReverse: false, autoStopEventId: "e-122" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "6018ded0a1b0dd2144e86465", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "6018ded0a1b0dd2144e86465", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612242640885,
        },
        "e-124": {
            id: "e-124",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-19", affectedElements: {}, playInReverse: false, autoStopEventId: "e-125" } },
            mediaQueries: ["main"],
            target: { id: "5ffe667d322c895e29c578e3|abffe31c-66dd-18c4-dfbf-1e53567a6e15", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "5ffe667d322c895e29c578e3|abffe31c-66dd-18c4-dfbf-1e53567a6e15", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612305232577,
        },
        "e-126": {
            id: "e-126",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-20", affectedElements: {}, playInReverse: false, autoStopEventId: "e-127" } },
            mediaQueries: ["main"],
            target: { id: "5ffe667d322c895e29c578e3|2d610a07-5f02-e693-f613-ce9db7e567d6", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "5ffe667d322c895e29c578e3|2d610a07-5f02-e693-f613-ce9db7e567d6", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612305344581,
        },
        "e-128": {
            id: "e-128",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-19", affectedElements: {}, playInReverse: false, autoStopEventId: "e-129" } },
            mediaQueries: ["main"],
            target: { id: "5ffe667d322c895e29c578e3|4341e5b3-fcc6-8f12-bf68-7d8176bd10c5", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "5ffe667d322c895e29c578e3|4341e5b3-fcc6-8f12-bf68-7d8176bd10c5", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612305418369,
        },
        "e-130": {
            id: "e-130",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-20", affectedElements: {}, playInReverse: false, autoStopEventId: "e-131" } },
            mediaQueries: ["main"],
            target: { id: "5ffe667d322c895e29c578e3|4341e5b3-fcc6-8f12-bf68-7d8176bd10ca", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "5ffe667d322c895e29c578e3|4341e5b3-fcc6-8f12-bf68-7d8176bd10ca", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612305426693,
        },
        "e-132": {
            id: "e-132",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-19", affectedElements: {}, playInReverse: false, autoStopEventId: "e-133" } },
            mediaQueries: ["main"],
            target: { id: "5ffe667d322c895e29c578e3|20edc4f4-bb27-459a-d86f-2082194c975b", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "5ffe667d322c895e29c578e3|20edc4f4-bb27-459a-d86f-2082194c975b", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612305464727,
        },
        "e-134": {
            id: "e-134",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-20", affectedElements: {}, playInReverse: false, autoStopEventId: "e-135" } },
            mediaQueries: ["main"],
            target: { id: "5ffe667d322c895e29c578e3|f09c2520-3f08-e0de-e03d-b56420f2b4b8", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "5ffe667d322c895e29c578e3|f09c2520-3f08-e0de-e03d-b56420f2b4b8", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612305475268,
        },
        "e-136": {
            id: "e-136",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-19", affectedElements: {}, playInReverse: false, autoStopEventId: "e-137" } },
            mediaQueries: ["main"],
            target: { id: "5ffe667d322c895e29c578e3|361ede12-d410-4d7d-ac7c-28e556451d2a", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "5ffe667d322c895e29c578e3|361ede12-d410-4d7d-ac7c-28e556451d2a", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612305492615,
        },
        "e-138": {
            id: "e-138",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-20", affectedElements: {}, playInReverse: false, autoStopEventId: "e-139" } },
            mediaQueries: ["main"],
            target: { id: "5ffe667d322c895e29c578e3|ec8598f7-5846-b21f-1193-2f12039010b6", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "5ffe667d322c895e29c578e3|ec8598f7-5846-b21f-1193-2f12039010b6", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612305503066,
        },
        "e-140": {
            id: "e-140",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-19", affectedElements: {}, playInReverse: false, autoStopEventId: "e-141" } },
            mediaQueries: ["main"],
            target: { id: "5ffe667d322c895e29c578e3|9e3b86e0-6d7c-c422-13d8-bac574c0d67f", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "5ffe667d322c895e29c578e3|9e3b86e0-6d7c-c422-13d8-bac574c0d67f", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612305517990,
        },
        "e-142": {
            id: "e-142",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-20", affectedElements: {}, playInReverse: false, autoStopEventId: "e-143" } },
            mediaQueries: ["main"],
            target: { id: "5ffe667d322c895e29c578e3|275cd0a0-0c4a-16d0-2b20-cdc38fc63313", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "5ffe667d322c895e29c578e3|275cd0a0-0c4a-16d0-2b20-cdc38fc63313", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612305526239,
        },
        "e-144": {
            id: "e-144",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-19", affectedElements: {}, playInReverse: false, autoStopEventId: "e-145" } },
            mediaQueries: ["main"],
            target: { id: "5ffe667d322c895e29c578e3|d6640148-1cb6-493d-5db5-4a7589733510", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "5ffe667d322c895e29c578e3|d6640148-1cb6-493d-5db5-4a7589733510", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612305540329,
        },
        "e-146": {
            id: "e-146",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-20", affectedElements: {}, playInReverse: false, autoStopEventId: "e-147" } },
            mediaQueries: ["main"],
            target: { id: "5ffe667d322c895e29c578e3|f1aa7184-1246-9145-01db-1b6834ad70ab", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "5ffe667d322c895e29c578e3|f1aa7184-1246-9145-01db-1b6834ad70ab", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612305549739,
        },
        "e-148": {
            id: "e-148",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-19", affectedElements: {}, playInReverse: false, autoStopEventId: "e-149" } },
            mediaQueries: ["main"],
            target: { id: "5ffe667d322c895e29c578e3|c4ab264d-6d8b-883d-9b57-518750d699ab", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "5ffe667d322c895e29c578e3|c4ab264d-6d8b-883d-9b57-518750d699ab", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612305606421,
        },
        "e-150": {
            id: "e-150",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-20", affectedElements: {}, playInReverse: false, autoStopEventId: "e-151" } },
            mediaQueries: ["main"],
            target: { id: "5ffe667d322c895e29c578e3|76aeb652-0d65-a2a6-180b-cab9dd812a2c", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "5ffe667d322c895e29c578e3|76aeb652-0d65-a2a6-180b-cab9dd812a2c", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612305617010,
        },
        "e-152": {
            id: "e-152",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-19", affectedElements: {}, playInReverse: false, autoStopEventId: "e-153" } },
            mediaQueries: ["main"],
            target: { id: "5ffe667d322c895e29c578e3|5641525c-b442-8078-19a5-0032a15fcf2a", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "5ffe667d322c895e29c578e3|5641525c-b442-8078-19a5-0032a15fcf2a", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612305629904,
        },
        "e-154": {
            id: "e-154",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-20", affectedElements: {}, playInReverse: false, autoStopEventId: "e-155" } },
            mediaQueries: ["main"],
            target: { id: "5ffe667d322c895e29c578e3|751e71d0-f663-7545-110d-0628b492d0de", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "5ffe667d322c895e29c578e3|751e71d0-f663-7545-110d-0628b492d0de", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612305640076,
        },
        "e-156": {
            id: "e-156",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-19", affectedElements: {}, playInReverse: false, autoStopEventId: "e-157" } },
            mediaQueries: ["main"],
            target: { id: "5ffe667d322c895e29c578e3|24acfd3f-2093-c375-a481-2bf090805228", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "5ffe667d322c895e29c578e3|24acfd3f-2093-c375-a481-2bf090805228", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612305651011,
        },
        "e-158": {
            id: "e-158",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-20", affectedElements: {}, playInReverse: false, autoStopEventId: "e-159" } },
            mediaQueries: ["main"],
            target: { id: "5ffe667d322c895e29c578e3|da1ec357-ba45-8ed1-846c-475ff6ca5492", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "5ffe667d322c895e29c578e3|da1ec357-ba45-8ed1-846c-475ff6ca5492", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612305660046,
        },
        "e-160": {
            id: "e-160",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-19", affectedElements: {}, playInReverse: false, autoStopEventId: "e-161" } },
            mediaQueries: ["main"],
            target: { id: "5ffe667d322c895e29c578e3|386236a3-3c26-2b5d-3d02-bd7b6a794c65", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "5ffe667d322c895e29c578e3|386236a3-3c26-2b5d-3d02-bd7b6a794c65", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612305672593,
        },
        "e-162": {
            id: "e-162",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-20", affectedElements: {}, playInReverse: false, autoStopEventId: "e-163" } },
            mediaQueries: ["main"],
            target: { id: "5ffe667d322c895e29c578e3|6fd52d56-d1d6-6d40-dda3-727af42938bf", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "5ffe667d322c895e29c578e3|6fd52d56-d1d6-6d40-dda3-727af42938bf", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612305681739,
        },
        "e-164": {
            id: "e-164",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-19", affectedElements: {}, playInReverse: false, autoStopEventId: "e-165" } },
            mediaQueries: ["main"],
            target: { id: "5ffe667d322c895e29c578e3|5bccf35b-877e-cbab-8ee1-21ed4bc3469f", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "5ffe667d322c895e29c578e3|5bccf35b-877e-cbab-8ee1-21ed4bc3469f", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612305709145,
        },
        "e-166": {
            id: "e-166",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-20", affectedElements: {}, playInReverse: false, autoStopEventId: "e-167" } },
            mediaQueries: ["main"],
            target: { id: "5ffe667d322c895e29c578e3|b3849097-4d87-27d4-a6bf-543d3a7ab22c", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "5ffe667d322c895e29c578e3|b3849097-4d87-27d4-a6bf-543d3a7ab22c", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612305718022,
        },
        "e-168": {
            id: "e-168",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-19", affectedElements: {}, playInReverse: false, autoStopEventId: "e-169" } },
            mediaQueries: ["main"],
            target: { id: "60079c129a3dafa3ca60fc64|c0f04a24-ad95-d153-df50-f684bd8bced1", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "60079c129a3dafa3ca60fc64|c0f04a24-ad95-d153-df50-f684bd8bced1", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612305743912,
        },
        "e-170": {
            id: "e-170",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-20", affectedElements: {}, playInReverse: false, autoStopEventId: "e-171" } },
            mediaQueries: ["main"],
            target: { id: "60079c129a3dafa3ca60fc64|1e985d89-682d-ff56-8e8e-d8401c225121", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "60079c129a3dafa3ca60fc64|1e985d89-682d-ff56-8e8e-d8401c225121", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612305752404,
        },
        "e-172": {
            id: "e-172",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-19", affectedElements: {}, playInReverse: false, autoStopEventId: "e-173" } },
            mediaQueries: ["main"],
            target: { id: "60079c129a3dafa3ca60fc64|4d646791-a5d6-6440-a0bf-e41d2a3531bc", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "60079c129a3dafa3ca60fc64|4d646791-a5d6-6440-a0bf-e41d2a3531bc", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612305767304,
        },
        "e-174": {
            id: "e-174",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-20", affectedElements: {}, playInReverse: false, autoStopEventId: "e-175" } },
            mediaQueries: ["main"],
            target: { id: "60079c129a3dafa3ca60fc64|e92ef73b-5635-56ff-e953-b79141e45d0e", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "60079c129a3dafa3ca60fc64|e92ef73b-5635-56ff-e953-b79141e45d0e", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612305776033,
        },
        "e-176": {
            id: "e-176",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-19", affectedElements: {}, playInReverse: false, autoStopEventId: "e-177" } },
            mediaQueries: ["main"],
            target: { id: "601239db7e98190140150c18|0fbba7da-fe95-24de-cc0c-2bdd64379a8f", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "601239db7e98190140150c18|0fbba7da-fe95-24de-cc0c-2bdd64379a8f", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612305835932,
        },
        "e-178": {
            id: "e-178",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-20", affectedElements: {}, playInReverse: false, autoStopEventId: "e-179" } },
            mediaQueries: ["main"],
            target: { id: "601239db7e98190140150c18|a954bef4-c961-065e-67a0-7e78a1fc007f", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "601239db7e98190140150c18|a954bef4-c961-065e-67a0-7e78a1fc007f", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612305848655,
        },
        "e-180": {
            id: "e-180",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-19", affectedElements: {}, playInReverse: false, autoStopEventId: "e-181" } },
            mediaQueries: ["main"],
            target: { id: "60063706728d4a784cb2a27f|0df76f32-a260-692b-d224-f56fb49d494d", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "60063706728d4a784cb2a27f|0df76f32-a260-692b-d224-f56fb49d494d", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612305875160,
        },
        "e-182": {
            id: "e-182",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-20", affectedElements: {}, playInReverse: false, autoStopEventId: "e-183" } },
            mediaQueries: ["main"],
            target: { id: "60063706728d4a784cb2a27f|e538c66b-66b9-5788-67c1-7f764163cee3", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "60063706728d4a784cb2a27f|e538c66b-66b9-5788-67c1-7f764163cee3", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612305884206,
        },
        "e-184": {
            id: "e-184",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-19", affectedElements: {}, playInReverse: false, autoStopEventId: "e-185" } },
            mediaQueries: ["main"],
            target: { id: "60063706728d4a784cb2a27f|40102be5-0941-e452-bcdb-58b369822013", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "60063706728d4a784cb2a27f|40102be5-0941-e452-bcdb-58b369822013", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612305895082,
        },
        "e-186": {
            id: "e-186",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-20", affectedElements: {}, playInReverse: false, autoStopEventId: "e-187" } },
            mediaQueries: ["main"],
            target: { id: "60063706728d4a784cb2a27f|c9273137-b87b-3319-4f30-83219aec8184", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "60063706728d4a784cb2a27f|c9273137-b87b-3319-4f30-83219aec8184", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612305903203,
        },
        "e-188": {
            id: "e-188",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-19", affectedElements: {}, playInReverse: false, autoStopEventId: "e-189" } },
            mediaQueries: ["main"],
            target: { id: "60063706728d4a784cb2a27f|7c6a967c-1ab3-3839-d727-b5cd6668d2c0", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "60063706728d4a784cb2a27f|7c6a967c-1ab3-3839-d727-b5cd6668d2c0", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612305915924,
        },
        "e-190": {
            id: "e-190",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-20", affectedElements: {}, playInReverse: false, autoStopEventId: "e-191" } },
            mediaQueries: ["main"],
            target: { id: "60063706728d4a784cb2a27f|7c6a967c-1ab3-3839-d727-b5cd6668d2c5", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "60063706728d4a784cb2a27f|7c6a967c-1ab3-3839-d727-b5cd6668d2c5", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612305925205,
        },
        "e-192": {
            id: "e-192",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-19", affectedElements: {}, playInReverse: false, autoStopEventId: "e-193" } },
            mediaQueries: ["main"],
            target: { id: "6008d5d9eaaa46212da299ce|ab0bff81-c3e5-d063-4659-c7d4bb867049", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "6008d5d9eaaa46212da299ce|ab0bff81-c3e5-d063-4659-c7d4bb867049", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612305942443,
        },
        "e-194": {
            id: "e-194",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-20", affectedElements: {}, playInReverse: false, autoStopEventId: "e-195" } },
            mediaQueries: ["main"],
            target: { id: "6008d5d9eaaa46212da299ce|ab0bff81-c3e5-d063-4659-c7d4bb867052", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "6008d5d9eaaa46212da299ce|ab0bff81-c3e5-d063-4659-c7d4bb867052", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612305950041,
        },
        "e-196": {
            id: "e-196",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-19", affectedElements: {}, playInReverse: false, autoStopEventId: "e-197" } },
            mediaQueries: ["main"],
            target: { id: "6008d5d9eaaa46212da299ce|764f128f-9af2-ca4f-0f00-49891004167e", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "6008d5d9eaaa46212da299ce|764f128f-9af2-ca4f-0f00-49891004167e", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612305964739,
        },
        "e-198": {
            id: "e-198",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-20", affectedElements: {}, playInReverse: false, autoStopEventId: "e-199" } },
            mediaQueries: ["main"],
            target: { id: "6008d5d9eaaa46212da299ce|394744dd-f9ae-538f-2cff-a42e1ff65e19", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "6008d5d9eaaa46212da299ce|394744dd-f9ae-538f-2cff-a42e1ff65e19", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612305973055,
        },
        "e-200": {
            id: "e-200",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-19", affectedElements: {}, playInReverse: false, autoStopEventId: "e-201" } },
            mediaQueries: ["main"],
            target: { id: "6008d5d9eaaa46212da299ce|e7d64065-a280-8b14-7e66-087155b59cb2", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "6008d5d9eaaa46212da299ce|e7d64065-a280-8b14-7e66-087155b59cb2", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612305982231,
        },
        "e-202": {
            id: "e-202",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-20", affectedElements: {}, playInReverse: false, autoStopEventId: "e-203" } },
            mediaQueries: ["main"],
            target: { id: "6008d5d9eaaa46212da299ce|6a37b509-1ce5-b3b8-c907-7214b5b6e154", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "6008d5d9eaaa46212da299ce|6a37b509-1ce5-b3b8-c907-7214b5b6e154", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612305989448,
        },
        "e-204": {
            id: "e-204",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-19", affectedElements: {}, playInReverse: false, autoStopEventId: "e-205" } },
            mediaQueries: ["main"],
            target: { id: "6008d5d9eaaa46212da299ce|8b1fa668-cbb5-beed-e751-280b8336c167", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "6008d5d9eaaa46212da299ce|8b1fa668-cbb5-beed-e751-280b8336c167", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612306001384,
        },
        "e-206": {
            id: "e-206",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-20", affectedElements: {}, playInReverse: false, autoStopEventId: "e-207" } },
            mediaQueries: ["main"],
            target: { id: "6008d5d9eaaa46212da299ce|ba06df7f-56cc-437a-ecee-1f17a3cbfb21", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "6008d5d9eaaa46212da299ce|ba06df7f-56cc-437a-ecee-1f17a3cbfb21", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612306009333,
        },
        "e-208": {
            id: "e-208",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-19", affectedElements: {}, playInReverse: false, autoStopEventId: "e-209" } },
            mediaQueries: ["main"],
            target: { id: "6008d5d9eaaa46212da299ce|3e6b1048-1627-877d-956d-b0f3533f0049", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "6008d5d9eaaa46212da299ce|3e6b1048-1627-877d-956d-b0f3533f0049", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612306032258,
        },
        "e-210": {
            id: "e-210",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-20", affectedElements: {}, playInReverse: false, autoStopEventId: "e-211" } },
            mediaQueries: ["main"],
            target: { id: "6008d5d9eaaa46212da299ce|e2345dcd-1df6-ba9b-0ffd-d82d77125f1c", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "6008d5d9eaaa46212da299ce|e2345dcd-1df6-ba9b-0ffd-d82d77125f1c", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612306041044,
        },
        "e-212": {
            id: "e-212",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-21", affectedElements: {}, playInReverse: false, autoStopEventId: "e-213" } },
            mediaQueries: ["main"],
            target: { id: "6008d5d9eaaa46212da299ce|ad520271-62dd-e639-d51d-5535d35c499a", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "6008d5d9eaaa46212da299ce|ad520271-62dd-e639-d51d-5535d35c499a", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612306144855,
        },
        "e-214": {
            id: "e-214",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-19", affectedElements: {}, playInReverse: false, autoStopEventId: "e-215" } },
            mediaQueries: ["main"],
            target: { id: "600503d7f587c60cad5d011f|244ccd2e-2fbd-4d5d-f61c-7640574399ee", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "600503d7f587c60cad5d011f|244ccd2e-2fbd-4d5d-f61c-7640574399ee", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612306187414,
        },
        "e-216": {
            id: "e-216",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-20", affectedElements: {}, playInReverse: false, autoStopEventId: "e-217" } },
            mediaQueries: ["main"],
            target: { id: "600503d7f587c60cad5d011f|e9875525-aa41-1f02-1e6c-28c87272531f", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "600503d7f587c60cad5d011f|e9875525-aa41-1f02-1e6c-28c87272531f", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612306195834,
        },
        "e-218": {
            id: "e-218",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-19", affectedElements: {}, playInReverse: false, autoStopEventId: "e-219" } },
            mediaQueries: ["main"],
            target: { id: "600503d7f587c60cad5d011f|aa725fb3-0e43-5b70-16cf-3cd06bc1564e", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "600503d7f587c60cad5d011f|aa725fb3-0e43-5b70-16cf-3cd06bc1564e", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612306205890,
        },
        "e-220": {
            id: "e-220",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-20", affectedElements: {}, playInReverse: false, autoStopEventId: "e-221" } },
            mediaQueries: ["main"],
            target: { id: "600503d7f587c60cad5d011f|aa725fb3-0e43-5b70-16cf-3cd06bc15644", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "600503d7f587c60cad5d011f|aa725fb3-0e43-5b70-16cf-3cd06bc15644", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612306215572,
        },
        "e-222": {
            id: "e-222",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-19", affectedElements: {}, playInReverse: false, autoStopEventId: "e-223" } },
            mediaQueries: ["main"],
            target: { id: "600503d7f587c60cad5d011f|db4bf93b-e071-6daf-f549-b077a9cd2657", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "600503d7f587c60cad5d011f|db4bf93b-e071-6daf-f549-b077a9cd2657", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612306227887,
        },
        "e-224": {
            id: "e-224",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-20", affectedElements: {}, playInReverse: false, autoStopEventId: "e-225" } },
            mediaQueries: ["main"],
            target: { id: "600503d7f587c60cad5d011f|0f9f588b-1464-3f25-bb6f-a8def00092eb", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "600503d7f587c60cad5d011f|0f9f588b-1464-3f25-bb6f-a8def00092eb", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612306236304,
        },
        "e-226": {
            id: "e-226",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-21", affectedElements: {}, playInReverse: false, autoStopEventId: "e-227" } },
            mediaQueries: ["main"],
            target: { id: "600503d7f587c60cad5d011f|663c5b45-d1c9-1b55-750d-bcc4f70d5ae3", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "600503d7f587c60cad5d011f|663c5b45-d1c9-1b55-750d-bcc4f70d5ae3", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612306243734,
        },
        "e-228": {
            id: "e-228",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-19", affectedElements: {}, playInReverse: false, autoStopEventId: "e-229" } },
            mediaQueries: ["main"],
            target: { id: "600503d7f587c60cad5d011f|06d9cb88-8cad-0087-b1da-b17067672dc1", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "600503d7f587c60cad5d011f|06d9cb88-8cad-0087-b1da-b17067672dc1", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612306257078,
        },
        "e-230": {
            id: "e-230",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-20", affectedElements: {}, playInReverse: false, autoStopEventId: "e-231" } },
            mediaQueries: ["main"],
            target: { id: "600503d7f587c60cad5d011f|1dc3320c-dc81-83cb-8ba8-df046c818be3", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "600503d7f587c60cad5d011f|1dc3320c-dc81-83cb-8ba8-df046c818be3", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612306267177,
        },
        "e-232": {
            id: "e-232",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-21", affectedElements: {}, playInReverse: false, autoStopEventId: "e-233" } },
            mediaQueries: ["main"],
            target: { id: "600503d7f587c60cad5d011f|39c16592-993c-518d-3c88-e0425f43ada8", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "600503d7f587c60cad5d011f|39c16592-993c-518d-3c88-e0425f43ada8", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612306276909,
        },
        "e-234": {
            id: "e-234",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-19", affectedElements: {}, playInReverse: false, autoStopEventId: "e-235" } },
            mediaQueries: ["main"],
            target: { id: "600503d7f587c60cad5d011f|c8b759c8-818c-9ea8-25e9-f47094171740", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "600503d7f587c60cad5d011f|c8b759c8-818c-9ea8-25e9-f47094171740", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612306298343,
        },
        "e-236": {
            id: "e-236",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-20", affectedElements: {}, playInReverse: false, autoStopEventId: "e-237" } },
            mediaQueries: ["main"],
            target: { id: "600503d7f587c60cad5d011f|b0a1ccd3-4a0c-7471-0c7e-f32c2e27f346", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "600503d7f587c60cad5d011f|b0a1ccd3-4a0c-7471-0c7e-f32c2e27f346", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612306307595,
        },
        "e-238": {
            id: "e-238",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-19", affectedElements: {}, playInReverse: false, autoStopEventId: "e-239" } },
            mediaQueries: ["main"],
            target: { id: "6015cd6226d1525552a94702|88395ef1-aa03-a278-9b74-61591a7ed430", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "6015cd6226d1525552a94702|88395ef1-aa03-a278-9b74-61591a7ed430", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612306351893,
        },
        "e-240": {
            id: "e-240",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-20", affectedElements: {}, playInReverse: false, autoStopEventId: "e-241" } },
            mediaQueries: ["main"],
            target: { id: "6015cd6226d1525552a94702|e5c4cbfd-1168-79f1-d58e-991d2cfa11e9", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "6015cd6226d1525552a94702|e5c4cbfd-1168-79f1-d58e-991d2cfa11e9", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612306363672,
        },
        "e-242": {
            id: "e-242",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-19", affectedElements: {}, playInReverse: false, autoStopEventId: "e-243" } },
            mediaQueries: ["main"],
            target: { id: "6015cd6226d1525552a94702|52fd4114-6133-eddb-d08c-7081a2f92a8e", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "6015cd6226d1525552a94702|52fd4114-6133-eddb-d08c-7081a2f92a8e", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612306377523,
        },
        "e-244": {
            id: "e-244",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-20", affectedElements: {}, playInReverse: false, autoStopEventId: "e-245" } },
            mediaQueries: ["main"],
            target: { id: "6015cd6226d1525552a94702|52fd4114-6133-eddb-d08c-7081a2f92a93", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "6015cd6226d1525552a94702|52fd4114-6133-eddb-d08c-7081a2f92a93", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612306385292,
        },
        "e-247": {
            id: "e-247",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_FINISH",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a", affectedElements: {}, playInReverse: false, autoStopEventId: "e-246" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "6019dee213e5a456b2408080", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "6019dee213e5a456b2408080", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1612308194959,
        },
        "e-248": {
            id: "e-248",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_SCROLL_UP",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-2", affectedElements: {}, playInReverse: false, autoStopEventId: "e-249" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "6019dee213e5a456b2408080", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "6019dee213e5a456b2408080", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612308194959,
        },
        "e-249": {
            id: "e-249",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_SCROLL_DOWN",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-3", affectedElements: {}, playInReverse: false, autoStopEventId: "e-248" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "6019dee213e5a456b2408080", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "6019dee213e5a456b2408080", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612308194959,
        },
        "e-251": {
            id: "e-251",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_FINISH",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a", affectedElements: {}, playInReverse: false, autoStopEventId: "e-250" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "6019df4ab12924621c3caa14", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "6019df4ab12924621c3caa14", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1612308298690,
        },
        "e-252": {
            id: "e-252",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_SCROLL_UP",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-2", affectedElements: {}, playInReverse: false, autoStopEventId: "e-253" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "6019df4ab12924621c3caa14", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "6019df4ab12924621c3caa14", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612308298690,
        },
        "e-253": {
            id: "e-253",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_SCROLL_DOWN",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-3", affectedElements: {}, playInReverse: false, autoStopEventId: "e-252" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "6019df4ab12924621c3caa14", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "6019df4ab12924621c3caa14", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612308298690,
        },
        "e-255": {
            id: "e-255",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_FINISH",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a", affectedElements: {}, playInReverse: false, autoStopEventId: "e-254" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "6019e89f1f0ce4ebf1aea0d5", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "6019e89f1f0ce4ebf1aea0d5", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1612310688276,
        },
        "e-256": {
            id: "e-256",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_SCROLL_UP",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-2", affectedElements: {}, playInReverse: false, autoStopEventId: "e-257" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "6019e89f1f0ce4ebf1aea0d5", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "6019e89f1f0ce4ebf1aea0d5", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612310688276,
        },
        "e-257": {
            id: "e-257",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_SCROLL_DOWN",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-3", affectedElements: {}, playInReverse: false, autoStopEventId: "e-256" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "6019e89f1f0ce4ebf1aea0d5", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "6019e89f1f0ce4ebf1aea0d5", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612310688276,
        },
        "e-258": {
            id: "e-258",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-19", affectedElements: {}, playInReverse: false, autoStopEventId: "e-259" } },
            mediaQueries: ["main"],
            target: { id: "6018961da2172664de1beba5|9ac9cba3-dc46-e08e-6181-dc0553b80828", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "6018961da2172664de1beba5|9ac9cba3-dc46-e08e-6181-dc0553b80828", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612312104000,
        },
        "e-260": {
            id: "e-260",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-20", affectedElements: {}, playInReverse: false, autoStopEventId: "e-261" } },
            mediaQueries: ["main"],
            target: { id: "6018961da2172664de1beba5|9ac9cba3-dc46-e08e-6181-dc0553b80830", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "6018961da2172664de1beba5|9ac9cba3-dc46-e08e-6181-dc0553b80830", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612312104000,
        },
        "e-262": {
            id: "e-262",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-19", affectedElements: {}, playInReverse: false, autoStopEventId: "e-263" } },
            mediaQueries: ["main"],
            target: { id: "6018961da2172664de1beba5|436e2db6-6182-f23b-5b08-24d20fd09816", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "6018961da2172664de1beba5|436e2db6-6182-f23b-5b08-24d20fd09816", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612312178758,
        },
        "e-264": {
            id: "e-264",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-20", affectedElements: {}, playInReverse: false, autoStopEventId: "e-265" } },
            mediaQueries: ["main"],
            target: { id: "6018961da2172664de1beba5|436e2db6-6182-f23b-5b08-24d20fd09820", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "6018961da2172664de1beba5|436e2db6-6182-f23b-5b08-24d20fd09820", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612312178758,
        },
        "e-266": {
            id: "e-266",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-19", affectedElements: {}, playInReverse: false, autoStopEventId: "e-267" } },
            mediaQueries: ["main"],
            target: { id: "6018961da2172664de1beba5|0f314b51-8eb5-cf8c-6236-80d7ffd09183", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "6018961da2172664de1beba5|0f314b51-8eb5-cf8c-6236-80d7ffd09183", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612312194173,
        },
        "e-268": {
            id: "e-268",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-20", affectedElements: {}, playInReverse: false, autoStopEventId: "e-269" } },
            mediaQueries: ["main"],
            target: { id: "6018961da2172664de1beba5|0f314b51-8eb5-cf8c-6236-80d7ffd09185", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "6018961da2172664de1beba5|0f314b51-8eb5-cf8c-6236-80d7ffd09185", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612312194173,
        },
        "e-270": {
            id: "e-270",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-19", affectedElements: {}, playInReverse: false, autoStopEventId: "e-271" } },
            mediaQueries: ["main"],
            target: { id: "6018961da2172664de1beba5|55bbbcf4-0232-c595-d5a9-881ab810f249", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "6018961da2172664de1beba5|55bbbcf4-0232-c595-d5a9-881ab810f249", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612312237514,
        },
        "e-272": {
            id: "e-272",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-20", affectedElements: {}, playInReverse: false, autoStopEventId: "e-273" } },
            mediaQueries: ["main"],
            target: { id: "6018961da2172664de1beba5|55bbbcf4-0232-c595-d5a9-881ab810f24b", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "6018961da2172664de1beba5|55bbbcf4-0232-c595-d5a9-881ab810f24b", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612312237514,
        },
        "e-274": {
            id: "e-274",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-19", affectedElements: {}, playInReverse: false, autoStopEventId: "e-275" } },
            mediaQueries: ["main"],
            target: { id: "6018961da2172664de1beba5|2617cfcb-be7c-6491-a3da-cf93acb1fefd", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "6018961da2172664de1beba5|2617cfcb-be7c-6491-a3da-cf93acb1fefd", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612312247049,
        },
        "e-276": {
            id: "e-276",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-20", affectedElements: {}, playInReverse: false, autoStopEventId: "e-277" } },
            mediaQueries: ["main"],
            target: { id: "6018961da2172664de1beba5|2617cfcb-be7c-6491-a3da-cf93acb1ff03", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "6018961da2172664de1beba5|2617cfcb-be7c-6491-a3da-cf93acb1ff03", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612312247049,
        },
        "e-279": {
            id: "e-279",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_FINISH",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a", affectedElements: {}, playInReverse: false, autoStopEventId: "e-278" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "6019ef38a8482d7eeb8f8cf2", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "6019ef38a8482d7eeb8f8cf2", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1612312377414,
        },
        "e-280": {
            id: "e-280",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_SCROLL_UP",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-2", affectedElements: {}, playInReverse: false, autoStopEventId: "e-281" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "6019ef38a8482d7eeb8f8cf2", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "6019ef38a8482d7eeb8f8cf2", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612312377414,
        },
        "e-281": {
            id: "e-281",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_SCROLL_DOWN",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-3", affectedElements: {}, playInReverse: false, autoStopEventId: "e-280" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "6019ef38a8482d7eeb8f8cf2", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "6019ef38a8482d7eeb8f8cf2", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612312377414,
        },
        "e-282": {
            id: "e-282",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-19", affectedElements: {}, playInReverse: false, autoStopEventId: "e-283" } },
            mediaQueries: ["main"],
            target: { id: "6019ef38a8482d7eeb8f8cf2|a9c74e52-b6e1-5d58-ffdb-2facb3014106", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "6019ef38a8482d7eeb8f8cf2|a9c74e52-b6e1-5d58-ffdb-2facb3014106", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612312416388,
        },
        "e-284": {
            id: "e-284",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-20", affectedElements: {}, playInReverse: false, autoStopEventId: "e-285" } },
            mediaQueries: ["main"],
            target: { id: "6019ef38a8482d7eeb8f8cf2|a9c74e52-b6e1-5d58-ffdb-2facb3014113", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "6019ef38a8482d7eeb8f8cf2|a9c74e52-b6e1-5d58-ffdb-2facb3014113", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612312416388,
        },
        "e-286": {
            id: "e-286",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-21", affectedElements: {}, playInReverse: false, autoStopEventId: "e-287" } },
            mediaQueries: ["main"],
            target: { id: "6019ef38a8482d7eeb8f8cf2|a9c74e52-b6e1-5d58-ffdb-2facb3014120", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "6019ef38a8482d7eeb8f8cf2|a9c74e52-b6e1-5d58-ffdb-2facb3014120", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612312416388,
        },
        "e-288": {
            id: "e-288",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-19", affectedElements: {}, playInReverse: false, autoStopEventId: "e-289" } },
            mediaQueries: ["main"],
            target: { id: "6019ef38a8482d7eeb8f8cf2|a5d12aa8-c2aa-ebb6-0a43-560433eb4490", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "6019ef38a8482d7eeb8f8cf2|a5d12aa8-c2aa-ebb6-0a43-560433eb4490", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612312446098,
        },
        "e-290": {
            id: "e-290",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-20", affectedElements: {}, playInReverse: false, autoStopEventId: "e-291" } },
            mediaQueries: ["main"],
            target: { id: "6019ef38a8482d7eeb8f8cf2|a5d12aa8-c2aa-ebb6-0a43-560433eb4498", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "6019ef38a8482d7eeb8f8cf2|a5d12aa8-c2aa-ebb6-0a43-560433eb4498", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612312446098,
        },
        "e-292": {
            id: "e-292",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-20", affectedElements: {}, playInReverse: false, autoStopEventId: "e-293" } },
            mediaQueries: ["main"],
            target: { id: "6019ef38a8482d7eeb8f8cf2|bcf3c809-3657-ba5a-0d2d-ff3dff7954d1", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "6019ef38a8482d7eeb8f8cf2|bcf3c809-3657-ba5a-0d2d-ff3dff7954d1", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612312491205,
        },
        "e-294": {
            id: "e-294",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-19", affectedElements: {}, playInReverse: false, autoStopEventId: "e-295" } },
            mediaQueries: ["main"],
            target: { id: "6019ef38a8482d7eeb8f8cf2|bcf3c809-3657-ba5a-0d2d-ff3dff7954db", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "6019ef38a8482d7eeb8f8cf2|bcf3c809-3657-ba5a-0d2d-ff3dff7954db", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612312491205,
        },
        "e-296": {
            id: "e-296",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-19", affectedElements: {}, playInReverse: false, autoStopEventId: "e-297" } },
            mediaQueries: ["main"],
            target: { id: "6019ef38a8482d7eeb8f8cf2|ed7505a0-4773-a5be-ea53-8b7f8e8ea958", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "6019ef38a8482d7eeb8f8cf2|ed7505a0-4773-a5be-ea53-8b7f8e8ea958", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612312520281,
        },
        "e-298": {
            id: "e-298",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-20", affectedElements: {}, playInReverse: false, autoStopEventId: "e-299" } },
            mediaQueries: ["main"],
            target: { id: "6019ef38a8482d7eeb8f8cf2|ed7505a0-4773-a5be-ea53-8b7f8e8ea95e", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "6019ef38a8482d7eeb8f8cf2|ed7505a0-4773-a5be-ea53-8b7f8e8ea95e", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612312520281,
        },
        "e-301": {
            id: "e-301",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_FINISH",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a", affectedElements: {}, playInReverse: false, autoStopEventId: "e-300" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "6019fb412536e0e4a3f91be5", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "6019fb412536e0e4a3f91be5", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1612315457574,
        },
        "e-302": {
            id: "e-302",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_SCROLL_UP",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-2", affectedElements: {}, playInReverse: false, autoStopEventId: "e-303" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "6019fb412536e0e4a3f91be5", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "6019fb412536e0e4a3f91be5", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612315457574,
        },
        "e-303": {
            id: "e-303",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_SCROLL_DOWN",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-3", affectedElements: {}, playInReverse: false, autoStopEventId: "e-302" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "6019fb412536e0e4a3f91be5", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "6019fb412536e0e4a3f91be5", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612315457574,
        },
        "e-305": {
            id: "e-305",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_FINISH",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a", affectedElements: {}, playInReverse: false, autoStopEventId: "e-304" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "6019fc429395e24dbd02090c", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "6019fc429395e24dbd02090c", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1612315714384,
        },
        "e-306": {
            id: "e-306",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_SCROLL_UP",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-2", affectedElements: {}, playInReverse: false, autoStopEventId: "e-307" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "6019fc429395e24dbd02090c", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "6019fc429395e24dbd02090c", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612315714384,
        },
        "e-307": {
            id: "e-307",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_SCROLL_DOWN",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-3", affectedElements: {}, playInReverse: false, autoStopEventId: "e-306" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "6019fc429395e24dbd02090c", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "6019fc429395e24dbd02090c", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612315714384,
        },
        "e-308": {
            id: "e-308",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-19", affectedElements: {}, playInReverse: false, autoStopEventId: "e-309" } },
            mediaQueries: ["main"],
            target: { id: "6019fb412536e0e4a3f91be5|2538afa6-c8a4-dcff-3e4e-335662ce4ecc", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "6019fb412536e0e4a3f91be5|2538afa6-c8a4-dcff-3e4e-335662ce4ecc", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612315742007,
        },
        "e-310": {
            id: "e-310",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-20", affectedElements: {}, playInReverse: false, autoStopEventId: "e-311" } },
            mediaQueries: ["main"],
            target: { id: "6019fb412536e0e4a3f91be5|2538afa6-c8a4-dcff-3e4e-335662ce4ece", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "6019fb412536e0e4a3f91be5|2538afa6-c8a4-dcff-3e4e-335662ce4ece", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612315742007,
        },
        "e-313": {
            id: "e-313",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_FINISH",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a", affectedElements: {}, playInReverse: false, autoStopEventId: "e-312" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "6019ff90d9d5624540a39054", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "6019ff90d9d5624540a39054", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1612316560529,
        },
        "e-314": {
            id: "e-314",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_SCROLL_UP",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-2", affectedElements: {}, playInReverse: false, autoStopEventId: "e-315" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "6019ff90d9d5624540a39054", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "6019ff90d9d5624540a39054", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612316560529,
        },
        "e-315": {
            id: "e-315",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_SCROLL_DOWN",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-3", affectedElements: {}, playInReverse: false, autoStopEventId: "e-314" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "6019ff90d9d5624540a39054", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "6019ff90d9d5624540a39054", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612316560529,
        },
        "e-316": {
            id: "e-316",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-19", affectedElements: {}, playInReverse: false, autoStopEventId: "e-317" } },
            mediaQueries: ["main"],
            target: { id: "6019ff90d9d5624540a39054|2538afa6-c8a4-dcff-3e4e-335662ce4ecc", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "6019ff90d9d5624540a39054|2538afa6-c8a4-dcff-3e4e-335662ce4ecc", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612316560529,
        },
        "e-318": {
            id: "e-318",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-20", affectedElements: {}, playInReverse: false, autoStopEventId: "e-319" } },
            mediaQueries: ["main"],
            target: { id: "6019ff90d9d5624540a39054|2538afa6-c8a4-dcff-3e4e-335662ce4ece", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "6019ff90d9d5624540a39054|2538afa6-c8a4-dcff-3e4e-335662ce4ece", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612316560529,
        },
        "e-320": {
            id: "e-320",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-19", affectedElements: {}, playInReverse: false, autoStopEventId: "e-321" } },
            mediaQueries: ["main"],
            target: { id: "6019ff90d9d5624540a39054|4ad69b10-b0ca-0dbf-9cd3-bcfce68b74f0", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "6019ff90d9d5624540a39054|4ad69b10-b0ca-0dbf-9cd3-bcfce68b74f0", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612316675613,
        },
        "e-322": {
            id: "e-322",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-20", affectedElements: {}, playInReverse: false, autoStopEventId: "e-323" } },
            mediaQueries: ["main"],
            target: { id: "6019ff90d9d5624540a39054|4ad69b10-b0ca-0dbf-9cd3-bcfce68b74f5", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "6019ff90d9d5624540a39054|4ad69b10-b0ca-0dbf-9cd3-bcfce68b74f5", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612316675613,
        },
        "e-325": {
            id: "e-325",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_FINISH",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a", affectedElements: {}, playInReverse: false, autoStopEventId: "e-324" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "601a007ea8caa1c553d757f3", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "601a007ea8caa1c553d757f3", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1612316799106,
        },
        "e-326": {
            id: "e-326",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_SCROLL_UP",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-2", affectedElements: {}, playInReverse: false, autoStopEventId: "e-327" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "601a007ea8caa1c553d757f3", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "601a007ea8caa1c553d757f3", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612316799106,
        },
        "e-327": {
            id: "e-327",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_SCROLL_DOWN",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-3", affectedElements: {}, playInReverse: false, autoStopEventId: "e-326" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "601a007ea8caa1c553d757f3", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "601a007ea8caa1c553d757f3", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612316799106,
        },
        "e-336": {
            id: "e-336",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-19", affectedElements: {}, playInReverse: false, autoStopEventId: "e-337" } },
            mediaQueries: ["main"],
            target: { id: "601a007ea8caa1c553d757f3|8a7cc946-ab72-c9ea-b291-aadaa31a1058", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "601a007ea8caa1c553d757f3|8a7cc946-ab72-c9ea-b291-aadaa31a1058", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612316896679,
        },
        "e-338": {
            id: "e-338",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-20", affectedElements: {}, playInReverse: false, autoStopEventId: "e-339" } },
            mediaQueries: ["main"],
            target: { id: "601a007ea8caa1c553d757f3|8a7cc946-ab72-c9ea-b291-aadaa31a105d", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "601a007ea8caa1c553d757f3|8a7cc946-ab72-c9ea-b291-aadaa31a105d", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612316896679,
        },
        "e-340": {
            id: "e-340",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-19", affectedElements: {}, playInReverse: false, autoStopEventId: "e-341" } },
            mediaQueries: ["main"],
            target: { id: "601a007ea8caa1c553d757f3|5034aa29-3d0a-a5a4-585b-42002814bbd1", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "601a007ea8caa1c553d757f3|5034aa29-3d0a-a5a4-585b-42002814bbd1", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612317551621,
        },
        "e-342": {
            id: "e-342",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-20", affectedElements: {}, playInReverse: false, autoStopEventId: "e-343" } },
            mediaQueries: ["main"],
            target: { id: "601a007ea8caa1c553d757f3|5034aa29-3d0a-a5a4-585b-42002814bbd3", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "601a007ea8caa1c553d757f3|5034aa29-3d0a-a5a4-585b-42002814bbd3", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612317551621,
        },
        "e-345": {
            id: "e-345",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_FINISH",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a", affectedElements: {}, playInReverse: false, autoStopEventId: "e-344" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "601a064353f6234e4247d6bb", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "601a064353f6234e4247d6bb", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1612318276002,
        },
        "e-346": {
            id: "e-346",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_SCROLL_UP",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-2", affectedElements: {}, playInReverse: false, autoStopEventId: "e-347" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "601a064353f6234e4247d6bb", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "601a064353f6234e4247d6bb", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612318276002,
        },
        "e-347": {
            id: "e-347",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_SCROLL_DOWN",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-3", affectedElements: {}, playInReverse: false, autoStopEventId: "e-346" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "601a064353f6234e4247d6bb", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "601a064353f6234e4247d6bb", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612318276002,
        },
        "e-349": {
            id: "e-349",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_FINISH",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a", affectedElements: {}, playInReverse: false, autoStopEventId: "e-348" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "601a09ce0569ed77871d3a18", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "601a09ce0569ed77871d3a18", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1612319183411,
        },
        "e-350": {
            id: "e-350",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_SCROLL_UP",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-2", affectedElements: {}, playInReverse: false, autoStopEventId: "e-351" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "601a09ce0569ed77871d3a18", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "601a09ce0569ed77871d3a18", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612319183411,
        },
        "e-351": {
            id: "e-351",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_SCROLL_DOWN",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-3", affectedElements: {}, playInReverse: false, autoStopEventId: "e-350" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "601a09ce0569ed77871d3a18", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "601a09ce0569ed77871d3a18", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612319183411,
        },
        "e-352": {
            id: "e-352",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-19", affectedElements: {}, playInReverse: false, autoStopEventId: "e-353" } },
            mediaQueries: ["main"],
            target: { id: "601a09ce0569ed77871d3a18|fa2622fc-efb3-1288-18f6-ecf7095af0c5", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "601a09ce0569ed77871d3a18|fa2622fc-efb3-1288-18f6-ecf7095af0c5", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612319368460,
        },
        "e-354": {
            id: "e-354",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-20", affectedElements: {}, playInReverse: false, autoStopEventId: "e-355" } },
            mediaQueries: ["main"],
            target: { id: "601a09ce0569ed77871d3a18|fa2622fc-efb3-1288-18f6-ecf7095af0d2", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "601a09ce0569ed77871d3a18|fa2622fc-efb3-1288-18f6-ecf7095af0d2", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612319368460,
        },
        "e-357": {
            id: "e-357",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_FINISH",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a", affectedElements: {}, playInReverse: false, autoStopEventId: "e-356" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "601a0fb7ba2195400ab68040", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "601a0fb7ba2195400ab68040", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1612320696365,
        },
        "e-358": {
            id: "e-358",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_SCROLL_UP",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-2", affectedElements: {}, playInReverse: false, autoStopEventId: "e-359" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "601a0fb7ba2195400ab68040", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "601a0fb7ba2195400ab68040", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612320696365,
        },
        "e-359": {
            id: "e-359",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_SCROLL_DOWN",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-3", affectedElements: {}, playInReverse: false, autoStopEventId: "e-358" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "601a0fb7ba2195400ab68040", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "601a0fb7ba2195400ab68040", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612320696365,
        },
        "e-361": {
            id: "e-361",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_FINISH",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a", affectedElements: {}, playInReverse: false, autoStopEventId: "e-360" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "601a16d5e8ddee1f4a16b38e", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "601a16d5e8ddee1f4a16b38e", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1612322518193,
        },
        "e-362": {
            id: "e-362",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_SCROLL_UP",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-2", affectedElements: {}, playInReverse: false, autoStopEventId: "e-363" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "601a16d5e8ddee1f4a16b38e", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "601a16d5e8ddee1f4a16b38e", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612322518193,
        },
        "e-363": {
            id: "e-363",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_SCROLL_DOWN",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-3", affectedElements: {}, playInReverse: false, autoStopEventId: "e-362" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "601a16d5e8ddee1f4a16b38e", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "601a16d5e8ddee1f4a16b38e", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612322518193,
        },
        "e-365": {
            id: "e-365",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_FINISH",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a", affectedElements: {}, playInReverse: false, autoStopEventId: "e-364" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "601b20e6a9bdb6075d9a01fd", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "601b20e6a9bdb6075d9a01fd", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1612390631315,
        },
        "e-366": {
            id: "e-366",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_SCROLL_UP",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-2", affectedElements: {}, playInReverse: false, autoStopEventId: "e-367" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "601b20e6a9bdb6075d9a01fd", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "601b20e6a9bdb6075d9a01fd", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612390631315,
        },
        "e-367": {
            id: "e-367",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_SCROLL_DOWN",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-3", affectedElements: {}, playInReverse: false, autoStopEventId: "e-366" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "601b20e6a9bdb6075d9a01fd", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "601b20e6a9bdb6075d9a01fd", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612390631315,
        },
        "e-368": {
            id: "e-368",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-19", affectedElements: {}, playInReverse: false, autoStopEventId: "e-369" } },
            mediaQueries: ["main"],
            target: { id: "601b20e6a9bdb6075d9a01fd|82cd3204-3709-5fca-c38c-532adc202838", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "601b20e6a9bdb6075d9a01fd|82cd3204-3709-5fca-c38c-532adc202838", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612390805534,
        },
        "e-370": {
            id: "e-370",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-20", affectedElements: {}, playInReverse: false, autoStopEventId: "e-371" } },
            mediaQueries: ["main"],
            target: { id: "601b20e6a9bdb6075d9a01fd|82cd3204-3709-5fca-c38c-532adc202849", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "601b20e6a9bdb6075d9a01fd|82cd3204-3709-5fca-c38c-532adc202849", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612390805534,
        },
        "e-372": {
            id: "e-372",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-19", affectedElements: {}, playInReverse: false, autoStopEventId: "e-373" } },
            mediaQueries: ["main"],
            target: { id: "601b20e6a9bdb6075d9a01fd|7eea5875-5c8a-0e08-fa23-1b91cd0805d3", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "601b20e6a9bdb6075d9a01fd|7eea5875-5c8a-0e08-fa23-1b91cd0805d3", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612390966454,
        },
        "e-374": {
            id: "e-374",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-20", affectedElements: {}, playInReverse: false, autoStopEventId: "e-375" } },
            mediaQueries: ["main"],
            target: { id: "601b20e6a9bdb6075d9a01fd|7eea5875-5c8a-0e08-fa23-1b91cd0805d9", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "601b20e6a9bdb6075d9a01fd|7eea5875-5c8a-0e08-fa23-1b91cd0805d9", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612390966454,
        },
        "e-380": {
            id: "e-380",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-20", affectedElements: {}, playInReverse: false, autoStopEventId: "e-381" } },
            mediaQueries: ["main"],
            target: { id: "601b20e6a9bdb6075d9a01fd|39e7d3ad-af8c-e1b1-8356-ee292d4caf16", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "601b20e6a9bdb6075d9a01fd|39e7d3ad-af8c-e1b1-8356-ee292d4caf16", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612391040441,
        },
        "e-382": {
            id: "e-382",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-19", affectedElements: {}, playInReverse: false, autoStopEventId: "e-383" } },
            mediaQueries: ["main"],
            target: { id: "601b20e6a9bdb6075d9a01fd|39e7d3ad-af8c-e1b1-8356-ee292d4caf20", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "601b20e6a9bdb6075d9a01fd|39e7d3ad-af8c-e1b1-8356-ee292d4caf20", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612391040441,
        },
        "e-384": {
            id: "e-384",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-19", affectedElements: {}, playInReverse: false, autoStopEventId: "e-385" } },
            mediaQueries: ["main"],
            target: { id: "601b20e6a9bdb6075d9a01fd|90db5fb5-6357-34bf-1251-94f0c2644315", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "601b20e6a9bdb6075d9a01fd|90db5fb5-6357-34bf-1251-94f0c2644315", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612391085045,
        },
        "e-386": {
            id: "e-386",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-20", affectedElements: {}, playInReverse: false, autoStopEventId: "e-387" } },
            mediaQueries: ["main"],
            target: { id: "601b20e6a9bdb6075d9a01fd|90db5fb5-6357-34bf-1251-94f0c264431a", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "601b20e6a9bdb6075d9a01fd|90db5fb5-6357-34bf-1251-94f0c264431a", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612391093418,
        },
        "e-388": {
            id: "e-388",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-21", affectedElements: {}, playInReverse: false, autoStopEventId: "e-389" } },
            mediaQueries: ["main"],
            target: { id: "601b20e6a9bdb6075d9a01fd|90db5fb5-6357-34bf-1251-94f0c264431f", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "601b20e6a9bdb6075d9a01fd|90db5fb5-6357-34bf-1251-94f0c264431f", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612391101285,
        },
        "e-390": {
            id: "e-390",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-19", affectedElements: {}, playInReverse: false, autoStopEventId: "e-391" } },
            mediaQueries: ["main"],
            target: { id: "601b20e6a9bdb6075d9a01fd|422606c0-a697-0354-1b8b-12102e9f54c0", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "601b20e6a9bdb6075d9a01fd|422606c0-a697-0354-1b8b-12102e9f54c0", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612391133408,
        },
        "e-392": {
            id: "e-392",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-20", affectedElements: {}, playInReverse: false, autoStopEventId: "e-393" } },
            mediaQueries: ["main"],
            target: { id: "601b20e6a9bdb6075d9a01fd|422606c0-a697-0354-1b8b-12102e9f54cc", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "601b20e6a9bdb6075d9a01fd|422606c0-a697-0354-1b8b-12102e9f54cc", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612391133408,
        },
        "e-395": {
            id: "e-395",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_FINISH",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a", affectedElements: {}, playInReverse: false, autoStopEventId: "e-394" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "601b232157a72e7066e4bd06", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "601b232157a72e7066e4bd06", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1612391202173,
        },
        "e-396": {
            id: "e-396",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_SCROLL_UP",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-2", affectedElements: {}, playInReverse: false, autoStopEventId: "e-397" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "601b232157a72e7066e4bd06", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "601b232157a72e7066e4bd06", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612391202173,
        },
        "e-397": {
            id: "e-397",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_SCROLL_DOWN",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-3", affectedElements: {}, playInReverse: false, autoStopEventId: "e-396" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "601b232157a72e7066e4bd06", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "601b232157a72e7066e4bd06", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612391202173,
        },
        "e-398": {
            id: "e-398",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-19", affectedElements: {}, playInReverse: false, autoStopEventId: "e-399" } },
            mediaQueries: ["main"],
            target: { id: "601b232157a72e7066e4bd06|6e74be7b-0b76-b83a-ae3f-6a74b9a61f1f", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "601b232157a72e7066e4bd06|6e74be7b-0b76-b83a-ae3f-6a74b9a61f1f", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612391783533,
        },
        "e-400": {
            id: "e-400",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-20", affectedElements: {}, playInReverse: false, autoStopEventId: "e-401" } },
            mediaQueries: ["main"],
            target: { id: "601b232157a72e7066e4bd06|6e74be7b-0b76-b83a-ae3f-6a74b9a61f24", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "601b232157a72e7066e4bd06|6e74be7b-0b76-b83a-ae3f-6a74b9a61f24", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612391783533,
        },
        "e-402": {
            id: "e-402",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-19", affectedElements: {}, playInReverse: false, autoStopEventId: "e-403" } },
            mediaQueries: ["main"],
            target: { id: "601b232157a72e7066e4bd06|32201436-d1d5-a3be-c70e-4887d2a69825", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "601b232157a72e7066e4bd06|32201436-d1d5-a3be-c70e-4887d2a69825", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612391843539,
        },
        "e-404": {
            id: "e-404",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-20", affectedElements: {}, playInReverse: false, autoStopEventId: "e-405" } },
            mediaQueries: ["main"],
            target: { id: "601b232157a72e7066e4bd06|32201436-d1d5-a3be-c70e-4887d2a6982c", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "601b232157a72e7066e4bd06|32201436-d1d5-a3be-c70e-4887d2a6982c", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612391843539,
        },
        "e-406": {
            id: "e-406",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-19", affectedElements: {}, playInReverse: false, autoStopEventId: "e-407" } },
            mediaQueries: ["main"],
            target: { id: "601b232157a72e7066e4bd06|326ca5aa-6c31-b63a-9dcb-e6ef48a97090", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "601b232157a72e7066e4bd06|326ca5aa-6c31-b63a-9dcb-e6ef48a97090", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612391927486,
        },
        "e-408": {
            id: "e-408",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-20", affectedElements: {}, playInReverse: false, autoStopEventId: "e-409" } },
            mediaQueries: ["main"],
            target: { id: "601b232157a72e7066e4bd06|326ca5aa-6c31-b63a-9dcb-e6ef48a97098", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "601b232157a72e7066e4bd06|326ca5aa-6c31-b63a-9dcb-e6ef48a97098", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612391927486,
        },
        "e-410": {
            id: "e-410",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-19", affectedElements: {}, playInReverse: false, autoStopEventId: "e-411" } },
            mediaQueries: ["main"],
            target: { id: "601b232157a72e7066e4bd06|46ad3ad2-8da3-2881-b6bf-6cab9f86cce0", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "601b232157a72e7066e4bd06|46ad3ad2-8da3-2881-b6bf-6cab9f86cce0", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612391962891,
        },
        "e-412": {
            id: "e-412",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-20", affectedElements: {}, playInReverse: false, autoStopEventId: "e-413" } },
            mediaQueries: ["main"],
            target: { id: "601b232157a72e7066e4bd06|46ad3ad2-8da3-2881-b6bf-6cab9f86ccf3", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "601b232157a72e7066e4bd06|46ad3ad2-8da3-2881-b6bf-6cab9f86ccf3", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612391962891,
        },
        "e-415": {
            id: "e-415",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_FINISH",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a", affectedElements: {}, playInReverse: false, autoStopEventId: "e-414" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "601b26cdba3c47c67b97d1c7", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "601b26cdba3c47c67b97d1c7", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1612392142081,
        },
        "e-416": {
            id: "e-416",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_SCROLL_UP",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-2", affectedElements: {}, playInReverse: false, autoStopEventId: "e-417" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "601b26cdba3c47c67b97d1c7", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "601b26cdba3c47c67b97d1c7", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612392142081,
        },
        "e-417": {
            id: "e-417",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_SCROLL_DOWN",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-3", affectedElements: {}, playInReverse: false, autoStopEventId: "e-416" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "601b26cdba3c47c67b97d1c7", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "601b26cdba3c47c67b97d1c7", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612392142081,
        },
        "e-418": {
            id: "e-418",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-19", affectedElements: {}, playInReverse: false, autoStopEventId: "e-419" } },
            mediaQueries: ["main"],
            target: { id: "601b26cdba3c47c67b97d1c7|6bccf683-e0b9-c9a4-c915-c87cb177acf4", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "601b26cdba3c47c67b97d1c7|6bccf683-e0b9-c9a4-c915-c87cb177acf4", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612392199880,
        },
        "e-420": {
            id: "e-420",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-20", affectedElements: {}, playInReverse: false, autoStopEventId: "e-421" } },
            mediaQueries: ["main"],
            target: { id: "601b26cdba3c47c67b97d1c7|6bccf683-e0b9-c9a4-c915-c87cb177acf8", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "601b26cdba3c47c67b97d1c7|6bccf683-e0b9-c9a4-c915-c87cb177acf8", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612392199880,
        },
        "e-422": {
            id: "e-422",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-21", affectedElements: {}, playInReverse: false, autoStopEventId: "e-423" } },
            mediaQueries: ["main"],
            target: { id: "601b26cdba3c47c67b97d1c7|6bccf683-e0b9-c9a4-c915-c87cb177acfc", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "601b26cdba3c47c67b97d1c7|6bccf683-e0b9-c9a4-c915-c87cb177acfc", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612392199880,
        },
        "e-424": {
            id: "e-424",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-19", affectedElements: {}, playInReverse: false, autoStopEventId: "e-425" } },
            mediaQueries: ["main"],
            target: { id: "601b26cdba3c47c67b97d1c7|4dfa0580-640e-d527-f8b6-7e54eaf3dae5", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "601b26cdba3c47c67b97d1c7|4dfa0580-640e-d527-f8b6-7e54eaf3dae5", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612392229866,
        },
        "e-426": {
            id: "e-426",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-20", affectedElements: {}, playInReverse: false, autoStopEventId: "e-427" } },
            mediaQueries: ["main"],
            target: { id: "601b26cdba3c47c67b97d1c7|4dfa0580-640e-d527-f8b6-7e54eaf3daee", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "601b26cdba3c47c67b97d1c7|4dfa0580-640e-d527-f8b6-7e54eaf3daee", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612392229866,
        },
        "e-428": {
            id: "e-428",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-19", affectedElements: {}, playInReverse: false, autoStopEventId: "e-429" } },
            mediaQueries: ["main"],
            target: { id: "601b26cdba3c47c67b97d1c7|b2cfe987-c68d-c49b-37a0-1bb9d78526e0", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "601b26cdba3c47c67b97d1c7|b2cfe987-c68d-c49b-37a0-1bb9d78526e0", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612393193016,
        },
        "e-430": {
            id: "e-430",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-20", affectedElements: {}, playInReverse: false, autoStopEventId: "e-431" } },
            mediaQueries: ["main"],
            target: { id: "601b26cdba3c47c67b97d1c7|b2cfe987-c68d-c49b-37a0-1bb9d78526e2", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "601b26cdba3c47c67b97d1c7|b2cfe987-c68d-c49b-37a0-1bb9d78526e2", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612393193016,
        },
        "e-433": {
            id: "e-433",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_FINISH",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a", affectedElements: {}, playInReverse: false, autoStopEventId: "e-432" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "601b2c12ba688e8564d7c8ad", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "601b2c12ba688e8564d7c8ad", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1612393491165,
        },
        "e-434": {
            id: "e-434",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_SCROLL_UP",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-2", affectedElements: {}, playInReverse: false, autoStopEventId: "e-435" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "601b2c12ba688e8564d7c8ad", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "601b2c12ba688e8564d7c8ad", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612393491165,
        },
        "e-435": {
            id: "e-435",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_SCROLL_DOWN",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-3", affectedElements: {}, playInReverse: false, autoStopEventId: "e-434" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "601b2c12ba688e8564d7c8ad", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [{ id: "601b2c12ba688e8564d7c8ad", appliesTo: "PAGE", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612393491165,
        },
        "e-436": {
            id: "e-436",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-19", affectedElements: {}, playInReverse: false, autoStopEventId: "e-437" } },
            mediaQueries: ["main"],
            target: { id: "601b2c12ba688e8564d7c8ad|addaa96f-723e-ecbc-acab-c6af8920510c", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "601b2c12ba688e8564d7c8ad|addaa96f-723e-ecbc-acab-c6af8920510c", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612394590404,
        },
        "e-438": {
            id: "e-438",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-20", affectedElements: {}, playInReverse: false, autoStopEventId: "e-439" } },
            mediaQueries: ["main"],
            target: { id: "601b2c12ba688e8564d7c8ad|addaa96f-723e-ecbc-acab-c6af8920510e", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "601b2c12ba688e8564d7c8ad|addaa96f-723e-ecbc-acab-c6af8920510e", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612394590404,
        },
        "e-440": {
            id: "e-440",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-20", affectedElements: {}, playInReverse: false, autoStopEventId: "e-441" } },
            mediaQueries: ["main"],
            target: { id: "601b2c12ba688e8564d7c8ad|dec3aee6-261c-d447-33d2-4c918645bc23", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "601b2c12ba688e8564d7c8ad|dec3aee6-261c-d447-33d2-4c918645bc23", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612394757369,
        },
        "e-442": {
            id: "e-442",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-19", affectedElements: {}, playInReverse: false, autoStopEventId: "e-443" } },
            mediaQueries: ["main"],
            target: { id: "601b2c12ba688e8564d7c8ad|dec3aee6-261c-d447-33d2-4c918645bc2d", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "601b2c12ba688e8564d7c8ad|dec3aee6-261c-d447-33d2-4c918645bc2d", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612394757369,
        },
        "e-444": {
            id: "e-444",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-19", affectedElements: {}, playInReverse: false, autoStopEventId: "e-445" } },
            mediaQueries: ["main"],
            target: { id: "601b2c12ba688e8564d7c8ad|efd8804b-5eba-688e-d041-123456315046", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "601b2c12ba688e8564d7c8ad|efd8804b-5eba-688e-d041-123456315046", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612395109333,
        },
        "e-446": {
            id: "e-446",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-20", affectedElements: {}, playInReverse: false, autoStopEventId: "e-447" } },
            mediaQueries: ["main"],
            target: { id: "601b2c12ba688e8564d7c8ad|efd8804b-5eba-688e-d041-123456315057", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "601b2c12ba688e8564d7c8ad|efd8804b-5eba-688e-d041-123456315057", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612395109333,
        },
        "e-448": {
            id: "e-448",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-19", affectedElements: {}, playInReverse: false, autoStopEventId: "e-449" } },
            mediaQueries: ["main"],
            target: { id: "601b2c12ba688e8564d7c8ad|5e412b4f-9b21-7af1-3022-e84b74468fcb", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "601b2c12ba688e8564d7c8ad|5e412b4f-9b21-7af1-3022-e84b74468fcb", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612395236546,
        },
        "e-450": {
            id: "e-450",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-20", affectedElements: {}, playInReverse: false, autoStopEventId: "e-451" } },
            mediaQueries: ["main"],
            target: { id: "601b2c12ba688e8564d7c8ad|5e412b4f-9b21-7af1-3022-e84b74468fd0", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "601b2c12ba688e8564d7c8ad|5e412b4f-9b21-7af1-3022-e84b74468fd0", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612395244687,
        },
        "e-452": {
            id: "e-452",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-21", affectedElements: {}, playInReverse: false, autoStopEventId: "e-453" } },
            mediaQueries: ["main"],
            target: { id: "601b2c12ba688e8564d7c8ad|5e412b4f-9b21-7af1-3022-e84b74468fd5", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "601b2c12ba688e8564d7c8ad|5e412b4f-9b21-7af1-3022-e84b74468fd5", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612395252501,
        },
        "e-454": {
            id: "e-454",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-19", affectedElements: {}, playInReverse: false, autoStopEventId: "e-455" } },
            mediaQueries: ["main"],
            target: { id: "601b232157a72e7066e4bd06|65b8294c-257a-fb06-53de-1fa185ec52ab", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "601b232157a72e7066e4bd06|65b8294c-257a-fb06-53de-1fa185ec52ab", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612481530160,
        },
        "e-456": {
            id: "e-456",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-20", affectedElements: {}, playInReverse: false, autoStopEventId: "e-457" } },
            mediaQueries: ["main"],
            target: { id: "601b232157a72e7066e4bd06|65b8294c-257a-fb06-53de-1fa185ec52b0", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "601b232157a72e7066e4bd06|65b8294c-257a-fb06-53de-1fa185ec52b0", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612481540267,
        },
        "e-458": {
            id: "e-458",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-21", affectedElements: {}, playInReverse: false, autoStopEventId: "e-459" } },
            mediaQueries: ["main"],
            target: { id: "601b232157a72e7066e4bd06|65b8294c-257a-fb06-53de-1fa185ec52b5", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [{ id: "601b232157a72e7066e4bd06|65b8294c-257a-fb06-53de-1fa185ec52b5", appliesTo: "ELEMENT", styleBlockIds: [] }],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1612481548356,
        },
        "e-461": {
            id: "e-461",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_FINISH",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a", affectedElements: {}, playInReverse: false, autoStopEventId: "e-460" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "60342488e3d8666c0e9146e6", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [],
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1614029960561,
        },
        "e-462": {
            id: "e-462",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_SCROLL_UP",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-2", affectedElements: {}, playInReverse: false, autoStopEventId: "e-463" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "60342488e3d8666c0e9146e6", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1614029960561,
        },
        "e-463": {
            id: "e-463",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_SCROLL_DOWN",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-3", affectedElements: {}, playInReverse: false, autoStopEventId: "e-462" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { id: "60342488e3d8666c0e9146e6", appliesTo: "PAGE", styleBlockIds: [] },
            targets: [],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1614029960561,
        },
        "e-464": {
            id: "e-464",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-19", affectedElements: {}, playInReverse: false, autoStopEventId: "e-465" } },
            mediaQueries: ["main"],
            target: { id: "60342488e3d8666c0e9146e6|f5de96e7-17c1-e687-cc24-30fdd5a3397a", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1614030617193,
        },
        "e-466": {
            id: "e-466",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-20", affectedElements: {}, playInReverse: false, autoStopEventId: "e-467" } },
            mediaQueries: ["main"],
            target: { id: "60342488e3d8666c0e9146e6|f5de96e7-17c1-e687-cc24-30fdd5a33987", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1614030617193,
        },
        "e-468": {
            id: "e-468",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-19", affectedElements: {}, playInReverse: false, autoStopEventId: "e-469" } },
            mediaQueries: ["main"],
            target: { id: "60342488e3d8666c0e9146e6|f809fb2d-202e-4600-b372-876604a28478", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1614030735252,
        },
        "e-470": {
            id: "e-470",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-20", affectedElements: {}, playInReverse: false, autoStopEventId: "e-471" } },
            mediaQueries: ["main"],
            target: { id: "60342488e3d8666c0e9146e6|f809fb2d-202e-4600-b372-876604a28480", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1614030735252,
        },
        "e-472": {
            id: "e-472",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-19", affectedElements: {}, playInReverse: false, autoStopEventId: "e-473" } },
            mediaQueries: ["main"],
            target: { id: "60342488e3d8666c0e9146e6|16a69951-8adf-f760-2b97-12357e41a54f", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1614030910976,
        },
        "e-474": {
            id: "e-474",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-20", affectedElements: {}, playInReverse: false, autoStopEventId: "e-475" } },
            mediaQueries: ["main"],
            target: { id: "60342488e3d8666c0e9146e6|16a69951-8adf-f760-2b97-12357e41a560", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1614030910976,
        },
        "e-476": {
            id: "e-476",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-19", affectedElements: {}, playInReverse: false, autoStopEventId: "e-477" } },
            mediaQueries: ["main"],
            target: { id: "60342488e3d8666c0e9146e6|d54427c1-287b-5698-b353-419af2ef1b57", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1614031018273,
        },
        "e-478": {
            id: "e-478",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-20", affectedElements: {}, playInReverse: false, autoStopEventId: "e-479" } },
            mediaQueries: ["main"],
            target: { id: "60342488e3d8666c0e9146e6|d54427c1-287b-5698-b353-419af2ef1b59", appliesTo: "ELEMENT", styleBlockIds: [] },
            targets: [],
            config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1614031018273,
        },
    },
    actionLists: {
        a: {
            id: "a",
            title: "Page Loading Animation Sequence",
            actionItemGroups: [
                {
                    actionItems: [
                        { id: "a-n", actionTypeId: "GENERAL_DISPLAY", config: { delay: 0, easing: "", duration: 0, target: { selector: ".loading-container", selectorGuids: ["e625c1da-337d-7a1f-e26d-588381655896"] }, value: "flex" } },
                        { id: "a-n-4", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { selector: ".load-first", selectorGuids: ["ccd31aaa-df85-174e-1254-40b2b3425b3e"] }, value: 0, unit: "" } },
                        { id: "a-n-6", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { selector: ".load-second", selectorGuids: ["b0f3d300-a65e-4e80-8bf2-59bd1cfa0748"] }, value: 0, unit: "" } },
                        { id: "a-n-8", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { selector: ".load-third", selectorGuids: ["6ba923fa-2eb8-acb7-a961-92700c41e48a"] }, value: 0, unit: "" } },
                    ],
                },
                {
                    actionItems: [
                        { id: "a-n-2", actionTypeId: "STYLE_OPACITY", config: { delay: 500, easing: "", duration: 300, target: { selector: ".loader", selectorGuids: ["375dcd4f-a849-97b6-aeae-019ede1eef5e"] }, value: 0, unit: "" } },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-n-3",
                            actionTypeId: "STYLE_OPACITY",
                            config: { delay: 0, easing: "", duration: 300, target: { selector: ".loading-container", selectorGuids: ["e625c1da-337d-7a1f-e26d-588381655896"] }, value: 0, unit: "" },
                        },
                    ],
                },
                {
                    actionItems: [
                        { id: "a-n-10", actionTypeId: "GENERAL_DISPLAY", config: { delay: 0, easing: "", duration: 0, target: { selector: ".loading-container", selectorGuids: ["e625c1da-337d-7a1f-e26d-588381655896"] }, value: "none" } },
                    ],
                },
                {
                    actionItems: [
                        { id: "a-n-5", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 300, target: { selector: ".load-first", selectorGuids: ["ccd31aaa-df85-174e-1254-40b2b3425b3e"] }, value: 1, unit: "" } },
                    ],
                },
                {
                    actionItems: [
                        { id: "a-n-7", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 300, target: { selector: ".load-second", selectorGuids: ["b0f3d300-a65e-4e80-8bf2-59bd1cfa0748"] }, value: 1, unit: "" } },
                    ],
                },
                {
                    actionItems: [
                        { id: "a-n-9", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 300, target: { selector: ".load-third", selectorGuids: ["6ba923fa-2eb8-acb7-a961-92700c41e48a"] }, value: 1, unit: "" } },
                    ],
                },
            ],
            useFirstGroupAsInitialState: true,
            createdOn: 1603678284925,
        },
        "a-2": {
            id: "a-2",
            title: "Hide Back To Top",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-2-n",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 150, target: { selector: ".back-to-top-button", selectorGuids: ["e1fe9020-1505-ae77-bd0b-d0a069445724"] }, yValue: 70, xUnit: "PX", yUnit: "PX", zUnit: "PX" },
                        },
                    ],
                },
            ],
            useFirstGroupAsInitialState: false,
            createdOn: 1603681680010,
        },
        "a-3": {
            id: "a-3",
            title: "Show Back To Top",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-3-n",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 150, target: { selector: ".back-to-top-button", selectorGuids: ["e1fe9020-1505-ae77-bd0b-d0a069445724"] }, yValue: 70, xUnit: "PX", yUnit: "PX", zUnit: "PX" },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-3-n-2",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 150, target: { selector: ".back-to-top-button", selectorGuids: ["e1fe9020-1505-ae77-bd0b-d0a069445724"] }, yValue: 0, xUnit: "PX", yUnit: "PX", zUnit: "PX" },
                        },
                    ],
                },
            ],
            useFirstGroupAsInitialState: true,
            createdOn: 1603681680010,
        },
        "a-4": {
            id: "a-4",
            title: "Close Announcement Bar",
            actionItemGroups: [
                {
                    actionItems: [
                        { id: "a-4-n", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 250, target: { selector: ".top-bar-contents", selectorGuids: ["a042f91b-e8c5-798b-103c-2ea77ed5983c"] }, value: 0, unit: "" } },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-4-n-2",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 250,
                                target: { useEventTarget: "PARENT", selector: ".top-bar", selectorGuids: ["3359d3e0-f329-0b85-27e2-6a506a7226a9"] },
                                heightValue: 0,
                                widthUnit: "PX",
                                heightUnit: "PX",
                                locked: false,
                            },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-4-n-3",
                            actionTypeId: "GENERAL_DISPLAY",
                            config: { delay: 0, easing: "", duration: 0, target: { useEventTarget: "PARENT", selector: ".top-bar", selectorGuids: ["3359d3e0-f329-0b85-27e2-6a506a7226a9"] }, value: "none" },
                        },
                    ],
                },
            ],
            useFirstGroupAsInitialState: false,
            createdOn: 1603685777568,
        },
        "a-5": {
            id: "a-5",
            title: "Show Search Modal",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-5-n",
                            actionTypeId: "STYLE_OPACITY",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".search-modal-screen", selectorGuids: ["a5b28a01-00bd-91ac-e33f-144c72914ec3"] }, value: 0, unit: "" },
                        },
                        {
                            id: "a-5-n-2",
                            actionTypeId: "STYLE_OPACITY",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".search-modal-container", selectorGuids: ["7bc3c2f5-7963-41f7-c443-1140465b1b87"] }, value: 0, unit: "" },
                        },
                    ],
                },
                {
                    actionItems: [
                        { id: "a-5-n-3", actionTypeId: "GENERAL_DISPLAY", config: { delay: 0, easing: "", duration: 0, target: { selector: ".search-modal", selectorGuids: ["aa798498-bc1a-268d-342d-b736e8e5b434"] }, value: "flex" } },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-5-n-4",
                            actionTypeId: "STYLE_OPACITY",
                            config: { delay: 0, easing: "", duration: 250, target: { selector: ".search-modal-screen", selectorGuids: ["a5b28a01-00bd-91ac-e33f-144c72914ec3"] }, value: 1, unit: "" },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-5-n-5",
                            actionTypeId: "STYLE_OPACITY",
                            config: { delay: 0, easing: "", duration: 250, target: { selector: ".search-modal-container", selectorGuids: ["7bc3c2f5-7963-41f7-c443-1140465b1b87"] }, value: 1, unit: "" },
                        },
                    ],
                },
            ],
            useFirstGroupAsInitialState: true,
            createdOn: 1603686054510,
        },
        "a-6": {
            id: "a-6",
            title: "Hide Search Modal",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-6-n-5",
                            actionTypeId: "STYLE_OPACITY",
                            config: { delay: 0, easing: "", duration: 250, target: { selector: ".search-modal-container", selectorGuids: ["7bc3c2f5-7963-41f7-c443-1140465b1b87"] }, value: 0, unit: "" },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-6-n-4",
                            actionTypeId: "STYLE_OPACITY",
                            config: { delay: 0, easing: "", duration: 250, target: { selector: ".search-modal-screen", selectorGuids: ["a5b28a01-00bd-91ac-e33f-144c72914ec3"] }, value: 0, unit: "" },
                        },
                    ],
                },
                {
                    actionItems: [
                        { id: "a-6-n-3", actionTypeId: "GENERAL_DISPLAY", config: { delay: 0, easing: "", duration: 0, target: { selector: ".search-modal", selectorGuids: ["aa798498-bc1a-268d-342d-b736e8e5b434"] }, value: "none" } },
                    ],
                },
            ],
            useFirstGroupAsInitialState: false,
            createdOn: 1603686054510,
        },
        "a-10": {
            id: "a-10",
            title: "Underline Link Hover In",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-10-n",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: { useEventTarget: "CHILDREN", selector: ".link-underline", selectorGuids: ["3108e0d9-c7a4-0de3-f5ba-8a5e4e1ef0a0"] },
                                xValue: -100,
                                xUnit: "%",
                                yUnit: "PX",
                                zUnit: "PX",
                            },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-10-n-2",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "easeIn",
                                duration: 300,
                                target: { useEventTarget: "CHILDREN", selector: ".link-underline", selectorGuids: ["3108e0d9-c7a4-0de3-f5ba-8a5e4e1ef0a0"] },
                                xValue: 0,
                                xUnit: "%",
                                yUnit: "PX",
                                zUnit: "PX",
                            },
                        },
                    ],
                },
            ],
            useFirstGroupAsInitialState: true,
            createdOn: 1610510508205,
        },
        "a-11": {
            id: "a-11",
            title: "Underline Link Hover Out",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-11-n-3",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "easeIn",
                                duration: 300,
                                target: { useEventTarget: "CHILDREN", selector: ".link-underline", selectorGuids: ["3108e0d9-c7a4-0de3-f5ba-8a5e4e1ef0a0"] },
                                xValue: 100,
                                xUnit: "%",
                                yUnit: "PX",
                                zUnit: "PX",
                            },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-11-n-4",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                target: { useEventTarget: "CHILDREN", selector: ".link-underline", selectorGuids: ["3108e0d9-c7a4-0de3-f5ba-8a5e4e1ef0a0"] },
                                xValue: -100,
                                xUnit: "%",
                                yUnit: "PX",
                                zUnit: "PX",
                            },
                        },
                    ],
                },
            ],
            useFirstGroupAsInitialState: false,
            createdOn: 1610510508205,
        },
        "a-16": {
            id: "a-16",
            title: "Text Banner Scrolling",
            continuousParameterGroups: [
                {
                    id: "a-16-p",
                    type: "SCROLL_PROGRESS",
                    parameterLabel: "Scroll",
                    continuousActionGroups: [
                        {
                            keyframe: 0,
                            actionItems: [
                                {
                                    id: "a-16-n",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: true, id: "6015cd6226d1525552a94702|TextBlock 2" }, xValue: -10, xUnit: "%", yUnit: "PX", zUnit: "PX" },
                                },
                            ],
                        },
                        {
                            keyframe: 50,
                            actionItems: [
                                {
                                    id: "a-16-n-3",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: true, id: "6015cd6226d1525552a94702|TextBlock 2" }, xValue: 0, xUnit: "px", yUnit: "PX", zUnit: "PX" },
                                },
                            ],
                        },
                        {
                            keyframe: 100,
                            actionItems: [
                                {
                                    id: "a-16-n-2",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: true, id: "6015cd6226d1525552a94702|TextBlock 2" }, xValue: 10, xUnit: "%", yUnit: "PX", zUnit: "PX" },
                                },
                            ],
                        },
                    ],
                },
            ],
            createdOn: 1612042586473,
        },
        "a-17": {
            id: "a-17",
            title: "Accordion Open",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-17-n",
                            actionTypeId: "GENERAL_DISPLAY",
                            config: { delay: 0, easing: "", duration: 0, target: { useEventTarget: "SIBLINGS", selector: ".accordion-content", selectorGuids: ["6101d00a-153d-27ca-203e-2272144eacec"] }, value: "none" },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-17-n-2",
                            actionTypeId: "GENERAL_DISPLAY",
                            config: { delay: 0, easing: "", duration: 0, target: { useEventTarget: "SIBLINGS", selector: ".accordion-content", selectorGuids: ["6101d00a-153d-27ca-203e-2272144eacec"] }, value: "block" },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-17-n-3",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 100,
                                target: { useEventTarget: "CHILDREN", selector: ".accordion-arrow", selectorGuids: ["34a23037-6083-41bc-d153-f141f3a86b36"] },
                                zValue: 90,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "deg",
                            },
                        },
                    ],
                },
            ],
            useFirstGroupAsInitialState: true,
            createdOn: 1612150172522,
        },
        "a-18": {
            id: "a-18",
            title: "Accordion Close",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-18-n-2",
                            actionTypeId: "GENERAL_DISPLAY",
                            config: { delay: 0, easing: "", duration: 0, target: { useEventTarget: "SIBLINGS", selector: ".accordion-content", selectorGuids: ["6101d00a-153d-27ca-203e-2272144eacec"] }, value: "none" },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-18-n-3",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: { delay: 0, easing: "", duration: 100, target: { selector: ".accordion-arrow", selectorGuids: ["34a23037-6083-41bc-d153-f141f3a86b36"] }, zValue: 0, xUnit: "DEG", yUnit: "DEG", zUnit: "deg" },
                        },
                    ],
                },
            ],
            useFirstGroupAsInitialState: false,
            createdOn: 1612150172522,
        },
        "a-19": {
            id: "a-19",
            title: "Fade In First",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-19-n",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: true, id: "5ffe667d322c895e29c578e3|abffe31c-66dd-18c4-dfbf-1e53567a6e15" }, xValue: 0.95, yValue: 0.95, locked: true },
                        },
                        {
                            id: "a-19-n-2",
                            actionTypeId: "STYLE_OPACITY",
                            config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: true, id: "5ffe667d322c895e29c578e3|abffe31c-66dd-18c4-dfbf-1e53567a6e15" }, value: 0, unit: "" },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-19-n-3",
                            actionTypeId: "STYLE_OPACITY",
                            config: { delay: 0, easing: "", duration: 250, target: { useEventTarget: true, id: "5ffe667d322c895e29c578e3|abffe31c-66dd-18c4-dfbf-1e53567a6e15" }, value: 1, unit: "" },
                        },
                        {
                            id: "a-19-n-4",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: { delay: 0, easing: "", duration: 250, target: { useEventTarget: true, id: "5ffe667d322c895e29c578e3|abffe31c-66dd-18c4-dfbf-1e53567a6e15" }, xValue: 1, yValue: 1, locked: true },
                        },
                    ],
                },
            ],
            useFirstGroupAsInitialState: true,
            createdOn: 1612305252159,
        },
        "a-20": {
            id: "a-20",
            title: "Fade In Second",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-20-n",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: true, id: "5ffe667d322c895e29c578e3|abffe31c-66dd-18c4-dfbf-1e53567a6e15" }, xValue: 0.95, yValue: 0.95, locked: true },
                        },
                        {
                            id: "a-20-n-2",
                            actionTypeId: "STYLE_OPACITY",
                            config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: true, id: "5ffe667d322c895e29c578e3|abffe31c-66dd-18c4-dfbf-1e53567a6e15" }, value: 0, unit: "" },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-20-n-3",
                            actionTypeId: "STYLE_OPACITY",
                            config: { delay: 250, easing: "", duration: 250, target: { useEventTarget: true, id: "5ffe667d322c895e29c578e3|abffe31c-66dd-18c4-dfbf-1e53567a6e15" }, value: 1, unit: "" },
                        },
                        {
                            id: "a-20-n-4",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: { delay: 250, easing: "", duration: 250, target: { useEventTarget: true, id: "5ffe667d322c895e29c578e3|abffe31c-66dd-18c4-dfbf-1e53567a6e15" }, xValue: 1, yValue: 1, locked: true },
                        },
                    ],
                },
            ],
            useFirstGroupAsInitialState: true,
            createdOn: 1612305252159,
        },
        "a-21": {
            id: "a-21",
            title: "Fade In Third",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-21-n",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: true, id: "5ffe667d322c895e29c578e3|abffe31c-66dd-18c4-dfbf-1e53567a6e15" }, xValue: 0.95, yValue: 0.95, locked: true },
                        },
                        {
                            id: "a-21-n-2",
                            actionTypeId: "STYLE_OPACITY",
                            config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: true, id: "5ffe667d322c895e29c578e3|abffe31c-66dd-18c4-dfbf-1e53567a6e15" }, value: 0, unit: "" },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-21-n-3",
                            actionTypeId: "STYLE_OPACITY",
                            config: { delay: 500, easing: "", duration: 250, target: { useEventTarget: true, id: "5ffe667d322c895e29c578e3|abffe31c-66dd-18c4-dfbf-1e53567a6e15" }, value: 1, unit: "" },
                        },
                        {
                            id: "a-21-n-4",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: { delay: 500, easing: "", duration: 250, target: { useEventTarget: true, id: "5ffe667d322c895e29c578e3|abffe31c-66dd-18c4-dfbf-1e53567a6e15" }, xValue: 1, yValue: 1, locked: true },
                        },
                    ],
                },
            ],
            useFirstGroupAsInitialState: true,
            createdOn: 1612305252159,
        },
    },
    site: {
        mediaQueries: [
            { key: "main", min: 992, max: 10000 },
            { key: "medium", min: 768, max: 991 },
            { key: "small", min: 480, max: 767 },
            { key: "tiny", min: 0, max: 479 },
        ],
    },
});

