'use strict';
angular.module('Gbuddy')
    .controller('optionsController', ['$location', 'userService',
        function ($location, userService) {

            var vm = this;




            vm.user = userService.get_user();

            vm.est_page = function(){
                $location.path('/onboard/est_spending');                
            }



        }
    ]);