var Task = function( difficultyLevel, urgencyRating, reward) {
  this.difficultyLevel = difficultyLevel;
  this.urgencyRating = urgencyRating;
  this.reward = reward;
  this.completed = false;
}

module.exports = Task;
