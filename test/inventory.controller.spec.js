(function() {
  'use strict';
  let expect = chai.expect;

  describe('inventory controller', function(){
    let InventoryController;
    let mockItemService = {};

    beforeEach(module('inventory'));

    beforeEach(module(function($provide) {
      $provide.value('ItemService', mockItemService);
    }));

    beforeEach(inject(function($controller){
      mockItemService.getAllItems = function getAllItems() {
        mockItemService.getAllItems.numTimesCalled++;
        return [];
      };
      mockItemService.getAllItems.numTimesCalled = 0;
      InventoryController = $controller('InventoryController');
    }));

    it('should do the following', function(){
      expect(InventoryController.newItem).to.be.an('object');
      expect(InventoryController.inventoryList).to.be.an('array');

    it('should call addItem when adding', function(){
      InventoryController.add({});
      expect(mockItemService.addItem.numTimesCalled).to.equal(1);

      });

    it('should be an object', function(){
      expect(InventoryController.newItem).to.be.an('object');
    });

    it('should be a function', function(){
      expect(mockItemService.getAllItems).to.be.a('function');
      expect(mockItemService.getAllItems).to.be.an('function');
    });

    it('should be an array', function(){
      expect(InventoryController.inventoryList).to.be.an(array);
    });

    });
  });

}());
