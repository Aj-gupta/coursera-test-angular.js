(function () {
    angular.module('data')
    .service("MenuDataService",MenuDataServiceFunction);


    MenuDataServiceFunction.$inject = ['$http','$q'];
    function MenuDataServiceFunction($http,$q,$timeout) {
      var service = this;
      service.getAllCategories = function () {
        return $http({
          method:"GET",
          url:"https://davids-restaurant.herokuapp.com/categories.json"
        });
      };

      var items = [];

  // Pre-populate a no cookie list
  // items.push({
  //   name: "Sugar",
  //   quantity: "2 bags",
  //   description: "Sugar used for baking delicious umm... baked goods."
  // });
  // items.push({
  //   name: "flour",
  //   quantity: "1 bags",
  //   description: "High quality wheat flour. Mix it with water, sugar, 2 raw eggs."
  // });
  // items.push({
  //   name: "Chocolate Chips",
  //   quantity: "3 bags",
  //   description: "Put these in the dough. No reason, really. Gotta store them somewhere!"
  // });

  // Simulates call to server
  // Returns a promise, NOT items array directly
  // service.getItems = function () {
  //   var deferred = $q.defer();
  //
  //   // Wait 2 seconds before returning
  //   $timeout(function () {
  //     // deferred.reject(items);
  //     deferred.resolve(items);
  //   }, 800);
  //
  //   return deferred.promise;
  // };


      service.getItemsForCategory = function(categoryShortName){
        return $http({
          method:"GET",
          url:`https://davids-restaurant.herokuapp.com/menu_items.json`,
          params:{
          category:categoryShortName
          }
        });
      };
    }
})();
