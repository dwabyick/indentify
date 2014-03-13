
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


