var Brazil2014;
(function (Brazil2014) {
    

    

    

    var PlayerService = (function () {
        // This implementation needs Angular's built-in $http service to call our web api.
        // (when creating restful api's, have a look at Angular's $resource implementation.)
        // Angular's built-in $q service will help us creating promises.
        function PlayerService($http, $q) {
            this.$http = $http;
            this.$q = $q;
        }
        PlayerService.prototype.getAll = function () {
            var deferrer = this.$q.defer();

            // Just call our api; when this async call returns, resolve the promise
            // so that the caller of this methods gets notified that async execution has completed.
            this.$http.get('/api/players/').then(function (data) {
                return deferrer.resolve(data.data);
            });

            // (notice that we have no guarantees here that 'data' will actually be an array of players)
            return deferrer.promise;
        };

        PlayerService.prototype.getProfile = function (playerId) {
            var deferrer = this.$q.defer();
            this.$http.get('/api/playerProfile/' + playerId).then(function (data) {
                return deferrer.resolve(data.data);
            });
            return deferrer.promise;
        };

        PlayerService.prototype.saveProfile = function (playerProfile) {
            var deferrer = this.$q.defer();

            // save = PUT
            this.$http.put('/api/playerProfile/' + playerProfile.player.id, playerProfile).then(function (data) {
                return deferrer.resolve(data.data);
            });
            return deferrer.promise;
        };
        return PlayerService;
    })();
    Brazil2014.PlayerService = PlayerService;

    // Register the playerService, so it can be resolved using Dependency Injection
    Brazil2014.app.factory('playerService', function ($http, $q) {
        return new PlayerService($http, $q);
    });
})(Brazil2014 || (Brazil2014 = {}));
//# sourceMappingURL=PlayerService.js.map
