angular.module('beyondEarthApp').controller 'UnitViewController', [
  '$scope'
  'Unit'
  '$routeParams'
  '$location'
  ($scope, Unit, $routeParams, $location) ->

    # getUnit() instantly returns an empty object that can be added to the scope. You don't need to worry about a callback
    # because when the data arrives from the server, the object will be populated and the data binding will update the view automatically.
    $scope.content = Unit.get(id: $routeParams.id)

    $scope.deleteUnit = ->
      $scope.content.$delete ->
        $location.path '/units/'
        return
      return

    return
]
