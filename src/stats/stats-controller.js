app.module('appStats')
  .config(['$routeProvider', function($routeProvider) {
    var routeDefinition = {
      templateUrl: 'stats/stats.html',
      controller: 'StatsCtrl',
      resolve: {
        students: ['StudentsStore', 'Students', '$log', '$q', function (StudentsStore, Students, $log, $q) {
          return StudentsStore.loadUsernames().then(function (usernames) {
            return Students.query({ usernames: usernames });
          }).then(function (students) {
            return $q.all(students.map(function (student) {
              return Students.events(student).then(function (events) {
                student.events = events;
                student.latestEvent = events.length ? events[0] : undefined;
                return student;
              }).catch(function (err) {
                $log.log(err);
                return student;
              });
            }));
          });
        }]
      }
    };

    $routeProvider.when('/', routeDefinition);
    $routeProvider.when('/stats', routeDefinition);
  }])
  .controller('StatsCtrl', ['$scope', 'students',
    function ($scope, students) {
      $scope.studentInfo = {
        students: students
      };
    }]);
