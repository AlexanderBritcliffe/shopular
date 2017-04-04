(function() {
  'use strict';

  angular.module('inventory')
  .controller('InventoryController', InventoryController);

  InventoryController.$inject = ['ItemService'];
  /**
  * Creates the inventory controllers to create inventory data.
  */
  function InventoryController(ItemService) {
    let vm = this;

    vm.newItem = {};
    vm.sortType = 'price';
    vm.sortReverse = false;
    vm.tax = 0.0575;

    vm.inventoryList = ItemService.getAllItems();

    vm.add = function add(item) {
      ItemService.addItem(item);
      vm.newItem = {};

    };

    /**
    * Calculates total price of item by adding discounts and taxes that may apply.
    * @param  {Object} item Items from the InventoryList array
    * @return {Number}       Total price.
    */


    vm.totalPrice = function totalPrice(item) {
      let price = (item.price - item.discount);
      let tax = price * vm.tax;
      return price + tax;

    };

    /**
      * Add item to the array which holds the user data
      * @param {Object} item The item information
      * @return {void}
      */

    vm.addItem = function addItem(item) {
      ItemService.addItem(item);
      vm.newItem = {};




    };

  }


}());
