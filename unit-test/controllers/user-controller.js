function UserController() {

  var users;
  function loadUserList(users){
    this.users = users;
  }

  function isValidUserId(userList, user) {
    return userList.indexOf(user) >= 0;
  }

  function isValidUserIdAsync(userList, user, callback) {
    setTimeout(function(){
      callback(userList.indexOf(user) >= 0)
    }, 5000);
  }

  function isValidUserHook(user) {
    return this.users.indexOf(user) >= 0;
  }

  return {
    isValidUserIdAsync,
    isValidUserId,
    loadUserList,
    isValidUserHook
  }

}

module.exports = UserController();
