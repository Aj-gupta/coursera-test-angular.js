(function(){
  angular.module("NarrowItDownApp",[])

  .controller("NarrowItDownController",NarrowItDownController)
  .service("MenuSearchService",MenuSearchService)
  .directive("foundItems",FoundItemsDirective)
  ;

  function FoundItemsDirective() {
    var ddo = {
      templateUrl:'founditem.html',
      scope:{
        found:'=',
        onRemove:"&"
      },
    };
    return ddo;
  }
  NarrowItDownController.$inject = ["MenuSearchService","$scope"];
  function NarrowItDownController(MenuSearchService,$scope) {
    var ctrl = this;
    $scope.searchTerm = "";
    $scope.narrowIt = () => {
      ctrl.found = MenuSearchService.getMatchedMenuItems($scope.searchTerm);
      console.log(ctrl.found);
    };
    $scope.onremove = MenuSearchService.remove;

  }

  MenuSearchService.$inject = ["$http"];
  function MenuSearchService($http) {
    var service = this;
    service.founditem = [];
    service.itempromise = () => {
      return $http({
        method: "GET",
        url: 'https://davids-restaurant.herokuapp.com/menu_items.json'
      });
    };
    var promise = service.itempromise();
    service.getMatchedMenuItems = (item) => {
      promise.then((response) => {
        var arr = response.data.menu_items;
        //console.log(arr[0].description);
        for(var i=0;i<arr.length;i++)
        {
          if(arr[i].description.includes(item)){
            service.founditem.push(arr[i]);
            //console.log(arr[i].description);
          }
        }
      }).catch((error) => {
        console.log("something went wrong");
      });
      return service.founditem;
    };

    service.remove = (index) => {
      service.founditem.splice(index,1);
    };

  }

})();
