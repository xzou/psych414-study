'use strict';

/* Controllers */

var expControllers = angular.module('expControllers', []);

expControllers.controller('IntroCtrl', ['$scope', '$location', '$log', 'Go', 'ParticipantFactory', function($scope, $location, $log, Go, ParticipantFactory) {
    $scope.hello = 'This is the introduction';
    $scope.mturk_id = '';
    $scope.$watch('mturk_id', function(newValue, oldValue) {
        ParticipantFactory.mturk_id = newValue;
    });
    
    $scope.go = function(path) {
        Go.go(path);
    }
}]);

expControllers.controller('ConsentCtrl', ['$scope', '$location', '$log', 'Go', 'ParticipantFactory', function($scope, $location, $log, Go, ParticipantFactory) {
    $scope.hello = 'This is the informed consent form';
    $scope.consent = false;
    $scope.$watch('consent', function(newValue, oldValue) {
        ParticipantFactory.consent = newValue;
    });
    $scope.go = function(path) {
        Go.go(path);
    }
}]);

expControllers.controller('StudyCtrl', ['$scope', '$location', '$log', 'Excerpt', 'Go', 'Trial', 
        function($scope, $location, $log, Excerpt, Go, Trial) {
            $scope.hello = 'This is the study';
            $scope.go = function(path) {
                Go.go(path);
            }
        }]);

expControllers.controller('DebriefCtrl', ['$scope', '$location', '$log', 'Go', 'ParticipantFactory', function($scope, $location, $log, Go, ParticipantFactory) {
    $scope.hello = 'This is the debriefing';
    $scope.internet = Boolean;
    $scope.recognition = Boolean;
    $scope.comment = '';
    $scope.$watchGroup(['internet', 'recognition', 'comment'], function(newValues, oldValues, scope) {
        ParticipantFactory.internet = newValues[0];
        ParticipantFactory.recognition = newValues[1];
        ParticipantFactory.comment = newValues[2];
        $log.log(ParticipantFactory);
    });
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

expControllers.controller('CodeCtrl', ['$scope', '$location', 'Go', 'ParticipantFactory', 'Participant', 'Excerpts', 'Trial',
        function($scope, $location, Go, ParticipantFactory, Participant, Excerpts, Trial) {
        $scope.hello = 'This is the code generator or whatever';
        $scope.go = function(path) {
            Go.go(path);
        }

        var participant = new Participant();
        participant.first_name = ParticipantFactory.first_name;
        participant.last_name = ParticipantFactory.last_name;
        participant.mturk_id = ParticipantFactory.mturk_id;
        participant.excerpts = ParticipantFactory.excerpts;
        participant.internet = ParticipantFactory.internet;
        participant.recognition = ParticipantFactory.recognition;
        participant.comments = ParticipantFactory.comments;
        participant.code = ParticipantFactory.code; 

        participant.$save(); 

        Trial.delete({trial_id : Excerpts.id});

}]);

