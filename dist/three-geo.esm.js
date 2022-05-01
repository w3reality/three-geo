/*! For license information please see three-geo.esm.js.LICENSE.txt */
<<<<<<< HEAD
var ThreeGeo;
ThreeGeo = (() => {
  var t = {
      5550: (t) => {
        "use strict";
        function e(t, e) {
          (this.x = t), (this.y = e);
        }
        (t.exports = e),
          (e.prototype = {
            clone: function () {
              return new e(this.x, this.y);
            },
            add: function (t) {
              return this.clone()._add(t);
            },
            sub: function (t) {
              return this.clone()._sub(t);
            },
            multByPoint: function (t) {
              return this.clone()._multByPoint(t);
            },
            divByPoint: function (t) {
              return this.clone()._divByPoint(t);
            },
            mult: function (t) {
              return this.clone()._mult(t);
            },
            div: function (t) {
              return this.clone()._div(t);
            },
            rotate: function (t) {
              return this.clone()._rotate(t);
            },
            rotateAround: function (t, e) {
              return this.clone()._rotateAround(t, e);
            },
            matMult: function (t) {
              return this.clone()._matMult(t);
            },
            unit: function () {
              return this.clone()._unit();
            },
            perp: function () {
              return this.clone()._perp();
            },
            round: function () {
              return this.clone()._round();
            },
            mag: function () {
              return Math.sqrt(this.x * this.x + this.y * this.y);
            },
            equals: function (t) {
              return this.x === t.x && this.y === t.y;
            },
            dist: function (t) {
              return Math.sqrt(this.distSqr(t));
            },
            distSqr: function (t) {
              var e = t.x - this.x,
                r = t.y - this.y;
              return e * e + r * r;
            },
            angle: function () {
              return Math.atan2(this.y, this.x);
            },
            angleTo: function (t) {
              return Math.atan2(this.y - t.y, this.x - t.x);
            },
            angleWith: function (t) {
              return this.angleWithSep(t.x, t.y);
            },
            angleWithSep: function (t, e) {
              return Math.atan2(
                this.x * e - this.y * t,
                this.x * t + this.y * e
              );
            },
            _matMult: function (t) {
              var e = t[0] * this.x + t[1] * this.y,
                r = t[2] * this.x + t[3] * this.y;
              return (this.x = e), (this.y = r), this;
            },
            _add: function (t) {
              return (this.x += t.x), (this.y += t.y), this;
            },
            _sub: function (t) {
              return (this.x -= t.x), (this.y -= t.y), this;
            },
            _mult: function (t) {
              return (this.x *= t), (this.y *= t), this;
            },
            _div: function (t) {
              return (this.x /= t), (this.y /= t), this;
            },
            _multByPoint: function (t) {
              return (this.x *= t.x), (this.y *= t.y), this;
            },
            _divByPoint: function (t) {
              return (this.x /= t.x), (this.y /= t.y), this;
            },
            _unit: function () {
              return this._div(this.mag()), this;
            },
            _perp: function () {
              var t = this.y;
              return (this.y = this.x), (this.x = -t), this;
            },
            _rotate: function (t) {
              var e = Math.cos(t),
                r = Math.sin(t),
                n = e * this.x - r * this.y,
                i = r * this.x + e * this.y;
              return (this.x = n), (this.y = i), this;
            },
            _rotateAround: function (t, e) {
              var r = Math.cos(t),
                n = Math.sin(t),
                i = e.x + r * (this.x - e.x) - n * (this.y - e.y),
                o = e.y + n * (this.x - e.x) + r * (this.y - e.y);
              return (this.x = i), (this.y = o), this;
            },
            _round: function () {
              return (
                (this.x = Math.round(this.x)),
                (this.y = Math.round(this.y)),
                this
              );
            },
          }),
          (e.convert = function (t) {
            return t instanceof e
              ? t
              : Array.isArray(t)
              ? new e(t[0], t[1])
              : t;
          });
      },
      3673: (t, e) => {
        var r = (function () {
          var t = {},
            e = Math.PI / 180,
            r = 180 / Math.PI,
            n = 6378137,
            i = 20037508.342789244;
          function o(t) {
            return Number(t) === t && t % 1 != 0;
          }
          function a(e) {
            if (((e = e || {}), (this.size = e.size || 256), !t[this.size])) {
              var r = this.size,
                n = (t[this.size] = {});
              (n.Bc = []), (n.Cc = []), (n.zc = []), (n.Ac = []);
              for (var i = 0; i < 30; i++)
                n.Bc.push(r / 360),
                  n.Cc.push(r / (2 * Math.PI)),
                  n.zc.push(r / 2),
                  n.Ac.push(r),
                  (r *= 2);
            }
            (this.Bc = t[this.size].Bc),
              (this.Cc = t[this.size].Cc),
              (this.zc = t[this.size].zc),
              (this.Ac = t[this.size].Ac);
          }
          return (
            (a.prototype.px = function (t, r) {
              if (o(r)) {
                var n = this.size * Math.pow(2, r),
                  i = n / 2,
                  a = n / 360,
                  s = n / (2 * Math.PI),
                  u = n,
                  l = Math.min(Math.max(Math.sin(e * t[1]), -0.9999), 0.9999);
                return (
                  (h = i + t[0] * a) > u && (h = u),
                  (f = i + 0.5 * Math.log((1 + l) / (1 - l)) * -s) > u &&
                    (f = u),
                  [h, f]
                );
              }
              (i = this.zc[r]),
                (l = Math.min(Math.max(Math.sin(e * t[1]), -0.9999), 0.9999));
              var h = Math.round(i + t[0] * this.Bc[r]),
                f = Math.round(
                  i + 0.5 * Math.log((1 + l) / (1 - l)) * -this.Cc[r]
                );
              return (
                h > this.Ac[r] && (h = this.Ac[r]),
                f > this.Ac[r] && (f = this.Ac[r]),
                [h, f]
              );
            }),
            (a.prototype.ll = function (t, e) {
              if (o(e)) {
                var n = this.size * Math.pow(2, e),
                  i = n / 360,
                  a = n / (2 * Math.PI),
                  s = n / 2,
                  u = (t[1] - s) / -a;
                return [
                  (t[0] - s) / i,
                  r * (2 * Math.atan(Math.exp(u)) - 0.5 * Math.PI),
                ];
              }
              u = (t[1] - this.zc[e]) / -this.Cc[e];
              return [
                (t[0] - this.zc[e]) / this.Bc[e],
                r * (2 * Math.atan(Math.exp(u)) - 0.5 * Math.PI),
              ];
            }),
            (a.prototype.bbox = function (t, e, r, n, i) {
              n && (e = Math.pow(2, r) - 1 - e);
              var o = [t * this.size, (+e + 1) * this.size],
                a = [(+t + 1) * this.size, e * this.size],
                s = this.ll(o, r).concat(this.ll(a, r));
              return "900913" === i ? this.convert(s, "900913") : s;
            }),
            (a.prototype.xyz = function (t, e, r, n) {
              "900913" === n && (t = this.convert(t, "WGS84"));
              var i = [t[0], t[1]],
                o = [t[2], t[3]],
                a = this.px(i, e),
                s = this.px(o, e),
                u = [
                  Math.floor(a[0] / this.size),
                  Math.floor((s[0] - 1) / this.size),
                ],
                l = [
                  Math.floor(s[1] / this.size),
                  Math.floor((a[1] - 1) / this.size),
                ],
                h = {
                  minX:
                    Math.min.apply(Math, u) < 0 ? 0 : Math.min.apply(Math, u),
                  minY:
                    Math.min.apply(Math, l) < 0 ? 0 : Math.min.apply(Math, l),
                  maxX: Math.max.apply(Math, u),
                  maxY: Math.max.apply(Math, l),
                };
              if (r) {
                var f = {
                  minY: Math.pow(2, e) - 1 - h.maxY,
                  maxY: Math.pow(2, e) - 1 - h.minY,
                };
                (h.minY = f.minY), (h.maxY = f.maxY);
              }
              return h;
            }),
            (a.prototype.convert = function (t, e) {
              return "900913" === e
                ? this.forward(t.slice(0, 2)).concat(
                    this.forward(t.slice(2, 4))
                  )
                : this.inverse(t.slice(0, 2)).concat(
                    this.inverse(t.slice(2, 4))
                  );
            }),
            (a.prototype.forward = function (t) {
              var r = [
                n * t[0] * e,
                n * Math.log(Math.tan(0.25 * Math.PI + 0.5 * t[1] * e)),
              ];
              return (
                r[0] > i && (r[0] = i),
                r[0] < -i && (r[0] = -i),
                r[1] > i && (r[1] = i),
                r[1] < -i && (r[1] = -i),
                r
              );
            }),
            (a.prototype.inverse = function (t) {
              return [
                (t[0] * r) / n,
                (0.5 * Math.PI - 2 * Math.atan(Math.exp(-t[1] / n))) * r,
              ];
            }),
            a
          );
        })();
        t.exports = r;
      },
      7701: (t, e, r) => {
        "use strict";
        var n = r(2768);
        function i(t) {
          return {
            type: "Feature",
            geometry: n.tileToGeoJSON(t),
            properties: {},
          };
        }
        function o(t, e) {
          var r,
            i,
            o = t.coordinates,
            s = e.max_zoom,
            f = {},
            c = [];
          if ("Point" === t.type) return [n.pointToTile(o[0], o[1], s)];
          if ("MultiPoint" === t.type)
            for (r = 0; r < o.length; r++)
              f[h((i = n.pointToTile(o[r][0], o[r][1], s))[0], i[1], i[2])] =
                !0;
          else if ("LineString" === t.type) u(f, o, s);
          else if ("MultiLineString" === t.type)
            for (r = 0; r < o.length; r++) u(f, o[r], s);
          else if ("Polygon" === t.type) a(f, c, o, s);
          else {
            if ("MultiPolygon" !== t.type)
              throw new Error("Geometry type not implemented");
            for (r = 0; r < o.length; r++) a(f, c, o[r], s);
          }
          if (e.min_zoom !== s) {
            var p = c.length;
            for (l(f, c), r = 0; r < p; r++) {
              var d = c[r];
              f[h(d[0], d[1], d[2])] = !0;
            }
            return (function (t, e, r) {
              for (var n = [], i = r.max_zoom; i > r.min_zoom; i--) {
                for (var o = {}, a = [], s = 0; s < e.length; s++) {
                  var u = e[s];
                  if (u[0] % 2 == 0 && u[1] % 2 == 0) {
                    var l = h(u[0] + 1, u[1], i),
                      f = h(u[0], u[1] + 1, i),
                      c = h(u[0] + 1, u[1] + 1, i);
                    if (t[l] && t[f] && t[c]) {
                      (t[h(u[0], u[1], u[2])] = !1),
                        (t[l] = !1),
                        (t[f] = !1),
                        (t[c] = !1);
                      var p = [u[0] / 2, u[1] / 2, i - 1];
                      i - 1 === r.min_zoom
                        ? n.push(p)
                        : ((o[h(u[0] / 2, u[1] / 2, i - 1)] = !0), a.push(p));
                    }
                  }
                }
                for (s = 0; s < e.length; s++)
                  t[h((u = e[s])[0], u[1], u[2])] && n.push(u);
                (t = o), (e = a);
              }
              return n;
            })(f, c, e);
          }
          return l(f, c), c;
        }
        function a(t, e, r, n) {
          for (var i = [], o = 0; o < r.length; o++) {
            var a = [];
            u(t, r[o], n, a);
            for (var l = 0, f = a.length, c = f - 1; l < f; c = l++) {
              var p = (l + 1) % f,
                d = a[l][1];
              (d > a[c][1] || d > a[p][1]) &&
                (d < a[c][1] || d < a[p][1]) &&
                d !== a[p][1] &&
                i.push(a[l]);
            }
          }
          for (i.sort(s), o = 0; o < i.length; o += 2) {
            d = i[o][1];
            for (var g = i[o][0] + 1; g < i[o + 1][0]; g++) {
              t[h(g, d, n)] || e.push([g, d, n]);
            }
          }
        }
        function s(t, e) {
          return t[1] - e[1] || t[0] - e[0];
        }
        function u(t, e, r, i) {
          for (var o, a, s = 0; s < e.length - 1; s++) {
            var u = n.pointToTileFraction(e[s][0], e[s][1], r),
              l = n.pointToTileFraction(e[s + 1][0], e[s + 1][1], r),
              f = u[0],
              c = u[1],
              p = l[0] - f,
              d = l[1] - c;
            if (0 !== d || 0 !== p) {
              var g = p > 0 ? 1 : -1,
                y = d > 0 ? 1 : -1,
                v = Math.floor(f),
                b = Math.floor(c),
                m = 0 === p ? 1 / 0 : Math.abs(((p > 0 ? 1 : 0) + v - f) / p),
                w = 0 === d ? 1 / 0 : Math.abs(((d > 0 ? 1 : 0) + b - c) / d),
                x = Math.abs(g / p),
                _ = Math.abs(y / d);
              for (
                (v === o && b === a) ||
                ((t[h(v, b, r)] = !0),
                i && b !== a && i.push([v, b]),
                (o = v),
                (a = b));
                m < 1 || w < 1;

              )
                m < w ? ((m += x), (v += g)) : ((w += _), (b += y)),
                  (t[h(v, b, r)] = !0),
                  i && b !== a && i.push([v, b]),
                  (o = v),
                  (a = b);
            }
          }
          i && b === i[0][1] && i.pop();
        }
        function l(t, e) {
          for (var r, n, i, o, a, s = Object.keys(t), u = 0; u < s.length; u++)
            e.push(
              ((r = +s[u]),
              (n = void 0),
              (i = void 0),
              (o = void 0),
              (a = void 0),
              void 0,
              [
                (a = (o = (r - (n = r % 32)) / 32) % (i = 2 * (1 << n))),
                ((o - a) / i) % i,
                n,
              ])
            );
        }
        function h(t, e, r) {
          return 32 * (2 * (1 << r) * e + t) + r;
        }
        e.Sv = o;
      },
      2768: (t) => {
        "use strict";
        var e = Math.PI / 180,
          r = 180 / Math.PI;
        function n(t) {
          var e = i(t[0] + 1, t[2]);
          return [i(t[0], t[2]), o(t[1] + 1, t[2]), e, o(t[1], t[2])];
        }
        function i(t, e) {
          return (t / Math.pow(2, e)) * 360 - 180;
        }
        function o(t, e) {
          var n = Math.PI - (2 * Math.PI * t) / Math.pow(2, e);
          return r * Math.atan(0.5 * (Math.exp(n) - Math.exp(-n)));
        }
        function a(t, e, r) {
          var n = c(t, e, r);
          return (n[0] = Math.floor(n[0])), (n[1] = Math.floor(n[1])), n;
        }
        function s(t) {
          return [
            [2 * t[0], 2 * t[1], t[2] + 1],
            [2 * t[0] + 1, 2 * t[1], t[2] + 1],
            [2 * t[0] + 1, 2 * t[1] + 1, t[2] + 1],
            [2 * t[0], 2 * t[1] + 1, t[2] + 1],
          ];
        }
        function u(t) {
          return [t[0] >> 1, t[1] >> 1, t[2] - 1];
        }
        function l(t) {
          return s(u(t));
        }
        function h(t, e) {
          for (var r = 0; r < t.length; r++) if (f(t[r], e)) return !0;
          return !1;
        }
        function f(t, e) {
          return t[0] === e[0] && t[1] === e[1] && t[2] === e[2];
        }
        function c(t, r, n) {
          var i = Math.sin(r * e),
            o = Math.pow(2, n),
            a = o * (t / 360 + 0.5);
          return (
            (a %= o) < 0 && (a += o),
            [a, o * (0.5 - (0.25 * Math.log((1 + i) / (1 - i))) / Math.PI), n]
          );
        }
        t.exports = {
          tileToGeoJSON: function (t) {
            var e = n(t);
            return {
              type: "Polygon",
              coordinates: [
                [
                  [e[0], e[3]],
                  [e[0], e[1]],
                  [e[2], e[1]],
                  [e[2], e[3]],
                  [e[0], e[3]],
                ],
              ],
            };
          },
          tileToBBOX: n,
          getChildren: s,
          getParent: u,
          getSiblings: l,
          hasTile: h,
          hasSiblings: function (t, e) {
            for (var r = l(t), n = 0; n < r.length; n++)
              if (!h(e, r[n])) return !1;
            return !0;
          },
          tilesEqual: f,
          tileToQuadkey: function (t) {
            for (var e = "", r = t[2]; r > 0; r--) {
              var n = 0,
                i = 1 << (r - 1);
              0 != (t[0] & i) && n++,
                0 != (t[1] & i) && (n += 2),
                (e += n.toString());
            }
            return e;
          },
          quadkeyToTile: function (t) {
            for (var e = 0, r = 0, n = t.length, i = n; i > 0; i--) {
              var o = 1 << (i - 1),
                a = +t[n - i];
              1 === a && (e |= o),
                2 === a && (r |= o),
                3 === a && ((e |= o), (r |= o));
            }
            return [e, r, n];
          },
          pointToTile: a,
          bboxToTile: function (t) {
            var e = a(t[0], t[1], 32),
              r = a(t[2], t[3], 32),
              n = [e[0], e[1], r[0], r[1]],
              i = (function (t) {
                for (var e = 28, r = 0; r < e; r++) {
                  var n = 1 << (32 - (r + 1));
                  if ((t[0] & n) != (t[2] & n) || (t[1] & n) != (t[3] & n))
                    return r;
                }
                return e;
              })(n);
            return 0 === i
              ? [0, 0, 0]
              : [n[0] >>> (32 - i), n[1] >>> (32 - i), i];
          },
          pointToTileFraction: c,
        };
      },
      8929: (t, e, r) => {
        (t.exports.VectorTile = r(2779)), r(6024), r(9701);
      },
      2779: (t, e, r) => {
        "use strict";
        var n = r(9701);
        function i(t, e, r) {
          if (3 === t) {
            var i = new n(r, r.readVarint() + r.pos);
            i.length && (e[i.name] = i);
          }
        }
        t.exports = function (t, e) {
          this.layers = t.readFields(i, {}, e);
        };
      },
      6024: (t, e, r) => {
        "use strict";
        var n = r(5550);
        function i(t, e, r, n, i) {
          (this.properties = {}),
            (this.extent = r),
            (this.type = 0),
            (this._pbf = t),
            (this._geometry = -1),
            (this._keys = n),
            (this._values = i),
            t.readFields(o, this, e);
        }
        function o(t, e, r) {
          1 == t
            ? (e.id = r.readVarint())
            : 2 == t
            ? (function (t, e) {
                var r = t.readVarint() + t.pos;
                for (; t.pos < r; ) {
                  var n = e._keys[t.readVarint()],
                    i = e._values[t.readVarint()];
                  e.properties[n] = i;
                }
              })(r, e)
            : 3 == t
            ? (e.type = r.readVarint())
            : 4 == t && (e._geometry = r.pos);
        }
        function a(t) {
          for (var e, r, n = 0, i = 0, o = t.length, a = o - 1; i < o; a = i++)
            (e = t[i]), (n += ((r = t[a]).x - e.x) * (e.y + r.y));
          return n;
        }
        (t.exports = i),
          (i.types = ["Unknown", "Point", "LineString", "Polygon"]),
          (i.prototype.loadGeometry = function () {
            var t = this._pbf;
            t.pos = this._geometry;
            for (
              var e,
                r = t.readVarint() + t.pos,
                i = 1,
                o = 0,
                a = 0,
                s = 0,
                u = [];
              t.pos < r;

            ) {
              if (o <= 0) {
                var l = t.readVarint();
                (i = 7 & l), (o = l >> 3);
              }
              if ((o--, 1 === i || 2 === i))
                (a += t.readSVarint()),
                  (s += t.readSVarint()),
                  1 === i && (e && u.push(e), (e = [])),
                  e.push(new n(a, s));
              else {
                if (7 !== i) throw new Error("unknown command " + i);
                e && e.push(e[0].clone());
              }
            }
            return e && u.push(e), u;
          }),
          (i.prototype.bbox = function () {
            var t = this._pbf;
            t.pos = this._geometry;
            for (
              var e = t.readVarint() + t.pos,
                r = 1,
                n = 0,
                i = 0,
                o = 0,
                a = 1 / 0,
                s = -1 / 0,
                u = 1 / 0,
                l = -1 / 0;
              t.pos < e;

            ) {
              if (n <= 0) {
                var h = t.readVarint();
                (r = 7 & h), (n = h >> 3);
              }
              if ((n--, 1 === r || 2 === r))
                (i += t.readSVarint()) < a && (a = i),
                  i > s && (s = i),
                  (o += t.readSVarint()) < u && (u = o),
                  o > l && (l = o);
              else if (7 !== r) throw new Error("unknown command " + r);
            }
            return [a, u, s, l];
          }),
          (i.prototype.toGeoJSON = function (t, e, r) {
            var n,
              o,
              s = this.extent * Math.pow(2, r),
              u = this.extent * t,
              l = this.extent * e,
              h = this.loadGeometry(),
              f = i.types[this.type];
            function c(t) {
              for (var e = 0; e < t.length; e++) {
                var r = t[e],
                  n = 180 - (360 * (r.y + l)) / s;
                t[e] = [
                  (360 * (r.x + u)) / s - 180,
                  (360 / Math.PI) * Math.atan(Math.exp((n * Math.PI) / 180)) -
                    90,
                ];
              }
            }
            switch (this.type) {
              case 1:
                var p = [];
                for (n = 0; n < h.length; n++) p[n] = h[n][0];
                c((h = p));
                break;
              case 2:
                for (n = 0; n < h.length; n++) c(h[n]);
                break;
              case 3:
                for (
                  h = (function (t) {
                    var e = t.length;
                    if (e <= 1) return [t];
                    for (var r, n, i = [], o = 0; o < e; o++) {
                      var s = a(t[o]);
                      0 !== s &&
                        (void 0 === n && (n = s < 0),
                        n === s < 0
                          ? (r && i.push(r), (r = [t[o]]))
                          : r.push(t[o]));
                    }
                    r && i.push(r);
                    return i;
                  })(h),
                    n = 0;
                  n < h.length;
                  n++
                )
                  for (o = 0; o < h[n].length; o++) c(h[n][o]);
            }
            1 === h.length ? (h = h[0]) : (f = "Multi" + f);
            var d = {
              type: "Feature",
              geometry: { type: f, coordinates: h },
              properties: this.properties,
            };
            return "id" in this && (d.id = this.id), d;
          });
      },
      9701: (t, e, r) => {
        "use strict";
        var n = r(6024);
        function i(t, e) {
          (this.version = 1),
            (this.name = null),
            (this.extent = 4096),
            (this.length = 0),
            (this._pbf = t),
            (this._keys = []),
            (this._values = []),
            (this._features = []),
            t.readFields(o, this, e),
            (this.length = this._features.length);
        }
        function o(t, e, r) {
          15 === t
            ? (e.version = r.readVarint())
            : 1 === t
            ? (e.name = r.readString())
            : 5 === t
            ? (e.extent = r.readVarint())
            : 2 === t
            ? e._features.push(r.pos)
            : 3 === t
            ? e._keys.push(r.readString())
            : 4 === t &&
              e._values.push(
                (function (t) {
                  var e = null,
                    r = t.readVarint() + t.pos;
                  for (; t.pos < r; ) {
                    var n = t.readVarint() >> 3;
                    e =
                      1 === n
                        ? t.readString()
                        : 2 === n
                        ? t.readFloat()
                        : 3 === n
                        ? t.readDouble()
                        : 4 === n
                        ? t.readVarint64()
                        : 5 === n
                        ? t.readVarint()
                        : 6 === n
                        ? t.readSVarint()
                        : 7 === n
                        ? t.readBoolean()
                        : null;
                  }
                  return e;
                })(r)
              );
        }
        (t.exports = i),
          (i.prototype.feature = function (t) {
            if (t < 0 || t >= this._features.length)
              throw new Error("feature index out of bounds");
            this._pbf.pos = this._features[t];
            var e = this._pbf.readVarint() + this._pbf.pos;
            return new n(this._pbf, e, this.extent, this._keys, this._values);
          });
      },
      8899: (t, e, r) => {
        "use strict";
        var n = r(5266),
          i = 6378137;
        function o(t) {
          var e = 0;
          if (t && t.length > 0) {
            e += Math.abs(a(t[0]));
            for (var r = 1; r < t.length; r++) e -= Math.abs(a(t[r]));
          }
          return e;
        }
        function a(t) {
          var e,
            r,
            n,
            o,
            a,
            u,
            l = 0,
            h = t.length;
          if (h > 2) {
            for (u = 0; u < h; u++)
              u === h - 2
                ? ((n = h - 2), (o = h - 1), (a = 0))
                : u === h - 1
                ? ((n = h - 1), (o = 0), (a = 1))
                : ((n = u), (o = u + 1), (a = u + 2)),
                (e = t[n]),
                (r = t[o]),
                (l += (s(t[a][0]) - s(e[0])) * Math.sin(s(r[1])));
            l = (l * i * i) / 2;
          }
          return l;
        }
        function s(t) {
          return (t * Math.PI) / 180;
        }
        e.Z = function (t) {
          return n.geomReduce(
            t,
            function (t, e) {
              return (
                t +
                (function (t) {
                  var e,
                    r = 0;
                  switch (t.type) {
                    case "Polygon":
                      return o(t.coordinates);
                    case "MultiPolygon":
                      for (e = 0; e < t.coordinates.length; e++)
                        r += o(t.coordinates[e]);
                      return r;
                    case "Point":
                    case "MultiPoint":
                    case "LineString":
                    case "MultiLineString":
                      return 0;
                  }
                  return 0;
                })(e)
              );
            },
            0
          );
        };
      },
      4166: (t, e, r) => {
        "use strict";
        var n = r(7057),
          i = r(4963);
        e.Z = function (t, e, r, o) {
          void 0 === o && (o = {});
          var a = i.getCoord(t),
            s = n.degreesToRadians(a[0]),
            u = n.degreesToRadians(a[1]),
            l = n.degreesToRadians(r),
            h = n.lengthToRadians(e, o.units),
            f = Math.asin(
              Math.sin(u) * Math.cos(h) +
                Math.cos(u) * Math.sin(h) * Math.cos(l)
            ),
            c =
              s +
              Math.atan2(
                Math.sin(l) * Math.sin(h) * Math.cos(u),
                Math.cos(h) - Math.sin(u) * Math.sin(f)
              ),
            p = n.radiansToDegrees(c),
            d = n.radiansToDegrees(f);
          return n.point([p, d], o.properties);
        };
      },
      7057: (t, e) => {
        "use strict";
        function r(t, e, r) {
          void 0 === r && (r = {});
          var n = { type: "Feature" };
          return (
            (0 === r.id || r.id) && (n.id = r.id),
            r.bbox && (n.bbox = r.bbox),
            (n.properties = e || {}),
            (n.geometry = t),
            n
          );
        }
        function n(t, e, n) {
          return (
            void 0 === n && (n = {}), r({ type: "Point", coordinates: t }, e, n)
          );
        }
        function i(t, e, n) {
          void 0 === n && (n = {});
          for (var i = 0, o = t; i < o.length; i++) {
            var a = o[i];
            if (a.length < 4)
              throw new Error(
                "Each LinearRing of a Polygon must have 4 or more Positions."
              );
            for (var s = 0; s < a[a.length - 1].length; s++)
              if (a[a.length - 1][s] !== a[0][s])
                throw new Error("First and last Position are not equivalent.");
          }
          return r({ type: "Polygon", coordinates: t }, e, n);
        }
        function o(t, e, n) {
          if ((void 0 === n && (n = {}), t.length < 2))
            throw new Error(
              "coordinates must be an array of two or more positions"
            );
          return r({ type: "LineString", coordinates: t }, e, n);
        }
        function a(t, e) {
          void 0 === e && (e = {});
          var r = { type: "FeatureCollection" };
          return (
            e.id && (r.id = e.id),
            e.bbox && (r.bbox = e.bbox),
            (r.features = t),
            r
          );
        }
        function s(t, e, n) {
          return (
            void 0 === n && (n = {}),
            r({ type: "MultiLineString", coordinates: t }, e, n)
          );
        }
        function u(t, e, n) {
          return (
            void 0 === n && (n = {}),
            r({ type: "MultiPoint", coordinates: t }, e, n)
          );
        }
        function l(t, e, n) {
          return (
            void 0 === n && (n = {}),
            r({ type: "MultiPolygon", coordinates: t }, e, n)
          );
        }
        function h(t, r) {
          void 0 === r && (r = "kilometers");
          var n = e.factors[r];
          if (!n) throw new Error(r + " units is invalid");
          return t * n;
        }
        function f(t, r) {
          void 0 === r && (r = "kilometers");
          var n = e.factors[r];
          if (!n) throw new Error(r + " units is invalid");
          return t / n;
        }
        function c(t) {
          return (180 * (t % (2 * Math.PI))) / Math.PI;
        }
        function p(t) {
          return (
            !isNaN(t) && null !== t && !Array.isArray(t) && !/^\s*$/.test(t)
          );
        }
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.earthRadius = 6371008.8),
          (e.factors = {
            centimeters: 100 * e.earthRadius,
            centimetres: 100 * e.earthRadius,
            degrees: e.earthRadius / 111325,
            feet: 3.28084 * e.earthRadius,
            inches: 39.37 * e.earthRadius,
            kilometers: e.earthRadius / 1e3,
            kilometres: e.earthRadius / 1e3,
            meters: e.earthRadius,
            metres: e.earthRadius,
            miles: e.earthRadius / 1609.344,
            millimeters: 1e3 * e.earthRadius,
            millimetres: 1e3 * e.earthRadius,
            nauticalmiles: e.earthRadius / 1852,
            radians: 1,
            yards: e.earthRadius / 1.0936,
          }),
          (e.unitsFactors = {
            centimeters: 100,
            centimetres: 100,
            degrees: 1 / 111325,
            feet: 3.28084,
            inches: 39.37,
            kilometers: 0.001,
            kilometres: 0.001,
            meters: 1,
            metres: 1,
            miles: 1 / 1609.344,
            millimeters: 1e3,
            millimetres: 1e3,
            nauticalmiles: 1 / 1852,
            radians: 1 / e.earthRadius,
            yards: 1 / 1.0936,
          }),
          (e.areaFactors = {
            acres: 247105e-9,
            centimeters: 1e4,
            centimetres: 1e4,
            feet: 10.763910417,
            inches: 1550.003100006,
            kilometers: 1e-6,
            kilometres: 1e-6,
            meters: 1,
            metres: 1,
            miles: 386e-9,
            millimeters: 1e6,
            millimetres: 1e6,
            yards: 1.195990046,
          }),
          (e.feature = r),
          (e.geometry = function (t, e, r) {
            switch ((void 0 === r && (r = {}), t)) {
              case "Point":
                return n(e).geometry;
              case "LineString":
                return o(e).geometry;
              case "Polygon":
                return i(e).geometry;
              case "MultiPoint":
                return u(e).geometry;
              case "MultiLineString":
                return s(e).geometry;
              case "MultiPolygon":
                return l(e).geometry;
              default:
                throw new Error(t + " is invalid");
            }
          }),
          (e.point = n),
          (e.points = function (t, e, r) {
            return (
              void 0 === r && (r = {}),
              a(
                t.map(function (t) {
                  return n(t, e);
                }),
                r
              )
            );
          }),
          (e.polygon = i),
          (e.polygons = function (t, e, r) {
            return (
              void 0 === r && (r = {}),
              a(
                t.map(function (t) {
                  return i(t, e);
                }),
                r
              )
            );
          }),
          (e.lineString = o),
          (e.lineStrings = function (t, e, r) {
            return (
              void 0 === r && (r = {}),
              a(
                t.map(function (t) {
                  return o(t, e);
                }),
                r
              )
            );
          }),
          (e.featureCollection = a),
          (e.multiLineString = s),
          (e.multiPoint = u),
          (e.multiPolygon = l),
          (e.geometryCollection = function (t, e, n) {
            return (
              void 0 === n && (n = {}),
              r({ type: "GeometryCollection", geometries: t }, e, n)
            );
          }),
          (e.round = function (t, e) {
            if ((void 0 === e && (e = 0), e && !(e >= 0)))
              throw new Error("precision must be a positive number");
            var r = Math.pow(10, e || 0);
            return Math.round(t * r) / r;
          }),
          (e.radiansToLength = h),
          (e.lengthToRadians = f),
          (e.lengthToDegrees = function (t, e) {
            return c(f(t, e));
          }),
          (e.bearingToAzimuth = function (t) {
            var e = t % 360;
            return e < 0 && (e += 360), e;
          }),
          (e.radiansToDegrees = c),
          (e.degreesToRadians = function (t) {
            return ((t % 360) * Math.PI) / 180;
          }),
          (e.convertLength = function (t, e, r) {
            if (
              (void 0 === e && (e = "kilometers"),
              void 0 === r && (r = "kilometers"),
              !(t >= 0))
            )
              throw new Error("length must be a positive number");
            return h(f(t, e), r);
          }),
          (e.convertArea = function (t, r, n) {
            if (
              (void 0 === r && (r = "meters"),
              void 0 === n && (n = "kilometers"),
              !(t >= 0))
            )
              throw new Error("area must be a positive number");
            var i = e.areaFactors[r];
            if (!i) throw new Error("invalid original units");
            var o = e.areaFactors[n];
            if (!o) throw new Error("invalid final units");
            return (t / i) * o;
          }),
          (e.isNumber = p),
          (e.isObject = function (t) {
            return !!t && t.constructor === Object;
          }),
          (e.validateBBox = function (t) {
            if (!t) throw new Error("bbox is required");
            if (!Array.isArray(t)) throw new Error("bbox must be an Array");
            if (4 !== t.length && 6 !== t.length)
              throw new Error("bbox must be an Array of 4 or 6 numbers");
            t.forEach(function (t) {
              if (!p(t)) throw new Error("bbox must only contain numbers");
            });
          }),
          (e.validateId = function (t) {
            if (!t) throw new Error("id is required");
            if (-1 === ["string", "number"].indexOf(typeof t))
              throw new Error("id must be a number or a string");
          }),
          (e.radians2degrees = function () {
            throw new Error("method has been renamed to `radiansToDegrees`");
          }),
          (e.degrees2radians = function () {
            throw new Error("method has been renamed to `degreesToRadians`");
          }),
          (e.distanceToDegrees = function () {
            throw new Error("method has been renamed to `lengthToDegrees`");
          }),
          (e.distanceToRadians = function () {
            throw new Error("method has been renamed to `lengthToRadians`");
          }),
          (e.radiansToDistance = function () {
            throw new Error("method has been renamed to `radiansToLength`");
          }),
          (e.bearingToAngle = function () {
            throw new Error("method has been renamed to `bearingToAzimuth`");
          }),
          (e.convertDistance = function () {
            throw new Error("method has been renamed to `convertLength`");
          });
      },
      964: function (t, e, r) {
        "use strict";
        var n =
          (this && this.__importStar) ||
          function (t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
              for (var r in t)
                Object.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return (e.default = t), e;
          };
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = r(7057),
          o = r(4963),
          a = n(r(9209));
        e.default = function t(e, r, n) {
          void 0 === n && (n = {});
          var s = o.getGeom(e),
            u = o.getGeom(r);
          if ("Polygon" === s.type && "Polygon" === u.type) {
            var l = a.intersection(s.coordinates, u.coordinates);
            if (null === l || 0 === l.length) return null;
            if (1 === l.length) {
              var h = l[0][0][0],
                f = l[0][0][l[0][0].length - 1];
              return h[0] === f[0] && h[1] === f[1]
                ? i.polygon(l[0], n.properties)
                : null;
            }
            return i.multiPolygon(l, n.properties);
          }
          if ("MultiPolygon" === s.type) {
            for (var c = [], p = 0, d = s.coordinates; p < d.length; p++) {
              var g = d[p],
                y = t(o.getGeom(i.polygon(g)), u);
              if (y) {
                var v = o.getGeom(y);
                if ("Polygon" === v.type) c.push(v.coordinates);
                else {
                  if ("MultiPolygon" !== v.type)
                    throw new Error("intersection is invalid");
                  c = c.concat(v.coordinates);
                }
              }
            }
            return 0 === c.length
              ? null
              : 1 === c.length
              ? i.polygon(c[0], n.properties)
              : i.multiPolygon(c, n.properties);
          }
          if ("MultiPolygon" === u.type) return t(u, s);
          throw new Error(
            "poly1 and poly2 must be either polygons or multiPolygons"
          );
        };
      },
      4963: (t, e, r) => {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = r(7057);
        (e.getCoord = function (t) {
          if (!t) throw new Error("coord is required");
          if (!Array.isArray(t)) {
            if (
              "Feature" === t.type &&
              null !== t.geometry &&
              "Point" === t.geometry.type
            )
              return t.geometry.coordinates;
            if ("Point" === t.type) return t.coordinates;
          }
          if (
            Array.isArray(t) &&
            t.length >= 2 &&
            !Array.isArray(t[0]) &&
            !Array.isArray(t[1])
          )
            return t;
          throw new Error("coord must be GeoJSON Point or an Array of numbers");
        }),
          (e.getCoords = function (t) {
            if (Array.isArray(t)) return t;
            if ("Feature" === t.type) {
              if (null !== t.geometry) return t.geometry.coordinates;
            } else if (t.coordinates) return t.coordinates;
            throw new Error(
              "coords must be GeoJSON Feature, Geometry Object or an Array"
            );
          }),
          (e.containsNumber = function t(e) {
            if (e.length > 1 && n.isNumber(e[0]) && n.isNumber(e[1])) return !0;
            if (Array.isArray(e[0]) && e[0].length) return t(e[0]);
            throw new Error("coordinates must only contain numbers");
          }),
          (e.geojsonType = function (t, e, r) {
            if (!e || !r) throw new Error("type and name required");
            if (!t || t.type !== e)
              throw new Error(
                "Invalid input to " +
                  r +
                  ": must be a " +
                  e +
                  ", given " +
                  t.type
              );
          }),
          (e.featureOf = function (t, e, r) {
            if (!t) throw new Error("No feature passed");
            if (!r) throw new Error(".featureOf() requires a name");
            if (!t || "Feature" !== t.type || !t.geometry)
              throw new Error(
                "Invalid input to " + r + ", Feature with geometry required"
              );
            if (!t.geometry || t.geometry.type !== e)
              throw new Error(
                "Invalid input to " +
                  r +
                  ": must be a " +
                  e +
                  ", given " +
                  t.geometry.type
              );
          }),
          (e.collectionOf = function (t, e, r) {
            if (!t) throw new Error("No featureCollection passed");
            if (!r) throw new Error(".collectionOf() requires a name");
            if (!t || "FeatureCollection" !== t.type)
              throw new Error(
                "Invalid input to " + r + ", FeatureCollection required"
              );
            for (var n = 0, i = t.features; n < i.length; n++) {
              var o = i[n];
              if (!o || "Feature" !== o.type || !o.geometry)
                throw new Error(
                  "Invalid input to " + r + ", Feature with geometry required"
                );
              if (!o.geometry || o.geometry.type !== e)
                throw new Error(
                  "Invalid input to " +
                    r +
                    ": must be a " +
                    e +
                    ", given " +
                    o.geometry.type
                );
            }
          }),
          (e.getGeom = function (t) {
            return "Feature" === t.type ? t.geometry : t;
          }),
          (e.getType = function (t, e) {
            return "FeatureCollection" === t.type
              ? "FeatureCollection"
              : "GeometryCollection" === t.type
              ? "GeometryCollection"
              : "Feature" === t.type && null !== t.geometry
              ? t.geometry.type
              : t.type;
          });
      },
      5266: (t, e, r) => {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = r(7057);
        function i(t, e, r) {
          if (null !== t)
            for (
              var n,
                o,
                a,
                s,
                u,
                l,
                h,
                f,
                c = 0,
                p = 0,
                d = t.type,
                g = "FeatureCollection" === d,
                y = "Feature" === d,
                v = g ? t.features.length : 1,
                b = 0;
              b < v;
              b++
            ) {
              u = (f =
                !!(h = g ? t.features[b].geometry : y ? t.geometry : t) &&
                "GeometryCollection" === h.type)
                ? h.geometries.length
                : 1;
              for (var m = 0; m < u; m++) {
                var w = 0,
                  x = 0;
                if (null !== (s = f ? h.geometries[m] : h)) {
                  l = s.coordinates;
                  var _ = s.type;
                  switch (
                    ((c =
                      !r || ("Polygon" !== _ && "MultiPolygon" !== _) ? 0 : 1),
                    _)
                  ) {
                    case null:
                      break;
                    case "Point":
                      if (!1 === e(l, p, b, w, x)) return !1;
                      p++, w++;
                      break;
                    case "LineString":
                    case "MultiPoint":
                      for (n = 0; n < l.length; n++) {
                        if (!1 === e(l[n], p, b, w, x)) return !1;
                        p++, "MultiPoint" === _ && w++;
                      }
                      "LineString" === _ && w++;
                      break;
                    case "Polygon":
                    case "MultiLineString":
                      for (n = 0; n < l.length; n++) {
                        for (o = 0; o < l[n].length - c; o++) {
                          if (!1 === e(l[n][o], p, b, w, x)) return !1;
                          p++;
                        }
                        "MultiLineString" === _ && w++, "Polygon" === _ && x++;
                      }
                      "Polygon" === _ && w++;
                      break;
                    case "MultiPolygon":
                      for (n = 0; n < l.length; n++) {
                        for (x = 0, o = 0; o < l[n].length; o++) {
                          for (a = 0; a < l[n][o].length - c; a++) {
                            if (!1 === e(l[n][o][a], p, b, w, x)) return !1;
                            p++;
                          }
                          x++;
                        }
                        w++;
                      }
                      break;
                    case "GeometryCollection":
                      for (n = 0; n < s.geometries.length; n++)
                        if (!1 === i(s.geometries[n], e, r)) return !1;
                      break;
                    default:
                      throw new Error("Unknown Geometry Type");
                  }
                }
              }
            }
        }
        function o(t, e) {
          var r;
          switch (t.type) {
            case "FeatureCollection":
              for (
                r = 0;
                r < t.features.length && !1 !== e(t.features[r].properties, r);
                r++
              );
              break;
            case "Feature":
              e(t.properties, 0);
          }
        }
        function a(t, e) {
          if ("Feature" === t.type) e(t, 0);
          else if ("FeatureCollection" === t.type)
            for (
              var r = 0;
              r < t.features.length && !1 !== e(t.features[r], r);
              r++
            );
        }
        function s(t, e) {
          var r,
            n,
            i,
            o,
            a,
            s,
            u,
            l,
            h,
            f,
            c = 0,
            p = "FeatureCollection" === t.type,
            d = "Feature" === t.type,
            g = p ? t.features.length : 1;
          for (r = 0; r < g; r++) {
            for (
              s = p ? t.features[r].geometry : d ? t.geometry : t,
                l = p ? t.features[r].properties : d ? t.properties : {},
                h = p ? t.features[r].bbox : d ? t.bbox : void 0,
                f = p ? t.features[r].id : d ? t.id : void 0,
                a = (u = !!s && "GeometryCollection" === s.type)
                  ? s.geometries.length
                  : 1,
                i = 0;
              i < a;
              i++
            )
              if (null !== (o = u ? s.geometries[i] : s))
                switch (o.type) {
                  case "Point":
                  case "LineString":
                  case "MultiPoint":
                  case "Polygon":
                  case "MultiLineString":
                  case "MultiPolygon":
                    if (!1 === e(o, c, l, h, f)) return !1;
                    break;
                  case "GeometryCollection":
                    for (n = 0; n < o.geometries.length; n++)
                      if (!1 === e(o.geometries[n], c, l, h, f)) return !1;
                    break;
                  default:
                    throw new Error("Unknown Geometry Type");
                }
              else if (!1 === e(null, c, l, h, f)) return !1;
            c++;
          }
        }
        function u(t, e) {
          s(t, function (t, r, i, o, a) {
            var s,
              u = null === t ? null : t.type;
            switch (u) {
              case null:
              case "Point":
              case "LineString":
              case "Polygon":
                return (
                  !1 !== e(n.feature(t, i, { bbox: o, id: a }), r, 0) && void 0
                );
            }
            switch (u) {
              case "MultiPoint":
                s = "Point";
                break;
              case "MultiLineString":
                s = "LineString";
                break;
              case "MultiPolygon":
                s = "Polygon";
            }
            for (var l = 0; l < t.coordinates.length; l++) {
              var h = { type: s, coordinates: t.coordinates[l] };
              if (!1 === e(n.feature(h, i), r, l)) return !1;
            }
          });
        }
        function l(t, e) {
          u(t, function (t, r, o) {
            var a = 0;
            if (t.geometry) {
              var s = t.geometry.type;
              if ("Point" !== s && "MultiPoint" !== s) {
                var u,
                  l = 0,
                  h = 0,
                  f = 0;
                return (
                  !1 !==
                    i(t, function (i, s, c, p, d) {
                      if (void 0 === u || r > l || p > h || d > f)
                        return (u = i), (l = r), (h = p), (f = d), void (a = 0);
                      var g = n.lineString([u, i], t.properties);
                      if (!1 === e(g, r, o, d, a)) return !1;
                      a++, (u = i);
                    }) && void 0
                );
              }
            }
          });
        }
        function h(t, e) {
          if (!t) throw new Error("geojson is required");
          u(t, function (t, r, i) {
            if (null !== t.geometry) {
              var o = t.geometry.type,
                a = t.geometry.coordinates;
              switch (o) {
                case "LineString":
                  if (!1 === e(t, r, i, 0, 0)) return !1;
                  break;
                case "Polygon":
                  for (var s = 0; s < a.length; s++)
                    if (!1 === e(n.lineString(a[s], t.properties), r, i, s))
                      return !1;
              }
            }
          });
        }
        (e.coordEach = i),
          (e.coordReduce = function (t, e, r, n) {
            var o = r;
            return (
              i(
                t,
                function (t, n, i, a, s) {
                  o = 0 === n && void 0 === r ? t : e(o, t, n, i, a, s);
                },
                n
              ),
              o
            );
          }),
          (e.propEach = o),
          (e.propReduce = function (t, e, r) {
            var n = r;
            return (
              o(t, function (t, i) {
                n = 0 === i && void 0 === r ? t : e(n, t, i);
              }),
              n
            );
          }),
          (e.featureEach = a),
          (e.featureReduce = function (t, e, r) {
            var n = r;
            return (
              a(t, function (t, i) {
                n = 0 === i && void 0 === r ? t : e(n, t, i);
              }),
              n
            );
          }),
          (e.coordAll = function (t) {
            var e = [];
            return (
              i(t, function (t) {
                e.push(t);
              }),
              e
            );
          }),
          (e.geomEach = s),
          (e.geomReduce = function (t, e, r) {
            var n = r;
            return (
              s(t, function (t, i, o, a, s) {
                n = 0 === i && void 0 === r ? t : e(n, t, i, o, a, s);
              }),
              n
            );
          }),
          (e.flattenEach = u),
          (e.flattenReduce = function (t, e, r) {
            var n = r;
            return (
              u(t, function (t, i, o) {
                n = 0 === i && 0 === o && void 0 === r ? t : e(n, t, i, o);
              }),
              n
            );
          }),
          (e.segmentEach = l),
          (e.segmentReduce = function (t, e, r) {
            var n = r,
              i = !1;
            return (
              l(t, function (t, o, a, s, u) {
                (n = !1 === i && void 0 === r ? t : e(n, t, o, a, s, u)),
                  (i = !0);
              }),
              n
            );
          }),
          (e.lineEach = h),
          (e.lineReduce = function (t, e, r) {
            var n = r;
            return (
              h(t, function (t, i, o, a) {
                n = 0 === i && void 0 === r ? t : e(n, t, i, o, a);
              }),
              n
            );
          }),
          (e.findSegment = function (t, e) {
            if (((e = e || {}), !n.isObject(e)))
              throw new Error("options is invalid");
            var r,
              i = e.featureIndex || 0,
              o = e.multiFeatureIndex || 0,
              a = e.geometryIndex || 0,
              s = e.segmentIndex || 0,
              u = e.properties;
            switch (t.type) {
              case "FeatureCollection":
                i < 0 && (i = t.features.length + i),
                  (u = u || t.features[i].properties),
                  (r = t.features[i].geometry);
                break;
              case "Feature":
                (u = u || t.properties), (r = t.geometry);
                break;
              case "Point":
              case "MultiPoint":
                return null;
              case "LineString":
              case "Polygon":
              case "MultiLineString":
              case "MultiPolygon":
                r = t;
                break;
              default:
                throw new Error("geojson is invalid");
            }
            if (null === r) return null;
            var l = r.coordinates;
            switch (r.type) {
              case "Point":
              case "MultiPoint":
                return null;
              case "LineString":
                return (
                  s < 0 && (s = l.length + s - 1),
                  n.lineString([l[s], l[s + 1]], u, e)
                );
              case "Polygon":
                return (
                  a < 0 && (a = l.length + a),
                  s < 0 && (s = l[a].length + s - 1),
                  n.lineString([l[a][s], l[a][s + 1]], u, e)
                );
              case "MultiLineString":
                return (
                  o < 0 && (o = l.length + o),
                  s < 0 && (s = l[o].length + s - 1),
                  n.lineString([l[o][s], l[o][s + 1]], u, e)
                );
              case "MultiPolygon":
                return (
                  o < 0 && (o = l.length + o),
                  a < 0 && (a = l[o].length + a),
                  s < 0 && (s = l[o][a].length - s - 1),
                  n.lineString([l[o][a][s], l[o][a][s + 1]], u, e)
                );
            }
            throw new Error("geojson is invalid");
          }),
          (e.findPoint = function (t, e) {
            if (((e = e || {}), !n.isObject(e)))
              throw new Error("options is invalid");
            var r,
              i = e.featureIndex || 0,
              o = e.multiFeatureIndex || 0,
              a = e.geometryIndex || 0,
              s = e.coordIndex || 0,
              u = e.properties;
            switch (t.type) {
              case "FeatureCollection":
                i < 0 && (i = t.features.length + i),
                  (u = u || t.features[i].properties),
                  (r = t.features[i].geometry);
                break;
              case "Feature":
                (u = u || t.properties), (r = t.geometry);
                break;
              case "Point":
              case "MultiPoint":
                return null;
              case "LineString":
              case "Polygon":
              case "MultiLineString":
              case "MultiPolygon":
                r = t;
                break;
              default:
                throw new Error("geojson is invalid");
            }
            if (null === r) return null;
            var l = r.coordinates;
            switch (r.type) {
              case "Point":
                return n.point(l, u, e);
              case "MultiPoint":
                return o < 0 && (o = l.length + o), n.point(l[o], u, e);
              case "LineString":
                return s < 0 && (s = l.length + s), n.point(l[s], u, e);
              case "Polygon":
                return (
                  a < 0 && (a = l.length + a),
                  s < 0 && (s = l[a].length + s),
                  n.point(l[a][s], u, e)
                );
              case "MultiLineString":
                return (
                  o < 0 && (o = l.length + o),
                  s < 0 && (s = l[o].length + s),
                  n.point(l[o][s], u, e)
                );
              case "MultiPolygon":
                return (
                  o < 0 && (o = l.length + o),
                  a < 0 && (a = l[o].length + a),
                  s < 0 && (s = l[o][a].length - s),
                  n.point(l[o][a][s], u, e)
                );
            }
            throw new Error("geojson is invalid");
          });
      },
      6239: (t, e, r) => {
        "use strict";
        var n = r(5081);
        function i() {
          (this.argTypes = []),
            (this.shimArgs = []),
            (this.arrayArgs = []),
            (this.arrayBlockIndices = []),
            (this.scalarArgs = []),
            (this.offsetArgs = []),
            (this.offsetArgIndex = []),
            (this.indexArgs = []),
            (this.shapeArgs = []),
            (this.funcName = ""),
            (this.pre = null),
            (this.body = null),
            (this.post = null),
            (this.debug = !1);
        }
        t.exports = function (t) {
          var e = new i();
          (e.pre = t.pre), (e.body = t.body), (e.post = t.post);
          var r = t.args.slice(0);
          e.argTypes = r;
          for (var o = 0; o < r.length; ++o) {
            var a = r[o];
            if ("array" === a || ("object" == typeof a && a.blockIndices)) {
              if (
                ((e.argTypes[o] = "array"),
                e.arrayArgs.push(o),
                e.arrayBlockIndices.push(a.blockIndices ? a.blockIndices : 0),
                e.shimArgs.push("array" + o),
                o < e.pre.args.length && e.pre.args[o].count > 0)
              )
                throw new Error(
                  "cwise: pre() block may not reference array args"
                );
              if (o < e.post.args.length && e.post.args[o].count > 0)
                throw new Error(
                  "cwise: post() block may not reference array args"
                );
            } else if ("scalar" === a)
              e.scalarArgs.push(o), e.shimArgs.push("scalar" + o);
            else if ("index" === a) {
              if (
                (e.indexArgs.push(o),
                o < e.pre.args.length && e.pre.args[o].count > 0)
              )
                throw new Error(
                  "cwise: pre() block may not reference array index"
                );
              if (o < e.body.args.length && e.body.args[o].lvalue)
                throw new Error(
                  "cwise: body() block may not write to array index"
                );
              if (o < e.post.args.length && e.post.args[o].count > 0)
                throw new Error(
                  "cwise: post() block may not reference array index"
                );
            } else if ("shape" === a) {
              if (
                (e.shapeArgs.push(o),
                o < e.pre.args.length && e.pre.args[o].lvalue)
              )
                throw new Error(
                  "cwise: pre() block may not write to array shape"
                );
              if (o < e.body.args.length && e.body.args[o].lvalue)
                throw new Error(
                  "cwise: body() block may not write to array shape"
                );
              if (o < e.post.args.length && e.post.args[o].lvalue)
                throw new Error(
                  "cwise: post() block may not write to array shape"
                );
            } else {
              if ("object" != typeof a || !a.offset)
                throw new Error("cwise: Unknown argument type " + r[o]);
              (e.argTypes[o] = "offset"),
                e.offsetArgs.push({ array: a.array, offset: a.offset }),
                e.offsetArgIndex.push(o);
            }
          }
          if (e.arrayArgs.length <= 0)
            throw new Error("cwise: No array arguments specified");
          if (e.pre.args.length > r.length)
            throw new Error("cwise: Too many arguments in pre() block");
          if (e.body.args.length > r.length)
            throw new Error("cwise: Too many arguments in body() block");
          if (e.post.args.length > r.length)
            throw new Error("cwise: Too many arguments in post() block");
          return (
            (e.debug = !!t.printCode || !!t.debug),
            (e.funcName = t.funcName || "cwise"),
            (e.blockSize = t.blockSize || 64),
            n(e)
          );
        };
      },
      1984: (t, e, r) => {
        "use strict";
        var n = r(8706);
        function i(t, e, r) {
          var n,
            i,
            o = t.length,
            a = e.arrayArgs.length,
            s = e.indexArgs.length > 0,
            u = [],
            l = [],
            h = 0,
            f = 0;
          for (n = 0; n < o; ++n) l.push(["i", n, "=0"].join(""));
          for (i = 0; i < a; ++i)
            for (n = 0; n < o; ++n)
              (f = h),
                (h = t[n]),
                0 === n
                  ? l.push(["d", i, "s", n, "=t", i, "p", h].join(""))
                  : l.push(
                      [
                        "d",
                        i,
                        "s",
                        n,
                        "=(t",
                        i,
                        "p",
                        h,
                        "-s",
                        f,
                        "*t",
                        i,
                        "p",
                        f,
                        ")",
                      ].join("")
                    );
          for (
            l.length > 0 && u.push("var " + l.join(",")), n = o - 1;
            n >= 0;
            --n
          )
            (h = t[n]),
              u.push(
                ["for(i", n, "=0;i", n, "<s", h, ";++i", n, "){"].join("")
              );
          for (u.push(r), n = 0; n < o; ++n) {
            for (f = h, h = t[n], i = 0; i < a; ++i)
              u.push(["p", i, "+=d", i, "s", n].join(""));
            s &&
              (n > 0 && u.push(["index[", f, "]-=s", f].join("")),
              u.push(["++index[", h, "]"].join(""))),
              u.push("}");
          }
          return u.join("\n");
        }
        function o(t, e, r) {
          for (var n = t.body, i = [], o = [], a = 0; a < t.args.length; ++a) {
            var s = t.args[a];
            if (!(s.count <= 0)) {
              var u = new RegExp(s.name, "g"),
                l = "",
                h = e.arrayArgs.indexOf(a);
              switch (e.argTypes[a]) {
                case "offset":
                  var f = e.offsetArgIndex.indexOf(a);
                  (h = e.offsetArgs[f].array), (l = "+q" + f);
                case "array":
                  l = "p" + h + l;
                  var c = "l" + a,
                    p = "a" + h;
                  if (0 === e.arrayBlockIndices[h])
                    1 === s.count
                      ? "generic" === r[h]
                        ? s.lvalue
                          ? (i.push(
                              ["var ", c, "=", p, ".get(", l, ")"].join("")
                            ),
                            (n = n.replace(u, c)),
                            o.push([p, ".set(", l, ",", c, ")"].join("")))
                          : (n = n.replace(u, [p, ".get(", l, ")"].join("")))
                        : (n = n.replace(u, [p, "[", l, "]"].join("")))
                      : "generic" === r[h]
                      ? (i.push(["var ", c, "=", p, ".get(", l, ")"].join("")),
                        (n = n.replace(u, c)),
                        s.lvalue &&
                          o.push([p, ".set(", l, ",", c, ")"].join("")))
                      : (i.push(["var ", c, "=", p, "[", l, "]"].join("")),
                        (n = n.replace(u, c)),
                        s.lvalue && o.push([p, "[", l, "]=", c].join("")));
                  else {
                    for (
                      var d = [s.name], g = [l], y = 0;
                      y < Math.abs(e.arrayBlockIndices[h]);
                      y++
                    )
                      d.push("\\s*\\[([^\\]]+)\\]"),
                        g.push("$" + (y + 1) + "*t" + h + "b" + y);
                    if (
                      ((u = new RegExp(d.join(""), "g")),
                      (l = g.join("+")),
                      "generic" === r[h])
                    )
                      throw new Error(
                        "cwise: Generic arrays not supported in combination with blocks!"
                      );
                    n = n.replace(u, [p, "[", l, "]"].join(""));
                  }
                  break;
                case "scalar":
                  n = n.replace(u, "Y" + e.scalarArgs.indexOf(a));
                  break;
                case "index":
                  n = n.replace(u, "index");
                  break;
                case "shape":
                  n = n.replace(u, "shape");
              }
            }
          }
          return [i.join("\n"), n, o.join("\n")].join("\n").trim();
        }
        function a(t) {
          for (var e = new Array(t.length), r = !0, n = 0; n < t.length; ++n) {
            var i = t[n],
              o = i.match(/\d+/);
            (o = o ? o[0] : ""),
              0 === i.charAt(0)
                ? (e[n] = "u" + i.charAt(1) + o)
                : (e[n] = i.charAt(0) + o),
              n > 0 && (r = r && e[n] === e[n - 1]);
          }
          return r ? e[0] : e.join("");
        }
        t.exports = function (t, e) {
          for (
            var r = (e[1].length - Math.abs(t.arrayBlockIndices[0])) | 0,
              s = new Array(t.arrayArgs.length),
              u = new Array(t.arrayArgs.length),
              l = 0;
            l < t.arrayArgs.length;
            ++l
          )
            (u[l] = e[2 * l]), (s[l] = e[2 * l + 1]);
          var h = [],
            f = [],
            c = [],
            p = [],
            d = [];
          for (l = 0; l < t.arrayArgs.length; ++l) {
            t.arrayBlockIndices[l] < 0
              ? (c.push(0),
                p.push(r),
                h.push(r),
                f.push(r + t.arrayBlockIndices[l]))
              : (c.push(t.arrayBlockIndices[l]),
                p.push(t.arrayBlockIndices[l] + r),
                h.push(0),
                f.push(t.arrayBlockIndices[l]));
            for (var g = [], y = 0; y < s[l].length; y++)
              c[l] <= s[l][y] && s[l][y] < p[l] && g.push(s[l][y] - c[l]);
            d.push(g);
          }
          var v = ["SS"],
            b = ["'use strict'"],
            m = [];
          for (y = 0; y < r; ++y) m.push(["s", y, "=SS[", y, "]"].join(""));
          for (l = 0; l < t.arrayArgs.length; ++l) {
            v.push("a" + l), v.push("t" + l), v.push("p" + l);
            for (y = 0; y < r; ++y)
              m.push(["t", l, "p", y, "=t", l, "[", c[l] + y, "]"].join(""));
            for (y = 0; y < Math.abs(t.arrayBlockIndices[l]); ++y)
              m.push(["t", l, "b", y, "=t", l, "[", h[l] + y, "]"].join(""));
          }
          for (l = 0; l < t.scalarArgs.length; ++l) v.push("Y" + l);
          if (
            (t.shapeArgs.length > 0 && m.push("shape=SS.slice(0)"),
            t.indexArgs.length > 0)
          ) {
            var w = new Array(r);
            for (l = 0; l < r; ++l) w[l] = "0";
            m.push(["index=[", w.join(","), "]"].join(""));
          }
          for (l = 0; l < t.offsetArgs.length; ++l) {
            var x = t.offsetArgs[l],
              _ = [];
            for (y = 0; y < x.offset.length; ++y)
              0 !== x.offset[y] &&
                (1 === x.offset[y]
                  ? _.push(["t", x.array, "p", y].join(""))
                  : _.push([x.offset[y], "*t", x.array, "p", y].join("")));
            0 === _.length
              ? m.push("q" + l + "=0")
              : m.push(["q", l, "=", _.join("+")].join(""));
          }
          var E = n(
            []
              .concat(t.pre.thisVars)
              .concat(t.body.thisVars)
              .concat(t.post.thisVars)
          );
          for (
            (m = m.concat(E)).length > 0 && b.push("var " + m.join(",")), l = 0;
            l < t.arrayArgs.length;
            ++l
          )
            b.push("p" + l + "|=0");
          t.pre.body.length > 3 && b.push(o(t.pre, t, u));
          var S = o(t.body, t, u),
            k = (function (t) {
              for (var e = 0, r = t[0].length; e < r; ) {
                for (var n = 1; n < t.length; ++n)
                  if (t[n][e] !== t[0][e]) return e;
                ++e;
              }
              return e;
            })(d);
          k < r
            ? b.push(
                (function (t, e, r, n) {
                  for (
                    var o = e.length,
                      a = r.arrayArgs.length,
                      s = r.blockSize,
                      u = r.indexArgs.length > 0,
                      l = [],
                      h = 0;
                    h < a;
                    ++h
                  )
                    l.push(["var offset", h, "=p", h].join(""));
                  for (h = t; h < o; ++h)
                    l.push(
                      [
                        "for(var j" + h + "=SS[",
                        e[h],
                        "]|0;j",
                        h,
                        ">0;){",
                      ].join("")
                    ),
                      l.push(["if(j", h, "<", s, "){"].join("")),
                      l.push(["s", e[h], "=j", h].join("")),
                      l.push(["j", h, "=0"].join("")),
                      l.push(["}else{s", e[h], "=", s].join("")),
                      l.push(["j", h, "-=", s, "}"].join("")),
                      u && l.push(["index[", e[h], "]=j", h].join(""));
                  for (h = 0; h < a; ++h) {
                    for (var f = ["offset" + h], c = t; c < o; ++c)
                      f.push(["j", c, "*t", h, "p", e[c]].join(""));
                    l.push(["p", h, "=(", f.join("+"), ")"].join(""));
                  }
                  for (l.push(i(e, r, n)), h = t; h < o; ++h) l.push("}");
                  return l.join("\n");
                })(k, d[0], t, S)
              )
            : b.push(i(d[0], t, S)),
            t.post.body.length > 3 && b.push(o(t.post, t, u)),
            t.debug && b.join("\n");
          var M = [
            t.funcName || "unnamed",
            "_cwise_loop_",
            s[0].join("s"),
            "m",
            k,
            a(u),
          ].join("");
          return new Function(
            [
              "function ",
              M,
              "(",
              v.join(","),
              "){",
              b.join("\n"),
              "} return ",
              M,
            ].join("")
          )();
        };
      },
      5081: (t, e, r) => {
        "use strict";
        var n = r(1984);
        t.exports = function (t) {
          var e = ["'use strict'", "var CACHED={}"],
            r = [],
            i = t.funcName + "_cwise_thunk";
          e.push(
            ["return function ", i, "(", t.shimArgs.join(","), "){"].join("")
          );
          for (
            var o = [],
              a = [],
              s = [
                [
                  "array",
                  t.arrayArgs[0],
                  ".shape.slice(",
                  Math.max(0, t.arrayBlockIndices[0]),
                  t.arrayBlockIndices[0] < 0
                    ? "," + t.arrayBlockIndices[0] + ")"
                    : ")",
                ].join(""),
              ],
              u = [],
              l = [],
              h = 0;
            h < t.arrayArgs.length;
            ++h
          ) {
            var f = t.arrayArgs[h];
            r.push(
              [
                "t",
                f,
                "=array",
                f,
                ".dtype,",
                "r",
                f,
                "=array",
                f,
                ".order",
              ].join("")
            ),
              o.push("t" + f),
              o.push("r" + f),
              a.push("t" + f),
              a.push("r" + f + ".join()"),
              s.push("array" + f + ".data"),
              s.push("array" + f + ".stride"),
              s.push("array" + f + ".offset|0"),
              h > 0 &&
                (u.push(
                  "array" +
                    t.arrayArgs[0] +
                    ".shape.length===array" +
                    f +
                    ".shape.length+" +
                    (Math.abs(t.arrayBlockIndices[0]) -
                      Math.abs(t.arrayBlockIndices[h]))
                ),
                l.push(
                  "array" +
                    t.arrayArgs[0] +
                    ".shape[shapeIndex+" +
                    Math.max(0, t.arrayBlockIndices[0]) +
                    "]===array" +
                    f +
                    ".shape[shapeIndex+" +
                    Math.max(0, t.arrayBlockIndices[h]) +
                    "]"
                ));
          }
          for (
            t.arrayArgs.length > 1 &&
              (e.push(
                "if (!(" +
                  u.join(" && ") +
                  ")) throw new Error('cwise: Arrays do not all have the same dimensionality!')"
              ),
              e.push(
                "for(var shapeIndex=array" +
                  t.arrayArgs[0] +
                  ".shape.length-" +
                  Math.abs(t.arrayBlockIndices[0]) +
                  "; shapeIndex--\x3e0;) {"
              ),
              e.push(
                "if (!(" +
                  l.join(" && ") +
                  ")) throw new Error('cwise: Arrays do not all have the same shape!')"
              ),
              e.push("}")),
              h = 0;
            h < t.scalarArgs.length;
            ++h
          )
            s.push("scalar" + t.scalarArgs[h]);
          return (
            r.push(["type=[", a.join(","), "].join()"].join("")),
            r.push("proc=CACHED[type]"),
            e.push("var " + r.join(",")),
            e.push(
              [
                "if(!proc){",
                "CACHED[type]=proc=compile([",
                o.join(","),
                "])}",
                "return proc(",
                s.join(","),
                ")}",
              ].join("")
            ),
            t.debug && e.join("\n"),
            new Function("compile", e.join("\n"))(n.bind(void 0, t))
          );
        };
      },
      858: (t) => {
        t.exports = function (t) {
          if (!/^data\:/i.test(t))
            throw new TypeError(
              '`uri` does not appear to be a Data URI (must begin with "data:")'
            );
          var e = (t = t.replace(/\r?\n/g, "")).indexOf(",");
          if (-1 === e || e <= 4) throw new TypeError("malformed data: URI");
          for (
            var r = t.substring(5, e).split(";"), n = !1, i = "US-ASCII", o = 0;
            o < r.length;
            o++
          )
            "base64" == r[o]
              ? (n = !0)
              : 0 == r[o].indexOf("charset=") && (i = r[o].substring(8));
          var a = unescape(t.substring(e + 1)),
            s = new Buffer(a, n ? "base64" : "ascii");
          return (s.type = r[0] || "text/plain"), (s.charset = i), s;
        };
      },
      8197: (t, e) => {
        "use strict";
        (e.byteLength = function (t) {
          var e = u(t),
            r = e[0],
            n = e[1];
          return (3 * (r + n)) / 4 - n;
        }),
          (e.toByteArray = function (t) {
            var e,
              r,
              o = u(t),
              a = o[0],
              s = o[1],
              l = new i(
                (function (t, e, r) {
                  return (3 * (e + r)) / 4 - r;
                })(0, a, s)
              ),
              h = 0,
              f = s > 0 ? a - 4 : a;
            for (r = 0; r < f; r += 4)
              (e =
                (n[t.charCodeAt(r)] << 18) |
                (n[t.charCodeAt(r + 1)] << 12) |
                (n[t.charCodeAt(r + 2)] << 6) |
                n[t.charCodeAt(r + 3)]),
                (l[h++] = (e >> 16) & 255),
                (l[h++] = (e >> 8) & 255),
                (l[h++] = 255 & e);
            2 === s &&
              ((e = (n[t.charCodeAt(r)] << 2) | (n[t.charCodeAt(r + 1)] >> 4)),
              (l[h++] = 255 & e));
            1 === s &&
              ((e =
                (n[t.charCodeAt(r)] << 10) |
                (n[t.charCodeAt(r + 1)] << 4) |
                (n[t.charCodeAt(r + 2)] >> 2)),
              (l[h++] = (e >> 8) & 255),
              (l[h++] = 255 & e));
            return l;
          }),
          (e.fromByteArray = function (t) {
            for (
              var e,
                n = t.length,
                i = n % 3,
                o = [],
                a = 16383,
                s = 0,
                u = n - i;
              s < u;
              s += a
            )
              o.push(l(t, s, s + a > u ? u : s + a));
            1 === i
              ? ((e = t[n - 1]), o.push(r[e >> 2] + r[(e << 4) & 63] + "=="))
              : 2 === i &&
                ((e = (t[n - 2] << 8) + t[n - 1]),
                o.push(r[e >> 10] + r[(e >> 4) & 63] + r[(e << 2) & 63] + "="));
            return o.join("");
          });
        for (
          var r = [],
            n = [],
            i = "undefined" != typeof Uint8Array ? Uint8Array : Array,
            o =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
            a = 0,
            s = o.length;
          a < s;
          ++a
        )
          (r[a] = o[a]), (n[o.charCodeAt(a)] = a);
        function u(t) {
          var e = t.length;
          if (e % 4 > 0)
            throw new Error("Invalid string. Length must be a multiple of 4");
          var r = t.indexOf("=");
          return -1 === r && (r = e), [r, r === e ? 0 : 4 - (r % 4)];
        }
        function l(t, e, n) {
          for (var i, o, a = [], s = e; s < n; s += 3)
            (i =
              ((t[s] << 16) & 16711680) +
              ((t[s + 1] << 8) & 65280) +
              (255 & t[s + 2])),
              a.push(
                r[((o = i) >> 18) & 63] +
                  r[(o >> 12) & 63] +
                  r[(o >> 6) & 63] +
                  r[63 & o]
              );
          return a.join("");
        }
        (n["-".charCodeAt(0)] = 62), (n["_".charCodeAt(0)] = 63);
      },
      1664: (t, e, r) => {
        "use strict";
        const n = r(8197),
          i = r(645),
          o =
            "function" == typeof Symbol && "function" == typeof Symbol.for
              ? Symbol.for("nodejs.util.inspect.custom")
              : null;
        (e.Buffer = u),
          (e.SlowBuffer = function (t) {
            +t != t && (t = 0);
            return u.alloc(+t);
          }),
          (e.INSPECT_MAX_BYTES = 50);
        const a = 2147483647;
        function s(t) {
          if (t > a)
            throw new RangeError(
              'The value "' + t + '" is invalid for option "size"'
            );
          const e = new Uint8Array(t);
          return Object.setPrototypeOf(e, u.prototype), e;
        }
        function u(t, e, r) {
          if ("number" == typeof t) {
            if ("string" == typeof e)
              throw new TypeError(
                'The "string" argument must be of type string. Received type number'
              );
            return f(t);
          }
          return l(t, e, r);
        }
        function l(t, e, r) {
          if ("string" == typeof t)
            return (function (t, e) {
              ("string" == typeof e && "" !== e) || (e = "utf8");
              if (!u.isEncoding(e))
                throw new TypeError("Unknown encoding: " + e);
              const r = 0 | g(t, e);
              let n = s(r);
              const i = n.write(t, e);
              i !== r && (n = n.slice(0, i));
              return n;
            })(t, e);
          if (ArrayBuffer.isView(t))
            return (function (t) {
              if (X(t, Uint8Array)) {
                const e = new Uint8Array(t);
                return p(e.buffer, e.byteOffset, e.byteLength);
              }
              return c(t);
            })(t);
          if (null == t)
            throw new TypeError(
              "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
                typeof t
            );
          if (X(t, ArrayBuffer) || (t && X(t.buffer, ArrayBuffer)))
            return p(t, e, r);
          if (
            "undefined" != typeof SharedArrayBuffer &&
            (X(t, SharedArrayBuffer) || (t && X(t.buffer, SharedArrayBuffer)))
          )
            return p(t, e, r);
          if ("number" == typeof t)
            throw new TypeError(
              'The "value" argument must not be of type number. Received type number'
            );
          const n = t.valueOf && t.valueOf();
          if (null != n && n !== t) return u.from(n, e, r);
          const i = (function (t) {
            if (u.isBuffer(t)) {
              const e = 0 | d(t.length),
                r = s(e);
              return 0 === r.length || t.copy(r, 0, 0, e), r;
            }
            if (void 0 !== t.length)
              return "number" != typeof t.length || Z(t.length) ? s(0) : c(t);
            if ("Buffer" === t.type && Array.isArray(t.data)) return c(t.data);
          })(t);
          if (i) return i;
          if (
            "undefined" != typeof Symbol &&
            null != Symbol.toPrimitive &&
            "function" == typeof t[Symbol.toPrimitive]
          )
            return u.from(t[Symbol.toPrimitive]("string"), e, r);
          throw new TypeError(
            "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
              typeof t
          );
        }
        function h(t) {
          if ("number" != typeof t)
            throw new TypeError('"size" argument must be of type number');
          if (t < 0)
            throw new RangeError(
              'The value "' + t + '" is invalid for option "size"'
            );
        }
        function f(t) {
          return h(t), s(t < 0 ? 0 : 0 | d(t));
        }
        function c(t) {
          const e = t.length < 0 ? 0 : 0 | d(t.length),
            r = s(e);
          for (let n = 0; n < e; n += 1) r[n] = 255 & t[n];
          return r;
        }
        function p(t, e, r) {
          if (e < 0 || t.byteLength < e)
            throw new RangeError('"offset" is outside of buffer bounds');
          if (t.byteLength < e + (r || 0))
            throw new RangeError('"length" is outside of buffer bounds');
          let n;
          return (
            (n =
              void 0 === e && void 0 === r
                ? new Uint8Array(t)
                : void 0 === r
                ? new Uint8Array(t, e)
                : new Uint8Array(t, e, r)),
            Object.setPrototypeOf(n, u.prototype),
            n
          );
        }
        function d(t) {
          if (t >= a)
            throw new RangeError(
              "Attempt to allocate Buffer larger than maximum size: 0x" +
                a.toString(16) +
                " bytes"
            );
          return 0 | t;
        }
        function g(t, e) {
          if (u.isBuffer(t)) return t.length;
          if (ArrayBuffer.isView(t) || X(t, ArrayBuffer)) return t.byteLength;
          if ("string" != typeof t)
            throw new TypeError(
              'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
                typeof t
            );
          const r = t.length,
            n = arguments.length > 2 && !0 === arguments[2];
          if (!n && 0 === r) return 0;
          let i = !1;
          for (;;)
            switch (e) {
              case "ascii":
              case "latin1":
              case "binary":
                return r;
              case "utf8":
              case "utf-8":
                return H(t).length;
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return 2 * r;
              case "hex":
                return r >>> 1;
              case "base64":
                return $(t).length;
              default:
                if (i) return n ? -1 : H(t).length;
                (e = ("" + e).toLowerCase()), (i = !0);
            }
        }
        function y(t, e, r) {
          let n = !1;
          if (((void 0 === e || e < 0) && (e = 0), e > this.length)) return "";
          if (((void 0 === r || r > this.length) && (r = this.length), r <= 0))
            return "";
          if ((r >>>= 0) <= (e >>>= 0)) return "";
          for (t || (t = "utf8"); ; )
            switch (t) {
              case "hex":
                return P(this, e, r);
              case "utf8":
              case "utf-8":
                return M(this, e, r);
              case "ascii":
                return A(this, e, r);
              case "latin1":
              case "binary":
                return j(this, e, r);
              case "base64":
                return k(this, e, r);
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return T(this, e, r);
              default:
                if (n) throw new TypeError("Unknown encoding: " + t);
                (t = (t + "").toLowerCase()), (n = !0);
            }
        }
        function v(t, e, r) {
          const n = t[e];
          (t[e] = t[r]), (t[r] = n);
        }
        function b(t, e, r, n, i) {
          if (0 === t.length) return -1;
          if (
            ("string" == typeof r
              ? ((n = r), (r = 0))
              : r > 2147483647
              ? (r = 2147483647)
              : r < -2147483648 && (r = -2147483648),
            Z((r = +r)) && (r = i ? 0 : t.length - 1),
            r < 0 && (r = t.length + r),
            r >= t.length)
          ) {
            if (i) return -1;
            r = t.length - 1;
          } else if (r < 0) {
            if (!i) return -1;
            r = 0;
          }
          if (("string" == typeof e && (e = u.from(e, n)), u.isBuffer(e)))
            return 0 === e.length ? -1 : m(t, e, r, n, i);
          if ("number" == typeof e)
            return (
              (e &= 255),
              "function" == typeof Uint8Array.prototype.indexOf
                ? i
                  ? Uint8Array.prototype.indexOf.call(t, e, r)
                  : Uint8Array.prototype.lastIndexOf.call(t, e, r)
                : m(t, [e], r, n, i)
            );
          throw new TypeError("val must be string, number or Buffer");
        }
        function m(t, e, r, n, i) {
          let o,
            a = 1,
            s = t.length,
            u = e.length;
          if (
            void 0 !== n &&
            ("ucs2" === (n = String(n).toLowerCase()) ||
              "ucs-2" === n ||
              "utf16le" === n ||
              "utf-16le" === n)
          ) {
            if (t.length < 2 || e.length < 2) return -1;
            (a = 2), (s /= 2), (u /= 2), (r /= 2);
          }
          function l(t, e) {
            return 1 === a ? t[e] : t.readUInt16BE(e * a);
          }
          if (i) {
            let n = -1;
            for (o = r; o < s; o++)
              if (l(t, o) === l(e, -1 === n ? 0 : o - n)) {
                if ((-1 === n && (n = o), o - n + 1 === u)) return n * a;
              } else -1 !== n && (o -= o - n), (n = -1);
          } else
            for (r + u > s && (r = s - u), o = r; o >= 0; o--) {
              let r = !0;
              for (let n = 0; n < u; n++)
                if (l(t, o + n) !== l(e, n)) {
                  r = !1;
                  break;
                }
              if (r) return o;
            }
          return -1;
        }
        function w(t, e, r, n) {
          r = Number(r) || 0;
          const i = t.length - r;
          n ? (n = Number(n)) > i && (n = i) : (n = i);
          const o = e.length;
          let a;
          for (n > o / 2 && (n = o / 2), a = 0; a < n; ++a) {
            const n = parseInt(e.substr(2 * a, 2), 16);
            if (Z(n)) return a;
            t[r + a] = n;
          }
          return a;
        }
        function x(t, e, r, n) {
          return Y(H(e, t.length - r), t, r, n);
        }
        function _(t, e, r, n) {
          return Y(
            (function (t) {
              const e = [];
              for (let r = 0; r < t.length; ++r) e.push(255 & t.charCodeAt(r));
              return e;
            })(e),
            t,
            r,
            n
          );
        }
        function E(t, e, r, n) {
          return Y($(e), t, r, n);
        }
        function S(t, e, r, n) {
          return Y(
            (function (t, e) {
              let r, n, i;
              const o = [];
              for (let a = 0; a < t.length && !((e -= 2) < 0); ++a)
                (r = t.charCodeAt(a)),
                  (n = r >> 8),
                  (i = r % 256),
                  o.push(i),
                  o.push(n);
              return o;
            })(e, t.length - r),
            t,
            r,
            n
          );
        }
        function k(t, e, r) {
          return 0 === e && r === t.length
            ? n.fromByteArray(t)
            : n.fromByteArray(t.slice(e, r));
        }
        function M(t, e, r) {
          r = Math.min(t.length, r);
          const n = [];
          let i = e;
          for (; i < r; ) {
            const e = t[i];
            let o = null,
              a = e > 239 ? 4 : e > 223 ? 3 : e > 191 ? 2 : 1;
            if (i + a <= r) {
              let r, n, s, u;
              switch (a) {
                case 1:
                  e < 128 && (o = e);
                  break;
                case 2:
                  (r = t[i + 1]),
                    128 == (192 & r) &&
                      ((u = ((31 & e) << 6) | (63 & r)), u > 127 && (o = u));
                  break;
                case 3:
                  (r = t[i + 1]),
                    (n = t[i + 2]),
                    128 == (192 & r) &&
                      128 == (192 & n) &&
                      ((u = ((15 & e) << 12) | ((63 & r) << 6) | (63 & n)),
                      u > 2047 && (u < 55296 || u > 57343) && (o = u));
                  break;
                case 4:
                  (r = t[i + 1]),
                    (n = t[i + 2]),
                    (s = t[i + 3]),
                    128 == (192 & r) &&
                      128 == (192 & n) &&
                      128 == (192 & s) &&
                      ((u =
                        ((15 & e) << 18) |
                        ((63 & r) << 12) |
                        ((63 & n) << 6) |
                        (63 & s)),
                      u > 65535 && u < 1114112 && (o = u));
              }
            }
            null === o
              ? ((o = 65533), (a = 1))
              : o > 65535 &&
                ((o -= 65536),
                n.push(((o >>> 10) & 1023) | 55296),
                (o = 56320 | (1023 & o))),
              n.push(o),
              (i += a);
          }
          return (function (t) {
            const e = t.length;
            if (e <= R) return String.fromCharCode.apply(String, t);
            let r = "",
              n = 0;
            for (; n < e; )
              r += String.fromCharCode.apply(String, t.slice(n, (n += R)));
            return r;
          })(n);
        }
        (e.kMaxLength = a),
          (u.TYPED_ARRAY_SUPPORT = (function () {
            try {
              const t = new Uint8Array(1),
                e = {
                  foo: function () {
                    return 42;
                  },
                };
              return (
                Object.setPrototypeOf(e, Uint8Array.prototype),
                Object.setPrototypeOf(t, e),
                42 === t.foo()
              );
            } catch (t) {
              return !1;
            }
          })()),
          u.TYPED_ARRAY_SUPPORT ||
            "undefined" == typeof console ||
            "function" != typeof console.error ||
            console.error(
              "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
            ),
          Object.defineProperty(u.prototype, "parent", {
            enumerable: !0,
            get: function () {
              if (u.isBuffer(this)) return this.buffer;
            },
          }),
          Object.defineProperty(u.prototype, "offset", {
            enumerable: !0,
            get: function () {
              if (u.isBuffer(this)) return this.byteOffset;
            },
          }),
          (u.poolSize = 8192),
          (u.from = function (t, e, r) {
            return l(t, e, r);
          }),
          Object.setPrototypeOf(u.prototype, Uint8Array.prototype),
          Object.setPrototypeOf(u, Uint8Array),
          (u.alloc = function (t, e, r) {
            return (function (t, e, r) {
              return (
                h(t),
                t <= 0
                  ? s(t)
                  : void 0 !== e
                  ? "string" == typeof r
                    ? s(t).fill(e, r)
                    : s(t).fill(e)
                  : s(t)
              );
            })(t, e, r);
          }),
          (u.allocUnsafe = function (t) {
            return f(t);
          }),
          (u.allocUnsafeSlow = function (t) {
            return f(t);
          }),
          (u.isBuffer = function (t) {
            return null != t && !0 === t._isBuffer && t !== u.prototype;
          }),
          (u.compare = function (t, e) {
            if (
              (X(t, Uint8Array) && (t = u.from(t, t.offset, t.byteLength)),
              X(e, Uint8Array) && (e = u.from(e, e.offset, e.byteLength)),
              !u.isBuffer(t) || !u.isBuffer(e))
            )
              throw new TypeError(
                'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
              );
            if (t === e) return 0;
            let r = t.length,
              n = e.length;
            for (let i = 0, o = Math.min(r, n); i < o; ++i)
              if (t[i] !== e[i]) {
                (r = t[i]), (n = e[i]);
                break;
              }
            return r < n ? -1 : n < r ? 1 : 0;
          }),
          (u.isEncoding = function (t) {
            switch (String(t).toLowerCase()) {
              case "hex":
              case "utf8":
              case "utf-8":
              case "ascii":
              case "latin1":
              case "binary":
              case "base64":
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return !0;
              default:
                return !1;
            }
          }),
          (u.concat = function (t, e) {
            if (!Array.isArray(t))
              throw new TypeError(
                '"list" argument must be an Array of Buffers'
              );
            if (0 === t.length) return u.alloc(0);
            let r;
            if (void 0 === e)
              for (e = 0, r = 0; r < t.length; ++r) e += t[r].length;
            const n = u.allocUnsafe(e);
            let i = 0;
            for (r = 0; r < t.length; ++r) {
              let e = t[r];
              if (X(e, Uint8Array))
                i + e.length > n.length
                  ? (u.isBuffer(e) || (e = u.from(e)), e.copy(n, i))
                  : Uint8Array.prototype.set.call(n, e, i);
              else {
                if (!u.isBuffer(e))
                  throw new TypeError(
                    '"list" argument must be an Array of Buffers'
                  );
                e.copy(n, i);
              }
              i += e.length;
            }
            return n;
          }),
          (u.byteLength = g),
          (u.prototype._isBuffer = !0),
          (u.prototype.swap16 = function () {
            const t = this.length;
            if (t % 2 != 0)
              throw new RangeError("Buffer size must be a multiple of 16-bits");
            for (let e = 0; e < t; e += 2) v(this, e, e + 1);
            return this;
          }),
          (u.prototype.swap32 = function () {
            const t = this.length;
            if (t % 4 != 0)
              throw new RangeError("Buffer size must be a multiple of 32-bits");
            for (let e = 0; e < t; e += 4)
              v(this, e, e + 3), v(this, e + 1, e + 2);
            return this;
          }),
          (u.prototype.swap64 = function () {
            const t = this.length;
            if (t % 8 != 0)
              throw new RangeError("Buffer size must be a multiple of 64-bits");
            for (let e = 0; e < t; e += 8)
              v(this, e, e + 7),
                v(this, e + 1, e + 6),
                v(this, e + 2, e + 5),
                v(this, e + 3, e + 4);
            return this;
          }),
          (u.prototype.toString = function () {
            const t = this.length;
            return 0 === t
              ? ""
              : 0 === arguments.length
              ? M(this, 0, t)
              : y.apply(this, arguments);
          }),
          (u.prototype.toLocaleString = u.prototype.toString),
          (u.prototype.equals = function (t) {
            if (!u.isBuffer(t))
              throw new TypeError("Argument must be a Buffer");
            return this === t || 0 === u.compare(this, t);
          }),
          (u.prototype.inspect = function () {
            let t = "";
            const r = e.INSPECT_MAX_BYTES;
            return (
              (t = this.toString("hex", 0, r)
                .replace(/(.{2})/g, "$1 ")
                .trim()),
              this.length > r && (t += " ... "),
              "<Buffer " + t + ">"
            );
          }),
          o && (u.prototype[o] = u.prototype.inspect),
          (u.prototype.compare = function (t, e, r, n, i) {
            if (
              (X(t, Uint8Array) && (t = u.from(t, t.offset, t.byteLength)),
              !u.isBuffer(t))
            )
              throw new TypeError(
                'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
                  typeof t
              );
            if (
              (void 0 === e && (e = 0),
              void 0 === r && (r = t ? t.length : 0),
              void 0 === n && (n = 0),
              void 0 === i && (i = this.length),
              e < 0 || r > t.length || n < 0 || i > this.length)
            )
              throw new RangeError("out of range index");
            if (n >= i && e >= r) return 0;
            if (n >= i) return -1;
            if (e >= r) return 1;
            if (this === t) return 0;
            let o = (i >>>= 0) - (n >>>= 0),
              a = (r >>>= 0) - (e >>>= 0);
            const s = Math.min(o, a),
              l = this.slice(n, i),
              h = t.slice(e, r);
            for (let t = 0; t < s; ++t)
              if (l[t] !== h[t]) {
                (o = l[t]), (a = h[t]);
                break;
              }
            return o < a ? -1 : a < o ? 1 : 0;
          }),
          (u.prototype.includes = function (t, e, r) {
            return -1 !== this.indexOf(t, e, r);
          }),
          (u.prototype.indexOf = function (t, e, r) {
            return b(this, t, e, r, !0);
          }),
          (u.prototype.lastIndexOf = function (t, e, r) {
            return b(this, t, e, r, !1);
          }),
          (u.prototype.write = function (t, e, r, n) {
            if (void 0 === e) (n = "utf8"), (r = this.length), (e = 0);
            else if (void 0 === r && "string" == typeof e)
              (n = e), (r = this.length), (e = 0);
            else {
              if (!isFinite(e))
                throw new Error(
                  "Buffer.write(string, encoding, offset[, length]) is no longer supported"
                );
              (e >>>= 0),
                isFinite(r)
                  ? ((r >>>= 0), void 0 === n && (n = "utf8"))
                  : ((n = r), (r = void 0));
            }
            const i = this.length - e;
            if (
              ((void 0 === r || r > i) && (r = i),
              (t.length > 0 && (r < 0 || e < 0)) || e > this.length)
            )
              throw new RangeError("Attempt to write outside buffer bounds");
            n || (n = "utf8");
            let o = !1;
            for (;;)
              switch (n) {
                case "hex":
                  return w(this, t, e, r);
                case "utf8":
                case "utf-8":
                  return x(this, t, e, r);
                case "ascii":
                case "latin1":
                case "binary":
                  return _(this, t, e, r);
                case "base64":
                  return E(this, t, e, r);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return S(this, t, e, r);
                default:
                  if (o) throw new TypeError("Unknown encoding: " + n);
                  (n = ("" + n).toLowerCase()), (o = !0);
              }
          }),
          (u.prototype.toJSON = function () {
            return {
              type: "Buffer",
              data: Array.prototype.slice.call(this._arr || this, 0),
            };
          });
        const R = 4096;
        function A(t, e, r) {
          let n = "";
          r = Math.min(t.length, r);
          for (let i = e; i < r; ++i) n += String.fromCharCode(127 & t[i]);
          return n;
        }
        function j(t, e, r) {
          let n = "";
          r = Math.min(t.length, r);
          for (let i = e; i < r; ++i) n += String.fromCharCode(t[i]);
          return n;
        }
        function P(t, e, r) {
          const n = t.length;
          (!e || e < 0) && (e = 0), (!r || r < 0 || r > n) && (r = n);
          let i = "";
          for (let n = e; n < r; ++n) i += J[t[n]];
          return i;
        }
        function T(t, e, r) {
          const n = t.slice(e, r);
          let i = "";
          for (let t = 0; t < n.length - 1; t += 2)
            i += String.fromCharCode(n[t] + 256 * n[t + 1]);
          return i;
        }
        function I(t, e, r) {
          if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
          if (t + e > r)
            throw new RangeError("Trying to access beyond buffer length");
        }
        function O(t, e, r, n, i, o) {
          if (!u.isBuffer(t))
            throw new TypeError('"buffer" argument must be a Buffer instance');
          if (e > i || e < o)
            throw new RangeError('"value" argument is out of bounds');
          if (r + n > t.length) throw new RangeError("Index out of range");
        }
        function B(t, e, r, n, i) {
          q(e, n, i, t, r, 7);
          let o = Number(e & BigInt(4294967295));
          (t[r++] = o),
            (o >>= 8),
            (t[r++] = o),
            (o >>= 8),
            (t[r++] = o),
            (o >>= 8),
            (t[r++] = o);
          let a = Number((e >> BigInt(32)) & BigInt(4294967295));
          return (
            (t[r++] = a),
            (a >>= 8),
            (t[r++] = a),
            (a >>= 8),
            (t[r++] = a),
            (a >>= 8),
            (t[r++] = a),
            r
          );
        }
        function L(t, e, r, n, i) {
          q(e, n, i, t, r, 7);
          let o = Number(e & BigInt(4294967295));
          (t[r + 7] = o),
            (o >>= 8),
            (t[r + 6] = o),
            (o >>= 8),
            (t[r + 5] = o),
            (o >>= 8),
            (t[r + 4] = o);
          let a = Number((e >> BigInt(32)) & BigInt(4294967295));
          return (
            (t[r + 3] = a),
            (a >>= 8),
            (t[r + 2] = a),
            (a >>= 8),
            (t[r + 1] = a),
            (a >>= 8),
            (t[r] = a),
            r + 8
          );
        }
        function C(t, e, r, n, i, o) {
          if (r + n > t.length) throw new RangeError("Index out of range");
          if (r < 0) throw new RangeError("Index out of range");
        }
        function N(t, e, r, n, o) {
          return (
            (e = +e),
            (r >>>= 0),
            o || C(t, 0, r, 4),
            i.write(t, e, r, n, 23, 4),
            r + 4
          );
        }
        function F(t, e, r, n, o) {
          return (
            (e = +e),
            (r >>>= 0),
            o || C(t, 0, r, 8),
            i.write(t, e, r, n, 52, 8),
            r + 8
          );
        }
        (u.prototype.slice = function (t, e) {
          const r = this.length;
          (t = ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r),
            (e = void 0 === e ? r : ~~e) < 0
              ? (e += r) < 0 && (e = 0)
              : e > r && (e = r),
            e < t && (e = t);
          const n = this.subarray(t, e);
          return Object.setPrototypeOf(n, u.prototype), n;
        }),
          (u.prototype.readUintLE = u.prototype.readUIntLE =
            function (t, e, r) {
              (t >>>= 0), (e >>>= 0), r || I(t, e, this.length);
              let n = this[t],
                i = 1,
                o = 0;
              for (; ++o < e && (i *= 256); ) n += this[t + o] * i;
              return n;
            }),
          (u.prototype.readUintBE = u.prototype.readUIntBE =
            function (t, e, r) {
              (t >>>= 0), (e >>>= 0), r || I(t, e, this.length);
              let n = this[t + --e],
                i = 1;
              for (; e > 0 && (i *= 256); ) n += this[t + --e] * i;
              return n;
            }),
          (u.prototype.readUint8 = u.prototype.readUInt8 =
            function (t, e) {
              return (t >>>= 0), e || I(t, 1, this.length), this[t];
            }),
          (u.prototype.readUint16LE = u.prototype.readUInt16LE =
            function (t, e) {
              return (
                (t >>>= 0),
                e || I(t, 2, this.length),
                this[t] | (this[t + 1] << 8)
              );
            }),
          (u.prototype.readUint16BE = u.prototype.readUInt16BE =
            function (t, e) {
              return (
                (t >>>= 0),
                e || I(t, 2, this.length),
                (this[t] << 8) | this[t + 1]
              );
            }),
          (u.prototype.readUint32LE = u.prototype.readUInt32LE =
            function (t, e) {
              return (
                (t >>>= 0),
                e || I(t, 4, this.length),
                (this[t] | (this[t + 1] << 8) | (this[t + 2] << 16)) +
                  16777216 * this[t + 3]
              );
            }),
          (u.prototype.readUint32BE = u.prototype.readUInt32BE =
            function (t, e) {
              return (
                (t >>>= 0),
                e || I(t, 4, this.length),
                16777216 * this[t] +
                  ((this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3])
              );
            }),
          (u.prototype.readBigUInt64LE = K(function (t) {
            z((t >>>= 0), "offset");
            const e = this[t],
              r = this[t + 7];
            (void 0 !== e && void 0 !== r) || G(t, this.length - 8);
            const n =
                e + 256 * this[++t] + 65536 * this[++t] + this[++t] * 2 ** 24,
              i = this[++t] + 256 * this[++t] + 65536 * this[++t] + r * 2 ** 24;
            return BigInt(n) + (BigInt(i) << BigInt(32));
          })),
          (u.prototype.readBigUInt64BE = K(function (t) {
            z((t >>>= 0), "offset");
            const e = this[t],
              r = this[t + 7];
            (void 0 !== e && void 0 !== r) || G(t, this.length - 8);
            const n =
                e * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + this[++t],
              i = this[++t] * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + r;
            return (BigInt(n) << BigInt(32)) + BigInt(i);
          })),
          (u.prototype.readIntLE = function (t, e, r) {
            (t >>>= 0), (e >>>= 0), r || I(t, e, this.length);
            let n = this[t],
              i = 1,
              o = 0;
            for (; ++o < e && (i *= 256); ) n += this[t + o] * i;
            return (i *= 128), n >= i && (n -= Math.pow(2, 8 * e)), n;
          }),
          (u.prototype.readIntBE = function (t, e, r) {
            (t >>>= 0), (e >>>= 0), r || I(t, e, this.length);
            let n = e,
              i = 1,
              o = this[t + --n];
            for (; n > 0 && (i *= 256); ) o += this[t + --n] * i;
            return (i *= 128), o >= i && (o -= Math.pow(2, 8 * e)), o;
          }),
          (u.prototype.readInt8 = function (t, e) {
            return (
              (t >>>= 0),
              e || I(t, 1, this.length),
              128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
            );
          }),
          (u.prototype.readInt16LE = function (t, e) {
            (t >>>= 0), e || I(t, 2, this.length);
            const r = this[t] | (this[t + 1] << 8);
            return 32768 & r ? 4294901760 | r : r;
          }),
          (u.prototype.readInt16BE = function (t, e) {
            (t >>>= 0), e || I(t, 2, this.length);
            const r = this[t + 1] | (this[t] << 8);
            return 32768 & r ? 4294901760 | r : r;
          }),
          (u.prototype.readInt32LE = function (t, e) {
            return (
              (t >>>= 0),
              e || I(t, 4, this.length),
              this[t] |
                (this[t + 1] << 8) |
                (this[t + 2] << 16) |
                (this[t + 3] << 24)
            );
          }),
          (u.prototype.readInt32BE = function (t, e) {
            return (
              (t >>>= 0),
              e || I(t, 4, this.length),
              (this[t] << 24) |
                (this[t + 1] << 16) |
                (this[t + 2] << 8) |
                this[t + 3]
            );
          }),
          (u.prototype.readBigInt64LE = K(function (t) {
            z((t >>>= 0), "offset");
            const e = this[t],
              r = this[t + 7];
            (void 0 !== e && void 0 !== r) || G(t, this.length - 8);
            const n =
              this[t + 4] + 256 * this[t + 5] + 65536 * this[t + 6] + (r << 24);
            return (
              (BigInt(n) << BigInt(32)) +
              BigInt(
                e + 256 * this[++t] + 65536 * this[++t] + this[++t] * 2 ** 24
              )
            );
          })),
          (u.prototype.readBigInt64BE = K(function (t) {
            z((t >>>= 0), "offset");
            const e = this[t],
              r = this[t + 7];
            (void 0 !== e && void 0 !== r) || G(t, this.length - 8);
            const n =
              (e << 24) + 65536 * this[++t] + 256 * this[++t] + this[++t];
            return (
              (BigInt(n) << BigInt(32)) +
              BigInt(
                this[++t] * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + r
              )
            );
          })),
          (u.prototype.readFloatLE = function (t, e) {
            return (
              (t >>>= 0), e || I(t, 4, this.length), i.read(this, t, !0, 23, 4)
            );
          }),
          (u.prototype.readFloatBE = function (t, e) {
            return (
              (t >>>= 0), e || I(t, 4, this.length), i.read(this, t, !1, 23, 4)
            );
          }),
          (u.prototype.readDoubleLE = function (t, e) {
            return (
              (t >>>= 0), e || I(t, 8, this.length), i.read(this, t, !0, 52, 8)
            );
          }),
          (u.prototype.readDoubleBE = function (t, e) {
            return (
              (t >>>= 0), e || I(t, 8, this.length), i.read(this, t, !1, 52, 8)
            );
          }),
          (u.prototype.writeUintLE = u.prototype.writeUIntLE =
            function (t, e, r, n) {
              if (((t = +t), (e >>>= 0), (r >>>= 0), !n)) {
                O(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
              }
              let i = 1,
                o = 0;
              for (this[e] = 255 & t; ++o < r && (i *= 256); )
                this[e + o] = (t / i) & 255;
              return e + r;
            }),
          (u.prototype.writeUintBE = u.prototype.writeUIntBE =
            function (t, e, r, n) {
              if (((t = +t), (e >>>= 0), (r >>>= 0), !n)) {
                O(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
              }
              let i = r - 1,
                o = 1;
              for (this[e + i] = 255 & t; --i >= 0 && (o *= 256); )
                this[e + i] = (t / o) & 255;
              return e + r;
            }),
          (u.prototype.writeUint8 = u.prototype.writeUInt8 =
            function (t, e, r) {
              return (
                (t = +t),
                (e >>>= 0),
                r || O(this, t, e, 1, 255, 0),
                (this[e] = 255 & t),
                e + 1
              );
            }),
          (u.prototype.writeUint16LE = u.prototype.writeUInt16LE =
            function (t, e, r) {
              return (
                (t = +t),
                (e >>>= 0),
                r || O(this, t, e, 2, 65535, 0),
                (this[e] = 255 & t),
                (this[e + 1] = t >>> 8),
                e + 2
              );
            }),
          (u.prototype.writeUint16BE = u.prototype.writeUInt16BE =
            function (t, e, r) {
              return (
                (t = +t),
                (e >>>= 0),
                r || O(this, t, e, 2, 65535, 0),
                (this[e] = t >>> 8),
                (this[e + 1] = 255 & t),
                e + 2
              );
            }),
          (u.prototype.writeUint32LE = u.prototype.writeUInt32LE =
            function (t, e, r) {
              return (
                (t = +t),
                (e >>>= 0),
                r || O(this, t, e, 4, 4294967295, 0),
                (this[e + 3] = t >>> 24),
                (this[e + 2] = t >>> 16),
                (this[e + 1] = t >>> 8),
                (this[e] = 255 & t),
                e + 4
              );
            }),
          (u.prototype.writeUint32BE = u.prototype.writeUInt32BE =
            function (t, e, r) {
              return (
                (t = +t),
                (e >>>= 0),
                r || O(this, t, e, 4, 4294967295, 0),
                (this[e] = t >>> 24),
                (this[e + 1] = t >>> 16),
                (this[e + 2] = t >>> 8),
                (this[e + 3] = 255 & t),
                e + 4
              );
            }),
          (u.prototype.writeBigUInt64LE = K(function (t, e = 0) {
            return B(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"));
          })),
          (u.prototype.writeBigUInt64BE = K(function (t, e = 0) {
            return L(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"));
          })),
          (u.prototype.writeIntLE = function (t, e, r, n) {
            if (((t = +t), (e >>>= 0), !n)) {
              const n = Math.pow(2, 8 * r - 1);
              O(this, t, e, r, n - 1, -n);
            }
            let i = 0,
              o = 1,
              a = 0;
            for (this[e] = 255 & t; ++i < r && (o *= 256); )
              t < 0 && 0 === a && 0 !== this[e + i - 1] && (a = 1),
                (this[e + i] = (((t / o) >> 0) - a) & 255);
            return e + r;
          }),
          (u.prototype.writeIntBE = function (t, e, r, n) {
            if (((t = +t), (e >>>= 0), !n)) {
              const n = Math.pow(2, 8 * r - 1);
              O(this, t, e, r, n - 1, -n);
            }
            let i = r - 1,
              o = 1,
              a = 0;
            for (this[e + i] = 255 & t; --i >= 0 && (o *= 256); )
              t < 0 && 0 === a && 0 !== this[e + i + 1] && (a = 1),
                (this[e + i] = (((t / o) >> 0) - a) & 255);
            return e + r;
          }),
          (u.prototype.writeInt8 = function (t, e, r) {
            return (
              (t = +t),
              (e >>>= 0),
              r || O(this, t, e, 1, 127, -128),
              t < 0 && (t = 255 + t + 1),
              (this[e] = 255 & t),
              e + 1
            );
          }),
          (u.prototype.writeInt16LE = function (t, e, r) {
            return (
              (t = +t),
              (e >>>= 0),
              r || O(this, t, e, 2, 32767, -32768),
              (this[e] = 255 & t),
              (this[e + 1] = t >>> 8),
              e + 2
            );
          }),
          (u.prototype.writeInt16BE = function (t, e, r) {
            return (
              (t = +t),
              (e >>>= 0),
              r || O(this, t, e, 2, 32767, -32768),
              (this[e] = t >>> 8),
              (this[e + 1] = 255 & t),
              e + 2
            );
          }),
          (u.prototype.writeInt32LE = function (t, e, r) {
            return (
              (t = +t),
              (e >>>= 0),
              r || O(this, t, e, 4, 2147483647, -2147483648),
              (this[e] = 255 & t),
              (this[e + 1] = t >>> 8),
              (this[e + 2] = t >>> 16),
              (this[e + 3] = t >>> 24),
              e + 4
            );
          }),
          (u.prototype.writeInt32BE = function (t, e, r) {
            return (
              (t = +t),
              (e >>>= 0),
              r || O(this, t, e, 4, 2147483647, -2147483648),
              t < 0 && (t = 4294967295 + t + 1),
              (this[e] = t >>> 24),
              (this[e + 1] = t >>> 16),
              (this[e + 2] = t >>> 8),
              (this[e + 3] = 255 & t),
              e + 4
            );
          }),
          (u.prototype.writeBigInt64LE = K(function (t, e = 0) {
            return B(
              this,
              t,
              e,
              -BigInt("0x8000000000000000"),
              BigInt("0x7fffffffffffffff")
            );
          })),
          (u.prototype.writeBigInt64BE = K(function (t, e = 0) {
            return L(
              this,
              t,
              e,
              -BigInt("0x8000000000000000"),
              BigInt("0x7fffffffffffffff")
            );
          })),
          (u.prototype.writeFloatLE = function (t, e, r) {
            return N(this, t, e, !0, r);
          }),
          (u.prototype.writeFloatBE = function (t, e, r) {
            return N(this, t, e, !1, r);
          }),
          (u.prototype.writeDoubleLE = function (t, e, r) {
            return F(this, t, e, !0, r);
          }),
          (u.prototype.writeDoubleBE = function (t, e, r) {
            return F(this, t, e, !1, r);
          }),
          (u.prototype.copy = function (t, e, r, n) {
            if (!u.isBuffer(t))
              throw new TypeError("argument should be a Buffer");
            if (
              (r || (r = 0),
              n || 0 === n || (n = this.length),
              e >= t.length && (e = t.length),
              e || (e = 0),
              n > 0 && n < r && (n = r),
              n === r)
            )
              return 0;
            if (0 === t.length || 0 === this.length) return 0;
            if (e < 0) throw new RangeError("targetStart out of bounds");
            if (r < 0 || r >= this.length)
              throw new RangeError("Index out of range");
            if (n < 0) throw new RangeError("sourceEnd out of bounds");
            n > this.length && (n = this.length),
              t.length - e < n - r && (n = t.length - e + r);
            const i = n - r;
            return (
              this === t && "function" == typeof Uint8Array.prototype.copyWithin
                ? this.copyWithin(e, r, n)
                : Uint8Array.prototype.set.call(t, this.subarray(r, n), e),
              i
            );
          }),
          (u.prototype.fill = function (t, e, r, n) {
            if ("string" == typeof t) {
              if (
                ("string" == typeof e
                  ? ((n = e), (e = 0), (r = this.length))
                  : "string" == typeof r && ((n = r), (r = this.length)),
                void 0 !== n && "string" != typeof n)
              )
                throw new TypeError("encoding must be a string");
              if ("string" == typeof n && !u.isEncoding(n))
                throw new TypeError("Unknown encoding: " + n);
              if (1 === t.length) {
                const e = t.charCodeAt(0);
                (("utf8" === n && e < 128) || "latin1" === n) && (t = e);
              }
            } else
              "number" == typeof t
                ? (t &= 255)
                : "boolean" == typeof t && (t = Number(t));
            if (e < 0 || this.length < e || this.length < r)
              throw new RangeError("Out of range index");
            if (r <= e) return this;
            let i;
            if (
              ((e >>>= 0),
              (r = void 0 === r ? this.length : r >>> 0),
              t || (t = 0),
              "number" == typeof t)
            )
              for (i = e; i < r; ++i) this[i] = t;
            else {
              const o = u.isBuffer(t) ? t : u.from(t, n),
                a = o.length;
              if (0 === a)
                throw new TypeError(
                  'The value "' + t + '" is invalid for argument "value"'
                );
              for (i = 0; i < r - e; ++i) this[i + e] = o[i % a];
            }
            return this;
          });
        const U = {};
        function D(t, e, r) {
          U[t] = class extends r {
            constructor() {
              super(),
                Object.defineProperty(this, "message", {
                  value: e.apply(this, arguments),
                  writable: !0,
                  configurable: !0,
                }),
                (this.name = `${this.name} [${t}]`),
                this.stack,
                delete this.name;
            }
            get code() {
              return t;
            }
            set code(t) {
              Object.defineProperty(this, "code", {
                configurable: !0,
                enumerable: !0,
                value: t,
                writable: !0,
              });
            }
            toString() {
              return `${this.name} [${t}]: ${this.message}`;
            }
          };
        }
        function V(t) {
          let e = "",
            r = t.length;
          const n = "-" === t[0] ? 1 : 0;
          for (; r >= n + 4; r -= 3) e = `_${t.slice(r - 3, r)}${e}`;
          return `${t.slice(0, r)}${e}`;
        }
        function q(t, e, r, n, i, o) {
          if (t > r || t < e) {
            const n = "bigint" == typeof e ? "n" : "";
            let i;
            throw (
              ((i =
                o > 3
                  ? 0 === e || e === BigInt(0)
                    ? `>= 0${n} and < 2${n} ** ${8 * (o + 1)}${n}`
                    : `>= -(2${n} ** ${8 * (o + 1) - 1}${n}) and < 2 ** ${
                        8 * (o + 1) - 1
                      }${n}`
                  : `>= ${e}${n} and <= ${r}${n}`),
              new U.ERR_OUT_OF_RANGE("value", i, t))
            );
          }
          !(function (t, e, r) {
            z(e, "offset"),
              (void 0 !== t[e] && void 0 !== t[e + r]) ||
                G(e, t.length - (r + 1));
          })(n, i, o);
        }
        function z(t, e) {
          if ("number" != typeof t)
            throw new U.ERR_INVALID_ARG_TYPE(e, "number", t);
        }
        function G(t, e, r) {
          if (Math.floor(t) !== t)
            throw (
              (z(t, r), new U.ERR_OUT_OF_RANGE(r || "offset", "an integer", t))
            );
          if (e < 0) throw new U.ERR_BUFFER_OUT_OF_BOUNDS();
          throw new U.ERR_OUT_OF_RANGE(
            r || "offset",
            `>= ${r ? 1 : 0} and <= ${e}`,
            t
          );
        }
        D(
          "ERR_BUFFER_OUT_OF_BOUNDS",
          function (t) {
            return t
              ? t + " is outside of buffer bounds"
              : "Attempt to access memory outside buffer bounds";
          },
          RangeError
        ),
          D(
            "ERR_INVALID_ARG_TYPE",
            function (t, e) {
              return `The "${t}" argument must be of type number. Received type ${typeof e}`;
            },
            TypeError
          ),
          D(
            "ERR_OUT_OF_RANGE",
            function (t, e, r) {
              let n = `The value of "${t}" is out of range.`,
                i = r;
              return (
                Number.isInteger(r) && Math.abs(r) > 2 ** 32
                  ? (i = V(String(r)))
                  : "bigint" == typeof r &&
                    ((i = String(r)),
                    (r > BigInt(2) ** BigInt(32) ||
                      r < -(BigInt(2) ** BigInt(32))) &&
                      (i = V(i)),
                    (i += "n")),
                (n += ` It must be ${e}. Received ${i}`),
                n
              );
            },
            RangeError
          );
        const W = /[^+/0-9A-Za-z-_]/g;
        function H(t, e) {
          let r;
          e = e || 1 / 0;
          const n = t.length;
          let i = null;
          const o = [];
          for (let a = 0; a < n; ++a) {
            if (((r = t.charCodeAt(a)), r > 55295 && r < 57344)) {
              if (!i) {
                if (r > 56319) {
                  (e -= 3) > -1 && o.push(239, 191, 189);
                  continue;
                }
                if (a + 1 === n) {
                  (e -= 3) > -1 && o.push(239, 191, 189);
                  continue;
                }
                i = r;
                continue;
              }
              if (r < 56320) {
                (e -= 3) > -1 && o.push(239, 191, 189), (i = r);
                continue;
              }
              r = 65536 + (((i - 55296) << 10) | (r - 56320));
            } else i && (e -= 3) > -1 && o.push(239, 191, 189);
            if (((i = null), r < 128)) {
              if ((e -= 1) < 0) break;
              o.push(r);
            } else if (r < 2048) {
              if ((e -= 2) < 0) break;
              o.push((r >> 6) | 192, (63 & r) | 128);
            } else if (r < 65536) {
              if ((e -= 3) < 0) break;
              o.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (63 & r) | 128);
            } else {
              if (!(r < 1114112)) throw new Error("Invalid code point");
              if ((e -= 4) < 0) break;
              o.push(
                (r >> 18) | 240,
                ((r >> 12) & 63) | 128,
                ((r >> 6) & 63) | 128,
                (63 & r) | 128
              );
            }
          }
          return o;
        }
        function $(t) {
          return n.toByteArray(
            (function (t) {
              if ((t = (t = t.split("=")[0]).trim().replace(W, "")).length < 2)
                return "";
              for (; t.length % 4 != 0; ) t += "=";
              return t;
            })(t)
          );
        }
        function Y(t, e, r, n) {
          let i;
          for (i = 0; i < n && !(i + r >= e.length || i >= t.length); ++i)
            e[i + r] = t[i];
          return i;
        }
        function X(t, e) {
          return (
            t instanceof e ||
            (null != t &&
              null != t.constructor &&
              null != t.constructor.name &&
              t.constructor.name === e.name)
          );
        }
        function Z(t) {
          return t != t;
        }
        const J = (function () {
          const t = "0123456789abcdef",
            e = new Array(256);
          for (let r = 0; r < 16; ++r) {
            const n = 16 * r;
            for (let i = 0; i < 16; ++i) e[n + i] = t[r] + t[i];
          }
          return e;
        })();
        function K(t) {
          return "undefined" == typeof BigInt ? Q : t;
        }
        function Q() {
          throw new Error("BigInt not supported");
        }
      },
      7988: (t) => {
        "use strict";
        var e,
          r = "object" == typeof Reflect ? Reflect : null,
          n =
            r && "function" == typeof r.apply
              ? r.apply
              : function (t, e, r) {
                  return Function.prototype.apply.call(t, e, r);
                };
        e =
          r && "function" == typeof r.ownKeys
            ? r.ownKeys
            : Object.getOwnPropertySymbols
            ? function (t) {
                return Object.getOwnPropertyNames(t).concat(
                  Object.getOwnPropertySymbols(t)
                );
              }
            : function (t) {
                return Object.getOwnPropertyNames(t);
              };
        var i =
          Number.isNaN ||
          function (t) {
            return t != t;
          };
        function o() {
          o.init.call(this);
        }
        (t.exports = o),
          (t.exports.once = function (t, e) {
            return new Promise(function (r, n) {
              function i(r) {
                t.removeListener(e, o), n(r);
              }
              function o() {
                "function" == typeof t.removeListener &&
                  t.removeListener("error", i),
                  r([].slice.call(arguments));
              }
              g(t, e, o, { once: !0 }),
                "error" !== e &&
                  (function (t, e, r) {
                    "function" == typeof t.on && g(t, "error", e, r);
                  })(t, i, { once: !0 });
            });
          }),
          (o.EventEmitter = o),
          (o.prototype._events = void 0),
          (o.prototype._eventsCount = 0),
          (o.prototype._maxListeners = void 0);
        var a = 10;
        function s(t) {
          if ("function" != typeof t)
            throw new TypeError(
              'The "listener" argument must be of type Function. Received type ' +
                typeof t
            );
        }
        function u(t) {
          return void 0 === t._maxListeners
            ? o.defaultMaxListeners
            : t._maxListeners;
        }
        function l(t, e, r, n) {
          var i, o, a, l;
          if (
            (s(r),
            void 0 === (o = t._events)
              ? ((o = t._events = Object.create(null)), (t._eventsCount = 0))
              : (void 0 !== o.newListener &&
                  (t.emit("newListener", e, r.listener ? r.listener : r),
                  (o = t._events)),
                (a = o[e])),
            void 0 === a)
          )
            (a = o[e] = r), ++t._eventsCount;
          else if (
            ("function" == typeof a
              ? (a = o[e] = n ? [r, a] : [a, r])
              : n
              ? a.unshift(r)
              : a.push(r),
            (i = u(t)) > 0 && a.length > i && !a.warned)
          ) {
            a.warned = !0;
            var h = new Error(
              "Possible EventEmitter memory leak detected. " +
                a.length +
                " " +
                String(e) +
                " listeners added. Use emitter.setMaxListeners() to increase limit"
            );
            (h.name = "MaxListenersExceededWarning"),
              (h.emitter = t),
              (h.type = e),
              (h.count = a.length),
              (l = h),
              console && console.warn && console.warn(l);
          }
          return t;
        }
        function h() {
          if (!this.fired)
            return (
              this.target.removeListener(this.type, this.wrapFn),
              (this.fired = !0),
              0 === arguments.length
                ? this.listener.call(this.target)
                : this.listener.apply(this.target, arguments)
            );
        }
        function f(t, e, r) {
          var n = {
              fired: !1,
              wrapFn: void 0,
              target: t,
              type: e,
              listener: r,
            },
            i = h.bind(n);
          return (i.listener = r), (n.wrapFn = i), i;
        }
        function c(t, e, r) {
          var n = t._events;
          if (void 0 === n) return [];
          var i = n[e];
          return void 0 === i
            ? []
            : "function" == typeof i
            ? r
              ? [i.listener || i]
              : [i]
            : r
            ? (function (t) {
                for (var e = new Array(t.length), r = 0; r < e.length; ++r)
                  e[r] = t[r].listener || t[r];
                return e;
              })(i)
            : d(i, i.length);
        }
        function p(t) {
          var e = this._events;
          if (void 0 !== e) {
            var r = e[t];
            if ("function" == typeof r) return 1;
            if (void 0 !== r) return r.length;
          }
          return 0;
        }
        function d(t, e) {
          for (var r = new Array(e), n = 0; n < e; ++n) r[n] = t[n];
          return r;
        }
        function g(t, e, r, n) {
          if ("function" == typeof t.on) n.once ? t.once(e, r) : t.on(e, r);
          else {
            if ("function" != typeof t.addEventListener)
              throw new TypeError(
                'The "emitter" argument must be of type EventEmitter. Received type ' +
                  typeof t
              );
            t.addEventListener(e, function i(o) {
              n.once && t.removeEventListener(e, i), r(o);
            });
          }
        }
        Object.defineProperty(o, "defaultMaxListeners", {
          enumerable: !0,
          get: function () {
            return a;
          },
          set: function (t) {
            if ("number" != typeof t || t < 0 || i(t))
              throw new RangeError(
                'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
                  t +
                  "."
              );
            a = t;
          },
        }),
          (o.init = function () {
            (void 0 !== this._events &&
              this._events !== Object.getPrototypeOf(this)._events) ||
              ((this._events = Object.create(null)), (this._eventsCount = 0)),
              (this._maxListeners = this._maxListeners || void 0);
          }),
          (o.prototype.setMaxListeners = function (t) {
            if ("number" != typeof t || t < 0 || i(t))
              throw new RangeError(
                'The value of "n" is out of range. It must be a non-negative number. Received ' +
                  t +
                  "."
              );
            return (this._maxListeners = t), this;
          }),
          (o.prototype.getMaxListeners = function () {
            return u(this);
          }),
          (o.prototype.emit = function (t) {
            for (var e = [], r = 1; r < arguments.length; r++)
              e.push(arguments[r]);
            var i = "error" === t,
              o = this._events;
            if (void 0 !== o) i = i && void 0 === o.error;
            else if (!i) return !1;
            if (i) {
              var a;
              if ((e.length > 0 && (a = e[0]), a instanceof Error)) throw a;
              var s = new Error(
                "Unhandled error." + (a ? " (" + a.message + ")" : "")
              );
              throw ((s.context = a), s);
            }
            var u = o[t];
            if (void 0 === u) return !1;
            if ("function" == typeof u) n(u, this, e);
            else {
              var l = u.length,
                h = d(u, l);
              for (r = 0; r < l; ++r) n(h[r], this, e);
            }
            return !0;
          }),
          (o.prototype.addListener = function (t, e) {
            return l(this, t, e, !1);
          }),
          (o.prototype.on = o.prototype.addListener),
          (o.prototype.prependListener = function (t, e) {
            return l(this, t, e, !0);
          }),
          (o.prototype.once = function (t, e) {
            return s(e), this.on(t, f(this, t, e)), this;
          }),
          (o.prototype.prependOnceListener = function (t, e) {
            return s(e), this.prependListener(t, f(this, t, e)), this;
          }),
          (o.prototype.removeListener = function (t, e) {
            var r, n, i, o, a;
            if ((s(e), void 0 === (n = this._events))) return this;
            if (void 0 === (r = n[t])) return this;
            if (r === e || r.listener === e)
              0 == --this._eventsCount
                ? (this._events = Object.create(null))
                : (delete n[t],
                  n.removeListener &&
                    this.emit("removeListener", t, r.listener || e));
            else if ("function" != typeof r) {
              for (i = -1, o = r.length - 1; o >= 0; o--)
                if (r[o] === e || r[o].listener === e) {
                  (a = r[o].listener), (i = o);
                  break;
                }
              if (i < 0) return this;
              0 === i
                ? r.shift()
                : (function (t, e) {
                    for (; e + 1 < t.length; e++) t[e] = t[e + 1];
                    t.pop();
                  })(r, i),
                1 === r.length && (n[t] = r[0]),
                void 0 !== n.removeListener &&
                  this.emit("removeListener", t, a || e);
            }
            return this;
          }),
          (o.prototype.off = o.prototype.removeListener),
          (o.prototype.removeAllListeners = function (t) {
            var e, r, n;
            if (void 0 === (r = this._events)) return this;
            if (void 0 === r.removeListener)
              return (
                0 === arguments.length
                  ? ((this._events = Object.create(null)),
                    (this._eventsCount = 0))
                  : void 0 !== r[t] &&
                    (0 == --this._eventsCount
                      ? (this._events = Object.create(null))
                      : delete r[t]),
                this
              );
            if (0 === arguments.length) {
              var i,
                o = Object.keys(r);
              for (n = 0; n < o.length; ++n)
                "removeListener" !== (i = o[n]) && this.removeAllListeners(i);
              return (
                this.removeAllListeners("removeListener"),
                (this._events = Object.create(null)),
                (this._eventsCount = 0),
                this
              );
            }
            if ("function" == typeof (e = r[t])) this.removeListener(t, e);
            else if (void 0 !== e)
              for (n = e.length - 1; n >= 0; n--) this.removeListener(t, e[n]);
            return this;
          }),
          (o.prototype.listeners = function (t) {
            return c(this, t, !0);
          }),
          (o.prototype.rawListeners = function (t) {
            return c(this, t, !1);
          }),
          (o.listenerCount = function (t, e) {
            return "function" == typeof t.listenerCount
              ? t.listenerCount(e)
              : p.call(t, e);
          }),
          (o.prototype.listenerCount = p),
          (o.prototype.eventNames = function () {
            return this._eventsCount > 0 ? e(this._events) : [];
          });
      },
      9530: (t) => {
        "use strict";
        function e(t) {
          if ("string" != typeof t)
            throw new TypeError(
              "Path must be a string. Received " + JSON.stringify(t)
            );
        }
        function r(t, e) {
          for (var r, n = "", i = 0, o = -1, a = 0, s = 0; s <= t.length; ++s) {
            if (s < t.length) r = t.charCodeAt(s);
            else {
              if (47 === r) break;
              r = 47;
            }
            if (47 === r) {
              if (o === s - 1 || 1 === a);
              else if (o !== s - 1 && 2 === a) {
                if (
                  n.length < 2 ||
                  2 !== i ||
                  46 !== n.charCodeAt(n.length - 1) ||
                  46 !== n.charCodeAt(n.length - 2)
                )
                  if (n.length > 2) {
                    var u = n.lastIndexOf("/");
                    if (u !== n.length - 1) {
                      -1 === u
                        ? ((n = ""), (i = 0))
                        : (i =
                            (n = n.slice(0, u)).length -
                            1 -
                            n.lastIndexOf("/")),
                        (o = s),
                        (a = 0);
                      continue;
                    }
                  } else if (2 === n.length || 1 === n.length) {
                    (n = ""), (i = 0), (o = s), (a = 0);
                    continue;
                  }
                e && (n.length > 0 ? (n += "/..") : (n = ".."), (i = 2));
              } else
                n.length > 0
                  ? (n += "/" + t.slice(o + 1, s))
                  : (n = t.slice(o + 1, s)),
                  (i = s - o - 1);
              (o = s), (a = 0);
            } else 46 === r && -1 !== a ? ++a : (a = -1);
          }
          return n;
        }
        var n = {
          resolve: function () {
            for (
              var t, n = "", i = !1, o = arguments.length - 1;
              o >= -1 && !i;
              o--
            ) {
              var a;
              o >= 0
                ? (a = arguments[o])
                : (void 0 === t && (t = process.cwd()), (a = t)),
                e(a),
                0 !== a.length &&
                  ((n = a + "/" + n), (i = 47 === a.charCodeAt(0)));
            }
            return (
              (n = r(n, !i)),
              i ? (n.length > 0 ? "/" + n : "/") : n.length > 0 ? n : "."
            );
          },
          normalize: function (t) {
            if ((e(t), 0 === t.length)) return ".";
            var n = 47 === t.charCodeAt(0),
              i = 47 === t.charCodeAt(t.length - 1);
            return (
              0 !== (t = r(t, !n)).length || n || (t = "."),
              t.length > 0 && i && (t += "/"),
              n ? "/" + t : t
            );
          },
          isAbsolute: function (t) {
            return e(t), t.length > 0 && 47 === t.charCodeAt(0);
          },
          join: function () {
            if (0 === arguments.length) return ".";
            for (var t, r = 0; r < arguments.length; ++r) {
              var i = arguments[r];
              e(i), i.length > 0 && (void 0 === t ? (t = i) : (t += "/" + i));
            }
            return void 0 === t ? "." : n.normalize(t);
          },
          relative: function (t, r) {
            if ((e(t), e(r), t === r)) return "";
            if ((t = n.resolve(t)) === (r = n.resolve(r))) return "";
            for (var i = 1; i < t.length && 47 === t.charCodeAt(i); ++i);
            for (
              var o = t.length, a = o - i, s = 1;
              s < r.length && 47 === r.charCodeAt(s);
              ++s
            );
            for (
              var u = r.length - s, l = a < u ? a : u, h = -1, f = 0;
              f <= l;
              ++f
            ) {
              if (f === l) {
                if (u > l) {
                  if (47 === r.charCodeAt(s + f)) return r.slice(s + f + 1);
                  if (0 === f) return r.slice(s + f);
                } else
                  a > l &&
                    (47 === t.charCodeAt(i + f) ? (h = f) : 0 === f && (h = 0));
                break;
              }
              var c = t.charCodeAt(i + f);
              if (c !== r.charCodeAt(s + f)) break;
              47 === c && (h = f);
            }
            var p = "";
            for (f = i + h + 1; f <= o; ++f)
              (f !== o && 47 !== t.charCodeAt(f)) ||
                (0 === p.length ? (p += "..") : (p += "/.."));
            return p.length > 0
              ? p + r.slice(s + h)
              : ((s += h), 47 === r.charCodeAt(s) && ++s, r.slice(s));
          },
          _makeLong: function (t) {
            return t;
          },
          dirname: function (t) {
            if ((e(t), 0 === t.length)) return ".";
            for (
              var r = t.charCodeAt(0),
                n = 47 === r,
                i = -1,
                o = !0,
                a = t.length - 1;
              a >= 1;
              --a
            )
              if (47 === (r = t.charCodeAt(a))) {
                if (!o) {
                  i = a;
                  break;
                }
              } else o = !1;
            return -1 === i
              ? n
                ? "/"
                : "."
              : n && 1 === i
              ? "//"
              : t.slice(0, i);
          },
          basename: function (t, r) {
            if (void 0 !== r && "string" != typeof r)
              throw new TypeError('"ext" argument must be a string');
            e(t);
            var n,
              i = 0,
              o = -1,
              a = !0;
            if (void 0 !== r && r.length > 0 && r.length <= t.length) {
              if (r.length === t.length && r === t) return "";
              var s = r.length - 1,
                u = -1;
              for (n = t.length - 1; n >= 0; --n) {
                var l = t.charCodeAt(n);
                if (47 === l) {
                  if (!a) {
                    i = n + 1;
                    break;
                  }
                } else
                  -1 === u && ((a = !1), (u = n + 1)),
                    s >= 0 &&
                      (l === r.charCodeAt(s)
                        ? -1 == --s && (o = n)
                        : ((s = -1), (o = u)));
              }
              return (
                i === o ? (o = u) : -1 === o && (o = t.length), t.slice(i, o)
              );
            }
            for (n = t.length - 1; n >= 0; --n)
              if (47 === t.charCodeAt(n)) {
                if (!a) {
                  i = n + 1;
                  break;
                }
              } else -1 === o && ((a = !1), (o = n + 1));
            return -1 === o ? "" : t.slice(i, o);
          },
          extname: function (t) {
            e(t);
            for (
              var r = -1, n = 0, i = -1, o = !0, a = 0, s = t.length - 1;
              s >= 0;
              --s
            ) {
              var u = t.charCodeAt(s);
              if (47 !== u)
                -1 === i && ((o = !1), (i = s + 1)),
                  46 === u
                    ? -1 === r
                      ? (r = s)
                      : 1 !== a && (a = 1)
                    : -1 !== r && (a = -1);
              else if (!o) {
                n = s + 1;
                break;
              }
            }
            return -1 === r ||
              -1 === i ||
              0 === a ||
              (1 === a && r === i - 1 && r === n + 1)
              ? ""
              : t.slice(r, i);
          },
          format: function (t) {
            if (null === t || "object" != typeof t)
              throw new TypeError(
                'The "pathObject" argument must be of type Object. Received type ' +
                  typeof t
              );
            return (function (t, e) {
              var r = e.dir || e.root,
                n = e.base || (e.name || "") + (e.ext || "");
              return r ? (r === e.root ? r + n : r + t + n) : n;
            })("/", t);
          },
          parse: function (t) {
            e(t);
            var r = { root: "", dir: "", base: "", ext: "", name: "" };
            if (0 === t.length) return r;
            var n,
              i = t.charCodeAt(0),
              o = 47 === i;
            o ? ((r.root = "/"), (n = 1)) : (n = 0);
            for (
              var a = -1, s = 0, u = -1, l = !0, h = t.length - 1, f = 0;
              h >= n;
              --h
            )
              if (47 !== (i = t.charCodeAt(h)))
                -1 === u && ((l = !1), (u = h + 1)),
                  46 === i
                    ? -1 === a
                      ? (a = h)
                      : 1 !== f && (f = 1)
                    : -1 !== a && (f = -1);
              else if (!l) {
                s = h + 1;
                break;
              }
            return (
              -1 === a ||
              -1 === u ||
              0 === f ||
              (1 === f && a === u - 1 && a === s + 1)
                ? -1 !== u &&
                  (r.base = r.name =
                    0 === s && o ? t.slice(1, u) : t.slice(s, u))
                : (0 === s && o
                    ? ((r.name = t.slice(1, a)), (r.base = t.slice(1, u)))
                    : ((r.name = t.slice(s, a)), (r.base = t.slice(s, u))),
                  (r.ext = t.slice(a, u))),
              s > 0 ? (r.dir = t.slice(0, s - 1)) : o && (r.dir = "/"),
              r
            );
          },
          sep: "/",
          delimiter: ":",
          win32: null,
          posix: null,
        };
        (n.posix = n), (t.exports = n);
      },
      8870: (t) => {
        "use strict";
        var e = {};
        function r(t, r, n) {
          n || (n = Error);
          var i = (function (t) {
            var e, n;
            function i(e, n, i) {
              return (
                t.call(
                  this,
                  (function (t, e, n) {
                    return "string" == typeof r ? r : r(t, e, n);
                  })(e, n, i)
                ) || this
              );
            }
            return (
              (n = t),
              ((e = i).prototype = Object.create(n.prototype)),
              (e.prototype.constructor = e),
              (e.__proto__ = n),
              i
            );
          })(n);
          (i.prototype.name = n.name), (i.prototype.code = t), (e[t] = i);
        }
        function n(t, e) {
          if (Array.isArray(t)) {
            var r = t.length;
            return (
              (t = t.map(function (t) {
                return String(t);
              })),
              r > 2
                ? "one of "
                    .concat(e, " ")
                    .concat(t.slice(0, r - 1).join(", "), ", or ") + t[r - 1]
                : 2 === r
                ? "one of ".concat(e, " ").concat(t[0], " or ").concat(t[1])
                : "of ".concat(e, " ").concat(t[0])
            );
          }
          return "of ".concat(e, " ").concat(String(t));
        }
        r(
          "ERR_INVALID_OPT_VALUE",
          function (t, e) {
            return 'The value "' + e + '" is invalid for option "' + t + '"';
          },
          TypeError
        ),
          r(
            "ERR_INVALID_ARG_TYPE",
            function (t, e, r) {
              var i, o, a, s;
              if (
                ("string" == typeof e &&
                ((o = "not "), e.substr(!a || a < 0 ? 0 : +a, o.length) === o)
                  ? ((i = "must not be"), (e = e.replace(/^not /, "")))
                  : (i = "must be"),
                (function (t, e, r) {
                  return (
                    (void 0 === r || r > t.length) && (r = t.length),
                    t.substring(r - e.length, r) === e
                  );
                })(t, " argument"))
              )
                s = "The ".concat(t, " ").concat(i, " ").concat(n(e, "type"));
              else {
                var u = (function (t, e, r) {
                  return (
                    "number" != typeof r && (r = 0),
                    !(r + e.length > t.length) && -1 !== t.indexOf(e, r)
                  );
                })(t, ".")
                  ? "property"
                  : "argument";
                s = 'The "'
                  .concat(t, '" ')
                  .concat(u, " ")
                  .concat(i, " ")
                  .concat(n(e, "type"));
              }
              return (s += ". Received type ".concat(typeof r));
            },
            TypeError
          ),
          r("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF"),
          r("ERR_METHOD_NOT_IMPLEMENTED", function (t) {
            return "The " + t + " method is not implemented";
          }),
          r("ERR_STREAM_PREMATURE_CLOSE", "Premature close"),
          r("ERR_STREAM_DESTROYED", function (t) {
            return "Cannot call " + t + " after a stream was destroyed";
          }),
          r("ERR_MULTIPLE_CALLBACK", "Callback called multiple times"),
          r("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable"),
          r("ERR_STREAM_WRITE_AFTER_END", "write after end"),
          r(
            "ERR_STREAM_NULL_VALUES",
            "May not write null values to stream",
            TypeError
          ),
          r(
            "ERR_UNKNOWN_ENCODING",
            function (t) {
              return "Unknown encoding: " + t;
            },
            TypeError
          ),
          r(
            "ERR_STREAM_UNSHIFT_AFTER_END_EVENT",
            "stream.unshift() after end event"
          ),
          (t.exports.q = e);
      },
      3536: (t, e, r) => {
        "use strict";
        var n =
          Object.keys ||
          function (t) {
            var e = [];
            for (var r in t) e.push(r);
            return e;
          };
        t.exports = l;
        var i = r(4459),
          o = r(4987);
        r(5717)(l, i);
        for (var a = n(o.prototype), s = 0; s < a.length; s++) {
          var u = a[s];
          l.prototype[u] || (l.prototype[u] = o.prototype[u]);
        }
        function l(t) {
          if (!(this instanceof l)) return new l(t);
          i.call(this, t),
            o.call(this, t),
            (this.allowHalfOpen = !0),
            t &&
              (!1 === t.readable && (this.readable = !1),
              !1 === t.writable && (this.writable = !1),
              !1 === t.allowHalfOpen &&
                ((this.allowHalfOpen = !1), this.once("end", h)));
        }
        function h() {
          this._writableState.ended || process.nextTick(f, this);
        }
        function f(t) {
          t.end();
        }
        Object.defineProperty(l.prototype, "writableHighWaterMark", {
          enumerable: !1,
          get: function () {
            return this._writableState.highWaterMark;
          },
        }),
          Object.defineProperty(l.prototype, "writableBuffer", {
            enumerable: !1,
            get: function () {
              return this._writableState && this._writableState.getBuffer();
            },
          }),
          Object.defineProperty(l.prototype, "writableLength", {
            enumerable: !1,
            get: function () {
              return this._writableState.length;
            },
          }),
          Object.defineProperty(l.prototype, "destroyed", {
            enumerable: !1,
            get: function () {
              return (
                void 0 !== this._readableState &&
                void 0 !== this._writableState &&
                this._readableState.destroyed &&
                this._writableState.destroyed
              );
            },
            set: function (t) {
              void 0 !== this._readableState &&
                void 0 !== this._writableState &&
                ((this._readableState.destroyed = t),
                (this._writableState.destroyed = t));
            },
          });
      },
      8373: (t, e, r) => {
        "use strict";
        t.exports = i;
        var n = r(6695);
        function i(t) {
          if (!(this instanceof i)) return new i(t);
          n.call(this, t);
        }
        r(5717)(i, n),
          (i.prototype._transform = function (t, e, r) {
            r(null, t);
          });
      },
      4459: (t, e, r) => {
        "use strict";
        var n;
        (t.exports = S), (S.ReadableState = E);
        r(7988).EventEmitter;
        var i = function (t, e) {
            return t.listeners(e).length;
          },
          o = r(4150),
          a = r(1664).Buffer,
          s = r.g.Uint8Array || function () {};
        var u,
          l = r(1758);
        u = l && l.debuglog ? l.debuglog("stream") : function () {};
        var h,
          f,
          c,
          p = r(1396),
          d = r(8522),
          g = r(1379).getHighWaterMark,
          y = r(8870).q,
          v = y.ERR_INVALID_ARG_TYPE,
          b = y.ERR_STREAM_PUSH_AFTER_EOF,
          m = y.ERR_METHOD_NOT_IMPLEMENTED,
          w = y.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
        r(5717)(S, o);
        var x = d.errorOrDestroy,
          _ = ["error", "close", "destroy", "pause", "resume"];
        function E(t, e, i) {
          (n = n || r(3536)),
            (t = t || {}),
            "boolean" != typeof i && (i = e instanceof n),
            (this.objectMode = !!t.objectMode),
            i && (this.objectMode = this.objectMode || !!t.readableObjectMode),
            (this.highWaterMark = g(this, t, "readableHighWaterMark", i)),
            (this.buffer = new p()),
            (this.length = 0),
            (this.pipes = null),
            (this.pipesCount = 0),
            (this.flowing = null),
            (this.ended = !1),
            (this.endEmitted = !1),
            (this.reading = !1),
            (this.sync = !0),
            (this.needReadable = !1),
            (this.emittedReadable = !1),
            (this.readableListening = !1),
            (this.resumeScheduled = !1),
            (this.paused = !0),
            (this.emitClose = !1 !== t.emitClose),
            (this.autoDestroy = !!t.autoDestroy),
            (this.destroyed = !1),
            (this.defaultEncoding = t.defaultEncoding || "utf8"),
            (this.awaitDrain = 0),
            (this.readingMore = !1),
            (this.decoder = null),
            (this.encoding = null),
            t.encoding &&
              (h || (h = r(140).s),
              (this.decoder = new h(t.encoding)),
              (this.encoding = t.encoding));
        }
        function S(t) {
          if (((n = n || r(3536)), !(this instanceof S))) return new S(t);
          var e = this instanceof n;
          (this._readableState = new E(t, this, e)),
            (this.readable = !0),
            t &&
              ("function" == typeof t.read && (this._read = t.read),
              "function" == typeof t.destroy && (this._destroy = t.destroy)),
            o.call(this);
        }
        function k(t, e, r, n, i) {
          u("readableAddChunk", e);
          var o,
            l = t._readableState;
          if (null === e)
            (l.reading = !1),
              (function (t, e) {
                if ((u("onEofChunk"), e.ended)) return;
                if (e.decoder) {
                  var r = e.decoder.end();
                  r &&
                    r.length &&
                    (e.buffer.push(r),
                    (e.length += e.objectMode ? 1 : r.length));
                }
                (e.ended = !0),
                  e.sync
                    ? j(t)
                    : ((e.needReadable = !1),
                      e.emittedReadable || ((e.emittedReadable = !0), P(t)));
              })(t, l);
          else if (
            (i ||
              (o = (function (t, e) {
                var r;
                (n = e),
                  a.isBuffer(n) ||
                    n instanceof s ||
                    "string" == typeof e ||
                    void 0 === e ||
                    t.objectMode ||
                    (r = new v("chunk", ["string", "Buffer", "Uint8Array"], e));
                var n;
                return r;
              })(l, e)),
            o)
          )
            x(t, o);
          else if (l.objectMode || (e && e.length > 0))
            if (
              ("string" == typeof e ||
                l.objectMode ||
                Object.getPrototypeOf(e) === a.prototype ||
                (e = (function (t) {
                  return a.from(t);
                })(e)),
              n)
            )
              l.endEmitted ? x(t, new w()) : M(t, l, e, !0);
            else if (l.ended) x(t, new b());
            else {
              if (l.destroyed) return !1;
              (l.reading = !1),
                l.decoder && !r
                  ? ((e = l.decoder.write(e)),
                    l.objectMode || 0 !== e.length ? M(t, l, e, !1) : T(t, l))
                  : M(t, l, e, !1);
            }
          else n || ((l.reading = !1), T(t, l));
          return !l.ended && (l.length < l.highWaterMark || 0 === l.length);
        }
        function M(t, e, r, n) {
          e.flowing && 0 === e.length && !e.sync
            ? ((e.awaitDrain = 0), t.emit("data", r))
            : ((e.length += e.objectMode ? 1 : r.length),
              n ? e.buffer.unshift(r) : e.buffer.push(r),
              e.needReadable && j(t)),
            T(t, e);
        }
        Object.defineProperty(S.prototype, "destroyed", {
          enumerable: !1,
          get: function () {
            return (
              void 0 !== this._readableState && this._readableState.destroyed
            );
          },
          set: function (t) {
            this._readableState && (this._readableState.destroyed = t);
          },
        }),
          (S.prototype.destroy = d.destroy),
          (S.prototype._undestroy = d.undestroy),
          (S.prototype._destroy = function (t, e) {
            e(t);
          }),
          (S.prototype.push = function (t, e) {
            var r,
              n = this._readableState;
            return (
              n.objectMode
                ? (r = !0)
                : "string" == typeof t &&
                  ((e = e || n.defaultEncoding) !== n.encoding &&
                    ((t = a.from(t, e)), (e = "")),
                  (r = !0)),
              k(this, t, e, !1, r)
            );
          }),
          (S.prototype.unshift = function (t) {
            return k(this, t, null, !0, !1);
          }),
          (S.prototype.isPaused = function () {
            return !1 === this._readableState.flowing;
          }),
          (S.prototype.setEncoding = function (t) {
            h || (h = r(140).s);
            var e = new h(t);
            (this._readableState.decoder = e),
              (this._readableState.encoding =
                this._readableState.decoder.encoding);
            for (var n = this._readableState.buffer.head, i = ""; null !== n; )
              (i += e.write(n.data)), (n = n.next);
            return (
              this._readableState.buffer.clear(),
              "" !== i && this._readableState.buffer.push(i),
              (this._readableState.length = i.length),
              this
            );
          });
        var R = 1073741824;
        function A(t, e) {
          return t <= 0 || (0 === e.length && e.ended)
            ? 0
            : e.objectMode
            ? 1
            : t != t
            ? e.flowing && e.length
              ? e.buffer.head.data.length
              : e.length
            : (t > e.highWaterMark &&
                (e.highWaterMark = (function (t) {
                  return (
                    t >= R
                      ? (t = R)
                      : (t--,
                        (t |= t >>> 1),
                        (t |= t >>> 2),
                        (t |= t >>> 4),
                        (t |= t >>> 8),
                        (t |= t >>> 16),
                        t++),
                    t
                  );
                })(t)),
              t <= e.length
                ? t
                : e.ended
                ? e.length
                : ((e.needReadable = !0), 0));
        }
        function j(t) {
          var e = t._readableState;
          u("emitReadable", e.needReadable, e.emittedReadable),
            (e.needReadable = !1),
            e.emittedReadable ||
              (u("emitReadable", e.flowing),
              (e.emittedReadable = !0),
              process.nextTick(P, t));
        }
        function P(t) {
          var e = t._readableState;
          u("emitReadable_", e.destroyed, e.length, e.ended),
            e.destroyed ||
              (!e.length && !e.ended) ||
              (t.emit("readable"), (e.emittedReadable = !1)),
            (e.needReadable =
              !e.flowing && !e.ended && e.length <= e.highWaterMark),
            C(t);
        }
        function T(t, e) {
          e.readingMore || ((e.readingMore = !0), process.nextTick(I, t, e));
        }
        function I(t, e) {
          for (
            ;
            !e.reading &&
            !e.ended &&
            (e.length < e.highWaterMark || (e.flowing && 0 === e.length));

          ) {
            var r = e.length;
            if ((u("maybeReadMore read 0"), t.read(0), r === e.length)) break;
          }
          e.readingMore = !1;
        }
        function O(t) {
          var e = t._readableState;
          (e.readableListening = t.listenerCount("readable") > 0),
            e.resumeScheduled && !e.paused
              ? (e.flowing = !0)
              : t.listenerCount("data") > 0 && t.resume();
        }
        function B(t) {
          u("readable nexttick read 0"), t.read(0);
        }
        function L(t, e) {
          u("resume", e.reading),
            e.reading || t.read(0),
            (e.resumeScheduled = !1),
            t.emit("resume"),
            C(t),
            e.flowing && !e.reading && t.read(0);
        }
        function C(t) {
          var e = t._readableState;
          for (u("flow", e.flowing); e.flowing && null !== t.read(); );
        }
        function N(t, e) {
          return 0 === e.length
            ? null
            : (e.objectMode
                ? (r = e.buffer.shift())
                : !t || t >= e.length
                ? ((r = e.decoder
                    ? e.buffer.join("")
                    : 1 === e.buffer.length
                    ? e.buffer.first()
                    : e.buffer.concat(e.length)),
                  e.buffer.clear())
                : (r = e.buffer.consume(t, e.decoder)),
              r);
          var r;
        }
        function F(t) {
          var e = t._readableState;
          u("endReadable", e.endEmitted),
            e.endEmitted || ((e.ended = !0), process.nextTick(U, e, t));
        }
        function U(t, e) {
          if (
            (u("endReadableNT", t.endEmitted, t.length),
            !t.endEmitted &&
              0 === t.length &&
              ((t.endEmitted = !0),
              (e.readable = !1),
              e.emit("end"),
              t.autoDestroy))
          ) {
            var r = e._writableState;
            (!r || (r.autoDestroy && r.finished)) && e.destroy();
          }
        }
        function D(t, e) {
          for (var r = 0, n = t.length; r < n; r++) if (t[r] === e) return r;
          return -1;
        }
        (S.prototype.read = function (t) {
          u("read", t), (t = parseInt(t, 10));
          var e = this._readableState,
            r = t;
          if (
            (0 !== t && (e.emittedReadable = !1),
            0 === t &&
              e.needReadable &&
              ((0 !== e.highWaterMark
                ? e.length >= e.highWaterMark
                : e.length > 0) ||
                e.ended))
          )
            return (
              u("read: emitReadable", e.length, e.ended),
              0 === e.length && e.ended ? F(this) : j(this),
              null
            );
          if (0 === (t = A(t, e)) && e.ended)
            return 0 === e.length && F(this), null;
          var n,
            i = e.needReadable;
          return (
            u("need readable", i),
            (0 === e.length || e.length - t < e.highWaterMark) &&
              u("length less than watermark", (i = !0)),
            e.ended || e.reading
              ? u("reading or ended", (i = !1))
              : i &&
                (u("do read"),
                (e.reading = !0),
                (e.sync = !0),
                0 === e.length && (e.needReadable = !0),
                this._read(e.highWaterMark),
                (e.sync = !1),
                e.reading || (t = A(r, e))),
            null === (n = t > 0 ? N(t, e) : null)
              ? ((e.needReadable = e.length <= e.highWaterMark), (t = 0))
              : ((e.length -= t), (e.awaitDrain = 0)),
            0 === e.length &&
              (e.ended || (e.needReadable = !0), r !== t && e.ended && F(this)),
            null !== n && this.emit("data", n),
            n
          );
        }),
          (S.prototype._read = function (t) {
            x(this, new m("_read()"));
          }),
          (S.prototype.pipe = function (t, e) {
            var r = this,
              n = this._readableState;
            switch (n.pipesCount) {
              case 0:
                n.pipes = t;
                break;
              case 1:
                n.pipes = [n.pipes, t];
                break;
              default:
                n.pipes.push(t);
            }
            (n.pipesCount += 1), u("pipe count=%d opts=%j", n.pipesCount, e);
            var o =
              (!e || !1 !== e.end) &&
              t !== process.stdout &&
              t !== process.stderr
                ? s
                : g;
            function a(e, i) {
              u("onunpipe"),
                e === r &&
                  i &&
                  !1 === i.hasUnpiped &&
                  ((i.hasUnpiped = !0),
                  u("cleanup"),
                  t.removeListener("close", p),
                  t.removeListener("finish", d),
                  t.removeListener("drain", l),
                  t.removeListener("error", c),
                  t.removeListener("unpipe", a),
                  r.removeListener("end", s),
                  r.removeListener("end", g),
                  r.removeListener("data", f),
                  (h = !0),
                  !n.awaitDrain ||
                    (t._writableState && !t._writableState.needDrain) ||
                    l());
            }
            function s() {
              u("onend"), t.end();
            }
            n.endEmitted ? process.nextTick(o) : r.once("end", o),
              t.on("unpipe", a);
            var l = (function (t) {
              return function () {
                var e = t._readableState;
                u("pipeOnDrain", e.awaitDrain),
                  e.awaitDrain && e.awaitDrain--,
                  0 === e.awaitDrain &&
                    i(t, "data") &&
                    ((e.flowing = !0), C(t));
              };
            })(r);
            t.on("drain", l);
            var h = !1;
            function f(e) {
              u("ondata");
              var i = t.write(e);
              u("dest.write", i),
                !1 === i &&
                  (((1 === n.pipesCount && n.pipes === t) ||
                    (n.pipesCount > 1 && -1 !== D(n.pipes, t))) &&
                    !h &&
                    (u("false write response, pause", n.awaitDrain),
                    n.awaitDrain++),
                  r.pause());
            }
            function c(e) {
              u("onerror", e),
                g(),
                t.removeListener("error", c),
                0 === i(t, "error") && x(t, e);
            }
            function p() {
              t.removeListener("finish", d), g();
            }
            function d() {
              u("onfinish"), t.removeListener("close", p), g();
            }
            function g() {
              u("unpipe"), r.unpipe(t);
            }
            return (
              r.on("data", f),
              (function (t, e, r) {
                if ("function" == typeof t.prependListener)
                  return t.prependListener(e, r);
                t._events && t._events[e]
                  ? Array.isArray(t._events[e])
                    ? t._events[e].unshift(r)
                    : (t._events[e] = [r, t._events[e]])
                  : t.on(e, r);
              })(t, "error", c),
              t.once("close", p),
              t.once("finish", d),
              t.emit("pipe", r),
              n.flowing || (u("pipe resume"), r.resume()),
              t
            );
          }),
          (S.prototype.unpipe = function (t) {
            var e = this._readableState,
              r = { hasUnpiped: !1 };
            if (0 === e.pipesCount) return this;
            if (1 === e.pipesCount)
              return (
                (t && t !== e.pipes) ||
                  (t || (t = e.pipes),
                  (e.pipes = null),
                  (e.pipesCount = 0),
                  (e.flowing = !1),
                  t && t.emit("unpipe", this, r)),
                this
              );
            if (!t) {
              var n = e.pipes,
                i = e.pipesCount;
              (e.pipes = null), (e.pipesCount = 0), (e.flowing = !1);
              for (var o = 0; o < i; o++)
                n[o].emit("unpipe", this, { hasUnpiped: !1 });
              return this;
            }
            var a = D(e.pipes, t);
            return (
              -1 === a ||
                (e.pipes.splice(a, 1),
                (e.pipesCount -= 1),
                1 === e.pipesCount && (e.pipes = e.pipes[0]),
                t.emit("unpipe", this, r)),
              this
            );
          }),
          (S.prototype.on = function (t, e) {
            var r = o.prototype.on.call(this, t, e),
              n = this._readableState;
            return (
              "data" === t
                ? ((n.readableListening = this.listenerCount("readable") > 0),
                  !1 !== n.flowing && this.resume())
                : "readable" === t &&
                  (n.endEmitted ||
                    n.readableListening ||
                    ((n.readableListening = n.needReadable = !0),
                    (n.flowing = !1),
                    (n.emittedReadable = !1),
                    u("on readable", n.length, n.reading),
                    n.length
                      ? j(this)
                      : n.reading || process.nextTick(B, this))),
              r
            );
          }),
          (S.prototype.addListener = S.prototype.on),
          (S.prototype.removeListener = function (t, e) {
            var r = o.prototype.removeListener.call(this, t, e);
            return "readable" === t && process.nextTick(O, this), r;
          }),
          (S.prototype.removeAllListeners = function (t) {
            var e = o.prototype.removeAllListeners.apply(this, arguments);
            return (
              ("readable" !== t && void 0 !== t) || process.nextTick(O, this), e
            );
          }),
          (S.prototype.resume = function () {
            var t = this._readableState;
            return (
              t.flowing ||
                (u("resume"),
                (t.flowing = !t.readableListening),
                (function (t, e) {
                  e.resumeScheduled ||
                    ((e.resumeScheduled = !0), process.nextTick(L, t, e));
                })(this, t)),
              (t.paused = !1),
              this
            );
          }),
          (S.prototype.pause = function () {
            return (
              u("call pause flowing=%j", this._readableState.flowing),
              !1 !== this._readableState.flowing &&
                (u("pause"),
                (this._readableState.flowing = !1),
                this.emit("pause")),
              (this._readableState.paused = !0),
              this
            );
          }),
          (S.prototype.wrap = function (t) {
            var e = this,
              r = this._readableState,
              n = !1;
            for (var i in (t.on("end", function () {
              if ((u("wrapped end"), r.decoder && !r.ended)) {
                var t = r.decoder.end();
                t && t.length && e.push(t);
              }
              e.push(null);
            }),
            t.on("data", function (i) {
              (u("wrapped data"),
              r.decoder && (i = r.decoder.write(i)),
              r.objectMode && null == i) ||
                ((r.objectMode || (i && i.length)) &&
                  (e.push(i) || ((n = !0), t.pause())));
            }),
            t))
              void 0 === this[i] &&
                "function" == typeof t[i] &&
                (this[i] = (function (e) {
                  return function () {
                    return t[e].apply(t, arguments);
                  };
                })(i));
            for (var o = 0; o < _.length; o++)
              t.on(_[o], this.emit.bind(this, _[o]));
            return (
              (this._read = function (e) {
                u("wrapped _read", e), n && ((n = !1), t.resume());
              }),
              this
            );
          }),
          "function" == typeof Symbol &&
            (S.prototype[Symbol.asyncIterator] = function () {
              return void 0 === f && (f = r(6492)), f(this);
            }),
          Object.defineProperty(S.prototype, "readableHighWaterMark", {
            enumerable: !1,
            get: function () {
              return this._readableState.highWaterMark;
            },
          }),
          Object.defineProperty(S.prototype, "readableBuffer", {
            enumerable: !1,
            get: function () {
              return this._readableState && this._readableState.buffer;
            },
          }),
          Object.defineProperty(S.prototype, "readableFlowing", {
            enumerable: !1,
            get: function () {
              return this._readableState.flowing;
            },
            set: function (t) {
              this._readableState && (this._readableState.flowing = t);
            },
          }),
          (S._fromList = N),
          Object.defineProperty(S.prototype, "readableLength", {
            enumerable: !1,
            get: function () {
              return this._readableState.length;
            },
          }),
          "function" == typeof Symbol &&
            (S.from = function (t, e) {
              return void 0 === c && (c = r(8881)), c(S, t, e);
            });
      },
      6695: (t, e, r) => {
        "use strict";
        t.exports = h;
        var n = r(8870).q,
          i = n.ERR_METHOD_NOT_IMPLEMENTED,
          o = n.ERR_MULTIPLE_CALLBACK,
          a = n.ERR_TRANSFORM_ALREADY_TRANSFORMING,
          s = n.ERR_TRANSFORM_WITH_LENGTH_0,
          u = r(3536);
        function l(t, e) {
          var r = this._transformState;
          r.transforming = !1;
          var n = r.writecb;
          if (null === n) return this.emit("error", new o());
          (r.writechunk = null),
            (r.writecb = null),
            null != e && this.push(e),
            n(t);
          var i = this._readableState;
          (i.reading = !1),
            (i.needReadable || i.length < i.highWaterMark) &&
              this._read(i.highWaterMark);
        }
        function h(t) {
          if (!(this instanceof h)) return new h(t);
          u.call(this, t),
            (this._transformState = {
              afterTransform: l.bind(this),
              needTransform: !1,
              transforming: !1,
              writecb: null,
              writechunk: null,
              writeencoding: null,
            }),
            (this._readableState.needReadable = !0),
            (this._readableState.sync = !1),
            t &&
              ("function" == typeof t.transform &&
                (this._transform = t.transform),
              "function" == typeof t.flush && (this._flush = t.flush)),
            this.on("prefinish", f);
        }
        function f() {
          var t = this;
          "function" != typeof this._flush || this._readableState.destroyed
            ? c(this, null, null)
            : this._flush(function (e, r) {
                c(t, e, r);
              });
        }
        function c(t, e, r) {
          if (e) return t.emit("error", e);
          if ((null != r && t.push(r), t._writableState.length)) throw new s();
          if (t._transformState.transforming) throw new a();
          return t.push(null);
        }
        r(5717)(h, u),
          (h.prototype.push = function (t, e) {
            return (
              (this._transformState.needTransform = !1),
              u.prototype.push.call(this, t, e)
            );
          }),
          (h.prototype._transform = function (t, e, r) {
            r(new i("_transform()"));
          }),
          (h.prototype._write = function (t, e, r) {
            var n = this._transformState;
            if (
              ((n.writecb = r),
              (n.writechunk = t),
              (n.writeencoding = e),
              !n.transforming)
            ) {
              var i = this._readableState;
              (n.needTransform ||
                i.needReadable ||
                i.length < i.highWaterMark) &&
                this._read(i.highWaterMark);
            }
          }),
          (h.prototype._read = function (t) {
            var e = this._transformState;
            null === e.writechunk || e.transforming
              ? (e.needTransform = !0)
              : ((e.transforming = !0),
                this._transform(
                  e.writechunk,
                  e.writeencoding,
                  e.afterTransform
                ));
          }),
          (h.prototype._destroy = function (t, e) {
            u.prototype._destroy.call(this, t, function (t) {
              e(t);
            });
          });
      },
      4987: (t, e, r) => {
        "use strict";
        function n(t) {
          var e = this;
          (this.next = null),
            (this.entry = null),
            (this.finish = function () {
              !(function (t, e, r) {
                var n = t.entry;
                t.entry = null;
                for (; n; ) {
                  var i = n.callback;
                  e.pendingcb--, i(r), (n = n.next);
                }
                e.corkedRequestsFree.next = t;
              })(e, t);
            });
        }
        var i;
        (t.exports = S), (S.WritableState = E);
        var o = { deprecate: r(8526) },
          a = r(4150),
          s = r(1664).Buffer,
          u = r.g.Uint8Array || function () {};
        var l,
          h = r(8522),
          f = r(1379).getHighWaterMark,
          c = r(8870).q,
          p = c.ERR_INVALID_ARG_TYPE,
          d = c.ERR_METHOD_NOT_IMPLEMENTED,
          g = c.ERR_MULTIPLE_CALLBACK,
          y = c.ERR_STREAM_CANNOT_PIPE,
          v = c.ERR_STREAM_DESTROYED,
          b = c.ERR_STREAM_NULL_VALUES,
          m = c.ERR_STREAM_WRITE_AFTER_END,
          w = c.ERR_UNKNOWN_ENCODING,
          x = h.errorOrDestroy;
        function _() {}
        function E(t, e, o) {
          (i = i || r(3536)),
            (t = t || {}),
            "boolean" != typeof o && (o = e instanceof i),
            (this.objectMode = !!t.objectMode),
            o && (this.objectMode = this.objectMode || !!t.writableObjectMode),
            (this.highWaterMark = f(this, t, "writableHighWaterMark", o)),
            (this.finalCalled = !1),
            (this.needDrain = !1),
            (this.ending = !1),
            (this.ended = !1),
            (this.finished = !1),
            (this.destroyed = !1);
          var a = !1 === t.decodeStrings;
          (this.decodeStrings = !a),
            (this.defaultEncoding = t.defaultEncoding || "utf8"),
            (this.length = 0),
            (this.writing = !1),
            (this.corked = 0),
            (this.sync = !0),
            (this.bufferProcessing = !1),
            (this.onwrite = function (t) {
              !(function (t, e) {
                var r = t._writableState,
                  n = r.sync,
                  i = r.writecb;
                if ("function" != typeof i) throw new g();
                if (
                  ((function (t) {
                    (t.writing = !1),
                      (t.writecb = null),
                      (t.length -= t.writelen),
                      (t.writelen = 0);
                  })(r),
                  e)
                )
                  !(function (t, e, r, n, i) {
                    --e.pendingcb,
                      r
                        ? (process.nextTick(i, n),
                          process.nextTick(P, t, e),
                          (t._writableState.errorEmitted = !0),
                          x(t, n))
                        : (i(n),
                          (t._writableState.errorEmitted = !0),
                          x(t, n),
                          P(t, e));
                  })(t, r, n, e, i);
                else {
                  var o = A(r) || t.destroyed;
                  o ||
                    r.corked ||
                    r.bufferProcessing ||
                    !r.bufferedRequest ||
                    R(t, r),
                    n ? process.nextTick(M, t, r, o, i) : M(t, r, o, i);
                }
              })(e, t);
            }),
            (this.writecb = null),
            (this.writelen = 0),
            (this.bufferedRequest = null),
            (this.lastBufferedRequest = null),
            (this.pendingcb = 0),
            (this.prefinished = !1),
            (this.errorEmitted = !1),
            (this.emitClose = !1 !== t.emitClose),
            (this.autoDestroy = !!t.autoDestroy),
            (this.bufferedRequestCount = 0),
            (this.corkedRequestsFree = new n(this));
        }
        function S(t) {
          var e = this instanceof (i = i || r(3536));
          if (!e && !l.call(S, this)) return new S(t);
          (this._writableState = new E(t, this, e)),
            (this.writable = !0),
            t &&
              ("function" == typeof t.write && (this._write = t.write),
              "function" == typeof t.writev && (this._writev = t.writev),
              "function" == typeof t.destroy && (this._destroy = t.destroy),
              "function" == typeof t.final && (this._final = t.final)),
            a.call(this);
        }
        function k(t, e, r, n, i, o, a) {
          (e.writelen = n),
            (e.writecb = a),
            (e.writing = !0),
            (e.sync = !0),
            e.destroyed
              ? e.onwrite(new v("write"))
              : r
              ? t._writev(i, e.onwrite)
              : t._write(i, o, e.onwrite),
            (e.sync = !1);
        }
        function M(t, e, r, n) {
          r ||
            (function (t, e) {
              0 === e.length &&
                e.needDrain &&
                ((e.needDrain = !1), t.emit("drain"));
            })(t, e),
            e.pendingcb--,
            n(),
            P(t, e);
        }
        function R(t, e) {
          e.bufferProcessing = !0;
          var r = e.bufferedRequest;
          if (t._writev && r && r.next) {
            var i = e.bufferedRequestCount,
              o = new Array(i),
              a = e.corkedRequestsFree;
            a.entry = r;
            for (var s = 0, u = !0; r; )
              (o[s] = r), r.isBuf || (u = !1), (r = r.next), (s += 1);
            (o.allBuffers = u),
              k(t, e, !0, e.length, o, "", a.finish),
              e.pendingcb++,
              (e.lastBufferedRequest = null),
              a.next
                ? ((e.corkedRequestsFree = a.next), (a.next = null))
                : (e.corkedRequestsFree = new n(e)),
              (e.bufferedRequestCount = 0);
          } else {
            for (; r; ) {
              var l = r.chunk,
                h = r.encoding,
                f = r.callback;
              if (
                (k(t, e, !1, e.objectMode ? 1 : l.length, l, h, f),
                (r = r.next),
                e.bufferedRequestCount--,
                e.writing)
              )
                break;
            }
            null === r && (e.lastBufferedRequest = null);
          }
          (e.bufferedRequest = r), (e.bufferProcessing = !1);
        }
        function A(t) {
          return (
            t.ending &&
            0 === t.length &&
            null === t.bufferedRequest &&
            !t.finished &&
            !t.writing
          );
        }
        function j(t, e) {
          t._final(function (r) {
            e.pendingcb--,
              r && x(t, r),
              (e.prefinished = !0),
              t.emit("prefinish"),
              P(t, e);
          });
        }
        function P(t, e) {
          var r = A(e);
          if (
            r &&
            ((function (t, e) {
              e.prefinished ||
                e.finalCalled ||
                ("function" != typeof t._final || e.destroyed
                  ? ((e.prefinished = !0), t.emit("prefinish"))
                  : (e.pendingcb++,
                    (e.finalCalled = !0),
                    process.nextTick(j, t, e)));
            })(t, e),
            0 === e.pendingcb &&
              ((e.finished = !0), t.emit("finish"), e.autoDestroy))
          ) {
            var n = t._readableState;
            (!n || (n.autoDestroy && n.endEmitted)) && t.destroy();
          }
          return r;
        }
        r(5717)(S, a),
          (E.prototype.getBuffer = function () {
            for (var t = this.bufferedRequest, e = []; t; )
              e.push(t), (t = t.next);
            return e;
          }),
          (function () {
            try {
              Object.defineProperty(E.prototype, "buffer", {
                get: o.deprecate(
                  function () {
                    return this.getBuffer();
                  },
                  "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.",
                  "DEP0003"
                ),
              });
            } catch (t) {}
          })(),
          "function" == typeof Symbol &&
          Symbol.hasInstance &&
          "function" == typeof Function.prototype[Symbol.hasInstance]
            ? ((l = Function.prototype[Symbol.hasInstance]),
              Object.defineProperty(S, Symbol.hasInstance, {
                value: function (t) {
                  return (
                    !!l.call(this, t) ||
                    (this === S && t && t._writableState instanceof E)
                  );
                },
              }))
            : (l = function (t) {
                return t instanceof this;
              }),
          (S.prototype.pipe = function () {
            x(this, new y());
          }),
          (S.prototype.write = function (t, e, r) {
            var n,
              i = this._writableState,
              o = !1,
              a = !i.objectMode && ((n = t), s.isBuffer(n) || n instanceof u);
            return (
              a &&
                !s.isBuffer(t) &&
                (t = (function (t) {
                  return s.from(t);
                })(t)),
              "function" == typeof e && ((r = e), (e = null)),
              a ? (e = "buffer") : e || (e = i.defaultEncoding),
              "function" != typeof r && (r = _),
              i.ending
                ? (function (t, e) {
                    var r = new m();
                    x(t, r), process.nextTick(e, r);
                  })(this, r)
                : (a ||
                    (function (t, e, r, n) {
                      var i;
                      return (
                        null === r
                          ? (i = new b())
                          : "string" == typeof r ||
                            e.objectMode ||
                            (i = new p("chunk", ["string", "Buffer"], r)),
                        !i || (x(t, i), process.nextTick(n, i), !1)
                      );
                    })(this, i, t, r)) &&
                  (i.pendingcb++,
                  (o = (function (t, e, r, n, i, o) {
                    if (!r) {
                      var a = (function (t, e, r) {
                        t.objectMode ||
                          !1 === t.decodeStrings ||
                          "string" != typeof e ||
                          (e = s.from(e, r));
                        return e;
                      })(e, n, i);
                      n !== a && ((r = !0), (i = "buffer"), (n = a));
                    }
                    var u = e.objectMode ? 1 : n.length;
                    e.length += u;
                    var l = e.length < e.highWaterMark;
                    l || (e.needDrain = !0);
                    if (e.writing || e.corked) {
                      var h = e.lastBufferedRequest;
                      (e.lastBufferedRequest = {
                        chunk: n,
                        encoding: i,
                        isBuf: r,
                        callback: o,
                        next: null,
                      }),
                        h
                          ? (h.next = e.lastBufferedRequest)
                          : (e.bufferedRequest = e.lastBufferedRequest),
                        (e.bufferedRequestCount += 1);
                    } else k(t, e, !1, u, n, i, o);
                    return l;
                  })(this, i, a, t, e, r))),
              o
            );
          }),
          (S.prototype.cork = function () {
            this._writableState.corked++;
          }),
          (S.prototype.uncork = function () {
            var t = this._writableState;
            t.corked &&
              (t.corked--,
              t.writing ||
                t.corked ||
                t.bufferProcessing ||
                !t.bufferedRequest ||
                R(this, t));
          }),
          (S.prototype.setDefaultEncoding = function (t) {
            if (
              ("string" == typeof t && (t = t.toLowerCase()),
              !(
                [
                  "hex",
                  "utf8",
                  "utf-8",
                  "ascii",
                  "binary",
                  "base64",
                  "ucs2",
                  "ucs-2",
                  "utf16le",
                  "utf-16le",
                  "raw",
                ].indexOf((t + "").toLowerCase()) > -1
              ))
            )
              throw new w(t);
            return (this._writableState.defaultEncoding = t), this;
          }),
          Object.defineProperty(S.prototype, "writableBuffer", {
            enumerable: !1,
            get: function () {
              return this._writableState && this._writableState.getBuffer();
            },
          }),
          Object.defineProperty(S.prototype, "writableHighWaterMark", {
            enumerable: !1,
            get: function () {
              return this._writableState.highWaterMark;
            },
          }),
          (S.prototype._write = function (t, e, r) {
            r(new d("_write()"));
          }),
          (S.prototype._writev = null),
          (S.prototype.end = function (t, e, r) {
            var n = this._writableState;
            return (
              "function" == typeof t
                ? ((r = t), (t = null), (e = null))
                : "function" == typeof e && ((r = e), (e = null)),
              null != t && this.write(t, e),
              n.corked && ((n.corked = 1), this.uncork()),
              n.ending ||
                (function (t, e, r) {
                  (e.ending = !0),
                    P(t, e),
                    r &&
                      (e.finished ? process.nextTick(r) : t.once("finish", r));
                  (e.ended = !0), (t.writable = !1);
                })(this, n, r),
              this
            );
          }),
          Object.defineProperty(S.prototype, "writableLength", {
            enumerable: !1,
            get: function () {
              return this._writableState.length;
            },
          }),
          Object.defineProperty(S.prototype, "destroyed", {
            enumerable: !1,
            get: function () {
              return (
                void 0 !== this._writableState && this._writableState.destroyed
              );
            },
            set: function (t) {
              this._writableState && (this._writableState.destroyed = t);
            },
          }),
          (S.prototype.destroy = h.destroy),
          (S.prototype._undestroy = h.undestroy),
          (S.prototype._destroy = function (t, e) {
            e(t);
          });
      },
      6492: (t, e, r) => {
        "use strict";
        var n;
        function i(t, e, r) {
          return (
            e in t
              ? Object.defineProperty(t, e, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = r),
            t
          );
        }
        var o = r(3790),
          a = Symbol("lastResolve"),
          s = Symbol("lastReject"),
          u = Symbol("error"),
          l = Symbol("ended"),
          h = Symbol("lastPromise"),
          f = Symbol("handlePromise"),
          c = Symbol("stream");
        function p(t, e) {
          return { value: t, done: e };
        }
        function d(t) {
          var e = t[a];
          if (null !== e) {
            var r = t[c].read();
            null !== r &&
              ((t[h] = null), (t[a] = null), (t[s] = null), e(p(r, !1)));
          }
        }
        function g(t) {
          process.nextTick(d, t);
        }
        var y = Object.getPrototypeOf(function () {}),
          v = Object.setPrototypeOf(
            (i(
              (n = {
                get stream() {
                  return this[c];
                },
                next: function () {
                  var t = this,
                    e = this[u];
                  if (null !== e) return Promise.reject(e);
                  if (this[l]) return Promise.resolve(p(void 0, !0));
                  if (this[c].destroyed)
                    return new Promise(function (e, r) {
                      process.nextTick(function () {
                        t[u] ? r(t[u]) : e(p(void 0, !0));
                      });
                    });
                  var r,
                    n = this[h];
                  if (n)
                    r = new Promise(
                      (function (t, e) {
                        return function (r, n) {
                          t.then(function () {
                            e[l] ? r(p(void 0, !0)) : e[f](r, n);
                          }, n);
                        };
                      })(n, this)
                    );
                  else {
                    var i = this[c].read();
                    if (null !== i) return Promise.resolve(p(i, !1));
                    r = new Promise(this[f]);
                  }
                  return (this[h] = r), r;
                },
              }),
              Symbol.asyncIterator,
              function () {
                return this;
              }
            ),
            i(n, "return", function () {
              var t = this;
              return new Promise(function (e, r) {
                t[c].destroy(null, function (t) {
                  t ? r(t) : e(p(void 0, !0));
                });
              });
            }),
            n),
            y
          );
        t.exports = function (t) {
          var e,
            r = Object.create(
              v,
              (i((e = {}), c, { value: t, writable: !0 }),
              i(e, a, { value: null, writable: !0 }),
              i(e, s, { value: null, writable: !0 }),
              i(e, u, { value: null, writable: !0 }),
              i(e, l, { value: t._readableState.endEmitted, writable: !0 }),
              i(e, f, {
                value: function (t, e) {
                  var n = r[c].read();
                  n
                    ? ((r[h] = null), (r[a] = null), (r[s] = null), t(p(n, !1)))
                    : ((r[a] = t), (r[s] = e));
                },
                writable: !0,
              }),
              e)
            );
          return (
            (r[h] = null),
            o(t, function (t) {
              if (t && "ERR_STREAM_PREMATURE_CLOSE" !== t.code) {
                var e = r[s];
                return (
                  null !== e &&
                    ((r[h] = null), (r[a] = null), (r[s] = null), e(t)),
                  void (r[u] = t)
                );
              }
              var n = r[a];
              null !== n &&
                ((r[h] = null), (r[a] = null), (r[s] = null), n(p(void 0, !0))),
                (r[l] = !0);
            }),
            t.on("readable", g.bind(null, r)),
            r
          );
        };
      },
      1396: (t, e, r) => {
        "use strict";
        function n(t, e) {
          var r = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e &&
              (n = n.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
              r.push.apply(r, n);
          }
          return r;
        }
        function i(t, e, r) {
          return (
            e in t
              ? Object.defineProperty(t, e, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = r),
            t
          );
        }
        function o(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(t, n.key, n);
          }
        }
        var a = r(1664).Buffer,
          s = r(1758).inspect,
          u = (s && s.custom) || "inspect";
        t.exports = (function () {
          function t() {
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              (this.head = null),
              (this.tail = null),
              (this.length = 0);
          }
          var e, r, l;
          return (
            (e = t),
            (r = [
              {
                key: "push",
                value: function (t) {
                  var e = { data: t, next: null };
                  this.length > 0 ? (this.tail.next = e) : (this.head = e),
                    (this.tail = e),
                    ++this.length;
                },
              },
              {
                key: "unshift",
                value: function (t) {
                  var e = { data: t, next: this.head };
                  0 === this.length && (this.tail = e),
                    (this.head = e),
                    ++this.length;
                },
              },
              {
                key: "shift",
                value: function () {
                  if (0 !== this.length) {
                    var t = this.head.data;
                    return (
                      1 === this.length
                        ? (this.head = this.tail = null)
                        : (this.head = this.head.next),
                      --this.length,
                      t
                    );
                  }
                },
              },
              {
                key: "clear",
                value: function () {
                  (this.head = this.tail = null), (this.length = 0);
                },
              },
              {
                key: "join",
                value: function (t) {
                  if (0 === this.length) return "";
                  for (var e = this.head, r = "" + e.data; (e = e.next); )
                    r += t + e.data;
                  return r;
                },
              },
              {
                key: "concat",
                value: function (t) {
                  if (0 === this.length) return a.alloc(0);
                  for (
                    var e,
                      r,
                      n,
                      i = a.allocUnsafe(t >>> 0),
                      o = this.head,
                      s = 0;
                    o;

                  )
                    (e = o.data),
                      (r = i),
                      (n = s),
                      a.prototype.copy.call(e, r, n),
                      (s += o.data.length),
                      (o = o.next);
                  return i;
                },
              },
              {
                key: "consume",
                value: function (t, e) {
                  var r;
                  return (
                    t < this.head.data.length
                      ? ((r = this.head.data.slice(0, t)),
                        (this.head.data = this.head.data.slice(t)))
                      : (r =
                          t === this.head.data.length
                            ? this.shift()
                            : e
                            ? this._getString(t)
                            : this._getBuffer(t)),
                    r
                  );
                },
              },
              {
                key: "first",
                value: function () {
                  return this.head.data;
                },
              },
              {
                key: "_getString",
                value: function (t) {
                  var e = this.head,
                    r = 1,
                    n = e.data;
                  for (t -= n.length; (e = e.next); ) {
                    var i = e.data,
                      o = t > i.length ? i.length : t;
                    if (
                      (o === i.length ? (n += i) : (n += i.slice(0, t)),
                      0 == (t -= o))
                    ) {
                      o === i.length
                        ? (++r,
                          e.next
                            ? (this.head = e.next)
                            : (this.head = this.tail = null))
                        : ((this.head = e), (e.data = i.slice(o)));
                      break;
                    }
                    ++r;
                  }
                  return (this.length -= r), n;
                },
              },
              {
                key: "_getBuffer",
                value: function (t) {
                  var e = a.allocUnsafe(t),
                    r = this.head,
                    n = 1;
                  for (r.data.copy(e), t -= r.data.length; (r = r.next); ) {
                    var i = r.data,
                      o = t > i.length ? i.length : t;
                    if ((i.copy(e, e.length - t, 0, o), 0 == (t -= o))) {
                      o === i.length
                        ? (++n,
                          r.next
                            ? (this.head = r.next)
                            : (this.head = this.tail = null))
                        : ((this.head = r), (r.data = i.slice(o)));
                      break;
                    }
                    ++n;
                  }
                  return (this.length -= n), e;
                },
              },
              {
                key: u,
                value: function (t, e) {
                  return s(
                    this,
                    (function (t) {
                      for (var e = 1; e < arguments.length; e++) {
                        var r = null != arguments[e] ? arguments[e] : {};
                        e % 2
                          ? n(Object(r), !0).forEach(function (e) {
                              i(t, e, r[e]);
                            })
                          : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(
                              t,
                              Object.getOwnPropertyDescriptors(r)
                            )
                          : n(Object(r)).forEach(function (e) {
                              Object.defineProperty(
                                t,
                                e,
                                Object.getOwnPropertyDescriptor(r, e)
                              );
                            });
                      }
                      return t;
                    })({}, e, { depth: 0, customInspect: !1 })
                  );
                },
              },
            ]) && o(e.prototype, r),
            l && o(e, l),
            t
          );
        })();
      },
      8522: (t) => {
        "use strict";
        function e(t, e) {
          n(t, e), r(t);
        }
        function r(t) {
          (t._writableState && !t._writableState.emitClose) ||
            (t._readableState && !t._readableState.emitClose) ||
            t.emit("close");
        }
        function n(t, e) {
          t.emit("error", e);
        }
        t.exports = {
          destroy: function (t, i) {
            var o = this,
              a = this._readableState && this._readableState.destroyed,
              s = this._writableState && this._writableState.destroyed;
            return a || s
              ? (i
                  ? i(t)
                  : t &&
                    (this._writableState
                      ? this._writableState.errorEmitted ||
                        ((this._writableState.errorEmitted = !0),
                        process.nextTick(n, this, t))
                      : process.nextTick(n, this, t)),
                this)
              : (this._readableState && (this._readableState.destroyed = !0),
                this._writableState && (this._writableState.destroyed = !0),
                this._destroy(t || null, function (t) {
                  !i && t
                    ? o._writableState
                      ? o._writableState.errorEmitted
                        ? process.nextTick(r, o)
                        : ((o._writableState.errorEmitted = !0),
                          process.nextTick(e, o, t))
                      : process.nextTick(e, o, t)
                    : i
                    ? (process.nextTick(r, o), i(t))
                    : process.nextTick(r, o);
                }),
                this);
          },
          undestroy: function () {
            this._readableState &&
              ((this._readableState.destroyed = !1),
              (this._readableState.reading = !1),
              (this._readableState.ended = !1),
              (this._readableState.endEmitted = !1)),
              this._writableState &&
                ((this._writableState.destroyed = !1),
                (this._writableState.ended = !1),
                (this._writableState.ending = !1),
                (this._writableState.finalCalled = !1),
                (this._writableState.prefinished = !1),
                (this._writableState.finished = !1),
                (this._writableState.errorEmitted = !1));
          },
          errorOrDestroy: function (t, e) {
            var r = t._readableState,
              n = t._writableState;
            (r && r.autoDestroy) || (n && n.autoDestroy)
              ? t.destroy(e)
              : t.emit("error", e);
          },
        };
      },
      3790: (t, e, r) => {
        "use strict";
        var n = r(8870).q.ERR_STREAM_PREMATURE_CLOSE;
        function i() {}
        t.exports = function t(e, r, o) {
          if ("function" == typeof r) return t(e, null, r);
          r || (r = {}),
            (o = (function (t) {
              var e = !1;
              return function () {
                if (!e) {
                  e = !0;
                  for (
                    var r = arguments.length, n = new Array(r), i = 0;
                    i < r;
                    i++
                  )
                    n[i] = arguments[i];
                  t.apply(this, n);
                }
              };
            })(o || i));
          var a = r.readable || (!1 !== r.readable && e.readable),
            s = r.writable || (!1 !== r.writable && e.writable),
            u = function () {
              e.writable || h();
            },
            l = e._writableState && e._writableState.finished,
            h = function () {
              (s = !1), (l = !0), a || o.call(e);
            },
            f = e._readableState && e._readableState.endEmitted,
            c = function () {
              (a = !1), (f = !0), s || o.call(e);
            },
            p = function (t) {
              o.call(e, t);
            },
            d = function () {
              var t;
              return a && !f
                ? ((e._readableState && e._readableState.ended) ||
                    (t = new n()),
                  o.call(e, t))
                : s && !l
                ? ((e._writableState && e._writableState.ended) ||
                    (t = new n()),
                  o.call(e, t))
                : void 0;
            },
            g = function () {
              e.req.on("finish", h);
            };
          return (
            !(function (t) {
              return t.setHeader && "function" == typeof t.abort;
            })(e)
              ? s && !e._writableState && (e.on("end", u), e.on("close", u))
              : (e.on("complete", h),
                e.on("abort", d),
                e.req ? g() : e.on("request", g)),
            e.on("end", c),
            e.on("finish", h),
            !1 !== r.error && e.on("error", p),
            e.on("close", d),
            function () {
              e.removeListener("complete", h),
                e.removeListener("abort", d),
                e.removeListener("request", g),
                e.req && e.req.removeListener("finish", h),
                e.removeListener("end", u),
                e.removeListener("close", u),
                e.removeListener("finish", h),
                e.removeListener("end", c),
                e.removeListener("error", p),
                e.removeListener("close", d);
            }
          );
        };
      },
      8881: (t) => {
        t.exports = function () {
          throw new Error("Readable.from is not available in the browser");
        };
      },
      8155: (t, e, r) => {
        "use strict";
        var n;
        var i = r(8870).q,
          o = i.ERR_MISSING_ARGS,
          a = i.ERR_STREAM_DESTROYED;
        function s(t) {
          if (t) throw t;
        }
        function u(t, e, i, o) {
          o = (function (t) {
            var e = !1;
            return function () {
              e || ((e = !0), t.apply(void 0, arguments));
            };
          })(o);
          var s = !1;
          t.on("close", function () {
            s = !0;
          }),
            void 0 === n && (n = r(3790)),
            n(t, { readable: e, writable: i }, function (t) {
              if (t) return o(t);
              (s = !0), o();
            });
          var u = !1;
          return function (e) {
            if (!s && !u)
              return (
                (u = !0),
                (function (t) {
                  return t.setHeader && "function" == typeof t.abort;
                })(t)
                  ? t.abort()
                  : "function" == typeof t.destroy
                  ? t.destroy()
                  : void o(e || new a("pipe"))
              );
          };
        }
        function l(t) {
          t();
        }
        function h(t, e) {
          return t.pipe(e);
        }
        function f(t) {
          return t.length
            ? "function" != typeof t[t.length - 1]
              ? s
              : t.pop()
            : s;
        }
        t.exports = function () {
          for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
            e[r] = arguments[r];
          var n,
            i = f(e);
          if ((Array.isArray(e[0]) && (e = e[0]), e.length < 2))
            throw new o("streams");
          var a = e.map(function (t, r) {
            var o = r < e.length - 1;
            return u(t, o, r > 0, function (t) {
              n || (n = t), t && a.forEach(l), o || (a.forEach(l), i(n));
            });
          });
          return e.reduce(h);
        };
      },
      1379: (t, e, r) => {
        "use strict";
        var n = r(8870).q.ERR_INVALID_OPT_VALUE;
        t.exports = {
          getHighWaterMark: function (t, e, r, i) {
            var o = (function (t, e, r) {
              return null != t.highWaterMark
                ? t.highWaterMark
                : e
                ? t[r]
                : null;
            })(e, i, r);
            if (null != o) {
              if (!isFinite(o) || Math.floor(o) !== o || o < 0)
                throw new n(i ? r : "highWaterMark", o);
              return Math.floor(o);
            }
            return t.objectMode ? 16 : 16384;
          },
        };
      },
      4150: (t, e, r) => {
        t.exports = r(7988).EventEmitter;
      },
      8043: (t, e, r) => {
        t.exports = i;
        var n = r(7988).EventEmitter;
        function i() {
          n.call(this);
        }
        r(5717)(i, n),
          (i.Readable = r(4459)),
          (i.Writable = r(4987)),
          (i.Duplex = r(3536)),
          (i.Transform = r(6695)),
          (i.PassThrough = r(8373)),
          (i.finished = r(3790)),
          (i.pipeline = r(8155)),
          (i.Stream = i),
          (i.prototype.pipe = function (t, e) {
            var r = this;
            function i(e) {
              t.writable && !1 === t.write(e) && r.pause && r.pause();
            }
            function o() {
              r.readable && r.resume && r.resume();
            }
            r.on("data", i),
              t.on("drain", o),
              t._isStdio ||
                (e && !1 === e.end) ||
                (r.on("end", s), r.on("close", u));
            var a = !1;
            function s() {
              a || ((a = !0), t.end());
            }
            function u() {
              a || ((a = !0), "function" == typeof t.destroy && t.destroy());
            }
            function l(t) {
              if ((h(), 0 === n.listenerCount(this, "error"))) throw t;
            }
            function h() {
              r.removeListener("data", i),
                t.removeListener("drain", o),
                r.removeListener("end", s),
                r.removeListener("close", u),
                r.removeListener("error", l),
                t.removeListener("error", l),
                r.removeListener("end", h),
                r.removeListener("close", h),
                t.removeListener("close", h);
            }
            return (
              r.on("error", l),
              t.on("error", l),
              r.on("end", h),
              r.on("close", h),
              t.on("close", h),
              t.emit("pipe", r),
              t
            );
          });
      },
      140: (t, e, r) => {
        "use strict";
        var n = r(9509).Buffer,
          i =
            n.isEncoding ||
            function (t) {
              switch ((t = "" + t) && t.toLowerCase()) {
                case "hex":
                case "utf8":
                case "utf-8":
                case "ascii":
                case "binary":
                case "base64":
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                case "raw":
                  return !0;
                default:
                  return !1;
              }
            };
        function o(t) {
          var e;
          switch (
            ((this.encoding = (function (t) {
              var e = (function (t) {
                if (!t) return "utf8";
                for (var e; ; )
                  switch (t) {
                    case "utf8":
                    case "utf-8":
                      return "utf8";
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                      return "utf16le";
                    case "latin1":
                    case "binary":
                      return "latin1";
                    case "base64":
                    case "ascii":
                    case "hex":
                      return t;
                    default:
                      if (e) return;
                      (t = ("" + t).toLowerCase()), (e = !0);
                  }
              })(t);
              if ("string" != typeof e && (n.isEncoding === i || !i(t)))
                throw new Error("Unknown encoding: " + t);
              return e || t;
            })(t)),
            this.encoding)
          ) {
            case "utf16le":
              (this.text = u), (this.end = l), (e = 4);
              break;
            case "utf8":
              (this.fillLast = s), (e = 4);
              break;
            case "base64":
              (this.text = h), (this.end = f), (e = 3);
              break;
            default:
              return (this.write = c), void (this.end = p);
          }
          (this.lastNeed = 0),
            (this.lastTotal = 0),
            (this.lastChar = n.allocUnsafe(e));
        }
        function a(t) {
          return t <= 127
            ? 0
            : t >> 5 == 6
            ? 2
            : t >> 4 == 14
            ? 3
            : t >> 3 == 30
            ? 4
            : t >> 6 == 2
            ? -1
            : -2;
        }
        function s(t) {
          var e = this.lastTotal - this.lastNeed,
            r = (function (t, e, r) {
              if (128 != (192 & e[0])) return (t.lastNeed = 0), "�";
              if (t.lastNeed > 1 && e.length > 1) {
                if (128 != (192 & e[1])) return (t.lastNeed = 1), "�";
                if (t.lastNeed > 2 && e.length > 2 && 128 != (192 & e[2]))
                  return (t.lastNeed = 2), "�";
              }
            })(this, t);
          return void 0 !== r
            ? r
            : this.lastNeed <= t.length
            ? (t.copy(this.lastChar, e, 0, this.lastNeed),
              this.lastChar.toString(this.encoding, 0, this.lastTotal))
            : (t.copy(this.lastChar, e, 0, t.length),
              void (this.lastNeed -= t.length));
        }
        function u(t, e) {
          if ((t.length - e) % 2 == 0) {
            var r = t.toString("utf16le", e);
            if (r) {
              var n = r.charCodeAt(r.length - 1);
              if (n >= 55296 && n <= 56319)
                return (
                  (this.lastNeed = 2),
                  (this.lastTotal = 4),
                  (this.lastChar[0] = t[t.length - 2]),
                  (this.lastChar[1] = t[t.length - 1]),
                  r.slice(0, -1)
                );
            }
            return r;
          }
          return (
            (this.lastNeed = 1),
            (this.lastTotal = 2),
            (this.lastChar[0] = t[t.length - 1]),
            t.toString("utf16le", e, t.length - 1)
          );
        }
        function l(t) {
          var e = t && t.length ? this.write(t) : "";
          if (this.lastNeed) {
            var r = this.lastTotal - this.lastNeed;
            return e + this.lastChar.toString("utf16le", 0, r);
          }
          return e;
        }
        function h(t, e) {
          var r = (t.length - e) % 3;
          return 0 === r
            ? t.toString("base64", e)
            : ((this.lastNeed = 3 - r),
              (this.lastTotal = 3),
              1 === r
                ? (this.lastChar[0] = t[t.length - 1])
                : ((this.lastChar[0] = t[t.length - 2]),
                  (this.lastChar[1] = t[t.length - 1])),
              t.toString("base64", e, t.length - r));
        }
        function f(t) {
          var e = t && t.length ? this.write(t) : "";
          return this.lastNeed
            ? e + this.lastChar.toString("base64", 0, 3 - this.lastNeed)
            : e;
        }
        function c(t) {
          return t.toString(this.encoding);
        }
        function p(t) {
          return t && t.length ? this.write(t) : "";
        }
        (e.s = o),
          (o.prototype.write = function (t) {
            if (0 === t.length) return "";
            var e, r;
            if (this.lastNeed) {
              if (void 0 === (e = this.fillLast(t))) return "";
              (r = this.lastNeed), (this.lastNeed = 0);
            } else r = 0;
            return r < t.length
              ? e
                ? e + this.text(t, r)
                : this.text(t, r)
              : e || "";
          }),
          (o.prototype.end = function (t) {
            var e = t && t.length ? this.write(t) : "";
            return this.lastNeed ? e + "�" : e;
          }),
          (o.prototype.text = function (t, e) {
            var r = (function (t, e, r) {
              var n = e.length - 1;
              if (n < r) return 0;
              var i = a(e[n]);
              if (i >= 0) return i > 0 && (t.lastNeed = i - 1), i;
              if (--n < r || -2 === i) return 0;
              if ((i = a(e[n])) >= 0) return i > 0 && (t.lastNeed = i - 2), i;
              if (--n < r || -2 === i) return 0;
              if ((i = a(e[n])) >= 0)
                return i > 0 && (2 === i ? (i = 0) : (t.lastNeed = i - 3)), i;
              return 0;
            })(this, t, e);
            if (!this.lastNeed) return t.toString("utf8", e);
            this.lastTotal = r;
            var n = t.length - (r - this.lastNeed);
            return t.copy(this.lastChar, 0, n), t.toString("utf8", e, n);
          }),
          (o.prototype.fillLast = function (t) {
            if (this.lastNeed <= t.length)
              return (
                t.copy(
                  this.lastChar,
                  this.lastTotal - this.lastNeed,
                  0,
                  this.lastNeed
                ),
                this.lastChar.toString(this.encoding, 0, this.lastTotal)
              );
            t.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, t.length),
              (this.lastNeed -= t.length);
          });
      },
      8526: (t, e, r) => {
        function n(t) {
          try {
            if (!r.g.localStorage) return !1;
          } catch (t) {
            return !1;
          }
          var e = r.g.localStorage[t];
          return null != e && "true" === String(e).toLowerCase();
        }
        t.exports = function (t, e) {
          if (n("noDeprecation")) return t;
          var r = !1;
          return function () {
            if (!r) {
              if (n("throwDeprecation")) throw new Error(e);
              n("traceDeprecation") ? console.trace(e) : console.warn(e),
                (r = !0);
            }
            return t.apply(this, arguments);
          };
        };
      },
      7722: (t, e, r) => {
        "use strict";
        r.d(e, { default: () => Mt });
        r(5666);
        const n = THREE;
        var i = r(7701),
          o = r(1875),
          a = r.n(o),
          s = r(3614),
          u = r.n(s),
          l = r(8929),
          h = r(9697),
          f = r.n(h);
        class c {
          static async nodeRequire(t, e) {
            const r = "function" == typeof t.require ? t.require : null,
              n = "function" == typeof t.import ? t.import : null;
            if (!r && !n)
              throw new Error(
                "Neither NodeJS `require` or `import` is available. (If in test environment, maybe, you should add `global.require = require;`."
              );
            return r ? r(e) : (await n(e)).default;
          }
        }
        c.Delta = class {
          constructor() {
            (this.perf = null), (this.start = 0);
          }
          static async new(t = { nodejs: !1 }) {
            return await new this().init(t);
          }
          async init(t = { nodejs: !1 }) {
            if (t.nodejs) {
              const { performance: t } = await c.nodeRequire(r.g, "perf_hooks");
              this.perf = t;
            } else this.perf = window.performance;
            return (this.start = this.perf.now()), this;
          }
          _checkInit() {
            if (!this.perf) throw new Error("Do call `async .init()` first.");
          }
          get() {
            return this._checkInit(), (this.perf.now() - this.start) / 1e3;
          }
          print(t = "delta:") {
            this._checkInit(), this.get().toFixed(3);
          }
        };
        const p = c;
        var d = r(2768),
          g = r.n(d);
        const y = "1.2.2";
        class v extends n.Line {
          constructor(t, e = 16711680) {
            let r = new n.BufferGeometry(),
              i = new Float32Array(3 * t);
            r.setAttribute("position", new n.BufferAttribute(i, 3)),
              super(r, new n.LineBasicMaterial({ color: e })),
              (this._maxPoints = t),
              (this._numPoints = 0);
          }
          _frustumCullingWorkaround() {
            this.geometry.computeBoundingSphere();
          }
          static _getPointsRandomWalk(t) {
            let e = [],
              r = 0,
              n = 0,
              i = 0;
            for (let o = 0; o < t; o++)
              e.push(r),
                e.push(n),
                e.push(i),
                (r += 2 * (Math.random() - 0.5)),
                (n += 2 * (Math.random() - 0.5)),
                (i += 2 * (Math.random() - 0.5));
            return e;
          }
          setColor(t) {
            this.material.color.setHex(t);
          }
          getColor() {
            return this.material.color;
          }
          getPoints() {
            let t = this.geometry.attributes.position.array,
              e = [];
            for (let r = 0; r < this._numPoints; r++)
              e.push(new n.Vector3(t[3 * r], t[3 * r + 1], t[3 * r + 2]));
            return e;
          }
          static flattenPoints(t) {
            return t.map((t) => [t.x, t.y, t.z]).reduce((t, e) => t.concat(e));
          }
          updatePoints(t, e = !1) {
            e || (t = b.flattenPoints(t));
            let r = this.geometry.attributes.position,
              n = r.count,
              i = t.length / 3;
            i > n && (i = n);
            for (let e = 0; e < i; e++)
              (r.array[3 * e] = t[3 * e]),
                (r.array[3 * e + 1] = t[3 * e + 1]),
                (r.array[3 * e + 2] = t[3 * e + 2]);
            (r.needsUpdate = !0),
              this.geometry.setDrawRange(0, i),
              this._frustumCullingWorkaround(),
              (this._numPoints = i);
          }
          clearPoints() {
            this.updatePoints([], !0);
          }
          updatePointsRandomWalk(t) {
            this.updatePoints(v._getPointsRandomWalk(t), !0);
          }
        }
        class b extends v {
          constructor(t = {}) {
            let e = Object.assign(
              {},
              { color: 16711680, maxPoints: 256, infLength: 9999 },
              t
            );
            super(e.maxPoints, e.color),
              console.info("Laser 1.2.2 with THREE r" + n.REVISION),
              (this.version = y),
              (this._src = new n.Vector3(0, 0, 0)),
              (this._raycaster = new n.Raycaster()),
              (this._infLen = e.infLength),
              (this._meshes = []);
          }
          setSource(t, e = null) {
            this._src = e ? t.clone().applyMatrix4(e.matrixWorld) : t.clone();
          }
          getSource() {
            return this._src.clone();
          }
          static direct(t, e) {
            return e.clone().sub(t).normalize();
          }
          static reflect(t, e) {
            return t.clone().sub(e.clone().multiplyScalar(2 * t.dot(e)));
          }
          _raycast(t, e, r) {
            let n = this._raycaster.intersectObjects(t, e);
            if (r) {
              for (let t = 0; t < n.length; t++)
                if (n[t].face !== r) return n[t];
              return null;
            }
            return n.length > 0 ? n[0] : null;
          }
          raycast(t, e, r, n = null, i = !1) {
            return this._raycaster.set(t, e), this._raycast(r, i, n);
          }
          raycastFromCamera(t, e, r, i, o, a, s = !1) {
            let u = new n.Vector2((t / r) * 2 - 1, (-e / i) * 2 + 1);
            return (
              this._raycaster.setFromCamera(u, o), this._raycast(a, s, null)
            );
          }
          getMeshesHit() {
            return this._meshes;
          }
          point(t, e = null) {
            this.updatePoints(
              [this._src.x, this._src.y, this._src.z, t.x, t.y, t.z],
              !0
            ),
              (this._meshes.length = 0),
              e && this.material.color.setHex(e);
          }
          pointWithRaytrace(t, e = [], r = null, n = 16) {
            if ((this.point(t, r), n < 1)) return;
            let i = this.getSource(),
              o = b.direct(i, t),
              a = this.raycast(i, o, e);
            if (!a) return;
            let s = this.computeReflections(t, o, a, e, n);
            this.updatePoints([i.x, i.y, i.z, t.x, t.y, t.z, ...s], !0);
          }
          _computeReflectionsRecursive(t, e, r, i, o) {
            const a = [],
              s = this;
            return (
              (function t(e, r, u) {
                let l = new n.Matrix3().getNormalMatrix(u.object.matrixWorld),
                  h = u.face.normal.clone().applyMatrix3(l).normalize(),
                  f = b.reflect(r, h),
                  c = s.raycast(e, f, i, u.face);
                if (c) {
                  let e = c.point;
                  a.push(e.x, e.y, e.z), a.length / 3 < o && t(e, f, c);
                } else {
                  let t = e.clone().add(f.multiplyScalar(s._infLen));
                  a.push(t.x, t.y, t.z);
                }
              })(t, e, r),
              a
            );
          }
          _computeReflections(t, e, r, i, o) {
            const a = [];
            for (this._meshes = [r.object]; ; ) {
              let s = new n.Matrix3().getNormalMatrix(r.object.matrixWorld),
                u = r.face.normal.clone().applyMatrix3(s).normalize(),
                l = b.reflect(e, u),
                h = this.raycast(t, l, i, r.face);
              if (h) {
                let n = h.point;
                if (
                  (a.push(n.x, n.y, n.z),
                  this._meshes.push(h.object),
                  a.length / 3 < o)
                ) {
                  (t = n), (e = l), (r = h);
                  continue;
                }
                break;
              }
              {
                let e = t.clone().add(l.multiplyScalar(this._infLen));
                a.push(e.x, e.y, e.z);
                break;
              }
            }
            return a;
          }
          computeReflections(t, e, r, n, i) {
            return this._computeReflections(t, e, r, n, i);
          }
        }
        const m = b;
        var w = r(7057),
          x = r(4166),
          _ = r(5266),
          E = r(4963);
        function S(t) {
          var e = { type: "Feature" };
          return (
            Object.keys(t).forEach(function (r) {
              switch (r) {
                case "type":
                case "properties":
                case "geometry":
                  return;
                default:
                  e[r] = t[r];
              }
            }),
            (e.properties = k(t.properties)),
            (e.geometry = M(t.geometry)),
            e
          );
        }
        function k(t) {
          var e = {};
          return t
            ? (Object.keys(t).forEach(function (r) {
                var n = t[r];
                "object" == typeof n
                  ? null === n
                    ? (e[r] = null)
                    : n.length
                    ? (e[r] = n.map(function (t) {
                        return t;
                      }))
                    : (e[r] = k(n))
                  : (e[r] = n);
              }),
              e)
            : e;
        }
        function M(t) {
          var e = { type: t.type };
          return (
            t.bbox && (e.bbox = t.bbox),
            "GeometryCollection" === t.type
              ? ((e.geometries = t.geometries.map(function (t) {
                  return M(t);
                })),
                e)
              : ((e.coordinates = R(t.coordinates)), e)
          );
        }
        function R(t) {
          return "object" != typeof t[0]
            ? t.slice()
            : t.map(function (t) {
                return R(t);
              });
        }
        const A = function (t) {
          if (!t) throw new Error("geojson is required");
          switch (t.type) {
            case "Feature":
              return S(t);
            case "FeatureCollection":
              return (function (t) {
                var e = { type: "FeatureCollection" };
                return (
                  Object.keys(t).forEach(function (r) {
                    switch (r) {
                      case "type":
                      case "features":
                        return;
                      default:
                        e[r] = t[r];
                    }
                  }),
                  (e.features = t.features.map(function (t) {
                    return S(t);
                  })),
                  e
                );
              })(t);
            case "Point":
            case "LineString":
            case "Polygon":
            case "MultiPoint":
            case "MultiLineString":
            case "MultiPolygon":
            case "GeometryCollection":
              return M(t);
            default:
              throw new Error("unknown GeoJSON type");
          }
        };
        const j = function (t, e, r, n) {
          if (((n = n || {}), !(0, w.isObject)(n)))
            throw new Error("options is invalid");
          var i = n.units,
            o = n.properties;
          if (!t) throw new Error("origin is required");
          if (null == e) throw new Error("distance is required");
          if (null == r) throw new Error("bearing is required");
          if (!(e >= 0)) throw new Error("distance must be greater than 0");
          var a = (0, w.convertLength)(e, i, "meters"),
            s = (0, E.getCoord)(t),
            u = (function (t, e, r, n) {
              n = void 0 === n ? w.earthRadius : Number(n);
              var i = e / n,
                o = (t[0] * Math.PI) / 180,
                a = (0, w.degreesToRadians)(t[1]),
                s = (0, w.degreesToRadians)(r),
                u = i * Math.cos(s),
                l = a + u;
              Math.abs(l) > Math.PI / 2 &&
                (l = l > 0 ? Math.PI - l : -Math.PI - l);
              var h = Math.log(
                  Math.tan(l / 2 + Math.PI / 4) / Math.tan(a / 2 + Math.PI / 4)
                ),
                f = Math.abs(h) > 1e-11 ? u / h : Math.cos(a),
                c = (i * Math.sin(s)) / f;
              return [
                (((180 * (o + c)) / Math.PI + 540) % 360) - 180,
                (180 * l) / Math.PI,
              ];
            })(s, a, r);
          return (
            (u[0] += u[0] - s[0] > 180 ? -360 : s[0] - u[0] > 180 ? 360 : 0),
            (0, w.point)(u, o)
          );
        };
        const P = function (t, e, r, n) {
          if (((n = n || {}), !(0, w.isObject)(n)))
            throw new Error("options is invalid");
          var i = n.units,
            o = n.zTranslation,
            a = n.mutate;
          if (!t) throw new Error("geojson is required");
          if (null == e || isNaN(e)) throw new Error("distance is required");
          if (o && "number" != typeof o && isNaN(o))
            throw new Error("zTranslation is not a number");
          if (((o = void 0 !== o ? o : 0), 0 === e && 0 === o)) return t;
          if (null == r || isNaN(r)) throw new Error("direction is required");
          return (
            e < 0 && ((e = -e), (r = -r)),
            (!1 !== a && void 0 !== a) || (t = A(t)),
            (0, _.coordEach)(t, function (t) {
              var n = (0, E.getCoords)(j(t, e, r, { units: i }));
              (t[0] = n[0]), (t[1] = n[1]), o && 3 === t.length && (t[2] += o);
            }),
            t
          );
        };
        const T = function (t, e) {
          var r = 0,
            n = 0,
            i = 0;
          return (
            (0, _.coordEach)(
              t,
              function (t) {
                (r += t[0]), (n += t[1]), i++;
              },
              !0
            ),
            (0, w.point)([r / i, n / i], e)
          );
        };
        function I(t, e) {
          var r = (0, w.degreesToRadians)(t[1]),
            n = (0, w.degreesToRadians)(e[1]),
            i = (0, w.degreesToRadians)(e[0] - t[0]);
          i > Math.PI && (i -= 2 * Math.PI), i < -Math.PI && (i += 2 * Math.PI);
          var o = Math.log(
              Math.tan(n / 2 + Math.PI / 4) / Math.tan(r / 2 + Math.PI / 4)
            ),
            a = Math.atan2(i, o);
          return ((0, w.radiansToDegrees)(a) + 360) % 360;
        }
        const O = function (t, e, r) {
          if (((r = r || {}), !(0, w.isObject)(r)))
            throw new Error("options is invalid");
          var n,
            i = r.final;
          if (!t) throw new Error("start point is required");
          if (!e) throw new Error("end point is required");
          return (n = i
            ? I((0, E.getCoord)(e), (0, E.getCoord)(t))
            : I((0, E.getCoord)(t), (0, E.getCoord)(e))) > 180
            ? -(360 - n)
            : n;
        };
        const B = function (t, e, r) {
          if (((r = r || {}), !(0, w.isObject)(r)))
            throw new Error("options is invalid");
          var n = r.units;
          if (!t) throw new Error("from point is required");
          if (!e) throw new Error("to point is required");
          var i = (0, E.getCoord)(t),
            o = (0, E.getCoord)(e);
          o[0] += o[0] - i[0] > 180 ? -360 : i[0] - o[0] > 180 ? 360 : 0;
          var a = (function (t, e, r) {
            var n = (r = void 0 === r ? w.earthRadius : Number(r)),
              i = (t[1] * Math.PI) / 180,
              o = (e[1] * Math.PI) / 180,
              a = o - i,
              s = (Math.abs(e[0] - t[0]) * Math.PI) / 180;
            s > Math.PI && (s -= 2 * Math.PI);
            var u = Math.log(
                Math.tan(o / 2 + Math.PI / 4) / Math.tan(i / 2 + Math.PI / 4)
              ),
              l = Math.abs(u) > 1e-11 ? a / u : Math.cos(i);
            return Math.sqrt(a * a + l * l * s * s) * n;
          })(i, o);
          return (0, w.convertLength)(a, "meters", n);
        };
        const L = function (t, e, r) {
          if (((r = r || {}), !(0, w.isObject)(r)))
            throw new Error("options is invalid");
          var n = r.pivot,
            i = r.mutate;
          if (!t) throw new Error("geojson is required");
          if (null == e || isNaN(e)) throw new Error("angle is required");
          return (
            0 === e ||
              (n || (n = T(t)),
              (!1 !== i && void 0 !== i) || (t = A(t)),
              (0, _.coordEach)(t, function (t) {
                var r = O(n, t) + e,
                  i = B(n, t),
                  o = (0, E.getCoords)(j(n, i, r));
                (t[0] = o[0]), (t[1] = o[1]);
              })),
            t
          );
        };
        function C(t) {
          return (
            (function (t) {
              if (Array.isArray(t)) return q(t);
            })(t) ||
            (function (t) {
              if ("undefined" != typeof Symbol && Symbol.iterator in Object(t))
                return Array.from(t);
            })(t) ||
            V(t) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function N(t, e, r) {
          return (N = F()
            ? Reflect.construct
            : function (t, e, r) {
                var n = [null];
                n.push.apply(n, e);
                var i = new (Function.bind.apply(t, n))();
                return r && U(i, r.prototype), i;
              }).apply(null, arguments);
        }
        function F() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        }
        function U(t, e) {
          return (U =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
        }
        function D(t, e) {
          return (
            (function (t) {
              if (Array.isArray(t)) return t;
            })(t) ||
            (function (t, e) {
              if (
                "undefined" == typeof Symbol ||
                !(Symbol.iterator in Object(t))
              )
                return;
              var r = [],
                n = !0,
                i = !1,
                o = void 0;
              try {
                for (
                  var a, s = t[Symbol.iterator]();
                  !(n = (a = s.next()).done) &&
                  (r.push(a.value), !e || r.length !== e);
                  n = !0
                );
              } catch (t) {
                (i = !0), (o = t);
              } finally {
                try {
                  n || null == s.return || s.return();
                } finally {
                  if (i) throw o;
                }
              }
              return r;
            })(t, e) ||
            V(t, e) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function V(t, e) {
          if (t) {
            if ("string" == typeof t) return q(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            return (
              "Object" === r && t.constructor && (r = t.constructor.name),
              "Map" === r || "Set" === r
                ? Array.from(t)
                : "Arguments" === r ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                ? q(t, e)
                : void 0
            );
          }
        }
        function q(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
          return n;
        }
        function z(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(t, n.key, n);
          }
        }
        var G = (function () {
          function t() {
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t);
          }
          var e, r, i;
          return (
            (e = t),
            (i = [
              {
                key: "createLine",
                value: function (t) {
                  var e =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : { color: 16711680, maxPoints: 256 },
                    r = new m(e);
                  return r.updatePoints(t), r;
                },
              },
              {
                key: "bboxToWireframe",
                value: function (t, e) {
                  var r,
                    i =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : {},
                    o = { offsetZ: 0, color: 52428, height: 0.001 },
                    a = Object.assign({}, o, i),
                    s = D(t, 4),
                    u = s[0],
                    l = s[1],
                    h = s[2],
                    f = s[3],
                    c = e([(l + f) / 2, (u + h) / 2]),
                    p = e([f, u]),
                    d = D(p, 2),
                    g = d[0],
                    y = d[1],
                    v = e([l, h]),
                    b = D(v, 2),
                    m = b[0],
                    w = b[1],
                    x = [m - g, y - w],
                    _ = a.height,
                    E = new n.LineSegments(
                      new n.EdgesGeometry(
                        N(n.BoxBufferGeometry, x.concat([_]))
                      ),
                      new n.LineBasicMaterial({ color: a.color })
                    );
                  return (
                    (r = E.position).set.apply(
                      r,
                      C(c).concat([-_ / 2 + a.offsetZ])
                    ),
                    (E.name = "bbox-".concat(window.performance.now())),
                    {
                      obj: E,
                      offset: [].concat(C(c), [a.offsetZ]),
                      size: [].concat(x, [a.height]),
                    }
                  );
                },
              },
              {
                key: "tileToBbox",
                value: function (t) {
                  return g().tileToBBOX(t);
                },
              },
              {
                key: "_resolveTri",
                value: function (t, e, r, i, o) {
                  var a = new m().raycast(
                    new n.Vector3(t, e, 12e3),
                    new n.Vector3(0, 0, -1),
                    r
                  );
                  if (!a) return null;
                  var s = a.faceIndex,
                    u = a.object.geometry.index.array,
                    l = a.object.geometry.attributes.position,
                    h = [0, 1, 2].map(function (t) {
                      return new n.Vector3()
                        .fromBufferAttribute(l, u[3 * s + t])
                        .multiplyScalar(i)
                        .add(new n.Vector3(0, 0, o || -a.point.z));
                    });
                  return {
                    faceIndex: a.faceIndex,
                    isectPoint: a.point.clone(),
                    tri: h,
                    normal: a.face.normal.clone(),
                  };
                },
              },
              {
                key: "createTurfPoint",
                value: function (t) {
                  return w.point([t[1], t[0]]);
                },
              },
              {
                key: "originRadiusToBbox",
                value: function (t, e) {
                  var r = D(
                      (0, x.Z)(this.createTurfPoint(t), e, -45, {
                        units: "kilometers",
                      }).geometry.coordinates,
                      2
                    ),
                    n = r[0],
                    i = r[1],
                    o = D(
                      (0, x.Z)(this.createTurfPoint(t), e, 135, {
                        units: "kilometers",
                      }).geometry.coordinates,
                      2
                    ),
                    a = o[0];
                  return [n, o[1], a, i];
                },
              },
              {
                key: "translateTurfObject",
                value: function (t, e, r, i, o) {
                  var a =
                      !(arguments.length > 5 && void 0 !== arguments[5]) ||
                      arguments[5],
                    s = new n.Vector2(e, r).divideScalar(o),
                    u = 90 - (180 * s.angle()) / Math.PI;
                  return P(t, s.length(), u, {
                    units: "meters",
                    zTranslation: i / o,
                    mutate: a,
                  });
                },
              },
              {
                key: "rotateTurfObject",
                value: function (t, e, r) {
                  var n =
                    !(arguments.length > 3 && void 0 !== arguments[3]) ||
                    arguments[3];
                  return L(t, e, { pivot: [r[1], r[0]], mutate: n });
                },
              },
            ]),
            (r = null) && z(e.prototype, r),
            i && z(e, i),
            t
          );
        })();
        G.Meta = p;
        const W = G;
        function H(t, e, r, n, i, o, a) {
          try {
            var s = t[o](a),
              u = s.value;
          } catch (t) {
            return void r(t);
          }
          s.done ? e(u) : Promise.resolve(u).then(n, i);
        }
        function $(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(t, n.key, n);
          }
        }
        const Y = (function () {
          function t() {
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t);
          }
          var e, n, i, o, s;
          return (
            (e = t),
            (n = null),
            (i = [
              {
                key: "dumpBufferAsBlob",
                value: function (t, e) {
                  var r = new Blob([t], { type: "application/octet-stream" }),
                    n = document.createElement("a");
                  (n.href = URL.createObjectURL(r)),
                    (n.download = e),
                    document.body.appendChild(n),
                    n.click();
                },
              },
              {
                key: "blobToBuffer",
                value: function (t, e) {
                  var r = new FileReader();
                  (r.onload = function (t) {
                    var r = t.target.result;
                    e(r);
                  }),
                    r.readAsArrayBuffer(t);
                },
              },
              {
                key: "getUriCustom",
                value: function (t, e) {
                  var r,
                    n = t.split("/");
                  switch ((n = n.length ? n[n.length - 1] : "woops")) {
                    case "custom-terrain-vector":
                      r = "pbf";
                      break;
                    case "custom-terrain-rgb":
                      r = "png";
                      break;
                    case "custom-satellite":
                      r = "jpg";
                      break;
                    default:
                      return "";
                  }
                  return "".concat(t, "-").concat(e.join("-"), ".").concat(r);
                },
              },
              {
                key: "getUriMapbox",
                value: function (t, e, r) {
                  var n,
                    i = "",
                    o = "";
                  switch (
                    (e.includes("mapbox-custom-") &&
                      ((o = e.split("mapbox-custom-")[1]),
                      (e = "mapbox-custom")),
                    e)
                  ) {
                    case "mapbox-terrain-vector":
                      (n =
                        "https://api.mapbox.com/v4/mapbox.mapbox-terrain-v2"),
                        (i = ".vector.pbf");
                      break;
                    case "mapbox-terrain-rgb":
                      (n = "https://api.mapbox.com/v4/mapbox.terrain-rgb"),
                        (i = "@2x.pngraw");
                      break;
                    case "mapbox-satellite":
                      n =
                        "https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles";
                      break;
                    case "mapbox-custom":
                      n = "https://api.mapbox.com/styles/v1/".concat(
                        o,
                        "/tiles"
                      );
                      break;
                    default:
                      return "";
                  }
                  return ""
                    .concat(n, "/")
                    .concat(r.join("/"))
                    .concat(i, "?access_token=")
                    .concat(t);
                },
              },
              {
                key: "isAjaxSuccessful",
                value: function (t) {
                  return (t >= 200 && t < 300) || 304 === t;
                },
              },
              {
                key: "xhrDumpBlob",
                value: function (t, e, r) {
                  var n = this;
                  a()(
                    { uri: t, responseType: "arraybuffer" },
                    function (i, o, a) {
                      !i && n.isAjaxSuccessful(o.statusCode)
                        ? n.dumpBufferAsBlob(
                            a,
                            "".concat(e, "-").concat(r.join("-"), ".blob")
                          )
                        : "xhrDumpBlob(): failed for uri: ".concat(t);
                    }
                  );
                },
              },
              {
                key: "xhrGetBlob",
                value: function (t, e) {
                  this._xhrGet("blob")(t, e);
                },
              },
              {
                key: "xhrGetArrayBuffer",
                value: function (t, e) {
                  this._xhrGet("arraybuffer")(t, e);
                },
              },
              {
                key: "_xhrGet",
                value: function (t) {
                  var e = this;
                  return function (r, n) {
                    a()({ uri: r, responseType: t }, function (r, i, o) {
                      if (r || !e.isAjaxSuccessful(i.statusCode))
                        return n(null);
                      switch (t) {
                        case "blob":
                          e.blobToBuffer(o, function (t) {
                            return n(new l.VectorTile(new (u())(t)));
                          });
                          break;
                        case "arraybuffer":
                          n(new l.VectorTile(new (u())(o)));
                          break;
                        default:
                          n(null);
                      }
                    });
                  };
                },
              },
              {
                key: "resolveGetPixels",
                value:
                  ((o = regeneratorRuntime.mark(function t(e) {
                    return regeneratorRuntime.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if (!e) {
                              t.next = 6;
                              break;
                            }
                            return (
                              (t.next = 3),
                              W.Meta.nodeRequire(r.g, "get-pixels/node-pixels")
                            );
                          case 3:
                            (t.t0 = t.sent), (t.next = 7);
                            break;
                          case 6:
                            t.t0 = f();
                          case 7:
                            return t.abrupt("return", t.t0);
                          case 8:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })),
                  (s = function () {
                    var t = this,
                      e = arguments;
                    return new Promise(function (r, n) {
                      var i = o.apply(t, e);
                      function a(t) {
                        H(i, r, n, a, s, "next", t);
                      }
                      function s(t) {
                        H(i, r, n, a, s, "throw", t);
                      }
                      a(void 0);
                    });
                  }),
                  function (t) {
                    return s.apply(this, arguments);
                  }),
              },
              {
                key: "getZoomposEle",
                value: function (t) {
                  var e = {};
                  return (
                    t.forEach(function (t) {
                      var r = [
                        t[0] - 2,
                        Math.floor(t[1] / 4),
                        Math.floor(t[2] / 4),
                      ];
                      e[r] ? e[r].push(t) : (e[r] = [t]);
                    }),
                    Object.keys(e).map(function (t) {
                      return t.split(",").map(function (t) {
                        return parseFloat(t);
                      });
                    })
                  );
                },
              },
              {
                key: "fetchTile",
                value: function (t, e, r, n, i) {
                  var o = e.startsWith("mapbox-"),
                    a = o
                      ? this.getUriMapbox(r, e, t)
                      : this.getUriCustom(e, t);
                  if (
                    e.includes("mapbox-terrain-vector") ||
                    e.includes("custom-terrain-vector")
                  )
                    o ? this.xhrGetArrayBuffer(a, i) : this.xhrGetBlob(a, i);
                  else if (
                    e.includes("mapbox-terrain-rgb") ||
                    e.includes("mapbox-satellite") ||
                    e.includes("mapbox-custom") ||
                    e.includes("custom-terrain-rgb") ||
                    e.includes("custom-satellite")
                  ) {
                    var s = function (t, e) {
                      return i(t ? null : e);
                    };
                    this.resolveGetPixels(n)
                      .then(function (t) {
                        return t(a, s);
                      })
                      .catch(function (t) {
                        return console.error("err:", t);
                      });
                  }
                },
              },
            ]),
            n && $(e.prototype, n),
            i && $(e, i),
            t
          );
        })();
        var X = r(3673);
        function Z(t, e) {
          return (
            (function (t) {
              if (Array.isArray(t)) return t;
            })(t) ||
            (function (t, e) {
              if (
                "undefined" == typeof Symbol ||
                !(Symbol.iterator in Object(t))
              )
                return;
              var r = [],
                n = !0,
                i = !1,
                o = void 0;
              try {
                for (
                  var a, s = t[Symbol.iterator]();
                  !(n = (a = s.next()).done) &&
                  (r.push(a.value), !e || r.length !== e);
                  n = !0
                );
              } catch (t) {
                (i = !0), (o = t);
              } finally {
                try {
                  n || null == s.return || s.return();
                } finally {
                  if (i) throw o;
                }
              }
              return r;
            })(t, e) ||
            K(t, e) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function J(t) {
          return (
            (function (t) {
              if (Array.isArray(t)) return Q(t);
            })(t) ||
            (function (t) {
              if ("undefined" != typeof Symbol && Symbol.iterator in Object(t))
                return Array.from(t);
            })(t) ||
            K(t) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function K(t, e) {
          if (t) {
            if ("string" == typeof t) return Q(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            return (
              "Object" === r && t.constructor && (r = t.constructor.name),
              "Map" === r || "Set" === r
                ? Array.from(t)
                : "Arguments" === r ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                ? Q(t, e)
                : void 0
            );
          }
        }
        function Q(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
          return n;
        }
        function tt(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(t, n.key, n);
          }
        }
        var et = 128,
          rt = new (r.n(X)())({ size: 128 }),
          nt = (function (t) {
            for (var e = 384, r = [[], [], [], []], n = 0; n < e; n += 3)
              r[0].push(n + 1 + t),
                r[1].push((n / 3) * e + 1 + t),
                r[2].push(n + 1 + 49152 - e + t),
                r[3].push((n / 3 + 1) * e - 2 + t);
            return r;
          })(1),
          it = (function () {
            for (var t = [], e = 0; e < 4; e++)
              for (var r = 0; r < 4; r++)
                t.push([
                  [127 * r + r, (512 * (r + 1)) / 4],
                  [127 * e + e, (512 * (e + 1)) / 4],
                ]);
            return t;
          })();
        const ot = (function () {
          function t(e) {
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              (this.unitsPerMeter = e.unitsPerMeter),
              (this.projectCoord = e.projectCoord),
              (this.token = e.token),
              (this.useNodePixels = e.useNodePixels),
              (this.apiRgb = e.apiRgb),
              (this.apiSatellite = e.apiSatellite),
              (this.onRgbDem = e.onRgbDem),
              (this.onSatelliteMat = e.onSatelliteMat),
              (this.watcher = e.watcher),
              (this.dataEleCovered = []);
          }
          var e, r, i;
          return (
            (e = t),
            (i = [
              {
                key: "_stitchWithNei2",
                value: function (t, e) {
                  for (var r = 0; r < et; r++) {
                    var n = nt[2][r] + 384,
                      i = nt[0][r];
                    (t[n - 2] = e[i - 2]), (t[n - 1] = e[i - 1]), (t[n] = e[i]);
                  }
                },
              },
              {
                key: "_stitchWithNei3",
                value: function (t, e) {
                  for (var r = 0; r < et; r++) {
                    var n = nt[3][r] + 3 * (1 + r),
                      i = nt[1][r];
                    t.splice(n - 2, 0, e[i - 2]),
                      t.splice(n - 1, 0, e[i - 1]),
                      t.splice(n, 0, e[i]);
                  }
                },
              },
              {
                key: "resolveSeams",
                value: function (t, e) {
                  var r = this,
                    n = [127, 127];
                  if (
                    (Object.entries(e).forEach(function (e) {
                      var i = Z(e, 2),
                        o = i[0],
                        a = i[1];
                      "2" === o
                        ? (r._stitchWithNei2(t, a), n[1]++)
                        : "3" === o && (r._stitchWithNei3(t, a), n[0]++);
                    }),
                    n[0] === et && n[1] === et)
                  ) {
                    var i = e[6];
                    if (i) t.push(i[0], i[1], i[2]);
                    else {
                      var o = t.length;
                      t.push(t[o - 3], t[o - 2], t[o - 1]);
                    }
                  }
                  return n;
                },
              },
              {
                key: "createDataFlipY",
                value: function (t, e) {
                  for (
                    var r = Z(e, 3),
                      n = r[0],
                      i = r[1],
                      o = r[2],
                      a = new Uint8Array(t.length),
                      s = 0;
                    s < i;
                    s++
                  )
                    for (var u = 0; u < n * o; u += o)
                      for (var l = 0; l < o; l++)
                        a[(i - 1 - s) * n * o + u + l] = t[s * n * o + u + l];
                  return a;
                },
              },
              {
                key: "getNeighborsInfo",
                value: function (t, e, r) {
                  var n = {};
                  return (
                    this.getNeighbors8(r).forEach(function (r, i) {
                      var o = r.join("/");
                      if (o in e) {
                        var a = t[e[o]][1];
                        n[i] = a;
                      }
                    }),
                    n
                  );
                },
              },
              {
                key: "getNeighbors8",
                value: function (t) {
                  var e = [];
                  return (
                    [
                      [0, 0, -1],
                      [0, -1, 0],
                      [0, 0, 1],
                      [0, 1, 0],
                      [0, -1, -1],
                      [0, -1, 1],
                      [0, 1, 1],
                      [0, 1, -1],
                    ].forEach(function (r) {
                      var n = r.map(function (e, r) {
                        return e + t[r];
                      });
                      e.push(n);
                    }),
                    e
                  );
                },
              },
              {
                key: "_build",
                value: function (t, e, r, i, o) {
                  var a = this;
                  t.sort(function (t, e) {
                    return t[0].join("/") > e[0].join("/") ? 1 : -1;
                  });
                  var s = {};
                  t.forEach(function (t, e) {
                    s[t[0].join("/")] = e;
                  });
                  var u = [];
                  return (
                    t.forEach(function (l) {
                      var h = Z(l, 3),
                        f = h[0],
                        c = h[1],
                        p = h[2];
                      if (49152 === c.length) {
                        var d = a.resolveSeams(c, a.getNeighborsInfo(t, s, f)),
                          g = new n.PlaneBufferGeometry(1, 1, d[0], d[1]);
                        g.attributes.position.array = new Float32Array(c);
                        var y = new n.Mesh(
                          g,
                          new n.MeshBasicMaterial({
                            wireframe: !0,
                            color: 13421772,
                          })
                        );
                        y.name = "dem-rgb-".concat(f.join("/"));
                        var v = function (t) {
                          return [t[1], t[2], t[0]];
                        };
                        (y.userData.threeGeo = {
                          tile: v(f),
                          srcDem: {
                            tile: v(p),
                            uri: Y.getUriMapbox(r, "mapbox-terrain-rgb", p),
                          },
                        }),
                          u.push(y),
                          a.resolveTex(f, e, r, i, function (t) {
                            t &&
                              (y.material = new n.MeshBasicMaterial({
                                side: n.FrontSide,
                                map: t,
                              })),
                              o && o(y, u);
                          });
                      }
                    }),
                    u
                  );
                },
              },
              {
                key: "resolveTex",
                value: function (t, e, r, i, o) {
                  var a = this;
                  Y.fetchTile(t, e, r, i, function (e) {
                    var r = null;
                    e
                      ? ((r = new n.DataTexture(
                          a.createDataFlipY(e.data, e.shape),
                          e.shape[0],
                          e.shape[1],
                          n.RGBAFormat
                        )).needsUpdate = !0)
                      : "fetchTile() failed for tex of zp: ".concat(t),
                      o && o(r);
                  });
                },
              },
            ]),
            (r = [
              {
                key: "fetch",
                value: function (t, e) {
                  var r = this,
                    n = Y.getZoomposEle(t),
                    i = 0;
                  n.forEach(function (o) {
                    Y.fetchTile(
                      o,
                      r.apiRgb,
                      r.token,
                      r.useNodePixels,
                      function (a) {
                        a
                          ? r.addTile(a, o, t, e)
                          : "fetchTile() failed for rgb dem of zp: "
                              .concat(o, " (count: ")
                              .concat(i, "/")
                              .concat(n.length, ")"),
                          ++i === n.length && r.build();
                      }
                    );
                  });
                },
              },
              {
                key: "addTile",
                value: function (t, e, r, n) {
                  (this.dataEleCovered = this.dataEleCovered.concat(
                    this._addTile(t, e, r, n)
                  )),
                    "now ".concat(
                      this.dataEleCovered.length,
                      " satellite tiles in dataEleCovered"
                    );
                },
              },
              {
                key: "_addTile",
                value: function (t, e, r, n) {
                  var i = this.unitsPerMeter,
                    o = this.projectCoord,
                    a = [];
                  if (t)
                    for (var s, u, l, h = 0; h < t.data.length; h += 4)
                      (s = t.data[h]),
                        (u = t.data[h + 1]),
                        (l = t.data[h + 2]),
                        a.push(0.1 * (256 * s * 256 + 256 * u + l) - 1e4);
                  else a = new Array(262144).fill(0);
                  for (var f = [], c = 0; c < 4; c++)
                    for (var p = 0; p < 4; p++)
                      f.push([e[0] + 2, 4 * e[1] + c, 4 * e[2] + p].join("/"));
                  var d = r.map(function (t) {
                      return t.join("/");
                    }),
                    g = [];
                  return (
                    f.forEach(function (t, r) {
                      if (d.includes(t)) {
                        for (
                          var s = t.split("/").map(function (t) {
                              return parseInt(t);
                            }),
                            u = it[r],
                            l = [],
                            h = u[0][0];
                          h < u[0][1];
                          h++
                        )
                          for (var f = u[1][0]; f < u[1][1]; f++)
                            l.push(a[512 * h + f]);
                        for (var c = [], p = 0, y = 0; y < et; y++)
                          for (var v = 0; v < et; v++) {
                            var b = rt.ll(
                              [128 * s[1] + v, 128 * s[2] + y],
                              s[0]
                            );
                            c.push.apply(
                              c,
                              J(o(b, n.northWest, n.southEast)).concat([
                                l[p] * i,
                              ])
                            ),
                              p++;
                          }
                        g.push([s, c, e]);
                      }
                    }),
                    g
                  );
                },
              },
              {
                key: "build",
                value: function () {
                  var e = this;
                  if ((this.dataEleCovered, 0 === this.dataEleCovered.length)) {
                    var r = [];
                    return (
                      this.onRgbDem(r),
                      void this.watcher({ what: "dem-rgb", data: r })
                    );
                  }
                  var n = null;
                  if (this.onSatelliteMat) {
                    var i = 0;
                    n = function (t, r) {
                      i++,
                        e.onSatelliteMat(t),
                        i === e.dataEleCovered.length &&
                          e.watcher({ what: "dem-rgb", data: r });
                    };
                  }
                  var o = t._build(
                    this.dataEleCovered,
                    this.apiSatellite,
                    this.token,
                    this.useNodePixels,
                    n
                  );
                  this.onRgbDem(o),
                    n || this.watcher({ what: "dem-rgb", data: o });
                },
              },
            ]) && tt(e.prototype, r),
            i && tt(e, i),
            t
          );
        })();
        var at = r(8899),
          st = (r(964), r(2676)),
          ut = r.n(st);
        const lt = function (t, e, r) {
          void 0 === r && (r = {});
          var n = (0, E.getGeom)(t),
            i = (0, E.getGeom)(e),
            o = ut().union(n.coordinates, i.coordinates);
          return 0 === o.length
            ? null
            : 1 === o.length
            ? (0, w.polygon)(o[0], r.properties)
            : (0, w.multiPolygon)(o, r.properties);
        };
        var ht = r(8706),
          ft = r.n(ht);
        function ct(t, e) {
          return (
            (function (t) {
              if (Array.isArray(t)) return t;
            })(t) ||
            (function (t, e) {
              if (
                "undefined" == typeof Symbol ||
                !(Symbol.iterator in Object(t))
              )
                return;
              var r = [],
                n = !0,
                i = !1,
                o = void 0;
              try {
                for (
                  var a, s = t[Symbol.iterator]();
                  !(n = (a = s.next()).done) &&
                  (r.push(a.value), !e || r.length !== e);
                  n = !0
                );
              } catch (t) {
                (i = !0), (o = t);
              } finally {
                try {
                  n || null == s.return || s.return();
                } finally {
                  if (i) throw o;
                }
              }
              return r;
            })(t, e) ||
            (function (t, e) {
              if (!t) return;
              if ("string" == typeof t) return pt(t, e);
              var r = Object.prototype.toString.call(t).slice(8, -1);
              "Object" === r && t.constructor && (r = t.constructor.name);
              if ("Map" === r || "Set" === r) return Array.from(t);
              if (
                "Arguments" === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              )
                return pt(t, e);
            })(t, e) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function pt(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
          return n;
        }
        function dt(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(t, n.key, n);
          }
        }
        const gt = (function () {
          function t(e) {
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              (this.unitsPerMeter = e.unitsPerMeter),
              (this.projectCoord = e.projectCoord),
              (this.token = e.token),
              (this.useNodePixels = e.useNodePixels),
              (this.apiVector = e.apiVector),
              (this.onVectorDem = e.onVectorDem),
              (this.watcher = e.watcher),
              (this.bottomTiles = []),
              (this.geojson = { type: "FeatureCollection", features: [] });
          }
          var e, r, i;
          return (
            (e = t),
            (i = [
              {
                key: "_addBottomEle",
                value: function (t, e, r) {
                  e.forEach(function (e) {
                    for (var n = e.properties.ele, i = r[0]; i < n; i += 10)
                      t.features.push({
                        type: "Feature",
                        geometry: e.geometry,
                        properties: { ele: i },
                      });
                  });
                },
              },
              {
                key: "_getContours",
                value: function (t, e, r, n) {
                  for (
                    var i = [],
                      o = function (r) {
                        var n = t[r],
                          o = e.features.filter(function (t) {
                            return t.properties.ele === n;
                          });
                        try {
                          var a = w.featureCollection(o).features,
                            s = a.reduce(function (t, e) {
                              return lt(t, e);
                            }, a[0]);
                          if (s) {
                            var u = (0, at.Z)(s.geometry);
                            i.push({ geometry: s, ele: n, area: u });
                          }
                        } catch (t) {
                          t.message;
                        }
                      },
                      a = 0;
                    a < t.length;
                    a++
                  )
                    o(a);
                  return i;
                },
              },
            ]),
            (r = [
              {
                key: "fetch",
                value: function (t, e, r) {
                  var n = this,
                    i = Y.getZoomposEle(t),
                    o = 0;
                  i.forEach(function (t) {
                    Y.fetchTile(
                      t,
                      n.apiVector,
                      n.token,
                      n.useNodePixels,
                      function (a) {
                        a
                          ? n.addTile(a, t)
                          : "fetchTile() failed for vector dem of zp: "
                              .concat(t, " (count: ")
                              .concat(o, "/")
                              .concat(i.length, ")"),
                          ++o === i.length && n.build(e, r);
                      }
                    );
                  });
                },
              },
              {
                key: "addTile",
                value: function (t, e) {
                  var r = this;
                  if (t.layers.contour)
                    for (
                      var n = function (n) {
                          var i = t.layers.contour
                            .feature(n)
                            .toGeoJSON(e[1], e[2], e[0]);
                          0 === n && r.bottomTiles.push(i),
                            "MultiPolygon" === i.geometry.type
                              ? i.geometry.coordinates.forEach(function (t) {
                                  return r.geojson.features.push({
                                    type: "Feature",
                                    properties: { ele: i.properties.ele },
                                    geometry: {
                                      type: "Polygon",
                                      coordinates: t,
                                    },
                                  });
                                })
                              : r.geojson.features.push(i);
                        },
                        i = 0;
                      i < t.layers.contour.length;
                      i++
                    )
                      n(i);
                  else "no contours! (zoom=".concat(e[0], ")");
                },
              },
              {
                key: "_buildContours",
                value: function (e, r) {
                  var n = ft()(
                    this.geojson.features.map(function (t) {
                      return t.properties.ele;
                    })
                  ).sort(function (t, e) {
                    return t - e;
                  });
                  return (
                    t._addBottomEle(this.geojson, this.bottomTiles, n),
                    t._getContours(n, this.geojson, e, r * r * 2e6)
                  );
                },
              },
              {
                key: "build",
                value: function (t, e) {
                  var r = this._buildModelThree(
                    this._buildContours(t.feature, e),
                    t.northWest,
                    t.southEast
                  );
                  this.onVectorDem && this.onVectorDem(r),
                    this.watcher && this.watcher({ what: "dem-vec", data: r });
                },
              },
              {
                key: "_buildModelThree",
                value: function (t, e, r) {
                  for (
                    var n,
                      i,
                      o,
                      a,
                      s,
                      u = this,
                      l =
                        ((n = [2300184, 15557462]),
                        (i = t.length),
                        (a = (o = function (t) {
                          return [t >> 16, (65280 & t) >> 8, 255 & t];
                        })(n[0])),
                        (s = o(n[1] - n[0])),
                        function (t) {
                          return (
                            ((a[0] + Math.floor((t * s[0]) / i)) << 16) +
                            ((a[1] + Math.floor((t * s[1]) / i)) << 8) +
                            (a[2] + Math.floor((t * s[2]) / i))
                          );
                        }),
                      h = [],
                      f = function (n, i) {
                        var o = ct(u._buildSlice(n, i, l(i), t, e, r), 2),
                          a = o[0],
                          s = o[1];
                        a.forEach(function (t) {
                          h.push(t);
                        }),
                          h.push(s);
                      },
                      c = 0;
                    c < t.length;
                    c++
                  ) {
                    var p = t[c].geometry.geometry;
                    if ("Polygon" === p.type) f(p.coordinates, c);
                    else if ("MultiPolygon" === p.type)
                      for (var d = 0; d < p.coordinates.length; d++)
                        f(p.coordinates[d], c);
                  }
                  return h;
                },
              },
              {
                key: "_buildSlice",
                value: function (t, e, r, i, o, a) {
                  var s = this,
                    u = new n.Shape(),
                    l = [new n.BufferGeometry()],
                    h = e,
                    f = -i[h].ele * this.unitsPerMeter,
                    c = function (t, e) {
                      return t.setAttribute(
                        "position",
                        new n.BufferAttribute(new Float32Array(e), 3)
                      );
                    },
                    p = [];
                  t[0].forEach(function (t, e) {
                    var r = ct(s.projectCoord(t, o, a), 2),
                      n = r[0],
                      i = r[1];
                    p.push(-n, i, f),
                      0 === e ? u.moveTo(-n, i) : u.lineTo(-n, i);
                  }),
                    c(l[0], p);
                  for (var d = 1; d < t.length; d++) {
                    var g = new n.Path();
                    l.push(new n.BufferGeometry());
                    for (var y = [], v = 0; v < t[d].length; v++) {
                      var b = ct(this.projectCoord(t[d][v], o, a), 2),
                        m = b[0],
                        w = b[1];
                      y.push(-m, w, f),
                        0 === v ? g.moveTo(-m, w) : g.lineTo(-m, w);
                    }
                    c(l[d], y), u.holes.push(g);
                  }
                  var x = [];
                  l.forEach(function (t, e) {
                    var r = new n.Line(
                      l[0],
                      new n.LineBasicMaterial({ color: 13421772 })
                    );
                    (r.rotation.y = Math.PI),
                      (r.name = "dem-vec-line-"
                        .concat(i[h].ele, "-")
                        .concat(r.uuid)),
                      x.push(r);
                  });
                  var _ = new n.ExtrudeGeometry(u, {
                      depth: i[h + 1]
                        ? this.unitsPerMeter * (i[h + 1].ele - i[h].ele)
                        : this.unitsPerMeter * (i[h].ele - i[h - 1].ele),
                      bevelEnabled: !1,
                    }),
                    E = new n.Mesh(
                      _,
                      new n.MeshBasicMaterial({ color: r, wireframe: !1 })
                    );
                  return (
                    (E.rotation.y = Math.PI),
                    (E.position.z = -f),
                    (E.name = "dem-vec-shade-"
                      .concat(i[h].ele, "-")
                      .concat(E.uuid)),
                    [x, E]
                  );
                },
              },
            ]) && dt(e.prototype, r),
            i && dt(e, i),
            t
          );
        })();
        function yt(t, e) {
          return (
            (function (t) {
              if (Array.isArray(t)) return t;
            })(t) ||
            (function (t, e) {
              if (
                "undefined" == typeof Symbol ||
                !(Symbol.iterator in Object(t))
              )
                return;
              var r = [],
                n = !0,
                i = !1,
                o = void 0;
              try {
                for (
                  var a, s = t[Symbol.iterator]();
                  !(n = (a = s.next()).done) &&
                  (r.push(a.value), !e || r.length !== e);
                  n = !0
                );
              } catch (t) {
                (i = !0), (o = t);
              } finally {
                try {
                  n || null == s.return || s.return();
                } finally {
                  if (i) throw o;
                }
              }
              return r;
            })(t, e) ||
            vt(t, e) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function vt(t, e) {
          if (t) {
            if ("string" == typeof t) return bt(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            return (
              "Object" === r && t.constructor && (r = t.constructor.name),
              "Map" === r || "Set" === r
                ? Array.from(t)
                : "Arguments" === r ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                ? bt(t, e)
                : void 0
            );
          }
        }
        function bt(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
          return n;
        }
        function mt(t, e, r, n, i, o, a) {
          try {
            var s = t[o](a),
              u = s.value;
          } catch (t) {
            return void r(t);
          }
          s.done ? e(u) : Promise.resolve(u).then(n, i);
        }
        function wt(t) {
          return function () {
            var e = this,
              r = arguments;
            return new Promise(function (n, i) {
              var o = t.apply(e, r);
              function a(t) {
                mt(o, n, i, a, s, "next", t);
              }
              function s(t) {
                mt(o, n, i, a, s, "throw", t);
              }
              a(void 0);
            });
          };
        }
        function xt(t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        }
        function _t(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(t, n.key, n);
          }
        }
        var Et = "1.4.5-dev.1",
          St = function () {},
          kt = (function () {
            function t() {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              xt(this, t),
                (this.version = Et),
                console.info(
                  "ThreeGeo ".concat(Et, " with THREE r").concat(n.REVISION)
                ),
                console.info(
                  "Note: Since three-geo v1.4.3, when using with NodeJS, you must set the constructor option `useNodePixels` to `true` (https://github.com/w3reality/three-geo#api)"
                );
              var r = {
                  unitsSide: 1,
                  tokenMapbox: "",
                  useNodePixels: !1,
                  apiVector: "mapbox-terrain-vector",
                  apiRgb: "mapbox-terrain-rgb",
                  apiSatellite: "mapbox-satellite",
                },
                i = Object.assign({}, r, e);
              (this.constUnitsSide = i.unitsSide),
                (this.tokenMapbox = i.tokenMapbox),
                (this.useNodePixels = i.useNodePixels),
                (this.apiVector = i.apiVector),
                (this.apiRgb = i.apiRgb),
                (this.apiSatellite = i.apiSatellite);
            }
            var e, r, o, a, s;
            return (
              (e = t),
              (r = [
                {
                  key: "getProjection",
                  value: function (e, r) {
                    var n =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : this.constUnitsSide,
                      i = W.originRadiusToBbox(e, r),
                      o = t._getUnitsPerMeter(n, r);
                    return {
                      proj: function (e) {
                        var r =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : void 0;
                        return t._proj(e, r, i, n);
                      },
                      projInv: function (r, n) {
                        return t._projInv(r, n, e, o);
                      },
                      bbox: i,
                      unitsPerMeter: o,
                    };
                  },
                },
                {
                  key: "getTerrain",
                  value: function (e, r, n) {
                    var i = this,
                      o =
                        arguments.length > 3 && void 0 !== arguments[3]
                          ? arguments[3]
                          : {};
                    return new Promise(function (a, s) {
                      try {
                        var u = t._createWatcher(o, a);
                        if (!u) return;
                        var l = i.constUnitsSide,
                          h = t._getUnitsPerMeter(l, r),
                          f = function (e, r, n) {
                            return t._projectCoord(l, e, r, n);
                          },
                          c = i.tokenMapbox,
                          p = i.useNodePixels,
                          d = i.apiRgb,
                          g = i.apiSatellite,
                          y = i.apiVector,
                          v = o.onRgbDem,
                          b = o.onSatelliteMat,
                          m = o.onVectorDem,
                          w = t.getBbox(e, r),
                          x = t.getZoomposCovered(w.feature, n);
                        v &&
                          new ot({
                            unitsPerMeter: h,
                            projectCoord: f,
                            token: c,
                            useNodePixels: p,
                            apiRgb: d,
                            apiSatellite: g,
                            onRgbDem: v,
                            onSatelliteMat: b,
                            watcher: u,
                          }).fetch(x, w),
                          m &&
                            new gt({
                              unitsPerMeter: h,
                              projectCoord: f,
                              token: c,
                              useNodePixels: p,
                              apiVector: y,
                              onVectorDem: m,
                              watcher: u,
                            }).fetch(x, w, r);
                      } catch (t) {
                        console.error("err:", t), s(t);
                      }
                    });
                  },
                },
                {
                  key: "getTerrainRgb",
                  value:
                    ((s = wt(
                      regeneratorRuntime.mark(function e(r, n, i) {
                        var o,
                          a,
                          s,
                          u = arguments;
                        return regeneratorRuntime.wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (o =
                                      u.length > 3 && void 0 !== u[3]
                                        ? u[3]
                                        : void 0),
                                    (e.next = 3),
                                    this.getTerrain(r, n, i, {
                                      onRgbDem: function () {},
                                      onSatelliteMat: function () {},
                                    })
                                  );
                                case 3:
                                  return (
                                    (a = e.sent),
                                    (s = a.rgbDem),
                                    e.abrupt(
                                      "return",
                                      o ? o(s) : t._createDemGroup(s, "dem-rgb")
                                    )
                                  );
                                case 6:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this
                        );
                      })
                    )),
                    function (t, e, r) {
                      return s.apply(this, arguments);
                    }),
                },
                {
                  key: "getTerrainVector",
                  value:
                    ((a = wt(
                      regeneratorRuntime.mark(function e(r, n, i) {
                        var o,
                          a,
                          s,
                          u = arguments;
                        return regeneratorRuntime.wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (o =
                                      u.length > 3 && void 0 !== u[3]
                                        ? u[3]
                                        : void 0),
                                    (e.next = 3),
                                    this.getTerrain(r, n, i, {
                                      onVectorDem: function () {},
                                    })
                                  );
                                case 3:
                                  return (
                                    (a = e.sent),
                                    (s = a.vectorDem),
                                    e.abrupt(
                                      "return",
                                      o ? o(s) : t._createDemGroup(s, "dem-vec")
                                    )
                                  );
                                case 6:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this
                        );
                      })
                    )),
                    function (t, e, r) {
                      return a.apply(this, arguments);
                    }),
                },
                {
                  key: "setApiVector",
                  value: function (t) {
                    this.apiVector = t;
                  },
                },
                {
                  key: "setApiRgb",
                  value: function (t) {
                    this.apiRgb = t;
                  },
                },
                {
                  key: "setApiSatellite",
                  value: function (t) {
                    this.apiSatellite = t;
                  },
                },
              ]),
              (o = [
                {
                  key: "_getUnitsPerMeter",
                  value: function (t, e) {
                    return t / (e * Math.pow(2, 0.5) * 1e3);
                  },
                },
                {
                  key: "_projectCoord",
                  value: function (t, e, r, n) {
                    return [
                      t * ((e[0] - r[0]) / (n[0] - r[0]) - 0.5),
                      t * (-0.5 - (e[1] - n[1]) / (n[1] - r[1])),
                    ];
                  },
                },
                {
                  key: "_proj",
                  value: function (t, e, r, n) {
                    var i = yt(t, 2),
                      o = i[0],
                      a = i[1],
                      s = yt(r, 4),
                      u = s[0],
                      l = s[1],
                      h = s[2],
                      f = s[3],
                      c = yt(this._projectCoord(n, [a, o], [u, f], [h, l]), 2),
                      p = c[0],
                      d = c[1],
                      g = e ? St(p, d, o, a, e) : void 0;
                    return void 0 !== g ? [p, d, g] : [p, d];
                  },
                },
                {
                  key: "_projInv",
                  value: function (t, e, r, n) {
                    var i = W.translateTurfObject(
                      W.createTurfPoint(r),
                      t,
                      e,
                      0,
                      n
                    ).geometry.coordinates;
                    return [i[1], i[0]];
                  },
                },
                {
                  key: "getZoomposCovered",
                  value: function (t, e) {
                    var r = { min_zoom: e, max_zoom: e };
                    return i.Sv(t.geometry, r).map(function (t) {
                      var e = yt(t, 3),
                        r = e[0],
                        n = e[1];
                      return [e[2], r, n];
                    });
                  },
                },
                {
                  key: "getBbox",
                  value: function (t, e) {
                    var r = {
                        type: "Feature",
                        properties: {},
                        geometry: { type: "Polygon", coordinates: [[]] },
                      },
                      n = yt(W.originRadiusToBbox(t, e), 4),
                      i = n[0],
                      o = n[1],
                      a = n[2],
                      s = [i, n[3]],
                      u = [a, o];
                    return (
                      (r.geometry.coordinates[0] = [
                        s,
                        [u[0], s[1]],
                        u,
                        [s[0], u[1]],
                        s,
                      ]),
                      { feature: r, northWest: s, southEast: u }
                    );
                  },
                },
                {
                  key: "_createWatcher",
                  value: function (t, e) {
                    var r = !!t.onVectorDem,
                      n = !!t.onRgbDem,
                      i = { vectorDem: [], rgbDem: [] },
                      o = function () {
                        return !r && !n;
                      };
                    return o()
                      ? (e(i), null)
                      : function (t) {
                          var a = t.what,
                            s = t.data;
                          "dem-vec" === a && ((r = !1), (i.vectorDem = s)),
                            "dem-rgb" === a && ((n = !1), (i.rgbDem = s)),
                            o() && e(i);
                        };
                  },
                },
                {
                  key: "_createDemGroup",
                  value: function (t, e) {
                    var r = new n.Group();
                    r.name = e;
                    var i,
                      o = (function (t, e) {
                        var r;
                        if (
                          "undefined" == typeof Symbol ||
                          null == t[Symbol.iterator]
                        ) {
                          if (
                            Array.isArray(t) ||
                            (r = vt(t)) ||
                            (e && t && "number" == typeof t.length)
                          ) {
                            r && (t = r);
                            var n = 0,
                              i = function () {};
                            return {
                              s: i,
                              n: function () {
                                return n >= t.length
                                  ? { done: !0 }
                                  : { done: !1, value: t[n++] };
                              },
                              e: function (t) {
                                throw t;
                              },
                              f: i,
                            };
                          }
                          throw new TypeError(
                            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                          );
                        }
                        var o,
                          a = !0,
                          s = !1;
                        return {
                          s: function () {
                            r = t[Symbol.iterator]();
                          },
                          n: function () {
                            var t = r.next();
                            return (a = t.done), t;
                          },
                          e: function (t) {
                            (s = !0), (o = t);
                          },
                          f: function () {
                            try {
                              a || null == r.return || r.return();
                            } finally {
                              if (s) throw o;
                            }
                          },
                        };
                      })(t);
                    try {
                      for (o.s(); !(i = o.n()).done; ) {
                        var a = i.value;
                        r.add(a);
                      }
                    } catch (t) {
                      o.e(t);
                    } finally {
                      o.f();
                    }
                    return r;
                  },
                },
              ]),
              r && _t(e.prototype, r),
              o && _t(e, o),
              t
            );
          })();
        (kt.Utils = W), (kt.Laser = m);
        const Mt = kt;
      },
      9697: (t, e, r) => {
        "use strict";
        var n = r(1664).Buffer,
          i = r(9530),
          o = r(2861),
          a = r(1494).N,
          s = (r(1943), r(6547), r(858));
        function u(t, e) {
          var r;
          try {
            r = new a(t);
          } catch (t) {
            return void e(t);
          }
          if (r.numFrames() > 0) {
            var n = [r.numFrames(), r.height, r.width, 4],
              i = new Uint8Array(n[0] * n[1] * n[2] * n[3]),
              s = o(i, n);
            try {
              for (var u = 0; u < r.numFrames(); ++u)
                r.decodeAndBlitFrameRGBA(
                  u,
                  i.subarray(s.index(u, 0, 0, 0), s.index(u + 1, 0, 0, 0))
                );
            } catch (t) {
              return void e(t);
            }
            e(null, s.transpose(0, 2, 1));
          } else {
            (n = [r.height, r.width, 4]),
              (i = new Uint8Array(n[0] * n[1] * n[2])),
              (s = o(i, n));
            try {
              r.decodeAndBlitFrameRGBA(0, i);
            } catch (t) {
              return void e(t);
            }
            e(null, s.transpose(1, 0));
          }
        }
        function l(t, e) {
          process.nextTick(function () {
            try {
              var r = s(t);
              r
                ? u(
                    (function (t) {
                      if (void 0 === t[0]) {
                        for (
                          var e = t.length, r = new Uint8Array(e), n = 0;
                          n < e;
                          ++n
                        )
                          r[n] = t.get(n);
                        return r;
                      }
                      return new Uint8Array(t);
                    })(r),
                    e
                  )
                : e(new Error("Error parsing data URI"));
            } catch (t) {
              e(t);
            }
          });
        }
        t.exports = function (t, e, r) {
          r || ((r = e), (e = ""));
          var a = i.extname(t);
          switch (e || a.toUpperCase()) {
            case ".GIF":
              !(function (t, e) {
                var r = new XMLHttpRequest();
                r.open("GET", t, !0),
                  (r.responseType = "arraybuffer"),
                  r.overrideMimeType &&
                    r.overrideMimeType("application/binary"),
                  (r.onerror = function (t) {
                    e(t);
                  }),
                  (r.onload = function () {
                    4 === r.readyState && u(new Uint8Array(r.response), e);
                  }),
                  r.send();
              })(t, r);
              break;
            default:
              n.isBuffer(t) &&
                (t = "data:" + e + ";base64," + t.toString("base64")),
                0 === t.indexOf("data:image/gif;")
                  ? l(t, r)
                  : (function (t, e) {
                      var r = new Image();
                      (r.crossOrigin = "Anonymous"),
                        (r.onload = function () {
                          var t = document.createElement("canvas");
                          (t.width = r.width), (t.height = r.height);
                          var n = t.getContext("2d");
                          n.drawImage(r, 0, 0);
                          var i = n.getImageData(0, 0, r.width, r.height);
                          e(
                            null,
                            o(
                              new Uint8Array(i.data),
                              [r.width, r.height, 4],
                              [4, 4 * r.width, 1],
                              0
                            )
                          );
                        }),
                        (r.onerror = function (t) {
                          e(t);
                        }),
                        (r.src = t);
                    })(t, r);
          }
        };
      },
      8908: (t, e, r) => {
        var n;
        (n =
          "undefined" != typeof window
            ? window
            : void 0 !== r.g
            ? r.g
            : "undefined" != typeof self
            ? self
            : {}),
          (t.exports = n);
      },
      645: (t, e) => {
        (e.read = function (t, e, r, n, i) {
          var o,
            a,
            s = 8 * i - n - 1,
            u = (1 << s) - 1,
            l = u >> 1,
            h = -7,
            f = r ? i - 1 : 0,
            c = r ? -1 : 1,
            p = t[e + f];
          for (
            f += c, o = p & ((1 << -h) - 1), p >>= -h, h += s;
            h > 0;
            o = 256 * o + t[e + f], f += c, h -= 8
          );
          for (
            a = o & ((1 << -h) - 1), o >>= -h, h += n;
            h > 0;
            a = 256 * a + t[e + f], f += c, h -= 8
          );
          if (0 === o) o = 1 - l;
          else {
            if (o === u) return a ? NaN : (1 / 0) * (p ? -1 : 1);
            (a += Math.pow(2, n)), (o -= l);
          }
          return (p ? -1 : 1) * a * Math.pow(2, o - n);
        }),
          (e.write = function (t, e, r, n, i, o) {
            var a,
              s,
              u,
              l = 8 * o - i - 1,
              h = (1 << l) - 1,
              f = h >> 1,
              c = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
              p = n ? 0 : o - 1,
              d = n ? 1 : -1,
              g = e < 0 || (0 === e && 1 / e < 0) ? 1 : 0;
            for (
              e = Math.abs(e),
                isNaN(e) || e === 1 / 0
                  ? ((s = isNaN(e) ? 1 : 0), (a = h))
                  : ((a = Math.floor(Math.log(e) / Math.LN2)),
                    e * (u = Math.pow(2, -a)) < 1 && (a--, (u *= 2)),
                    (e += a + f >= 1 ? c / u : c * Math.pow(2, 1 - f)) * u >=
                      2 && (a++, (u /= 2)),
                    a + f >= h
                      ? ((s = 0), (a = h))
                      : a + f >= 1
                      ? ((s = (e * u - 1) * Math.pow(2, i)), (a += f))
                      : ((s = e * Math.pow(2, f - 1) * Math.pow(2, i)),
                        (a = 0)));
              i >= 8;
              t[r + p] = 255 & s, p += d, s /= 256, i -= 8
            );
            for (
              a = (a << i) | s, l += i;
              l > 0;
              t[r + p] = 255 & a, p += d, a /= 256, l -= 8
            );
            t[r + p - d] |= 128 * g;
          });
      },
      5717: (t) => {
        "function" == typeof Object.create
          ? (t.exports = function (t, e) {
              e &&
                ((t.super_ = e),
                (t.prototype = Object.create(e.prototype, {
                  constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })));
            })
          : (t.exports = function (t, e) {
              if (e) {
                t.super_ = e;
                var r = function () {};
                (r.prototype = e.prototype),
                  (t.prototype = new r()),
                  (t.prototype.constructor = t);
              }
            });
      },
      6907: (t) => {
        "use strict";
        t.exports = function (t) {
          for (var e = new Array(t), r = 0; r < t; ++r) e[r] = r;
          return e;
        };
      },
      8738: (t) => {
        function e(t) {
          return (
            !!t.constructor &&
            "function" == typeof t.constructor.isBuffer &&
            t.constructor.isBuffer(t)
          );
        }
        t.exports = function (t) {
          return (
            null != t &&
            (e(t) ||
              (function (t) {
                return (
                  "function" == typeof t.readFloatLE &&
                  "function" == typeof t.slice &&
                  e(t.slice(0, 0))
                );
              })(t) ||
              !!t._isBuffer)
          );
        };
      },
      7376: (t) => {
        t.exports = function (t) {
          if (!t) return !1;
          var r = e.call(t);
          return (
            "[object Function]" === r ||
            ("function" == typeof t && "[object RegExp]" !== r) ||
            ("undefined" != typeof window &&
              (t === window.setTimeout ||
                t === window.alert ||
                t === window.confirm ||
                t === window.prompt))
          );
        };
        var e = Object.prototype.toString;
      },
      9209: function (t, e) {
        !(function (t) {
          "use strict";
          function e(t, e) {
            return t > e ? 1 : t < e ? -1 : 0;
          }
          var r = function (t, r) {
              void 0 === t && (t = e),
                void 0 === r && (r = !1),
                (this._compare = t),
                (this._root = null),
                (this._size = 0),
                (this._noDuplicates = !!r);
            },
            n = { size: { configurable: !0 } };
          function i(t, e, r, n, o) {
            var a = o - n;
            if (a > 0) {
              var s = n + Math.floor(a / 2),
                u = { key: e[s], data: r[s], parent: t };
              return (
                (u.left = i(u, e, r, n, s)), (u.right = i(u, e, r, s + 1, o)), u
              );
            }
            return null;
          }
          function o(t, e, r, n, i) {
            if (!(r >= n)) {
              for (var a = t[(r + n) >> 1], s = r - 1, u = n + 1; ; ) {
                do {
                  s++;
                } while (i(t[s], a) < 0);
                do {
                  u--;
                } while (i(t[u], a) > 0);
                if (s >= u) break;
                var l = t[s];
                (t[s] = t[u]),
                  (t[u] = l),
                  (l = e[s]),
                  (e[s] = e[u]),
                  (e[u] = l);
              }
              o(t, e, r, u, i), o(t, e, u + 1, n, i);
            }
          }
          (r.prototype.rotateLeft = function (t) {
            var e = t.right;
            e &&
              ((t.right = e.left),
              e.left && (e.left.parent = t),
              (e.parent = t.parent)),
              t.parent
                ? t === t.parent.left
                  ? (t.parent.left = e)
                  : (t.parent.right = e)
                : (this._root = e),
              e && (e.left = t),
              (t.parent = e);
          }),
            (r.prototype.rotateRight = function (t) {
              var e = t.left;
              e &&
                ((t.left = e.right),
                e.right && (e.right.parent = t),
                (e.parent = t.parent)),
                t.parent
                  ? t === t.parent.left
                    ? (t.parent.left = e)
                    : (t.parent.right = e)
                  : (this._root = e),
                e && (e.right = t),
                (t.parent = e);
            }),
            (r.prototype._splay = function (t) {
              for (var e = this; t.parent; ) {
                var r = t.parent;
                r.parent
                  ? r.left === t && r.parent.left === r
                    ? (e.rotateRight(r.parent), e.rotateRight(r))
                    : r.right === t && r.parent.right === r
                    ? (e.rotateLeft(r.parent), e.rotateLeft(r))
                    : r.left === t && r.parent.right === r
                    ? (e.rotateRight(r), e.rotateLeft(r))
                    : (e.rotateLeft(r), e.rotateRight(r))
                  : r.left === t
                  ? e.rotateRight(r)
                  : e.rotateLeft(r);
              }
            }),
            (r.prototype.splay = function (t) {
              for (var e, r, n, i, o, a = this; t.parent; )
                (r = (e = t.parent).parent) && r.parent
                  ? ((n = r.parent).left === r ? (n.left = t) : (n.right = t),
                    (t.parent = n))
                  : ((t.parent = null), (a._root = t)),
                  (i = t.left),
                  (o = t.right),
                  t === e.left
                    ? (r &&
                        (r.left === e
                          ? (e.right
                              ? ((r.left = e.right), (r.left.parent = r))
                              : (r.left = null),
                            (e.right = r),
                            (r.parent = e))
                          : (i
                              ? ((r.right = i), (i.parent = r))
                              : (r.right = null),
                            (t.left = r),
                            (r.parent = t))),
                      o ? ((e.left = o), (o.parent = e)) : (e.left = null),
                      (t.right = e),
                      (e.parent = t))
                    : (r &&
                        (r.right === e
                          ? (e.left
                              ? ((r.right = e.left), (r.right.parent = r))
                              : (r.right = null),
                            (e.left = r),
                            (r.parent = e))
                          : (o
                              ? ((r.left = o), (o.parent = r))
                              : (r.left = null),
                            (t.right = r),
                            (r.parent = t))),
                      i ? ((e.right = i), (i.parent = e)) : (e.right = null),
                      (t.left = e),
                      (e.parent = t));
            }),
            (r.prototype.replace = function (t, e) {
              t.parent
                ? t === t.parent.left
                  ? (t.parent.left = e)
                  : (t.parent.right = e)
                : (this._root = e),
                e && (e.parent = t.parent);
            }),
            (r.prototype.minNode = function (t) {
              if ((void 0 === t && (t = this._root), t))
                for (; t.left; ) t = t.left;
              return t;
            }),
            (r.prototype.maxNode = function (t) {
              if ((void 0 === t && (t = this._root), t))
                for (; t.right; ) t = t.right;
              return t;
            }),
            (r.prototype.insert = function (t, e) {
              var r = this._root,
                n = null,
                i = this._compare;
              if (this._noDuplicates)
                for (; r; ) {
                  if (((n = r), 0 === i(r.key, t))) return;
                  r = i(r.key, t) < 0 ? r.right : r.left;
                }
              else
                for (; r; ) (n = r), (r = i(r.key, t) < 0 ? r.right : r.left);
              return (
                (r = { key: t, data: e, left: null, right: null, parent: n }),
                n
                  ? i(n.key, r.key) < 0
                    ? (n.right = r)
                    : (n.left = r)
                  : (this._root = r),
                this.splay(r),
                this._size++,
                r
              );
            }),
            (r.prototype.find = function (t) {
              for (var e = this._root, r = this._compare; e; ) {
                var n = r(e.key, t);
                if (n < 0) e = e.right;
                else {
                  if (!(n > 0)) return e;
                  e = e.left;
                }
              }
              return null;
            }),
            (r.prototype.contains = function (t) {
              for (var e = this._root, r = this._compare; e; ) {
                var n = r(t, e.key);
                if (0 === n) return !0;
                e = n < 0 ? e.left : e.right;
              }
              return !1;
            }),
            (r.prototype.remove = function (t) {
              var e = this.find(t);
              if (!e) return !1;
              if ((this.splay(e), e.left))
                if (e.right) {
                  var r = this.minNode(e.right);
                  r.parent !== e &&
                    (this.replace(r, r.right),
                    (r.right = e.right),
                    (r.right.parent = r)),
                    this.replace(e, r),
                    (r.left = e.left),
                    (r.left.parent = r);
                } else this.replace(e, e.left);
              else this.replace(e, e.right);
              return this._size--, !0;
            }),
            (r.prototype.removeNode = function (t) {
              if (!t) return !1;
              if ((this.splay(t), t.left))
                if (t.right) {
                  var e = this.minNode(t.right);
                  e.parent !== t &&
                    (this.replace(e, e.right),
                    (e.right = t.right),
                    (e.right.parent = e)),
                    this.replace(t, e),
                    (e.left = t.left),
                    (e.left.parent = e);
                } else this.replace(t, t.left);
              else this.replace(t, t.right);
              return this._size--, !0;
            }),
            (r.prototype.erase = function (t) {
              var e = this.find(t);
              if (e) {
                this.splay(e);
                var r = e.left,
                  n = e.right,
                  i = null;
                r &&
                  ((r.parent = null),
                  (i = this.maxNode(r)),
                  this.splay(i),
                  (this._root = i)),
                  n && (r ? (i.right = n) : (this._root = n), (n.parent = i)),
                  this._size--;
              }
            }),
            (r.prototype.pop = function () {
              var t = this._root,
                e = null;
              if (t) {
                for (; t.left; ) t = t.left;
                (e = { key: t.key, data: t.data }), this.remove(t.key);
              }
              return e;
            }),
            (r.prototype.next = function (t) {
              var e = t;
              if (e)
                if (e.right) for (e = e.right; e && e.left; ) e = e.left;
                else
                  for (e = t.parent; e && e.right === t; )
                    (t = e), (e = e.parent);
              return e;
            }),
            (r.prototype.prev = function (t) {
              var e = t;
              if (e)
                if (e.left) for (e = e.left; e && e.right; ) e = e.right;
                else
                  for (e = t.parent; e && e.left === t; )
                    (t = e), (e = e.parent);
              return e;
            }),
            (r.prototype.forEach = function (t) {
              for (var e = this._root, r = [], n = !1, i = 0; !n; )
                e
                  ? (r.push(e), (e = e.left))
                  : r.length > 0
                  ? (t((e = r.pop()), i++), (e = e.right))
                  : (n = !0);
              return this;
            }),
            (r.prototype.range = function (t, e, r, n) {
              for (
                var i = this, o = [], a = this._compare, s = this._root;
                0 !== o.length || s;

              )
                if (s) o.push(s), (s = s.left);
                else {
                  if (a((s = o.pop()).key, e) > 0) break;
                  if (a(s.key, t) >= 0 && r.call(n, s)) return i;
                  s = s.right;
                }
              return this;
            }),
            (r.prototype.keys = function () {
              for (var t = this._root, e = [], r = [], n = !1; !n; )
                t
                  ? (e.push(t), (t = t.left))
                  : e.length > 0
                  ? ((t = e.pop()), r.push(t.key), (t = t.right))
                  : (n = !0);
              return r;
            }),
            (r.prototype.values = function () {
              for (var t = this._root, e = [], r = [], n = !1; !n; )
                t
                  ? (e.push(t), (t = t.left))
                  : e.length > 0
                  ? ((t = e.pop()), r.push(t.data), (t = t.right))
                  : (n = !0);
              return r;
            }),
            (r.prototype.at = function (t) {
              for (var e = this._root, r = [], n = !1, i = 0; !n; )
                if (e) r.push(e), (e = e.left);
                else if (r.length > 0) {
                  if (((e = r.pop()), i === t)) return e;
                  i++, (e = e.right);
                } else n = !0;
              return null;
            }),
            (r.prototype.load = function (t, e, r) {
              if (
                (void 0 === t && (t = []),
                void 0 === e && (e = []),
                void 0 === r && (r = !1),
                0 !== this._size)
              )
                throw new Error("bulk-load: tree is not empty");
              var n = t.length;
              return (
                r && o(t, e, 0, n - 1, this._compare),
                (this._root = i(null, t, e, 0, n)),
                (this._size = n),
                this
              );
            }),
            (r.prototype.min = function () {
              var t = this.minNode(this._root);
              return t ? t.key : null;
            }),
            (r.prototype.max = function () {
              var t = this.maxNode(this._root);
              return t ? t.key : null;
            }),
            (r.prototype.isEmpty = function () {
              return null === this._root;
            }),
            (n.size.get = function () {
              return this._size;
            }),
            (r.createTree = function (t, e, n, i, o) {
              return new r(n, o).load(t, e, i);
            }),
            Object.defineProperties(r.prototype, n);
          var a = 0,
            s = 1,
            u = 2,
            l = 3,
            h = 0,
            f = 1,
            c = 2,
            p = 3;
          function d(t, e, r) {
            null === e
              ? ((t.inOut = !1), (t.otherInOut = !0))
              : (t.isSubject === e.isSubject
                  ? ((t.inOut = !e.inOut), (t.otherInOut = e.otherInOut))
                  : ((t.inOut = !e.otherInOut),
                    (t.otherInOut = e.isVertical() ? !e.inOut : e.inOut)),
                e &&
                  (t.prevInResult =
                    !g(e, r) || e.isVertical() ? e.prevInResult : e)),
              (t.inResult = g(t, r));
          }
          function g(t, e) {
            switch (t.type) {
              case a:
                switch (e) {
                  case h:
                    return !t.otherInOut;
                  case f:
                    return t.otherInOut;
                  case c:
                    return (
                      (t.isSubject && t.otherInOut) ||
                      (!t.isSubject && !t.otherInOut)
                    );
                  case p:
                    return !0;
                }
                break;
              case u:
                return e === h || e === f;
              case l:
                return e === c;
              case s:
                return !1;
            }
            return !1;
          }
          var y = function (t, e, r, n, i) {
            (this.left = e),
              (this.point = t),
              (this.otherEvent = r),
              (this.isSubject = n),
              (this.type = i || a),
              (this.inOut = !1),
              (this.otherInOut = !1),
              (this.prevInResult = null),
              (this.inResult = !1),
              (this.resultInOut = !1),
              (this.isExteriorRing = !0);
          };
          function v(t, e) {
            return t[0] === e[0] && t[1] === e[1];
          }
          function b(t, e, r) {
            return (
              (t[0] - r[0]) * (e[1] - r[1]) - (e[0] - r[0]) * (t[1] - r[1])
            );
          }
          function m(t, e) {
            var r = t.point,
              n = e.point;
            return r[0] > n[0]
              ? 1
              : r[0] < n[0]
              ? -1
              : r[1] !== n[1]
              ? r[1] > n[1]
                ? 1
                : -1
              : w(t, e, r, n);
          }
          function w(t, e, r, n) {
            return t.left !== e.left
              ? t.left
                ? 1
                : -1
              : 0 !== b(r, t.otherEvent.point, e.otherEvent.point)
              ? t.isBelow(e.otherEvent.point)
                ? -1
                : 1
              : !t.isSubject && e.isSubject
              ? 1
              : -1;
          }
          function x(t, e, r) {
            var n = new y(e, !1, t, t.isSubject),
              i = new y(e, !0, t.otherEvent, t.isSubject);
            return (
              v(t.point, t.otherEvent.point) &&
                console.warn("what is that, a collapsed segment?", t),
              (n.contourId = i.contourId = t.contourId),
              m(i, t.otherEvent) > 0 &&
                ((t.otherEvent.left = !0), (i.left = !1)),
              (t.otherEvent.otherEvent = i),
              (t.otherEvent = n),
              r.push(i),
              r.push(n),
              r
            );
          }
          function _(t, e) {
            return t[0] * e[1] - t[1] * e[0];
          }
          function E(t, e) {
            return t[0] * e[0] + t[1] * e[1];
          }
          function S(t, e, r, n, i) {
            var o = [e[0] - t[0], e[1] - t[1]],
              a = [n[0] - r[0], n[1] - r[1]];
            function s(t, e, r) {
              return [t[0] + e * r[0], t[1] + e * r[1]];
            }
            var u = [r[0] - t[0], r[1] - t[1]],
              l = _(o, a),
              h = l * l,
              f = E(o, o);
            if (h > 0) {
              var c = _(u, a) / l;
              if (c < 0 || c > 1) return null;
              var p = _(u, o) / l;
              return p < 0 || p > 1
                ? null
                : 0 === c || 1 === c
                ? i
                  ? null
                  : [s(t, c, o)]
                : 0 === p || 1 === p
                ? i
                  ? null
                  : [s(r, p, a)]
                : [s(t, c, o)];
            }
            if ((h = (l = _(u, o)) * l) > 0) return null;
            var d = E(o, u) / f,
              g = d + E(o, a) / f,
              y = Math.min(d, g),
              v = Math.max(d, g);
            return y <= 1 && v >= 0
              ? 1 === y
                ? i
                  ? null
                  : [s(t, y > 0 ? y : 0, o)]
                : 0 === v
                ? i
                  ? null
                  : [s(t, v < 1 ? v : 1, o)]
                : i && 0 === y && 1 === v
                ? null
                : [s(t, y > 0 ? y : 0, o), s(t, v < 1 ? v : 1, o)]
              : null;
          }
          function k(t, e, r) {
            var n = S(t.point, t.otherEvent.point, e.point, e.otherEvent.point),
              i = n ? n.length : 0;
            if (0 === i) return 0;
            if (
              1 === i &&
              (v(t.point, e.point) || v(t.otherEvent.point, e.otherEvent.point))
            )
              return 0;
            if (2 === i && t.isSubject === e.isSubject) return 0;
            if (1 === i)
              return (
                v(t.point, n[0]) ||
                  v(t.otherEvent.point, n[0]) ||
                  x(t, n[0], r),
                v(e.point, n[0]) ||
                  v(e.otherEvent.point, n[0]) ||
                  x(e, n[0], r),
                1
              );
            var o = [],
              a = !1,
              h = !1;
            return (
              v(t.point, e.point)
                ? (a = !0)
                : 1 === m(t, e)
                ? o.push(e, t)
                : o.push(t, e),
              v(t.otherEvent.point, e.otherEvent.point)
                ? (h = !0)
                : 1 === m(t.otherEvent, e.otherEvent)
                ? o.push(e.otherEvent, t.otherEvent)
                : o.push(t.otherEvent, e.otherEvent),
              (a && h) || a
                ? ((e.type = s),
                  (t.type = e.inOut === t.inOut ? u : l),
                  a && !h && x(o[1].otherEvent, o[0].point, r),
                  2)
                : h
                ? (x(o[0], o[1].point, r), 3)
                : o[0] !== o[3].otherEvent
                ? (x(o[0], o[1].point, r), x(o[1], o[2].point, r), 3)
                : (x(o[0], o[1].point, r), x(o[3].otherEvent, o[2].point, r), 3)
            );
          }
          function M(t, e) {
            if (t === e) return 0;
            if (
              0 !== b(t.point, t.otherEvent.point, e.point) ||
              0 !== b(t.point, t.otherEvent.point, e.otherEvent.point)
            )
              return v(t.point, e.point)
                ? t.isBelow(e.otherEvent.point)
                  ? -1
                  : 1
                : t.point[0] === e.point[0]
                ? t.point[1] < e.point[1]
                  ? -1
                  : 1
                : 1 === m(t, e)
                ? e.isAbove(t.point)
                  ? -1
                  : 1
                : t.isBelow(e.point)
                ? -1
                : 1;
            if (t.isSubject !== e.isSubject) return t.isSubject ? -1 : 1;
            var r = t.point,
              n = e.point;
            return r[0] === n[0] && r[1] === n[1]
              ? ((r = t.otherEvent.point),
                (n = e.otherEvent.point),
                r[0] === n[0] && r[1] === n[1]
                  ? 0
                  : t.contourId > e.contourId
                  ? 1
                  : -1)
              : 1 === m(t, e)
              ? 1
              : -1;
          }
          function R(t, e, n, i, o, a) {
            for (
              var s, u, l, f = new r(M), p = [], g = Math.min(i[2], o[2]);
              0 !== t.length;

            ) {
              var y = t.pop();
              if (
                (p.push(y),
                (a === h && y.point[0] > g) || (a === c && y.point[0] > i[2]))
              )
                break;
              if (y.left) {
                (u = s = f.insert(y)),
                  (s = s !== (l = f.minNode()) ? f.prev(s) : null),
                  (u = f.next(u));
                var v = s ? s.key : null;
                if (
                  (d(y, v, a),
                  u && 2 === k(y, u.key, t) && (d(y, v, a), d(y, u.key, a)),
                  s && 2 === k(s.key, y, t))
                ) {
                  var b = s;
                  d(v, (b = b !== l ? f.prev(b) : null) ? b.key : null, a),
                    d(y, v, a);
                }
              } else
                (y = y.otherEvent),
                  (u = s = f.find(y)),
                  s &&
                    u &&
                    ((s = s !== l ? f.prev(s) : null),
                    (u = f.next(u)),
                    f.remove(y),
                    u && s && k(s.key, u.key, t));
            }
            return p;
          }
          function A(t) {
            var e,
              r,
              n,
              i,
              o = [];
            for (r = 0, n = t.length; r < n; r++)
              (((e = t[r]).left && e.inResult) ||
                (!e.left && e.otherEvent.inResult)) &&
                o.push(e);
            for (var a = !1; !a; )
              for (a = !0, r = 0, n = o.length; r < n; r++)
                r + 1 < n &&
                  1 === m(o[r], o[r + 1]) &&
                  ((i = o[r]), (o[r] = o[r + 1]), (o[r + 1] = i), (a = !1));
            for (r = 0, n = o.length; r < n; r++) (e = o[r]).pos = r;
            for (r = 0, n = o.length; r < n; r++)
              (e = o[r]).left ||
                ((i = e.pos),
                (e.pos = e.otherEvent.pos),
                (e.otherEvent.pos = i));
            return o;
          }
          function j(t, e, r, n) {
            var i = t + 1,
              o = e.length;
            if (i > o - 1) return t - 1;
            for (
              var a = e[t].point, s = e[i].point;
              i < o && s[0] === a[0] && s[1] === a[1];

            ) {
              if (!r[i]) return i;
              s = e[++i].point;
            }
            for (i = t - 1; r[i] && i >= n; ) i--;
            return i;
          }
          function P(t, e) {
            var r,
              n,
              i,
              o = A(t),
              a = {},
              s = [];
            for (r = 0, n = o.length; r < n; r++)
              if (!a[r]) {
                var u = [[]];
                o[r].isExteriorRing
                  ? e === c && !o[r].isSubject && s.length > 1
                    ? s[s.length - 1].push(u[0])
                    : s.push(u)
                  : e !== c || o[r].isSubject || 0 !== s.length
                  ? 0 === s.length
                    ? s.push([[u]])
                    : s[s.length - 1].push(u[0])
                  : s.push(u);
                var l = s.length - 1,
                  h = r,
                  f = o[r].point;
                for (u[0].push(f); h >= r; )
                  (i = o[h]),
                    (a[h] = !0),
                    i.left
                      ? ((i.resultInOut = !1), (i.contourId = l))
                      : ((i.otherEvent.resultInOut = !0),
                        (i.otherEvent.contourId = l)),
                    (a[(h = i.pos)] = !0),
                    u[0].push(o[h].point),
                    (h = j(h, o, a, r));
                (i = o[(h = -1 === h ? r : h)]),
                  (a[h] = a[i.pos] = !0),
                  (i.otherEvent.resultInOut = !0),
                  (i.otherEvent.contourId = l);
              }
            return s;
          }
          (y.prototype.isBelow = function (t) {
            var e = this.point,
              r = this.otherEvent.point;
            return this.left
              ? (e[0] - t[0]) * (r[1] - t[1]) - (r[0] - t[0]) * (e[1] - t[1]) >
                  0
              : (r[0] - t[0]) * (e[1] - t[1]) - (e[0] - t[0]) * (r[1] - t[1]) >
                  0;
          }),
            (y.prototype.isAbove = function (t) {
              return !this.isBelow(t);
            }),
            (y.prototype.isVertical = function () {
              return this.point[0] === this.otherEvent.point[0];
            }),
            (y.prototype.clone = function () {
              var t = new y(
                this.point,
                this.left,
                this.otherEvent,
                this.isSubject,
                this.type
              );
              return (
                (t.inResult = this.inResult),
                (t.prevInResult = this.prevInResult),
                (t.isExteriorRing = this.isExteriorRing),
                (t.inOut = this.inOut),
                (t.otherInOut = this.otherInOut),
                t
              );
            });
          var T = O,
            I = O;
          function O(t, e) {
            var r = this;
            if (!(this instanceof O)) return new O(t, e);
            if (
              ((this.data = t || []),
              (this.length = this.data.length),
              (this.compare = e || B),
              this.length > 0)
            )
              for (var n = (this.length >> 1) - 1; n >= 0; n--) r._down(n);
          }
          function B(t, e) {
            return t < e ? -1 : t > e ? 1 : 0;
          }
          (O.prototype = {
            push: function (t) {
              this.data.push(t), this.length++, this._up(this.length - 1);
            },
            pop: function () {
              if (0 !== this.length) {
                var t = this.data[0];
                return (
                  this.length--,
                  this.length > 0 &&
                    ((this.data[0] = this.data[this.length]), this._down(0)),
                  this.data.pop(),
                  t
                );
              }
            },
            peek: function () {
              return this.data[0];
            },
            _up: function (t) {
              for (var e = this.data, r = this.compare, n = e[t]; t > 0; ) {
                var i = (t - 1) >> 1,
                  o = e[i];
                if (r(n, o) >= 0) break;
                (e[t] = o), (t = i);
              }
              e[t] = n;
            },
            _down: function (t) {
              for (
                var e = this,
                  r = this.data,
                  n = this.compare,
                  i = this.length >> 1,
                  o = r[t];
                t < i;

              ) {
                var a = 1 + (t << 1),
                  s = a + 1,
                  u = r[a];
                if (
                  (s < e.length && n(r[s], u) < 0 && ((a = s), (u = r[s])),
                  n(u, o) >= 0)
                )
                  break;
                (r[t] = u), (t = a);
              }
              r[t] = o;
            },
          }),
            (T.default = I);
          var L = Math.max,
            C = Math.min,
            N = 0;
          function F(t, e, r, n, i, o) {
            var a, s, u, l, h, f;
            for (a = 0, s = t.length - 1; a < s; a++)
              if (
                ((u = t[a]),
                (l = t[a + 1]),
                (h = new y(u, !1, void 0, e)),
                (f = new y(l, !1, h, e)),
                (h.otherEvent = f),
                u[0] !== l[0] || u[1] !== l[1])
              ) {
                (h.contourId = f.contourId = r),
                  o || ((h.isExteriorRing = !1), (f.isExteriorRing = !1)),
                  m(h, f) > 0 ? (f.left = !0) : (h.left = !0);
                var c = u[0],
                  p = u[1];
                (i[0] = C(i[0], c)),
                  (i[1] = C(i[1], p)),
                  (i[2] = L(i[2], c)),
                  (i[3] = L(i[3], p)),
                  n.push(h),
                  n.push(f);
              }
          }
          function U(t, e, r, n, i) {
            var o,
              a,
              s,
              u,
              l,
              h,
              f = new T(null, m);
            for (s = 0, u = t.length; s < u; s++)
              for (l = 0, h = (o = t[s]).length; l < h; l++)
                (a = 0 === l) && N++, F(o[l], !0, N, f, r, a);
            for (s = 0, u = e.length; s < u; s++)
              for (l = 0, h = (o = e[s]).length; l < h; l++)
                (a = 0 === l),
                  i === c && (a = !1),
                  a && N++,
                  F(o[l], !1, N, f, n, a);
            return f;
          }
          var D = [];
          function V(t, e, r) {
            var n = null;
            return (
              t.length * e.length == 0 &&
                (r === h
                  ? (n = D)
                  : r === c
                  ? (n = t)
                  : (r !== f && r !== p) || (n = 0 === t.length ? e : t)),
              n
            );
          }
          function q(t, e, r, n, i) {
            var o = null;
            return (
              (r[0] > n[2] || n[0] > r[2] || r[1] > n[3] || n[1] > r[3]) &&
                (i === h
                  ? (o = D)
                  : i === c
                  ? (o = t)
                  : (i !== f && i !== p) || (o = t.concat(e))),
              o
            );
          }
          function z(t, e, r) {
            "number" == typeof t[0][0][0] && (t = [t]),
              "number" == typeof e[0][0][0] && (e = [e]);
            var n = V(t, e, r);
            if (n) return n === D ? null : n;
            var i = [1 / 0, 1 / 0, -1 / 0, -1 / 0],
              o = [1 / 0, 1 / 0, -1 / 0, -1 / 0],
              a = U(t, e, i, o, r);
            return (n = q(t, e, i, o, r))
              ? n === D
                ? null
                : n
              : P(R(a, t, e, i, o, r), r);
          }
          function G(t, e) {
            return z(t, e, f);
          }
          function W(t, e) {
            return z(t, e, c);
          }
          function H(t, e) {
            return z(t, e, p);
          }
          function $(t, e) {
            return z(t, e, h);
          }
          var Y = { UNION: f, DIFFERENCE: c, INTERSECTION: h, XOR: p };
          (t.union = G),
            (t.diff = W),
            (t.xor = H),
            (t.intersection = $),
            (t.operations = Y),
            Object.defineProperty(t, "__esModule", { value: !0 });
        })(e);
      },
      1943: (t, e, r) => {
        "use strict";
        var n = r(2861),
          i = r(1895);
        t.exports = function (t, e) {
          for (var r = [], o = t, a = 1; Array.isArray(o); )
            r.push(o.length), (a *= o.length), (o = o[0]);
          return 0 === r.length
            ? n()
            : (e || (e = n(new Float64Array(a), r)), i(e, t), e);
        };
      },
      1895: (t, e, r) => {
        t.exports = r(6239)({
          args: ["array", "scalar", "index"],
          pre: { body: "{}", args: [], thisVars: [], localVars: [] },
          body: {
            body: "{\nvar _inline_1_v=_inline_1_arg1_,_inline_1_i\nfor(_inline_1_i=0;_inline_1_i<_inline_1_arg2_.length-1;++_inline_1_i) {\n_inline_1_v=_inline_1_v[_inline_1_arg2_[_inline_1_i]]\n}\n_inline_1_arg0_=_inline_1_v[_inline_1_arg2_[_inline_1_arg2_.length-1]]\n}",
            args: [
              { name: "_inline_1_arg0_", lvalue: !0, rvalue: !1, count: 1 },
              { name: "_inline_1_arg1_", lvalue: !1, rvalue: !0, count: 1 },
              { name: "_inline_1_arg2_", lvalue: !1, rvalue: !0, count: 4 },
            ],
            thisVars: [],
            localVars: ["_inline_1_i", "_inline_1_v"],
          },
          post: { body: "{}", args: [], thisVars: [], localVars: [] },
          funcName: "convert",
          blockSize: 64,
        });
      },
      2861: (t, e, r) => {
        var n = r(6907),
          i = r(8738),
          o = "undefined" != typeof Float64Array;
        function a(t, e) {
          return t[0] - e[0];
        }
        function s() {
          var t,
            e = this.stride,
            r = new Array(e.length);
          for (t = 0; t < r.length; ++t) r[t] = [Math.abs(e[t]), t];
          r.sort(a);
          var n = new Array(r.length);
          for (t = 0; t < n.length; ++t) n[t] = r[t][1];
          return n;
        }
        function u(t, e) {
          var r = ["View", e, "d", t].join("");
          e < 0 && (r = "View_Nil" + t);
          var i = "generic" === t;
          if (-1 === e) {
            var o =
              "function " +
              r +
              "(a){this.data=a;};var proto=" +
              r +
              ".prototype;proto.dtype='" +
              t +
              "';proto.index=function(){return -1};proto.size=0;proto.dimension=-1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function(){return new " +
              r +
              "(this.data);};proto.get=proto.set=function(){};proto.pick=function(){return null};return function construct_" +
              r +
              "(a){return new " +
              r +
              "(a);}";
            return new Function(o)();
          }
          if (0 === e) {
            o =
              "function " +
              r +
              "(a,d) {this.data = a;this.offset = d};var proto=" +
              r +
              ".prototype;proto.dtype='" +
              t +
              "';proto.index=function(){return this.offset};proto.dimension=0;proto.size=1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function " +
              r +
              "_copy() {return new " +
              r +
              "(this.data,this.offset)};proto.pick=function " +
              r +
              "_pick(){return TrivialArray(this.data);};proto.valueOf=proto.get=function " +
              r +
              "_get(){return " +
              (i ? "this.data.get(this.offset)" : "this.data[this.offset]") +
              "};proto.set=function " +
              r +
              "_set(v){return " +
              (i
                ? "this.data.set(this.offset,v)"
                : "this.data[this.offset]=v") +
              "};return function construct_" +
              r +
              "(a,b,c,d){return new " +
              r +
              "(a,d)}";
            return new Function("TrivialArray", o)(l[t][0]);
          }
          o = ["'use strict'"];
          var a = n(e),
            u = a.map(function (t) {
              return "i" + t;
            }),
            h =
              "this.offset+" +
              a
                .map(function (t) {
                  return "this.stride[" + t + "]*i" + t;
                })
                .join("+"),
            f = a
              .map(function (t) {
                return "b" + t;
              })
              .join(","),
            c = a
              .map(function (t) {
                return "c" + t;
              })
              .join(",");
          o.push(
            "function " + r + "(a," + f + "," + c + ",d){this.data=a",
            "this.shape=[" + f + "]",
            "this.stride=[" + c + "]",
            "this.offset=d|0}",
            "var proto=" + r + ".prototype",
            "proto.dtype='" + t + "'",
            "proto.dimension=" + e
          ),
            o.push(
              "Object.defineProperty(proto,'size',{get:function " +
                r +
                "_size(){return " +
                a
                  .map(function (t) {
                    return "this.shape[" + t + "]";
                  })
                  .join("*"),
              "}})"
            ),
            1 === e
              ? o.push("proto.order=[0]")
              : (o.push("Object.defineProperty(proto,'order',{get:"),
                e < 4
                  ? (o.push("function " + r + "_order(){"),
                    2 === e
                      ? o.push(
                          "return (Math.abs(this.stride[0])>Math.abs(this.stride[1]))?[1,0]:[0,1]}})"
                        )
                      : 3 === e &&
                        o.push(
                          "var s0=Math.abs(this.stride[0]),s1=Math.abs(this.stride[1]),s2=Math.abs(this.stride[2]);if(s0>s1){if(s1>s2){return [2,1,0];}else if(s0>s2){return [1,2,0];}else{return [1,0,2];}}else if(s0>s2){return [2,0,1];}else if(s2>s1){return [0,1,2];}else{return [0,2,1];}}})"
                        ))
                  : o.push("ORDER})")),
            o.push("proto.set=function " + r + "_set(" + u.join(",") + ",v){"),
            i
              ? o.push("return this.data.set(" + h + ",v)}")
              : o.push("return this.data[" + h + "]=v}"),
            o.push("proto.get=function " + r + "_get(" + u.join(",") + "){"),
            i
              ? o.push("return this.data.get(" + h + ")}")
              : o.push("return this.data[" + h + "]}"),
            o.push(
              "proto.index=function " + r + "_index(",
              u.join(),
              "){return " + h + "}"
            ),
            o.push(
              "proto.hi=function " +
                r +
                "_hi(" +
                u.join(",") +
                "){return new " +
                r +
                "(this.data," +
                a
                  .map(function (t) {
                    return [
                      "(typeof i",
                      t,
                      "!=='number'||i",
                      t,
                      "<0)?this.shape[",
                      t,
                      "]:i",
                      t,
                      "|0",
                    ].join("");
                  })
                  .join(",") +
                "," +
                a
                  .map(function (t) {
                    return "this.stride[" + t + "]";
                  })
                  .join(",") +
                ",this.offset)}"
            );
          var p = a.map(function (t) {
              return "a" + t + "=this.shape[" + t + "]";
            }),
            d = a.map(function (t) {
              return "c" + t + "=this.stride[" + t + "]";
            });
          o.push(
            "proto.lo=function " +
              r +
              "_lo(" +
              u.join(",") +
              "){var b=this.offset,d=0," +
              p.join(",") +
              "," +
              d.join(",")
          );
          for (var g = 0; g < e; ++g)
            o.push(
              "if(typeof i" +
                g +
                "==='number'&&i" +
                g +
                ">=0){d=i" +
                g +
                "|0;b+=c" +
                g +
                "*d;a" +
                g +
                "-=d}"
            );
          o.push(
            "return new " +
              r +
              "(this.data," +
              a
                .map(function (t) {
                  return "a" + t;
                })
                .join(",") +
              "," +
              a
                .map(function (t) {
                  return "c" + t;
                })
                .join(",") +
              ",b)}"
          ),
            o.push(
              "proto.step=function " +
                r +
                "_step(" +
                u.join(",") +
                "){var " +
                a
                  .map(function (t) {
                    return "a" + t + "=this.shape[" + t + "]";
                  })
                  .join(",") +
                "," +
                a
                  .map(function (t) {
                    return "b" + t + "=this.stride[" + t + "]";
                  })
                  .join(",") +
                ",c=this.offset,d=0,ceil=Math.ceil"
            );
          for (g = 0; g < e; ++g)
            o.push(
              "if(typeof i" +
                g +
                "==='number'){d=i" +
                g +
                "|0;if(d<0){c+=b" +
                g +
                "*(a" +
                g +
                "-1);a" +
                g +
                "=ceil(-a" +
                g +
                "/d)}else{a" +
                g +
                "=ceil(a" +
                g +
                "/d)}b" +
                g +
                "*=d}"
            );
          o.push(
            "return new " +
              r +
              "(this.data," +
              a
                .map(function (t) {
                  return "a" + t;
                })
                .join(",") +
              "," +
              a
                .map(function (t) {
                  return "b" + t;
                })
                .join(",") +
              ",c)}"
          );
          var y = new Array(e),
            v = new Array(e);
          for (g = 0; g < e; ++g)
            (y[g] = "a[i" + g + "]"), (v[g] = "b[i" + g + "]");
          o.push(
            "proto.transpose=function " +
              r +
              "_transpose(" +
              u +
              "){" +
              u
                .map(function (t, e) {
                  return t + "=(" + t + "===undefined?" + e + ":" + t + "|0)";
                })
                .join(";"),
            "var a=this.shape,b=this.stride;return new " +
              r +
              "(this.data," +
              y.join(",") +
              "," +
              v.join(",") +
              ",this.offset)}"
          ),
            o.push(
              "proto.pick=function " +
                r +
                "_pick(" +
                u +
                "){var a=[],b=[],c=this.offset"
            );
          for (g = 0; g < e; ++g)
            o.push(
              "if(typeof i" +
                g +
                "==='number'&&i" +
                g +
                ">=0){c=(c+this.stride[" +
                g +
                "]*i" +
                g +
                ")|0}else{a.push(this.shape[" +
                g +
                "]);b.push(this.stride[" +
                g +
                "])}"
            );
          return (
            o.push(
              "var ctor=CTOR_LIST[a.length+1];return ctor(this.data,a,b,c)}"
            ),
            o.push(
              "return function construct_" +
                r +
                "(data,shape,stride,offset){return new " +
                r +
                "(data," +
                a
                  .map(function (t) {
                    return "shape[" + t + "]";
                  })
                  .join(",") +
                "," +
                a
                  .map(function (t) {
                    return "stride[" + t + "]";
                  })
                  .join(",") +
                ",offset)}"
            ),
            new Function("CTOR_LIST", "ORDER", o.join("\n"))(l[t], s)
          );
        }
        var l = {
          float32: [],
          float64: [],
          int8: [],
          int16: [],
          int32: [],
          uint8: [],
          uint16: [],
          uint32: [],
          array: [],
          uint8_clamped: [],
          bigint64: [],
          biguint64: [],
          buffer: [],
          generic: [],
        };
        t.exports = function (t, e, r, n) {
          if (void 0 === t) return (0, l.array[0])([]);
          "number" == typeof t && (t = [t]), void 0 === e && (e = [t.length]);
          var a = e.length;
          if (void 0 === r) {
            r = new Array(a);
            for (var s = a - 1, h = 1; s >= 0; --s) (r[s] = h), (h *= e[s]);
          }
          if (void 0 === n) {
            n = 0;
            for (s = 0; s < a; ++s) r[s] < 0 && (n -= (e[s] - 1) * r[s]);
          }
          for (
            var f = (function (t) {
                if (i(t)) return "buffer";
                if (o)
                  switch (Object.prototype.toString.call(t)) {
                    case "[object Float64Array]":
                      return "float64";
                    case "[object Float32Array]":
                      return "float32";
                    case "[object Int8Array]":
                      return "int8";
                    case "[object Int16Array]":
                      return "int16";
                    case "[object Int32Array]":
                      return "int32";
                    case "[object Uint8Array]":
                      return "uint8";
                    case "[object Uint16Array]":
                      return "uint16";
                    case "[object Uint32Array]":
                      return "uint32";
                    case "[object Uint8ClampedArray]":
                      return "uint8_clamped";
                    case "[object BigInt64Array]":
                      return "bigint64";
                    case "[object BigUint64Array]":
                      return "biguint64";
                  }
                return Array.isArray(t) ? "array" : "generic";
              })(t),
              c = l[f];
            c.length <= a + 1;

          )
            c.push(u(f, c.length - 1));
          return (0, c[a + 1])(t, e, r, n);
        };
      },
      1494: (t, e) => {
        "use strict";
        function r(t, e, r, n) {
          for (
            var i = t[e++],
              o = 1 << i,
              a = o + 1,
              s = a + 1,
              u = i + 1,
              l = (1 << u) - 1,
              h = 0,
              f = 0,
              c = 0,
              p = t[e++],
              d = new Int32Array(4096),
              g = null;
            ;

          ) {
            for (; h < 16 && 0 !== p; )
              (f |= t[e++] << h), (h += 8), 1 === p ? (p = t[e++]) : --p;
            if (h < u) break;
            var y = f & l;
            if (((f >>= u), (h -= u), y !== o)) {
              if (y === a) break;
              for (var v = y < s ? y : g, b = 0, m = v; m > o; )
                (m = d[m] >> 8), ++b;
              var w = m;
              if (c + b + (v !== y ? 1 : 0) > n) return;
              r[c++] = w;
              var x = (c += b);
              for (v !== y && (r[c++] = w), m = v; b--; )
                (m = d[m]), (r[--x] = 255 & m), (m >>= 8);
              null !== g &&
                s < 4096 &&
                ((d[s++] = (g << 8) | w),
                s >= l + 1 && u < 12 && (++u, (l = (l << 1) | 1))),
                (g = y);
            } else (s = a + 1), (l = (1 << (u = i + 1)) - 1), (g = null);
          }
          return r;
        }
        try {
          (function (t, e, r, n) {
            var i = 0,
              o = void 0 === (n = void 0 === n ? {} : n).loop ? null : n.loop,
              a = void 0 === n.palette ? null : n.palette;
            if (e <= 0 || r <= 0 || e > 65535 || r > 65535)
              throw new Error("Width/Height invalid.");
            function s(t) {
              var e = t.length;
              if (e < 2 || e > 256 || e & (e - 1))
                throw new Error(
                  "Invalid code/color length, must be power of 2 and 2 .. 256."
                );
              return e;
            }
            (t[i++] = 71),
              (t[i++] = 73),
              (t[i++] = 70),
              (t[i++] = 56),
              (t[i++] = 57),
              (t[i++] = 97);
            var u = 0,
              l = 0;
            if (null !== a) {
              for (var h = s(a); (h >>= 1); ) ++u;
              if (((h = 1 << u), --u, void 0 !== n.background)) {
                if ((l = n.background) >= h)
                  throw new Error("Background index out of range.");
                if (0 === l)
                  throw new Error("Background index explicitly passed as 0.");
              }
            }
            if (
              ((t[i++] = 255 & e),
              (t[i++] = (e >> 8) & 255),
              (t[i++] = 255 & r),
              (t[i++] = (r >> 8) & 255),
              (t[i++] = (null !== a ? 128 : 0) | u),
              (t[i++] = l),
              (t[i++] = 0),
              null !== a)
            )
              for (var f = 0, c = a.length; f < c; ++f) {
                var p = a[f];
                (t[i++] = (p >> 16) & 255),
                  (t[i++] = (p >> 8) & 255),
                  (t[i++] = 255 & p);
              }
            if (null !== o) {
              if (o < 0 || o > 65535) throw new Error("Loop count invalid.");
              (t[i++] = 33),
                (t[i++] = 255),
                (t[i++] = 11),
                (t[i++] = 78),
                (t[i++] = 69),
                (t[i++] = 84),
                (t[i++] = 83),
                (t[i++] = 67),
                (t[i++] = 65),
                (t[i++] = 80),
                (t[i++] = 69),
                (t[i++] = 50),
                (t[i++] = 46),
                (t[i++] = 48),
                (t[i++] = 3),
                (t[i++] = 1),
                (t[i++] = 255 & o),
                (t[i++] = (o >> 8) & 255),
                (t[i++] = 0);
            }
            var d = !1;
            (this.addFrame = function (e, r, n, o, u, l) {
              if (
                (!0 === d && (--i, (d = !1)),
                (l = void 0 === l ? {} : l),
                e < 0 || r < 0 || e > 65535 || r > 65535)
              )
                throw new Error("x/y invalid.");
              if (n <= 0 || o <= 0 || n > 65535 || o > 65535)
                throw new Error("Width/Height invalid.");
              if (u.length < n * o)
                throw new Error("Not enough pixels for the frame size.");
              var h = !0,
                f = l.palette;
              if ((null == f && ((h = !1), (f = a)), null == f))
                throw new Error(
                  "Must supply either a local or global palette."
                );
              for (var c = s(f), p = 0; (c >>= 1); ) ++p;
              c = 1 << p;
              var g = void 0 === l.delay ? 0 : l.delay,
                y = void 0 === l.disposal ? 0 : l.disposal;
              if (y < 0 || y > 3) throw new Error("Disposal out of range.");
              var v = !1,
                b = 0;
              if (
                void 0 !== l.transparent &&
                null !== l.transparent &&
                ((v = !0), (b = l.transparent) < 0 || b >= c)
              )
                throw new Error("Transparent color index.");
              if (
                ((0 !== y || v || 0 !== g) &&
                  ((t[i++] = 33),
                  (t[i++] = 249),
                  (t[i++] = 4),
                  (t[i++] = (y << 2) | (!0 === v ? 1 : 0)),
                  (t[i++] = 255 & g),
                  (t[i++] = (g >> 8) & 255),
                  (t[i++] = b),
                  (t[i++] = 0)),
                (t[i++] = 44),
                (t[i++] = 255 & e),
                (t[i++] = (e >> 8) & 255),
                (t[i++] = 255 & r),
                (t[i++] = (r >> 8) & 255),
                (t[i++] = 255 & n),
                (t[i++] = (n >> 8) & 255),
                (t[i++] = 255 & o),
                (t[i++] = (o >> 8) & 255),
                (t[i++] = !0 === h ? 128 | (p - 1) : 0),
                !0 === h)
              )
                for (var m = 0, w = f.length; m < w; ++m) {
                  var x = f[m];
                  (t[i++] = (x >> 16) & 255),
                    (t[i++] = (x >> 8) & 255),
                    (t[i++] = 255 & x);
                }
              return (i = (function (t, e, r, n) {
                t[e++] = r;
                var i = e++,
                  o = 1 << r,
                  a = o - 1,
                  s = o + 1,
                  u = s + 1,
                  l = r + 1,
                  h = 0,
                  f = 0;
                function c(r) {
                  for (; h >= r; )
                    (t[e++] = 255 & f),
                      (f >>= 8),
                      (h -= 8),
                      e === i + 256 && ((t[i] = 255), (i = e++));
                }
                function p(t) {
                  (f |= t << h), (h += l), c(8);
                }
                var d = n[0] & a,
                  g = {};
                p(o);
                for (var y = 1, v = n.length; y < v; ++y) {
                  var b = n[y] & a,
                    m = (d << 8) | b,
                    w = g[m];
                  if (void 0 === w) {
                    for (f |= d << h, h += l; h >= 8; )
                      (t[e++] = 255 & f),
                        (f >>= 8),
                        (h -= 8),
                        e === i + 256 && ((t[i] = 255), (i = e++));
                    4096 === u
                      ? (p(o), (u = s + 1), (l = r + 1), (g = {}))
                      : (u >= 1 << l && ++l, (g[m] = u++)),
                      (d = b);
                  } else d = w;
                }
                return (
                  p(d),
                  p(s),
                  c(1),
                  i + 1 === e ? (t[i] = 0) : ((t[i] = e - i - 1), (t[e++] = 0)),
                  e
                );
              })(t, i, p < 2 ? 2 : p, u));
            }),
              (this.end = function () {
                return !1 === d && ((t[i++] = 59), (d = !0)), i;
              }),
              (this.getOutputBuffer = function () {
                return t;
              }),
              (this.setOutputBuffer = function (e) {
                t = e;
              }),
              (this.getOutputBufferPosition = function () {
                return i;
              }),
              (this.setOutputBufferPosition = function (t) {
                i = t;
              });
          },
            (e.N = function (t) {
              var e = 0;
              if (
                71 !== t[e++] ||
                73 !== t[e++] ||
                70 !== t[e++] ||
                56 !== t[e++] ||
                56 != ((t[e++] + 1) & 253) ||
                97 !== t[e++]
              )
                throw new Error("Invalid GIF 87a/89a header.");
              var n = t[e++] | (t[e++] << 8),
                i = t[e++] | (t[e++] << 8),
                o = t[e++],
                a = o >> 7,
                s = 1 << (1 + (7 & o));
              t[e++], t[e++];
              var u = null,
                l = null;
              a && ((u = e), (l = s), (e += 3 * s));
              var h = !0,
                f = [],
                c = 0,
                p = null,
                d = 0,
                g = null;
              for (this.width = n, this.height = i; h && e < t.length; )
                switch (t[e++]) {
                  case 33:
                    switch (t[e++]) {
                      case 255:
                        if (
                          11 !== t[e] ||
                          (78 == t[e + 1] &&
                            69 == t[e + 2] &&
                            84 == t[e + 3] &&
                            83 == t[e + 4] &&
                            67 == t[e + 5] &&
                            65 == t[e + 6] &&
                            80 == t[e + 7] &&
                            69 == t[e + 8] &&
                            50 == t[e + 9] &&
                            46 == t[e + 10] &&
                            48 == t[e + 11] &&
                            3 == t[e + 12] &&
                            1 == t[e + 13] &&
                            0 == t[e + 16])
                        )
                          (e += 14), (g = t[e++] | (t[e++] << 8)), e++;
                        else
                          for (e += 12; ; ) {
                            if (!((A = t[e++]) >= 0))
                              throw Error("Invalid block size");
                            if (0 === A) break;
                            e += A;
                          }
                        break;
                      case 249:
                        if (4 !== t[e++] || 0 !== t[e + 4])
                          throw new Error("Invalid graphics extension block.");
                        var y = t[e++];
                        (c = t[e++] | (t[e++] << 8)),
                          (p = t[e++]),
                          0 == (1 & y) && (p = null),
                          (d = (y >> 2) & 7),
                          e++;
                        break;
                      case 254:
                        for (;;) {
                          if (!((A = t[e++]) >= 0))
                            throw Error("Invalid block size");
                          if (0 === A) break;
                          e += A;
                        }
                        break;
                      default:
                        throw new Error(
                          "Unknown graphic control label: 0x" +
                            t[e - 1].toString(16)
                        );
                    }
                    break;
                  case 44:
                    var v = t[e++] | (t[e++] << 8),
                      b = t[e++] | (t[e++] << 8),
                      m = t[e++] | (t[e++] << 8),
                      w = t[e++] | (t[e++] << 8),
                      x = t[e++],
                      _ = (x >> 6) & 1,
                      E = 1 << (1 + (7 & x)),
                      S = u,
                      k = l,
                      M = !1;
                    x >> 7 && ((M = !0), (S = e), (k = E), (e += 3 * E));
                    var R = e;
                    for (e++; ; ) {
                      var A;
                      if (!((A = t[e++]) >= 0))
                        throw Error("Invalid block size");
                      if (0 === A) break;
                      e += A;
                    }
                    f.push({
                      x: v,
                      y: b,
                      width: m,
                      height: w,
                      has_local_palette: M,
                      palette_offset: S,
                      palette_size: k,
                      data_offset: R,
                      data_length: e - R,
                      transparent_index: p,
                      interlaced: !!_,
                      delay: c,
                      disposal: d,
                    });
                    break;
                  case 59:
                    h = !1;
                    break;
                  default:
                    throw new Error(
                      "Unknown gif block: 0x" + t[e - 1].toString(16)
                    );
                }
              (this.numFrames = function () {
                return f.length;
              }),
                (this.loopCount = function () {
                  return g;
                }),
                (this.frameInfo = function (t) {
                  if (t < 0 || t >= f.length)
                    throw new Error("Frame index out of range.");
                  return f[t];
                }),
                (this.decodeAndBlitFrameBGRA = function (e, i) {
                  var o = this.frameInfo(e),
                    a = o.width * o.height,
                    s = new Uint8Array(a);
                  r(t, o.data_offset, s, a);
                  var u = o.palette_offset,
                    l = o.transparent_index;
                  null === l && (l = 256);
                  var h = o.width,
                    f = n - h,
                    c = h,
                    p = 4 * (o.y * n + o.x),
                    d = 4 * ((o.y + o.height) * n + o.x),
                    g = p,
                    y = 4 * f;
                  !0 === o.interlaced && (y += 4 * n * 7);
                  for (var v = 8, b = 0, m = s.length; b < m; ++b) {
                    var w = s[b];
                    if (
                      (0 === c &&
                        ((c = h),
                        (g += y) >= d &&
                          ((y = 4 * f + 4 * n * (v - 1)),
                          (g = p + (h + f) * (v << 1)),
                          (v >>= 1))),
                      w === l)
                    )
                      g += 4;
                    else {
                      var x = t[u + 3 * w],
                        _ = t[u + 3 * w + 1],
                        E = t[u + 3 * w + 2];
                      (i[g++] = E), (i[g++] = _), (i[g++] = x), (i[g++] = 255);
                    }
                    --c;
                  }
                }),
                (this.decodeAndBlitFrameRGBA = function (e, i) {
                  var o = this.frameInfo(e),
                    a = o.width * o.height,
                    s = new Uint8Array(a);
                  r(t, o.data_offset, s, a);
                  var u = o.palette_offset,
                    l = o.transparent_index;
                  null === l && (l = 256);
                  var h = o.width,
                    f = n - h,
                    c = h,
                    p = 4 * (o.y * n + o.x),
                    d = 4 * ((o.y + o.height) * n + o.x),
                    g = p,
                    y = 4 * f;
                  !0 === o.interlaced && (y += 4 * n * 7);
                  for (var v = 8, b = 0, m = s.length; b < m; ++b) {
                    var w = s[b];
                    if (
                      (0 === c &&
                        ((c = h),
                        (g += y) >= d &&
                          ((y = 4 * f + 4 * n * (v - 1)),
                          (g = p + (h + f) * (v << 1)),
                          (v >>= 1))),
                      w === l)
                    )
                      g += 4;
                    else {
                      var x = t[u + 3 * w],
                        _ = t[u + 3 * w + 1],
                        E = t[u + 3 * w + 2];
                      (i[g++] = x), (i[g++] = _), (i[g++] = E), (i[g++] = 255);
                    }
                    --c;
                  }
                });
            }));
        } catch (t) {}
      },
      4947: (t) => {
        var e = function (t) {
          return t.replace(/^\s+|\s+$/g, "");
        };
        t.exports = function (t) {
          if (!t) return {};
          for (var r, n = {}, i = e(t).split("\n"), o = 0; o < i.length; o++) {
            var a = i[o],
              s = a.indexOf(":"),
              u = e(a.slice(0, s)).toLowerCase(),
              l = e(a.slice(s + 1));
            void 0 === n[u]
              ? (n[u] = l)
              : ((r = n[u]),
                "[object Array]" === Object.prototype.toString.call(r)
                  ? n[u].push(l)
                  : (n[u] = [n[u], l]));
          }
          return n;
        };
      },
      3614: (t, e, r) => {
        "use strict";
        t.exports = i;
        var n = r(645);
        function i(t) {
          (this.buf =
            ArrayBuffer.isView && ArrayBuffer.isView(t)
              ? t
              : new Uint8Array(t || 0)),
            (this.pos = 0),
            (this.type = 0),
            (this.length = this.buf.length);
        }
        (i.Varint = 0), (i.Fixed64 = 1), (i.Bytes = 2), (i.Fixed32 = 5);
        var o = 4294967296,
          a = 1 / o,
          s =
            "undefined" == typeof TextDecoder ? null : new TextDecoder("utf8");
        function u(t) {
          return t.type === i.Bytes ? t.readVarint() + t.pos : t.pos + 1;
        }
        function l(t, e, r) {
          return r
            ? 4294967296 * e + (t >>> 0)
            : 4294967296 * (e >>> 0) + (t >>> 0);
        }
        function h(t, e, r) {
          var n =
            e <= 16383
              ? 1
              : e <= 2097151
              ? 2
              : e <= 268435455
              ? 3
              : Math.floor(Math.log(e) / (7 * Math.LN2));
          r.realloc(n);
          for (var i = r.pos - 1; i >= t; i--) r.buf[i + n] = r.buf[i];
        }
        function f(t, e) {
          for (var r = 0; r < t.length; r++) e.writeVarint(t[r]);
        }
        function c(t, e) {
          for (var r = 0; r < t.length; r++) e.writeSVarint(t[r]);
        }
        function p(t, e) {
          for (var r = 0; r < t.length; r++) e.writeFloat(t[r]);
        }
        function d(t, e) {
          for (var r = 0; r < t.length; r++) e.writeDouble(t[r]);
        }
        function g(t, e) {
          for (var r = 0; r < t.length; r++) e.writeBoolean(t[r]);
        }
        function y(t, e) {
          for (var r = 0; r < t.length; r++) e.writeFixed32(t[r]);
        }
        function v(t, e) {
          for (var r = 0; r < t.length; r++) e.writeSFixed32(t[r]);
        }
        function b(t, e) {
          for (var r = 0; r < t.length; r++) e.writeFixed64(t[r]);
        }
        function m(t, e) {
          for (var r = 0; r < t.length; r++) e.writeSFixed64(t[r]);
        }
        function w(t, e) {
          return (
            (t[e] | (t[e + 1] << 8) | (t[e + 2] << 16)) + 16777216 * t[e + 3]
          );
        }
        function x(t, e, r) {
          (t[r] = e),
            (t[r + 1] = e >>> 8),
            (t[r + 2] = e >>> 16),
            (t[r + 3] = e >>> 24);
        }
        function _(t, e) {
          return (t[e] | (t[e + 1] << 8) | (t[e + 2] << 16)) + (t[e + 3] << 24);
        }
        i.prototype = {
          destroy: function () {
            this.buf = null;
          },
          readFields: function (t, e, r) {
            for (r = r || this.length; this.pos < r; ) {
              var n = this.readVarint(),
                i = n >> 3,
                o = this.pos;
              (this.type = 7 & n),
                t(i, e, this),
                this.pos === o && this.skip(n);
            }
            return e;
          },
          readMessage: function (t, e) {
            return this.readFields(t, e, this.readVarint() + this.pos);
          },
          readFixed32: function () {
            var t = w(this.buf, this.pos);
            return (this.pos += 4), t;
          },
          readSFixed32: function () {
            var t = _(this.buf, this.pos);
            return (this.pos += 4), t;
          },
          readFixed64: function () {
            var t = w(this.buf, this.pos) + w(this.buf, this.pos + 4) * o;
            return (this.pos += 8), t;
          },
          readSFixed64: function () {
            var t = w(this.buf, this.pos) + _(this.buf, this.pos + 4) * o;
            return (this.pos += 8), t;
          },
          readFloat: function () {
            var t = n.read(this.buf, this.pos, !0, 23, 4);
            return (this.pos += 4), t;
          },
          readDouble: function () {
            var t = n.read(this.buf, this.pos, !0, 52, 8);
            return (this.pos += 8), t;
          },
          readVarint: function (t) {
            var e,
              r,
              n = this.buf;
            return (
              (e = 127 & (r = n[this.pos++])),
              r < 128
                ? e
                : ((e |= (127 & (r = n[this.pos++])) << 7),
                  r < 128
                    ? e
                    : ((e |= (127 & (r = n[this.pos++])) << 14),
                      r < 128
                        ? e
                        : ((e |= (127 & (r = n[this.pos++])) << 21),
                          r < 128
                            ? e
                            : (function (t, e, r) {
                                var n,
                                  i,
                                  o = r.buf;
                                if (
                                  ((i = o[r.pos++]),
                                  (n = (112 & i) >> 4),
                                  i < 128)
                                )
                                  return l(t, n, e);
                                if (
                                  ((i = o[r.pos++]),
                                  (n |= (127 & i) << 3),
                                  i < 128)
                                )
                                  return l(t, n, e);
                                if (
                                  ((i = o[r.pos++]),
                                  (n |= (127 & i) << 10),
                                  i < 128)
                                )
                                  return l(t, n, e);
                                if (
                                  ((i = o[r.pos++]),
                                  (n |= (127 & i) << 17),
                                  i < 128)
                                )
                                  return l(t, n, e);
                                if (
                                  ((i = o[r.pos++]),
                                  (n |= (127 & i) << 24),
                                  i < 128)
                                )
                                  return l(t, n, e);
                                if (
                                  ((i = o[r.pos++]),
                                  (n |= (1 & i) << 31),
                                  i < 128)
                                )
                                  return l(t, n, e);
                                throw new Error(
                                  "Expected varint not more than 10 bytes"
                                );
                              })(
                                (e |= (15 & (r = n[this.pos])) << 28),
                                t,
                                this
                              ))))
            );
          },
          readVarint64: function () {
            return this.readVarint(!0);
          },
          readSVarint: function () {
            var t = this.readVarint();
            return t % 2 == 1 ? (t + 1) / -2 : t / 2;
          },
          readBoolean: function () {
            return Boolean(this.readVarint());
          },
          readString: function () {
            var t = this.readVarint() + this.pos,
              e = this.pos;
            return (
              (this.pos = t),
              t - e >= 12 && s
                ? (function (t, e, r) {
                    return s.decode(t.subarray(e, r));
                  })(this.buf, e, t)
                : (function (t, e, r) {
                    var n = "",
                      i = e;
                    for (; i < r; ) {
                      var o,
                        a,
                        s,
                        u = t[i],
                        l = null,
                        h = u > 239 ? 4 : u > 223 ? 3 : u > 191 ? 2 : 1;
                      if (i + h > r) break;
                      1 === h
                        ? u < 128 && (l = u)
                        : 2 === h
                        ? 128 == (192 & (o = t[i + 1])) &&
                          (l = ((31 & u) << 6) | (63 & o)) <= 127 &&
                          (l = null)
                        : 3 === h
                        ? ((o = t[i + 1]),
                          (a = t[i + 2]),
                          128 == (192 & o) &&
                            128 == (192 & a) &&
                            ((l =
                              ((15 & u) << 12) | ((63 & o) << 6) | (63 & a)) <=
                              2047 ||
                              (l >= 55296 && l <= 57343)) &&
                            (l = null))
                        : 4 === h &&
                          ((o = t[i + 1]),
                          (a = t[i + 2]),
                          (s = t[i + 3]),
                          128 == (192 & o) &&
                            128 == (192 & a) &&
                            128 == (192 & s) &&
                            ((l =
                              ((15 & u) << 18) |
                              ((63 & o) << 12) |
                              ((63 & a) << 6) |
                              (63 & s)) <= 65535 ||
                              l >= 1114112) &&
                            (l = null)),
                        null === l
                          ? ((l = 65533), (h = 1))
                          : l > 65535 &&
                            ((l -= 65536),
                            (n += String.fromCharCode(
                              ((l >>> 10) & 1023) | 55296
                            )),
                            (l = 56320 | (1023 & l))),
                        (n += String.fromCharCode(l)),
                        (i += h);
                    }
                    return n;
                  })(this.buf, e, t)
            );
          },
          readBytes: function () {
            var t = this.readVarint() + this.pos,
              e = this.buf.subarray(this.pos, t);
            return (this.pos = t), e;
          },
          readPackedVarint: function (t, e) {
            if (this.type !== i.Bytes) return t.push(this.readVarint(e));
            var r = u(this);
            for (t = t || []; this.pos < r; ) t.push(this.readVarint(e));
            return t;
          },
          readPackedSVarint: function (t) {
            if (this.type !== i.Bytes) return t.push(this.readSVarint());
            var e = u(this);
            for (t = t || []; this.pos < e; ) t.push(this.readSVarint());
            return t;
          },
          readPackedBoolean: function (t) {
            if (this.type !== i.Bytes) return t.push(this.readBoolean());
            var e = u(this);
            for (t = t || []; this.pos < e; ) t.push(this.readBoolean());
            return t;
          },
          readPackedFloat: function (t) {
            if (this.type !== i.Bytes) return t.push(this.readFloat());
            var e = u(this);
            for (t = t || []; this.pos < e; ) t.push(this.readFloat());
            return t;
          },
          readPackedDouble: function (t) {
            if (this.type !== i.Bytes) return t.push(this.readDouble());
            var e = u(this);
            for (t = t || []; this.pos < e; ) t.push(this.readDouble());
            return t;
          },
          readPackedFixed32: function (t) {
            if (this.type !== i.Bytes) return t.push(this.readFixed32());
            var e = u(this);
            for (t = t || []; this.pos < e; ) t.push(this.readFixed32());
            return t;
          },
          readPackedSFixed32: function (t) {
            if (this.type !== i.Bytes) return t.push(this.readSFixed32());
            var e = u(this);
            for (t = t || []; this.pos < e; ) t.push(this.readSFixed32());
            return t;
          },
          readPackedFixed64: function (t) {
            if (this.type !== i.Bytes) return t.push(this.readFixed64());
            var e = u(this);
            for (t = t || []; this.pos < e; ) t.push(this.readFixed64());
            return t;
          },
          readPackedSFixed64: function (t) {
            if (this.type !== i.Bytes) return t.push(this.readSFixed64());
            var e = u(this);
            for (t = t || []; this.pos < e; ) t.push(this.readSFixed64());
            return t;
          },
          skip: function (t) {
            var e = 7 & t;
            if (e === i.Varint) for (; this.buf[this.pos++] > 127; );
            else if (e === i.Bytes) this.pos = this.readVarint() + this.pos;
            else if (e === i.Fixed32) this.pos += 4;
            else {
              if (e !== i.Fixed64) throw new Error("Unimplemented type: " + e);
              this.pos += 8;
            }
          },
          writeTag: function (t, e) {
            this.writeVarint((t << 3) | e);
          },
          realloc: function (t) {
            for (var e = this.length || 16; e < this.pos + t; ) e *= 2;
            if (e !== this.length) {
              var r = new Uint8Array(e);
              r.set(this.buf), (this.buf = r), (this.length = e);
            }
          },
          finish: function () {
            return (
              (this.length = this.pos),
              (this.pos = 0),
              this.buf.subarray(0, this.length)
            );
          },
          writeFixed32: function (t) {
            this.realloc(4), x(this.buf, t, this.pos), (this.pos += 4);
          },
          writeSFixed32: function (t) {
            this.realloc(4), x(this.buf, t, this.pos), (this.pos += 4);
          },
          writeFixed64: function (t) {
            this.realloc(8),
              x(this.buf, -1 & t, this.pos),
              x(this.buf, Math.floor(t * a), this.pos + 4),
              (this.pos += 8);
          },
          writeSFixed64: function (t) {
            this.realloc(8),
              x(this.buf, -1 & t, this.pos),
              x(this.buf, Math.floor(t * a), this.pos + 4),
              (this.pos += 8);
          },
          writeVarint: function (t) {
            (t = +t || 0) > 268435455 || t < 0
              ? (function (t, e) {
                  var r, n;
                  t >= 0
                    ? ((r = t % 4294967296 | 0), (n = (t / 4294967296) | 0))
                    : ((n = ~(-t / 4294967296)),
                      4294967295 ^ (r = ~(-t % 4294967296))
                        ? (r = (r + 1) | 0)
                        : ((r = 0), (n = (n + 1) | 0)));
                  if (t >= 0x10000000000000000 || t < -0x10000000000000000)
                    throw new Error("Given varint doesn't fit into 10 bytes");
                  e.realloc(10),
                    (function (t, e, r) {
                      (r.buf[r.pos++] = (127 & t) | 128),
                        (t >>>= 7),
                        (r.buf[r.pos++] = (127 & t) | 128),
                        (t >>>= 7),
                        (r.buf[r.pos++] = (127 & t) | 128),
                        (t >>>= 7),
                        (r.buf[r.pos++] = (127 & t) | 128),
                        (t >>>= 7),
                        (r.buf[r.pos] = 127 & t);
                    })(r, 0, e),
                    (function (t, e) {
                      var r = (7 & t) << 4;
                      if (((e.buf[e.pos++] |= r | ((t >>>= 3) ? 128 : 0)), !t))
                        return;
                      if (
                        ((e.buf[e.pos++] = (127 & t) | ((t >>>= 7) ? 128 : 0)),
                        !t)
                      )
                        return;
                      if (
                        ((e.buf[e.pos++] = (127 & t) | ((t >>>= 7) ? 128 : 0)),
                        !t)
                      )
                        return;
                      if (
                        ((e.buf[e.pos++] = (127 & t) | ((t >>>= 7) ? 128 : 0)),
                        !t)
                      )
                        return;
                      if (
                        ((e.buf[e.pos++] = (127 & t) | ((t >>>= 7) ? 128 : 0)),
                        !t)
                      )
                        return;
                      e.buf[e.pos++] = 127 & t;
                    })(n, e);
                })(t, this)
              : (this.realloc(4),
                (this.buf[this.pos++] = (127 & t) | (t > 127 ? 128 : 0)),
                t <= 127 ||
                  ((this.buf[this.pos++] =
                    (127 & (t >>>= 7)) | (t > 127 ? 128 : 0)),
                  t <= 127 ||
                    ((this.buf[this.pos++] =
                      (127 & (t >>>= 7)) | (t > 127 ? 128 : 0)),
                    t <= 127 || (this.buf[this.pos++] = (t >>> 7) & 127))));
          },
          writeSVarint: function (t) {
            this.writeVarint(t < 0 ? 2 * -t - 1 : 2 * t);
          },
          writeBoolean: function (t) {
            this.writeVarint(Boolean(t));
          },
          writeString: function (t) {
            (t = String(t)), this.realloc(4 * t.length), this.pos++;
            var e = this.pos;
            this.pos = (function (t, e, r) {
              for (var n, i, o = 0; o < e.length; o++) {
                if ((n = e.charCodeAt(o)) > 55295 && n < 57344) {
                  if (!i) {
                    n > 56319 || o + 1 === e.length
                      ? ((t[r++] = 239), (t[r++] = 191), (t[r++] = 189))
                      : (i = n);
                    continue;
                  }
                  if (n < 56320) {
                    (t[r++] = 239), (t[r++] = 191), (t[r++] = 189), (i = n);
                    continue;
                  }
                  (n = ((i - 55296) << 10) | (n - 56320) | 65536), (i = null);
                } else
                  i &&
                    ((t[r++] = 239),
                    (t[r++] = 191),
                    (t[r++] = 189),
                    (i = null));
                n < 128
                  ? (t[r++] = n)
                  : (n < 2048
                      ? (t[r++] = (n >> 6) | 192)
                      : (n < 65536
                          ? (t[r++] = (n >> 12) | 224)
                          : ((t[r++] = (n >> 18) | 240),
                            (t[r++] = ((n >> 12) & 63) | 128)),
                        (t[r++] = ((n >> 6) & 63) | 128)),
                    (t[r++] = (63 & n) | 128));
              }
              return r;
            })(this.buf, t, this.pos);
            var r = this.pos - e;
            r >= 128 && h(e, r, this),
              (this.pos = e - 1),
              this.writeVarint(r),
              (this.pos += r);
          },
          writeFloat: function (t) {
            this.realloc(4),
              n.write(this.buf, t, this.pos, !0, 23, 4),
              (this.pos += 4);
          },
          writeDouble: function (t) {
            this.realloc(8),
              n.write(this.buf, t, this.pos, !0, 52, 8),
              (this.pos += 8);
          },
          writeBytes: function (t) {
            var e = t.length;
            this.writeVarint(e), this.realloc(e);
            for (var r = 0; r < e; r++) this.buf[this.pos++] = t[r];
          },
          writeRawMessage: function (t, e) {
            this.pos++;
            var r = this.pos;
            t(e, this);
            var n = this.pos - r;
            n >= 128 && h(r, n, this),
              (this.pos = r - 1),
              this.writeVarint(n),
              (this.pos += n);
          },
          writeMessage: function (t, e, r) {
            this.writeTag(t, i.Bytes), this.writeRawMessage(e, r);
          },
          writePackedVarint: function (t, e) {
            e.length && this.writeMessage(t, f, e);
          },
          writePackedSVarint: function (t, e) {
            e.length && this.writeMessage(t, c, e);
          },
          writePackedBoolean: function (t, e) {
            e.length && this.writeMessage(t, g, e);
          },
          writePackedFloat: function (t, e) {
            e.length && this.writeMessage(t, p, e);
          },
          writePackedDouble: function (t, e) {
            e.length && this.writeMessage(t, d, e);
          },
          writePackedFixed32: function (t, e) {
            e.length && this.writeMessage(t, y, e);
          },
          writePackedSFixed32: function (t, e) {
            e.length && this.writeMessage(t, v, e);
          },
          writePackedFixed64: function (t, e) {
            e.length && this.writeMessage(t, b, e);
          },
          writePackedSFixed64: function (t, e) {
            e.length && this.writeMessage(t, m, e);
          },
          writeBytesField: function (t, e) {
            this.writeTag(t, i.Bytes), this.writeBytes(e);
          },
          writeFixed32Field: function (t, e) {
            this.writeTag(t, i.Fixed32), this.writeFixed32(e);
          },
          writeSFixed32Field: function (t, e) {
            this.writeTag(t, i.Fixed32), this.writeSFixed32(e);
          },
          writeFixed64Field: function (t, e) {
            this.writeTag(t, i.Fixed64), this.writeFixed64(e);
          },
          writeSFixed64Field: function (t, e) {
            this.writeTag(t, i.Fixed64), this.writeSFixed64(e);
          },
          writeVarintField: function (t, e) {
            this.writeTag(t, i.Varint), this.writeVarint(e);
          },
          writeSVarintField: function (t, e) {
            this.writeTag(t, i.Varint), this.writeSVarint(e);
          },
          writeStringField: function (t, e) {
            this.writeTag(t, i.Bytes), this.writeString(e);
          },
          writeFloatField: function (t, e) {
            this.writeTag(t, i.Fixed32), this.writeFloat(e);
          },
          writeDoubleField: function (t, e) {
            this.writeTag(t, i.Fixed64), this.writeDouble(e);
          },
          writeBooleanField: function (t, e) {
            this.writeVarintField(t, Boolean(e));
          },
        };
      },
      2676: function (t) {
        t.exports = (function () {
          "use strict";
          function t(t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          }
          function e(t, e) {
            for (var r = 0; r < e.length; r++) {
              var n = e[r];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n);
            }
          }
          function r(t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t;
          }
          var n = function e(r, n) {
            t(this, e),
              (this.next = null),
              (this.key = r),
              (this.data = n),
              (this.left = null),
              (this.right = null);
          };
          function i(t, e) {
            return t > e ? 1 : t < e ? -1 : 0;
          }
          function o(t, e, r) {
            for (var i = new n(null, null), o = i, a = i; ; ) {
              var s = r(t, e.key);
              if (s < 0) {
                if (null === e.left) break;
                if (r(t, e.left.key) < 0) {
                  var u = e.left;
                  if (
                    ((e.left = u.right), (u.right = e), null === (e = u).left)
                  )
                    break;
                }
                (a.left = e), (a = e), (e = e.left);
              } else {
                if (!(s > 0)) break;
                if (null === e.right) break;
                if (r(t, e.right.key) > 0) {
                  var l = e.right;
                  if (
                    ((e.right = l.left), (l.left = e), null === (e = l).right)
                  )
                    break;
                }
                (o.right = e), (o = e), (e = e.right);
              }
            }
            return (
              (o.right = e.left),
              (a.left = e.right),
              (e.left = i.right),
              (e.right = i.left),
              e
            );
          }
          function a(t, e, r, i) {
            var a = new n(t, e);
            if (null === r) return (a.left = a.right = null), a;
            var s = i(t, (r = o(t, r, i)).key);
            return (
              s < 0
                ? ((a.left = r.left), (a.right = r), (r.left = null))
                : s >= 0 &&
                  ((a.right = r.right), (a.left = r), (r.right = null)),
              a
            );
          }
          function s(t, e, r) {
            var n = null,
              i = null;
            if (e) {
              var a = r((e = o(t, e, r)).key, t);
              0 === a
                ? ((n = e.left), (i = e.right))
                : a < 0
                ? ((i = e.right), (e.right = null), (n = e))
                : ((n = e.left), (e.left = null), (i = e));
            }
            return { left: n, right: i };
          }
          function u(t, e, r) {
            return null === e
              ? t
              : (null === t || ((e = o(t.key, e, r)).left = t), e);
          }
          function l(t, e, r, n, i) {
            if (t) {
              n(
                ""
                  .concat(e)
                  .concat(r ? "└── " : "├── ")
                  .concat(i(t), "\n")
              );
              var o = e + (r ? "    " : "│   ");
              t.left && l(t.left, o, !1, n, i),
                t.right && l(t.right, o, !0, n, i);
            }
          }
          var h = (function () {
            function e() {
              var r =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : i;
              t(this, e),
                (this._root = null),
                (this._size = 0),
                (this._comparator = r);
            }
            return (
              r(e, [
                {
                  key: "insert",
                  value: function (t, e) {
                    return (
                      this._size++,
                      (this._root = a(t, e, this._root, this._comparator))
                    );
                  },
                },
                {
                  key: "add",
                  value: function (t, e) {
                    var r = new n(t, e);
                    null === this._root &&
                      ((r.left = r.right = null),
                      this._size++,
                      (this._root = r));
                    var i = this._comparator,
                      a = o(t, this._root, i),
                      s = i(t, a.key);
                    return (
                      0 === s
                        ? (this._root = a)
                        : (s < 0
                            ? ((r.left = a.left),
                              (r.right = a),
                              (a.left = null))
                            : s > 0 &&
                              ((r.right = a.right),
                              (r.left = a),
                              (a.right = null)),
                          this._size++,
                          (this._root = r)),
                      this._root
                    );
                  },
                },
                {
                  key: "remove",
                  value: function (t) {
                    this._root = this._remove(t, this._root, this._comparator);
                  },
                },
                {
                  key: "_remove",
                  value: function (t, e, r) {
                    var n;
                    return null === e
                      ? null
                      : 0 === r(t, (e = o(t, e, r)).key)
                      ? (null === e.left
                          ? (n = e.right)
                          : ((n = o(t, e.left, r)).right = e.right),
                        this._size--,
                        n)
                      : e;
                  },
                },
                {
                  key: "pop",
                  value: function () {
                    var t = this._root;
                    if (t) {
                      for (; t.left; ) t = t.left;
                      return (
                        (this._root = o(t.key, this._root, this._comparator)),
                        (this._root = this._remove(
                          t.key,
                          this._root,
                          this._comparator
                        )),
                        { key: t.key, data: t.data }
                      );
                    }
                    return null;
                  },
                },
                {
                  key: "findStatic",
                  value: function (t) {
                    for (var e = this._root, r = this._comparator; e; ) {
                      var n = r(t, e.key);
                      if (0 === n) return e;
                      e = n < 0 ? e.left : e.right;
                    }
                    return null;
                  },
                },
                {
                  key: "find",
                  value: function (t) {
                    return this._root &&
                      ((this._root = o(t, this._root, this._comparator)),
                      0 !== this._comparator(t, this._root.key))
                      ? null
                      : this._root;
                  },
                },
                {
                  key: "contains",
                  value: function (t) {
                    for (var e = this._root, r = this._comparator; e; ) {
                      var n = r(t, e.key);
                      if (0 === n) return !0;
                      e = n < 0 ? e.left : e.right;
                    }
                    return !1;
                  },
                },
                {
                  key: "forEach",
                  value: function (t, e) {
                    for (var r = this._root, n = [], i = !1; !i; )
                      null !== r
                        ? (n.push(r), (r = r.left))
                        : 0 !== n.length
                        ? ((r = n.pop()), t.call(e, r), (r = r.right))
                        : (i = !0);
                    return this;
                  },
                },
                {
                  key: "range",
                  value: function (t, e, r, n) {
                    for (
                      var i = [], o = this._comparator, a = this._root;
                      0 !== i.length || a;

                    )
                      if (a) i.push(a), (a = a.left);
                      else {
                        if (o((a = i.pop()).key, e) > 0) break;
                        if (o(a.key, t) >= 0 && r.call(n, a)) return this;
                        a = a.right;
                      }
                    return this;
                  },
                },
                {
                  key: "keys",
                  value: function () {
                    var t = [];
                    return (
                      this.forEach(function (e) {
                        var r = e.key;
                        return t.push(r);
                      }),
                      t
                    );
                  },
                },
                {
                  key: "values",
                  value: function () {
                    var t = [];
                    return (
                      this.forEach(function (e) {
                        var r = e.data;
                        return t.push(r);
                      }),
                      t
                    );
                  },
                },
                {
                  key: "min",
                  value: function () {
                    return this._root ? this.minNode(this._root).key : null;
                  },
                },
                {
                  key: "max",
                  value: function () {
                    return this._root ? this.maxNode(this._root).key : null;
                  },
                },
                {
                  key: "minNode",
                  value: function () {
                    var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : this._root;
                    if (t) for (; t.left; ) t = t.left;
                    return t;
                  },
                },
                {
                  key: "maxNode",
                  value: function () {
                    var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : this._root;
                    if (t) for (; t.right; ) t = t.right;
                    return t;
                  },
                },
                {
                  key: "at",
                  value: function (t) {
                    for (var e = this._root, r = !1, n = 0, i = []; !r; )
                      if (e) i.push(e), (e = e.left);
                      else if (i.length > 0) {
                        if (((e = i.pop()), n === t)) return e;
                        n++, (e = e.right);
                      } else r = !0;
                    return null;
                  },
                },
                {
                  key: "next",
                  value: function (t) {
                    var e = this._root,
                      r = null;
                    if (t.right) {
                      for (r = t.right; r.left; ) r = r.left;
                      return r;
                    }
                    for (var n = this._comparator; e; ) {
                      var i = n(t.key, e.key);
                      if (0 === i) break;
                      i < 0 ? ((r = e), (e = e.left)) : (e = e.right);
                    }
                    return r;
                  },
                },
                {
                  key: "prev",
                  value: function (t) {
                    var e = this._root,
                      r = null;
                    if (null !== t.left) {
                      for (r = t.left; r.right; ) r = r.right;
                      return r;
                    }
                    for (var n = this._comparator; e; ) {
                      var i = n(t.key, e.key);
                      if (0 === i) break;
                      i < 0 ? (e = e.left) : ((r = e), (e = e.right));
                    }
                    return r;
                  },
                },
                {
                  key: "clear",
                  value: function () {
                    return (this._root = null), (this._size = 0), this;
                  },
                },
                {
                  key: "toList",
                  value: function () {
                    return p(this._root);
                  },
                },
                {
                  key: "load",
                  value: function (t) {
                    var e =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : [],
                      r =
                        arguments.length > 2 &&
                        void 0 !== arguments[2] &&
                        arguments[2],
                      n = t.length,
                      i = this._comparator;
                    if ((r && y(t, e, 0, n - 1, i), null === this._root))
                      (this._root = f(t, e, 0, n)), (this._size = n);
                    else {
                      var o = g(this.toList(), c(t, e), i);
                      (n = this._size + n), (this._root = d({ head: o }, 0, n));
                    }
                    return this;
                  },
                },
                {
                  key: "isEmpty",
                  value: function () {
                    return null === this._root;
                  },
                },
                {
                  key: "toString",
                  value: function () {
                    var t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : function (t) {
                              return String(t.key);
                            },
                      e = [];
                    return (
                      l(
                        this._root,
                        "",
                        !0,
                        function (t) {
                          return e.push(t);
                        },
                        t
                      ),
                      e.join("")
                    );
                  },
                },
                {
                  key: "update",
                  value: function (t, e, r) {
                    var n = this._comparator,
                      i = s(t, this._root, n),
                      o = i.left,
                      l = i.right;
                    n(t, e) < 0 ? (l = a(e, r, l, n)) : (o = a(e, r, o, n)),
                      (this._root = u(o, l, n));
                  },
                },
                {
                  key: "split",
                  value: function (t) {
                    return s(t, this._root, this._comparator);
                  },
                },
                {
                  key: "size",
                  get: function () {
                    return this._size;
                  },
                },
                {
                  key: "root",
                  get: function () {
                    return this._root;
                  },
                },
              ]),
              e
            );
          })();
          function f(t, e, r, i) {
            var o = i - r;
            if (o > 0) {
              var a = r + Math.floor(o / 2),
                s = t[a],
                u = e[a],
                l = new n(s, u);
              return (l.left = f(t, e, r, a)), (l.right = f(t, e, a + 1, i)), l;
            }
            return null;
          }
          function c(t, e) {
            for (var r = new n(null, null), i = r, o = 0; o < t.length; o++)
              i = i.next = new n(t[o], e[o]);
            return (i.next = null), r.next;
          }
          function p(t) {
            for (var e = t, r = [], i = !1, o = new n(null, null), a = o; !i; )
              e
                ? (r.push(e), (e = e.left))
                : r.length > 0
                ? (e = (e = a = a.next = r.pop()).right)
                : (i = !0);
            return (a.next = null), o.next;
          }
          function d(t, e, r) {
            var n = r - e;
            if (n > 0) {
              var i = e + Math.floor(n / 2),
                o = d(t, e, i),
                a = t.head;
              return (
                (a.left = o),
                (t.head = t.head.next),
                (a.right = d(t, i + 1, r)),
                a
              );
            }
            return null;
          }
          function g(t, e, r) {
            for (
              var i = new n(null, null), o = i, a = t, s = e;
              null !== a && null !== s;

            )
              r(a.key, s.key) < 0
                ? ((o.next = a), (a = a.next))
                : ((o.next = s), (s = s.next)),
                (o = o.next);
            return (
              null !== a ? (o.next = a) : null !== s && (o.next = s), i.next
            );
          }
          function y(t, e, r, n, i) {
            if (!(r >= n)) {
              for (var o = t[(r + n) >> 1], a = r - 1, s = n + 1; ; ) {
                do {
                  a++;
                } while (i(t[a], o) < 0);
                do {
                  s--;
                } while (i(t[s], o) > 0);
                if (a >= s) break;
                var u = t[a];
                (t[a] = t[s]),
                  (t[s] = u),
                  (u = e[a]),
                  (e[a] = e[s]),
                  (e[s] = u);
              }
              y(t, e, r, s, i), y(t, e, s + 1, n, i);
            }
          }
          var v = function (t, e) {
              return (
                t.ll.x <= e.x && e.x <= t.ur.x && t.ll.y <= e.y && e.y <= t.ur.y
              );
            },
            b = function (t, e) {
              if (
                e.ur.x < t.ll.x ||
                t.ur.x < e.ll.x ||
                e.ur.y < t.ll.y ||
                t.ur.y < e.ll.y
              )
                return null;
              var r = t.ll.x < e.ll.x ? e.ll.x : t.ll.x,
                n = t.ur.x < e.ur.x ? t.ur.x : e.ur.x;
              return {
                ll: { x: r, y: t.ll.y < e.ll.y ? e.ll.y : t.ll.y },
                ur: { x: n, y: t.ur.y < e.ur.y ? t.ur.y : e.ur.y },
              };
            },
            m = Number.EPSILON;
          void 0 === m && (m = Math.pow(2, -52));
          var w = m * m,
            x = function (t, e) {
              if (-m < t && t < m && -m < e && e < m) return 0;
              var r = t - e;
              return r * r < w * t * e ? 0 : t < e ? -1 : 1;
            },
            _ = (function () {
              function e() {
                t(this, e), this.reset();
              }
              return (
                r(e, [
                  {
                    key: "reset",
                    value: function () {
                      (this.xRounder = new E()), (this.yRounder = new E());
                    },
                  },
                  {
                    key: "round",
                    value: function (t, e) {
                      return {
                        x: this.xRounder.round(t),
                        y: this.yRounder.round(e),
                      };
                    },
                  },
                ]),
                e
              );
            })(),
            E = (function () {
              function e() {
                t(this, e), (this.tree = new h()), this.round(0);
              }
              return (
                r(e, [
                  {
                    key: "round",
                    value: function (t) {
                      var e = this.tree.add(t),
                        r = this.tree.prev(e);
                      if (null !== r && 0 === x(e.key, r.key))
                        return this.tree.remove(t), r.key;
                      var n = this.tree.next(e);
                      return null !== n && 0 === x(e.key, n.key)
                        ? (this.tree.remove(t), n.key)
                        : t;
                    },
                  },
                ]),
                e
              );
            })(),
            S = new _(),
            k = function (t, e) {
              return t.x * e.y - t.y * e.x;
            },
            M = function (t, e) {
              return t.x * e.x + t.y * e.y;
            },
            R = function (t, e, r) {
              var n = { x: e.x - t.x, y: e.y - t.y },
                i = { x: r.x - t.x, y: r.y - t.y },
                o = k(n, i);
              return x(o, 0);
            },
            A = function (t) {
              return Math.sqrt(M(t, t));
            },
            j = function (t, e, r) {
              var n = { x: e.x - t.x, y: e.y - t.y },
                i = { x: r.x - t.x, y: r.y - t.y };
              return k(i, n) / A(i) / A(n);
            },
            P = function (t, e, r) {
              var n = { x: e.x - t.x, y: e.y - t.y },
                i = { x: r.x - t.x, y: r.y - t.y };
              return M(i, n) / A(i) / A(n);
            },
            T = function (t, e, r) {
              return 0 === e.y
                ? null
                : { x: t.x + (e.x / e.y) * (r - t.y), y: r };
            },
            I = function (t, e, r) {
              return 0 === e.x
                ? null
                : { x: r, y: t.y + (e.y / e.x) * (r - t.x) };
            },
            O = function (t, e, r, n) {
              if (0 === e.x) return I(r, n, t.x);
              if (0 === n.x) return I(t, e, r.x);
              if (0 === e.y) return T(r, n, t.y);
              if (0 === n.y) return T(t, e, r.y);
              var i = k(e, n);
              if (0 == i) return null;
              var o = { x: r.x - t.x, y: r.y - t.y },
                a = k(o, e) / i,
                s = k(o, n) / i;
              return {
                x: (t.x + s * e.x + (r.x + a * n.x)) / 2,
                y: (t.y + s * e.y + (r.y + a * n.y)) / 2,
              };
            },
            B = (function () {
              function e(r, n) {
                t(this, e),
                  void 0 === r.events
                    ? (r.events = [this])
                    : r.events.push(this),
                  (this.point = r),
                  (this.isLeft = n);
              }
              return (
                r(e, null, [
                  {
                    key: "compare",
                    value: function (t, r) {
                      var n = e.comparePoints(t.point, r.point);
                      return 0 !== n
                        ? n
                        : (t.point !== r.point && t.link(r),
                          t.isLeft !== r.isLeft
                            ? t.isLeft
                              ? 1
                              : -1
                            : C.compare(t.segment, r.segment));
                    },
                  },
                  {
                    key: "comparePoints",
                    value: function (t, e) {
                      return t.x < e.x
                        ? -1
                        : t.x > e.x
                        ? 1
                        : t.y < e.y
                        ? -1
                        : t.y > e.y
                        ? 1
                        : 0;
                    },
                  },
                ]),
                r(e, [
                  {
                    key: "link",
                    value: function (t) {
                      if (t.point === this.point)
                        throw new Error("Tried to link already linked events");
                      for (
                        var e = t.point.events, r = 0, n = e.length;
                        r < n;
                        r++
                      ) {
                        var i = e[r];
                        this.point.events.push(i), (i.point = this.point);
                      }
                      this.checkForConsuming();
                    },
                  },
                  {
                    key: "checkForConsuming",
                    value: function () {
                      for (
                        var t = this.point.events.length, e = 0;
                        e < t;
                        e++
                      ) {
                        var r = this.point.events[e];
                        if (void 0 === r.segment.consumedBy)
                          for (var n = e + 1; n < t; n++) {
                            var i = this.point.events[n];
                            void 0 === i.consumedBy &&
                              r.otherSE.point.events ===
                                i.otherSE.point.events &&
                              r.segment.consume(i.segment);
                          }
                      }
                    },
                  },
                  {
                    key: "getAvailableLinkedEvents",
                    value: function () {
                      for (
                        var t = [], e = 0, r = this.point.events.length;
                        e < r;
                        e++
                      ) {
                        var n = this.point.events[e];
                        n !== this &&
                          !n.segment.ringOut &&
                          n.segment.isInResult() &&
                          t.push(n);
                      }
                      return t;
                    },
                  },
                  {
                    key: "getLeftmostComparator",
                    value: function (t) {
                      var e = this,
                        r = new Map(),
                        n = function (n) {
                          var i = n.otherSE;
                          r.set(n, {
                            sine: j(e.point, t.point, i.point),
                            cosine: P(e.point, t.point, i.point),
                          });
                        };
                      return function (t, e) {
                        r.has(t) || n(t), r.has(e) || n(e);
                        var i = r.get(t),
                          o = i.sine,
                          a = i.cosine,
                          s = r.get(e),
                          u = s.sine,
                          l = s.cosine;
                        return o >= 0 && u >= 0
                          ? a < l
                            ? 1
                            : a > l
                            ? -1
                            : 0
                          : o < 0 && u < 0
                          ? a < l
                            ? -1
                            : a > l
                            ? 1
                            : 0
                          : u < o
                          ? -1
                          : u > o
                          ? 1
                          : 0;
                      };
                    },
                  },
                ]),
                e
              );
            })(),
            L = 0,
            C = (function () {
              function e(r, n, i, o) {
                t(this, e),
                  (this.id = ++L),
                  (this.leftSE = r),
                  (r.segment = this),
                  (r.otherSE = n),
                  (this.rightSE = n),
                  (n.segment = this),
                  (n.otherSE = r),
                  (this.rings = i),
                  (this.windings = o);
              }
              return (
                r(e, null, [
                  {
                    key: "compare",
                    value: function (t, e) {
                      var r = t.leftSE.point.x,
                        n = e.leftSE.point.x,
                        i = t.rightSE.point.x,
                        o = e.rightSE.point.x;
                      if (o < r) return 1;
                      if (i < n) return -1;
                      var a = t.leftSE.point.y,
                        s = e.leftSE.point.y,
                        u = t.rightSE.point.y,
                        l = e.rightSE.point.y;
                      if (r < n) {
                        if (s < a && s < u) return 1;
                        if (s > a && s > u) return -1;
                        var h = t.comparePoint(e.leftSE.point);
                        if (h < 0) return 1;
                        if (h > 0) return -1;
                        var f = e.comparePoint(t.rightSE.point);
                        return 0 !== f ? f : -1;
                      }
                      if (r > n) {
                        if (a < s && a < l) return -1;
                        if (a > s && a > l) return 1;
                        var c = e.comparePoint(t.leftSE.point);
                        if (0 !== c) return c;
                        var p = t.comparePoint(e.rightSE.point);
                        return p < 0 ? 1 : p > 0 ? -1 : 1;
                      }
                      if (a < s) return -1;
                      if (a > s) return 1;
                      if (i < o) {
                        var d = e.comparePoint(t.rightSE.point);
                        if (0 !== d) return d;
                      }
                      if (i > o) {
                        var g = t.comparePoint(e.rightSE.point);
                        if (g < 0) return 1;
                        if (g > 0) return -1;
                      }
                      if (i !== o) {
                        var y = u - a,
                          v = i - r,
                          b = l - s,
                          m = o - n;
                        if (y > v && b < m) return 1;
                        if (y < v && b > m) return -1;
                      }
                      return i > o
                        ? 1
                        : i < o || u < l
                        ? -1
                        : u > l
                        ? 1
                        : t.id < e.id
                        ? -1
                        : t.id > e.id
                        ? 1
                        : 0;
                    },
                  },
                ]),
                r(
                  e,
                  [
                    {
                      key: "replaceRightSE",
                      value: function (t) {
                        (this.rightSE = t),
                          (this.rightSE.segment = this),
                          (this.rightSE.otherSE = this.leftSE),
                          (this.leftSE.otherSE = this.rightSE);
                      },
                    },
                    {
                      key: "bbox",
                      value: function () {
                        var t = this.leftSE.point.y,
                          e = this.rightSE.point.y;
                        return {
                          ll: { x: this.leftSE.point.x, y: t < e ? t : e },
                          ur: { x: this.rightSE.point.x, y: t > e ? t : e },
                        };
                      },
                    },
                    {
                      key: "vector",
                      value: function () {
                        return {
                          x: this.rightSE.point.x - this.leftSE.point.x,
                          y: this.rightSE.point.y - this.leftSE.point.y,
                        };
                      },
                    },
                    {
                      key: "isAnEndpoint",
                      value: function (t) {
                        return (
                          (t.x === this.leftSE.point.x &&
                            t.y === this.leftSE.point.y) ||
                          (t.x === this.rightSE.point.x &&
                            t.y === this.rightSE.point.y)
                        );
                      },
                    },
                    {
                      key: "comparePoint",
                      value: function (t) {
                        if (this.isAnEndpoint(t)) return 0;
                        var e = this.leftSE.point,
                          r = this.rightSE.point,
                          n = this.vector();
                        if (e.x === r.x)
                          return t.x === e.x ? 0 : t.x < e.x ? 1 : -1;
                        var i = (t.y - e.y) / n.y,
                          o = e.x + i * n.x;
                        if (t.x === o) return 0;
                        var a = (t.x - e.x) / n.x,
                          s = e.y + a * n.y;
                        return t.y === s ? 0 : t.y < s ? -1 : 1;
                      },
                    },
                    {
                      key: "getIntersection",
                      value: function (t) {
                        var e = this.bbox(),
                          r = t.bbox(),
                          n = b(e, r);
                        if (null === n) return null;
                        var i = this.leftSE.point,
                          o = this.rightSE.point,
                          a = t.leftSE.point,
                          s = t.rightSE.point,
                          u = v(e, a) && 0 === this.comparePoint(a),
                          l = v(r, i) && 0 === t.comparePoint(i),
                          h = v(e, s) && 0 === this.comparePoint(s),
                          f = v(r, o) && 0 === t.comparePoint(o);
                        if (l && u) return f && !h ? o : !f && h ? s : null;
                        if (l)
                          return h && i.x === s.x && i.y === s.y ? null : i;
                        if (u)
                          return f && o.x === a.x && o.y === a.y ? null : a;
                        if (f && h) return null;
                        if (f) return o;
                        if (h) return s;
                        var c = O(i, this.vector(), a, t.vector());
                        return null === c
                          ? null
                          : v(n, c)
                          ? S.round(c.x, c.y)
                          : null;
                      },
                    },
                    {
                      key: "split",
                      value: function (t) {
                        var r = [],
                          n = void 0 !== t.events,
                          i = new B(t, !0),
                          o = new B(t, !1),
                          a = this.rightSE;
                        this.replaceRightSE(o), r.push(o), r.push(i);
                        var s = new e(
                          i,
                          a,
                          this.rings.slice(),
                          this.windings.slice()
                        );
                        return (
                          B.comparePoints(s.leftSE.point, s.rightSE.point) >
                            0 && s.swapEvents(),
                          B.comparePoints(
                            this.leftSE.point,
                            this.rightSE.point
                          ) > 0 && this.swapEvents(),
                          n && (i.checkForConsuming(), o.checkForConsuming()),
                          r
                        );
                      },
                    },
                    {
                      key: "swapEvents",
                      value: function () {
                        var t = this.rightSE;
                        (this.rightSE = this.leftSE),
                          (this.leftSE = t),
                          (this.leftSE.isLeft = !0),
                          (this.rightSE.isLeft = !1);
                        for (var e = 0, r = this.windings.length; e < r; e++)
                          this.windings[e] *= -1;
                      },
                    },
                    {
                      key: "consume",
                      value: function (t) {
                        for (var r = this, n = t; r.consumedBy; )
                          r = r.consumedBy;
                        for (; n.consumedBy; ) n = n.consumedBy;
                        var i = e.compare(r, n);
                        if (0 !== i) {
                          if (i > 0) {
                            var o = r;
                            (r = n), (n = o);
                          }
                          if (r.prev === n) {
                            var a = r;
                            (r = n), (n = a);
                          }
                          for (var s = 0, u = n.rings.length; s < u; s++) {
                            var l = n.rings[s],
                              h = n.windings[s],
                              f = r.rings.indexOf(l);
                            -1 === f
                              ? (r.rings.push(l), r.windings.push(h))
                              : (r.windings[f] += h);
                          }
                          (n.rings = null),
                            (n.windings = null),
                            (n.consumedBy = r),
                            (n.leftSE.consumedBy = r.leftSE),
                            (n.rightSE.consumedBy = r.rightSE);
                        }
                      },
                    },
                    {
                      key: "prevInResult",
                      value: function () {
                        return (
                          void 0 !== this._prevInResult ||
                            (this.prev
                              ? this.prev.isInResult()
                                ? (this._prevInResult = this.prev)
                                : (this._prevInResult =
                                    this.prev.prevInResult())
                              : (this._prevInResult = null)),
                          this._prevInResult
                        );
                      },
                    },
                    {
                      key: "beforeState",
                      value: function () {
                        if (void 0 !== this._beforeState)
                          return this._beforeState;
                        if (this.prev) {
                          var t = this.prev.consumedBy || this.prev;
                          this._beforeState = t.afterState();
                        } else
                          this._beforeState = {
                            rings: [],
                            windings: [],
                            multiPolys: [],
                          };
                        return this._beforeState;
                      },
                    },
                    {
                      key: "afterState",
                      value: function () {
                        if (void 0 !== this._afterState)
                          return this._afterState;
                        var t = this.beforeState();
                        this._afterState = {
                          rings: t.rings.slice(0),
                          windings: t.windings.slice(0),
                          multiPolys: [],
                        };
                        for (
                          var e = this._afterState.rings,
                            r = this._afterState.windings,
                            n = this._afterState.multiPolys,
                            i = 0,
                            o = this.rings.length;
                          i < o;
                          i++
                        ) {
                          var a = this.rings[i],
                            s = this.windings[i],
                            u = e.indexOf(a);
                          -1 === u ? (e.push(a), r.push(s)) : (r[u] += s);
                        }
                        for (
                          var l = [], h = [], f = 0, c = e.length;
                          f < c;
                          f++
                        )
                          if (0 !== r[f]) {
                            var p = e[f],
                              d = p.poly;
                            if (-1 === h.indexOf(d))
                              if (p.isExterior) l.push(d);
                              else {
                                -1 === h.indexOf(d) && h.push(d);
                                var g = l.indexOf(p.poly);
                                -1 !== g && l.splice(g, 1);
                              }
                          }
                        for (var y = 0, v = l.length; y < v; y++) {
                          var b = l[y].multiPoly;
                          -1 === n.indexOf(b) && n.push(b);
                        }
                        return this._afterState;
                      },
                    },
                    {
                      key: "isInResult",
                      value: function () {
                        if (this.consumedBy) return !1;
                        if (void 0 !== this._isInResult)
                          return this._isInResult;
                        var t = this.beforeState().multiPolys,
                          e = this.afterState().multiPolys;
                        switch (G.type) {
                          case "union":
                            var r = 0 === t.length,
                              n = 0 === e.length;
                            this._isInResult = r !== n;
                            break;
                          case "intersection":
                            var i, o;
                            t.length < e.length
                              ? ((i = t.length), (o = e.length))
                              : ((i = e.length), (o = t.length)),
                              (this._isInResult =
                                o === G.numMultiPolys && i < o);
                            break;
                          case "xor":
                            var a = Math.abs(t.length - e.length);
                            this._isInResult = a % 2 == 1;
                            break;
                          case "difference":
                            var s = function (t) {
                              return 1 === t.length && t[0].isSubject;
                            };
                            this._isInResult = s(t) !== s(e);
                            break;
                          default:
                            throw new Error(
                              "Unrecognized operation type found ".concat(
                                G.type
                              )
                            );
                        }
                        return this._isInResult;
                      },
                    },
                  ],
                  [
                    {
                      key: "fromRing",
                      value: function (t, r, n) {
                        var i,
                          o,
                          a,
                          s = B.comparePoints(t, r);
                        if (s < 0) (i = t), (o = r), (a = 1);
                        else {
                          if (!(s > 0))
                            throw new Error(
                              "Tried to create degenerate segment at ["
                                .concat(t.x, ", ")
                                .concat(t.y, "]")
                            );
                          (i = r), (o = t), (a = -1);
                        }
                        return new e(new B(i, !0), new B(o, !1), [n], [a]);
                      },
                    },
                  ]
                ),
                e
              );
            })(),
            N = (function () {
              function e(r, n, i) {
                if ((t(this, e), !Array.isArray(r) || 0 === r.length))
                  throw new Error(
                    "Input geometry is not a valid Polygon or MultiPolygon"
                  );
                if (
                  ((this.poly = n),
                  (this.isExterior = i),
                  (this.segments = []),
                  "number" != typeof r[0][0] || "number" != typeof r[0][1])
                )
                  throw new Error(
                    "Input geometry is not a valid Polygon or MultiPolygon"
                  );
                var o = S.round(r[0][0], r[0][1]);
                this.bbox = { ll: { x: o.x, y: o.y }, ur: { x: o.x, y: o.y } };
                for (var a = o, s = 1, u = r.length; s < u; s++) {
                  if ("number" != typeof r[s][0] || "number" != typeof r[s][1])
                    throw new Error(
                      "Input geometry is not a valid Polygon or MultiPolygon"
                    );
                  var l = S.round(r[s][0], r[s][1]);
                  (l.x === a.x && l.y === a.y) ||
                    (this.segments.push(C.fromRing(a, l, this)),
                    l.x < this.bbox.ll.x && (this.bbox.ll.x = l.x),
                    l.y < this.bbox.ll.y && (this.bbox.ll.y = l.y),
                    l.x > this.bbox.ur.x && (this.bbox.ur.x = l.x),
                    l.y > this.bbox.ur.y && (this.bbox.ur.y = l.y),
                    (a = l));
                }
                (o.x === a.x && o.y === a.y) ||
                  this.segments.push(C.fromRing(a, o, this));
              }
              return (
                r(e, [
                  {
                    key: "getSweepEvents",
                    value: function () {
                      for (
                        var t = [], e = 0, r = this.segments.length;
                        e < r;
                        e++
                      ) {
                        var n = this.segments[e];
                        t.push(n.leftSE), t.push(n.rightSE);
                      }
                      return t;
                    },
                  },
                ]),
                e
              );
            })(),
            F = (function () {
              function e(r, n) {
                if ((t(this, e), !Array.isArray(r)))
                  throw new Error(
                    "Input geometry is not a valid Polygon or MultiPolygon"
                  );
                (this.exteriorRing = new N(r[0], this, !0)),
                  (this.bbox = {
                    ll: {
                      x: this.exteriorRing.bbox.ll.x,
                      y: this.exteriorRing.bbox.ll.y,
                    },
                    ur: {
                      x: this.exteriorRing.bbox.ur.x,
                      y: this.exteriorRing.bbox.ur.y,
                    },
                  }),
                  (this.interiorRings = []);
                for (var i = 1, o = r.length; i < o; i++) {
                  var a = new N(r[i], this, !1);
                  a.bbox.ll.x < this.bbox.ll.x &&
                    (this.bbox.ll.x = a.bbox.ll.x),
                    a.bbox.ll.y < this.bbox.ll.y &&
                      (this.bbox.ll.y = a.bbox.ll.y),
                    a.bbox.ur.x > this.bbox.ur.x &&
                      (this.bbox.ur.x = a.bbox.ur.x),
                    a.bbox.ur.y > this.bbox.ur.y &&
                      (this.bbox.ur.y = a.bbox.ur.y),
                    this.interiorRings.push(a);
                }
                this.multiPoly = n;
              }
              return (
                r(e, [
                  {
                    key: "getSweepEvents",
                    value: function () {
                      for (
                        var t = this.exteriorRing.getSweepEvents(),
                          e = 0,
                          r = this.interiorRings.length;
                        e < r;
                        e++
                      )
                        for (
                          var n = this.interiorRings[e].getSweepEvents(),
                            i = 0,
                            o = n.length;
                          i < o;
                          i++
                        )
                          t.push(n[i]);
                      return t;
                    },
                  },
                ]),
                e
              );
            })(),
            U = (function () {
              function e(r, n) {
                if ((t(this, e), !Array.isArray(r)))
                  throw new Error(
                    "Input geometry is not a valid Polygon or MultiPolygon"
                  );
                try {
                  "number" == typeof r[0][0][0] && (r = [r]);
                } catch (t) {}
                (this.polys = []),
                  (this.bbox = {
                    ll: {
                      x: Number.POSITIVE_INFINITY,
                      y: Number.POSITIVE_INFINITY,
                    },
                    ur: {
                      x: Number.NEGATIVE_INFINITY,
                      y: Number.NEGATIVE_INFINITY,
                    },
                  });
                for (var i = 0, o = r.length; i < o; i++) {
                  var a = new F(r[i], this);
                  a.bbox.ll.x < this.bbox.ll.x &&
                    (this.bbox.ll.x = a.bbox.ll.x),
                    a.bbox.ll.y < this.bbox.ll.y &&
                      (this.bbox.ll.y = a.bbox.ll.y),
                    a.bbox.ur.x > this.bbox.ur.x &&
                      (this.bbox.ur.x = a.bbox.ur.x),
                    a.bbox.ur.y > this.bbox.ur.y &&
                      (this.bbox.ur.y = a.bbox.ur.y),
                    this.polys.push(a);
                }
                this.isSubject = n;
              }
              return (
                r(e, [
                  {
                    key: "getSweepEvents",
                    value: function () {
                      for (var t = [], e = 0, r = this.polys.length; e < r; e++)
                        for (
                          var n = this.polys[e].getSweepEvents(),
                            i = 0,
                            o = n.length;
                          i < o;
                          i++
                        )
                          t.push(n[i]);
                      return t;
                    },
                  },
                ]),
                e
              );
            })(),
            D = (function () {
              function e(r) {
                t(this, e), (this.events = r);
                for (var n = 0, i = r.length; n < i; n++)
                  r[n].segment.ringOut = this;
                this.poly = null;
              }
              return (
                r(e, null, [
                  {
                    key: "factory",
                    value: function (t) {
                      for (var r = [], n = 0, i = t.length; n < i; n++) {
                        var o = t[n];
                        if (o.isInResult() && !o.ringOut) {
                          for (
                            var a = null,
                              s = o.leftSE,
                              u = o.rightSE,
                              l = [s],
                              h = s.point,
                              f = [];
                            (a = s), (s = u), l.push(s), s.point !== h;

                          )
                            for (;;) {
                              var c = s.getAvailableLinkedEvents();
                              if (0 === c.length) {
                                var p = l[0].point,
                                  d = l[l.length - 1].point;
                                throw new Error(
                                  "Unable to complete output ring starting at [".concat(
                                    p.x,
                                    ","
                                  ) +
                                    " ".concat(
                                      p.y,
                                      "]. Last matching segment found ends at"
                                    ) +
                                    " [".concat(d.x, ", ").concat(d.y, "].")
                                );
                              }
                              if (1 === c.length) {
                                u = c[0].otherSE;
                                break;
                              }
                              for (
                                var g = null, y = 0, v = f.length;
                                y < v;
                                y++
                              )
                                if (f[y].point === s.point) {
                                  g = y;
                                  break;
                                }
                              if (null === g) {
                                f.push({ index: l.length, point: s.point });
                                var b = s.getLeftmostComparator(a);
                                u = c.sort(b)[0].otherSE;
                                break;
                              }
                              var m = f.splice(g)[0],
                                w = l.splice(m.index);
                              w.unshift(w[0].otherSE),
                                r.push(new e(w.reverse()));
                            }
                          r.push(new e(l));
                        }
                      }
                      return r;
                    },
                  },
                ]),
                r(e, [
                  {
                    key: "getGeom",
                    value: function () {
                      for (
                        var t = this.events[0].point,
                          e = [t],
                          r = 1,
                          n = this.events.length - 1;
                        r < n;
                        r++
                      ) {
                        var i = this.events[r].point,
                          o = this.events[r + 1].point;
                        0 !== R(i, t, o) && (e.push(i), (t = i));
                      }
                      if (1 === e.length) return null;
                      var a = e[0],
                        s = e[1];
                      0 === R(a, t, s) && e.shift(), e.push(e[0]);
                      for (
                        var u = this.isExteriorRing() ? 1 : -1,
                          l = this.isExteriorRing() ? 0 : e.length - 1,
                          h = this.isExteriorRing() ? e.length : -1,
                          f = [],
                          c = l;
                        c != h;
                        c += u
                      )
                        f.push([e[c].x, e[c].y]);
                      return f;
                    },
                  },
                  {
                    key: "isExteriorRing",
                    value: function () {
                      if (void 0 === this._isExteriorRing) {
                        var t = this.enclosingRing();
                        this._isExteriorRing = !t || !t.isExteriorRing();
                      }
                      return this._isExteriorRing;
                    },
                  },
                  {
                    key: "enclosingRing",
                    value: function () {
                      return (
                        void 0 === this._enclosingRing &&
                          (this._enclosingRing = this._calcEnclosingRing()),
                        this._enclosingRing
                      );
                    },
                  },
                  {
                    key: "_calcEnclosingRing",
                    value: function () {
                      for (
                        var t = this.events[0], e = 1, r = this.events.length;
                        e < r;
                        e++
                      ) {
                        var n = this.events[e];
                        B.compare(t, n) > 0 && (t = n);
                      }
                      for (
                        var i = t.segment.prevInResult(),
                          o = i ? i.prevInResult() : null;
                        ;

                      ) {
                        if (!i) return null;
                        if (!o) return i.ringOut;
                        if (o.ringOut !== i.ringOut)
                          return o.ringOut.enclosingRing() !== i.ringOut
                            ? i.ringOut
                            : i.ringOut.enclosingRing();
                        (i = o.prevInResult()),
                          (o = i ? i.prevInResult() : null);
                      }
                    },
                  },
                ]),
                e
              );
            })(),
            V = (function () {
              function e(r) {
                t(this, e),
                  (this.exteriorRing = r),
                  (r.poly = this),
                  (this.interiorRings = []);
              }
              return (
                r(e, [
                  {
                    key: "addInterior",
                    value: function (t) {
                      this.interiorRings.push(t), (t.poly = this);
                    },
                  },
                  {
                    key: "getGeom",
                    value: function () {
                      var t = [this.exteriorRing.getGeom()];
                      if (null === t[0]) return null;
                      for (
                        var e = 0, r = this.interiorRings.length;
                        e < r;
                        e++
                      ) {
                        var n = this.interiorRings[e].getGeom();
                        null !== n && t.push(n);
                      }
                      return t;
                    },
                  },
                ]),
                e
              );
            })(),
            q = (function () {
              function e(r) {
                t(this, e),
                  (this.rings = r),
                  (this.polys = this._composePolys(r));
              }
              return (
                r(e, [
                  {
                    key: "getGeom",
                    value: function () {
                      for (
                        var t = [], e = 0, r = this.polys.length;
                        e < r;
                        e++
                      ) {
                        var n = this.polys[e].getGeom();
                        null !== n && t.push(n);
                      }
                      return t;
                    },
                  },
                  {
                    key: "_composePolys",
                    value: function (t) {
                      for (var e = [], r = 0, n = t.length; r < n; r++) {
                        var i = t[r];
                        if (!i.poly)
                          if (i.isExteriorRing()) e.push(new V(i));
                          else {
                            var o = i.enclosingRing();
                            o.poly || e.push(new V(o)), o.poly.addInterior(i);
                          }
                      }
                      return e;
                    },
                  },
                ]),
                e
              );
            })(),
            z = (function () {
              function e(r) {
                var n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : C.compare;
                t(this, e),
                  (this.queue = r),
                  (this.tree = new h(n)),
                  (this.segments = []);
              }
              return (
                r(e, [
                  {
                    key: "process",
                    value: function (t) {
                      var e = t.segment,
                        r = [];
                      if (t.consumedBy)
                        return (
                          t.isLeft
                            ? this.queue.remove(t.otherSE)
                            : this.tree.remove(e),
                          r
                        );
                      var n = t.isLeft
                        ? this.tree.insert(e)
                        : this.tree.find(e);
                      if (!n)
                        throw new Error(
                          "Unable to find segment #".concat(e.id, " ") +
                            "["
                              .concat(e.leftSE.point.x, ", ")
                              .concat(e.leftSE.point.y, "] -> ") +
                            "["
                              .concat(e.rightSE.point.x, ", ")
                              .concat(e.rightSE.point.y, "] ") +
                            "in SweepLine tree. Please submit a bug report."
                        );
                      for (
                        var i = n, o = n, a = void 0, s = void 0;
                        void 0 === a;

                      )
                        null === (i = this.tree.prev(i))
                          ? (a = null)
                          : void 0 === i.key.consumedBy && (a = i.key);
                      for (; void 0 === s; )
                        null === (o = this.tree.next(o))
                          ? (s = null)
                          : void 0 === o.key.consumedBy && (s = o.key);
                      if (t.isLeft) {
                        var u = null;
                        if (a) {
                          var l = a.getIntersection(e);
                          if (
                            null !== l &&
                            (e.isAnEndpoint(l) || (u = l), !a.isAnEndpoint(l))
                          )
                            for (
                              var h = this._splitSafely(a, l),
                                f = 0,
                                c = h.length;
                              f < c;
                              f++
                            )
                              r.push(h[f]);
                        }
                        var p = null;
                        if (s) {
                          var d = s.getIntersection(e);
                          if (
                            null !== d &&
                            (e.isAnEndpoint(d) || (p = d), !s.isAnEndpoint(d))
                          )
                            for (
                              var g = this._splitSafely(s, d),
                                y = 0,
                                v = g.length;
                              y < v;
                              y++
                            )
                              r.push(g[y]);
                        }
                        if (null !== u || null !== p) {
                          var b = null;
                          (b =
                            null === u
                              ? p
                              : null === p || B.comparePoints(u, p) <= 0
                              ? u
                              : p),
                            this.queue.remove(e.rightSE),
                            r.push(e.rightSE);
                          for (
                            var m = e.split(b), w = 0, x = m.length;
                            w < x;
                            w++
                          )
                            r.push(m[w]);
                        }
                        r.length > 0
                          ? (this.tree.remove(e), r.push(t))
                          : (this.segments.push(e), (e.prev = a));
                      } else {
                        if (a && s) {
                          var _ = a.getIntersection(s);
                          if (null !== _) {
                            if (!a.isAnEndpoint(_))
                              for (
                                var E = this._splitSafely(a, _),
                                  S = 0,
                                  k = E.length;
                                S < k;
                                S++
                              )
                                r.push(E[S]);
                            if (!s.isAnEndpoint(_))
                              for (
                                var M = this._splitSafely(s, _),
                                  R = 0,
                                  A = M.length;
                                R < A;
                                R++
                              )
                                r.push(M[R]);
                          }
                        }
                        this.tree.remove(e);
                      }
                      return r;
                    },
                  },
                  {
                    key: "_splitSafely",
                    value: function (t, e) {
                      this.tree.remove(t);
                      var r = t.rightSE;
                      this.queue.remove(r);
                      var n = t.split(e);
                      return (
                        n.push(r),
                        void 0 === t.consumedBy && this.tree.insert(t),
                        n
                      );
                    },
                  },
                ]),
                e
              );
            })(),
            G = new ((function () {
              function e() {
                t(this, e);
              }
              return (
                r(e, [
                  {
                    key: "run",
                    value: function (t, e, r) {
                      (G.type = t), S.reset();
                      for (
                        var n = [new U(e, !0)], i = 0, o = r.length;
                        i < o;
                        i++
                      )
                        n.push(new U(r[i], !1));
                      if (
                        ((G.numMultiPolys = n.length), "difference" === G.type)
                      )
                        for (var a = n[0], s = 1; s < n.length; )
                          null !== b(n[s].bbox, a.bbox) ? s++ : n.splice(s, 1);
                      if ("intersection" === G.type)
                        for (var u = 0, l = n.length; u < l; u++)
                          for (
                            var f = n[u], c = u + 1, p = n.length;
                            c < p;
                            c++
                          )
                            if (null === b(f.bbox, n[c].bbox)) return [];
                      for (
                        var d = new h(B.compare), g = 0, y = n.length;
                        g < y;
                        g++
                      )
                        for (
                          var v = n[g].getSweepEvents(), m = 0, w = v.length;
                          m < w;
                          m++
                        )
                          d.insert(v[m]);
                      for (var x = new z(d), _ = d.size, E = d.pop(); E; ) {
                        var k = E.key;
                        if (d.size === _) {
                          var M = k.segment;
                          throw new Error(
                            "Unable to pop() ".concat(
                              k.isLeft ? "left" : "right",
                              " SweepEvent "
                            ) +
                              "["
                                .concat(k.point.x, ", ")
                                .concat(k.point.y, "] from segment #")
                                .concat(M.id, " ") +
                              "["
                                .concat(M.leftSE.point.x, ", ")
                                .concat(M.leftSE.point.y, "] -> ") +
                              "["
                                .concat(M.rightSE.point.x, ", ")
                                .concat(M.rightSE.point.y, "] from queue. ") +
                              "Please file a bug report."
                          );
                        }
                        for (
                          var R = x.process(k), A = 0, j = R.length;
                          A < j;
                          A++
                        ) {
                          var P = R[A];
                          void 0 === P.consumedBy && d.insert(P);
                        }
                        (_ = d.size), (E = d.pop());
                      }
                      S.reset();
                      var T = D.factory(x.segments);
                      return new q(T).getGeom();
                    },
                  },
                ]),
                e
              );
            })())();
          return {
            union: function (t) {
              for (
                var e = arguments.length,
                  r = new Array(e > 1 ? e - 1 : 0),
                  n = 1;
                n < e;
                n++
              )
                r[n - 1] = arguments[n];
              return G.run("union", t, r);
            },
            intersection: function (t) {
              for (
                var e = arguments.length,
                  r = new Array(e > 1 ? e - 1 : 0),
                  n = 1;
                n < e;
                n++
              )
                r[n - 1] = arguments[n];
              return G.run("intersection", t, r);
            },
            xor: function (t) {
              for (
                var e = arguments.length,
                  r = new Array(e > 1 ? e - 1 : 0),
                  n = 1;
                n < e;
                n++
              )
                r[n - 1] = arguments[n];
              return G.run("xor", t, r);
            },
            difference: function (t) {
              for (
                var e = arguments.length,
                  r = new Array(e > 1 ? e - 1 : 0),
                  n = 1;
                n < e;
                n++
              )
                r[n - 1] = arguments[n];
              return G.run("difference", t, r);
            },
          };
        })();
      },
      5666: (t) => {
        var e = (function (t) {
          "use strict";
          var e,
            r = Object.prototype,
            n = r.hasOwnProperty,
            i = "function" == typeof Symbol ? Symbol : {},
            o = i.iterator || "@@iterator",
            a = i.asyncIterator || "@@asyncIterator",
            s = i.toStringTag || "@@toStringTag";
          function u(t, e, r) {
            return (
              Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              t[e]
            );
          }
          try {
            u({}, "");
          } catch (t) {
            u = function (t, e, r) {
              return (t[e] = r);
            };
          }
          function l(t, e, r, n) {
            var i = e && e.prototype instanceof y ? e : y,
              o = Object.create(i.prototype),
              a = new A(n || []);
            return (
              (o._invoke = (function (t, e, r) {
                var n = f;
                return function (i, o) {
                  if (n === p) throw new Error("Generator is already running");
                  if (n === d) {
                    if ("throw" === i) throw o;
                    return P();
                  }
                  for (r.method = i, r.arg = o; ; ) {
                    var a = r.delegate;
                    if (a) {
                      var s = k(a, r);
                      if (s) {
                        if (s === g) continue;
                        return s;
                      }
                    }
                    if ("next" === r.method) r.sent = r._sent = r.arg;
                    else if ("throw" === r.method) {
                      if (n === f) throw ((n = d), r.arg);
                      r.dispatchException(r.arg);
                    } else "return" === r.method && r.abrupt("return", r.arg);
                    n = p;
                    var u = h(t, e, r);
                    if ("normal" === u.type) {
                      if (((n = r.done ? d : c), u.arg === g)) continue;
                      return { value: u.arg, done: r.done };
                    }
                    "throw" === u.type &&
                      ((n = d), (r.method = "throw"), (r.arg = u.arg));
                  }
                };
              })(t, r, a)),
              o
            );
          }
          function h(t, e, r) {
            try {
              return { type: "normal", arg: t.call(e, r) };
            } catch (t) {
              return { type: "throw", arg: t };
            }
          }
          t.wrap = l;
          var f = "suspendedStart",
            c = "suspendedYield",
            p = "executing",
            d = "completed",
            g = {};
          function y() {}
          function v() {}
          function b() {}
          var m = {};
          m[o] = function () {
            return this;
          };
          var w = Object.getPrototypeOf,
            x = w && w(w(j([])));
          x && x !== r && n.call(x, o) && (m = x);
          var _ = (b.prototype = y.prototype = Object.create(m));
          function E(t) {
            ["next", "throw", "return"].forEach(function (e) {
              u(t, e, function (t) {
                return this._invoke(e, t);
              });
            });
          }
          function S(t, e) {
            function r(i, o, a, s) {
              var u = h(t[i], t, o);
              if ("throw" !== u.type) {
                var l = u.arg,
                  f = l.value;
                return f && "object" == typeof f && n.call(f, "__await")
                  ? e.resolve(f.__await).then(
                      function (t) {
                        r("next", t, a, s);
                      },
                      function (t) {
                        r("throw", t, a, s);
                      }
                    )
                  : e.resolve(f).then(
                      function (t) {
                        (l.value = t), a(l);
                      },
                      function (t) {
                        return r("throw", t, a, s);
                      }
                    );
              }
              s(u.arg);
            }
            var i;
            this._invoke = function (t, n) {
              function o() {
                return new e(function (e, i) {
                  r(t, n, e, i);
                });
              }
              return (i = i ? i.then(o, o) : o());
            };
          }
          function k(t, r) {
            var n = t.iterator[r.method];
            if (n === e) {
              if (((r.delegate = null), "throw" === r.method)) {
                if (
                  t.iterator.return &&
                  ((r.method = "return"),
                  (r.arg = e),
                  k(t, r),
                  "throw" === r.method)
                )
                  return g;
                (r.method = "throw"),
                  (r.arg = new TypeError(
                    "The iterator does not provide a 'throw' method"
                  ));
              }
              return g;
            }
            var i = h(n, t.iterator, r.arg);
            if ("throw" === i.type)
              return (
                (r.method = "throw"), (r.arg = i.arg), (r.delegate = null), g
              );
            var o = i.arg;
            return o
              ? o.done
                ? ((r[t.resultName] = o.value),
                  (r.next = t.nextLoc),
                  "return" !== r.method && ((r.method = "next"), (r.arg = e)),
                  (r.delegate = null),
                  g)
                : o
              : ((r.method = "throw"),
                (r.arg = new TypeError("iterator result is not an object")),
                (r.delegate = null),
                g);
          }
          function M(t) {
            var e = { tryLoc: t[0] };
            1 in t && (e.catchLoc = t[1]),
              2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
              this.tryEntries.push(e);
          }
          function R(t) {
            var e = t.completion || {};
            (e.type = "normal"), delete e.arg, (t.completion = e);
          }
          function A(t) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              t.forEach(M, this),
              this.reset(!0);
          }
          function j(t) {
            if (t) {
              var r = t[o];
              if (r) return r.call(t);
              if ("function" == typeof t.next) return t;
              if (!isNaN(t.length)) {
                var i = -1,
                  a = function r() {
                    for (; ++i < t.length; )
                      if (n.call(t, i))
                        return (r.value = t[i]), (r.done = !1), r;
                    return (r.value = e), (r.done = !0), r;
                  };
                return (a.next = a);
              }
            }
            return { next: P };
          }
          function P() {
            return { value: e, done: !0 };
          }
          return (
            (v.prototype = _.constructor = b),
            (b.constructor = v),
            (v.displayName = u(b, s, "GeneratorFunction")),
            (t.isGeneratorFunction = function (t) {
              var e = "function" == typeof t && t.constructor;
              return (
                !!e &&
                (e === v || "GeneratorFunction" === (e.displayName || e.name))
              );
            }),
            (t.mark = function (t) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, b)
                  : ((t.__proto__ = b), u(t, s, "GeneratorFunction")),
                (t.prototype = Object.create(_)),
                t
              );
            }),
            (t.awrap = function (t) {
              return { __await: t };
            }),
            E(S.prototype),
            (S.prototype[a] = function () {
              return this;
            }),
            (t.AsyncIterator = S),
            (t.async = function (e, r, n, i, o) {
              void 0 === o && (o = Promise);
              var a = new S(l(e, r, n, i), o);
              return t.isGeneratorFunction(r)
                ? a
                : a.next().then(function (t) {
                    return t.done ? t.value : a.next();
                  });
            }),
            E(_),
            u(_, s, "Generator"),
            (_[o] = function () {
              return this;
            }),
            (_.toString = function () {
              return "[object Generator]";
            }),
            (t.keys = function (t) {
              var e = [];
              for (var r in t) e.push(r);
              return (
                e.reverse(),
                function r() {
                  for (; e.length; ) {
                    var n = e.pop();
                    if (n in t) return (r.value = n), (r.done = !1), r;
                  }
                  return (r.done = !0), r;
                }
              );
            }),
            (t.values = j),
            (A.prototype = {
              constructor: A,
              reset: function (t) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = e),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = e),
                  this.tryEntries.forEach(R),
                  !t)
                )
                  for (var r in this)
                    "t" === r.charAt(0) &&
                      n.call(this, r) &&
                      !isNaN(+r.slice(1)) &&
                      (this[r] = e);
              },
              stop: function () {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ("throw" === t.type) throw t.arg;
                return this.rval;
              },
              dispatchException: function (t) {
                if (this.done) throw t;
                var r = this;
                function i(n, i) {
                  return (
                    (s.type = "throw"),
                    (s.arg = t),
                    (r.next = n),
                    i && ((r.method = "next"), (r.arg = e)),
                    !!i
                  );
                }
                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                  var a = this.tryEntries[o],
                    s = a.completion;
                  if ("root" === a.tryLoc) return i("end");
                  if (a.tryLoc <= this.prev) {
                    var u = n.call(a, "catchLoc"),
                      l = n.call(a, "finallyLoc");
                    if (u && l) {
                      if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                      if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                    } else if (u) {
                      if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                    } else {
                      if (!l)
                        throw new Error(
                          "try statement without catch or finally"
                        );
                      if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (t, e) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var i = this.tryEntries[r];
                  if (
                    i.tryLoc <= this.prev &&
                    n.call(i, "finallyLoc") &&
                    this.prev < i.finallyLoc
                  ) {
                    var o = i;
                    break;
                  }
                }
                o &&
                  ("break" === t || "continue" === t) &&
                  o.tryLoc <= e &&
                  e <= o.finallyLoc &&
                  (o = null);
                var a = o ? o.completion : {};
                return (
                  (a.type = t),
                  (a.arg = e),
                  o
                    ? ((this.method = "next"), (this.next = o.finallyLoc), g)
                    : this.complete(a)
                );
              },
              complete: function (t, e) {
                if ("throw" === t.type) throw t.arg;
                return (
                  "break" === t.type || "continue" === t.type
                    ? (this.next = t.arg)
                    : "return" === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === t.type && e && (this.next = e),
                  g
                );
              },
              finish: function (t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var r = this.tryEntries[e];
                  if (r.finallyLoc === t)
                    return this.complete(r.completion, r.afterLoc), R(r), g;
                }
              },
              catch: function (t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var r = this.tryEntries[e];
                  if (r.tryLoc === t) {
                    var n = r.completion;
                    if ("throw" === n.type) {
                      var i = n.arg;
                      R(r);
                    }
                    return i;
                  }
                }
                throw new Error("illegal catch attempt");
              },
              delegateYield: function (t, r, n) {
                return (
                  (this.delegate = {
                    iterator: j(t),
                    resultName: r,
                    nextLoc: n,
                  }),
                  "next" === this.method && (this.arg = e),
                  g
                );
              },
            }),
            t
          );
        })(t.exports);
        try {
          regeneratorRuntime = e;
        } catch (t) {
          Function("r", "regeneratorRuntime = r")(e);
        }
      },
      9509: (t, e, r) => {
        var n = r(1664),
          i = n.Buffer;
        function o(t, e) {
          for (var r in t) e[r] = t[r];
        }
        function a(t, e, r) {
          return i(t, e, r);
        }
        i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow
          ? (t.exports = n)
          : (o(n, e), (e.Buffer = a)),
          (a.prototype = Object.create(i.prototype)),
          o(i, a),
          (a.from = function (t, e, r) {
            if ("number" == typeof t)
              throw new TypeError("Argument must not be a number");
            return i(t, e, r);
          }),
          (a.alloc = function (t, e, r) {
            if ("number" != typeof t)
              throw new TypeError("Argument must be a number");
            var n = i(t);
            return (
              void 0 !== e
                ? "string" == typeof r
                  ? n.fill(e, r)
                  : n.fill(e)
                : n.fill(0),
              n
            );
          }),
          (a.allocUnsafe = function (t) {
            if ("number" != typeof t)
              throw new TypeError("Argument must be a number");
            return i(t);
          }),
          (a.allocUnsafeSlow = function (t) {
            if ("number" != typeof t)
              throw new TypeError("Argument must be a number");
            return n.SlowBuffer(t);
          });
      },
      6547: (t, e, r) => {
        var n = r(8043);
        function i(t, e, r) {
          (t =
            t ||
            function (t) {
              this.queue(t);
            }),
            (e =
              e ||
              function () {
                this.queue(null);
              });
          var i = !1,
            o = !1,
            a = [],
            s = !1,
            u = new n();
          function l() {
            for (; a.length && !u.paused; ) {
              var t = a.shift();
              if (null === t) return u.emit("end");
              u.emit("data", t);
            }
          }
          function h() {
            (u.writable = !1),
              e.call(u),
              !u.readable && u.autoDestroy && u.destroy();
          }
          return (
            (u.readable = u.writable = !0),
            (u.paused = !1),
            (u.autoDestroy = !(r && !1 === r.autoDestroy)),
            (u.write = function (e) {
              return t.call(this, e), !u.paused;
            }),
            (u.queue = u.push =
              function (t) {
                return s || (null === t && (s = !0), a.push(t), l()), u;
              }),
            u.on("end", function () {
              (u.readable = !1),
                !u.writable &&
                  u.autoDestroy &&
                  process.nextTick(function () {
                    u.destroy();
                  });
            }),
            (u.end = function (t) {
              if (!i) return (i = !0), arguments.length && u.write(t), h(), u;
            }),
            (u.destroy = function () {
              if (!o)
                return (
                  (o = !0),
                  (i = !0),
                  (a.length = 0),
                  (u.writable = u.readable = !1),
                  u.emit("close"),
                  u
                );
            }),
            (u.pause = function () {
              if (!u.paused) return (u.paused = !0), u;
            }),
            (u.resume = function () {
              return (
                u.paused && ((u.paused = !1), u.emit("resume")),
                l(),
                u.paused || u.emit("drain"),
                u
              );
            }),
            u
          );
        }
        (t.exports = i), (i.through = i);
      },
      8706: (t) => {
        "use strict";
        t.exports = function (t, e, r) {
          return 0 === t.length
            ? t
            : e
            ? (r || t.sort(e),
              (function (t, e) {
                for (
                  var r = 1, n = t.length, i = t[0], o = t[0], a = 1;
                  a < n;
                  ++a
                )
                  if (((o = i), e((i = t[a]), o))) {
                    if (a === r) {
                      r++;
                      continue;
                    }
                    t[r++] = i;
                  }
                return (t.length = r), t;
              })(t, e))
            : (r || t.sort(),
              (function (t) {
                for (
                  var e = 1, r = t.length, n = t[0], i = t[0], o = 1;
                  o < r;
                  ++o, i = n
                )
                  if (((i = n), (n = t[o]) !== i)) {
                    if (o === e) {
                      e++;
                      continue;
                    }
                    t[e++] = n;
                  }
                return (t.length = e), t;
              })(t));
        };
      },
      1875: (t, e, r) => {
        "use strict";
        var n = r(8908),
          i = r(7376),
          o = r(4947),
          a = r(7529);
        function s(t, e, r) {
          var n = t;
          return (
            i(e)
              ? ((r = e), "string" == typeof t && (n = { uri: t }))
              : (n = a(e, { uri: t })),
            (n.callback = r),
            n
          );
        }
        function u(t, e, r) {
          return l((e = s(t, e, r)));
        }
        function l(t) {
          if (void 0 === t.callback)
            throw new Error("callback argument missing");
          var e = !1,
            r = function (r, n, i) {
              e || ((e = !0), t.callback(r, n, i));
            };
          function n() {
            var t = void 0;
            if (
              ((t = h.response
                ? h.response
                : h.responseText ||
                  (function (t) {
                    try {
                      if ("document" === t.responseType) return t.responseXML;
                      var e =
                        t.responseXML &&
                        "parsererror" ===
                          t.responseXML.documentElement.nodeName;
                      if ("" === t.responseType && !e) return t.responseXML;
                    } catch (t) {}
                    return null;
                  })(h)),
              v)
            )
              try {
                t = JSON.parse(t);
              } catch (t) {}
            return t;
          }
          function i(t) {
            return (
              clearTimeout(f),
              t instanceof Error ||
                (t = new Error("" + (t || "Unknown XMLHttpRequest Error"))),
              (t.statusCode = 0),
              r(t, b)
            );
          }
          function a() {
            if (!l) {
              var e;
              clearTimeout(f),
                (e =
                  t.useXDR && void 0 === h.status
                    ? 200
                    : 1223 === h.status
                    ? 204
                    : h.status);
              var i = b,
                a = null;
              return (
                0 !== e
                  ? ((i = {
                      body: n(),
                      statusCode: e,
                      method: p,
                      headers: {},
                      url: c,
                      rawRequest: h,
                    }),
                    h.getAllResponseHeaders &&
                      (i.headers = o(h.getAllResponseHeaders())))
                  : (a = new Error("Internal XMLHttpRequest Error")),
                r(a, i, i.body)
              );
            }
          }
          var s,
            l,
            h = t.xhr || null;
          h ||
            (h =
              t.cors || t.useXDR
                ? new u.XDomainRequest()
                : new u.XMLHttpRequest());
          var f,
            c = (h.url = t.uri || t.url),
            p = (h.method = t.method || "GET"),
            d = t.body || t.data,
            g = (h.headers = t.headers || {}),
            y = !!t.sync,
            v = !1,
            b = {
              body: void 0,
              headers: {},
              statusCode: 0,
              method: p,
              url: c,
              rawRequest: h,
            };
          if (
            ("json" in t &&
              !1 !== t.json &&
              ((v = !0),
              g.accept || g.Accept || (g.Accept = "application/json"),
              "GET" !== p &&
                "HEAD" !== p &&
                (g["content-type"] ||
                  g["Content-Type"] ||
                  (g["Content-Type"] = "application/json"),
                (d = JSON.stringify(!0 === t.json ? d : t.json)))),
            (h.onreadystatechange = function () {
              4 === h.readyState && setTimeout(a, 0);
            }),
            (h.onload = a),
            (h.onerror = i),
            (h.onprogress = function () {}),
            (h.onabort = function () {
              l = !0;
            }),
            (h.ontimeout = i),
            h.open(p, c, !y, t.username, t.password),
            y || (h.withCredentials = !!t.withCredentials),
            !y &&
              t.timeout > 0 &&
              (f = setTimeout(function () {
                if (!l) {
                  (l = !0), h.abort("timeout");
                  var t = new Error("XMLHttpRequest timeout");
                  (t.code = "ETIMEDOUT"), i(t);
                }
              }, t.timeout)),
            h.setRequestHeader)
          )
            for (s in g) g.hasOwnProperty(s) && h.setRequestHeader(s, g[s]);
          else if (
            t.headers &&
            !(function (t) {
              for (var e in t) if (t.hasOwnProperty(e)) return !1;
              return !0;
            })(t.headers)
          )
            throw new Error(
              "Headers cannot be set on an XDomainRequest object"
            );
          return (
            "responseType" in t && (h.responseType = t.responseType),
            "beforeSend" in t &&
              "function" == typeof t.beforeSend &&
              t.beforeSend(h),
            h.send(d || null),
            h
          );
        }
        (t.exports = u),
          (t.exports.default = u),
          (u.XMLHttpRequest = n.XMLHttpRequest || function () {}),
          (u.XDomainRequest =
            "withCredentials" in new u.XMLHttpRequest()
              ? u.XMLHttpRequest
              : n.XDomainRequest),
          (function (t, e) {
            for (var r = 0; r < t.length; r++) e(t[r]);
          })(["get", "put", "post", "patch", "head", "delete"], function (t) {
            u["delete" === t ? "del" : t] = function (e, r, n) {
              return ((r = s(e, r, n)).method = t.toUpperCase()), l(r);
            };
          });
      },
      7529: (t) => {
        t.exports = function () {
          for (var t = {}, r = 0; r < arguments.length; r++) {
            var n = arguments[r];
            for (var i in n) e.call(n, i) && (t[i] = n[i]);
          }
          return t;
        };
        var e = Object.prototype.hasOwnProperty;
      },
      1758: () => {},
    },
    e = {};
  function r(n) {
    if (e[n]) return e[n].exports;
    var i = (e[n] = { exports: {} });
    return t[n].call(i.exports, i, i.exports, r), i.exports;
  }
  return (
    (r.n = (t) => {
      var e = t && t.__esModule ? () => t.default : () => t;
      return r.d(e, { a: e }), e;
    }),
    (r.d = (t, e) => {
      for (var n in e)
        r.o(e, n) &&
          !r.o(t, n) &&
          Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
    }),
    (r.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (t) {
        if ("object" == typeof window) return window;
      }
    })()),
    (r.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    r(7722)
  );
})().default;
export default ThreeGeo;
=======
var ThreeGeo;ThreeGeo=(()=>{var t={5550:t=>{"use strict";function e(t,e){this.x=t,this.y=e}t.exports=e,e.prototype={clone:function(){return new e(this.x,this.y)},add:function(t){return this.clone()._add(t)},sub:function(t){return this.clone()._sub(t)},multByPoint:function(t){return this.clone()._multByPoint(t)},divByPoint:function(t){return this.clone()._divByPoint(t)},mult:function(t){return this.clone()._mult(t)},div:function(t){return this.clone()._div(t)},rotate:function(t){return this.clone()._rotate(t)},rotateAround:function(t,e){return this.clone()._rotateAround(t,e)},matMult:function(t){return this.clone()._matMult(t)},unit:function(){return this.clone()._unit()},perp:function(){return this.clone()._perp()},round:function(){return this.clone()._round()},mag:function(){return Math.sqrt(this.x*this.x+this.y*this.y)},equals:function(t){return this.x===t.x&&this.y===t.y},dist:function(t){return Math.sqrt(this.distSqr(t))},distSqr:function(t){var e=t.x-this.x,r=t.y-this.y;return e*e+r*r},angle:function(){return Math.atan2(this.y,this.x)},angleTo:function(t){return Math.atan2(this.y-t.y,this.x-t.x)},angleWith:function(t){return this.angleWithSep(t.x,t.y)},angleWithSep:function(t,e){return Math.atan2(this.x*e-this.y*t,this.x*t+this.y*e)},_matMult:function(t){var e=t[0]*this.x+t[1]*this.y,r=t[2]*this.x+t[3]*this.y;return this.x=e,this.y=r,this},_add:function(t){return this.x+=t.x,this.y+=t.y,this},_sub:function(t){return this.x-=t.x,this.y-=t.y,this},_mult:function(t){return this.x*=t,this.y*=t,this},_div:function(t){return this.x/=t,this.y/=t,this},_multByPoint:function(t){return this.x*=t.x,this.y*=t.y,this},_divByPoint:function(t){return this.x/=t.x,this.y/=t.y,this},_unit:function(){return this._div(this.mag()),this},_perp:function(){var t=this.y;return this.y=this.x,this.x=-t,this},_rotate:function(t){var e=Math.cos(t),r=Math.sin(t),n=e*this.x-r*this.y,i=r*this.x+e*this.y;return this.x=n,this.y=i,this},_rotateAround:function(t,e){var r=Math.cos(t),n=Math.sin(t),i=e.x+r*(this.x-e.x)-n*(this.y-e.y),o=e.y+n*(this.x-e.x)+r*(this.y-e.y);return this.x=i,this.y=o,this},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}},e.convert=function(t){return t instanceof e?t:Array.isArray(t)?new e(t[0],t[1]):t}},3673:(t,e)=>{var r=function(){var t={},e=Math.PI/180,r=180/Math.PI,n=6378137,i=20037508.342789244;function o(t){return Number(t)===t&&t%1!=0}function a(e){if(e=e||{},this.size=e.size||256,!t[this.size]){var r=this.size,n=t[this.size]={};n.Bc=[],n.Cc=[],n.zc=[],n.Ac=[];for(var i=0;i<30;i++)n.Bc.push(r/360),n.Cc.push(r/(2*Math.PI)),n.zc.push(r/2),n.Ac.push(r),r*=2}this.Bc=t[this.size].Bc,this.Cc=t[this.size].Cc,this.zc=t[this.size].zc,this.Ac=t[this.size].Ac}return a.prototype.px=function(t,r){if(o(r)){var n=this.size*Math.pow(2,r),i=n/2,a=n/360,s=n/(2*Math.PI),u=n,f=Math.min(Math.max(Math.sin(e*t[1]),-.9999),.9999);return(l=i+t[0]*a)>u&&(l=u),(h=i+.5*Math.log((1+f)/(1-f))*-s)>u&&(h=u),[l,h]}i=this.zc[r],f=Math.min(Math.max(Math.sin(e*t[1]),-.9999),.9999);var l=Math.round(i+t[0]*this.Bc[r]),h=Math.round(i+.5*Math.log((1+f)/(1-f))*-this.Cc[r]);return l>this.Ac[r]&&(l=this.Ac[r]),h>this.Ac[r]&&(h=this.Ac[r]),[l,h]},a.prototype.ll=function(t,e){if(o(e)){var n=this.size*Math.pow(2,e),i=n/360,a=n/(2*Math.PI),s=n/2,u=(t[1]-s)/-a;return[(t[0]-s)/i,r*(2*Math.atan(Math.exp(u))-.5*Math.PI)]}u=(t[1]-this.zc[e])/-this.Cc[e];return[(t[0]-this.zc[e])/this.Bc[e],r*(2*Math.atan(Math.exp(u))-.5*Math.PI)]},a.prototype.bbox=function(t,e,r,n,i){n&&(e=Math.pow(2,r)-1-e);var o=[t*this.size,(+e+1)*this.size],a=[(+t+1)*this.size,e*this.size],s=this.ll(o,r).concat(this.ll(a,r));return"900913"===i?this.convert(s,"900913"):s},a.prototype.xyz=function(t,e,r,n){"900913"===n&&(t=this.convert(t,"WGS84"));var i=[t[0],t[1]],o=[t[2],t[3]],a=this.px(i,e),s=this.px(o,e),u=[Math.floor(a[0]/this.size),Math.floor((s[0]-1)/this.size)],f=[Math.floor(s[1]/this.size),Math.floor((a[1]-1)/this.size)],l={minX:Math.min.apply(Math,u)<0?0:Math.min.apply(Math,u),minY:Math.min.apply(Math,f)<0?0:Math.min.apply(Math,f),maxX:Math.max.apply(Math,u),maxY:Math.max.apply(Math,f)};if(r){var h={minY:Math.pow(2,e)-1-l.maxY,maxY:Math.pow(2,e)-1-l.minY};l.minY=h.minY,l.maxY=h.maxY}return l},a.prototype.convert=function(t,e){return"900913"===e?this.forward(t.slice(0,2)).concat(this.forward(t.slice(2,4))):this.inverse(t.slice(0,2)).concat(this.inverse(t.slice(2,4)))},a.prototype.forward=function(t){var r=[n*t[0]*e,n*Math.log(Math.tan(.25*Math.PI+.5*t[1]*e))];return r[0]>i&&(r[0]=i),r[0]<-i&&(r[0]=-i),r[1]>i&&(r[1]=i),r[1]<-i&&(r[1]=-i),r},a.prototype.inverse=function(t){return[t[0]*r/n,(.5*Math.PI-2*Math.atan(Math.exp(-t[1]/n)))*r]},a}();t.exports=r},7701:(t,e,r)=>{"use strict";var n=r(2768);function i(t){return{type:"Feature",geometry:n.tileToGeoJSON(t),properties:{}}}function o(t,e){var r,i,o=t.coordinates,s=e.max_zoom,h={},c=[];if("Point"===t.type)return[n.pointToTile(o[0],o[1],s)];if("MultiPoint"===t.type)for(r=0;r<o.length;r++)h[l((i=n.pointToTile(o[r][0],o[r][1],s))[0],i[1],i[2])]=!0;else if("LineString"===t.type)u(h,o,s);else if("MultiLineString"===t.type)for(r=0;r<o.length;r++)u(h,o[r],s);else if("Polygon"===t.type)a(h,c,o,s);else{if("MultiPolygon"!==t.type)throw new Error("Geometry type not implemented");for(r=0;r<o.length;r++)a(h,c,o[r],s)}if(e.min_zoom!==s){var p=c.length;for(f(h,c),r=0;r<p;r++){var d=c[r];h[l(d[0],d[1],d[2])]=!0}return function(t,e,r){for(var n=[],i=r.max_zoom;i>r.min_zoom;i--){for(var o={},a=[],s=0;s<e.length;s++){var u=e[s];if(u[0]%2==0&&u[1]%2==0){var f=l(u[0]+1,u[1],i),h=l(u[0],u[1]+1,i),c=l(u[0]+1,u[1]+1,i);if(t[f]&&t[h]&&t[c]){t[l(u[0],u[1],u[2])]=!1,t[f]=!1,t[h]=!1,t[c]=!1;var p=[u[0]/2,u[1]/2,i-1];i-1===r.min_zoom?n.push(p):(o[l(u[0]/2,u[1]/2,i-1)]=!0,a.push(p))}}}for(s=0;s<e.length;s++)t[l((u=e[s])[0],u[1],u[2])]&&n.push(u);t=o,e=a}return n}(h,c,e)}return f(h,c),c}function a(t,e,r,n){for(var i=[],o=0;o<r.length;o++){var a=[];u(t,r[o],n,a);for(var f=0,h=a.length,c=h-1;f<h;c=f++){var p=(f+1)%h,d=a[f][1];(d>a[c][1]||d>a[p][1])&&(d<a[c][1]||d<a[p][1])&&d!==a[p][1]&&i.push(a[f])}}for(i.sort(s),o=0;o<i.length;o+=2){d=i[o][1];for(var y=i[o][0]+1;y<i[o+1][0];y++){t[l(y,d,n)]||e.push([y,d,n])}}}function s(t,e){return t[1]-e[1]||t[0]-e[0]}function u(t,e,r,i){for(var o,a,s=0;s<e.length-1;s++){var u=n.pointToTileFraction(e[s][0],e[s][1],r),f=n.pointToTileFraction(e[s+1][0],e[s+1][1],r),h=u[0],c=u[1],p=f[0]-h,d=f[1]-c;if(0!==d||0!==p){var y=p>0?1:-1,g=d>0?1:-1,v=Math.floor(h),b=Math.floor(c),m=0===p?1/0:Math.abs(((p>0?1:0)+v-h)/p),w=0===d?1/0:Math.abs(((d>0?1:0)+b-c)/d),x=Math.abs(y/p),_=Math.abs(g/d);for(v===o&&b===a||(t[l(v,b,r)]=!0,i&&b!==a&&i.push([v,b]),o=v,a=b);m<1||w<1;)m<w?(m+=x,v+=y):(w+=_,b+=g),t[l(v,b,r)]=!0,i&&b!==a&&i.push([v,b]),o=v,a=b}}i&&b===i[0][1]&&i.pop()}function f(t,e){for(var r,n,i,o,a,s=Object.keys(t),u=0;u<s.length;u++)e.push((r=+s[u],n=void 0,i=void 0,o=void 0,a=void 0,void 0,[a=(o=(r-(n=r%32))/32)%(i=2*(1<<n)),(o-a)/i%i,n]))}function l(t,e,r){return 32*(2*(1<<r)*e+t)+r}e.Sv=o},2768:t=>{"use strict";var e=Math.PI/180,r=180/Math.PI;function n(t){var e=i(t[0]+1,t[2]);return[i(t[0],t[2]),o(t[1]+1,t[2]),e,o(t[1],t[2])]}function i(t,e){return t/Math.pow(2,e)*360-180}function o(t,e){var n=Math.PI-2*Math.PI*t/Math.pow(2,e);return r*Math.atan(.5*(Math.exp(n)-Math.exp(-n)))}function a(t,e,r){var n=c(t,e,r);return n[0]=Math.floor(n[0]),n[1]=Math.floor(n[1]),n}function s(t){return[[2*t[0],2*t[1],t[2]+1],[2*t[0]+1,2*t[1],t[2]+1],[2*t[0]+1,2*t[1]+1,t[2]+1],[2*t[0],2*t[1]+1,t[2]+1]]}function u(t){return[t[0]>>1,t[1]>>1,t[2]-1]}function f(t){return s(u(t))}function l(t,e){for(var r=0;r<t.length;r++)if(h(t[r],e))return!0;return!1}function h(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]}function c(t,r,n){var i=Math.sin(r*e),o=Math.pow(2,n),a=o*(t/360+.5);return(a%=o)<0&&(a+=o),[a,o*(.5-.25*Math.log((1+i)/(1-i))/Math.PI),n]}t.exports={tileToGeoJSON:function(t){var e=n(t);return{type:"Polygon",coordinates:[[[e[0],e[3]],[e[0],e[1]],[e[2],e[1]],[e[2],e[3]],[e[0],e[3]]]]}},tileToBBOX:n,getChildren:s,getParent:u,getSiblings:f,hasTile:l,hasSiblings:function(t,e){for(var r=f(t),n=0;n<r.length;n++)if(!l(e,r[n]))return!1;return!0},tilesEqual:h,tileToQuadkey:function(t){for(var e="",r=t[2];r>0;r--){var n=0,i=1<<r-1;0!=(t[0]&i)&&n++,0!=(t[1]&i)&&(n+=2),e+=n.toString()}return e},quadkeyToTile:function(t){for(var e=0,r=0,n=t.length,i=n;i>0;i--){var o=1<<i-1,a=+t[n-i];1===a&&(e|=o),2===a&&(r|=o),3===a&&(e|=o,r|=o)}return[e,r,n]},pointToTile:a,bboxToTile:function(t){var e=a(t[0],t[1],32),r=a(t[2],t[3],32),n=[e[0],e[1],r[0],r[1]],i=function(t){for(var e=28,r=0;r<e;r++){var n=1<<32-(r+1);if((t[0]&n)!=(t[2]&n)||(t[1]&n)!=(t[3]&n))return r}return e}(n);return 0===i?[0,0,0]:[n[0]>>>32-i,n[1]>>>32-i,i]},pointToTileFraction:c}},8929:(t,e,r)=>{t.exports.VectorTile=r(2779),r(6024),r(9701)},2779:(t,e,r)=>{"use strict";var n=r(9701);function i(t,e,r){if(3===t){var i=new n(r,r.readVarint()+r.pos);i.length&&(e[i.name]=i)}}t.exports=function(t,e){this.layers=t.readFields(i,{},e)}},6024:(t,e,r)=>{"use strict";var n=r(5550);function i(t,e,r,n,i){this.properties={},this.extent=r,this.type=0,this._pbf=t,this._geometry=-1,this._keys=n,this._values=i,t.readFields(o,this,e)}function o(t,e,r){1==t?e.id=r.readVarint():2==t?function(t,e){var r=t.readVarint()+t.pos;for(;t.pos<r;){var n=e._keys[t.readVarint()],i=e._values[t.readVarint()];e.properties[n]=i}}(r,e):3==t?e.type=r.readVarint():4==t&&(e._geometry=r.pos)}function a(t){for(var e,r,n=0,i=0,o=t.length,a=o-1;i<o;a=i++)e=t[i],n+=((r=t[a]).x-e.x)*(e.y+r.y);return n}t.exports=i,i.types=["Unknown","Point","LineString","Polygon"],i.prototype.loadGeometry=function(){var t=this._pbf;t.pos=this._geometry;for(var e,r=t.readVarint()+t.pos,i=1,o=0,a=0,s=0,u=[];t.pos<r;){if(o<=0){var f=t.readVarint();i=7&f,o=f>>3}if(o--,1===i||2===i)a+=t.readSVarint(),s+=t.readSVarint(),1===i&&(e&&u.push(e),e=[]),e.push(new n(a,s));else{if(7!==i)throw new Error("unknown command "+i);e&&e.push(e[0].clone())}}return e&&u.push(e),u},i.prototype.bbox=function(){var t=this._pbf;t.pos=this._geometry;for(var e=t.readVarint()+t.pos,r=1,n=0,i=0,o=0,a=1/0,s=-1/0,u=1/0,f=-1/0;t.pos<e;){if(n<=0){var l=t.readVarint();r=7&l,n=l>>3}if(n--,1===r||2===r)(i+=t.readSVarint())<a&&(a=i),i>s&&(s=i),(o+=t.readSVarint())<u&&(u=o),o>f&&(f=o);else if(7!==r)throw new Error("unknown command "+r)}return[a,u,s,f]},i.prototype.toGeoJSON=function(t,e,r){var n,o,s=this.extent*Math.pow(2,r),u=this.extent*t,f=this.extent*e,l=this.loadGeometry(),h=i.types[this.type];function c(t){for(var e=0;e<t.length;e++){var r=t[e],n=180-360*(r.y+f)/s;t[e]=[360*(r.x+u)/s-180,360/Math.PI*Math.atan(Math.exp(n*Math.PI/180))-90]}}switch(this.type){case 1:var p=[];for(n=0;n<l.length;n++)p[n]=l[n][0];c(l=p);break;case 2:for(n=0;n<l.length;n++)c(l[n]);break;case 3:for(l=function(t){var e=t.length;if(e<=1)return[t];for(var r,n,i=[],o=0;o<e;o++){var s=a(t[o]);0!==s&&(void 0===n&&(n=s<0),n===s<0?(r&&i.push(r),r=[t[o]]):r.push(t[o]))}r&&i.push(r);return i}(l),n=0;n<l.length;n++)for(o=0;o<l[n].length;o++)c(l[n][o])}1===l.length?l=l[0]:h="Multi"+h;var d={type:"Feature",geometry:{type:h,coordinates:l},properties:this.properties};return"id"in this&&(d.id=this.id),d}},9701:(t,e,r)=>{"use strict";var n=r(6024);function i(t,e){this.version=1,this.name=null,this.extent=4096,this.length=0,this._pbf=t,this._keys=[],this._values=[],this._features=[],t.readFields(o,this,e),this.length=this._features.length}function o(t,e,r){15===t?e.version=r.readVarint():1===t?e.name=r.readString():5===t?e.extent=r.readVarint():2===t?e._features.push(r.pos):3===t?e._keys.push(r.readString()):4===t&&e._values.push(function(t){var e=null,r=t.readVarint()+t.pos;for(;t.pos<r;){var n=t.readVarint()>>3;e=1===n?t.readString():2===n?t.readFloat():3===n?t.readDouble():4===n?t.readVarint64():5===n?t.readVarint():6===n?t.readSVarint():7===n?t.readBoolean():null}return e}(r))}t.exports=i,i.prototype.feature=function(t){if(t<0||t>=this._features.length)throw new Error("feature index out of bounds");this._pbf.pos=this._features[t];var e=this._pbf.readVarint()+this._pbf.pos;return new n(this._pbf,e,this.extent,this._keys,this._values)}},6239:(t,e,r)=>{"use strict";var n=r(5081);function i(){this.argTypes=[],this.shimArgs=[],this.arrayArgs=[],this.arrayBlockIndices=[],this.scalarArgs=[],this.offsetArgs=[],this.offsetArgIndex=[],this.indexArgs=[],this.shapeArgs=[],this.funcName="",this.pre=null,this.body=null,this.post=null,this.debug=!1}t.exports=function(t){var e=new i;e.pre=t.pre,e.body=t.body,e.post=t.post;var r=t.args.slice(0);e.argTypes=r;for(var o=0;o<r.length;++o){var a=r[o];if("array"===a||"object"==typeof a&&a.blockIndices){if(e.argTypes[o]="array",e.arrayArgs.push(o),e.arrayBlockIndices.push(a.blockIndices?a.blockIndices:0),e.shimArgs.push("array"+o),o<e.pre.args.length&&e.pre.args[o].count>0)throw new Error("cwise: pre() block may not reference array args");if(o<e.post.args.length&&e.post.args[o].count>0)throw new Error("cwise: post() block may not reference array args")}else if("scalar"===a)e.scalarArgs.push(o),e.shimArgs.push("scalar"+o);else if("index"===a){if(e.indexArgs.push(o),o<e.pre.args.length&&e.pre.args[o].count>0)throw new Error("cwise: pre() block may not reference array index");if(o<e.body.args.length&&e.body.args[o].lvalue)throw new Error("cwise: body() block may not write to array index");if(o<e.post.args.length&&e.post.args[o].count>0)throw new Error("cwise: post() block may not reference array index")}else if("shape"===a){if(e.shapeArgs.push(o),o<e.pre.args.length&&e.pre.args[o].lvalue)throw new Error("cwise: pre() block may not write to array shape");if(o<e.body.args.length&&e.body.args[o].lvalue)throw new Error("cwise: body() block may not write to array shape");if(o<e.post.args.length&&e.post.args[o].lvalue)throw new Error("cwise: post() block may not write to array shape")}else{if("object"!=typeof a||!a.offset)throw new Error("cwise: Unknown argument type "+r[o]);e.argTypes[o]="offset",e.offsetArgs.push({array:a.array,offset:a.offset}),e.offsetArgIndex.push(o)}}if(e.arrayArgs.length<=0)throw new Error("cwise: No array arguments specified");if(e.pre.args.length>r.length)throw new Error("cwise: Too many arguments in pre() block");if(e.body.args.length>r.length)throw new Error("cwise: Too many arguments in body() block");if(e.post.args.length>r.length)throw new Error("cwise: Too many arguments in post() block");return e.debug=!!t.printCode||!!t.debug,e.funcName=t.funcName||"cwise",e.blockSize=t.blockSize||64,n(e)}},1984:(t,e,r)=>{"use strict";var n=r(8706);function i(t,e,r){var n,i,o=t.length,a=e.arrayArgs.length,s=e.indexArgs.length>0,u=[],f=[],l=0,h=0;for(n=0;n<o;++n)f.push(["i",n,"=0"].join(""));for(i=0;i<a;++i)for(n=0;n<o;++n)h=l,l=t[n],0===n?f.push(["d",i,"s",n,"=t",i,"p",l].join("")):f.push(["d",i,"s",n,"=(t",i,"p",l,"-s",h,"*t",i,"p",h,")"].join(""));for(f.length>0&&u.push("var "+f.join(",")),n=o-1;n>=0;--n)l=t[n],u.push(["for(i",n,"=0;i",n,"<s",l,";++i",n,"){"].join(""));for(u.push(r),n=0;n<o;++n){for(h=l,l=t[n],i=0;i<a;++i)u.push(["p",i,"+=d",i,"s",n].join(""));s&&(n>0&&u.push(["index[",h,"]-=s",h].join("")),u.push(["++index[",l,"]"].join(""))),u.push("}")}return u.join("\n")}function o(t,e,r){for(var n=t.body,i=[],o=[],a=0;a<t.args.length;++a){var s=t.args[a];if(!(s.count<=0)){var u=new RegExp(s.name,"g"),f="",l=e.arrayArgs.indexOf(a);switch(e.argTypes[a]){case"offset":var h=e.offsetArgIndex.indexOf(a);l=e.offsetArgs[h].array,f="+q"+h;case"array":f="p"+l+f;var c="l"+a,p="a"+l;if(0===e.arrayBlockIndices[l])1===s.count?"generic"===r[l]?s.lvalue?(i.push(["var ",c,"=",p,".get(",f,")"].join("")),n=n.replace(u,c),o.push([p,".set(",f,",",c,")"].join(""))):n=n.replace(u,[p,".get(",f,")"].join("")):n=n.replace(u,[p,"[",f,"]"].join("")):"generic"===r[l]?(i.push(["var ",c,"=",p,".get(",f,")"].join("")),n=n.replace(u,c),s.lvalue&&o.push([p,".set(",f,",",c,")"].join(""))):(i.push(["var ",c,"=",p,"[",f,"]"].join("")),n=n.replace(u,c),s.lvalue&&o.push([p,"[",f,"]=",c].join("")));else{for(var d=[s.name],y=[f],g=0;g<Math.abs(e.arrayBlockIndices[l]);g++)d.push("\\s*\\[([^\\]]+)\\]"),y.push("$"+(g+1)+"*t"+l+"b"+g);if(u=new RegExp(d.join(""),"g"),f=y.join("+"),"generic"===r[l])throw new Error("cwise: Generic arrays not supported in combination with blocks!");n=n.replace(u,[p,"[",f,"]"].join(""))}break;case"scalar":n=n.replace(u,"Y"+e.scalarArgs.indexOf(a));break;case"index":n=n.replace(u,"index");break;case"shape":n=n.replace(u,"shape")}}}return[i.join("\n"),n,o.join("\n")].join("\n").trim()}function a(t){for(var e=new Array(t.length),r=!0,n=0;n<t.length;++n){var i=t[n],o=i.match(/\d+/);o=o?o[0]:"",0===i.charAt(0)?e[n]="u"+i.charAt(1)+o:e[n]=i.charAt(0)+o,n>0&&(r=r&&e[n]===e[n-1])}return r?e[0]:e.join("")}t.exports=function(t,e){for(var r=e[1].length-Math.abs(t.arrayBlockIndices[0])|0,s=new Array(t.arrayArgs.length),u=new Array(t.arrayArgs.length),f=0;f<t.arrayArgs.length;++f)u[f]=e[2*f],s[f]=e[2*f+1];var l=[],h=[],c=[],p=[],d=[];for(f=0;f<t.arrayArgs.length;++f){t.arrayBlockIndices[f]<0?(c.push(0),p.push(r),l.push(r),h.push(r+t.arrayBlockIndices[f])):(c.push(t.arrayBlockIndices[f]),p.push(t.arrayBlockIndices[f]+r),l.push(0),h.push(t.arrayBlockIndices[f]));for(var y=[],g=0;g<s[f].length;g++)c[f]<=s[f][g]&&s[f][g]<p[f]&&y.push(s[f][g]-c[f]);d.push(y)}var v=["SS"],b=["'use strict'"],m=[];for(g=0;g<r;++g)m.push(["s",g,"=SS[",g,"]"].join(""));for(f=0;f<t.arrayArgs.length;++f){v.push("a"+f),v.push("t"+f),v.push("p"+f);for(g=0;g<r;++g)m.push(["t",f,"p",g,"=t",f,"[",c[f]+g,"]"].join(""));for(g=0;g<Math.abs(t.arrayBlockIndices[f]);++g)m.push(["t",f,"b",g,"=t",f,"[",l[f]+g,"]"].join(""))}for(f=0;f<t.scalarArgs.length;++f)v.push("Y"+f);if(t.shapeArgs.length>0&&m.push("shape=SS.slice(0)"),t.indexArgs.length>0){var w=new Array(r);for(f=0;f<r;++f)w[f]="0";m.push(["index=[",w.join(","),"]"].join(""))}for(f=0;f<t.offsetArgs.length;++f){var x=t.offsetArgs[f],_=[];for(g=0;g<x.offset.length;++g)0!==x.offset[g]&&(1===x.offset[g]?_.push(["t",x.array,"p",g].join("")):_.push([x.offset[g],"*t",x.array,"p",g].join("")));0===_.length?m.push("q"+f+"=0"):m.push(["q",f,"=",_.join("+")].join(""))}var E=n([].concat(t.pre.thisVars).concat(t.body.thisVars).concat(t.post.thisVars));for((m=m.concat(E)).length>0&&b.push("var "+m.join(",")),f=0;f<t.arrayArgs.length;++f)b.push("p"+f+"|=0");t.pre.body.length>3&&b.push(o(t.pre,t,u));var S=o(t.body,t,u),k=function(t){for(var e=0,r=t[0].length;e<r;){for(var n=1;n<t.length;++n)if(t[n][e]!==t[0][e])return e;++e}return e}(d);k<r?b.push(function(t,e,r,n){for(var o=e.length,a=r.arrayArgs.length,s=r.blockSize,u=r.indexArgs.length>0,f=[],l=0;l<a;++l)f.push(["var offset",l,"=p",l].join(""));for(l=t;l<o;++l)f.push(["for(var j"+l+"=SS[",e[l],"]|0;j",l,">0;){"].join("")),f.push(["if(j",l,"<",s,"){"].join("")),f.push(["s",e[l],"=j",l].join("")),f.push(["j",l,"=0"].join("")),f.push(["}else{s",e[l],"=",s].join("")),f.push(["j",l,"-=",s,"}"].join("")),u&&f.push(["index[",e[l],"]=j",l].join(""));for(l=0;l<a;++l){for(var h=["offset"+l],c=t;c<o;++c)h.push(["j",c,"*t",l,"p",e[c]].join(""));f.push(["p",l,"=(",h.join("+"),")"].join(""))}for(f.push(i(e,r,n)),l=t;l<o;++l)f.push("}");return f.join("\n")}(k,d[0],t,S)):b.push(i(d[0],t,S)),t.post.body.length>3&&b.push(o(t.post,t,u)),t.debug&&b.join("\n");var M=[t.funcName||"unnamed","_cwise_loop_",s[0].join("s"),"m",k,a(u)].join("");return new Function(["function ",M,"(",v.join(","),"){",b.join("\n"),"} return ",M].join(""))()}},5081:(t,e,r)=>{"use strict";var n=r(1984);t.exports=function(t){var e=["'use strict'","var CACHED={}"],r=[],i=t.funcName+"_cwise_thunk";e.push(["return function ",i,"(",t.shimArgs.join(","),"){"].join(""));for(var o=[],a=[],s=[["array",t.arrayArgs[0],".shape.slice(",Math.max(0,t.arrayBlockIndices[0]),t.arrayBlockIndices[0]<0?","+t.arrayBlockIndices[0]+")":")"].join("")],u=[],f=[],l=0;l<t.arrayArgs.length;++l){var h=t.arrayArgs[l];r.push(["t",h,"=array",h,".dtype,","r",h,"=array",h,".order"].join("")),o.push("t"+h),o.push("r"+h),a.push("t"+h),a.push("r"+h+".join()"),s.push("array"+h+".data"),s.push("array"+h+".stride"),s.push("array"+h+".offset|0"),l>0&&(u.push("array"+t.arrayArgs[0]+".shape.length===array"+h+".shape.length+"+(Math.abs(t.arrayBlockIndices[0])-Math.abs(t.arrayBlockIndices[l]))),f.push("array"+t.arrayArgs[0]+".shape[shapeIndex+"+Math.max(0,t.arrayBlockIndices[0])+"]===array"+h+".shape[shapeIndex+"+Math.max(0,t.arrayBlockIndices[l])+"]"))}for(t.arrayArgs.length>1&&(e.push("if (!("+u.join(" && ")+")) throw new Error('cwise: Arrays do not all have the same dimensionality!')"),e.push("for(var shapeIndex=array"+t.arrayArgs[0]+".shape.length-"+Math.abs(t.arrayBlockIndices[0])+"; shapeIndex--\x3e0;) {"),e.push("if (!("+f.join(" && ")+")) throw new Error('cwise: Arrays do not all have the same shape!')"),e.push("}")),l=0;l<t.scalarArgs.length;++l)s.push("scalar"+t.scalarArgs[l]);return r.push(["type=[",a.join(","),"].join()"].join("")),r.push("proc=CACHED[type]"),e.push("var "+r.join(",")),e.push(["if(!proc){","CACHED[type]=proc=compile([",o.join(","),"])}","return proc(",s.join(","),")}"].join("")),t.debug&&e.join("\n"),new Function("compile",e.join("\n"))(n.bind(void 0,t))}},858:t=>{t.exports=function(t){if(!/^data\:/i.test(t))throw new TypeError('`uri` does not appear to be a Data URI (must begin with "data:")');var e=(t=t.replace(/\r?\n/g,"")).indexOf(",");if(-1===e||e<=4)throw new TypeError("malformed data: URI");for(var r=t.substring(5,e).split(";"),n=!1,i="US-ASCII",o=0;o<r.length;o++)"base64"==r[o]?n=!0:0==r[o].indexOf("charset=")&&(i=r[o].substring(8));var a=unescape(t.substring(e+1)),s=new Buffer(a,n?"base64":"ascii");return s.type=r[0]||"text/plain",s.charset=i,s}},8197:(t,e)=>{"use strict";e.byteLength=function(t){var e=u(t),r=e[0],n=e[1];return 3*(r+n)/4-n},e.toByteArray=function(t){var e,r,o=u(t),a=o[0],s=o[1],f=new i(function(t,e,r){return 3*(e+r)/4-r}(0,a,s)),l=0,h=s>0?a-4:a;for(r=0;r<h;r+=4)e=n[t.charCodeAt(r)]<<18|n[t.charCodeAt(r+1)]<<12|n[t.charCodeAt(r+2)]<<6|n[t.charCodeAt(r+3)],f[l++]=e>>16&255,f[l++]=e>>8&255,f[l++]=255&e;2===s&&(e=n[t.charCodeAt(r)]<<2|n[t.charCodeAt(r+1)]>>4,f[l++]=255&e);1===s&&(e=n[t.charCodeAt(r)]<<10|n[t.charCodeAt(r+1)]<<4|n[t.charCodeAt(r+2)]>>2,f[l++]=e>>8&255,f[l++]=255&e);return f},e.fromByteArray=function(t){for(var e,n=t.length,i=n%3,o=[],a=16383,s=0,u=n-i;s<u;s+=a)o.push(f(t,s,s+a>u?u:s+a));1===i?(e=t[n-1],o.push(r[e>>2]+r[e<<4&63]+"==")):2===i&&(e=(t[n-2]<<8)+t[n-1],o.push(r[e>>10]+r[e>>4&63]+r[e<<2&63]+"="));return o.join("")};for(var r=[],n=[],i="undefined"!=typeof Uint8Array?Uint8Array:Array,o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a=0,s=o.length;a<s;++a)r[a]=o[a],n[o.charCodeAt(a)]=a;function u(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var r=t.indexOf("=");return-1===r&&(r=e),[r,r===e?0:4-r%4]}function f(t,e,n){for(var i,o,a=[],s=e;s<n;s+=3)i=(t[s]<<16&16711680)+(t[s+1]<<8&65280)+(255&t[s+2]),a.push(r[(o=i)>>18&63]+r[o>>12&63]+r[o>>6&63]+r[63&o]);return a.join("")}n["-".charCodeAt(0)]=62,n["_".charCodeAt(0)]=63},1664:(t,e,r)=>{"use strict";const n=r(8197),i=r(645),o="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;e.Buffer=u,e.SlowBuffer=function(t){+t!=t&&(t=0);return u.alloc(+t)},e.INSPECT_MAX_BYTES=50;const a=2147483647;function s(t){if(t>a)throw new RangeError('The value "'+t+'" is invalid for option "size"');const e=new Uint8Array(t);return Object.setPrototypeOf(e,u.prototype),e}function u(t,e,r){if("number"==typeof t){if("string"==typeof e)throw new TypeError('The "string" argument must be of type string. Received type number');return h(t)}return f(t,e,r)}function f(t,e,r){if("string"==typeof t)return function(t,e){"string"==typeof e&&""!==e||(e="utf8");if(!u.isEncoding(e))throw new TypeError("Unknown encoding: "+e);const r=0|y(t,e);let n=s(r);const i=n.write(t,e);i!==r&&(n=n.slice(0,i));return n}(t,e);if(ArrayBuffer.isView(t))return function(t){if(X(t,Uint8Array)){const e=new Uint8Array(t);return p(e.buffer,e.byteOffset,e.byteLength)}return c(t)}(t);if(null==t)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(X(t,ArrayBuffer)||t&&X(t.buffer,ArrayBuffer))return p(t,e,r);if("undefined"!=typeof SharedArrayBuffer&&(X(t,SharedArrayBuffer)||t&&X(t.buffer,SharedArrayBuffer)))return p(t,e,r);if("number"==typeof t)throw new TypeError('The "value" argument must not be of type number. Received type number');const n=t.valueOf&&t.valueOf();if(null!=n&&n!==t)return u.from(n,e,r);const i=function(t){if(u.isBuffer(t)){const e=0|d(t.length),r=s(e);return 0===r.length||t.copy(r,0,0,e),r}if(void 0!==t.length)return"number"!=typeof t.length||J(t.length)?s(0):c(t);if("Buffer"===t.type&&Array.isArray(t.data))return c(t.data)}(t);if(i)return i;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof t[Symbol.toPrimitive])return u.from(t[Symbol.toPrimitive]("string"),e,r);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}function l(t){if("number"!=typeof t)throw new TypeError('"size" argument must be of type number');if(t<0)throw new RangeError('The value "'+t+'" is invalid for option "size"')}function h(t){return l(t),s(t<0?0:0|d(t))}function c(t){const e=t.length<0?0:0|d(t.length),r=s(e);for(let n=0;n<e;n+=1)r[n]=255&t[n];return r}function p(t,e,r){if(e<0||t.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(r||0))throw new RangeError('"length" is outside of buffer bounds');let n;return n=void 0===e&&void 0===r?new Uint8Array(t):void 0===r?new Uint8Array(t,e):new Uint8Array(t,e,r),Object.setPrototypeOf(n,u.prototype),n}function d(t){if(t>=a)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+a.toString(16)+" bytes");return 0|t}function y(t,e){if(u.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||X(t,ArrayBuffer))return t.byteLength;if("string"!=typeof t)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);const r=t.length,n=arguments.length>2&&!0===arguments[2];if(!n&&0===r)return 0;let i=!1;for(;;)switch(e){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return H(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return Y(t).length;default:if(i)return n?-1:H(t).length;e=(""+e).toLowerCase(),i=!0}}function g(t,e,r){let n=!1;if((void 0===e||e<0)&&(e=0),e>this.length)return"";if((void 0===r||r>this.length)&&(r=this.length),r<=0)return"";if((r>>>=0)<=(e>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return T(this,e,r);case"utf8":case"utf-8":return M(this,e,r);case"ascii":return R(this,e,r);case"latin1":case"binary":return j(this,e,r);case"base64":return k(this,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return P(this,e,r);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}function v(t,e,r){const n=t[e];t[e]=t[r],t[r]=n}function b(t,e,r,n,i){if(0===t.length)return-1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),J(r=+r)&&(r=i?0:t.length-1),r<0&&(r=t.length+r),r>=t.length){if(i)return-1;r=t.length-1}else if(r<0){if(!i)return-1;r=0}if("string"==typeof e&&(e=u.from(e,n)),u.isBuffer(e))return 0===e.length?-1:m(t,e,r,n,i);if("number"==typeof e)return e&=255,"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(t,e,r):Uint8Array.prototype.lastIndexOf.call(t,e,r):m(t,[e],r,n,i);throw new TypeError("val must be string, number or Buffer")}function m(t,e,r,n,i){let o,a=1,s=t.length,u=e.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||e.length<2)return-1;a=2,s/=2,u/=2,r/=2}function f(t,e){return 1===a?t[e]:t.readUInt16BE(e*a)}if(i){let n=-1;for(o=r;o<s;o++)if(f(t,o)===f(e,-1===n?0:o-n)){if(-1===n&&(n=o),o-n+1===u)return n*a}else-1!==n&&(o-=o-n),n=-1}else for(r+u>s&&(r=s-u),o=r;o>=0;o--){let r=!0;for(let n=0;n<u;n++)if(f(t,o+n)!==f(e,n)){r=!1;break}if(r)return o}return-1}function w(t,e,r,n){r=Number(r)||0;const i=t.length-r;n?(n=Number(n))>i&&(n=i):n=i;const o=e.length;let a;for(n>o/2&&(n=o/2),a=0;a<n;++a){const n=parseInt(e.substr(2*a,2),16);if(J(n))return a;t[r+a]=n}return a}function x(t,e,r,n){return $(H(e,t.length-r),t,r,n)}function _(t,e,r,n){return $(function(t){const e=[];for(let r=0;r<t.length;++r)e.push(255&t.charCodeAt(r));return e}(e),t,r,n)}function E(t,e,r,n){return $(Y(e),t,r,n)}function S(t,e,r,n){return $(function(t,e){let r,n,i;const o=[];for(let a=0;a<t.length&&!((e-=2)<0);++a)r=t.charCodeAt(a),n=r>>8,i=r%256,o.push(i),o.push(n);return o}(e,t.length-r),t,r,n)}function k(t,e,r){return 0===e&&r===t.length?n.fromByteArray(t):n.fromByteArray(t.slice(e,r))}function M(t,e,r){r=Math.min(t.length,r);const n=[];let i=e;for(;i<r;){const e=t[i];let o=null,a=e>239?4:e>223?3:e>191?2:1;if(i+a<=r){let r,n,s,u;switch(a){case 1:e<128&&(o=e);break;case 2:r=t[i+1],128==(192&r)&&(u=(31&e)<<6|63&r,u>127&&(o=u));break;case 3:r=t[i+1],n=t[i+2],128==(192&r)&&128==(192&n)&&(u=(15&e)<<12|(63&r)<<6|63&n,u>2047&&(u<55296||u>57343)&&(o=u));break;case 4:r=t[i+1],n=t[i+2],s=t[i+3],128==(192&r)&&128==(192&n)&&128==(192&s)&&(u=(15&e)<<18|(63&r)<<12|(63&n)<<6|63&s,u>65535&&u<1114112&&(o=u))}}null===o?(o=65533,a=1):o>65535&&(o-=65536,n.push(o>>>10&1023|55296),o=56320|1023&o),n.push(o),i+=a}return function(t){const e=t.length;if(e<=A)return String.fromCharCode.apply(String,t);let r="",n=0;for(;n<e;)r+=String.fromCharCode.apply(String,t.slice(n,n+=A));return r}(n)}e.kMaxLength=a,u.TYPED_ARRAY_SUPPORT=function(){try{const t=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(t,e),42===t.foo()}catch(t){return!1}}(),u.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(u.prototype,"parent",{enumerable:!0,get:function(){if(u.isBuffer(this))return this.buffer}}),Object.defineProperty(u.prototype,"offset",{enumerable:!0,get:function(){if(u.isBuffer(this))return this.byteOffset}}),u.poolSize=8192,u.from=function(t,e,r){return f(t,e,r)},Object.setPrototypeOf(u.prototype,Uint8Array.prototype),Object.setPrototypeOf(u,Uint8Array),u.alloc=function(t,e,r){return function(t,e,r){return l(t),t<=0?s(t):void 0!==e?"string"==typeof r?s(t).fill(e,r):s(t).fill(e):s(t)}(t,e,r)},u.allocUnsafe=function(t){return h(t)},u.allocUnsafeSlow=function(t){return h(t)},u.isBuffer=function(t){return null!=t&&!0===t._isBuffer&&t!==u.prototype},u.compare=function(t,e){if(X(t,Uint8Array)&&(t=u.from(t,t.offset,t.byteLength)),X(e,Uint8Array)&&(e=u.from(e,e.offset,e.byteLength)),!u.isBuffer(t)||!u.isBuffer(e))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===e)return 0;let r=t.length,n=e.length;for(let i=0,o=Math.min(r,n);i<o;++i)if(t[i]!==e[i]){r=t[i],n=e[i];break}return r<n?-1:n<r?1:0},u.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},u.concat=function(t,e){if(!Array.isArray(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return u.alloc(0);let r;if(void 0===e)for(e=0,r=0;r<t.length;++r)e+=t[r].length;const n=u.allocUnsafe(e);let i=0;for(r=0;r<t.length;++r){let e=t[r];if(X(e,Uint8Array))i+e.length>n.length?(u.isBuffer(e)||(e=u.from(e)),e.copy(n,i)):Uint8Array.prototype.set.call(n,e,i);else{if(!u.isBuffer(e))throw new TypeError('"list" argument must be an Array of Buffers');e.copy(n,i)}i+=e.length}return n},u.byteLength=y,u.prototype._isBuffer=!0,u.prototype.swap16=function(){const t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let e=0;e<t;e+=2)v(this,e,e+1);return this},u.prototype.swap32=function(){const t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let e=0;e<t;e+=4)v(this,e,e+3),v(this,e+1,e+2);return this},u.prototype.swap64=function(){const t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let e=0;e<t;e+=8)v(this,e,e+7),v(this,e+1,e+6),v(this,e+2,e+5),v(this,e+3,e+4);return this},u.prototype.toString=function(){const t=this.length;return 0===t?"":0===arguments.length?M(this,0,t):g.apply(this,arguments)},u.prototype.toLocaleString=u.prototype.toString,u.prototype.equals=function(t){if(!u.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===u.compare(this,t)},u.prototype.inspect=function(){let t="";const r=e.INSPECT_MAX_BYTES;return t=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(t+=" ... "),"<Buffer "+t+">"},o&&(u.prototype[o]=u.prototype.inspect),u.prototype.compare=function(t,e,r,n,i){if(X(t,Uint8Array)&&(t=u.from(t,t.offset,t.byteLength)),!u.isBuffer(t))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(void 0===e&&(e=0),void 0===r&&(r=t?t.length:0),void 0===n&&(n=0),void 0===i&&(i=this.length),e<0||r>t.length||n<0||i>this.length)throw new RangeError("out of range index");if(n>=i&&e>=r)return 0;if(n>=i)return-1;if(e>=r)return 1;if(this===t)return 0;let o=(i>>>=0)-(n>>>=0),a=(r>>>=0)-(e>>>=0);const s=Math.min(o,a),f=this.slice(n,i),l=t.slice(e,r);for(let t=0;t<s;++t)if(f[t]!==l[t]){o=f[t],a=l[t];break}return o<a?-1:a<o?1:0},u.prototype.includes=function(t,e,r){return-1!==this.indexOf(t,e,r)},u.prototype.indexOf=function(t,e,r){return b(this,t,e,r,!0)},u.prototype.lastIndexOf=function(t,e,r){return b(this,t,e,r,!1)},u.prototype.write=function(t,e,r,n){if(void 0===e)n="utf8",r=this.length,e=0;else if(void 0===r&&"string"==typeof e)n=e,r=this.length,e=0;else{if(!isFinite(e))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e>>>=0,isFinite(r)?(r>>>=0,void 0===n&&(n="utf8")):(n=r,r=void 0)}const i=this.length-e;if((void 0===r||r>i)&&(r=i),t.length>0&&(r<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");let o=!1;for(;;)switch(n){case"hex":return w(this,t,e,r);case"utf8":case"utf-8":return x(this,t,e,r);case"ascii":case"latin1":case"binary":return _(this,t,e,r);case"base64":return E(this,t,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return S(this,t,e,r);default:if(o)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),o=!0}},u.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};const A=4096;function R(t,e,r){let n="";r=Math.min(t.length,r);for(let i=e;i<r;++i)n+=String.fromCharCode(127&t[i]);return n}function j(t,e,r){let n="";r=Math.min(t.length,r);for(let i=e;i<r;++i)n+=String.fromCharCode(t[i]);return n}function T(t,e,r){const n=t.length;(!e||e<0)&&(e=0),(!r||r<0||r>n)&&(r=n);let i="";for(let n=e;n<r;++n)i+=Z[t[n]];return i}function P(t,e,r){const n=t.slice(e,r);let i="";for(let t=0;t<n.length-1;t+=2)i+=String.fromCharCode(n[t]+256*n[t+1]);return i}function I(t,e,r){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+e>r)throw new RangeError("Trying to access beyond buffer length")}function B(t,e,r,n,i,o){if(!u.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>i||e<o)throw new RangeError('"value" argument is out of bounds');if(r+n>t.length)throw new RangeError("Index out of range")}function L(t,e,r,n,i){q(e,n,i,t,r,7);let o=Number(e&BigInt(4294967295));t[r++]=o,o>>=8,t[r++]=o,o>>=8,t[r++]=o,o>>=8,t[r++]=o;let a=Number(e>>BigInt(32)&BigInt(4294967295));return t[r++]=a,a>>=8,t[r++]=a,a>>=8,t[r++]=a,a>>=8,t[r++]=a,r}function O(t,e,r,n,i){q(e,n,i,t,r,7);let o=Number(e&BigInt(4294967295));t[r+7]=o,o>>=8,t[r+6]=o,o>>=8,t[r+5]=o,o>>=8,t[r+4]=o;let a=Number(e>>BigInt(32)&BigInt(4294967295));return t[r+3]=a,a>>=8,t[r+2]=a,a>>=8,t[r+1]=a,a>>=8,t[r]=a,r+8}function C(t,e,r,n,i,o){if(r+n>t.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function N(t,e,r,n,o){return e=+e,r>>>=0,o||C(t,0,r,4),i.write(t,e,r,n,23,4),r+4}function F(t,e,r,n,o){return e=+e,r>>>=0,o||C(t,0,r,8),i.write(t,e,r,n,52,8),r+8}u.prototype.slice=function(t,e){const r=this.length;(t=~~t)<0?(t+=r)<0&&(t=0):t>r&&(t=r),(e=void 0===e?r:~~e)<0?(e+=r)<0&&(e=0):e>r&&(e=r),e<t&&(e=t);const n=this.subarray(t,e);return Object.setPrototypeOf(n,u.prototype),n},u.prototype.readUintLE=u.prototype.readUIntLE=function(t,e,r){t>>>=0,e>>>=0,r||I(t,e,this.length);let n=this[t],i=1,o=0;for(;++o<e&&(i*=256);)n+=this[t+o]*i;return n},u.prototype.readUintBE=u.prototype.readUIntBE=function(t,e,r){t>>>=0,e>>>=0,r||I(t,e,this.length);let n=this[t+--e],i=1;for(;e>0&&(i*=256);)n+=this[t+--e]*i;return n},u.prototype.readUint8=u.prototype.readUInt8=function(t,e){return t>>>=0,e||I(t,1,this.length),this[t]},u.prototype.readUint16LE=u.prototype.readUInt16LE=function(t,e){return t>>>=0,e||I(t,2,this.length),this[t]|this[t+1]<<8},u.prototype.readUint16BE=u.prototype.readUInt16BE=function(t,e){return t>>>=0,e||I(t,2,this.length),this[t]<<8|this[t+1]},u.prototype.readUint32LE=u.prototype.readUInt32LE=function(t,e){return t>>>=0,e||I(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},u.prototype.readUint32BE=u.prototype.readUInt32BE=function(t,e){return t>>>=0,e||I(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},u.prototype.readBigUInt64LE=K((function(t){z(t>>>=0,"offset");const e=this[t],r=this[t+7];void 0!==e&&void 0!==r||G(t,this.length-8);const n=e+256*this[++t]+65536*this[++t]+this[++t]*2**24,i=this[++t]+256*this[++t]+65536*this[++t]+r*2**24;return BigInt(n)+(BigInt(i)<<BigInt(32))})),u.prototype.readBigUInt64BE=K((function(t){z(t>>>=0,"offset");const e=this[t],r=this[t+7];void 0!==e&&void 0!==r||G(t,this.length-8);const n=e*2**24+65536*this[++t]+256*this[++t]+this[++t],i=this[++t]*2**24+65536*this[++t]+256*this[++t]+r;return(BigInt(n)<<BigInt(32))+BigInt(i)})),u.prototype.readIntLE=function(t,e,r){t>>>=0,e>>>=0,r||I(t,e,this.length);let n=this[t],i=1,o=0;for(;++o<e&&(i*=256);)n+=this[t+o]*i;return i*=128,n>=i&&(n-=Math.pow(2,8*e)),n},u.prototype.readIntBE=function(t,e,r){t>>>=0,e>>>=0,r||I(t,e,this.length);let n=e,i=1,o=this[t+--n];for(;n>0&&(i*=256);)o+=this[t+--n]*i;return i*=128,o>=i&&(o-=Math.pow(2,8*e)),o},u.prototype.readInt8=function(t,e){return t>>>=0,e||I(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},u.prototype.readInt16LE=function(t,e){t>>>=0,e||I(t,2,this.length);const r=this[t]|this[t+1]<<8;return 32768&r?4294901760|r:r},u.prototype.readInt16BE=function(t,e){t>>>=0,e||I(t,2,this.length);const r=this[t+1]|this[t]<<8;return 32768&r?4294901760|r:r},u.prototype.readInt32LE=function(t,e){return t>>>=0,e||I(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},u.prototype.readInt32BE=function(t,e){return t>>>=0,e||I(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},u.prototype.readBigInt64LE=K((function(t){z(t>>>=0,"offset");const e=this[t],r=this[t+7];void 0!==e&&void 0!==r||G(t,this.length-8);const n=this[t+4]+256*this[t+5]+65536*this[t+6]+(r<<24);return(BigInt(n)<<BigInt(32))+BigInt(e+256*this[++t]+65536*this[++t]+this[++t]*2**24)})),u.prototype.readBigInt64BE=K((function(t){z(t>>>=0,"offset");const e=this[t],r=this[t+7];void 0!==e&&void 0!==r||G(t,this.length-8);const n=(e<<24)+65536*this[++t]+256*this[++t]+this[++t];return(BigInt(n)<<BigInt(32))+BigInt(this[++t]*2**24+65536*this[++t]+256*this[++t]+r)})),u.prototype.readFloatLE=function(t,e){return t>>>=0,e||I(t,4,this.length),i.read(this,t,!0,23,4)},u.prototype.readFloatBE=function(t,e){return t>>>=0,e||I(t,4,this.length),i.read(this,t,!1,23,4)},u.prototype.readDoubleLE=function(t,e){return t>>>=0,e||I(t,8,this.length),i.read(this,t,!0,52,8)},u.prototype.readDoubleBE=function(t,e){return t>>>=0,e||I(t,8,this.length),i.read(this,t,!1,52,8)},u.prototype.writeUintLE=u.prototype.writeUIntLE=function(t,e,r,n){if(t=+t,e>>>=0,r>>>=0,!n){B(this,t,e,r,Math.pow(2,8*r)-1,0)}let i=1,o=0;for(this[e]=255&t;++o<r&&(i*=256);)this[e+o]=t/i&255;return e+r},u.prototype.writeUintBE=u.prototype.writeUIntBE=function(t,e,r,n){if(t=+t,e>>>=0,r>>>=0,!n){B(this,t,e,r,Math.pow(2,8*r)-1,0)}let i=r-1,o=1;for(this[e+i]=255&t;--i>=0&&(o*=256);)this[e+i]=t/o&255;return e+r},u.prototype.writeUint8=u.prototype.writeUInt8=function(t,e,r){return t=+t,e>>>=0,r||B(this,t,e,1,255,0),this[e]=255&t,e+1},u.prototype.writeUint16LE=u.prototype.writeUInt16LE=function(t,e,r){return t=+t,e>>>=0,r||B(this,t,e,2,65535,0),this[e]=255&t,this[e+1]=t>>>8,e+2},u.prototype.writeUint16BE=u.prototype.writeUInt16BE=function(t,e,r){return t=+t,e>>>=0,r||B(this,t,e,2,65535,0),this[e]=t>>>8,this[e+1]=255&t,e+2},u.prototype.writeUint32LE=u.prototype.writeUInt32LE=function(t,e,r){return t=+t,e>>>=0,r||B(this,t,e,4,4294967295,0),this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t,e+4},u.prototype.writeUint32BE=u.prototype.writeUInt32BE=function(t,e,r){return t=+t,e>>>=0,r||B(this,t,e,4,4294967295,0),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},u.prototype.writeBigUInt64LE=K((function(t,e=0){return L(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))})),u.prototype.writeBigUInt64BE=K((function(t,e=0){return O(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))})),u.prototype.writeIntLE=function(t,e,r,n){if(t=+t,e>>>=0,!n){const n=Math.pow(2,8*r-1);B(this,t,e,r,n-1,-n)}let i=0,o=1,a=0;for(this[e]=255&t;++i<r&&(o*=256);)t<0&&0===a&&0!==this[e+i-1]&&(a=1),this[e+i]=(t/o>>0)-a&255;return e+r},u.prototype.writeIntBE=function(t,e,r,n){if(t=+t,e>>>=0,!n){const n=Math.pow(2,8*r-1);B(this,t,e,r,n-1,-n)}let i=r-1,o=1,a=0;for(this[e+i]=255&t;--i>=0&&(o*=256);)t<0&&0===a&&0!==this[e+i+1]&&(a=1),this[e+i]=(t/o>>0)-a&255;return e+r},u.prototype.writeInt8=function(t,e,r){return t=+t,e>>>=0,r||B(this,t,e,1,127,-128),t<0&&(t=255+t+1),this[e]=255&t,e+1},u.prototype.writeInt16LE=function(t,e,r){return t=+t,e>>>=0,r||B(this,t,e,2,32767,-32768),this[e]=255&t,this[e+1]=t>>>8,e+2},u.prototype.writeInt16BE=function(t,e,r){return t=+t,e>>>=0,r||B(this,t,e,2,32767,-32768),this[e]=t>>>8,this[e+1]=255&t,e+2},u.prototype.writeInt32LE=function(t,e,r){return t=+t,e>>>=0,r||B(this,t,e,4,2147483647,-2147483648),this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24,e+4},u.prototype.writeInt32BE=function(t,e,r){return t=+t,e>>>=0,r||B(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},u.prototype.writeBigInt64LE=K((function(t,e=0){return L(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),u.prototype.writeBigInt64BE=K((function(t,e=0){return O(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),u.prototype.writeFloatLE=function(t,e,r){return N(this,t,e,!0,r)},u.prototype.writeFloatBE=function(t,e,r){return N(this,t,e,!1,r)},u.prototype.writeDoubleLE=function(t,e,r){return F(this,t,e,!0,r)},u.prototype.writeDoubleBE=function(t,e,r){return F(this,t,e,!1,r)},u.prototype.copy=function(t,e,r,n){if(!u.isBuffer(t))throw new TypeError("argument should be a Buffer");if(r||(r=0),n||0===n||(n=this.length),e>=t.length&&(e=t.length),e||(e=0),n>0&&n<r&&(n=r),n===r)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-e<n-r&&(n=t.length-e+r);const i=n-r;return this===t&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(e,r,n):Uint8Array.prototype.set.call(t,this.subarray(r,n),e),i},u.prototype.fill=function(t,e,r,n){if("string"==typeof t){if("string"==typeof e?(n=e,e=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!u.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(1===t.length){const e=t.charCodeAt(0);("utf8"===n&&e<128||"latin1"===n)&&(t=e)}}else"number"==typeof t?t&=255:"boolean"==typeof t&&(t=Number(t));if(e<0||this.length<e||this.length<r)throw new RangeError("Out of range index");if(r<=e)return this;let i;if(e>>>=0,r=void 0===r?this.length:r>>>0,t||(t=0),"number"==typeof t)for(i=e;i<r;++i)this[i]=t;else{const o=u.isBuffer(t)?t:u.from(t,n),a=o.length;if(0===a)throw new TypeError('The value "'+t+'" is invalid for argument "value"');for(i=0;i<r-e;++i)this[i+e]=o[i%a]}return this};const U={};function D(t,e,r){U[t]=class extends r{constructor(){super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${t}]`,this.stack,delete this.name}get code(){return t}set code(t){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:t,writable:!0})}toString(){return`${this.name} [${t}]: ${this.message}`}}}function V(t){let e="",r=t.length;const n="-"===t[0]?1:0;for(;r>=n+4;r-=3)e=`_${t.slice(r-3,r)}${e}`;return`${t.slice(0,r)}${e}`}function q(t,e,r,n,i,o){if(t>r||t<e){const n="bigint"==typeof e?"n":"";let i;throw i=o>3?0===e||e===BigInt(0)?`>= 0${n} and < 2${n} ** ${8*(o+1)}${n}`:`>= -(2${n} ** ${8*(o+1)-1}${n}) and < 2 ** ${8*(o+1)-1}${n}`:`>= ${e}${n} and <= ${r}${n}`,new U.ERR_OUT_OF_RANGE("value",i,t)}!function(t,e,r){z(e,"offset"),void 0!==t[e]&&void 0!==t[e+r]||G(e,t.length-(r+1))}(n,i,o)}function z(t,e){if("number"!=typeof t)throw new U.ERR_INVALID_ARG_TYPE(e,"number",t)}function G(t,e,r){if(Math.floor(t)!==t)throw z(t,r),new U.ERR_OUT_OF_RANGE(r||"offset","an integer",t);if(e<0)throw new U.ERR_BUFFER_OUT_OF_BOUNDS;throw new U.ERR_OUT_OF_RANGE(r||"offset",`>= ${r?1:0} and <= ${e}`,t)}D("ERR_BUFFER_OUT_OF_BOUNDS",(function(t){return t?t+" is outside of buffer bounds":"Attempt to access memory outside buffer bounds"}),RangeError),D("ERR_INVALID_ARG_TYPE",(function(t,e){return`The "${t}" argument must be of type number. Received type ${typeof e}`}),TypeError),D("ERR_OUT_OF_RANGE",(function(t,e,r){let n=`The value of "${t}" is out of range.`,i=r;return Number.isInteger(r)&&Math.abs(r)>2**32?i=V(String(r)):"bigint"==typeof r&&(i=String(r),(r>BigInt(2)**BigInt(32)||r<-(BigInt(2)**BigInt(32)))&&(i=V(i)),i+="n"),n+=` It must be ${e}. Received ${i}`,n}),RangeError);const W=/[^+/0-9A-Za-z-_]/g;function H(t,e){let r;e=e||1/0;const n=t.length;let i=null;const o=[];for(let a=0;a<n;++a){if(r=t.charCodeAt(a),r>55295&&r<57344){if(!i){if(r>56319){(e-=3)>-1&&o.push(239,191,189);continue}if(a+1===n){(e-=3)>-1&&o.push(239,191,189);continue}i=r;continue}if(r<56320){(e-=3)>-1&&o.push(239,191,189),i=r;continue}r=65536+(i-55296<<10|r-56320)}else i&&(e-=3)>-1&&o.push(239,191,189);if(i=null,r<128){if((e-=1)<0)break;o.push(r)}else if(r<2048){if((e-=2)<0)break;o.push(r>>6|192,63&r|128)}else if(r<65536){if((e-=3)<0)break;o.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;o.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return o}function Y(t){return n.toByteArray(function(t){if((t=(t=t.split("=")[0]).trim().replace(W,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function $(t,e,r,n){let i;for(i=0;i<n&&!(i+r>=e.length||i>=t.length);++i)e[i+r]=t[i];return i}function X(t,e){return t instanceof e||null!=t&&null!=t.constructor&&null!=t.constructor.name&&t.constructor.name===e.name}function J(t){return t!=t}const Z=function(){const t="0123456789abcdef",e=new Array(256);for(let r=0;r<16;++r){const n=16*r;for(let i=0;i<16;++i)e[n+i]=t[r]+t[i]}return e}();function K(t){return"undefined"==typeof BigInt?Q:t}function Q(){throw new Error("BigInt not supported")}},7988:t=>{"use strict";var e,r="object"==typeof Reflect?Reflect:null,n=r&&"function"==typeof r.apply?r.apply:function(t,e,r){return Function.prototype.apply.call(t,e,r)};e=r&&"function"==typeof r.ownKeys?r.ownKeys:Object.getOwnPropertySymbols?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:function(t){return Object.getOwnPropertyNames(t)};var i=Number.isNaN||function(t){return t!=t};function o(){o.init.call(this)}t.exports=o,t.exports.once=function(t,e){return new Promise((function(r,n){function i(r){t.removeListener(e,o),n(r)}function o(){"function"==typeof t.removeListener&&t.removeListener("error",i),r([].slice.call(arguments))}y(t,e,o,{once:!0}),"error"!==e&&function(t,e,r){"function"==typeof t.on&&y(t,"error",e,r)}(t,i,{once:!0})}))},o.EventEmitter=o,o.prototype._events=void 0,o.prototype._eventsCount=0,o.prototype._maxListeners=void 0;var a=10;function s(t){if("function"!=typeof t)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t)}function u(t){return void 0===t._maxListeners?o.defaultMaxListeners:t._maxListeners}function f(t,e,r,n){var i,o,a,f;if(s(r),void 0===(o=t._events)?(o=t._events=Object.create(null),t._eventsCount=0):(void 0!==o.newListener&&(t.emit("newListener",e,r.listener?r.listener:r),o=t._events),a=o[e]),void 0===a)a=o[e]=r,++t._eventsCount;else if("function"==typeof a?a=o[e]=n?[r,a]:[a,r]:n?a.unshift(r):a.push(r),(i=u(t))>0&&a.length>i&&!a.warned){a.warned=!0;var l=new Error("Possible EventEmitter memory leak detected. "+a.length+" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit");l.name="MaxListenersExceededWarning",l.emitter=t,l.type=e,l.count=a.length,f=l,console&&console.warn&&console.warn(f)}return t}function l(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function h(t,e,r){var n={fired:!1,wrapFn:void 0,target:t,type:e,listener:r},i=l.bind(n);return i.listener=r,n.wrapFn=i,i}function c(t,e,r){var n=t._events;if(void 0===n)return[];var i=n[e];return void 0===i?[]:"function"==typeof i?r?[i.listener||i]:[i]:r?function(t){for(var e=new Array(t.length),r=0;r<e.length;++r)e[r]=t[r].listener||t[r];return e}(i):d(i,i.length)}function p(t){var e=this._events;if(void 0!==e){var r=e[t];if("function"==typeof r)return 1;if(void 0!==r)return r.length}return 0}function d(t,e){for(var r=new Array(e),n=0;n<e;++n)r[n]=t[n];return r}function y(t,e,r,n){if("function"==typeof t.on)n.once?t.once(e,r):t.on(e,r);else{if("function"!=typeof t.addEventListener)throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof t);t.addEventListener(e,(function i(o){n.once&&t.removeEventListener(e,i),r(o)}))}}Object.defineProperty(o,"defaultMaxListeners",{enumerable:!0,get:function(){return a},set:function(t){if("number"!=typeof t||t<0||i(t))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+t+".");a=t}}),o.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},o.prototype.setMaxListeners=function(t){if("number"!=typeof t||t<0||i(t))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+t+".");return this._maxListeners=t,this},o.prototype.getMaxListeners=function(){return u(this)},o.prototype.emit=function(t){for(var e=[],r=1;r<arguments.length;r++)e.push(arguments[r]);var i="error"===t,o=this._events;if(void 0!==o)i=i&&void 0===o.error;else if(!i)return!1;if(i){var a;if(e.length>0&&(a=e[0]),a instanceof Error)throw a;var s=new Error("Unhandled error."+(a?" ("+a.message+")":""));throw s.context=a,s}var u=o[t];if(void 0===u)return!1;if("function"==typeof u)n(u,this,e);else{var f=u.length,l=d(u,f);for(r=0;r<f;++r)n(l[r],this,e)}return!0},o.prototype.addListener=function(t,e){return f(this,t,e,!1)},o.prototype.on=o.prototype.addListener,o.prototype.prependListener=function(t,e){return f(this,t,e,!0)},o.prototype.once=function(t,e){return s(e),this.on(t,h(this,t,e)),this},o.prototype.prependOnceListener=function(t,e){return s(e),this.prependListener(t,h(this,t,e)),this},o.prototype.removeListener=function(t,e){var r,n,i,o,a;if(s(e),void 0===(n=this._events))return this;if(void 0===(r=n[t]))return this;if(r===e||r.listener===e)0==--this._eventsCount?this._events=Object.create(null):(delete n[t],n.removeListener&&this.emit("removeListener",t,r.listener||e));else if("function"!=typeof r){for(i=-1,o=r.length-1;o>=0;o--)if(r[o]===e||r[o].listener===e){a=r[o].listener,i=o;break}if(i<0)return this;0===i?r.shift():function(t,e){for(;e+1<t.length;e++)t[e]=t[e+1];t.pop()}(r,i),1===r.length&&(n[t]=r[0]),void 0!==n.removeListener&&this.emit("removeListener",t,a||e)}return this},o.prototype.off=o.prototype.removeListener,o.prototype.removeAllListeners=function(t){var e,r,n;if(void 0===(r=this._events))return this;if(void 0===r.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==r[t]&&(0==--this._eventsCount?this._events=Object.create(null):delete r[t]),this;if(0===arguments.length){var i,o=Object.keys(r);for(n=0;n<o.length;++n)"removeListener"!==(i=o[n])&&this.removeAllListeners(i);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(e=r[t]))this.removeListener(t,e);else if(void 0!==e)for(n=e.length-1;n>=0;n--)this.removeListener(t,e[n]);return this},o.prototype.listeners=function(t){return c(this,t,!0)},o.prototype.rawListeners=function(t){return c(this,t,!1)},o.listenerCount=function(t,e){return"function"==typeof t.listenerCount?t.listenerCount(e):p.call(t,e)},o.prototype.listenerCount=p,o.prototype.eventNames=function(){return this._eventsCount>0?e(this._events):[]}},9530:t=>{"use strict";function e(t){if("string"!=typeof t)throw new TypeError("Path must be a string. Received "+JSON.stringify(t))}function r(t,e){for(var r,n="",i=0,o=-1,a=0,s=0;s<=t.length;++s){if(s<t.length)r=t.charCodeAt(s);else{if(47===r)break;r=47}if(47===r){if(o===s-1||1===a);else if(o!==s-1&&2===a){if(n.length<2||2!==i||46!==n.charCodeAt(n.length-1)||46!==n.charCodeAt(n.length-2))if(n.length>2){var u=n.lastIndexOf("/");if(u!==n.length-1){-1===u?(n="",i=0):i=(n=n.slice(0,u)).length-1-n.lastIndexOf("/"),o=s,a=0;continue}}else if(2===n.length||1===n.length){n="",i=0,o=s,a=0;continue}e&&(n.length>0?n+="/..":n="..",i=2)}else n.length>0?n+="/"+t.slice(o+1,s):n=t.slice(o+1,s),i=s-o-1;o=s,a=0}else 46===r&&-1!==a?++a:a=-1}return n}var n={resolve:function(){for(var t,n="",i=!1,o=arguments.length-1;o>=-1&&!i;o--){var a;o>=0?a=arguments[o]:(void 0===t&&(t=process.cwd()),a=t),e(a),0!==a.length&&(n=a+"/"+n,i=47===a.charCodeAt(0))}return n=r(n,!i),i?n.length>0?"/"+n:"/":n.length>0?n:"."},normalize:function(t){if(e(t),0===t.length)return".";var n=47===t.charCodeAt(0),i=47===t.charCodeAt(t.length-1);return 0!==(t=r(t,!n)).length||n||(t="."),t.length>0&&i&&(t+="/"),n?"/"+t:t},isAbsolute:function(t){return e(t),t.length>0&&47===t.charCodeAt(0)},join:function(){if(0===arguments.length)return".";for(var t,r=0;r<arguments.length;++r){var i=arguments[r];e(i),i.length>0&&(void 0===t?t=i:t+="/"+i)}return void 0===t?".":n.normalize(t)},relative:function(t,r){if(e(t),e(r),t===r)return"";if((t=n.resolve(t))===(r=n.resolve(r)))return"";for(var i=1;i<t.length&&47===t.charCodeAt(i);++i);for(var o=t.length,a=o-i,s=1;s<r.length&&47===r.charCodeAt(s);++s);for(var u=r.length-s,f=a<u?a:u,l=-1,h=0;h<=f;++h){if(h===f){if(u>f){if(47===r.charCodeAt(s+h))return r.slice(s+h+1);if(0===h)return r.slice(s+h)}else a>f&&(47===t.charCodeAt(i+h)?l=h:0===h&&(l=0));break}var c=t.charCodeAt(i+h);if(c!==r.charCodeAt(s+h))break;47===c&&(l=h)}var p="";for(h=i+l+1;h<=o;++h)h!==o&&47!==t.charCodeAt(h)||(0===p.length?p+="..":p+="/..");return p.length>0?p+r.slice(s+l):(s+=l,47===r.charCodeAt(s)&&++s,r.slice(s))},_makeLong:function(t){return t},dirname:function(t){if(e(t),0===t.length)return".";for(var r=t.charCodeAt(0),n=47===r,i=-1,o=!0,a=t.length-1;a>=1;--a)if(47===(r=t.charCodeAt(a))){if(!o){i=a;break}}else o=!1;return-1===i?n?"/":".":n&&1===i?"//":t.slice(0,i)},basename:function(t,r){if(void 0!==r&&"string"!=typeof r)throw new TypeError('"ext" argument must be a string');e(t);var n,i=0,o=-1,a=!0;if(void 0!==r&&r.length>0&&r.length<=t.length){if(r.length===t.length&&r===t)return"";var s=r.length-1,u=-1;for(n=t.length-1;n>=0;--n){var f=t.charCodeAt(n);if(47===f){if(!a){i=n+1;break}}else-1===u&&(a=!1,u=n+1),s>=0&&(f===r.charCodeAt(s)?-1==--s&&(o=n):(s=-1,o=u))}return i===o?o=u:-1===o&&(o=t.length),t.slice(i,o)}for(n=t.length-1;n>=0;--n)if(47===t.charCodeAt(n)){if(!a){i=n+1;break}}else-1===o&&(a=!1,o=n+1);return-1===o?"":t.slice(i,o)},extname:function(t){e(t);for(var r=-1,n=0,i=-1,o=!0,a=0,s=t.length-1;s>=0;--s){var u=t.charCodeAt(s);if(47!==u)-1===i&&(o=!1,i=s+1),46===u?-1===r?r=s:1!==a&&(a=1):-1!==r&&(a=-1);else if(!o){n=s+1;break}}return-1===r||-1===i||0===a||1===a&&r===i-1&&r===n+1?"":t.slice(r,i)},format:function(t){if(null===t||"object"!=typeof t)throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof t);return function(t,e){var r=e.dir||e.root,n=e.base||(e.name||"")+(e.ext||"");return r?r===e.root?r+n:r+t+n:n}("/",t)},parse:function(t){e(t);var r={root:"",dir:"",base:"",ext:"",name:""};if(0===t.length)return r;var n,i=t.charCodeAt(0),o=47===i;o?(r.root="/",n=1):n=0;for(var a=-1,s=0,u=-1,f=!0,l=t.length-1,h=0;l>=n;--l)if(47!==(i=t.charCodeAt(l)))-1===u&&(f=!1,u=l+1),46===i?-1===a?a=l:1!==h&&(h=1):-1!==a&&(h=-1);else if(!f){s=l+1;break}return-1===a||-1===u||0===h||1===h&&a===u-1&&a===s+1?-1!==u&&(r.base=r.name=0===s&&o?t.slice(1,u):t.slice(s,u)):(0===s&&o?(r.name=t.slice(1,a),r.base=t.slice(1,u)):(r.name=t.slice(s,a),r.base=t.slice(s,u)),r.ext=t.slice(a,u)),s>0?r.dir=t.slice(0,s-1):o&&(r.dir="/"),r},sep:"/",delimiter:":",win32:null,posix:null};n.posix=n,t.exports=n},8870:t=>{"use strict";var e={};function r(t,r,n){n||(n=Error);var i=function(t){var e,n;function i(e,n,i){return t.call(this,function(t,e,n){return"string"==typeof r?r:r(t,e,n)}(e,n,i))||this}return n=t,(e=i).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,i}(n);i.prototype.name=n.name,i.prototype.code=t,e[t]=i}function n(t,e){if(Array.isArray(t)){var r=t.length;return t=t.map((function(t){return String(t)})),r>2?"one of ".concat(e," ").concat(t.slice(0,r-1).join(", "),", or ")+t[r-1]:2===r?"one of ".concat(e," ").concat(t[0]," or ").concat(t[1]):"of ".concat(e," ").concat(t[0])}return"of ".concat(e," ").concat(String(t))}r("ERR_INVALID_OPT_VALUE",(function(t,e){return'The value "'+e+'" is invalid for option "'+t+'"'}),TypeError),r("ERR_INVALID_ARG_TYPE",(function(t,e,r){var i,o,a,s;if("string"==typeof e&&(o="not ",e.substr(!a||a<0?0:+a,o.length)===o)?(i="must not be",e=e.replace(/^not /,"")):i="must be",function(t,e,r){return(void 0===r||r>t.length)&&(r=t.length),t.substring(r-e.length,r)===e}(t," argument"))s="The ".concat(t," ").concat(i," ").concat(n(e,"type"));else{var u=function(t,e,r){return"number"!=typeof r&&(r=0),!(r+e.length>t.length)&&-1!==t.indexOf(e,r)}(t,".")?"property":"argument";s='The "'.concat(t,'" ').concat(u," ").concat(i," ").concat(n(e,"type"))}return s+=". Received type ".concat(typeof r)}),TypeError),r("ERR_STREAM_PUSH_AFTER_EOF","stream.push() after EOF"),r("ERR_METHOD_NOT_IMPLEMENTED",(function(t){return"The "+t+" method is not implemented"})),r("ERR_STREAM_PREMATURE_CLOSE","Premature close"),r("ERR_STREAM_DESTROYED",(function(t){return"Cannot call "+t+" after a stream was destroyed"})),r("ERR_MULTIPLE_CALLBACK","Callback called multiple times"),r("ERR_STREAM_CANNOT_PIPE","Cannot pipe, not readable"),r("ERR_STREAM_WRITE_AFTER_END","write after end"),r("ERR_STREAM_NULL_VALUES","May not write null values to stream",TypeError),r("ERR_UNKNOWN_ENCODING",(function(t){return"Unknown encoding: "+t}),TypeError),r("ERR_STREAM_UNSHIFT_AFTER_END_EVENT","stream.unshift() after end event"),t.exports.q=e},3536:(t,e,r)=>{"use strict";var n=Object.keys||function(t){var e=[];for(var r in t)e.push(r);return e};t.exports=f;var i=r(4459),o=r(4987);r(5717)(f,i);for(var a=n(o.prototype),s=0;s<a.length;s++){var u=a[s];f.prototype[u]||(f.prototype[u]=o.prototype[u])}function f(t){if(!(this instanceof f))return new f(t);i.call(this,t),o.call(this,t),this.allowHalfOpen=!0,t&&(!1===t.readable&&(this.readable=!1),!1===t.writable&&(this.writable=!1),!1===t.allowHalfOpen&&(this.allowHalfOpen=!1,this.once("end",l)))}function l(){this._writableState.ended||process.nextTick(h,this)}function h(t){t.end()}Object.defineProperty(f.prototype,"writableHighWaterMark",{enumerable:!1,get:function(){return this._writableState.highWaterMark}}),Object.defineProperty(f.prototype,"writableBuffer",{enumerable:!1,get:function(){return this._writableState&&this._writableState.getBuffer()}}),Object.defineProperty(f.prototype,"writableLength",{enumerable:!1,get:function(){return this._writableState.length}}),Object.defineProperty(f.prototype,"destroyed",{enumerable:!1,get:function(){return void 0!==this._readableState&&void 0!==this._writableState&&(this._readableState.destroyed&&this._writableState.destroyed)},set:function(t){void 0!==this._readableState&&void 0!==this._writableState&&(this._readableState.destroyed=t,this._writableState.destroyed=t)}})},8373:(t,e,r)=>{"use strict";t.exports=i;var n=r(6695);function i(t){if(!(this instanceof i))return new i(t);n.call(this,t)}r(5717)(i,n),i.prototype._transform=function(t,e,r){r(null,t)}},4459:(t,e,r)=>{"use strict";var n;t.exports=S,S.ReadableState=E;r(7988).EventEmitter;var i=function(t,e){return t.listeners(e).length},o=r(4150),a=r(1664).Buffer,s=r.g.Uint8Array||function(){};var u,f=r(1758);u=f&&f.debuglog?f.debuglog("stream"):function(){};var l,h,c,p=r(1396),d=r(8522),y=r(1379).getHighWaterMark,g=r(8870).q,v=g.ERR_INVALID_ARG_TYPE,b=g.ERR_STREAM_PUSH_AFTER_EOF,m=g.ERR_METHOD_NOT_IMPLEMENTED,w=g.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;r(5717)(S,o);var x=d.errorOrDestroy,_=["error","close","destroy","pause","resume"];function E(t,e,i){n=n||r(3536),t=t||{},"boolean"!=typeof i&&(i=e instanceof n),this.objectMode=!!t.objectMode,i&&(this.objectMode=this.objectMode||!!t.readableObjectMode),this.highWaterMark=y(this,t,"readableHighWaterMark",i),this.buffer=new p,this.length=0,this.pipes=null,this.pipesCount=0,this.flowing=null,this.ended=!1,this.endEmitted=!1,this.reading=!1,this.sync=!0,this.needReadable=!1,this.emittedReadable=!1,this.readableListening=!1,this.resumeScheduled=!1,this.paused=!0,this.emitClose=!1!==t.emitClose,this.autoDestroy=!!t.autoDestroy,this.destroyed=!1,this.defaultEncoding=t.defaultEncoding||"utf8",this.awaitDrain=0,this.readingMore=!1,this.decoder=null,this.encoding=null,t.encoding&&(l||(l=r(140).s),this.decoder=new l(t.encoding),this.encoding=t.encoding)}function S(t){if(n=n||r(3536),!(this instanceof S))return new S(t);var e=this instanceof n;this._readableState=new E(t,this,e),this.readable=!0,t&&("function"==typeof t.read&&(this._read=t.read),"function"==typeof t.destroy&&(this._destroy=t.destroy)),o.call(this)}function k(t,e,r,n,i){u("readableAddChunk",e);var o,f=t._readableState;if(null===e)f.reading=!1,function(t,e){if(u("onEofChunk"),e.ended)return;if(e.decoder){var r=e.decoder.end();r&&r.length&&(e.buffer.push(r),e.length+=e.objectMode?1:r.length)}e.ended=!0,e.sync?j(t):(e.needReadable=!1,e.emittedReadable||(e.emittedReadable=!0,T(t)))}(t,f);else if(i||(o=function(t,e){var r;n=e,a.isBuffer(n)||n instanceof s||"string"==typeof e||void 0===e||t.objectMode||(r=new v("chunk",["string","Buffer","Uint8Array"],e));var n;return r}(f,e)),o)x(t,o);else if(f.objectMode||e&&e.length>0)if("string"==typeof e||f.objectMode||Object.getPrototypeOf(e)===a.prototype||(e=function(t){return a.from(t)}(e)),n)f.endEmitted?x(t,new w):M(t,f,e,!0);else if(f.ended)x(t,new b);else{if(f.destroyed)return!1;f.reading=!1,f.decoder&&!r?(e=f.decoder.write(e),f.objectMode||0!==e.length?M(t,f,e,!1):P(t,f)):M(t,f,e,!1)}else n||(f.reading=!1,P(t,f));return!f.ended&&(f.length<f.highWaterMark||0===f.length)}function M(t,e,r,n){e.flowing&&0===e.length&&!e.sync?(e.awaitDrain=0,t.emit("data",r)):(e.length+=e.objectMode?1:r.length,n?e.buffer.unshift(r):e.buffer.push(r),e.needReadable&&j(t)),P(t,e)}Object.defineProperty(S.prototype,"destroyed",{enumerable:!1,get:function(){return void 0!==this._readableState&&this._readableState.destroyed},set:function(t){this._readableState&&(this._readableState.destroyed=t)}}),S.prototype.destroy=d.destroy,S.prototype._undestroy=d.undestroy,S.prototype._destroy=function(t,e){e(t)},S.prototype.push=function(t,e){var r,n=this._readableState;return n.objectMode?r=!0:"string"==typeof t&&((e=e||n.defaultEncoding)!==n.encoding&&(t=a.from(t,e),e=""),r=!0),k(this,t,e,!1,r)},S.prototype.unshift=function(t){return k(this,t,null,!0,!1)},S.prototype.isPaused=function(){return!1===this._readableState.flowing},S.prototype.setEncoding=function(t){l||(l=r(140).s);var e=new l(t);this._readableState.decoder=e,this._readableState.encoding=this._readableState.decoder.encoding;for(var n=this._readableState.buffer.head,i="";null!==n;)i+=e.write(n.data),n=n.next;return this._readableState.buffer.clear(),""!==i&&this._readableState.buffer.push(i),this._readableState.length=i.length,this};var A=1073741824;function R(t,e){return t<=0||0===e.length&&e.ended?0:e.objectMode?1:t!=t?e.flowing&&e.length?e.buffer.head.data.length:e.length:(t>e.highWaterMark&&(e.highWaterMark=function(t){return t>=A?t=A:(t--,t|=t>>>1,t|=t>>>2,t|=t>>>4,t|=t>>>8,t|=t>>>16,t++),t}(t)),t<=e.length?t:e.ended?e.length:(e.needReadable=!0,0))}function j(t){var e=t._readableState;u("emitReadable",e.needReadable,e.emittedReadable),e.needReadable=!1,e.emittedReadable||(u("emitReadable",e.flowing),e.emittedReadable=!0,process.nextTick(T,t))}function T(t){var e=t._readableState;u("emitReadable_",e.destroyed,e.length,e.ended),e.destroyed||!e.length&&!e.ended||(t.emit("readable"),e.emittedReadable=!1),e.needReadable=!e.flowing&&!e.ended&&e.length<=e.highWaterMark,C(t)}function P(t,e){e.readingMore||(e.readingMore=!0,process.nextTick(I,t,e))}function I(t,e){for(;!e.reading&&!e.ended&&(e.length<e.highWaterMark||e.flowing&&0===e.length);){var r=e.length;if(u("maybeReadMore read 0"),t.read(0),r===e.length)break}e.readingMore=!1}function B(t){var e=t._readableState;e.readableListening=t.listenerCount("readable")>0,e.resumeScheduled&&!e.paused?e.flowing=!0:t.listenerCount("data")>0&&t.resume()}function L(t){u("readable nexttick read 0"),t.read(0)}function O(t,e){u("resume",e.reading),e.reading||t.read(0),e.resumeScheduled=!1,t.emit("resume"),C(t),e.flowing&&!e.reading&&t.read(0)}function C(t){var e=t._readableState;for(u("flow",e.flowing);e.flowing&&null!==t.read(););}function N(t,e){return 0===e.length?null:(e.objectMode?r=e.buffer.shift():!t||t>=e.length?(r=e.decoder?e.buffer.join(""):1===e.buffer.length?e.buffer.first():e.buffer.concat(e.length),e.buffer.clear()):r=e.buffer.consume(t,e.decoder),r);var r}function F(t){var e=t._readableState;u("endReadable",e.endEmitted),e.endEmitted||(e.ended=!0,process.nextTick(U,e,t))}function U(t,e){if(u("endReadableNT",t.endEmitted,t.length),!t.endEmitted&&0===t.length&&(t.endEmitted=!0,e.readable=!1,e.emit("end"),t.autoDestroy)){var r=e._writableState;(!r||r.autoDestroy&&r.finished)&&e.destroy()}}function D(t,e){for(var r=0,n=t.length;r<n;r++)if(t[r]===e)return r;return-1}S.prototype.read=function(t){u("read",t),t=parseInt(t,10);var e=this._readableState,r=t;if(0!==t&&(e.emittedReadable=!1),0===t&&e.needReadable&&((0!==e.highWaterMark?e.length>=e.highWaterMark:e.length>0)||e.ended))return u("read: emitReadable",e.length,e.ended),0===e.length&&e.ended?F(this):j(this),null;if(0===(t=R(t,e))&&e.ended)return 0===e.length&&F(this),null;var n,i=e.needReadable;return u("need readable",i),(0===e.length||e.length-t<e.highWaterMark)&&u("length less than watermark",i=!0),e.ended||e.reading?u("reading or ended",i=!1):i&&(u("do read"),e.reading=!0,e.sync=!0,0===e.length&&(e.needReadable=!0),this._read(e.highWaterMark),e.sync=!1,e.reading||(t=R(r,e))),null===(n=t>0?N(t,e):null)?(e.needReadable=e.length<=e.highWaterMark,t=0):(e.length-=t,e.awaitDrain=0),0===e.length&&(e.ended||(e.needReadable=!0),r!==t&&e.ended&&F(this)),null!==n&&this.emit("data",n),n},S.prototype._read=function(t){x(this,new m("_read()"))},S.prototype.pipe=function(t,e){var r=this,n=this._readableState;switch(n.pipesCount){case 0:n.pipes=t;break;case 1:n.pipes=[n.pipes,t];break;default:n.pipes.push(t)}n.pipesCount+=1,u("pipe count=%d opts=%j",n.pipesCount,e);var o=(!e||!1!==e.end)&&t!==process.stdout&&t!==process.stderr?s:y;function a(e,i){u("onunpipe"),e===r&&i&&!1===i.hasUnpiped&&(i.hasUnpiped=!0,u("cleanup"),t.removeListener("close",p),t.removeListener("finish",d),t.removeListener("drain",f),t.removeListener("error",c),t.removeListener("unpipe",a),r.removeListener("end",s),r.removeListener("end",y),r.removeListener("data",h),l=!0,!n.awaitDrain||t._writableState&&!t._writableState.needDrain||f())}function s(){u("onend"),t.end()}n.endEmitted?process.nextTick(o):r.once("end",o),t.on("unpipe",a);var f=function(t){return function(){var e=t._readableState;u("pipeOnDrain",e.awaitDrain),e.awaitDrain&&e.awaitDrain--,0===e.awaitDrain&&i(t,"data")&&(e.flowing=!0,C(t))}}(r);t.on("drain",f);var l=!1;function h(e){u("ondata");var i=t.write(e);u("dest.write",i),!1===i&&((1===n.pipesCount&&n.pipes===t||n.pipesCount>1&&-1!==D(n.pipes,t))&&!l&&(u("false write response, pause",n.awaitDrain),n.awaitDrain++),r.pause())}function c(e){u("onerror",e),y(),t.removeListener("error",c),0===i(t,"error")&&x(t,e)}function p(){t.removeListener("finish",d),y()}function d(){u("onfinish"),t.removeListener("close",p),y()}function y(){u("unpipe"),r.unpipe(t)}return r.on("data",h),function(t,e,r){if("function"==typeof t.prependListener)return t.prependListener(e,r);t._events&&t._events[e]?Array.isArray(t._events[e])?t._events[e].unshift(r):t._events[e]=[r,t._events[e]]:t.on(e,r)}(t,"error",c),t.once("close",p),t.once("finish",d),t.emit("pipe",r),n.flowing||(u("pipe resume"),r.resume()),t},S.prototype.unpipe=function(t){var e=this._readableState,r={hasUnpiped:!1};if(0===e.pipesCount)return this;if(1===e.pipesCount)return t&&t!==e.pipes||(t||(t=e.pipes),e.pipes=null,e.pipesCount=0,e.flowing=!1,t&&t.emit("unpipe",this,r)),this;if(!t){var n=e.pipes,i=e.pipesCount;e.pipes=null,e.pipesCount=0,e.flowing=!1;for(var o=0;o<i;o++)n[o].emit("unpipe",this,{hasUnpiped:!1});return this}var a=D(e.pipes,t);return-1===a||(e.pipes.splice(a,1),e.pipesCount-=1,1===e.pipesCount&&(e.pipes=e.pipes[0]),t.emit("unpipe",this,r)),this},S.prototype.on=function(t,e){var r=o.prototype.on.call(this,t,e),n=this._readableState;return"data"===t?(n.readableListening=this.listenerCount("readable")>0,!1!==n.flowing&&this.resume()):"readable"===t&&(n.endEmitted||n.readableListening||(n.readableListening=n.needReadable=!0,n.flowing=!1,n.emittedReadable=!1,u("on readable",n.length,n.reading),n.length?j(this):n.reading||process.nextTick(L,this))),r},S.prototype.addListener=S.prototype.on,S.prototype.removeListener=function(t,e){var r=o.prototype.removeListener.call(this,t,e);return"readable"===t&&process.nextTick(B,this),r},S.prototype.removeAllListeners=function(t){var e=o.prototype.removeAllListeners.apply(this,arguments);return"readable"!==t&&void 0!==t||process.nextTick(B,this),e},S.prototype.resume=function(){var t=this._readableState;return t.flowing||(u("resume"),t.flowing=!t.readableListening,function(t,e){e.resumeScheduled||(e.resumeScheduled=!0,process.nextTick(O,t,e))}(this,t)),t.paused=!1,this},S.prototype.pause=function(){return u("call pause flowing=%j",this._readableState.flowing),!1!==this._readableState.flowing&&(u("pause"),this._readableState.flowing=!1,this.emit("pause")),this._readableState.paused=!0,this},S.prototype.wrap=function(t){var e=this,r=this._readableState,n=!1;for(var i in t.on("end",(function(){if(u("wrapped end"),r.decoder&&!r.ended){var t=r.decoder.end();t&&t.length&&e.push(t)}e.push(null)})),t.on("data",(function(i){(u("wrapped data"),r.decoder&&(i=r.decoder.write(i)),r.objectMode&&null==i)||(r.objectMode||i&&i.length)&&(e.push(i)||(n=!0,t.pause()))})),t)void 0===this[i]&&"function"==typeof t[i]&&(this[i]=function(e){return function(){return t[e].apply(t,arguments)}}(i));for(var o=0;o<_.length;o++)t.on(_[o],this.emit.bind(this,_[o]));return this._read=function(e){u("wrapped _read",e),n&&(n=!1,t.resume())},this},"function"==typeof Symbol&&(S.prototype[Symbol.asyncIterator]=function(){return void 0===h&&(h=r(6492)),h(this)}),Object.defineProperty(S.prototype,"readableHighWaterMark",{enumerable:!1,get:function(){return this._readableState.highWaterMark}}),Object.defineProperty(S.prototype,"readableBuffer",{enumerable:!1,get:function(){return this._readableState&&this._readableState.buffer}}),Object.defineProperty(S.prototype,"readableFlowing",{enumerable:!1,get:function(){return this._readableState.flowing},set:function(t){this._readableState&&(this._readableState.flowing=t)}}),S._fromList=N,Object.defineProperty(S.prototype,"readableLength",{enumerable:!1,get:function(){return this._readableState.length}}),"function"==typeof Symbol&&(S.from=function(t,e){return void 0===c&&(c=r(8881)),c(S,t,e)})},6695:(t,e,r)=>{"use strict";t.exports=l;var n=r(8870).q,i=n.ERR_METHOD_NOT_IMPLEMENTED,o=n.ERR_MULTIPLE_CALLBACK,a=n.ERR_TRANSFORM_ALREADY_TRANSFORMING,s=n.ERR_TRANSFORM_WITH_LENGTH_0,u=r(3536);function f(t,e){var r=this._transformState;r.transforming=!1;var n=r.writecb;if(null===n)return this.emit("error",new o);r.writechunk=null,r.writecb=null,null!=e&&this.push(e),n(t);var i=this._readableState;i.reading=!1,(i.needReadable||i.length<i.highWaterMark)&&this._read(i.highWaterMark)}function l(t){if(!(this instanceof l))return new l(t);u.call(this,t),this._transformState={afterTransform:f.bind(this),needTransform:!1,transforming:!1,writecb:null,writechunk:null,writeencoding:null},this._readableState.needReadable=!0,this._readableState.sync=!1,t&&("function"==typeof t.transform&&(this._transform=t.transform),"function"==typeof t.flush&&(this._flush=t.flush)),this.on("prefinish",h)}function h(){var t=this;"function"!=typeof this._flush||this._readableState.destroyed?c(this,null,null):this._flush((function(e,r){c(t,e,r)}))}function c(t,e,r){if(e)return t.emit("error",e);if(null!=r&&t.push(r),t._writableState.length)throw new s;if(t._transformState.transforming)throw new a;return t.push(null)}r(5717)(l,u),l.prototype.push=function(t,e){return this._transformState.needTransform=!1,u.prototype.push.call(this,t,e)},l.prototype._transform=function(t,e,r){r(new i("_transform()"))},l.prototype._write=function(t,e,r){var n=this._transformState;if(n.writecb=r,n.writechunk=t,n.writeencoding=e,!n.transforming){var i=this._readableState;(n.needTransform||i.needReadable||i.length<i.highWaterMark)&&this._read(i.highWaterMark)}},l.prototype._read=function(t){var e=this._transformState;null===e.writechunk||e.transforming?e.needTransform=!0:(e.transforming=!0,this._transform(e.writechunk,e.writeencoding,e.afterTransform))},l.prototype._destroy=function(t,e){u.prototype._destroy.call(this,t,(function(t){e(t)}))}},4987:(t,e,r)=>{"use strict";function n(t){var e=this;this.next=null,this.entry=null,this.finish=function(){!function(t,e,r){var n=t.entry;t.entry=null;for(;n;){var i=n.callback;e.pendingcb--,i(r),n=n.next}e.corkedRequestsFree.next=t}(e,t)}}var i;t.exports=S,S.WritableState=E;var o={deprecate:r(8526)},a=r(4150),s=r(1664).Buffer,u=r.g.Uint8Array||function(){};var f,l=r(8522),h=r(1379).getHighWaterMark,c=r(8870).q,p=c.ERR_INVALID_ARG_TYPE,d=c.ERR_METHOD_NOT_IMPLEMENTED,y=c.ERR_MULTIPLE_CALLBACK,g=c.ERR_STREAM_CANNOT_PIPE,v=c.ERR_STREAM_DESTROYED,b=c.ERR_STREAM_NULL_VALUES,m=c.ERR_STREAM_WRITE_AFTER_END,w=c.ERR_UNKNOWN_ENCODING,x=l.errorOrDestroy;function _(){}function E(t,e,o){i=i||r(3536),t=t||{},"boolean"!=typeof o&&(o=e instanceof i),this.objectMode=!!t.objectMode,o&&(this.objectMode=this.objectMode||!!t.writableObjectMode),this.highWaterMark=h(this,t,"writableHighWaterMark",o),this.finalCalled=!1,this.needDrain=!1,this.ending=!1,this.ended=!1,this.finished=!1,this.destroyed=!1;var a=!1===t.decodeStrings;this.decodeStrings=!a,this.defaultEncoding=t.defaultEncoding||"utf8",this.length=0,this.writing=!1,this.corked=0,this.sync=!0,this.bufferProcessing=!1,this.onwrite=function(t){!function(t,e){var r=t._writableState,n=r.sync,i=r.writecb;if("function"!=typeof i)throw new y;if(function(t){t.writing=!1,t.writecb=null,t.length-=t.writelen,t.writelen=0}(r),e)!function(t,e,r,n,i){--e.pendingcb,r?(process.nextTick(i,n),process.nextTick(T,t,e),t._writableState.errorEmitted=!0,x(t,n)):(i(n),t._writableState.errorEmitted=!0,x(t,n),T(t,e))}(t,r,n,e,i);else{var o=R(r)||t.destroyed;o||r.corked||r.bufferProcessing||!r.bufferedRequest||A(t,r),n?process.nextTick(M,t,r,o,i):M(t,r,o,i)}}(e,t)},this.writecb=null,this.writelen=0,this.bufferedRequest=null,this.lastBufferedRequest=null,this.pendingcb=0,this.prefinished=!1,this.errorEmitted=!1,this.emitClose=!1!==t.emitClose,this.autoDestroy=!!t.autoDestroy,this.bufferedRequestCount=0,this.corkedRequestsFree=new n(this)}function S(t){var e=this instanceof(i=i||r(3536));if(!e&&!f.call(S,this))return new S(t);this._writableState=new E(t,this,e),this.writable=!0,t&&("function"==typeof t.write&&(this._write=t.write),"function"==typeof t.writev&&(this._writev=t.writev),"function"==typeof t.destroy&&(this._destroy=t.destroy),"function"==typeof t.final&&(this._final=t.final)),a.call(this)}function k(t,e,r,n,i,o,a){e.writelen=n,e.writecb=a,e.writing=!0,e.sync=!0,e.destroyed?e.onwrite(new v("write")):r?t._writev(i,e.onwrite):t._write(i,o,e.onwrite),e.sync=!1}function M(t,e,r,n){r||function(t,e){0===e.length&&e.needDrain&&(e.needDrain=!1,t.emit("drain"))}(t,e),e.pendingcb--,n(),T(t,e)}function A(t,e){e.bufferProcessing=!0;var r=e.bufferedRequest;if(t._writev&&r&&r.next){var i=e.bufferedRequestCount,o=new Array(i),a=e.corkedRequestsFree;a.entry=r;for(var s=0,u=!0;r;)o[s]=r,r.isBuf||(u=!1),r=r.next,s+=1;o.allBuffers=u,k(t,e,!0,e.length,o,"",a.finish),e.pendingcb++,e.lastBufferedRequest=null,a.next?(e.corkedRequestsFree=a.next,a.next=null):e.corkedRequestsFree=new n(e),e.bufferedRequestCount=0}else{for(;r;){var f=r.chunk,l=r.encoding,h=r.callback;if(k(t,e,!1,e.objectMode?1:f.length,f,l,h),r=r.next,e.bufferedRequestCount--,e.writing)break}null===r&&(e.lastBufferedRequest=null)}e.bufferedRequest=r,e.bufferProcessing=!1}function R(t){return t.ending&&0===t.length&&null===t.bufferedRequest&&!t.finished&&!t.writing}function j(t,e){t._final((function(r){e.pendingcb--,r&&x(t,r),e.prefinished=!0,t.emit("prefinish"),T(t,e)}))}function T(t,e){var r=R(e);if(r&&(function(t,e){e.prefinished||e.finalCalled||("function"!=typeof t._final||e.destroyed?(e.prefinished=!0,t.emit("prefinish")):(e.pendingcb++,e.finalCalled=!0,process.nextTick(j,t,e)))}(t,e),0===e.pendingcb&&(e.finished=!0,t.emit("finish"),e.autoDestroy))){var n=t._readableState;(!n||n.autoDestroy&&n.endEmitted)&&t.destroy()}return r}r(5717)(S,a),E.prototype.getBuffer=function(){for(var t=this.bufferedRequest,e=[];t;)e.push(t),t=t.next;return e},function(){try{Object.defineProperty(E.prototype,"buffer",{get:o.deprecate((function(){return this.getBuffer()}),"_writableState.buffer is deprecated. Use _writableState.getBuffer instead.","DEP0003")})}catch(t){}}(),"function"==typeof Symbol&&Symbol.hasInstance&&"function"==typeof Function.prototype[Symbol.hasInstance]?(f=Function.prototype[Symbol.hasInstance],Object.defineProperty(S,Symbol.hasInstance,{value:function(t){return!!f.call(this,t)||this===S&&(t&&t._writableState instanceof E)}})):f=function(t){return t instanceof this},S.prototype.pipe=function(){x(this,new g)},S.prototype.write=function(t,e,r){var n,i=this._writableState,o=!1,a=!i.objectMode&&(n=t,s.isBuffer(n)||n instanceof u);return a&&!s.isBuffer(t)&&(t=function(t){return s.from(t)}(t)),"function"==typeof e&&(r=e,e=null),a?e="buffer":e||(e=i.defaultEncoding),"function"!=typeof r&&(r=_),i.ending?function(t,e){var r=new m;x(t,r),process.nextTick(e,r)}(this,r):(a||function(t,e,r,n){var i;return null===r?i=new b:"string"==typeof r||e.objectMode||(i=new p("chunk",["string","Buffer"],r)),!i||(x(t,i),process.nextTick(n,i),!1)}(this,i,t,r))&&(i.pendingcb++,o=function(t,e,r,n,i,o){if(!r){var a=function(t,e,r){t.objectMode||!1===t.decodeStrings||"string"!=typeof e||(e=s.from(e,r));return e}(e,n,i);n!==a&&(r=!0,i="buffer",n=a)}var u=e.objectMode?1:n.length;e.length+=u;var f=e.length<e.highWaterMark;f||(e.needDrain=!0);if(e.writing||e.corked){var l=e.lastBufferedRequest;e.lastBufferedRequest={chunk:n,encoding:i,isBuf:r,callback:o,next:null},l?l.next=e.lastBufferedRequest:e.bufferedRequest=e.lastBufferedRequest,e.bufferedRequestCount+=1}else k(t,e,!1,u,n,i,o);return f}(this,i,a,t,e,r)),o},S.prototype.cork=function(){this._writableState.corked++},S.prototype.uncork=function(){var t=this._writableState;t.corked&&(t.corked--,t.writing||t.corked||t.bufferProcessing||!t.bufferedRequest||A(this,t))},S.prototype.setDefaultEncoding=function(t){if("string"==typeof t&&(t=t.toLowerCase()),!(["hex","utf8","utf-8","ascii","binary","base64","ucs2","ucs-2","utf16le","utf-16le","raw"].indexOf((t+"").toLowerCase())>-1))throw new w(t);return this._writableState.defaultEncoding=t,this},Object.defineProperty(S.prototype,"writableBuffer",{enumerable:!1,get:function(){return this._writableState&&this._writableState.getBuffer()}}),Object.defineProperty(S.prototype,"writableHighWaterMark",{enumerable:!1,get:function(){return this._writableState.highWaterMark}}),S.prototype._write=function(t,e,r){r(new d("_write()"))},S.prototype._writev=null,S.prototype.end=function(t,e,r){var n=this._writableState;return"function"==typeof t?(r=t,t=null,e=null):"function"==typeof e&&(r=e,e=null),null!=t&&this.write(t,e),n.corked&&(n.corked=1,this.uncork()),n.ending||function(t,e,r){e.ending=!0,T(t,e),r&&(e.finished?process.nextTick(r):t.once("finish",r));e.ended=!0,t.writable=!1}(this,n,r),this},Object.defineProperty(S.prototype,"writableLength",{enumerable:!1,get:function(){return this._writableState.length}}),Object.defineProperty(S.prototype,"destroyed",{enumerable:!1,get:function(){return void 0!==this._writableState&&this._writableState.destroyed},set:function(t){this._writableState&&(this._writableState.destroyed=t)}}),S.prototype.destroy=l.destroy,S.prototype._undestroy=l.undestroy,S.prototype._destroy=function(t,e){e(t)}},6492:(t,e,r)=>{"use strict";var n;function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var o=r(3790),a=Symbol("lastResolve"),s=Symbol("lastReject"),u=Symbol("error"),f=Symbol("ended"),l=Symbol("lastPromise"),h=Symbol("handlePromise"),c=Symbol("stream");function p(t,e){return{value:t,done:e}}function d(t){var e=t[a];if(null!==e){var r=t[c].read();null!==r&&(t[l]=null,t[a]=null,t[s]=null,e(p(r,!1)))}}function y(t){process.nextTick(d,t)}var g=Object.getPrototypeOf((function(){})),v=Object.setPrototypeOf((i(n={get stream(){return this[c]},next:function(){var t=this,e=this[u];if(null!==e)return Promise.reject(e);if(this[f])return Promise.resolve(p(void 0,!0));if(this[c].destroyed)return new Promise((function(e,r){process.nextTick((function(){t[u]?r(t[u]):e(p(void 0,!0))}))}));var r,n=this[l];if(n)r=new Promise(function(t,e){return function(r,n){t.then((function(){e[f]?r(p(void 0,!0)):e[h](r,n)}),n)}}(n,this));else{var i=this[c].read();if(null!==i)return Promise.resolve(p(i,!1));r=new Promise(this[h])}return this[l]=r,r}},Symbol.asyncIterator,(function(){return this})),i(n,"return",(function(){var t=this;return new Promise((function(e,r){t[c].destroy(null,(function(t){t?r(t):e(p(void 0,!0))}))}))})),n),g);t.exports=function(t){var e,r=Object.create(v,(i(e={},c,{value:t,writable:!0}),i(e,a,{value:null,writable:!0}),i(e,s,{value:null,writable:!0}),i(e,u,{value:null,writable:!0}),i(e,f,{value:t._readableState.endEmitted,writable:!0}),i(e,h,{value:function(t,e){var n=r[c].read();n?(r[l]=null,r[a]=null,r[s]=null,t(p(n,!1))):(r[a]=t,r[s]=e)},writable:!0}),e));return r[l]=null,o(t,(function(t){if(t&&"ERR_STREAM_PREMATURE_CLOSE"!==t.code){var e=r[s];return null!==e&&(r[l]=null,r[a]=null,r[s]=null,e(t)),void(r[u]=t)}var n=r[a];null!==n&&(r[l]=null,r[a]=null,r[s]=null,n(p(void 0,!0))),r[f]=!0})),t.on("readable",y.bind(null,r)),r}},1396:(t,e,r)=>{"use strict";function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var a=r(1664).Buffer,s=r(1758).inspect,u=s&&s.custom||"inspect";t.exports=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.head=null,this.tail=null,this.length=0}var e,r,f;return e=t,(r=[{key:"push",value:function(t){var e={data:t,next:null};this.length>0?this.tail.next=e:this.head=e,this.tail=e,++this.length}},{key:"unshift",value:function(t){var e={data:t,next:this.head};0===this.length&&(this.tail=e),this.head=e,++this.length}},{key:"shift",value:function(){if(0!==this.length){var t=this.head.data;return 1===this.length?this.head=this.tail=null:this.head=this.head.next,--this.length,t}}},{key:"clear",value:function(){this.head=this.tail=null,this.length=0}},{key:"join",value:function(t){if(0===this.length)return"";for(var e=this.head,r=""+e.data;e=e.next;)r+=t+e.data;return r}},{key:"concat",value:function(t){if(0===this.length)return a.alloc(0);for(var e,r,n,i=a.allocUnsafe(t>>>0),o=this.head,s=0;o;)e=o.data,r=i,n=s,a.prototype.copy.call(e,r,n),s+=o.data.length,o=o.next;return i}},{key:"consume",value:function(t,e){var r;return t<this.head.data.length?(r=this.head.data.slice(0,t),this.head.data=this.head.data.slice(t)):r=t===this.head.data.length?this.shift():e?this._getString(t):this._getBuffer(t),r}},{key:"first",value:function(){return this.head.data}},{key:"_getString",value:function(t){var e=this.head,r=1,n=e.data;for(t-=n.length;e=e.next;){var i=e.data,o=t>i.length?i.length:t;if(o===i.length?n+=i:n+=i.slice(0,t),0==(t-=o)){o===i.length?(++r,e.next?this.head=e.next:this.head=this.tail=null):(this.head=e,e.data=i.slice(o));break}++r}return this.length-=r,n}},{key:"_getBuffer",value:function(t){var e=a.allocUnsafe(t),r=this.head,n=1;for(r.data.copy(e),t-=r.data.length;r=r.next;){var i=r.data,o=t>i.length?i.length:t;if(i.copy(e,e.length-t,0,o),0==(t-=o)){o===i.length?(++n,r.next?this.head=r.next:this.head=this.tail=null):(this.head=r,r.data=i.slice(o));break}++n}return this.length-=n,e}},{key:u,value:function(t,e){return s(this,function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},e,{depth:0,customInspect:!1}))}}])&&o(e.prototype,r),f&&o(e,f),t}()},8522:t=>{"use strict";function e(t,e){n(t,e),r(t)}function r(t){t._writableState&&!t._writableState.emitClose||t._readableState&&!t._readableState.emitClose||t.emit("close")}function n(t,e){t.emit("error",e)}t.exports={destroy:function(t,i){var o=this,a=this._readableState&&this._readableState.destroyed,s=this._writableState&&this._writableState.destroyed;return a||s?(i?i(t):t&&(this._writableState?this._writableState.errorEmitted||(this._writableState.errorEmitted=!0,process.nextTick(n,this,t)):process.nextTick(n,this,t)),this):(this._readableState&&(this._readableState.destroyed=!0),this._writableState&&(this._writableState.destroyed=!0),this._destroy(t||null,(function(t){!i&&t?o._writableState?o._writableState.errorEmitted?process.nextTick(r,o):(o._writableState.errorEmitted=!0,process.nextTick(e,o,t)):process.nextTick(e,o,t):i?(process.nextTick(r,o),i(t)):process.nextTick(r,o)})),this)},undestroy:function(){this._readableState&&(this._readableState.destroyed=!1,this._readableState.reading=!1,this._readableState.ended=!1,this._readableState.endEmitted=!1),this._writableState&&(this._writableState.destroyed=!1,this._writableState.ended=!1,this._writableState.ending=!1,this._writableState.finalCalled=!1,this._writableState.prefinished=!1,this._writableState.finished=!1,this._writableState.errorEmitted=!1)},errorOrDestroy:function(t,e){var r=t._readableState,n=t._writableState;r&&r.autoDestroy||n&&n.autoDestroy?t.destroy(e):t.emit("error",e)}}},3790:(t,e,r)=>{"use strict";var n=r(8870).q.ERR_STREAM_PREMATURE_CLOSE;function i(){}t.exports=function t(e,r,o){if("function"==typeof r)return t(e,null,r);r||(r={}),o=function(t){var e=!1;return function(){if(!e){e=!0;for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];t.apply(this,n)}}}(o||i);var a=r.readable||!1!==r.readable&&e.readable,s=r.writable||!1!==r.writable&&e.writable,u=function(){e.writable||l()},f=e._writableState&&e._writableState.finished,l=function(){s=!1,f=!0,a||o.call(e)},h=e._readableState&&e._readableState.endEmitted,c=function(){a=!1,h=!0,s||o.call(e)},p=function(t){o.call(e,t)},d=function(){var t;return a&&!h?(e._readableState&&e._readableState.ended||(t=new n),o.call(e,t)):s&&!f?(e._writableState&&e._writableState.ended||(t=new n),o.call(e,t)):void 0},y=function(){e.req.on("finish",l)};return!function(t){return t.setHeader&&"function"==typeof t.abort}(e)?s&&!e._writableState&&(e.on("end",u),e.on("close",u)):(e.on("complete",l),e.on("abort",d),e.req?y():e.on("request",y)),e.on("end",c),e.on("finish",l),!1!==r.error&&e.on("error",p),e.on("close",d),function(){e.removeListener("complete",l),e.removeListener("abort",d),e.removeListener("request",y),e.req&&e.req.removeListener("finish",l),e.removeListener("end",u),e.removeListener("close",u),e.removeListener("finish",l),e.removeListener("end",c),e.removeListener("error",p),e.removeListener("close",d)}}},8881:t=>{t.exports=function(){throw new Error("Readable.from is not available in the browser")}},8155:(t,e,r)=>{"use strict";var n;var i=r(8870).q,o=i.ERR_MISSING_ARGS,a=i.ERR_STREAM_DESTROYED;function s(t){if(t)throw t}function u(t,e,i,o){o=function(t){var e=!1;return function(){e||(e=!0,t.apply(void 0,arguments))}}(o);var s=!1;t.on("close",(function(){s=!0})),void 0===n&&(n=r(3790)),n(t,{readable:e,writable:i},(function(t){if(t)return o(t);s=!0,o()}));var u=!1;return function(e){if(!s&&!u)return u=!0,function(t){return t.setHeader&&"function"==typeof t.abort}(t)?t.abort():"function"==typeof t.destroy?t.destroy():void o(e||new a("pipe"))}}function f(t){t()}function l(t,e){return t.pipe(e)}function h(t){return t.length?"function"!=typeof t[t.length-1]?s:t.pop():s}t.exports=function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];var n,i=h(e);if(Array.isArray(e[0])&&(e=e[0]),e.length<2)throw new o("streams");var a=e.map((function(t,r){var o=r<e.length-1;return u(t,o,r>0,(function(t){n||(n=t),t&&a.forEach(f),o||(a.forEach(f),i(n))}))}));return e.reduce(l)}},1379:(t,e,r)=>{"use strict";var n=r(8870).q.ERR_INVALID_OPT_VALUE;t.exports={getHighWaterMark:function(t,e,r,i){var o=function(t,e,r){return null!=t.highWaterMark?t.highWaterMark:e?t[r]:null}(e,i,r);if(null!=o){if(!isFinite(o)||Math.floor(o)!==o||o<0)throw new n(i?r:"highWaterMark",o);return Math.floor(o)}return t.objectMode?16:16384}}},4150:(t,e,r)=>{t.exports=r(7988).EventEmitter},8043:(t,e,r)=>{t.exports=i;var n=r(7988).EventEmitter;function i(){n.call(this)}r(5717)(i,n),i.Readable=r(4459),i.Writable=r(4987),i.Duplex=r(3536),i.Transform=r(6695),i.PassThrough=r(8373),i.finished=r(3790),i.pipeline=r(8155),i.Stream=i,i.prototype.pipe=function(t,e){var r=this;function i(e){t.writable&&!1===t.write(e)&&r.pause&&r.pause()}function o(){r.readable&&r.resume&&r.resume()}r.on("data",i),t.on("drain",o),t._isStdio||e&&!1===e.end||(r.on("end",s),r.on("close",u));var a=!1;function s(){a||(a=!0,t.end())}function u(){a||(a=!0,"function"==typeof t.destroy&&t.destroy())}function f(t){if(l(),0===n.listenerCount(this,"error"))throw t}function l(){r.removeListener("data",i),t.removeListener("drain",o),r.removeListener("end",s),r.removeListener("close",u),r.removeListener("error",f),t.removeListener("error",f),r.removeListener("end",l),r.removeListener("close",l),t.removeListener("close",l)}return r.on("error",f),t.on("error",f),r.on("end",l),r.on("close",l),t.on("close",l),t.emit("pipe",r),t}},140:(t,e,r)=>{"use strict";var n=r(9509).Buffer,i=n.isEncoding||function(t){switch((t=""+t)&&t.toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":case"raw":return!0;default:return!1}};function o(t){var e;switch(this.encoding=function(t){var e=function(t){if(!t)return"utf8";for(var e;;)switch(t){case"utf8":case"utf-8":return"utf8";case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return"utf16le";case"latin1":case"binary":return"latin1";case"base64":case"ascii":case"hex":return t;default:if(e)return;t=(""+t).toLowerCase(),e=!0}}(t);if("string"!=typeof e&&(n.isEncoding===i||!i(t)))throw new Error("Unknown encoding: "+t);return e||t}(t),this.encoding){case"utf16le":this.text=u,this.end=f,e=4;break;case"utf8":this.fillLast=s,e=4;break;case"base64":this.text=l,this.end=h,e=3;break;default:return this.write=c,void(this.end=p)}this.lastNeed=0,this.lastTotal=0,this.lastChar=n.allocUnsafe(e)}function a(t){return t<=127?0:t>>5==6?2:t>>4==14?3:t>>3==30?4:t>>6==2?-1:-2}function s(t){var e=this.lastTotal-this.lastNeed,r=function(t,e,r){if(128!=(192&e[0]))return t.lastNeed=0,"�";if(t.lastNeed>1&&e.length>1){if(128!=(192&e[1]))return t.lastNeed=1,"�";if(t.lastNeed>2&&e.length>2&&128!=(192&e[2]))return t.lastNeed=2,"�"}}(this,t);return void 0!==r?r:this.lastNeed<=t.length?(t.copy(this.lastChar,e,0,this.lastNeed),this.lastChar.toString(this.encoding,0,this.lastTotal)):(t.copy(this.lastChar,e,0,t.length),void(this.lastNeed-=t.length))}function u(t,e){if((t.length-e)%2==0){var r=t.toString("utf16le",e);if(r){var n=r.charCodeAt(r.length-1);if(n>=55296&&n<=56319)return this.lastNeed=2,this.lastTotal=4,this.lastChar[0]=t[t.length-2],this.lastChar[1]=t[t.length-1],r.slice(0,-1)}return r}return this.lastNeed=1,this.lastTotal=2,this.lastChar[0]=t[t.length-1],t.toString("utf16le",e,t.length-1)}function f(t){var e=t&&t.length?this.write(t):"";if(this.lastNeed){var r=this.lastTotal-this.lastNeed;return e+this.lastChar.toString("utf16le",0,r)}return e}function l(t,e){var r=(t.length-e)%3;return 0===r?t.toString("base64",e):(this.lastNeed=3-r,this.lastTotal=3,1===r?this.lastChar[0]=t[t.length-1]:(this.lastChar[0]=t[t.length-2],this.lastChar[1]=t[t.length-1]),t.toString("base64",e,t.length-r))}function h(t){var e=t&&t.length?this.write(t):"";return this.lastNeed?e+this.lastChar.toString("base64",0,3-this.lastNeed):e}function c(t){return t.toString(this.encoding)}function p(t){return t&&t.length?this.write(t):""}e.s=o,o.prototype.write=function(t){if(0===t.length)return"";var e,r;if(this.lastNeed){if(void 0===(e=this.fillLast(t)))return"";r=this.lastNeed,this.lastNeed=0}else r=0;return r<t.length?e?e+this.text(t,r):this.text(t,r):e||""},o.prototype.end=function(t){var e=t&&t.length?this.write(t):"";return this.lastNeed?e+"�":e},o.prototype.text=function(t,e){var r=function(t,e,r){var n=e.length-1;if(n<r)return 0;var i=a(e[n]);if(i>=0)return i>0&&(t.lastNeed=i-1),i;if(--n<r||-2===i)return 0;if((i=a(e[n]))>=0)return i>0&&(t.lastNeed=i-2),i;if(--n<r||-2===i)return 0;if((i=a(e[n]))>=0)return i>0&&(2===i?i=0:t.lastNeed=i-3),i;return 0}(this,t,e);if(!this.lastNeed)return t.toString("utf8",e);this.lastTotal=r;var n=t.length-(r-this.lastNeed);return t.copy(this.lastChar,0,n),t.toString("utf8",e,n)},o.prototype.fillLast=function(t){if(this.lastNeed<=t.length)return t.copy(this.lastChar,this.lastTotal-this.lastNeed,0,this.lastNeed),this.lastChar.toString(this.encoding,0,this.lastTotal);t.copy(this.lastChar,this.lastTotal-this.lastNeed,0,t.length),this.lastNeed-=t.length}},8526:(t,e,r)=>{function n(t){try{if(!r.g.localStorage)return!1}catch(t){return!1}var e=r.g.localStorage[t];return null!=e&&"true"===String(e).toLowerCase()}t.exports=function(t,e){if(n("noDeprecation"))return t;var r=!1;return function(){if(!r){if(n("throwDeprecation"))throw new Error(e);n("traceDeprecation")?console.trace(e):console.warn(e),r=!0}return t.apply(this,arguments)}}},5937:(t,e,r)=>{"use strict";r.d(e,{default:()=>Qt});r(5666);const n=THREE;var i=r(7701),o=r(1875),a=r.n(o),s=r(3614),u=r.n(s),f=r(8929),l=r(9697),h=r.n(l);class c{static async nodeRequire(t,e){const r="function"==typeof t.require?t.require:null,n="function"==typeof t.import?t.import:null;if(!r&&!n)throw new Error("Neither NodeJS `require` or `import` is available. (If in test environment, maybe, you should add `global.require = require;`.");return r?r(e):(await n(e)).default}}c.Delta=class{constructor(){this.perf=null,this.start=0}static async new(t={nodejs:!1}){return await(new this).init(t)}async init(t={nodejs:!1}){if(t.nodejs){const{performance:t}=await c.nodeRequire(r.g,"perf_hooks");this.perf=t}else this.perf=window.performance;return this.start=this.perf.now(),this}_checkInit(){if(!this.perf)throw new Error("Do call `async .init()` first.")}get(){return this._checkInit(),(this.perf.now()-this.start)/1e3}print(t="delta:"){this._checkInit(),this.get().toFixed(3)}};const p=c;var d=r(2768),y=r.n(d);const g="1.2.2";class v extends n.Line{constructor(t,e=16711680){let r=new n.BufferGeometry,i=new Float32Array(3*t);r.setAttribute("position",new n.BufferAttribute(i,3)),super(r,new n.LineBasicMaterial({color:e})),this._maxPoints=t,this._numPoints=0}_frustumCullingWorkaround(){this.geometry.computeBoundingSphere()}static _getPointsRandomWalk(t){let e=[],r=0,n=0,i=0;for(let o=0;o<t;o++)e.push(r),e.push(n),e.push(i),r+=2*(Math.random()-.5),n+=2*(Math.random()-.5),i+=2*(Math.random()-.5);return e}setColor(t){this.material.color.setHex(t)}getColor(){return this.material.color}getPoints(){let t=this.geometry.attributes.position.array,e=[];for(let r=0;r<this._numPoints;r++)e.push(new n.Vector3(t[3*r],t[3*r+1],t[3*r+2]));return e}static flattenPoints(t){return t.map((t=>[t.x,t.y,t.z])).reduce(((t,e)=>t.concat(e)))}updatePoints(t,e=!1){e||(t=b.flattenPoints(t));let r=this.geometry.attributes.position,n=r.count,i=t.length/3;i>n&&(i=n);for(let e=0;e<i;e++)r.array[3*e]=t[3*e],r.array[3*e+1]=t[3*e+1],r.array[3*e+2]=t[3*e+2];r.needsUpdate=!0,this.geometry.setDrawRange(0,i),this._frustumCullingWorkaround(),this._numPoints=i}clearPoints(){this.updatePoints([],!0)}updatePointsRandomWalk(t){this.updatePoints(v._getPointsRandomWalk(t),!0)}}class b extends v{constructor(t={}){let e=Object.assign({},{color:16711680,maxPoints:256,infLength:9999},t);super(e.maxPoints,e.color),console.info("Laser 1.2.2 with THREE r"+n.REVISION),this.version=g,this._src=new n.Vector3(0,0,0),this._raycaster=new n.Raycaster,this._infLen=e.infLength,this._meshes=[]}setSource(t,e=null){this._src=e?t.clone().applyMatrix4(e.matrixWorld):t.clone()}getSource(){return this._src.clone()}static direct(t,e){return e.clone().sub(t).normalize()}static reflect(t,e){return t.clone().sub(e.clone().multiplyScalar(2*t.dot(e)))}_raycast(t,e,r){let n=this._raycaster.intersectObjects(t,e);if(r){for(let t=0;t<n.length;t++)if(n[t].face!==r)return n[t];return null}return n.length>0?n[0]:null}raycast(t,e,r,n=null,i=!1){return this._raycaster.set(t,e),this._raycast(r,i,n)}raycastFromCamera(t,e,r,i,o,a,s=!1){let u=new n.Vector2(t/r*2-1,-e/i*2+1);return this._raycaster.setFromCamera(u,o),this._raycast(a,s,null)}getMeshesHit(){return this._meshes}point(t,e=null){this.updatePoints([this._src.x,this._src.y,this._src.z,t.x,t.y,t.z],!0),this._meshes.length=0,e&&this.material.color.setHex(e)}pointWithRaytrace(t,e=[],r=null,n=16){if(this.point(t,r),n<1)return;let i=this.getSource(),o=b.direct(i,t),a=this.raycast(i,o,e);if(!a)return;let s=this.computeReflections(t,o,a,e,n);this.updatePoints([i.x,i.y,i.z,t.x,t.y,t.z,...s],!0)}_computeReflectionsRecursive(t,e,r,i,o){const a=[],s=this;return function t(e,r,u){let f=(new n.Matrix3).getNormalMatrix(u.object.matrixWorld),l=u.face.normal.clone().applyMatrix3(f).normalize(),h=b.reflect(r,l),c=s.raycast(e,h,i,u.face);if(c){let e=c.point;a.push(e.x,e.y,e.z),a.length/3<o&&t(e,h,c)}else{let t=e.clone().add(h.multiplyScalar(s._infLen));a.push(t.x,t.y,t.z)}}(t,e,r),a}_computeReflections(t,e,r,i,o){const a=[];for(this._meshes=[r.object];;){let s=(new n.Matrix3).getNormalMatrix(r.object.matrixWorld),u=r.face.normal.clone().applyMatrix3(s).normalize(),f=b.reflect(e,u),l=this.raycast(t,f,i,r.face);if(l){let n=l.point;if(a.push(n.x,n.y,n.z),this._meshes.push(l.object),a.length/3<o){t=n,e=f,r=l;continue}break}{let e=t.clone().add(f.multiplyScalar(this._infLen));a.push(e.x,e.y,e.z);break}}return a}computeReflections(t,e,r,n,i){return this._computeReflections(t,e,r,n,i)}}const m=b;var w=6371008.8,x={centimeters:637100880,centimetres:637100880,degrees:57.22891354143274,feet:20902260.511392,inches:39.37*w,kilometers:6371.0088,kilometres:6371.0088,meters:w,metres:w,miles:3958.761333810546,millimeters:6371008800,millimetres:6371008800,nauticalmiles:w/1852,radians:1,yards:5825721.287490856};function _(t,e,r){void 0===r&&(r={});var n={type:"Feature"};return(0===r.id||r.id)&&(n.id=r.id),r.bbox&&(n.bbox=r.bbox),n.properties=e||{},n.geometry=t,n}function E(t,e,r){if(void 0===r&&(r={}),!t)throw new Error("coordinates is required");if(!Array.isArray(t))throw new Error("coordinates must be an Array");if(t.length<2)throw new Error("coordinates must be at least 2 numbers long");if(!B(t[0])||!B(t[1]))throw new Error("coordinates must contain numbers");return _({type:"Point",coordinates:t},e,r)}function S(t,e,r){void 0===r&&(r={});for(var n=0,i=t;n<i.length;n++){var o=i[n];if(o.length<4)throw new Error("Each LinearRing of a Polygon must have 4 or more Positions.");for(var a=0;a<o[o.length-1].length;a++)if(o[o.length-1][a]!==o[0][a])throw new Error("First and last Position are not equivalent.")}return _({type:"Polygon",coordinates:t},e,r)}function k(t,e,r){if(void 0===r&&(r={}),t.length<2)throw new Error("coordinates must be an array of two or more positions");return _({type:"LineString",coordinates:t},e,r)}function M(t,e){void 0===e&&(e={});var r={type:"FeatureCollection"};return e.id&&(r.id=e.id),e.bbox&&(r.bbox=e.bbox),r.features=t,r}function A(t,e,r){return void 0===r&&(r={}),_({type:"MultiPolygon",coordinates:t},e,r)}function R(t,e){void 0===e&&(e="kilometers");var r=x[e];if(!r)throw new Error(e+" units is invalid");return t*r}function j(t,e){void 0===e&&(e="kilometers");var r=x[e];if(!r)throw new Error(e+" units is invalid");return t/r}function T(t){return 180*(t%(2*Math.PI))/Math.PI}function P(t){return t%360*Math.PI/180}function I(t,e,r){if(void 0===e&&(e="kilometers"),void 0===r&&(r="kilometers"),!(t>=0))throw new Error("length must be a positive number");return R(j(t,e),r)}function B(t){return!isNaN(t)&&null!==t&&!Array.isArray(t)}function L(t){return!!t&&t.constructor===Object}function O(t){if(!t)throw new Error("coord is required");if(!Array.isArray(t)){if("Feature"===t.type&&null!==t.geometry&&"Point"===t.geometry.type)return t.geometry.coordinates;if("Point"===t.type)return t.coordinates}if(Array.isArray(t)&&t.length>=2&&!Array.isArray(t[0])&&!Array.isArray(t[1]))return t;throw new Error("coord must be GeoJSON Point or an Array of numbers")}function C(t){if(Array.isArray(t))return t;if("Feature"===t.type){if(null!==t.geometry)return t.geometry.coordinates}else if(t.coordinates)return t.coordinates;throw new Error("coords must be GeoJSON Feature, Geometry Object or an Array")}function N(t){return"Feature"===t.type?t.geometry:t}function F(t,e,r,n){void 0===n&&(n={});var i=O(t),o=P(i[0]),a=P(i[1]),s=P(r),u=j(e,n.units),f=Math.asin(Math.sin(a)*Math.cos(u)+Math.cos(a)*Math.sin(u)*Math.cos(s));return E([T(o+Math.atan2(Math.sin(s)*Math.sin(u)*Math.cos(a),Math.cos(u)-Math.sin(a)*Math.sin(f))),T(f)],n.properties)}function U(t,e,r){if(null!==t)for(var n,i,o,a,s,u,f,l,h=0,c=0,p=t.type,d="FeatureCollection"===p,y="Feature"===p,g=d?t.features.length:1,v=0;v<g;v++){s=(l=!!(f=d?t.features[v].geometry:y?t.geometry:t)&&"GeometryCollection"===f.type)?f.geometries.length:1;for(var b=0;b<s;b++){var m=0,w=0;if(null!==(a=l?f.geometries[b]:f)){u=a.coordinates;var x=a.type;switch(h=!r||"Polygon"!==x&&"MultiPolygon"!==x?0:1,x){case null:break;case"Point":if(!1===e(u,c,v,m,w))return!1;c++,m++;break;case"LineString":case"MultiPoint":for(n=0;n<u.length;n++){if(!1===e(u[n],c,v,m,w))return!1;c++,"MultiPoint"===x&&m++}"LineString"===x&&m++;break;case"Polygon":case"MultiLineString":for(n=0;n<u.length;n++){for(i=0;i<u[n].length-h;i++){if(!1===e(u[n][i],c,v,m,w))return!1;c++}"MultiLineString"===x&&m++,"Polygon"===x&&w++}"Polygon"===x&&m++;break;case"MultiPolygon":for(n=0;n<u.length;n++){for(w=0,i=0;i<u[n].length;i++){for(o=0;o<u[n][i].length-h;o++){if(!1===e(u[n][i][o],c,v,m,w))return!1;c++}w++}m++}break;case"GeometryCollection":for(n=0;n<a.geometries.length;n++)if(!1===U(a.geometries[n],e,r))return!1;break;default:throw new Error("Unknown Geometry Type")}}}}}function D(t,e){var r,n,i,o,a,s,u,f,l,h,c=0,p="FeatureCollection"===t.type,d="Feature"===t.type,y=p?t.features.length:1;for(r=0;r<y;r++){for(s=p?t.features[r].geometry:d?t.geometry:t,f=p?t.features[r].properties:d?t.properties:{},l=p?t.features[r].bbox:d?t.bbox:void 0,h=p?t.features[r].id:d?t.id:void 0,a=(u=!!s&&"GeometryCollection"===s.type)?s.geometries.length:1,i=0;i<a;i++)if(null!==(o=u?s.geometries[i]:s))switch(o.type){case"Point":case"LineString":case"MultiPoint":case"Polygon":case"MultiLineString":case"MultiPolygon":if(!1===e(o,c,f,l,h))return!1;break;case"GeometryCollection":for(n=0;n<o.geometries.length;n++)if(!1===e(o.geometries[n],c,f,l,h))return!1;break;default:throw new Error("Unknown Geometry Type")}else if(!1===e(null,c,f,l,h))return!1;c++}}function V(t){var e={type:"Feature"};return Object.keys(t).forEach((function(r){switch(r){case"type":case"properties":case"geometry":return;default:e[r]=t[r]}})),e.properties=q(t.properties),e.geometry=z(t.geometry),e}function q(t){var e={};return t?(Object.keys(t).forEach((function(r){var n=t[r];"object"==typeof n?null===n?e[r]=null:n.length?e[r]=n.map((function(t){return t})):e[r]=q(n):e[r]=n})),e):e}function z(t){var e={type:t.type};return t.bbox&&(e.bbox=t.bbox),"GeometryCollection"===t.type?(e.geometries=t.geometries.map((function(t){return z(t)})),e):(e.coordinates=G(t.coordinates),e)}function G(t){return"object"!=typeof t[0]?t.slice():t.map((function(t){return G(t)}))}const W=function(t){if(!t)throw new Error("geojson is required");switch(t.type){case"Feature":return V(t);case"FeatureCollection":return function(t){var e={type:"FeatureCollection"};return Object.keys(t).forEach((function(r){switch(r){case"type":case"features":return;default:e[r]=t[r]}})),e.features=t.features.map((function(t){return V(t)})),e}(t);case"Point":case"LineString":case"Polygon":case"MultiPoint":case"MultiLineString":case"MultiPolygon":case"GeometryCollection":return z(t);default:throw new Error("unknown GeoJSON type")}};const H=function(t,e,r,n){if(!L(n=n||{}))throw new Error("options is invalid");var i=n.units,o=n.properties;if(!t)throw new Error("origin is required");if(null==e)throw new Error("distance is required");if(null==r)throw new Error("bearing is required");if(!(e>=0))throw new Error("distance must be greater than 0");var a=I(e,i,"meters"),s=O(t),u=function(t,e,r,n){n=void 0===n?w:Number(n);var i=e/n,o=t[0]*Math.PI/180,a=P(t[1]),s=P(r),u=i*Math.cos(s),f=a+u;Math.abs(f)>Math.PI/2&&(f=f>0?Math.PI-f:-Math.PI-f);var l=Math.log(Math.tan(f/2+Math.PI/4)/Math.tan(a/2+Math.PI/4)),h=Math.abs(l)>1e-11?u/l:Math.cos(a),c=i*Math.sin(s)/h;return[(180*(o+c)/Math.PI+540)%360-180,180*f/Math.PI]}(s,a,r);return u[0]+=u[0]-s[0]>180?-360:s[0]-u[0]>180?360:0,E(u,o)};const Y=function(t,e,r,n){if(!L(n=n||{}))throw new Error("options is invalid");var i=n.units,o=n.zTranslation,a=n.mutate;if(!t)throw new Error("geojson is required");if(null==e||isNaN(e))throw new Error("distance is required");if(o&&"number"!=typeof o&&isNaN(o))throw new Error("zTranslation is not a number");if(o=void 0!==o?o:0,0===e&&0===o)return t;if(null==r||isNaN(r))throw new Error("direction is required");return e<0&&(e=-e,r=-r),!1!==a&&void 0!==a||(t=W(t)),U(t,(function(t){var n=C(H(t,e,r,{units:i}));t[0]=n[0],t[1]=n[1],o&&3===t.length&&(t[2]+=o)})),t};const $=function(t,e){var r=0,n=0,i=0;return U(t,(function(t){r+=t[0],n+=t[1],i++}),!0),E([r/i,n/i],e)};function X(t,e){var r=P(t[1]),n=P(e[1]),i=P(e[0]-t[0]);i>Math.PI&&(i-=2*Math.PI),i<-Math.PI&&(i+=2*Math.PI);var o=Math.log(Math.tan(n/2+Math.PI/4)/Math.tan(r/2+Math.PI/4));return(T(Math.atan2(i,o))+360)%360}const J=function(t,e,r){if(!L(r=r||{}))throw new Error("options is invalid");var n,i=r.final;if(!t)throw new Error("start point is required");if(!e)throw new Error("end point is required");return(n=i?X(O(e),O(t)):X(O(t),O(e)))>180?-(360-n):n};const Z=function(t,e,r){if(!L(r=r||{}))throw new Error("options is invalid");var n=r.units;if(!t)throw new Error("from point is required");if(!e)throw new Error("to point is required");var i=O(t),o=O(e);return o[0]+=o[0]-i[0]>180?-360:i[0]-o[0]>180?360:0,I(function(t,e,r){var n=r=void 0===r?w:Number(r),i=t[1]*Math.PI/180,o=e[1]*Math.PI/180,a=o-i,s=Math.abs(e[0]-t[0])*Math.PI/180;s>Math.PI&&(s-=2*Math.PI);var u=Math.log(Math.tan(o/2+Math.PI/4)/Math.tan(i/2+Math.PI/4)),f=Math.abs(u)>1e-11?a/u:Math.cos(i);return Math.sqrt(a*a+f*f*s*s)*n}(i,o),"meters",n)};const K=function(t,e,r){if(!L(r=r||{}))throw new Error("options is invalid");var n=r.pivot,i=r.mutate;if(!t)throw new Error("geojson is required");if(null==e||isNaN(e))throw new Error("angle is required");return 0===e||(n||(n=$(t)),!1!==i&&void 0!==i||(t=W(t)),U(t,(function(t){var r=J(n,t)+e,i=Z(n,t),o=C(H(n,i,r));t[0]=o[0],t[1]=o[1]}))),t};function Q(t){var e=[1/0,1/0,-1/0,-1/0];return U(t,(function(t){e[0]>t[0]&&(e[0]=t[0]),e[1]>t[1]&&(e[1]=t[1]),e[2]<t[0]&&(e[2]=t[0]),e[3]<t[1]&&(e[3]=t[1])})),e}Q.default=Q;const tt=Q;const et=function(t,e){void 0===e&&(e={});var r=tt(t);return E([(r[0]+r[2])/2,(r[1]+r[3])/2],e.properties,e)};const rt=function(t,e,r){void 0===r&&(r={});var n=O(t),i=O(e),o=P(i[1]-n[1]),a=P(i[0]-n[0]),s=P(n[1]),u=P(i[1]),f=Math.pow(Math.sin(o/2),2)+Math.pow(Math.sin(a/2),2)*Math.cos(s)*Math.cos(u);return R(2*Math.atan2(Math.sqrt(f),Math.sqrt(1-f)),r.units)};function nt(t,e){void 0===e&&(e={});var r=Number(t[0]),n=Number(t[1]),i=Number(t[2]),o=Number(t[3]);if(6===t.length)throw new Error("@turf/bbox-polygon does not support BBox with 6 positions");var a=[r,n];return S([[a,[i,n],[i,o],[r,o],a]],e.properties,{bbox:t,id:e.id})}const it=function(t,e,r){void 0===r&&(r={});for(var n=r.steps||64,i=r.properties?r.properties:!Array.isArray(t)&&"Feature"===t.type&&t.properties?t.properties:{},o=[],a=0;a<n;a++)o.push(F(t,e,-360*a/n,r).geometry.coordinates);return o.push(o[0]),S([o],i)};function ot(t){return function(t){if(Array.isArray(t))return ht(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||lt(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function at(t,e,r){return(at=st()?Reflect.construct:function(t,e,r){var n=[null];n.push.apply(n,e);var i=new(Function.bind.apply(t,n));return r&&ut(i,r.prototype),i}).apply(null,arguments)}function st(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function ut(t,e){return(ut=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function ft(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var r=[],n=!0,i=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(n=(a=s.next()).done)&&(r.push(a.value),!e||r.length!==e);n=!0);}catch(t){i=!0,o=t}finally{try{n||null==s.return||s.return()}finally{if(i)throw o}}return r}(t,e)||lt(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function lt(t,e){if(t){if("string"==typeof t)return ht(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?ht(t,e):void 0}}function ht(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function ct(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var pt=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,r,i;return e=t,i=[{key:"createLine",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{color:16711680,maxPoints:256},r=new m(e);return r.updatePoints(t),r}},{key:"bboxToWireframe",value:function(t,e){var r,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o={offsetZ:0,color:52428,height:.001},a=Object.assign({},o,i),s=ft(t,4),u=s[0],f=s[1],l=s[2],h=s[3],c=e([(f+h)/2,(u+l)/2]),p=e([h,u]),d=ft(p,2),y=d[0],g=d[1],v=e([f,l]),b=ft(v,2),m=b[0],w=b[1],x=[m-y,g-w],_=a.height,E=new n.LineSegments(new n.EdgesGeometry(at(n.BoxBufferGeometry,x.concat([_]))),new n.LineBasicMaterial({color:a.color}));return(r=E.position).set.apply(r,ot(c).concat([-_/2+a.offsetZ])),E.name="bbox-".concat(window.performance.now()),{obj:E,offset:[].concat(ot(c),[a.offsetZ]),size:[].concat(x,[a.height])}}},{key:"tileToBbox",value:function(t){return y().tileToBBOX(t)}},{key:"_resolveTri",value:function(t,e,r,i,o){var a=(new m).raycast(new n.Vector3(t,e,12e3),new n.Vector3(0,0,-1),r);if(!a)return null;var s=a.faceIndex,u=a.object.geometry.index.array,f=a.object.geometry.attributes.position,l=[0,1,2].map((function(t){return(new n.Vector3).fromBufferAttribute(f,u[3*s+t]).multiplyScalar(i).add(new n.Vector3(0,0,o||-a.point.z))}));return{faceIndex:a.faceIndex,isectPoint:a.point.clone(),tri:l,normal:a.face.normal.clone()}}},{key:"createTurfPoint",value:function(t){return E([t[1],t[0]])}},{key:"betterSquare",value:function(t,e){for(var r=Math.sqrt(2*Math.pow(e,2)),n=[],i=0;i<4;i++)n.push(F(t,r,-360*i/4+45,{}).geometry.coordinates);return n.push(n[0]),n}},{key:"polygonToBbox",value:function(t,e){var r=k(t),n=nt(tt(r)),i=et(n),o=rt(E(n.geometry.coordinates[0][0]),E(n.geometry.coordinates[0][2])),a=rt(E(n.geometry.coordinates[0][3]),E(n.geometry.coordinates[0][1])),s=Math.max(o,a)/2+e,u=tt(nt(tt(it(i,s,{steps:64}))));return u}},{key:"originRadiusToBbox",value:function(t,e){var r=ft(F(this.createTurfPoint(t),e,-45,{units:"kilometers"}).geometry.coordinates,2),n=r[0],i=r[1],o=ft(F(this.createTurfPoint(t),e,135,{units:"kilometers"}).geometry.coordinates,2),a=o[0];return[n,o[1],a,i]}},{key:"translateTurfObject",value:function(t,e,r,i,o){var a=!(arguments.length>5&&void 0!==arguments[5])||arguments[5],s=new n.Vector2(e,r).divideScalar(o),u=90-180*s.angle()/Math.PI;return Y(t,s.length(),u,{units:"meters",zTranslation:i/o,mutate:a})}},{key:"rotateTurfObject",value:function(t,e,r){var n=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];return K(t,e,{pivot:[r[1],r[0]],mutate:n})}}],(r=null)&&ct(e.prototype,r),i&&ct(e,i),t}();pt.Meta=p;const dt=pt;function yt(t,e,r,n,i,o,a){try{var s=t[o](a),u=s.value}catch(t){return void r(t)}s.done?e(u):Promise.resolve(u).then(n,i)}function gt(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}const vt=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n,i,o,s;return e=t,n=null,i=[{key:"dumpBufferAsBlob",value:function(t,e){var r=new Blob([t],{type:"application/octet-stream"}),n=document.createElement("a");n.href=URL.createObjectURL(r),n.download=e,document.body.appendChild(n),n.click()}},{key:"blobToBuffer",value:function(t,e){var r=new FileReader;r.onload=function(t){var r=t.target.result;e(r)},r.readAsArrayBuffer(t)}},{key:"getUriCustom",value:function(t,e){var r,n=t.split("/");switch(n=n.length?n[n.length-1]:"woops"){case"custom-terrain-vector":r="pbf";break;case"custom-terrain-rgb":r="png";break;case"custom-satellite":r="jpg";break;default:return""}return"".concat(t,"-").concat(e.join("-"),".").concat(r)}},{key:"getUriMapbox",value:function(t,e,r){var n,i="",o="";switch(e.includes("mapbox-custom-")&&(o=e.split("mapbox-custom-")[1],e="mapbox-custom"),e){case"mapbox-terrain-vector":n="https://api.mapbox.com/v4/mapbox.mapbox-terrain-v2",i=".vector.pbf";break;case"mapbox-terrain-rgb":n="https://api.mapbox.com/v4/mapbox.terrain-rgb",i="@2x.pngraw";break;case"mapbox-satellite":n="https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles";break;case"mapbox-custom":n="https://api.mapbox.com/styles/v1/".concat(o,"/tiles"),i="@2x";break;default:return""}return"".concat(n,"/").concat(r.join("/")).concat(i,"?access_token=").concat(t)}},{key:"isAjaxSuccessful",value:function(t){return t>=200&&t<300||304===t}},{key:"xhrDumpBlob",value:function(t,e,r){var n=this;a()({uri:t,responseType:"arraybuffer"},(function(i,o,a){!i&&n.isAjaxSuccessful(o.statusCode)?n.dumpBufferAsBlob(a,"".concat(e,"-").concat(r.join("-"),".blob")):"xhrDumpBlob(): failed for uri: ".concat(t)}))}},{key:"xhrGetBlob",value:function(t,e){this._xhrGet("blob")(t,e)}},{key:"xhrGetArrayBuffer",value:function(t,e){this._xhrGet("arraybuffer")(t,e)}},{key:"_xhrGet",value:function(t){var e=this;return function(r,n){a()({uri:r,responseType:t},(function(r,i,o){if(r||!e.isAjaxSuccessful(i.statusCode))return n(null);switch(t){case"blob":e.blobToBuffer(o,(function(t){return n(new f.VectorTile(new(u())(t)))}));break;case"arraybuffer":n(new f.VectorTile(new(u())(o)));break;default:n(null)}}))}}},{key:"resolveGetPixels",value:(o=regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=6;break}return t.next=3,dt.Meta.nodeRequire(r.g,"get-pixels/node-pixels");case 3:t.t0=t.sent,t.next=7;break;case 6:t.t0=h();case 7:return t.abrupt("return",t.t0);case 8:case"end":return t.stop()}}),t)})),s=function(){var t=this,e=arguments;return new Promise((function(r,n){var i=o.apply(t,e);function a(t){yt(i,r,n,a,s,"next",t)}function s(t){yt(i,r,n,a,s,"throw",t)}a(void 0)}))},function(t){return s.apply(this,arguments)})},{key:"getZoomposEle",value:function(t){var e={};return t.forEach((function(t){var r=[t[0]-2,Math.floor(t[1]/4),Math.floor(t[2]/4)];e[r]?e[r].push(t):e[r]=[t]})),Object.keys(e).map((function(t){return t.split(",").map((function(t){return parseFloat(t)}))}))}},{key:"fetchTile",value:function(t,e,r,n,i){var o=e.startsWith("mapbox-"),a=o?this.getUriMapbox(r,e,t):this.getUriCustom(e,t);if(e.includes("mapbox-terrain-vector")||e.includes("custom-terrain-vector"))o?this.xhrGetArrayBuffer(a,i):this.xhrGetBlob(a,i);else if(e.includes("mapbox-terrain-rgb")||e.includes("mapbox-satellite")||e.includes("mapbox-custom")||e.includes("custom-terrain-rgb")||e.includes("custom-satellite")){var s=function(t,e){return i(t?null:e)};this.resolveGetPixels(n).then((function(t){return t(a,s)})).catch((function(t){return console.error("err:",t)}))}}}],n&&gt(e.prototype,n),i&&gt(e,i),t}();var bt=r(3673);function mt(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var r=[],n=!0,i=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(n=(a=s.next()).done)&&(r.push(a.value),!e||r.length!==e);n=!0);}catch(t){i=!0,o=t}finally{try{n||null==s.return||s.return()}finally{if(i)throw o}}return r}(t,e)||xt(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function wt(t){return function(t){if(Array.isArray(t))return _t(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||xt(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function xt(t,e){if(t){if("string"==typeof t)return _t(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_t(t,e):void 0}}function _t(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function Et(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var St=128,kt=new(r.n(bt)())({size:128}),Mt=function(t){for(var e=384,r=[[],[],[],[]],n=0;n<e;n+=3)r[0].push(n+1+t),r[1].push(n/3*e+1+t),r[2].push(n+1+49152-e+t),r[3].push((n/3+1)*e-2+t);return r}(1),At=function(){for(var t=[],e=0;e<4;e++)for(var r=0;r<4;r++)t.push([[127*r+r,512*(r+1)/4],[127*e+e,512*(e+1)/4]]);return t}();const Rt=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.unitsPerMeter=e.unitsPerMeter,this.projectCoord=e.projectCoord,this.token=e.token,this.useNodePixels=e.useNodePixels,this.apiRgb=e.apiRgb,this.apiSatellite=e.apiSatellite,this.onRgbDem=e.onRgbDem,this.onSatelliteMat=e.onSatelliteMat,this.watcher=e.watcher,this.dataEleCovered=[]}var e,r,i;return e=t,i=[{key:"_stitchWithNei2",value:function(t,e){for(var r=0;r<St;r++){var n=Mt[2][r]+384,i=Mt[0][r];t[n-2]=e[i-2],t[n-1]=e[i-1],t[n]=e[i]}}},{key:"_stitchWithNei3",value:function(t,e){for(var r=0;r<St;r++){var n=Mt[3][r]+3*(1+r),i=Mt[1][r];t.splice(n-2,0,e[i-2]),t.splice(n-1,0,e[i-1]),t.splice(n,0,e[i])}}},{key:"resolveSeams",value:function(t,e){var r=this,n=[127,127];if(Object.entries(e).forEach((function(e){var i=mt(e,2),o=i[0],a=i[1];"2"===o?(r._stitchWithNei2(t,a),n[1]++):"3"===o&&(r._stitchWithNei3(t,a),n[0]++)})),n[0]===St&&n[1]===St){var i=e[6];if(i)t.push(i[0],i[1],i[2]);else{var o=t.length;t.push(t[o-3],t[o-2],t[o-1])}}return n}},{key:"createDataFlipY",value:function(t,e){for(var r=mt(e,3),n=r[0],i=r[1],o=r[2],a=new Uint8Array(t.length),s=0;s<i;s++)for(var u=0;u<n*o;u+=o)for(var f=0;f<o;f++)a[(i-1-s)*n*o+u+f]=t[s*n*o+u+f];return a}},{key:"getNeighborsInfo",value:function(t,e,r){var n={};return this.getNeighbors8(r).forEach((function(r,i){var o=r.join("/");if(o in e){var a=t[e[o]][1];n[i]=a}})),n}},{key:"getNeighbors8",value:function(t){var e=[];return[[0,0,-1],[0,-1,0],[0,0,1],[0,1,0],[0,-1,-1],[0,-1,1],[0,1,1],[0,1,-1]].forEach((function(r){var n=r.map((function(e,r){return e+t[r]}));e.push(n)})),e}},{key:"_build",value:function(t,e,r,i,o){var a=this;t.sort((function(t,e){return t[0].join("/")>e[0].join("/")?1:-1}));var s={};t.forEach((function(t,e){s[t[0].join("/")]=e}));var u=[];return t.forEach((function(f){var l=mt(f,3),h=l[0],c=l[1],p=l[2];if(49152===c.length){var d=a.resolveSeams(c,a.getNeighborsInfo(t,s,h)),y=new n.PlaneBufferGeometry(1,1,d[0],d[1]);y.attributes.position.array=new Float32Array(c);var g=new n.Mesh(y,new n.MeshStandardMaterial({wireframe:!0,color:13421772}));g.name="dem-rgb-".concat(h.join("/"));var v=function(t){return[t[1],t[2],t[0]]};g.userData.threeGeo={tile:v(h),srcDem:{tile:v(p),uri:vt.getUriMapbox(r,"mapbox-terrain-rgb",p)}},u.push(g),a.resolveTex(h,e,r,i,(function(t){t&&(g.material=new n.MeshStandardMaterial({side:n.FrontSide,map:t})),o&&o(g,u)}))}})),u}},{key:"resolveTex",value:function(t,e,r,i,o){var a=this;vt.fetchTile(t,e,r,i,(function(e){var r=null;e?(r=new n.DataTexture(a.createDataFlipY(e.data,e.shape),e.shape[0],e.shape[1],n.RGBAFormat)).needsUpdate=!0:"fetchTile() failed for tex of zp: ".concat(t),o&&o(r)}))}}],(r=[{key:"fetch",value:function(t,e){var r=this,n=vt.getZoomposEle(t),i=0;n.forEach((function(o){vt.fetchTile(o,r.apiRgb,r.token,r.useNodePixels,(function(a){a?r.addTile(a,o,t,e):"fetchTile() failed for rgb dem of zp: ".concat(o," (count: ").concat(i,"/").concat(n.length,")"),++i===n.length&&r.build()}))}))}},{key:"addTile",value:function(t,e,r,n){this.dataEleCovered=this.dataEleCovered.concat(this._addTile(t,e,r,n)),"now ".concat(this.dataEleCovered.length," satellite tiles in dataEleCovered")}},{key:"_addTile",value:function(t,e,r,n){var i=this.unitsPerMeter,o=this.projectCoord,a=[];if(t)for(var s,u,f,l=0;l<t.data.length;l+=4)s=t.data[l],u=t.data[l+1],f=t.data[l+2],a.push(.1*(256*s*256+256*u+f)-1e4);else a=new Array(262144).fill(0);for(var h=[],c=0;c<4;c++)for(var p=0;p<4;p++)h.push([e[0]+2,4*e[1]+c,4*e[2]+p].join("/"));var d=r.map((function(t){return t.join("/")})),y=[];return h.forEach((function(t,r){if(d.includes(t)){for(var s=t.split("/").map((function(t){return parseInt(t)})),u=At[r],f=[],l=u[0][0];l<u[0][1];l++)for(var h=u[1][0];h<u[1][1];h++)f.push(a[512*l+h]);for(var c=[],p=0,g=0;g<St;g++)for(var v=0;v<St;v++){var b=kt.ll([128*s[1]+v,128*s[2]+g],s[0]);c.push.apply(c,wt(o(b,n.northWest,n.southEast)).concat([f[p]*i])),p++}y.push([s,c,e])}})),y}},{key:"build",value:function(){var e=this;if(this.dataEleCovered,0===this.dataEleCovered.length){var r=[];return this.onRgbDem(r),void this.watcher({what:"dem-rgb",data:r})}var n=null;if(this.onSatelliteMat){var i=0;n=function(t,r){i++,e.onSatelliteMat(t),i===e.dataEleCovered.length&&e.watcher({what:"dem-rgb",data:r})}}var o=t._build(this.dataEleCovered,this.apiSatellite,this.token,this.useNodePixels,n);this.onRgbDem(o),n||this.watcher({what:"dem-rgb",data:o})}}])&&Et(e.prototype,r),i&&Et(e,i),t}();var jt=6378137;function Tt(t){return function(t,e,r){var n=r;return D(t,(function(t,i,o,a,s){n=0===i&&void 0===r?t:e(n,t,i,o,a,s)})),n}(t,(function(t,e){return t+function(t){var e,r=0;switch(t.type){case"Polygon":return Pt(t.coordinates);case"MultiPolygon":for(e=0;e<t.coordinates.length;e++)r+=Pt(t.coordinates[e]);return r;case"Point":case"MultiPoint":case"LineString":case"MultiLineString":return 0}return 0}(e)}),0)}function Pt(t){var e=0;if(t&&t.length>0){e+=Math.abs(It(t[0]));for(var r=1;r<t.length;r++)e-=Math.abs(It(t[r]))}return e}function It(t){var e,r,n,i,o,a,s=0,u=t.length;if(u>2){for(a=0;a<u;a++)a===u-2?(n=u-2,i=u-1,o=0):a===u-1?(n=u-1,i=0,o=1):(n=a,i=a+1,o=a+2),e=t[n],r=t[i],s+=(Bt(t[o][0])-Bt(e[0]))*Math.sin(Bt(r[1]));s=s*jt*jt/2}return s}function Bt(t){return t*Math.PI/180}var Lt=r(2676),Ot=r.n(Lt);const Ct=function(t,e,r){void 0===r&&(r={});var n=N(t),i=N(e),o=Ot().union(n.coordinates,i.coordinates);return 0===o.length?null:1===o.length?S(o[0],r.properties):A(o,r.properties)};var Nt=r(8706),Ft=r.n(Nt);function Ut(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var r=[],n=!0,i=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(n=(a=s.next()).done)&&(r.push(a.value),!e||r.length!==e);n=!0);}catch(t){i=!0,o=t}finally{try{n||null==s.return||s.return()}finally{if(i)throw o}}return r}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return Dt(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Dt(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Dt(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function Vt(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}const qt=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.unitsPerMeter=e.unitsPerMeter,this.projectCoord=e.projectCoord,this.token=e.token,this.useNodePixels=e.useNodePixels,this.apiVector=e.apiVector,this.onVectorDem=e.onVectorDem,this.watcher=e.watcher,this.bottomTiles=[],this.geojson={type:"FeatureCollection",features:[]}}var e,r,i;return e=t,i=[{key:"_addBottomEle",value:function(t,e,r){e.forEach((function(e){for(var n=e.properties.ele,i=r[0];i<n;i+=10)t.features.push({type:"Feature",geometry:e.geometry,properties:{ele:i}})}))}},{key:"_getContours",value:function(t,e,r,n){for(var i=[],o=function(r){var n=t[r],o=e.features.filter((function(t){return t.properties.ele===n}));try{var a=M(o).features,s=a.reduce((function(t,e){return Ct(t,e)}),a[0]);if(s){var u=Tt(s.geometry);i.push({geometry:s,ele:n,area:u})}}catch(t){t.message}},a=0;a<t.length;a++)o(a);return i}}],(r=[{key:"fetch",value:function(t,e,r){var n=this,i=vt.getZoomposEle(t),o=0;i.forEach((function(t){vt.fetchTile(t,n.apiVector,n.token,n.useNodePixels,(function(a){a?n.addTile(a,t):"fetchTile() failed for vector dem of zp: ".concat(t," (count: ").concat(o,"/").concat(i.length,")"),++o===i.length&&n.build(e,r)}))}))}},{key:"addTile",value:function(t,e){var r=this;if(t.layers.contour)for(var n=function(n){var i=t.layers.contour.feature(n).toGeoJSON(e[1],e[2],e[0]);0===n&&r.bottomTiles.push(i),"MultiPolygon"===i.geometry.type?i.geometry.coordinates.forEach((function(t){return r.geojson.features.push({type:"Feature",properties:{ele:i.properties.ele},geometry:{type:"Polygon",coordinates:t}})})):r.geojson.features.push(i)},i=0;i<t.layers.contour.length;i++)n(i);else"no contours! (zoom=".concat(e[0],")")}},{key:"_buildContours",value:function(e,r){var n=Ft()(this.geojson.features.map((function(t){return t.properties.ele}))).sort((function(t,e){return t-e}));return t._addBottomEle(this.geojson,this.bottomTiles,n),t._getContours(n,this.geojson,e,r*r*2e6)}},{key:"build",value:function(t,e){var r=this._buildModelThree(this._buildContours(t.feature,e),t.northWest,t.southEast);this.onVectorDem&&this.onVectorDem(r),this.watcher&&this.watcher({what:"dem-vec",data:r})}},{key:"_buildModelThree",value:function(t,e,r){for(var n,i,o,a,s,u=this,f=(n=[2300184,15557462],i=t.length,a=(o=function(t){return[t>>16,(65280&t)>>8,255&t]})(n[0]),s=o(n[1]-n[0]),function(t){return(a[0]+Math.floor(t*s[0]/i)<<16)+(a[1]+Math.floor(t*s[1]/i)<<8)+(a[2]+Math.floor(t*s[2]/i))}),l=[],h=function(n,i){var o=Ut(u._buildSlice(n,i,f(i),t,e,r),2),a=o[0],s=o[1];a.forEach((function(t){l.push(t)})),l.push(s)},c=0;c<t.length;c++){var p=t[c].geometry.geometry;if("Polygon"===p.type)h(p.coordinates,c);else if("MultiPolygon"===p.type)for(var d=0;d<p.coordinates.length;d++)h(p.coordinates[d],c)}return l}},{key:"_buildSlice",value:function(t,e,r,i,o,a){var s=this,u=new n.Shape,f=[new n.BufferGeometry],l=e,h=-i[l].ele*this.unitsPerMeter,c=function(t,e){return t.setAttribute("position",new n.BufferAttribute(new Float32Array(e),3))},p=[];t[0].forEach((function(t,e){var r=Ut(s.projectCoord(t,o,a),2),n=r[0],i=r[1];p.push(-n,i,h),0===e?u.moveTo(-n,i):u.lineTo(-n,i)})),c(f[0],p);for(var d=1;d<t.length;d++){var y=new n.Path;f.push(new n.BufferGeometry);for(var g=[],v=0;v<t[d].length;v++){var b=Ut(this.projectCoord(t[d][v],o,a),2),m=b[0],w=b[1];g.push(-m,w,h),0===v?y.moveTo(-m,w):y.lineTo(-m,w)}c(f[d],g),u.holes.push(y)}var x=[];f.forEach((function(t,e){var r=new n.Line(f[0],new n.LineBasicMaterial({color:13421772}));r.rotation.y=Math.PI,r.name="dem-vec-line-".concat(i[l].ele,"-").concat(r.uuid),x.push(r)}));var _=new n.ExtrudeGeometry(u,{depth:i[l+1]?this.unitsPerMeter*(i[l+1].ele-i[l].ele):this.unitsPerMeter*(i[l].ele-i[l-1].ele),bevelEnabled:!1}),E=new n.Mesh(_,new n.MeshStandardMaterial({color:r,wireframe:!1}));return E.rotation.y=Math.PI,E.position.z=-h,E.name="dem-vec-shade-".concat(i[l].ele,"-").concat(E.uuid),[x,E]}}])&&Vt(e.prototype,r),i&&Vt(e,i),t}();function zt(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var r=[],n=!0,i=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(n=(a=s.next()).done)&&(r.push(a.value),!e||r.length!==e);n=!0);}catch(t){i=!0,o=t}finally{try{n||null==s.return||s.return()}finally{if(i)throw o}}return r}(t,e)||Gt(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Gt(t,e){if(t){if("string"==typeof t)return Wt(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Wt(t,e):void 0}}function Wt(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function Ht(t,e,r,n,i,o,a){try{var s=t[o](a),u=s.value}catch(t){return void r(t)}s.done?e(u):Promise.resolve(u).then(n,i)}function Yt(t){return function(){var e=this,r=arguments;return new Promise((function(n,i){var o=t.apply(e,r);function a(t){Ht(o,n,i,a,s,"next",t)}function s(t){Ht(o,n,i,a,s,"throw",t)}a(void 0)}))}}function $t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Xt(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var Jt="1.4.5-dev.1",Zt=function(){},Kt=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};$t(this,t),this.version=Jt,console.info("ThreeGeo ".concat(Jt," with THREE r").concat(n.REVISION)),console.info("Note: Since three-geo v1.4.3, when using with NodeJS, you must set the constructor option `useNodePixels` to `true` (https://github.com/w3reality/three-geo#api)");var r={unitsSide:1,tokenMapbox:"",useNodePixels:!1,apiVector:"mapbox-terrain-vector",apiRgb:"mapbox-terrain-rgb",apiSatellite:"mapbox-satellite"},i=Object.assign({},r,e);this.constUnitsSide=i.unitsSide,this.tokenMapbox=i.tokenMapbox,this.useNodePixels=i.useNodePixels,this.apiVector=i.apiVector,this.apiRgb=i.apiRgb,this.apiSatellite=i.apiSatellite}var e,r,o,a,s;return e=t,r=[{key:"getProjection",value:function(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.constUnitsSide,i=e,o=t._getUnitsPerMeter(n,r);return{proj:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;return t._proj(e,r,i,n)},projInv:function(e,r){return t._projInv(e,r,origin,o)},bbox:i,unitsPerMeter:o}}},{key:"getTerrain",value:function(e,r,n){var i=this,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return new Promise((function(a,s){try{var u=t._createWatcher(o,a);if(!u)return;var f=i.constUnitsSide,l=t._getUnitsPerMeter(f,r),h=function(e,r,n){return t._projectCoord(f,e,r,n)},c=i.tokenMapbox,p=i.useNodePixels,d=i.apiRgb,y=i.apiSatellite,g=i.apiVector,v=o.onRgbDem,b=o.onSatelliteMat,m=o.onVectorDem,w=t.getBboxFeature(e),x=t.getZoomposCovered(w.feature,n);v&&new Rt({unitsPerMeter:l,projectCoord:h,token:c,useNodePixels:p,apiRgb:d,apiSatellite:y,onRgbDem:v,onSatelliteMat:b,watcher:u}).fetch(x,w),m&&new qt({unitsPerMeter:l,projectCoord:h,token:c,useNodePixels:p,apiVector:g,onVectorDem:m,watcher:u}).fetch(x,w,r)}catch(t){console.error("err:",t),s(t)}}))}},{key:"getTerrainRgb",value:(s=Yt(regeneratorRuntime.mark((function e(r,n,i){var o,a,s,u=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=u.length>3&&void 0!==u[3]?u[3]:void 0,e.next=3,this.getTerrain(r,n,i,{onRgbDem:function(){},onSatelliteMat:function(){}});case 3:return a=e.sent,s=a.rgbDem,e.abrupt("return",o?o(s):t._createDemGroup(s,"dem-rgb"));case 6:case"end":return e.stop()}}),e,this)}))),function(t,e,r){return s.apply(this,arguments)})},{key:"getTerrainVector",value:(a=Yt(regeneratorRuntime.mark((function e(r,n,i){var o,a,s,u=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=u.length>3&&void 0!==u[3]?u[3]:void 0,e.next=3,this.getTerrain(r,n,i,{onVectorDem:function(){}});case 3:return a=e.sent,s=a.vectorDem,e.abrupt("return",o?o(s):t._createDemGroup(s,"dem-vec"));case 6:case"end":return e.stop()}}),e,this)}))),function(t,e,r){return a.apply(this,arguments)})},{key:"setApiVector",value:function(t){this.apiVector=t}},{key:"setApiRgb",value:function(t){this.apiRgb=t}},{key:"setApiSatellite",value:function(t){this.apiSatellite=t}}],o=[{key:"_getUnitsPerMeter",value:function(t,e){return t/(e*Math.pow(2,.5)*1e3)}},{key:"_projectCoord",value:function(t,e,r,n){return[t*((e[0]-r[0])/(n[0]-r[0])-.5),t*(-.5-(e[1]-n[1])/(n[1]-r[1]))]}},{key:"_proj",value:function(t,e,r,n){var i=zt(t,2),o=i[0],a=i[1],s=zt(r,4),u=s[0],f=s[1],l=s[2],h=s[3],c=zt(this._projectCoord(n,[a,o],[u,h],[l,f]),2),p=c[0],d=c[1],y=e?Zt(p,d,o,a,e):void 0;return void 0!==y?[p,d,y]:[p,d]}},{key:"_projInv",value:function(t,e,r,n){var i=dt.translateTurfObject(dt.createTurfPoint(r),t,e,0,n).geometry.coordinates;return[i[1],i[0]]}},{key:"getZoomposCovered",value:function(t,e){var r={min_zoom:e,max_zoom:e};return i.Sv(t.geometry,r).map((function(t){var e=zt(t,3),r=e[0],n=e[1];return[e[2],r,n]}))}},{key:"getBboxFeature",value:function(t){var e={type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[]]}},r=zt(t,4),n=r[0],i=r[1],o=r[2],a=r[3];console.info([n,i,o,a]);var s=[n,a],u=[o,i];return e.geometry.coordinates[0]=[s,[u[0],s[1]],u,[s[0],u[1]],s],{feature:e,northWest:s,southEast:u}}},{key:"getBbox",value:function(t,e){var r={type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[]]}},n=zt(dt.polygonToBbox(t,e),4),i=n[0],o=n[1],a=n[2],s=n[3];console.info([i,o,a,s]);var u=[i,s],f=[a,o];return r.geometry.coordinates[0]=[u,[f[0],u[1]],f,[u[0],f[1]],u],{feature:r,northWest:u,southEast:f}}},{key:"_createWatcher",value:function(t,e){var r=!!t.onVectorDem,n=!!t.onRgbDem,i={vectorDem:[],rgbDem:[]},o=function(){return!r&&!n};return o()?(e(i),null):function(t){var a=t.what,s=t.data;"dem-vec"===a&&(r=!1,i.vectorDem=s),"dem-rgb"===a&&(n=!1,i.rgbDem=s),o()&&e(i)}}},{key:"_createDemGroup",value:function(t,e){var r=new n.Group;r.name=e;var i,o=function(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=Gt(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,i=function(){};return{s:i,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,s=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return a=t.done,t},e:function(t){s=!0,o=t},f:function(){try{a||null==r.return||r.return()}finally{if(s)throw o}}}}(t);try{for(o.s();!(i=o.n()).done;){var a=i.value;r.add(a)}}catch(t){o.e(t)}finally{o.f()}return r}}],r&&Xt(e.prototype,r),o&&Xt(e,o),t}();Kt.Utils=dt,Kt.Laser=m;const Qt=Kt},9697:(t,e,r)=>{"use strict";var n=r(1664).Buffer,i=r(9530),o=r(2861),a=r(1494).N,s=(r(1943),r(6547),r(858));function u(t,e){var r;try{r=new a(t)}catch(t){return void e(t)}if(r.numFrames()>0){var n=[r.numFrames(),r.height,r.width,4],i=new Uint8Array(n[0]*n[1]*n[2]*n[3]),s=o(i,n);try{for(var u=0;u<r.numFrames();++u)r.decodeAndBlitFrameRGBA(u,i.subarray(s.index(u,0,0,0),s.index(u+1,0,0,0)))}catch(t){return void e(t)}e(null,s.transpose(0,2,1))}else{n=[r.height,r.width,4],i=new Uint8Array(n[0]*n[1]*n[2]),s=o(i,n);try{r.decodeAndBlitFrameRGBA(0,i)}catch(t){return void e(t)}e(null,s.transpose(1,0))}}function f(t,e){process.nextTick((function(){try{var r=s(t);r?u(function(t){if(void 0===t[0]){for(var e=t.length,r=new Uint8Array(e),n=0;n<e;++n)r[n]=t.get(n);return r}return new Uint8Array(t)}(r),e):e(new Error("Error parsing data URI"))}catch(t){e(t)}}))}t.exports=function(t,e,r){r||(r=e,e="");var a=i.extname(t);switch(e||a.toUpperCase()){case".GIF":!function(t,e){var r=new XMLHttpRequest;r.open("GET",t,!0),r.responseType="arraybuffer",r.overrideMimeType&&r.overrideMimeType("application/binary"),r.onerror=function(t){e(t)},r.onload=function(){4===r.readyState&&u(new Uint8Array(r.response),e)},r.send()}(t,r);break;default:n.isBuffer(t)&&(t="data:"+e+";base64,"+t.toString("base64")),0===t.indexOf("data:image/gif;")?f(t,r):function(t,e){var r=new Image;r.crossOrigin="Anonymous",r.onload=function(){var t=document.createElement("canvas");t.width=r.width,t.height=r.height;var n=t.getContext("2d");n.drawImage(r,0,0);var i=n.getImageData(0,0,r.width,r.height);e(null,o(new Uint8Array(i.data),[r.width,r.height,4],[4,4*r.width,1],0))},r.onerror=function(t){e(t)},r.src=t}(t,r)}}},8908:(t,e,r)=>{var n;n="undefined"!=typeof window?window:void 0!==r.g?r.g:"undefined"!=typeof self?self:{},t.exports=n},645:(t,e)=>{e.read=function(t,e,r,n,i){var o,a,s=8*i-n-1,u=(1<<s)-1,f=u>>1,l=-7,h=r?i-1:0,c=r?-1:1,p=t[e+h];for(h+=c,o=p&(1<<-l)-1,p>>=-l,l+=s;l>0;o=256*o+t[e+h],h+=c,l-=8);for(a=o&(1<<-l)-1,o>>=-l,l+=n;l>0;a=256*a+t[e+h],h+=c,l-=8);if(0===o)o=1-f;else{if(o===u)return a?NaN:1/0*(p?-1:1);a+=Math.pow(2,n),o-=f}return(p?-1:1)*a*Math.pow(2,o-n)},e.write=function(t,e,r,n,i,o){var a,s,u,f=8*o-i-1,l=(1<<f)-1,h=l>>1,c=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,p=n?0:o-1,d=n?1:-1,y=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(s=isNaN(e)?1:0,a=l):(a=Math.floor(Math.log(e)/Math.LN2),e*(u=Math.pow(2,-a))<1&&(a--,u*=2),(e+=a+h>=1?c/u:c*Math.pow(2,1-h))*u>=2&&(a++,u/=2),a+h>=l?(s=0,a=l):a+h>=1?(s=(e*u-1)*Math.pow(2,i),a+=h):(s=e*Math.pow(2,h-1)*Math.pow(2,i),a=0));i>=8;t[r+p]=255&s,p+=d,s/=256,i-=8);for(a=a<<i|s,f+=i;f>0;t[r+p]=255&a,p+=d,a/=256,f-=8);t[r+p-d]|=128*y}},5717:t=>{"function"==typeof Object.create?t.exports=function(t,e){e&&(t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}))}:t.exports=function(t,e){if(e){t.super_=e;var r=function(){};r.prototype=e.prototype,t.prototype=new r,t.prototype.constructor=t}}},6907:t=>{"use strict";t.exports=function(t){for(var e=new Array(t),r=0;r<t;++r)e[r]=r;return e}},8738:t=>{function e(t){return!!t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}t.exports=function(t){return null!=t&&(e(t)||function(t){return"function"==typeof t.readFloatLE&&"function"==typeof t.slice&&e(t.slice(0,0))}(t)||!!t._isBuffer)}},7376:t=>{t.exports=function(t){if(!t)return!1;var r=e.call(t);return"[object Function]"===r||"function"==typeof t&&"[object RegExp]"!==r||"undefined"!=typeof window&&(t===window.setTimeout||t===window.alert||t===window.confirm||t===window.prompt)};var e=Object.prototype.toString},1943:(t,e,r)=>{"use strict";var n=r(2861),i=r(1895);t.exports=function(t,e){for(var r=[],o=t,a=1;Array.isArray(o);)r.push(o.length),a*=o.length,o=o[0];return 0===r.length?n():(e||(e=n(new Float64Array(a),r)),i(e,t),e)}},1895:(t,e,r)=>{t.exports=r(6239)({args:["array","scalar","index"],pre:{body:"{}",args:[],thisVars:[],localVars:[]},body:{body:"{\nvar _inline_1_v=_inline_1_arg1_,_inline_1_i\nfor(_inline_1_i=0;_inline_1_i<_inline_1_arg2_.length-1;++_inline_1_i) {\n_inline_1_v=_inline_1_v[_inline_1_arg2_[_inline_1_i]]\n}\n_inline_1_arg0_=_inline_1_v[_inline_1_arg2_[_inline_1_arg2_.length-1]]\n}",args:[{name:"_inline_1_arg0_",lvalue:!0,rvalue:!1,count:1},{name:"_inline_1_arg1_",lvalue:!1,rvalue:!0,count:1},{name:"_inline_1_arg2_",lvalue:!1,rvalue:!0,count:4}],thisVars:[],localVars:["_inline_1_i","_inline_1_v"]},post:{body:"{}",args:[],thisVars:[],localVars:[]},funcName:"convert",blockSize:64})},2861:(t,e,r)=>{var n=r(6907),i=r(8738),o="undefined"!=typeof Float64Array;function a(t,e){return t[0]-e[0]}function s(){var t,e=this.stride,r=new Array(e.length);for(t=0;t<r.length;++t)r[t]=[Math.abs(e[t]),t];r.sort(a);var n=new Array(r.length);for(t=0;t<n.length;++t)n[t]=r[t][1];return n}function u(t,e){var r=["View",e,"d",t].join("");e<0&&(r="View_Nil"+t);var i="generic"===t;if(-1===e){var o="function "+r+"(a){this.data=a;};var proto="+r+".prototype;proto.dtype='"+t+"';proto.index=function(){return -1};proto.size=0;proto.dimension=-1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function(){return new "+r+"(this.data);};proto.get=proto.set=function(){};proto.pick=function(){return null};return function construct_"+r+"(a){return new "+r+"(a);}";return new Function(o)()}if(0===e){o="function "+r+"(a,d) {this.data = a;this.offset = d};var proto="+r+".prototype;proto.dtype='"+t+"';proto.index=function(){return this.offset};proto.dimension=0;proto.size=1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function "+r+"_copy() {return new "+r+"(this.data,this.offset)};proto.pick=function "+r+"_pick(){return TrivialArray(this.data);};proto.valueOf=proto.get=function "+r+"_get(){return "+(i?"this.data.get(this.offset)":"this.data[this.offset]")+"};proto.set=function "+r+"_set(v){return "+(i?"this.data.set(this.offset,v)":"this.data[this.offset]=v")+"};return function construct_"+r+"(a,b,c,d){return new "+r+"(a,d)}";return new Function("TrivialArray",o)(f[t][0])}o=["'use strict'"];var a=n(e),u=a.map((function(t){return"i"+t})),l="this.offset+"+a.map((function(t){return"this.stride["+t+"]*i"+t})).join("+"),h=a.map((function(t){return"b"+t})).join(","),c=a.map((function(t){return"c"+t})).join(",");o.push("function "+r+"(a,"+h+","+c+",d){this.data=a","this.shape=["+h+"]","this.stride=["+c+"]","this.offset=d|0}","var proto="+r+".prototype","proto.dtype='"+t+"'","proto.dimension="+e),o.push("Object.defineProperty(proto,'size',{get:function "+r+"_size(){return "+a.map((function(t){return"this.shape["+t+"]"})).join("*"),"}})"),1===e?o.push("proto.order=[0]"):(o.push("Object.defineProperty(proto,'order',{get:"),e<4?(o.push("function "+r+"_order(){"),2===e?o.push("return (Math.abs(this.stride[0])>Math.abs(this.stride[1]))?[1,0]:[0,1]}})"):3===e&&o.push("var s0=Math.abs(this.stride[0]),s1=Math.abs(this.stride[1]),s2=Math.abs(this.stride[2]);if(s0>s1){if(s1>s2){return [2,1,0];}else if(s0>s2){return [1,2,0];}else{return [1,0,2];}}else if(s0>s2){return [2,0,1];}else if(s2>s1){return [0,1,2];}else{return [0,2,1];}}})")):o.push("ORDER})")),o.push("proto.set=function "+r+"_set("+u.join(",")+",v){"),i?o.push("return this.data.set("+l+",v)}"):o.push("return this.data["+l+"]=v}"),o.push("proto.get=function "+r+"_get("+u.join(",")+"){"),i?o.push("return this.data.get("+l+")}"):o.push("return this.data["+l+"]}"),o.push("proto.index=function "+r+"_index(",u.join(),"){return "+l+"}"),o.push("proto.hi=function "+r+"_hi("+u.join(",")+"){return new "+r+"(this.data,"+a.map((function(t){return["(typeof i",t,"!=='number'||i",t,"<0)?this.shape[",t,"]:i",t,"|0"].join("")})).join(",")+","+a.map((function(t){return"this.stride["+t+"]"})).join(",")+",this.offset)}");var p=a.map((function(t){return"a"+t+"=this.shape["+t+"]"})),d=a.map((function(t){return"c"+t+"=this.stride["+t+"]"}));o.push("proto.lo=function "+r+"_lo("+u.join(",")+"){var b=this.offset,d=0,"+p.join(",")+","+d.join(","));for(var y=0;y<e;++y)o.push("if(typeof i"+y+"==='number'&&i"+y+">=0){d=i"+y+"|0;b+=c"+y+"*d;a"+y+"-=d}");o.push("return new "+r+"(this.data,"+a.map((function(t){return"a"+t})).join(",")+","+a.map((function(t){return"c"+t})).join(",")+",b)}"),o.push("proto.step=function "+r+"_step("+u.join(",")+"){var "+a.map((function(t){return"a"+t+"=this.shape["+t+"]"})).join(",")+","+a.map((function(t){return"b"+t+"=this.stride["+t+"]"})).join(",")+",c=this.offset,d=0,ceil=Math.ceil");for(y=0;y<e;++y)o.push("if(typeof i"+y+"==='number'){d=i"+y+"|0;if(d<0){c+=b"+y+"*(a"+y+"-1);a"+y+"=ceil(-a"+y+"/d)}else{a"+y+"=ceil(a"+y+"/d)}b"+y+"*=d}");o.push("return new "+r+"(this.data,"+a.map((function(t){return"a"+t})).join(",")+","+a.map((function(t){return"b"+t})).join(",")+",c)}");var g=new Array(e),v=new Array(e);for(y=0;y<e;++y)g[y]="a[i"+y+"]",v[y]="b[i"+y+"]";o.push("proto.transpose=function "+r+"_transpose("+u+"){"+u.map((function(t,e){return t+"=("+t+"===undefined?"+e+":"+t+"|0)"})).join(";"),"var a=this.shape,b=this.stride;return new "+r+"(this.data,"+g.join(",")+","+v.join(",")+",this.offset)}"),o.push("proto.pick=function "+r+"_pick("+u+"){var a=[],b=[],c=this.offset");for(y=0;y<e;++y)o.push("if(typeof i"+y+"==='number'&&i"+y+">=0){c=(c+this.stride["+y+"]*i"+y+")|0}else{a.push(this.shape["+y+"]);b.push(this.stride["+y+"])}");return o.push("var ctor=CTOR_LIST[a.length+1];return ctor(this.data,a,b,c)}"),o.push("return function construct_"+r+"(data,shape,stride,offset){return new "+r+"(data,"+a.map((function(t){return"shape["+t+"]"})).join(",")+","+a.map((function(t){return"stride["+t+"]"})).join(",")+",offset)}"),new Function("CTOR_LIST","ORDER",o.join("\n"))(f[t],s)}var f={float32:[],float64:[],int8:[],int16:[],int32:[],uint8:[],uint16:[],uint32:[],array:[],uint8_clamped:[],bigint64:[],biguint64:[],buffer:[],generic:[]};t.exports=function(t,e,r,n){if(void 0===t)return(0,f.array[0])([]);"number"==typeof t&&(t=[t]),void 0===e&&(e=[t.length]);var a=e.length;if(void 0===r){r=new Array(a);for(var s=a-1,l=1;s>=0;--s)r[s]=l,l*=e[s]}if(void 0===n){n=0;for(s=0;s<a;++s)r[s]<0&&(n-=(e[s]-1)*r[s])}for(var h=function(t){if(i(t))return"buffer";if(o)switch(Object.prototype.toString.call(t)){case"[object Float64Array]":return"float64";case"[object Float32Array]":return"float32";case"[object Int8Array]":return"int8";case"[object Int16Array]":return"int16";case"[object Int32Array]":return"int32";case"[object Uint8Array]":return"uint8";case"[object Uint16Array]":return"uint16";case"[object Uint32Array]":return"uint32";case"[object Uint8ClampedArray]":return"uint8_clamped";case"[object BigInt64Array]":return"bigint64";case"[object BigUint64Array]":return"biguint64"}return Array.isArray(t)?"array":"generic"}(t),c=f[h];c.length<=a+1;)c.push(u(h,c.length-1));return(0,c[a+1])(t,e,r,n)}},1494:(t,e)=>{"use strict";function r(t,e,r,n){for(var i=t[e++],o=1<<i,a=o+1,s=a+1,u=i+1,f=(1<<u)-1,l=0,h=0,c=0,p=t[e++],d=new Int32Array(4096),y=null;;){for(;l<16&&0!==p;)h|=t[e++]<<l,l+=8,1===p?p=t[e++]:--p;if(l<u)break;var g=h&f;if(h>>=u,l-=u,g!==o){if(g===a)break;for(var v=g<s?g:y,b=0,m=v;m>o;)m=d[m]>>8,++b;var w=m;if(c+b+(v!==g?1:0)>n)return;r[c++]=w;var x=c+=b;for(v!==g&&(r[c++]=w),m=v;b--;)m=d[m],r[--x]=255&m,m>>=8;null!==y&&s<4096&&(d[s++]=y<<8|w,s>=f+1&&u<12&&(++u,f=f<<1|1)),y=g}else s=a+1,f=(1<<(u=i+1))-1,y=null}return r}try{(function(t,e,r,n){var i=0,o=void 0===(n=void 0===n?{}:n).loop?null:n.loop,a=void 0===n.palette?null:n.palette;if(e<=0||r<=0||e>65535||r>65535)throw new Error("Width/Height invalid.");function s(t){var e=t.length;if(e<2||e>256||e&e-1)throw new Error("Invalid code/color length, must be power of 2 and 2 .. 256.");return e}t[i++]=71,t[i++]=73,t[i++]=70,t[i++]=56,t[i++]=57,t[i++]=97;var u=0,f=0;if(null!==a){for(var l=s(a);l>>=1;)++u;if(l=1<<u,--u,void 0!==n.background){if((f=n.background)>=l)throw new Error("Background index out of range.");if(0===f)throw new Error("Background index explicitly passed as 0.")}}if(t[i++]=255&e,t[i++]=e>>8&255,t[i++]=255&r,t[i++]=r>>8&255,t[i++]=(null!==a?128:0)|u,t[i++]=f,t[i++]=0,null!==a)for(var h=0,c=a.length;h<c;++h){var p=a[h];t[i++]=p>>16&255,t[i++]=p>>8&255,t[i++]=255&p}if(null!==o){if(o<0||o>65535)throw new Error("Loop count invalid.");t[i++]=33,t[i++]=255,t[i++]=11,t[i++]=78,t[i++]=69,t[i++]=84,t[i++]=83,t[i++]=67,t[i++]=65,t[i++]=80,t[i++]=69,t[i++]=50,t[i++]=46,t[i++]=48,t[i++]=3,t[i++]=1,t[i++]=255&o,t[i++]=o>>8&255,t[i++]=0}var d=!1;this.addFrame=function(e,r,n,o,u,f){if(!0===d&&(--i,d=!1),f=void 0===f?{}:f,e<0||r<0||e>65535||r>65535)throw new Error("x/y invalid.");if(n<=0||o<=0||n>65535||o>65535)throw new Error("Width/Height invalid.");if(u.length<n*o)throw new Error("Not enough pixels for the frame size.");var l=!0,h=f.palette;if(null==h&&(l=!1,h=a),null==h)throw new Error("Must supply either a local or global palette.");for(var c=s(h),p=0;c>>=1;)++p;c=1<<p;var y=void 0===f.delay?0:f.delay,g=void 0===f.disposal?0:f.disposal;if(g<0||g>3)throw new Error("Disposal out of range.");var v=!1,b=0;if(void 0!==f.transparent&&null!==f.transparent&&(v=!0,(b=f.transparent)<0||b>=c))throw new Error("Transparent color index.");if((0!==g||v||0!==y)&&(t[i++]=33,t[i++]=249,t[i++]=4,t[i++]=g<<2|(!0===v?1:0),t[i++]=255&y,t[i++]=y>>8&255,t[i++]=b,t[i++]=0),t[i++]=44,t[i++]=255&e,t[i++]=e>>8&255,t[i++]=255&r,t[i++]=r>>8&255,t[i++]=255&n,t[i++]=n>>8&255,t[i++]=255&o,t[i++]=o>>8&255,t[i++]=!0===l?128|p-1:0,!0===l)for(var m=0,w=h.length;m<w;++m){var x=h[m];t[i++]=x>>16&255,t[i++]=x>>8&255,t[i++]=255&x}return i=function(t,e,r,n){t[e++]=r;var i=e++,o=1<<r,a=o-1,s=o+1,u=s+1,f=r+1,l=0,h=0;function c(r){for(;l>=r;)t[e++]=255&h,h>>=8,l-=8,e===i+256&&(t[i]=255,i=e++)}function p(t){h|=t<<l,l+=f,c(8)}var d=n[0]&a,y={};p(o);for(var g=1,v=n.length;g<v;++g){var b=n[g]&a,m=d<<8|b,w=y[m];if(void 0===w){for(h|=d<<l,l+=f;l>=8;)t[e++]=255&h,h>>=8,l-=8,e===i+256&&(t[i]=255,i=e++);4096===u?(p(o),u=s+1,f=r+1,y={}):(u>=1<<f&&++f,y[m]=u++),d=b}else d=w}return p(d),p(s),c(1),i+1===e?t[i]=0:(t[i]=e-i-1,t[e++]=0),e}(t,i,p<2?2:p,u)},this.end=function(){return!1===d&&(t[i++]=59,d=!0),i},this.getOutputBuffer=function(){return t},this.setOutputBuffer=function(e){t=e},this.getOutputBufferPosition=function(){return i},this.setOutputBufferPosition=function(t){i=t}}),e.N=function(t){var e=0;if(71!==t[e++]||73!==t[e++]||70!==t[e++]||56!==t[e++]||56!=(t[e++]+1&253)||97!==t[e++])throw new Error("Invalid GIF 87a/89a header.");var n=t[e++]|t[e++]<<8,i=t[e++]|t[e++]<<8,o=t[e++],a=o>>7,s=1<<1+(7&o);t[e++],t[e++];var u=null,f=null;a&&(u=e,f=s,e+=3*s);var l=!0,h=[],c=0,p=null,d=0,y=null;for(this.width=n,this.height=i;l&&e<t.length;)switch(t[e++]){case 33:switch(t[e++]){case 255:if(11!==t[e]||78==t[e+1]&&69==t[e+2]&&84==t[e+3]&&83==t[e+4]&&67==t[e+5]&&65==t[e+6]&&80==t[e+7]&&69==t[e+8]&&50==t[e+9]&&46==t[e+10]&&48==t[e+11]&&3==t[e+12]&&1==t[e+13]&&0==t[e+16])e+=14,y=t[e++]|t[e++]<<8,e++;else for(e+=12;;){if(!((R=t[e++])>=0))throw Error("Invalid block size");if(0===R)break;e+=R}break;case 249:if(4!==t[e++]||0!==t[e+4])throw new Error("Invalid graphics extension block.");var g=t[e++];c=t[e++]|t[e++]<<8,p=t[e++],0==(1&g)&&(p=null),d=g>>2&7,e++;break;case 254:for(;;){if(!((R=t[e++])>=0))throw Error("Invalid block size");if(0===R)break;e+=R}break;default:throw new Error("Unknown graphic control label: 0x"+t[e-1].toString(16))}break;case 44:var v=t[e++]|t[e++]<<8,b=t[e++]|t[e++]<<8,m=t[e++]|t[e++]<<8,w=t[e++]|t[e++]<<8,x=t[e++],_=x>>6&1,E=1<<1+(7&x),S=u,k=f,M=!1;x>>7&&(M=!0,S=e,k=E,e+=3*E);var A=e;for(e++;;){var R;if(!((R=t[e++])>=0))throw Error("Invalid block size");if(0===R)break;e+=R}h.push({x:v,y:b,width:m,height:w,has_local_palette:M,palette_offset:S,palette_size:k,data_offset:A,data_length:e-A,transparent_index:p,interlaced:!!_,delay:c,disposal:d});break;case 59:l=!1;break;default:throw new Error("Unknown gif block: 0x"+t[e-1].toString(16))}this.numFrames=function(){return h.length},this.loopCount=function(){return y},this.frameInfo=function(t){if(t<0||t>=h.length)throw new Error("Frame index out of range.");return h[t]},this.decodeAndBlitFrameBGRA=function(e,i){var o=this.frameInfo(e),a=o.width*o.height,s=new Uint8Array(a);r(t,o.data_offset,s,a);var u=o.palette_offset,f=o.transparent_index;null===f&&(f=256);var l=o.width,h=n-l,c=l,p=4*(o.y*n+o.x),d=4*((o.y+o.height)*n+o.x),y=p,g=4*h;!0===o.interlaced&&(g+=4*n*7);for(var v=8,b=0,m=s.length;b<m;++b){var w=s[b];if(0===c&&(c=l,(y+=g)>=d&&(g=4*h+4*n*(v-1),y=p+(l+h)*(v<<1),v>>=1)),w===f)y+=4;else{var x=t[u+3*w],_=t[u+3*w+1],E=t[u+3*w+2];i[y++]=E,i[y++]=_,i[y++]=x,i[y++]=255}--c}},this.decodeAndBlitFrameRGBA=function(e,i){var o=this.frameInfo(e),a=o.width*o.height,s=new Uint8Array(a);r(t,o.data_offset,s,a);var u=o.palette_offset,f=o.transparent_index;null===f&&(f=256);var l=o.width,h=n-l,c=l,p=4*(o.y*n+o.x),d=4*((o.y+o.height)*n+o.x),y=p,g=4*h;!0===o.interlaced&&(g+=4*n*7);for(var v=8,b=0,m=s.length;b<m;++b){var w=s[b];if(0===c&&(c=l,(y+=g)>=d&&(g=4*h+4*n*(v-1),y=p+(l+h)*(v<<1),v>>=1)),w===f)y+=4;else{var x=t[u+3*w],_=t[u+3*w+1],E=t[u+3*w+2];i[y++]=x,i[y++]=_,i[y++]=E,i[y++]=255}--c}}}}catch(t){}},4947:t=>{var e=function(t){return t.replace(/^\s+|\s+$/g,"")};t.exports=function(t){if(!t)return{};for(var r,n={},i=e(t).split("\n"),o=0;o<i.length;o++){var a=i[o],s=a.indexOf(":"),u=e(a.slice(0,s)).toLowerCase(),f=e(a.slice(s+1));void 0===n[u]?n[u]=f:(r=n[u],"[object Array]"===Object.prototype.toString.call(r)?n[u].push(f):n[u]=[n[u],f])}return n}},3614:(t,e,r)=>{"use strict";t.exports=i;var n=r(645);function i(t){this.buf=ArrayBuffer.isView&&ArrayBuffer.isView(t)?t:new Uint8Array(t||0),this.pos=0,this.type=0,this.length=this.buf.length}i.Varint=0,i.Fixed64=1,i.Bytes=2,i.Fixed32=5;var o=4294967296,a=1/o,s="undefined"==typeof TextDecoder?null:new TextDecoder("utf8");function u(t){return t.type===i.Bytes?t.readVarint()+t.pos:t.pos+1}function f(t,e,r){return r?4294967296*e+(t>>>0):4294967296*(e>>>0)+(t>>>0)}function l(t,e,r){var n=e<=16383?1:e<=2097151?2:e<=268435455?3:Math.floor(Math.log(e)/(7*Math.LN2));r.realloc(n);for(var i=r.pos-1;i>=t;i--)r.buf[i+n]=r.buf[i]}function h(t,e){for(var r=0;r<t.length;r++)e.writeVarint(t[r])}function c(t,e){for(var r=0;r<t.length;r++)e.writeSVarint(t[r])}function p(t,e){for(var r=0;r<t.length;r++)e.writeFloat(t[r])}function d(t,e){for(var r=0;r<t.length;r++)e.writeDouble(t[r])}function y(t,e){for(var r=0;r<t.length;r++)e.writeBoolean(t[r])}function g(t,e){for(var r=0;r<t.length;r++)e.writeFixed32(t[r])}function v(t,e){for(var r=0;r<t.length;r++)e.writeSFixed32(t[r])}function b(t,e){for(var r=0;r<t.length;r++)e.writeFixed64(t[r])}function m(t,e){for(var r=0;r<t.length;r++)e.writeSFixed64(t[r])}function w(t,e){return(t[e]|t[e+1]<<8|t[e+2]<<16)+16777216*t[e+3]}function x(t,e,r){t[r]=e,t[r+1]=e>>>8,t[r+2]=e>>>16,t[r+3]=e>>>24}function _(t,e){return(t[e]|t[e+1]<<8|t[e+2]<<16)+(t[e+3]<<24)}i.prototype={destroy:function(){this.buf=null},readFields:function(t,e,r){for(r=r||this.length;this.pos<r;){var n=this.readVarint(),i=n>>3,o=this.pos;this.type=7&n,t(i,e,this),this.pos===o&&this.skip(n)}return e},readMessage:function(t,e){return this.readFields(t,e,this.readVarint()+this.pos)},readFixed32:function(){var t=w(this.buf,this.pos);return this.pos+=4,t},readSFixed32:function(){var t=_(this.buf,this.pos);return this.pos+=4,t},readFixed64:function(){var t=w(this.buf,this.pos)+w(this.buf,this.pos+4)*o;return this.pos+=8,t},readSFixed64:function(){var t=w(this.buf,this.pos)+_(this.buf,this.pos+4)*o;return this.pos+=8,t},readFloat:function(){var t=n.read(this.buf,this.pos,!0,23,4);return this.pos+=4,t},readDouble:function(){var t=n.read(this.buf,this.pos,!0,52,8);return this.pos+=8,t},readVarint:function(t){var e,r,n=this.buf;return e=127&(r=n[this.pos++]),r<128?e:(e|=(127&(r=n[this.pos++]))<<7,r<128?e:(e|=(127&(r=n[this.pos++]))<<14,r<128?e:(e|=(127&(r=n[this.pos++]))<<21,r<128?e:function(t,e,r){var n,i,o=r.buf;if(i=o[r.pos++],n=(112&i)>>4,i<128)return f(t,n,e);if(i=o[r.pos++],n|=(127&i)<<3,i<128)return f(t,n,e);if(i=o[r.pos++],n|=(127&i)<<10,i<128)return f(t,n,e);if(i=o[r.pos++],n|=(127&i)<<17,i<128)return f(t,n,e);if(i=o[r.pos++],n|=(127&i)<<24,i<128)return f(t,n,e);if(i=o[r.pos++],n|=(1&i)<<31,i<128)return f(t,n,e);throw new Error("Expected varint not more than 10 bytes")}(e|=(15&(r=n[this.pos]))<<28,t,this))))},readVarint64:function(){return this.readVarint(!0)},readSVarint:function(){var t=this.readVarint();return t%2==1?(t+1)/-2:t/2},readBoolean:function(){return Boolean(this.readVarint())},readString:function(){var t=this.readVarint()+this.pos,e=this.pos;return this.pos=t,t-e>=12&&s?function(t,e,r){return s.decode(t.subarray(e,r))}(this.buf,e,t):function(t,e,r){var n="",i=e;for(;i<r;){var o,a,s,u=t[i],f=null,l=u>239?4:u>223?3:u>191?2:1;if(i+l>r)break;1===l?u<128&&(f=u):2===l?128==(192&(o=t[i+1]))&&(f=(31&u)<<6|63&o)<=127&&(f=null):3===l?(o=t[i+1],a=t[i+2],128==(192&o)&&128==(192&a)&&((f=(15&u)<<12|(63&o)<<6|63&a)<=2047||f>=55296&&f<=57343)&&(f=null)):4===l&&(o=t[i+1],a=t[i+2],s=t[i+3],128==(192&o)&&128==(192&a)&&128==(192&s)&&((f=(15&u)<<18|(63&o)<<12|(63&a)<<6|63&s)<=65535||f>=1114112)&&(f=null)),null===f?(f=65533,l=1):f>65535&&(f-=65536,n+=String.fromCharCode(f>>>10&1023|55296),f=56320|1023&f),n+=String.fromCharCode(f),i+=l}return n}(this.buf,e,t)},readBytes:function(){var t=this.readVarint()+this.pos,e=this.buf.subarray(this.pos,t);return this.pos=t,e},readPackedVarint:function(t,e){if(this.type!==i.Bytes)return t.push(this.readVarint(e));var r=u(this);for(t=t||[];this.pos<r;)t.push(this.readVarint(e));return t},readPackedSVarint:function(t){if(this.type!==i.Bytes)return t.push(this.readSVarint());var e=u(this);for(t=t||[];this.pos<e;)t.push(this.readSVarint());return t},readPackedBoolean:function(t){if(this.type!==i.Bytes)return t.push(this.readBoolean());var e=u(this);for(t=t||[];this.pos<e;)t.push(this.readBoolean());return t},readPackedFloat:function(t){if(this.type!==i.Bytes)return t.push(this.readFloat());var e=u(this);for(t=t||[];this.pos<e;)t.push(this.readFloat());return t},readPackedDouble:function(t){if(this.type!==i.Bytes)return t.push(this.readDouble());var e=u(this);for(t=t||[];this.pos<e;)t.push(this.readDouble());return t},readPackedFixed32:function(t){if(this.type!==i.Bytes)return t.push(this.readFixed32());var e=u(this);for(t=t||[];this.pos<e;)t.push(this.readFixed32());return t},readPackedSFixed32:function(t){if(this.type!==i.Bytes)return t.push(this.readSFixed32());var e=u(this);for(t=t||[];this.pos<e;)t.push(this.readSFixed32());return t},readPackedFixed64:function(t){if(this.type!==i.Bytes)return t.push(this.readFixed64());var e=u(this);for(t=t||[];this.pos<e;)t.push(this.readFixed64());return t},readPackedSFixed64:function(t){if(this.type!==i.Bytes)return t.push(this.readSFixed64());var e=u(this);for(t=t||[];this.pos<e;)t.push(this.readSFixed64());return t},skip:function(t){var e=7&t;if(e===i.Varint)for(;this.buf[this.pos++]>127;);else if(e===i.Bytes)this.pos=this.readVarint()+this.pos;else if(e===i.Fixed32)this.pos+=4;else{if(e!==i.Fixed64)throw new Error("Unimplemented type: "+e);this.pos+=8}},writeTag:function(t,e){this.writeVarint(t<<3|e)},realloc:function(t){for(var e=this.length||16;e<this.pos+t;)e*=2;if(e!==this.length){var r=new Uint8Array(e);r.set(this.buf),this.buf=r,this.length=e}},finish:function(){return this.length=this.pos,this.pos=0,this.buf.subarray(0,this.length)},writeFixed32:function(t){this.realloc(4),x(this.buf,t,this.pos),this.pos+=4},writeSFixed32:function(t){this.realloc(4),x(this.buf,t,this.pos),this.pos+=4},writeFixed64:function(t){this.realloc(8),x(this.buf,-1&t,this.pos),x(this.buf,Math.floor(t*a),this.pos+4),this.pos+=8},writeSFixed64:function(t){this.realloc(8),x(this.buf,-1&t,this.pos),x(this.buf,Math.floor(t*a),this.pos+4),this.pos+=8},writeVarint:function(t){(t=+t||0)>268435455||t<0?function(t,e){var r,n;t>=0?(r=t%4294967296|0,n=t/4294967296|0):(n=~(-t/4294967296),4294967295^(r=~(-t%4294967296))?r=r+1|0:(r=0,n=n+1|0));if(t>=0x10000000000000000||t<-0x10000000000000000)throw new Error("Given varint doesn't fit into 10 bytes");e.realloc(10),function(t,e,r){r.buf[r.pos++]=127&t|128,t>>>=7,r.buf[r.pos++]=127&t|128,t>>>=7,r.buf[r.pos++]=127&t|128,t>>>=7,r.buf[r.pos++]=127&t|128,t>>>=7,r.buf[r.pos]=127&t}(r,0,e),function(t,e){var r=(7&t)<<4;if(e.buf[e.pos++]|=r|((t>>>=3)?128:0),!t)return;if(e.buf[e.pos++]=127&t|((t>>>=7)?128:0),!t)return;if(e.buf[e.pos++]=127&t|((t>>>=7)?128:0),!t)return;if(e.buf[e.pos++]=127&t|((t>>>=7)?128:0),!t)return;if(e.buf[e.pos++]=127&t|((t>>>=7)?128:0),!t)return;e.buf[e.pos++]=127&t}(n,e)}(t,this):(this.realloc(4),this.buf[this.pos++]=127&t|(t>127?128:0),t<=127||(this.buf[this.pos++]=127&(t>>>=7)|(t>127?128:0),t<=127||(this.buf[this.pos++]=127&(t>>>=7)|(t>127?128:0),t<=127||(this.buf[this.pos++]=t>>>7&127))))},writeSVarint:function(t){this.writeVarint(t<0?2*-t-1:2*t)},writeBoolean:function(t){this.writeVarint(Boolean(t))},writeString:function(t){t=String(t),this.realloc(4*t.length),this.pos++;var e=this.pos;this.pos=function(t,e,r){for(var n,i,o=0;o<e.length;o++){if((n=e.charCodeAt(o))>55295&&n<57344){if(!i){n>56319||o+1===e.length?(t[r++]=239,t[r++]=191,t[r++]=189):i=n;continue}if(n<56320){t[r++]=239,t[r++]=191,t[r++]=189,i=n;continue}n=i-55296<<10|n-56320|65536,i=null}else i&&(t[r++]=239,t[r++]=191,t[r++]=189,i=null);n<128?t[r++]=n:(n<2048?t[r++]=n>>6|192:(n<65536?t[r++]=n>>12|224:(t[r++]=n>>18|240,t[r++]=n>>12&63|128),t[r++]=n>>6&63|128),t[r++]=63&n|128)}return r}(this.buf,t,this.pos);var r=this.pos-e;r>=128&&l(e,r,this),this.pos=e-1,this.writeVarint(r),this.pos+=r},writeFloat:function(t){this.realloc(4),n.write(this.buf,t,this.pos,!0,23,4),this.pos+=4},writeDouble:function(t){this.realloc(8),n.write(this.buf,t,this.pos,!0,52,8),this.pos+=8},writeBytes:function(t){var e=t.length;this.writeVarint(e),this.realloc(e);for(var r=0;r<e;r++)this.buf[this.pos++]=t[r]},writeRawMessage:function(t,e){this.pos++;var r=this.pos;t(e,this);var n=this.pos-r;n>=128&&l(r,n,this),this.pos=r-1,this.writeVarint(n),this.pos+=n},writeMessage:function(t,e,r){this.writeTag(t,i.Bytes),this.writeRawMessage(e,r)},writePackedVarint:function(t,e){e.length&&this.writeMessage(t,h,e)},writePackedSVarint:function(t,e){e.length&&this.writeMessage(t,c,e)},writePackedBoolean:function(t,e){e.length&&this.writeMessage(t,y,e)},writePackedFloat:function(t,e){e.length&&this.writeMessage(t,p,e)},writePackedDouble:function(t,e){e.length&&this.writeMessage(t,d,e)},writePackedFixed32:function(t,e){e.length&&this.writeMessage(t,g,e)},writePackedSFixed32:function(t,e){e.length&&this.writeMessage(t,v,e)},writePackedFixed64:function(t,e){e.length&&this.writeMessage(t,b,e)},writePackedSFixed64:function(t,e){e.length&&this.writeMessage(t,m,e)},writeBytesField:function(t,e){this.writeTag(t,i.Bytes),this.writeBytes(e)},writeFixed32Field:function(t,e){this.writeTag(t,i.Fixed32),this.writeFixed32(e)},writeSFixed32Field:function(t,e){this.writeTag(t,i.Fixed32),this.writeSFixed32(e)},writeFixed64Field:function(t,e){this.writeTag(t,i.Fixed64),this.writeFixed64(e)},writeSFixed64Field:function(t,e){this.writeTag(t,i.Fixed64),this.writeSFixed64(e)},writeVarintField:function(t,e){this.writeTag(t,i.Varint),this.writeVarint(e)},writeSVarintField:function(t,e){this.writeTag(t,i.Varint),this.writeSVarint(e)},writeStringField:function(t,e){this.writeTag(t,i.Bytes),this.writeString(e)},writeFloatField:function(t,e){this.writeTag(t,i.Fixed32),this.writeFloat(e)},writeDoubleField:function(t,e){this.writeTag(t,i.Fixed64),this.writeDouble(e)},writeBooleanField:function(t,e){this.writeVarintField(t,Boolean(e))}}},2676:function(t){t.exports=function(){"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function r(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}var n=function e(r,n){t(this,e),this.next=null,this.key=r,this.data=n,this.left=null,this.right=null};function i(t,e){return t>e?1:t<e?-1:0}function o(t,e,r){for(var i=new n(null,null),o=i,a=i;;){var s=r(t,e.key);if(s<0){if(null===e.left)break;if(r(t,e.left.key)<0){var u=e.left;if(e.left=u.right,u.right=e,null===(e=u).left)break}a.left=e,a=e,e=e.left}else{if(!(s>0))break;if(null===e.right)break;if(r(t,e.right.key)>0){var f=e.right;if(e.right=f.left,f.left=e,null===(e=f).right)break}o.right=e,o=e,e=e.right}}return o.right=e.left,a.left=e.right,e.left=i.right,e.right=i.left,e}function a(t,e,r,i){var a=new n(t,e);if(null===r)return a.left=a.right=null,a;var s=i(t,(r=o(t,r,i)).key);return s<0?(a.left=r.left,a.right=r,r.left=null):s>=0&&(a.right=r.right,a.left=r,r.right=null),a}function s(t,e,r){var n=null,i=null;if(e){var a=r((e=o(t,e,r)).key,t);0===a?(n=e.left,i=e.right):a<0?(i=e.right,e.right=null,n=e):(n=e.left,e.left=null,i=e)}return{left:n,right:i}}function u(t,e,r){return null===e?t:(null===t||((e=o(t.key,e,r)).left=t),e)}function f(t,e,r,n,i){if(t){n("".concat(e).concat(r?"└── ":"├── ").concat(i(t),"\n"));var o=e+(r?"    ":"│   ");t.left&&f(t.left,o,!1,n,i),t.right&&f(t.right,o,!0,n,i)}}var l=function(){function e(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i;t(this,e),this._root=null,this._size=0,this._comparator=r}return r(e,[{key:"insert",value:function(t,e){return this._size++,this._root=a(t,e,this._root,this._comparator)}},{key:"add",value:function(t,e){var r=new n(t,e);null===this._root&&(r.left=r.right=null,this._size++,this._root=r);var i=this._comparator,a=o(t,this._root,i),s=i(t,a.key);return 0===s?this._root=a:(s<0?(r.left=a.left,r.right=a,a.left=null):s>0&&(r.right=a.right,r.left=a,a.right=null),this._size++,this._root=r),this._root}},{key:"remove",value:function(t){this._root=this._remove(t,this._root,this._comparator)}},{key:"_remove",value:function(t,e,r){var n;return null===e?null:0===r(t,(e=o(t,e,r)).key)?(null===e.left?n=e.right:(n=o(t,e.left,r)).right=e.right,this._size--,n):e}},{key:"pop",value:function(){var t=this._root;if(t){for(;t.left;)t=t.left;return this._root=o(t.key,this._root,this._comparator),this._root=this._remove(t.key,this._root,this._comparator),{key:t.key,data:t.data}}return null}},{key:"findStatic",value:function(t){for(var e=this._root,r=this._comparator;e;){var n=r(t,e.key);if(0===n)return e;e=n<0?e.left:e.right}return null}},{key:"find",value:function(t){return this._root&&(this._root=o(t,this._root,this._comparator),0!==this._comparator(t,this._root.key))?null:this._root}},{key:"contains",value:function(t){for(var e=this._root,r=this._comparator;e;){var n=r(t,e.key);if(0===n)return!0;e=n<0?e.left:e.right}return!1}},{key:"forEach",value:function(t,e){for(var r=this._root,n=[],i=!1;!i;)null!==r?(n.push(r),r=r.left):0!==n.length?(r=n.pop(),t.call(e,r),r=r.right):i=!0;return this}},{key:"range",value:function(t,e,r,n){for(var i=[],o=this._comparator,a=this._root;0!==i.length||a;)if(a)i.push(a),a=a.left;else{if(o((a=i.pop()).key,e)>0)break;if(o(a.key,t)>=0&&r.call(n,a))return this;a=a.right}return this}},{key:"keys",value:function(){var t=[];return this.forEach((function(e){var r=e.key;return t.push(r)})),t}},{key:"values",value:function(){var t=[];return this.forEach((function(e){var r=e.data;return t.push(r)})),t}},{key:"min",value:function(){return this._root?this.minNode(this._root).key:null}},{key:"max",value:function(){return this._root?this.maxNode(this._root).key:null}},{key:"minNode",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._root;if(t)for(;t.left;)t=t.left;return t}},{key:"maxNode",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._root;if(t)for(;t.right;)t=t.right;return t}},{key:"at",value:function(t){for(var e=this._root,r=!1,n=0,i=[];!r;)if(e)i.push(e),e=e.left;else if(i.length>0){if(e=i.pop(),n===t)return e;n++,e=e.right}else r=!0;return null}},{key:"next",value:function(t){var e=this._root,r=null;if(t.right){for(r=t.right;r.left;)r=r.left;return r}for(var n=this._comparator;e;){var i=n(t.key,e.key);if(0===i)break;i<0?(r=e,e=e.left):e=e.right}return r}},{key:"prev",value:function(t){var e=this._root,r=null;if(null!==t.left){for(r=t.left;r.right;)r=r.right;return r}for(var n=this._comparator;e;){var i=n(t.key,e.key);if(0===i)break;i<0?e=e.left:(r=e,e=e.right)}return r}},{key:"clear",value:function(){return this._root=null,this._size=0,this}},{key:"toList",value:function(){return p(this._root)}},{key:"load",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=t.length,i=this._comparator;if(r&&g(t,e,0,n-1,i),null===this._root)this._root=h(t,e,0,n),this._size=n;else{var o=y(this.toList(),c(t,e),i);n=this._size+n,this._root=d({head:o},0,n)}return this}},{key:"isEmpty",value:function(){return null===this._root}},{key:"toString",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(t){return String(t.key)},e=[];return f(this._root,"",!0,(function(t){return e.push(t)}),t),e.join("")}},{key:"update",value:function(t,e,r){var n=this._comparator,i=s(t,this._root,n),o=i.left,f=i.right;n(t,e)<0?f=a(e,r,f,n):o=a(e,r,o,n),this._root=u(o,f,n)}},{key:"split",value:function(t){return s(t,this._root,this._comparator)}},{key:"size",get:function(){return this._size}},{key:"root",get:function(){return this._root}}]),e}();function h(t,e,r,i){var o=i-r;if(o>0){var a=r+Math.floor(o/2),s=t[a],u=e[a],f=new n(s,u);return f.left=h(t,e,r,a),f.right=h(t,e,a+1,i),f}return null}function c(t,e){for(var r=new n(null,null),i=r,o=0;o<t.length;o++)i=i.next=new n(t[o],e[o]);return i.next=null,r.next}function p(t){for(var e=t,r=[],i=!1,o=new n(null,null),a=o;!i;)e?(r.push(e),e=e.left):r.length>0?e=(e=a=a.next=r.pop()).right:i=!0;return a.next=null,o.next}function d(t,e,r){var n=r-e;if(n>0){var i=e+Math.floor(n/2),o=d(t,e,i),a=t.head;return a.left=o,t.head=t.head.next,a.right=d(t,i+1,r),a}return null}function y(t,e,r){for(var i=new n(null,null),o=i,a=t,s=e;null!==a&&null!==s;)r(a.key,s.key)<0?(o.next=a,a=a.next):(o.next=s,s=s.next),o=o.next;return null!==a?o.next=a:null!==s&&(o.next=s),i.next}function g(t,e,r,n,i){if(!(r>=n)){for(var o=t[r+n>>1],a=r-1,s=n+1;;){do{a++}while(i(t[a],o)<0);do{s--}while(i(t[s],o)>0);if(a>=s)break;var u=t[a];t[a]=t[s],t[s]=u,u=e[a],e[a]=e[s],e[s]=u}g(t,e,r,s,i),g(t,e,s+1,n,i)}}var v=function(t,e){return t.ll.x<=e.x&&e.x<=t.ur.x&&t.ll.y<=e.y&&e.y<=t.ur.y},b=function(t,e){if(e.ur.x<t.ll.x||t.ur.x<e.ll.x||e.ur.y<t.ll.y||t.ur.y<e.ll.y)return null;var r=t.ll.x<e.ll.x?e.ll.x:t.ll.x,n=t.ur.x<e.ur.x?t.ur.x:e.ur.x;return{ll:{x:r,y:t.ll.y<e.ll.y?e.ll.y:t.ll.y},ur:{x:n,y:t.ur.y<e.ur.y?t.ur.y:e.ur.y}}},m=Number.EPSILON;void 0===m&&(m=Math.pow(2,-52));var w=m*m,x=function(t,e){if(-m<t&&t<m&&-m<e&&e<m)return 0;var r=t-e;return r*r<w*t*e?0:t<e?-1:1},_=function(){function e(){t(this,e),this.reset()}return r(e,[{key:"reset",value:function(){this.xRounder=new E,this.yRounder=new E}},{key:"round",value:function(t,e){return{x:this.xRounder.round(t),y:this.yRounder.round(e)}}}]),e}(),E=function(){function e(){t(this,e),this.tree=new l,this.round(0)}return r(e,[{key:"round",value:function(t){var e=this.tree.add(t),r=this.tree.prev(e);if(null!==r&&0===x(e.key,r.key))return this.tree.remove(t),r.key;var n=this.tree.next(e);return null!==n&&0===x(e.key,n.key)?(this.tree.remove(t),n.key):t}}]),e}(),S=new _,k=function(t,e){return t.x*e.y-t.y*e.x},M=function(t,e){return t.x*e.x+t.y*e.y},A=function(t,e,r){var n={x:e.x-t.x,y:e.y-t.y},i={x:r.x-t.x,y:r.y-t.y},o=k(n,i);return x(o,0)},R=function(t){return Math.sqrt(M(t,t))},j=function(t,e,r){var n={x:e.x-t.x,y:e.y-t.y},i={x:r.x-t.x,y:r.y-t.y};return k(i,n)/R(i)/R(n)},T=function(t,e,r){var n={x:e.x-t.x,y:e.y-t.y},i={x:r.x-t.x,y:r.y-t.y};return M(i,n)/R(i)/R(n)},P=function(t,e,r){return 0===e.y?null:{x:t.x+e.x/e.y*(r-t.y),y:r}},I=function(t,e,r){return 0===e.x?null:{x:r,y:t.y+e.y/e.x*(r-t.x)}},B=function(t,e,r,n){if(0===e.x)return I(r,n,t.x);if(0===n.x)return I(t,e,r.x);if(0===e.y)return P(r,n,t.y);if(0===n.y)return P(t,e,r.y);var i=k(e,n);if(0==i)return null;var o={x:r.x-t.x,y:r.y-t.y},a=k(o,e)/i,s=k(o,n)/i;return{x:(t.x+s*e.x+(r.x+a*n.x))/2,y:(t.y+s*e.y+(r.y+a*n.y))/2}},L=function(){function e(r,n){t(this,e),void 0===r.events?r.events=[this]:r.events.push(this),this.point=r,this.isLeft=n}return r(e,null,[{key:"compare",value:function(t,r){var n=e.comparePoints(t.point,r.point);return 0!==n?n:(t.point!==r.point&&t.link(r),t.isLeft!==r.isLeft?t.isLeft?1:-1:C.compare(t.segment,r.segment))}},{key:"comparePoints",value:function(t,e){return t.x<e.x?-1:t.x>e.x?1:t.y<e.y?-1:t.y>e.y?1:0}}]),r(e,[{key:"link",value:function(t){if(t.point===this.point)throw new Error("Tried to link already linked events");for(var e=t.point.events,r=0,n=e.length;r<n;r++){var i=e[r];this.point.events.push(i),i.point=this.point}this.checkForConsuming()}},{key:"checkForConsuming",value:function(){for(var t=this.point.events.length,e=0;e<t;e++){var r=this.point.events[e];if(void 0===r.segment.consumedBy)for(var n=e+1;n<t;n++){var i=this.point.events[n];void 0===i.consumedBy&&r.otherSE.point.events===i.otherSE.point.events&&r.segment.consume(i.segment)}}}},{key:"getAvailableLinkedEvents",value:function(){for(var t=[],e=0,r=this.point.events.length;e<r;e++){var n=this.point.events[e];n!==this&&!n.segment.ringOut&&n.segment.isInResult()&&t.push(n)}return t}},{key:"getLeftmostComparator",value:function(t){var e=this,r=new Map,n=function(n){var i=n.otherSE;r.set(n,{sine:j(e.point,t.point,i.point),cosine:T(e.point,t.point,i.point)})};return function(t,e){r.has(t)||n(t),r.has(e)||n(e);var i=r.get(t),o=i.sine,a=i.cosine,s=r.get(e),u=s.sine,f=s.cosine;return o>=0&&u>=0?a<f?1:a>f?-1:0:o<0&&u<0?a<f?-1:a>f?1:0:u<o?-1:u>o?1:0}}}]),e}(),O=0,C=function(){function e(r,n,i,o){t(this,e),this.id=++O,this.leftSE=r,r.segment=this,r.otherSE=n,this.rightSE=n,n.segment=this,n.otherSE=r,this.rings=i,this.windings=o}return r(e,null,[{key:"compare",value:function(t,e){var r=t.leftSE.point.x,n=e.leftSE.point.x,i=t.rightSE.point.x,o=e.rightSE.point.x;if(o<r)return 1;if(i<n)return-1;var a=t.leftSE.point.y,s=e.leftSE.point.y,u=t.rightSE.point.y,f=e.rightSE.point.y;if(r<n){if(s<a&&s<u)return 1;if(s>a&&s>u)return-1;var l=t.comparePoint(e.leftSE.point);if(l<0)return 1;if(l>0)return-1;var h=e.comparePoint(t.rightSE.point);return 0!==h?h:-1}if(r>n){if(a<s&&a<f)return-1;if(a>s&&a>f)return 1;var c=e.comparePoint(t.leftSE.point);if(0!==c)return c;var p=t.comparePoint(e.rightSE.point);return p<0?1:p>0?-1:1}if(a<s)return-1;if(a>s)return 1;if(i<o){var d=e.comparePoint(t.rightSE.point);if(0!==d)return d}if(i>o){var y=t.comparePoint(e.rightSE.point);if(y<0)return 1;if(y>0)return-1}if(i!==o){var g=u-a,v=i-r,b=f-s,m=o-n;if(g>v&&b<m)return 1;if(g<v&&b>m)return-1}return i>o?1:i<o||u<f?-1:u>f?1:t.id<e.id?-1:t.id>e.id?1:0}}]),r(e,[{key:"replaceRightSE",value:function(t){this.rightSE=t,this.rightSE.segment=this,this.rightSE.otherSE=this.leftSE,this.leftSE.otherSE=this.rightSE}},{key:"bbox",value:function(){var t=this.leftSE.point.y,e=this.rightSE.point.y;return{ll:{x:this.leftSE.point.x,y:t<e?t:e},ur:{x:this.rightSE.point.x,y:t>e?t:e}}}},{key:"vector",value:function(){return{x:this.rightSE.point.x-this.leftSE.point.x,y:this.rightSE.point.y-this.leftSE.point.y}}},{key:"isAnEndpoint",value:function(t){return t.x===this.leftSE.point.x&&t.y===this.leftSE.point.y||t.x===this.rightSE.point.x&&t.y===this.rightSE.point.y}},{key:"comparePoint",value:function(t){if(this.isAnEndpoint(t))return 0;var e=this.leftSE.point,r=this.rightSE.point,n=this.vector();if(e.x===r.x)return t.x===e.x?0:t.x<e.x?1:-1;var i=(t.y-e.y)/n.y,o=e.x+i*n.x;if(t.x===o)return 0;var a=(t.x-e.x)/n.x,s=e.y+a*n.y;return t.y===s?0:t.y<s?-1:1}},{key:"getIntersection",value:function(t){var e=this.bbox(),r=t.bbox(),n=b(e,r);if(null===n)return null;var i=this.leftSE.point,o=this.rightSE.point,a=t.leftSE.point,s=t.rightSE.point,u=v(e,a)&&0===this.comparePoint(a),f=v(r,i)&&0===t.comparePoint(i),l=v(e,s)&&0===this.comparePoint(s),h=v(r,o)&&0===t.comparePoint(o);if(f&&u)return h&&!l?o:!h&&l?s:null;if(f)return l&&i.x===s.x&&i.y===s.y?null:i;if(u)return h&&o.x===a.x&&o.y===a.y?null:a;if(h&&l)return null;if(h)return o;if(l)return s;var c=B(i,this.vector(),a,t.vector());return null===c?null:v(n,c)?S.round(c.x,c.y):null}},{key:"split",value:function(t){var r=[],n=void 0!==t.events,i=new L(t,!0),o=new L(t,!1),a=this.rightSE;this.replaceRightSE(o),r.push(o),r.push(i);var s=new e(i,a,this.rings.slice(),this.windings.slice());return L.comparePoints(s.leftSE.point,s.rightSE.point)>0&&s.swapEvents(),L.comparePoints(this.leftSE.point,this.rightSE.point)>0&&this.swapEvents(),n&&(i.checkForConsuming(),o.checkForConsuming()),r}},{key:"swapEvents",value:function(){var t=this.rightSE;this.rightSE=this.leftSE,this.leftSE=t,this.leftSE.isLeft=!0,this.rightSE.isLeft=!1;for(var e=0,r=this.windings.length;e<r;e++)this.windings[e]*=-1}},{key:"consume",value:function(t){for(var r=this,n=t;r.consumedBy;)r=r.consumedBy;for(;n.consumedBy;)n=n.consumedBy;var i=e.compare(r,n);if(0!==i){if(i>0){var o=r;r=n,n=o}if(r.prev===n){var a=r;r=n,n=a}for(var s=0,u=n.rings.length;s<u;s++){var f=n.rings[s],l=n.windings[s],h=r.rings.indexOf(f);-1===h?(r.rings.push(f),r.windings.push(l)):r.windings[h]+=l}n.rings=null,n.windings=null,n.consumedBy=r,n.leftSE.consumedBy=r.leftSE,n.rightSE.consumedBy=r.rightSE}}},{key:"prevInResult",value:function(){return void 0!==this._prevInResult||(this.prev?this.prev.isInResult()?this._prevInResult=this.prev:this._prevInResult=this.prev.prevInResult():this._prevInResult=null),this._prevInResult}},{key:"beforeState",value:function(){if(void 0!==this._beforeState)return this._beforeState;if(this.prev){var t=this.prev.consumedBy||this.prev;this._beforeState=t.afterState()}else this._beforeState={rings:[],windings:[],multiPolys:[]};return this._beforeState}},{key:"afterState",value:function(){if(void 0!==this._afterState)return this._afterState;var t=this.beforeState();this._afterState={rings:t.rings.slice(0),windings:t.windings.slice(0),multiPolys:[]};for(var e=this._afterState.rings,r=this._afterState.windings,n=this._afterState.multiPolys,i=0,o=this.rings.length;i<o;i++){var a=this.rings[i],s=this.windings[i],u=e.indexOf(a);-1===u?(e.push(a),r.push(s)):r[u]+=s}for(var f=[],l=[],h=0,c=e.length;h<c;h++)if(0!==r[h]){var p=e[h],d=p.poly;if(-1===l.indexOf(d))if(p.isExterior)f.push(d);else{-1===l.indexOf(d)&&l.push(d);var y=f.indexOf(p.poly);-1!==y&&f.splice(y,1)}}for(var g=0,v=f.length;g<v;g++){var b=f[g].multiPoly;-1===n.indexOf(b)&&n.push(b)}return this._afterState}},{key:"isInResult",value:function(){if(this.consumedBy)return!1;if(void 0!==this._isInResult)return this._isInResult;var t=this.beforeState().multiPolys,e=this.afterState().multiPolys;switch(G.type){case"union":var r=0===t.length,n=0===e.length;this._isInResult=r!==n;break;case"intersection":var i,o;t.length<e.length?(i=t.length,o=e.length):(i=e.length,o=t.length),this._isInResult=o===G.numMultiPolys&&i<o;break;case"xor":var a=Math.abs(t.length-e.length);this._isInResult=a%2==1;break;case"difference":var s=function(t){return 1===t.length&&t[0].isSubject};this._isInResult=s(t)!==s(e);break;default:throw new Error("Unrecognized operation type found ".concat(G.type))}return this._isInResult}}],[{key:"fromRing",value:function(t,r,n){var i,o,a,s=L.comparePoints(t,r);if(s<0)i=t,o=r,a=1;else{if(!(s>0))throw new Error("Tried to create degenerate segment at [".concat(t.x,", ").concat(t.y,"]"));i=r,o=t,a=-1}return new e(new L(i,!0),new L(o,!1),[n],[a])}}]),e}(),N=function(){function e(r,n,i){if(t(this,e),!Array.isArray(r)||0===r.length)throw new Error("Input geometry is not a valid Polygon or MultiPolygon");if(this.poly=n,this.isExterior=i,this.segments=[],"number"!=typeof r[0][0]||"number"!=typeof r[0][1])throw new Error("Input geometry is not a valid Polygon or MultiPolygon");var o=S.round(r[0][0],r[0][1]);this.bbox={ll:{x:o.x,y:o.y},ur:{x:o.x,y:o.y}};for(var a=o,s=1,u=r.length;s<u;s++){if("number"!=typeof r[s][0]||"number"!=typeof r[s][1])throw new Error("Input geometry is not a valid Polygon or MultiPolygon");var f=S.round(r[s][0],r[s][1]);f.x===a.x&&f.y===a.y||(this.segments.push(C.fromRing(a,f,this)),f.x<this.bbox.ll.x&&(this.bbox.ll.x=f.x),f.y<this.bbox.ll.y&&(this.bbox.ll.y=f.y),f.x>this.bbox.ur.x&&(this.bbox.ur.x=f.x),f.y>this.bbox.ur.y&&(this.bbox.ur.y=f.y),a=f)}o.x===a.x&&o.y===a.y||this.segments.push(C.fromRing(a,o,this))}return r(e,[{key:"getSweepEvents",value:function(){for(var t=[],e=0,r=this.segments.length;e<r;e++){var n=this.segments[e];t.push(n.leftSE),t.push(n.rightSE)}return t}}]),e}(),F=function(){function e(r,n){if(t(this,e),!Array.isArray(r))throw new Error("Input geometry is not a valid Polygon or MultiPolygon");this.exteriorRing=new N(r[0],this,!0),this.bbox={ll:{x:this.exteriorRing.bbox.ll.x,y:this.exteriorRing.bbox.ll.y},ur:{x:this.exteriorRing.bbox.ur.x,y:this.exteriorRing.bbox.ur.y}},this.interiorRings=[];for(var i=1,o=r.length;i<o;i++){var a=new N(r[i],this,!1);a.bbox.ll.x<this.bbox.ll.x&&(this.bbox.ll.x=a.bbox.ll.x),a.bbox.ll.y<this.bbox.ll.y&&(this.bbox.ll.y=a.bbox.ll.y),a.bbox.ur.x>this.bbox.ur.x&&(this.bbox.ur.x=a.bbox.ur.x),a.bbox.ur.y>this.bbox.ur.y&&(this.bbox.ur.y=a.bbox.ur.y),this.interiorRings.push(a)}this.multiPoly=n}return r(e,[{key:"getSweepEvents",value:function(){for(var t=this.exteriorRing.getSweepEvents(),e=0,r=this.interiorRings.length;e<r;e++)for(var n=this.interiorRings[e].getSweepEvents(),i=0,o=n.length;i<o;i++)t.push(n[i]);return t}}]),e}(),U=function(){function e(r,n){if(t(this,e),!Array.isArray(r))throw new Error("Input geometry is not a valid Polygon or MultiPolygon");try{"number"==typeof r[0][0][0]&&(r=[r])}catch(t){}this.polys=[],this.bbox={ll:{x:Number.POSITIVE_INFINITY,y:Number.POSITIVE_INFINITY},ur:{x:Number.NEGATIVE_INFINITY,y:Number.NEGATIVE_INFINITY}};for(var i=0,o=r.length;i<o;i++){var a=new F(r[i],this);a.bbox.ll.x<this.bbox.ll.x&&(this.bbox.ll.x=a.bbox.ll.x),a.bbox.ll.y<this.bbox.ll.y&&(this.bbox.ll.y=a.bbox.ll.y),a.bbox.ur.x>this.bbox.ur.x&&(this.bbox.ur.x=a.bbox.ur.x),a.bbox.ur.y>this.bbox.ur.y&&(this.bbox.ur.y=a.bbox.ur.y),this.polys.push(a)}this.isSubject=n}return r(e,[{key:"getSweepEvents",value:function(){for(var t=[],e=0,r=this.polys.length;e<r;e++)for(var n=this.polys[e].getSweepEvents(),i=0,o=n.length;i<o;i++)t.push(n[i]);return t}}]),e}(),D=function(){function e(r){t(this,e),this.events=r;for(var n=0,i=r.length;n<i;n++)r[n].segment.ringOut=this;this.poly=null}return r(e,null,[{key:"factory",value:function(t){for(var r=[],n=0,i=t.length;n<i;n++){var o=t[n];if(o.isInResult()&&!o.ringOut){for(var a=null,s=o.leftSE,u=o.rightSE,f=[s],l=s.point,h=[];a=s,s=u,f.push(s),s.point!==l;)for(;;){var c=s.getAvailableLinkedEvents();if(0===c.length){var p=f[0].point,d=f[f.length-1].point;throw new Error("Unable to complete output ring starting at [".concat(p.x,",")+" ".concat(p.y,"]. Last matching segment found ends at")+" [".concat(d.x,", ").concat(d.y,"]."))}if(1===c.length){u=c[0].otherSE;break}for(var y=null,g=0,v=h.length;g<v;g++)if(h[g].point===s.point){y=g;break}if(null===y){h.push({index:f.length,point:s.point});var b=s.getLeftmostComparator(a);u=c.sort(b)[0].otherSE;break}var m=h.splice(y)[0],w=f.splice(m.index);w.unshift(w[0].otherSE),r.push(new e(w.reverse()))}r.push(new e(f))}}return r}}]),r(e,[{key:"getGeom",value:function(){for(var t=this.events[0].point,e=[t],r=1,n=this.events.length-1;r<n;r++){var i=this.events[r].point,o=this.events[r+1].point;0!==A(i,t,o)&&(e.push(i),t=i)}if(1===e.length)return null;var a=e[0],s=e[1];0===A(a,t,s)&&e.shift(),e.push(e[0]);for(var u=this.isExteriorRing()?1:-1,f=this.isExteriorRing()?0:e.length-1,l=this.isExteriorRing()?e.length:-1,h=[],c=f;c!=l;c+=u)h.push([e[c].x,e[c].y]);return h}},{key:"isExteriorRing",value:function(){if(void 0===this._isExteriorRing){var t=this.enclosingRing();this._isExteriorRing=!t||!t.isExteriorRing()}return this._isExteriorRing}},{key:"enclosingRing",value:function(){return void 0===this._enclosingRing&&(this._enclosingRing=this._calcEnclosingRing()),this._enclosingRing}},{key:"_calcEnclosingRing",value:function(){for(var t=this.events[0],e=1,r=this.events.length;e<r;e++){var n=this.events[e];L.compare(t,n)>0&&(t=n)}for(var i=t.segment.prevInResult(),o=i?i.prevInResult():null;;){if(!i)return null;if(!o)return i.ringOut;if(o.ringOut!==i.ringOut)return o.ringOut.enclosingRing()!==i.ringOut?i.ringOut:i.ringOut.enclosingRing();i=o.prevInResult(),o=i?i.prevInResult():null}}}]),e}(),V=function(){function e(r){t(this,e),this.exteriorRing=r,r.poly=this,this.interiorRings=[]}return r(e,[{key:"addInterior",value:function(t){this.interiorRings.push(t),t.poly=this}},{key:"getGeom",value:function(){var t=[this.exteriorRing.getGeom()];if(null===t[0])return null;for(var e=0,r=this.interiorRings.length;e<r;e++){var n=this.interiorRings[e].getGeom();null!==n&&t.push(n)}return t}}]),e}(),q=function(){function e(r){t(this,e),this.rings=r,this.polys=this._composePolys(r)}return r(e,[{key:"getGeom",value:function(){for(var t=[],e=0,r=this.polys.length;e<r;e++){var n=this.polys[e].getGeom();null!==n&&t.push(n)}return t}},{key:"_composePolys",value:function(t){for(var e=[],r=0,n=t.length;r<n;r++){var i=t[r];if(!i.poly)if(i.isExteriorRing())e.push(new V(i));else{var o=i.enclosingRing();o.poly||e.push(new V(o)),o.poly.addInterior(i)}}return e}}]),e}(),z=function(){function e(r){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:C.compare;t(this,e),this.queue=r,this.tree=new l(n),this.segments=[]}return r(e,[{key:"process",value:function(t){var e=t.segment,r=[];if(t.consumedBy)return t.isLeft?this.queue.remove(t.otherSE):this.tree.remove(e),r;var n=t.isLeft?this.tree.insert(e):this.tree.find(e);if(!n)throw new Error("Unable to find segment #".concat(e.id," ")+"[".concat(e.leftSE.point.x,", ").concat(e.leftSE.point.y,"] -> ")+"[".concat(e.rightSE.point.x,", ").concat(e.rightSE.point.y,"] ")+"in SweepLine tree. Please submit a bug report.");for(var i=n,o=n,a=void 0,s=void 0;void 0===a;)null===(i=this.tree.prev(i))?a=null:void 0===i.key.consumedBy&&(a=i.key);for(;void 0===s;)null===(o=this.tree.next(o))?s=null:void 0===o.key.consumedBy&&(s=o.key);if(t.isLeft){var u=null;if(a){var f=a.getIntersection(e);if(null!==f&&(e.isAnEndpoint(f)||(u=f),!a.isAnEndpoint(f)))for(var l=this._splitSafely(a,f),h=0,c=l.length;h<c;h++)r.push(l[h])}var p=null;if(s){var d=s.getIntersection(e);if(null!==d&&(e.isAnEndpoint(d)||(p=d),!s.isAnEndpoint(d)))for(var y=this._splitSafely(s,d),g=0,v=y.length;g<v;g++)r.push(y[g])}if(null!==u||null!==p){var b=null;b=null===u?p:null===p||L.comparePoints(u,p)<=0?u:p,this.queue.remove(e.rightSE),r.push(e.rightSE);for(var m=e.split(b),w=0,x=m.length;w<x;w++)r.push(m[w])}r.length>0?(this.tree.remove(e),r.push(t)):(this.segments.push(e),e.prev=a)}else{if(a&&s){var _=a.getIntersection(s);if(null!==_){if(!a.isAnEndpoint(_))for(var E=this._splitSafely(a,_),S=0,k=E.length;S<k;S++)r.push(E[S]);if(!s.isAnEndpoint(_))for(var M=this._splitSafely(s,_),A=0,R=M.length;A<R;A++)r.push(M[A])}}this.tree.remove(e)}return r}},{key:"_splitSafely",value:function(t,e){this.tree.remove(t);var r=t.rightSE;this.queue.remove(r);var n=t.split(e);return n.push(r),void 0===t.consumedBy&&this.tree.insert(t),n}}]),e}(),G=new(function(){function e(){t(this,e)}return r(e,[{key:"run",value:function(t,e,r){G.type=t,S.reset();for(var n=[new U(e,!0)],i=0,o=r.length;i<o;i++)n.push(new U(r[i],!1));if(G.numMultiPolys=n.length,"difference"===G.type)for(var a=n[0],s=1;s<n.length;)null!==b(n[s].bbox,a.bbox)?s++:n.splice(s,1);if("intersection"===G.type)for(var u=0,f=n.length;u<f;u++)for(var h=n[u],c=u+1,p=n.length;c<p;c++)if(null===b(h.bbox,n[c].bbox))return[];for(var d=new l(L.compare),y=0,g=n.length;y<g;y++)for(var v=n[y].getSweepEvents(),m=0,w=v.length;m<w;m++)d.insert(v[m]);for(var x=new z(d),_=d.size,E=d.pop();E;){var k=E.key;if(d.size===_){var M=k.segment;throw new Error("Unable to pop() ".concat(k.isLeft?"left":"right"," SweepEvent ")+"[".concat(k.point.x,", ").concat(k.point.y,"] from segment #").concat(M.id," ")+"[".concat(M.leftSE.point.x,", ").concat(M.leftSE.point.y,"] -> ")+"[".concat(M.rightSE.point.x,", ").concat(M.rightSE.point.y,"] from queue. ")+"Please file a bug report.")}for(var A=x.process(k),R=0,j=A.length;R<j;R++){var T=A[R];void 0===T.consumedBy&&d.insert(T)}_=d.size,E=d.pop()}S.reset();var P=D.factory(x.segments);return new q(P).getGeom()}}]),e}());return{union:function(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];return G.run("union",t,r)},intersection:function(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];return G.run("intersection",t,r)},xor:function(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];return G.run("xor",t,r)},difference:function(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];return G.run("difference",t,r)}}}()},5666:t=>{var e=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var i=e&&e.prototype instanceof g?e:g,o=Object.create(i.prototype),a=new R(n||[]);return o._invoke=function(t,e,r){var n=h;return function(i,o){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===i)throw o;return T()}for(r.method=i,r.arg=o;;){var a=r.delegate;if(a){var s=k(a,r);if(s){if(s===y)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var u=l(t,e,r);if("normal"===u.type){if(n=r.done?d:c,u.arg===y)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=d,r.method="throw",r.arg=u.arg)}}}(t,r,a),o}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=f;var h="suspendedStart",c="suspendedYield",p="executing",d="completed",y={};function g(){}function v(){}function b(){}var m={};m[o]=function(){return this};var w=Object.getPrototypeOf,x=w&&w(w(j([])));x&&x!==r&&n.call(x,o)&&(m=x);var _=b.prototype=g.prototype=Object.create(m);function E(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function r(i,o,a,s){var u=l(t[i],t,o);if("throw"!==u.type){var f=u.arg,h=f.value;return h&&"object"==typeof h&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,a,s)}),(function(t){r("throw",t,a,s)})):e.resolve(h).then((function(t){f.value=t,a(f)}),(function(t){return r("throw",t,a,s)}))}s(u.arg)}var i;this._invoke=function(t,n){function o(){return new e((function(e,i){r(t,n,e,i)}))}return i=i?i.then(o,o):o()}}function k(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,k(t,r),"throw"===r.method))return y;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var i=l(n,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,y;var o=i.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,y):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function M(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function A(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function R(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(M,this),this.reset(!0)}function j(t){if(t){var r=t[o];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var i=-1,a=function r(){for(;++i<t.length;)if(n.call(t,i))return r.value=t[i],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:T}}function T(){return{value:e,done:!0}}return v.prototype=_.constructor=b,b.constructor=v,v.displayName=u(b,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,u(t,s,"GeneratorFunction")),t.prototype=Object.create(_),t},t.awrap=function(t){return{__await:t}},E(S.prototype),S.prototype[a]=function(){return this},t.AsyncIterator=S,t.async=function(e,r,n,i,o){void 0===o&&(o=Promise);var a=new S(f(e,r,n,i),o);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(_),u(_,s,"Generator"),_[o]=function(){return this},_.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=j,R.prototype={constructor:R,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(A),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function i(n,i){return s.type="throw",s.arg=t,r.next=n,i&&(r.method="next",r.arg=e),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),f=n.call(a,"finallyLoc");if(u&&f){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!f)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,y):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),A(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;A(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:j(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),y}},t}(t.exports);try{regeneratorRuntime=e}catch(t){Function("r","regeneratorRuntime = r")(e)}},9509:(t,e,r)=>{var n=r(1664),i=n.Buffer;function o(t,e){for(var r in t)e[r]=t[r]}function a(t,e,r){return i(t,e,r)}i.from&&i.alloc&&i.allocUnsafe&&i.allocUnsafeSlow?t.exports=n:(o(n,e),e.Buffer=a),o(i,a),a.from=function(t,e,r){if("number"==typeof t)throw new TypeError("Argument must not be a number");return i(t,e,r)},a.alloc=function(t,e,r){if("number"!=typeof t)throw new TypeError("Argument must be a number");var n=i(t);return void 0!==e?"string"==typeof r?n.fill(e,r):n.fill(e):n.fill(0),n},a.allocUnsafe=function(t){if("number"!=typeof t)throw new TypeError("Argument must be a number");return i(t)},a.allocUnsafeSlow=function(t){if("number"!=typeof t)throw new TypeError("Argument must be a number");return n.SlowBuffer(t)}},6547:(t,e,r)=>{var n=r(8043);function i(t,e,r){t=t||function(t){this.queue(t)},e=e||function(){this.queue(null)};var i=!1,o=!1,a=[],s=!1,u=new n;function f(){for(;a.length&&!u.paused;){var t=a.shift();if(null===t)return u.emit("end");u.emit("data",t)}}function l(){u.writable=!1,e.call(u),!u.readable&&u.autoDestroy&&u.destroy()}return u.readable=u.writable=!0,u.paused=!1,u.autoDestroy=!(r&&!1===r.autoDestroy),u.write=function(e){return t.call(this,e),!u.paused},u.queue=u.push=function(t){return s||(null===t&&(s=!0),a.push(t),f()),u},u.on("end",(function(){u.readable=!1,!u.writable&&u.autoDestroy&&process.nextTick((function(){u.destroy()}))})),u.end=function(t){if(!i)return i=!0,arguments.length&&u.write(t),l(),u},u.destroy=function(){if(!o)return o=!0,i=!0,a.length=0,u.writable=u.readable=!1,u.emit("close"),u},u.pause=function(){if(!u.paused)return u.paused=!0,u},u.resume=function(){return u.paused&&(u.paused=!1,u.emit("resume")),f(),u.paused||u.emit("drain"),u},u}t.exports=i,i.through=i},8706:t=>{"use strict";t.exports=function(t,e,r){return 0===t.length?t:e?(r||t.sort(e),function(t,e){for(var r=1,n=t.length,i=t[0],o=t[0],a=1;a<n;++a)if(o=i,e(i=t[a],o)){if(a===r){r++;continue}t[r++]=i}return t.length=r,t}(t,e)):(r||t.sort(),function(t){for(var e=1,r=t.length,n=t[0],i=t[0],o=1;o<r;++o,i=n)if(i=n,(n=t[o])!==i){if(o===e){e++;continue}t[e++]=n}return t.length=e,t}(t))}},1875:(t,e,r)=>{"use strict";var n=r(8908),i=r(7376),o=r(4947),a=r(7529);function s(t,e,r){var n=t;return i(e)?(r=e,"string"==typeof t&&(n={uri:t})):n=a(e,{uri:t}),n.callback=r,n}function u(t,e,r){return f(e=s(t,e,r))}function f(t){if(void 0===t.callback)throw new Error("callback argument missing");var e=!1,r=function(r,n,i){e||(e=!0,t.callback(r,n,i))};function n(){var t=void 0;if(t=l.response?l.response:l.responseText||function(t){try{if("document"===t.responseType)return t.responseXML;var e=t.responseXML&&"parsererror"===t.responseXML.documentElement.nodeName;if(""===t.responseType&&!e)return t.responseXML}catch(t){}return null}(l),v)try{t=JSON.parse(t)}catch(t){}return t}function i(t){return clearTimeout(h),t instanceof Error||(t=new Error(""+(t||"Unknown XMLHttpRequest Error"))),t.statusCode=0,r(t,b)}function a(){if(!f){var e;clearTimeout(h),e=t.useXDR&&void 0===l.status?200:1223===l.status?204:l.status;var i=b,a=null;return 0!==e?(i={body:n(),statusCode:e,method:p,headers:{},url:c,rawRequest:l},l.getAllResponseHeaders&&(i.headers=o(l.getAllResponseHeaders()))):a=new Error("Internal XMLHttpRequest Error"),r(a,i,i.body)}}var s,f,l=t.xhr||null;l||(l=t.cors||t.useXDR?new u.XDomainRequest:new u.XMLHttpRequest);var h,c=l.url=t.uri||t.url,p=l.method=t.method||"GET",d=t.body||t.data,y=l.headers=t.headers||{},g=!!t.sync,v=!1,b={body:void 0,headers:{},statusCode:0,method:p,url:c,rawRequest:l};if("json"in t&&!1!==t.json&&(v=!0,y.accept||y.Accept||(y.Accept="application/json"),"GET"!==p&&"HEAD"!==p&&(y["content-type"]||y["Content-Type"]||(y["Content-Type"]="application/json"),d=JSON.stringify(!0===t.json?d:t.json))),l.onreadystatechange=function(){4===l.readyState&&setTimeout(a,0)},l.onload=a,l.onerror=i,l.onprogress=function(){},l.onabort=function(){f=!0},l.ontimeout=i,l.open(p,c,!g,t.username,t.password),g||(l.withCredentials=!!t.withCredentials),!g&&t.timeout>0&&(h=setTimeout((function(){if(!f){f=!0,l.abort("timeout");var t=new Error("XMLHttpRequest timeout");t.code="ETIMEDOUT",i(t)}}),t.timeout)),l.setRequestHeader)for(s in y)y.hasOwnProperty(s)&&l.setRequestHeader(s,y[s]);else if(t.headers&&!function(t){for(var e in t)if(t.hasOwnProperty(e))return!1;return!0}(t.headers))throw new Error("Headers cannot be set on an XDomainRequest object");return"responseType"in t&&(l.responseType=t.responseType),"beforeSend"in t&&"function"==typeof t.beforeSend&&t.beforeSend(l),l.send(d||null),l}t.exports=u,t.exports.default=u,u.XMLHttpRequest=n.XMLHttpRequest||function(){},u.XDomainRequest="withCredentials"in new u.XMLHttpRequest?u.XMLHttpRequest:n.XDomainRequest,function(t,e){for(var r=0;r<t.length;r++)e(t[r])}(["get","put","post","patch","head","delete"],(function(t){u["delete"===t?"del":t]=function(e,r,n){return(r=s(e,r,n)).method=t.toUpperCase(),f(r)}}))},7529:t=>{t.exports=function(){for(var t={},r=0;r<arguments.length;r++){var n=arguments[r];for(var i in n)e.call(n,i)&&(t[i]=n[i])}return t};var e=Object.prototype.hasOwnProperty},1758:()=>{}},e={};function r(n){if(e[n])return e[n].exports;var i=e[n]={exports:{}};return t[n].call(i.exports,i,i.exports,r),i.exports}return r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r(5937)})().default;export default ThreeGeo;
>>>>>>> 54a2a0614b2fcac0c41e50749bae0b3415d39e79
