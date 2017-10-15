var assert = require('assert');
var Task = require('../task.js');

describe( 'Task', function() {

  var task;

  beforeEach( function() {
    task = new Task( 2, 5, 300);
  });

  it('should have a difficulty level', function() {
    assert.strictEqual( task.difficultyLevel, 2 );
  });

  it('should have a urgency rating', function() {
    assert.strictEqual( task.urgencyRating, 5 );
  });

  it('should have a reward', function() {
    assert.strictEqual( task.reward, 300 );
  });

  it('should have a status if completed', function() {
    assert.strictEqual( task.completed, false);
  });
})
