/**
 * Created by Appvile on 8/14/16.
 */
(function() {
    var app = angular.module("githubViewer");

    var MainController = function($scope, $interval, $location) {

        var onCountDown = function() {
            $scope.countdown -= 1;
            if (!$scope.countdown) {
                $scope.search($scope.username);
            }
        };

        var intervalService = null;
        var countDown = function() {
            intervalService = $interval(onCountDown, 1000, 5);
        };

        $scope.search = function(username) {
            if (intervalService) {
                $interval.cancel(intervalService);
                $scope.countDown = null;
            }
            $location.path("/user/" + username);
        };

        $scope.username = "angular";
        $scope.countdown = 5;
        countDown();

    };

    app.controller("MainController", MainController);
}());