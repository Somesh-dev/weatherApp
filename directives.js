// DIRECTIVES
weatherApp.directive("weatherPanel", function()
{
    return {
            restrict: "EA",
            templateUrl: "directives/weatherPanel.html",
            scope: {
                    weatherObj: "=",
                    formatDate: "&",
                    convertToFarenheit: "&"
                },
            replace: true,
            link: { }
    };

});