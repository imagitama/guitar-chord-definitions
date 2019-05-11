import chords from '../chords'
import keys from '../keys'

describe('chords', () => {
  it('matches the snapshot', () => {
    expect(chords).toMatchSnapshot()
  })
})

describe('keys', () => {
  it('matches the snapshot', () => {
    expect(keys).toMatchSnapshot()
  })
})
