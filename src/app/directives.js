'use strict';

//Directive used to set metisMenu and minimalize button
angular.module('Gbuddy')
    .directive('sideNavigation', function ($timeout) {
        return {
            restrict: 'A',
            link: function (scope, element) {
                // Call metsi to build when user signup
                scope.$watch('authentication.user', function () {
                    $timeout(function () {
                        element.metisMenu();
                    });
                });

            }
        };
    })
    .directive('minimalizaSidebar', function ($timeout) {
        return {
            restrict: 'A',
            template: '<a class="navbar-minimalize minimalize-styl-2 btn btn-primary " href="" ng-click="minimalize()"><i class="fa fa-bars"></i></a>',
            controller: function ($scope) {
                $scope.minimalize = function () {
                    angular.element('body').toggleClass('sidebar-mini');
                    if (!angular.element('body').hasClass('sidebar-mini') || angular.element('body').hasClass('body-small')) {
                        // Hide menu in order to smoothly turn on when maximize menu
                        angular.element('#side-menu').hide();
                        // For smoothly turn on menu
                        $timeout(function () {
                            angular.element('#side-menu').fadeIn(400);
                        }, 200);
                    } else {
                        // Remove all inline style from jquery fadeIn function to reset menu state
                        angular.element('#side-menu').removeAttr('style');
                    }
                };
            }
        };
    })

    .directive('ionRangeSlider',
    function ionRangeSlider() {
        return {
            restrict: 'A',
            scope: {
                model: '=ngModel',
                apply: '=apply',
                rangeOptions: '=',
                saveInstance: '=',
                idxInstance: '='
            },
            link: function ($scope, elem, attrs) {
                elem.ionRangeSlider($scope.rangeOptions);
                $scope.saveInstance($(elem).data("ionRangeSlider"), $scope.idxInstance);
                scope.$watch('model', function () {
                    elem.ionRangeSlider(scope.rangeOptions);
                    //console.log("save_instance" + $(elem).data("ionRangeSlider"));

                })
            }
        }
    })
    // .directive('signInWithGithubButton', function () {
    //     return {
    //         restrict: "E",
    //         // templateUrl: 'components/login/sign-in-with-github-button.html',
    //         controller: function ($scope, $auth, $location, ngNotify) {
    //             $scope.authenticate = function () {
    //                 $auth.authenticate('github')
    //                     .then(function (response) {
    //                         $location.path('/');
    //                     })
    //                     .catch(function (response) {
    //                         ngNotify.set('Authentication failed.', {
    //                             type: 'error',
    //                             sticky: true,
    //                             button: true,
    //                         });
    //                     });
    //             };
    //         }
    //     };

    // })
    ;


