const hour = document.querySelector(".hour");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const type = document.querySelector(".type");

const day = document.querySelector(".day");
const tarikh = document.querySelector(".tarikh");
const month = document.querySelector(".month");
const year = document.querySelector(".year");

const daylist = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday ",
  "Thursday",
  "Friday",
  "Saturday",
];

const montharray = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

// "July 21, 1983 01:15:10"
setInterval(() => {
  const date = new Date();
  let getdate = date.getHours();

  if (12 < getdate) {
    getdate -= 12;
    hour.innerText = getdate;
    type.innerText = "PM";
  } else {
    hour.innerText = getdate;
    type.innerText = "AM";
  }

  minutes.innerText = date.getMinutes();
  seconds.innerText = date.getSeconds();
  day.innerText = daylist[date.getDay()];
  tarikh.innerText = date.getDate();
  
  month.innerText = montharray[date.getMonth()];
  year.innerText = date.getFullYear();

}, 1000);
