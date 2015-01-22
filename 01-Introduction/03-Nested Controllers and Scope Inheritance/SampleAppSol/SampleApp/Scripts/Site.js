"use strict";

var App = angular.module('SampleApp', []);

App.controller('EmpCtrl', ['$scope', function ($scope) {
    $scope.Empno = 1001;
    $scope.Ename = "Jag";
    $scope.Sal = "4500";
    $scope.Deptno = 20;
}]);

App.controller('EmpSalDetailsCtrl', ['$scope', function ($scope) {
    $scope.GetAnnSal = function(Salary) {
        return Salary * 12;
        //return $scope.Sal * 12; //you can also access "Sal" from parent scope
    };
}]);