app.controller 'UnitsController', [
  '$scope'
  'unitService'
  ($scope, unitService) ->

    $scope.title = 'Units'
    $scope.content = unitService.query()

    return
]
