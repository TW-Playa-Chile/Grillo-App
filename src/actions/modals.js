export function addModal(type) {
  return {
    type: 'add_modal',
    payload: { open: true, type }
  };
}
