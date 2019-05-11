"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.I = 'I';
// const II = 'II'
exports.III = 'III';
exports.IV = 'IV';
exports.V = 'V';
exports.VI = 'VI';
exports.VII = 'VII';
exports.i = 'i';
exports.ii = 'ii';
exports.iii = 'iii';
exports.iv = 'iv';
exports.v = 'v';
exports.vi = 'vi';
exports.vii = 'vii';
exports.keys = [
    {
        fullName: 'Key of A major',
        shortName: 'A',
        chords: {
            [exports.I]: 'A',
            [exports.ii]: 'Bm',
            [exports.iii]: 'C#m',
            [exports.IV]: 'D',
            [exports.V]: 'E',
            [exports.vi]: 'F#m',
            [exports.vii]: 'G#dim'
        },
        chordProgressions: [
            [exports.I, exports.IV, exports.V],
            [exports.I, exports.vi, exports.IV, exports.V],
            [exports.ii, exports.V, exports.I]
        ],
        isCommonKey: true
    },
    {
        fullName: 'Key of A minor',
        shortName: 'Am',
        chords: {
            [exports.i]: 'Am',
            [exports.ii]: 'Bdim',
            [exports.III]: 'C',
            [exports.iv]: 'Dm',
            [exports.v]: 'Em',
            [exports.VI]: 'F',
            [exports.VII]: 'G'
        },
        chordProgressions: [
            [exports.i, exports.VI, exports.VII],
            [exports.i, exports.iv, exports.VII],
            [exports.i, exports.iv, exports.v],
            [exports.i, exports.VI, exports.III, exports.VII],
            [exports.ii, exports.v, exports.i]
        ],
        isCommonKey: true
    },
    {
        fullName: 'Key of A flat',
        shortName: 'Ab',
        chords: {
            [exports.I]: 'Ab',
            [exports.ii]: 'Bbm',
            [exports.iii]: 'Cm',
            [exports.IV]: 'Db',
            [exports.V]: 'Eb',
            [exports.vi]: 'Fm',
            [exports.vii]: 'Gdim'
        }
    },
    {
        fullName: 'Key of A sharp',
        shortName: 'A#',
        alternativeShortName: 'Bb',
        chords: {
            [exports.I]: 'Bb',
            [exports.ii]: 'Cm',
            [exports.iii]: 'Dm',
            [exports.IV]: 'Eb',
            [exports.V]: 'F',
            [exports.VI]: 'Gm',
            [exports.vii]: 'Adim'
        }
    },
    {
        fullName: 'Key of A flat minor',
        shortName: 'Abm',
        alternativeShortName: 'G#',
        chords: {
            [exports.i]: 'Abm',
            [exports.ii]: 'Bbdim',
            [exports.III]: 'Cb',
            [exports.iv]: 'Dbm',
            [exports.v]: 'Ebm',
            [exports.VI]: 'Fb',
            [exports.VII]: 'Gb'
        }
    },
    {
        fullName: 'Key of B major',
        shortName: 'B',
        chords: {
            [exports.I]: 'B',
            [exports.ii]: 'C#m',
            [exports.iii]: 'D#m',
            [exports.IV]: 'E',
            [exports.V]: 'F#',
            [exports.vi]: 'G#m',
            [exports.vii]: 'A#dim'
        },
        chordProgressions: [
            [exports.I, exports.IV, exports.V],
            [exports.I, exports.vi, exports.IV, exports.V],
            [exports.ii, exports.V, exports.I]
        ],
        isCommonKey: true
    },
    {
        fullName: 'Key of B minor',
        shortName: 'Bm',
        chords: {
            [exports.i]: 'Bm',
            [exports.ii]: 'C#dim',
            [exports.III]: 'D',
            [exports.iv]: 'Em',
            [exports.v]: 'F#m',
            [exports.VI]: 'G',
            [exports.VII]: 'A'
        },
        chordProgressions: [
            [exports.i, exports.IV, exports.VII],
            [exports.i, exports.iv, exports.VII],
            [exports.i, exports.iv, exports.v],
            [exports.i, exports.VI, exports.III, exports.VII],
            [exports.ii, exports.v, exports.i]
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
        chords: {
            [exports.i]: 'Bbm',
            [exports.ii]: 'Cdim',
            [exports.III]: 'Db',
            [exports.iv]: 'Ebm',
            [exports.v]: 'Fm',
            [exports.VI]: 'Gb',
            [exports.VII]: 'Ab'
        }
    },
    {
        fullName: 'Key of C major',
        shortName: 'C',
        chords: {
            [exports.I]: 'C',
            [exports.ii]: 'Dm',
            [exports.iii]: 'Em',
            [exports.IV]: 'F',
            [exports.V]: 'G',
            [exports.vi]: 'Am',
            [exports.vii]: 'Bdim'
        },
        chordProgressions: [
            [exports.I, exports.IV, exports.V],
            [exports.I, exports.vi, exports.IV, exports.V],
            [exports.ii, exports.V, exports.I]
        ],
        isCommonKey: true
    },
    {
        fullName: 'Key of C minor',
        shortName: 'Cm',
        chords: {
            [exports.i]: 'Cm',
            [exports.ii]: 'Ddim',
            [exports.III]: 'Eb',
            [exports.iv]: 'Fm',
            [exports.V]: 'Gm',
            [exports.VI]: 'Ab',
            [exports.VII]: 'Bb'
        }
    },
    {
        fullName: 'Key of C sharp',
        shortName: 'C#',
        alternativeShortName: 'Db',
        chords: {
            [exports.I]: 'C#',
            [exports.ii]: 'D#m',
            [exports.iii]: 'E#m',
            [exports.IV]: 'F#',
            [exports.V]: 'G#',
            [exports.vi]: 'A#m',
            [exports.vii]: 'B#dim'
        }
    },
    {
        fullName: 'Key of C sharp minor',
        shortName: 'C#m',
        chords: {
            [exports.i]: 'C#m',
            [exports.ii]: 'D#dim',
            [exports.III]: 'E',
            [exports.iv]: 'F#m',
            [exports.v]: 'G#m',
            [exports.VI]: 'A',
            [exports.VII]: 'B'
        }
    },
    {
        fullName: 'Key of D major',
        shortName: 'D',
        chords: {
            [exports.I]: 'D',
            [exports.ii]: 'Em',
            [exports.iii]: 'F#m',
            [exports.IV]: 'G',
            [exports.V]: 'A',
            [exports.vi]: 'Bm',
            [exports.vii]: 'C#dim'
        },
        chordProgressions: [
            [exports.I, exports.IV, exports.V],
            [exports.I, exports.vi, exports.IV, exports.V],
            [exports.ii, exports.V, exports.I]
        ],
        isCommonKey: true
    },
    {
        fullName: 'Key of D minor',
        shortName: 'Dm',
        chords: {
            [exports.i]: 'Dm',
            [exports.ii]: 'Edim',
            [exports.III]: 'F',
            [exports.iv]: 'Gm',
            [exports.v]: 'Am',
            [exports.VI]: 'Bb',
            [exports.VII]: 'C'
        }
    },
    {
        fullName: 'Key of D sharp minor',
        shortName: 'D#m',
        chords: {
            [exports.i]: 'D#m',
            [exports.ii]: 'E#dim',
            [exports.III]: 'F#',
            [exports.iv]: 'G#m',
            [exports.v]: 'A#m',
            [exports.VI]: 'B',
            [exports.VII]: 'C#'
        }
    },
    {
        fullName: 'Key of D flat',
        shortName: 'Db',
        alternativeShortName: 'C#',
        chords: {
            [exports.I]: 'Db',
            [exports.ii]: 'Ebm',
            [exports.iii]: 'Fm',
            [exports.IV]: 'Gb',
            [exports.V]: 'Ab',
            [exports.vi]: 'Bbm',
            [exports.vii]: 'Cdim'
        }
    },
    {
        fullName: 'Key of E major',
        shortName: 'E',
        chords: {
            [exports.I]: 'E',
            [exports.ii]: 'F#m',
            [exports.iii]: 'G#m',
            [exports.IV]: 'A',
            [exports.V]: 'B',
            [exports.vi]: 'C#m',
            [exports.vii]: 'D#dim'
        },
        chordProgressions: [
            [exports.I, exports.IV, exports.V],
            [exports.I, exports.vi, exports.IV, exports.V],
            [exports.ii, exports.V, exports.I]
        ],
        isCommonKey: true
    },
    {
        fullName: 'Key of E minor',
        shortName: 'Em',
        chords: {
            [exports.i]: 'Em',
            [exports.ii]: 'F#dim',
            [exports.III]: 'G',
            [exports.iv]: 'Am',
            [exports.v]: 'Bm',
            [exports.VI]: 'C',
            [exports.VII]: 'D'
        },
        chordProgressions: [
            [exports.i, exports.VI, exports.VII],
            [exports.i, exports.iv, exports.VII],
            [exports.i, exports.iv, exports.v],
            [exports.i, exports.VI, exports.III, exports.VII],
            [exports.i, exports.VI, exports.III, exports.VII],
            [exports.ii, exports.v, exports.i]
        ],
        isCommonKey: true
    },
    {
        fullName: 'Key of E flat',
        shortName: 'Eb',
        alternativeShortName: 'D#',
        chords: {
            [exports.I]: 'Eb',
            [exports.ii]: 'Fm',
            [exports.iii]: 'Gm',
            [exports.IV]: 'Ab',
            [exports.V]: 'Bb',
            [exports.vi]: 'Cm',
            [exports.vii]: 'Dm'
        }
    },
    {
        fullName: 'Key of F major',
        shortName: 'F',
        chords: {
            [exports.I]: 'F',
            [exports.ii]: 'Gm',
            [exports.iii]: 'Am',
            [exports.IV]: 'Bb',
            [exports.V]: 'C',
            [exports.vi]: 'Dm',
            [exports.vii]: 'Edim'
        },
        chordProgressions: [
            [exports.I, exports.IV, exports.V],
            [exports.I, exports.vi, exports.IV, exports.V],
            [exports.ii, exports.V, exports.I]
        ],
        isCommonKey: true
    },
    {
        fullName: 'Key of F sharp',
        shortName: 'F#',
        alternativeShortName: 'Gb',
        chords: {
            [exports.I]: 'F#',
            [exports.ii]: 'G#m',
            [exports.iii]: 'A#m',
            [exports.IV]: 'B',
            [exports.V]: 'C#',
            [exports.vi]: 'D#m',
            [exports.vii]: 'Fdim'
        }
    },
    {
        fullName: 'Key of F minor',
        shortName: 'Fm',
        chords: {
            [exports.i]: 'Fm',
            [exports.ii]: 'Gdim',
            [exports.III]: 'Ab',
            [exports.iv]: 'Bbm',
            [exports.v]: 'Cm',
            [exports.VI]: 'Db',
            [exports.VII]: 'Eb'
        }
    },
    {
        fullName: 'Key of F sharp minor',
        shortName: 'F#m',
        chords: {
            [exports.i]: 'F#m',
            [exports.ii]: 'G#dim',
            [exports.III]: 'A',
            [exports.iv]: 'Bm',
            [exports.v]: 'C#m',
            [exports.VI]: 'D',
            [exports.VII]: 'E'
        }
    },
    {
        fullName: 'Key of G major',
        shortName: 'G',
        chords: {
            [exports.I]: 'G',
            [exports.ii]: 'Am',
            [exports.iii]: 'Bm',
            [exports.IV]: 'C',
            [exports.V]: 'D',
            [exports.vi]: 'Em',
            [exports.vii]: 'F#dim'
        },
        chordProgressions: [
            [exports.I, exports.IV, exports.V],
            [exports.I, exports.vi, exports.IV, exports.V],
            [exports.ii, exports.V, exports.I]
        ],
        isCommonKey: true
    },
    {
        fullName: 'Key of G minor',
        shortName: 'Gm',
        chords: {
            [exports.i]: 'Gm',
            [exports.ii]: 'Adim',
            [exports.III]: 'Bb',
            [exports.iv]: 'Cm',
            [exports.v]: 'Dm',
            [exports.VI]: 'Eb',
            [exports.VII]: 'F'
        }
    },
    {
        fullName: 'Key of G sharp minor',
        shortName: 'G#m',
        alternativeShortName: 'Abm',
        chords: {
            [exports.i]: 'G#m',
            [exports.ii]: 'A#dim',
            [exports.III]: 'B',
            [exports.iv]: 'C#m',
            [exports.v]: 'D#m',
            [exports.VI]: 'E',
            [exports.VII]: 'F#'
        }
    },
];
exports.default = exports.keys;
