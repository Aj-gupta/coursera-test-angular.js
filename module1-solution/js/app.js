(function(){
  angular.module("LunchCheck",[])

  .controller("LunchCheckController",LunchCheckfun);

  LunchCheckfun.$inject=['$scope'];

  function LunchCheckfun($scope){
    $scope.name='';
    $scope.message='';
    $scope.words=[''];
    $scope.customStyle = { };
    $scope.custom1Style = { };
    $scope.check=function()
    {
        $scope.words = $scope.name.split(",");
        $scope.words=$scope.words.filter(function(ele){return ele!=''});
      if($scope.words.length==0)
      {
        $scope.message="Please enter data first";
        $scope.customStyle.color= "red";
          $scope.custom1Style.border= "1px solid red";
      }
      else if($scope.words.length<=3){
        //console.log("hello");
        $scope.message="Enjoy!";
        $scope.customStyle.color= "green";
        $scope.custom1Style.border= "1px solid green";
      }
      else{
        $scope.message="Too Much!";
        $scope.customStyle.color = "red";
        $scope.custom1Style.border= "1px solid red";
      }
    }
}


})();
