function callback() {
    console.log('Callback called');
}

function convertSecondsToMilliseconds(seconds) {
    return 1000 * seconds;
}

// clearTimeout
var delay = convertSecondsToMilliseconds(1);
setTimeout(callback, delay);

// With anonymous function
setTimeout(function() {
    console.log('Anonymous callback used');
}, delay);

// setInterval(function() {
//     console.log('Called every 1 second')
// }, convertSecondsToMilliseconds(1));

// clearInterval to stop

function countDown(time) {
    var result = setInterval(function() {
        time -= 1;
        if (time !== 0) {
            console.log('Timer: ' + time);
        } else {
            console.log('Ring Ring Ring!!!');
            clearInterval(result);
        }
    }, 1000);
}

countDown(3);