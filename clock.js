const clockContainer = document.querySelector(".js-clock"),
  clockH = clockContainer.querySelector(".clock__h"),
  clockM = clockContainer.querySelector(".clock__m"),
  clockS = clockContainer.querySelector(".clock__s");

function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();

  clockH.innerText = `${hours < 10 ? `0${hours}` : hours}`
  clockM.innerText = `${minutes < 10 ? `0${minutes}` : minutes}`
  clockS.innerText = `${seconds < 10 ? `0${seconds}` : seconds}`
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();