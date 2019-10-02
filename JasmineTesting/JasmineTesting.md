# Jasmine Testing
Unit tests, test parts of the application in isolation.

Need a framework to write tests

A way to describe the code we're Testing

A way to have assertions to validate the test works

## Keywords

`describe` used to organize tests. What is the test going to do.

`it` used inside `describe`. Write what we expect this functionality to do.

`expect` used inside `it`. This is where we make expectations on what will happen

## Matchers

Attached in the expect such as `toBe()` or `not.toBe()`

`toBeDefined()` when ensuring we don't have an `undefined` value
`toBeFalsy()` and `toBeTruthy()`
`toContain()` when searching an array
`toEqual` when checking with `===`  

## Hooks

There is a `beforeEach` and `afterEach` function that can be called to DRY out setup/teardown for tests. Also has a `beforeAll` and `afterAll`

Use an `xit` to make a test as pending

## Spies

A spy is a mock object. They only exist in the describe or it block and remove after each spec

```javascript
function(a, b) {
  return a + b;
}

describe('add', function(){
  var addSpy, result;
  beforeEach(function(){
    addSpy = spyOn(window, 'add');
    result = addSpy(1,2);
  });

  it('can have its params tested', function(){
    expect(addSpy).toHaveBeenCalled();
    expect(addSpy).toHaveBeenCalledWith(1,2);
  });
});
```

## Clocks

Testing time dependent and async code. Need to run `jasmine.clock().install()` in a `beforeEach` and run `jasmine.clock().uninstall()` in a `afterEach`

Example
```javascript
var earth = {
  isRound: true,
  numberFromSun: 3
}

describe('Earth', function() {
  it('is round', function() {
    expect(earth.isRound).toBe(true)
  });
  it('is the 3rd planet from the sun', function() {
    expect(earth.numberFromSun).toBe(3)
  });
});
```

## TDD

Test Driven Development. Write your test code before your application code. Red, Green, Refactor.


## BDD

Behavior Driven Development. It's a subset of TDD. With BDD we're also describing the behavior
