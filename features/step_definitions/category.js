const assert = require('assert');
const { Given, When, Then } = require('cucumber');

function addproduct(category) {
    // We'll leave the implementation blank for now
    return 'cap';
  }
  Given('I added product into category', function () {
    this.category = 'list';
  });
  When('I add one category name into product list', function () {
    this.actualAnswer = addproduct(this.category);
  });
  Then('I expect category name is saved into product list name shloud be {string}', function (expectedAnswer) {
    assert.equal(this.actualAnswer, expectedAnswer);
  });