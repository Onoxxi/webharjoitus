var assert = require('assert');
var controller = require('./controller');


describe('test', function() {
  it('Pitäisi palauttaa results ', function(){
    assert.equal(5, controller.login("maija", "salis5"));
  });
});
