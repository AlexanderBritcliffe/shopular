(function() {
  'use strict';

  angular.module('inventory').factory('ItemService', ItemService);



  function ItemService() {

    let items = JSON.parse(localStorage.getItem('items')) || [];

    function getAllItems() {
      return items;
    }


    function addItem(item) {
      console.log('additem service', item);

      item.price = Number(item.price);
      item.quantity = Number(item.quantity);
      item.discount = Number(item.discount);

      if (typeof(item) !== 'object' ||
         typeof(item.name) !== 'string' ||
         typeof(item.price) !== 'number' ||
         Number.isNaN(item) ||
         typeof(item.quantity) !== 'number' ||
         Number.isNaN(item) ||
         typeof(item.color) !== 'string' ||
         typeof(item.discount) !== 'number' ||
         Number.isNaN(item))
         {

        

      }
      console.log('add item after conditional');
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
