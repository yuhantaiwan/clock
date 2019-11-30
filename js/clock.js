const clockFace = document.querySelector(".clock-face");
for(let i=0; i<60; i++) {
  let timeScale = document.createElement("div");
  (i%5==0)?timeScale.classList.add("long-line"):timeScale.classList.add("short-line");;
  timeScale.style.transform = `translate(-50%) rotate(${i*6}deg)`;
  clockFace.appendChild(timeScale);
}

const secondsHand = document.querySelector(".sec-hand");
const minutesHand = document.querySelector(".min-hand");
const hoursHand = document.querySelector(".hour-hand");
function setTime() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = seconds*(360/60)-90 ;
  secondsHand.style.transform = `translateY(50%) rotate(${secondsDegrees}deg)`;
  const minutes = now.getMinutes();
  const minutesDegrees = minutes*(360/60)+(seconds*(6/60))-90;
  minutesHand.style.transform = `translateY(50%) rotate(${minutesDegrees}deg)`;
  const hours = now.getHours();
  const hoursDegrees = hours*(360/12)+(minutes*(30/60))-90;
  hoursHand.style.transform = `translateY(50%) rotate(${hoursDegrees}deg)`;
  // console.log(secondsDegrees);
}
setTime();
setInterval(setTime, 1000);