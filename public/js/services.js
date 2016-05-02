'use strict';

/* Services */

var expServices = angular.module('expServices', []);

expServices.factory('Excerpt', ['$resource', '$log', function($resource, $log) {
    return $resource('/api/excerpts',
            {'query': {method: 'GET', params:{excerptId:'excerpts', isArray: false }}}); 
}]);

expServices.factory('Go', ['$location', function($location) {
    return {
        go : function(path) {
            return $location.path(path); 
        }
    };
}]);



