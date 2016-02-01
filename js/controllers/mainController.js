weatherApp.controller('mainController',function($scope, cityWeather){
    
    $scope.languages = ["English","Spanish"];
    $scope.stateIndex = 0;
    
     $scope.toggle = function () {
        if($scope.stateIndex == 0)
        {
            $scope.stateIndex = 1;
        }
        else
        {
            $scope.stateIndex = 0;
        }
    };
});