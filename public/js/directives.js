'use strict'; 

/* Directives */ 

var expDirectives = angular.module('expDirectives', []);

expDirectives.directive('excerpt1', ['Excerpt', 'Participant', '$log', function(Excerpt, Participant, $log) {
   return {
       restrict: 'E',
       templateUrl: 'views/excerpt1.html',
       scope: {},
       link: function (scope, elem, attr) {
            var id = '000000000000000000000001';
            scope.excerpt = Excerpt.get({excerpt_id: id});
            Participant.excerpts.excerpt1_id = id;
            scope.$watch('analysis1', function(newValue, oldValue) {
                Participant.excerpts.analysis1 = newValue;
            });
            
            scope.ratings1A = scope.ratings1B = scope.ratings1C = scope.ratings1D = scope.ratings1E = scope.ratings1F = scope.ratings1G = ''; 
            scope.$watchGroup(['ratings1A', 'ratings1B', 'ratings1C', 'ratings1D', 'ratings1E', 'ratings1F', 'ratings1G'], 
                    function(newValues, oldValues, scope) {
                        Participant.excerpts.ratings1 = newValues;
                        $log.log(Participant)
            });
        }
    }
    
}]);

expDirectives.directive('excerpt2', ['Excerpt', 'Participant', '$log', function(Excerpt, Participant, $log) {
   return {
       restrict: 'E',
       templateUrl: 'views/excerpt2.html',
       scope: {},
       link: function(scope, elem, attr) {
            var id = '000000000000000000000002';
            scope.excerpt = Excerpt.get({excerpt_id: id});
            Participant.excerpts.excerpt2_id = id;
            scope.$watch('analysis2', function(newValue, oldValue) {
                Participant.excerpts.analysis2 = newValue;
            });

            scope.ratings2A = scope.ratings2B = scope.ratings2C = scope.ratings2D = scope.ratings2E = scope.ratings2F = scope.ratings2G = ''; 
            scope.$watchGroup(['ratings2A', 'ratings2B', 'ratings2C', 'ratings2D', 'ratings2E', 'ratings2F', 'ratings2G'], 
                    function(newValues, oldValues, scope) {
                        Participant.excerpts.ratings2 = newValues;
                        $log.log(Participant)
            });
        }
    }
}]);

expDirectives.directive('excerpt3', ['Excerpt', 'Participant', '$log', function(Excerpt, Participant, $log) {
   return {
       restrict: 'E',
       templateUrl: 'views/excerpt3.html',
       scope: {},
       link: function(scope, elem, attr) {
            var id = '000000000000000000000003';
            scope.excerpt = Excerpt.get({excerpt_id: id});
            Participant.excerpts.excerpt3_id = id;
            scope.$watch('analysis3', function(newValue, oldValue) {
                Participant.excerpts.analysis3 = newValue;
            });

            scope.ratings3A = scope.ratings3B = scope.ratings3C = scope.ratings3D = scope.ratings3E = scope.ratings3F = scope.ratings3G = ''; 
            scope.$watchGroup(['ratings3A', 'ratings3B', 'ratings3C', 'ratings3D', 'ratings3E', 'ratings3F', 'ratings3G'], 
                    function(newValues, oldValues, scope) {
                        Participant.excerpts.ratings3 = newValues;
                        $log.log(Participant)
            });
        }
    }
}]);
