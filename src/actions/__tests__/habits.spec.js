import * as actions from './../habits';
import { status } from './../../constants/habit';

describe('actions', () => {
    it('should create an habit with type', () => {
        expect(actions.addHabit("Habito").type).toBe('add_habit');
    });
    it('should clean habits type', () => {
      expect(actions.cleanHabits().type).toBe('clean_habits');
    });
    it('should stop habits type', () => {
      expect(actions.stopHabit("Habito").type).toBe('stop_habit');
    });
    it('should create an habit with status ACTIVE', () => {
        expect(actions.addHabit("Habito").payload.status).toBe(status.ACTIVE);
    });
    it('should create an habit with a name', () => {
        expect(actions.addHabit("A").payload.name).toBe("A");
    });
});
