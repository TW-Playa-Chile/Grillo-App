/*
* Using Inmutable update patterns:
* https://github.com/reactjs/redux/blob/master/docs/recipes/reducers/ImmutableUpdatePatterns.md#inserting-and-removing-items-in-arrays
*/

export function insertItem (array, action) {
  let newArray = array.slice();
  newArray.splice(action.name, 0, action.payload);
  return newArray;
}

export function updateObjectInArray(array, action) {
  return array.map( (item, index) => {
      if(index !== action.index) {
          // This isn't the item we care about - keep it as-is
          return item;
      }

      // Otherwise, this is the one we want - return an updated value
      return {
          ...item,
          ...action.item
      };
  });
}

// export function removeItem (array, action) {
//   let newArray = array.slice();
//   newArray.splice(action.name, 1);
//   return newArray;
// }
