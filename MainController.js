// Code goes here
(function() {

    var app = angular.module("githubViewer");

    var MainController = function($scope, $interval, $location) {

        $scope.search = function(username) {
            if(countdownToUserName) {
                $interval.cancel(countdownToUserName);
                $scope.countdown = null;
            }
            $location.path("/user/" + username);
        };
        
        var countdownToUserName = null;
        var startCountdown = function() {
            countdownToUserName = $interval(decrementCountdown, 1000, $scope.countdown);
        };
        
        var decrementCountdown = function(){
            $scope.countdown -= 1;
            if($scope.countdown < 1){
                $scope.search($scope.username);
            }
        };

        $scope.message = "angular";
        $scope.countdown = 10;
        startCountdown();
    };

    app.controller("MainController", ["$scope", "$interval", "$location", MainController]);

}());