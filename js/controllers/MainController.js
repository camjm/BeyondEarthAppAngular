// A controller manages the app's data.

app.controller('MainController', ['$scope', function($scope) {
    $scope.title = 'My Saved Games';
    $scope.games = [{
        description: 'My first game',
        faction: 'Polystralia',
        status: 'In Progress',
        startdate: new Date('2014', '03', '08'),
        cityCount: 13,
        technologyCount: 19,
        affinities: {
            purity: 2,
            supremacy: 3,
            harmony: 7
        }
    }, {
        description: 'My best game',
        faction: 'ARC',
        status: 'In Progress',
        startdate: new Date('2013', '08', '01'),
        cityCount: 33,
        technologyCount: 8,
        affinities: {
            purity: 2,
            supremacy: 3,
            harmony: 7
        }
    }, {
        description: 'A very bad game',
        faction: 'Pan Asian Cooperative',
        status: 'In Progress',
        startdate: new Date('2013', '08', '01'),
        cityCount: 6,
        technologyCount: 10,
        affinities: {
            purity: 2,
            supremacy: 3,
            harmony: 7
        }
    }, {
        description: 'I dont know',
        faction: 'Chungsu',
        status: 'In Progress',
        startdate: new Date('2013', '08', '01'),
        cityCount: 12,
        technologyCount: 11,
        affinities: {
            purity: 2,
            supremacy: 3,
            harmony: 7
        }
    }];
}]);
