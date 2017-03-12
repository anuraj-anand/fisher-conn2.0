// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic','countrySelect', 'starter.controllers', 'starter.services','jett.ionic.filter.bar','ionic-ratings'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function( $stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js

/*  $httpProvider.defaults.withCredentials = true;
  $httpProvider.defaults.headers.common["X-CSRF-Token"] = $("meta[name=csrf-token]").attr("content");
*/

    $stateProvider

   
  .state('login', {
      url: '/',
      templateUrl: 'templates/login.html',
      controller: 'LoginCtrl'
  })


  .state('home', {
      url: '#home',
      templateUrl: 'templates/home.html',
      controller: 'LoginCtrl'
  })

   .state('setting', {
      url: '#setting',
      templateUrl: 'templates/setting.html',
      controller: 'LoginCtrl'
  })

  .state('signup', {
      url: '#signup',
      templateUrl: 'templates/signup.html',
      controller: 'LoginCtrl'
  })


.state('cart', {
      url: '/cart',
      templateUrl: 'templates/cart.html',
      controller: 'LoginCtrl'
  })


 .state('forgot', {
      url: '#',
      templateUrl: 'templates/forgot.html',
      controller: 'LoginCtrl'
  })

  // if none of the above states are matched, use this as the fallback

  $urlRouterProvider.otherwise('/');

});