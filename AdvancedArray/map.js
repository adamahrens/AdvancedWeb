var array = [1, 2, 3, 4, 5];
var mapped = array.map(function(value, index, array){
  return "$" + value;
});
console.log(mapped);

function doubleValues(arr){
  return arr.map(function(value){
    return value * 2;
  });
}

doubleValues([1,2,3])

function valTimesIndex(arr){
  return arr.map(function(value, index, array){
    return value * index;
  });
}

function extractKey(arr, key){
  return arr.map(function(value){
    return value[key];
  });
}

extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name')


function extractFullName(arr){
  return arr.map(function(value){
    return value['first'] + ' ' + value['last'];
  });
}
