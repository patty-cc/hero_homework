var Task = function( difficultyLevel, urgencyRating, reward, completed) {
  this.difficultyLevel = difficultyLevel;
  this.urgencyRating = urgencyRating;
  this.reward = reward;
  this.completed = completed;
}

module.exports = Task;
