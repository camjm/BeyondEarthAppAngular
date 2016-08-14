app.directive('pageInfo', function() {
    return {
        restrict: 'E',
        scope: {
            info: '='
        },
        templateUrl: 'js/directives/pageInfo.html',
        link: function(scope, element, attrs) {

        }
    };
});
