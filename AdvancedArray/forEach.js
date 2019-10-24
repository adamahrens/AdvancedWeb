var arr = [1, 2, 3];
arr.forEach(function(value, index, array){
    console.log('Current value = ' + value);
    console.log('Current index = ' + index);
    console.log(array);
});

function fe(array, callback) {
    for(var index = 0; index < array.length; index++) {
        callback(array[index], index);
    }
}

console.log('----------')
fe(arr, function(val, index){
    console.log(val + ' is at index ' + index);
});

/*
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([5,1,2,3,10]) // [10,2,4,6,20]

*/
function doubleValues(arr) {
    var doubled = [];
    arr.forEach(function(value, index, array){
        doubled.push(value * 2);
    });

    return doubled;
}

console.log(doubleValues([1,2,3])); // [2,4,6]
console.log(doubleValues([5,1,2,3,10])); // [10,2,4,6,20]

/*
Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function

Examples:
    onlyEvenValues([1,2,3]) // [2]
    onlyEvenValues([5,1,2,3,10]) // [2,10]

*/
function onlyEvenValues(arr){
    var evenOnly = [];
    arr.forEach(function(value, index, array) {
        if (value % 2 == 0) {
            evenOnly.push(value);
        }
    });

    return evenOnly;
}

console.log(onlyEvenValues([1,2,3])); // [2]
console.log(onlyEvenValues([5,1,2,3,10]));  // [2,10]
/*
Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.

Examples:
    showFirstAndLast(['colt','matt', 'tim', 'udemy']) // ["ct", "mt", "tm", "uy"]
    showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']

*/
function showFirstAndLast(arr){
    var firstLast = [];
    arr.forEach(function(value, index, array) {
        firstLast.push(value.charAt(0) + value.charAt(value.length-1));
    });

    return firstLast;
}

console.log(showFirstAndLast(['colt','matt', 'tim', 'udemy'])) // ["ct", "mt", "tm", "uy"]
console.log(showFirstAndLast(['hi', 'goodbye', 'smile'])) // ['hi', 'ge', 'se']
/*
Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object 

Examples:
    addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
    
    // [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]

*/
function addKeyAndValue(arr,key,value){
    var keysValuesAdded = [];
    arr.forEach(function(element, index, array) {
        var dict = element;
        dict[key] = value;
        keysValuesAdded.push(dict);
    });

    return keysValuesAdded;
}

console.log(addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor'))

/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/
function vowelCount(str){
    var dict = {};
    str.split('').forEach(function(element, index, array) {
        var lowercase = element.toLowerCase();
        if (['a', 'e', 'i', 'o', 'u'].indexOf(lowercase) !== -1) {
            if (lowercase in dict) {
                var currentValue = dict[lowercase];
                dict[lowercase] = currentValue + 1;
            } else {
                dict[lowercase] = 1;
            }
        }
    });

    return dict;
}

console.log(vowelCount('Elie')); // {e:2,i:1};
console.log(vowelCount('Tim')); // {i:1};