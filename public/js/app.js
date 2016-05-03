'use strict';

// Declare app level module which depends on views, and components
var expApp = angular.module('expApp', [
    'ngRoute',
    'ngResource',
    'expControllers',
    'expDirectives', 
    'expServices',
    'expFilters',
    'ui.bootstrap',
    'ngAnimate'
]);

expApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'views/intro.html',
                controller: 'IntroCtrl'
            }).
            when('/consent', {
                templateUrl: 'views/consent.html',
                controller: 'ConsentCtrl'
            }).
            when('/study', {
                templateUrl: 'views/study.html',
                controller: 'StudyCtrl'
            }).
            when('/debriefing', {
                templateUrl: 'views/debrief.html',
                controller: 'DebriefCtrl'
            }).
            when('/debriefing/explanation', {
                templateUrl: 'views/explanation.html',
                controller: 'ExplanationCtrl'
            }).
            when('/code', {
                templateUrl: 'views/code.html',
                controller: 'CodeCtrl'
            }).
            otherwise({
                redirectTo: '/'
            }); 

    }]);
