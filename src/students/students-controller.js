app.controller('StudentsCtrl', ['$scope', 'Students', function ($scope, Students) {
  'use strict';

  $scope.students = Students.query();
}]);
