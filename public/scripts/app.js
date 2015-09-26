(function () {
    'use strict';

    /**
     * @ngdoc overview
     * @name translateApp
     * @description
     * # m  eanApp
     *
     * Main module of the application.
     */
    var module;
    module = angular.module('meanApp', [
        'ngAnimate',
        'ngCookies',
        'ngSanitize',
        'ngTouch',
        'ngMessages',
        'ui.bootstrap',
        'ui.router',
        'meanRoutes',
        'meanServices'
    ]);

    module.config(function ($httpProvider, $logProvider) {

        $logProvider.debugEnabled(true);

        $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

    });

    module.run(function ($rootScope) {
        $rootScope.$on('$routeChangeSuccess', function () {
            //Change page title, based on Route information
            //$rootScope.pageTitle = $route.current.title;
        });
    });
}());
