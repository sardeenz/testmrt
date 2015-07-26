'use strict';


angular.module('appFilters', []).filter('checkmark', function() {
    return function(input) {
        return input ? '\u2713' : '\u2718';
    };
});

angular.module('appFilters', []).filter('statusFilter', function() {
    return function(input) {

        return input ? '\u2713' : '\u2718';
    };
});