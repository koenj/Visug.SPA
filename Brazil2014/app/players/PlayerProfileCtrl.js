var Brazil2014;
(function (Brazil2014) {
    var PlayerProfileCtrl = (function () {
        // The playerProfile was already loaded BEFORE navigating to this ctrl.
        function PlayerProfileCtrl($scope, playerProfile, playerService, $location) {
            $scope.playerProfile = playerProfile;

            // save the profile, after that we could navigate back to players if we wanted to.
            $scope.save = function () {
                playerService.saveProfile(playerProfile).then(function () {
                    return $scope.playerForm.$setPristine();
                }); // removes the $dirty flag from the playerForm.
                //.then(() => $location.path('/players'));
            };
        }
        return PlayerProfileCtrl;
    })();
    Brazil2014.PlayerProfileCtrl = PlayerProfileCtrl;
})(Brazil2014 || (Brazil2014 = {}));
//# sourceMappingURL=PlayerProfileCtrl.js.map
