app.controller('UnitCreateController', ['$scope', 'unitService', '$routeParams', '$location', function($scope, unitService, $routeParams, $location) {

    $scope.title = 'Create Unit';

    $scope.content = new unitService();

    //TODO:
    $scope.technologies = [
        {TechnologyId: 1, Name: 'Habitation'},
        {TechnologyId: 2, Name: 'Chemistry'},
        {TechnologyId: 3, Name: 'Ecology'}
    ];

    $scope.addUnit = function() {
        $scope.content.$save(function(){
            $location.path('/units/');
        });
    };

}]);
