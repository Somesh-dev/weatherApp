// SERVICES
weatherApp.service("serviceWeather", ["$resource", "$q" ,function ($resource, $q) {
    
    this.city = "London";

    this.getApi = function (city, scope) {

        const APIKEY = "7344e3de045c2e88021af466066b4481";
        const URI = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`;

        let weatherAPI = $resource(URI);

        return weatherAPI.get().$promise
            .then(function (response) {
                
                scope.weatherObj = {
                    date: response.dt,
                    temp: response.main.temp
                };
                 
            },
                function (error) {
                    scope.weatherObj = null; 
            });
    };

}]);





// return weatherAPI.get().$promise
// .then(function (response) {
//     return $q.when( {
//         date: response.dt,
//         temp: response.main.temp
//     } ); 
// },
//     function (error) {
//         return $q.when( null ); 
// });