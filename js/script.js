/// <reference path="C:\Users\ADMIN\Dropbox\Tài Liệu\Năm III\HKII\LTWeb\Ref\js\_all.ts" />

var app = angular.module('linkedinapp', ['ngSanitize', 'ngAnimate']);

app.controller('maincontroller', function ($scope, $http) {
    window.SC = $scope;
    
    $http.get('data/overview.json')
        .then(function(res)
        {
            $scope.overview = res.data;
        });
        
    $http.get('data/background.json')
        .then(function(res2)
        {
            $scope.background = res2.data;
        });    
        
    $scope.contactvisibility = true;
    $scope.overvieweditvisibility = false;
   
});

