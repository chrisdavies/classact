app.controller('MainNavCtrl', ['$scope', '$document', '$location', 'StringUtil',
  function($scope, $document, $location, StringUtil) {
    $document.prop('title', 'TIYGH');

    $scope.isActive = function (path) {
      return StringUtil.startsWith($location.path(), path);
    };
  }]);
