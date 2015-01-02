app.module('foo').factory('LocalStore', ['$q', function($q) {

  var store = {
    save: function (key, value) {
      return $q(function(resolve, reject) {
        try {
          localStorage.setItem(key, JSON.stringify(value));
          resolve(value);
        } catch (ex) {
          reject(ex);
        }
      });
    },

    load: function (key) {
      return $q(function (resolve, reject) {
        try {
          var value = JSON.parse(localStorage.getItem(key));
          value ? resolve(value) : reject(key);
        } catch (ex) {
          reject(ex);
        }
      });
    }
  };

  return store;

}]);
