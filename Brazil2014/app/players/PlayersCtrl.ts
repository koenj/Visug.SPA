module Brazil2014 {

    // Typed scope for the PlayersCtrl
    export interface IPlayerScope extends ng.IScope {
        players: IPlayer[];
    }

    export class PlayersCtrl {

        // Using the playerService to get the players.
        // Single responsibility: it's not the Controllers task to do this.
        constructor($scope: IPlayerScope, playerService: IPlayerService) {
            playerService.getAll()
                         .then(players => $scope.players = players);
        }

    }

} 