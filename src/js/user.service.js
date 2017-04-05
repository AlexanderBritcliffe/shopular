(function() {
  'use strict';

  angular.module('inventory').factory('UserService', UserService);


  /**
  * Creates the service model for usernames
  */
  function UserService() {
    let users = JSON.parse(localStorage.getItem('users')) || [];

    /**
    * Gathers all of the users information
    * @return {Array} Array containing details of user
    */
    function getUsername() {
      return users;
    }

    /**
    * Adds a new user when they log in
    * @param {Object} user User information containing username & timestamp
    */
    function addUser(user) {
      if (typeof(user) !== 'object') {
        return console.log('not an object');
      }
      if(!user.username) {
        return console.log('no username has been entered');
      }
      users.push({
        username: user.username,
        loginTime: Date.now()
      });
      localStorage.setItem('users', angular.toJson(users));
    }

    /**
    * Deletes the most recent user entry
    * @param  {Object} user The user that will be deleted
    * @return {void}
    */
    function removeUser(user) {
      let index = users.indexOf(user);
      users.splice(index, 1);
    }

    return {
      getUsername: getUsername,
      addUser: addUser,
      removeUser: removeUser
    };
  }

}());
