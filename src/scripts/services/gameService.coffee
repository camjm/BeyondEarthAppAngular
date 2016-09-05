# Fetches the game data from the server
# Just like directives are a way to make standalone UI components, services are a way to make standalone communication logic
# factory() used to create new services
# app.factory('gameService', ['$http', function($http) {
#
#         return $http.get('http://localhost:52204/api/v1/games?pageNumber=1&pageSize=5').success(function(data) {
#             // add demo data
#             for (var i = 0; i < data.Items.length; i++) {
#                 var game = data.Items[i];
#                 game.cityCount = 12;
#                 game.technologyCount = 11;
#                 game.affinities = {
#                     purity: 2,
#                     supremacy: 3,
#                     harmony: 7
#                 }
#             }
#             return data;
#         }).error(function(err) {
#             return err;
#         });
#
# }]);
app.factory 'gameService', [
  '$resource'
  ($resource) ->
    # $resource simple and clean way of interacting with RESTful API
    # wrapper around (abstracts) $http
    # reduces code bloat: Contoller doesn't need to manually call $http for every HTTP method
    # don't need to manage promises, etc
    # Defaults
    # { 'get':    {method:'GET'},
    #   'save':   {method:'POST'},
    #   'query':  {method:'GET', isArray:true},
    #   'remove': {method:'DELETE'},
    #   'delete': {method:'DELETE'} };
    gameResource = $resource('http://localhost:52204/api/v1/games/:id', { id: '@gameId' },
      query: method: 'GET'
      update: method: 'PUT')
    return {
      getGames: (callback) ->
        gameResource.query().$promise.then callback
        return
      getGame: (gameId, callback) ->
        callback.call this,
          id: gameId
          technologies: [
            {
              Name: 'Cam'
              Science: 1020
            }
            {
              Name: 'Beta'
              Science: 1200
            }
            {
              Name: 'Test'
              Science: 860
            }
          ]
          cities: [
            {
              Name: 'London'
              Size: 12
            }
            {
              Name: 'Auckland'
              Size: 6
            }
            {
              Name: 'Madrid'
              Size: 2
            }
          ]
        return

    }
    # return the game resource
    gameResource
]
# Examples
# $scope.games = gameService.query();                      - GET call
# $scope.game = gameService.get({gameId: 1});              - GET call
# gameService.save({name: 'Test Game'});                   - POST call
# gameService.update({gameId: 1}, {name: 'Test Game'});    - PUT call
# (goes in the request URL)^         ^(goes in the request body)
# How to handle the query string? - do more research
# gameService.query({pageNumber: 1, pageSize: 5}); -> URL: http://localhost:52204/api/v1/games?pageNumber=1&pageSize=5
# Use resource as a promise:
# var query = gameService.query();
# query.$promise.then(function(data) {
#  $scope.games = data;
# });
