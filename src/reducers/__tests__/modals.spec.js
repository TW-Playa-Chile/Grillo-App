import modals from './../modals';

describe('modals reducer', () => {
  const initialState = [];

  it('should return initial state', () => {
    const action = { type: 'anything' };
    expect(modals(initialState, action)).toEqual([]);
  });

  it('should add modal to reducer', () => {
    const action = { type: 'add_modal', payload: { open: true, type: 'close_habit' } };
    expect(modals(initialState, action)).toEqual([{ open: true, type: 'close_habit' }]);
  });
});
