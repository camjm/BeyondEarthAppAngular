// Game Controller, $routeParams and gameService are injected into the controller as a dependency array.
// A controller should not be complex - it should only concern itself with controlling communication between different parts of the app.

app.controller('GameController', ['$scope', 'gameService', '$routeParams', function($scope, gameService, $routeParams) {

    $scope.title = 'My Game';

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

    // Use the gameService to fetch the data asynchronously and store on the scope
    gameService.success(function(data) {
        //$scope.detail = data.Items[$routeParams.id];
        // retrieve the id from the URL
        $scope.detail = {
            id:  $routeParams.id,
            technologies: [{
                Name: 'Cam',
                Science: 1020
            }, {
                Name: 'Beta',
                Science: 1200
            }, {
                Name: 'Test',
                Science: 860
            }],
            cities: [{
                Name: 'London',
                Size: 12,
            }, {
                Name: 'Auckland',
                Size: 6,
            }, {
                Name: 'Madrid',
                Size: 2,
            }]
        };


    });

}]);
