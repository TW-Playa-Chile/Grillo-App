export function addNotification(msg) {
  return {
    type: "add_notification",
    payload: msg
  }
}
