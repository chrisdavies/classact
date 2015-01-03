app.module('appStudents', [])
  .config(['$routeProvider', function($routeProvider) {

    var routeDefinition = {
      templateUrl: '/students/students.html',
      controller: 'StudentsCtrl',
      resolve: {
        usernames: ['StudentsStore', function (StudentsStore) {
          return StudentsStore.loadUsernames();
        }]
      }
    };

    $routeProvider.when('/', routeDefinition);
    $routeProvider.when('/students', routeDefinition);
  }])
  .controller('StudentsCtrl', ['$scope', '$log', 'LocalStore', 'Students', 'usernames',
    function ($scope, $log, LocalStore, Students, usernames) {
      var usernamesKey = 'studentInfo.usernames';

      $scope.studentInfo = {
        usernames: usernames
      };

      $scope.$watch(usernamesKey, function () {
        return Students.query({ usernames: $scope.studentInfo.usernames }).then(function (students) {
          $scope.students = students;
          return LocalStore.save(usernamesKey, $scope.studentInfo.usernames);
        });
      }, true);

      $scope.removeStudent = function (student) {
        $scope.studentInfo.usernames = $scope.studentInfo.usernames.filter(function (username) {
          return username !== student.login;
        });
      };

      $scope.students = [];
    }])
  .controller('AddStudentCtrl', ['$scope', 'Students', function ($scope, Stduents) {
    $scope.username = '';

    $scope.addStudent = function () {
      if (!$scope.studentInfo.usernames.some(function (username) {
        return username === $scope.username;
      })) {
        $scope.studentInfo.usernames.push($scope.username);
      }

      $scope.username = '';
      $scope.$emit('username-added');
    };
  }]);
