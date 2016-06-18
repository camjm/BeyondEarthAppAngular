// Create a new module called 'beyondEarthApp'. A module contains the different components of an AngularJS app.
var app = angular.module("beyondEarthApp", []);

app.config(['$httpProvider', function($httpProvider){
    $httpProvider.defaults.headers.common['Authorization'] = 'Basic YmhvZ2c6aWdub3JlZA=='
}]);
