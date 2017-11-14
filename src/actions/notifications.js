export function addNotification(msg) {
  // console.log("@@@@@", msg)
  return {
    type: "add_notification",
    payload: msg
  }
}
