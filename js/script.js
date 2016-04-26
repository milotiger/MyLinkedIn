/// <reference path="_all.ts" />


var app = angular.module('Calculator', []);

app.controller('CalcCtrler', function($scope) {
    window.SC = $scope;
    
    $scope.Operator = 0;
    
    $scope.OperCheck = function(OperCode) {
        $scope.Operator = OperCode;
    }
    
    $scope.Operation = [];
    
    $scope.Operation.push(function add (a, b) {
        return a + b;
    })
    
    $scope.Operation.push(function sub (a, b) {
        return a - b;
    })
    $scope.Operation.push(function div (a, b) {
        return a / b;
    })
    
    $scope.Operation.push(function mul (a, b) {
        return a * b;
    })
    
    $scope.isValid = function (val) {
       var floatRegex = /^-?\d+(?:[.,]\d*?)?$/;
        if (!floatRegex.test(val))
        return false;

        val = parseFloat(val);
        if (isNaN(val))
            return false;
        return true;
    }
 
    $scope.notification = "...";
    
    $scope.Validate = function(NumA, NumB) {
        
        var isValid = $scope.isValid;
        
        if (isValid(NumA) && isValid(NumB))
        {
            $scope.notification = "";
            return true;
        }
        
        if (!isValid(NumA) && !isValid(NumB))
        {
            $scope.notification = "Please Input valid float numbers in two boxes";
            return false;
        }
        
        if (!isValid(NumB))
        {
            $scope.notification = "Please Input valid float number in the second box";
            return false;
        }
        
        if (!isValid(NumA))
        {
            $scope.notification = "Please Input valid float number in the first box";
            return false;
        }
        
        return false;
    }
    
    $scope.Calculate = function () {
        var NumA = ($scope.first_value);
        var NumB = ($scope.second_value);
        
        if (!$scope.Validate(NumA, NumB))
            return 0;
            
            return $scope.Operation[$scope.Operator](parseFloat(NumA), parseFloat(NumB));        
            
    }
    
    $scope.Calc = function() {
        return $scope.Calculate();
    }
    
    $scope.Reset = function Reset() {
        $scope.first_value = "";
        $scope.second_value = "";
        blur('first_value');
    }
});

