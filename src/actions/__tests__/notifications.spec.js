import * as actions from './../notifications';

describe('actions', () => {
  it('should create an habit with type add_notification', () => {
      expect(actions.addNotification("Hola").type).toBe('add_notification');
  });
  it('should create an habit with payload', () => {
    expect(actions.addNotification("Hola").payload).toBe("Hola");
  });
});
