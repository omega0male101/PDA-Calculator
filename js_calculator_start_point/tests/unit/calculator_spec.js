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

  it('can multiply to total', function(){
      calculator.previousTotal = 10;
      calculator.multiply(10);
      assert.equal(100, calculator.runningTotal);
  })

  it('can divide total', function(){
      calculator.previousTotal = 100;
      calculator.divide(10);
      assert.equal(10, calculator.runningTotal);
  })

  it('number click changes new Total', function(){
      calculator.numberClick(4);
      assert.equal(false, calculator.newTotal);
  })

  it('operatorClick to multiply', function(){
      calculator.numberClick(8);
      calculator.operatorClick('*');
      calculator.numberClick(10);
      calculator.operatorClick('=');
      assert.equal(80, calculator.runningTotal);
    })

  it('operatorClick to add', function(){
      calculator.numberClick(20);
      calculator.operatorClick('+');
      calculator.numberClick(40);
      calculator.operatorClick('=');
      assert.equal(60, calculator.runningTotal);
    })

  it('operatorClick to subtract', function(){
    calculator.numberClick(10);
    calculator.operatorClick('-');
    calculator.numberClick(5);
    calculator.operatorClick('=');
    assert.equal(5, calculator.runningTotal);
  })

  it('operatorClick can divide', function(){
      calculator.numberClick(10);
      calculator.operatorClick('/');
      calculator.numberClick(2);
      calculator.operatorClick('=');
      assert.equal(5, calculator.runningTotal);
  })

  it('clearclick can wipe after running total', function(){
      calculator.numberClick(10);
      calculator.operatorClick('-');
      calculator.numberClick(5);
      calculator.operatorClick('=');
      assert.equal(5, calculator.runningTotal);
      calculator.clearClick();
      assert.equal(0, calculator.runningTotal);
    })

   

});
