app.module('services').factory('Repos', ['$resource', '$q', function($resource, $q) {
  var service = $resource('https://api.github.com/repos/:username/:repo');

  return {
    // Gets a repo
    // spec should have username and repo properties
    get: function (spec) {
      return service.get(spec).$promise.then(function (repo) {
        return {
          hasPages: repo.has_pages,
          htmlUrl: repo.html_url,
          ghPagesUrl: 'http://' + spec.username + '.github.io/' + spec.repo
        };
      });
    }
  };
}]);
