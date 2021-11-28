function Time_now() {
  var Time = document.querySelector(".Time");
  var AM = document.querySelector(".AM");
  var dt = new Date();
  var hr = dt.getHours();
  var min = dt.getMinutes();
  var sec = dt.getSeconds();

  if (hr > 12) {
    AM = "PM";
  }

  if (hr == 12) {
    AM = "PM";
  }

  if (hr < 12) {
    AM = "AM";
  }

  if (hr > 12) {
    hr = hr - 12;
  }

  if (hr < 10) {
    hr = "0" + hr;
  }

  if (min < 10) {
    min = "0" + min;
  }

  if (hr > 6 && hr < 18) {
    Day_Mode();
  } else {
    Night_Mode();
  }

  if (sec < 10) {
    sec = "0" + sec;
  }
  Time.innerHTML = `${hr}:${min}:${sec}  ${AM}`;

  setTimeout(Time_now, 1000);
}

function Night_Mode() {
  var Body = document.querySelector("#Body");
  Body.style.background = "black";
  Body.style.color = "White";
}

function Day_Mode() {
  var Body = document.querySelector("#Body");
  Body.style.background = "white";
  Body.style.color = "black";
}