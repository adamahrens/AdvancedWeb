var promise = new Promise(function(resolve, reject){
    resolve([1, 2, 3, 4]);
});

// Then is used when the resolve is invoked
promise.then(function(array){
    console.log("Promise resolved with data: " + array);
}).catch(function(data) {
    console.log("Reject was invoked");
});

var counter = 0;
function updateCounter() {
    counter += 1;
    console.log("Count: " + counter);
}

function run(callback, ms) {
    var promise = new Promise(function(resolve, reject){
        setTimeout(function() {
            var response = callback();
            resolve(response);
        }, ms);
    });

    return promise;
}

run(updateCounter, 1000)
.then(function(){
    return run(updateCounter, 2000);
}).then(function() {
    return run(updateCounter, 3000);
}).then(function(){
    console.log('Finished');
});