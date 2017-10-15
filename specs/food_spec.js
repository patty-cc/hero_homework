var assert = require('assert');
var Food = require('../food.js')

describe('Food', function() {
   var food;

   beforeEach( function() {
     food = new Food( 'Chicken');
   });

   it('should have a name', function() {
     assert.strictEqual(food.name, 'Chicken');
   });

   it('should have a replenishment value', function() {
     assert.strictEqual(food.replenValue, 10);
   });
})
