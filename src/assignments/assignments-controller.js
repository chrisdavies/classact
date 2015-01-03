app.module('appAssignments', [])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/assignments', {
      templateUrl: '/assignments/assignments.html',
      controller: 'AssignmentsCtrl',
      resolve: {
        usernames: ['StudentsStore', function (StudentsStore) {
          return StudentsStore.loadUsernames();
        }]
      }
    });
  }])
  .controller('AssignmentsCtrl', ['$scope', 'Students', 'usernames', 'Repos', function ($scope, Students, usernames, Repos) {
    var assignment = $scope.assignment = {
      name: '',
      fetch: fetchAssignment
    };

    function fetchAssignment() {
      Students.query({ usernames: usernames }).then(function (students) {
        $scope.students = students;
        return students;
      }).then(function (students) {
        students.map(function (student) {
          return Repos.get({ username: student.login, repo: assignment.name }).$promise.then(function (repo) {
            student.repo = repo;
            return student;
          });
        });
      });
    }
  }]);
