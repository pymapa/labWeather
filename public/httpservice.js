app.factory('weatherService', ['$http', '$q', function ($http, $q){
  var city = "";

  var weatherService = {};
 
    weatherService.getWeather = function (ctrlCity) {
      console.log(ctrlCity);
      city = ctrlCity;
      var deferred = $q.defer();
      $http.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&APPID=97413eb80123e3e1d162bc23898a4850')
        .success(function(data){
          deferred.resolve(data);
        })
        .error(function(err){
          console.log('Error retrieving weather');
          deferred.reject(err);
        });
      return deferred.promise;
    }
  
  weatherService.getForecast = function (ctrlCity) {
      city = ctrlCity;
      var deferred = $q.defer();
      $http.get('http://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=metric&APPID=97413eb80123e3e1d162bc23898a4850')
      .success(function(data) {
        deferred.resolve(data);
      })
      .error(function(data) {
        console.log("Error retrieving forecast");
        deferred.resolve(data);
      })
    return deferred.promise;
  }

  return weatherService;

}]);