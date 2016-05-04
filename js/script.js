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
        $scope.item = undefined;
    }
    
    $scope.add_summary = function add_summary() {
        if ($scope.item != undefined){
            var item = {item:$scope.item};
             $scope.background.summary.splice(0,0,item);
        }
        $scope.item = undefined;
    }
    
    $scope.update_experience = function experience_update() {
        if ($scope.exp.role != undefined)
            $scope.background.experience[$scope.current_item].role = $scope.exp.role;
        if ($scope.exp.company != undefined)
            $scope.background.experience[$scope.current_item].company = $scope.exp.company;
        if ($scope.exp.from != undefined)
            $scope.background.experience[$scope.current_item].from = $scope.exp.from;
        if ($scope.exp.to != undefined)
            $scope.background.experience[$scope.current_item].to = $scope.exp.to;
        if ($scope.exp.do != undefined)
            $scope.background.experience[$scope.current_item].do = $scope.exp.do;
        if ($scope.exp.at != undefined)
            $scope.background.experience[$scope.current_item].at = $scope.exp.at;
            
        $scope.exp = undefined;
    }
    
    $scope.add_experience = function add_experience() {
        $scope.background.experience.splice(0,0,$scope.exp);
        $scope.exp = undefined;
    }
    
    $scope.update_education = function update_education() {
        if ($scope.edu.school != undefined)
            $scope.background.education[$scope.current_item].school = $scope.edu.school;
        if ($scope.edu.from != undefined)
            $scope.background.education[$scope.current_item].from = $scope.edu.from;
        if ($scope.edu.to != undefined)
            $scope.background.education[$scope.current_item].to = $scope.edu.to;
            
        $scope.edu = undefined;
    }
    
    $scope.add_education = function add_education() {
        $scope.edu.logo = "images/uslogo.png";
        $scope.background.education.splice(0,0,$scope.edu);
        $scope.edu = undefined;
    }
    
    $scope.update_project = function update_project() {
        if ($scope.prj.name != undefined)
            $scope.background.projects[$scope.current_item].name = $scope.prj.name;
        if ($scope.prj.describe != undefined)
            $scope.background.projects[$scope.current_item].describe = $scope.prj.describe;
        if ($scope.prj.from != undefined)
            $scope.background.projects[$scope.current_item].from = $scope.prj.from;
        if ($scope.prj.to != undefined)
            $scope.background.projects[$scope.current_item].to = $scope.prj.to;
            
        $scope.prj = undefined;
    }
    
    $scope.add_project = function add_project() {
        $scope.background.projects.splice(0,0,$scope.prj);
        $scope.prj = undefined;
    }
    
    $scope.update_skills = function update_skills() {
        if ($scope.skills.name != undefined)
            $scope.background.skills[$scope.current_item].name = $scope.skills.name;
        if ($scope.skills.index != undefined)
            $scope.background.skills[$scope.current_item].index = $scope.skills.index;
        
        $scope.skills = undefined;
    }
    
    $scope.add_skills = function add_skills() {
        $scope.background.skills.splice(0,0,$scope.skills);
        $scope.skills = undefined;
    }
    
    $scope.current_item = 0;
    
    $scope.initModals = function() {
    $('.modal-trigger').leanModal(); // Initialize the modals
    }
   
});

$(document).ready(function() {
  $('.modal-trigger').leanModal();
});

