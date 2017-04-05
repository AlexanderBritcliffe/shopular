'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function () {
  'use strict';

  angular.module('inventory', []);
})();

(function () {
  'use strict';

  angular.module('inventory').controller('InventoryController', InventoryController);

  InventoryController.$inject = ['ItemService'];
  function InventoryController(ItemService) {
    var vm = this;

    vm.newItem = {};
    vm.sortType = 'price';
    vm.sortReverse = false;
    vm.tax = 0.0575;

    vm.inventoryList = ItemService.getAllItems();

    vm.add = function add(item) {
      ItemService.addItem(item);
      vm.newItem = {};
    };

    vm.totalPrice = function totalPrice(item) {
      var price = item.price - item.discount;
      var tax = price * vm.tax;
      return price + tax;
    };

    vm.addItem = function addItem(item) {
      ItemService.addItem(item);
      vm.newItem = {};
    };
  }
})();

(function () {
  'use strict';

  angular.module('inventory').factory('ItemService', ItemService);

  function ItemService() {

    var items = JSON.parse(localStorage.getItem('items')) || [];

    function getAllItems() {
      return items;
    }

    function addItem(item) {

      item.price = Number(item.price);
      item.quantity = Number(item.quantity);
      item.discount = Number(item.discount);

      if ((typeof item === 'undefined' ? 'undefined' : _typeof(item)) !== 'object') {
        return;
      }

      if (typeof item.name !== 'string' || typeof item.price !== 'number' || typeof item.quantity !== 'number') {
        return;
      }

      if (typeof item.color !== 'string' && item.color) {
        return;
      }

      if (typeof item.discount !== 'number' && item.discount) {
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
})();

//# sourceMappingURL=app.js.map
//# sourceMappingURL=app.js.map
