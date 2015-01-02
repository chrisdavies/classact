app.module('appErrors')
  .controller('Error404Ctrl', ['$scope', '$location',
    function ($scope, $location) {
      $scope.message = 'Could not find: ' + $location.url();
    }]);
