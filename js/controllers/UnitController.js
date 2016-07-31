app.controller('UnitController', ['$scope', 'unitService', '$routeParams', function($scope, unitService, $routeParams) {

    $scope.title = 'My Unit';

    unitService.getUnit($routeParams.id, function(data) { // retrieve the id from the URL
        angular.extend($scope, data);
    });

}]);
