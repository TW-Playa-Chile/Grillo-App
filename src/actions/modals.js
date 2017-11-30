export function addModal(type, habit) {
  return {
    type: 'add_modal',
    payload: { type, habit }
  };
}
