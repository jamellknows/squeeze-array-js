//function that takes an array and squeezes it 
function squeezeArray(arr) {
  var newArr = "";
  var count = 0;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length !== undefined) {
      newArr += squeezeRecur(arr[i], newArr, count)[0];
    } else if (arr[i].length === undefined) {
      newArr += arr[i];
      count = count + 1;
    }

    count++;
  }

  count = count + 1;
  var start = newArr.length - count;
  newArr = newArr.slice(start, newArr.length);
  return newArr;
}

function squeezeRecur(arr, newArr, count) {
  for (var j = 0; j < arr.length; j++) {
    if (arr[j].length !== undefined) {
      newArr += squeezeRecur(arr[j], newArr, count)[0];
    } else {
      newArr += arr[j];
      count++;
    }
  }

  return [newArr, count];
}

export { squeezeArray };
