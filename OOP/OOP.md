# What is OOP
Programming model based around the idea of objects. Objects are created from a blueprint. When created they're an instance. Javascript doesn't have a built in class keyword.

Use constructor functions to describe the blueprint

```javascript
function House(bedrooms, bathrooms, sqft) {
  this.bedrooms = bedrooms;
  this.bathrooms = bathrooms;
  this.sqft = sqft;
}

var home1 = new House(4, 4, 2800);
var home2 = new House(8, 8, 12,200);

function Dog(name, age) {
  this.name = name;
  this.age = age;
  this.bark = function() {
    console.log(this.name + ' just barked!!');
  }
}
```

# new

When using new it

* creates an empty object `{}`
* sets `this` to be the empty object
* adds a `return this` to the end of the function
* adds `__proto__`

# multiple constructors

```javascript
function Automobile(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

Automobile.prototype.toString = function() {
  return "Make: " + this.make + " Model: " + this.model + " Year: " + this.year;
}

function Car(make, model, year) {
  Automobile.call(this, make, model, year);
  this.wheels = 4;
}

// So all cars get a toString function
Car.prototype = Object.create(Automobile.prototype);
Car.prototype.constructor = Car;

function Motorcycle(make, model, year) {
  Automobile.apply(this, arguments);
  this.wheels = 2;
}

Motorcycle.prototype = Object.create(Automobile.prototype);
Motorcycle.prototype.constructor = Motorcycle;
```

# OOP Example

```javascript
// Create a constructor function for a Person, each person should have a firstName, lastName, favoriteColor and favoriteNumber. Your function MUST be named Person.
function Person(firstName, lastName, favoriteColor, favoriteNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.favoriteColor = favoriteColor;
  this.favoriteNumber = favoriteNumber;
  this.multipleyFavoriteNumber = function(number) {
    return number * this.favoriteNumber;
  }
}

// Write a method called multiplyFavoriteNumber that takes in a number and returns the product of the number and the object created from the Person functions' favorite number.
```

# Intro to Prototypes

```javascript
> Dog.prototype.constructor
> Dog(name, age) {
  this.name = name;
  this.age = age;
  this.bark = function() {
    console.log(this.name + ' just barked!!');
  }
}
```

It'll look at an object's `__proto__` to see if the methods exist. Otherwise I'll crawl up the chain. Will return `undefined` if not found

```javascript
var arr = []
arr -> __proto__ -> Array.prototype.__proto__ -> Object.prototype.__proto__
```

Can use it to refactor code. For example a method on an object would keep getting called. So in the below example bark would be created for each new object

```javascript
function Dog(name, age) {
  this.name = name;
  this.age = age;
}

Dog.prototype.bark = function() {
  console.log(this.name + ' just barked!!');
}
```

Another example

```javascript
function Vehicle(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.isRunning = false;
}

Vehicle.prototype.turnOn = function() {
  this.isRunning = true;
}

Vehicle.prototype.turnOff = function() {
  this.isRunning = false;
}

Vehicle.prototype.honk = function() {
  return this.isRunning ? "beep!" : "";
}
```

# Prototypal Inheritance

The passing of methods and properties from one class to another. What to pass from one constructor function to another
