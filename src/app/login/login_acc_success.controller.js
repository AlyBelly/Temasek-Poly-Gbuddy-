'use strict';
angular.module('Gbuddy')
  .controller('loginAccSuccessController', ['$auth', '$location', 'toaster',
  function ($auth, $location, toaster ) {

    var vm = this;

    vm.loginProfile = {
      username: $location.search().username, 
      password: ''
    };

    function trim_loginProfile(){
      vm.loginProfile.username = vm.loginProfile.username.trim();
      vm.loginProfile.password = vm.loginProfile.password.trim();
    }

vm.email_login = function () {
      trim_loginProfile();
      $auth.login(vm.loginProfile).then(function (response) {
        console.log("authenticate response", response)        
        toaster.pop('success', '', 'You have successfully signed in with email!');
        $location.path('/portfolio/dashboard');
      })
      .catch(function(error) {
          toaster.error(error.data.message, error.status);
        });
    };



  }]);