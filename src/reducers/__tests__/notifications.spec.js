import Immutable from 'immutable';
import notifications, {initialState} from './../notifications';

describe('notifications reducer', () => {
  it('should return initial state', () => {
    const action = { type: 'anything'}
    expect(notifications(initialState, action)).toEqual(Immutable.Map({notifications: []}));
  });
  it('should add notification to reducer', () => {
    const action = { type: "add_notification", payload: "Hola"}
    expect(notifications(initialState, action)).toEqual(Immutable.Map({notifications: ["Hola"]}));
  });
  it('should add many notifications to reducer', () => {
    const action1 = { type: "add_notification", payload: "Hola"}
    const action2 = { type: "add_notification", payload: "Chao"}
    let state = notifications(initialState, action1);
    expect(notifications(state, action2)).toEqual(Immutable.Map({notifications: ["Chao", "Hola"]}));
  })
})
