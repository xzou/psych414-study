'use strict';

/* Filters */

var expFilters = angular.module('expFilters', []);

expFilters.filter('nlRender', function($filter) {
    return function(data) {
        if (!data) return data;
        return data.replace(/(?:\r\n|\r|\n)/g, '<br />');
    };
});

expFilters.filter('trustHTML', ['$sce', function($sce) {
    return function(text) {
        return $sce.trustAsHtml(text);
    };
}]);
