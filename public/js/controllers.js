'use strict';

/* Controllers */

var expControllers = angular.module('expControllers', []);

expControllers.controller('IntroCtrl', ['$scope', '$location', 'Go', function($scope, $location, Go) {
    $scope.go = function(path) {
        Go.go(path);
    }
    $scope.hello = 'This is the introduction';
}]);

expControllers.controller('ConsentCtrl', ['$scope', '$location', 'Go', function($scope, $location, Go) {
    $scope.hello = 'This is the informed consent form';
    $scope.go = function(path) {
        Go.go(path);
    }
}]);

expControllers.controller('StudyCtrl', ['$scope', '$location', '$log', 'Excerpt', 'Go', function($scope, $location, $log, Excerpt, Go) {
    $scope.hello = 'This is the study';
    var excerpt = Excerpt.query();
    $scope.excerpts = excerpt;
    $scope.go = function(path) {
        Go.go(path);
    }
}]);

expControllers.controller('DebriefCtrl', ['$scope', '$location', 'Go', function($scope, $location, Go) {
    $scope.hello = 'This is the debriefing';
    $scope.go = function(path) {
        Go.go(path);
    }

}]);

expControllers.controller('ExplanationCtrl', ['$scope', '$location', 'Go', function($scope, $location, Go) {
    $scope.hello = 'This is the explanation part of the debriefing';
    $scope.go = function(path) {
        Go.go(path);
    }
}]);

expControllers.controller('CodeCtrl', ['$scope', '$location', 'Go', function($scope, $location, Go) {
    $scope.hello = 'This is the code generator or whatever';
    $scope.go = function(path) {
        Go.go(path);
    }
}]);

