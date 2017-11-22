'use strict';
angular.module('Gbuddy')
  .controller('loginController', ['$rootScope','$scope', '$auth', '$location', 'toaster', 'QiNodeRestService', 'userService',
  function ($rootScope,$scope, $auth, $location, toaster, qiNodeRestService, userService) {

    var vm = this;

    vm.verification_email_sent = false; 
    vm.client = ""
    vm.loginProfile = {
      email: '',
      password: '',
      cpassword: ''
    };

    function trim_loginProfile(){
      vm.loginProfile.email = vm.loginProfile.email.trim();
      vm.loginProfile.password = vm.loginProfile.password.trim();
    }

    vm.authenticate = function (provider) {
      $auth.authenticate(provider).then(function (response) {
        vm.temp = $auth.getPayload();
        console.log("payload", vm.temp.sub);
        console.log("authenticate response", response)
        console.log("provider", provider);
        toaster.pop('success', '', 'You have successfully signed in with ' + provider + '!');
        qiNodeRestService.get_profile(vm.temp.sub,function(err, user){
          $rootScope.user_displayName = user[0].displayName;
          $rootScope.user_email = user[0].email;
          $rootScope.user_image = user[0].picture; 
          $rootScope.user_id = vm.temp.sub;
          userService.set_user(user[0]);
        })
        $location.path('/profile/main');
      });
    };

    vm.email_login = function () {
      trim_loginProfile();
      var v_loginProfile = {
        username: vm.loginProfile.email,
        password: vm.loginProfile.password
      }

      $auth.login(v_loginProfile).then(function (response) {
        console.log("authenticate response", response)        
        toaster.pop('success', '', 'You have successfully signed in with email!');
        $location.path('/profile/main');
      })
      .catch(function(error) {
          toaster.error(error.data.message, error.status);
        });
    };

    vm.email_signup = function(){
      trim_loginProfile();
      var v_loginProfile = {
        username: vm.loginProfile.email,
        password: vm.loginProfile.password
      }
      qiNodeRestService.email_signup(v_loginProfile, 
      function(){
        vm.verification_email_sent = true;
        toaster.success('Account create successful, please check your mailbox.');
      }, function(error){
        if(error.code == 1001){
          vm.verification_email_sent = true;
        }
        toaster.error(error.error_user_msg);
      });
    }

    vm.resend = function(){
      trim_loginProfile();
      qiNodeRestService.email_signup_resend(vm.loginProfile.email, 
      function(){
        vm.verification_email_sent = true;
        toaster.success('Verification email resent, please check your mailbox.');
      }, function(error){        
        toaster.error(error.error_user_msg);
      });    
    }


    // $auth.login(user)
    //   .then(function(response) {
    //     console.log('auth.login response', response)
    //     // Redirect user here after a successful log in.
    //   })
    //   .catch(function(response) {
    //     // Handle errors here, such as displaying a notification
    //     // for invalid email and/or password.
    //   });


  }]);