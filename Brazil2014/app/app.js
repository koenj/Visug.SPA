var Brazil2014;
(function (Brazil2014) {
    Brazil2014.app = angular.module('brazil2014', ['ngRoute']);

    // Configure the routes
    Brazil2014.app.config(function ($routeProvider) {
        $routeProvider.when('/players', {
            templateUrl: 'players/players.html',
            // Angular is responsible for creating the $scope.
            // Note how we use dependency injection to get the playerService
            controller: function ($scope, playerService) {
                return new Brazil2014.PlayersCtrl($scope, playerService);
            }
        }).when('/players/:playerId', {
            templateUrl: 'players/playerProfile.html',
            // Angular is responsible for creating the $scope.
            // Note how we use dependency injection to get Angular's built-in $location service and our own playerService
            controller: function ($scope, profile, playerService, $location) {
                return new Brazil2014.PlayerProfileCtrl($scope, profile, playerService, $location);
            },
            // resolve allows us to do stuff asynchrously BEFORE navigating to the route.
            // In this case, we are fetching the player's profile BEFORE going playerProfile.html.
            // The resolved profile is then injected into to the controller.
            resolve: {
                profile: function ($route, playerService) {
                    var playerId = $route.current.params['playerId'];
                    return playerService.getProfile(playerId);
                }
            }
        }).otherwise({
            templateUrl: 'home/home.html',
            controller: function ($scope) {
                return new Brazil2014.HomeCtrl($scope);
            }
        });
    });

    
    ;

    // Configure tracking of AJAX calls.
    Brazil2014.app.run(function ($http, $rootScope) {
        $rootScope.nbBusyCalls = 0;
        var transformRequests = [];
        angular.forEach($http.defaults.transformRequest, function (tr) {
            return transformRequests.push(tr);
        });
        transformRequests.push(function (data, headersGetter) {
            $rootScope.nbBusyCalls++;
            return data;
        });
        $http.defaults.transformRequest = transformRequests;
        var transformResponses = [];
        angular.forEach($http.defaults.transformResponse, function (tr) {
            return transformResponses.push(tr);
        });
        transformResponses.push(function (data, headersGetter) {
            $rootScope.nbBusyCalls--;
            return data;
        });
        $http.defaults.transformResponse = transformResponses;
    });
})(Brazil2014 || (Brazil2014 = {}));
//# sourceMappingURL=app.js.map
