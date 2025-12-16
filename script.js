let dayHbd = document.getElementById("day");
let monthHbd = document.getElementById("month");
let nameHbd = document.getElementById("name");

let closeBtn = document.getElementById("closeBtn");

closeBtn.addEventListener("click", function () {
  const day = Number(dayHbd.value);
  const month = Number(monthHbd.value);
  const name = nameHbd.value;

  if (!dayHbd.value || !monthHbd.value || !name) {
    alert("do not blank");
    return;
  }

  if (isNaN(day) || day < 1 || day > 31) {
    alert("wrong day input");
    return;
  }

  if (isNaN(month) || month < 1 || month > 12) {
    alert("wrong month input");
    return;
  }

  if (/\d/.test(name)) {
    alert("no number on name...");
    return;
  }

  closeNotif();
  saveTolocalStorage();
  initialLoad();
  localStorage.setItem("notif","true");
  hbdOrNo();
});

// closing notification function
function closeNotif() {
    document.querySelector(".bgnotif").classList.add("closed");
    setTimeout( () => {
        document.querySelector(".bgnotif").style.display="none"
    },500)
}
// see notification just 1 time
function onceSeeNotif(){
    if(localStorage.getItem("notif") == "true"){
        closeNotif();
    }
}
// what need to load when re open website
function initialLoad(){
    document.title = `Happy Birthday ${nameHbd.value}`;
};




const now = new Date();
const nowDay = now.getDate();
const nowMonth = now.getMonth() + 1;
function hbdOrNo(){
  const day = Number(dayHbd.value);
  const month = Number(monthHbd.value);
  if (day === nowDay && month === nowMonth){
    hbdToday();
    startConventi();
  } else {
    waitingHbd();
  }
}



let newEle = document.createElement("main");
function waitingHbd(){
  const day = Number(dayHbd.value);
  const month = Number(monthHbd.value);

  const dayLeftNum = Math.max(0, day - nowDay);
  const monthLeftNum = Math.max(0, month - nowMonth);

  const dayLeftText = dayLeftNum > 0 ? `${dayLeftNum} days` : "";
  const monthLeftText = monthLeftNum > 0 ? `${monthLeftNum} months` : "";

  newEle.innerHTML = `
    <h1>Hi, ${nameHbd.value}</h1>
    <h2>Your birthday is not today</h2>
    <h2>Countdown ${dayLeftText || ": wait next year"} ${monthLeftText}</h2>
  `;

  if (!document.body.contains(newEle)) {
    document.body.appendChild(newEle);
  }
}

function hbdToday(){
  newEle.innerHTML=`
  <h1>Happy Birthday, ${nameHbd.value}!</h1>
  <h2>Wishing you a day full of joy and laughter!</h2>
  <h2>Many happy returns of the day!</h2>
  <img src="img/birthday-cake.gif" alt="birthday cake gif">
  `;
  document.body.appendChild(newEle);
}


// local storage funtion
function saveTolocalStorage(){
    localStorage.setItem("dayHbd",dayHbd.value);
    localStorage.setItem("monthHbd",monthHbd.value);
    localStorage.setItem("nameHbd",nameHbd.value);
}
function localStorageLoad(){
    dayHbd.value = localStorage.getItem("dayHbd") || "";
    monthHbd.value = localStorage.getItem("monthHbd") || "";
    nameHbd.value = localStorage.getItem("nameHbd") || "";
}

// when re open website, what will we load
document.addEventListener("DOMContentLoaded", function(){
    onceSeeNotif();
    localStorageLoad();
    initialLoad();
    hbdOrNo();
})


// conventi animation

function startConventi(){
  setInterval(()=>{
    for (let i = 0; i < 100; i++) {
      createConfetti();
    }
  },2000);
};

const colors = ["#ff4d4d", "#ffd93d", "#6bcf63", "#4d79ff", "#ff6ec7"];

function createConfetti() {
  const confetti = document.createElement("div");
  confetti.classList.add("confetti");

  // posisi horizontal random
  confetti.style.left = Math.random() * window.innerWidth + "px";

  // warna random
  confetti.style.backgroundColor =
    colors[Math.floor(Math.random() * colors.length)];

  // ukuran random
  const size = Math.random() * 8 + 6;
  confetti.style.width = size + "px";
  confetti.style.height = size + "px";

  // durasi jatuh random
  const duration = Math.random() * 3 + 2;
  confetti.style.animationDuration = duration + "s";

  document.body.appendChild(confetti);

  // hapus setelah animasi selesai
  setTimeout(() => {
    confetti.remove();
  }, duration * 1000);
};