let dayHbd = document.getElementById("day");
let monthHbd = document.getElementById("month");
let nameHbd = document.getElementById("name");


// validate input
let closeNotif = document.getElementById("closeNotif");
closeNotif.addEventListener("click", function() {
    if(dayHbd.value == "" || monthHbd.value == "" || nameHbd.value == "") {
        alert("do not blank");
    }else { 
        // to save item into localstorage
        const notif = document.querySelector(".bgnotif");
        notif.classList.add("closed");
        localStorage.setItem("notif","true");
        localStorage.setItem("day",dayHbd.value);
        localStorage.setItem("month",monthHbd.value);
        localStorage.setItem("name",nameHbd.value);
        // show name in tittle
        
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

        nameHbd.value=getname;
        dayHbd.value=getday;
        monthHbd.value=getmonth;

        const title = document.querySelector("title");
        title.innerText=`Happy birthday ${localStorage.getItem("name")}`;
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
    
    const comingDate = dayHbd.value - date;
    const comingMonth = monthHbd.value - month;

    main.innerHTML=`
    <h1>Happy Birthday soon, ${nameHbd.value}</h1> 
    <h2>Your Birthday in ${comingDate} days : ${comingMonth} Month </h2>
    `;
    document.body.appendChild(main);
}