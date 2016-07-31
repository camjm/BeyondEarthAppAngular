app.directive('unitInfo', function() {
    return {
        restrict: 'E',
        scope: {
            info: '='
        },
        templateUrl: 'js/directives/unitInfo.html',
        link: function(scope, element, attrs) {

        }
    };
});
