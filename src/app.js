var app = (function () {
  var dependencies = [
    'ngRoute',
    'ngResource'
  ];

  return {
    // Registers an angular module and auto-injects it as a dependency of app
    module: function (name) {
      dependencies.push(name);
      return angular.module(name, []);
    },

    // This should run after all angular modules have been declared
    initialize: function () {
      angular.module('app', dependencies);
    }
  };
})();
