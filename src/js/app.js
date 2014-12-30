var app = (function () {
  'use strict';

  /* The root angular application and namespace for our app */
  var app = angular.module('app', ['ngRoute']);

  app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
      when('/students', {
        templateUrl: '/ng-views/student-index.html',
        controller: 'StudentIndexCtrl'
      }).
      when('/students/:username', {
        templateUrl: '/ng-views/student-show.html',
        controller: 'StudentShowCtrl'
      }).
      otherwise({
        redirectTo: '/students'
      });
  }]);

  return app;
})();
