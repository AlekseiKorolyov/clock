let date = new Date();

class Clock {
       hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours()
       minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes()
       seconds = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds()

       constructor(elementId, offset, timeZone){
              this.elementId = elementId
              this.offset = offset
              this.timeZone = timeZone 
       }
}


setInterval(Clock, 1000);
const clock1 = new Clock("clock1", 0, "UTC")

// const clock = document.getElementById(clock);



