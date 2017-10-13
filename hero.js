var Hero = function(name, healthValue, favouriteFood ){
  this.name = name;
  this.healthValue = healthValue;
  this.favouriteFood = favouriteFood;
  this.tasks = [];
  this.talk = function(){
    return "My name is Link";
  };
};

module.exports = Hero;
