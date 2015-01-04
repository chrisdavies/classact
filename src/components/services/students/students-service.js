app.module('services').factory('Students', ['$resource', '$q', '$log', function($resource, $q, $log) {
  var service = $resource('https://api.github.com/users/:username');

  // Override query to take a list of users to be fetched
  service.query = function (spec) {
    return $q.all((spec.usernames || []).map(function (username) {
      return service.get({ username: username }).$promise.then(function (student) {
        return {
          name: student.name,
          username: student.login,
          htmlUrl: student.html_url,
          avatarUrl: student.avatar_url
        };
      }).catch(function (err) {
        $log.log(err);
        return {
          login: username
        };
      });
    }));
  };

  // Get the events for a student
  service.events = function (spec) {
    return $resource('https://api.github.com/users/:username/events').query(spec).$promise.then(function (events) {
      return events.map(function (event) {
        return {
          createdAt: event.created_at
        };
      });
    });
  };

  return service;
}]);
