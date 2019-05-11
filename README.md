# Guitar Chord Definitions

Definitions for guitar chords and keys.

## Install

    npm i guitar-chord-definitions

## Chords

    import chords from 'guitar-chord-definitions/dist/chords'

    chords.find(({ shortName }) => shortName === 'A')

### Output

    {
      fullName: 'A major',
      shortName: 'A',
      strings: {
        6: doNotPlayString
      },
      frets: {
        2: {
          2: 3,
          3: 1,
          4: 2
        }
      },
      isCommonChord: true
    }

### Common chords

A flag to indicate the chord is easier for new guitar players.

### Copying chords

Some chords are identical to other chords, so if it has a `copyFrom` property you should copy from that other chord.

## Keys

    import keys from 'guitar-chord-definitions/dist/keys'

    keys.find(({ shortName }) => shortName === 'C')

### Output

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
    }

### Common keys

A flag to indicate the key is easier for new guitar players.

## Tests

    npm test