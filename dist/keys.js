"use strict";
exports.__esModule = true;
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1;
var I = 'I';
// const II = 'II'
var III = 'III';
var IV = 'IV';
var V = 'V';
var VI = 'VI';
var VII = 'VII';
var i = 'i';
var ii = 'ii';
var iii = 'iii';
var iv = 'iv';
var v = 'v';
var vi = 'vi';
var vii = 'vii';
exports.keys = [
    {
        fullName: 'Key of A major',
        shortName: 'A',
        chords: (_a = {},
            _a[I] = 'A',
            _a[ii] = 'Bm',
            _a[iii] = 'C#m',
            _a[IV] = 'D',
            _a[V] = 'E',
            _a[vi] = 'F#m',
            _a[vii] = 'G#dim',
            _a),
        chordProgressions: [
            [I, IV, V],
            [I, vi, IV, V],
            [ii, V, I]
        ],
        isCommonKey: true
    },
    {
        fullName: 'Key of A minor',
        shortName: 'Am',
        chords: (_b = {},
            _b[i] = 'Am',
            _b[ii] = 'Bdim',
            _b[III] = 'C',
            _b[iv] = 'Dm',
            _b[v] = 'Em',
            _b[VI] = 'F',
            _b[VII] = 'G',
            _b),
        chordProgressions: [
            [i, VI, VII],
            [i, iv, VII],
            [i, iv, v],
            [i, VI, III, VII],
            [ii, v, i]
        ],
        isCommonKey: true
    },
    {
        fullName: 'Key of A flat',
        shortName: 'Ab',
        chords: (_c = {},
            _c[I] = 'Ab',
            _c[ii] = 'Bbm',
            _c[iii] = 'Cm',
            _c[IV] = 'Db',
            _c[V] = 'Eb',
            _c[vi] = 'Fm',
            _c[vii] = 'Gdim',
            _c)
    },
    {
        fullName: 'Key of A sharp',
        shortName: 'A#',
        alternativeShortName: 'Bb',
        chords: (_d = {},
            _d[I] = 'Bb',
            _d[ii] = 'Cm',
            _d[iii] = 'Dm',
            _d[IV] = 'Eb',
            _d[V] = 'F',
            _d[VI] = 'Gm',
            _d[vii] = 'Adim',
            _d)
    },
    {
        fullName: 'Key of A flat minor',
        shortName: 'Abm',
        alternativeShortName: 'G#',
        chords: (_e = {},
            _e[i] = 'Abm',
            _e[ii] = 'Bbdim',
            _e[III] = 'Cb',
            _e[iv] = 'Dbm',
            _e[v] = 'Ebm',
            _e[VI] = 'Fb',
            _e[VII] = 'Gb',
            _e)
    },
    {
        fullName: 'Key of B major',
        shortName: 'B',
        chords: (_f = {},
            _f[I] = 'B',
            _f[ii] = 'C#m',
            _f[iii] = 'D#m',
            _f[IV] = 'E',
            _f[V] = 'F#',
            _f[vi] = 'G#m',
            _f[vii] = 'A#dim',
            _f),
        chordProgressions: [
            [I, IV, V],
            [I, vi, IV, V],
            [ii, V, I]
        ],
        isCommonKey: true
    },
    {
        fullName: 'Key of B minor',
        shortName: 'Bm',
        chords: (_g = {},
            _g[i] = 'Bm',
            _g[ii] = 'C#dim',
            _g[III] = 'D',
            _g[iv] = 'Em',
            _g[v] = 'F#m',
            _g[VI] = 'G',
            _g[VII] = 'A',
            _g),
        chordProgressions: [
            [i, IV, VII],
            [i, iv, VII],
            [i, iv, v],
            [i, VI, III, VII],
            [ii, v, i]
        ],
        isCommonKey: true
    },
    {
        fullName: 'Key of B flat',
        shortName: 'Bb',
        alternativeShortName: 'A#',
        copyFrom: 'A#'
    },
    {
        fullName: 'Key of B flat minor',
        shortName: 'Bbm',
        chords: (_h = {},
            _h[i] = 'Bbm',
            _h[ii] = 'Cdim',
            _h[III] = 'Db',
            _h[iv] = 'Ebm',
            _h[v] = 'Fm',
            _h[VI] = 'Gb',
            _h[VII] = 'Ab',
            _h)
    },
    {
        fullName: 'Key of C major',
        shortName: 'C',
        chords: (_j = {},
            _j[I] = 'C',
            _j[ii] = 'Dm',
            _j[iii] = 'Em',
            _j[IV] = 'F',
            _j[V] = 'G',
            _j[vi] = 'Am',
            _j[vii] = 'Bdim',
            _j),
        chordProgressions: [
            [I, IV, V],
            [I, vi, IV, V],
            [ii, V, I]
        ],
        isCommonKey: true
    },
    {
        fullName: 'Key of C minor',
        shortName: 'Cm',
        chords: (_k = {},
            _k[i] = 'Cm',
            _k[ii] = 'Ddim',
            _k[III] = 'Eb',
            _k[iv] = 'Fm',
            _k[V] = 'Gm',
            _k[VI] = 'Ab',
            _k[VII] = 'Bb',
            _k)
    },
    {
        fullName: 'Key of C sharp',
        shortName: 'C#',
        alternativeShortName: 'Db',
        chords: (_l = {},
            _l[I] = 'C#',
            _l[ii] = 'D#m',
            _l[iii] = 'E#m',
            _l[IV] = 'F#',
            _l[V] = 'G#',
            _l[vi] = 'A#m',
            _l[vii] = 'B#dim',
            _l)
    },
    {
        fullName: 'Key of C sharp minor',
        shortName: 'C#m',
        chords: (_m = {},
            _m[i] = 'C#m',
            _m[ii] = 'D#dim',
            _m[III] = 'E',
            _m[iv] = 'F#m',
            _m[v] = 'G#m',
            _m[VI] = 'A',
            _m[VII] = 'B',
            _m)
    },
    {
        fullName: 'Key of D major',
        shortName: 'D',
        chords: (_o = {},
            _o[I] = 'D',
            _o[ii] = 'Em',
            _o[iii] = 'F#m',
            _o[IV] = 'G',
            _o[V] = 'A',
            _o[vi] = 'Bm',
            _o[vii] = 'C#dim',
            _o),
        chordProgressions: [
            [I, IV, V],
            [I, vi, IV, V],
            [ii, V, I]
        ],
        isCommonKey: true
    },
    {
        fullName: 'Key of D minor',
        shortName: 'Dm',
        chords: (_p = {},
            _p[i] = 'Dm',
            _p[ii] = 'Edim',
            _p[III] = 'F',
            _p[iv] = 'Gm',
            _p[v] = 'Am',
            _p[VI] = 'Bb',
            _p[VII] = 'C',
            _p)
    },
    {
        fullName: 'Key of D sharp minor',
        shortName: 'D#m',
        chords: (_q = {},
            _q[i] = 'D#m',
            _q[ii] = 'E#dim',
            _q[III] = 'F#',
            _q[iv] = 'G#m',
            _q[v] = 'A#m',
            _q[VI] = 'B',
            _q[VII] = 'C#',
            _q)
    },
    {
        fullName: 'Key of D flat',
        shortName: 'Db',
        alternativeShortName: 'C#',
        chords: (_r = {},
            _r[I] = 'Db',
            _r[ii] = 'Ebm',
            _r[iii] = 'Fm',
            _r[IV] = 'Gb',
            _r[V] = 'Ab',
            _r[vi] = 'Bbm',
            _r[vii] = 'Cdim',
            _r)
    },
    {
        fullName: 'Key of E major',
        shortName: 'E',
        chords: (_s = {},
            _s[I] = 'E',
            _s[ii] = 'F#m',
            _s[iii] = 'G#m',
            _s[IV] = 'A',
            _s[V] = 'B',
            _s[vi] = 'C#m',
            _s[vii] = 'D#dim',
            _s),
        chordProgressions: [
            [I, IV, V],
            [I, vi, IV, V],
            [ii, V, I]
        ],
        isCommonKey: true
    },
    {
        fullName: 'Key of E minor',
        shortName: 'Em',
        chords: (_t = {},
            _t[i] = 'Em',
            _t[ii] = 'F#dim',
            _t[III] = 'G',
            _t[iv] = 'Am',
            _t[v] = 'Bm',
            _t[VI] = 'C',
            _t[VII] = 'D',
            _t),
        chordProgressions: [
            [i, VI, VII],
            [i, iv, VII],
            [i, iv, v],
            [i, VI, III, VII],
            [i, VI, III, VII],
            [ii, v, i]
        ],
        isCommonKey: true
    },
    {
        fullName: 'Key of E flat',
        shortName: 'Eb',
        alternativeShortName: 'D#',
        chords: (_u = {},
            _u[I] = 'Eb',
            _u[ii] = 'Fm',
            _u[iii] = 'Gm',
            _u[IV] = 'Ab',
            _u[V] = 'Bb',
            _u[vi] = 'Cm',
            _u[vii] = 'Dm',
            _u)
    },
    {
        fullName: 'Key of F major',
        shortName: 'F',
        chords: (_v = {},
            _v[I] = 'F',
            _v[ii] = 'Gm',
            _v[iii] = 'Am',
            _v[IV] = 'Bb',
            _v[V] = 'C',
            _v[vi] = 'Dm',
            _v[vii] = 'Edim',
            _v),
        chordProgressions: [
            [I, IV, V],
            [I, vi, IV, V],
            [ii, V, I]
        ],
        isCommonKey: true
    },
    {
        fullName: 'Key of F sharp',
        shortName: 'F#',
        alternativeShortName: 'Gb',
        chords: (_w = {},
            _w[I] = 'F#',
            _w[ii] = 'G#m',
            _w[iii] = 'A#m',
            _w[IV] = 'B',
            _w[V] = 'C#',
            _w[vi] = 'D#m',
            _w[vii] = 'Fdim',
            _w)
    },
    {
        fullName: 'Key of F minor',
        shortName: 'Fm',
        chords: (_x = {},
            _x[i] = 'Fm',
            _x[ii] = 'Gdim',
            _x[III] = 'Ab',
            _x[iv] = 'Bbm',
            _x[v] = 'Cm',
            _x[VI] = 'Db',
            _x[VII] = 'Eb',
            _x)
    },
    {
        fullName: 'Key of F sharp minor',
        shortName: 'F#m',
        chords: (_y = {},
            _y[i] = 'F#m',
            _y[ii] = 'G#dim',
            _y[III] = 'A',
            _y[iv] = 'Bm',
            _y[v] = 'C#m',
            _y[VI] = 'D',
            _y[VII] = 'E',
            _y)
    },
    {
        fullName: 'Key of G major',
        shortName: 'G',
        chords: (_z = {},
            _z[I] = 'G',
            _z[ii] = 'Am',
            _z[iii] = 'Bm',
            _z[IV] = 'C',
            _z[V] = 'D',
            _z[vi] = 'Em',
            _z[vii] = 'F#dim',
            _z),
        chordProgressions: [
            [I, IV, V],
            [I, vi, IV, V],
            [ii, V, I]
        ],
        isCommonKey: true
    },
    {
        fullName: 'Key of G minor',
        shortName: 'Gm',
        chords: (_0 = {},
            _0[i] = 'Gm',
            _0[ii] = 'Adim',
            _0[III] = 'Bb',
            _0[iv] = 'Cm',
            _0[v] = 'Dm',
            _0[VI] = 'Eb',
            _0[VII] = 'F',
            _0)
    },
    {
        fullName: 'Key of G sharp minor',
        shortName: 'G#m',
        alternativeShortName: 'Abm',
        chords: (_1 = {},
            _1[i] = 'G#m',
            _1[ii] = 'A#dim',
            _1[III] = 'B',
            _1[iv] = 'C#m',
            _1[v] = 'D#m',
            _1[VI] = 'E',
            _1[VII] = 'F#',
            _1)
    },
];
exports["default"] = exports.keys;
