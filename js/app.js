// Create a new module called 'beyondEarthApp'. A module contains the different components of an AngularJS app.
var app = angular.module("beyondEarthApp", ['ngRoute']);

app.config(['$httpProvider', function($httpProvider){
    $httpProvider.defaults.headers.common['Authorization'] = 'Basic YmhvZ2c6aWdub3JlZA=='
}]);

app.config(function($routeProvider){
    // user $routeProvider to define application routes.
    $routeProvider
        .when('/', {
            controller: 'HomeController',
            templateUrl: 'views/home.html'
        })
        .when('/games/:id', {
            controller: 'GameController',
            templateUrl: 'views/game.html'
        })
        .otherwise({    // if the user visits any other url just redirect to '/'
            redirectTo: '/'
        });
});
