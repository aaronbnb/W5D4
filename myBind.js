Function.prototype.myBind = function(obj) {
  // return an arrow function that captures this and context
  //  and calls Function.prototype.apply(this)
  return () => this.apply(obj); // turnOn.apply(lamp)
}


class Lamp {
  constructor() {
    this.name = "a lamp";
    // context
  }
}

const turnOn = function() {
   console.log("Turning on " + this.name);
}

const lamp = new Lamp();

turnOn(); // should not work the way we want it to

const boundTurnOn = turnOn.bind(lamp);
const myBoundTurnOn = turnOn.myBind(lamp);


// boundTurnOn(); // should say "Turning on a lamp"
myBoundTurnOn(); // should say "Turning on a lamp"
