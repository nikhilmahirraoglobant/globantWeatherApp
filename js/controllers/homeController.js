weatherApp.controller('homeController',function($scope, $location, $state, $filter, cityWeather, historyService, localStorageService, NgMap){
    
    $scope.city = cityWeather.city; 
    
    $scope.cityHistroy = cityWeather.cityHistroy;    
    
    
    $scope.$watch('city',function(newValue,oldValue){
        
        if(typeof(newValue) == 'object')
        {
            $scope.city = newValue.name;    
        }
        
        $scope.city = $filter('titlecase')($scope.city);
        
        cityWeather.city = $scope.city;
    });
    
    $scope.$watch('cityHistroy',function(){
        
        cityWeather.cityHistroy = $scope.cityHistroy;
    
    });   
        
    $scope.submit = function()
    {
        if($scope.city.length)
        {
            var citiesArr = historyService.updateHistory($scope.city);

            $state.go("forecast.days");
       };
    };
    
    $scope.getHistoryWeather = function(){
        
        var citiesArr = historyService.getCities();
                
        this.setWeatherHistory = function(cityName)
        {
            var cityInfo = {};
            cityInfo.name = cityName;   
           
            cityWeather.getWeatherInfo(cityInfo.name)
            .then(function(data){ 
                
                cityInfo.weatherResult = data;
            },
            function(error){
                //console.log("Failed");
            });
            
            return cityInfo;
        }
        
        $scope.cityHistroy = citiesArr.map(this.setWeatherHistory);
        
        if($scope.cityHistroy.length > 0)
        {
            $scope.city = $scope.cityHistroy[0].name;
        }       
    };    
   
    $scope.map = {
        
        center: [18.5203,73.8567],
        
        zoom : 10
    };
    
});