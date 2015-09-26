(function () {

    var module = angular.module('meanApp');

    module.controller('DemoController', ['$scope', '$http', 'SocketService', function ($scope, $http, SocketService) {

        $scope.title = 'List of State 1 Items';

        $http.get('api/toto').then(function (result) {
            $scope.message = result.data.message;
        });

        var socket = SocketService;
        socket.on('send:message', function (message) {
            $scope.name = message;
            console.log(message.count);
        });
    }]);

}());