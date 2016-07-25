// Fetches the game data from the server
// Just like directives are a way to make standalone UI components, services are a way to make standalone communication logic

// factory() used to create new services
// app.factory('gameService', ['$http', function($http) {
//
//         return $http.get('http://localhost:52204/api/v1/games?pageNumber=1&pageSize=5').success(function(data) {
//             // add demo data
//             for (var i = 0; i < data.Items.length; i++) {
//                 var game = data.Items[i];
//                 game.cityCount = 12;
//                 game.technologyCount = 11;
//                 game.affinities = {
//                     purity: 2,
//                     supremacy: 3,
//                     harmony: 7
//                 }
//             }
//             return data;
//         }).error(function(err) {
//             return err;
//         });
//
// }]);

app.factory('gameService', ['$resource', function($resource) {

  return $resource('http://localhost:52204/api/v1/games?pageNumber=1&pageSize=5');

}]);
