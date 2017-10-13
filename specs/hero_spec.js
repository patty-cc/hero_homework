var assert = require('assert');
var Hero = require('../hero.js')

describe('Hero', function() {

var hero;

  beforeEach( function() {
    hero = new Hero( 'Link', 100, 'Apple');
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
  })

  it('should be able to talk and say their name', function() {
    assert.strictEqual(hero.talk(), "My name is Link");
  })
})
