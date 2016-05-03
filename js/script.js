/// <reference path="C:\Users\ADMIN\Dropbox\Tài Liệu\Năm III\HKII\LTWeb\Ref\js\_all.ts" />

var app = angular.module('linkedinapp', ['ngSanitize']);

app.directive('repeatDone', function() {
    return function(scope, element, attrs) {
        if (scope.$last) { // all are rendered
            scope.$eval(attrs.repeatDone);
        }
    }
});

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
    $scope.summaryeditvisibility = false;
    
    $scope.update_overview = function updateoverview() {
        if ($scope.new_overview.name != undefined)
            $scope.overview.name = $scope.new_overview.name;
        if ($scope.new_overview.headline != undefined)
            $scope.overview.headline = $scope.new_overview.headline;
        if ($scope.new_overview.role != undefined)
            $scope.overview.role = $scope.new_overview.role;
        if ($scope.new_overview.country != undefined)
            $scope.overview.country = $scope.new_overview.country;
        if ($scope.new_overview.previous != undefined)
            $scope.overview.previous = $scope.new_overview.previous;
        if ($scope.new_overview.education != undefined)
            $scope.overview.education = $scope.new_overview.education;
        if ($scope.new_overview.faculty != undefined)
            $scope.overview.faculty = $scope.new_overview.faculty;
        if ($scope.new_overview.email != undefined)
            $scope.overview.email = $scope.new_overview.email;
        if ($scope.new_overview.phone != undefined)
            $scope.overview.phone = $scope.new_overview.phone;
        if ($scope.new_overview.link != undefined)
            $scope.overview.link = $scope.new_overview.link;
        $scope.new_overview = undefined;
    }
    
    $scope.update_summary = function update_summary() {
        if ($scope.item != undefined){
             $scope.background.summary[$scope.current_item].item = $scope.item;
        }
    }
    
    $scope.add_summary = function update_summary() {
        if ($scope.item != undefined){
            var item = {item:$scope.item};
             $scope.background.summary.splice(0,0,item);
        }
    }
    
    $scope.current_item = 0;
    
    $scope.initModals = function() {
    $('.modal-trigger').leanModal(); // Initialize the modals
    }
   
});

$(document).ready(function() {
  $('.modal-trigger').leanModal();
});

