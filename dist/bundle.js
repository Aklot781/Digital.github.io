 
(() => {
  "use strict";
  var e = {
      56: (e, t, r) => {
        e.exports = function (e) {
          var t = r.nc;
          t && e.setAttribute("nonce", t);
        };
      },
      72: (e) => {
        var t = [];
        function r(e) {
          for (var r = -1, n = 0; n < t.length; n++) {
            if (t[n].identifier === e) {
              r = n;
              break;
            }
          }
          return r;
        }
        function n(e, n) {
          for (var a = {}, i = [], s = 0; s < e.length; s++) {
            var c = e[s],
              u = n.base ? c[0] + n.base : c[0],
              l = a[u] || 0,
              p = "".concat(u, " ").concat(l);
            a[u] = l + 1;
            var f = r(p),
              d = {
                css: c[1],
                media: c[2],
                sourceMap: c[3],
                supports: c[4],
                layer: c[5],
              };
            if (-1 !== f) {
              t[f].references++, t[f].updater(d);
            } else {
              var v = o(d, n);
              (n.byIndex = s),
              t.splice(s, 0, { identifier: p, updater: v, references: 1 });
            }
            i.push(p);
          }
          return i;
        }
        function o(e, t) {
          var r = t.domAPI(t);
          return (
            r.update(e),
            function (t) {
              if (t) {
                if (
                  t.css === e.css &&
                  t.media === e.media &&
                  t.sourceMap === e.sourceMap &&
                  t.supports === e.supports &&
                  t.layer === e.layer
                ) {
                  return;
                }
                r.update((e = t));
              } else {
                r.remove();
              }
            }
          );
        }
        e.exports = function (e, o) {
          var a = n((e = e || []), (o = o || {}));
          return function (e) {
            e = e || [];
            for (var i = 0; i < a.length; i++) {
              var s = r(a[i]);
              t[s].references--;
            }
            for (var c = n(e, o), u = 0; u < a.length; u++) {
              var l = r(a[u]);
              0 === t[l].references && (t[l].updater(), t.splice(l, 1));
            }
            a = c;
          };
        };
      },
      113: (e) => {
        e.exports = function (e, t) {
          if (t.styleSheet) {
            t.styleSheet.cssText = e;
          } else {
            for (; t.firstChild;) {
              t.removeChild(t.firstChild);
            }
            t.appendChild(document.createTextNode(e));
          }
        };
      },
      314: (e) => {
        e.exports = function (e) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var r = "",
                  n = void 0 !== t[5];
                return (
                  t[4] && (r += "@supports (".concat(t[4], ") {")),
                  t[2] && (r += "@media ".concat(t[2], " {")),
                  n &&
                    (r += "@layer".concat(
                      t[5].length > 0 ? " ".concat(t[5]) : "", " {"
                    )),
                  (r += e(t)),
                  n && (r += "}"),
                  t[2] && (r += "}"),
                  t[4] && (r += "}"),
                  r
                );
              }).join("");
            }),
            (t.i = function (e, r, n, o, a) {
              "string" === typeof e && (e = [ [ null, e, void 0 ] ]);
              var i = {};
              if (n) {
                for (var s = 0; s < this.length; s++) {
                  var c = this[s][0];
                  // eslint-disable-next-line eqeqeq
                  null != c && (i[c] = !0);
                }
              }
              for (var u = 0; u < e.length; u++) {
                var l = [].concat(e[u]);
                (n && i[l[0]]) ||
                  (void 0 !== a &&
                    (void 0 === l[5] ||
                      (l[1] = "@layer"
                        .concat(l[5].length > 0 ? " ".concat(l[5]) : "", " {")
                        .concat(l[1], "}")),
                    (l[5] = a)),
                  r &&
                    (l[2]
                      ? ((l[1] = "@media "
                        .concat(l[2], " {")
                        .concat(l[1], "}")),
                      (l[2] = r))
                      : (l[2] = r)),
                  o &&
                    (l[4]
                      ? ((l[1] = "@supports ("
                        .concat(l[4], ") {")
                        .concat(l[1], "}")),
                      (l[4] = o))
                      : (l[4] = "".concat(o))),
                  t.push(l));
              }
            }),
            t
          );
        };
      },
      411: (e, t, r) => {
        r.d(t, { A: () => s });
        var n = r(601),
          o = r.n(n),
          a = r(314),
          i = r.n(a)()(o());
        i.push([
          e.id,
          "@import url(https://fonts.googleapis.com/css2?family=Kelly+Slab&family=Marck+Script&family=Poiret+One&display=swap);",
        ]),
        i.push([
          e.id,
          'body{background-color:#25bc25;margin:0;font-family:Arial,sans-serif;font-family:"Kelly Slab","Marck Script","Poiret One",sans-serif}',
          "",
        ]);
        const s = i;
      },
      540: (e) => {
        e.exports = function (e) {
          var t = document.createElement("style");
          return e.setAttributes(t, e.attributes), e.insert(t, e.options), t;
        };
      },
      601: (e) => {
        e.exports = function (e) {
          return e[1];
        };
      },
      659: (e) => {
        var t = {};
        e.exports = function (e, r) {
          var n = (function (e) {
            if (void 0 === t[e]) {
              var r = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                r instanceof window.HTMLIFrameElement
              ) {
                try {
                  r = r.contentDocument.head;
                  // eslint-disable-next-line no-unused-vars
                } catch (e) {
                  r = null;
                }
              }
              t[e] = r;
            }
            return t[e];
          })(e);
          if (!n) {
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          }
          n.appendChild(r);
        };
      },
      825: (e) => {
        e.exports = function (e) {
          if ("undefined" === typeof document) {
            return { update: function () {}, remove: function () {} };
          }
          var t = e.insertStyleElement(e);
          return {
            update: function (r) {
              !(function (e, t, r) {
                var n = "";
                r.supports && (n += "@supports (".concat(r.supports, ") {")),
                r.media && (n += "@media ".concat(r.media, " {"));
                var o = void 0 !== r.layer;
                o &&
                  (n += "@layer".concat(
                    r.layer.length > 0 ? " ".concat(r.layer) : "", " {"
                  )),
                (n += r.css),
                o && (n += "}"),
                r.media && (n += "}"),
                r.supports && (n += "}");
                var a = r.sourceMap;
                a &&
                  "undefined" !== typeof btoa &&
                  (n +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(a)))), " */"
                    )),
                t.styleTagTransform(n, e, t.options);
              })(t, e, r);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) {
                  return !1;
                }
                e.parentNode.removeChild(e);
              })(t);
            },
          };
        };
      },
    },
    t = {};
  function r(n) {
    var o = t[n];
    if (void 0 !== o) {
      return o.exports;
    }
    var a = (t[n] = { id: n, exports: {} });
    return e[n](a, a.exports, r), a.exports;
  }
  (r.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return r.d(t, { a: t }), t;
  }),
  (r.d = (e, t) => {
    for (var n in t) {
      r.o(t, n) &&
          !r.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
  }),
  (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
  (r.nc = void 0);
  var n = r(72),
    o = r.n(n),
    a = r(825),
    i = r.n(a),
    s = r(659),
    c = r.n(s),
    u = r(56),
    l = r.n(u),
    p = r(540),
    f = r.n(p),
    d = r(113),
    v = r.n(d),
    m = r(411),
    y = {};
  (y.styleTagTransform = v()),
  (y.setAttributes = l()),
  (y.insert = c().bind(null, "head")),
  (y.domAPI = i()),
  (y.insertStyleElement = f()),
  o()(m.A, y),
  m.A && m.A.locals && m.A.locals,
  console.warn("Hello world!");
})();
