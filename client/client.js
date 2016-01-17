var app = angular.module('gitHubApp', []);

app.controller('apiController', ['$scope', '$http', 'repoInfo', function($scope, $http, repoInfo){
    $scope.data = repoInfo.data;
    repoInfo.retrieveAPI();
}]);


app.factory('repoInfo', ['$http', function($http){
    var data = {
        results: {}
    };

    var retrieveAPI = function(){
        $http.jsonp('https://api.github.com/users/samantha212/events?callback=JSON_CALLBACK').then(function(response){
            console.log(response);
            data.results = response.data.data;
        });

    };

    return {
        retrieveAPI: retrieveAPI,
        data: data
    }

}]);