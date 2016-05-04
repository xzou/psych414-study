'use strict';

/* Services */

var expServices = angular.module('expServices', []);

expServices.factory('Excerpt', ['$resource', '$log', function($resource, $log) {

    var excerpt = $resource('/api/excerpts/:excerpt_id');
    return excerpt;
}]);

expServices.factory('Participant', ['$resource', '$log', function($resource, $log) {
    var participant = $resource('/api/participants/:participant_id');
    return participant;
}]);

expServices.factory('Trial', ['$resource', '$log', function($resource, $log) {
    var trial = $resource('/api/trials/:trial_id');
    return trial;
}]);


expServices.factory('ParticipantFactory', function() {
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
        comment : '',
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



