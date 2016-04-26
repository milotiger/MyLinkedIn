/// <reference path="C:\Users\ADMIN\Dropbox\Tài Liệu\Năm III\HKII\LTWeb\Ref\js\_all.ts" />

var app = angular.module('linkedinapp', ['ngSanitize']);

app.controller('overviewctrl', function ($scope, $http) {
    window.SC = $scope;
    
    $http.get('data/overview.json')
        .then(function(res)
        {
            $scope.overview = res.data;
        })
});

