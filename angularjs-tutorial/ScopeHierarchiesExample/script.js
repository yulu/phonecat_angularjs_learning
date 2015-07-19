/**
 * Created by yulu on 19/7/15.
 */
angular.module("scopeExample", [])
    .controller("GreetController", ['$scope', '$rootScope', function($scope, $rootScope){
        $scope.name = 'World';
        $rootScope.department = 'Angular';
    }])
    .controller("ListController", ['$scope', function($scope) {
        $scope.names = ['Igor', 'Misko', 'Vojta'];
    }]);
