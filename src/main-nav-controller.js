app.module('master').controller('MainNavCtrl', ['$scope', '$document', '$location', 'StringUtil',
  function($scope, $document, $location, StringUtil) {
    $document.prop('title', 'TIYGH');

    $scope.isActive = function (path) {
      // The default route is a special case.
      if (path === '/') {
        return $location.path() === '/';
      }

      return StringUtil.startsWith($location.path(), path);
    };
  }]);
