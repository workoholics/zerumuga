// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('zerumuga', ['ionic'])

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

app.config(['$stateProvider','$urlRouterProvider', function($stateProvider ,$urlRouterProvider){

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home',{
      url: '/',
      templateUrl: 'views/home.html',
      controller: 'homeCtrl'
    })
    .state('about',{
      url: '/about',
      templateUrl: 'views/about.html'
    })
    .state('credits',{
      url: '/credits',
      templateUrl: 'views/credits.html'
    })
    .state('experience',{
      url: '/experience/:id',
      templateUrl: 'views/experience.html',
      controller: 'experienceCtrl'
    })
    .state('mountainMap',{
      url: '/mountain-map/:id',
      templateUrl: 'views/mountainMap.html',
      controller: 'mountainMapCtrl'
    })
    .state('mountain',{
      url: '/mountain/:id',
      templateUrl: 'views/mountain.html',
      controller: 'mountainCtrl'
    });
}]);