// Game Controller.

app.controller('GameController', ['$scope', 'gameService', '$routeParams', function($scope, gameService, $routeParams) {

    $scope.title = 'My Game';

    // Use the gameService to fetch the data asynchronously and store on the scope
    gameService.success(function(data) {
        //$scope.detail = data.Items[$routeParams.id];
        $scope.detail = $routeParams.id;
    });

}]);
