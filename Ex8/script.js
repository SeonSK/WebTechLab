var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {

    $scrope.totalMarks = 0;

    $scope.CalcGrade = function(){
        
        $scope.totalMarks = $scope.marks1 + $scope.marks2 + $scope.marks3 + $scope.marks4 + $scope.marks5;
    }
});