const assert = require('assert');
const { Given, When, Then } = require('cucumber');

function userlogin(login) {
    // We'll leave the implementation blank for now
    return 'successfully';
  }
  Given('I provide username and password', function () {
    this.login = 'logged';
  });

  When('I logged in into System', function () {
    this.actualAnswer = userlogin(this.login);
  });
  Then('I expect user can logged in into system {string} with vaild username and password with title welcome to Babygarden', function (expectedAnswer) {
    assert.equal(this.actualAnswer, expectedAnswer);
  });
