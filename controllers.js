// CONTROLLERS
weatherApp.controller("mainController", ["$scope", "$log", "serviceWeather",
    function ($scope, $log, serviceWeather) {

        $log.log(location.hash);

        $scope.hash = location.hash;

        $scope.name = "Somesh";

        $scope.city = serviceWeather.city;

        // custom watch with listener functio to change the serviceWeather.city
        $scope.$watch("city", function (oldValue, newValue) {
            serviceWeather.city = $scope.city;
        });
    }]);

weatherApp.controller("secondController", ["$scope", "serviceWeather",
    function ($scope, serviceWeather) {


        $scope.hash = location.hash;

        $scope.city = serviceWeather.city;

        $scope.weatherObj = null;

        serviceWeather.getApi($scope.city, $scope);
        
        $scope.convertToFarenheit = function(weatherObj)
        {
            if (weatherObj === null)
                return "";
            else
                return Math.round(1.8 * (weatherObj.temp - 273)) + 32;
        }    

        $scope.formatDate = function(weatherObj)
        {
            if (weatherObj === null)
                return "";
            else
                return new Date(weatherObj.date * 1000);
        }   

    }]);
