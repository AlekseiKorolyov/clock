class Clock {
    constructor(elId) {
        this.elementId =  elId;
        // this.offset = offset;
        // this.timeZone = timeZone;
    }
    
    time() {
        let date = new Date();
        let hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
        let min = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
        let sec = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
        
        document.getElementById(this.elementId).innerHTML = `${hours}:${min}:${sec}`;
        
    }
    
}

const clock1 = new Clock("clock1");
// let clock2 = new Clock("clock2");
clock1.time();
// clock2.time();
setInterval(time, 1000);
// setInterval(clock2.time, 1000);