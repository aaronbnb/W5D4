class Clock {
  constructor() {
    // 1. Create a Date object.
    // 2. Store the hours, minutes, and seconds.
    // 3. Call printTime.
    // 4. Schedule the tick at 1 second intervals.
    this.date = new Date();
    this.hours = this.date.getHours();
    this.minutes = this.date.getMinutes();
    this.seconds = this.date.getSeconds();
    this.printTime();
    // setInterval(() => { return this._tick(); }, 1000);
    setInterval(this._tick.bind(this), 1000);

  //   let that = this
  //   setInterval( function(){
  //     that._tick();
  //   }, 1000);
  }

  printTime() {
    // Format the time in HH:MM:SS
    // Use console.log to print it.
    console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
  }

  _tick() {
    // 1. Increment the time by one second.
    // 2. Call printTime .
    this.seconds += 1;
    this.printTime();
  }
}

const clock = new Clock();


function print(phrase) {
  console.log(phrase); // undefined
}
print("that")
