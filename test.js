var assert = require('assert');
var controller = require('./controller');


describe('test', function() {
  it('Pitäisi palauttaa jotain', function(){
    assert.equal(5, controller.login("maija", "salis5"));
  });
});
