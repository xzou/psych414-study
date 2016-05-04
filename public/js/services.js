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

expServices.factory('Excerpts', ['Trial', '$log', function(Trial, $log) {
    var excerpts = {
        excerpt1 : "",
        excerpt2 : "",
        excerpt3 : "",
        id : "",
        condition : ""
    }; 

    Trial.query().$promise.then (function(results) {
        angular.forEach(results, function (result, index) {
            if (0 == index) {
                excerpts.excerpt1 = result.excerpt1;
                excerpts.excerpt2 = result.excerpt2;
                excerpts.excerpt3 = result.excerpt3; 
                excerpts.id = result._id;
                excerpts.condition = result.condition;
            }
        });
    $log.log(excerpts);
    });

    return excerpts;
}]);


expServices.factory('ParticipantFactory', function() {
    var participant = {
        consent : false,
        condition : '',
        mturk_id : '',
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



