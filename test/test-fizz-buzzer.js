'use strict';

// import chai, declare expect variable
const expect = require('chai').expect;

// import fizzBuzzer
const fizzBuzzer = require('../fizzBuzzer');

// unit tests for our `fizzbBuzzer` function
describe('fizzBuzzer', function () {

  // test the normal case
  it('should return fizz when num counts by 3', function () {
    // range of normal inputs, including
    // notable cases like negative answers
    const normalCases = [
      3, 6, 9
    ];

    // for each input, `fizzBuzzer` should
    // produce the expected value
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input);
      expect(answer).to.equal('fizz');
    });

  });
  it('should return buzz when num counts by 5', function () {
    // range of normal inputs, including
    // notable cases like negative answers
    const normalCases = [
      10, 20, 50, 100
    ];

    // for each input, `fizzbuzzer` should
    // produce the expected value
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input);
      expect(answer).to.equal('buzz');
    });

  });
  it('should return fizz-buzz when num counts by 15', function () {
    // range of normal inputs, including
    // notable cases like negative answers
    const normalCases = [
      15, 30, 60
    ];

    // for each input, `fizzBuzzer` should
    // produce the expected value
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input);
      expect(answer).to.equal('fizz-buzz');
    });

  });
  it('should return num, if num ! div by 3 or 5', function () {
    // range of normal inputs, including
    // notable cases like negative answers
    const normalCases = [
      2, 23, 88, 101, 49, 71
    ];

    // for each input, `fizzBuzzer` should
    // produce the expected value
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input);
      expect(answer).to.equal(input);
    });
  });
  it('should raise error if args not numbers', function() {
    // range of bad inputs where input are not numbers
    const badInputs = [
      'a', '$', 'testing', 'b', 'C', 'z', 'Y', 'xx',
    ];
    // prove that an error is raised for bad inputs
    badInputs.forEach(function(input) {
      expect(function() {
        fizzBuzzer(input);
      }).to.throw(Error);
    });
  });

});