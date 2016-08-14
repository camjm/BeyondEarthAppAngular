app.directive('contentInfo', function() {
    return {
        restrict: 'E',
        transclude: true,
        scope: {
            info: '='
        },
        templateUrl: 'js/directives/contentInfo.html',
        link: function(scope, element, attrs) {

        }
    };
});
