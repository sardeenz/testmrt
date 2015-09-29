'use strict';


var app = angular.module('app', [
    'ngRoute',
    'appControllers',
    'appFilters',
    'appServices',
    'ngCookies',
    'ui.bootstrap',
    'underscore'
]);

app.directive('barsChart', function ($parse) {
        //explicitly creating a directive definition variable
        //this may look verbose but is good for clarification purposes
        //in real life you'd want to simply return the object {...}
        var directiveDefinitionObject = {
            //We restrict its use to an element
            //as usually  <bars-chart> is semantically
            //more understandable
            restrict: 'E',
            //this is important,
            //we don't want to overwrite our directive declaration
            //in the HTML mark-up
            replace: false,
            //our data source would be an array
            //passed thru chart-data attribute
            scope: {data: '=chartData'},
            link: function ($scope, element, attrs) {
                //in D3, any selection[0] contains the group
                //selection[0][0] is the DOM node
                //but we won't need that this time
                //a little of magic: setting it's width based
                //on the data value (d)
                //and text all with a smooth transition
                var chart = d3.select(element[0]);
                //to our original directive markup bars-chart
                //we add a div with out chart stling and bind each
                //data entry to the chart
                chart.append("div").attr("class", "chart")
                    .selectAll('div')
                    .data($scope.data).enter().append("div")
                    .transition().ease("elastic")
                    .style("width", function(d) { return d.value*3 + "%"; })
                    .text(function(d) { return d.label + " (" + d.value + ")"; });

            }
        };
        return directiveDefinitionObject;
    });

app.factory("User",function(){
    return {};
});

app.filter('partition', function() {
    var cache = {};
    var filter = function(arr, size) {
        if (!arr) { return; }
        var newArr = [];
        for (var i=0; i<arr.length; i+=size) {
            newArr.push(arr.slice(i, i+size));
        }
        var arrString = JSON.stringify(arr);
        var fromCache = cache[arrString+size];
        if (JSON.stringify(fromCache) === JSON.stringify(newArr)) {
            return fromCache;
        }
        cache[arrString+size] = newArr;
        return newArr;
    };
    return filter;
});


app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/full', {
                templateUrl: 'partials/basic.html',
                controller: 'BasicViewCtrl'
            }).
            when('/',{
                templateUrl: 'partials/reduced.html',
                controller: 'BasicViewCtrl'
            }).
            when('/embed',{
                templateUrl: 'partials/embed.html',
                controller: 'BasicViewCtrl'
            }).
            otherwise({
                redirectTo: '/'
            });
    }]);
app.config(['$httpProvider', function($httpProvider) {
    //initialize get if not there
    if (!$httpProvider.defaults.headers.get) {
        $httpProvider.defaults.headers.get = {};
    }
    //disable IE ajax request caching
    $httpProvider.defaults.headers.get['If-Modified-Since'] = '0';
}]);