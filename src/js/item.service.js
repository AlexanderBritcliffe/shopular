(function() {
  'use strict';

  angular.module('inventory').factory('ItemService', ItemService);


  function ItemService() {

    let items = JSON.parse(localStorage.getItem('items')) || [];

    function getAllItems() {
      return items;
    }


    function addItem(item) {


      item.price = Number(item.price);
      item.quantity = Number(item.quantity);
      item.discount = Number(item.discount);


      if (typeof(item) !== 'object') {
        return;
      }

      if (typeof(item.name) !== 'string' ||
      typeof(item.price) !== 'number' ||
      typeof(item.quantity) !== 'number') {
        return;
      }

      if (typeof(item.color) !== 'string' && item.color) {
        return;
      }

      if (typeof(item.discount) !== 'number' && item.discount) {
        return;
      }

      // Number.isNaN(item) ||
      // typeof(item.quantity) !== 'number' ||
      // Number.isNaN(item) || item.price < 0.01 ||






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
