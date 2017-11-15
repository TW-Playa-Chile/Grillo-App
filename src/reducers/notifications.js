import { insertItem } from './../helpers/arrayMethods';

export const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case 'add_notification':
      const newState = insertItem(state, action)
      return newState;
    default:
      return state
  }
};
