"use strict";

var App = angular.module('SampleApp', []);

App.controller('EmployeeCtrl', ['$scope', function ($scope) {
    $scope.Empno = 1001;
    $scope.Ename = "Jag";
    $scope.Sal = "4500";
    $scope.Deptno = 20;
}]);