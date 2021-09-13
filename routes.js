// ROUTER
weatherApp.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "templates/first.html",
            controller: "mainController"
        })
        .when("/info", {
            templateUrl: "templates/second.html",
            controller: "secondController"
        });
});