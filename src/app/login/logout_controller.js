angular.module('Gbuddy')
.controller('LogOutController', ['$location', '$auth', 'toaster', function($location, $auth, toaster){

var vm = this;

 vm.logout = function () {
      //if (!$auth.isAuthenticated()) { return; }
      
      $auth.logout().then(function() {
        toaster.info('You have been logged out');
        $location.path('/login/signin');
      })
    }
}]);