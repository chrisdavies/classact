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
  .controller('AssignmentsCtrl', ['$scope', 'Students', 'usernames', 'Repos', '$q', '$log', function ($scope, Students, usernames, Repos, $q, $log) {
    var assignment = $scope.assignment = {
      name: '',
      fetch: fetchAssignment
    };

    function fetchAssignment() {
      Students.query({ usernames: usernames }).then(function (students) {
        $q.all(students.map(function (student) {
          return Repos.get({ username: student.login, repo: assignment.name }).$promise.then(function (repo) {
            student.repo = repo;
            return student;
          }).catch(function (ex) {
            $log.log(ex);
            return student;
          });
        })).then(function (students) {
          $scope.students = students;
        });
      });
    }
  }]);
