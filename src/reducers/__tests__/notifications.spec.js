import notificationReducer from './../notifications';

describe('notifications reducer', () => {
  const initialState = [];

  it('should return initial state', () => {
    const action = { type: 'anything' };
    expect(notificationReducer(initialState, action)).toEqual([]);
  });

  it('should add notification to reducer', () => {
    const action = { type: 'add_notification', payload: 'Hola' };
    expect(notificationReducer(initialState, action)).toEqual(['Hola']);
  });

  it('should add many notifications to reducer', () => {
    const action1 = { type: 'add_notification', payload: 'Hola' };
    const action2 = { type: 'add_notification', payload: 'Chao' };
    const state = notificationReducer(initialState, action1);
    expect(notificationReducer(state, action2)).toEqual(['Chao', 'Hola']);
  });
});
