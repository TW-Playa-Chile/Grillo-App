import * as actions from './../habits';
import { status } from './../../constants/habit';

describe('actions', () => {
    it('should create an habit with type add_habit', () => {
        expect(actions.addHabit("JHSKADJHAS").type).toBe('add_habit');
    });
    it('should create an habit with status ACTIVE', () => {
        expect(actions.addHabit("JHSKADJHAS").payload.status).toBe(status.ACTIVE);
    });
    it('should create an habit with a name', () => {
        expect(actions.addHabit("A").payload.name).toBe("A");
    });
});
