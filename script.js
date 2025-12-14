document.addEventListener("DOMContentLoaded", function() {
    let day = document.getElementById("day");
    let month = document.getElementById("month");
    let nameHbd = document.getElementById("name");

    day.addEventListener("change", function() {
        localStorage.setItem("day",day.value)
    });
    month.addEventListener("change", function() {
        localStorage.setItem("month",month.value)
    });

    nameHbd.addEventListener("change", function() {
        localStorage.setItem("name",nameHbd.value);
        const title = document.querySelector("title");
        title.innerText=`Happy birthday ${localStorage.getItem("name")}`;
    });

    if(localStorage.getItem("name") !== null) {
        const title = document.querySelector("title");
        title.innerText=`Happy Birthday ${localStorage.getItem("name")}`;
    };

    let closeNotif = document.getElementById("closeNotif");
    closeNotif.addEventListener("click", function() {
        if(day.value == "" || month.value == "" || nameHbd.value == "") {
            alert("do not blank");
        }else {
            const notif = document.querySelector(".bgnotif");
            notif.classList.add("closed");
            localStorage.setItem("notif","true");
        }
    });

    function alreadysee() {
        const notif = document.querySelector(".bgnotif");
        notif.style.display="none";
    }

    function loadItem() {
        if(localStorage.getItem("notif") == "true") {
            alreadysee();
        }
    }

    // initial load
    loadItem();
});
