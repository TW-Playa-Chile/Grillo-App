export function addNotification(msg, color) {
  return {
    type: 'add_notification',
    payload: { msg, color }
  };
}
