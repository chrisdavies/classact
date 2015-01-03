app.module('services').factory('Students', ['$resource', '$q', function($resource, $q) {
  var service = $resource('https://api.github.com/users/:username');

  // Override query to take a list of users to be fetched
  service.query = function (spec) {
    return $q.all((spec.usernames || []).map(function (username) {
      return service.get({ username: username }).$promise;
    }));
  };

  return service;
}]);
