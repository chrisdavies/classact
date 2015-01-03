app.module('services').factory('Repos', ['$resource', '$q', function($resource, $q) {
  var service = $resource('https://api.github.com/repos/:username/:repo');

  return {
    // Gets a repo
    // spec should have username and repo properties
    get: function (spec) {
      return {
        $promise: service.get(spec).$promise.then(function (repo) {
          repo.gh_pages_url = 'http://' + spec.username + '.github.io/' + spec.repo;
          return repo;
        })
      };
    }
  };
}]);
