(function () {
  'use strict';
  angular.module('public')
  .controller('signupController',signupFun)

  signupFun.$inject = ['UserDataService','MenuService'];
  function signupFun(UserDataService,MenuService) {
    var signup = this;
    signup.user = UserDataService.user;
    signup.submit = function(){
      var items ;
      var promise = MenuService.getMenuItems(UserDataService.user.favdish);
      promise.then(function (response) {
      items = response.menu_items;
      if(items.length == 0){
        alert("Please Enter a correct name of dish");
      }
      else{
        //console.log(items);
        UserDataService.user.data = items;
        alert("Your information has been saved");
      }
      });
  };
}
})();
