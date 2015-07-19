/**
 * Created by yulu on 19/7/15.
 */
angular.module('filterExample', [])
    .filter('reverse', function () {
        return function(input, uppercase) {
            input = input || '';
            var out = "";
            for (var i = 0; i < input.length; i++) {
                out = input.charAt(i) + out;
            }
            // conditional based on optional argument
            if (uppercase) {
                out = out.toUpperCase();
            }
            return out;
        };
    })
    .controller('MyController', ['$scope', function($scope) {
        $scope.greeting = 'hello';
    }])
    .controller('FilterController', ['filterFilter', function(filterFilter) {
        this.array = [
            {name: 'Tobias'},
            {name: 'Jeff'},
            {name: 'Brian'},
            {name: 'Igor'},
            {name: 'James'},
            {name: 'Tobias'},
        ];
        this.filteredArray = filterFilter(this.array, 'a');
    }]);
