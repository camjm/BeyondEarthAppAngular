# A controller manages the app's data.
app.controller 'HomeController', [
  '$scope'
  'gameService'
  ($scope, gameService) ->

    $scope.title = 'My Saved Games'

    gameService.getGames (data) ->
      angular.extend $scope, data
      return

    return
]
