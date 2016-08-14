app.controller('UnitController', ['$scope', 'unitService', '$routeParams', function($scope, unitService, $routeParams) {

    $scope.title = 'My Unit';

    $scope.content = unitService.getUnit($routeParams.id);

}]);
