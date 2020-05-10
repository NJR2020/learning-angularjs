(function(){
  'use strict'
  angular.module('myFirstApp',[])
  .controller('CalculateItems',CalculateItems);
CalculateItems.$inject=['$scope'];

   function CalculateItems($scope, $filter){

    $scope.name="";
    $scope.checkNoOfItems=function(){
  var item=$scope.name.split(",");
      for(var i=0;i<item.length;i++){
        if(item.length-1==0)
        return "Please enter data first";
        else if (item.length>0 && item.length<=3)
          return "enjoy";
          else
            return "Too much";
        }
    };

  }
    }
    )();









  //  $scope.totalValue=0;
  /*  $scope.displayNumeric=function(){
      var totalNameValue=calculateNumericForString($scope.name);
      $scope.totalValue=totalNameValue;
    };*/

  /*  function calculateNumericForString(string){
      var totalStringValue=0;
      for(var i=0;i<string.length;i++){
        totalStringValue+=string.charCodeAt(i);
      }
      return totalStringValue;
    }*/

/*  })
}
)();*/
