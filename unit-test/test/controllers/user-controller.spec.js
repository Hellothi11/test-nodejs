var assert = require('assert');
var controller =  require('../../controllers/user-controller');

describe('UserController', function () {

  beforeEach('Setting up the userList', function(){
    console.log('beforeEach');
    controller.loadUserList(['abc123','xyz321']);
    //throw {error: 'Thrwoing Error to fail'}
  });

  describe('isValidUserHook', function() {
    it('should return true if valid user id', function() {
      var isValid = controller.isValidUserHook('abc123')
      assert.equal(isValid, true);
    })
  })
  describe('isValidUserId', function(){
    it('should return true if valid user id', function(){
      var isValid = controller.isValidUserId(['abc123','xyz321'], 'abc123')
      assert.equal(isValid, true);
    });

    it('should return false if invalid user id', function(){
      var isValid = controller.isValidUserId(['abc123','xyz321'],'abc1234')
      assert.equal(isValid, false);
    });

  });

  describe('isValidUserIdAsync', function(){
    this.timeout(40000);
    it('should return true if valid user id', function(done){
      controller.isValidUserIdAsync(['abc123','xyz321'], 'abc123',
      function(isValid){
          assert.equal(isValid, true);
          done();
      });
    });

  });
});
