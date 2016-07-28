// A controller manages the app's data.

app.controller('HomeController', ['$scope', 'gameService', function($scope, gameService) { // gameService is a dependency to the controller

    $scope.title = 'My Saved Games';

    gameService.getGames(function(data) {
        angular.extend($scope, data);
    });

}]);
