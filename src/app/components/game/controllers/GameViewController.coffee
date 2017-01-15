# Game Controller, $routeParams and Game resource are injected into the controller as a dependency array.
# A controller should not be complex - it should only concern itself with controlling communication between different parts of the app.
angular.module('beyondEarthApp').controller 'GameViewController', [
  '$scope'
  'Game'
  '$routeParams'
  ($scope, Game, $routeParams) ->

    $scope.title = 'My Game'

    # Use the Game resource to fetch the data asynchronously and store on the scope
    Game.getGame $routeParams.id, (data) ->
      # retrieve the id from the URL
      angular.extend $scope, data
      return

    $scope.newTechnology = null
    $scope.newCity = null

    $scope.addTechnology = (technology) ->
      $scope.detail.technologies.push
        Name: technology
        Science: 0
      return

    $scope.removeTechnology = (technology) ->
      $scope.detail.technologies.splice $scope.detail.technologies.indexOf(technology), 1
      return

    $scope.addCity = (city) ->
      $scope.detail.cities.push
        Name: city
        Population: 0
      return

    $scope.removeCity = (city) ->
      $scope.detail.cities.splice $scope.detail.cities.indexOf(city), 1
      return

    return
]
