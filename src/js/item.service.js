(function() {
  'use strict';

  angular.module('inventory').factory('ItemService', ItemService);

  /**
  * Handles the various items in the InventoryList
  */
  function ItemService() {

    let items = JSON.parse(localStorage.getItem('items')) || [];

    /**
    * Gets the items inventory
    * @return {Array} inventory items
    */

    function getAllItems() {
      return items;
    }


    /**
    * Adds new item to the list of inventory
    * @return {void}
    */
    function addItem(item) {


      item.price = Number(item.price);
      item.quantity = Number(item.quantity);
      item.discount = Number(item.discount);



      if (typeof(item) !== 'object' ||
      typeof(item.name) !== 'string' ||
      typeof(item.price) !== 'number' ||
      Number.isNaN(item.price)||
      typeof(item.quantity) !== 'number' ||
      Number.isNaN(item.quantity)||
      typeof(item.color) !== 'string' ||
      typeof(item.discount) !== 'number' ||
      Number.isNaN(item.discount)) {
        return;
      }

      items.push({
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        color: item.color,
        discount: item.discount
      });
      localStorage.setItem('items', angular.toJson(items));
    }

    return {
      addItem: addItem,
      getAllItems: getAllItems
    };
  }

}());
