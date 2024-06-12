
// const time = document.getElementById('clock');


// class clock {
//     constructor(elementId, offset, timeZone) {
//         this.elementId=elementId;
//         this.offset=offset;
//         this.timeZone=timeZone;
//     }
// }

// let clock1 = new clock("clock1", 0, "UTC");
// let clock2 = new clock("clock2", 180, "Europe/Minsk");


// time.innerHTML = "clock1"

// let date = new Date();
// let hours = date.getHours();
// let minutes = date.getMinutes();
// let seconds = date.getSeconds();
// alert ( hours );

function clock(){
    let date = new Date(),
           hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours(),
           minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes(),
           seconds = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();
    document.getElementById('clock').innerHTML = hours + ':' + minutes + ':' + seconds;
  }
  setInterval(clock, 1000);
  clock();