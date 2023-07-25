const minHand = document.querySelector('.min-hand');
const secHand = document.querySelector('.sec-hand');
const hourHand = document.querySelector('.hour-hand');

let date = null;

setInterval(()=>{
 date = new Date();
const hoursRotation = date.getHours() * 30;
const minRotation = date.getMinutes() * 6;
const secRotation = date.getSeconds() * 6;
hourHand.style.transform = `rotate(${hoursRotation}deg)`; 
minHand.style.transform = `rotate(${minRotation}deg)`; 
secHand.style.transform = `rotate(${secRotation}deg)`; 

},1000)