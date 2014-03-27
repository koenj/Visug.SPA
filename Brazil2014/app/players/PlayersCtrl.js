var Brazil2014;
(function (Brazil2014) {
    

    var PlayersCtrl = (function () {
        // Using the playerService to get the players.
        // Single responsibility: it's not the Controllers task to do this.
        function PlayersCtrl($scope, playerService) {
            playerService.getAll().then(function (players) {
                return $scope.players = players;
            });
        }
        return PlayersCtrl;
    })();
    Brazil2014.PlayersCtrl = PlayersCtrl;
})(Brazil2014 || (Brazil2014 = {}));
//# sourceMappingURL=PlayersCtrl.js.map
