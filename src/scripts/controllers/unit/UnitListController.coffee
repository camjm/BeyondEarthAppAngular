angular.module('beyondEarthApp').controller 'UnitListController', [
  '$scope'
  'Unit'
  ($scope, Unit) ->

    $scope.title = 'Units'
    $scope.content = Unit.query()

    $scope.onFilterChanged = (filter) ->
      # Don't care about any pending request.
      $scope.content.$cancelRequest()
      # Query again with new filter.
      $scope.content = Unit.query(filter)
      return

    return
]
