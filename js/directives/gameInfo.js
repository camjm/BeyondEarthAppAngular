//Directives help Readability (expressive HTML that abstract the app's behaviour) and Reusability (self-contained units of functionality to avoid repetition)
// This directive teaches the browser a new, self-contained, interactive HTML element: <game-info>

app.directive('gameInfo', function() {
    return {
        restrict: 'E',    // How the directive will be used in the view: this directive is a new HTML element
        scope: {          // How information will be passed to the directive
            info: '='     // via an attribute named 'info' on the <game-info> element
        },
        templateUrl: 'js/directives/gameInfo.html',   // specifies the HTML to use to display the data
        link: function(scope, element, attrs) {       // used to create interactive directives that respond to user actions
            // scope: the directive's scope ('info' will be a property on this object) and new properties can be added for use in the template
            // element: refers to the directive's HTML element
            // attrs: contains the element's attributes
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
