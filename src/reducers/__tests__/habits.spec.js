import habitsReducer from './../habits';
import { Habit } from '../../constants/habit';
import { seeHabit } from '../../actions/habits';

describe('habits reducer', () => {
  const initialState = [];

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
    const action = { type: 'add_habit', payload: { name: 'tirar piedras a autos' } };
    const result = habitsReducer(initialState, action);
    expect(result.length).toBe(1);
    expect(result[0]).toBe(action.payload);
  });

  it('see one habit', () => {
    const habits = [new Habit('fumar merken')];
    const action = seeHabit(habits[0]);

    const result = habitsReducer(habits, action);

    const habitFromRedux = result[0];
    expect(habitFromRedux.seen).toBe(true);
  });

  it('should mark one habit as seen of multiple habits', () => {
    const habits = [new Habit('fumar merken'), new Habit('fumar oregano')];
    const action = seeHabit(habits[1]);

    const result = habitsReducer(habits, action);

    const habitSeen = result[1];
    const habitNotSeen = result[0];
    expect(habitSeen.seen).toBe(true);
    expect(habitNotSeen.seen).toBe(false);
  });
});
