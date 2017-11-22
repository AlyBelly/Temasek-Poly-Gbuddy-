'use strict';
angular.module('Gbuddy').factory('userService', ['$http', '$location',
    function ($http, $location) {

        var vm = this;
        vm.user = '';

        function set_user(user){
            vm.user = user;
            console.log("set user",vm.user);
        }

        function get_user(){
            console.log("return user",vm.user); 
            return vm.user;
        }


        return {
            set_user: set_user,
            get_user: get_user
        }
    }
]);