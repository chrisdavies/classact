app.module('services').factory('StudentsStore', ['LocalStore', '$log', function(LocalStore, $log) {

  var usernamesKey = 'studentInfo.usernames';

  var store = {
    saveUsernames: function (usernames) {
      return LocalStore.save(usernamesKey, usernames);
    },

    loadUsernames: function () {
      return LocalStore.load(usernamesKey).catch(function (ex) {
        $log.log(ex);
        return [];
      });
    }
  };

  return store;

}]);
