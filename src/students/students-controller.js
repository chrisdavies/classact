app.module('appStudents', [])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/students', {
        templateUrl: '/students/students.html',
        controller: 'StudentsCtrl',
        resolve: {
          students: ['Students', function (Students) {
            return Students.query();
          }]
        }
      });
  }])
  .controller('StudentsCtrl', ['$scope', 'students', function ($scope, students) {
    $scope.students = students;
  }]);
