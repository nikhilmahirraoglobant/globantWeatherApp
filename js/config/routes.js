weatherApp.config(function(localStorageServiceProvider,$stateProvider, $urlRouterProvider){
   
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        .state('home', {
            url: '/home',
            templateUrl: 'view/pages/home.htm',
            controller: 'homeController',
           
        })
        
        .state('forecast', {
            url: '/forecast',
            templateUrl:'view/pages/forecast.htm',
            controller: 'forecastController',
         
        })
        
        .state('forecast.days', {
            url: '/days',
            templateUrl: 'view/pages/days.htm',
         
        })

        .state('forecast.graph', {
            url: '/graph',
            templateUrl: 'view/pages/graph.htm',
        
        });
    
    
         localStorageServiceProvider
        .setPrefix('globantWeatherApp')
        .setStorageType('localStorage')
        .setNotify(true, true)
    
});