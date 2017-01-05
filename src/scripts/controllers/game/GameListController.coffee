angular.module('beyondEarthApp').controller 'GameListController', [
  '$scope'
  'gameService'
  ($scope, gameService) ->

    $scope.title = 'My Saved Games'
    $scope.content = gameService.query()

    return
]
