(function () {

    var module;
    module = angular.module('meanRoutes', []);

    module.config(function ($stateProvider, $urlRouterProvider) {

        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise("/");
        //
        // Now set up the states
        $stateProvider
            .state('home', {
                url: "/",
                templateUrl: 'views/home.html'
            })
            .state('state1', {
                url: "/state1",
                templateUrl: 'views/demo.html',
                controller: 'DemoController'
            });

    });

}());