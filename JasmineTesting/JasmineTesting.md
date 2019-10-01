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
