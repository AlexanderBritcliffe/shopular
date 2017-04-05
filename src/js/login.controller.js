(function() {
  'use strict';

  angular.module('inventory')
    .controller('LoginController', LoginController);

  LoginController.$inject = ['UserService'];


  /**
   * Creates a log in controller so application can have miltiple users
   * @param {Function} UserService this manages the users information
   */
  function LoginController(UserService) {
    let vm = this;
    vm.newUser = {};
    vm.users = UserService.getUsername();

    /**
     * Creates new user after logging in
     * @param {Object} user Information about user 
     */
    vm.addUser = function addUser(user) {
      UserService.addUser(user);
      vm.newUser = {};
    };

    vm.removeUser = function removeUser(user) {
      UserService.removeUser(user);
    };

  }

}());
