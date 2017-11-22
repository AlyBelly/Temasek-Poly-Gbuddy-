(function () {
  'use strict';

  angular
    .module('Gbuddy')
    .config(routerConfig)
    .run(function ($rootScope, $state) {
      $rootScope.$state = $state;
    });


  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    /**
     * Helper auth functions
     */
    var skipIfLoggedIn = ['$q', '$auth', function ($q, $auth) {
      var deferred = $q.defer();
      if ($auth.isAuthenticated()) {
        deferred.reject();
      } else {
        deferred.resolve();
      }
      return deferred.promise;
    }];

    var loginRequired = ['$q', '$location', '$auth', function ($q, $location, $auth) {
      var deferred = $q.defer();
      if ($auth.isAuthenticated()) {
        deferred.resolve();
      } else {
        $location.path('/login/signin');
      }
      return deferred.promise;
    }];


    //----------------//
    //  JH Portfolio  //
    //----------------// 
    $stateProvider
      .state('login', {
        abstract: true,
        url: "/login",
        templateUrl: "app/components/common/auth_content.html"
      })
      .state('login.home', {
        url: "/home",
        templateUrl: "app/login/login.html",
        data: {
          pageTitle: 'login view'
        },
        resolve: {
          skipIfLoggedIn: skipIfLoggedIn
        }
      })
      .state('login.signup', {
        url: "/signup",
        templateUrl: "app/login/signup.html",
        data: {
          pageTitle: 'signup view'
        },
        resolve: {
          skipIfLoggedIn: skipIfLoggedIn
        }
      })
      .state('login.signin', {
        url: "/signin",
        templateUrl: "app/login/signin.html",
        data: {
          pageTitle: 'signin view'
        },
        resolve: {
          skipIfLoggedIn: skipIfLoggedIn
        }
      })
      .state('login.acc_success', {
        url: "/account_success",
        templateUrl: "app/login/login_acc_success.html",
        data: {
          pageTitle: 'login view'
        },
        resolve: {
          skipIfLoggedIn: skipIfLoggedIn
        }
      })
      .state('login.forgot', {
        url: "/forgot",
        templateUrl: "app/login/forgot.html",
        data: {
          pageTitle: 'forgot view'
        },
        resolve: {
          skipIfLoggedIn: skipIfLoggedIn
        }
      })
      .state('login.options', {
        url: "/options",
        templateUrl: "app/login/options.html",
        data: {
          pageTitle: 'options view'
        },
        resolve: {
          skipIfLoggedIn: skipIfLoggedIn
        }
      })
      .state('login.monthlyallowance', {
        url: "/monthlyallowance",
        templateUrl: "app/login/monthlyallowance.html",
        data: {
          pageTitle: 'monthly allowance view'
        },
        resolve: {
          skipIfLoggedIn: skipIfLoggedIn
        }
      })
      .state('login.est_spending', {
        url: "/est_spending",
        templateUrl: "app/login/est_spending.html",
        data: {
          pageTitle: 'est_spending view'
        },
        resolve: {
          skipIfLoggedIn: skipIfLoggedIn
        }
      })









      //---------------------//
      // Jia Zhe Profile //
      //-------------------//  

      .state('profile', {
        abstract: true,
        url: "/profile",
        templateUrl: "app/components/common/content.html"
      })
      .state('profile.main', {
        url: "/main",
        templateUrl: "app/profile/profile.html",
        data: {
          pageTitle: 'Profile'
        },
        resolve: {
          loginRequired: loginRequired
        }
      })

      .state('daily', {
        abstract: true,
        url: "/daily",
        templateUrl: "app/components/common/content.html"
      })
      .state('daily.main', {
        url: "/main",
        templateUrl: "app/daily/daily.html",
        data: { pageTitle: 'Daily' },
        resolve: {
          loginRequired: loginRequired
        }

      })

      .state('progresschart', {
        abstract: true,
        url: "/progresschart",
        templateUrl: "app/components/common/content.html"
      })
      .state('progresschart.main', {
        url: "/main",
        templateUrl: "app/progresschart/progresschart.html",
        data: { pageTitle: 'Progress Chart' },
        resolve: {
          loginRequired: loginRequired
        }

      })


      .state('instructions', {
        abstract: true,
        url: "/instructions",
        templateUrl: "app/components/common/content.html"
      })
      .state('instructions.main', {
        url: "/main",
        templateUrl: "app/instructions/instructions.html",
        data: { pageTitle: 'instructions' },
        resolve: {
          loginRequired: loginRequired
        }

      })

      .state('user_profile', {
        abstract: true,
        url: "/user_profile",
        templateUrl: "app/components/common/content.html"
      })
      .state('user_profile.main', {
        url: "/main",
        templateUrl: "app/user_profile/user_profile.html",
        data: { pageTitle: 'user_profile' },
        resolve: {
          loginRequired: loginRequired
        }

      })

      //---------------------//
      //  Jia Zhe Chatbox   //
      //-------------------//


      .state('about', {
        abstract: true,
        url: "/about",
        templateUrl: "app/components/common/auth_content.html"
      })
      .state('about.main', {
        url: "/main",
        templateUrl: "app/about/about.html",
        data: {
          pageTitle: 'about'
        },

      })


      .state('homepage', {
        abstract: true,
        url: "/homepage",
        templateUrl: "app/components/common/auth_content.html"
      })
      .state('homepage.main', {
        url: "/main",
        templateUrl: "app/homepage/homepage.html",
        data: {
          pageTitle: 'homepage'
        },

      });





    $urlRouterProvider.otherwise('/homepage/main');
  }

})();