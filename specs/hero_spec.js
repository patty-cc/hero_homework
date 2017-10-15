var assert = require('assert');
var Hero = require('../hero.js');
var Food = require('../food.js');

describe('Hero', function() {

var hero;
var food;

  beforeEach( function() {
    hero = new Hero( 'Link', 100, 'Apple');
    foodA = new Food( 'Chocolate');
    foodB = new Food( 'Crisps');
  });

  it('should have a name', function() {
    assert.strictEqual(hero.name, 'Link');
  });

  it('should have a health value', function() {
    assert.strictEqual(hero.healthValue, 100);
  });

  it('should have a favourite food', function() {
    assert.strictEqual(hero.favouriteFood, 'Apple');
  });

  it('should have an empty task array', function() {
    assert.strictEqual(hero.tasks.length, 0 );
  });

  it('should be able to talk and say their name', function() {
    assert.strictEqual(hero.talk(), "My name is Link");
  });

  it('should replenish energy when eating food', function() {
    var newHero = new Hero( 'Solid Snake', 80, 'Crisps');
    newHero.eatFood( foodA);
    assert.strictEqual(newHero.healthValue, 90);
  });

  it('should replenish extra energy if food is favourite', function() {
    var newHero = new Hero('Solid Snake', 85, 'Crisps');
    newHero.eatFood( foodB );
    assert.strictEqual(newHero.healthValue, 100);
  });
})
