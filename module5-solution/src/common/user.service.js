(function () {
  'use strict';
  angular.module('common')
  .service("UserDataService",UserFun);

  UserFun.$inject = ["$http"];
  function UserFun($http) {
      var service = this;
      service.user = {};
  }
})();
