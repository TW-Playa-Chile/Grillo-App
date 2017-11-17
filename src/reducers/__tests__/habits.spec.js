import habitsReducer, {initialState} from './../habits';

describe('habits reducer', () => {
  it('returns existing state by default', () => {
    const state = [ 1, 2, 3 ]
    const result = habitsReducer(state, { type: 'anything' })
    expect(result).toBe(state)
  });

  it('clears previously existing habits', () => {
    const state = [ { name: 'fumar merken'} ]
    const result = habitsReducer(state, { type: 'clean_habits' })
    expect(result).toEqual([])
  })

  it('adds one habit', () => {
    const action = { type: 'add_habit', payload: { name: 'jugar piedras en autos' } }
    const result = habitsReducer(initialState, action)
    expect(result.length).toBe(1)
    expect(result[0]).toBe(action.payload)
  });
});
