(function () {
  angular.module("MenuApp")
  .component("categories",{
    templateUrl:"js/template/category.template.html",
    bindings:{
      items:'<'
    }
  });
})();
