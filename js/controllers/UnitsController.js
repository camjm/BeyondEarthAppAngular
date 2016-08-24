app.controller('UnitsController', ['$scope', 'unitService', function($scope, unitService){

    $scope.title = 'Units';

    $scope.content = unitService.query();

}]);
