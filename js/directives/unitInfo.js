app.directive('unitInfo', function() {
    return {
        restrict: 'A',
        scope: {
            info: '='
        },
        templateUrl: 'js/directives/unitInfo.html',
        link: function(scope, element, attrs) {

        }
    };
});
