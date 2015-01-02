app.module('appStudents', [])
  .config(['$routeProvider', function($routeProvider) {

    var routeDefinition = {
      templateUrl: '/students/students.html',
      controller: 'StudentsCtrl',
      resolve: {
        students: ['Students', function (Students) {
          return Students.query();
        }]
      }
    };

    $routeProvider.when('/', routeDefinition);
    $routeProvider.when('/students', routeDefinition);
  }])
  .controller('StudentsCtrl', ['$scope', 'students', function ($scope, students) {
    $scope.students = students;
  }]);
