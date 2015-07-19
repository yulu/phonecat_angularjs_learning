/**
 * Created by yulu on 19/7/15.
 */
angular.module('expressionExample', [])
    .controller('ExpressionController', ['$scope', function($scope) {
        var exprs = $scope.exprs = [];
        $scope.expr = '3*10|currency';
        $scope.addExp = function(expr) {
            exprs.push(expr);
        };

        $scope.removeExp = function(index) {
            exprs.splice(index, 1);
        };
    }])
    .controller('EventController', ['$scope', function($scope) {
        var counter = 0;
        var names = ['igor', 'Misko', 'Chirayu', 'Lucas'];

        /*
         * expose the event object to the scope
         */
        $scope.clickMe = function(clickEvent) {
            $scope.name = names[counter % names.length];
            counter++;
        };
    }]);
