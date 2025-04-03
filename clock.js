class Clock {
    constructor(id) {
        this.elementId = id;
        // this.offset = offset;
        // this.timeZone = timeZone;
    }


    getTime() {
        let date = new Date();
        let h = date.getUTCHours() < 10 ? "0" + date.getUTCHours() : date.getUTCHours();
        let m = date.getUTCMinutes() < 10 ? "0" + date.getUTCMinutes() : date.getUTCMinutes();
        let s = date.getUTCSeconds() < 10 ? "0" + date.getUTCSeconds() : date.getUTCSeconds();

         document.getElementById(this.elementId).innerHTML = `${h}:${m}:${s}`;
    }


    start() {
        this.getTime();
        setInterval(() => this.getTime(), 1000);
    }
}

const clock1 = new Clock("clock1");
const clock2 = new Clock("clock2");
clock1.start();
clock2.start();
