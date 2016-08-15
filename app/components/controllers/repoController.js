/**
 * Created by Appvile on 8/14/16.
 */
(function() {
    var app = angular.module("githubViewer");
    var RepoController = function($scope, $routeParams, $location, github) {

        var onRepo = function(data) {
            $scope.repo = data;
            getContributors($scope.repo);
        };
        var getContributors = function(repo) {
            github.getContributors(repo).then(onContributors, onError);
        };

        var onContributors = function(data) {
            $scope.contributors = data;
        };
        var onError = function(reason) {
            $scope.error = reason;
        };
        $scope.back = function(){
            $location.path("/user/" + $scope.repo.owner.login);
        };

        var username = $routeParams.username;
        var repoName = $routeParams.repoName;

        github.getRepo(username, repoName).then(onRepo, onError);

    };

    app.controller("RepoController", RepoController);
}());