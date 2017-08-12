var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('can add to total', function(){
      calculator.add(3);
      assert.equal(3, calculator.runningTotal);
  })

  it('can subtract to total', function(){
      calculator.subtract(10);
      assert.equal(-10, calculator.runningTotal);
  })

});
