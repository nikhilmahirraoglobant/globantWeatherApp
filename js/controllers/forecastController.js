weatherApp.controller('forecastController',function($scope, $state, $timeout, $filter, cityWeather){
    
    $scope.isPageLoaded = false;
    
    $scope.city = cityWeather.city;
    
    cityWeather.getWeatherInfo($scope.city)
    .then(function(data){
        $scope.weatherResult = data; 
        $scope.exampleData = cityWeather.getMapData($scope.weatherResult);
        $scope.dates = cityWeather.getDates($scope.weatherResult);
        
        $scope.isPageLoaded = true;
        
        $state.go("forecast.days");
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
    
    //Tabs
    $scope.tabs = [{
            title: 'Days',
            stateName:'forecast.days'
        }, {
            title: 'Graph',
            stateName:'forecast.graph'
        }];
});