// Complete and add needed car properties:


const car = {

  speed : 0 ,
  minutes : 0 ,
  distances : 0 ,



  start: function () {
    this.speed = 0;
    this.minutes = 0;
    this.distances = 0;
    return this ;
  },
  changeSpeed : function (speed) {
    this.speed = speed;
    console.log("changeSpeed",this.distances);
    return this;

  },
  drive : function(minutes) {
    this.minutes = minutes;
    this.distances = this.distances + ((this.speed * this.minutes)/60);
    console.log("drive", this.distances);
    return this;
  },

  showDistance : function(distances) {
    this.distances = console.log(`${this.distances} Km`);
    return this;
  },


};

car.start().changeSpeed(130).drive(45).changeSpeed(50).drive(30).changeSpeed(90).drive(80).showDistance();

module.exports = car;
