var array = [1, 2, 3, 4, 5, 6];
function forEach(array, func) {
  array.forEach(func);
}

forEach(array, function(number) {
  var doubled = number * 2;
  console.log(`${number} x 2 = ${doubled}`);
});

var strings = ['first', 'second', 'third', 'fourth'];
function findIndex(array, isValueLookingFor) {
  var index = 0;
  var foundIndex = -1;
  array.forEach(function(element) {

    if (isValueLookingFor(element) && foundIndex === -1) {
      foundIndex = index;
    }

    index += 1;
  });

  return foundIndex;
}

var index = findIndex(strings, function(value) {
  return value === 'second';
});

console.log(`Found second at index ${index}`);
