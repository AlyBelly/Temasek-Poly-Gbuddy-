'use strict';
angular.module('Gbuddy')
    .controller('profileController', ['$scope','$rootScope', '$location', 'toaster', 'QiNodeRestService', '$window', 'userService',
        function ($scope,$rootScope, $location, toaster, qiNodeRestService,$window, userService) {

            var vm = this;




            vm.user = userService.get_user();
            var id = $scope.user_id


            vm.update = function () {
                var user = {
                    displayName: vm.user.displayName,
                    email: vm.user.email
                }

                qiNodeRestService.update_profile(id, user, function (err, updated_user_profile) {
                    console.log("Updated:",updated_user_profile)
                    $rootScope.user_diplayName = updated_user_profile.displayName;
                    $rootScope.user_image = updated_user_profile.picture;
                })
            }




        }
    ]);