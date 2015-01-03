var app = (function () {
  var registeredModules = {
    'ngRoute': true,
    'ngResource': true
  };

  return {
    // Registers an angular module and auto-injects it as a dependency of app
    module: function (name) {
      // If the module has already been defined, return it
      if (registeredModules[name]) {
        return angular.module(name);
      }

      // Otherwise, define it and return it
      registeredModules[name] = true;
      return angular.module(name, []);
    },

    // This should run after all angular modules have been declared
    initialize: function () {
      angular.module('app', Object.keys(registeredModules))
        .config(function ($routeProvider) {
          $routeProvider.otherwise({
            controller: 'Error404Ctrl',
            templateUrl: '/errors/404/error-404.html'
          });
        });
    }
  };
})();
