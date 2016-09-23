calculatorApp.config(function ($routeProvider) {
    $routeProvider.when('/calculator', {
        templateUrl: 'views/calculator.html'
        , controller: 'calculatorCtrl'
    }).when('/', {
        templateUrl: 'views/login.html'
        , controller: 'loginCtrl'
    }).when('/404', {
        templateUrl: 'views/page-404.html'
    }).otherwise({
        redirectTo: '/404'
    })
});
