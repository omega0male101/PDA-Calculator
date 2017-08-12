var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })

  it('should update display for multiple number clicks', function(){
       running_total = element(by.css('#running_total'))
       element(by.css('#number1')).click();
       element(by.css('#number9')).click();
       expect(running_total.getAttribute('value')).to.eventually.equal('19')
  })

  it('should update display for adding', function(){
     running_total = element(by.css('#running_total'))
     element(by.css('#number8')).click();
     element(by.css('#operator_add')).click();
     element(by.css('#number9')).click();
     element(by.css('#operator_equals')).click();
     expect(running_total.getAttribute('value')).to.eventually.equal('17')
   })

  it('should update display for subtraction', function(){
       running_total = element(by.css('#running_total'))
       element(by.css('#number9')).click();
       element(by.css('#operator_subtract')).click();
       element(by.css('#number1')).click();
       element(by.css('#operator_equals')).click();
       expect(running_total.getAttribute('value')).to.eventually.equal('8')
    })

  it('should update display for multiplication', function(){
       running_total = element(by.css('#running_total'))
       element(by.css('#number5')).click();
       element(by.css('#operator_multiply')).click();
       element(by.css('#number3')).click();
       element(by.css('#operator_equals')).click();
       expect(running_total.getAttribute('value')).to.eventually.equal('15')
    })

  it('should update display for division', function(){
       running_total = element(by.css('#running_total'))
       element(by.css('#number5')).click();
       element(by.css('#operator_divide')).click();
       element(by.css('#number2')).click();
       element(by.css('#operator_equals')).click();
       expect(running_total.getAttribute('value')).to.eventually.equal('2.5')
     })


  });