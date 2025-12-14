document.addEventListener("DOMContentLoaded", function() {
    let day = document.getElementById("day");
    let month = document.getElementById("month");
    let nameHbd = document.getElementById("name");

    // save in local storage when input
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

    // load name to title from local storage
    if(localStorage.getItem("name") !== null) {
        const title = document.querySelector("title");
        title.innerText=`Happy Birthday ${localStorage.getItem("name")}`;
    };

    // validate input
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

    // show notification once time
    function alreadysee() {
        const notif = document.querySelector(".bgnotif");
        notif.className="closed";
    }
    function loadItem() {
        if(localStorage.getItem("notif") == "true") {
            alreadysee();
        }
    }

    // initial load
    loadItem();

    let main = document.createElement("main");
    main.innerHTML=`
    <h1>Happy Birthday, ${localStorage.getItem("name")}</h1>
    `;
    document.body.appendChild(main)
});