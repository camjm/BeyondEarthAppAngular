app.directive('gameInfo', function() {
    return {
        restrict: 'E',
        scope: {
            info: '='
        },
        templateUrl: 'js/directives/gameInfo.html',
        link: function(scope, element, attrs) {
            scope.incrementCity = function(adjustment) {
                scope.info.cityCount += adjustment;
            };
            scope.incrementTechnology = function(adjustment) {
                scope.info.technologyCount += adjustment;
            };
            scope.incrementPurity = function(adjustment) {
                scope.info.affinities.purity += adjustment;
            };
            scope.incrementSupremacy = function(adjustment) {
                scope.info.affinities.supremacy += adjustment;
            };
            scope.incrementHarmony = function(adjustment) {
                scope.info.affinities.harmony += adjustment;
            };
        }
    }
});
