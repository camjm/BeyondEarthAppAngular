// Game Controller, $routeParams and gameService are injected into the controller as a dependency array

app.controller('GameController', ['$scope', 'gameService', '$routeParams', function($scope, gameService, $routeParams) {

    $scope.title = 'My Game';

    // Use the gameService to fetch the data asynchronously and store on the scope
    gameService.success(function(data) {
        //$scope.detail = data.Items[$routeParams.id];
        // retrieve the id from the URL
        $scope.detail = {
            id:  $routeParams.id
        };
    });

}]);
