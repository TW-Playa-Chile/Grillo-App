import habitsReducer from './../habits';
import { Habit } from '../../constants/habit';
import { seeHabit } from '../../actions/habits';

describe('habits reducer', () => {
  it('returns existing state by default', () => {
    const state = [1, 2, 3];
    const result = habitsReducer(state, { type: 'anything' });
    expect(result).toBe(state);
  });

  it('clears previously existing habits', () => {
    const state = [{ name: 'fumar merken' }];
    const result = habitsReducer(state, { type: 'clean_habits' });
    expect(result).toEqual([]);
  });

  it('adds one habit', () => {
    const action = { type: 'add_habit', payload: { name: 'tirar piedras a autos' } }
    const initialState = [];
    const result = habitsReducer(initialState, action);
    expect(result.length).toBe(1);
    expect(result[0]).toBe(action.payload);
  });

  it('see one habit', () => {
    const habit = new Habit('fumar merken');
    const initialState = [habit];
    const expected = habit;
    expected.seen = true;
    const action = seeHabit(habit);
    const result = habitsReducer(initialState, action);

    expect(result.length).toBe(1);
    expect(result[0]).toEqual(expected);
  });
});
