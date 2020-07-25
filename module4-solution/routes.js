(function () {
      angular.module("MenuApp")
      .config(RoutesConfig);

      RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
      function RoutesConfig($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/home");

        $stateProvider

        .state('home',{
          url:'/home',
          templateUrl:"js/template/home.template.html"
        })
        .state('home.categories',{
          url:'/categories',
          templateUrl:"js/template/category.html",
          controller:'CategoryController as cont',
          resolve:{
            items:['MenuDataService',function(MenuDataService){
              return MenuDataService.getAllCategories();
          }]
        }
        })
        .state('home.itemDetail',{
          url:'/item-detail/{categoryShortName}',
          templateUrl:'js/template/item-detail.html',
          controller: "ItemDetailController as itemDetail",
          resolve:{
            items:['MenuDataService','$stateParams',function(MenuDataService,$stateParams){
              return MenuDataService.getItemsForCategory($stateParams.categoryShortName)
              .then(function (response) {
                return response.data;
              });
          }]
        }
        });
        // .state("categories.discription",{
        //
      }
})();
