'use strict';
angular.module('Gbuddy')
    .controller('estSpendingController', ['$location', 'userService',
        function ($location, userService) {

            var vm = this;




            vm.user = userService.get_user();

            vm.monthlyAllowancePage = function(){
                console.log("hi")
                $location.path('/onboard/monthlyallowance');                
            }



        }
    ]);