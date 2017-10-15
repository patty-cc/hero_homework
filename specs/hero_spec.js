var assert = require('assert');
var Hero = require('../hero.js');
var Food = require('../food.js');
var Task = require('../task.js');

describe('Hero', function() {

var hero;
var foodA;
var foodB;
var taskA;
var taskB;


  beforeEach( function() {
    hero = new Hero( 'Link', 100, 'Apple' );

    foodA = new Food( 'Chocolate' );
    foodB = new Food( 'Crisps' );

    taskA = new Task( 3, 4, 150 );
    taskB = new Task( 5, 1, 250 );
    taskC = new Task( 4, 3, 100 );
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
    newHero.eatFood( foodA );
    assert.strictEqual(newHero.healthValue, 90);
  });

  it('should replenish extra energy if food is favourite', function() {
    var newHero = new Hero('Solid Snake', 85, 'Crisps');
    newHero.eatFood( foodB );
    assert.strictEqual(newHero.healthValue, 100);
  });

  it('should be able to add a task to tasks', function() {
    hero.addTask( taskA );
    hero.addTask( taskB );
    assert.strictEqual( hero.tasks.length, 2 );
  });

  it('should be able to sort tasks by urgency', function() {
    hero.addTask( taskA );
    hero.addTask( taskB );
    hero.addTask( taskC );
    hero.sortUrgency();
    assert.deepEqual(hero.tasks, [ taskB, taskC, taskA ]);
  });
})
