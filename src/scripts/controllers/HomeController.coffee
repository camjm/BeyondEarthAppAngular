# A controller manages the app's data.
angular.module('beyondEarthApp').controller 'HomeController', [
  '$scope'
  'gameService'
  ($scope, gameService) ->

    $scope.title = 'My Saved Games'

    gameService.getGames (data) ->
      angular.extend $scope, data
      return

    return
]
