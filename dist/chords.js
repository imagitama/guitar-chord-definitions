"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.doNotPlayString = "DoNotPlayString";
exports.barFret = "BarFret";
exports.chords = [
    {
        fullName: "A major",
        shortName: "A",
        strings: {
            6: exports.doNotPlayString
        },
        frets: {
            2: {
                2: 3,
                3: 1,
                4: 2
            }
        },
        isCommonChord: true
    },
    {
        fullName: "A minor",
        shortName: "Am",
        strings: {
            6: exports.doNotPlayString
        },
        frets: {
            1: {
                2: 1
            },
            2: {
                4: 2,
                3: 3
            }
        },
        isCommonChord: true
    },
    {
        fullName: "A flat",
        shortName: "Ab",
        alternativeShortName: "G#",
        frets: {
            4: exports.barFret,
            5: {
                3: 2
            },
            6: {
                4: 4,
                5: 3
            }
        }
    },
    {
        fullName: "A flat minor",
        shortName: "Abm",
        alternativeShortName: "G#m",
        frets: {
            4: exports.barFret,
            6: {
                4: 3,
                5: 2
            }
        }
    },
    {
        fullName: "A sharp",
        shortName: "A#",
        alternativeShortName: "Bb",
        strings: {
            6: exports.doNotPlayString
        },
        frets: {
            1: exports.barFret,
            3: {
                2: 4,
                3: 3,
                4: 2
            }
        }
    },
    {
        fullName: "A sharp minor",
        shortName: "A#m",
        alternativeShortName: "Bbm",
        strings: {
            6: exports.doNotPlayString
        },
        frets: {
            1: exports.barFret,
            2: {
                2: 2
            },
            3: {
                3: 4,
                4: 3
            }
        }
    },
    {
        fullName: "A diminished",
        shortName: "Adim",
        strings: {
            1: exports.doNotPlayString,
            6: exports.doNotPlayString
        },
        frets: {
            1: {
                2: 2,
                4: 1
            },
            2: {
                3: 3
            }
        }
    },
    {
        fullName: "A sharp diminished",
        shortName: "A#dim",
        strings: {
            1: exports.doNotPlayString,
            6: exports.doNotPlayString
        },
        frets: {
            1: {
                5: 1
            },
            2: {
                4: 2,
                2: 3
            },
            3: {
                3: 4
            }
        }
    },
    {
        fullName: "A suspended 2",
        shortName: "Asus2",
        strings: {
            6: exports.doNotPlayString
        },
        frets: {
            2: {
                3: 3,
                4: 2
            }
        }
    },
    {
        fullName: "A suspended 4",
        shortName: "Asus4",
        strings: {
            6: exports.doNotPlayString
        },
        frets: {
            2: {
                3: 2,
                4: 1
            },
            3: {
                2: 3
            }
        }
    },
    {
        fullName: "A dominant 7",
        shortName: "A7",
        strings: {
            6: exports.doNotPlayString
        },
        frets: {
            2: {
                2: 2,
                4: 1
            }
        }
    },
    {
        fullName: "B major",
        shortName: "B",
        strings: {
            6: exports.doNotPlayString
        },
        frets: {
            2: exports.barFret,
            4: {
                2: 4,
                3: 3,
                4: 2
            }
        },
        isCommonChord: true
    },
    {
        fullName: "B minor",
        shortName: "Bm",
        strings: {
            6: exports.doNotPlayString
        },
        frets: {
            2: exports.barFret,
            3: {
                2: 2
            },
            4: {
                3: 4,
                4: 3
            }
        },
        isCommonChord: true
    },
    {
        fullName: "B flat",
        shortName: "Bb",
        alternativeShortName: "A#",
        copyFrom: "A#",
        isCommonChord: true
    },
    {
        fullName: "B flat minor",
        shortName: "Bbm",
        alternativeShortName: "A#m",
        copyFrom: "A#m"
    },
    {
        fullName: "B flat diminished",
        shortName: "Bbdim",
        strings: {
            6: exports.doNotPlayString
        },
        frets: {
            1: {
                5: 1
            },
            2: {
                4: 2,
                2: 3
            },
            3: {
                3: 4
            }
        }
    },
    {
        fullName: "B diminished",
        shortName: "Bdim",
        strings: {
            1: exports.doNotPlayString,
            6: exports.doNotPlayString
        },
        frets: {
            2: {
                5: 1
            },
            3: {
                4: 2,
                2: 3
            },
            4: {
                3: 4
            }
        }
    },
    {
        fullName: "B suspended 2",
        shortName: "Bsus2",
        strings: {
            6: exports.doNotPlayString
        },
        frets: {
            2: exports.barFret,
            4: {
                3: 4,
                4: 3
            }
        }
    },
    {
        fullName: "B suspended 4",
        shortName: "Bsus4",
        strings: {
            6: exports.doNotPlayString
        },
        frets: {
            2: exports.barFret,
            4: {
                3: 3,
                4: 2
            },
            5: {
                2: 4
            }
        }
    },
    {
        fullName: "B dominant 7",
        shortName: "B7",
        strings: {
            6: exports.doNotPlayString
        },
        frets: {
            1: {
                4: 1
            },
            2: {
                1: 4,
                3: 3,
                5: 2
            }
        }
    },
    {
        fullName: "C major",
        shortName: "C",
        strings: {
            6: exports.doNotPlayString
        },
        frets: {
            1: {
                2: 1
            },
            2: {
                4: 2
            },
            3: {
                5: 3
            }
        },
        isCommonChord: true
    },
    {
        fullName: "C minor",
        shortName: "Cm",
        strings: {
            6: exports.doNotPlayString
        },
        frets: {
            3: exports.barFret,
            4: {
                2: 2
            },
            5: {
                3: 4,
                4: 3
            }
        }
    },
    {
        fullName: "C sharp",
        shortName: "C#",
        alternativeShortName: "Db",
        strings: {
            6: exports.doNotPlayString
        },
        frets: {
            4: exports.barFret,
            6: {
                2: 4,
                3: 3,
                4: 2
            }
        }
    },
    {
        fullName: "C sharp minor",
        shortName: "C#m",
        strings: {
            6: exports.doNotPlayString
        },
        frets: {
            4: exports.barFret,
            5: {
                2: 2
            },
            6: {
                3: 4,
                4: 3
            }
        }
    },
    {
        fullName: "C sharp diminished",
        shortName: "C#dim",
        strings: {
            1: exports.doNotPlayString,
            6: exports.doNotPlayString
        },
        frets: {
            4: {
                5: 1
            },
            5: {
                4: 2,
                2: 3
            },
            6: {
                3: 4
            }
        }
    },
    {
        fullName: "C slash B",
        shortName: "C/B",
        strings: {
            6: exports.doNotPlayString
        },
        frets: {
            1: {
                2: 1
            },
            2: {
                4: 4,
                5: 3
            }
        }
    },
    {
        fullName: "C diminished",
        shortName: "Cdim",
        strings: {
            1: exports.doNotPlayString,
            6: exports.doNotPlayString
        },
        frets: {
            3: {
                5: 1
            },
            4: {
                4: 2,
                2: 3
            },
            5: {
                3: 4
            }
        }
    },
    {
        fullName: "C ninth",
        shortName: "C9",
        strings: {
            6: exports.doNotPlayString
        },
        frets: {
            2: {
                4: 1
            },
            3: {
                2: 4,
                3: 3,
                5: 2
            }
        }
    },
    {
        fullName: "C add 9",
        shortName: "Cadd9",
        strings: {
            6: exports.doNotPlayString
        },
        frets: {
            2: {
                4: 1
            },
            3: {
                2: 3,
                5: 2
            }
        }
    },
    {
        fullName: "C suspended 2",
        shortName: "Csus2",
        strings: {
            6: exports.doNotPlayString
        },
        frets: {
            1: {
                2: 1
            },
            3: {
                5: 3
            }
        }
    },
    {
        fullName: "C suspended 4",
        shortName: "Csus4",
        strings: {
            6: exports.doNotPlayString
        },
        frets: {
            1: {
                2: 1
            },
            3: {
                4: 4,
                5: 3
            }
        }
    },
    {
        fullName: "C dominant 7",
        shortName: "C7",
        strings: {
            6: exports.doNotPlayString
        },
        frets: {
            1: {
                2: 1
            },
            2: {
                4: 2
            },
            3: {
                3: 4,
                5: 3
            }
        }
    },
    {
        fullName: "C flat",
        shortName: "Cb",
        alternativeShortName: "B",
        copyFrom: "B"
    },
    {
        fullName: "D major",
        shortName: "D",
        strings: {
            5: exports.doNotPlayString,
            6: exports.doNotPlayString
        },
        frets: {
            2: {
                1: 2,
                3: 1
            },
            3: {
                2: 3
            }
        },
        isCommonChord: true
    },
    {
        fullName: "D minor",
        shortName: "Dm",
        strings: {
            5: exports.doNotPlayString,
            6: exports.doNotPlayString
        },
        frets: {
            1: {
                1: 1
            },
            2: {
                3: 2
            },
            3: {
                2: 3
            }
        },
        isCommonChord: true
    },
    {
        fullName: "D sharp",
        shortName: "D#",
        alternativeShortName: "Eb",
        copyFrom: "Eb"
    },
    {
        fullName: "D sharp minor",
        shortName: "D#m",
        alternativeShortName: "Ebm",
        strings: {
            6: exports.doNotPlayString
        },
        frets: {
            6: exports.barFret,
            7: {
                2: 2
            },
            8: {
                3: 4,
                4: 3
            }
        }
    },
    {
        fullName: "D sharp diminished",
        shortName: "D#dim",
        strings: {
            1: exports.doNotPlayString,
            6: exports.doNotPlayString
        },
        frets: {
            6: {
                5: 1
            },
            7: {
                4: 2,
                2: 3
            },
            8: {
                3: 4
            }
        }
    },
    {
        fullName: "D flat",
        shortName: "Db",
        alternativeShortName: "C#",
        copyFrom: "C#"
    },
    {
        fullName: "D flat minor",
        shortName: "Dbm",
        alternativeShortName: "C#m",
        copyFrom: "C#m"
    },
    {
        fullName: "D diminished",
        shortName: "Ddim",
        strings: {
            1: exports.doNotPlayString,
            6: exports.doNotPlayString
        },
        frets: {
            5: {
                5: 1
            },
            6: {
                4: 2,
                2: 3
            },
            7: {
                3: 4
            }
        }
    },
    {
        fullName: "D suspended 2",
        shortName: "Dsus2",
        strings: {
            5: exports.doNotPlayString,
            6: exports.doNotPlayString
        },
        frets: {
            2: {
                3: 2
            },
            3: {
                2: 3
            }
        }
    },
    {
        fullName: "D suspended 4",
        shortName: "Dsus4",
        strings: {
            5: exports.doNotPlayString,
            6: exports.doNotPlayString
        },
        frets: {
            2: {
                3: 2
            },
            3: {
                1: 4,
                2: 3
            }
        }
    },
    {
        fullName: "D dominant 7",
        shortName: "D7",
        strings: {
            5: exports.doNotPlayString,
            6: exports.doNotPlayString
        },
        frets: {
            1: {
                2: 1
            },
            2: {
                1: 3,
                3: 2
            }
        }
    },
    {
        fullName: "E major",
        shortName: "E",
        frets: {
            1: {
                3: 1
            },
            2: {
                4: 2,
                5: 3
            }
        },
        isCommonChord: true
    },
    {
        fullName: "E minor",
        shortName: "Em",
        frets: {
            2: {
                4: 2,
                5: 3
            }
        },
        isCommonChord: true
    },
    {
        fullName: "E sharp diminished",
        shortName: "E#dim",
        strings: {
            1: exports.doNotPlayString,
            6: exports.doNotPlayString
        },
        frets: {
            7: {
                5: 1
            },
            8: {
                4: 2,
                2: 3
            },
            9: {
                3: 4
            }
        }
    },
    {
        fullName: "E flat",
        shortName: "Eb",
        alternativeShortName: "D#",
        frets: {
            6: exports.barFret,
            8: {
                2: 4,
                3: 3,
                4: 2
            }
        }
    },
    {
        fullName: "E flat minor",
        shortName: "Ebm",
        alternativeShortName: "D#m",
        copyFrom: "D#m"
    },
    {
        fullName: "E diminished",
        shortName: "Edim",
        strings: {
            1: exports.doNotPlayString,
            2: exports.doNotPlayString
        },
        frets: {
            1: {
                5: 1
            },
            2: {
                4: 2
            }
        }
    },
    {
        fullName: "E suspended 2",
        shortName: "Esus2",
        frets: {
            2: {
                5: 1
            },
            4: {
                3: 4,
                4: 3
            }
        }
    },
    {
        fullName: "E suspended 4",
        shortName: "Esus4",
        frets: {
            2: {
                3: 4,
                4: 3,
                5: 2
            }
        }
    },
    {
        fullName: "E dominant 7",
        shortName: "E7",
        frets: {
            1: {
                3: 1
            },
            2: {
                5: 2
            }
        }
    },
    {
        fullName: "F major",
        shortName: "F",
        frets: {
            1: exports.barFret,
            2: {
                3: 2
            },
            3: {
                4: 4,
                5: 3
            }
        },
        isCommonChord: true
    },
    {
        fullName: "F minor",
        shortName: "Fm",
        frets: {
            1: exports.barFret,
            3: {
                4: 3,
                5: 2
            }
        }
    },
    {
        fullName: "F sharp",
        shortName: "F#",
        alternativeShortName: "Gb",
        frets: {
            2: exports.barFret,
            3: {
                3: 2
            },
            4: {
                4: 4,
                5: 3
            }
        }
    },
    {
        fullName: "F sharp minor",
        shortName: "F#m",
        alternativeShortName: "Gbm",
        frets: {
            2: exports.barFret,
            4: {
                4: 4,
                5: 3
            }
        }
    },
    {
        fullName: "F sharp diminished",
        shortName: "F#dim",
        strings: {
            1: exports.doNotPlayString,
            6: exports.doNotPlayString
        },
        frets: {
            6: {
                5: 1
            },
            7: {
                4: 2,
                2: 3
            },
            8: {
                3: 4
            }
        }
    },
    {
        fullName: "F major diminished",
        shortName: "Fdim",
        strings: {
            1: exports.doNotPlayString,
            6: exports.doNotPlayString
        },
        frets: {
            8: {
                5: 1
            },
            9: {
                4: 2,
                2: 3
            },
            10: {
                3: 4
            }
        }
    },
    {
        fullName: "F suspended 2",
        shortName: "Fsus2",
        frets: {
            8: exports.barFret,
            10: {
                3: 4,
                4: 3
            }
        }
    },
    {
        fullName: "F suspended 4",
        shortName: "Fsus4",
        frets: {
            1: exports.barFret,
            3: {
                3: 4,
                4: 3,
                5: 2
            }
        }
    },
    {
        fullName: "F dominant 7",
        shortName: "F7",
        frets: {
            1: exports.barFret,
            2: {
                3: 2
            },
            3: {
                5: 3
            }
        }
    },
    {
        fullName: "F flat",
        shortName: "Fb",
        alternativeShortName: "E",
        copyFrom: "E"
    },
    {
        fullName: "G major",
        shortName: "G",
        frets: {
            2: {
                5: 1
            },
            3: {
                1: 3,
                6: 2
            }
        },
        isCommonChord: true
    },
    {
        fullName: "G minor",
        shortName: "Gm",
        frets: {
            3: exports.barFret,
            5: {
                4: 4,
                5: 3
            }
        }
    },
    {
        fullName: "G flat",
        shortName: "Gb",
        alternativeShortName: "F#",
        copyFrom: "F#"
    },
    {
        fullName: "G flat minor",
        shortName: "Gbm",
        alternativeShortName: "F#m",
        copyFrom: "F#m"
    },
    {
        fullName: "G sharp",
        shortName: "G#",
        alternativeShortName: "Ab",
        copyFrom: "Ab"
    },
    {
        fullName: "G sharp minor",
        shortName: "G#m",
        alternativeShortName: "Abm",
        copyFrom: "Abm"
    },
    {
        fullName: "G sharp diminished",
        shortName: "G#dim",
        strings: {
            1: exports.doNotPlayString,
            2: exports.doNotPlayString
        },
        frets: {
            4: exports.barFret,
            5: {
                5: 2
            },
            6: {
                4: 3
            }
        }
    },
    {
        fullName: "G slash B",
        shortName: "G/B",
        strings: {
            6: exports.doNotPlayString
        },
        frets: {
            2: {
                5: 1
            },
            3: {
                1: 3,
                2: 2
            }
        }
    },
    {
        fullName: "G slash F#",
        shortName: "G/F#",
        frets: {
            2: {
                5: 2,
                6: 1
            },
            3: {
                1: 4,
                2: 3
            }
        }
    },
    {
        fullName: "G diminished",
        shortName: "Gdim",
        strings: {
            1: exports.doNotPlayString,
            6: exports.doNotPlayString
        },
        frets: {
            10: {
                5: 1
            },
            11: {
                4: 2,
                2: 3
            },
            12: {
                3: 4
            }
        }
    },
    {
        fullName: "G suspended 2",
        shortName: "Gsus2",
        frets: {
            2: {
                3: 1
            },
            3: {
                1: 4,
                2: 3,
                6: 2
            }
        }
    },
    {
        fullName: "G suspended 4",
        shortName: "Gsus4",
        frets: {
            1: {
                2: 1
            },
            3: {
                1: 4,
                5: 3,
                6: 2
            }
        }
    },
    {
        fullName: "G dominant 7",
        shortName: "G7",
        frets: {
            1: {
                1: 1
            },
            2: {
                5: 2
            },
            3: {
                6: 3
            }
        }
    }
];
exports.default = exports.chords;
