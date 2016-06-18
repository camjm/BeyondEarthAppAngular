// A controller manages the app's data.

app.controller('MainController', ['$scope','gameService', function($scope, gameService) {   // gameService is a dependency to the controller

    $scope.title = 'My Saved Games';

    // Use the gameService to fetch the data asynchronously and store on the scope
    gameService.success(function(data) {
        $scope.games = data.Items;
    });

}]);
