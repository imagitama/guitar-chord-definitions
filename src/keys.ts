export const I = 'I'
// const II = 'II'
export const III = 'III'
export const IV = 'IV'
export const V = 'V'
export const VI = 'VI'
export const VII = 'VII'

export const i = 'i'
export const ii = 'ii'
export const iii = 'iii'
export const iv = 'iv'
export const v = 'v'
export const vi = 'vi'
export const vii = 'vii'

export type ChordProgression = string[]

export interface Key {
  fullName: string
  shortName: string
  alternativeShortName?: string
  chords?: {
    [romanNumeral: string]: string
  }
  chordProgressions?: ChordProgression[]
  isCommonKey?: boolean
  copyFrom?: string
}

export const keys: Key[] = [
  {
    fullName: 'Key of A major',
    shortName: 'A',
    chords: {
      [I]: 'A', 
      [ii]: 'Bm',
      [iii]: 'C#m',
      [IV]: 'D',
      [V]: 'E',
      [vi]: 'F#m',
      [vii]: 'G#dim'
    },
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
    chords: {
      [i]: 'Am',
      [ii]: 'Bdim',
      [III]: 'C',
      [iv]: 'Dm',
      [v]: 'Em',
      [VI]: 'F',
      [VII]: 'G'
    },
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
    chords: {
      [I]: 'Ab',
      [ii]: 'Bbm',
      [iii]: 'Cm',
      [IV]: 'Db',
      [V]: 'Eb',
      [vi]: 'Fm',
      [vii]: 'Gdim'
    }
  },

  {
    fullName: 'Key of A sharp',
    shortName: 'A#',
    alternativeShortName: 'Bb',
    chords: {
      [I]: 'Bb',
      [ii]: 'Cm',
      [iii]: 'Dm',
      [IV]: 'Eb',
      [V]: 'F',
      [VI]: 'Gm',
      [vii]: 'Adim'
    }
  },

  {
    fullName: 'Key of A flat minor',
    shortName: 'Abm',
    alternativeShortName: 'G#',
    chords: {
      [i]: 'Abm',
      [ii]: 'Bbdim',
      [III]: 'Cb',
      [iv]: 'Dbm',
      [v]: 'Ebm',
      [VI]: 'Fb',
      [VII]: 'Gb'
    }
  },

  {
    fullName: 'Key of B major',
    shortName: 'B',
    chords: {
      [I]: 'B',
      [ii]: 'C#m',
      [iii]: 'D#m',
      [IV]: 'E',
      [V]: 'F#',
      [vi]: 'G#m',
      [vii]: 'A#dim'
    },
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
    chords: {
      [i]: 'Bm',
      [ii]: 'C#dim',
      [III]: 'D',
      [iv]: 'Em',
      [v]: 'F#m',
      [VI]: 'G',
      [VII]: 'A'
    },
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
    chords: {
      [i]: 'Bbm',
      [ii]: 'Cdim',
      [III]: 'Db',
      [iv]: 'Ebm',
      [v]: 'Fm',
      [VI]: 'Gb',
      [VII]: 'Ab'
    }
  },

  {
    fullName: 'Key of C major',
    shortName: 'C',
    chords: {
      [I]: 'C',
      [ii]: 'Dm',
      [iii]: 'Em',
      [IV]: 'F',
      [V]: 'G',
      [vi]: 'Am',
      [vii]: 'Bdim'
    },
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
    chords: {
      [i]: 'Cm',
      [ii]: 'Ddim',
      [III]: 'Eb',
      [iv]: 'Fm',
      [V]: 'Gm',
      [VI]: 'Ab',
      [VII]: 'Bb'
    }
  },

  {
    fullName: 'Key of C sharp',
    shortName: 'C#',
    alternativeShortName: 'Db',
    chords: {
      [I]: 'C#',
      [ii]: 'D#m',
      [iii]: 'E#m',
      [IV]: 'F#',
      [V]: 'G#',
      [vi]: 'A#m',
      [vii]: 'B#dim'
    }
  },

  {
    fullName: 'Key of C sharp minor',
    shortName: 'C#m',
    chords: {
      [i]: 'C#m',
      [ii]: 'D#dim',
      [III]: 'E',
      [iv]: 'F#m',
      [v]: 'G#m',
      [VI]: 'A',
      [VII]: 'B'
    }
  },

  {
    fullName: 'Key of D major',
    shortName: 'D',
    chords: {
      [I]: 'D',
      [ii]: 'Em',
      [iii]: 'F#m',
      [IV]: 'G',
      [V]: 'A',
      [vi]: 'Bm',
      [vii]: 'C#dim'
    },
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
    chords: {
      [i]: 'Dm',
      [ii]: 'Edim',
      [III]: 'F',
      [iv]: 'Gm',
      [v]: 'Am',
      [VI]: 'Bb',
      [VII]: 'C'
    }
  },

  {
    fullName: 'Key of D sharp minor',
    shortName: 'D#m',
    chords: {
      [i]: 'D#m',
      [ii]: 'E#dim',
      [III]: 'F#',
      [iv]: 'G#m',
      [v]: 'A#m',
      [VI]: 'B',
      [VII]: 'C#'
    }
  },

  {
    fullName: 'Key of D flat',
    shortName: 'Db',
    alternativeShortName: 'C#',
    chords: {
      [I]: 'Db',
      [ii]: 'Ebm',
      [iii]: 'Fm',
      [IV]: 'Gb',
      [V]: 'Ab',
      [vi]: 'Bbm',
      [vii]: 'Cdim'
    }
  },

  {
    fullName: 'Key of E major',
    shortName: 'E',
    chords: {
      [I]: 'E',
      [ii]: 'F#m',
      [iii]: 'G#m',
      [IV]: 'A',
      [V]: 'B',
      [vi]: 'C#m',
      [vii]: 'D#dim'
    },
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
    chords: {
      [i]: 'Em',
      [ii]: 'F#dim',
      [III]: 'G',
      [iv]: 'Am',
      [v]: 'Bm',
      [VI]: 'C',
      [VII]: 'D'
    },
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
    chords: {
      [I]: 'Eb',
      [ii]: 'Fm',
      [iii]: 'Gm',
      [IV]: 'Ab',
      [V]: 'Bb',
      [vi]: 'Cm',
      [vii]: 'Dm'
    }
  },

  {
    fullName: 'Key of F major',
    shortName: 'F',
    chords: {
      [I]: 'F',
      [ii]: 'Gm',
      [iii]: 'Am',
      [IV]: 'Bb',
      [V]: 'C',
      [vi]: 'Dm',
      [vii]: 'Edim'
    },
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
    chords: {
      [I]: 'F#',
      [ii]: 'G#m',
      [iii]: 'A#m',
      [IV]: 'B',
      [V]: 'C#',
      [vi]: 'D#m',
      [vii]: 'Fdim'
    }
  },

  {
    fullName: 'Key of F minor',
    shortName: 'Fm',
    chords: {
      [i]: 'Fm',
      [ii]: 'Gdim',
      [III]: 'Ab',
      [iv]: 'Bbm',
      [v]: 'Cm',
      [VI]: 'Db',
      [VII]: 'Eb'
    }
  },

  {
    fullName: 'Key of F sharp minor',
    shortName: 'F#m',
    chords: {
      [i]: 'F#m',
      [ii]: 'G#dim',
      [III]: 'A',
      [iv]: 'Bm',
      [v]: 'C#m',
      [VI]: 'D',
      [VII]: 'E'
    }
  },

  {
    fullName: 'Key of G major',
    shortName: 'G',
    chords: {
      [I]: 'G',
      [ii]: 'Am',
      [iii]: 'Bm',
      [IV]: 'C',
      [V]: 'D',
      [vi]: 'Em',
      [vii]: 'F#dim'
    },
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
    chords: {
      [i]: 'Gm',
      [ii]: 'Adim',
      [III]: 'Bb',
      [iv]: 'Cm',
      [v]: 'Dm',
      [VI]: 'Eb',
      [VII]: 'F'
    }
  },

  {
    fullName: 'Key of G sharp minor',
    shortName: 'G#m',
    alternativeShortName: 'Abm',
    chords: {
      [i]: 'G#m',
      [ii]: 'A#dim',
      [III]: 'B',
      [iv]: 'C#m',
      [v]: 'D#m',
      [VI]: 'E',
      [VII]: 'F#'
    }
  },
]

export default keys
