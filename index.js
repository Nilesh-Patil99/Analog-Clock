let sechand = document.querySelector(".shand")
let hourhand = document.querySelector(".hhand")
let minhand = document.querySelector(".mhand")
let now;
setTime();
setInterval(setTime, 1000)

function setTime() {
   now = new Date()


let sec= now.getSeconds()
let secdeg= sec*6;
sechand.style.transform= `rotate(${secdeg}deg)`;


let min= now.getMinutes()
let mindeg= min*6;
minhand.style.transform= `rotate(${mindeg}deg)`;



let hrs= now.getHours()
let hrsdeg = hrs*30;
if(hrs>12){
    hrs= hrs-12;
}
hourhand.style.transform= `rotate(${hrsdeg}deg)`;

switch (min){

case (min>12):
   
hourhand.style.transform= `rotate(${hrsdeg}deg)`;
break;

case  (12<min<24):
    hrsdeg= hrsdeg+6;
hourhand.style.transform= `rotate(${hrsdeg}deg)`;
break;

case  (24<min<36): 
hrsdeg= hrsdeg+12;
hourhand.style.transform= `rotate(${hrsdeg}deg)`;
break;

case  (36<min<48):
    hrsdeg= hrsdeg+18;
hourhand.style.transform= `rotate(${hrsdeg}deg)`;
break;
case  (min>48):
    hrsdeg= hrsdeg+24;
hourhand.style.transform= `rotate(${hrsdeg}deg)`;
break;

}

}




