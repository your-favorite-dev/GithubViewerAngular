/**
 * Created by Appvile on 8/14/16.
 */
(function (){

    var github = function($http){
        var getUser = function(username){
            return $http.get("https://api.github.com/users/" + username)
                .then(function(response){
                    return response.data;
                });

        };
        var getRepos = function(user){
            return $http.get(user.repos_url)
                .then(function(response){
                    return response.data;
                });
        };

        var getRepo = function(username,repoName){
            return $http.get("https://api.github.com/repos/"
                + username
                +"/"
                + repoName)
                .then(function(response){
                    return response.data;
                });
        };

        var getContributors = function(repo){
            return $http.get(repo.contributors_url)
                .then(function(response){
                    return response.data;
                });
        };

        return {
            getUser : getUser,
            getRepos : getRepos,
            getRepo : getRepo,
            getContributors : getContributors
        };
    };

    var module = angular.module("githubViewer");
    module.factory("github", github);

}());