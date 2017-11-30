import modalReducer from './../modals';
import { Habit } from '../../constants/habit';

describe('modals reducer', () => {
  const initialState = [];

  it('should return initial state', () => {
    const action = { type: 'anything' };
    expect(modalReducer(initialState, action)).toEqual([]);
  });

  it('should add modal to reducer', () => {
    const habit = new Habit('Habit One');
    const type = 'close_habit';
    const action = { type: 'add_modal', payload: { type, habit } };
    expect(modalReducer(initialState, action)).toEqual([{ type, habit }]);
  });
});
