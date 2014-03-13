
var fs = require('fs');
var expect = require("chai").expect;
var indentify = require("../indentify");

describe('indentify', function() {
  it('should appropriately correct indentation', function() {
    var input = fs.readFileSync('fixtures/input.html').toString();
    var output = fs.readFileSync('fixtures/output.html').toString();
    expect(indentify(input, 4)).to.equal(output);
  })
})

describe('Array', function(){
  describe('#indexOf()', function(){

      it('should appropriately correct line indentation', function(){
          expect([1,2,3].indexOf(5)).to.equal(-1);
      })
  })
})


