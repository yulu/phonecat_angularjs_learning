/**
 * Created by yulu on 16/1/15.
 */
var phonecatServices = angular.module('phonecatServices', ['ngResource']);

phonecatServices.factory('Phone', ['$resource',
    function($resource){
        return $resource('phones/:phoneId.json', {}, {
            query: {method: 'GET', params:{phoneId:'phones'}, isArray: true}
        });
    }
]);
