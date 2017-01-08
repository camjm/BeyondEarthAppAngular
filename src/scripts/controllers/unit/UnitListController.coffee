angular.module('beyondEarthApp').controller 'UnitListController', [
  '$scope'
  'units'
  ($scope, units) ->

    $scope.title = 'Units 2'
    $scope.content = units

    $scope.onFilterChanged = (filter) ->
      # Don't care about any pending request.
      $scope.content.$cancelRequest()
      # Query again with new filter.
      #$scope.content = Unit.query(filter)
      return

    return
]
