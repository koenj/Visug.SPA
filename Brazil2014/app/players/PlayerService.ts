module Brazil2014 {


    // Typed interface for the player profile
    export interface IPlayerProfile {
        playerId: number;
        player: IPlayer;
        dateOfBirth: Date;
        placeOfBirth: string;
        currentTeam: string;
        nbGoals: number;
        nbSelections: number;
        appreciation: number;
        length: number;
        weight: number;
    }

    // Typed interface for the player
    export interface IPlayer {
        id: number;
        firstName: string;
        lastName: string;
        imageUrl: string;
    }

    // Service responsible for managing players.
    // Notice that all methods have an asynchronous API, returning an IPromise object.
    // (~ Task<T> in WPF / Silverlight) 
    export interface IPlayerService {

        getAll(): ng.IPromise<IPlayer[]>;
        getProfile(playerId: number): ng.IPromise<IPlayerProfile>;
        saveProfile(playerProfile: IPlayerProfile): ng.IPromise<IPlayerProfile>;
    }

    export class PlayerService implements IPlayerService {

        // This implementation needs Angular's built-in $http service to call our web api.
        // (when creating restful api's, have a look at Angular's $resource implementation.)
        // Angular's built-in $q service will help us creating promises.
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {
        }

        getAll(): ng.IPromise<IPlayer[]> {
            var deferrer = this.$q.defer();
            // Just call our api; when this async call returns, resolve the promise
            // so that the caller of this methods gets notified that async execution has completed.
            this.$http.get('/api/players/')
                .then(data => deferrer.resolve(data.data));
            // (notice that we have no guarantees here that 'data' will actually be an array of players)
            return deferrer.promise;
        }

        getProfile(playerId: number): ng.IPromise<IPlayerProfile> {
            var deferrer = this.$q.defer();
            this.$http.get('/api/playerProfile/' + playerId)
                .then(data => deferrer.resolve(data.data));
            return deferrer.promise;
        }

        saveProfile(playerProfile: IPlayerProfile): ng.IPromise<IPlayerProfile> {
            var deferrer = this.$q.defer();
            // save = PUT
            this.$http.put('/api/playerProfile/' + playerProfile.player.id, playerProfile)
                .then(data => deferrer.resolve(data.data));
            return deferrer.promise;
        }
    }

    // Register the playerService, so it can be resolved using Dependency Injection
    app.factory('playerService', ($http: ng.IHttpService, $q: ng.IQService) => {
        return new PlayerService($http, $q);
    });

} 