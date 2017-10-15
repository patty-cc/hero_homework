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
};

module.exports = Hero;
