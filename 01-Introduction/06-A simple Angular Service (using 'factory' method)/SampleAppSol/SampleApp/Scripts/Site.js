"use strict";

var App = angular.module('SampleApp', []);

App.controller('EmpCtrl', ['$scope', 'EmpCalcSvc', function ($scope, EmpCalcSvc) {
    $scope.Empno = 1001;
    $scope.Ename = "Jag";
    $scope.Sal = 4500;
    $scope.Deptno = 20;
    $scope.GetAnnSal = function () {
        return EmpCalcSvc.GetAnnSal($scope.Sal);
    };
}]);

App.factory('EmpCalcSvc', function () {
    var singletonInstance = {};
    singletonInstance.GetAnnSal = function (salary) {
        return salary * 12;
    };
    return singletonInstance;
});