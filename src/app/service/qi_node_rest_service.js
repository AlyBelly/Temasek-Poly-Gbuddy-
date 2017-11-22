'use strict';

angular.module('Gbuddy').factory('QiNodeRestService', ['$http', '$location',
  function ($http, $location) {


    var port = $location.port();
    if ($location.host() == 'localhost') {
      port = '3443'
    }
    var hostname = $location.host() + ":" + port



    function get_ra_model_portf(v_sp_id, v_portf_id, cb) {
      function ra_modelportf_resp(res) {
        if (res.status == 200) {
          return cb(null, res.data);
        } else {
          return cb('error in get_ra_model_portf', null);
        }
      }

      $http.get('//' + hostname + '/api/appRoute/ra_model_portf/' + v_sp_id + '/' + v_portf_id, {
        cache: true
      }).then(ra_modelportf_resp);
    }

    // sorted by risk level
    function get_ra_model_portfs(v_universe_id, cb) {
      function ra_modelportfs_resp(res) {
        if (res.status == 200) {
          return cb(null, res.data);
        } else {
          return cb('error in get_ra_model_portfs', null);
        }
      }
      $http.get('//' + hostname + '/api/appRoute/model_portf/' + v_universe_id, {
        cache: true
      }).then(ra_modelportfs_resp);
    }
    /* >>> -------------------------- ROBO ADIVOR MODEL PORTF ------------------------- */
    //for drop down
    function get_CountryList(cb) {
      function ra_CountryList_resp(res) {
        if (res.status == 200) {          
          return cb(null, res.data);
        } else {
          return cb('error in getting countries', null);
        }
      }
      //figure out api thing
      $http.get('//' + hostname + '/api/appRoute/countryCollection/', {
        cache: true
      }).then(ra_CountryList_resp);
    }


    var host_qi_node_dev_env = 'qi-node-dev-env.eigencat.co'
    //var host_qi_node_dev_env = 'localhost'
    function get_portf_analytics(param_json, cb) {
      function analytics_response(res) {
        console.log('get_analytics', res.data);
        if (true) {
          return cb(null, res.data);
        } else {
          return cb('error in get_portf_analytics', null);
        }
      };

      $http.post('//' + host_qi_node_dev_env + ':3038' + '/api/get_portf_analytics/', param_json, {
        cache: true
      }).then(analytics_response);
    }

    function get_robodemo_FST(robo_portf_id, num_year, first_amount, contr_amount) {
      return $http.get('//' + host_qi_node_dev_env + ':3038' + '/api/py/robo_FST/' + robo_portf_id + '/' + num_year + '/' + first_amount + '/' + contr_amount, {
        cache: true
      });
    };





    

   

    //----------------------------------------------------//
    // ----------------- Email Sign Up -------------------//
    //----------------------------------------------------//

    

    function email_signup(userprofile, success_cb, err_cb) {
      console.log('dog posted successfully');
      $http.post('//' + hostname + "/api/appRoute/email_signup/send_verification", userprofile).
      then(function(response) {
        console.log(email_signup, "success")
        success_cb()

      }, function (response) {

        console.log(email_signup, "fail", response)
        err_cb(response.data.error);
        //  console.log($scope.data.error.status)

      })
    }

    function email_signup_resend(v_email, success_cb, err_cb) {
      console.log('dog posted successfully');
      $http.post('//' + hostname + "/api/appRoute/email_signup/resend_verification", { 'username': v_email }).
      then(function(response) {       
        success_cb()

      }, function (response) {       
        err_cb(response.data.error);
        //  console.log($scope.data.error.status)

      })
    }

    function login(user, cb) {
      console.log('login posted successfully');
      $http.post('//' + hostname + "/api/authRouter/auth/login", user).then(function (user, status) {
        console.log('login posted successfully');
      })

    }


    //----------------------------------------------------//
    // -----------Get Login user profile info-------------//
    //----------------------------------------------------//

    function get_profile(_id, cb) {
      function get_profile_response(res) {
        if (res.status == 200) {
          console.log("made it", res.data)
          return cb(null, res.data);
        } else {
          return cb('error in get_profile_response', null);
        }
      }

      $http.get('//' + hostname + '/api/appRoute/user/' + _id, {
        cache: true
      }).then(get_profile_response);
    }

    //----------------------------------------------------//
    // -------------Update user profile info--------------//
    //----------------------------------------------------//
     function update_profile(_id, user_json, cb) {
      function update_profile_response(res) {
        if (res.status == 200) {
          return cb(null, res.data);
        } else {
          return cb('error in update_user_response', null);
        }
      }

      $http.put('//' + hostname + '/api/appRoute/user/' + _id, user_json, {
        cache: false
      }).then(update_profile_response);
    }



    return {

      get_ra_model_portf: get_ra_model_portf,
      get_ra_model_portfs: get_ra_model_portfs,
      get_CountryList: get_CountryList,
      get_portf_analytics: get_portf_analytics,
      get_robodemo_FST: get_robodemo_FST,




      email_signup: email_signup,
      email_signup_resend: email_signup_resend,
      login: login,


      get_profile: get_profile,
      update_profile: update_profile



    }
  }
]);
