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
});

// closing notification function
function closeNotif() {
    document.querySelector(".bgnotif").classList.add("closed");
    setTimeout( () => {
        document.querySelector(".bgnotif").style.display="none"
    },500)
}