app.module('services').factory('Students', ['$resource', function($resource) {
  return $resource('https://api.github.com/users/:username');
}]);