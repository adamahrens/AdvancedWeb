# Async Foundations

## Callback Functions

A function F that is passed to another function G as a parameter. Function G then calls `F()`

Here is an example
```
function log() {
  console.log('Hello from a callback function')
}

function doSomething(func) {
  var i = 10;
  func();
  console.log('Just called a callback function');
}

// Pass the callback function to the higher order function
doSomething(log);
```

Callbacks are used for advanced array methods, browser events, AJAX requests, React Development

```
function sendMessage(message, callback) {
  return callback(message);
}

sendMessage('Go to the console', console.log);
sendMessage('Go to an alert', alert);
var response = sendMessage('How old are you?', confirm);
```

Another example
```
function greeting(name, formatter) {
  return "Hello " + formatter(name);
}

function upper(string) {
  return string.toUpperCase();
}

function lower(string) {
  return string.toLowerCase();
}

greeting('Adam', upper);
greeting('Adam', lower);
```

It's more common to use anonymous functions instead of named. This would look like

```
greeting('Adam', function(s) {
  return s.toUpperCase();  
});

greeting('Adam', function(s) {
  return s + "!!!!";
});
```
## Higher Order Functions

It's a function that accepts a callback function as a parameter. In the above example `doSomething` is a higher order function

## The Stack

An ordered data structure (tracking functions invoked). It's part of the Javascript Runtime that we don't have access to. Added when a function is invoked. Removed when a function completes

`function multiply` <br/>
`main`

That Stack Frame keeps track of the method called and its parameters that were passed to it

## The Heap

An area in memory where data is stored

So `var obj = { first: 'Leroy', last: 'Jenkins'}`

Heap is storing the actual data. `obj` references that location
