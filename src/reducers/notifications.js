import { insertItem } from './../helpers/arrayMethods';

export const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case 'add_notification':
      return insertItem(state, action)
    default:
      return state
  }
};
