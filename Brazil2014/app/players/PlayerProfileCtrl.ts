module Brazil2014 {


    export class PlayerProfileCtrl {

        // The playerProfile was already loaded BEFORE navigating to this ctrl.
        constructor($scope: any, playerProfile: IPlayerProfile, playerService: IPlayerService, $location: ng.ILocationService) {
            $scope.playerProfile = playerProfile;
            // save the profile, after that we could navigate back to players if we wanted to.
            $scope.save = () => {
                playerService
                    .saveProfile(playerProfile)
                    .then(() => $scope.playerForm.$setPristine()); // removes the $dirty flag from the playerForm.
                    //.then(() => $location.path('/players'));
            };
        }

    }

} 