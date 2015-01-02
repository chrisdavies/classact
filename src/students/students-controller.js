app.module('appStudents', [])
  .config(['$routeProvider', function($routeProvider) {

    var routeDefinition = {
      templateUrl: '/students/students.html',
      controller: 'StudentsCtrl',
      resolve: {
        usernames: ['LocalStore', '$log', function (LocalStore, $log) {
          return LocalStore.load('studentInfo.usernames').catch(function (ex) {
            $log.log(ex);
            return [];
          }).then(function (usernames) {
            return usernames;
          });
        }]
      }
    };

    $routeProvider.when('/', routeDefinition);
    $routeProvider.when('/students', routeDefinition);
  }])
  .controller('StudentsCtrl', ['$scope', '$log', 'LocalStore', 'Students', '$q', 'usernames',
    function ($scope, $log, LocalStore, Students, $q, usernames) {
      var usernamesKey = 'studentInfo.usernames';

      $scope.studentInfo = {
        usernames: usernames
      };

      $scope.$watch(usernamesKey, function () {
        return $q.all($scope.studentInfo.usernames.map(function (username) {
          return Students.get({ username: username }).$promise;
        })).then(function (students) {
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
