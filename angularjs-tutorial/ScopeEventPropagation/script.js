/**
 * Created by yulu on 19/7/15.
 */
angular.module('eventExample', [])
    .controller('EventController', ['$scope', function($scope) {
        $scope.count = 0;
        $scope.$on('MyEvent', function() {
            $scope.count++;
        });
    }]);
