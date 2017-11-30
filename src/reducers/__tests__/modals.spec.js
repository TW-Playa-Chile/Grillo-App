import modals from './../modals';
import { Habit } from '../../constants/habit';

describe('modals reducer', () => {
  const initialState = [];

  it('should return initial state', () => {
    const action = { type: 'anything' };
    expect(modals(initialState, action)).toEqual([]);
  });

  it('should add modal to reducer', () => {
    const habit = new Habit('Habit One');
    const type = 'close_habit';
    const action = { type: 'add_modal', payload: { open: true, type, habit } };
    expect(modals(initialState, action)).toEqual([{ open: true, type, habit }]);
  });
});
