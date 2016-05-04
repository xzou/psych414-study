'use strict'; 

/* Directives */ 

var expDirectives = angular.module('expDirectives', []);

expDirectives.directive('excerpt1', ['Excerpt', 'ParticipantFactory', 'Excerpts', '$log', function(Excerpt, ParticipantFactory, Excerpts, $log) {
   return {
       restrict: 'E',
       templateUrl: 'views/excerpt1.html',
       scope: {},
       link: function (scope, elem, attr) {
            var id = Excerpts.excerpt1;
            scope.excerpt = Excerpt.get({excerpt_id: id});
            ParticipantFactory.excerpts.excerpt1_id = id;
            scope.$watch('analysis1', function(newValue, oldValue) {
                ParticipantFactory.excerpts.analysis1 = newValue;
            });
            
            scope.ratings1A = scope.ratings1B = scope.ratings1C = scope.ratings1D = scope.ratings1E = scope.ratings1F = scope.ratings1G = ''; 
            scope.$watchGroup(['ratings1A', 'ratings1B', 'ratings1C', 'ratings1D', 'ratings1E', 'ratings1F', 'ratings1G'], 
                    function(newValues, oldValues, scope) {
                        ParticipantFactory.excerpts.ratings1 = newValues;
                        $log.log(ParticipantFactory)
            });
        }
    }
    
}]);

expDirectives.directive('excerpt2', ['Excerpt', 'ParticipantFactory', '$log', 'Excerpts', function(Excerpt, ParticipantFactory, $log, Excerpts) {
   return {
       restrict: 'E',
       templateUrl: 'views/excerpt2.html',
       scope: {},
       link: function(scope, elem, attr) {
            var id = Excerpts.excerpt2;
            scope.excerpt = Excerpt.get({excerpt_id: id});
            ParticipantFactory.excerpts.excerpt2_id = id;
            scope.$watch('analysis2', function(newValue, oldValue) {
                ParticipantFactory.excerpts.analysis2 = newValue;
            });

            scope.ratings2A = scope.ratings2B = scope.ratings2C = scope.ratings2D = scope.ratings2E = scope.ratings2F = scope.ratings2G = ''; 
            scope.$watchGroup(['ratings2A', 'ratings2B', 'ratings2C', 'ratings2D', 'ratings2E', 'ratings2F', 'ratings2G'], 
                    function(newValues, oldValues, scope) {
                        ParticipantFactory.excerpts.ratings2 = newValues;
                        $log.log(ParticipantFactory)
            });
        }
    }
}]);

expDirectives.directive('excerpt3', ['Excerpt', 'ParticipantFactory', '$log', 'Excerpts', function(Excerpt, ParticipantFactory, $log, Excerpts) {
   return {
       restrict: 'E',
       templateUrl: 'views/excerpt3.html',
       scope: {},
       link: function(scope, elem, attr) {
            var id = Excerpts.excerpt3;
            scope.excerpt = Excerpt.get({excerpt_id: id});
            ParticipantFactory.excerpts.excerpt3_id = id;
            scope.$watch('analysis3', function(newValue, oldValue) {
                ParticipantFactory.excerpts.analysis3 = newValue;
            });

            scope.ratings3A = scope.ratings3B = scope.ratings3C = scope.ratings3D = scope.ratings3E = scope.ratings3F = scope.ratings3G = ''; 
            scope.$watchGroup(['ratings3A', 'ratings3B', 'ratings3C', 'ratings3D', 'ratings3E', 'ratings3F', 'ratings3G'], 
                    function(newValues, oldValues, scope) {
                        ParticipantFactory.excerpts.ratings3 = newValues;
                        $log.log(ParticipantFactory)
            });
        }
    }
}]);
