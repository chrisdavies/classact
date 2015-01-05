app.module('directives').directive('studentProfile', function () {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'shared/student-profile/student-profile.html',
    scope: {
      student: '='
    }
  };
});
