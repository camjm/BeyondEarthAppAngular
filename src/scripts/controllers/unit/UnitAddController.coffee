angular.module('beyondEarthApp').controller 'UnitAddController', [
  '$scope'
  'Unit'
  '$routeParams'
  '$location'
  ($scope, Unit, $routeParams, $location) ->

    $scope.title = 'Create Unit'

    $scope.content = new Unit

    #TODO:
    $scope.technologies = [
      {
        TechnologyId: 1
        Name: 'Habitation'
      }
      {
        TechnologyId: 2
        Name: 'Chemistry'
      }
      {
        TechnologyId: 3
        Name: 'Ecology'
      }
    ]

    $scope.addUnit = ->
      $scope.content.$save ->
        $location.path '/units/'
        return
      return

    return
]
