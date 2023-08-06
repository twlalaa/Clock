"use strict";

const secondPointer = document.getElementById("second");
const minutePointer = document.getElementById("minute");
const hourPointer = document.getElementById("hour");

const secondText = document.getElementById("d__second");
const minuteText = document.getElementById("d__minute");
const hourText = document.getElementById("d__hour");

const showTime = () => {
  const time = new Date();

  const secondDeg = time.getSeconds() * 6;
  const minuteDeg = time.getMinutes() * 6;
  const hourDeg = (time.getHours() % 12) * 30 + time.getMinutes() / 2;

  secondPointer.style.rotate = `${secondDeg}deg`;
  minutePointer.style.rotate = `${minuteDeg}deg`;
  hourPointer.style.rotate = `${hourDeg}deg`;

  secondText.innerText = String(time.getSeconds()).padStart(2, "0");
  minuteText.innerText = String(time.getMinutes()).padStart(2, "0");
  hourText.innerText = String(time.getHours()).padStart(2, "0");
};

showTime();

setInterval(showTime, 1000);
