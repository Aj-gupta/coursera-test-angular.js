(function () {
  'use strict';

  angular.module('public')
  .controller('myinfoController',myinfFun);

  myinfFun.$inject = ['UserDataService'];
  function myinfFun(UserDataService) {

    var myinf = this;

    myinf.user = UserDataService.user;
    console.log(myinf.user);
    if(myinf.user.data===undefined)
    {
      alert("Not Signed Up Yet. Sign up Now!");
    }
  }
})();
