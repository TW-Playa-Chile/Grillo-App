import * as actions from './../habits';
import { status, Habit } from './../../constants/habit';

describe('habit actions', () => {
  it('should create an habit with correct type', () => {
    expect(actions.addHabit('Fumar oregano').type).toBe('add_habit');
  });

  it('should create an habit with status ACTIVE', () => {
    expect(actions.addHabit('Fumar oregano').payload.status).toBe(status.ACTIVE);
  });

  it('should create an habit with a name', () => {
    expect(actions.addHabit('Fumar oregano').payload.name).toBe('Fumar oregano');
  });

  it('should receive action with see_habit type when "seeHabit" action is invoqued', () => {
    const habit = new Habit('Fumar oregano');
    expect(actions.seeHabit(habit).type).toBe('see_habit');
  });

  it('should receive habit with seen property equals true when "seeHabit" action is invoqued', () => {
    const habit = new Habit('Fumar oregano');
    expect(actions.seeHabit(habit).payload.seen).toBe(true);
  });
});
