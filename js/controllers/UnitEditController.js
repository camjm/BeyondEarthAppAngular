app.controller('UnitEditController', ['$scope', 'unitService', '$routeParams', '$location', function($scope, unitService, $routeParams, $location) {

    $scope.title = 'Edit Unit';

    $scope.content = unitService.get({id: $routeParams.id});

    //TODO:
    $scope.technologies = [
        {TechnologyId: 1, Name: 'Habitation'},
        {TechnologyId: 2, Name: 'Chemistry'},
        {TechnologyId: 3, Name: 'Ecology'}
    ];

    $scope.updateUnit = function() {
        $scope.content.$update(function(){
            $location.path('/units/');
        });
    };

}]);
