/**
 * Created by yulu on 16/1/15.
 */
angular.module('phonecatFilters', []).filter('checkmark', function() {
    return function(input) {
        return input ? '\u2713' : '\u2718';
    };
});
