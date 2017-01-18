angular.module('beyondEarthApp').config [
  '$routeProvider'
  ($routeProvider) ->
    $routeProvider
      .when '/games/',
        controller: 'GameListController'
        templateUrl: 'app/components/game/views/game-list.html'
      .when '/games/:id/view',
        controller: 'GameViewController'
        templateUrl: 'app/components/game/views/game-view.html'
    return
]
