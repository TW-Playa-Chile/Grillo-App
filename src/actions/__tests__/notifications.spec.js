import * as actions from './../notifications';

const testMsg = {
  msg: "Hola",
  color: "green",
}

describe('actions', () => {
  it('should create an habit with type add_notification', () => {
      expect(actions.addNotification("Hola", "green").type).toBe('add_notification');
  });
  it('should create an habit with payload', () => {
    expect(actions.addNotification("Hola", "green").payload).toEqual(testMsg);
  });
});
