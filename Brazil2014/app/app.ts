module Brazil2014 {


    export var app = angular.module('brazil2014', ['ngRoute']);

    // Configure the routes
    app.config(($routeProvider: ng.route.IRouteProvider) => {
        $routeProvider
            .when('/players', <ng.route.IRoute>{
                templateUrl: 'players/players.html',
                // Angular is responsible for creating the $scope.
                // Note how we use dependency injection to get the playerService
                controller: ($scope: IPlayerScope, playerService: IPlayerService) => new PlayersCtrl($scope, playerService)
            })
            .when('/players/:playerId', <ng.route.IRoute>{
                templateUrl: 'players/playerProfile.html',
                // Angular is responsible for creating the $scope.
                // Note how we use dependency injection to get Angular's built-in $location service and our own playerService
                controller: ($scope, profile: IPlayerProfile, playerService: IPlayerService, $location: ng.ILocationService) => new PlayerProfileCtrl($scope, profile, playerService, $location),
                // resolve allows us to do stuff asynchrously BEFORE navigating to the route.
                // In this case, we are fetching the player's profile BEFORE going playerProfile.html.
                // The resolved profile is then injected into to the controller. 
                resolve: {
                    profile: ($route: ng.route.IRouteService, playerService: IPlayerService) => {
                        var playerId = $route.current.params['playerId'];
                        return playerService.getProfile(playerId);
                    }
                }
            })
            // Don't know, just go home.
            .otherwise({
                templateUrl: 'home/home.html',
                controller: ($scope: ng.IScope) => new HomeCtrl($scope)
            });
    });

    // The $rootScope will keep track of how many AJAX calls are in progress.
    interface IRootScope extends ng.IScope {
        nbBusyCalls: number;
    };

    // Configure tracking of AJAX calls.
    app.run(($http: ng.IHttpService, $rootScope: IRootScope) => {
        $rootScope.nbBusyCalls = 0;
        var transformRequests = [];
        angular.forEach($http.defaults.transformRequest, tr=> transformRequests.push(tr));
        transformRequests.push((data, headersGetter) => {
            $rootScope.nbBusyCalls++;
            return data;
        });
        $http.defaults.transformRequest = transformRequests;
        var transformResponses = [];
        angular.forEach($http.defaults.transformResponse, tr=> transformResponses.push(tr));
        transformResponses.push((data, headersGetter) => {
            $rootScope.nbBusyCalls--;
            return data;
        });
        $http.defaults.transformResponse = transformResponses;
    });

} 