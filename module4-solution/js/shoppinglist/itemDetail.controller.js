(function () {
'use strict';

angular.module('data')
.controller('ItemDetailController', ItemDetailController);


ItemDetailController.$inject = ['items'];
function ItemDetailController( items) {
  var itemDetail = this;
itemDetail.items = items.menu_items;
  //console.log(itemDetail.items);

}

})();
