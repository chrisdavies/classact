app.module('appAssignments')
  .config(['$routeProvider', function($routeProvider) {
    var controller = {
      templateUrl: '/assignments/assignments.html',
      controller: 'AssignmentsCtrl',
      resolve: {
        usernames: ['StudentsStore', function (StudentsStore) {
          return StudentsStore.loadUsernames();
        }]
      }
    };

    $routeProvider.when('/assignments/:assignment', controller);
    $routeProvider.when('/assignments', controller);
  }])
  .controller('AssignmentsCtrl', ['$scope', 'Students', 'usernames', 'Repos', '$q', '$log', '$routeParams', '$location', function ($scope, Students, usernames, Repos, $q, $log, $routeParams, $location) {
    var assignment = $scope.assignment = {
      name: $routeParams.assignment || '',
      goto: function () {
        $location.path('/assignments/' + assignment.name);
      }
    };

    assignment.name && loadAssignment();

    function loadAssignment() {
      Students.query({ usernames: usernames }).then(function (students) {
        $q.all(students.map(function (student) {
          return Repos.get({ username: student.username, repo: assignment.name }).then(function (repo) {
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
