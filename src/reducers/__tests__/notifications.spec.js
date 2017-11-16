import notifications, {initialState} from './../notifications';

describe('notifications reducer', () => {
  it('should return initial state', () => {
    const action = { type: 'anything'}
    expect(notifications(initialState, action)).toEqual([]);
  });
  it('should add notification to reducer', () => {
    const action = { type: "add_notification", payload: "Hola"}
    expect(notifications(initialState, action)).toEqual(["Hola"]);
  });
  it('should add many notifications to reducer', () => {
    const action1 = { type: "add_notification", payload: "Hola"}
    const action2 = { type: "add_notification", payload: "Chao"}
    let state = notifications(initialState, action1);
    expect(notifications(state, action2)).toEqual(["Chao", "Hola"]);
  })
})
