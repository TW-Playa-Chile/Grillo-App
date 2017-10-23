/*
* Using Inmutable update patterns:
* https://github.com/reactjs/redux/blob/master/docs/recipes/reducers/ImmutableUpdatePatterns.md#inserting-and-removing-items-in-arrays
*/

export function insertItem (array, action) {
  let newArray = array.slice();
  newArray.splice(action.name, 0, action.payload);
  return newArray;
}

// export function removeItem (array, action) {
//   let newArray = array.slice();
//   newArray.splice(action.name, 1);
//   return newArray;
// }
