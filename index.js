function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  }
 )
}

function iterate(callback) {
  var Array = [1];
  Array.forEach(callback)
  return Array
}

function doToArray(array, callback) {
  array.forEach(callback)
}
