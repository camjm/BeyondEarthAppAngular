angular.module('beyondEarthApp').controller 'GameListController', [
  '$scope'
  'Game'
  ($scope, Game) ->

    $scope.title = 'My Saved Games'
    $scope.content = Game.query()

    return
]
