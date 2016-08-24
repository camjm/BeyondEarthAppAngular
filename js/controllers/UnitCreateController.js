app.controller('UnitCreateController', ['$scope', 'unitService', '$routeParams', '$location', function($scope, unitService, $routeParams, $location) {

    $scope.title = 'Create Unit';

    $scope.content = new unitService();

    $scope.addUnit = function() {
        $scope.content.$save(function(){
            $location.path('/units/');
        });
    };

}]);
