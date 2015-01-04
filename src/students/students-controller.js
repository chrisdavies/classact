app.module('appStudents')
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/students', {
      templateUrl: 'students/students.html',
      controller: 'StudentsCtrl',
      resolve: {
        usernames: ['StudentsStore', function (StudentsStore) {
          return StudentsStore.loadUsernames();
        }]
      }
    });
  }])
  .controller('StudentsCtrl', ['$scope', '$log', 'StudentsStore', 'Students', 'usernames',
    function ($scope, $log, StudentsStore, Students, usernames) {
      $scope.studentInfo = {
        usernames: usernames
      };

      $scope.students = [];

      $scope.$watch('studentInfo.usernames', function () {
        return Students.query({ usernames: $scope.studentInfo.usernames }).then(function (students) {
          $scope.students = students;
          return StudentsStore.saveUsernames($scope.studentInfo.usernames);
        });
      }, true);

      $scope.removeStudent = function (student) {
        $scope.studentInfo.usernames = $scope.studentInfo.usernames.filter(function (username) {
          return username !== student.login;
        });
      };
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
