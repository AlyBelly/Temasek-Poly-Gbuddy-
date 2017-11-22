(function () {
  'use strict';

  angular.module('Gbuddy')
    .config(function ($authProvider) {

      $authProvider.httpInterceptor = function () {
          return true;
        },

        $authProvider.baseUrl = 'http://localhost:3443/';
      $authProvider.loginUrl = '/auth/login';
      $authProvider.signupUrl = '/auth/signup';
      $authProvider.unlinkUrl = '/auth/unlink/';
      $authProvider.tokenName = 'token';
      $authProvider.tokenPrefix = 'satellizer';
      $authProvider.tokenHeader = 'Authorization';
      $authProvider.tokenType = 'Bearer';
      $authProvider.storageType = 'localStorage';

      /**
       *  Satellizer config
       */
      $authProvider.facebook({
        name: 'facebook',
        url: '/auth/facebook',
        authorizationEndpoint: 'https://www.facebook.com/v2.5/dialog/oauth',
        redirectUri: window.location.origin + '/',
        requiredUrlParams: ['display', 'scope'],
        scope: ['email','public_profile'],
        scopeDelimiter: ',',
        display: 'popup',
        oauthType: '2.0',
        popupOptions: { width: 580, height: 400 },
        clientId: '486070861769296'
      });

      $authProvider.google({
        url: '/auth/google',
        authorizationEndpoint: 'https://accounts.google.com/o/oauth2/auth',
        redirectUri: window.location.origin,
        requiredUrlParams: ['scope'],
        optionalUrlParams: ['display'],
        scope: ['profile', 'email',],
        scopePrefix: 'openid',
        scopeDelimiter: ' ',
        display: 'popup',
        oauthType: '2.0',
        popupOptions: {
          width: 452,
          height: 633
        },
        clientId: '982937479502-s0jrlkqnbh0bmt7i2suico64qj9sag53.apps.googleusercontent.com'

      });

      $authProvider.github({
        clientId: '91fbe5c960d5373b91d2'
      });

      // $authProvider.linkedin({
      //   clientId: 'YOUR_LINKEDIN_CLIENT_ID'
      // });

      // $authProvider.instagram({
      //   clientId: 'd177af20c46a426598a20f536f0ebbcf'
      // });

      // $authProvider.yahoo({
      //   clientId: 'YOUR_YAHOO_CLIENT_ID'
      // });

      // $authProvider.live({
      //   clientId: 'YOUR_MICROSOFT_CLIENT_ID'
      // });

      // $authProvider.twitch({
      //   clientId: 'YOUR_TWITCH_CLIENT_ID'
      // });

      // $authProvider.bitbucket({
      //   clientId: 'YOUR_BITBUCKET_CLIENT_ID'
      // });

      // $authProvider.spotify({
      //   clientId: 'YOUR_SPOTIFY_CLIENT_ID'
      // });

      // $authProvider.twitter({
      //   url: '/auth/twitter'
      // });

      // $authProvider.oauth2({
      //   name: 'foursquare',
      //   url: '/auth/foursquare',
      //   clientId: 'MTCEJ3NGW2PNNB31WOSBFDSAD4MTHYVAZ1UKIULXZ2CVFC2K',
      //   redirectUri: window.location.origin || window.location.protocol + '//' + window.location.host,
      //   authorizationEndpoint: 'https://foursquare.com/oauth2/authenticate'
      // });



      // Generic OAuth 2.0
      $authProvider.oauth2({
        name: null,
        url: null,
        clientId: null,
        redirectUri: null,
        authorizationEndpoint: null,
        defaultUrlParams: ['response_type', 'client_id', 'redirect_uri'],
        requiredUrlParams: null,
        optionalUrlParams: null,
        scope: null,
        scopePrefix: null,
        scopeDelimiter: null,
        state: null,
        oauthType: null,
        popupOptions: null,
        responseType: 'code',
        responseParams: {
          code: 'code',
          clientId: 'clientId',
          redirectUri: 'redirectUri'
        }
      });


    });

})();