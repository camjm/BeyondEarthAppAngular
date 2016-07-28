// Game Controller, $routeParams and gameService are injected into the controller as a dependency array.
// A controller should not be complex - it should only concern itself with controlling communication between different parts of the app.

app.controller('GameController', ['$scope', 'gameService', '$routeParams', function($scope, gameService, $routeParams) {

    $scope.title = 'My Game';

    // Use the gameService to fetch the data asynchronously and store on the scope
    gameService.getGame($routeParams.id, function(data) { // retrieve the id from the URL
        angular.extend($scope, data);
    });

    $scope.newTechnology = null;
    $scope.newCity = null;

    $scope.addTechnology = function(technology) {
        $scope.detail.technologies.push({
            Name: technology,
            Science: 0
        });
    };

    $scope.removeTechnology = function(technology) {
        $scope.detail.technologies.splice($scope.detail.technologies.indexOf(technology), 1);
    };

    $scope.addCity = function(city) {
        $scope.detail.cities.push({
            Name: city,
            Population: 0
        });
    };

    $scope.removeCity = function(city) {
        $scope.detail.cities.splice($scope.detail.cities.indexOf(city), 1);
    };

}]);
