app.controller 'UnitEditController', [
  '$scope'
  'unitService'
  '$routeParams'
  '$location'
  ($scope, unitService, $routeParams, $location) ->

    $scope.title = 'Edit Unit'

    $scope.content = unitService.get(id: $routeParams.id)

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
