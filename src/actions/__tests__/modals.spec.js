import * as actions from './../modals';
import { Habit } from '../../constants/habit';

describe('modal actions', () => {
  it('should create an habit with type add_notification', () => {
    const habit = new Habit('Habit One');
    expect(actions.addModal('close_habit', habit).type).toBe('add_modal');
  });
  it('should create an habit with payload', () => {
    const habit = new Habit('Habit One');
    const type = 'close_habit';
    expect(actions.addModal('close_habit', habit).payload).toEqual({ type, habit });
  });
});
