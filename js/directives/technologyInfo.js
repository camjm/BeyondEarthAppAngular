app.directive('technologyInfo', function() {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            info: '='
        },
        templateUrl: 'js/directives/technologyInfo.html',
        link: function(scope, element, attrs) {

        }
    };
});
