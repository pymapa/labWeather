app.controller('mainCtrl', ['$scope', 'weatherService', function($scope, weatherService) {
	$scope.city= "";
	$scope.headertext = "FORECAST";

	$scope.setZipcode = function(city) {
		weatherService.getWeather(city)
		.then(function(data){
          	$scope.weather = data;
        }); 

        weatherService.getForecast(city)
        .then(function(data) {
        	$scope.forecast = data;
        	console.log(data);
        })
	}
}])