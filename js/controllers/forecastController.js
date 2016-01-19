weatherApp.controller('forecastController',function($scope, $state, $timeout, cityWeather){
    
    $scope.isPageLoaded = false;
    
    $scope.city = cityWeather.city;
    
    cityWeather.getWeatherInfo($scope.city)
    .then(function(data){
        $scope.weatherResult = data; 
        $scope.exampleData = cityWeather.getMapData($scope.weatherResult);
        
        $scope.isPageLoaded = true;
  
    },
    function(error){
        //console.log("Failed");
    });
     
    $scope.xAxisTickFormat = function(){
        return function(d){
            //return d3.time.format('%X')(new Date(d));  //uncomment for time format
            return d3.time.format('%d-%b-%y')(new Date(d));  //uncomment for date format
        }
    }
    
    $scope.convertToDate = function(dt){
        
        return new Date(dt * 1000);
    };
    
    //Tabs
    $scope.tabs = [{
            title: 'Days',
            stateName:'forecast.days'
        }, {
            title: 'Graph',
            stateName:'forecast.graph'
        }];
});