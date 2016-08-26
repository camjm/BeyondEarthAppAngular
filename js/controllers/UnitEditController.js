app.controller('UnitEditController', ['$scope', 'unitService', '$routeParams', '$location', function($scope, unitService, $routeParams, $location) {

    $scope.title = 'Edit Unit';

    $scope.content = unitService.get({id: $routeParams.id});

    $scope.updateUnit = function() {
        $scope.content.$update(function(){
            $location.path('/units/');
        });
    };

}]);
