
const Element = document.getElementById('clock');

class Clock {
    constructor(elementId, offset, timeZone) {
        this.elementId=elementId;
        this.offset=offset;
        this.timeZone=timeZone;
    }
}

let clock1 = new Clock("clock1", 0, "UTC");
let clock2 = new Clock("clock2", 180, "Europe/Minsk");
console.log(clock1);
console.log(clock2);