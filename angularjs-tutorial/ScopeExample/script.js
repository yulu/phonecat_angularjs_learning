/**
 * Created by yulu on 19/7/15.
 */
angular.module('scopeExample', [])
    .controller('MyController', ['$scope', function($scope){
        $scope.username = 'World';

        $scope.sayHello = function() {
            $scope.greeting = 'Hello ' + $scope.username + '!';
        };
    }]);
