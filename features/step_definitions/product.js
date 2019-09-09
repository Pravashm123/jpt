const assert = require('assert');
const { Given, When, Then } = require('cucumber');

function addproduct(product) {
    // We'll leave the implementation blank for now
    return 'validation';
  }
  Given('Admin insert product into list', function () {
    this.product = 'logged';
  });
  When('Admin add product properties into list', function () {
    this.actualAnswer = addproduct(this.product);
  });
  Then('admin expect to save product properties into database sucessfully with proper {string}', function (expectedAnswer) {
    assert.equal(this.actualAnswer, expectedAnswer);
  });