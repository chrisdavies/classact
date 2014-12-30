app.controller('StudentIndexCtrl', ['$scope', '$http', function ($scope, $http) {
  'use strict';

  $http.get('https://api.github.com/users').success(function (data) {
    $scope.students = data;
  }).error(function () {
    alert('Ruh roh!');
    console.log(arguments);
  });
}]);
