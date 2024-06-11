
class displai {
    constructor(hours, minutes, seconds) {
        this.hours=date.getHours();
        this.minutes=getMinutes();
        this.seconds=getSeconds();
    }
}

let date = new date
alert(date);

const Element = document.getElementById('clock');

class clock {
    constructor(elementId, offset, timeZone) {
        this.elementId=elementId;
        this.offset=offset;
        this.timeZone=timeZone;
    }
}

let clock1 = new clock("clock1", 0, "UTC");
let clock2 = new clock("clock2", 180, "Europe/Minsk");
console.log(clock1);
console.log(clock2);

element.innerHTML = "clock"