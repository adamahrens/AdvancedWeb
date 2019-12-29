# Closures

Closure is a function that makes use of variables defined in an outer function that has returned

```
function outer() {
  var greeting = 'Hello'
  return function inner() {
    return greeting + ' World!'
  }
}
```

For it to be a closure it must make use of variables defined in the outer function. Inner doesn't remember all variables from the outer. Only the variables they use.

Can be useful for private variables

```
function classRoom() {
  var teachers = ['Leroy', 'Jake']
  return {
    getTeachers: function() {
      return teachers.slice();
    },
    addTeacher: function(teacher) {
      teachers.push(teacher);
      return teachers.slice(); // Prevents someone from mutating the teachers variable directly
    }
  }
}
```

In this example you won't be able to access teachers directly

# this

Reserved keywoard in javascript. Used in four ways.

## Global Context
It's outside of an object

`console.log(this); // window`

```
function whatIsThis() {
  return this;
}

whatIsThis(); // window
```

`"use strict"`

Prevents attaching properties to the this

## Implicit/Object

```
var person = {
  first: "Adam",
  hello: function() {
    return "Hello! " + this.first;
  },
  context: function() {
    return this === person;
  }
}
```

## Explicit Binding
Using call, apply, or bind. Can only be used on functions

```
var person = {
  first: "Adam",
  hello: function() {
    return "Hello! " + this.first;
  },
  context: function() {
    return this === person;
  },
  dog: {
    hello: function() {
      return "Hello! " + this.first; // Would currently returned undefined
    }
  }
}

// Using call
person.dog.hello.call(person)
```

## Using new Keyword

```
function Person(name) {
  this.name = name;
}

var me = new Person("Adam");
```
