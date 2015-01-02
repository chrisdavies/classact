app.module('appStudentsShow', [])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/students/:username', {
        templateUrl: '/students/show/students-show.html',
        controller: 'StudentsShowCtrl',
        resolve: {
          student: ['Students', '$route', function (Students, $route) {
            return Students.get($route.current.params);
          }]
        }
      });
    }])
  .controller('StudentsShowCtrl', ['$scope', 'student',
    function ($scope, student) {
      $scope.student = student;
    }]);
