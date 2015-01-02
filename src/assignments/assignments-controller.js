app.module('appAssignments', [])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/assignments', {
      templateUrl: '/assignments/assignments.html',
      controller: 'AssignmentsCtrl'
    });
  }])
  .controller('AssignmentsCtrl', ['$scope', function ($scope) {
    $scope.message = 'Lots of boilerplate!';
  }]);
