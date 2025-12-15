let dayHbd = document.getElementById("day").value;
let monthHbd = document.getElementById("month").value;
let nameHbd = document.getElementById("name").value;


// validate input
let closeNotif = document.getElementById("closeNotif");
closeNotif.addEventListener("click", function() {
    if(dayHbd == "" || monthHbd == "" || nameHbd == "") {
        alert("do not blank");
    }else { 
        // to save item into localstorage
        const notif = document.querySelector(".bgnotif");
        notif.classList.add("closed");
        localStorage.setItem("notif","true");
        localStorage.setItem("day",dayHbd);
        localStorage.setItem("month",monthHbd);
        localStorage.setItem("name",nameHbd);
        // show name in tittle
        const title = document.querySelector("title");
        title.innerText=`Happy birthday ${localStorage.getItem("name")}`;
        loadMain();
    }
});

// show notification once time
function alreadyseeNotif() {
    const notif = document.querySelector(".bgnotif");
    notif.className="closed";
}
function loadItem() {
    if(localStorage.getItem("notif") == "true") {
        alreadyseeNotif();
        const getname = localStorage.getItem("name");
        const getday = localStorage.getItem("day");
        const getmonth = localStorage.getItem("month");
        nameHbd=getname;
        dayHbd=getday;
        monthHbd=getmonth;
        loadMain();
    }
}

// initial load
document.addEventListener("DOMContentLoaded", function(){
    loadItem();
})


function loadMain() {
    let main = document.createElement("main");
    const now = new Date();
    
    const date = now.getDate();
    const month = now.getMonth() + 1;
    const hour = now.getHours();

    main.innerHTML=`
    <h1>Happy Birthday soon, ${nameHbd}</h1> 
    <h2>Your Birthday in ${dayHbd - date} days : ${monthHbd - month} Month </h2>
    <h2>Enjoy your days!</h2>
    `;
    document.body.appendChild(main);
}