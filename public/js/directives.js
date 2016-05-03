'use strict'; 

/* Directives */ 

var expDirectives = angular.module('expDirectives', []);

expDirectives.directive('excerpts', function() {
   return {
       restrict: 'E',
       templateUrl: 'views/excerpts.html'
    }
});

