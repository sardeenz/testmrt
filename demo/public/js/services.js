'use strict';


var appServices = angular.module('appServices', ['ngResource']);

var underscore = angular.module('underscore', []);
underscore.factory('_', function() {
    return window._; // assumes underscore has already been loaded on the page
});

var credentialsService = angular.module('app.services',[]).service('credentialsService', function (){
    var credentials = {
            username: '',
            password: '',
            tenant: ''
        };
    return{
        saveCredentials:function (data){
            credentials  = data;

        },
        getCredentials:function (){
            return credentials;
        }
    };
});

app.factory('configService', function($http) {
    var promise;
    var configService = {
        async: function() {
            if ( !promise ) {
                // $http returns a promise, which has a then function, which also returns a promise
                promise = $http.get('config').then(function (response) {
                    // The then function here is an opportunity to modify the response
                    console.log(response);
                    // The return value gets picked up by the then in the controller.
                    return response.data;
                });
            }
            // Return the promise to the controller
            return promise;
        }
    };
    return configService;
});