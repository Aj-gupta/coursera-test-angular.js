(function(){
  angular.module("ShoppingListCheckOff",[])

  .controller("ToBuyController",toBuyFun)
  .controller("AlreadyBoughtController",alreadyBoughtFun)
  .service("ShoppingService",ShoppingListCheckOffService);

  toBuyFun.$inject = ['ShoppingService'];
  function toBuyFun(ShoppingService) {
      var buyItems = this;
      buyItems.items =ShoppingService.toBuyitems;
      buyItems.bought = function (index) {
        ShoppingService.boughtfun(index);
        buyItems.toby = false;
        //value = false;
        ShoppingService.tobgvalue = false;
        if(ShoppingService.toBuyitems.length == 0)
        {
          buyItems.toby = true;
        }
      };



  }

  alreadyBoughtFun.$inject = ['ShoppingService'];
  function alreadyBoughtFun(ShoppingService){
    var boughtItems = this;
    boughtItems.items = ShoppingService.boughtitems;
    boughtItems.tobgfun = function () {
      boughtItems.tobg = ShoppingService.tobgvalue;
      return boughtItems.tobg;
    };
      //console.log(ShoppingService.tobgvalue);
      // if(ShoppingService.boughtitems.length != 0){
      // boughtItems.tobg = false;
      // }
  }

  function ShoppingListCheckOffService(){
    var service = this;
    service.toBuyitems = [
    {
      name: "Milk",
      quantity: "2"
    },
    {
      name: "Donuts",
      quantity: "200"
    },
    {
      name: "Cookies",
      quantity: "300"
    },
    {
      name: "Chocolate",
      quantity: "5"
    }
  ];

  service.boughtitems = [];

  service.boughtfun = function (itemindex){
    service.boughtitems.push(service.toBuyitems.splice(itemindex,1)[0]);
    //onsole.log(service.boughtitems);
  };
  service.tobgvalue = true;
}
})();
