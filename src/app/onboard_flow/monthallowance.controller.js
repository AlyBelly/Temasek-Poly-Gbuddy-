'use strict';
angular.module('Gbuddy')
    .controller('monthlyAllowanceController', ['$location', 'userService',
        function ($location, userService) {

            var vm = this;




            vm.user = userService.get_user();

            vm.mainPage = function(){
                $location.path('/profile/main');                
            }



        }
    ]);