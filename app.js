(function(){
  'use strict';
var  x="hello";
  angular.module('myFirstApp', [])
  .controller('MyFirstController',function($scope){
     $scope.name="nisha";
     $scope.sayhello=function(){
       return "hello Coursera";
     }
  });
})();
