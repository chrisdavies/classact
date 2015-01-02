var app = (function () {
  'use strict';

  // The root angular application and namespace for our app
  var app = angular.module('app', ['ngRoute', 'ngResource']);

  app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
      when('/students', {
        templateUrl: '/students/students.html',
        controller: 'StudentsCtrl'
      }).
      when('/students/:username', {
        templateUrl: '/students/show/students-show.html',
        controller: 'StudentsShowCtrl'
      }).
      when('/assignments', {
        templateUrl: '/assignments/assignments.html',
        controller: 'AssignmentsCtrl'
      }).
      otherwise({
        redirectTo: '/students'
      });
  }]);

  return app;
})();
