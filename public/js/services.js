'use strict';

/* Services */

var expServices = angular.module('expServices', []);

expServices.factory('Excerpt', ['$resource', '$log', function($resource, $log) {

    var excerpt = $resource('/api/excerpts/:excerpt_id');
    return excerpt;
}]);

expServices.factory('Participant', function() {
    var participant = {
        first_name : "",
        last_name : "",
        mturk_id : "",
        excerpts : {
            excerpt1_id : '',
            analysis1 : '',
            ratings1 : [],
            excerpt2_id : '',
            analysis2 : '',
            ratings2 : [],
            excerpt3_id : '',
            analysis3 : '',
            ratings3 : []
        },
        internet : false,
        recognition : false,
        comments : '',
        code : ''
    };

    return participant;
});

expServices.factory('Go', ['$location', function($location) {
    return {
        go : function(path) {
            return $location.path(path); 
        }
    };
}]);



