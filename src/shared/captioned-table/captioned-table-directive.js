app.module('directives').directive('captionedTable', function () {
  return {
    restrict: 'E',
    transclude: true,
    replace: true,
    scope: {
      cols: '='
    },
    template: '<ul class="captioned-table"><li class="captioned-table-header-row"><span class="captioned-table-header-cell" ng-repeat="col in cols">{{col}}</span></li></ul>',

    // Custom transclude which appends to the end of the ul, rather than replacing
    // its contents
    compile: function compile(tElement, tAttrs, transclude) {
      return function(scope) {
        transclude(scope.$parent, function(clone) {
          tElement.append(clone);
        });
      }
    }
  };
});
