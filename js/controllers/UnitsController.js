app.controller('UnitsController', ['$scope', 'unitService', function($scope, unitService){

    $scope.title = 'Units';

    unitService.getUnits(function(data) {
        angular.extend($scope, data);
    });

}]);
