class Clock {
    constructor(elementId, offset, timeZone) {
        this.elementId = elementId;
        this.offset = offset;
        this.timeZone = timeZone;
        this.start();
    }

    updateTime() {
        const now = new Date();
        const utcTime = now.getTime() + (now.getTimezoneOffset() * 60000);
        const localTime = new Date(utcTime + (this.offset * 60000));

        const options = { hour: '2-digit', minute: '2-digit', second: '2-digit', timeZone: this.timeZone };
        const timeString = localTime.toLocaleTimeString(options, { hour12: false });

        document.getElementById(this.elementId).innerHTML = `${timeString} ${this.timeZone}`;
    }

    start() {
        this.updateTime();
        setInterval(() => this.updateTime(), 1000);
    }
}


const utcClock = new Clock('clock1', 0, 'UTC');
const minskClock = new Clock('clock2', 180, 'Europe/Minsk');

