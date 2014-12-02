'use strict';
var expect = require('chai').expect;
var coolSmiley = require('../app/js/app.js');

describe('cool faces to be cool', function() {
  it('should successfully load the function', function() {
    expect(coolSmiley).to.be.ok;
  });

  it('should be true', function() {
    expect(true).to.eql(true);
  });
});
