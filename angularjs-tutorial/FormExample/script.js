/**
 * Created by yulu on 19/7/15.
 */
angular.module('formExample', [])
    .controller('FormController', ['$scope', function($scope) {
        $scope.master = {};
        $scope.update = function(user) {
            $scope.master = angular.copy(user);
        };

        $scope.reset = function() {
            $scope.user = angular.copy($scope.master);
        };

        $scope.reset();
    }]);
