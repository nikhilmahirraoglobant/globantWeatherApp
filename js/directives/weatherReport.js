weatherApp.directive('weatherReport',function(){
   
    return{
        restrict: 'E',
        templateUrl: 'view/directives/weatherReport.html',
        replace: true,
        scope:{
            weatherDay: "=",
            convertToDate: "&",
            dateFormate: "@"            
        }
    }
});