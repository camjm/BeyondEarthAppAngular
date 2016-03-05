app.directive('gameInfo', function() {
  return {
    restrict: 'E',
    scope: {
      info: '='
    },
    templateUrl: 'js/directives/gameInfo.html',
    link: function(scope, element, attrs) {
      scope.buttonText = 'Button Text!';
      scope.installed = false;
      scope.download = function() {
        element.toggleClass('btn-active');
        if (scope.installed) {
          scope.buttonText = 'Button Text 2!';
          scope.installed = false;
        } else {
          scope.buttonText = 'Button Text 3!';
          scope.installed = true;
        }
      }
    }
  }
});
