import * as actions from './../habits';
import { status } from './../../constants/habit';

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
});
