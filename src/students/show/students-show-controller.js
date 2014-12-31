app.controller('StudentsShowCtrl', ['$scope', '$routeParams', 'Students',
  function ($scope, $routeParams, Students) {
    'use strict';

    $scope.username = $routeParams.username;

    $scope.student = Students.get($routeParams);

  }]);
