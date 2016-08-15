'use strict';

// Declare app level module which depends on views, and components
angular.module('githubViewer', ['ngRoute']).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider
      .when("/main", {
        templateUrl: "main.html",
        controller: "MainController"
      })
      .when("/user/:username",{
        templateUrl: "user.html",
        controller: "UserController"
      })
      .when("/repo/:username/:repoName",{
        templateUrl: "repo.html",
        controller: "RepoController"
      })
      .otherwise({redirectTo:"/main"});
}]);
