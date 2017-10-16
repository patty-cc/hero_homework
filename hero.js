var Hero = function(name, healthValue, favouriteFood ){
  this.name = name;
  this.healthValue = healthValue;
  this.favouriteFood = favouriteFood;
  this.tasks = [];
  this.talk = function(){
    return "My name is Link";
  };

  Hero.prototype.eatFood = function ( food ) {
    if( this.favouriteFood === food.name){
      return this.healthValue += (food.replenValue * 1.5);
    }
    return this.healthValue += food.replenValue;
  };

  Hero.prototype.addTask = function ( task ) {
    this.tasks.push(task);
  };

  Hero.prototype.sortUrgency = function(  ) {
    this.tasks.sort(function( a, b ) {
      return a.urgencyRating - b.urgencyRating;
    });
  }

  Hero.prototype.taskStatus = function(task) {
    var completedTasks = [];
    if( this.completed === true )
    completedTasks.push(task)
  }


};

module.exports = Hero;
