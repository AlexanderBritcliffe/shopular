(function() {
  'use strict';

  let expect = chai.expect;

  describe('item service', function (){
    let ItemService;

    beforeEach(module('inventory'));

    beforeEach(inject(function(_ItemService_){
      ItemService = _ItemService_;
    }));

    it('should be able to give us an array of items', function() {

      let result = ItemService.getAllItems();
      expect(result).to.be.an('array');
    });

    it('should be able to accept inventory entries containing all fields', function(){
      ItemService.addItem({name: 'hammer', price: 23, quantity: 10, color: 'black', discount: 5});
      let result = ItemService.getAllItems();
      expect(result.length).to.equal(1);
    });

    it('should not accept inventory entries without all of the required fields', function() {
      ItemService.addItem({wrong: 'no', color: 'red'});
      let result = ItemService.getAllItems();
      expect(result.length).to.equal(1);
    });

    it('should take an empty object', function(){
      ItemService.addItem({});
      let result = ItemService.getAllItems();
      expect(result.length).to.equal(1);

    });

    it('should accept inventory entry containing only the fields that are required', function(){
      ItemService.addItem({name: 'wrench', price: 30, quantity: 14});
      let result = ItemService.getAllItems();
      expect(result.length).to.equal(2);
    });

    it('should fail if a non-valid argument is entered', function(){
      InventoryService.addItem();
      expect(InventoryService.getInventory().length).to.equal(0);
    });
  });

}());
