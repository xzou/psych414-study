'use strict';

/* Controllers */

var expControllers = angular.module('expControllers', []);

expControllers.controller('IntroCtrl', ['$scope', '$location', '$log', 'Go', 'Participant', function($scope, $location, $log, Go, Participant) {
    $scope.hello = 'This is the introduction';
    $scope.mturk_id = '';
    $scope.$watch('mturk_id', function(newValue, oldValue) {
        Participant.mturk_id = newValue;
    });
    
    $scope.go = function(path) {
        Go.go(path);
    }
}]);

expControllers.controller('ConsentCtrl', ['$scope', '$location', '$log', 'Go', 'Participant', function($scope, $location, $log, Go, Participant) {
    $scope.hello = 'This is the informed consent form';
    $scope.first_name = '';
    $scope.last_name = '';
    $scope.$watchGroup(['first_name', 'last_name'], function(newValues, oldValues, scope) {
        Participant.first_name = newValues[0];
        Participant.last_name = newValues[1];
        $log.log(Participant);
    });
    $scope.go = function(path) {
        Go.go(path);
    }
}]);

expControllers.controller('StudyCtrl', ['$scope', '$location', '$log', 'Excerpt', 'Go', 
        function($scope, $location, $log, Excerpt, Go) {
            $scope.hello = 'This is the study';
            //$scope.excerpts = Excerpt.query();
            //$scope.excerpts = Excerpt.get({excerpt_id:"000000000000000000000001"});
            //$log.log($scope.excerpts);

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

