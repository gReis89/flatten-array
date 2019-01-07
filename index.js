module.exports = function flattenArray(array, output = []) {
  for (var i=0; i<array.length; i++) {
    if (Array.isArray(array[i])) {
      flattenArray(array[i], output)
    } else {
      output.push(array[i])
    }
  }
  return output;
}
