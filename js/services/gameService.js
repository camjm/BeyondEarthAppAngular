// Fetches the game data from the server

app.factory('gameService', ['$http', function($http) {

    var data = [{
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

    return {
        success: function(func) {
            if (typeof func == "function") {
                func.call(this, data);
            }
        }
    };

    /*
        return $http.get('http://TODO:').success(function(data) {
            return data;
        }).error(function(err) {
            return err;
        });
        */
}]);
