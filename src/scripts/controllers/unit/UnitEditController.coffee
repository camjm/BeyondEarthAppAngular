angular.module('beyondEarthApp').controller 'UnitEditController', [
  '$scope'
  'unit'
  '$routeParams'
  '$location'
  ($scope, unit, $routeParams, $location) ->

    $scope.title = 'Edit Unit'

    $scope.content = unit

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

    $scope.updateUnit = ->
      $scope.content.$update ->
        $location.path '/units/'
        return
      return

    return
]
