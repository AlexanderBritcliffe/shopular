(function() {
  'use strict';

  angular.module('inventory')
  .controller('InventoryController', InventoryController);

  InventoryController.$inject = ['ItemService'];


  function InventoryController(ItemService) {
    let vm = this;

    vm.newItem = {};
    vm.sortType = 'price';
    vm.sortReverse = false;
    vm.tax = 0.0575;

    vm.inventory = ItemService.getAllItems();




    vm.totalPrice = function totalPrice(item) {
      let price = (item.price - item.discount);
      let tax = price * vm.tax;
      return price + tax;

    };

    vm.addItem = function addItem(item) {
      console.log('addItem Inventory');
      ItemService.addItem(item);
      vm.newItem = {};




    };

  }


}());
