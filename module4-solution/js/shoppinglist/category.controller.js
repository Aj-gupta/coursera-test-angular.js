(function () {
  'use strict';
  angular.module('data')
  .controller("CategoryController",CategoryControllerFunction);


  CategoryControllerFunction.$inject = ["MenuDataService","items"];

  function CategoryControllerFunction(MenuDataService,items){
    var cont = this;
    cont.items = items.data;
    //console.log(cont.items);
  }
})();
