app.controller('StudentShowCtrl', ['$scope', '$routeParams',
  function ($scope, $routeParams) {
    'use strict';

    $scope.username = $routeParams.username;
  }]);
