import * as actions from './../modals';

describe('modal actions', () => {
  it('should create an habit with type add_notification', () => {
    expect(actions.addModal('close_habit').type).toBe('add_modal');
  });
  it('should create an habit with payload', () => {
    expect(actions.addModal('close_habit').payload).toEqual({ open: true, type: 'close_habit' });
  });
});
