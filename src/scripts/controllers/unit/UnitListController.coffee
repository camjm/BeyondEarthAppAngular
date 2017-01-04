angular.module('beyondEarthApp').controller 'UnitListController', [
  '$scope'
  'unitService'
  ($scope, unitService) ->

    $scope.title = 'Units'
    $scope.content = unitService.query()

    $scope.onFilterChanged = (filter) ->
      # Don't care about any pending request.
      $scope.content.$cancelRequest()
      # Query again with new filter.
      $scope.content = unitService.query(filter)
      return

    return
]
