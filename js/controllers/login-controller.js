(function () {
    'use strict';
    angular.module('calculatorApp').controller('loginCtrl', loginCtrl);

    function loginCtrl($scope, $location) {
        $scope.isAuthenticated = false;
        $scope.login = function () {
            if ($scope.user.name === 'admin' && $scope.user.pwd === 'password') {
                $scope.isAuthenticated = true;
                $location.path('/calculator');
            }
            else {
                $scope.user = {};
                $location.path('/');
                console.log('Authentication failed');
            }
        }
    }
})();
